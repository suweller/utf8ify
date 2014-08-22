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
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9377 = cljs.core.seq(self__.watches);var chunk__9378 = null;var count__9379 = (0);var i__9380 = (0);while(true){
if((i__9380 < count__9379))
{var vec__9381 = chunk__9378.cljs$core$IIndexed$_nth$arity$2(null,i__9380);var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9381,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9381,(1),null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));
{
var G__9383 = seq__9377;
var G__9384 = chunk__9378;
var G__9385 = count__9379;
var G__9386 = (i__9380 + (1));
seq__9377 = G__9383;
chunk__9378 = G__9384;
count__9379 = G__9385;
i__9380 = G__9386;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9377);if(temp__4126__auto__)
{var seq__9377__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9377__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__9377__$1);{
var G__9387 = cljs.core.chunk_rest(seq__9377__$1);
var G__9388 = c__4299__auto__;
var G__9389 = cljs.core.count(c__4299__auto__);
var G__9390 = (0);
seq__9377 = G__9387;
chunk__9378 = G__9388;
count__9379 = G__9389;
i__9380 = G__9390;
continue;
}
} else
{var vec__9382 = cljs.core.first(seq__9377__$1);var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9382,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9382,(1),null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));
{
var G__9391 = cljs.core.next(seq__9377__$1);
var G__9392 = null;
var G__9393 = (0);
var G__9394 = (0);
seq__9377 = G__9391;
chunk__9378 = G__9392;
count__9379 = G__9393;
i__9380 = G__9394;
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
{return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write(writer,("#<SubAtom: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path)], 0)))+">"));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__9396 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396,(0),null);var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396,(1),null);var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atm__$1),path__$2)),null,k));cljs.core.add_watch(atm__$1,k,((function (path__$1,vec__9396,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nv,path__$2);var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2);var latest_hash = cljs.core.hash(latest);if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,latest)))
{sa.prevhash = latest_hash;
return sa.cljs$core$IWatchable$_notify_watches$arity$3(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__9396,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sa.atm,cljs.core.assoc_in,sa.path,new_value);
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
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sa)) : f.call(null,cljs.core.deref(sa))));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sa),x) : f.call(null,cljs.core.deref(sa),x)));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sa),x,y) : f.call(null,cljs.core.deref(sa),x,y)));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(sa),x,y,z) : f.call(null,cljs.core.deref(sa),x,y,z)));
});
var sub_swap_BANG___6 = (function() { 
var G__9397__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.deref(sa),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__9397 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__9397__delegate.call(this,sa,f,x,y,z,more);};
G__9397.cljs$lang$maxFixedArity = 5;
G__9397.cljs$lang$applyTo = (function (arglist__9398){
var sa = cljs.core.first(arglist__9398);
arglist__9398 = cljs.core.next(arglist__9398);
var f = cljs.core.first(arglist__9398);
arglist__9398 = cljs.core.next(arglist__9398);
var x = cljs.core.first(arglist__9398);
arglist__9398 = cljs.core.next(arglist__9398);
var y = cljs.core.first(arglist__9398);
arglist__9398 = cljs.core.next(arglist__9398);
var z = cljs.core.first(arglist__9398);
var more = cljs.core.rest(arglist__9398);
return G__9397__delegate(sa,f,x,y,z,more);
});
G__9397.cljs$core$IFn$_invoke$arity$variadic = G__9397__delegate;
return G__9397;
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
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch(sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj9400 = {};return obj9400;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__3531__auto__ = this$;if(and__3531__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3531__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__4170__auto__ = (((this$ == null))?null:this$);return (function (){var or__3543__auto__ = (crate.binding._compute[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (crate.binding._compute["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("computable.-compute",this$);
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
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.func,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,self__.atms));
return cljs.core._notify_watches(this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9401 = cljs.core.seq(self__.watches);var chunk__9402 = null;var count__9403 = (0);var i__9404 = (0);while(true){
if((i__9404 < count__9403))
{var vec__9405 = chunk__9402.cljs$core$IIndexed$_nth$arity$2(null,i__9404);var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9405,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9405,(1),null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));
{
var G__9407 = seq__9401;
var G__9408 = chunk__9402;
var G__9409 = count__9403;
var G__9410 = (i__9404 + (1));
seq__9401 = G__9407;
chunk__9402 = G__9408;
count__9403 = G__9409;
i__9404 = G__9410;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9401);if(temp__4126__auto__)
{var seq__9401__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9401__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__9401__$1);{
var G__9411 = cljs.core.chunk_rest(seq__9401__$1);
var G__9412 = c__4299__auto__;
var G__9413 = cljs.core.count(c__4299__auto__);
var G__9414 = (0);
seq__9401 = G__9411;
chunk__9402 = G__9412;
count__9403 = G__9413;
i__9404 = G__9414;
continue;
}
} else
{var vec__9406 = cljs.core.first(seq__9401__$1);var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9406,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9406,(1),null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));
{
var G__9415 = cljs.core.next(seq__9401__$1);
var G__9416 = null;
var G__9417 = (0);
var G__9418 = (0);
seq__9401 = G__9415;
chunk__9402 = G__9416;
count__9403 = G__9417;
i__9404 = G__9418;
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
{return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write(writer,("#<Computed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.value], 0)))+">"));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));neue.crate$binding$computable$_compute$arity$1(null);
var seq__9423_9427 = cljs.core.seq(atms);var chunk__9424_9428 = null;var count__9425_9429 = (0);var i__9426_9430 = (0);while(true){
if((i__9426_9430 < count__9425_9429))
{var atm_9431 = chunk__9424_9428.cljs$core$IIndexed$_nth$arity$2(null,i__9426_9430);cljs.core.add_watch(atm_9431,k,((function (seq__9423_9427,chunk__9424_9428,count__9425_9429,i__9426_9430,atm_9431,k,neue){
return (function (_,___$1,___$2,___$3){return neue.crate$binding$computable$_compute$arity$1(null);
});})(seq__9423_9427,chunk__9424_9428,count__9425_9429,i__9426_9430,atm_9431,k,neue))
);
{
var G__9432 = seq__9423_9427;
var G__9433 = chunk__9424_9428;
var G__9434 = count__9425_9429;
var G__9435 = (i__9426_9430 + (1));
seq__9423_9427 = G__9432;
chunk__9424_9428 = G__9433;
count__9425_9429 = G__9434;
i__9426_9430 = G__9435;
continue;
}
} else
{var temp__4126__auto___9436 = cljs.core.seq(seq__9423_9427);if(temp__4126__auto___9436)
{var seq__9423_9437__$1 = temp__4126__auto___9436;if(cljs.core.chunked_seq_QMARK_(seq__9423_9437__$1))
{var c__4299__auto___9438 = cljs.core.chunk_first(seq__9423_9437__$1);{
var G__9439 = cljs.core.chunk_rest(seq__9423_9437__$1);
var G__9440 = c__4299__auto___9438;
var G__9441 = cljs.core.count(c__4299__auto___9438);
var G__9442 = (0);
seq__9423_9427 = G__9439;
chunk__9424_9428 = G__9440;
count__9425_9429 = G__9441;
i__9426_9430 = G__9442;
continue;
}
} else
{var atm_9443 = cljs.core.first(seq__9423_9437__$1);cljs.core.add_watch(atm_9443,k,((function (seq__9423_9427,chunk__9424_9428,count__9425_9429,i__9426_9430,atm_9443,seq__9423_9437__$1,temp__4126__auto___9436,k,neue){
return (function (_,___$1,___$2,___$3){return neue.crate$binding$computable$_compute$arity$1(null);
});})(seq__9423_9427,chunk__9424_9428,count__9425_9429,i__9426_9430,atm_9443,seq__9423_9437__$1,temp__4126__auto___9436,k,neue))
);
{
var G__9444 = cljs.core.next(seq__9423_9437__$1);
var G__9445 = null;
var G__9446 = (0);
var G__9447 = (0);
seq__9423_9427 = G__9444;
chunk__9424_9428 = G__9445;
count__9425_9429 = G__9446;
i__9426_9430 = G__9447;
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
crate.binding.z = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter(cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter((function (p1__9448_SHARP_){return (p1__9448_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.binding.z,cljs.core.conj,(1340));
cljs.core.deref(crate.binding.y);
cljs.core.deref(crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches(w,o,v);
});
crate.binding.bindable_coll = (function (){var obj9450 = {};return obj9450;
})();
crate.binding.bindable = (function (){var obj9452 = {};return obj9452;
})();
crate.binding._value = (function _value(this$){if((function (){var and__3531__auto__ = this$;if(and__3531__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3531__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__4170__auto__ = (((this$ == null))?null:this$);return (function (){var or__3543__auto__ = (crate.binding._value[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (crate.binding._value["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__3531__auto__ = this$;if(and__3531__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3531__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__4170__auto__ = (((this$ == null))?null:this$);return (function (){var or__3543__auto__ = (crate.binding._on_change[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (crate.binding._on_change["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("bindable.-on-change",this$);
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
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.value_func.cljs$core$IFn$_invoke$arity$1 ? self__.value_func.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atm)) : self__.value_func.call(null,cljs.core.deref(self__.atm)));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch(self__.atm,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("atom-binding"),((function (this$__$1){
return (function (){return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(crate.binding._value(this$__$1)) : func.call(null,crate.binding._value(this$__$1)));
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
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9453 = cljs.core.seq(self__.watches);var chunk__9454 = null;var count__9455 = (0);var i__9456 = (0);while(true){
if((i__9456 < count__9455))
{var vec__9457 = chunk__9454.cljs$core$IIndexed$_nth$arity$2(null,i__9456);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9457,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9457,(1),null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9459 = seq__9453;
var G__9460 = chunk__9454;
var G__9461 = count__9455;
var G__9462 = (i__9456 + (1));
seq__9453 = G__9459;
chunk__9454 = G__9460;
count__9455 = G__9461;
i__9456 = G__9462;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9453);if(temp__4126__auto__)
{var seq__9453__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9453__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__9453__$1);{
var G__9463 = cljs.core.chunk_rest(seq__9453__$1);
var G__9464 = c__4299__auto__;
var G__9465 = cljs.core.count(c__4299__auto__);
var G__9466 = (0);
seq__9453 = G__9463;
chunk__9454 = G__9464;
count__9455 = G__9465;
i__9456 = G__9466;
continue;
}
} else
{var vec__9458 = cljs.core.first(seq__9453__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9458,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9458,(1),null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9467 = cljs.core.next(seq__9453__$1);
var G__9468 = null;
var G__9469 = (0);
var G__9470 = (0);
seq__9453 = G__9467;
chunk__9454 = G__9468;
count__9455 = G__9469;
i__9456 = G__9470;
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
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
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
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$14,cljs.core.vals(this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__9471){var vec__9472 = p__9471;var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(0),null);var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(2),null);return (func.cljs$core$IFn$_invoke$arity$3 ? func.cljs$core$IFn$_invoke$arity$3(event,el,v) : func.call(null,event,el,v));
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom(bc.atm,path);var elem = crate.binding.opt(bc,cljs.core.constant$keyword$15).call(null,sa);bc.stuff = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$14,elem,cljs.core.constant$keyword$16,sa], null));
return crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$17,elem,cljs.core.deref(sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bc.stuff,key);
crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$18,cljs.core.constant$keyword$14.cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_(coll))
{return cljs.core.seq(coll);
} else
{if(cljs.core.set_QMARK_(coll))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),coll);
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.map_indexed(cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(keyfn,crate.binding.__GT_indexed(coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__3543__auto__ = crate.binding.opt(bc,cljs.core.constant$keyword$19);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
__GT_path.cljs$lang$applyTo = (function (arglist__9473){
var bc = cljs.core.first(arglist__9473);
var segs = cljs.core.rest(arglist__9473);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(prev));var nset = crate.binding.__GT_keyed(neue,crate.binding.opt(bc,cljs.core.constant$keyword$20));var added = cljs.core.into(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nset,pset));var removed = cljs.core.into(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pset,nset));var seq__9482_9490 = cljs.core.seq(added);var chunk__9483_9491 = null;var count__9484_9492 = (0);var i__9485_9493 = (0);while(true){
if((i__9485_9493 < count__9484_9492))
{var a_9494 = chunk__9483_9491.cljs$core$IIndexed$_nth$arity$2(null,i__9485_9493);crate.binding.bc_add(bc,a_9494,a_9494);
{
var G__9495 = seq__9482_9490;
var G__9496 = chunk__9483_9491;
var G__9497 = count__9484_9492;
var G__9498 = (i__9485_9493 + (1));
seq__9482_9490 = G__9495;
chunk__9483_9491 = G__9496;
count__9484_9492 = G__9497;
i__9485_9493 = G__9498;
continue;
}
} else
{var temp__4126__auto___9499 = cljs.core.seq(seq__9482_9490);if(temp__4126__auto___9499)
{var seq__9482_9500__$1 = temp__4126__auto___9499;if(cljs.core.chunked_seq_QMARK_(seq__9482_9500__$1))
{var c__4299__auto___9501 = cljs.core.chunk_first(seq__9482_9500__$1);{
var G__9502 = cljs.core.chunk_rest(seq__9482_9500__$1);
var G__9503 = c__4299__auto___9501;
var G__9504 = cljs.core.count(c__4299__auto___9501);
var G__9505 = (0);
seq__9482_9490 = G__9502;
chunk__9483_9491 = G__9503;
count__9484_9492 = G__9504;
i__9485_9493 = G__9505;
continue;
}
} else
{var a_9506 = cljs.core.first(seq__9482_9500__$1);crate.binding.bc_add(bc,a_9506,a_9506);
{
var G__9507 = cljs.core.next(seq__9482_9500__$1);
var G__9508 = null;
var G__9509 = (0);
var G__9510 = (0);
seq__9482_9490 = G__9507;
chunk__9483_9491 = G__9508;
count__9484_9492 = G__9509;
i__9485_9493 = G__9510;
continue;
}
}
} else
{}
}
break;
}
var seq__9486 = cljs.core.seq(removed);var chunk__9487 = null;var count__9488 = (0);var i__9489 = (0);while(true){
if((i__9489 < count__9488))
{var r = chunk__9487.cljs$core$IIndexed$_nth$arity$2(null,i__9489);crate.binding.bc_remove(bc,r);
{
var G__9511 = seq__9486;
var G__9512 = chunk__9487;
var G__9513 = count__9488;
var G__9514 = (i__9489 + (1));
seq__9486 = G__9511;
chunk__9487 = G__9512;
count__9488 = G__9513;
i__9489 = G__9514;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9486);if(temp__4126__auto__)
{var seq__9486__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9486__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__9486__$1);{
var G__9515 = cljs.core.chunk_rest(seq__9486__$1);
var G__9516 = c__4299__auto__;
var G__9517 = cljs.core.count(c__4299__auto__);
var G__9518 = (0);
seq__9486 = G__9515;
chunk__9487 = G__9516;
count__9488 = G__9517;
i__9489 = G__9518;
continue;
}
} else
{var r = cljs.core.first(seq__9486__$1);crate.binding.bc_remove(bc,r);
{
var G__9519 = cljs.core.next(seq__9486__$1);
var G__9520 = null;
var G__9521 = (0);
var G__9522 = (0);
seq__9486 = G__9519;
chunk__9487 = G__9520;
count__9488 = G__9521;
i__9489 = G__9522;
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
var bound_coll__delegate = function (atm,p__9523){var vec__9526 = p__9523;var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9526,(0),null);var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9526,(1),null);var vec__9527 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9527,(0),null);var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9527,(1),null);var atm__$1 = ((cljs.core.not(path__$1))?atm:crate.binding.subatom(atm,path__$1));var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$19,path__$1);var opts__$3 = ((cljs.core.not(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,cljs.core.constant$keyword$20,cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,cljs.core.constant$keyword$20,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map()));cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (vec__9527,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__9526,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare(bc,neue);
});})(vec__9527,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__9526,path,opts))
);
crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__9523 = null;if (arguments.length > 1) {
  p__9523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__9523);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__9528){
var atm = cljs.core.first(arglist__9528);
var p__9523 = cljs.core.rest(arglist__9528);
return bound_coll__delegate(atm,p__9523);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__9529){var vec__9531 = p__9529;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9531,(0),null);var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$15,as);var atm__$1 = ((cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom(atm,cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$20,cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$20,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map()));cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__9531,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare(bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__9531,opts))
);
crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__9529 = null;if (arguments.length > 2) {
  p__9529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__9529);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__9532){
var as = cljs.core.first(arglist__9532);
arglist__9532 = cljs.core.next(arglist__9532);
var atm = cljs.core.first(arglist__9532);
var p__9529 = cljs.core.rest(arglist__9532);
return map_bound__delegate(as,atm,p__9529);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__9534 = b;if(G__9534)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__9534.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__9534.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,G__9534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,G__9534);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__9536 = b;if(G__9536)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__9536.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__9536.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,G__9536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,G__9536);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__9538 = atm;if(G__9538)
{var bit__4193__auto__ = (G__9538.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4193__auto__) || (G__9538.cljs$core$IDeref$))
{return true;
} else
{if((!G__9538.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__9538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__9538);
}
});
crate.binding.value = (function value(b){return crate.binding._value(b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last(sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change(b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__9539){var vec__9541 = p__9539;var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9541,(0),null);var func__$1 = (function (){var or__3543__auto__ = func;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__9539 = null;if (arguments.length > 1) {
  p__9539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__9539);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__9542){
var atm = cljs.core.first(arglist__9542);
var p__9539 = cljs.core.rest(arglist__9542);
return bound__delegate(atm,p__9539);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
