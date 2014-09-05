(ns utf8ify.ui
  (:require
    [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [utf8ify.core :as core])
  (:use-macros [crate.def-macros :only [defpartial]])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(def grid-size 64)
(def app-state (atom
                 {:cells (take grid-size (map (fn [n] {:id n}) (iterate inc 0)))
                  :mouse-events (chan)
                  :draw-events (chan)} ))

(defn grid [data owner]
  (om/component
    (let [cells (:cells data) mouse-events (:mouse-events data)]
      (apply dom/div
             #js {:className "grid"
                  :onMouseDown #(xy-message mouse-events :start %)
                  :onMouseMove #(xy-message mouse-events :move %)
                  :onMouseUp #(xy-message mouse-events :stop %)
                  :onMouseOut #(xy-message mouse-events :stop %)}
             (map (fn [cell] (dom/div #js {:data-id (:id cell) :className "cell"})) cells)))))

(om/root grid @app-state
              {:target (. js/document (getElementById "app")) })

(defn xy-message [ch msg-name xy-obj]
  (put! ch [msg-name {:x (.-pageX xy-obj) :y (.-pageY xy-obj)}]))

