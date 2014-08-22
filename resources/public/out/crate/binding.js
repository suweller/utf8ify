// Compiled by ClojureScript 0.0-2277
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__8499__auto__,writer__8500__auto__,opt__8501__auto__){return cljs.core._write.call(null,writer__8500__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13342 = cljs.core.seq.call(null,self__.watches);var chunk__13343 = null;var count__13344 = (0);var i__13345 = (0);while(true){
if((i__13345 < count__13344))
{var vec__13346 = cljs.core._nth.call(null,chunk__13343,i__13345);var key__$1 = cljs.core.nth.call(null,vec__13346,(0),null);var f = cljs.core.nth.call(null,vec__13346,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__13348 = seq__13342;
var G__13349 = chunk__13343;
var G__13350 = count__13344;
var G__13351 = (i__13345 + (1));
seq__13342 = G__13348;
chunk__13343 = G__13349;
count__13344 = G__13350;
i__13345 = G__13351;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13342);if(temp__4126__auto__)
{var seq__13342__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13342__$1))
{var c__8688__auto__ = cljs.core.chunk_first.call(null,seq__13342__$1);{
var G__13352 = cljs.core.chunk_rest.call(null,seq__13342__$1);
var G__13353 = c__8688__auto__;
var G__13354 = cljs.core.count.call(null,c__8688__auto__);
var G__13355 = (0);
seq__13342 = G__13352;
chunk__13343 = G__13353;
count__13344 = G__13354;
i__13345 = G__13355;
continue;
}
} else
{var vec__13347 = cljs.core.first.call(null,seq__13342__$1);var key__$1 = cljs.core.nth.call(null,vec__13347,(0),null);var f = cljs.core.nth.call(null,vec__13347,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__13356 = cljs.core.next.call(null,seq__13342__$1);
var G__13357 = null;
var G__13358 = (0);
var G__13359 = (0);
seq__13342 = G__13356;
chunk__13343 = G__13357;
count__13344 = G__13358;
i__13345 = G__13359;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,("#<SubAtom: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path)))+">"));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__13361 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__13361,(0),null);var path__$2 = cljs.core.nth.call(null,vec__13361,(1),null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__13361,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__13361,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__13362__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__13362 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__13362__delegate.call(this,sa,f,x,y,z,more);};
G__13362.cljs$lang$maxFixedArity = 5;
G__13362.cljs$lang$applyTo = (function (arglist__13363){
var sa = cljs.core.first(arglist__13363);
arglist__13363 = cljs.core.next(arglist__13363);
var f = cljs.core.first(arglist__13363);
arglist__13363 = cljs.core.next(arglist__13363);
var x = cljs.core.first(arglist__13363);
arglist__13363 = cljs.core.next(arglist__13363);
var y = cljs.core.first(arglist__13363);
arglist__13363 = cljs.core.next(arglist__13363);
var z = cljs.core.first(arglist__13363);
var more = cljs.core.rest(arglist__13363);
return G__13362__delegate(sa,f,x,y,z,more);
});
G__13362.cljs$core$IFn$_invoke$arity$variadic = G__13362__delegate;
return G__13362;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj13365 = {};return obj13365;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__7920__auto__ = this$;if(and__7920__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__7920__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__8559__auto__ = (((this$ == null))?null:this$);return (function (){var or__7932__auto__ = (crate.binding._compute[goog.typeOf(x__8559__auto__)]);if(or__7932__auto__)
{return or__7932__auto__;
} else
{var or__7932__auto____$1 = (crate.binding._compute["_"]);if(or__7932__auto____$1)
{return or__7932__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__8499__auto__,writer__8500__auto__,opt__8501__auto__){return cljs.core._write.call(null,writer__8500__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13366 = cljs.core.seq.call(null,self__.watches);var chunk__13367 = null;var count__13368 = (0);var i__13369 = (0);while(true){
if((i__13369 < count__13368))
{var vec__13370 = cljs.core._nth.call(null,chunk__13367,i__13369);var key__$1 = cljs.core.nth.call(null,vec__13370,(0),null);var f = cljs.core.nth.call(null,vec__13370,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__13372 = seq__13366;
var G__13373 = chunk__13367;
var G__13374 = count__13368;
var G__13375 = (i__13369 + (1));
seq__13366 = G__13372;
chunk__13367 = G__13373;
count__13368 = G__13374;
i__13369 = G__13375;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13366);if(temp__4126__auto__)
{var seq__13366__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13366__$1))
{var c__8688__auto__ = cljs.core.chunk_first.call(null,seq__13366__$1);{
var G__13376 = cljs.core.chunk_rest.call(null,seq__13366__$1);
var G__13377 = c__8688__auto__;
var G__13378 = cljs.core.count.call(null,c__8688__auto__);
var G__13379 = (0);
seq__13366 = G__13376;
chunk__13367 = G__13377;
count__13368 = G__13378;
i__13369 = G__13379;
continue;
}
} else
{var vec__13371 = cljs.core.first.call(null,seq__13366__$1);var key__$1 = cljs.core.nth.call(null,vec__13371,(0),null);var f = cljs.core.nth.call(null,vec__13371,(1),null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__13380 = cljs.core.next.call(null,seq__13366__$1);
var G__13381 = null;
var G__13382 = (0);
var G__13383 = (0);
seq__13366 = G__13380;
chunk__13367 = G__13381;
count__13368 = G__13382;
i__13369 = G__13383;
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
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,("#<Computed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,self__.value))+">"));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__13388_13392 = cljs.core.seq.call(null,atms);var chunk__13389_13393 = null;var count__13390_13394 = (0);var i__13391_13395 = (0);while(true){
if((i__13391_13395 < count__13390_13394))
{var atm_13396 = cljs.core._nth.call(null,chunk__13389_13393,i__13391_13395);cljs.core.add_watch.call(null,atm_13396,k,((function (seq__13388_13392,chunk__13389_13393,count__13390_13394,i__13391_13395,atm_13396,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__13388_13392,chunk__13389_13393,count__13390_13394,i__13391_13395,atm_13396,k,neue))
);
{
var G__13397 = seq__13388_13392;
var G__13398 = chunk__13389_13393;
var G__13399 = count__13390_13394;
var G__13400 = (i__13391_13395 + (1));
seq__13388_13392 = G__13397;
chunk__13389_13393 = G__13398;
count__13390_13394 = G__13399;
i__13391_13395 = G__13400;
continue;
}
} else
{var temp__4126__auto___13401 = cljs.core.seq.call(null,seq__13388_13392);if(temp__4126__auto___13401)
{var seq__13388_13402__$1 = temp__4126__auto___13401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13388_13402__$1))
{var c__8688__auto___13403 = cljs.core.chunk_first.call(null,seq__13388_13402__$1);{
var G__13404 = cljs.core.chunk_rest.call(null,seq__13388_13402__$1);
var G__13405 = c__8688__auto___13403;
var G__13406 = cljs.core.count.call(null,c__8688__auto___13403);
var G__13407 = (0);
seq__13388_13392 = G__13404;
chunk__13389_13393 = G__13405;
count__13390_13394 = G__13406;
i__13391_13395 = G__13407;
continue;
}
} else
{var atm_13408 = cljs.core.first.call(null,seq__13388_13402__$1);cljs.core.add_watch.call(null,atm_13408,k,((function (seq__13388_13392,chunk__13389_13393,count__13390_13394,i__13391_13395,atm_13408,seq__13388_13402__$1,temp__4126__auto___13401,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__13388_13392,chunk__13389_13393,count__13390_13394,i__13391_13395,atm_13408,seq__13388_13402__$1,temp__4126__auto___13401,k,neue))
);
{
var G__13409 = cljs.core.next.call(null,seq__13388_13402__$1);
var G__13410 = null;
var G__13411 = (0);
var G__13412 = (0);
seq__13388_13392 = G__13409;
chunk__13389_13393 = G__13410;
count__13390_13394 = G__13411;
i__13391_13395 = G__13412;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__13413_SHARP_){return (p1__13413_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,(1340));
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj13415 = {};return obj13415;
})();
crate.binding.bindable = (function (){var obj13417 = {};return obj13417;
})();
crate.binding._value = (function _value(this$){if((function (){var and__7920__auto__ = this$;if(and__7920__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__7920__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__8559__auto__ = (((this$ == null))?null:this$);return (function (){var or__7932__auto__ = (crate.binding._value[goog.typeOf(x__8559__auto__)]);if(or__7932__auto__)
{return or__7932__auto__;
} else
{var or__7932__auto____$1 = (crate.binding._value["_"]);if(or__7932__auto____$1)
{return or__7932__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__7920__auto__ = this$;if(and__7920__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__7920__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__8559__auto__ = (((this$ == null))?null:this$);return (function (){var or__7932__auto__ = (crate.binding._on_change[goog.typeOf(x__8559__auto__)]);if(or__7932__auto__)
{return or__7932__auto__;
} else
{var or__7932__auto____$1 = (crate.binding._on_change["_"]);if(or__7932__auto____$1)
{return or__7932__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__8499__auto__,writer__8500__auto__,opt__8501__auto__){return cljs.core._write.call(null,writer__8500__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__8499__auto__,writer__8500__auto__,opt__8501__auto__){return cljs.core._write.call(null,writer__8500__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13418 = cljs.core.seq.call(null,self__.watches);var chunk__13419 = null;var count__13420 = (0);var i__13421 = (0);while(true){
if((i__13421 < count__13420))
{var vec__13422 = cljs.core._nth.call(null,chunk__13419,i__13421);var key = cljs.core.nth.call(null,vec__13422,(0),null);var f = cljs.core.nth.call(null,vec__13422,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__13424 = seq__13418;
var G__13425 = chunk__13419;
var G__13426 = count__13420;
var G__13427 = (i__13421 + (1));
seq__13418 = G__13424;
chunk__13419 = G__13425;
count__13420 = G__13426;
i__13421 = G__13427;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13418);if(temp__4126__auto__)
{var seq__13418__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13418__$1))
{var c__8688__auto__ = cljs.core.chunk_first.call(null,seq__13418__$1);{
var G__13428 = cljs.core.chunk_rest.call(null,seq__13418__$1);
var G__13429 = c__8688__auto__;
var G__13430 = cljs.core.count.call(null,c__8688__auto__);
var G__13431 = (0);
seq__13418 = G__13428;
chunk__13419 = G__13429;
count__13420 = G__13430;
i__13421 = G__13431;
continue;
}
} else
{var vec__13423 = cljs.core.first.call(null,seq__13418__$1);var key = cljs.core.nth.call(null,vec__13423,(0),null);var f = cljs.core.nth.call(null,vec__13423,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__13432 = cljs.core.next.call(null,seq__13418__$1);
var G__13433 = null;
var G__13434 = (0);
var G__13435 = (0);
seq__13418 = G__13432;
chunk__13419 = G__13433;
count__13420 = G__13434;
i__13421 = G__13435;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__8499__auto__,writer__8500__auto__,opt__8501__auto__){return cljs.core._write.call(null,writer__8500__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__13436){var vec__13437 = p__13436;var event = cljs.core.nth.call(null,vec__13437,(0),null);var el = cljs.core.nth.call(null,vec__13437,(1),null);var v = cljs.core.nth.call(null,vec__13437,(2),null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__7932__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));if(cljs.core.truth_(or__7932__auto__))
{return or__7932__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__13438){
var bc = cljs.core.first(arglist__13438);
var segs = cljs.core.rest(arglist__13438);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__13447_13455 = cljs.core.seq.call(null,added);var chunk__13448_13456 = null;var count__13449_13457 = (0);var i__13450_13458 = (0);while(true){
if((i__13450_13458 < count__13449_13457))
{var a_13459 = cljs.core._nth.call(null,chunk__13448_13456,i__13450_13458);crate.binding.bc_add.call(null,bc,a_13459,a_13459);
{
var G__13460 = seq__13447_13455;
var G__13461 = chunk__13448_13456;
var G__13462 = count__13449_13457;
var G__13463 = (i__13450_13458 + (1));
seq__13447_13455 = G__13460;
chunk__13448_13456 = G__13461;
count__13449_13457 = G__13462;
i__13450_13458 = G__13463;
continue;
}
} else
{var temp__4126__auto___13464 = cljs.core.seq.call(null,seq__13447_13455);if(temp__4126__auto___13464)
{var seq__13447_13465__$1 = temp__4126__auto___13464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13447_13465__$1))
{var c__8688__auto___13466 = cljs.core.chunk_first.call(null,seq__13447_13465__$1);{
var G__13467 = cljs.core.chunk_rest.call(null,seq__13447_13465__$1);
var G__13468 = c__8688__auto___13466;
var G__13469 = cljs.core.count.call(null,c__8688__auto___13466);
var G__13470 = (0);
seq__13447_13455 = G__13467;
chunk__13448_13456 = G__13468;
count__13449_13457 = G__13469;
i__13450_13458 = G__13470;
continue;
}
} else
{var a_13471 = cljs.core.first.call(null,seq__13447_13465__$1);crate.binding.bc_add.call(null,bc,a_13471,a_13471);
{
var G__13472 = cljs.core.next.call(null,seq__13447_13465__$1);
var G__13473 = null;
var G__13474 = (0);
var G__13475 = (0);
seq__13447_13455 = G__13472;
chunk__13448_13456 = G__13473;
count__13449_13457 = G__13474;
i__13450_13458 = G__13475;
continue;
}
}
} else
{}
}
break;
}
var seq__13451 = cljs.core.seq.call(null,removed);var chunk__13452 = null;var count__13453 = (0);var i__13454 = (0);while(true){
if((i__13454 < count__13453))
{var r = cljs.core._nth.call(null,chunk__13452,i__13454);crate.binding.bc_remove.call(null,bc,r);
{
var G__13476 = seq__13451;
var G__13477 = chunk__13452;
var G__13478 = count__13453;
var G__13479 = (i__13454 + (1));
seq__13451 = G__13476;
chunk__13452 = G__13477;
count__13453 = G__13478;
i__13454 = G__13479;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13451);if(temp__4126__auto__)
{var seq__13451__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13451__$1))
{var c__8688__auto__ = cljs.core.chunk_first.call(null,seq__13451__$1);{
var G__13480 = cljs.core.chunk_rest.call(null,seq__13451__$1);
var G__13481 = c__8688__auto__;
var G__13482 = cljs.core.count.call(null,c__8688__auto__);
var G__13483 = (0);
seq__13451 = G__13480;
chunk__13452 = G__13481;
count__13453 = G__13482;
i__13454 = G__13483;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__13451__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__13484 = cljs.core.next.call(null,seq__13451__$1);
var G__13485 = null;
var G__13486 = (0);
var G__13487 = (0);
seq__13451 = G__13484;
chunk__13452 = G__13485;
count__13453 = G__13486;
i__13454 = G__13487;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__13488){var vec__13491 = p__13488;var path = cljs.core.nth.call(null,vec__13491,(0),null);var opts = cljs.core.nth.call(null,vec__13491,(1),null);var vec__13492 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__13492,(0),null);var opts__$1 = cljs.core.nth.call(null,vec__13492,(1),null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__13492,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__13491,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__13492,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__13491,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__13488 = null;if (arguments.length > 1) {
  p__13488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__13488);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__13493){
var atm = cljs.core.first(arglist__13493);
var p__13488 = cljs.core.rest(arglist__13493);
return bound_coll__delegate(atm,p__13488);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__13494){var vec__13496 = p__13494;var opts = cljs.core.nth.call(null,vec__13496,(0),null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__13496,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__13496,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__13494 = null;if (arguments.length > 2) {
  p__13494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__13494);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__13497){
var as = cljs.core.first(arglist__13497);
arglist__13497 = cljs.core.next(arglist__13497);
var atm = cljs.core.first(arglist__13497);
var p__13494 = cljs.core.rest(arglist__13497);
return map_bound__delegate(as,atm,p__13494);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__13499 = b;if(G__13499)
{var bit__8582__auto__ = null;if(cljs.core.truth_((function (){var or__7932__auto__ = bit__8582__auto__;if(cljs.core.truth_(or__7932__auto__))
{return or__7932__auto__;
} else
{return G__13499.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__13499.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__13499);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__13499);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__13501 = b;if(G__13501)
{var bit__8582__auto__ = null;if(cljs.core.truth_((function (){var or__7932__auto__ = bit__8582__auto__;if(cljs.core.truth_(or__7932__auto__))
{return or__7932__auto__;
} else
{return G__13501.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__13501.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__13501);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__13501);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__13503 = atm;if(G__13503)
{var bit__8582__auto__ = (G__13503.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__8582__auto__) || (G__13503.cljs$core$IDeref$))
{return true;
} else
{if((!G__13503.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13503);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13503);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__13504){var vec__13506 = p__13504;var func = cljs.core.nth.call(null,vec__13506,(0),null);var func__$1 = (function (){var or__7932__auto__ = func;if(cljs.core.truth_(or__7932__auto__))
{return or__7932__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__13504 = null;if (arguments.length > 1) {
  p__13504 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__13504);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__13507){
var atm = cljs.core.first(arglist__13507);
var p__13504 = cljs.core.rest(arglist__13507);
return bound__delegate(atm,p__13504);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map