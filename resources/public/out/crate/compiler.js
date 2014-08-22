// Compiled by ClojureScript 0.0-2277
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,(0));
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__13196 = cljs.core.seq.call(null,content);var chunk__13197 = null;var count__13198 = (0);var i__13199 = (0);while(true){
if((i__13199 < count__13198))
{var c = cljs.core._nth.call(null,chunk__13197,i__13199);var child_13200 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):((new cljs.core.Keyword(null,"else","else",-1508377146))?goog.dom.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))):null))))))))));if(cljs.core.truth_(child_13200))
{goog.dom.appendChild(parent,child_13200);
} else
{}
{
var G__13201 = seq__13196;
var G__13202 = chunk__13197;
var G__13203 = count__13198;
var G__13204 = (i__13199 + (1));
seq__13196 = G__13201;
chunk__13197 = G__13202;
count__13198 = G__13203;
i__13199 = G__13204;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13196);if(temp__4126__auto__)
{var seq__13196__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13196__$1))
{var c__8688__auto__ = cljs.core.chunk_first.call(null,seq__13196__$1);{
var G__13205 = cljs.core.chunk_rest.call(null,seq__13196__$1);
var G__13206 = c__8688__auto__;
var G__13207 = cljs.core.count.call(null,c__8688__auto__);
var G__13208 = (0);
seq__13196 = G__13205;
chunk__13197 = G__13206;
count__13198 = G__13207;
i__13199 = G__13208;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13196__$1);var child_13209 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):((new cljs.core.Keyword(null,"else","else",-1508377146))?goog.dom.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))):null))))))))));if(cljs.core.truth_(child_13209))
{goog.dom.appendChild(parent,child_13209);
} else
{}
{
var G__13210 = cljs.core.next.call(null,seq__13196__$1);
var G__13211 = null;
var G__13212 = (0);
var G__13213 = (0);
seq__13196 = G__13210;
chunk__13197 = G__13211;
count__13198 = G__13212;
i__13199 = G__13213;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__8798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8802__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",((function (method_table__8798__auto__,prefer_table__8799__auto__,method_cache__8800__auto__,cached_hierarchy__8801__auto__,hierarchy__8802__auto__){
return (function (type,_,___$1){return type;
});})(method_table__8798__auto__,prefer_table__8799__auto__,method_cache__8800__auto__,cached_hierarchy__8801__auto__,hierarchy__8802__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8802__auto__,method_table__8798__auto__,prefer_table__8799__auto__,method_cache__8800__auto__,cached_hierarchy__8801__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__13214,elem){var vec__13215 = p__13214;var k = cljs.core.nth.call(null,vec__13215,(0),null);var b = cljs.core.nth.call(null,vec__13215,(1),null);return crate.binding.on_change.call(null,b,((function (vec__13215,k,b){
return (function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__13215,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__13216,elem){var vec__13217 = p__13216;var k = cljs.core.nth.call(null,vec__13217,(0),null);var b = cljs.core.nth.call(null,vec__13217,(1),null);return crate.binding.on_change.call(null,b,((function (vec__13217,k,b){
return (function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__13217,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",235287739));if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",-131428414));if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__13218 = cljs.core._EQ_;var expr__13219 = type;if(cljs.core.truth_(pred__13218.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__13219)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__13218.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__13219)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13219))));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__13227 = cljs.core.seq.call(null,bs);var chunk__13228 = null;var count__13229 = (0);var i__13230 = (0);while(true){
if((i__13230 < count__13229))
{var vec__13231 = cljs.core._nth.call(null,chunk__13228,i__13230);var type = cljs.core.nth.call(null,vec__13231,(0),null);var b = cljs.core.nth.call(null,vec__13231,(1),null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__13233 = seq__13227;
var G__13234 = chunk__13228;
var G__13235 = count__13229;
var G__13236 = (i__13230 + (1));
seq__13227 = G__13233;
chunk__13228 = G__13234;
count__13229 = G__13235;
i__13230 = G__13236;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13227);if(temp__4126__auto__)
{var seq__13227__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13227__$1))
{var c__8688__auto__ = cljs.core.chunk_first.call(null,seq__13227__$1);{
var G__13237 = cljs.core.chunk_rest.call(null,seq__13227__$1);
var G__13238 = c__8688__auto__;
var G__13239 = cljs.core.count.call(null,c__8688__auto__);
var G__13240 = (0);
seq__13227 = G__13237;
chunk__13228 = G__13238;
count__13229 = G__13239;
i__13230 = G__13240;
continue;
}
} else
{var vec__13232 = cljs.core.first.call(null,seq__13227__$1);var type = cljs.core.nth.call(null,vec__13232,(0),null);var b = cljs.core.nth.call(null,vec__13232,(1),null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__13241 = cljs.core.next.call(null,seq__13227__$1);
var G__13242 = null;
var G__13243 = (0);
var G__13244 = (0);
seq__13227 = G__13241;
chunk__13228 = G__13242;
count__13229 = G__13243;
i__13230 = G__13244;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__13251_13257 = cljs.core.seq.call(null,v);var chunk__13252_13258 = null;var count__13253_13259 = (0);var i__13254_13260 = (0);while(true){
if((i__13254_13260 < count__13253_13259))
{var vec__13255_13261 = cljs.core._nth.call(null,chunk__13252_13258,i__13254_13260);var k_13262 = cljs.core.nth.call(null,vec__13255_13261,(0),null);var v_13263__$1 = cljs.core.nth.call(null,vec__13255_13261,(1),null);dom_style.call(null,elem,k_13262,v_13263__$1);
{
var G__13264 = seq__13251_13257;
var G__13265 = chunk__13252_13258;
var G__13266 = count__13253_13259;
var G__13267 = (i__13254_13260 + (1));
seq__13251_13257 = G__13264;
chunk__13252_13258 = G__13265;
count__13253_13259 = G__13266;
i__13254_13260 = G__13267;
continue;
}
} else
{var temp__4126__auto___13268 = cljs.core.seq.call(null,seq__13251_13257);if(temp__4126__auto___13268)
{var seq__13251_13269__$1 = temp__4126__auto___13268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13251_13269__$1))
{var c__8688__auto___13270 = cljs.core.chunk_first.call(null,seq__13251_13269__$1);{
var G__13271 = cljs.core.chunk_rest.call(null,seq__13251_13269__$1);
var G__13272 = c__8688__auto___13270;
var G__13273 = cljs.core.count.call(null,c__8688__auto___13270);
var G__13274 = (0);
seq__13251_13257 = G__13271;
chunk__13252_13258 = G__13272;
count__13253_13259 = G__13273;
i__13254_13260 = G__13274;
continue;
}
} else
{var vec__13256_13275 = cljs.core.first.call(null,seq__13251_13269__$1);var k_13276 = cljs.core.nth.call(null,vec__13256_13275,(0),null);var v_13277__$1 = cljs.core.nth.call(null,vec__13256_13275,(1),null);dom_style.call(null,elem,k_13276,v_13277__$1);
{
var G__13278 = cljs.core.next.call(null,seq__13251_13269__$1);
var G__13279 = null;
var G__13280 = (0);
var G__13281 = (0);
seq__13251_13257 = G__13278;
chunk__13252_13258 = G__13279;
count__13253_13259 = G__13280;
i__13254_13260 = G__13281;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__13288_13294 = cljs.core.seq.call(null,attrs);var chunk__13289_13295 = null;var count__13290_13296 = (0);var i__13291_13297 = (0);while(true){
if((i__13291_13297 < count__13290_13296))
{var vec__13292_13298 = cljs.core._nth.call(null,chunk__13289_13295,i__13291_13297);var k_13299 = cljs.core.nth.call(null,vec__13292_13298,(0),null);var v_13300 = cljs.core.nth.call(null,vec__13292_13298,(1),null);dom_attr.call(null,elem,k_13299,v_13300);
{
var G__13301 = seq__13288_13294;
var G__13302 = chunk__13289_13295;
var G__13303 = count__13290_13296;
var G__13304 = (i__13291_13297 + (1));
seq__13288_13294 = G__13301;
chunk__13289_13295 = G__13302;
count__13290_13296 = G__13303;
i__13291_13297 = G__13304;
continue;
}
} else
{var temp__4126__auto___13305 = cljs.core.seq.call(null,seq__13288_13294);if(temp__4126__auto___13305)
{var seq__13288_13306__$1 = temp__4126__auto___13305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13288_13306__$1))
{var c__8688__auto___13307 = cljs.core.chunk_first.call(null,seq__13288_13306__$1);{
var G__13308 = cljs.core.chunk_rest.call(null,seq__13288_13306__$1);
var G__13309 = c__8688__auto___13307;
var G__13310 = cljs.core.count.call(null,c__8688__auto___13307);
var G__13311 = (0);
seq__13288_13294 = G__13308;
chunk__13289_13295 = G__13309;
count__13290_13296 = G__13310;
i__13291_13297 = G__13311;
continue;
}
} else
{var vec__13293_13312 = cljs.core.first.call(null,seq__13288_13306__$1);var k_13313 = cljs.core.nth.call(null,vec__13293_13312,(0),null);var v_13314 = cljs.core.nth.call(null,vec__13293_13312,(1),null);dom_attr.call(null,elem,k_13313,v_13314);
{
var G__13315 = cljs.core.next.call(null,seq__13288_13306__$1);
var G__13316 = null;
var G__13317 = (0);
var G__13318 = (0);
seq__13288_13294 = G__13315;
chunk__13289_13295 = G__13316;
count__13290_13296 = G__13317;
i__13291_13297 = G__13318;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_13319__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_13319__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13322){var vec__13323 = p__13322;var n = cljs.core.nth.call(null,vec__13323,(0),null);var v = cljs.core.nth.call(null,vec__13323,(1),null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__13325){var vec__13330 = p__13325;var tag = cljs.core.nth.call(null,vec__13330,(0),null);var content = cljs.core.nthnext.call(null,vec__13330,(1));if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid tag name.");
} else
{}
var vec__13331 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__13331,(0),null);var tag__$1 = cljs.core.nth.call(null,vec__13331,(1),null);var id = cljs.core.nth.call(null,vec__13331,(2),null);var class$ = cljs.core.nth.call(null,vec__13331,(3),null);var vec__13332 = (function (){var vec__13333 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__13333,(0),null);var t = cljs.core.nth.call(null,vec__13333,(1),null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7932__auto__ = ns_xmlns;if(cljs.core.truth_(or__7932__auto__))
{return or__7932__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__13332,(0),null);var tag__$2 = cljs.core.nth.call(null,vec__13332,(1),null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__13331,_,tag__$1,id,class$,vec__13332,nsp,tag__$2,vec__13330,tag,content){
return (function (p1__13324_SHARP_){return !((cljs.core.second.call(null,p1__13324_SHARP_) == null));
});})(vec__13331,_,tag__$1,id,class$,vec__13332,nsp,tag__$2,vec__13330,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__7932__auto__ = id;if(cljs.core.truth_(or__7932__auto__))
{return or__7932__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings13336 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__13337 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__13337,(0),null);var tag = cljs.core.nth.call(null,vec__13337,(1),null);var attrs = cljs.core.nth.call(null,vec__13337,(2),null);var content = cljs.core.nth.call(null,vec__13337,(3),null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings13336;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__13340__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__13339 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__13339,(0),null);var body = cljs.core.nthnext.call(null,vec__13339,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__13340 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13340__delegate.call(this,args);};
G__13340.cljs$lang$maxFixedArity = 0;
G__13340.cljs$lang$applyTo = (function (arglist__13341){
var args = cljs.core.seq(arglist__13341);
return G__13340__delegate(args);
});
G__13340.cljs$core$IFn$_invoke$arity$variadic = G__13340__delegate;
return G__13340;
})()
;
});

//# sourceMappingURL=compiler.js.map