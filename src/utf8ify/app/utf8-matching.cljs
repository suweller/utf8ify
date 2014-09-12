(ns utf8ify.app.utf8-matching
  (:require [utf8ify.app.core :as core]))

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

(def pattern-map
  (into {}
        (map (fn [[ch art]] [(to-bits art) ch])
             (seq character-ascii-art))))

(def find-utf8-character
  (partial core/find-character pattern-map))
