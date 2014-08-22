// Compiled by ClojureScript 0.0-2277
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__12938,args){var map__12940 = p__12938;var map__12940__$1 = ((cljs.core.seq_QMARK_.call(null,map__12940))?cljs.core.apply.call(null,cljs.core.hash_map,map__12940):map__12940);var debug = cljs.core.get.call(null,map__12940__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__12938,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__12938,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__12941){
var p__12938 = cljs.core.first(arglist__12941);
var args = cljs.core.rest(arglist__12941);
return log__delegate(p__12938,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__12942){var map__12944 = p__12942;var map__12944__$1 = ((cljs.core.seq_QMARK_.call(null,map__12944))?cljs.core.apply.call(null,cljs.core.hash_map,map__12944):map__12944);var websocket_url = cljs.core.get.call(null,map__12944__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__12945,callback){var map__12947 = p__12945;var map__12947__$1 = ((cljs.core.seq_QMARK_.call(null,map__12947))?cljs.core.apply.call(null,cljs.core.hash_map,map__12947):map__12947);var msg = map__12947__$1;var dependency_file = cljs.core.get.call(null,map__12947__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__12947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__12947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7931__auto__ = dependency_file;if(cljs.core.truth_(or__7931__auto__))
{return or__7931__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__12947,map__12947__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__12947,map__12947__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__12948,p__12949){var map__12952 = p__12948;var map__12952__$1 = ((cljs.core.seq_QMARK_.call(null,map__12952))?cljs.core.apply.call(null,cljs.core.hash_map,map__12952):map__12952);var opts = map__12952__$1;var url_rewriter = cljs.core.get.call(null,map__12952__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__12953 = p__12949;var map__12953__$1 = ((cljs.core.seq_QMARK_.call(null,map__12953))?cljs.core.apply.call(null,cljs.core.hash_map,map__12953):map__12953);var d = map__12953__$1;var file = cljs.core.get.call(null,map__12953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__12954,p__12955){var map__12996 = p__12954;var map__12996__$1 = ((cljs.core.seq_QMARK_.call(null,map__12996))?cljs.core.apply.call(null,cljs.core.hash_map,map__12996):map__12996);var opts = map__12996__$1;var on_jsload = cljs.core.get.call(null,map__12996__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__12996__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__12997 = p__12955;var map__12997__$1 = ((cljs.core.seq_QMARK_.call(null,map__12997))?cljs.core.apply.call(null,cljs.core.hash_map,map__12997):map__12997);var files = cljs.core.get.call(null,map__12997__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__10327__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__,map__12996,map__12996__$1,opts,on_jsload,before_jsload,map__12997,map__12997__$1,files){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__,map__12996,map__12996__$1,opts,on_jsload,before_jsload,map__12997,map__12997__$1,files){
return (function (state_13019){var state_val_13020 = (state_13019[(1)]);if((state_val_13020 === (6)))
{var inst_13002 = (state_13019[(7)]);var inst_13011 = (state_13019[(2)]);var inst_13012 = [inst_13002];var inst_13013 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13012,null));var inst_13014 = cljs.core.apply.call(null,on_jsload,inst_13013);var state_13019__$1 = (function (){var statearr_13021 = state_13019;(statearr_13021[(8)] = inst_13011);
return statearr_13021;
})();var statearr_13022_13036 = state_13019__$1;(statearr_13022_13036[(2)] = inst_13014);
(statearr_13022_13036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13020 === (5)))
{var inst_13017 = (state_13019[(2)]);var state_13019__$1 = state_13019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13019__$1,inst_13017);
} else
{if((state_val_13020 === (4)))
{var state_13019__$1 = state_13019;var statearr_13023_13037 = state_13019__$1;(statearr_13023_13037[(2)] = null);
(statearr_13023_13037[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13020 === (3)))
{var inst_13002 = (state_13019[(7)]);var inst_13005 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_13006 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13002);var inst_13007 = cljs.core.prn_str.call(null,inst_13006);var inst_13008 = console.log(inst_13007);var inst_13009 = cljs.core.async.timeout.call(null,(10));var state_13019__$1 = (function (){var statearr_13024 = state_13019;(statearr_13024[(9)] = inst_13005);
(statearr_13024[(10)] = inst_13008);
return statearr_13024;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13019__$1,(6),inst_13009);
} else
{if((state_val_13020 === (2)))
{var inst_13002 = (state_13019[(7)]);var inst_13002__$1 = (state_13019[(2)]);var inst_13003 = cljs.core.not_empty.call(null,inst_13002__$1);var state_13019__$1 = (function (){var statearr_13025 = state_13019;(statearr_13025[(7)] = inst_13002__$1);
return statearr_13025;
})();if(cljs.core.truth_(inst_13003))
{var statearr_13026_13038 = state_13019__$1;(statearr_13026_13038[(1)] = (3));
} else
{var statearr_13027_13039 = state_13019__$1;(statearr_13027_13039[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13020 === (1)))
{var inst_12998 = before_jsload.call(null,files);var inst_12999 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13000 = figwheel.client.load_all_js_files.call(null,inst_12999);var state_13019__$1 = (function (){var statearr_13028 = state_13019;(statearr_13028[(11)] = inst_12998);
return statearr_13028;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13019__$1,(2),inst_13000);
} else
{return null;
}
}
}
}
}
}
});})(c__10327__auto__,map__12996,map__12996__$1,opts,on_jsload,before_jsload,map__12997,map__12997__$1,files))
;return ((function (switch__10262__auto__,c__10327__auto__,map__12996,map__12996__$1,opts,on_jsload,before_jsload,map__12997,map__12997__$1,files){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13032 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13032[(0)] = state_machine__10263__auto__);
(statearr_13032[(1)] = (1));
return statearr_13032;
});
var state_machine__10263__auto____1 = (function (state_13019){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13019);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13033){if((e13033 instanceof Object))
{var ex__10266__auto__ = e13033;var statearr_13034_13040 = state_13019;(statearr_13034_13040[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13019);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13041 = state_13019;
state_13019 = G__13041;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13019){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__,map__12996,map__12996__$1,opts,on_jsload,before_jsload,map__12997,map__12997__$1,files))
})();var state__10329__auto__ = (function (){var statearr_13035 = f__10328__auto__.call(null);(statearr_13035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);
return statearr_13035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__,map__12996,map__12996__$1,opts,on_jsload,before_jsload,map__12997,map__12997__$1,files))
);
return c__10327__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13042,link_href){var map__13044 = p__13042;var map__13044__$1 = ((cljs.core.seq_QMARK_.call(null,map__13044))?cljs.core.apply.call(null,cljs.core.hash_map,map__13044):map__13044);var request_url = cljs.core.get.call(null,map__13044__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10327__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__,parent){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__,parent){
return (function (state_13065){var state_val_13066 = (state_13065[(1)]);if((state_val_13066 === (2)))
{var inst_13062 = (state_13065[(2)]);var inst_13063 = parent.removeChild(orig_link);var state_13065__$1 = (function (){var statearr_13067 = state_13065;(statearr_13067[(7)] = inst_13062);
return statearr_13067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13065__$1,inst_13063);
} else
{if((state_val_13066 === (1)))
{var inst_13060 = cljs.core.async.timeout.call(null,(200));var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13065__$1,(2),inst_13060);
} else
{return null;
}
}
});})(c__10327__auto__,parent))
;return ((function (switch__10262__auto__,c__10327__auto__,parent){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13071 = [null,null,null,null,null,null,null,null];(statearr_13071[(0)] = state_machine__10263__auto__);
(statearr_13071[(1)] = (1));
return statearr_13071;
});
var state_machine__10263__auto____1 = (function (state_13065){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13065);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13072){if((e13072 instanceof Object))
{var ex__10266__auto__ = e13072;var statearr_13073_13075 = state_13065;(statearr_13073_13075[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13076 = state_13065;
state_13065 = G__13076;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13065){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__,parent))
})();var state__10329__auto__ = (function (){var statearr_13074 = f__10328__auto__.call(null);(statearr_13074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);
return statearr_13074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__,parent))
);
return c__10327__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13077){var map__13079 = p__13077;var map__13079__$1 = ((cljs.core.seq_QMARK_.call(null,map__13079))?cljs.core.apply.call(null,cljs.core.hash_map,map__13079):map__13079);var f_data = map__13079__$1;var request_url = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13080,files_msg){var map__13102 = p__13080;var map__13102__$1 = ((cljs.core.seq_QMARK_.call(null,map__13102))?cljs.core.apply.call(null,cljs.core.hash_map,map__13102):map__13102);var opts = map__13102__$1;var on_cssload = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13103_13123 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13104_13124 = null;var count__13105_13125 = (0);var i__13106_13126 = (0);while(true){
if((i__13106_13126 < count__13105_13125))
{var f_13127 = cljs.core._nth.call(null,chunk__13104_13124,i__13106_13126);figwheel.client.reload_css_file.call(null,f_13127);
{
var G__13128 = seq__13103_13123;
var G__13129 = chunk__13104_13124;
var G__13130 = count__13105_13125;
var G__13131 = (i__13106_13126 + (1));
seq__13103_13123 = G__13128;
chunk__13104_13124 = G__13129;
count__13105_13125 = G__13130;
i__13106_13126 = G__13131;
continue;
}
} else
{var temp__4126__auto___13132 = cljs.core.seq.call(null,seq__13103_13123);if(temp__4126__auto___13132)
{var seq__13103_13133__$1 = temp__4126__auto___13132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13103_13133__$1))
{var c__8687__auto___13134 = cljs.core.chunk_first.call(null,seq__13103_13133__$1);{
var G__13135 = cljs.core.chunk_rest.call(null,seq__13103_13133__$1);
var G__13136 = c__8687__auto___13134;
var G__13137 = cljs.core.count.call(null,c__8687__auto___13134);
var G__13138 = (0);
seq__13103_13123 = G__13135;
chunk__13104_13124 = G__13136;
count__13105_13125 = G__13137;
i__13106_13126 = G__13138;
continue;
}
} else
{var f_13139 = cljs.core.first.call(null,seq__13103_13133__$1);figwheel.client.reload_css_file.call(null,f_13139);
{
var G__13140 = cljs.core.next.call(null,seq__13103_13133__$1);
var G__13141 = null;
var G__13142 = (0);
var G__13143 = (0);
seq__13103_13123 = G__13140;
chunk__13104_13124 = G__13141;
count__13105_13125 = G__13142;
i__13106_13126 = G__13143;
continue;
}
}
} else
{}
}
break;
}
var c__10327__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__,map__13102,map__13102__$1,opts,on_cssload){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__,map__13102,map__13102__$1,opts,on_cssload){
return (function (state_13113){var state_val_13114 = (state_13113[(1)]);if((state_val_13114 === (2)))
{var inst_13109 = (state_13113[(2)]);var inst_13110 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13111 = on_cssload.call(null,inst_13110);var state_13113__$1 = (function (){var statearr_13115 = state_13113;(statearr_13115[(7)] = inst_13109);
return statearr_13115;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13113__$1,inst_13111);
} else
{if((state_val_13114 === (1)))
{var inst_13107 = cljs.core.async.timeout.call(null,(100));var state_13113__$1 = state_13113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13113__$1,(2),inst_13107);
} else
{return null;
}
}
});})(c__10327__auto__,map__13102,map__13102__$1,opts,on_cssload))
;return ((function (switch__10262__auto__,c__10327__auto__,map__13102,map__13102__$1,opts,on_cssload){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13119 = [null,null,null,null,null,null,null,null];(statearr_13119[(0)] = state_machine__10263__auto__);
(statearr_13119[(1)] = (1));
return statearr_13119;
});
var state_machine__10263__auto____1 = (function (state_13113){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13113);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13120){if((e13120 instanceof Object))
{var ex__10266__auto__ = e13120;var statearr_13121_13144 = state_13113;(statearr_13121_13144[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13145 = state_13113;
state_13113 = G__13145;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13113){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__,map__13102,map__13102__$1,opts,on_cssload))
})();var state__10329__auto__ = (function (){var statearr_13122 = f__10328__auto__.call(null);(statearr_13122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);
return statearr_13122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__,map__13102,map__13102__$1,opts,on_cssload))
);
return c__10327__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13146){var map__13151 = p__13146;var map__13151__$1 = ((cljs.core.seq_QMARK_.call(null,map__13151))?cljs.core.apply.call(null,cljs.core.hash_map,map__13151):map__13151);var opts = map__13151__$1;var on_compile_fail = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13152 = cljs.core._EQ_;var expr__13153 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13152.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13153)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13152.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13153)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13152.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13153)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13151,map__13151__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13158 = {"detail":url};return obj13158;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13159){var map__13161 = p__13159;var map__13161__$1 = ((cljs.core.seq_QMARK_.call(null,map__13161))?cljs.core.apply.call(null,cljs.core.hash_map,map__13161):map__13161);var class$ = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13162){var map__13168 = p__13162;var map__13168__$1 = ((cljs.core.seq_QMARK_.call(null,map__13168))?cljs.core.apply.call(null,cljs.core.hash_map,map__13168):map__13168);var ed = map__13168__$1;var exception_data = cljs.core.get.call(null,map__13168__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13168__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__13169_13173 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13170_13174 = null;var count__13171_13175 = (0);var i__13172_13176 = (0);while(true){
if((i__13172_13176 < count__13171_13175))
{var msg_13177 = cljs.core._nth.call(null,chunk__13170_13174,i__13172_13176);console.log(msg_13177);
{
var G__13178 = seq__13169_13173;
var G__13179 = chunk__13170_13174;
var G__13180 = count__13171_13175;
var G__13181 = (i__13172_13176 + (1));
seq__13169_13173 = G__13178;
chunk__13170_13174 = G__13179;
count__13171_13175 = G__13180;
i__13172_13176 = G__13181;
continue;
}
} else
{var temp__4126__auto___13182 = cljs.core.seq.call(null,seq__13169_13173);if(temp__4126__auto___13182)
{var seq__13169_13183__$1 = temp__4126__auto___13182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13169_13183__$1))
{var c__8687__auto___13184 = cljs.core.chunk_first.call(null,seq__13169_13183__$1);{
var G__13185 = cljs.core.chunk_rest.call(null,seq__13169_13183__$1);
var G__13186 = c__8687__auto___13184;
var G__13187 = cljs.core.count.call(null,c__8687__auto___13184);
var G__13188 = (0);
seq__13169_13173 = G__13185;
chunk__13170_13174 = G__13186;
count__13171_13175 = G__13187;
i__13172_13176 = G__13188;
continue;
}
} else
{var msg_13189 = cljs.core.first.call(null,seq__13169_13183__$1);console.log(msg_13189);
{
var G__13190 = cljs.core.next.call(null,seq__13169_13183__$1);
var G__13191 = null;
var G__13192 = (0);
var G__13193 = (0);
seq__13169_13173 = G__13190;
chunk__13170_13174 = G__13191;
count__13171_13175 = G__13192;
i__13172_13176 = G__13193;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7931__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7931__auto__))
{return or__7931__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13194){var map__13196 = p__13194;var map__13196__$1 = ((cljs.core.seq_QMARK_.call(null,map__13196))?cljs.core.apply.call(null,cljs.core.hash_map,map__13196):map__13196);var opts = map__13196__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13194 = null;if (arguments.length > 0) {
  p__13194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13194);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13197){
var p__13194 = cljs.core.seq(arglist__13197);
return watch_and_reload__delegate(p__13194);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map