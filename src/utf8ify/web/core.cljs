(ns utf8ify.web.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [utf8ify.app.core :as app])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(def grid-size 64)
(def app-state (atom
                 {:cells (take grid-size (map (fn [n] {:id n :on false}) (iterate inc 0)))}))

(defn grid [data owner]
  (om/component
    (let [cells (:cells data) mouse-events app/mouse-events]
      (apply dom/div
             #js {:className "grid"
                  :onMouseDown #(xy-message mouse-events :start %)
                  :onMouseMove #(xy-message mouse-events :move %)
                  :onMouseUp #(xy-message mouse-events :stop %)
                  :onMouseLeave #(xy-message mouse-events :stop %)}
             (map (fn [cell] (dom/div #js {:data-id (:id cell) :data-on (:on cell) :className "cell"})) cells)))))

(defn xy-message [ch msg-name xy-obj]
  (put! ch [msg-name {:x (.-pageX xy-obj) :y (.-pageY xy-obj)}]))

(om/root grid app-state
              {:target (. js/document (getElementById "app")) })

(go
  (loop [[msg-name {x :x y :y}] (<! app/draw-events)]
    (let [cell (.elementFromPoint js/document x y)
          data-id (.-id (.-dataset cell))]
      (.log js/console (str "Cell: " data-id))
      (activate-cell data-id))
    (recur (<! app/draw-events))))

(defn activate-cell [id]
  (swap! app-state (fn [data]
         (let [cells (:cells data)
               updated-cells (map (fn [cell] (assoc cell {:on (or (:on cell) (= (:id cell) id))})) cells)]
           (assoc data {:cells updated-cells})))))
