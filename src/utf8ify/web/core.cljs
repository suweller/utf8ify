(ns utf8ify.web.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [utf8ify.app.core :as app])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(def grid-size 506)
(def app-state (atom
                 {:cells (take grid-size (map (fn [n] {:id n :on false}) (iterate inc 0)))}))

(defn grid [data owner]
  (om/component
    (let [cells (:cells data) mouse-events app/mouse-events]
      (apply dom/div
             #js {:className "grid"
                  :onMouseDown #(xy-message mouse-events :start %)
                  :onMouseMove #(xy-message mouse-events :move %)
                  :onMouseUp #(xy-message mouse-events :stop %)}
             (map (fn [cell] (dom/div #js {:data-id (:id cell) :data-on (:on cell) :className "cell"})) cells)))))

(defn xy-message [ch msg-name xy-obj]
  (put! ch [msg-name {:x (.-pageX xy-obj) :y (.-pageY xy-obj)}]))

(om/root grid app-state
         {:target (. js/document (getElementById "app")) })

(defn- String->Number [s]
  (js/parseFloat s))

(defn activate-cell [id data]
  (assoc data
         :cells (->> (:cells data)
                     (map (fn [cell] (assoc cell :on (or (:on cell) (= (:id cell) id))))))))

(go
  (loop [[msg-name {x :x y :y}] (<! app/draw-events)]
    (let [cell (.elementFromPoint js/document x y)
          data-id (.-id (.-dataset cell))]
      (swap! app-state #(activate-cell (String->Number data-id) %)))
    (recur (<! app/draw-events))))
