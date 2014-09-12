(ns utf8ify.app.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(def mouse-events (chan))
(def draw-events (chan))

(defn publish-draw-events! []
  (go
    (loop [[msg-name _ :as msg] (<! mouse-events)
           drawing false]
      (let [start (= msg-name :start)
            continue (not (= msg-name :stop))
            draw (and (or drawing start) continue)]
        (if draw (>! draw-events msg))
        (recur (<! mouse-events) draw)))))

(defn find-character [pattern-map drawing]
  (get pattern-map drawing))
