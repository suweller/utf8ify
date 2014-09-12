(ns utf8ify.web.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [utf8ify.app.core :as app]
    [utf8ify.app.utf8-matching :as match])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(def grid-size 49)
(def app-state (atom
                 {:cells (take grid-size (map (fn [n] {:id n :on false}) (iterate inc 0)))
                  :exact-match "␣"}))

(defn grid [data owner]
  (def render-grid
    (let [push-event (partial xy-message app/mouse-events)]
      (partial dom/div #js {:className "grid"
                            :onMouseDown #(push-event :start %)
                            :onMouseMove #(push-event :move %)
                            :onMouseUp #(push-event :stop %)})))
  (defn render-cell [cell]
    (dom/div #js {:data-id (:id cell)
                  :data-on (:on cell)
                  :className "cell"}))
  (om/component (apply render-grid
                       (map render-cell (:cells data)))))

(defn xy-message [ch msg-name xy-obj]
  (put! ch [msg-name {:x (.-pageX xy-obj) :y (.-pageY xy-obj)}]))

(defn- String->Number [s]
  (js/parseFloat s))

(defn activate-cell [id data]
  (assoc data
         :cells (->> (:cells data)
                     (map (fn [cell] (assoc cell :on (or (:on cell) (= (:id cell) id))))))))

(defn utf8ify [data]
  (assoc data
         :exact-match (->> (:cells data)
                           (map (fn [cell] (if (:on cell) 1 0)))
                           (match/find-utf8-character))))

(defn listen-for-matches []
  (go
    (loop [[msg-name _] (<! app/match-events)]
      (swap! app-state utf8ify)
      (recur (<! app/match-events)))))

(defn main []
  (app/publish-draw-events!)
  (listen-for-matches)
  (go
    (loop [[msg-name {x :x y :y}] (<! app/draw-events)]
      (let [cell (.elementFromPoint js/document x y)
            data-id (.-id (.-dataset cell))]
        (swap! app-state #(activate-cell (String->Number data-id) %)))
      (recur (<! app/draw-events)))))

(main)
(om/root grid
         app-state
         {:target (. js/document (getElementById "app")) })
(om/root (fn [app-state owner]
           (om/component (dom/span nil (:exact-match app-state))))
         app-state
         {:target (. js/document (getElementById "result")) })
