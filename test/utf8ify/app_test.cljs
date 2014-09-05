(ns utf8ify.app-test
  (:require [cemerick.cljs.test :as t]
            [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
            [utf8ify.app.core :as app])
  (:require-macros [cemerick.cljs.test :refer (is deftest)]
                   [cljs.core.async.macros :as m :refer [go]]))

(deftest dummy
  (is (= 1 1)))
; (deftest draw-on-receiving-start
;   (let [in (chan) out (chan)
;         filter-draw-events! (fn [in out] )]
;     (go
;       (do
;         (filter-draw-events! in out)
;         (>! in [:start])
;         (is [:start _] (<! out))))))

; [:start :this :that :stop]
; [:not-this :start :this :that :stop :not-that]
