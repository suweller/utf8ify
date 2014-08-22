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
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,"http://www.w3.org/1999/xhtml",cljs.core.constant$keyword$22,"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__9231 = cljs.core.seq(content);var chunk__9232 = null;var count__9233 = (0);var i__9234 = (0);while(true){
if((i__9234 < count__9233))
{var c = chunk__9232.cljs$core$IIndexed$_nth$arity$2(null,i__9234);var child_9235 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):((crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding(cljs.core.constant$keyword$23,c);
return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})():((crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding(cljs.core.constant$keyword$24,c);
return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):((cljs.core.constant$keyword$6)?goog.dom.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))):null))))))))));if(cljs.core.truth_(child_9235))
{goog.dom.appendChild(parent,child_9235);
} else
{}
{
var G__9236 = seq__9231;
var G__9237 = chunk__9232;
var G__9238 = count__9233;
var G__9239 = (i__9234 + (1));
seq__9231 = G__9236;
chunk__9232 = G__9237;
count__9233 = G__9238;
i__9234 = G__9239;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9231);if(temp__4126__auto__)
{var seq__9231__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9231__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__9231__$1);{
var G__9240 = cljs.core.chunk_rest(seq__9231__$1);
var G__9241 = c__4299__auto__;
var G__9242 = cljs.core.count(c__4299__auto__);
var G__9243 = (0);
seq__9231 = G__9240;
chunk__9232 = G__9241;
count__9233 = G__9242;
i__9234 = G__9243;
continue;
}
} else
{var c = cljs.core.first(seq__9231__$1);var child_9244 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):((crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding(cljs.core.constant$keyword$23,c);
return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})():((crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding(cljs.core.constant$keyword$24,c);
return as_content(parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):((cljs.core.constant$keyword$6)?goog.dom.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))):null))))))))));if(cljs.core.truth_(child_9244))
{goog.dom.appendChild(parent,child_9244);
} else
{}
{
var G__9245 = cljs.core.next(seq__9231__$1);
var G__9246 = null;
var G__9247 = (0);
var G__9248 = (0);
seq__9231 = G__9245;
chunk__9232 = G__9246;
count__9233 = G__9247;
i__9234 = G__9248;
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
crate.compiler.dom_binding = (function (){var method_table__4409__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$25,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("dom-binding",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (type,_,___$1){return type;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,cljs.core.constant$keyword$7,hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (_,b,elem){return crate.binding.on_change(b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content(elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (_,p__9249,elem){var vec__9250 = p__9249;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9250,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9250,(1),null);return crate.binding.on_change(b,((function (vec__9250,k,b){
return (function (v){return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
});})(vec__9250,k,b))
);
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$27,(function (_,p__9251,elem){var vec__9252 = p__9251;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9252,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9252,(1),null);return crate.binding.on_change(b,((function (vec__9252,k,b){
return (function (v){if(cljs.core.truth_(k))
{return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_style.call(null,elem,k,v));
} else
{return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v) : crate.compiler.dom_style.call(null,elem,v));
}
});})(vec__9252,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$17);if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(parent,elem,v) : adder.call(null,parent,elem,v));
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$18);if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(elem) : remover.call(null,elem));
} else
{return goog.dom.removeNode(elem);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$23,(function (_,bc,parent){return crate.binding.on_change(bc,(function (type,elem,v){var pred__9253 = cljs.core._EQ_;var expr__9254 = type;if(cljs.core.truth_((pred__9253.cljs$core$IFn$_invoke$arity$2 ? pred__9253.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__9254) : pred__9253.call(null,cljs.core.constant$keyword$17,expr__9254))))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if(cljs.core.truth_((pred__9253.cljs$core$IFn$_invoke$arity$2 ? pred__9253.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18,expr__9254) : pred__9253.call(null,cljs.core.constant$keyword$18,expr__9254))))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9254))));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__9262 = cljs.core.seq(bs);var chunk__9263 = null;var count__9264 = (0);var i__9265 = (0);while(true){
if((i__9265 < count__9264))
{var vec__9266 = chunk__9263.cljs$core$IIndexed$_nth$arity$2(null,i__9265);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9266,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9266,(1),null);(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__9268 = seq__9262;
var G__9269 = chunk__9263;
var G__9270 = count__9264;
var G__9271 = (i__9265 + (1));
seq__9262 = G__9268;
chunk__9263 = G__9269;
count__9264 = G__9270;
i__9265 = G__9271;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9262);if(temp__4126__auto__)
{var seq__9262__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9262__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__9262__$1);{
var G__9272 = cljs.core.chunk_rest(seq__9262__$1);
var G__9273 = c__4299__auto__;
var G__9274 = cljs.core.count(c__4299__auto__);
var G__9275 = (0);
seq__9262 = G__9272;
chunk__9263 = G__9273;
count__9264 = G__9274;
i__9265 = G__9275;
continue;
}
} else
{var vec__9267 = cljs.core.first(seq__9262__$1);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9267,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9267,(1),null);(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__9276 = cljs.core.next(seq__9262__$1);
var G__9277 = null;
var G__9278 = (0);
var G__9279 = (0);
seq__9262 = G__9276;
chunk__9263 = G__9277;
count__9264 = G__9278;
i__9265 = G__9279;
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
{if(cljs.core.map_QMARK_(v))
{var seq__9286_9292 = cljs.core.seq(v);var chunk__9287_9293 = null;var count__9288_9294 = (0);var i__9289_9295 = (0);while(true){
if((i__9289_9295 < count__9288_9294))
{var vec__9290_9296 = chunk__9287_9293.cljs$core$IIndexed$_nth$arity$2(null,i__9289_9295);var k_9297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290_9296,(0),null);var v_9298__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290_9296,(1),null);dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_9297,v_9298__$1);
{
var G__9299 = seq__9286_9292;
var G__9300 = chunk__9287_9293;
var G__9301 = count__9288_9294;
var G__9302 = (i__9289_9295 + (1));
seq__9286_9292 = G__9299;
chunk__9287_9293 = G__9300;
count__9288_9294 = G__9301;
i__9289_9295 = G__9302;
continue;
}
} else
{var temp__4126__auto___9303 = cljs.core.seq(seq__9286_9292);if(temp__4126__auto___9303)
{var seq__9286_9304__$1 = temp__4126__auto___9303;if(cljs.core.chunked_seq_QMARK_(seq__9286_9304__$1))
{var c__4299__auto___9305 = cljs.core.chunk_first(seq__9286_9304__$1);{
var G__9306 = cljs.core.chunk_rest(seq__9286_9304__$1);
var G__9307 = c__4299__auto___9305;
var G__9308 = cljs.core.count(c__4299__auto___9305);
var G__9309 = (0);
seq__9286_9292 = G__9306;
chunk__9287_9293 = G__9307;
count__9288_9294 = G__9308;
i__9289_9295 = G__9309;
continue;
}
} else
{var vec__9291_9310 = cljs.core.first(seq__9286_9304__$1);var k_9311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9291_9310,(0),null);var v_9312__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9291_9310,(1),null);dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_9311,v_9312__$1);
{
var G__9313 = cljs.core.next(seq__9286_9304__$1);
var G__9314 = null;
var G__9315 = (0);
var G__9316 = (0);
seq__9286_9292 = G__9313;
chunk__9287_9293 = G__9314;
count__9288_9294 = G__9315;
i__9289_9295 = G__9316;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_(v))
{crate.compiler.capture_binding(cljs.core.constant$keyword$27,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding(cljs.core.constant$keyword$27,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value(v);
})():v);return goog.style.setStyle(elem,cljs.core.name(k),v__$1);
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
{if(!(cljs.core.map_QMARK_(attrs)))
{return elem.getAttribute(cljs.core.name(attrs));
} else
{var seq__9323_9329 = cljs.core.seq(attrs);var chunk__9324_9330 = null;var count__9325_9331 = (0);var i__9326_9332 = (0);while(true){
if((i__9326_9332 < count__9325_9331))
{var vec__9327_9333 = chunk__9324_9330.cljs$core$IIndexed$_nth$arity$2(null,i__9326_9332);var k_9334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9327_9333,(0),null);var v_9335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9327_9333,(1),null);dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_9334,v_9335);
{
var G__9336 = seq__9323_9329;
var G__9337 = chunk__9324_9330;
var G__9338 = count__9325_9331;
var G__9339 = (i__9326_9332 + (1));
seq__9323_9329 = G__9336;
chunk__9324_9330 = G__9337;
count__9325_9331 = G__9338;
i__9326_9332 = G__9339;
continue;
}
} else
{var temp__4126__auto___9340 = cljs.core.seq(seq__9323_9329);if(temp__4126__auto___9340)
{var seq__9323_9341__$1 = temp__4126__auto___9340;if(cljs.core.chunked_seq_QMARK_(seq__9323_9341__$1))
{var c__4299__auto___9342 = cljs.core.chunk_first(seq__9323_9341__$1);{
var G__9343 = cljs.core.chunk_rest(seq__9323_9341__$1);
var G__9344 = c__4299__auto___9342;
var G__9345 = cljs.core.count(c__4299__auto___9342);
var G__9346 = (0);
seq__9323_9329 = G__9343;
chunk__9324_9330 = G__9344;
count__9325_9331 = G__9345;
i__9326_9332 = G__9346;
continue;
}
} else
{var vec__9328_9347 = cljs.core.first(seq__9323_9341__$1);var k_9348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9328_9347,(0),null);var v_9349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9328_9347,(1),null);dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_9348,v_9349);
{
var G__9350 = cljs.core.next(seq__9323_9341__$1);
var G__9351 = null;
var G__9352 = (0);
var G__9353 = (0);
seq__9323_9329 = G__9350;
chunk__9324_9330 = G__9351;
count__9325_9331 = G__9352;
i__9326_9332 = G__9353;
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
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.constant$keyword$27))
{crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else
{var v_9354__$1 = ((crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding(cljs.core.constant$keyword$26,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value(v);
})():v);elem.setAttribute(cljs.core.name(k),v_9354__$1);
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
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9357){var vec__9358 = p__9357;var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9358,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9358,(1),null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name(n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__9360){var vec__9365 = p__9360;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9365,(0),null);var content = cljs.core.nthnext(vec__9365,(1));if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid tag name.");
} else
{}
var vec__9366 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9366,(0),null);var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9366,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9366,(2),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9366,(3),null);var vec__9367 = (function (){var vec__9368 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9368,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9368,(1),null);var ns_xmlns = (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp)) : crate.compiler.xmlns.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp)));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3543__auto__ = ns_xmlns;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9367,(0),null);var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9367,(1),null);var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__9366,_,tag__$1,id,class$,vec__9367,nsp,tag__$2,vec__9365,tag,content){
return (function (p1__9359_SHARP_){return !((cljs.core.second(p1__9359_SHARP_) == null));
});})(vec__9366,_,tag__$1,id,class$,vec__9367,nsp,tag__$2,vec__9365,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$28,(function (){var or__3543__auto__ = id;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return null;
}
})(),cljs.core.constant$keyword$29,(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], null)));var map_attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(attrs))
{crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
return cljs.core.rest(content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings9371 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__9372 = crate.compiler.normalize_element(tag_def);var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9372,(0),null);var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9372,(1),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9372,(2),null);var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9372,(3),null);var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings9371;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__9375__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__9374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9374,(0),null);var body = cljs.core.nthnext(vec__9374,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__9375 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9375__delegate.call(this,args);};
G__9375.cljs$lang$maxFixedArity = 0;
G__9375.cljs$lang$applyTo = (function (arglist__9376){
var args = cljs.core.seq(arglist__9376);
return G__9375__delegate(args);
});
G__9375.cljs$core$IFn$_invoke$arity$variadic = G__9375__delegate;
return G__9375;
})()
;
});
