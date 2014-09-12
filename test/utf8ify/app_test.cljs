(ns utf8ify.app-test
  (:require [cemerick.cljs.test :as t]
            [cljs.core.async :as async :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
            [utf8ify.app.core :as app])
  (:require-macros [cemerick.cljs.test :refer (is deftest)]
                   [cljs.core.async.macros :as m :refer [go]]))

(def character-ascii-art
  {"↑" ["...*..."
        "..***.."
        ".*.*.*."
        "...*..."
        "...*..."
        "...*..."
        "...*..."]

   "✝" ["...*..."
        "...*..."
        ".*****."
        "...*..."
        "...*..."
        "...*..."
        "...*..."]

   "␣" ["......."
        "......."
        "......."
        "......."
        "......."
        ".*...*."
        ".*****."]

   "→" ["......."
        "....*.."
        ".....*."
        "*******"
        ".....*."
        "....*.."
        "......."]})

(defn to-bits [ascii-art]
  (defn ch-to-bit [ch]
    (if (= "*" ch) 1 0))
  (flatten
    (map (fn [line] (map ch-to-bit line))
         ascii-art)))

(defn char-to-bits [ch]
  (to-bits (get character-ascii-art ch)))

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

(def pattern-map
  (into {}
        (map (fn [[ch art]] [(to-bits art) ch])
             (seq character-ascii-art))))

(defn find-utf8-character [drawing]
  (get pattern-map drawing))

(deftest find-utf8-char-for-visible-space
  (is (= visible-space (find-utf8-character (char-to-bits visible-space)))))

(deftest find-utf8-char-for-right-arrow
  (is (= right-arrow (find-utf8-character (char-to-bits right-arrow)))))

(deftest find-utf8-char-for-up-arrow
  (is (= up-arrow (find-utf8-character (char-to-bits up-arrow)))))

(deftest find-utf8-char-for-cross
  (is (= cross (find-utf8-character (char-to-bits cross)))))

