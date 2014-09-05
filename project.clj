(defproject utf8ify "0.1.0-SNAPSHOT"
  :description "Match your drawing with UTF-8 characters"
  :url "https://suweller.github.io/utf8ify"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [figwheel "0.1.3-SNAPSHOT"]
                 [crate "0.2.4"]
                 [om "0.7.1"]]

  :jvm-opts ["-Xmx1G"]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.3-SNAPSHOT"]
            [com.cemerick/clojurescript.test "0.3.1"]
            [com.cemerick/austin "0.1.4"]]

  :figwheel {
             :http-server-root "public"
             :port 3449
             :css-dirs ["resources/public/css"]}

  :cljsbuild {
              :builds [
                       {:id "dev"
                        :source-paths ["src/utf8ify" "src/figwheel" "src/brepl"]
                        :compiler {
                                   :output-to "resources/public/utf8ify.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "test"
                        :source-paths ["src/utf8ify" "test"]
                        :notify-command ["phantomjs" :cljs.test/runner "utf8ify_test.js"]
                        :compiler {
                                   :output-to "utf8ify_test.js"
                                   :optimizations :whitespace
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
