// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10754 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10754 = (function (f,fn_handler,meta10755){
this.f = f;
this.fn_handler = fn_handler;
this.meta10755 = meta10755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10754.cljs$lang$type = true;
cljs.core.async.t10754.cljs$lang$ctorStr = "cljs.core.async/t10754";
cljs.core.async.t10754.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10754");
});
cljs.core.async.t10754.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10756){var self__ = this;
var _10756__$1 = this;return self__.meta10755;
});
cljs.core.async.t10754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10756,meta10755__$1){var self__ = this;
var _10756__$1 = this;return (new cljs.core.async.t10754(self__.f,self__.fn_handler,meta10755__$1));
});
cljs.core.async.__GT_t10754 = (function __GT_t10754(f__$1,fn_handler__$1,meta10755){return (new cljs.core.async.t10754(f__$1,fn_handler__$1,meta10755));
});
}
return (new cljs.core.async.t10754(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10758 = buff;if(G__10758)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10758.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10758.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10758);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10758);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_10759 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10759) : fn1.call(null,val_10759));
} else
{cljs.core.async.impl.dispatch.run(((function (val_10759,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10759) : fn1.call(null,val_10759));
});})(val_10759,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___10760 = n;var x_10761 = (0);while(true){
if((x_10761 < n__4399__auto___10760))
{(a[x_10761] = (0));
{
var G__10762 = (x_10761 + (1));
x_10761 = G__10762;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10763 = (i + (1));
i = G__10763;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t10767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10767 = (function (flag,alt_flag,meta10768){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10768 = meta10768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10767.cljs$lang$type = true;
cljs.core.async.t10767.cljs$lang$ctorStr = "cljs.core.async/t10767";
cljs.core.async.t10767.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10767");
});})(flag))
;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10769){var self__ = this;
var _10769__$1 = this;return self__.meta10768;
});})(flag))
;
cljs.core.async.t10767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10769,meta10768__$1){var self__ = this;
var _10769__$1 = this;return (new cljs.core.async.t10767(self__.flag,self__.alt_flag,meta10768__$1));
});})(flag))
;
cljs.core.async.__GT_t10767 = ((function (flag){
return (function __GT_t10767(flag__$1,alt_flag__$1,meta10768){return (new cljs.core.async.t10767(flag__$1,alt_flag__$1,meta10768));
});})(flag))
;
}
return (new cljs.core.async.t10767(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10773 = (function (cb,flag,alt_handler,meta10774){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10774 = meta10774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10773.cljs$lang$type = true;
cljs.core.async.t10773.cljs$lang$ctorStr = "cljs.core.async/t10773";
cljs.core.async.t10773.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10773");
});
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t10773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10775){var self__ = this;
var _10775__$1 = this;return self__.meta10774;
});
cljs.core.async.t10773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10775,meta10774__$1){var self__ = this;
var _10775__$1 = this;return (new cljs.core.async.t10773(self__.cb,self__.flag,self__.alt_handler,meta10774__$1));
});
cljs.core.async.__GT_t10773 = (function __GT_t10773(cb__$1,flag__$1,alt_handler__$1,meta10774){return (new cljs.core.async.t10773(cb__$1,flag__$1,alt_handler__$1,meta10774));
});
}
return (new cljs.core.async.t10773(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10776_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10776_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10776_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10777_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10777_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10777_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10778 = (i + (1));
i = G__10778;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10779){var map__10781 = p__10779;var map__10781__$1 = ((cljs.core.seq_QMARK_(map__10781))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10781):map__10781);var opts = map__10781__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10779 = null;if (arguments.length > 1) {
  p__10779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10779);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10782){
var ports = cljs.core.first(arglist__10782);
var p__10779 = cljs.core.rest(arglist__10782);
return alts_BANG___delegate(ports,p__10779);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10790 = (function (ch,f,map_LT_,meta10791){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10791 = meta10791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10790.cljs$lang$type = true;
cljs.core.async.t10790.cljs$lang$ctorStr = "cljs.core.async/t10790";
cljs.core.async.t10790.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10790");
});
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t10793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10793 = (function (fn1,_,meta10791,ch,f,map_LT_,meta10794){
this.fn1 = fn1;
this._ = _;
this.meta10791 = meta10791;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10794 = meta10794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10793.cljs$lang$type = true;
cljs.core.async.t10793.cljs$lang$ctorStr = "cljs.core.async/t10793";
cljs.core.async.t10793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10793");
});})(___$1))
;
cljs.core.async.t10793.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t10793.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t10793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10783_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__10783_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10783_SHARP_) : self__.f.call(null,p1__10783_SHARP_)))) : f1.call(null,(((p1__10783_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10783_SHARP_) : self__.f.call(null,p1__10783_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10795){var self__ = this;
var _10795__$1 = this;return self__.meta10794;
});})(___$1))
;
cljs.core.async.t10793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10795,meta10794__$1){var self__ = this;
var _10795__$1 = this;return (new cljs.core.async.t10793(self__.fn1,self__._,self__.meta10791,self__.ch,self__.f,self__.map_LT_,meta10794__$1));
});})(___$1))
;
cljs.core.async.__GT_t10793 = ((function (___$1){
return (function __GT_t10793(fn1__$1,___$2,meta10791__$1,ch__$2,f__$2,map_LT___$2,meta10794){return (new cljs.core.async.t10793(fn1__$1,___$2,meta10791__$1,ch__$2,f__$2,map_LT___$2,meta10794));
});})(___$1))
;
}
return (new cljs.core.async.t10793(fn1,___$1,self__.meta10791,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t10790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10792){var self__ = this;
var _10792__$1 = this;return self__.meta10791;
});
cljs.core.async.t10790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10792,meta10791__$1){var self__ = this;
var _10792__$1 = this;return (new cljs.core.async.t10790(self__.ch,self__.f,self__.map_LT_,meta10791__$1));
});
cljs.core.async.__GT_t10790 = (function __GT_t10790(ch__$1,f__$1,map_LT___$1,meta10791){return (new cljs.core.async.t10790(ch__$1,f__$1,map_LT___$1,meta10791));
});
}
return (new cljs.core.async.t10790(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10799 = (function (ch,f,map_GT_,meta10800){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10800 = meta10800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10799.cljs$lang$type = true;
cljs.core.async.t10799.cljs$lang$ctorStr = "cljs.core.async/t10799";
cljs.core.async.t10799.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10799");
});
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10801){var self__ = this;
var _10801__$1 = this;return self__.meta10800;
});
cljs.core.async.t10799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10801,meta10800__$1){var self__ = this;
var _10801__$1 = this;return (new cljs.core.async.t10799(self__.ch,self__.f,self__.map_GT_,meta10800__$1));
});
cljs.core.async.__GT_t10799 = (function __GT_t10799(ch__$1,f__$1,map_GT___$1,meta10800){return (new cljs.core.async.t10799(ch__$1,f__$1,map_GT___$1,meta10800));
});
}
return (new cljs.core.async.t10799(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10805 = (function (ch,p,filter_GT_,meta10806){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10806 = meta10806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10805.cljs$lang$type = true;
cljs.core.async.t10805.cljs$lang$ctorStr = "cljs.core.async/t10805";
cljs.core.async.t10805.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t10805");
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t10805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10807){var self__ = this;
var _10807__$1 = this;return self__.meta10806;
});
cljs.core.async.t10805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10807,meta10806__$1){var self__ = this;
var _10807__$1 = this;return (new cljs.core.async.t10805(self__.ch,self__.p,self__.filter_GT_,meta10806__$1));
});
cljs.core.async.__GT_t10805 = (function __GT_t10805(ch__$1,p__$1,filter_GT___$1,meta10806){return (new cljs.core.async.t10805(ch__$1,p__$1,filter_GT___$1,meta10806));
});
}
return (new cljs.core.async.t10805(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___10890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___10890,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___10890,out){
return (function (state_10869){var state_val_10870 = (state_10869[(1)]);if((state_val_10870 === (7)))
{var inst_10865 = (state_10869[(2)]);var state_10869__$1 = state_10869;var statearr_10871_10891 = state_10869__$1;(statearr_10871_10891[(2)] = inst_10865);
(statearr_10871_10891[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (1)))
{var state_10869__$1 = state_10869;var statearr_10872_10892 = state_10869__$1;(statearr_10872_10892[(2)] = null);
(statearr_10872_10892[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (4)))
{var inst_10851 = (state_10869[(7)]);var inst_10851__$1 = (state_10869[(2)]);var inst_10852 = (inst_10851__$1 == null);var state_10869__$1 = (function (){var statearr_10873 = state_10869;(statearr_10873[(7)] = inst_10851__$1);
return statearr_10873;
})();if(cljs.core.truth_(inst_10852))
{var statearr_10874_10893 = state_10869__$1;(statearr_10874_10893[(1)] = (5));
} else
{var statearr_10875_10894 = state_10869__$1;(statearr_10875_10894[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (6)))
{var inst_10851 = (state_10869[(7)]);var inst_10856 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10851) : p.call(null,inst_10851));var state_10869__$1 = state_10869;if(cljs.core.truth_(inst_10856))
{var statearr_10876_10895 = state_10869__$1;(statearr_10876_10895[(1)] = (8));
} else
{var statearr_10877_10896 = state_10869__$1;(statearr_10877_10896[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (3)))
{var inst_10867 = (state_10869[(2)]);var state_10869__$1 = state_10869;return cljs.core.async.impl.ioc_helpers.return_chan(state_10869__$1,inst_10867);
} else
{if((state_val_10870 === (2)))
{var state_10869__$1 = state_10869;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10869__$1,(4),ch);
} else
{if((state_val_10870 === (11)))
{var inst_10859 = (state_10869[(2)]);var state_10869__$1 = state_10869;var statearr_10878_10897 = state_10869__$1;(statearr_10878_10897[(2)] = inst_10859);
(statearr_10878_10897[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (9)))
{var state_10869__$1 = state_10869;var statearr_10879_10898 = state_10869__$1;(statearr_10879_10898[(2)] = null);
(statearr_10879_10898[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (5)))
{var inst_10854 = cljs.core.async.close_BANG_(out);var state_10869__$1 = state_10869;var statearr_10880_10899 = state_10869__$1;(statearr_10880_10899[(2)] = inst_10854);
(statearr_10880_10899[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (10)))
{var inst_10862 = (state_10869[(2)]);var state_10869__$1 = (function (){var statearr_10881 = state_10869;(statearr_10881[(8)] = inst_10862);
return statearr_10881;
})();var statearr_10882_10900 = state_10869__$1;(statearr_10882_10900[(2)] = null);
(statearr_10882_10900[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_10870 === (8)))
{var inst_10851 = (state_10869[(7)]);var state_10869__$1 = state_10869;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10869__$1,(11),out,inst_10851);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___10890,out))
;return ((function (switch__5693__auto__,c__5708__auto___10890,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_10886 = [null,null,null,null,null,null,null,null,null];(statearr_10886[(0)] = state_machine__5694__auto__);
(statearr_10886[(1)] = (1));
return statearr_10886;
});
var state_machine__5694__auto____1 = (function (state_10869){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_10869);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e10887){if((e10887 instanceof Object))
{var ex__5697__auto__ = e10887;var statearr_10888_10901 = state_10869;(statearr_10888_10901[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10869);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e10887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__10902 = state_10869;
state_10869 = G__10902;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_10869){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_10869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___10890,out))
})();var state__5710__auto__ = (function (){var statearr_10889 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_10889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___10890);
return statearr_10889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___10890,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_11068){var state_val_11069 = (state_11068[(1)]);if((state_val_11069 === (7)))
{var inst_11064 = (state_11068[(2)]);var state_11068__$1 = state_11068;var statearr_11070_11111 = state_11068__$1;(statearr_11070_11111[(2)] = inst_11064);
(statearr_11070_11111[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (20)))
{var inst_11034 = (state_11068[(7)]);var inst_11045 = (state_11068[(2)]);var inst_11046 = cljs.core.next(inst_11034);var inst_11020 = inst_11046;var inst_11021 = null;var inst_11022 = (0);var inst_11023 = (0);var state_11068__$1 = (function (){var statearr_11071 = state_11068;(statearr_11071[(8)] = inst_11023);
(statearr_11071[(9)] = inst_11020);
(statearr_11071[(10)] = inst_11045);
(statearr_11071[(11)] = inst_11021);
(statearr_11071[(12)] = inst_11022);
return statearr_11071;
})();var statearr_11072_11112 = state_11068__$1;(statearr_11072_11112[(2)] = null);
(statearr_11072_11112[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (1)))
{var state_11068__$1 = state_11068;var statearr_11073_11113 = state_11068__$1;(statearr_11073_11113[(2)] = null);
(statearr_11073_11113[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (4)))
{var inst_11009 = (state_11068[(13)]);var inst_11009__$1 = (state_11068[(2)]);var inst_11010 = (inst_11009__$1 == null);var state_11068__$1 = (function (){var statearr_11074 = state_11068;(statearr_11074[(13)] = inst_11009__$1);
return statearr_11074;
})();if(cljs.core.truth_(inst_11010))
{var statearr_11075_11114 = state_11068__$1;(statearr_11075_11114[(1)] = (5));
} else
{var statearr_11076_11115 = state_11068__$1;(statearr_11076_11115[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (15)))
{var state_11068__$1 = state_11068;var statearr_11080_11116 = state_11068__$1;(statearr_11080_11116[(2)] = null);
(statearr_11080_11116[(1)] = (16));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (21)))
{var state_11068__$1 = state_11068;var statearr_11081_11117 = state_11068__$1;(statearr_11081_11117[(2)] = null);
(statearr_11081_11117[(1)] = (23));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (13)))
{var inst_11023 = (state_11068[(8)]);var inst_11020 = (state_11068[(9)]);var inst_11021 = (state_11068[(11)]);var inst_11022 = (state_11068[(12)]);var inst_11030 = (state_11068[(2)]);var inst_11031 = (inst_11023 + (1));var tmp11077 = inst_11020;var tmp11078 = inst_11021;var tmp11079 = inst_11022;var inst_11020__$1 = tmp11077;var inst_11021__$1 = tmp11078;var inst_11022__$1 = tmp11079;var inst_11023__$1 = inst_11031;var state_11068__$1 = (function (){var statearr_11082 = state_11068;(statearr_11082[(8)] = inst_11023__$1);
(statearr_11082[(9)] = inst_11020__$1);
(statearr_11082[(11)] = inst_11021__$1);
(statearr_11082[(12)] = inst_11022__$1);
(statearr_11082[(14)] = inst_11030);
return statearr_11082;
})();var statearr_11083_11118 = state_11068__$1;(statearr_11083_11118[(2)] = null);
(statearr_11083_11118[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (22)))
{var state_11068__$1 = state_11068;var statearr_11084_11119 = state_11068__$1;(statearr_11084_11119[(2)] = null);
(statearr_11084_11119[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (6)))
{var inst_11009 = (state_11068[(13)]);var inst_11018 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11009) : f.call(null,inst_11009));var inst_11019 = cljs.core.seq(inst_11018);var inst_11020 = inst_11019;var inst_11021 = null;var inst_11022 = (0);var inst_11023 = (0);var state_11068__$1 = (function (){var statearr_11085 = state_11068;(statearr_11085[(8)] = inst_11023);
(statearr_11085[(9)] = inst_11020);
(statearr_11085[(11)] = inst_11021);
(statearr_11085[(12)] = inst_11022);
return statearr_11085;
})();var statearr_11086_11120 = state_11068__$1;(statearr_11086_11120[(2)] = null);
(statearr_11086_11120[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (17)))
{var inst_11034 = (state_11068[(7)]);var inst_11038 = cljs.core.chunk_first(inst_11034);var inst_11039 = cljs.core.chunk_rest(inst_11034);var inst_11040 = cljs.core.count(inst_11038);var inst_11020 = inst_11039;var inst_11021 = inst_11038;var inst_11022 = inst_11040;var inst_11023 = (0);var state_11068__$1 = (function (){var statearr_11087 = state_11068;(statearr_11087[(8)] = inst_11023);
(statearr_11087[(9)] = inst_11020);
(statearr_11087[(11)] = inst_11021);
(statearr_11087[(12)] = inst_11022);
return statearr_11087;
})();var statearr_11088_11121 = state_11068__$1;(statearr_11088_11121[(2)] = null);
(statearr_11088_11121[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (3)))
{var inst_11066 = (state_11068[(2)]);var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.return_chan(state_11068__$1,inst_11066);
} else
{if((state_val_11069 === (12)))
{var inst_11054 = (state_11068[(2)]);var state_11068__$1 = state_11068;var statearr_11089_11122 = state_11068__$1;(statearr_11089_11122[(2)] = inst_11054);
(statearr_11089_11122[(1)] = (9));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (2)))
{var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11068__$1,(4),in$);
} else
{if((state_val_11069 === (23)))
{var inst_11062 = (state_11068[(2)]);var state_11068__$1 = state_11068;var statearr_11090_11123 = state_11068__$1;(statearr_11090_11123[(2)] = inst_11062);
(statearr_11090_11123[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (19)))
{var inst_11049 = (state_11068[(2)]);var state_11068__$1 = state_11068;var statearr_11091_11124 = state_11068__$1;(statearr_11091_11124[(2)] = inst_11049);
(statearr_11091_11124[(1)] = (16));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (11)))
{var inst_11020 = (state_11068[(9)]);var inst_11034 = (state_11068[(7)]);var inst_11034__$1 = cljs.core.seq(inst_11020);var state_11068__$1 = (function (){var statearr_11092 = state_11068;(statearr_11092[(7)] = inst_11034__$1);
return statearr_11092;
})();if(inst_11034__$1)
{var statearr_11093_11125 = state_11068__$1;(statearr_11093_11125[(1)] = (14));
} else
{var statearr_11094_11126 = state_11068__$1;(statearr_11094_11126[(1)] = (15));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (9)))
{var inst_11056 = (state_11068[(2)]);var inst_11057 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_11068__$1 = (function (){var statearr_11095 = state_11068;(statearr_11095[(15)] = inst_11056);
return statearr_11095;
})();if(cljs.core.truth_(inst_11057))
{var statearr_11096_11127 = state_11068__$1;(statearr_11096_11127[(1)] = (21));
} else
{var statearr_11097_11128 = state_11068__$1;(statearr_11097_11128[(1)] = (22));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (5)))
{var inst_11012 = cljs.core.async.close_BANG_(out);var state_11068__$1 = state_11068;var statearr_11098_11129 = state_11068__$1;(statearr_11098_11129[(2)] = inst_11012);
(statearr_11098_11129[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (14)))
{var inst_11034 = (state_11068[(7)]);var inst_11036 = cljs.core.chunked_seq_QMARK_(inst_11034);var state_11068__$1 = state_11068;if(inst_11036)
{var statearr_11099_11130 = state_11068__$1;(statearr_11099_11130[(1)] = (17));
} else
{var statearr_11100_11131 = state_11068__$1;(statearr_11100_11131[(1)] = (18));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (16)))
{var inst_11052 = (state_11068[(2)]);var state_11068__$1 = state_11068;var statearr_11101_11132 = state_11068__$1;(statearr_11101_11132[(2)] = inst_11052);
(statearr_11101_11132[(1)] = (12));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11069 === (10)))
{var inst_11023 = (state_11068[(8)]);var inst_11021 = (state_11068[(11)]);var inst_11028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11021,inst_11023);var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11068__$1,(13),out,inst_11028);
} else
{if((state_val_11069 === (18)))
{var inst_11034 = (state_11068[(7)]);var inst_11043 = cljs.core.first(inst_11034);var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11068__$1,(20),out,inst_11043);
} else
{if((state_val_11069 === (8)))
{var inst_11023 = (state_11068[(8)]);var inst_11022 = (state_11068[(12)]);var inst_11025 = (inst_11023 < inst_11022);var inst_11026 = inst_11025;var state_11068__$1 = state_11068;if(cljs.core.truth_(inst_11026))
{var statearr_11102_11133 = state_11068__$1;(statearr_11102_11133[(1)] = (10));
} else
{var statearr_11103_11134 = state_11068__$1;(statearr_11103_11134[(1)] = (11));
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11107[(0)] = state_machine__5694__auto__);
(statearr_11107[(1)] = (1));
return statearr_11107;
});
var state_machine__5694__auto____1 = (function (state_11068){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_11068);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11108){if((e11108 instanceof Object))
{var ex__5697__auto__ = e11108;var statearr_11109_11135 = state_11068;(statearr_11109_11135[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11068);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__11136 = state_11068;
state_11068 = G__11136;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11068){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_11110 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_11110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___11231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___11231){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___11231){
return (function (state_11207){var state_val_11208 = (state_11207[(1)]);if((state_val_11208 === (7)))
{var inst_11203 = (state_11207[(2)]);var state_11207__$1 = state_11207;var statearr_11209_11232 = state_11207__$1;(statearr_11209_11232[(2)] = inst_11203);
(statearr_11209_11232[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (1)))
{var state_11207__$1 = state_11207;var statearr_11210_11233 = state_11207__$1;(statearr_11210_11233[(2)] = null);
(statearr_11210_11233[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (4)))
{var inst_11186 = (state_11207[(7)]);var inst_11186__$1 = (state_11207[(2)]);var inst_11187 = (inst_11186__$1 == null);var state_11207__$1 = (function (){var statearr_11211 = state_11207;(statearr_11211[(7)] = inst_11186__$1);
return statearr_11211;
})();if(cljs.core.truth_(inst_11187))
{var statearr_11212_11234 = state_11207__$1;(statearr_11212_11234[(1)] = (5));
} else
{var statearr_11213_11235 = state_11207__$1;(statearr_11213_11235[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (13)))
{var state_11207__$1 = state_11207;var statearr_11214_11236 = state_11207__$1;(statearr_11214_11236[(2)] = null);
(statearr_11214_11236[(1)] = (14));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (6)))
{var inst_11186 = (state_11207[(7)]);var state_11207__$1 = state_11207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11207__$1,(11),to,inst_11186);
} else
{if((state_val_11208 === (3)))
{var inst_11205 = (state_11207[(2)]);var state_11207__$1 = state_11207;return cljs.core.async.impl.ioc_helpers.return_chan(state_11207__$1,inst_11205);
} else
{if((state_val_11208 === (12)))
{var state_11207__$1 = state_11207;var statearr_11215_11237 = state_11207__$1;(statearr_11215_11237[(2)] = null);
(statearr_11215_11237[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (2)))
{var state_11207__$1 = state_11207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11207__$1,(4),from);
} else
{if((state_val_11208 === (11)))
{var inst_11196 = (state_11207[(2)]);var state_11207__$1 = state_11207;if(cljs.core.truth_(inst_11196))
{var statearr_11216_11238 = state_11207__$1;(statearr_11216_11238[(1)] = (12));
} else
{var statearr_11217_11239 = state_11207__$1;(statearr_11217_11239[(1)] = (13));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (9)))
{var state_11207__$1 = state_11207;var statearr_11218_11240 = state_11207__$1;(statearr_11218_11240[(2)] = null);
(statearr_11218_11240[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (5)))
{var state_11207__$1 = state_11207;if(cljs.core.truth_(close_QMARK_))
{var statearr_11219_11241 = state_11207__$1;(statearr_11219_11241[(1)] = (8));
} else
{var statearr_11220_11242 = state_11207__$1;(statearr_11220_11242[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (14)))
{var inst_11201 = (state_11207[(2)]);var state_11207__$1 = state_11207;var statearr_11221_11243 = state_11207__$1;(statearr_11221_11243[(2)] = inst_11201);
(statearr_11221_11243[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (10)))
{var inst_11193 = (state_11207[(2)]);var state_11207__$1 = state_11207;var statearr_11222_11244 = state_11207__$1;(statearr_11222_11244[(2)] = inst_11193);
(statearr_11222_11244[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11208 === (8)))
{var inst_11190 = cljs.core.async.close_BANG_(to);var state_11207__$1 = state_11207;var statearr_11223_11245 = state_11207__$1;(statearr_11223_11245[(2)] = inst_11190);
(statearr_11223_11245[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___11231))
;return ((function (switch__5693__auto__,c__5708__auto___11231){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11227 = [null,null,null,null,null,null,null,null];(statearr_11227[(0)] = state_machine__5694__auto__);
(statearr_11227[(1)] = (1));
return statearr_11227;
});
var state_machine__5694__auto____1 = (function (state_11207){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_11207);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11228){if((e11228 instanceof Object))
{var ex__5697__auto__ = e11228;var statearr_11229_11246 = state_11207;(statearr_11229_11246[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11207);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__11247 = state_11207;
state_11207 = G__11247;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11207){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___11231))
})();var state__5710__auto__ = (function (){var statearr_11230 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_11230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___11231);
return statearr_11230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___11231))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___11348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___11348,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___11348,tc,fc){
return (function (state_11323){var state_val_11324 = (state_11323[(1)]);if((state_val_11324 === (7)))
{var inst_11319 = (state_11323[(2)]);var state_11323__$1 = state_11323;var statearr_11325_11349 = state_11323__$1;(statearr_11325_11349[(2)] = inst_11319);
(statearr_11325_11349[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (1)))
{var state_11323__$1 = state_11323;var statearr_11326_11350 = state_11323__$1;(statearr_11326_11350[(2)] = null);
(statearr_11326_11350[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (4)))
{var inst_11300 = (state_11323[(7)]);var inst_11300__$1 = (state_11323[(2)]);var inst_11301 = (inst_11300__$1 == null);var state_11323__$1 = (function (){var statearr_11327 = state_11323;(statearr_11327[(7)] = inst_11300__$1);
return statearr_11327;
})();if(cljs.core.truth_(inst_11301))
{var statearr_11328_11351 = state_11323__$1;(statearr_11328_11351[(1)] = (5));
} else
{var statearr_11329_11352 = state_11323__$1;(statearr_11329_11352[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (13)))
{var state_11323__$1 = state_11323;var statearr_11330_11353 = state_11323__$1;(statearr_11330_11353[(2)] = null);
(statearr_11330_11353[(1)] = (14));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (6)))
{var inst_11300 = (state_11323[(7)]);var inst_11306 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11300) : p.call(null,inst_11300));var state_11323__$1 = state_11323;if(cljs.core.truth_(inst_11306))
{var statearr_11331_11354 = state_11323__$1;(statearr_11331_11354[(1)] = (9));
} else
{var statearr_11332_11355 = state_11323__$1;(statearr_11332_11355[(1)] = (10));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (3)))
{var inst_11321 = (state_11323[(2)]);var state_11323__$1 = state_11323;return cljs.core.async.impl.ioc_helpers.return_chan(state_11323__$1,inst_11321);
} else
{if((state_val_11324 === (12)))
{var state_11323__$1 = state_11323;var statearr_11333_11356 = state_11323__$1;(statearr_11333_11356[(2)] = null);
(statearr_11333_11356[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (2)))
{var state_11323__$1 = state_11323;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11323__$1,(4),ch);
} else
{if((state_val_11324 === (11)))
{var inst_11300 = (state_11323[(7)]);var inst_11310 = (state_11323[(2)]);var state_11323__$1 = state_11323;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11323__$1,(8),inst_11310,inst_11300);
} else
{if((state_val_11324 === (9)))
{var state_11323__$1 = state_11323;var statearr_11334_11357 = state_11323__$1;(statearr_11334_11357[(2)] = tc);
(statearr_11334_11357[(1)] = (11));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (5)))
{var inst_11303 = cljs.core.async.close_BANG_(tc);var inst_11304 = cljs.core.async.close_BANG_(fc);var state_11323__$1 = (function (){var statearr_11335 = state_11323;(statearr_11335[(8)] = inst_11303);
return statearr_11335;
})();var statearr_11336_11358 = state_11323__$1;(statearr_11336_11358[(2)] = inst_11304);
(statearr_11336_11358[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (14)))
{var inst_11317 = (state_11323[(2)]);var state_11323__$1 = state_11323;var statearr_11337_11359 = state_11323__$1;(statearr_11337_11359[(2)] = inst_11317);
(statearr_11337_11359[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (10)))
{var state_11323__$1 = state_11323;var statearr_11338_11360 = state_11323__$1;(statearr_11338_11360[(2)] = fc);
(statearr_11338_11360[(1)] = (11));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11324 === (8)))
{var inst_11312 = (state_11323[(2)]);var state_11323__$1 = state_11323;if(cljs.core.truth_(inst_11312))
{var statearr_11339_11361 = state_11323__$1;(statearr_11339_11361[(1)] = (12));
} else
{var statearr_11340_11362 = state_11323__$1;(statearr_11340_11362[(1)] = (13));
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___11348,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___11348,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11344 = [null,null,null,null,null,null,null,null,null];(statearr_11344[(0)] = state_machine__5694__auto__);
(statearr_11344[(1)] = (1));
return statearr_11344;
});
var state_machine__5694__auto____1 = (function (state_11323){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_11323);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11345){if((e11345 instanceof Object))
{var ex__5697__auto__ = e11345;var statearr_11346_11363 = state_11323;(statearr_11346_11363[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11323);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__11364 = state_11323;
state_11323 = G__11364;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11323){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___11348,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_11347 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_11347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___11348);
return statearr_11347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___11348,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_11411){var state_val_11412 = (state_11411[(1)]);if((state_val_11412 === (7)))
{var inst_11407 = (state_11411[(2)]);var state_11411__$1 = state_11411;var statearr_11413_11429 = state_11411__$1;(statearr_11413_11429[(2)] = inst_11407);
(statearr_11413_11429[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11412 === (6)))
{var inst_11400 = (state_11411[(7)]);var inst_11397 = (state_11411[(8)]);var inst_11404 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11397,inst_11400) : f.call(null,inst_11397,inst_11400));var inst_11397__$1 = inst_11404;var state_11411__$1 = (function (){var statearr_11414 = state_11411;(statearr_11414[(8)] = inst_11397__$1);
return statearr_11414;
})();var statearr_11415_11430 = state_11411__$1;(statearr_11415_11430[(2)] = null);
(statearr_11415_11430[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11412 === (5)))
{var inst_11397 = (state_11411[(8)]);var state_11411__$1 = state_11411;var statearr_11416_11431 = state_11411__$1;(statearr_11416_11431[(2)] = inst_11397);
(statearr_11416_11431[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11412 === (4)))
{var inst_11400 = (state_11411[(7)]);var inst_11400__$1 = (state_11411[(2)]);var inst_11401 = (inst_11400__$1 == null);var state_11411__$1 = (function (){var statearr_11417 = state_11411;(statearr_11417[(7)] = inst_11400__$1);
return statearr_11417;
})();if(cljs.core.truth_(inst_11401))
{var statearr_11418_11432 = state_11411__$1;(statearr_11418_11432[(1)] = (5));
} else
{var statearr_11419_11433 = state_11411__$1;(statearr_11419_11433[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11412 === (3)))
{var inst_11409 = (state_11411[(2)]);var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.return_chan(state_11411__$1,inst_11409);
} else
{if((state_val_11412 === (2)))
{var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11411__$1,(4),ch);
} else
{if((state_val_11412 === (1)))
{var inst_11397 = init;var state_11411__$1 = (function (){var statearr_11420 = state_11411;(statearr_11420[(8)] = inst_11397);
return statearr_11420;
})();var statearr_11421_11434 = state_11411__$1;(statearr_11421_11434[(2)] = null);
(statearr_11421_11434[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11425 = [null,null,null,null,null,null,null,null,null];(statearr_11425[(0)] = state_machine__5694__auto__);
(statearr_11425[(1)] = (1));
return statearr_11425;
});
var state_machine__5694__auto____1 = (function (state_11411){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_11411);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11426){if((e11426 instanceof Object))
{var ex__5697__auto__ = e11426;var statearr_11427_11435 = state_11411;(statearr_11427_11435[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11411);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__11436 = state_11411;
state_11411 = G__11436;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11411){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_11428 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_11428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_11510){var state_val_11511 = (state_11510[(1)]);if((state_val_11511 === (7)))
{var inst_11492 = (state_11510[(2)]);var state_11510__$1 = state_11510;var statearr_11512_11535 = state_11510__$1;(statearr_11512_11535[(2)] = inst_11492);
(statearr_11512_11535[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (1)))
{var inst_11486 = cljs.core.seq(coll);var inst_11487 = inst_11486;var state_11510__$1 = (function (){var statearr_11513 = state_11510;(statearr_11513[(7)] = inst_11487);
return statearr_11513;
})();var statearr_11514_11536 = state_11510__$1;(statearr_11514_11536[(2)] = null);
(statearr_11514_11536[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (4)))
{var inst_11487 = (state_11510[(7)]);var inst_11490 = cljs.core.first(inst_11487);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11510__$1,(7),ch,inst_11490);
} else
{if((state_val_11511 === (13)))
{var inst_11504 = (state_11510[(2)]);var state_11510__$1 = state_11510;var statearr_11515_11537 = state_11510__$1;(statearr_11515_11537[(2)] = inst_11504);
(statearr_11515_11537[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (6)))
{var inst_11495 = (state_11510[(2)]);var state_11510__$1 = state_11510;if(cljs.core.truth_(inst_11495))
{var statearr_11516_11538 = state_11510__$1;(statearr_11516_11538[(1)] = (8));
} else
{var statearr_11517_11539 = state_11510__$1;(statearr_11517_11539[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (3)))
{var inst_11508 = (state_11510[(2)]);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.return_chan(state_11510__$1,inst_11508);
} else
{if((state_val_11511 === (12)))
{var state_11510__$1 = state_11510;var statearr_11518_11540 = state_11510__$1;(statearr_11518_11540[(2)] = null);
(statearr_11518_11540[(1)] = (13));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (2)))
{var inst_11487 = (state_11510[(7)]);var state_11510__$1 = state_11510;if(cljs.core.truth_(inst_11487))
{var statearr_11519_11541 = state_11510__$1;(statearr_11519_11541[(1)] = (4));
} else
{var statearr_11520_11542 = state_11510__$1;(statearr_11520_11542[(1)] = (5));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (11)))
{var inst_11501 = cljs.core.async.close_BANG_(ch);var state_11510__$1 = state_11510;var statearr_11521_11543 = state_11510__$1;(statearr_11521_11543[(2)] = inst_11501);
(statearr_11521_11543[(1)] = (13));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (9)))
{var state_11510__$1 = state_11510;if(cljs.core.truth_(close_QMARK_))
{var statearr_11522_11544 = state_11510__$1;(statearr_11522_11544[(1)] = (11));
} else
{var statearr_11523_11545 = state_11510__$1;(statearr_11523_11545[(1)] = (12));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (5)))
{var inst_11487 = (state_11510[(7)]);var state_11510__$1 = state_11510;var statearr_11524_11546 = state_11510__$1;(statearr_11524_11546[(2)] = inst_11487);
(statearr_11524_11546[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (10)))
{var inst_11506 = (state_11510[(2)]);var state_11510__$1 = state_11510;var statearr_11525_11547 = state_11510__$1;(statearr_11525_11547[(2)] = inst_11506);
(statearr_11525_11547[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11511 === (8)))
{var inst_11487 = (state_11510[(7)]);var inst_11497 = cljs.core.next(inst_11487);var inst_11487__$1 = inst_11497;var state_11510__$1 = (function (){var statearr_11526 = state_11510;(statearr_11526[(7)] = inst_11487__$1);
return statearr_11526;
})();var statearr_11527_11548 = state_11510__$1;(statearr_11527_11548[(2)] = null);
(statearr_11527_11548[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11531 = [null,null,null,null,null,null,null,null];(statearr_11531[(0)] = state_machine__5694__auto__);
(statearr_11531[(1)] = (1));
return statearr_11531;
});
var state_machine__5694__auto____1 = (function (state_11510){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_11510);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11532){if((e11532 instanceof Object))
{var ex__5697__auto__ = e11532;var statearr_11533_11549 = state_11510;(statearr_11533_11549[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11510);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__11550 = state_11510;
state_11510 = G__11550;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11510){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_11534 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_11534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11552 = {};return obj11552;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11554 = {};return obj11554;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11776 = (function (cs,ch,mult,meta11777){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11777 = meta11777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11776.cljs$lang$type = true;
cljs.core.async.t11776.cljs$lang$ctorStr = "cljs.core.async/t11776";
cljs.core.async.t11776.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t11776");
});})(cs))
;
cljs.core.async.t11776.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11776.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11776.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11776.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11776.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11778){var self__ = this;
var _11778__$1 = this;return self__.meta11777;
});})(cs))
;
cljs.core.async.t11776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11778,meta11777__$1){var self__ = this;
var _11778__$1 = this;return (new cljs.core.async.t11776(self__.cs,self__.ch,self__.mult,meta11777__$1));
});})(cs))
;
cljs.core.async.__GT_t11776 = ((function (cs){
return (function __GT_t11776(cs__$1,ch__$1,mult__$1,meta11777){return (new cljs.core.async.t11776(cs__$1,ch__$1,mult__$1,meta11777));
});})(cs))
;
}
return (new cljs.core.async.t11776(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___11997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___11997,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___11997,cs,m,dchan,dctr,done){
return (function (state_11909){var state_val_11910 = (state_11909[(1)]);if((state_val_11910 === (7)))
{var inst_11905 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11911_11998 = state_11909__$1;(statearr_11911_11998[(2)] = inst_11905);
(statearr_11911_11998[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (20)))
{var inst_11810 = (state_11909[(7)]);var inst_11820 = cljs.core.first(inst_11810);var inst_11821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11820,(0),null);var inst_11822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11820,(1),null);var state_11909__$1 = (function (){var statearr_11912 = state_11909;(statearr_11912[(8)] = inst_11821);
return statearr_11912;
})();if(cljs.core.truth_(inst_11822))
{var statearr_11913_11999 = state_11909__$1;(statearr_11913_11999[(1)] = (22));
} else
{var statearr_11914_12000 = state_11909__$1;(statearr_11914_12000[(1)] = (23));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (27)))
{var inst_11850 = (state_11909[(9)]);var inst_11852 = (state_11909[(10)]);var inst_11857 = (state_11909[(11)]);var inst_11781 = (state_11909[(12)]);var inst_11857__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11850,inst_11852);var inst_11858 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11857__$1,inst_11781,done);var state_11909__$1 = (function (){var statearr_11915 = state_11909;(statearr_11915[(11)] = inst_11857__$1);
return statearr_11915;
})();if(cljs.core.truth_(inst_11858))
{var statearr_11916_12001 = state_11909__$1;(statearr_11916_12001[(1)] = (30));
} else
{var statearr_11917_12002 = state_11909__$1;(statearr_11917_12002[(1)] = (31));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (1)))
{var state_11909__$1 = state_11909;var statearr_11918_12003 = state_11909__$1;(statearr_11918_12003[(2)] = null);
(statearr_11918_12003[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (24)))
{var inst_11810 = (state_11909[(7)]);var inst_11827 = (state_11909[(2)]);var inst_11828 = cljs.core.next(inst_11810);var inst_11790 = inst_11828;var inst_11791 = null;var inst_11792 = (0);var inst_11793 = (0);var state_11909__$1 = (function (){var statearr_11919 = state_11909;(statearr_11919[(13)] = inst_11791);
(statearr_11919[(14)] = inst_11792);
(statearr_11919[(15)] = inst_11793);
(statearr_11919[(16)] = inst_11827);
(statearr_11919[(17)] = inst_11790);
return statearr_11919;
})();var statearr_11920_12004 = state_11909__$1;(statearr_11920_12004[(2)] = null);
(statearr_11920_12004[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (39)))
{var state_11909__$1 = state_11909;var statearr_11924_12005 = state_11909__$1;(statearr_11924_12005[(2)] = null);
(statearr_11924_12005[(1)] = (41));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (4)))
{var inst_11781 = (state_11909[(12)]);var inst_11781__$1 = (state_11909[(2)]);var inst_11782 = (inst_11781__$1 == null);var state_11909__$1 = (function (){var statearr_11925 = state_11909;(statearr_11925[(12)] = inst_11781__$1);
return statearr_11925;
})();if(cljs.core.truth_(inst_11782))
{var statearr_11926_12006 = state_11909__$1;(statearr_11926_12006[(1)] = (5));
} else
{var statearr_11927_12007 = state_11909__$1;(statearr_11927_12007[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (15)))
{var inst_11791 = (state_11909[(13)]);var inst_11792 = (state_11909[(14)]);var inst_11793 = (state_11909[(15)]);var inst_11790 = (state_11909[(17)]);var inst_11806 = (state_11909[(2)]);var inst_11807 = (inst_11793 + (1));var tmp11921 = inst_11791;var tmp11922 = inst_11792;var tmp11923 = inst_11790;var inst_11790__$1 = tmp11923;var inst_11791__$1 = tmp11921;var inst_11792__$1 = tmp11922;var inst_11793__$1 = inst_11807;var state_11909__$1 = (function (){var statearr_11928 = state_11909;(statearr_11928[(13)] = inst_11791__$1);
(statearr_11928[(18)] = inst_11806);
(statearr_11928[(14)] = inst_11792__$1);
(statearr_11928[(15)] = inst_11793__$1);
(statearr_11928[(17)] = inst_11790__$1);
return statearr_11928;
})();var statearr_11929_12008 = state_11909__$1;(statearr_11929_12008[(2)] = null);
(statearr_11929_12008[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (21)))
{var inst_11831 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11933_12009 = state_11909__$1;(statearr_11933_12009[(2)] = inst_11831);
(statearr_11933_12009[(1)] = (18));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (31)))
{var inst_11857 = (state_11909[(11)]);var inst_11861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_11862 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11857);var state_11909__$1 = (function (){var statearr_11934 = state_11909;(statearr_11934[(19)] = inst_11861);
return statearr_11934;
})();var statearr_11935_12010 = state_11909__$1;(statearr_11935_12010[(2)] = inst_11862);
(statearr_11935_12010[(1)] = (32));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (32)))
{var inst_11850 = (state_11909[(9)]);var inst_11852 = (state_11909[(10)]);var inst_11849 = (state_11909[(20)]);var inst_11851 = (state_11909[(21)]);var inst_11864 = (state_11909[(2)]);var inst_11865 = (inst_11852 + (1));var tmp11930 = inst_11850;var tmp11931 = inst_11849;var tmp11932 = inst_11851;var inst_11849__$1 = tmp11931;var inst_11850__$1 = tmp11930;var inst_11851__$1 = tmp11932;var inst_11852__$1 = inst_11865;var state_11909__$1 = (function (){var statearr_11936 = state_11909;(statearr_11936[(9)] = inst_11850__$1);
(statearr_11936[(10)] = inst_11852__$1);
(statearr_11936[(22)] = inst_11864);
(statearr_11936[(20)] = inst_11849__$1);
(statearr_11936[(21)] = inst_11851__$1);
return statearr_11936;
})();var statearr_11937_12011 = state_11909__$1;(statearr_11937_12011[(2)] = null);
(statearr_11937_12011[(1)] = (25));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (40)))
{var inst_11877 = (state_11909[(23)]);var inst_11881 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_11882 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11877);var state_11909__$1 = (function (){var statearr_11938 = state_11909;(statearr_11938[(24)] = inst_11881);
return statearr_11938;
})();var statearr_11939_12012 = state_11909__$1;(statearr_11939_12012[(2)] = inst_11882);
(statearr_11939_12012[(1)] = (41));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (33)))
{var inst_11868 = (state_11909[(25)]);var inst_11870 = cljs.core.chunked_seq_QMARK_(inst_11868);var state_11909__$1 = state_11909;if(inst_11870)
{var statearr_11940_12013 = state_11909__$1;(statearr_11940_12013[(1)] = (36));
} else
{var statearr_11941_12014 = state_11909__$1;(statearr_11941_12014[(1)] = (37));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (13)))
{var inst_11800 = (state_11909[(26)]);var inst_11803 = cljs.core.async.close_BANG_(inst_11800);var state_11909__$1 = state_11909;var statearr_11942_12015 = state_11909__$1;(statearr_11942_12015[(2)] = inst_11803);
(statearr_11942_12015[(1)] = (15));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (22)))
{var inst_11821 = (state_11909[(8)]);var inst_11824 = cljs.core.async.close_BANG_(inst_11821);var state_11909__$1 = state_11909;var statearr_11943_12016 = state_11909__$1;(statearr_11943_12016[(2)] = inst_11824);
(statearr_11943_12016[(1)] = (24));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (36)))
{var inst_11868 = (state_11909[(25)]);var inst_11872 = cljs.core.chunk_first(inst_11868);var inst_11873 = cljs.core.chunk_rest(inst_11868);var inst_11874 = cljs.core.count(inst_11872);var inst_11849 = inst_11873;var inst_11850 = inst_11872;var inst_11851 = inst_11874;var inst_11852 = (0);var state_11909__$1 = (function (){var statearr_11944 = state_11909;(statearr_11944[(9)] = inst_11850);
(statearr_11944[(10)] = inst_11852);
(statearr_11944[(20)] = inst_11849);
(statearr_11944[(21)] = inst_11851);
return statearr_11944;
})();var statearr_11945_12017 = state_11909__$1;(statearr_11945_12017[(2)] = null);
(statearr_11945_12017[(1)] = (25));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (41)))
{var inst_11868 = (state_11909[(25)]);var inst_11884 = (state_11909[(2)]);var inst_11885 = cljs.core.next(inst_11868);var inst_11849 = inst_11885;var inst_11850 = null;var inst_11851 = (0);var inst_11852 = (0);var state_11909__$1 = (function (){var statearr_11946 = state_11909;(statearr_11946[(27)] = inst_11884);
(statearr_11946[(9)] = inst_11850);
(statearr_11946[(10)] = inst_11852);
(statearr_11946[(20)] = inst_11849);
(statearr_11946[(21)] = inst_11851);
return statearr_11946;
})();var statearr_11947_12018 = state_11909__$1;(statearr_11947_12018[(2)] = null);
(statearr_11947_12018[(1)] = (25));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (43)))
{var state_11909__$1 = state_11909;var statearr_11948_12019 = state_11909__$1;(statearr_11948_12019[(2)] = null);
(statearr_11948_12019[(1)] = (44));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (29)))
{var inst_11893 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11949_12020 = state_11909__$1;(statearr_11949_12020[(2)] = inst_11893);
(statearr_11949_12020[(1)] = (26));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (44)))
{var inst_11902 = (state_11909[(2)]);var state_11909__$1 = (function (){var statearr_11950 = state_11909;(statearr_11950[(28)] = inst_11902);
return statearr_11950;
})();var statearr_11951_12021 = state_11909__$1;(statearr_11951_12021[(2)] = null);
(statearr_11951_12021[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (6)))
{var inst_11841 = (state_11909[(29)]);var inst_11840 = cljs.core.deref(cs);var inst_11841__$1 = cljs.core.keys(inst_11840);var inst_11842 = cljs.core.count(inst_11841__$1);var inst_11843 = cljs.core.reset_BANG_(dctr,inst_11842);var inst_11848 = cljs.core.seq(inst_11841__$1);var inst_11849 = inst_11848;var inst_11850 = null;var inst_11851 = (0);var inst_11852 = (0);var state_11909__$1 = (function (){var statearr_11952 = state_11909;(statearr_11952[(9)] = inst_11850);
(statearr_11952[(10)] = inst_11852);
(statearr_11952[(30)] = inst_11843);
(statearr_11952[(20)] = inst_11849);
(statearr_11952[(21)] = inst_11851);
(statearr_11952[(29)] = inst_11841__$1);
return statearr_11952;
})();var statearr_11953_12022 = state_11909__$1;(statearr_11953_12022[(2)] = null);
(statearr_11953_12022[(1)] = (25));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (28)))
{var inst_11868 = (state_11909[(25)]);var inst_11849 = (state_11909[(20)]);var inst_11868__$1 = cljs.core.seq(inst_11849);var state_11909__$1 = (function (){var statearr_11954 = state_11909;(statearr_11954[(25)] = inst_11868__$1);
return statearr_11954;
})();if(inst_11868__$1)
{var statearr_11955_12023 = state_11909__$1;(statearr_11955_12023[(1)] = (33));
} else
{var statearr_11956_12024 = state_11909__$1;(statearr_11956_12024[(1)] = (34));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (25)))
{var inst_11852 = (state_11909[(10)]);var inst_11851 = (state_11909[(21)]);var inst_11854 = (inst_11852 < inst_11851);var inst_11855 = inst_11854;var state_11909__$1 = state_11909;if(cljs.core.truth_(inst_11855))
{var statearr_11957_12025 = state_11909__$1;(statearr_11957_12025[(1)] = (27));
} else
{var statearr_11958_12026 = state_11909__$1;(statearr_11958_12026[(1)] = (28));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (34)))
{var state_11909__$1 = state_11909;var statearr_11959_12027 = state_11909__$1;(statearr_11959_12027[(2)] = null);
(statearr_11959_12027[(1)] = (35));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (17)))
{var state_11909__$1 = state_11909;var statearr_11960_12028 = state_11909__$1;(statearr_11960_12028[(2)] = null);
(statearr_11960_12028[(1)] = (18));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (3)))
{var inst_11907 = (state_11909[(2)]);var state_11909__$1 = state_11909;return cljs.core.async.impl.ioc_helpers.return_chan(state_11909__$1,inst_11907);
} else
{if((state_val_11910 === (12)))
{var inst_11836 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11961_12029 = state_11909__$1;(statearr_11961_12029[(2)] = inst_11836);
(statearr_11961_12029[(1)] = (9));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (2)))
{var state_11909__$1 = state_11909;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11909__$1,(4),ch);
} else
{if((state_val_11910 === (23)))
{var state_11909__$1 = state_11909;var statearr_11962_12030 = state_11909__$1;(statearr_11962_12030[(2)] = null);
(statearr_11962_12030[(1)] = (24));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (35)))
{var inst_11891 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11963_12031 = state_11909__$1;(statearr_11963_12031[(2)] = inst_11891);
(statearr_11963_12031[(1)] = (29));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (19)))
{var inst_11810 = (state_11909[(7)]);var inst_11814 = cljs.core.chunk_first(inst_11810);var inst_11815 = cljs.core.chunk_rest(inst_11810);var inst_11816 = cljs.core.count(inst_11814);var inst_11790 = inst_11815;var inst_11791 = inst_11814;var inst_11792 = inst_11816;var inst_11793 = (0);var state_11909__$1 = (function (){var statearr_11964 = state_11909;(statearr_11964[(13)] = inst_11791);
(statearr_11964[(14)] = inst_11792);
(statearr_11964[(15)] = inst_11793);
(statearr_11964[(17)] = inst_11790);
return statearr_11964;
})();var statearr_11965_12032 = state_11909__$1;(statearr_11965_12032[(2)] = null);
(statearr_11965_12032[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (11)))
{var inst_11810 = (state_11909[(7)]);var inst_11790 = (state_11909[(17)]);var inst_11810__$1 = cljs.core.seq(inst_11790);var state_11909__$1 = (function (){var statearr_11966 = state_11909;(statearr_11966[(7)] = inst_11810__$1);
return statearr_11966;
})();if(inst_11810__$1)
{var statearr_11967_12033 = state_11909__$1;(statearr_11967_12033[(1)] = (16));
} else
{var statearr_11968_12034 = state_11909__$1;(statearr_11968_12034[(1)] = (17));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (9)))
{var inst_11838 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11969_12035 = state_11909__$1;(statearr_11969_12035[(2)] = inst_11838);
(statearr_11969_12035[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (5)))
{var inst_11788 = cljs.core.deref(cs);var inst_11789 = cljs.core.seq(inst_11788);var inst_11790 = inst_11789;var inst_11791 = null;var inst_11792 = (0);var inst_11793 = (0);var state_11909__$1 = (function (){var statearr_11970 = state_11909;(statearr_11970[(13)] = inst_11791);
(statearr_11970[(14)] = inst_11792);
(statearr_11970[(15)] = inst_11793);
(statearr_11970[(17)] = inst_11790);
return statearr_11970;
})();var statearr_11971_12036 = state_11909__$1;(statearr_11971_12036[(2)] = null);
(statearr_11971_12036[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (14)))
{var state_11909__$1 = state_11909;var statearr_11972_12037 = state_11909__$1;(statearr_11972_12037[(2)] = null);
(statearr_11972_12037[(1)] = (15));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (45)))
{var inst_11899 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11973_12038 = state_11909__$1;(statearr_11973_12038[(2)] = inst_11899);
(statearr_11973_12038[(1)] = (44));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (26)))
{var inst_11841 = (state_11909[(29)]);var inst_11895 = (state_11909[(2)]);var inst_11896 = cljs.core.seq(inst_11841);var state_11909__$1 = (function (){var statearr_11974 = state_11909;(statearr_11974[(31)] = inst_11895);
return statearr_11974;
})();if(inst_11896)
{var statearr_11975_12039 = state_11909__$1;(statearr_11975_12039[(1)] = (42));
} else
{var statearr_11976_12040 = state_11909__$1;(statearr_11976_12040[(1)] = (43));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (16)))
{var inst_11810 = (state_11909[(7)]);var inst_11812 = cljs.core.chunked_seq_QMARK_(inst_11810);var state_11909__$1 = state_11909;if(inst_11812)
{var statearr_11977_12041 = state_11909__$1;(statearr_11977_12041[(1)] = (19));
} else
{var statearr_11978_12042 = state_11909__$1;(statearr_11978_12042[(1)] = (20));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (38)))
{var inst_11888 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11979_12043 = state_11909__$1;(statearr_11979_12043[(2)] = inst_11888);
(statearr_11979_12043[(1)] = (35));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (30)))
{var state_11909__$1 = state_11909;var statearr_11980_12044 = state_11909__$1;(statearr_11980_12044[(2)] = null);
(statearr_11980_12044[(1)] = (32));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (10)))
{var inst_11791 = (state_11909[(13)]);var inst_11793 = (state_11909[(15)]);var inst_11799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11791,inst_11793);var inst_11800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11799,(0),null);var inst_11801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11799,(1),null);var state_11909__$1 = (function (){var statearr_11981 = state_11909;(statearr_11981[(26)] = inst_11800);
return statearr_11981;
})();if(cljs.core.truth_(inst_11801))
{var statearr_11982_12045 = state_11909__$1;(statearr_11982_12045[(1)] = (13));
} else
{var statearr_11983_12046 = state_11909__$1;(statearr_11983_12046[(1)] = (14));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (18)))
{var inst_11834 = (state_11909[(2)]);var state_11909__$1 = state_11909;var statearr_11984_12047 = state_11909__$1;(statearr_11984_12047[(2)] = inst_11834);
(statearr_11984_12047[(1)] = (12));
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (42)))
{var state_11909__$1 = state_11909;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11909__$1,(45),dchan);
} else
{if((state_val_11910 === (37)))
{var inst_11868 = (state_11909[(25)]);var inst_11781 = (state_11909[(12)]);var inst_11877 = (state_11909[(23)]);var inst_11877__$1 = cljs.core.first(inst_11868);var inst_11878 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11877__$1,inst_11781,done);var state_11909__$1 = (function (){var statearr_11985 = state_11909;(statearr_11985[(23)] = inst_11877__$1);
return statearr_11985;
})();if(cljs.core.truth_(inst_11878))
{var statearr_11986_12048 = state_11909__$1;(statearr_11986_12048[(1)] = (39));
} else
{var statearr_11987_12049 = state_11909__$1;(statearr_11987_12049[(1)] = (40));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_11910 === (8)))
{var inst_11792 = (state_11909[(14)]);var inst_11793 = (state_11909[(15)]);var inst_11795 = (inst_11793 < inst_11792);var inst_11796 = inst_11795;var state_11909__$1 = state_11909;if(cljs.core.truth_(inst_11796))
{var statearr_11988_12050 = state_11909__$1;(statearr_11988_12050[(1)] = (10));
} else
{var statearr_11989_12051 = state_11909__$1;(statearr_11989_12051[(1)] = (11));
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___11997,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___11997,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11993[(0)] = state_machine__5694__auto__);
(statearr_11993[(1)] = (1));
return statearr_11993;
});
var state_machine__5694__auto____1 = (function (state_11909){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_11909);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11994){if((e11994 instanceof Object))
{var ex__5697__auto__ = e11994;var statearr_11995_12052 = state_11909;(statearr_11995_12052[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11909);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e11994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__12053 = state_11909;
state_11909 = G__12053;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11909){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___11997,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_11996 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_11996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___11997);
return statearr_11996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___11997,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj12055 = {};return obj12055;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$39,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$40);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$40,chs);var pauses = pick(cljs.core.constant$keyword$38,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,solos,cljs.core.constant$keyword$42,pick(cljs.core.constant$keyword$39,chs),cljs.core.constant$keyword$43,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$38)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12175 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12175 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12176){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12176 = meta12176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12175.cljs$lang$type = true;
cljs.core.async.t12175.cljs$lang$ctorStr = "cljs.core.async/t12175";
cljs.core.async.t12175.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t12175");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12175.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12177){var self__ = this;
var _12177__$1 = this;return self__.meta12176;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12177,meta12176__$1){var self__ = this;
var _12177__$1 = this;return (new cljs.core.async.t12175(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12176__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12175 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12175(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12176){return (new cljs.core.async.t12175(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12176));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12175(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___12294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___12294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12247){var state_val_12248 = (state_12247[(1)]);if((state_val_12248 === (7)))
{var inst_12191 = (state_12247[(7)]);var inst_12196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12191);var state_12247__$1 = state_12247;var statearr_12249_12295 = state_12247__$1;(statearr_12249_12295[(2)] = inst_12196);
(statearr_12249_12295[(1)] = (9));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (20)))
{var inst_12206 = (state_12247[(8)]);var state_12247__$1 = state_12247;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12247__$1,(23),out,inst_12206);
} else
{if((state_val_12248 === (1)))
{var inst_12181 = (state_12247[(9)]);var inst_12181__$1 = calc_state();var inst_12182 = cljs.core.seq_QMARK_(inst_12181__$1);var state_12247__$1 = (function (){var statearr_12250 = state_12247;(statearr_12250[(9)] = inst_12181__$1);
return statearr_12250;
})();if(inst_12182)
{var statearr_12251_12296 = state_12247__$1;(statearr_12251_12296[(1)] = (2));
} else
{var statearr_12252_12297 = state_12247__$1;(statearr_12252_12297[(1)] = (3));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (24)))
{var inst_12199 = (state_12247[(10)]);var inst_12191 = inst_12199;var state_12247__$1 = (function (){var statearr_12253 = state_12247;(statearr_12253[(7)] = inst_12191);
return statearr_12253;
})();var statearr_12254_12298 = state_12247__$1;(statearr_12254_12298[(2)] = null);
(statearr_12254_12298[(1)] = (5));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (4)))
{var inst_12181 = (state_12247[(9)]);var inst_12187 = (state_12247[(2)]);var inst_12188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12187,cljs.core.constant$keyword$43);var inst_12189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12187,cljs.core.constant$keyword$42);var inst_12190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12187,cljs.core.constant$keyword$41);var inst_12191 = inst_12181;var state_12247__$1 = (function (){var statearr_12255 = state_12247;(statearr_12255[(11)] = inst_12190);
(statearr_12255[(7)] = inst_12191);
(statearr_12255[(12)] = inst_12189);
(statearr_12255[(13)] = inst_12188);
return statearr_12255;
})();var statearr_12256_12299 = state_12247__$1;(statearr_12256_12299[(2)] = null);
(statearr_12256_12299[(1)] = (5));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (15)))
{var state_12247__$1 = state_12247;var statearr_12257_12300 = state_12247__$1;(statearr_12257_12300[(2)] = null);
(statearr_12257_12300[(1)] = (16));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (21)))
{var inst_12199 = (state_12247[(10)]);var inst_12191 = inst_12199;var state_12247__$1 = (function (){var statearr_12258 = state_12247;(statearr_12258[(7)] = inst_12191);
return statearr_12258;
})();var statearr_12259_12301 = state_12247__$1;(statearr_12259_12301[(2)] = null);
(statearr_12259_12301[(1)] = (5));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (13)))
{var inst_12243 = (state_12247[(2)]);var state_12247__$1 = state_12247;var statearr_12260_12302 = state_12247__$1;(statearr_12260_12302[(2)] = inst_12243);
(statearr_12260_12302[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (22)))
{var inst_12241 = (state_12247[(2)]);var state_12247__$1 = state_12247;var statearr_12261_12303 = state_12247__$1;(statearr_12261_12303[(2)] = inst_12241);
(statearr_12261_12303[(1)] = (13));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (6)))
{var inst_12245 = (state_12247[(2)]);var state_12247__$1 = state_12247;return cljs.core.async.impl.ioc_helpers.return_chan(state_12247__$1,inst_12245);
} else
{if((state_val_12248 === (25)))
{var state_12247__$1 = state_12247;var statearr_12262_12304 = state_12247__$1;(statearr_12262_12304[(2)] = null);
(statearr_12262_12304[(1)] = (26));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (17)))
{var inst_12221 = (state_12247[(14)]);var state_12247__$1 = state_12247;var statearr_12263_12305 = state_12247__$1;(statearr_12263_12305[(2)] = inst_12221);
(statearr_12263_12305[(1)] = (19));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (3)))
{var inst_12181 = (state_12247[(9)]);var state_12247__$1 = state_12247;var statearr_12264_12306 = state_12247__$1;(statearr_12264_12306[(2)] = inst_12181);
(statearr_12264_12306[(1)] = (4));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (12)))
{var inst_12202 = (state_12247[(15)]);var inst_12221 = (state_12247[(14)]);var inst_12207 = (state_12247[(16)]);var inst_12221__$1 = (inst_12202.cljs$core$IFn$_invoke$arity$1 ? inst_12202.cljs$core$IFn$_invoke$arity$1(inst_12207) : inst_12202.call(null,inst_12207));var state_12247__$1 = (function (){var statearr_12265 = state_12247;(statearr_12265[(14)] = inst_12221__$1);
return statearr_12265;
})();if(cljs.core.truth_(inst_12221__$1))
{var statearr_12266_12307 = state_12247__$1;(statearr_12266_12307[(1)] = (17));
} else
{var statearr_12267_12308 = state_12247__$1;(statearr_12267_12308[(1)] = (18));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (2)))
{var inst_12181 = (state_12247[(9)]);var inst_12184 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12181);var state_12247__$1 = state_12247;var statearr_12268_12309 = state_12247__$1;(statearr_12268_12309[(2)] = inst_12184);
(statearr_12268_12309[(1)] = (4));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (23)))
{var inst_12232 = (state_12247[(2)]);var state_12247__$1 = state_12247;if(cljs.core.truth_(inst_12232))
{var statearr_12269_12310 = state_12247__$1;(statearr_12269_12310[(1)] = (24));
} else
{var statearr_12270_12311 = state_12247__$1;(statearr_12270_12311[(1)] = (25));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (19)))
{var inst_12229 = (state_12247[(2)]);var state_12247__$1 = state_12247;if(cljs.core.truth_(inst_12229))
{var statearr_12271_12312 = state_12247__$1;(statearr_12271_12312[(1)] = (20));
} else
{var statearr_12272_12313 = state_12247__$1;(statearr_12272_12313[(1)] = (21));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (11)))
{var inst_12206 = (state_12247[(8)]);var inst_12212 = (inst_12206 == null);var state_12247__$1 = state_12247;if(cljs.core.truth_(inst_12212))
{var statearr_12273_12314 = state_12247__$1;(statearr_12273_12314[(1)] = (14));
} else
{var statearr_12274_12315 = state_12247__$1;(statearr_12274_12315[(1)] = (15));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (9)))
{var inst_12199 = (state_12247[(10)]);var inst_12199__$1 = (state_12247[(2)]);var inst_12200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12199__$1,cljs.core.constant$keyword$43);var inst_12201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12199__$1,cljs.core.constant$keyword$42);var inst_12202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12199__$1,cljs.core.constant$keyword$41);var state_12247__$1 = (function (){var statearr_12275 = state_12247;(statearr_12275[(10)] = inst_12199__$1);
(statearr_12275[(17)] = inst_12201);
(statearr_12275[(15)] = inst_12202);
return statearr_12275;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12247__$1,(10),inst_12200);
} else
{if((state_val_12248 === (5)))
{var inst_12191 = (state_12247[(7)]);var inst_12194 = cljs.core.seq_QMARK_(inst_12191);var state_12247__$1 = state_12247;if(inst_12194)
{var statearr_12276_12316 = state_12247__$1;(statearr_12276_12316[(1)] = (7));
} else
{var statearr_12277_12317 = state_12247__$1;(statearr_12277_12317[(1)] = (8));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (14)))
{var inst_12207 = (state_12247[(16)]);var inst_12214 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12207);var state_12247__$1 = state_12247;var statearr_12278_12318 = state_12247__$1;(statearr_12278_12318[(2)] = inst_12214);
(statearr_12278_12318[(1)] = (16));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (26)))
{var inst_12237 = (state_12247[(2)]);var state_12247__$1 = state_12247;var statearr_12279_12319 = state_12247__$1;(statearr_12279_12319[(2)] = inst_12237);
(statearr_12279_12319[(1)] = (22));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (16)))
{var inst_12217 = (state_12247[(2)]);var inst_12218 = calc_state();var inst_12191 = inst_12218;var state_12247__$1 = (function (){var statearr_12280 = state_12247;(statearr_12280[(7)] = inst_12191);
(statearr_12280[(18)] = inst_12217);
return statearr_12280;
})();var statearr_12281_12320 = state_12247__$1;(statearr_12281_12320[(2)] = null);
(statearr_12281_12320[(1)] = (5));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (10)))
{var inst_12206 = (state_12247[(8)]);var inst_12207 = (state_12247[(16)]);var inst_12205 = (state_12247[(2)]);var inst_12206__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12205,(0),null);var inst_12207__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12205,(1),null);var inst_12208 = (inst_12206__$1 == null);var inst_12209 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12207__$1,change);var inst_12210 = (inst_12208) || (inst_12209);var state_12247__$1 = (function (){var statearr_12282 = state_12247;(statearr_12282[(8)] = inst_12206__$1);
(statearr_12282[(16)] = inst_12207__$1);
return statearr_12282;
})();if(cljs.core.truth_(inst_12210))
{var statearr_12283_12321 = state_12247__$1;(statearr_12283_12321[(1)] = (11));
} else
{var statearr_12284_12322 = state_12247__$1;(statearr_12284_12322[(1)] = (12));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (18)))
{var inst_12201 = (state_12247[(17)]);var inst_12202 = (state_12247[(15)]);var inst_12207 = (state_12247[(16)]);var inst_12224 = cljs.core.empty_QMARK_(inst_12202);var inst_12225 = (inst_12201.cljs$core$IFn$_invoke$arity$1 ? inst_12201.cljs$core$IFn$_invoke$arity$1(inst_12207) : inst_12201.call(null,inst_12207));var inst_12226 = cljs.core.not(inst_12225);var inst_12227 = (inst_12224) && (inst_12226);var state_12247__$1 = state_12247;var statearr_12285_12323 = state_12247__$1;(statearr_12285_12323[(2)] = inst_12227);
(statearr_12285_12323[(1)] = (19));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12248 === (8)))
{var inst_12191 = (state_12247[(7)]);var state_12247__$1 = state_12247;var statearr_12286_12324 = state_12247__$1;(statearr_12286_12324[(2)] = inst_12191);
(statearr_12286_12324[(1)] = (9));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___12294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12290[(0)] = state_machine__5694__auto__);
(statearr_12290[(1)] = (1));
return statearr_12290;
});
var state_machine__5694__auto____1 = (function (state_12247){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_12247);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12291){if((e12291 instanceof Object))
{var ex__5697__auto__ = e12291;var statearr_12292_12325 = state_12247;(statearr_12292_12325[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12247);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__12326 = state_12247;
state_12247 = G__12326;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12247){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_12293 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_12293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12294);
return statearr_12293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___12294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj12328 = {};return obj12328;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3543__auto__,mults){
return (function (p1__12329_SHARP_){if(cljs.core.truth_((p1__12329_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12329_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12329_SHARP_.call(null,topic))))
{return p1__12329_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12329_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12444 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12445){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12445 = meta12445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12444.cljs$lang$type = true;
cljs.core.async.t12444.cljs$lang$ctorStr = "cljs.core.async/t12444";
cljs.core.async.t12444.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t12444");
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12444.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12446){var self__ = this;
var _12446__$1 = this;return self__.meta12445;
});})(mults,ensure_mult))
;
cljs.core.async.t12444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12446,meta12445__$1){var self__ = this;
var _12446__$1 = this;return (new cljs.core.async.t12444(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12445__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12444 = ((function (mults,ensure_mult){
return (function __GT_t12444(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12445){return (new cljs.core.async.t12444(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12445));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12444(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___12558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___12558,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12558,mults,ensure_mult,p){
return (function (state_12514){var state_val_12515 = (state_12514[(1)]);if((state_val_12515 === (7)))
{var inst_12510 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12516_12559 = state_12514__$1;(statearr_12516_12559[(2)] = inst_12510);
(statearr_12516_12559[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (20)))
{var state_12514__$1 = state_12514;var statearr_12517_12560 = state_12514__$1;(statearr_12517_12560[(2)] = null);
(statearr_12517_12560[(1)] = (22));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (1)))
{var state_12514__$1 = state_12514;var statearr_12518_12561 = state_12514__$1;(statearr_12518_12561[(2)] = null);
(statearr_12518_12561[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (4)))
{var inst_12449 = (state_12514[(7)]);var inst_12449__$1 = (state_12514[(2)]);var inst_12450 = (inst_12449__$1 == null);var state_12514__$1 = (function (){var statearr_12519 = state_12514;(statearr_12519[(7)] = inst_12449__$1);
return statearr_12519;
})();if(cljs.core.truth_(inst_12450))
{var statearr_12520_12562 = state_12514__$1;(statearr_12520_12562[(1)] = (5));
} else
{var statearr_12521_12563 = state_12514__$1;(statearr_12521_12563[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (15)))
{var inst_12491 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12522_12564 = state_12514__$1;(statearr_12522_12564[(2)] = inst_12491);
(statearr_12522_12564[(1)] = (12));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (21)))
{var inst_12497 = (state_12514[(8)]);var inst_12505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12497);var state_12514__$1 = state_12514;var statearr_12523_12565 = state_12514__$1;(statearr_12523_12565[(2)] = inst_12505);
(statearr_12523_12565[(1)] = (22));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (13)))
{var inst_12473 = (state_12514[(9)]);var inst_12475 = cljs.core.chunked_seq_QMARK_(inst_12473);var state_12514__$1 = state_12514;if(inst_12475)
{var statearr_12524_12566 = state_12514__$1;(statearr_12524_12566[(1)] = (16));
} else
{var statearr_12525_12567 = state_12514__$1;(statearr_12525_12567[(1)] = (17));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (22)))
{var inst_12507 = (state_12514[(2)]);var state_12514__$1 = (function (){var statearr_12526 = state_12514;(statearr_12526[(10)] = inst_12507);
return statearr_12526;
})();var statearr_12527_12568 = state_12514__$1;(statearr_12527_12568[(2)] = null);
(statearr_12527_12568[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (6)))
{var inst_12449 = (state_12514[(7)]);var inst_12497 = (state_12514[(8)]);var inst_12497__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12449) : topic_fn.call(null,inst_12449));var inst_12498 = cljs.core.deref(mults);var inst_12499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12498,inst_12497__$1);var inst_12500 = cljs.core.async.muxch_STAR_(inst_12499);var state_12514__$1 = (function (){var statearr_12528 = state_12514;(statearr_12528[(8)] = inst_12497__$1);
return statearr_12528;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12514__$1,(19),inst_12500,inst_12449);
} else
{if((state_val_12515 === (17)))
{var inst_12473 = (state_12514[(9)]);var inst_12482 = cljs.core.first(inst_12473);var inst_12483 = cljs.core.async.muxch_STAR_(inst_12482);var inst_12484 = cljs.core.async.close_BANG_(inst_12483);var inst_12485 = cljs.core.next(inst_12473);var inst_12459 = inst_12485;var inst_12460 = null;var inst_12461 = (0);var inst_12462 = (0);var state_12514__$1 = (function (){var statearr_12529 = state_12514;(statearr_12529[(11)] = inst_12460);
(statearr_12529[(12)] = inst_12461);
(statearr_12529[(13)] = inst_12459);
(statearr_12529[(14)] = inst_12484);
(statearr_12529[(15)] = inst_12462);
return statearr_12529;
})();var statearr_12530_12569 = state_12514__$1;(statearr_12530_12569[(2)] = null);
(statearr_12530_12569[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (3)))
{var inst_12512 = (state_12514[(2)]);var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.return_chan(state_12514__$1,inst_12512);
} else
{if((state_val_12515 === (12)))
{var inst_12493 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12531_12570 = state_12514__$1;(statearr_12531_12570[(2)] = inst_12493);
(statearr_12531_12570[(1)] = (9));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (2)))
{var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12514__$1,(4),ch);
} else
{if((state_val_12515 === (19)))
{var inst_12502 = (state_12514[(2)]);var state_12514__$1 = state_12514;if(cljs.core.truth_(inst_12502))
{var statearr_12532_12571 = state_12514__$1;(statearr_12532_12571[(1)] = (20));
} else
{var statearr_12533_12572 = state_12514__$1;(statearr_12533_12572[(1)] = (21));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (11)))
{var inst_12459 = (state_12514[(13)]);var inst_12473 = (state_12514[(9)]);var inst_12473__$1 = cljs.core.seq(inst_12459);var state_12514__$1 = (function (){var statearr_12534 = state_12514;(statearr_12534[(9)] = inst_12473__$1);
return statearr_12534;
})();if(inst_12473__$1)
{var statearr_12535_12573 = state_12514__$1;(statearr_12535_12573[(1)] = (13));
} else
{var statearr_12536_12574 = state_12514__$1;(statearr_12536_12574[(1)] = (14));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (9)))
{var inst_12495 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12537_12575 = state_12514__$1;(statearr_12537_12575[(2)] = inst_12495);
(statearr_12537_12575[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (5)))
{var inst_12456 = cljs.core.deref(mults);var inst_12457 = cljs.core.vals(inst_12456);var inst_12458 = cljs.core.seq(inst_12457);var inst_12459 = inst_12458;var inst_12460 = null;var inst_12461 = (0);var inst_12462 = (0);var state_12514__$1 = (function (){var statearr_12538 = state_12514;(statearr_12538[(11)] = inst_12460);
(statearr_12538[(12)] = inst_12461);
(statearr_12538[(13)] = inst_12459);
(statearr_12538[(15)] = inst_12462);
return statearr_12538;
})();var statearr_12539_12576 = state_12514__$1;(statearr_12539_12576[(2)] = null);
(statearr_12539_12576[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (14)))
{var state_12514__$1 = state_12514;var statearr_12543_12577 = state_12514__$1;(statearr_12543_12577[(2)] = null);
(statearr_12543_12577[(1)] = (15));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (16)))
{var inst_12473 = (state_12514[(9)]);var inst_12477 = cljs.core.chunk_first(inst_12473);var inst_12478 = cljs.core.chunk_rest(inst_12473);var inst_12479 = cljs.core.count(inst_12477);var inst_12459 = inst_12478;var inst_12460 = inst_12477;var inst_12461 = inst_12479;var inst_12462 = (0);var state_12514__$1 = (function (){var statearr_12544 = state_12514;(statearr_12544[(11)] = inst_12460);
(statearr_12544[(12)] = inst_12461);
(statearr_12544[(13)] = inst_12459);
(statearr_12544[(15)] = inst_12462);
return statearr_12544;
})();var statearr_12545_12578 = state_12514__$1;(statearr_12545_12578[(2)] = null);
(statearr_12545_12578[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (10)))
{var inst_12460 = (state_12514[(11)]);var inst_12461 = (state_12514[(12)]);var inst_12459 = (state_12514[(13)]);var inst_12462 = (state_12514[(15)]);var inst_12467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12460,inst_12462);var inst_12468 = cljs.core.async.muxch_STAR_(inst_12467);var inst_12469 = cljs.core.async.close_BANG_(inst_12468);var inst_12470 = (inst_12462 + (1));var tmp12540 = inst_12460;var tmp12541 = inst_12461;var tmp12542 = inst_12459;var inst_12459__$1 = tmp12542;var inst_12460__$1 = tmp12540;var inst_12461__$1 = tmp12541;var inst_12462__$1 = inst_12470;var state_12514__$1 = (function (){var statearr_12546 = state_12514;(statearr_12546[(11)] = inst_12460__$1);
(statearr_12546[(12)] = inst_12461__$1);
(statearr_12546[(16)] = inst_12469);
(statearr_12546[(13)] = inst_12459__$1);
(statearr_12546[(15)] = inst_12462__$1);
return statearr_12546;
})();var statearr_12547_12579 = state_12514__$1;(statearr_12547_12579[(2)] = null);
(statearr_12547_12579[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (18)))
{var inst_12488 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12548_12580 = state_12514__$1;(statearr_12548_12580[(2)] = inst_12488);
(statearr_12548_12580[(1)] = (15));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12515 === (8)))
{var inst_12461 = (state_12514[(12)]);var inst_12462 = (state_12514[(15)]);var inst_12464 = (inst_12462 < inst_12461);var inst_12465 = inst_12464;var state_12514__$1 = state_12514;if(cljs.core.truth_(inst_12465))
{var statearr_12549_12581 = state_12514__$1;(statearr_12549_12581[(1)] = (10));
} else
{var statearr_12550_12582 = state_12514__$1;(statearr_12550_12582[(1)] = (11));
}
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12558,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___12558,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12554[(0)] = state_machine__5694__auto__);
(statearr_12554[(1)] = (1));
return statearr_12554;
});
var state_machine__5694__auto____1 = (function (state_12514){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_12514);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12555){if((e12555 instanceof Object))
{var ex__5697__auto__ = e12555;var statearr_12556_12583 = state_12514;(statearr_12556_12583[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12514);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__12584 = state_12514;
state_12514 = G__12584;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12514){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12558,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_12557 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_12557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12558);
return statearr_12557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___12558,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___12721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12691){var state_val_12692 = (state_12691[(1)]);if((state_val_12692 === (7)))
{var state_12691__$1 = state_12691;var statearr_12693_12722 = state_12691__$1;(statearr_12693_12722[(2)] = null);
(statearr_12693_12722[(1)] = (8));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (1)))
{var state_12691__$1 = state_12691;var statearr_12694_12723 = state_12691__$1;(statearr_12694_12723[(2)] = null);
(statearr_12694_12723[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (4)))
{var inst_12655 = (state_12691[(7)]);var inst_12657 = (inst_12655 < cnt);var state_12691__$1 = state_12691;if(cljs.core.truth_(inst_12657))
{var statearr_12695_12724 = state_12691__$1;(statearr_12695_12724[(1)] = (6));
} else
{var statearr_12696_12725 = state_12691__$1;(statearr_12696_12725[(1)] = (7));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (15)))
{var inst_12687 = (state_12691[(2)]);var state_12691__$1 = state_12691;var statearr_12697_12726 = state_12691__$1;(statearr_12697_12726[(2)] = inst_12687);
(statearr_12697_12726[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (13)))
{var inst_12680 = cljs.core.async.close_BANG_(out);var state_12691__$1 = state_12691;var statearr_12698_12727 = state_12691__$1;(statearr_12698_12727[(2)] = inst_12680);
(statearr_12698_12727[(1)] = (15));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (6)))
{var state_12691__$1 = state_12691;var statearr_12699_12728 = state_12691__$1;(statearr_12699_12728[(2)] = null);
(statearr_12699_12728[(1)] = (11));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (3)))
{var inst_12689 = (state_12691[(2)]);var state_12691__$1 = state_12691;return cljs.core.async.impl.ioc_helpers.return_chan(state_12691__$1,inst_12689);
} else
{if((state_val_12692 === (12)))
{var inst_12677 = (state_12691[(8)]);var inst_12677__$1 = (state_12691[(2)]);var inst_12678 = cljs.core.some(cljs.core.nil_QMARK_,inst_12677__$1);var state_12691__$1 = (function (){var statearr_12700 = state_12691;(statearr_12700[(8)] = inst_12677__$1);
return statearr_12700;
})();if(cljs.core.truth_(inst_12678))
{var statearr_12701_12729 = state_12691__$1;(statearr_12701_12729[(1)] = (13));
} else
{var statearr_12702_12730 = state_12691__$1;(statearr_12702_12730[(1)] = (14));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (2)))
{var inst_12654 = cljs.core.reset_BANG_(dctr,cnt);var inst_12655 = (0);var state_12691__$1 = (function (){var statearr_12703 = state_12691;(statearr_12703[(9)] = inst_12654);
(statearr_12703[(7)] = inst_12655);
return statearr_12703;
})();var statearr_12704_12731 = state_12691__$1;(statearr_12704_12731[(2)] = null);
(statearr_12704_12731[(1)] = (4));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (11)))
{var inst_12655 = (state_12691[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12691,(10),Object,null,(9));var inst_12664 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12655) : chs__$1.call(null,inst_12655));var inst_12665 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12655) : done.call(null,inst_12655));var inst_12666 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12664,inst_12665);var state_12691__$1 = state_12691;var statearr_12705_12732 = state_12691__$1;(statearr_12705_12732[(2)] = inst_12666);
cljs.core.async.impl.ioc_helpers.process_exception(state_12691__$1);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (9)))
{var inst_12655 = (state_12691[(7)]);var inst_12668 = (state_12691[(2)]);var inst_12669 = (inst_12655 + (1));var inst_12655__$1 = inst_12669;var state_12691__$1 = (function (){var statearr_12706 = state_12691;(statearr_12706[(7)] = inst_12655__$1);
(statearr_12706[(10)] = inst_12668);
return statearr_12706;
})();var statearr_12707_12733 = state_12691__$1;(statearr_12707_12733[(2)] = null);
(statearr_12707_12733[(1)] = (4));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (5)))
{var inst_12675 = (state_12691[(2)]);var state_12691__$1 = (function (){var statearr_12708 = state_12691;(statearr_12708[(11)] = inst_12675);
return statearr_12708;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12691__$1,(12),dchan);
} else
{if((state_val_12692 === (14)))
{var inst_12677 = (state_12691[(8)]);var inst_12682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12677);var state_12691__$1 = state_12691;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12691__$1,(16),out,inst_12682);
} else
{if((state_val_12692 === (16)))
{var inst_12684 = (state_12691[(2)]);var state_12691__$1 = (function (){var statearr_12709 = state_12691;(statearr_12709[(12)] = inst_12684);
return statearr_12709;
})();var statearr_12710_12734 = state_12691__$1;(statearr_12710_12734[(2)] = null);
(statearr_12710_12734[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (10)))
{var inst_12659 = (state_12691[(2)]);var inst_12660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_12691__$1 = (function (){var statearr_12711 = state_12691;(statearr_12711[(13)] = inst_12659);
return statearr_12711;
})();var statearr_12712_12735 = state_12691__$1;(statearr_12712_12735[(2)] = inst_12660);
cljs.core.async.impl.ioc_helpers.process_exception(state_12691__$1);
return cljs.core.constant$keyword$31;
} else
{if((state_val_12692 === (8)))
{var inst_12673 = (state_12691[(2)]);var state_12691__$1 = state_12691;var statearr_12713_12736 = state_12691__$1;(statearr_12713_12736[(2)] = inst_12673);
(statearr_12713_12736[(1)] = (5));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12717[(0)] = state_machine__5694__auto__);
(statearr_12717[(1)] = (1));
return statearr_12717;
});
var state_machine__5694__auto____1 = (function (state_12691){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_12691);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12718){if((e12718 instanceof Object))
{var ex__5697__auto__ = e12718;var statearr_12719_12737 = state_12691;(statearr_12719_12737[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12691);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__12738 = state_12691;
state_12691 = G__12738;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12691){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_12720 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_12720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12721);
return statearr_12720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___12846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___12846,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12846,out){
return (function (state_12822){var state_val_12823 = (state_12822[(1)]);if((state_val_12823 === (7)))
{var inst_12801 = (state_12822[(7)]);var inst_12802 = (state_12822[(8)]);var inst_12801__$1 = (state_12822[(2)]);var inst_12802__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12801__$1,(0),null);var inst_12803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12801__$1,(1),null);var inst_12804 = (inst_12802__$1 == null);var state_12822__$1 = (function (){var statearr_12824 = state_12822;(statearr_12824[(9)] = inst_12803);
(statearr_12824[(7)] = inst_12801__$1);
(statearr_12824[(8)] = inst_12802__$1);
return statearr_12824;
})();if(cljs.core.truth_(inst_12804))
{var statearr_12825_12847 = state_12822__$1;(statearr_12825_12847[(1)] = (8));
} else
{var statearr_12826_12848 = state_12822__$1;(statearr_12826_12848[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (1)))
{var inst_12793 = cljs.core.vec(chs);var inst_12794 = inst_12793;var state_12822__$1 = (function (){var statearr_12827 = state_12822;(statearr_12827[(10)] = inst_12794);
return statearr_12827;
})();var statearr_12828_12849 = state_12822__$1;(statearr_12828_12849[(2)] = null);
(statearr_12828_12849[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (4)))
{var inst_12794 = (state_12822[(10)]);var state_12822__$1 = state_12822;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12822__$1,(7),inst_12794);
} else
{if((state_val_12823 === (6)))
{var inst_12818 = (state_12822[(2)]);var state_12822__$1 = state_12822;var statearr_12829_12850 = state_12822__$1;(statearr_12829_12850[(2)] = inst_12818);
(statearr_12829_12850[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (3)))
{var inst_12820 = (state_12822[(2)]);var state_12822__$1 = state_12822;return cljs.core.async.impl.ioc_helpers.return_chan(state_12822__$1,inst_12820);
} else
{if((state_val_12823 === (2)))
{var inst_12794 = (state_12822[(10)]);var inst_12796 = cljs.core.count(inst_12794);var inst_12797 = (inst_12796 > (0));var state_12822__$1 = state_12822;if(cljs.core.truth_(inst_12797))
{var statearr_12831_12851 = state_12822__$1;(statearr_12831_12851[(1)] = (4));
} else
{var statearr_12832_12852 = state_12822__$1;(statearr_12832_12852[(1)] = (5));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (11)))
{var inst_12794 = (state_12822[(10)]);var inst_12811 = (state_12822[(2)]);var tmp12830 = inst_12794;var inst_12794__$1 = tmp12830;var state_12822__$1 = (function (){var statearr_12833 = state_12822;(statearr_12833[(11)] = inst_12811);
(statearr_12833[(10)] = inst_12794__$1);
return statearr_12833;
})();var statearr_12834_12853 = state_12822__$1;(statearr_12834_12853[(2)] = null);
(statearr_12834_12853[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (9)))
{var inst_12802 = (state_12822[(8)]);var state_12822__$1 = state_12822;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12822__$1,(11),out,inst_12802);
} else
{if((state_val_12823 === (5)))
{var inst_12816 = cljs.core.async.close_BANG_(out);var state_12822__$1 = state_12822;var statearr_12835_12854 = state_12822__$1;(statearr_12835_12854[(2)] = inst_12816);
(statearr_12835_12854[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (10)))
{var inst_12814 = (state_12822[(2)]);var state_12822__$1 = state_12822;var statearr_12836_12855 = state_12822__$1;(statearr_12836_12855[(2)] = inst_12814);
(statearr_12836_12855[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12823 === (8)))
{var inst_12803 = (state_12822[(9)]);var inst_12794 = (state_12822[(10)]);var inst_12801 = (state_12822[(7)]);var inst_12802 = (state_12822[(8)]);var inst_12806 = (function (){var c = inst_12803;var v = inst_12802;var vec__12799 = inst_12801;var cs = inst_12794;return ((function (c,v,vec__12799,cs,inst_12803,inst_12794,inst_12801,inst_12802,state_val_12823,c__5708__auto___12846,out){
return (function (p1__12739_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12739_SHARP_);
});
;})(c,v,vec__12799,cs,inst_12803,inst_12794,inst_12801,inst_12802,state_val_12823,c__5708__auto___12846,out))
})();var inst_12807 = cljs.core.filterv(inst_12806,inst_12794);var inst_12794__$1 = inst_12807;var state_12822__$1 = (function (){var statearr_12837 = state_12822;(statearr_12837[(10)] = inst_12794__$1);
return statearr_12837;
})();var statearr_12838_12856 = state_12822__$1;(statearr_12838_12856[(2)] = null);
(statearr_12838_12856[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12846,out))
;return ((function (switch__5693__auto__,c__5708__auto___12846,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12842 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12842[(0)] = state_machine__5694__auto__);
(statearr_12842[(1)] = (1));
return statearr_12842;
});
var state_machine__5694__auto____1 = (function (state_12822){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_12822);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12843){if((e12843 instanceof Object))
{var ex__5697__auto__ = e12843;var statearr_12844_12857 = state_12822;(statearr_12844_12857[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12822);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__12858 = state_12822;
state_12822 = G__12858;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12822){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12846,out))
})();var state__5710__auto__ = (function (){var statearr_12845 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_12845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12846);
return statearr_12845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___12846,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___12951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___12951,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12951,out){
return (function (state_12928){var state_val_12929 = (state_12928[(1)]);if((state_val_12929 === (7)))
{var inst_12910 = (state_12928[(7)]);var inst_12910__$1 = (state_12928[(2)]);var inst_12911 = (inst_12910__$1 == null);var inst_12912 = cljs.core.not(inst_12911);var state_12928__$1 = (function (){var statearr_12930 = state_12928;(statearr_12930[(7)] = inst_12910__$1);
return statearr_12930;
})();if(inst_12912)
{var statearr_12931_12952 = state_12928__$1;(statearr_12931_12952[(1)] = (8));
} else
{var statearr_12932_12953 = state_12928__$1;(statearr_12932_12953[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (1)))
{var inst_12905 = (0);var state_12928__$1 = (function (){var statearr_12933 = state_12928;(statearr_12933[(8)] = inst_12905);
return statearr_12933;
})();var statearr_12934_12954 = state_12928__$1;(statearr_12934_12954[(2)] = null);
(statearr_12934_12954[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (4)))
{var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12928__$1,(7),ch);
} else
{if((state_val_12929 === (6)))
{var inst_12923 = (state_12928[(2)]);var state_12928__$1 = state_12928;var statearr_12935_12955 = state_12928__$1;(statearr_12935_12955[(2)] = inst_12923);
(statearr_12935_12955[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (3)))
{var inst_12925 = (state_12928[(2)]);var inst_12926 = cljs.core.async.close_BANG_(out);var state_12928__$1 = (function (){var statearr_12936 = state_12928;(statearr_12936[(9)] = inst_12925);
return statearr_12936;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12928__$1,inst_12926);
} else
{if((state_val_12929 === (2)))
{var inst_12905 = (state_12928[(8)]);var inst_12907 = (inst_12905 < n);var state_12928__$1 = state_12928;if(cljs.core.truth_(inst_12907))
{var statearr_12937_12956 = state_12928__$1;(statearr_12937_12956[(1)] = (4));
} else
{var statearr_12938_12957 = state_12928__$1;(statearr_12938_12957[(1)] = (5));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (11)))
{var inst_12905 = (state_12928[(8)]);var inst_12915 = (state_12928[(2)]);var inst_12916 = (inst_12905 + (1));var inst_12905__$1 = inst_12916;var state_12928__$1 = (function (){var statearr_12939 = state_12928;(statearr_12939[(10)] = inst_12915);
(statearr_12939[(8)] = inst_12905__$1);
return statearr_12939;
})();var statearr_12940_12958 = state_12928__$1;(statearr_12940_12958[(2)] = null);
(statearr_12940_12958[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (9)))
{var state_12928__$1 = state_12928;var statearr_12941_12959 = state_12928__$1;(statearr_12941_12959[(2)] = null);
(statearr_12941_12959[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (5)))
{var state_12928__$1 = state_12928;var statearr_12942_12960 = state_12928__$1;(statearr_12942_12960[(2)] = null);
(statearr_12942_12960[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (10)))
{var inst_12920 = (state_12928[(2)]);var state_12928__$1 = state_12928;var statearr_12943_12961 = state_12928__$1;(statearr_12943_12961[(2)] = inst_12920);
(statearr_12943_12961[(1)] = (6));
return cljs.core.constant$keyword$31;
} else
{if((state_val_12929 === (8)))
{var inst_12910 = (state_12928[(7)]);var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12928__$1,(11),out,inst_12910);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___12951,out))
;return ((function (switch__5693__auto__,c__5708__auto___12951,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12947 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12947[(0)] = state_machine__5694__auto__);
(statearr_12947[(1)] = (1));
return statearr_12947;
});
var state_machine__5694__auto____1 = (function (state_12928){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_12928);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12948){if((e12948 instanceof Object))
{var ex__5697__auto__ = e12948;var statearr_12949_12962 = state_12928;(statearr_12949_12962[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12928);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e12948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__12963 = state_12928;
state_12928 = G__12963;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12928){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12951,out))
})();var state__5710__auto__ = (function (){var statearr_12950 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_12950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12951);
return statearr_12950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___12951,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___13060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___13060,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___13060,out){
return (function (state_13035){var state_val_13036 = (state_13035[(1)]);if((state_val_13036 === (7)))
{var inst_13030 = (state_13035[(2)]);var state_13035__$1 = state_13035;var statearr_13037_13061 = state_13035__$1;(statearr_13037_13061[(2)] = inst_13030);
(statearr_13037_13061[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (1)))
{var inst_13012 = null;var state_13035__$1 = (function (){var statearr_13038 = state_13035;(statearr_13038[(7)] = inst_13012);
return statearr_13038;
})();var statearr_13039_13062 = state_13035__$1;(statearr_13039_13062[(2)] = null);
(statearr_13039_13062[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (4)))
{var inst_13015 = (state_13035[(8)]);var inst_13015__$1 = (state_13035[(2)]);var inst_13016 = (inst_13015__$1 == null);var inst_13017 = cljs.core.not(inst_13016);var state_13035__$1 = (function (){var statearr_13040 = state_13035;(statearr_13040[(8)] = inst_13015__$1);
return statearr_13040;
})();if(inst_13017)
{var statearr_13041_13063 = state_13035__$1;(statearr_13041_13063[(1)] = (5));
} else
{var statearr_13042_13064 = state_13035__$1;(statearr_13042_13064[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (6)))
{var state_13035__$1 = state_13035;var statearr_13043_13065 = state_13035__$1;(statearr_13043_13065[(2)] = null);
(statearr_13043_13065[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (3)))
{var inst_13032 = (state_13035[(2)]);var inst_13033 = cljs.core.async.close_BANG_(out);var state_13035__$1 = (function (){var statearr_13044 = state_13035;(statearr_13044[(9)] = inst_13032);
return statearr_13044;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_13035__$1,inst_13033);
} else
{if((state_val_13036 === (2)))
{var state_13035__$1 = state_13035;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13035__$1,(4),ch);
} else
{if((state_val_13036 === (11)))
{var inst_13015 = (state_13035[(8)]);var inst_13024 = (state_13035[(2)]);var inst_13012 = inst_13015;var state_13035__$1 = (function (){var statearr_13045 = state_13035;(statearr_13045[(7)] = inst_13012);
(statearr_13045[(10)] = inst_13024);
return statearr_13045;
})();var statearr_13046_13066 = state_13035__$1;(statearr_13046_13066[(2)] = null);
(statearr_13046_13066[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (9)))
{var inst_13015 = (state_13035[(8)]);var state_13035__$1 = state_13035;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13035__$1,(11),out,inst_13015);
} else
{if((state_val_13036 === (5)))
{var inst_13015 = (state_13035[(8)]);var inst_13012 = (state_13035[(7)]);var inst_13019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13015,inst_13012);var state_13035__$1 = state_13035;if(inst_13019)
{var statearr_13048_13067 = state_13035__$1;(statearr_13048_13067[(1)] = (8));
} else
{var statearr_13049_13068 = state_13035__$1;(statearr_13049_13068[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (10)))
{var inst_13027 = (state_13035[(2)]);var state_13035__$1 = state_13035;var statearr_13050_13069 = state_13035__$1;(statearr_13050_13069[(2)] = inst_13027);
(statearr_13050_13069[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13036 === (8)))
{var inst_13012 = (state_13035[(7)]);var tmp13047 = inst_13012;var inst_13012__$1 = tmp13047;var state_13035__$1 = (function (){var statearr_13051 = state_13035;(statearr_13051[(7)] = inst_13012__$1);
return statearr_13051;
})();var statearr_13052_13070 = state_13035__$1;(statearr_13052_13070[(2)] = null);
(statearr_13052_13070[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___13060,out))
;return ((function (switch__5693__auto__,c__5708__auto___13060,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_13056 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13056[(0)] = state_machine__5694__auto__);
(statearr_13056[(1)] = (1));
return statearr_13056;
});
var state_machine__5694__auto____1 = (function (state_13035){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_13035);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e13057){if((e13057 instanceof Object))
{var ex__5697__auto__ = e13057;var statearr_13058_13071 = state_13035;(statearr_13058_13071[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13035);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e13057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__13072 = state_13035;
state_13035 = G__13072;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_13035){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_13035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___13060,out))
})();var state__5710__auto__ = (function (){var statearr_13059 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_13059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___13060);
return statearr_13059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___13060,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___13207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___13207,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___13207,out){
return (function (state_13177){var state_val_13178 = (state_13177[(1)]);if((state_val_13178 === (7)))
{var inst_13173 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13179_13208 = state_13177__$1;(statearr_13179_13208[(2)] = inst_13173);
(statearr_13179_13208[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (1)))
{var inst_13140 = (new Array(n));var inst_13141 = inst_13140;var inst_13142 = (0);var state_13177__$1 = (function (){var statearr_13180 = state_13177;(statearr_13180[(7)] = inst_13142);
(statearr_13180[(8)] = inst_13141);
return statearr_13180;
})();var statearr_13181_13209 = state_13177__$1;(statearr_13181_13209[(2)] = null);
(statearr_13181_13209[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (4)))
{var inst_13145 = (state_13177[(9)]);var inst_13145__$1 = (state_13177[(2)]);var inst_13146 = (inst_13145__$1 == null);var inst_13147 = cljs.core.not(inst_13146);var state_13177__$1 = (function (){var statearr_13182 = state_13177;(statearr_13182[(9)] = inst_13145__$1);
return statearr_13182;
})();if(inst_13147)
{var statearr_13183_13210 = state_13177__$1;(statearr_13183_13210[(1)] = (5));
} else
{var statearr_13184_13211 = state_13177__$1;(statearr_13184_13211[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (15)))
{var inst_13167 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13185_13212 = state_13177__$1;(statearr_13185_13212[(2)] = inst_13167);
(statearr_13185_13212[(1)] = (14));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (13)))
{var state_13177__$1 = state_13177;var statearr_13186_13213 = state_13177__$1;(statearr_13186_13213[(2)] = null);
(statearr_13186_13213[(1)] = (14));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (6)))
{var inst_13142 = (state_13177[(7)]);var inst_13163 = (inst_13142 > (0));var state_13177__$1 = state_13177;if(cljs.core.truth_(inst_13163))
{var statearr_13187_13214 = state_13177__$1;(statearr_13187_13214[(1)] = (12));
} else
{var statearr_13188_13215 = state_13177__$1;(statearr_13188_13215[(1)] = (13));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (3)))
{var inst_13175 = (state_13177[(2)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.return_chan(state_13177__$1,inst_13175);
} else
{if((state_val_13178 === (12)))
{var inst_13141 = (state_13177[(8)]);var inst_13165 = cljs.core.vec(inst_13141);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13177__$1,(15),out,inst_13165);
} else
{if((state_val_13178 === (2)))
{var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13177__$1,(4),ch);
} else
{if((state_val_13178 === (11)))
{var inst_13157 = (state_13177[(2)]);var inst_13158 = (new Array(n));var inst_13141 = inst_13158;var inst_13142 = (0);var state_13177__$1 = (function (){var statearr_13189 = state_13177;(statearr_13189[(7)] = inst_13142);
(statearr_13189[(8)] = inst_13141);
(statearr_13189[(10)] = inst_13157);
return statearr_13189;
})();var statearr_13190_13216 = state_13177__$1;(statearr_13190_13216[(2)] = null);
(statearr_13190_13216[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (9)))
{var inst_13141 = (state_13177[(8)]);var inst_13155 = cljs.core.vec(inst_13141);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13177__$1,(11),out,inst_13155);
} else
{if((state_val_13178 === (5)))
{var inst_13142 = (state_13177[(7)]);var inst_13150 = (state_13177[(11)]);var inst_13141 = (state_13177[(8)]);var inst_13145 = (state_13177[(9)]);var inst_13149 = (inst_13141[inst_13142] = inst_13145);var inst_13150__$1 = (inst_13142 + (1));var inst_13151 = (inst_13150__$1 < n);var state_13177__$1 = (function (){var statearr_13191 = state_13177;(statearr_13191[(11)] = inst_13150__$1);
(statearr_13191[(12)] = inst_13149);
return statearr_13191;
})();if(cljs.core.truth_(inst_13151))
{var statearr_13192_13217 = state_13177__$1;(statearr_13192_13217[(1)] = (8));
} else
{var statearr_13193_13218 = state_13177__$1;(statearr_13193_13218[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (14)))
{var inst_13170 = (state_13177[(2)]);var inst_13171 = cljs.core.async.close_BANG_(out);var state_13177__$1 = (function (){var statearr_13195 = state_13177;(statearr_13195[(13)] = inst_13170);
return statearr_13195;
})();var statearr_13196_13219 = state_13177__$1;(statearr_13196_13219[(2)] = inst_13171);
(statearr_13196_13219[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (10)))
{var inst_13161 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13197_13220 = state_13177__$1;(statearr_13197_13220[(2)] = inst_13161);
(statearr_13197_13220[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13178 === (8)))
{var inst_13150 = (state_13177[(11)]);var inst_13141 = (state_13177[(8)]);var tmp13194 = inst_13141;var inst_13141__$1 = tmp13194;var inst_13142 = inst_13150;var state_13177__$1 = (function (){var statearr_13198 = state_13177;(statearr_13198[(7)] = inst_13142);
(statearr_13198[(8)] = inst_13141__$1);
return statearr_13198;
})();var statearr_13199_13221 = state_13177__$1;(statearr_13199_13221[(2)] = null);
(statearr_13199_13221[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___13207,out))
;return ((function (switch__5693__auto__,c__5708__auto___13207,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_13203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13203[(0)] = state_machine__5694__auto__);
(statearr_13203[(1)] = (1));
return statearr_13203;
});
var state_machine__5694__auto____1 = (function (state_13177){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_13177);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e13204){if((e13204 instanceof Object))
{var ex__5697__auto__ = e13204;var statearr_13205_13222 = state_13177;(statearr_13205_13222[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13177);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e13204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__13223 = state_13177;
state_13177 = G__13223;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_13177){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_13177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___13207,out))
})();var state__5710__auto__ = (function (){var statearr_13206 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_13206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___13207);
return statearr_13206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___13207,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___13366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___13366,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___13366,out){
return (function (state_13336){var state_val_13337 = (state_13336[(1)]);if((state_val_13337 === (7)))
{var inst_13332 = (state_13336[(2)]);var state_13336__$1 = state_13336;var statearr_13338_13367 = state_13336__$1;(statearr_13338_13367[(2)] = inst_13332);
(statearr_13338_13367[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (1)))
{var inst_13295 = [];var inst_13296 = inst_13295;var inst_13297 = cljs.core.constant$keyword$44;var state_13336__$1 = (function (){var statearr_13339 = state_13336;(statearr_13339[(7)] = inst_13296);
(statearr_13339[(8)] = inst_13297);
return statearr_13339;
})();var statearr_13340_13368 = state_13336__$1;(statearr_13340_13368[(2)] = null);
(statearr_13340_13368[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (4)))
{var inst_13300 = (state_13336[(9)]);var inst_13300__$1 = (state_13336[(2)]);var inst_13301 = (inst_13300__$1 == null);var inst_13302 = cljs.core.not(inst_13301);var state_13336__$1 = (function (){var statearr_13341 = state_13336;(statearr_13341[(9)] = inst_13300__$1);
return statearr_13341;
})();if(inst_13302)
{var statearr_13342_13369 = state_13336__$1;(statearr_13342_13369[(1)] = (5));
} else
{var statearr_13343_13370 = state_13336__$1;(statearr_13343_13370[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (15)))
{var inst_13326 = (state_13336[(2)]);var state_13336__$1 = state_13336;var statearr_13344_13371 = state_13336__$1;(statearr_13344_13371[(2)] = inst_13326);
(statearr_13344_13371[(1)] = (14));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (13)))
{var state_13336__$1 = state_13336;var statearr_13345_13372 = state_13336__$1;(statearr_13345_13372[(2)] = null);
(statearr_13345_13372[(1)] = (14));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (6)))
{var inst_13296 = (state_13336[(7)]);var inst_13321 = inst_13296.length;var inst_13322 = (inst_13321 > (0));var state_13336__$1 = state_13336;if(cljs.core.truth_(inst_13322))
{var statearr_13346_13373 = state_13336__$1;(statearr_13346_13373[(1)] = (12));
} else
{var statearr_13347_13374 = state_13336__$1;(statearr_13347_13374[(1)] = (13));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (3)))
{var inst_13334 = (state_13336[(2)]);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.return_chan(state_13336__$1,inst_13334);
} else
{if((state_val_13337 === (12)))
{var inst_13296 = (state_13336[(7)]);var inst_13324 = cljs.core.vec(inst_13296);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13336__$1,(15),out,inst_13324);
} else
{if((state_val_13337 === (2)))
{var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13336__$1,(4),ch);
} else
{if((state_val_13337 === (11)))
{var inst_13300 = (state_13336[(9)]);var inst_13304 = (state_13336[(10)]);var inst_13314 = (state_13336[(2)]);var inst_13315 = [];var inst_13316 = inst_13315.push(inst_13300);var inst_13296 = inst_13315;var inst_13297 = inst_13304;var state_13336__$1 = (function (){var statearr_13348 = state_13336;(statearr_13348[(7)] = inst_13296);
(statearr_13348[(11)] = inst_13314);
(statearr_13348[(8)] = inst_13297);
(statearr_13348[(12)] = inst_13316);
return statearr_13348;
})();var statearr_13349_13375 = state_13336__$1;(statearr_13349_13375[(2)] = null);
(statearr_13349_13375[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (9)))
{var inst_13296 = (state_13336[(7)]);var inst_13312 = cljs.core.vec(inst_13296);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13336__$1,(11),out,inst_13312);
} else
{if((state_val_13337 === (5)))
{var inst_13300 = (state_13336[(9)]);var inst_13304 = (state_13336[(10)]);var inst_13297 = (state_13336[(8)]);var inst_13304__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13300) : f.call(null,inst_13300));var inst_13305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13304__$1,inst_13297);var inst_13306 = cljs.core.keyword_identical_QMARK_(inst_13297,cljs.core.constant$keyword$44);var inst_13307 = (inst_13305) || (inst_13306);var state_13336__$1 = (function (){var statearr_13350 = state_13336;(statearr_13350[(10)] = inst_13304__$1);
return statearr_13350;
})();if(cljs.core.truth_(inst_13307))
{var statearr_13351_13376 = state_13336__$1;(statearr_13351_13376[(1)] = (8));
} else
{var statearr_13352_13377 = state_13336__$1;(statearr_13352_13377[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (14)))
{var inst_13329 = (state_13336[(2)]);var inst_13330 = cljs.core.async.close_BANG_(out);var state_13336__$1 = (function (){var statearr_13354 = state_13336;(statearr_13354[(13)] = inst_13329);
return statearr_13354;
})();var statearr_13355_13378 = state_13336__$1;(statearr_13355_13378[(2)] = inst_13330);
(statearr_13355_13378[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (10)))
{var inst_13319 = (state_13336[(2)]);var state_13336__$1 = state_13336;var statearr_13356_13379 = state_13336__$1;(statearr_13356_13379[(2)] = inst_13319);
(statearr_13356_13379[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_13337 === (8)))
{var inst_13300 = (state_13336[(9)]);var inst_13296 = (state_13336[(7)]);var inst_13304 = (state_13336[(10)]);var inst_13309 = inst_13296.push(inst_13300);var tmp13353 = inst_13296;var inst_13296__$1 = tmp13353;var inst_13297 = inst_13304;var state_13336__$1 = (function (){var statearr_13357 = state_13336;(statearr_13357[(7)] = inst_13296__$1);
(statearr_13357[(14)] = inst_13309);
(statearr_13357[(8)] = inst_13297);
return statearr_13357;
})();var statearr_13358_13380 = state_13336__$1;(statearr_13358_13380[(2)] = null);
(statearr_13358_13380[(1)] = (2));
return cljs.core.constant$keyword$31;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___13366,out))
;return ((function (switch__5693__auto__,c__5708__auto___13366,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_13362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13362[(0)] = state_machine__5694__auto__);
(statearr_13362[(1)] = (1));
return statearr_13362;
});
var state_machine__5694__auto____1 = (function (state_13336){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_13336);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e13363){if((e13363 instanceof Object))
{var ex__5697__auto__ = e13363;var statearr_13364_13381 = state_13336;(statearr_13364_13381[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13336);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e13363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__13382 = state_13336;
state_13336 = G__13382;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_13336){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_13336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___13366,out))
})();var state__5710__auto__ = (function (){var statearr_13365 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_13365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___13366);
return statearr_13365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___13366,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
