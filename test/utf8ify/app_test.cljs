(ns utf8ify.app-test
  (:require [cemerick.cljs.test :as t]
            [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
            [utf8ify.app.core :as app]
            [utf8ify.app.utf8-matching :as utf8])
  (:require-macros [cemerick.cljs.test :refer (is deftest)]
                   [cljs.core.async.macros :as m :refer [go]]))

(defn char-to-bits [ch]
  (utf8/to-bits (get utf8/character-ascii-art ch)))

(def visible-space "␣")
(def up-arrow "↑")
(def right-arrow "→")
(def cross "✝")

(deftest char-to-bits-finds-visible-whitespace
  (is (= [0 0 0 0 0 0 0
          0 0 0 0 0 0 0
          0 0 0 0 0 0 0
          0 0 0 0 0 0 0
          0 0 0 0 0 0 0
          0 1 0 0 0 1 0
          0 1 1 1 1 1 0] (char-to-bits visible-space))))

(deftest find-utf8-char-for-visible-space
  (is (= visible-space (utf8/find-utf8-character (char-to-bits visible-space)))))

(deftest find-utf8-char-for-right-arrow
  (is (= right-arrow (utf8/find-utf8-character (char-to-bits right-arrow)))))

(deftest find-utf8-char-for-up-arrow
  (is (= up-arrow (utf8/find-utf8-character (char-to-bits up-arrow)))))

(deftest find-utf8-char-for-cross
  (is (= cross (utf8/find-utf8-character (char-to-bits cross)))))
