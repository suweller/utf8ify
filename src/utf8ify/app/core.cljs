(ns utf8ify.app.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(def mouse-events (chan))
(def draw-events (chan))

(go
  (loop [[msg-name _ :as msg] (<! draw-events)]
    (.log js/console msg-name)
    (recur (<! draw-events))))
