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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13326 = (function (f,fn_handler,meta13327){
this.f = f;
this.fn_handler = fn_handler;
this.meta13327 = meta13327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13326.cljs$lang$type = true;
cljs.core.async.t13326.cljs$lang$ctorStr = "cljs.core.async/t13326";
cljs.core.async.t13326.cljs$lang$ctorPrWriter = (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13326");
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13328){var self__ = this;
var _13328__$1 = this;return self__.meta13327;
});
cljs.core.async.t13326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13328,meta13327__$1){var self__ = this;
var _13328__$1 = this;return (new cljs.core.async.t13326(self__.f,self__.fn_handler,meta13327__$1));
});
cljs.core.async.__GT_t13326 = (function __GT_t13326(f__$1,fn_handler__$1,meta13327){return (new cljs.core.async.t13326(f__$1,fn_handler__$1,meta13327));
});
}
return (new cljs.core.async.t13326(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13330 = buff;if(G__13330)
{var bit__8581__auto__ = null;if(cljs.core.truth_((function (){var or__7931__auto__ = bit__8581__auto__;if(cljs.core.truth_(or__7931__auto__))
{return or__7931__auto__;
} else
{return G__13330.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13330.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13330);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13330);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13331 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13331);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13331,ret){
return (function (){return fn1.call(null,val_13331);
});})(val_13331,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8787__auto___13332 = n;var x_13333 = (0);while(true){
if((x_13333 < n__8787__auto___13332))
{(a[x_13333] = (0));
{
var G__13334 = (x_13333 + (1));
x_13333 = G__13334;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13335 = (i + (1));
i = G__13335;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13339 = (function (flag,alt_flag,meta13340){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13340 = meta13340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13339.cljs$lang$type = true;
cljs.core.async.t13339.cljs$lang$ctorStr = "cljs.core.async/t13339";
cljs.core.async.t13339.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13339");
});})(flag))
;
cljs.core.async.t13339.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13341){var self__ = this;
var _13341__$1 = this;return self__.meta13340;
});})(flag))
;
cljs.core.async.t13339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13341,meta13340__$1){var self__ = this;
var _13341__$1 = this;return (new cljs.core.async.t13339(self__.flag,self__.alt_flag,meta13340__$1));
});})(flag))
;
cljs.core.async.__GT_t13339 = ((function (flag){
return (function __GT_t13339(flag__$1,alt_flag__$1,meta13340){return (new cljs.core.async.t13339(flag__$1,alt_flag__$1,meta13340));
});})(flag))
;
}
return (new cljs.core.async.t13339(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13345 = (function (cb,flag,alt_handler,meta13346){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13346 = meta13346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13345.cljs$lang$type = true;
cljs.core.async.t13345.cljs$lang$ctorStr = "cljs.core.async/t13345";
cljs.core.async.t13345.cljs$lang$ctorPrWriter = (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13345");
});
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13347){var self__ = this;
var _13347__$1 = this;return self__.meta13346;
});
cljs.core.async.t13345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13347,meta13346__$1){var self__ = this;
var _13347__$1 = this;return (new cljs.core.async.t13345(self__.cb,self__.flag,self__.alt_handler,meta13346__$1));
});
cljs.core.async.__GT_t13345 = (function __GT_t13345(cb__$1,flag__$1,alt_handler__$1,meta13346){return (new cljs.core.async.t13345(cb__$1,flag__$1,alt_handler__$1,meta13346));
});
}
return (new cljs.core.async.t13345(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13348_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13348_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13349_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13349_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7931__auto__ = wport;if(cljs.core.truth_(or__7931__auto__))
{return or__7931__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13350 = (i + (1));
i = G__13350;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7931__auto__ = ret;if(cljs.core.truth_(or__7931__auto__))
{return or__7931__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7919__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7919__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7919__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__13351){var map__13353 = p__13351;var map__13353__$1 = ((cljs.core.seq_QMARK_.call(null,map__13353))?cljs.core.apply.call(null,cljs.core.hash_map,map__13353):map__13353);var opts = map__13353__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13351 = null;if (arguments.length > 1) {
  p__13351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13351);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13354){
var ports = cljs.core.first(arglist__13354);
var p__13351 = cljs.core.rest(arglist__13354);
return alts_BANG___delegate(ports,p__13351);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13362 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13362 = (function (ch,f,map_LT_,meta13363){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13363 = meta13363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13362.cljs$lang$type = true;
cljs.core.async.t13362.cljs$lang$ctorStr = "cljs.core.async/t13362";
cljs.core.async.t13362.cljs$lang$ctorPrWriter = (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13362");
});
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13365 = (function (fn1,_,meta13363,ch,f,map_LT_,meta13366){
this.fn1 = fn1;
this._ = _;
this.meta13363 = meta13363;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13366 = meta13366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13365.cljs$lang$type = true;
cljs.core.async.t13365.cljs$lang$ctorStr = "cljs.core.async/t13365";
cljs.core.async.t13365.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13365");
});})(___$1))
;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13355_SHARP_){return f1.call(null,(((p1__13355_SHARP_ == null))?null:self__.f.call(null,p1__13355_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13367){var self__ = this;
var _13367__$1 = this;return self__.meta13366;
});})(___$1))
;
cljs.core.async.t13365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13367,meta13366__$1){var self__ = this;
var _13367__$1 = this;return (new cljs.core.async.t13365(self__.fn1,self__._,self__.meta13363,self__.ch,self__.f,self__.map_LT_,meta13366__$1));
});})(___$1))
;
cljs.core.async.__GT_t13365 = ((function (___$1){
return (function __GT_t13365(fn1__$1,___$2,meta13363__$1,ch__$2,f__$2,map_LT___$2,meta13366){return (new cljs.core.async.t13365(fn1__$1,___$2,meta13363__$1,ch__$2,f__$2,map_LT___$2,meta13366));
});})(___$1))
;
}
return (new cljs.core.async.t13365(fn1,___$1,self__.meta13363,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7919__auto__ = ret;if(cljs.core.truth_(and__7919__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7919__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13364){var self__ = this;
var _13364__$1 = this;return self__.meta13363;
});
cljs.core.async.t13362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13364,meta13363__$1){var self__ = this;
var _13364__$1 = this;return (new cljs.core.async.t13362(self__.ch,self__.f,self__.map_LT_,meta13363__$1));
});
cljs.core.async.__GT_t13362 = (function __GT_t13362(ch__$1,f__$1,map_LT___$1,meta13363){return (new cljs.core.async.t13362(ch__$1,f__$1,map_LT___$1,meta13363));
});
}
return (new cljs.core.async.t13362(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13371 = (function (ch,f,map_GT_,meta13372){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13372 = meta13372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13371.cljs$lang$type = true;
cljs.core.async.t13371.cljs$lang$ctorStr = "cljs.core.async/t13371";
cljs.core.async.t13371.cljs$lang$ctorPrWriter = (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13371");
});
cljs.core.async.t13371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13373){var self__ = this;
var _13373__$1 = this;return self__.meta13372;
});
cljs.core.async.t13371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13373,meta13372__$1){var self__ = this;
var _13373__$1 = this;return (new cljs.core.async.t13371(self__.ch,self__.f,self__.map_GT_,meta13372__$1));
});
cljs.core.async.__GT_t13371 = (function __GT_t13371(ch__$1,f__$1,map_GT___$1,meta13372){return (new cljs.core.async.t13371(ch__$1,f__$1,map_GT___$1,meta13372));
});
}
return (new cljs.core.async.t13371(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13377 = (function (ch,p,filter_GT_,meta13378){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13378 = meta13378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13377.cljs$lang$type = true;
cljs.core.async.t13377.cljs$lang$ctorStr = "cljs.core.async/t13377";
cljs.core.async.t13377.cljs$lang$ctorPrWriter = (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t13377");
});
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13379){var self__ = this;
var _13379__$1 = this;return self__.meta13378;
});
cljs.core.async.t13377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13379,meta13378__$1){var self__ = this;
var _13379__$1 = this;return (new cljs.core.async.t13377(self__.ch,self__.p,self__.filter_GT_,meta13378__$1));
});
cljs.core.async.__GT_t13377 = (function __GT_t13377(ch__$1,p__$1,filter_GT___$1,meta13378){return (new cljs.core.async.t13377(ch__$1,p__$1,filter_GT___$1,meta13378));
});
}
return (new cljs.core.async.t13377(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10327__auto___13462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___13462,out){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___13462,out){
return (function (state_13441){var state_val_13442 = (state_13441[(1)]);if((state_val_13442 === (7)))
{var inst_13437 = (state_13441[(2)]);var state_13441__$1 = state_13441;var statearr_13443_13463 = state_13441__$1;(statearr_13443_13463[(2)] = inst_13437);
(statearr_13443_13463[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (1)))
{var state_13441__$1 = state_13441;var statearr_13444_13464 = state_13441__$1;(statearr_13444_13464[(2)] = null);
(statearr_13444_13464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (4)))
{var inst_13423 = (state_13441[(7)]);var inst_13423__$1 = (state_13441[(2)]);var inst_13424 = (inst_13423__$1 == null);var state_13441__$1 = (function (){var statearr_13445 = state_13441;(statearr_13445[(7)] = inst_13423__$1);
return statearr_13445;
})();if(cljs.core.truth_(inst_13424))
{var statearr_13446_13465 = state_13441__$1;(statearr_13446_13465[(1)] = (5));
} else
{var statearr_13447_13466 = state_13441__$1;(statearr_13447_13466[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (6)))
{var inst_13423 = (state_13441[(7)]);var inst_13428 = p.call(null,inst_13423);var state_13441__$1 = state_13441;if(cljs.core.truth_(inst_13428))
{var statearr_13448_13467 = state_13441__$1;(statearr_13448_13467[(1)] = (8));
} else
{var statearr_13449_13468 = state_13441__$1;(statearr_13449_13468[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (3)))
{var inst_13439 = (state_13441[(2)]);var state_13441__$1 = state_13441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13441__$1,inst_13439);
} else
{if((state_val_13442 === (2)))
{var state_13441__$1 = state_13441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13441__$1,(4),ch);
} else
{if((state_val_13442 === (11)))
{var inst_13431 = (state_13441[(2)]);var state_13441__$1 = state_13441;var statearr_13450_13469 = state_13441__$1;(statearr_13450_13469[(2)] = inst_13431);
(statearr_13450_13469[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (9)))
{var state_13441__$1 = state_13441;var statearr_13451_13470 = state_13441__$1;(statearr_13451_13470[(2)] = null);
(statearr_13451_13470[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (5)))
{var inst_13426 = cljs.core.async.close_BANG_.call(null,out);var state_13441__$1 = state_13441;var statearr_13452_13471 = state_13441__$1;(statearr_13452_13471[(2)] = inst_13426);
(statearr_13452_13471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (10)))
{var inst_13434 = (state_13441[(2)]);var state_13441__$1 = (function (){var statearr_13453 = state_13441;(statearr_13453[(8)] = inst_13434);
return statearr_13453;
})();var statearr_13454_13472 = state_13441__$1;(statearr_13454_13472[(2)] = null);
(statearr_13454_13472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13442 === (8)))
{var inst_13423 = (state_13441[(7)]);var state_13441__$1 = state_13441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13441__$1,(11),out,inst_13423);
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
});})(c__10327__auto___13462,out))
;return ((function (switch__10262__auto__,c__10327__auto___13462,out){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13458 = [null,null,null,null,null,null,null,null,null];(statearr_13458[(0)] = state_machine__10263__auto__);
(statearr_13458[(1)] = (1));
return statearr_13458;
});
var state_machine__10263__auto____1 = (function (state_13441){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13441);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13459){if((e13459 instanceof Object))
{var ex__10266__auto__ = e13459;var statearr_13460_13473 = state_13441;(statearr_13460_13473[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13474 = state_13441;
state_13441 = G__13474;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13441){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___13462,out))
})();var state__10329__auto__ = (function (){var statearr_13461 = f__10328__auto__.call(null);(statearr_13461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___13462);
return statearr_13461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___13462,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10327__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_13640){var state_val_13641 = (state_13640[(1)]);if((state_val_13641 === (7)))
{var inst_13636 = (state_13640[(2)]);var state_13640__$1 = state_13640;var statearr_13642_13683 = state_13640__$1;(statearr_13642_13683[(2)] = inst_13636);
(statearr_13642_13683[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (20)))
{var inst_13606 = (state_13640[(7)]);var inst_13617 = (state_13640[(2)]);var inst_13618 = cljs.core.next.call(null,inst_13606);var inst_13592 = inst_13618;var inst_13593 = null;var inst_13594 = (0);var inst_13595 = (0);var state_13640__$1 = (function (){var statearr_13643 = state_13640;(statearr_13643[(8)] = inst_13593);
(statearr_13643[(9)] = inst_13617);
(statearr_13643[(10)] = inst_13595);
(statearr_13643[(11)] = inst_13592);
(statearr_13643[(12)] = inst_13594);
return statearr_13643;
})();var statearr_13644_13684 = state_13640__$1;(statearr_13644_13684[(2)] = null);
(statearr_13644_13684[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (1)))
{var state_13640__$1 = state_13640;var statearr_13645_13685 = state_13640__$1;(statearr_13645_13685[(2)] = null);
(statearr_13645_13685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (4)))
{var inst_13581 = (state_13640[(13)]);var inst_13581__$1 = (state_13640[(2)]);var inst_13582 = (inst_13581__$1 == null);var state_13640__$1 = (function (){var statearr_13646 = state_13640;(statearr_13646[(13)] = inst_13581__$1);
return statearr_13646;
})();if(cljs.core.truth_(inst_13582))
{var statearr_13647_13686 = state_13640__$1;(statearr_13647_13686[(1)] = (5));
} else
{var statearr_13648_13687 = state_13640__$1;(statearr_13648_13687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (15)))
{var state_13640__$1 = state_13640;var statearr_13652_13688 = state_13640__$1;(statearr_13652_13688[(2)] = null);
(statearr_13652_13688[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (21)))
{var state_13640__$1 = state_13640;var statearr_13653_13689 = state_13640__$1;(statearr_13653_13689[(2)] = null);
(statearr_13653_13689[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (13)))
{var inst_13593 = (state_13640[(8)]);var inst_13595 = (state_13640[(10)]);var inst_13592 = (state_13640[(11)]);var inst_13594 = (state_13640[(12)]);var inst_13602 = (state_13640[(2)]);var inst_13603 = (inst_13595 + (1));var tmp13649 = inst_13593;var tmp13650 = inst_13592;var tmp13651 = inst_13594;var inst_13592__$1 = tmp13650;var inst_13593__$1 = tmp13649;var inst_13594__$1 = tmp13651;var inst_13595__$1 = inst_13603;var state_13640__$1 = (function (){var statearr_13654 = state_13640;(statearr_13654[(8)] = inst_13593__$1);
(statearr_13654[(14)] = inst_13602);
(statearr_13654[(10)] = inst_13595__$1);
(statearr_13654[(11)] = inst_13592__$1);
(statearr_13654[(12)] = inst_13594__$1);
return statearr_13654;
})();var statearr_13655_13690 = state_13640__$1;(statearr_13655_13690[(2)] = null);
(statearr_13655_13690[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (22)))
{var state_13640__$1 = state_13640;var statearr_13656_13691 = state_13640__$1;(statearr_13656_13691[(2)] = null);
(statearr_13656_13691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (6)))
{var inst_13581 = (state_13640[(13)]);var inst_13590 = f.call(null,inst_13581);var inst_13591 = cljs.core.seq.call(null,inst_13590);var inst_13592 = inst_13591;var inst_13593 = null;var inst_13594 = (0);var inst_13595 = (0);var state_13640__$1 = (function (){var statearr_13657 = state_13640;(statearr_13657[(8)] = inst_13593);
(statearr_13657[(10)] = inst_13595);
(statearr_13657[(11)] = inst_13592);
(statearr_13657[(12)] = inst_13594);
return statearr_13657;
})();var statearr_13658_13692 = state_13640__$1;(statearr_13658_13692[(2)] = null);
(statearr_13658_13692[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (17)))
{var inst_13606 = (state_13640[(7)]);var inst_13610 = cljs.core.chunk_first.call(null,inst_13606);var inst_13611 = cljs.core.chunk_rest.call(null,inst_13606);var inst_13612 = cljs.core.count.call(null,inst_13610);var inst_13592 = inst_13611;var inst_13593 = inst_13610;var inst_13594 = inst_13612;var inst_13595 = (0);var state_13640__$1 = (function (){var statearr_13659 = state_13640;(statearr_13659[(8)] = inst_13593);
(statearr_13659[(10)] = inst_13595);
(statearr_13659[(11)] = inst_13592);
(statearr_13659[(12)] = inst_13594);
return statearr_13659;
})();var statearr_13660_13693 = state_13640__$1;(statearr_13660_13693[(2)] = null);
(statearr_13660_13693[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (3)))
{var inst_13638 = (state_13640[(2)]);var state_13640__$1 = state_13640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13640__$1,inst_13638);
} else
{if((state_val_13641 === (12)))
{var inst_13626 = (state_13640[(2)]);var state_13640__$1 = state_13640;var statearr_13661_13694 = state_13640__$1;(statearr_13661_13694[(2)] = inst_13626);
(statearr_13661_13694[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (2)))
{var state_13640__$1 = state_13640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13640__$1,(4),in$);
} else
{if((state_val_13641 === (23)))
{var inst_13634 = (state_13640[(2)]);var state_13640__$1 = state_13640;var statearr_13662_13695 = state_13640__$1;(statearr_13662_13695[(2)] = inst_13634);
(statearr_13662_13695[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (19)))
{var inst_13621 = (state_13640[(2)]);var state_13640__$1 = state_13640;var statearr_13663_13696 = state_13640__$1;(statearr_13663_13696[(2)] = inst_13621);
(statearr_13663_13696[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (11)))
{var inst_13606 = (state_13640[(7)]);var inst_13592 = (state_13640[(11)]);var inst_13606__$1 = cljs.core.seq.call(null,inst_13592);var state_13640__$1 = (function (){var statearr_13664 = state_13640;(statearr_13664[(7)] = inst_13606__$1);
return statearr_13664;
})();if(inst_13606__$1)
{var statearr_13665_13697 = state_13640__$1;(statearr_13665_13697[(1)] = (14));
} else
{var statearr_13666_13698 = state_13640__$1;(statearr_13666_13698[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (9)))
{var inst_13628 = (state_13640[(2)]);var inst_13629 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13640__$1 = (function (){var statearr_13667 = state_13640;(statearr_13667[(15)] = inst_13628);
return statearr_13667;
})();if(cljs.core.truth_(inst_13629))
{var statearr_13668_13699 = state_13640__$1;(statearr_13668_13699[(1)] = (21));
} else
{var statearr_13669_13700 = state_13640__$1;(statearr_13669_13700[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (5)))
{var inst_13584 = cljs.core.async.close_BANG_.call(null,out);var state_13640__$1 = state_13640;var statearr_13670_13701 = state_13640__$1;(statearr_13670_13701[(2)] = inst_13584);
(statearr_13670_13701[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (14)))
{var inst_13606 = (state_13640[(7)]);var inst_13608 = cljs.core.chunked_seq_QMARK_.call(null,inst_13606);var state_13640__$1 = state_13640;if(inst_13608)
{var statearr_13671_13702 = state_13640__$1;(statearr_13671_13702[(1)] = (17));
} else
{var statearr_13672_13703 = state_13640__$1;(statearr_13672_13703[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (16)))
{var inst_13624 = (state_13640[(2)]);var state_13640__$1 = state_13640;var statearr_13673_13704 = state_13640__$1;(statearr_13673_13704[(2)] = inst_13624);
(statearr_13673_13704[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13641 === (10)))
{var inst_13593 = (state_13640[(8)]);var inst_13595 = (state_13640[(10)]);var inst_13600 = cljs.core._nth.call(null,inst_13593,inst_13595);var state_13640__$1 = state_13640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13640__$1,(13),out,inst_13600);
} else
{if((state_val_13641 === (18)))
{var inst_13606 = (state_13640[(7)]);var inst_13615 = cljs.core.first.call(null,inst_13606);var state_13640__$1 = state_13640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13640__$1,(20),out,inst_13615);
} else
{if((state_val_13641 === (8)))
{var inst_13595 = (state_13640[(10)]);var inst_13594 = (state_13640[(12)]);var inst_13597 = (inst_13595 < inst_13594);var inst_13598 = inst_13597;var state_13640__$1 = state_13640;if(cljs.core.truth_(inst_13598))
{var statearr_13674_13705 = state_13640__$1;(statearr_13674_13705[(1)] = (10));
} else
{var statearr_13675_13706 = state_13640__$1;(statearr_13675_13706[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto__))
;return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13679[(0)] = state_machine__10263__auto__);
(statearr_13679[(1)] = (1));
return statearr_13679;
});
var state_machine__10263__auto____1 = (function (state_13640){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13640);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13680){if((e13680 instanceof Object))
{var ex__10266__auto__ = e13680;var statearr_13681_13707 = state_13640;(statearr_13681_13707[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13708 = state_13640;
state_13640 = G__13708;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13640){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();var state__10329__auto__ = (function (){var statearr_13682 = f__10328__auto__.call(null);(statearr_13682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);
return statearr_13682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);
return c__10327__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10327__auto___13803 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___13803){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___13803){
return (function (state_13779){var state_val_13780 = (state_13779[(1)]);if((state_val_13780 === (7)))
{var inst_13775 = (state_13779[(2)]);var state_13779__$1 = state_13779;var statearr_13781_13804 = state_13779__$1;(statearr_13781_13804[(2)] = inst_13775);
(statearr_13781_13804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (1)))
{var state_13779__$1 = state_13779;var statearr_13782_13805 = state_13779__$1;(statearr_13782_13805[(2)] = null);
(statearr_13782_13805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (4)))
{var inst_13758 = (state_13779[(7)]);var inst_13758__$1 = (state_13779[(2)]);var inst_13759 = (inst_13758__$1 == null);var state_13779__$1 = (function (){var statearr_13783 = state_13779;(statearr_13783[(7)] = inst_13758__$1);
return statearr_13783;
})();if(cljs.core.truth_(inst_13759))
{var statearr_13784_13806 = state_13779__$1;(statearr_13784_13806[(1)] = (5));
} else
{var statearr_13785_13807 = state_13779__$1;(statearr_13785_13807[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (13)))
{var state_13779__$1 = state_13779;var statearr_13786_13808 = state_13779__$1;(statearr_13786_13808[(2)] = null);
(statearr_13786_13808[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (6)))
{var inst_13758 = (state_13779[(7)]);var state_13779__$1 = state_13779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13779__$1,(11),to,inst_13758);
} else
{if((state_val_13780 === (3)))
{var inst_13777 = (state_13779[(2)]);var state_13779__$1 = state_13779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13779__$1,inst_13777);
} else
{if((state_val_13780 === (12)))
{var state_13779__$1 = state_13779;var statearr_13787_13809 = state_13779__$1;(statearr_13787_13809[(2)] = null);
(statearr_13787_13809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (2)))
{var state_13779__$1 = state_13779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13779__$1,(4),from);
} else
{if((state_val_13780 === (11)))
{var inst_13768 = (state_13779[(2)]);var state_13779__$1 = state_13779;if(cljs.core.truth_(inst_13768))
{var statearr_13788_13810 = state_13779__$1;(statearr_13788_13810[(1)] = (12));
} else
{var statearr_13789_13811 = state_13779__$1;(statearr_13789_13811[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (9)))
{var state_13779__$1 = state_13779;var statearr_13790_13812 = state_13779__$1;(statearr_13790_13812[(2)] = null);
(statearr_13790_13812[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (5)))
{var state_13779__$1 = state_13779;if(cljs.core.truth_(close_QMARK_))
{var statearr_13791_13813 = state_13779__$1;(statearr_13791_13813[(1)] = (8));
} else
{var statearr_13792_13814 = state_13779__$1;(statearr_13792_13814[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (14)))
{var inst_13773 = (state_13779[(2)]);var state_13779__$1 = state_13779;var statearr_13793_13815 = state_13779__$1;(statearr_13793_13815[(2)] = inst_13773);
(statearr_13793_13815[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (10)))
{var inst_13765 = (state_13779[(2)]);var state_13779__$1 = state_13779;var statearr_13794_13816 = state_13779__$1;(statearr_13794_13816[(2)] = inst_13765);
(statearr_13794_13816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13780 === (8)))
{var inst_13762 = cljs.core.async.close_BANG_.call(null,to);var state_13779__$1 = state_13779;var statearr_13795_13817 = state_13779__$1;(statearr_13795_13817[(2)] = inst_13762);
(statearr_13795_13817[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___13803))
;return ((function (switch__10262__auto__,c__10327__auto___13803){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13799 = [null,null,null,null,null,null,null,null];(statearr_13799[(0)] = state_machine__10263__auto__);
(statearr_13799[(1)] = (1));
return statearr_13799;
});
var state_machine__10263__auto____1 = (function (state_13779){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13779);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13800){if((e13800 instanceof Object))
{var ex__10266__auto__ = e13800;var statearr_13801_13818 = state_13779;(statearr_13801_13818[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13779);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13819 = state_13779;
state_13779 = G__13819;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13779){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___13803))
})();var state__10329__auto__ = (function (){var statearr_13802 = f__10328__auto__.call(null);(statearr_13802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___13803);
return statearr_13802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___13803))
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10327__auto___13920 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___13920,tc,fc){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___13920,tc,fc){
return (function (state_13895){var state_val_13896 = (state_13895[(1)]);if((state_val_13896 === (7)))
{var inst_13891 = (state_13895[(2)]);var state_13895__$1 = state_13895;var statearr_13897_13921 = state_13895__$1;(statearr_13897_13921[(2)] = inst_13891);
(statearr_13897_13921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (1)))
{var state_13895__$1 = state_13895;var statearr_13898_13922 = state_13895__$1;(statearr_13898_13922[(2)] = null);
(statearr_13898_13922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (4)))
{var inst_13872 = (state_13895[(7)]);var inst_13872__$1 = (state_13895[(2)]);var inst_13873 = (inst_13872__$1 == null);var state_13895__$1 = (function (){var statearr_13899 = state_13895;(statearr_13899[(7)] = inst_13872__$1);
return statearr_13899;
})();if(cljs.core.truth_(inst_13873))
{var statearr_13900_13923 = state_13895__$1;(statearr_13900_13923[(1)] = (5));
} else
{var statearr_13901_13924 = state_13895__$1;(statearr_13901_13924[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (13)))
{var state_13895__$1 = state_13895;var statearr_13902_13925 = state_13895__$1;(statearr_13902_13925[(2)] = null);
(statearr_13902_13925[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (6)))
{var inst_13872 = (state_13895[(7)]);var inst_13878 = p.call(null,inst_13872);var state_13895__$1 = state_13895;if(cljs.core.truth_(inst_13878))
{var statearr_13903_13926 = state_13895__$1;(statearr_13903_13926[(1)] = (9));
} else
{var statearr_13904_13927 = state_13895__$1;(statearr_13904_13927[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (3)))
{var inst_13893 = (state_13895[(2)]);var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13895__$1,inst_13893);
} else
{if((state_val_13896 === (12)))
{var state_13895__$1 = state_13895;var statearr_13905_13928 = state_13895__$1;(statearr_13905_13928[(2)] = null);
(statearr_13905_13928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (2)))
{var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13895__$1,(4),ch);
} else
{if((state_val_13896 === (11)))
{var inst_13872 = (state_13895[(7)]);var inst_13882 = (state_13895[(2)]);var state_13895__$1 = state_13895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13895__$1,(8),inst_13882,inst_13872);
} else
{if((state_val_13896 === (9)))
{var state_13895__$1 = state_13895;var statearr_13906_13929 = state_13895__$1;(statearr_13906_13929[(2)] = tc);
(statearr_13906_13929[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (5)))
{var inst_13875 = cljs.core.async.close_BANG_.call(null,tc);var inst_13876 = cljs.core.async.close_BANG_.call(null,fc);var state_13895__$1 = (function (){var statearr_13907 = state_13895;(statearr_13907[(8)] = inst_13875);
return statearr_13907;
})();var statearr_13908_13930 = state_13895__$1;(statearr_13908_13930[(2)] = inst_13876);
(statearr_13908_13930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (14)))
{var inst_13889 = (state_13895[(2)]);var state_13895__$1 = state_13895;var statearr_13909_13931 = state_13895__$1;(statearr_13909_13931[(2)] = inst_13889);
(statearr_13909_13931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (10)))
{var state_13895__$1 = state_13895;var statearr_13910_13932 = state_13895__$1;(statearr_13910_13932[(2)] = fc);
(statearr_13910_13932[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13896 === (8)))
{var inst_13884 = (state_13895[(2)]);var state_13895__$1 = state_13895;if(cljs.core.truth_(inst_13884))
{var statearr_13911_13933 = state_13895__$1;(statearr_13911_13933[(1)] = (12));
} else
{var statearr_13912_13934 = state_13895__$1;(statearr_13912_13934[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___13920,tc,fc))
;return ((function (switch__10262__auto__,c__10327__auto___13920,tc,fc){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13916 = [null,null,null,null,null,null,null,null,null];(statearr_13916[(0)] = state_machine__10263__auto__);
(statearr_13916[(1)] = (1));
return statearr_13916;
});
var state_machine__10263__auto____1 = (function (state_13895){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13895);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13917){if((e13917 instanceof Object))
{var ex__10266__auto__ = e13917;var statearr_13918_13935 = state_13895;(statearr_13918_13935[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13936 = state_13895;
state_13895 = G__13936;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13895){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___13920,tc,fc))
})();var state__10329__auto__ = (function (){var statearr_13919 = f__10328__auto__.call(null);(statearr_13919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___13920);
return statearr_13919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___13920,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10327__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_13983){var state_val_13984 = (state_13983[(1)]);if((state_val_13984 === (7)))
{var inst_13979 = (state_13983[(2)]);var state_13983__$1 = state_13983;var statearr_13985_14001 = state_13983__$1;(statearr_13985_14001[(2)] = inst_13979);
(statearr_13985_14001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13984 === (6)))
{var inst_13972 = (state_13983[(7)]);var inst_13969 = (state_13983[(8)]);var inst_13976 = f.call(null,inst_13969,inst_13972);var inst_13969__$1 = inst_13976;var state_13983__$1 = (function (){var statearr_13986 = state_13983;(statearr_13986[(8)] = inst_13969__$1);
return statearr_13986;
})();var statearr_13987_14002 = state_13983__$1;(statearr_13987_14002[(2)] = null);
(statearr_13987_14002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13984 === (5)))
{var inst_13969 = (state_13983[(8)]);var state_13983__$1 = state_13983;var statearr_13988_14003 = state_13983__$1;(statearr_13988_14003[(2)] = inst_13969);
(statearr_13988_14003[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13984 === (4)))
{var inst_13972 = (state_13983[(7)]);var inst_13972__$1 = (state_13983[(2)]);var inst_13973 = (inst_13972__$1 == null);var state_13983__$1 = (function (){var statearr_13989 = state_13983;(statearr_13989[(7)] = inst_13972__$1);
return statearr_13989;
})();if(cljs.core.truth_(inst_13973))
{var statearr_13990_14004 = state_13983__$1;(statearr_13990_14004[(1)] = (5));
} else
{var statearr_13991_14005 = state_13983__$1;(statearr_13991_14005[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13984 === (3)))
{var inst_13981 = (state_13983[(2)]);var state_13983__$1 = state_13983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13983__$1,inst_13981);
} else
{if((state_val_13984 === (2)))
{var state_13983__$1 = state_13983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13983__$1,(4),ch);
} else
{if((state_val_13984 === (1)))
{var inst_13969 = init;var state_13983__$1 = (function (){var statearr_13992 = state_13983;(statearr_13992[(8)] = inst_13969);
return statearr_13992;
})();var statearr_13993_14006 = state_13983__$1;(statearr_13993_14006[(2)] = null);
(statearr_13993_14006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10327__auto__))
;return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_13997 = [null,null,null,null,null,null,null,null,null];(statearr_13997[(0)] = state_machine__10263__auto__);
(statearr_13997[(1)] = (1));
return statearr_13997;
});
var state_machine__10263__auto____1 = (function (state_13983){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_13983);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e13998){if((e13998 instanceof Object))
{var ex__10266__auto__ = e13998;var statearr_13999_14007 = state_13983;(statearr_13999_14007[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14008 = state_13983;
state_13983 = G__14008;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_13983){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_13983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();var state__10329__auto__ = (function (){var statearr_14000 = f__10328__auto__.call(null);(statearr_14000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);
return statearr_14000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);
return c__10327__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10327__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_14082){var state_val_14083 = (state_14082[(1)]);if((state_val_14083 === (7)))
{var inst_14064 = (state_14082[(2)]);var state_14082__$1 = state_14082;var statearr_14084_14107 = state_14082__$1;(statearr_14084_14107[(2)] = inst_14064);
(statearr_14084_14107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (1)))
{var inst_14058 = cljs.core.seq.call(null,coll);var inst_14059 = inst_14058;var state_14082__$1 = (function (){var statearr_14085 = state_14082;(statearr_14085[(7)] = inst_14059);
return statearr_14085;
})();var statearr_14086_14108 = state_14082__$1;(statearr_14086_14108[(2)] = null);
(statearr_14086_14108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (4)))
{var inst_14059 = (state_14082[(7)]);var inst_14062 = cljs.core.first.call(null,inst_14059);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14082__$1,(7),ch,inst_14062);
} else
{if((state_val_14083 === (13)))
{var inst_14076 = (state_14082[(2)]);var state_14082__$1 = state_14082;var statearr_14087_14109 = state_14082__$1;(statearr_14087_14109[(2)] = inst_14076);
(statearr_14087_14109[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (6)))
{var inst_14067 = (state_14082[(2)]);var state_14082__$1 = state_14082;if(cljs.core.truth_(inst_14067))
{var statearr_14088_14110 = state_14082__$1;(statearr_14088_14110[(1)] = (8));
} else
{var statearr_14089_14111 = state_14082__$1;(statearr_14089_14111[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (3)))
{var inst_14080 = (state_14082[(2)]);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14082__$1,inst_14080);
} else
{if((state_val_14083 === (12)))
{var state_14082__$1 = state_14082;var statearr_14090_14112 = state_14082__$1;(statearr_14090_14112[(2)] = null);
(statearr_14090_14112[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (2)))
{var inst_14059 = (state_14082[(7)]);var state_14082__$1 = state_14082;if(cljs.core.truth_(inst_14059))
{var statearr_14091_14113 = state_14082__$1;(statearr_14091_14113[(1)] = (4));
} else
{var statearr_14092_14114 = state_14082__$1;(statearr_14092_14114[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (11)))
{var inst_14073 = cljs.core.async.close_BANG_.call(null,ch);var state_14082__$1 = state_14082;var statearr_14093_14115 = state_14082__$1;(statearr_14093_14115[(2)] = inst_14073);
(statearr_14093_14115[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (9)))
{var state_14082__$1 = state_14082;if(cljs.core.truth_(close_QMARK_))
{var statearr_14094_14116 = state_14082__$1;(statearr_14094_14116[(1)] = (11));
} else
{var statearr_14095_14117 = state_14082__$1;(statearr_14095_14117[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (5)))
{var inst_14059 = (state_14082[(7)]);var state_14082__$1 = state_14082;var statearr_14096_14118 = state_14082__$1;(statearr_14096_14118[(2)] = inst_14059);
(statearr_14096_14118[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (10)))
{var inst_14078 = (state_14082[(2)]);var state_14082__$1 = state_14082;var statearr_14097_14119 = state_14082__$1;(statearr_14097_14119[(2)] = inst_14078);
(statearr_14097_14119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14083 === (8)))
{var inst_14059 = (state_14082[(7)]);var inst_14069 = cljs.core.next.call(null,inst_14059);var inst_14059__$1 = inst_14069;var state_14082__$1 = (function (){var statearr_14098 = state_14082;(statearr_14098[(7)] = inst_14059__$1);
return statearr_14098;
})();var statearr_14099_14120 = state_14082__$1;(statearr_14099_14120[(2)] = null);
(statearr_14099_14120[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto__))
;return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_14103 = [null,null,null,null,null,null,null,null];(statearr_14103[(0)] = state_machine__10263__auto__);
(statearr_14103[(1)] = (1));
return statearr_14103;
});
var state_machine__10263__auto____1 = (function (state_14082){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_14082);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e14104){if((e14104 instanceof Object))
{var ex__10266__auto__ = e14104;var statearr_14105_14121 = state_14082;(statearr_14105_14121[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14122 = state_14082;
state_14082 = G__14122;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_14082){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_14082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();var state__10329__auto__ = (function (){var statearr_14106 = f__10328__auto__.call(null);(statearr_14106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);
return statearr_14106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);
return c__10327__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14124 = {};return obj14124;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7919__auto__ = _;if(and__7919__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7919__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8558__auto__ = (((_ == null))?null:_);return (function (){var or__7931__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14126 = {};return obj14126;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14348 = (function (cs,ch,mult,meta14349){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14349 = meta14349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14348.cljs$lang$type = true;
cljs.core.async.t14348.cljs$lang$ctorStr = "cljs.core.async/t14348";
cljs.core.async.t14348.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t14348");
});})(cs))
;
cljs.core.async.t14348.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14348.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14348.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14348.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14348.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14350){var self__ = this;
var _14350__$1 = this;return self__.meta14349;
});})(cs))
;
cljs.core.async.t14348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14350,meta14349__$1){var self__ = this;
var _14350__$1 = this;return (new cljs.core.async.t14348(self__.cs,self__.ch,self__.mult,meta14349__$1));
});})(cs))
;
cljs.core.async.__GT_t14348 = ((function (cs){
return (function __GT_t14348(cs__$1,ch__$1,mult__$1,meta14349){return (new cljs.core.async.t14348(cs__$1,ch__$1,mult__$1,meta14349));
});})(cs))
;
}
return (new cljs.core.async.t14348(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10327__auto___14569 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___14569,cs,m,dchan,dctr,done){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___14569,cs,m,dchan,dctr,done){
return (function (state_14481){var state_val_14482 = (state_14481[(1)]);if((state_val_14482 === (7)))
{var inst_14477 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14483_14570 = state_14481__$1;(statearr_14483_14570[(2)] = inst_14477);
(statearr_14483_14570[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (20)))
{var inst_14382 = (state_14481[(7)]);var inst_14392 = cljs.core.first.call(null,inst_14382);var inst_14393 = cljs.core.nth.call(null,inst_14392,(0),null);var inst_14394 = cljs.core.nth.call(null,inst_14392,(1),null);var state_14481__$1 = (function (){var statearr_14484 = state_14481;(statearr_14484[(8)] = inst_14393);
return statearr_14484;
})();if(cljs.core.truth_(inst_14394))
{var statearr_14485_14571 = state_14481__$1;(statearr_14485_14571[(1)] = (22));
} else
{var statearr_14486_14572 = state_14481__$1;(statearr_14486_14572[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (27)))
{var inst_14353 = (state_14481[(9)]);var inst_14424 = (state_14481[(10)]);var inst_14422 = (state_14481[(11)]);var inst_14429 = (state_14481[(12)]);var inst_14429__$1 = cljs.core._nth.call(null,inst_14422,inst_14424);var inst_14430 = cljs.core.async.put_BANG_.call(null,inst_14429__$1,inst_14353,done);var state_14481__$1 = (function (){var statearr_14487 = state_14481;(statearr_14487[(12)] = inst_14429__$1);
return statearr_14487;
})();if(cljs.core.truth_(inst_14430))
{var statearr_14488_14573 = state_14481__$1;(statearr_14488_14573[(1)] = (30));
} else
{var statearr_14489_14574 = state_14481__$1;(statearr_14489_14574[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (1)))
{var state_14481__$1 = state_14481;var statearr_14490_14575 = state_14481__$1;(statearr_14490_14575[(2)] = null);
(statearr_14490_14575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (24)))
{var inst_14382 = (state_14481[(7)]);var inst_14399 = (state_14481[(2)]);var inst_14400 = cljs.core.next.call(null,inst_14382);var inst_14362 = inst_14400;var inst_14363 = null;var inst_14364 = (0);var inst_14365 = (0);var state_14481__$1 = (function (){var statearr_14491 = state_14481;(statearr_14491[(13)] = inst_14363);
(statearr_14491[(14)] = inst_14399);
(statearr_14491[(15)] = inst_14364);
(statearr_14491[(16)] = inst_14362);
(statearr_14491[(17)] = inst_14365);
return statearr_14491;
})();var statearr_14492_14576 = state_14481__$1;(statearr_14492_14576[(2)] = null);
(statearr_14492_14576[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (39)))
{var state_14481__$1 = state_14481;var statearr_14496_14577 = state_14481__$1;(statearr_14496_14577[(2)] = null);
(statearr_14496_14577[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (4)))
{var inst_14353 = (state_14481[(9)]);var inst_14353__$1 = (state_14481[(2)]);var inst_14354 = (inst_14353__$1 == null);var state_14481__$1 = (function (){var statearr_14497 = state_14481;(statearr_14497[(9)] = inst_14353__$1);
return statearr_14497;
})();if(cljs.core.truth_(inst_14354))
{var statearr_14498_14578 = state_14481__$1;(statearr_14498_14578[(1)] = (5));
} else
{var statearr_14499_14579 = state_14481__$1;(statearr_14499_14579[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (15)))
{var inst_14363 = (state_14481[(13)]);var inst_14364 = (state_14481[(15)]);var inst_14362 = (state_14481[(16)]);var inst_14365 = (state_14481[(17)]);var inst_14378 = (state_14481[(2)]);var inst_14379 = (inst_14365 + (1));var tmp14493 = inst_14363;var tmp14494 = inst_14364;var tmp14495 = inst_14362;var inst_14362__$1 = tmp14495;var inst_14363__$1 = tmp14493;var inst_14364__$1 = tmp14494;var inst_14365__$1 = inst_14379;var state_14481__$1 = (function (){var statearr_14500 = state_14481;(statearr_14500[(13)] = inst_14363__$1);
(statearr_14500[(18)] = inst_14378);
(statearr_14500[(15)] = inst_14364__$1);
(statearr_14500[(16)] = inst_14362__$1);
(statearr_14500[(17)] = inst_14365__$1);
return statearr_14500;
})();var statearr_14501_14580 = state_14481__$1;(statearr_14501_14580[(2)] = null);
(statearr_14501_14580[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (21)))
{var inst_14403 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14505_14581 = state_14481__$1;(statearr_14505_14581[(2)] = inst_14403);
(statearr_14505_14581[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (31)))
{var inst_14429 = (state_14481[(12)]);var inst_14433 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14434 = cljs.core.async.untap_STAR_.call(null,m,inst_14429);var state_14481__$1 = (function (){var statearr_14506 = state_14481;(statearr_14506[(19)] = inst_14433);
return statearr_14506;
})();var statearr_14507_14582 = state_14481__$1;(statearr_14507_14582[(2)] = inst_14434);
(statearr_14507_14582[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (32)))
{var inst_14423 = (state_14481[(20)]);var inst_14424 = (state_14481[(10)]);var inst_14422 = (state_14481[(11)]);var inst_14421 = (state_14481[(21)]);var inst_14436 = (state_14481[(2)]);var inst_14437 = (inst_14424 + (1));var tmp14502 = inst_14423;var tmp14503 = inst_14422;var tmp14504 = inst_14421;var inst_14421__$1 = tmp14504;var inst_14422__$1 = tmp14503;var inst_14423__$1 = tmp14502;var inst_14424__$1 = inst_14437;var state_14481__$1 = (function (){var statearr_14508 = state_14481;(statearr_14508[(22)] = inst_14436);
(statearr_14508[(20)] = inst_14423__$1);
(statearr_14508[(10)] = inst_14424__$1);
(statearr_14508[(11)] = inst_14422__$1);
(statearr_14508[(21)] = inst_14421__$1);
return statearr_14508;
})();var statearr_14509_14583 = state_14481__$1;(statearr_14509_14583[(2)] = null);
(statearr_14509_14583[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (40)))
{var inst_14449 = (state_14481[(23)]);var inst_14453 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14454 = cljs.core.async.untap_STAR_.call(null,m,inst_14449);var state_14481__$1 = (function (){var statearr_14510 = state_14481;(statearr_14510[(24)] = inst_14453);
return statearr_14510;
})();var statearr_14511_14584 = state_14481__$1;(statearr_14511_14584[(2)] = inst_14454);
(statearr_14511_14584[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (33)))
{var inst_14440 = (state_14481[(25)]);var inst_14442 = cljs.core.chunked_seq_QMARK_.call(null,inst_14440);var state_14481__$1 = state_14481;if(inst_14442)
{var statearr_14512_14585 = state_14481__$1;(statearr_14512_14585[(1)] = (36));
} else
{var statearr_14513_14586 = state_14481__$1;(statearr_14513_14586[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (13)))
{var inst_14372 = (state_14481[(26)]);var inst_14375 = cljs.core.async.close_BANG_.call(null,inst_14372);var state_14481__$1 = state_14481;var statearr_14514_14587 = state_14481__$1;(statearr_14514_14587[(2)] = inst_14375);
(statearr_14514_14587[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (22)))
{var inst_14393 = (state_14481[(8)]);var inst_14396 = cljs.core.async.close_BANG_.call(null,inst_14393);var state_14481__$1 = state_14481;var statearr_14515_14588 = state_14481__$1;(statearr_14515_14588[(2)] = inst_14396);
(statearr_14515_14588[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (36)))
{var inst_14440 = (state_14481[(25)]);var inst_14444 = cljs.core.chunk_first.call(null,inst_14440);var inst_14445 = cljs.core.chunk_rest.call(null,inst_14440);var inst_14446 = cljs.core.count.call(null,inst_14444);var inst_14421 = inst_14445;var inst_14422 = inst_14444;var inst_14423 = inst_14446;var inst_14424 = (0);var state_14481__$1 = (function (){var statearr_14516 = state_14481;(statearr_14516[(20)] = inst_14423);
(statearr_14516[(10)] = inst_14424);
(statearr_14516[(11)] = inst_14422);
(statearr_14516[(21)] = inst_14421);
return statearr_14516;
})();var statearr_14517_14589 = state_14481__$1;(statearr_14517_14589[(2)] = null);
(statearr_14517_14589[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (41)))
{var inst_14440 = (state_14481[(25)]);var inst_14456 = (state_14481[(2)]);var inst_14457 = cljs.core.next.call(null,inst_14440);var inst_14421 = inst_14457;var inst_14422 = null;var inst_14423 = (0);var inst_14424 = (0);var state_14481__$1 = (function (){var statearr_14518 = state_14481;(statearr_14518[(20)] = inst_14423);
(statearr_14518[(27)] = inst_14456);
(statearr_14518[(10)] = inst_14424);
(statearr_14518[(11)] = inst_14422);
(statearr_14518[(21)] = inst_14421);
return statearr_14518;
})();var statearr_14519_14590 = state_14481__$1;(statearr_14519_14590[(2)] = null);
(statearr_14519_14590[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (43)))
{var state_14481__$1 = state_14481;var statearr_14520_14591 = state_14481__$1;(statearr_14520_14591[(2)] = null);
(statearr_14520_14591[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (29)))
{var inst_14465 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14521_14592 = state_14481__$1;(statearr_14521_14592[(2)] = inst_14465);
(statearr_14521_14592[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (44)))
{var inst_14474 = (state_14481[(2)]);var state_14481__$1 = (function (){var statearr_14522 = state_14481;(statearr_14522[(28)] = inst_14474);
return statearr_14522;
})();var statearr_14523_14593 = state_14481__$1;(statearr_14523_14593[(2)] = null);
(statearr_14523_14593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (6)))
{var inst_14413 = (state_14481[(29)]);var inst_14412 = cljs.core.deref.call(null,cs);var inst_14413__$1 = cljs.core.keys.call(null,inst_14412);var inst_14414 = cljs.core.count.call(null,inst_14413__$1);var inst_14415 = cljs.core.reset_BANG_.call(null,dctr,inst_14414);var inst_14420 = cljs.core.seq.call(null,inst_14413__$1);var inst_14421 = inst_14420;var inst_14422 = null;var inst_14423 = (0);var inst_14424 = (0);var state_14481__$1 = (function (){var statearr_14524 = state_14481;(statearr_14524[(20)] = inst_14423);
(statearr_14524[(10)] = inst_14424);
(statearr_14524[(11)] = inst_14422);
(statearr_14524[(29)] = inst_14413__$1);
(statearr_14524[(21)] = inst_14421);
(statearr_14524[(30)] = inst_14415);
return statearr_14524;
})();var statearr_14525_14594 = state_14481__$1;(statearr_14525_14594[(2)] = null);
(statearr_14525_14594[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (28)))
{var inst_14421 = (state_14481[(21)]);var inst_14440 = (state_14481[(25)]);var inst_14440__$1 = cljs.core.seq.call(null,inst_14421);var state_14481__$1 = (function (){var statearr_14526 = state_14481;(statearr_14526[(25)] = inst_14440__$1);
return statearr_14526;
})();if(inst_14440__$1)
{var statearr_14527_14595 = state_14481__$1;(statearr_14527_14595[(1)] = (33));
} else
{var statearr_14528_14596 = state_14481__$1;(statearr_14528_14596[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (25)))
{var inst_14423 = (state_14481[(20)]);var inst_14424 = (state_14481[(10)]);var inst_14426 = (inst_14424 < inst_14423);var inst_14427 = inst_14426;var state_14481__$1 = state_14481;if(cljs.core.truth_(inst_14427))
{var statearr_14529_14597 = state_14481__$1;(statearr_14529_14597[(1)] = (27));
} else
{var statearr_14530_14598 = state_14481__$1;(statearr_14530_14598[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (34)))
{var state_14481__$1 = state_14481;var statearr_14531_14599 = state_14481__$1;(statearr_14531_14599[(2)] = null);
(statearr_14531_14599[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (17)))
{var state_14481__$1 = state_14481;var statearr_14532_14600 = state_14481__$1;(statearr_14532_14600[(2)] = null);
(statearr_14532_14600[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (3)))
{var inst_14479 = (state_14481[(2)]);var state_14481__$1 = state_14481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14481__$1,inst_14479);
} else
{if((state_val_14482 === (12)))
{var inst_14408 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14533_14601 = state_14481__$1;(statearr_14533_14601[(2)] = inst_14408);
(statearr_14533_14601[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (2)))
{var state_14481__$1 = state_14481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(4),ch);
} else
{if((state_val_14482 === (23)))
{var state_14481__$1 = state_14481;var statearr_14534_14602 = state_14481__$1;(statearr_14534_14602[(2)] = null);
(statearr_14534_14602[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (35)))
{var inst_14463 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14535_14603 = state_14481__$1;(statearr_14535_14603[(2)] = inst_14463);
(statearr_14535_14603[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (19)))
{var inst_14382 = (state_14481[(7)]);var inst_14386 = cljs.core.chunk_first.call(null,inst_14382);var inst_14387 = cljs.core.chunk_rest.call(null,inst_14382);var inst_14388 = cljs.core.count.call(null,inst_14386);var inst_14362 = inst_14387;var inst_14363 = inst_14386;var inst_14364 = inst_14388;var inst_14365 = (0);var state_14481__$1 = (function (){var statearr_14536 = state_14481;(statearr_14536[(13)] = inst_14363);
(statearr_14536[(15)] = inst_14364);
(statearr_14536[(16)] = inst_14362);
(statearr_14536[(17)] = inst_14365);
return statearr_14536;
})();var statearr_14537_14604 = state_14481__$1;(statearr_14537_14604[(2)] = null);
(statearr_14537_14604[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (11)))
{var inst_14382 = (state_14481[(7)]);var inst_14362 = (state_14481[(16)]);var inst_14382__$1 = cljs.core.seq.call(null,inst_14362);var state_14481__$1 = (function (){var statearr_14538 = state_14481;(statearr_14538[(7)] = inst_14382__$1);
return statearr_14538;
})();if(inst_14382__$1)
{var statearr_14539_14605 = state_14481__$1;(statearr_14539_14605[(1)] = (16));
} else
{var statearr_14540_14606 = state_14481__$1;(statearr_14540_14606[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (9)))
{var inst_14410 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14541_14607 = state_14481__$1;(statearr_14541_14607[(2)] = inst_14410);
(statearr_14541_14607[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (5)))
{var inst_14360 = cljs.core.deref.call(null,cs);var inst_14361 = cljs.core.seq.call(null,inst_14360);var inst_14362 = inst_14361;var inst_14363 = null;var inst_14364 = (0);var inst_14365 = (0);var state_14481__$1 = (function (){var statearr_14542 = state_14481;(statearr_14542[(13)] = inst_14363);
(statearr_14542[(15)] = inst_14364);
(statearr_14542[(16)] = inst_14362);
(statearr_14542[(17)] = inst_14365);
return statearr_14542;
})();var statearr_14543_14608 = state_14481__$1;(statearr_14543_14608[(2)] = null);
(statearr_14543_14608[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (14)))
{var state_14481__$1 = state_14481;var statearr_14544_14609 = state_14481__$1;(statearr_14544_14609[(2)] = null);
(statearr_14544_14609[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (45)))
{var inst_14471 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14545_14610 = state_14481__$1;(statearr_14545_14610[(2)] = inst_14471);
(statearr_14545_14610[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (26)))
{var inst_14413 = (state_14481[(29)]);var inst_14467 = (state_14481[(2)]);var inst_14468 = cljs.core.seq.call(null,inst_14413);var state_14481__$1 = (function (){var statearr_14546 = state_14481;(statearr_14546[(31)] = inst_14467);
return statearr_14546;
})();if(inst_14468)
{var statearr_14547_14611 = state_14481__$1;(statearr_14547_14611[(1)] = (42));
} else
{var statearr_14548_14612 = state_14481__$1;(statearr_14548_14612[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (16)))
{var inst_14382 = (state_14481[(7)]);var inst_14384 = cljs.core.chunked_seq_QMARK_.call(null,inst_14382);var state_14481__$1 = state_14481;if(inst_14384)
{var statearr_14549_14613 = state_14481__$1;(statearr_14549_14613[(1)] = (19));
} else
{var statearr_14550_14614 = state_14481__$1;(statearr_14550_14614[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (38)))
{var inst_14460 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14551_14615 = state_14481__$1;(statearr_14551_14615[(2)] = inst_14460);
(statearr_14551_14615[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (30)))
{var state_14481__$1 = state_14481;var statearr_14552_14616 = state_14481__$1;(statearr_14552_14616[(2)] = null);
(statearr_14552_14616[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (10)))
{var inst_14363 = (state_14481[(13)]);var inst_14365 = (state_14481[(17)]);var inst_14371 = cljs.core._nth.call(null,inst_14363,inst_14365);var inst_14372 = cljs.core.nth.call(null,inst_14371,(0),null);var inst_14373 = cljs.core.nth.call(null,inst_14371,(1),null);var state_14481__$1 = (function (){var statearr_14553 = state_14481;(statearr_14553[(26)] = inst_14372);
return statearr_14553;
})();if(cljs.core.truth_(inst_14373))
{var statearr_14554_14617 = state_14481__$1;(statearr_14554_14617[(1)] = (13));
} else
{var statearr_14555_14618 = state_14481__$1;(statearr_14555_14618[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (18)))
{var inst_14406 = (state_14481[(2)]);var state_14481__$1 = state_14481;var statearr_14556_14619 = state_14481__$1;(statearr_14556_14619[(2)] = inst_14406);
(statearr_14556_14619[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (42)))
{var state_14481__$1 = state_14481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(45),dchan);
} else
{if((state_val_14482 === (37)))
{var inst_14353 = (state_14481[(9)]);var inst_14449 = (state_14481[(23)]);var inst_14440 = (state_14481[(25)]);var inst_14449__$1 = cljs.core.first.call(null,inst_14440);var inst_14450 = cljs.core.async.put_BANG_.call(null,inst_14449__$1,inst_14353,done);var state_14481__$1 = (function (){var statearr_14557 = state_14481;(statearr_14557[(23)] = inst_14449__$1);
return statearr_14557;
})();if(cljs.core.truth_(inst_14450))
{var statearr_14558_14620 = state_14481__$1;(statearr_14558_14620[(1)] = (39));
} else
{var statearr_14559_14621 = state_14481__$1;(statearr_14559_14621[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14482 === (8)))
{var inst_14364 = (state_14481[(15)]);var inst_14365 = (state_14481[(17)]);var inst_14367 = (inst_14365 < inst_14364);var inst_14368 = inst_14367;var state_14481__$1 = state_14481;if(cljs.core.truth_(inst_14368))
{var statearr_14560_14622 = state_14481__$1;(statearr_14560_14622[(1)] = (10));
} else
{var statearr_14561_14623 = state_14481__$1;(statearr_14561_14623[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___14569,cs,m,dchan,dctr,done))
;return ((function (switch__10262__auto__,c__10327__auto___14569,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_14565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14565[(0)] = state_machine__10263__auto__);
(statearr_14565[(1)] = (1));
return statearr_14565;
});
var state_machine__10263__auto____1 = (function (state_14481){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_14481);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e14566){if((e14566 instanceof Object))
{var ex__10266__auto__ = e14566;var statearr_14567_14624 = state_14481;(statearr_14567_14624[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14625 = state_14481;
state_14481 = G__14625;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_14481){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_14481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___14569,cs,m,dchan,dctr,done))
})();var state__10329__auto__ = (function (){var statearr_14568 = f__10328__auto__.call(null);(statearr_14568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___14569);
return statearr_14568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___14569,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14627 = {};return obj14627;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7919__auto__ = m;if(and__7919__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7919__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8558__auto__ = (((m == null))?null:m);return (function (){var or__7931__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14747 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14748){
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
this.meta14748 = meta14748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14747.cljs$lang$type = true;
cljs.core.async.t14747.cljs$lang$ctorStr = "cljs.core.async/t14747";
cljs.core.async.t14747.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t14747");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14747.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14747.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14749){var self__ = this;
var _14749__$1 = this;return self__.meta14748;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14749,meta14748__$1){var self__ = this;
var _14749__$1 = this;return (new cljs.core.async.t14747(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14748__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14747 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14747(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14748){return (new cljs.core.async.t14747(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14748));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14747(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10327__auto___14866 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___14866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___14866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14819){var state_val_14820 = (state_14819[(1)]);if((state_val_14820 === (7)))
{var inst_14763 = (state_14819[(7)]);var inst_14768 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14763);var state_14819__$1 = state_14819;var statearr_14821_14867 = state_14819__$1;(statearr_14821_14867[(2)] = inst_14768);
(statearr_14821_14867[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (20)))
{var inst_14778 = (state_14819[(8)]);var state_14819__$1 = state_14819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14819__$1,(23),out,inst_14778);
} else
{if((state_val_14820 === (1)))
{var inst_14753 = (state_14819[(9)]);var inst_14753__$1 = calc_state.call(null);var inst_14754 = cljs.core.seq_QMARK_.call(null,inst_14753__$1);var state_14819__$1 = (function (){var statearr_14822 = state_14819;(statearr_14822[(9)] = inst_14753__$1);
return statearr_14822;
})();if(inst_14754)
{var statearr_14823_14868 = state_14819__$1;(statearr_14823_14868[(1)] = (2));
} else
{var statearr_14824_14869 = state_14819__$1;(statearr_14824_14869[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (24)))
{var inst_14771 = (state_14819[(10)]);var inst_14763 = inst_14771;var state_14819__$1 = (function (){var statearr_14825 = state_14819;(statearr_14825[(7)] = inst_14763);
return statearr_14825;
})();var statearr_14826_14870 = state_14819__$1;(statearr_14826_14870[(2)] = null);
(statearr_14826_14870[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (4)))
{var inst_14753 = (state_14819[(9)]);var inst_14759 = (state_14819[(2)]);var inst_14760 = cljs.core.get.call(null,inst_14759,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14761 = cljs.core.get.call(null,inst_14759,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14762 = cljs.core.get.call(null,inst_14759,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14763 = inst_14753;var state_14819__$1 = (function (){var statearr_14827 = state_14819;(statearr_14827[(11)] = inst_14762);
(statearr_14827[(12)] = inst_14761);
(statearr_14827[(13)] = inst_14760);
(statearr_14827[(7)] = inst_14763);
return statearr_14827;
})();var statearr_14828_14871 = state_14819__$1;(statearr_14828_14871[(2)] = null);
(statearr_14828_14871[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (15)))
{var state_14819__$1 = state_14819;var statearr_14829_14872 = state_14819__$1;(statearr_14829_14872[(2)] = null);
(statearr_14829_14872[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (21)))
{var inst_14771 = (state_14819[(10)]);var inst_14763 = inst_14771;var state_14819__$1 = (function (){var statearr_14830 = state_14819;(statearr_14830[(7)] = inst_14763);
return statearr_14830;
})();var statearr_14831_14873 = state_14819__$1;(statearr_14831_14873[(2)] = null);
(statearr_14831_14873[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (13)))
{var inst_14815 = (state_14819[(2)]);var state_14819__$1 = state_14819;var statearr_14832_14874 = state_14819__$1;(statearr_14832_14874[(2)] = inst_14815);
(statearr_14832_14874[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (22)))
{var inst_14813 = (state_14819[(2)]);var state_14819__$1 = state_14819;var statearr_14833_14875 = state_14819__$1;(statearr_14833_14875[(2)] = inst_14813);
(statearr_14833_14875[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (6)))
{var inst_14817 = (state_14819[(2)]);var state_14819__$1 = state_14819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14819__$1,inst_14817);
} else
{if((state_val_14820 === (25)))
{var state_14819__$1 = state_14819;var statearr_14834_14876 = state_14819__$1;(statearr_14834_14876[(2)] = null);
(statearr_14834_14876[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (17)))
{var inst_14793 = (state_14819[(14)]);var state_14819__$1 = state_14819;var statearr_14835_14877 = state_14819__$1;(statearr_14835_14877[(2)] = inst_14793);
(statearr_14835_14877[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (3)))
{var inst_14753 = (state_14819[(9)]);var state_14819__$1 = state_14819;var statearr_14836_14878 = state_14819__$1;(statearr_14836_14878[(2)] = inst_14753);
(statearr_14836_14878[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (12)))
{var inst_14774 = (state_14819[(15)]);var inst_14779 = (state_14819[(16)]);var inst_14793 = (state_14819[(14)]);var inst_14793__$1 = inst_14774.call(null,inst_14779);var state_14819__$1 = (function (){var statearr_14837 = state_14819;(statearr_14837[(14)] = inst_14793__$1);
return statearr_14837;
})();if(cljs.core.truth_(inst_14793__$1))
{var statearr_14838_14879 = state_14819__$1;(statearr_14838_14879[(1)] = (17));
} else
{var statearr_14839_14880 = state_14819__$1;(statearr_14839_14880[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (2)))
{var inst_14753 = (state_14819[(9)]);var inst_14756 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14753);var state_14819__$1 = state_14819;var statearr_14840_14881 = state_14819__$1;(statearr_14840_14881[(2)] = inst_14756);
(statearr_14840_14881[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (23)))
{var inst_14804 = (state_14819[(2)]);var state_14819__$1 = state_14819;if(cljs.core.truth_(inst_14804))
{var statearr_14841_14882 = state_14819__$1;(statearr_14841_14882[(1)] = (24));
} else
{var statearr_14842_14883 = state_14819__$1;(statearr_14842_14883[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (19)))
{var inst_14801 = (state_14819[(2)]);var state_14819__$1 = state_14819;if(cljs.core.truth_(inst_14801))
{var statearr_14843_14884 = state_14819__$1;(statearr_14843_14884[(1)] = (20));
} else
{var statearr_14844_14885 = state_14819__$1;(statearr_14844_14885[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (11)))
{var inst_14778 = (state_14819[(8)]);var inst_14784 = (inst_14778 == null);var state_14819__$1 = state_14819;if(cljs.core.truth_(inst_14784))
{var statearr_14845_14886 = state_14819__$1;(statearr_14845_14886[(1)] = (14));
} else
{var statearr_14846_14887 = state_14819__$1;(statearr_14846_14887[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (9)))
{var inst_14771 = (state_14819[(10)]);var inst_14771__$1 = (state_14819[(2)]);var inst_14772 = cljs.core.get.call(null,inst_14771__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14773 = cljs.core.get.call(null,inst_14771__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14774 = cljs.core.get.call(null,inst_14771__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14819__$1 = (function (){var statearr_14847 = state_14819;(statearr_14847[(10)] = inst_14771__$1);
(statearr_14847[(15)] = inst_14774);
(statearr_14847[(17)] = inst_14773);
return statearr_14847;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14819__$1,(10),inst_14772);
} else
{if((state_val_14820 === (5)))
{var inst_14763 = (state_14819[(7)]);var inst_14766 = cljs.core.seq_QMARK_.call(null,inst_14763);var state_14819__$1 = state_14819;if(inst_14766)
{var statearr_14848_14888 = state_14819__$1;(statearr_14848_14888[(1)] = (7));
} else
{var statearr_14849_14889 = state_14819__$1;(statearr_14849_14889[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (14)))
{var inst_14779 = (state_14819[(16)]);var inst_14786 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14779);var state_14819__$1 = state_14819;var statearr_14850_14890 = state_14819__$1;(statearr_14850_14890[(2)] = inst_14786);
(statearr_14850_14890[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (26)))
{var inst_14809 = (state_14819[(2)]);var state_14819__$1 = state_14819;var statearr_14851_14891 = state_14819__$1;(statearr_14851_14891[(2)] = inst_14809);
(statearr_14851_14891[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (16)))
{var inst_14789 = (state_14819[(2)]);var inst_14790 = calc_state.call(null);var inst_14763 = inst_14790;var state_14819__$1 = (function (){var statearr_14852 = state_14819;(statearr_14852[(18)] = inst_14789);
(statearr_14852[(7)] = inst_14763);
return statearr_14852;
})();var statearr_14853_14892 = state_14819__$1;(statearr_14853_14892[(2)] = null);
(statearr_14853_14892[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (10)))
{var inst_14779 = (state_14819[(16)]);var inst_14778 = (state_14819[(8)]);var inst_14777 = (state_14819[(2)]);var inst_14778__$1 = cljs.core.nth.call(null,inst_14777,(0),null);var inst_14779__$1 = cljs.core.nth.call(null,inst_14777,(1),null);var inst_14780 = (inst_14778__$1 == null);var inst_14781 = cljs.core._EQ_.call(null,inst_14779__$1,change);var inst_14782 = (inst_14780) || (inst_14781);var state_14819__$1 = (function (){var statearr_14854 = state_14819;(statearr_14854[(16)] = inst_14779__$1);
(statearr_14854[(8)] = inst_14778__$1);
return statearr_14854;
})();if(cljs.core.truth_(inst_14782))
{var statearr_14855_14893 = state_14819__$1;(statearr_14855_14893[(1)] = (11));
} else
{var statearr_14856_14894 = state_14819__$1;(statearr_14856_14894[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (18)))
{var inst_14774 = (state_14819[(15)]);var inst_14779 = (state_14819[(16)]);var inst_14773 = (state_14819[(17)]);var inst_14796 = cljs.core.empty_QMARK_.call(null,inst_14774);var inst_14797 = inst_14773.call(null,inst_14779);var inst_14798 = cljs.core.not.call(null,inst_14797);var inst_14799 = (inst_14796) && (inst_14798);var state_14819__$1 = state_14819;var statearr_14857_14895 = state_14819__$1;(statearr_14857_14895[(2)] = inst_14799);
(statearr_14857_14895[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14820 === (8)))
{var inst_14763 = (state_14819[(7)]);var state_14819__$1 = state_14819;var statearr_14858_14896 = state_14819__$1;(statearr_14858_14896[(2)] = inst_14763);
(statearr_14858_14896[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___14866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10262__auto__,c__10327__auto___14866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_14862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14862[(0)] = state_machine__10263__auto__);
(statearr_14862[(1)] = (1));
return statearr_14862;
});
var state_machine__10263__auto____1 = (function (state_14819){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_14819);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e14863){if((e14863 instanceof Object))
{var ex__10266__auto__ = e14863;var statearr_14864_14897 = state_14819;(statearr_14864_14897[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14898 = state_14819;
state_14819 = G__14898;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_14819){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_14819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___14866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10329__auto__ = (function (){var statearr_14865 = f__10328__auto__.call(null);(statearr_14865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___14866);
return statearr_14865;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___14866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14900 = {};return obj14900;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7919__auto__ = p;if(and__7919__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7919__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8558__auto__ = (((p == null))?null:p);return (function (){var or__7931__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7919__auto__ = p;if(and__7919__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7919__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8558__auto__ = (((p == null))?null:p);return (function (){var or__7931__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7919__auto__ = p;if(and__7919__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7919__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8558__auto__ = (((p == null))?null:p);return (function (){var or__7931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7919__auto__ = p;if(and__7919__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7919__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8558__auto__ = (((p == null))?null:p);return (function (){var or__7931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8558__auto__)]);if(or__7931__auto__)
{return or__7931__auto__;
} else
{var or__7931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7931__auto____$1)
{return or__7931__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7931__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7931__auto__))
{return or__7931__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7931__auto__,mults){
return (function (p1__14901_SHARP_){if(cljs.core.truth_(p1__14901_SHARP_.call(null,topic)))
{return p1__14901_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14901_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7931__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15016 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15017){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15017 = meta15017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15016.cljs$lang$type = true;
cljs.core.async.t15016.cljs$lang$ctorStr = "cljs.core.async/t15016";
cljs.core.async.t15016.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8498__auto__,writer__8499__auto__,opt__8500__auto__){return cljs.core._write.call(null,writer__8499__auto__,"cljs.core.async/t15016");
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15016.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15018){var self__ = this;
var _15018__$1 = this;return self__.meta15017;
});})(mults,ensure_mult))
;
cljs.core.async.t15016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15018,meta15017__$1){var self__ = this;
var _15018__$1 = this;return (new cljs.core.async.t15016(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15017__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15016 = ((function (mults,ensure_mult){
return (function __GT_t15016(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15017){return (new cljs.core.async.t15016(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15017));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15016(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10327__auto___15130 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15130,mults,ensure_mult,p){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15130,mults,ensure_mult,p){
return (function (state_15086){var state_val_15087 = (state_15086[(1)]);if((state_val_15087 === (7)))
{var inst_15082 = (state_15086[(2)]);var state_15086__$1 = state_15086;var statearr_15088_15131 = state_15086__$1;(statearr_15088_15131[(2)] = inst_15082);
(statearr_15088_15131[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (20)))
{var state_15086__$1 = state_15086;var statearr_15089_15132 = state_15086__$1;(statearr_15089_15132[(2)] = null);
(statearr_15089_15132[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (1)))
{var state_15086__$1 = state_15086;var statearr_15090_15133 = state_15086__$1;(statearr_15090_15133[(2)] = null);
(statearr_15090_15133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (4)))
{var inst_15021 = (state_15086[(7)]);var inst_15021__$1 = (state_15086[(2)]);var inst_15022 = (inst_15021__$1 == null);var state_15086__$1 = (function (){var statearr_15091 = state_15086;(statearr_15091[(7)] = inst_15021__$1);
return statearr_15091;
})();if(cljs.core.truth_(inst_15022))
{var statearr_15092_15134 = state_15086__$1;(statearr_15092_15134[(1)] = (5));
} else
{var statearr_15093_15135 = state_15086__$1;(statearr_15093_15135[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (15)))
{var inst_15063 = (state_15086[(2)]);var state_15086__$1 = state_15086;var statearr_15094_15136 = state_15086__$1;(statearr_15094_15136[(2)] = inst_15063);
(statearr_15094_15136[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (21)))
{var inst_15069 = (state_15086[(8)]);var inst_15077 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15069);var state_15086__$1 = state_15086;var statearr_15095_15137 = state_15086__$1;(statearr_15095_15137[(2)] = inst_15077);
(statearr_15095_15137[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (13)))
{var inst_15045 = (state_15086[(9)]);var inst_15047 = cljs.core.chunked_seq_QMARK_.call(null,inst_15045);var state_15086__$1 = state_15086;if(inst_15047)
{var statearr_15096_15138 = state_15086__$1;(statearr_15096_15138[(1)] = (16));
} else
{var statearr_15097_15139 = state_15086__$1;(statearr_15097_15139[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (22)))
{var inst_15079 = (state_15086[(2)]);var state_15086__$1 = (function (){var statearr_15098 = state_15086;(statearr_15098[(10)] = inst_15079);
return statearr_15098;
})();var statearr_15099_15140 = state_15086__$1;(statearr_15099_15140[(2)] = null);
(statearr_15099_15140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (6)))
{var inst_15021 = (state_15086[(7)]);var inst_15069 = (state_15086[(8)]);var inst_15069__$1 = topic_fn.call(null,inst_15021);var inst_15070 = cljs.core.deref.call(null,mults);var inst_15071 = cljs.core.get.call(null,inst_15070,inst_15069__$1);var inst_15072 = cljs.core.async.muxch_STAR_.call(null,inst_15071);var state_15086__$1 = (function (){var statearr_15100 = state_15086;(statearr_15100[(8)] = inst_15069__$1);
return statearr_15100;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15086__$1,(19),inst_15072,inst_15021);
} else
{if((state_val_15087 === (17)))
{var inst_15045 = (state_15086[(9)]);var inst_15054 = cljs.core.first.call(null,inst_15045);var inst_15055 = cljs.core.async.muxch_STAR_.call(null,inst_15054);var inst_15056 = cljs.core.async.close_BANG_.call(null,inst_15055);var inst_15057 = cljs.core.next.call(null,inst_15045);var inst_15031 = inst_15057;var inst_15032 = null;var inst_15033 = (0);var inst_15034 = (0);var state_15086__$1 = (function (){var statearr_15101 = state_15086;(statearr_15101[(11)] = inst_15033);
(statearr_15101[(12)] = inst_15032);
(statearr_15101[(13)] = inst_15034);
(statearr_15101[(14)] = inst_15056);
(statearr_15101[(15)] = inst_15031);
return statearr_15101;
})();var statearr_15102_15141 = state_15086__$1;(statearr_15102_15141[(2)] = null);
(statearr_15102_15141[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (3)))
{var inst_15084 = (state_15086[(2)]);var state_15086__$1 = state_15086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15086__$1,inst_15084);
} else
{if((state_val_15087 === (12)))
{var inst_15065 = (state_15086[(2)]);var state_15086__$1 = state_15086;var statearr_15103_15142 = state_15086__$1;(statearr_15103_15142[(2)] = inst_15065);
(statearr_15103_15142[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (2)))
{var state_15086__$1 = state_15086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15086__$1,(4),ch);
} else
{if((state_val_15087 === (19)))
{var inst_15074 = (state_15086[(2)]);var state_15086__$1 = state_15086;if(cljs.core.truth_(inst_15074))
{var statearr_15104_15143 = state_15086__$1;(statearr_15104_15143[(1)] = (20));
} else
{var statearr_15105_15144 = state_15086__$1;(statearr_15105_15144[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (11)))
{var inst_15045 = (state_15086[(9)]);var inst_15031 = (state_15086[(15)]);var inst_15045__$1 = cljs.core.seq.call(null,inst_15031);var state_15086__$1 = (function (){var statearr_15106 = state_15086;(statearr_15106[(9)] = inst_15045__$1);
return statearr_15106;
})();if(inst_15045__$1)
{var statearr_15107_15145 = state_15086__$1;(statearr_15107_15145[(1)] = (13));
} else
{var statearr_15108_15146 = state_15086__$1;(statearr_15108_15146[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (9)))
{var inst_15067 = (state_15086[(2)]);var state_15086__$1 = state_15086;var statearr_15109_15147 = state_15086__$1;(statearr_15109_15147[(2)] = inst_15067);
(statearr_15109_15147[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (5)))
{var inst_15028 = cljs.core.deref.call(null,mults);var inst_15029 = cljs.core.vals.call(null,inst_15028);var inst_15030 = cljs.core.seq.call(null,inst_15029);var inst_15031 = inst_15030;var inst_15032 = null;var inst_15033 = (0);var inst_15034 = (0);var state_15086__$1 = (function (){var statearr_15110 = state_15086;(statearr_15110[(11)] = inst_15033);
(statearr_15110[(12)] = inst_15032);
(statearr_15110[(13)] = inst_15034);
(statearr_15110[(15)] = inst_15031);
return statearr_15110;
})();var statearr_15111_15148 = state_15086__$1;(statearr_15111_15148[(2)] = null);
(statearr_15111_15148[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (14)))
{var state_15086__$1 = state_15086;var statearr_15115_15149 = state_15086__$1;(statearr_15115_15149[(2)] = null);
(statearr_15115_15149[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (16)))
{var inst_15045 = (state_15086[(9)]);var inst_15049 = cljs.core.chunk_first.call(null,inst_15045);var inst_15050 = cljs.core.chunk_rest.call(null,inst_15045);var inst_15051 = cljs.core.count.call(null,inst_15049);var inst_15031 = inst_15050;var inst_15032 = inst_15049;var inst_15033 = inst_15051;var inst_15034 = (0);var state_15086__$1 = (function (){var statearr_15116 = state_15086;(statearr_15116[(11)] = inst_15033);
(statearr_15116[(12)] = inst_15032);
(statearr_15116[(13)] = inst_15034);
(statearr_15116[(15)] = inst_15031);
return statearr_15116;
})();var statearr_15117_15150 = state_15086__$1;(statearr_15117_15150[(2)] = null);
(statearr_15117_15150[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (10)))
{var inst_15033 = (state_15086[(11)]);var inst_15032 = (state_15086[(12)]);var inst_15034 = (state_15086[(13)]);var inst_15031 = (state_15086[(15)]);var inst_15039 = cljs.core._nth.call(null,inst_15032,inst_15034);var inst_15040 = cljs.core.async.muxch_STAR_.call(null,inst_15039);var inst_15041 = cljs.core.async.close_BANG_.call(null,inst_15040);var inst_15042 = (inst_15034 + (1));var tmp15112 = inst_15033;var tmp15113 = inst_15032;var tmp15114 = inst_15031;var inst_15031__$1 = tmp15114;var inst_15032__$1 = tmp15113;var inst_15033__$1 = tmp15112;var inst_15034__$1 = inst_15042;var state_15086__$1 = (function (){var statearr_15118 = state_15086;(statearr_15118[(11)] = inst_15033__$1);
(statearr_15118[(12)] = inst_15032__$1);
(statearr_15118[(13)] = inst_15034__$1);
(statearr_15118[(16)] = inst_15041);
(statearr_15118[(15)] = inst_15031__$1);
return statearr_15118;
})();var statearr_15119_15151 = state_15086__$1;(statearr_15119_15151[(2)] = null);
(statearr_15119_15151[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (18)))
{var inst_15060 = (state_15086[(2)]);var state_15086__$1 = state_15086;var statearr_15120_15152 = state_15086__$1;(statearr_15120_15152[(2)] = inst_15060);
(statearr_15120_15152[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15087 === (8)))
{var inst_15033 = (state_15086[(11)]);var inst_15034 = (state_15086[(13)]);var inst_15036 = (inst_15034 < inst_15033);var inst_15037 = inst_15036;var state_15086__$1 = state_15086;if(cljs.core.truth_(inst_15037))
{var statearr_15121_15153 = state_15086__$1;(statearr_15121_15153[(1)] = (10));
} else
{var statearr_15122_15154 = state_15086__$1;(statearr_15122_15154[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___15130,mults,ensure_mult,p))
;return ((function (switch__10262__auto__,c__10327__auto___15130,mults,ensure_mult,p){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15126[(0)] = state_machine__10263__auto__);
(statearr_15126[(1)] = (1));
return statearr_15126;
});
var state_machine__10263__auto____1 = (function (state_15086){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15086);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15127){if((e15127 instanceof Object))
{var ex__10266__auto__ = e15127;var statearr_15128_15155 = state_15086;(statearr_15128_15155[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15156 = state_15086;
state_15086 = G__15156;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15086){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15130,mults,ensure_mult,p))
})();var state__10329__auto__ = (function (){var statearr_15129 = f__10328__auto__.call(null);(statearr_15129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15130);
return statearr_15129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15130,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10327__auto___15293 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15263){var state_val_15264 = (state_15263[(1)]);if((state_val_15264 === (7)))
{var state_15263__$1 = state_15263;var statearr_15265_15294 = state_15263__$1;(statearr_15265_15294[(2)] = null);
(statearr_15265_15294[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (1)))
{var state_15263__$1 = state_15263;var statearr_15266_15295 = state_15263__$1;(statearr_15266_15295[(2)] = null);
(statearr_15266_15295[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (4)))
{var inst_15227 = (state_15263[(7)]);var inst_15229 = (inst_15227 < cnt);var state_15263__$1 = state_15263;if(cljs.core.truth_(inst_15229))
{var statearr_15267_15296 = state_15263__$1;(statearr_15267_15296[(1)] = (6));
} else
{var statearr_15268_15297 = state_15263__$1;(statearr_15268_15297[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (15)))
{var inst_15259 = (state_15263[(2)]);var state_15263__$1 = state_15263;var statearr_15269_15298 = state_15263__$1;(statearr_15269_15298[(2)] = inst_15259);
(statearr_15269_15298[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (13)))
{var inst_15252 = cljs.core.async.close_BANG_.call(null,out);var state_15263__$1 = state_15263;var statearr_15270_15299 = state_15263__$1;(statearr_15270_15299[(2)] = inst_15252);
(statearr_15270_15299[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (6)))
{var state_15263__$1 = state_15263;var statearr_15271_15300 = state_15263__$1;(statearr_15271_15300[(2)] = null);
(statearr_15271_15300[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (3)))
{var inst_15261 = (state_15263[(2)]);var state_15263__$1 = state_15263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15263__$1,inst_15261);
} else
{if((state_val_15264 === (12)))
{var inst_15249 = (state_15263[(8)]);var inst_15249__$1 = (state_15263[(2)]);var inst_15250 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15249__$1);var state_15263__$1 = (function (){var statearr_15272 = state_15263;(statearr_15272[(8)] = inst_15249__$1);
return statearr_15272;
})();if(cljs.core.truth_(inst_15250))
{var statearr_15273_15301 = state_15263__$1;(statearr_15273_15301[(1)] = (13));
} else
{var statearr_15274_15302 = state_15263__$1;(statearr_15274_15302[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (2)))
{var inst_15226 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15227 = (0);var state_15263__$1 = (function (){var statearr_15275 = state_15263;(statearr_15275[(7)] = inst_15227);
(statearr_15275[(9)] = inst_15226);
return statearr_15275;
})();var statearr_15276_15303 = state_15263__$1;(statearr_15276_15303[(2)] = null);
(statearr_15276_15303[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (11)))
{var inst_15227 = (state_15263[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15263,(10),Object,null,(9));var inst_15236 = chs__$1.call(null,inst_15227);var inst_15237 = done.call(null,inst_15227);var inst_15238 = cljs.core.async.take_BANG_.call(null,inst_15236,inst_15237);var state_15263__$1 = state_15263;var statearr_15277_15304 = state_15263__$1;(statearr_15277_15304[(2)] = inst_15238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15263__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (9)))
{var inst_15227 = (state_15263[(7)]);var inst_15240 = (state_15263[(2)]);var inst_15241 = (inst_15227 + (1));var inst_15227__$1 = inst_15241;var state_15263__$1 = (function (){var statearr_15278 = state_15263;(statearr_15278[(7)] = inst_15227__$1);
(statearr_15278[(10)] = inst_15240);
return statearr_15278;
})();var statearr_15279_15305 = state_15263__$1;(statearr_15279_15305[(2)] = null);
(statearr_15279_15305[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (5)))
{var inst_15247 = (state_15263[(2)]);var state_15263__$1 = (function (){var statearr_15280 = state_15263;(statearr_15280[(11)] = inst_15247);
return statearr_15280;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15263__$1,(12),dchan);
} else
{if((state_val_15264 === (14)))
{var inst_15249 = (state_15263[(8)]);var inst_15254 = cljs.core.apply.call(null,f,inst_15249);var state_15263__$1 = state_15263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15263__$1,(16),out,inst_15254);
} else
{if((state_val_15264 === (16)))
{var inst_15256 = (state_15263[(2)]);var state_15263__$1 = (function (){var statearr_15281 = state_15263;(statearr_15281[(12)] = inst_15256);
return statearr_15281;
})();var statearr_15282_15306 = state_15263__$1;(statearr_15282_15306[(2)] = null);
(statearr_15282_15306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (10)))
{var inst_15231 = (state_15263[(2)]);var inst_15232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15263__$1 = (function (){var statearr_15283 = state_15263;(statearr_15283[(13)] = inst_15231);
return statearr_15283;
})();var statearr_15284_15307 = state_15263__$1;(statearr_15284_15307[(2)] = inst_15232);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15263__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15264 === (8)))
{var inst_15245 = (state_15263[(2)]);var state_15263__$1 = state_15263;var statearr_15285_15308 = state_15263__$1;(statearr_15285_15308[(2)] = inst_15245);
(statearr_15285_15308[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___15293,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10262__auto__,c__10327__auto___15293,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15289[(0)] = state_machine__10263__auto__);
(statearr_15289[(1)] = (1));
return statearr_15289;
});
var state_machine__10263__auto____1 = (function (state_15263){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15263);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15290){if((e15290 instanceof Object))
{var ex__10266__auto__ = e15290;var statearr_15291_15309 = state_15263;(statearr_15291_15309[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15310 = state_15263;
state_15263 = G__15310;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15263){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15293,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10329__auto__ = (function (){var statearr_15292 = f__10328__auto__.call(null);(statearr_15292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15293);
return statearr_15292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15293,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10327__auto___15418 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15418,out){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15418,out){
return (function (state_15394){var state_val_15395 = (state_15394[(1)]);if((state_val_15395 === (7)))
{var inst_15373 = (state_15394[(7)]);var inst_15374 = (state_15394[(8)]);var inst_15373__$1 = (state_15394[(2)]);var inst_15374__$1 = cljs.core.nth.call(null,inst_15373__$1,(0),null);var inst_15375 = cljs.core.nth.call(null,inst_15373__$1,(1),null);var inst_15376 = (inst_15374__$1 == null);var state_15394__$1 = (function (){var statearr_15396 = state_15394;(statearr_15396[(7)] = inst_15373__$1);
(statearr_15396[(9)] = inst_15375);
(statearr_15396[(8)] = inst_15374__$1);
return statearr_15396;
})();if(cljs.core.truth_(inst_15376))
{var statearr_15397_15419 = state_15394__$1;(statearr_15397_15419[(1)] = (8));
} else
{var statearr_15398_15420 = state_15394__$1;(statearr_15398_15420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (1)))
{var inst_15365 = cljs.core.vec.call(null,chs);var inst_15366 = inst_15365;var state_15394__$1 = (function (){var statearr_15399 = state_15394;(statearr_15399[(10)] = inst_15366);
return statearr_15399;
})();var statearr_15400_15421 = state_15394__$1;(statearr_15400_15421[(2)] = null);
(statearr_15400_15421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (4)))
{var inst_15366 = (state_15394[(10)]);var state_15394__$1 = state_15394;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15394__$1,(7),inst_15366);
} else
{if((state_val_15395 === (6)))
{var inst_15390 = (state_15394[(2)]);var state_15394__$1 = state_15394;var statearr_15401_15422 = state_15394__$1;(statearr_15401_15422[(2)] = inst_15390);
(statearr_15401_15422[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (3)))
{var inst_15392 = (state_15394[(2)]);var state_15394__$1 = state_15394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15394__$1,inst_15392);
} else
{if((state_val_15395 === (2)))
{var inst_15366 = (state_15394[(10)]);var inst_15368 = cljs.core.count.call(null,inst_15366);var inst_15369 = (inst_15368 > (0));var state_15394__$1 = state_15394;if(cljs.core.truth_(inst_15369))
{var statearr_15403_15423 = state_15394__$1;(statearr_15403_15423[(1)] = (4));
} else
{var statearr_15404_15424 = state_15394__$1;(statearr_15404_15424[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (11)))
{var inst_15366 = (state_15394[(10)]);var inst_15383 = (state_15394[(2)]);var tmp15402 = inst_15366;var inst_15366__$1 = tmp15402;var state_15394__$1 = (function (){var statearr_15405 = state_15394;(statearr_15405[(11)] = inst_15383);
(statearr_15405[(10)] = inst_15366__$1);
return statearr_15405;
})();var statearr_15406_15425 = state_15394__$1;(statearr_15406_15425[(2)] = null);
(statearr_15406_15425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (9)))
{var inst_15374 = (state_15394[(8)]);var state_15394__$1 = state_15394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15394__$1,(11),out,inst_15374);
} else
{if((state_val_15395 === (5)))
{var inst_15388 = cljs.core.async.close_BANG_.call(null,out);var state_15394__$1 = state_15394;var statearr_15407_15426 = state_15394__$1;(statearr_15407_15426[(2)] = inst_15388);
(statearr_15407_15426[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (10)))
{var inst_15386 = (state_15394[(2)]);var state_15394__$1 = state_15394;var statearr_15408_15427 = state_15394__$1;(statearr_15408_15427[(2)] = inst_15386);
(statearr_15408_15427[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15395 === (8)))
{var inst_15373 = (state_15394[(7)]);var inst_15366 = (state_15394[(10)]);var inst_15375 = (state_15394[(9)]);var inst_15374 = (state_15394[(8)]);var inst_15378 = (function (){var c = inst_15375;var v = inst_15374;var vec__15371 = inst_15373;var cs = inst_15366;return ((function (c,v,vec__15371,cs,inst_15373,inst_15366,inst_15375,inst_15374,state_val_15395,c__10327__auto___15418,out){
return (function (p1__15311_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15311_SHARP_);
});
;})(c,v,vec__15371,cs,inst_15373,inst_15366,inst_15375,inst_15374,state_val_15395,c__10327__auto___15418,out))
})();var inst_15379 = cljs.core.filterv.call(null,inst_15378,inst_15366);var inst_15366__$1 = inst_15379;var state_15394__$1 = (function (){var statearr_15409 = state_15394;(statearr_15409[(10)] = inst_15366__$1);
return statearr_15409;
})();var statearr_15410_15428 = state_15394__$1;(statearr_15410_15428[(2)] = null);
(statearr_15410_15428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___15418,out))
;return ((function (switch__10262__auto__,c__10327__auto___15418,out){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15414 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15414[(0)] = state_machine__10263__auto__);
(statearr_15414[(1)] = (1));
return statearr_15414;
});
var state_machine__10263__auto____1 = (function (state_15394){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15394);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15415){if((e15415 instanceof Object))
{var ex__10266__auto__ = e15415;var statearr_15416_15429 = state_15394;(statearr_15416_15429[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15430 = state_15394;
state_15394 = G__15430;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15394){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15418,out))
})();var state__10329__auto__ = (function (){var statearr_15417 = f__10328__auto__.call(null);(statearr_15417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15418);
return statearr_15417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15418,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10327__auto___15523 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15523,out){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15523,out){
return (function (state_15500){var state_val_15501 = (state_15500[(1)]);if((state_val_15501 === (7)))
{var inst_15482 = (state_15500[(7)]);var inst_15482__$1 = (state_15500[(2)]);var inst_15483 = (inst_15482__$1 == null);var inst_15484 = cljs.core.not.call(null,inst_15483);var state_15500__$1 = (function (){var statearr_15502 = state_15500;(statearr_15502[(7)] = inst_15482__$1);
return statearr_15502;
})();if(inst_15484)
{var statearr_15503_15524 = state_15500__$1;(statearr_15503_15524[(1)] = (8));
} else
{var statearr_15504_15525 = state_15500__$1;(statearr_15504_15525[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (1)))
{var inst_15477 = (0);var state_15500__$1 = (function (){var statearr_15505 = state_15500;(statearr_15505[(8)] = inst_15477);
return statearr_15505;
})();var statearr_15506_15526 = state_15500__$1;(statearr_15506_15526[(2)] = null);
(statearr_15506_15526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (4)))
{var state_15500__$1 = state_15500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15500__$1,(7),ch);
} else
{if((state_val_15501 === (6)))
{var inst_15495 = (state_15500[(2)]);var state_15500__$1 = state_15500;var statearr_15507_15527 = state_15500__$1;(statearr_15507_15527[(2)] = inst_15495);
(statearr_15507_15527[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (3)))
{var inst_15497 = (state_15500[(2)]);var inst_15498 = cljs.core.async.close_BANG_.call(null,out);var state_15500__$1 = (function (){var statearr_15508 = state_15500;(statearr_15508[(9)] = inst_15497);
return statearr_15508;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15500__$1,inst_15498);
} else
{if((state_val_15501 === (2)))
{var inst_15477 = (state_15500[(8)]);var inst_15479 = (inst_15477 < n);var state_15500__$1 = state_15500;if(cljs.core.truth_(inst_15479))
{var statearr_15509_15528 = state_15500__$1;(statearr_15509_15528[(1)] = (4));
} else
{var statearr_15510_15529 = state_15500__$1;(statearr_15510_15529[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (11)))
{var inst_15477 = (state_15500[(8)]);var inst_15487 = (state_15500[(2)]);var inst_15488 = (inst_15477 + (1));var inst_15477__$1 = inst_15488;var state_15500__$1 = (function (){var statearr_15511 = state_15500;(statearr_15511[(8)] = inst_15477__$1);
(statearr_15511[(10)] = inst_15487);
return statearr_15511;
})();var statearr_15512_15530 = state_15500__$1;(statearr_15512_15530[(2)] = null);
(statearr_15512_15530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (9)))
{var state_15500__$1 = state_15500;var statearr_15513_15531 = state_15500__$1;(statearr_15513_15531[(2)] = null);
(statearr_15513_15531[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (5)))
{var state_15500__$1 = state_15500;var statearr_15514_15532 = state_15500__$1;(statearr_15514_15532[(2)] = null);
(statearr_15514_15532[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (10)))
{var inst_15492 = (state_15500[(2)]);var state_15500__$1 = state_15500;var statearr_15515_15533 = state_15500__$1;(statearr_15515_15533[(2)] = inst_15492);
(statearr_15515_15533[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15501 === (8)))
{var inst_15482 = (state_15500[(7)]);var state_15500__$1 = state_15500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15500__$1,(11),out,inst_15482);
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
});})(c__10327__auto___15523,out))
;return ((function (switch__10262__auto__,c__10327__auto___15523,out){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15519 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15519[(0)] = state_machine__10263__auto__);
(statearr_15519[(1)] = (1));
return statearr_15519;
});
var state_machine__10263__auto____1 = (function (state_15500){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15500);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15520){if((e15520 instanceof Object))
{var ex__10266__auto__ = e15520;var statearr_15521_15534 = state_15500;(statearr_15521_15534[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15535 = state_15500;
state_15500 = G__15535;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15500){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15523,out))
})();var state__10329__auto__ = (function (){var statearr_15522 = f__10328__auto__.call(null);(statearr_15522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15523);
return statearr_15522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15523,out))
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10327__auto___15632 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15632,out){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15632,out){
return (function (state_15607){var state_val_15608 = (state_15607[(1)]);if((state_val_15608 === (7)))
{var inst_15602 = (state_15607[(2)]);var state_15607__$1 = state_15607;var statearr_15609_15633 = state_15607__$1;(statearr_15609_15633[(2)] = inst_15602);
(statearr_15609_15633[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (1)))
{var inst_15584 = null;var state_15607__$1 = (function (){var statearr_15610 = state_15607;(statearr_15610[(7)] = inst_15584);
return statearr_15610;
})();var statearr_15611_15634 = state_15607__$1;(statearr_15611_15634[(2)] = null);
(statearr_15611_15634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (4)))
{var inst_15587 = (state_15607[(8)]);var inst_15587__$1 = (state_15607[(2)]);var inst_15588 = (inst_15587__$1 == null);var inst_15589 = cljs.core.not.call(null,inst_15588);var state_15607__$1 = (function (){var statearr_15612 = state_15607;(statearr_15612[(8)] = inst_15587__$1);
return statearr_15612;
})();if(inst_15589)
{var statearr_15613_15635 = state_15607__$1;(statearr_15613_15635[(1)] = (5));
} else
{var statearr_15614_15636 = state_15607__$1;(statearr_15614_15636[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (6)))
{var state_15607__$1 = state_15607;var statearr_15615_15637 = state_15607__$1;(statearr_15615_15637[(2)] = null);
(statearr_15615_15637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (3)))
{var inst_15604 = (state_15607[(2)]);var inst_15605 = cljs.core.async.close_BANG_.call(null,out);var state_15607__$1 = (function (){var statearr_15616 = state_15607;(statearr_15616[(9)] = inst_15604);
return statearr_15616;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15607__$1,inst_15605);
} else
{if((state_val_15608 === (2)))
{var state_15607__$1 = state_15607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15607__$1,(4),ch);
} else
{if((state_val_15608 === (11)))
{var inst_15587 = (state_15607[(8)]);var inst_15596 = (state_15607[(2)]);var inst_15584 = inst_15587;var state_15607__$1 = (function (){var statearr_15617 = state_15607;(statearr_15617[(7)] = inst_15584);
(statearr_15617[(10)] = inst_15596);
return statearr_15617;
})();var statearr_15618_15638 = state_15607__$1;(statearr_15618_15638[(2)] = null);
(statearr_15618_15638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (9)))
{var inst_15587 = (state_15607[(8)]);var state_15607__$1 = state_15607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15607__$1,(11),out,inst_15587);
} else
{if((state_val_15608 === (5)))
{var inst_15587 = (state_15607[(8)]);var inst_15584 = (state_15607[(7)]);var inst_15591 = cljs.core._EQ_.call(null,inst_15587,inst_15584);var state_15607__$1 = state_15607;if(inst_15591)
{var statearr_15620_15639 = state_15607__$1;(statearr_15620_15639[(1)] = (8));
} else
{var statearr_15621_15640 = state_15607__$1;(statearr_15621_15640[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (10)))
{var inst_15599 = (state_15607[(2)]);var state_15607__$1 = state_15607;var statearr_15622_15641 = state_15607__$1;(statearr_15622_15641[(2)] = inst_15599);
(statearr_15622_15641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15608 === (8)))
{var inst_15584 = (state_15607[(7)]);var tmp15619 = inst_15584;var inst_15584__$1 = tmp15619;var state_15607__$1 = (function (){var statearr_15623 = state_15607;(statearr_15623[(7)] = inst_15584__$1);
return statearr_15623;
})();var statearr_15624_15642 = state_15607__$1;(statearr_15624_15642[(2)] = null);
(statearr_15624_15642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___15632,out))
;return ((function (switch__10262__auto__,c__10327__auto___15632,out){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15628 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15628[(0)] = state_machine__10263__auto__);
(statearr_15628[(1)] = (1));
return statearr_15628;
});
var state_machine__10263__auto____1 = (function (state_15607){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15607);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15629){if((e15629 instanceof Object))
{var ex__10266__auto__ = e15629;var statearr_15630_15643 = state_15607;(statearr_15630_15643[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15644 = state_15607;
state_15607 = G__15644;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15607){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15632,out))
})();var state__10329__auto__ = (function (){var statearr_15631 = f__10328__auto__.call(null);(statearr_15631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15632);
return statearr_15631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15632,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10327__auto___15779 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15779,out){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15779,out){
return (function (state_15749){var state_val_15750 = (state_15749[(1)]);if((state_val_15750 === (7)))
{var inst_15745 = (state_15749[(2)]);var state_15749__$1 = state_15749;var statearr_15751_15780 = state_15749__$1;(statearr_15751_15780[(2)] = inst_15745);
(statearr_15751_15780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (1)))
{var inst_15712 = (new Array(n));var inst_15713 = inst_15712;var inst_15714 = (0);var state_15749__$1 = (function (){var statearr_15752 = state_15749;(statearr_15752[(7)] = inst_15714);
(statearr_15752[(8)] = inst_15713);
return statearr_15752;
})();var statearr_15753_15781 = state_15749__$1;(statearr_15753_15781[(2)] = null);
(statearr_15753_15781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (4)))
{var inst_15717 = (state_15749[(9)]);var inst_15717__$1 = (state_15749[(2)]);var inst_15718 = (inst_15717__$1 == null);var inst_15719 = cljs.core.not.call(null,inst_15718);var state_15749__$1 = (function (){var statearr_15754 = state_15749;(statearr_15754[(9)] = inst_15717__$1);
return statearr_15754;
})();if(inst_15719)
{var statearr_15755_15782 = state_15749__$1;(statearr_15755_15782[(1)] = (5));
} else
{var statearr_15756_15783 = state_15749__$1;(statearr_15756_15783[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (15)))
{var inst_15739 = (state_15749[(2)]);var state_15749__$1 = state_15749;var statearr_15757_15784 = state_15749__$1;(statearr_15757_15784[(2)] = inst_15739);
(statearr_15757_15784[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (13)))
{var state_15749__$1 = state_15749;var statearr_15758_15785 = state_15749__$1;(statearr_15758_15785[(2)] = null);
(statearr_15758_15785[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (6)))
{var inst_15714 = (state_15749[(7)]);var inst_15735 = (inst_15714 > (0));var state_15749__$1 = state_15749;if(cljs.core.truth_(inst_15735))
{var statearr_15759_15786 = state_15749__$1;(statearr_15759_15786[(1)] = (12));
} else
{var statearr_15760_15787 = state_15749__$1;(statearr_15760_15787[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (3)))
{var inst_15747 = (state_15749[(2)]);var state_15749__$1 = state_15749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15749__$1,inst_15747);
} else
{if((state_val_15750 === (12)))
{var inst_15713 = (state_15749[(8)]);var inst_15737 = cljs.core.vec.call(null,inst_15713);var state_15749__$1 = state_15749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15749__$1,(15),out,inst_15737);
} else
{if((state_val_15750 === (2)))
{var state_15749__$1 = state_15749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15749__$1,(4),ch);
} else
{if((state_val_15750 === (11)))
{var inst_15729 = (state_15749[(2)]);var inst_15730 = (new Array(n));var inst_15713 = inst_15730;var inst_15714 = (0);var state_15749__$1 = (function (){var statearr_15761 = state_15749;(statearr_15761[(7)] = inst_15714);
(statearr_15761[(10)] = inst_15729);
(statearr_15761[(8)] = inst_15713);
return statearr_15761;
})();var statearr_15762_15788 = state_15749__$1;(statearr_15762_15788[(2)] = null);
(statearr_15762_15788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (9)))
{var inst_15713 = (state_15749[(8)]);var inst_15727 = cljs.core.vec.call(null,inst_15713);var state_15749__$1 = state_15749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15749__$1,(11),out,inst_15727);
} else
{if((state_val_15750 === (5)))
{var inst_15714 = (state_15749[(7)]);var inst_15722 = (state_15749[(11)]);var inst_15717 = (state_15749[(9)]);var inst_15713 = (state_15749[(8)]);var inst_15721 = (inst_15713[inst_15714] = inst_15717);var inst_15722__$1 = (inst_15714 + (1));var inst_15723 = (inst_15722__$1 < n);var state_15749__$1 = (function (){var statearr_15763 = state_15749;(statearr_15763[(12)] = inst_15721);
(statearr_15763[(11)] = inst_15722__$1);
return statearr_15763;
})();if(cljs.core.truth_(inst_15723))
{var statearr_15764_15789 = state_15749__$1;(statearr_15764_15789[(1)] = (8));
} else
{var statearr_15765_15790 = state_15749__$1;(statearr_15765_15790[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (14)))
{var inst_15742 = (state_15749[(2)]);var inst_15743 = cljs.core.async.close_BANG_.call(null,out);var state_15749__$1 = (function (){var statearr_15767 = state_15749;(statearr_15767[(13)] = inst_15742);
return statearr_15767;
})();var statearr_15768_15791 = state_15749__$1;(statearr_15768_15791[(2)] = inst_15743);
(statearr_15768_15791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (10)))
{var inst_15733 = (state_15749[(2)]);var state_15749__$1 = state_15749;var statearr_15769_15792 = state_15749__$1;(statearr_15769_15792[(2)] = inst_15733);
(statearr_15769_15792[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (8)))
{var inst_15722 = (state_15749[(11)]);var inst_15713 = (state_15749[(8)]);var tmp15766 = inst_15713;var inst_15713__$1 = tmp15766;var inst_15714 = inst_15722;var state_15749__$1 = (function (){var statearr_15770 = state_15749;(statearr_15770[(7)] = inst_15714);
(statearr_15770[(8)] = inst_15713__$1);
return statearr_15770;
})();var statearr_15771_15793 = state_15749__$1;(statearr_15771_15793[(2)] = null);
(statearr_15771_15793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___15779,out))
;return ((function (switch__10262__auto__,c__10327__auto___15779,out){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15775[(0)] = state_machine__10263__auto__);
(statearr_15775[(1)] = (1));
return statearr_15775;
});
var state_machine__10263__auto____1 = (function (state_15749){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15749);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15776){if((e15776 instanceof Object))
{var ex__10266__auto__ = e15776;var statearr_15777_15794 = state_15749;(statearr_15777_15794[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15795 = state_15749;
state_15749 = G__15795;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15749){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15779,out))
})();var state__10329__auto__ = (function (){var statearr_15778 = f__10328__auto__.call(null);(statearr_15778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15779);
return statearr_15778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15779,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10327__auto___15938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___15938,out){
return (function (){var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___15938,out){
return (function (state_15908){var state_val_15909 = (state_15908[(1)]);if((state_val_15909 === (7)))
{var inst_15904 = (state_15908[(2)]);var state_15908__$1 = state_15908;var statearr_15910_15939 = state_15908__$1;(statearr_15910_15939[(2)] = inst_15904);
(statearr_15910_15939[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (1)))
{var inst_15867 = [];var inst_15868 = inst_15867;var inst_15869 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15908__$1 = (function (){var statearr_15911 = state_15908;(statearr_15911[(7)] = inst_15869);
(statearr_15911[(8)] = inst_15868);
return statearr_15911;
})();var statearr_15912_15940 = state_15908__$1;(statearr_15912_15940[(2)] = null);
(statearr_15912_15940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (4)))
{var inst_15872 = (state_15908[(9)]);var inst_15872__$1 = (state_15908[(2)]);var inst_15873 = (inst_15872__$1 == null);var inst_15874 = cljs.core.not.call(null,inst_15873);var state_15908__$1 = (function (){var statearr_15913 = state_15908;(statearr_15913[(9)] = inst_15872__$1);
return statearr_15913;
})();if(inst_15874)
{var statearr_15914_15941 = state_15908__$1;(statearr_15914_15941[(1)] = (5));
} else
{var statearr_15915_15942 = state_15908__$1;(statearr_15915_15942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (15)))
{var inst_15898 = (state_15908[(2)]);var state_15908__$1 = state_15908;var statearr_15916_15943 = state_15908__$1;(statearr_15916_15943[(2)] = inst_15898);
(statearr_15916_15943[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (13)))
{var state_15908__$1 = state_15908;var statearr_15917_15944 = state_15908__$1;(statearr_15917_15944[(2)] = null);
(statearr_15917_15944[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (6)))
{var inst_15868 = (state_15908[(8)]);var inst_15893 = inst_15868.length;var inst_15894 = (inst_15893 > (0));var state_15908__$1 = state_15908;if(cljs.core.truth_(inst_15894))
{var statearr_15918_15945 = state_15908__$1;(statearr_15918_15945[(1)] = (12));
} else
{var statearr_15919_15946 = state_15908__$1;(statearr_15919_15946[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (3)))
{var inst_15906 = (state_15908[(2)]);var state_15908__$1 = state_15908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15908__$1,inst_15906);
} else
{if((state_val_15909 === (12)))
{var inst_15868 = (state_15908[(8)]);var inst_15896 = cljs.core.vec.call(null,inst_15868);var state_15908__$1 = state_15908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15908__$1,(15),out,inst_15896);
} else
{if((state_val_15909 === (2)))
{var state_15908__$1 = state_15908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15908__$1,(4),ch);
} else
{if((state_val_15909 === (11)))
{var inst_15872 = (state_15908[(9)]);var inst_15876 = (state_15908[(10)]);var inst_15886 = (state_15908[(2)]);var inst_15887 = [];var inst_15888 = inst_15887.push(inst_15872);var inst_15868 = inst_15887;var inst_15869 = inst_15876;var state_15908__$1 = (function (){var statearr_15920 = state_15908;(statearr_15920[(11)] = inst_15888);
(statearr_15920[(12)] = inst_15886);
(statearr_15920[(7)] = inst_15869);
(statearr_15920[(8)] = inst_15868);
return statearr_15920;
})();var statearr_15921_15947 = state_15908__$1;(statearr_15921_15947[(2)] = null);
(statearr_15921_15947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (9)))
{var inst_15868 = (state_15908[(8)]);var inst_15884 = cljs.core.vec.call(null,inst_15868);var state_15908__$1 = state_15908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15908__$1,(11),out,inst_15884);
} else
{if((state_val_15909 === (5)))
{var inst_15872 = (state_15908[(9)]);var inst_15876 = (state_15908[(10)]);var inst_15869 = (state_15908[(7)]);var inst_15876__$1 = f.call(null,inst_15872);var inst_15877 = cljs.core._EQ_.call(null,inst_15876__$1,inst_15869);var inst_15878 = cljs.core.keyword_identical_QMARK_.call(null,inst_15869,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15879 = (inst_15877) || (inst_15878);var state_15908__$1 = (function (){var statearr_15922 = state_15908;(statearr_15922[(10)] = inst_15876__$1);
return statearr_15922;
})();if(cljs.core.truth_(inst_15879))
{var statearr_15923_15948 = state_15908__$1;(statearr_15923_15948[(1)] = (8));
} else
{var statearr_15924_15949 = state_15908__$1;(statearr_15924_15949[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (14)))
{var inst_15901 = (state_15908[(2)]);var inst_15902 = cljs.core.async.close_BANG_.call(null,out);var state_15908__$1 = (function (){var statearr_15926 = state_15908;(statearr_15926[(13)] = inst_15901);
return statearr_15926;
})();var statearr_15927_15950 = state_15908__$1;(statearr_15927_15950[(2)] = inst_15902);
(statearr_15927_15950[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (10)))
{var inst_15891 = (state_15908[(2)]);var state_15908__$1 = state_15908;var statearr_15928_15951 = state_15908__$1;(statearr_15928_15951[(2)] = inst_15891);
(statearr_15928_15951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15909 === (8)))
{var inst_15872 = (state_15908[(9)]);var inst_15876 = (state_15908[(10)]);var inst_15868 = (state_15908[(8)]);var inst_15881 = inst_15868.push(inst_15872);var tmp15925 = inst_15868;var inst_15868__$1 = tmp15925;var inst_15869 = inst_15876;var state_15908__$1 = (function (){var statearr_15929 = state_15908;(statearr_15929[(14)] = inst_15881);
(statearr_15929[(7)] = inst_15869);
(statearr_15929[(8)] = inst_15868__$1);
return statearr_15929;
})();var statearr_15930_15952 = state_15908__$1;(statearr_15930_15952[(2)] = null);
(statearr_15930_15952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__10327__auto___15938,out))
;return ((function (switch__10262__auto__,c__10327__auto___15938,out){
return (function() {
var state_machine__10263__auto__ = null;
var state_machine__10263__auto____0 = (function (){var statearr_15934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15934[(0)] = state_machine__10263__auto__);
(statearr_15934[(1)] = (1));
return statearr_15934;
});
var state_machine__10263__auto____1 = (function (state_15908){while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_15908);if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10265__auto__;
}
break;
}
}catch (e15935){if((e15935 instanceof Object))
{var ex__10266__auto__ = e15935;var statearr_15936_15953 = state_15908;(statearr_15936_15953[(5)] = ex__10266__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15954 = state_15908;
state_15908 = G__15954;
continue;
}
} else
{return ret_value__10264__auto__;
}
break;
}
});
state_machine__10263__auto__ = function(state_15908){
switch(arguments.length){
case 0:
return state_machine__10263__auto____0.call(this);
case 1:
return state_machine__10263__auto____1.call(this,state_15908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10263__auto____0;
state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10263__auto____1;
return state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___15938,out))
})();var state__10329__auto__ = (function (){var statearr_15937 = f__10328__auto__.call(null);(statearr_15937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___15938);
return statearr_15937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___15938,out))
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

//# sourceMappingURL=async.js.map