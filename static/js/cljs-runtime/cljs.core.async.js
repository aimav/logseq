goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45034 = arguments.length;
switch (G__45034) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45035 = (function (f,blockable,meta45036){
this.f = f;
this.blockable = blockable;
this.meta45036 = meta45036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45037,meta45036__$1){
var self__ = this;
var _45037__$1 = this;
return (new cljs.core.async.t_cljs$core$async45035(self__.f,self__.blockable,meta45036__$1));
}));

(cljs.core.async.t_cljs$core$async45035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45037){
var self__ = this;
var _45037__$1 = this;
return self__.meta45036;
}));

(cljs.core.async.t_cljs$core$async45035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45036","meta45036",1743571101,null)], null);
}));

(cljs.core.async.t_cljs$core$async45035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45035");

(cljs.core.async.t_cljs$core$async45035.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45035.
 */
cljs.core.async.__GT_t_cljs$core$async45035 = (function cljs$core$async$__GT_t_cljs$core$async45035(f__$1,blockable__$1,meta45036){
return (new cljs.core.async.t_cljs$core$async45035(f__$1,blockable__$1,meta45036));
});

}

return (new cljs.core.async.t_cljs$core$async45035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45040 = arguments.length;
switch (G__45040) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45042 = arguments.length;
switch (G__45042) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45044 = arguments.length;
switch (G__45044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46527 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46527) : fn1.call(null,val_46527));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46527) : fn1.call(null,val_46527));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45046 = arguments.length;
switch (G__45046) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___46529 = n;
var x_46530 = (0);
while(true){
if((x_46530 < n__5633__auto___46529)){
(a[x_46530] = x_46530);

var G__46531 = (x_46530 + (1));
x_46530 = G__46531;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45047 = (function (flag,meta45048){
this.flag = flag;
this.meta45048 = meta45048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45049,meta45048__$1){
var self__ = this;
var _45049__$1 = this;
return (new cljs.core.async.t_cljs$core$async45047(self__.flag,meta45048__$1));
}));

(cljs.core.async.t_cljs$core$async45047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45049){
var self__ = this;
var _45049__$1 = this;
return self__.meta45048;
}));

(cljs.core.async.t_cljs$core$async45047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45048","meta45048",-1768294243,null)], null);
}));

(cljs.core.async.t_cljs$core$async45047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45047");

(cljs.core.async.t_cljs$core$async45047.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45047.
 */
cljs.core.async.__GT_t_cljs$core$async45047 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45047(flag__$1,meta45048){
return (new cljs.core.async.t_cljs$core$async45047(flag__$1,meta45048));
});

}

return (new cljs.core.async.t_cljs$core$async45047(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45050 = (function (flag,cb,meta45051){
this.flag = flag;
this.cb = cb;
this.meta45051 = meta45051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45052,meta45051__$1){
var self__ = this;
var _45052__$1 = this;
return (new cljs.core.async.t_cljs$core$async45050(self__.flag,self__.cb,meta45051__$1));
}));

(cljs.core.async.t_cljs$core$async45050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45052){
var self__ = this;
var _45052__$1 = this;
return self__.meta45051;
}));

(cljs.core.async.t_cljs$core$async45050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45051","meta45051",2135541094,null)], null);
}));

(cljs.core.async.t_cljs$core$async45050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45050");

(cljs.core.async.t_cljs$core$async45050.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45050.
 */
cljs.core.async.__GT_t_cljs$core$async45050 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45050(flag__$1,cb__$1,meta45051){
return (new cljs.core.async.t_cljs$core$async45050(flag__$1,cb__$1,meta45051));
});

}

return (new cljs.core.async.t_cljs$core$async45050(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__45053_SHARP_){
var G__45055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45053_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45055) : fret.call(null,G__45055));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__45054_SHARP_){
var G__45056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45054_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45056) : fret.call(null,G__45056));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46532 = (i + (1));
i = G__46532;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46533 = arguments.length;
var i__5767__auto___46534 = (0);
while(true){
if((i__5767__auto___46534 < len__5766__auto___46533)){
args__5772__auto__.push((arguments[i__5767__auto___46534]));

var G__46535 = (i__5767__auto___46534 + (1));
i__5767__auto___46534 = G__46535;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45059){
var map__45060 = p__45059;
var map__45060__$1 = cljs.core.__destructure_map(map__45060);
var opts = map__45060__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45057){
var G__45058 = cljs.core.first(seq45057);
var seq45057__$1 = cljs.core.next(seq45057);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45058,seq45057__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45062 = arguments.length;
switch (G__45062) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34483__auto___46537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45086){
var state_val_45087 = (state_45086[(1)]);
if((state_val_45087 === (7))){
var inst_45082 = (state_45086[(2)]);
var state_45086__$1 = state_45086;
var statearr_45088_46538 = state_45086__$1;
(statearr_45088_46538[(2)] = inst_45082);

(statearr_45088_46538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (1))){
var state_45086__$1 = state_45086;
var statearr_45089_46539 = state_45086__$1;
(statearr_45089_46539[(2)] = null);

(statearr_45089_46539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (4))){
var inst_45065 = (state_45086[(7)]);
var inst_45065__$1 = (state_45086[(2)]);
var inst_45066 = (inst_45065__$1 == null);
var state_45086__$1 = (function (){var statearr_45090 = state_45086;
(statearr_45090[(7)] = inst_45065__$1);

return statearr_45090;
})();
if(cljs.core.truth_(inst_45066)){
var statearr_45091_46540 = state_45086__$1;
(statearr_45091_46540[(1)] = (5));

} else {
var statearr_45092_46541 = state_45086__$1;
(statearr_45092_46541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (13))){
var state_45086__$1 = state_45086;
var statearr_45093_46542 = state_45086__$1;
(statearr_45093_46542[(2)] = null);

(statearr_45093_46542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (6))){
var inst_45065 = (state_45086[(7)]);
var state_45086__$1 = state_45086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45086__$1,(11),to,inst_45065);
} else {
if((state_val_45087 === (3))){
var inst_45084 = (state_45086[(2)]);
var state_45086__$1 = state_45086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45086__$1,inst_45084);
} else {
if((state_val_45087 === (12))){
var state_45086__$1 = state_45086;
var statearr_45094_46543 = state_45086__$1;
(statearr_45094_46543[(2)] = null);

(statearr_45094_46543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (2))){
var state_45086__$1 = state_45086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45086__$1,(4),from);
} else {
if((state_val_45087 === (11))){
var inst_45075 = (state_45086[(2)]);
var state_45086__$1 = state_45086;
if(cljs.core.truth_(inst_45075)){
var statearr_45095_46544 = state_45086__$1;
(statearr_45095_46544[(1)] = (12));

} else {
var statearr_45096_46545 = state_45086__$1;
(statearr_45096_46545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (9))){
var state_45086__$1 = state_45086;
var statearr_45097_46546 = state_45086__$1;
(statearr_45097_46546[(2)] = null);

(statearr_45097_46546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (5))){
var state_45086__$1 = state_45086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45098_46547 = state_45086__$1;
(statearr_45098_46547[(1)] = (8));

} else {
var statearr_45099_46548 = state_45086__$1;
(statearr_45099_46548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (14))){
var inst_45080 = (state_45086[(2)]);
var state_45086__$1 = state_45086;
var statearr_45100_46549 = state_45086__$1;
(statearr_45100_46549[(2)] = inst_45080);

(statearr_45100_46549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (10))){
var inst_45072 = (state_45086[(2)]);
var state_45086__$1 = state_45086;
var statearr_45101_46550 = state_45086__$1;
(statearr_45101_46550[(2)] = inst_45072);

(statearr_45101_46550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45087 === (8))){
var inst_45069 = cljs.core.async.close_BANG_(to);
var state_45086__$1 = state_45086;
var statearr_45102_46551 = state_45086__$1;
(statearr_45102_46551[(2)] = inst_45069);

(statearr_45102_46551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_45103 = [null,null,null,null,null,null,null,null];
(statearr_45103[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_45103[(1)] = (1));

return statearr_45103;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_45086){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45086);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45104){var ex__34382__auto__ = e45104;
var statearr_45105_46552 = state_45086;
(statearr_45105_46552[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45086[(4)]))){
var statearr_45106_46553 = state_45086;
(statearr_45106_46553[(1)] = cljs.core.first((state_45086[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46554 = state_45086;
state_45086 = G__46554;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_45086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_45086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45107 = f__34484__auto__();
(statearr_45107[(6)] = c__34483__auto___46537);

return statearr_45107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__45108){
var vec__45109 = p__45108;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(1),null);
var job = vec__45109;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34483__auto___46555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45116){
var state_val_45117 = (state_45116[(1)]);
if((state_val_45117 === (1))){
var state_45116__$1 = state_45116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45116__$1,(2),res,v);
} else {
if((state_val_45117 === (2))){
var inst_45113 = (state_45116[(2)]);
var inst_45114 = cljs.core.async.close_BANG_(res);
var state_45116__$1 = (function (){var statearr_45118 = state_45116;
(statearr_45118[(7)] = inst_45113);

return statearr_45118;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45116__$1,inst_45114);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_45119 = [null,null,null,null,null,null,null,null];
(statearr_45119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_45119[(1)] = (1));

return statearr_45119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_45116){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45116);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45120){var ex__34382__auto__ = e45120;
var statearr_45121_46556 = state_45116;
(statearr_45121_46556[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45116[(4)]))){
var statearr_45122_46557 = state_45116;
(statearr_45122_46557[(1)] = cljs.core.first((state_45116[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46558 = state_45116;
state_45116 = G__46558;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_45116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_45116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45123 = f__34484__auto__();
(statearr_45123[(6)] = c__34483__auto___46555);

return statearr_45123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45124){
var vec__45125 = p__45124;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45125,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45125,(1),null);
var job = vec__45125;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___46559 = n;
var __46560 = (0);
while(true){
if((__46560 < n__5633__auto___46559)){
var G__45128_46561 = type;
var G__45128_46562__$1 = (((G__45128_46561 instanceof cljs.core.Keyword))?G__45128_46561.fqn:null);
switch (G__45128_46562__$1) {
case "compute":
var c__34483__auto___46564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46560,c__34483__auto___46564,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async){
return (function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = ((function (__46560,c__34483__auto___46564,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async){
return (function (state_45141){
var state_val_45142 = (state_45141[(1)]);
if((state_val_45142 === (1))){
var state_45141__$1 = state_45141;
var statearr_45143_46565 = state_45141__$1;
(statearr_45143_46565[(2)] = null);

(statearr_45143_46565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45142 === (2))){
var state_45141__$1 = state_45141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45141__$1,(4),jobs);
} else {
if((state_val_45142 === (3))){
var inst_45139 = (state_45141[(2)]);
var state_45141__$1 = state_45141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45141__$1,inst_45139);
} else {
if((state_val_45142 === (4))){
var inst_45131 = (state_45141[(2)]);
var inst_45132 = process__$1(inst_45131);
var state_45141__$1 = state_45141;
if(cljs.core.truth_(inst_45132)){
var statearr_45144_46566 = state_45141__$1;
(statearr_45144_46566[(1)] = (5));

} else {
var statearr_45145_46567 = state_45141__$1;
(statearr_45145_46567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45142 === (5))){
var state_45141__$1 = state_45141;
var statearr_45146_46568 = state_45141__$1;
(statearr_45146_46568[(2)] = null);

(statearr_45146_46568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45142 === (6))){
var state_45141__$1 = state_45141;
var statearr_45147_46569 = state_45141__$1;
(statearr_45147_46569[(2)] = null);

(statearr_45147_46569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45142 === (7))){
var inst_45137 = (state_45141[(2)]);
var state_45141__$1 = state_45141;
var statearr_45148_46570 = state_45141__$1;
(statearr_45148_46570[(2)] = inst_45137);

(statearr_45148_46570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46560,c__34483__auto___46564,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async))
;
return ((function (__46560,switch__34378__auto__,c__34483__auto___46564,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_45149 = [null,null,null,null,null,null,null];
(statearr_45149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_45149[(1)] = (1));

return statearr_45149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_45141){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45141);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45150){var ex__34382__auto__ = e45150;
var statearr_45151_46571 = state_45141;
(statearr_45151_46571[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45141[(4)]))){
var statearr_45152_46572 = state_45141;
(statearr_45152_46572[(1)] = cljs.core.first((state_45141[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46573 = state_45141;
state_45141 = G__46573;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_45141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_45141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(__46560,switch__34378__auto__,c__34483__auto___46564,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async))
})();
var state__34485__auto__ = (function (){var statearr_45153 = f__34484__auto__();
(statearr_45153[(6)] = c__34483__auto___46564);

return statearr_45153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
});})(__46560,c__34483__auto___46564,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async))
);


break;
case "async":
var c__34483__auto___46574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46560,c__34483__auto___46574,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async){
return (function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = ((function (__46560,c__34483__auto___46574,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async){
return (function (state_45166){
var state_val_45167 = (state_45166[(1)]);
if((state_val_45167 === (1))){
var state_45166__$1 = state_45166;
var statearr_45168_46575 = state_45166__$1;
(statearr_45168_46575[(2)] = null);

(statearr_45168_46575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (2))){
var state_45166__$1 = state_45166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45166__$1,(4),jobs);
} else {
if((state_val_45167 === (3))){
var inst_45164 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45166__$1,inst_45164);
} else {
if((state_val_45167 === (4))){
var inst_45156 = (state_45166[(2)]);
var inst_45157 = async(inst_45156);
var state_45166__$1 = state_45166;
if(cljs.core.truth_(inst_45157)){
var statearr_45169_46576 = state_45166__$1;
(statearr_45169_46576[(1)] = (5));

} else {
var statearr_45170_46577 = state_45166__$1;
(statearr_45170_46577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (5))){
var state_45166__$1 = state_45166;
var statearr_45171_46578 = state_45166__$1;
(statearr_45171_46578[(2)] = null);

(statearr_45171_46578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (6))){
var state_45166__$1 = state_45166;
var statearr_45172_46579 = state_45166__$1;
(statearr_45172_46579[(2)] = null);

(statearr_45172_46579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (7))){
var inst_45162 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
var statearr_45173_46580 = state_45166__$1;
(statearr_45173_46580[(2)] = inst_45162);

(statearr_45173_46580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46560,c__34483__auto___46574,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async))
;
return ((function (__46560,switch__34378__auto__,c__34483__auto___46574,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_45174 = [null,null,null,null,null,null,null];
(statearr_45174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_45174[(1)] = (1));

return statearr_45174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_45166){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45166);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45175){var ex__34382__auto__ = e45175;
var statearr_45176_46581 = state_45166;
(statearr_45176_46581[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45166[(4)]))){
var statearr_45177_46582 = state_45166;
(statearr_45177_46582[(1)] = cljs.core.first((state_45166[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46583 = state_45166;
state_45166 = G__46583;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_45166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_45166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(__46560,switch__34378__auto__,c__34483__auto___46574,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async))
})();
var state__34485__auto__ = (function (){var statearr_45178 = f__34484__auto__();
(statearr_45178[(6)] = c__34483__auto___46574);

return statearr_45178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
});})(__46560,c__34483__auto___46574,G__45128_46561,G__45128_46562__$1,n__5633__auto___46559,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45128_46562__$1)].join('')));

}

var G__46584 = (__46560 + (1));
__46560 = G__46584;
continue;
} else {
}
break;
}

var c__34483__auto___46585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45200){
var state_val_45201 = (state_45200[(1)]);
if((state_val_45201 === (7))){
var inst_45196 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45202_46586 = state_45200__$1;
(statearr_45202_46586[(2)] = inst_45196);

(statearr_45202_46586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (1))){
var state_45200__$1 = state_45200;
var statearr_45203_46587 = state_45200__$1;
(statearr_45203_46587[(2)] = null);

(statearr_45203_46587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (4))){
var inst_45181 = (state_45200[(7)]);
var inst_45181__$1 = (state_45200[(2)]);
var inst_45182 = (inst_45181__$1 == null);
var state_45200__$1 = (function (){var statearr_45204 = state_45200;
(statearr_45204[(7)] = inst_45181__$1);

return statearr_45204;
})();
if(cljs.core.truth_(inst_45182)){
var statearr_45205_46588 = state_45200__$1;
(statearr_45205_46588[(1)] = (5));

} else {
var statearr_45206_46589 = state_45200__$1;
(statearr_45206_46589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (6))){
var inst_45181 = (state_45200[(7)]);
var inst_45186 = (state_45200[(8)]);
var inst_45186__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45188 = [inst_45181,inst_45186__$1];
var inst_45189 = (new cljs.core.PersistentVector(null,2,(5),inst_45187,inst_45188,null));
var state_45200__$1 = (function (){var statearr_45207 = state_45200;
(statearr_45207[(8)] = inst_45186__$1);

return statearr_45207;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45200__$1,(8),jobs,inst_45189);
} else {
if((state_val_45201 === (3))){
var inst_45198 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45200__$1,inst_45198);
} else {
if((state_val_45201 === (2))){
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45200__$1,(4),from);
} else {
if((state_val_45201 === (9))){
var inst_45193 = (state_45200[(2)]);
var state_45200__$1 = (function (){var statearr_45208 = state_45200;
(statearr_45208[(9)] = inst_45193);

return statearr_45208;
})();
var statearr_45209_46590 = state_45200__$1;
(statearr_45209_46590[(2)] = null);

(statearr_45209_46590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (5))){
var inst_45184 = cljs.core.async.close_BANG_(jobs);
var state_45200__$1 = state_45200;
var statearr_45210_46591 = state_45200__$1;
(statearr_45210_46591[(2)] = inst_45184);

(statearr_45210_46591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (8))){
var inst_45186 = (state_45200[(8)]);
var inst_45191 = (state_45200[(2)]);
var state_45200__$1 = (function (){var statearr_45211 = state_45200;
(statearr_45211[(10)] = inst_45191);

return statearr_45211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45200__$1,(9),results,inst_45186);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_45212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_45212[(1)] = (1));

return statearr_45212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_45200){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45200);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45213){var ex__34382__auto__ = e45213;
var statearr_45214_46592 = state_45200;
(statearr_45214_46592[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45200[(4)]))){
var statearr_45215_46593 = state_45200;
(statearr_45215_46593[(1)] = cljs.core.first((state_45200[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46594 = state_45200;
state_45200 = G__46594;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_45200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_45200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45216 = f__34484__auto__();
(statearr_45216[(6)] = c__34483__auto___46585);

return statearr_45216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45254){
var state_val_45255 = (state_45254[(1)]);
if((state_val_45255 === (7))){
var inst_45250 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
var statearr_45256_46595 = state_45254__$1;
(statearr_45256_46595[(2)] = inst_45250);

(statearr_45256_46595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (20))){
var state_45254__$1 = state_45254;
var statearr_45257_46596 = state_45254__$1;
(statearr_45257_46596[(2)] = null);

(statearr_45257_46596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (1))){
var state_45254__$1 = state_45254;
var statearr_45258_46597 = state_45254__$1;
(statearr_45258_46597[(2)] = null);

(statearr_45258_46597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (4))){
var inst_45219 = (state_45254[(7)]);
var inst_45219__$1 = (state_45254[(2)]);
var inst_45220 = (inst_45219__$1 == null);
var state_45254__$1 = (function (){var statearr_45259 = state_45254;
(statearr_45259[(7)] = inst_45219__$1);

return statearr_45259;
})();
if(cljs.core.truth_(inst_45220)){
var statearr_45260_46598 = state_45254__$1;
(statearr_45260_46598[(1)] = (5));

} else {
var statearr_45261_46599 = state_45254__$1;
(statearr_45261_46599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (15))){
var inst_45232 = (state_45254[(8)]);
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45254__$1,(18),to,inst_45232);
} else {
if((state_val_45255 === (21))){
var inst_45245 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
var statearr_45262_46600 = state_45254__$1;
(statearr_45262_46600[(2)] = inst_45245);

(statearr_45262_46600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (13))){
var inst_45247 = (state_45254[(2)]);
var state_45254__$1 = (function (){var statearr_45263 = state_45254;
(statearr_45263[(9)] = inst_45247);

return statearr_45263;
})();
var statearr_45264_46601 = state_45254__$1;
(statearr_45264_46601[(2)] = null);

(statearr_45264_46601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (6))){
var inst_45219 = (state_45254[(7)]);
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45254__$1,(11),inst_45219);
} else {
if((state_val_45255 === (17))){
var inst_45240 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
if(cljs.core.truth_(inst_45240)){
var statearr_45265_46602 = state_45254__$1;
(statearr_45265_46602[(1)] = (19));

} else {
var statearr_45266_46603 = state_45254__$1;
(statearr_45266_46603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (3))){
var inst_45252 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45254__$1,inst_45252);
} else {
if((state_val_45255 === (12))){
var inst_45229 = (state_45254[(10)]);
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45254__$1,(14),inst_45229);
} else {
if((state_val_45255 === (2))){
var state_45254__$1 = state_45254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45254__$1,(4),results);
} else {
if((state_val_45255 === (19))){
var state_45254__$1 = state_45254;
var statearr_45267_46604 = state_45254__$1;
(statearr_45267_46604[(2)] = null);

(statearr_45267_46604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (11))){
var inst_45229 = (state_45254[(2)]);
var state_45254__$1 = (function (){var statearr_45268 = state_45254;
(statearr_45268[(10)] = inst_45229);

return statearr_45268;
})();
var statearr_45269_46605 = state_45254__$1;
(statearr_45269_46605[(2)] = null);

(statearr_45269_46605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (9))){
var state_45254__$1 = state_45254;
var statearr_45270_46606 = state_45254__$1;
(statearr_45270_46606[(2)] = null);

(statearr_45270_46606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (5))){
var state_45254__$1 = state_45254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45271_46607 = state_45254__$1;
(statearr_45271_46607[(1)] = (8));

} else {
var statearr_45272_46608 = state_45254__$1;
(statearr_45272_46608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (14))){
var inst_45232 = (state_45254[(8)]);
var inst_45234 = (state_45254[(11)]);
var inst_45232__$1 = (state_45254[(2)]);
var inst_45233 = (inst_45232__$1 == null);
var inst_45234__$1 = cljs.core.not(inst_45233);
var state_45254__$1 = (function (){var statearr_45273 = state_45254;
(statearr_45273[(8)] = inst_45232__$1);

(statearr_45273[(11)] = inst_45234__$1);

return statearr_45273;
})();
if(inst_45234__$1){
var statearr_45274_46609 = state_45254__$1;
(statearr_45274_46609[(1)] = (15));

} else {
var statearr_45275_46610 = state_45254__$1;
(statearr_45275_46610[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (16))){
var inst_45234 = (state_45254[(11)]);
var state_45254__$1 = state_45254;
var statearr_45276_46611 = state_45254__$1;
(statearr_45276_46611[(2)] = inst_45234);

(statearr_45276_46611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (10))){
var inst_45226 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
var statearr_45277_46612 = state_45254__$1;
(statearr_45277_46612[(2)] = inst_45226);

(statearr_45277_46612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (18))){
var inst_45237 = (state_45254[(2)]);
var state_45254__$1 = state_45254;
var statearr_45278_46613 = state_45254__$1;
(statearr_45278_46613[(2)] = inst_45237);

(statearr_45278_46613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45255 === (8))){
var inst_45223 = cljs.core.async.close_BANG_(to);
var state_45254__$1 = state_45254;
var statearr_45279_46614 = state_45254__$1;
(statearr_45279_46614[(2)] = inst_45223);

(statearr_45279_46614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_45280 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_45280[(1)] = (1));

return statearr_45280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_45254){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45254);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45281){var ex__34382__auto__ = e45281;
var statearr_45282_46615 = state_45254;
(statearr_45282_46615[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45254[(4)]))){
var statearr_45283_46616 = state_45254;
(statearr_45283_46616[(1)] = cljs.core.first((state_45254[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46617 = state_45254;
state_45254 = G__46617;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_45254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_45254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45284 = f__34484__auto__();
(statearr_45284[(6)] = c__34483__auto__);

return statearr_45284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45286 = arguments.length;
switch (G__45286) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45288 = arguments.length;
switch (G__45288) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45290 = arguments.length;
switch (G__45290) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34483__auto___46621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45316){
var state_val_45317 = (state_45316[(1)]);
if((state_val_45317 === (7))){
var inst_45312 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
var statearr_45318_46622 = state_45316__$1;
(statearr_45318_46622[(2)] = inst_45312);

(statearr_45318_46622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (1))){
var state_45316__$1 = state_45316;
var statearr_45319_46623 = state_45316__$1;
(statearr_45319_46623[(2)] = null);

(statearr_45319_46623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (4))){
var inst_45293 = (state_45316[(7)]);
var inst_45293__$1 = (state_45316[(2)]);
var inst_45294 = (inst_45293__$1 == null);
var state_45316__$1 = (function (){var statearr_45320 = state_45316;
(statearr_45320[(7)] = inst_45293__$1);

return statearr_45320;
})();
if(cljs.core.truth_(inst_45294)){
var statearr_45321_46624 = state_45316__$1;
(statearr_45321_46624[(1)] = (5));

} else {
var statearr_45322_46625 = state_45316__$1;
(statearr_45322_46625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (13))){
var state_45316__$1 = state_45316;
var statearr_45323_46626 = state_45316__$1;
(statearr_45323_46626[(2)] = null);

(statearr_45323_46626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (6))){
var inst_45293 = (state_45316[(7)]);
var inst_45299 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45293) : p.call(null,inst_45293));
var state_45316__$1 = state_45316;
if(cljs.core.truth_(inst_45299)){
var statearr_45324_46627 = state_45316__$1;
(statearr_45324_46627[(1)] = (9));

} else {
var statearr_45325_46628 = state_45316__$1;
(statearr_45325_46628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (3))){
var inst_45314 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45316__$1,inst_45314);
} else {
if((state_val_45317 === (12))){
var state_45316__$1 = state_45316;
var statearr_45326_46629 = state_45316__$1;
(statearr_45326_46629[(2)] = null);

(statearr_45326_46629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (2))){
var state_45316__$1 = state_45316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45316__$1,(4),ch);
} else {
if((state_val_45317 === (11))){
var inst_45293 = (state_45316[(7)]);
var inst_45303 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45316__$1,(8),inst_45303,inst_45293);
} else {
if((state_val_45317 === (9))){
var state_45316__$1 = state_45316;
var statearr_45327_46630 = state_45316__$1;
(statearr_45327_46630[(2)] = tc);

(statearr_45327_46630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (5))){
var inst_45296 = cljs.core.async.close_BANG_(tc);
var inst_45297 = cljs.core.async.close_BANG_(fc);
var state_45316__$1 = (function (){var statearr_45328 = state_45316;
(statearr_45328[(8)] = inst_45296);

return statearr_45328;
})();
var statearr_45329_46631 = state_45316__$1;
(statearr_45329_46631[(2)] = inst_45297);

(statearr_45329_46631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (14))){
var inst_45310 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
var statearr_45330_46632 = state_45316__$1;
(statearr_45330_46632[(2)] = inst_45310);

(statearr_45330_46632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (10))){
var state_45316__$1 = state_45316;
var statearr_45331_46633 = state_45316__$1;
(statearr_45331_46633[(2)] = fc);

(statearr_45331_46633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (8))){
var inst_45305 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
if(cljs.core.truth_(inst_45305)){
var statearr_45332_46634 = state_45316__$1;
(statearr_45332_46634[(1)] = (12));

} else {
var statearr_45333_46635 = state_45316__$1;
(statearr_45333_46635[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_45334 = [null,null,null,null,null,null,null,null,null];
(statearr_45334[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_45334[(1)] = (1));

return statearr_45334;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_45316){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45316);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45335){var ex__34382__auto__ = e45335;
var statearr_45336_46636 = state_45316;
(statearr_45336_46636[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45316[(4)]))){
var statearr_45337_46637 = state_45316;
(statearr_45337_46637[(1)] = cljs.core.first((state_45316[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46638 = state_45316;
state_45316 = G__46638;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_45316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_45316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45338 = f__34484__auto__();
(statearr_45338[(6)] = c__34483__auto___46621);

return statearr_45338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45360){
var state_val_45361 = (state_45360[(1)]);
if((state_val_45361 === (7))){
var inst_45356 = (state_45360[(2)]);
var state_45360__$1 = state_45360;
var statearr_45362_46639 = state_45360__$1;
(statearr_45362_46639[(2)] = inst_45356);

(statearr_45362_46639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (1))){
var inst_45339 = init;
var inst_45340 = inst_45339;
var state_45360__$1 = (function (){var statearr_45363 = state_45360;
(statearr_45363[(7)] = inst_45340);

return statearr_45363;
})();
var statearr_45364_46640 = state_45360__$1;
(statearr_45364_46640[(2)] = null);

(statearr_45364_46640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (4))){
var inst_45343 = (state_45360[(8)]);
var inst_45343__$1 = (state_45360[(2)]);
var inst_45344 = (inst_45343__$1 == null);
var state_45360__$1 = (function (){var statearr_45365 = state_45360;
(statearr_45365[(8)] = inst_45343__$1);

return statearr_45365;
})();
if(cljs.core.truth_(inst_45344)){
var statearr_45366_46641 = state_45360__$1;
(statearr_45366_46641[(1)] = (5));

} else {
var statearr_45367_46642 = state_45360__$1;
(statearr_45367_46642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (6))){
var inst_45340 = (state_45360[(7)]);
var inst_45343 = (state_45360[(8)]);
var inst_45347 = (state_45360[(9)]);
var inst_45347__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45340,inst_45343) : f.call(null,inst_45340,inst_45343));
var inst_45348 = cljs.core.reduced_QMARK_(inst_45347__$1);
var state_45360__$1 = (function (){var statearr_45368 = state_45360;
(statearr_45368[(9)] = inst_45347__$1);

return statearr_45368;
})();
if(inst_45348){
var statearr_45369_46643 = state_45360__$1;
(statearr_45369_46643[(1)] = (8));

} else {
var statearr_45370_46644 = state_45360__$1;
(statearr_45370_46644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (3))){
var inst_45358 = (state_45360[(2)]);
var state_45360__$1 = state_45360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45360__$1,inst_45358);
} else {
if((state_val_45361 === (2))){
var state_45360__$1 = state_45360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45360__$1,(4),ch);
} else {
if((state_val_45361 === (9))){
var inst_45347 = (state_45360[(9)]);
var inst_45340 = inst_45347;
var state_45360__$1 = (function (){var statearr_45371 = state_45360;
(statearr_45371[(7)] = inst_45340);

return statearr_45371;
})();
var statearr_45372_46645 = state_45360__$1;
(statearr_45372_46645[(2)] = null);

(statearr_45372_46645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (5))){
var inst_45340 = (state_45360[(7)]);
var state_45360__$1 = state_45360;
var statearr_45373_46646 = state_45360__$1;
(statearr_45373_46646[(2)] = inst_45340);

(statearr_45373_46646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (10))){
var inst_45354 = (state_45360[(2)]);
var state_45360__$1 = state_45360;
var statearr_45374_46647 = state_45360__$1;
(statearr_45374_46647[(2)] = inst_45354);

(statearr_45374_46647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45361 === (8))){
var inst_45347 = (state_45360[(9)]);
var inst_45350 = cljs.core.deref(inst_45347);
var state_45360__$1 = state_45360;
var statearr_45375_46648 = state_45360__$1;
(statearr_45375_46648[(2)] = inst_45350);

(statearr_45375_46648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34379__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34379__auto____0 = (function (){
var statearr_45376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45376[(0)] = cljs$core$async$reduce_$_state_machine__34379__auto__);

(statearr_45376[(1)] = (1));

return statearr_45376;
});
var cljs$core$async$reduce_$_state_machine__34379__auto____1 = (function (state_45360){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45360);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45377){var ex__34382__auto__ = e45377;
var statearr_45378_46649 = state_45360;
(statearr_45378_46649[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45360[(4)]))){
var statearr_45379_46650 = state_45360;
(statearr_45379_46650[(1)] = cljs.core.first((state_45360[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46651 = state_45360;
state_45360 = G__46651;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34379__auto__ = function(state_45360){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34379__auto____1.call(this,state_45360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34379__auto____0;
cljs$core$async$reduce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34379__auto____1;
return cljs$core$async$reduce_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45380 = f__34484__auto__();
(statearr_45380[(6)] = c__34483__auto__);

return statearr_45380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45386){
var state_val_45387 = (state_45386[(1)]);
if((state_val_45387 === (1))){
var inst_45381 = cljs.core.async.reduce(f__$1,init,ch);
var state_45386__$1 = state_45386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45386__$1,(2),inst_45381);
} else {
if((state_val_45387 === (2))){
var inst_45383 = (state_45386[(2)]);
var inst_45384 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45383) : f__$1.call(null,inst_45383));
var state_45386__$1 = state_45386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45386__$1,inst_45384);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34379__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34379__auto____0 = (function (){
var statearr_45388 = [null,null,null,null,null,null,null];
(statearr_45388[(0)] = cljs$core$async$transduce_$_state_machine__34379__auto__);

(statearr_45388[(1)] = (1));

return statearr_45388;
});
var cljs$core$async$transduce_$_state_machine__34379__auto____1 = (function (state_45386){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45386);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45389){var ex__34382__auto__ = e45389;
var statearr_45390_46652 = state_45386;
(statearr_45390_46652[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45386[(4)]))){
var statearr_45391_46653 = state_45386;
(statearr_45391_46653[(1)] = cljs.core.first((state_45386[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46654 = state_45386;
state_45386 = G__46654;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34379__auto__ = function(state_45386){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34379__auto____1.call(this,state_45386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34379__auto____0;
cljs$core$async$transduce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34379__auto____1;
return cljs$core$async$transduce_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45392 = f__34484__auto__();
(statearr_45392[(6)] = c__34483__auto__);

return statearr_45392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45394 = arguments.length;
switch (G__45394) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45419){
var state_val_45420 = (state_45419[(1)]);
if((state_val_45420 === (7))){
var inst_45401 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
var statearr_45421_46656 = state_45419__$1;
(statearr_45421_46656[(2)] = inst_45401);

(statearr_45421_46656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (1))){
var inst_45395 = cljs.core.seq(coll);
var inst_45396 = inst_45395;
var state_45419__$1 = (function (){var statearr_45422 = state_45419;
(statearr_45422[(7)] = inst_45396);

return statearr_45422;
})();
var statearr_45423_46657 = state_45419__$1;
(statearr_45423_46657[(2)] = null);

(statearr_45423_46657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (4))){
var inst_45396 = (state_45419[(7)]);
var inst_45399 = cljs.core.first(inst_45396);
var state_45419__$1 = state_45419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45419__$1,(7),ch,inst_45399);
} else {
if((state_val_45420 === (13))){
var inst_45413 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
var statearr_45424_46658 = state_45419__$1;
(statearr_45424_46658[(2)] = inst_45413);

(statearr_45424_46658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (6))){
var inst_45404 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
if(cljs.core.truth_(inst_45404)){
var statearr_45425_46659 = state_45419__$1;
(statearr_45425_46659[(1)] = (8));

} else {
var statearr_45426_46660 = state_45419__$1;
(statearr_45426_46660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (3))){
var inst_45417 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45419__$1,inst_45417);
} else {
if((state_val_45420 === (12))){
var state_45419__$1 = state_45419;
var statearr_45427_46661 = state_45419__$1;
(statearr_45427_46661[(2)] = null);

(statearr_45427_46661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (2))){
var inst_45396 = (state_45419[(7)]);
var state_45419__$1 = state_45419;
if(cljs.core.truth_(inst_45396)){
var statearr_45428_46662 = state_45419__$1;
(statearr_45428_46662[(1)] = (4));

} else {
var statearr_45429_46663 = state_45419__$1;
(statearr_45429_46663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (11))){
var inst_45410 = cljs.core.async.close_BANG_(ch);
var state_45419__$1 = state_45419;
var statearr_45430_46664 = state_45419__$1;
(statearr_45430_46664[(2)] = inst_45410);

(statearr_45430_46664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (9))){
var state_45419__$1 = state_45419;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45431_46665 = state_45419__$1;
(statearr_45431_46665[(1)] = (11));

} else {
var statearr_45432_46666 = state_45419__$1;
(statearr_45432_46666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (5))){
var inst_45396 = (state_45419[(7)]);
var state_45419__$1 = state_45419;
var statearr_45433_46667 = state_45419__$1;
(statearr_45433_46667[(2)] = inst_45396);

(statearr_45433_46667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (10))){
var inst_45415 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
var statearr_45434_46668 = state_45419__$1;
(statearr_45434_46668[(2)] = inst_45415);

(statearr_45434_46668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (8))){
var inst_45396 = (state_45419[(7)]);
var inst_45406 = cljs.core.next(inst_45396);
var inst_45396__$1 = inst_45406;
var state_45419__$1 = (function (){var statearr_45435 = state_45419;
(statearr_45435[(7)] = inst_45396__$1);

return statearr_45435;
})();
var statearr_45436_46669 = state_45419__$1;
(statearr_45436_46669[(2)] = null);

(statearr_45436_46669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_45437 = [null,null,null,null,null,null,null,null];
(statearr_45437[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_45437[(1)] = (1));

return statearr_45437;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_45419){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45419);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45438){var ex__34382__auto__ = e45438;
var statearr_45439_46670 = state_45419;
(statearr_45439_46670[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45419[(4)]))){
var statearr_45440_46671 = state_45419;
(statearr_45440_46671[(1)] = cljs.core.first((state_45419[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46672 = state_45419;
state_45419 = G__46672;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_45419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_45419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45441 = f__34484__auto__();
(statearr_45441[(6)] = c__34483__auto__);

return statearr_45441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45443 = arguments.length;
switch (G__45443) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_46674 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46674(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46675 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46675(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46676 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46676(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46677 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46677(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45444 = (function (ch,cs,meta45445){
this.ch = ch;
this.cs = cs;
this.meta45445 = meta45445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45446,meta45445__$1){
var self__ = this;
var _45446__$1 = this;
return (new cljs.core.async.t_cljs$core$async45444(self__.ch,self__.cs,meta45445__$1));
}));

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45446){
var self__ = this;
var _45446__$1 = this;
return self__.meta45445;
}));

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45444.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45445","meta45445",-1967539276,null)], null);
}));

(cljs.core.async.t_cljs$core$async45444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45444");

(cljs.core.async.t_cljs$core$async45444.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45444.
 */
cljs.core.async.__GT_t_cljs$core$async45444 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45444(ch__$1,cs__$1,meta45445){
return (new cljs.core.async.t_cljs$core$async45444(ch__$1,cs__$1,meta45445));
});

}

return (new cljs.core.async.t_cljs$core$async45444(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34483__auto___46678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45579){
var state_val_45580 = (state_45579[(1)]);
if((state_val_45580 === (7))){
var inst_45575 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45581_46679 = state_45579__$1;
(statearr_45581_46679[(2)] = inst_45575);

(statearr_45581_46679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (20))){
var inst_45480 = (state_45579[(7)]);
var inst_45492 = cljs.core.first(inst_45480);
var inst_45493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45492,(0),null);
var inst_45494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45492,(1),null);
var state_45579__$1 = (function (){var statearr_45582 = state_45579;
(statearr_45582[(8)] = inst_45493);

return statearr_45582;
})();
if(cljs.core.truth_(inst_45494)){
var statearr_45583_46680 = state_45579__$1;
(statearr_45583_46680[(1)] = (22));

} else {
var statearr_45584_46681 = state_45579__$1;
(statearr_45584_46681[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (27))){
var inst_45522 = (state_45579[(9)]);
var inst_45524 = (state_45579[(10)]);
var inst_45529 = (state_45579[(11)]);
var inst_45449 = (state_45579[(12)]);
var inst_45529__$1 = cljs.core._nth(inst_45522,inst_45524);
var inst_45530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45529__$1,inst_45449,done);
var state_45579__$1 = (function (){var statearr_45585 = state_45579;
(statearr_45585[(11)] = inst_45529__$1);

return statearr_45585;
})();
if(cljs.core.truth_(inst_45530)){
var statearr_45586_46682 = state_45579__$1;
(statearr_45586_46682[(1)] = (30));

} else {
var statearr_45587_46683 = state_45579__$1;
(statearr_45587_46683[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (1))){
var state_45579__$1 = state_45579;
var statearr_45588_46684 = state_45579__$1;
(statearr_45588_46684[(2)] = null);

(statearr_45588_46684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (24))){
var inst_45480 = (state_45579[(7)]);
var inst_45499 = (state_45579[(2)]);
var inst_45500 = cljs.core.next(inst_45480);
var inst_45458 = inst_45500;
var inst_45459 = null;
var inst_45460 = (0);
var inst_45461 = (0);
var state_45579__$1 = (function (){var statearr_45589 = state_45579;
(statearr_45589[(13)] = inst_45499);

(statearr_45589[(14)] = inst_45458);

(statearr_45589[(15)] = inst_45459);

(statearr_45589[(16)] = inst_45460);

(statearr_45589[(17)] = inst_45461);

return statearr_45589;
})();
var statearr_45590_46685 = state_45579__$1;
(statearr_45590_46685[(2)] = null);

(statearr_45590_46685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (39))){
var state_45579__$1 = state_45579;
var statearr_45594_46686 = state_45579__$1;
(statearr_45594_46686[(2)] = null);

(statearr_45594_46686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (4))){
var inst_45449 = (state_45579[(12)]);
var inst_45449__$1 = (state_45579[(2)]);
var inst_45450 = (inst_45449__$1 == null);
var state_45579__$1 = (function (){var statearr_45595 = state_45579;
(statearr_45595[(12)] = inst_45449__$1);

return statearr_45595;
})();
if(cljs.core.truth_(inst_45450)){
var statearr_45596_46687 = state_45579__$1;
(statearr_45596_46687[(1)] = (5));

} else {
var statearr_45597_46688 = state_45579__$1;
(statearr_45597_46688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (15))){
var inst_45461 = (state_45579[(17)]);
var inst_45458 = (state_45579[(14)]);
var inst_45459 = (state_45579[(15)]);
var inst_45460 = (state_45579[(16)]);
var inst_45476 = (state_45579[(2)]);
var inst_45477 = (inst_45461 + (1));
var tmp45591 = inst_45460;
var tmp45592 = inst_45458;
var tmp45593 = inst_45459;
var inst_45458__$1 = tmp45592;
var inst_45459__$1 = tmp45593;
var inst_45460__$1 = tmp45591;
var inst_45461__$1 = inst_45477;
var state_45579__$1 = (function (){var statearr_45598 = state_45579;
(statearr_45598[(18)] = inst_45476);

(statearr_45598[(14)] = inst_45458__$1);

(statearr_45598[(15)] = inst_45459__$1);

(statearr_45598[(16)] = inst_45460__$1);

(statearr_45598[(17)] = inst_45461__$1);

return statearr_45598;
})();
var statearr_45599_46689 = state_45579__$1;
(statearr_45599_46689[(2)] = null);

(statearr_45599_46689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (21))){
var inst_45503 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45603_46690 = state_45579__$1;
(statearr_45603_46690[(2)] = inst_45503);

(statearr_45603_46690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (31))){
var inst_45529 = (state_45579[(11)]);
var inst_45533 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45529);
var state_45579__$1 = state_45579;
var statearr_45604_46691 = state_45579__$1;
(statearr_45604_46691[(2)] = inst_45533);

(statearr_45604_46691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (32))){
var inst_45524 = (state_45579[(10)]);
var inst_45521 = (state_45579[(19)]);
var inst_45522 = (state_45579[(9)]);
var inst_45523 = (state_45579[(20)]);
var inst_45535 = (state_45579[(2)]);
var inst_45536 = (inst_45524 + (1));
var tmp45600 = inst_45521;
var tmp45601 = inst_45522;
var tmp45602 = inst_45523;
var inst_45521__$1 = tmp45600;
var inst_45522__$1 = tmp45601;
var inst_45523__$1 = tmp45602;
var inst_45524__$1 = inst_45536;
var state_45579__$1 = (function (){var statearr_45605 = state_45579;
(statearr_45605[(21)] = inst_45535);

(statearr_45605[(19)] = inst_45521__$1);

(statearr_45605[(9)] = inst_45522__$1);

(statearr_45605[(20)] = inst_45523__$1);

(statearr_45605[(10)] = inst_45524__$1);

return statearr_45605;
})();
var statearr_45606_46692 = state_45579__$1;
(statearr_45606_46692[(2)] = null);

(statearr_45606_46692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (40))){
var inst_45548 = (state_45579[(22)]);
var inst_45552 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45548);
var state_45579__$1 = state_45579;
var statearr_45607_46693 = state_45579__$1;
(statearr_45607_46693[(2)] = inst_45552);

(statearr_45607_46693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (33))){
var inst_45539 = (state_45579[(23)]);
var inst_45541 = cljs.core.chunked_seq_QMARK_(inst_45539);
var state_45579__$1 = state_45579;
if(inst_45541){
var statearr_45608_46694 = state_45579__$1;
(statearr_45608_46694[(1)] = (36));

} else {
var statearr_45609_46695 = state_45579__$1;
(statearr_45609_46695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (13))){
var inst_45470 = (state_45579[(24)]);
var inst_45473 = cljs.core.async.close_BANG_(inst_45470);
var state_45579__$1 = state_45579;
var statearr_45610_46696 = state_45579__$1;
(statearr_45610_46696[(2)] = inst_45473);

(statearr_45610_46696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (22))){
var inst_45493 = (state_45579[(8)]);
var inst_45496 = cljs.core.async.close_BANG_(inst_45493);
var state_45579__$1 = state_45579;
var statearr_45611_46697 = state_45579__$1;
(statearr_45611_46697[(2)] = inst_45496);

(statearr_45611_46697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (36))){
var inst_45539 = (state_45579[(23)]);
var inst_45543 = cljs.core.chunk_first(inst_45539);
var inst_45544 = cljs.core.chunk_rest(inst_45539);
var inst_45545 = cljs.core.count(inst_45543);
var inst_45521 = inst_45544;
var inst_45522 = inst_45543;
var inst_45523 = inst_45545;
var inst_45524 = (0);
var state_45579__$1 = (function (){var statearr_45612 = state_45579;
(statearr_45612[(19)] = inst_45521);

(statearr_45612[(9)] = inst_45522);

(statearr_45612[(20)] = inst_45523);

(statearr_45612[(10)] = inst_45524);

return statearr_45612;
})();
var statearr_45613_46698 = state_45579__$1;
(statearr_45613_46698[(2)] = null);

(statearr_45613_46698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (41))){
var inst_45539 = (state_45579[(23)]);
var inst_45554 = (state_45579[(2)]);
var inst_45555 = cljs.core.next(inst_45539);
var inst_45521 = inst_45555;
var inst_45522 = null;
var inst_45523 = (0);
var inst_45524 = (0);
var state_45579__$1 = (function (){var statearr_45614 = state_45579;
(statearr_45614[(25)] = inst_45554);

(statearr_45614[(19)] = inst_45521);

(statearr_45614[(9)] = inst_45522);

(statearr_45614[(20)] = inst_45523);

(statearr_45614[(10)] = inst_45524);

return statearr_45614;
})();
var statearr_45615_46699 = state_45579__$1;
(statearr_45615_46699[(2)] = null);

(statearr_45615_46699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (43))){
var state_45579__$1 = state_45579;
var statearr_45616_46700 = state_45579__$1;
(statearr_45616_46700[(2)] = null);

(statearr_45616_46700[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (29))){
var inst_45563 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45617_46701 = state_45579__$1;
(statearr_45617_46701[(2)] = inst_45563);

(statearr_45617_46701[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (44))){
var inst_45572 = (state_45579[(2)]);
var state_45579__$1 = (function (){var statearr_45618 = state_45579;
(statearr_45618[(26)] = inst_45572);

return statearr_45618;
})();
var statearr_45619_46702 = state_45579__$1;
(statearr_45619_46702[(2)] = null);

(statearr_45619_46702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (6))){
var inst_45513 = (state_45579[(27)]);
var inst_45512 = cljs.core.deref(cs);
var inst_45513__$1 = cljs.core.keys(inst_45512);
var inst_45514 = cljs.core.count(inst_45513__$1);
var inst_45515 = cljs.core.reset_BANG_(dctr,inst_45514);
var inst_45520 = cljs.core.seq(inst_45513__$1);
var inst_45521 = inst_45520;
var inst_45522 = null;
var inst_45523 = (0);
var inst_45524 = (0);
var state_45579__$1 = (function (){var statearr_45620 = state_45579;
(statearr_45620[(27)] = inst_45513__$1);

(statearr_45620[(28)] = inst_45515);

(statearr_45620[(19)] = inst_45521);

(statearr_45620[(9)] = inst_45522);

(statearr_45620[(20)] = inst_45523);

(statearr_45620[(10)] = inst_45524);

return statearr_45620;
})();
var statearr_45621_46703 = state_45579__$1;
(statearr_45621_46703[(2)] = null);

(statearr_45621_46703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (28))){
var inst_45521 = (state_45579[(19)]);
var inst_45539 = (state_45579[(23)]);
var inst_45539__$1 = cljs.core.seq(inst_45521);
var state_45579__$1 = (function (){var statearr_45622 = state_45579;
(statearr_45622[(23)] = inst_45539__$1);

return statearr_45622;
})();
if(inst_45539__$1){
var statearr_45623_46704 = state_45579__$1;
(statearr_45623_46704[(1)] = (33));

} else {
var statearr_45624_46705 = state_45579__$1;
(statearr_45624_46705[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (25))){
var inst_45524 = (state_45579[(10)]);
var inst_45523 = (state_45579[(20)]);
var inst_45526 = (inst_45524 < inst_45523);
var inst_45527 = inst_45526;
var state_45579__$1 = state_45579;
if(cljs.core.truth_(inst_45527)){
var statearr_45625_46706 = state_45579__$1;
(statearr_45625_46706[(1)] = (27));

} else {
var statearr_45626_46707 = state_45579__$1;
(statearr_45626_46707[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (34))){
var state_45579__$1 = state_45579;
var statearr_45627_46708 = state_45579__$1;
(statearr_45627_46708[(2)] = null);

(statearr_45627_46708[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (17))){
var state_45579__$1 = state_45579;
var statearr_45628_46709 = state_45579__$1;
(statearr_45628_46709[(2)] = null);

(statearr_45628_46709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (3))){
var inst_45577 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45579__$1,inst_45577);
} else {
if((state_val_45580 === (12))){
var inst_45508 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45629_46710 = state_45579__$1;
(statearr_45629_46710[(2)] = inst_45508);

(statearr_45629_46710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (2))){
var state_45579__$1 = state_45579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45579__$1,(4),ch);
} else {
if((state_val_45580 === (23))){
var state_45579__$1 = state_45579;
var statearr_45630_46711 = state_45579__$1;
(statearr_45630_46711[(2)] = null);

(statearr_45630_46711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (35))){
var inst_45561 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45631_46712 = state_45579__$1;
(statearr_45631_46712[(2)] = inst_45561);

(statearr_45631_46712[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (19))){
var inst_45480 = (state_45579[(7)]);
var inst_45484 = cljs.core.chunk_first(inst_45480);
var inst_45485 = cljs.core.chunk_rest(inst_45480);
var inst_45486 = cljs.core.count(inst_45484);
var inst_45458 = inst_45485;
var inst_45459 = inst_45484;
var inst_45460 = inst_45486;
var inst_45461 = (0);
var state_45579__$1 = (function (){var statearr_45632 = state_45579;
(statearr_45632[(14)] = inst_45458);

(statearr_45632[(15)] = inst_45459);

(statearr_45632[(16)] = inst_45460);

(statearr_45632[(17)] = inst_45461);

return statearr_45632;
})();
var statearr_45633_46713 = state_45579__$1;
(statearr_45633_46713[(2)] = null);

(statearr_45633_46713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (11))){
var inst_45458 = (state_45579[(14)]);
var inst_45480 = (state_45579[(7)]);
var inst_45480__$1 = cljs.core.seq(inst_45458);
var state_45579__$1 = (function (){var statearr_45634 = state_45579;
(statearr_45634[(7)] = inst_45480__$1);

return statearr_45634;
})();
if(inst_45480__$1){
var statearr_45635_46714 = state_45579__$1;
(statearr_45635_46714[(1)] = (16));

} else {
var statearr_45636_46715 = state_45579__$1;
(statearr_45636_46715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (9))){
var inst_45510 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45637_46716 = state_45579__$1;
(statearr_45637_46716[(2)] = inst_45510);

(statearr_45637_46716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (5))){
var inst_45456 = cljs.core.deref(cs);
var inst_45457 = cljs.core.seq(inst_45456);
var inst_45458 = inst_45457;
var inst_45459 = null;
var inst_45460 = (0);
var inst_45461 = (0);
var state_45579__$1 = (function (){var statearr_45638 = state_45579;
(statearr_45638[(14)] = inst_45458);

(statearr_45638[(15)] = inst_45459);

(statearr_45638[(16)] = inst_45460);

(statearr_45638[(17)] = inst_45461);

return statearr_45638;
})();
var statearr_45639_46717 = state_45579__$1;
(statearr_45639_46717[(2)] = null);

(statearr_45639_46717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (14))){
var state_45579__$1 = state_45579;
var statearr_45640_46718 = state_45579__$1;
(statearr_45640_46718[(2)] = null);

(statearr_45640_46718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (45))){
var inst_45569 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45641_46719 = state_45579__$1;
(statearr_45641_46719[(2)] = inst_45569);

(statearr_45641_46719[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (26))){
var inst_45513 = (state_45579[(27)]);
var inst_45565 = (state_45579[(2)]);
var inst_45566 = cljs.core.seq(inst_45513);
var state_45579__$1 = (function (){var statearr_45642 = state_45579;
(statearr_45642[(29)] = inst_45565);

return statearr_45642;
})();
if(inst_45566){
var statearr_45643_46720 = state_45579__$1;
(statearr_45643_46720[(1)] = (42));

} else {
var statearr_45644_46721 = state_45579__$1;
(statearr_45644_46721[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (16))){
var inst_45480 = (state_45579[(7)]);
var inst_45482 = cljs.core.chunked_seq_QMARK_(inst_45480);
var state_45579__$1 = state_45579;
if(inst_45482){
var statearr_45645_46722 = state_45579__$1;
(statearr_45645_46722[(1)] = (19));

} else {
var statearr_45646_46723 = state_45579__$1;
(statearr_45646_46723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (38))){
var inst_45558 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45647_46724 = state_45579__$1;
(statearr_45647_46724[(2)] = inst_45558);

(statearr_45647_46724[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (30))){
var state_45579__$1 = state_45579;
var statearr_45648_46725 = state_45579__$1;
(statearr_45648_46725[(2)] = null);

(statearr_45648_46725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (10))){
var inst_45459 = (state_45579[(15)]);
var inst_45461 = (state_45579[(17)]);
var inst_45469 = cljs.core._nth(inst_45459,inst_45461);
var inst_45470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45469,(0),null);
var inst_45471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45469,(1),null);
var state_45579__$1 = (function (){var statearr_45649 = state_45579;
(statearr_45649[(24)] = inst_45470);

return statearr_45649;
})();
if(cljs.core.truth_(inst_45471)){
var statearr_45650_46726 = state_45579__$1;
(statearr_45650_46726[(1)] = (13));

} else {
var statearr_45651_46727 = state_45579__$1;
(statearr_45651_46727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (18))){
var inst_45506 = (state_45579[(2)]);
var state_45579__$1 = state_45579;
var statearr_45652_46728 = state_45579__$1;
(statearr_45652_46728[(2)] = inst_45506);

(statearr_45652_46728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (42))){
var state_45579__$1 = state_45579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45579__$1,(45),dchan);
} else {
if((state_val_45580 === (37))){
var inst_45539 = (state_45579[(23)]);
var inst_45548 = (state_45579[(22)]);
var inst_45449 = (state_45579[(12)]);
var inst_45548__$1 = cljs.core.first(inst_45539);
var inst_45549 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45548__$1,inst_45449,done);
var state_45579__$1 = (function (){var statearr_45653 = state_45579;
(statearr_45653[(22)] = inst_45548__$1);

return statearr_45653;
})();
if(cljs.core.truth_(inst_45549)){
var statearr_45654_46729 = state_45579__$1;
(statearr_45654_46729[(1)] = (39));

} else {
var statearr_45655_46730 = state_45579__$1;
(statearr_45655_46730[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45580 === (8))){
var inst_45461 = (state_45579[(17)]);
var inst_45460 = (state_45579[(16)]);
var inst_45463 = (inst_45461 < inst_45460);
var inst_45464 = inst_45463;
var state_45579__$1 = state_45579;
if(cljs.core.truth_(inst_45464)){
var statearr_45656_46731 = state_45579__$1;
(statearr_45656_46731[(1)] = (10));

} else {
var statearr_45657_46732 = state_45579__$1;
(statearr_45657_46732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__34379__auto__ = null;
var cljs$core$async$mult_$_state_machine__34379__auto____0 = (function (){
var statearr_45658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45658[(0)] = cljs$core$async$mult_$_state_machine__34379__auto__);

(statearr_45658[(1)] = (1));

return statearr_45658;
});
var cljs$core$async$mult_$_state_machine__34379__auto____1 = (function (state_45579){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45579);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45659){var ex__34382__auto__ = e45659;
var statearr_45660_46733 = state_45579;
(statearr_45660_46733[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45579[(4)]))){
var statearr_45661_46734 = state_45579;
(statearr_45661_46734[(1)] = cljs.core.first((state_45579[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46735 = state_45579;
state_45579 = G__46735;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34379__auto__ = function(state_45579){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34379__auto____1.call(this,state_45579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34379__auto____0;
cljs$core$async$mult_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34379__auto____1;
return cljs$core$async$mult_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45662 = f__34484__auto__();
(statearr_45662[(6)] = c__34483__auto___46678);

return statearr_45662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45664 = arguments.length;
switch (G__45664) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46737 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46737(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46738 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46738(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46739 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46739(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46740 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46740(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46741 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46741(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46742 = arguments.length;
var i__5767__auto___46743 = (0);
while(true){
if((i__5767__auto___46743 < len__5766__auto___46742)){
args__5772__auto__.push((arguments[i__5767__auto___46743]));

var G__46744 = (i__5767__auto___46743 + (1));
i__5767__auto___46743 = G__46744;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45669){
var map__45670 = p__45669;
var map__45670__$1 = cljs.core.__destructure_map(map__45670);
var opts = map__45670__$1;
var statearr_45671_46745 = state;
(statearr_45671_46745[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45672_46746 = state;
(statearr_45672_46746[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_45673_46747 = state;
(statearr_45673_46747[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45665){
var G__45666 = cljs.core.first(seq45665);
var seq45665__$1 = cljs.core.next(seq45665);
var G__45667 = cljs.core.first(seq45665__$1);
var seq45665__$2 = cljs.core.next(seq45665__$1);
var G__45668 = cljs.core.first(seq45665__$2);
var seq45665__$3 = cljs.core.next(seq45665__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45666,G__45667,G__45668,seq45665__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45674 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45675){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45675 = meta45675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45676,meta45675__$1){
var self__ = this;
var _45676__$1 = this;
return (new cljs.core.async.t_cljs$core$async45674(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45675__$1));
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45676){
var self__ = this;
var _45676__$1 = this;
return self__.meta45675;
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45675","meta45675",1925173302,null)], null);
}));

(cljs.core.async.t_cljs$core$async45674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45674");

(cljs.core.async.t_cljs$core$async45674.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45674.
 */
cljs.core.async.__GT_t_cljs$core$async45674 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45674(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45675){
return (new cljs.core.async.t_cljs$core$async45674(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45675));
});

}

return (new cljs.core.async.t_cljs$core$async45674(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34483__auto___46748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45744){
var state_val_45745 = (state_45744[(1)]);
if((state_val_45745 === (7))){
var inst_45704 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
if(cljs.core.truth_(inst_45704)){
var statearr_45746_46749 = state_45744__$1;
(statearr_45746_46749[(1)] = (8));

} else {
var statearr_45747_46750 = state_45744__$1;
(statearr_45747_46750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (20))){
var inst_45697 = (state_45744[(7)]);
var state_45744__$1 = state_45744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45744__$1,(23),out,inst_45697);
} else {
if((state_val_45745 === (1))){
var inst_45680 = calc_state();
var inst_45681 = cljs.core.__destructure_map(inst_45680);
var inst_45682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45681,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45681,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45681,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45685 = inst_45680;
var state_45744__$1 = (function (){var statearr_45748 = state_45744;
(statearr_45748[(8)] = inst_45682);

(statearr_45748[(9)] = inst_45683);

(statearr_45748[(10)] = inst_45684);

(statearr_45748[(11)] = inst_45685);

return statearr_45748;
})();
var statearr_45749_46751 = state_45744__$1;
(statearr_45749_46751[(2)] = null);

(statearr_45749_46751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (24))){
var inst_45688 = (state_45744[(12)]);
var inst_45685 = inst_45688;
var state_45744__$1 = (function (){var statearr_45750 = state_45744;
(statearr_45750[(11)] = inst_45685);

return statearr_45750;
})();
var statearr_45751_46752 = state_45744__$1;
(statearr_45751_46752[(2)] = null);

(statearr_45751_46752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (4))){
var inst_45697 = (state_45744[(7)]);
var inst_45699 = (state_45744[(13)]);
var inst_45696 = (state_45744[(2)]);
var inst_45697__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45696,(0),null);
var inst_45698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45696,(1),null);
var inst_45699__$1 = (inst_45697__$1 == null);
var state_45744__$1 = (function (){var statearr_45752 = state_45744;
(statearr_45752[(7)] = inst_45697__$1);

(statearr_45752[(14)] = inst_45698);

(statearr_45752[(13)] = inst_45699__$1);

return statearr_45752;
})();
if(cljs.core.truth_(inst_45699__$1)){
var statearr_45753_46753 = state_45744__$1;
(statearr_45753_46753[(1)] = (5));

} else {
var statearr_45754_46754 = state_45744__$1;
(statearr_45754_46754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (15))){
var inst_45689 = (state_45744[(15)]);
var inst_45718 = (state_45744[(16)]);
var inst_45718__$1 = cljs.core.empty_QMARK_(inst_45689);
var state_45744__$1 = (function (){var statearr_45755 = state_45744;
(statearr_45755[(16)] = inst_45718__$1);

return statearr_45755;
})();
if(inst_45718__$1){
var statearr_45756_46755 = state_45744__$1;
(statearr_45756_46755[(1)] = (17));

} else {
var statearr_45757_46756 = state_45744__$1;
(statearr_45757_46756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (21))){
var inst_45688 = (state_45744[(12)]);
var inst_45685 = inst_45688;
var state_45744__$1 = (function (){var statearr_45758 = state_45744;
(statearr_45758[(11)] = inst_45685);

return statearr_45758;
})();
var statearr_45759_46757 = state_45744__$1;
(statearr_45759_46757[(2)] = null);

(statearr_45759_46757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (13))){
var inst_45711 = (state_45744[(2)]);
var inst_45712 = calc_state();
var inst_45685 = inst_45712;
var state_45744__$1 = (function (){var statearr_45760 = state_45744;
(statearr_45760[(17)] = inst_45711);

(statearr_45760[(11)] = inst_45685);

return statearr_45760;
})();
var statearr_45761_46758 = state_45744__$1;
(statearr_45761_46758[(2)] = null);

(statearr_45761_46758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (22))){
var inst_45738 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45762_46759 = state_45744__$1;
(statearr_45762_46759[(2)] = inst_45738);

(statearr_45762_46759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (6))){
var inst_45698 = (state_45744[(14)]);
var inst_45702 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45698,change);
var state_45744__$1 = state_45744;
var statearr_45763_46760 = state_45744__$1;
(statearr_45763_46760[(2)] = inst_45702);

(statearr_45763_46760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (25))){
var state_45744__$1 = state_45744;
var statearr_45764_46761 = state_45744__$1;
(statearr_45764_46761[(2)] = null);

(statearr_45764_46761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (17))){
var inst_45690 = (state_45744[(18)]);
var inst_45698 = (state_45744[(14)]);
var inst_45720 = (inst_45690.cljs$core$IFn$_invoke$arity$1 ? inst_45690.cljs$core$IFn$_invoke$arity$1(inst_45698) : inst_45690.call(null,inst_45698));
var inst_45721 = cljs.core.not(inst_45720);
var state_45744__$1 = state_45744;
var statearr_45765_46762 = state_45744__$1;
(statearr_45765_46762[(2)] = inst_45721);

(statearr_45765_46762[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (3))){
var inst_45742 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45744__$1,inst_45742);
} else {
if((state_val_45745 === (12))){
var state_45744__$1 = state_45744;
var statearr_45766_46763 = state_45744__$1;
(statearr_45766_46763[(2)] = null);

(statearr_45766_46763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (2))){
var inst_45685 = (state_45744[(11)]);
var inst_45688 = (state_45744[(12)]);
var inst_45688__$1 = cljs.core.__destructure_map(inst_45685);
var inst_45689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45688__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45688__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45688__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45744__$1 = (function (){var statearr_45767 = state_45744;
(statearr_45767[(12)] = inst_45688__$1);

(statearr_45767[(15)] = inst_45689);

(statearr_45767[(18)] = inst_45690);

return statearr_45767;
})();
return cljs.core.async.ioc_alts_BANG_(state_45744__$1,(4),inst_45691);
} else {
if((state_val_45745 === (23))){
var inst_45729 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
if(cljs.core.truth_(inst_45729)){
var statearr_45768_46764 = state_45744__$1;
(statearr_45768_46764[(1)] = (24));

} else {
var statearr_45769_46765 = state_45744__$1;
(statearr_45769_46765[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (19))){
var inst_45724 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45770_46766 = state_45744__$1;
(statearr_45770_46766[(2)] = inst_45724);

(statearr_45770_46766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (11))){
var inst_45698 = (state_45744[(14)]);
var inst_45708 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45698);
var state_45744__$1 = state_45744;
var statearr_45771_46767 = state_45744__$1;
(statearr_45771_46767[(2)] = inst_45708);

(statearr_45771_46767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (9))){
var inst_45689 = (state_45744[(15)]);
var inst_45698 = (state_45744[(14)]);
var inst_45715 = (state_45744[(19)]);
var inst_45715__$1 = (inst_45689.cljs$core$IFn$_invoke$arity$1 ? inst_45689.cljs$core$IFn$_invoke$arity$1(inst_45698) : inst_45689.call(null,inst_45698));
var state_45744__$1 = (function (){var statearr_45772 = state_45744;
(statearr_45772[(19)] = inst_45715__$1);

return statearr_45772;
})();
if(cljs.core.truth_(inst_45715__$1)){
var statearr_45773_46768 = state_45744__$1;
(statearr_45773_46768[(1)] = (14));

} else {
var statearr_45774_46769 = state_45744__$1;
(statearr_45774_46769[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (5))){
var inst_45699 = (state_45744[(13)]);
var state_45744__$1 = state_45744;
var statearr_45775_46770 = state_45744__$1;
(statearr_45775_46770[(2)] = inst_45699);

(statearr_45775_46770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (14))){
var inst_45715 = (state_45744[(19)]);
var state_45744__$1 = state_45744;
var statearr_45776_46771 = state_45744__$1;
(statearr_45776_46771[(2)] = inst_45715);

(statearr_45776_46771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (26))){
var inst_45734 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45777_46772 = state_45744__$1;
(statearr_45777_46772[(2)] = inst_45734);

(statearr_45777_46772[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (16))){
var inst_45726 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
if(cljs.core.truth_(inst_45726)){
var statearr_45778_46773 = state_45744__$1;
(statearr_45778_46773[(1)] = (20));

} else {
var statearr_45779_46774 = state_45744__$1;
(statearr_45779_46774[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (10))){
var inst_45740 = (state_45744[(2)]);
var state_45744__$1 = state_45744;
var statearr_45780_46775 = state_45744__$1;
(statearr_45780_46775[(2)] = inst_45740);

(statearr_45780_46775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (18))){
var inst_45718 = (state_45744[(16)]);
var state_45744__$1 = state_45744;
var statearr_45781_46776 = state_45744__$1;
(statearr_45781_46776[(2)] = inst_45718);

(statearr_45781_46776[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45745 === (8))){
var inst_45697 = (state_45744[(7)]);
var inst_45706 = (inst_45697 == null);
var state_45744__$1 = state_45744;
if(cljs.core.truth_(inst_45706)){
var statearr_45782_46777 = state_45744__$1;
(statearr_45782_46777[(1)] = (11));

} else {
var statearr_45783_46778 = state_45744__$1;
(statearr_45783_46778[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__34379__auto__ = null;
var cljs$core$async$mix_$_state_machine__34379__auto____0 = (function (){
var statearr_45784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45784[(0)] = cljs$core$async$mix_$_state_machine__34379__auto__);

(statearr_45784[(1)] = (1));

return statearr_45784;
});
var cljs$core$async$mix_$_state_machine__34379__auto____1 = (function (state_45744){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45744);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45785){var ex__34382__auto__ = e45785;
var statearr_45786_46779 = state_45744;
(statearr_45786_46779[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45744[(4)]))){
var statearr_45787_46780 = state_45744;
(statearr_45787_46780[(1)] = cljs.core.first((state_45744[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46781 = state_45744;
state_45744 = G__46781;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34379__auto__ = function(state_45744){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34379__auto____1.call(this,state_45744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34379__auto____0;
cljs$core$async$mix_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34379__auto____1;
return cljs$core$async$mix_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45788 = f__34484__auto__();
(statearr_45788[(6)] = c__34483__auto___46748);

return statearr_45788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46782 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46782(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46783 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46783(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46784 = (function() {
var G__46785 = null;
var G__46785__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46785__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46785 = function(p,v){
switch(arguments.length){
case 1:
return G__46785__1.call(this,p);
case 2:
return G__46785__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46785.cljs$core$IFn$_invoke$arity$1 = G__46785__1;
G__46785.cljs$core$IFn$_invoke$arity$2 = G__46785__2;
return G__46785;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45790 = arguments.length;
switch (G__45790) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46784(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46784(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45793 = arguments.length;
switch (G__45793) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45791_SHARP_){
if(cljs.core.truth_((p1__45791_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45791_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45791_SHARP_.call(null,topic)))){
return p1__45791_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45791_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45794 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45795){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45795 = meta45795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45796,meta45795__$1){
var self__ = this;
var _45796__$1 = this;
return (new cljs.core.async.t_cljs$core$async45794(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45795__$1));
}));

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45796){
var self__ = this;
var _45796__$1 = this;
return self__.meta45795;
}));

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45795","meta45795",905413589,null)], null);
}));

(cljs.core.async.t_cljs$core$async45794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45794");

(cljs.core.async.t_cljs$core$async45794.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45794.
 */
cljs.core.async.__GT_t_cljs$core$async45794 = (function cljs$core$async$__GT_t_cljs$core$async45794(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45795){
return (new cljs.core.async.t_cljs$core$async45794(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45795));
});

}

return (new cljs.core.async.t_cljs$core$async45794(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34483__auto___46788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_45868){
var state_val_45869 = (state_45868[(1)]);
if((state_val_45869 === (7))){
var inst_45864 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
var statearr_45870_46789 = state_45868__$1;
(statearr_45870_46789[(2)] = inst_45864);

(statearr_45870_46789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (20))){
var state_45868__$1 = state_45868;
var statearr_45871_46790 = state_45868__$1;
(statearr_45871_46790[(2)] = null);

(statearr_45871_46790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (1))){
var state_45868__$1 = state_45868;
var statearr_45872_46791 = state_45868__$1;
(statearr_45872_46791[(2)] = null);

(statearr_45872_46791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (24))){
var inst_45847 = (state_45868[(7)]);
var inst_45856 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45847);
var state_45868__$1 = state_45868;
var statearr_45873_46792 = state_45868__$1;
(statearr_45873_46792[(2)] = inst_45856);

(statearr_45873_46792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (4))){
var inst_45799 = (state_45868[(8)]);
var inst_45799__$1 = (state_45868[(2)]);
var inst_45800 = (inst_45799__$1 == null);
var state_45868__$1 = (function (){var statearr_45874 = state_45868;
(statearr_45874[(8)] = inst_45799__$1);

return statearr_45874;
})();
if(cljs.core.truth_(inst_45800)){
var statearr_45875_46793 = state_45868__$1;
(statearr_45875_46793[(1)] = (5));

} else {
var statearr_45876_46794 = state_45868__$1;
(statearr_45876_46794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (15))){
var inst_45841 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
var statearr_45877_46795 = state_45868__$1;
(statearr_45877_46795[(2)] = inst_45841);

(statearr_45877_46795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (21))){
var inst_45861 = (state_45868[(2)]);
var state_45868__$1 = (function (){var statearr_45878 = state_45868;
(statearr_45878[(9)] = inst_45861);

return statearr_45878;
})();
var statearr_45879_46796 = state_45868__$1;
(statearr_45879_46796[(2)] = null);

(statearr_45879_46796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (13))){
var inst_45823 = (state_45868[(10)]);
var inst_45825 = cljs.core.chunked_seq_QMARK_(inst_45823);
var state_45868__$1 = state_45868;
if(inst_45825){
var statearr_45880_46797 = state_45868__$1;
(statearr_45880_46797[(1)] = (16));

} else {
var statearr_45881_46798 = state_45868__$1;
(statearr_45881_46798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (22))){
var inst_45853 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
if(cljs.core.truth_(inst_45853)){
var statearr_45882_46799 = state_45868__$1;
(statearr_45882_46799[(1)] = (23));

} else {
var statearr_45883_46800 = state_45868__$1;
(statearr_45883_46800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (6))){
var inst_45799 = (state_45868[(8)]);
var inst_45847 = (state_45868[(7)]);
var inst_45849 = (state_45868[(11)]);
var inst_45847__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45799) : topic_fn.call(null,inst_45799));
var inst_45848 = cljs.core.deref(mults);
var inst_45849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45848,inst_45847__$1);
var state_45868__$1 = (function (){var statearr_45884 = state_45868;
(statearr_45884[(7)] = inst_45847__$1);

(statearr_45884[(11)] = inst_45849__$1);

return statearr_45884;
})();
if(cljs.core.truth_(inst_45849__$1)){
var statearr_45885_46801 = state_45868__$1;
(statearr_45885_46801[(1)] = (19));

} else {
var statearr_45886_46802 = state_45868__$1;
(statearr_45886_46802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (25))){
var inst_45858 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
var statearr_45889_46803 = state_45868__$1;
(statearr_45889_46803[(2)] = inst_45858);

(statearr_45889_46803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (17))){
var inst_45823 = (state_45868[(10)]);
var inst_45832 = cljs.core.first(inst_45823);
var inst_45833 = cljs.core.async.muxch_STAR_(inst_45832);
var inst_45834 = cljs.core.async.close_BANG_(inst_45833);
var inst_45835 = cljs.core.next(inst_45823);
var inst_45809 = inst_45835;
var inst_45810 = null;
var inst_45811 = (0);
var inst_45812 = (0);
var state_45868__$1 = (function (){var statearr_45892 = state_45868;
(statearr_45892[(12)] = inst_45834);

(statearr_45892[(13)] = inst_45809);

(statearr_45892[(14)] = inst_45810);

(statearr_45892[(15)] = inst_45811);

(statearr_45892[(16)] = inst_45812);

return statearr_45892;
})();
var statearr_45894_46804 = state_45868__$1;
(statearr_45894_46804[(2)] = null);

(statearr_45894_46804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (3))){
var inst_45866 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45868__$1,inst_45866);
} else {
if((state_val_45869 === (12))){
var inst_45843 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
var statearr_45896_46805 = state_45868__$1;
(statearr_45896_46805[(2)] = inst_45843);

(statearr_45896_46805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (2))){
var state_45868__$1 = state_45868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45868__$1,(4),ch);
} else {
if((state_val_45869 === (23))){
var state_45868__$1 = state_45868;
var statearr_45897_46806 = state_45868__$1;
(statearr_45897_46806[(2)] = null);

(statearr_45897_46806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (19))){
var inst_45849 = (state_45868[(11)]);
var inst_45799 = (state_45868[(8)]);
var inst_45851 = cljs.core.async.muxch_STAR_(inst_45849);
var state_45868__$1 = state_45868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45868__$1,(22),inst_45851,inst_45799);
} else {
if((state_val_45869 === (11))){
var inst_45809 = (state_45868[(13)]);
var inst_45823 = (state_45868[(10)]);
var inst_45823__$1 = cljs.core.seq(inst_45809);
var state_45868__$1 = (function (){var statearr_45902 = state_45868;
(statearr_45902[(10)] = inst_45823__$1);

return statearr_45902;
})();
if(inst_45823__$1){
var statearr_45903_46807 = state_45868__$1;
(statearr_45903_46807[(1)] = (13));

} else {
var statearr_45904_46808 = state_45868__$1;
(statearr_45904_46808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (9))){
var inst_45845 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
var statearr_45906_46809 = state_45868__$1;
(statearr_45906_46809[(2)] = inst_45845);

(statearr_45906_46809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (5))){
var inst_45806 = cljs.core.deref(mults);
var inst_45807 = cljs.core.vals(inst_45806);
var inst_45808 = cljs.core.seq(inst_45807);
var inst_45809 = inst_45808;
var inst_45810 = null;
var inst_45811 = (0);
var inst_45812 = (0);
var state_45868__$1 = (function (){var statearr_45912 = state_45868;
(statearr_45912[(13)] = inst_45809);

(statearr_45912[(14)] = inst_45810);

(statearr_45912[(15)] = inst_45811);

(statearr_45912[(16)] = inst_45812);

return statearr_45912;
})();
var statearr_45914_46810 = state_45868__$1;
(statearr_45914_46810[(2)] = null);

(statearr_45914_46810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (14))){
var state_45868__$1 = state_45868;
var statearr_45918_46811 = state_45868__$1;
(statearr_45918_46811[(2)] = null);

(statearr_45918_46811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (16))){
var inst_45823 = (state_45868[(10)]);
var inst_45827 = cljs.core.chunk_first(inst_45823);
var inst_45828 = cljs.core.chunk_rest(inst_45823);
var inst_45829 = cljs.core.count(inst_45827);
var inst_45809 = inst_45828;
var inst_45810 = inst_45827;
var inst_45811 = inst_45829;
var inst_45812 = (0);
var state_45868__$1 = (function (){var statearr_45921 = state_45868;
(statearr_45921[(13)] = inst_45809);

(statearr_45921[(14)] = inst_45810);

(statearr_45921[(15)] = inst_45811);

(statearr_45921[(16)] = inst_45812);

return statearr_45921;
})();
var statearr_45922_46812 = state_45868__$1;
(statearr_45922_46812[(2)] = null);

(statearr_45922_46812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (10))){
var inst_45810 = (state_45868[(14)]);
var inst_45812 = (state_45868[(16)]);
var inst_45809 = (state_45868[(13)]);
var inst_45811 = (state_45868[(15)]);
var inst_45817 = cljs.core._nth(inst_45810,inst_45812);
var inst_45818 = cljs.core.async.muxch_STAR_(inst_45817);
var inst_45819 = cljs.core.async.close_BANG_(inst_45818);
var inst_45820 = (inst_45812 + (1));
var tmp45915 = inst_45810;
var tmp45916 = inst_45811;
var tmp45917 = inst_45809;
var inst_45809__$1 = tmp45917;
var inst_45810__$1 = tmp45915;
var inst_45811__$1 = tmp45916;
var inst_45812__$1 = inst_45820;
var state_45868__$1 = (function (){var statearr_45927 = state_45868;
(statearr_45927[(17)] = inst_45819);

(statearr_45927[(13)] = inst_45809__$1);

(statearr_45927[(14)] = inst_45810__$1);

(statearr_45927[(15)] = inst_45811__$1);

(statearr_45927[(16)] = inst_45812__$1);

return statearr_45927;
})();
var statearr_45930_46813 = state_45868__$1;
(statearr_45930_46813[(2)] = null);

(statearr_45930_46813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (18))){
var inst_45838 = (state_45868[(2)]);
var state_45868__$1 = state_45868;
var statearr_45932_46814 = state_45868__$1;
(statearr_45932_46814[(2)] = inst_45838);

(statearr_45932_46814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45869 === (8))){
var inst_45812 = (state_45868[(16)]);
var inst_45811 = (state_45868[(15)]);
var inst_45814 = (inst_45812 < inst_45811);
var inst_45815 = inst_45814;
var state_45868__$1 = state_45868;
if(cljs.core.truth_(inst_45815)){
var statearr_45935_46815 = state_45868__$1;
(statearr_45935_46815[(1)] = (10));

} else {
var statearr_45936_46816 = state_45868__$1;
(statearr_45936_46816[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_45939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45939[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_45939[(1)] = (1));

return statearr_45939;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_45868){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_45868);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e45940){var ex__34382__auto__ = e45940;
var statearr_45943_46817 = state_45868;
(statearr_45943_46817[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_45868[(4)]))){
var statearr_45944_46818 = state_45868;
(statearr_45944_46818[(1)] = cljs.core.first((state_45868[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46819 = state_45868;
state_45868 = G__46819;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_45868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_45868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_45946 = f__34484__auto__();
(statearr_45946[(6)] = c__34483__auto___46788);

return statearr_45946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45950 = arguments.length;
switch (G__45950) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45960 = arguments.length;
switch (G__45960) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45966 = arguments.length;
switch (G__45966) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__34483__auto___46823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46009){
var state_val_46010 = (state_46009[(1)]);
if((state_val_46010 === (7))){
var state_46009__$1 = state_46009;
var statearr_46011_46824 = state_46009__$1;
(statearr_46011_46824[(2)] = null);

(statearr_46011_46824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (1))){
var state_46009__$1 = state_46009;
var statearr_46012_46825 = state_46009__$1;
(statearr_46012_46825[(2)] = null);

(statearr_46012_46825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (4))){
var inst_45970 = (state_46009[(7)]);
var inst_45969 = (state_46009[(8)]);
var inst_45972 = (inst_45970 < inst_45969);
var state_46009__$1 = state_46009;
if(cljs.core.truth_(inst_45972)){
var statearr_46013_46826 = state_46009__$1;
(statearr_46013_46826[(1)] = (6));

} else {
var statearr_46014_46827 = state_46009__$1;
(statearr_46014_46827[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (15))){
var inst_45995 = (state_46009[(9)]);
var inst_46000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45995);
var state_46009__$1 = state_46009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46009__$1,(17),out,inst_46000);
} else {
if((state_val_46010 === (13))){
var inst_45995 = (state_46009[(9)]);
var inst_45995__$1 = (state_46009[(2)]);
var inst_45996 = cljs.core.some(cljs.core.nil_QMARK_,inst_45995__$1);
var state_46009__$1 = (function (){var statearr_46015 = state_46009;
(statearr_46015[(9)] = inst_45995__$1);

return statearr_46015;
})();
if(cljs.core.truth_(inst_45996)){
var statearr_46016_46828 = state_46009__$1;
(statearr_46016_46828[(1)] = (14));

} else {
var statearr_46017_46829 = state_46009__$1;
(statearr_46017_46829[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (6))){
var state_46009__$1 = state_46009;
var statearr_46018_46830 = state_46009__$1;
(statearr_46018_46830[(2)] = null);

(statearr_46018_46830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (17))){
var inst_46002 = (state_46009[(2)]);
var state_46009__$1 = (function (){var statearr_46020 = state_46009;
(statearr_46020[(10)] = inst_46002);

return statearr_46020;
})();
var statearr_46021_46831 = state_46009__$1;
(statearr_46021_46831[(2)] = null);

(statearr_46021_46831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (3))){
var inst_46007 = (state_46009[(2)]);
var state_46009__$1 = state_46009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46009__$1,inst_46007);
} else {
if((state_val_46010 === (12))){
var _ = (function (){var statearr_46022 = state_46009;
(statearr_46022[(4)] = cljs.core.rest((state_46009[(4)])));

return statearr_46022;
})();
var state_46009__$1 = state_46009;
var ex46019 = (state_46009__$1[(2)]);
var statearr_46023_46832 = state_46009__$1;
(statearr_46023_46832[(5)] = ex46019);


if((ex46019 instanceof Object)){
var statearr_46024_46833 = state_46009__$1;
(statearr_46024_46833[(1)] = (11));

(statearr_46024_46833[(5)] = null);

} else {
throw ex46019;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (2))){
var inst_45968 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45969 = cnt;
var inst_45970 = (0);
var state_46009__$1 = (function (){var statearr_46025 = state_46009;
(statearr_46025[(11)] = inst_45968);

(statearr_46025[(8)] = inst_45969);

(statearr_46025[(7)] = inst_45970);

return statearr_46025;
})();
var statearr_46026_46834 = state_46009__$1;
(statearr_46026_46834[(2)] = null);

(statearr_46026_46834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (11))){
var inst_45974 = (state_46009[(2)]);
var inst_45975 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46009__$1 = (function (){var statearr_46027 = state_46009;
(statearr_46027[(12)] = inst_45974);

return statearr_46027;
})();
var statearr_46028_46835 = state_46009__$1;
(statearr_46028_46835[(2)] = inst_45975);

(statearr_46028_46835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (9))){
var inst_45970 = (state_46009[(7)]);
var _ = (function (){var statearr_46029 = state_46009;
(statearr_46029[(4)] = cljs.core.cons((12),(state_46009[(4)])));

return statearr_46029;
})();
var inst_45981 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45970) : chs__$1.call(null,inst_45970));
var inst_45982 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45970) : done.call(null,inst_45970));
var inst_45983 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45981,inst_45982);
var ___$1 = (function (){var statearr_46030 = state_46009;
(statearr_46030[(4)] = cljs.core.rest((state_46009[(4)])));

return statearr_46030;
})();
var state_46009__$1 = state_46009;
var statearr_46031_46836 = state_46009__$1;
(statearr_46031_46836[(2)] = inst_45983);

(statearr_46031_46836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (5))){
var inst_45993 = (state_46009[(2)]);
var state_46009__$1 = (function (){var statearr_46032 = state_46009;
(statearr_46032[(13)] = inst_45993);

return statearr_46032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46009__$1,(13),dchan);
} else {
if((state_val_46010 === (14))){
var inst_45998 = cljs.core.async.close_BANG_(out);
var state_46009__$1 = state_46009;
var statearr_46033_46837 = state_46009__$1;
(statearr_46033_46837[(2)] = inst_45998);

(statearr_46033_46837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (16))){
var inst_46005 = (state_46009[(2)]);
var state_46009__$1 = state_46009;
var statearr_46034_46838 = state_46009__$1;
(statearr_46034_46838[(2)] = inst_46005);

(statearr_46034_46838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (10))){
var inst_45970 = (state_46009[(7)]);
var inst_45986 = (state_46009[(2)]);
var inst_45987 = (inst_45970 + (1));
var inst_45970__$1 = inst_45987;
var state_46009__$1 = (function (){var statearr_46035 = state_46009;
(statearr_46035[(14)] = inst_45986);

(statearr_46035[(7)] = inst_45970__$1);

return statearr_46035;
})();
var statearr_46036_46839 = state_46009__$1;
(statearr_46036_46839[(2)] = null);

(statearr_46036_46839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46010 === (8))){
var inst_45991 = (state_46009[(2)]);
var state_46009__$1 = state_46009;
var statearr_46037_46840 = state_46009__$1;
(statearr_46037_46840[(2)] = inst_45991);

(statearr_46037_46840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46038[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46038[(1)] = (1));

return statearr_46038;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46009){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46009);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46039){var ex__34382__auto__ = e46039;
var statearr_46040_46841 = state_46009;
(statearr_46040_46841[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46009[(4)]))){
var statearr_46041_46842 = state_46009;
(statearr_46041_46842[(1)] = cljs.core.first((state_46009[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46843 = state_46009;
state_46009 = G__46843;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46042 = f__34484__auto__();
(statearr_46042[(6)] = c__34483__auto___46823);

return statearr_46042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46045 = arguments.length;
switch (G__46045) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34483__auto___46845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46077){
var state_val_46078 = (state_46077[(1)]);
if((state_val_46078 === (7))){
var inst_46056 = (state_46077[(7)]);
var inst_46057 = (state_46077[(8)]);
var inst_46056__$1 = (state_46077[(2)]);
var inst_46057__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46056__$1,(0),null);
var inst_46058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46056__$1,(1),null);
var inst_46059 = (inst_46057__$1 == null);
var state_46077__$1 = (function (){var statearr_46079 = state_46077;
(statearr_46079[(7)] = inst_46056__$1);

(statearr_46079[(8)] = inst_46057__$1);

(statearr_46079[(9)] = inst_46058);

return statearr_46079;
})();
if(cljs.core.truth_(inst_46059)){
var statearr_46080_46846 = state_46077__$1;
(statearr_46080_46846[(1)] = (8));

} else {
var statearr_46081_46847 = state_46077__$1;
(statearr_46081_46847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (1))){
var inst_46046 = cljs.core.vec(chs);
var inst_46047 = inst_46046;
var state_46077__$1 = (function (){var statearr_46082 = state_46077;
(statearr_46082[(10)] = inst_46047);

return statearr_46082;
})();
var statearr_46083_46848 = state_46077__$1;
(statearr_46083_46848[(2)] = null);

(statearr_46083_46848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (4))){
var inst_46047 = (state_46077[(10)]);
var state_46077__$1 = state_46077;
return cljs.core.async.ioc_alts_BANG_(state_46077__$1,(7),inst_46047);
} else {
if((state_val_46078 === (6))){
var inst_46073 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46084_46849 = state_46077__$1;
(statearr_46084_46849[(2)] = inst_46073);

(statearr_46084_46849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (3))){
var inst_46075 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46077__$1,inst_46075);
} else {
if((state_val_46078 === (2))){
var inst_46047 = (state_46077[(10)]);
var inst_46049 = cljs.core.count(inst_46047);
var inst_46050 = (inst_46049 > (0));
var state_46077__$1 = state_46077;
if(cljs.core.truth_(inst_46050)){
var statearr_46086_46850 = state_46077__$1;
(statearr_46086_46850[(1)] = (4));

} else {
var statearr_46087_46851 = state_46077__$1;
(statearr_46087_46851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (11))){
var inst_46047 = (state_46077[(10)]);
var inst_46066 = (state_46077[(2)]);
var tmp46085 = inst_46047;
var inst_46047__$1 = tmp46085;
var state_46077__$1 = (function (){var statearr_46088 = state_46077;
(statearr_46088[(11)] = inst_46066);

(statearr_46088[(10)] = inst_46047__$1);

return statearr_46088;
})();
var statearr_46089_46852 = state_46077__$1;
(statearr_46089_46852[(2)] = null);

(statearr_46089_46852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (9))){
var inst_46057 = (state_46077[(8)]);
var state_46077__$1 = state_46077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46077__$1,(11),out,inst_46057);
} else {
if((state_val_46078 === (5))){
var inst_46071 = cljs.core.async.close_BANG_(out);
var state_46077__$1 = state_46077;
var statearr_46091_46853 = state_46077__$1;
(statearr_46091_46853[(2)] = inst_46071);

(statearr_46091_46853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (10))){
var inst_46069 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46092_46854 = state_46077__$1;
(statearr_46092_46854[(2)] = inst_46069);

(statearr_46092_46854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (8))){
var inst_46047 = (state_46077[(10)]);
var inst_46056 = (state_46077[(7)]);
var inst_46057 = (state_46077[(8)]);
var inst_46058 = (state_46077[(9)]);
var inst_46061 = (function (){var cs = inst_46047;
var vec__46052 = inst_46056;
var v = inst_46057;
var c = inst_46058;
return (function (p1__46043_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46043_SHARP_);
});
})();
var inst_46062 = cljs.core.filterv(inst_46061,inst_46047);
var inst_46047__$1 = inst_46062;
var state_46077__$1 = (function (){var statearr_46093 = state_46077;
(statearr_46093[(10)] = inst_46047__$1);

return statearr_46093;
})();
var statearr_46094_46855 = state_46077__$1;
(statearr_46094_46855[(2)] = null);

(statearr_46094_46855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46095 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46095[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46095[(1)] = (1));

return statearr_46095;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46077){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46077);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46096){var ex__34382__auto__ = e46096;
var statearr_46097_46856 = state_46077;
(statearr_46097_46856[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46077[(4)]))){
var statearr_46099_46857 = state_46077;
(statearr_46099_46857[(1)] = cljs.core.first((state_46077[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46858 = state_46077;
state_46077 = G__46858;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46108 = f__34484__auto__();
(statearr_46108[(6)] = c__34483__auto___46845);

return statearr_46108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46110 = arguments.length;
switch (G__46110) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34483__auto___46860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46134){
var state_val_46135 = (state_46134[(1)]);
if((state_val_46135 === (7))){
var inst_46116 = (state_46134[(7)]);
var inst_46116__$1 = (state_46134[(2)]);
var inst_46117 = (inst_46116__$1 == null);
var inst_46118 = cljs.core.not(inst_46117);
var state_46134__$1 = (function (){var statearr_46136 = state_46134;
(statearr_46136[(7)] = inst_46116__$1);

return statearr_46136;
})();
if(inst_46118){
var statearr_46137_46861 = state_46134__$1;
(statearr_46137_46861[(1)] = (8));

} else {
var statearr_46138_46862 = state_46134__$1;
(statearr_46138_46862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (1))){
var inst_46111 = (0);
var state_46134__$1 = (function (){var statearr_46139 = state_46134;
(statearr_46139[(8)] = inst_46111);

return statearr_46139;
})();
var statearr_46140_46863 = state_46134__$1;
(statearr_46140_46863[(2)] = null);

(statearr_46140_46863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (4))){
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46134__$1,(7),ch);
} else {
if((state_val_46135 === (6))){
var inst_46129 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46145_46864 = state_46134__$1;
(statearr_46145_46864[(2)] = inst_46129);

(statearr_46145_46864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (3))){
var inst_46131 = (state_46134[(2)]);
var inst_46132 = cljs.core.async.close_BANG_(out);
var state_46134__$1 = (function (){var statearr_46146 = state_46134;
(statearr_46146[(9)] = inst_46131);

return statearr_46146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46134__$1,inst_46132);
} else {
if((state_val_46135 === (2))){
var inst_46111 = (state_46134[(8)]);
var inst_46113 = (inst_46111 < n);
var state_46134__$1 = state_46134;
if(cljs.core.truth_(inst_46113)){
var statearr_46148_46865 = state_46134__$1;
(statearr_46148_46865[(1)] = (4));

} else {
var statearr_46149_46866 = state_46134__$1;
(statearr_46149_46866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (11))){
var inst_46111 = (state_46134[(8)]);
var inst_46121 = (state_46134[(2)]);
var inst_46122 = (inst_46111 + (1));
var inst_46111__$1 = inst_46122;
var state_46134__$1 = (function (){var statearr_46151 = state_46134;
(statearr_46151[(10)] = inst_46121);

(statearr_46151[(8)] = inst_46111__$1);

return statearr_46151;
})();
var statearr_46152_46867 = state_46134__$1;
(statearr_46152_46867[(2)] = null);

(statearr_46152_46867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (9))){
var state_46134__$1 = state_46134;
var statearr_46153_46868 = state_46134__$1;
(statearr_46153_46868[(2)] = null);

(statearr_46153_46868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (5))){
var state_46134__$1 = state_46134;
var statearr_46155_46869 = state_46134__$1;
(statearr_46155_46869[(2)] = null);

(statearr_46155_46869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (10))){
var inst_46126 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46156_46870 = state_46134__$1;
(statearr_46156_46870[(2)] = inst_46126);

(statearr_46156_46870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (8))){
var inst_46116 = (state_46134[(7)]);
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46134__$1,(11),out,inst_46116);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46157[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46157[(1)] = (1));

return statearr_46157;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46134){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46134);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46158){var ex__34382__auto__ = e46158;
var statearr_46159_46871 = state_46134;
(statearr_46159_46871[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46134[(4)]))){
var statearr_46160_46872 = state_46134;
(statearr_46160_46872[(1)] = cljs.core.first((state_46134[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46873 = state_46134;
state_46134 = G__46873;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46162 = f__34484__auto__();
(statearr_46162[(6)] = c__34483__auto___46860);

return statearr_46162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46167 = (function (f,ch,meta46168){
this.f = f;
this.ch = ch;
this.meta46168 = meta46168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46169,meta46168__$1){
var self__ = this;
var _46169__$1 = this;
return (new cljs.core.async.t_cljs$core$async46167(self__.f,self__.ch,meta46168__$1));
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46169){
var self__ = this;
var _46169__$1 = this;
return self__.meta46168;
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46170 = (function (f,ch,meta46168,_,fn1,meta46171){
this.f = f;
this.ch = ch;
this.meta46168 = meta46168;
this._ = _;
this.fn1 = fn1;
this.meta46171 = meta46171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46172,meta46171__$1){
var self__ = this;
var _46172__$1 = this;
return (new cljs.core.async.t_cljs$core$async46170(self__.f,self__.ch,self__.meta46168,self__._,self__.fn1,meta46171__$1));
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46172){
var self__ = this;
var _46172__$1 = this;
return self__.meta46171;
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46166_SHARP_){
var G__46173 = (((p1__46166_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46166_SHARP_) : self__.f.call(null,p1__46166_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46173) : f1.call(null,G__46173));
});
}));

(cljs.core.async.t_cljs$core$async46170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46168","meta46168",1746898207,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46167","cljs.core.async/t_cljs$core$async46167",-417262682,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46171","meta46171",-737645579,null)], null);
}));

(cljs.core.async.t_cljs$core$async46170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46170");

(cljs.core.async.t_cljs$core$async46170.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async46170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46170.
 */
cljs.core.async.__GT_t_cljs$core$async46170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46170(f__$1,ch__$1,meta46168__$1,___$2,fn1__$1,meta46171){
return (new cljs.core.async.t_cljs$core$async46170(f__$1,ch__$1,meta46168__$1,___$2,fn1__$1,meta46171));
});

}

return (new cljs.core.async.t_cljs$core$async46170(self__.f,self__.ch,self__.meta46168,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46174 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46174) : self__.f.call(null,G__46174));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46168","meta46168",1746898207,null)], null);
}));

(cljs.core.async.t_cljs$core$async46167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46167");

(cljs.core.async.t_cljs$core$async46167.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async46167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46167.
 */
cljs.core.async.__GT_t_cljs$core$async46167 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46167(f__$1,ch__$1,meta46168){
return (new cljs.core.async.t_cljs$core$async46167(f__$1,ch__$1,meta46168));
});

}

return (new cljs.core.async.t_cljs$core$async46167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46175 = (function (f,ch,meta46176){
this.f = f;
this.ch = ch;
this.meta46176 = meta46176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46177,meta46176__$1){
var self__ = this;
var _46177__$1 = this;
return (new cljs.core.async.t_cljs$core$async46175(self__.f,self__.ch,meta46176__$1));
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46177){
var self__ = this;
var _46177__$1 = this;
return self__.meta46176;
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46176","meta46176",282398075,null)], null);
}));

(cljs.core.async.t_cljs$core$async46175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46175");

(cljs.core.async.t_cljs$core$async46175.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async46175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46175.
 */
cljs.core.async.__GT_t_cljs$core$async46175 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46175(f__$1,ch__$1,meta46176){
return (new cljs.core.async.t_cljs$core$async46175(f__$1,ch__$1,meta46176));
});

}

return (new cljs.core.async.t_cljs$core$async46175(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46178 = (function (p,ch,meta46179){
this.p = p;
this.ch = ch;
this.meta46179 = meta46179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46180,meta46179__$1){
var self__ = this;
var _46180__$1 = this;
return (new cljs.core.async.t_cljs$core$async46178(self__.p,self__.ch,meta46179__$1));
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46180){
var self__ = this;
var _46180__$1 = this;
return self__.meta46179;
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46179","meta46179",-258440304,null)], null);
}));

(cljs.core.async.t_cljs$core$async46178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46178");

(cljs.core.async.t_cljs$core$async46178.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async46178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46178.
 */
cljs.core.async.__GT_t_cljs$core$async46178 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46178(p__$1,ch__$1,meta46179){
return (new cljs.core.async.t_cljs$core$async46178(p__$1,ch__$1,meta46179));
});

}

return (new cljs.core.async.t_cljs$core$async46178(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46182 = arguments.length;
switch (G__46182) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34483__auto___46875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46203){
var state_val_46204 = (state_46203[(1)]);
if((state_val_46204 === (7))){
var inst_46199 = (state_46203[(2)]);
var state_46203__$1 = state_46203;
var statearr_46205_46876 = state_46203__$1;
(statearr_46205_46876[(2)] = inst_46199);

(statearr_46205_46876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (1))){
var state_46203__$1 = state_46203;
var statearr_46206_46877 = state_46203__$1;
(statearr_46206_46877[(2)] = null);

(statearr_46206_46877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (4))){
var inst_46185 = (state_46203[(7)]);
var inst_46185__$1 = (state_46203[(2)]);
var inst_46186 = (inst_46185__$1 == null);
var state_46203__$1 = (function (){var statearr_46207 = state_46203;
(statearr_46207[(7)] = inst_46185__$1);

return statearr_46207;
})();
if(cljs.core.truth_(inst_46186)){
var statearr_46208_46878 = state_46203__$1;
(statearr_46208_46878[(1)] = (5));

} else {
var statearr_46209_46879 = state_46203__$1;
(statearr_46209_46879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (6))){
var inst_46185 = (state_46203[(7)]);
var inst_46190 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46185) : p.call(null,inst_46185));
var state_46203__$1 = state_46203;
if(cljs.core.truth_(inst_46190)){
var statearr_46210_46880 = state_46203__$1;
(statearr_46210_46880[(1)] = (8));

} else {
var statearr_46211_46881 = state_46203__$1;
(statearr_46211_46881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (3))){
var inst_46201 = (state_46203[(2)]);
var state_46203__$1 = state_46203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46203__$1,inst_46201);
} else {
if((state_val_46204 === (2))){
var state_46203__$1 = state_46203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46203__$1,(4),ch);
} else {
if((state_val_46204 === (11))){
var inst_46193 = (state_46203[(2)]);
var state_46203__$1 = state_46203;
var statearr_46212_46882 = state_46203__$1;
(statearr_46212_46882[(2)] = inst_46193);

(statearr_46212_46882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (9))){
var state_46203__$1 = state_46203;
var statearr_46213_46883 = state_46203__$1;
(statearr_46213_46883[(2)] = null);

(statearr_46213_46883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (5))){
var inst_46188 = cljs.core.async.close_BANG_(out);
var state_46203__$1 = state_46203;
var statearr_46214_46884 = state_46203__$1;
(statearr_46214_46884[(2)] = inst_46188);

(statearr_46214_46884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (10))){
var inst_46196 = (state_46203[(2)]);
var state_46203__$1 = (function (){var statearr_46215 = state_46203;
(statearr_46215[(8)] = inst_46196);

return statearr_46215;
})();
var statearr_46216_46885 = state_46203__$1;
(statearr_46216_46885[(2)] = null);

(statearr_46216_46885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46204 === (8))){
var inst_46185 = (state_46203[(7)]);
var state_46203__$1 = state_46203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46203__$1,(11),out,inst_46185);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46217 = [null,null,null,null,null,null,null,null,null];
(statearr_46217[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46217[(1)] = (1));

return statearr_46217;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46203){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46203);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46218){var ex__34382__auto__ = e46218;
var statearr_46219_46886 = state_46203;
(statearr_46219_46886[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46203[(4)]))){
var statearr_46220_46887 = state_46203;
(statearr_46220_46887[(1)] = cljs.core.first((state_46203[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46888 = state_46203;
state_46203 = G__46888;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46221 = f__34484__auto__();
(statearr_46221[(6)] = c__34483__auto___46875);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46223 = arguments.length;
switch (G__46223) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46285){
var state_val_46286 = (state_46285[(1)]);
if((state_val_46286 === (7))){
var inst_46281 = (state_46285[(2)]);
var state_46285__$1 = state_46285;
var statearr_46287_46890 = state_46285__$1;
(statearr_46287_46890[(2)] = inst_46281);

(statearr_46287_46890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (20))){
var inst_46251 = (state_46285[(7)]);
var inst_46262 = (state_46285[(2)]);
var inst_46263 = cljs.core.next(inst_46251);
var inst_46237 = inst_46263;
var inst_46238 = null;
var inst_46239 = (0);
var inst_46240 = (0);
var state_46285__$1 = (function (){var statearr_46288 = state_46285;
(statearr_46288[(8)] = inst_46262);

(statearr_46288[(9)] = inst_46237);

(statearr_46288[(10)] = inst_46238);

(statearr_46288[(11)] = inst_46239);

(statearr_46288[(12)] = inst_46240);

return statearr_46288;
})();
var statearr_46289_46891 = state_46285__$1;
(statearr_46289_46891[(2)] = null);

(statearr_46289_46891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (1))){
var state_46285__$1 = state_46285;
var statearr_46290_46892 = state_46285__$1;
(statearr_46290_46892[(2)] = null);

(statearr_46290_46892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (4))){
var inst_46226 = (state_46285[(13)]);
var inst_46226__$1 = (state_46285[(2)]);
var inst_46227 = (inst_46226__$1 == null);
var state_46285__$1 = (function (){var statearr_46291 = state_46285;
(statearr_46291[(13)] = inst_46226__$1);

return statearr_46291;
})();
if(cljs.core.truth_(inst_46227)){
var statearr_46292_46893 = state_46285__$1;
(statearr_46292_46893[(1)] = (5));

} else {
var statearr_46293_46894 = state_46285__$1;
(statearr_46293_46894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (15))){
var state_46285__$1 = state_46285;
var statearr_46297_46895 = state_46285__$1;
(statearr_46297_46895[(2)] = null);

(statearr_46297_46895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (21))){
var state_46285__$1 = state_46285;
var statearr_46298_46896 = state_46285__$1;
(statearr_46298_46896[(2)] = null);

(statearr_46298_46896[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (13))){
var inst_46240 = (state_46285[(12)]);
var inst_46237 = (state_46285[(9)]);
var inst_46238 = (state_46285[(10)]);
var inst_46239 = (state_46285[(11)]);
var inst_46247 = (state_46285[(2)]);
var inst_46248 = (inst_46240 + (1));
var tmp46294 = inst_46237;
var tmp46295 = inst_46238;
var tmp46296 = inst_46239;
var inst_46237__$1 = tmp46294;
var inst_46238__$1 = tmp46295;
var inst_46239__$1 = tmp46296;
var inst_46240__$1 = inst_46248;
var state_46285__$1 = (function (){var statearr_46299 = state_46285;
(statearr_46299[(14)] = inst_46247);

(statearr_46299[(9)] = inst_46237__$1);

(statearr_46299[(10)] = inst_46238__$1);

(statearr_46299[(11)] = inst_46239__$1);

(statearr_46299[(12)] = inst_46240__$1);

return statearr_46299;
})();
var statearr_46300_46897 = state_46285__$1;
(statearr_46300_46897[(2)] = null);

(statearr_46300_46897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (22))){
var state_46285__$1 = state_46285;
var statearr_46301_46898 = state_46285__$1;
(statearr_46301_46898[(2)] = null);

(statearr_46301_46898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (6))){
var inst_46226 = (state_46285[(13)]);
var inst_46235 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46226) : f.call(null,inst_46226));
var inst_46236 = cljs.core.seq(inst_46235);
var inst_46237 = inst_46236;
var inst_46238 = null;
var inst_46239 = (0);
var inst_46240 = (0);
var state_46285__$1 = (function (){var statearr_46302 = state_46285;
(statearr_46302[(9)] = inst_46237);

(statearr_46302[(10)] = inst_46238);

(statearr_46302[(11)] = inst_46239);

(statearr_46302[(12)] = inst_46240);

return statearr_46302;
})();
var statearr_46303_46899 = state_46285__$1;
(statearr_46303_46899[(2)] = null);

(statearr_46303_46899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (17))){
var inst_46251 = (state_46285[(7)]);
var inst_46255 = cljs.core.chunk_first(inst_46251);
var inst_46256 = cljs.core.chunk_rest(inst_46251);
var inst_46257 = cljs.core.count(inst_46255);
var inst_46237 = inst_46256;
var inst_46238 = inst_46255;
var inst_46239 = inst_46257;
var inst_46240 = (0);
var state_46285__$1 = (function (){var statearr_46304 = state_46285;
(statearr_46304[(9)] = inst_46237);

(statearr_46304[(10)] = inst_46238);

(statearr_46304[(11)] = inst_46239);

(statearr_46304[(12)] = inst_46240);

return statearr_46304;
})();
var statearr_46305_46900 = state_46285__$1;
(statearr_46305_46900[(2)] = null);

(statearr_46305_46900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (3))){
var inst_46283 = (state_46285[(2)]);
var state_46285__$1 = state_46285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46285__$1,inst_46283);
} else {
if((state_val_46286 === (12))){
var inst_46271 = (state_46285[(2)]);
var state_46285__$1 = state_46285;
var statearr_46306_46901 = state_46285__$1;
(statearr_46306_46901[(2)] = inst_46271);

(statearr_46306_46901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (2))){
var state_46285__$1 = state_46285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46285__$1,(4),in$);
} else {
if((state_val_46286 === (23))){
var inst_46279 = (state_46285[(2)]);
var state_46285__$1 = state_46285;
var statearr_46307_46902 = state_46285__$1;
(statearr_46307_46902[(2)] = inst_46279);

(statearr_46307_46902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (19))){
var inst_46266 = (state_46285[(2)]);
var state_46285__$1 = state_46285;
var statearr_46308_46903 = state_46285__$1;
(statearr_46308_46903[(2)] = inst_46266);

(statearr_46308_46903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (11))){
var inst_46237 = (state_46285[(9)]);
var inst_46251 = (state_46285[(7)]);
var inst_46251__$1 = cljs.core.seq(inst_46237);
var state_46285__$1 = (function (){var statearr_46309 = state_46285;
(statearr_46309[(7)] = inst_46251__$1);

return statearr_46309;
})();
if(inst_46251__$1){
var statearr_46310_46904 = state_46285__$1;
(statearr_46310_46904[(1)] = (14));

} else {
var statearr_46311_46905 = state_46285__$1;
(statearr_46311_46905[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (9))){
var inst_46273 = (state_46285[(2)]);
var inst_46274 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46285__$1 = (function (){var statearr_46312 = state_46285;
(statearr_46312[(15)] = inst_46273);

return statearr_46312;
})();
if(cljs.core.truth_(inst_46274)){
var statearr_46313_46906 = state_46285__$1;
(statearr_46313_46906[(1)] = (21));

} else {
var statearr_46314_46907 = state_46285__$1;
(statearr_46314_46907[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (5))){
var inst_46229 = cljs.core.async.close_BANG_(out);
var state_46285__$1 = state_46285;
var statearr_46315_46908 = state_46285__$1;
(statearr_46315_46908[(2)] = inst_46229);

(statearr_46315_46908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (14))){
var inst_46251 = (state_46285[(7)]);
var inst_46253 = cljs.core.chunked_seq_QMARK_(inst_46251);
var state_46285__$1 = state_46285;
if(inst_46253){
var statearr_46316_46909 = state_46285__$1;
(statearr_46316_46909[(1)] = (17));

} else {
var statearr_46317_46910 = state_46285__$1;
(statearr_46317_46910[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (16))){
var inst_46269 = (state_46285[(2)]);
var state_46285__$1 = state_46285;
var statearr_46318_46911 = state_46285__$1;
(statearr_46318_46911[(2)] = inst_46269);

(statearr_46318_46911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46286 === (10))){
var inst_46238 = (state_46285[(10)]);
var inst_46240 = (state_46285[(12)]);
var inst_46245 = cljs.core._nth(inst_46238,inst_46240);
var state_46285__$1 = state_46285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46285__$1,(13),out,inst_46245);
} else {
if((state_val_46286 === (18))){
var inst_46251 = (state_46285[(7)]);
var inst_46260 = cljs.core.first(inst_46251);
var state_46285__$1 = state_46285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46285__$1,(20),out,inst_46260);
} else {
if((state_val_46286 === (8))){
var inst_46240 = (state_46285[(12)]);
var inst_46239 = (state_46285[(11)]);
var inst_46242 = (inst_46240 < inst_46239);
var inst_46243 = inst_46242;
var state_46285__$1 = state_46285;
if(cljs.core.truth_(inst_46243)){
var statearr_46319_46912 = state_46285__$1;
(statearr_46319_46912[(1)] = (10));

} else {
var statearr_46320_46913 = state_46285__$1;
(statearr_46320_46913[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_46321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46321[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__);

(statearr_46321[(1)] = (1));

return statearr_46321;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____1 = (function (state_46285){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46285);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46322){var ex__34382__auto__ = e46322;
var statearr_46323_46914 = state_46285;
(statearr_46323_46914[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46285[(4)]))){
var statearr_46324_46915 = state_46285;
(statearr_46324_46915[(1)] = cljs.core.first((state_46285[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46916 = state_46285;
state_46285 = G__46916;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__ = function(state_46285){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____1.call(this,state_46285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46325 = f__34484__auto__();
(statearr_46325[(6)] = c__34483__auto__);

return statearr_46325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46327 = arguments.length;
switch (G__46327) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46329 = arguments.length;
switch (G__46329) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46331 = arguments.length;
switch (G__46331) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34483__auto___46920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46355){
var state_val_46356 = (state_46355[(1)]);
if((state_val_46356 === (7))){
var inst_46350 = (state_46355[(2)]);
var state_46355__$1 = state_46355;
var statearr_46357_46921 = state_46355__$1;
(statearr_46357_46921[(2)] = inst_46350);

(statearr_46357_46921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (1))){
var inst_46332 = null;
var state_46355__$1 = (function (){var statearr_46358 = state_46355;
(statearr_46358[(7)] = inst_46332);

return statearr_46358;
})();
var statearr_46359_46922 = state_46355__$1;
(statearr_46359_46922[(2)] = null);

(statearr_46359_46922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (4))){
var inst_46335 = (state_46355[(8)]);
var inst_46335__$1 = (state_46355[(2)]);
var inst_46336 = (inst_46335__$1 == null);
var inst_46337 = cljs.core.not(inst_46336);
var state_46355__$1 = (function (){var statearr_46360 = state_46355;
(statearr_46360[(8)] = inst_46335__$1);

return statearr_46360;
})();
if(inst_46337){
var statearr_46361_46923 = state_46355__$1;
(statearr_46361_46923[(1)] = (5));

} else {
var statearr_46362_46924 = state_46355__$1;
(statearr_46362_46924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (6))){
var state_46355__$1 = state_46355;
var statearr_46363_46925 = state_46355__$1;
(statearr_46363_46925[(2)] = null);

(statearr_46363_46925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (3))){
var inst_46352 = (state_46355[(2)]);
var inst_46353 = cljs.core.async.close_BANG_(out);
var state_46355__$1 = (function (){var statearr_46364 = state_46355;
(statearr_46364[(9)] = inst_46352);

return statearr_46364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46355__$1,inst_46353);
} else {
if((state_val_46356 === (2))){
var state_46355__$1 = state_46355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46355__$1,(4),ch);
} else {
if((state_val_46356 === (11))){
var inst_46335 = (state_46355[(8)]);
var inst_46344 = (state_46355[(2)]);
var inst_46332 = inst_46335;
var state_46355__$1 = (function (){var statearr_46365 = state_46355;
(statearr_46365[(10)] = inst_46344);

(statearr_46365[(7)] = inst_46332);

return statearr_46365;
})();
var statearr_46366_46926 = state_46355__$1;
(statearr_46366_46926[(2)] = null);

(statearr_46366_46926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (9))){
var inst_46335 = (state_46355[(8)]);
var state_46355__$1 = state_46355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46355__$1,(11),out,inst_46335);
} else {
if((state_val_46356 === (5))){
var inst_46335 = (state_46355[(8)]);
var inst_46332 = (state_46355[(7)]);
var inst_46339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46335,inst_46332);
var state_46355__$1 = state_46355;
if(inst_46339){
var statearr_46368_46927 = state_46355__$1;
(statearr_46368_46927[(1)] = (8));

} else {
var statearr_46369_46928 = state_46355__$1;
(statearr_46369_46928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (10))){
var inst_46347 = (state_46355[(2)]);
var state_46355__$1 = state_46355;
var statearr_46370_46929 = state_46355__$1;
(statearr_46370_46929[(2)] = inst_46347);

(statearr_46370_46929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (8))){
var inst_46332 = (state_46355[(7)]);
var tmp46367 = inst_46332;
var inst_46332__$1 = tmp46367;
var state_46355__$1 = (function (){var statearr_46371 = state_46355;
(statearr_46371[(7)] = inst_46332__$1);

return statearr_46371;
})();
var statearr_46372_46930 = state_46355__$1;
(statearr_46372_46930[(2)] = null);

(statearr_46372_46930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46373[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46373[(1)] = (1));

return statearr_46373;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46355){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46355);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46374){var ex__34382__auto__ = e46374;
var statearr_46375_46931 = state_46355;
(statearr_46375_46931[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46355[(4)]))){
var statearr_46376_46932 = state_46355;
(statearr_46376_46932[(1)] = cljs.core.first((state_46355[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46933 = state_46355;
state_46355 = G__46933;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46377 = f__34484__auto__();
(statearr_46377[(6)] = c__34483__auto___46920);

return statearr_46377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46379 = arguments.length;
switch (G__46379) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34483__auto___46935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46417){
var state_val_46418 = (state_46417[(1)]);
if((state_val_46418 === (7))){
var inst_46413 = (state_46417[(2)]);
var state_46417__$1 = state_46417;
var statearr_46419_46936 = state_46417__$1;
(statearr_46419_46936[(2)] = inst_46413);

(statearr_46419_46936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (1))){
var inst_46380 = (new Array(n));
var inst_46381 = inst_46380;
var inst_46382 = (0);
var state_46417__$1 = (function (){var statearr_46420 = state_46417;
(statearr_46420[(7)] = inst_46381);

(statearr_46420[(8)] = inst_46382);

return statearr_46420;
})();
var statearr_46421_46937 = state_46417__$1;
(statearr_46421_46937[(2)] = null);

(statearr_46421_46937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (4))){
var inst_46385 = (state_46417[(9)]);
var inst_46385__$1 = (state_46417[(2)]);
var inst_46386 = (inst_46385__$1 == null);
var inst_46387 = cljs.core.not(inst_46386);
var state_46417__$1 = (function (){var statearr_46422 = state_46417;
(statearr_46422[(9)] = inst_46385__$1);

return statearr_46422;
})();
if(inst_46387){
var statearr_46423_46938 = state_46417__$1;
(statearr_46423_46938[(1)] = (5));

} else {
var statearr_46424_46939 = state_46417__$1;
(statearr_46424_46939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (15))){
var inst_46407 = (state_46417[(2)]);
var state_46417__$1 = state_46417;
var statearr_46425_46940 = state_46417__$1;
(statearr_46425_46940[(2)] = inst_46407);

(statearr_46425_46940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (13))){
var state_46417__$1 = state_46417;
var statearr_46426_46941 = state_46417__$1;
(statearr_46426_46941[(2)] = null);

(statearr_46426_46941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (6))){
var inst_46382 = (state_46417[(8)]);
var inst_46403 = (inst_46382 > (0));
var state_46417__$1 = state_46417;
if(cljs.core.truth_(inst_46403)){
var statearr_46427_46942 = state_46417__$1;
(statearr_46427_46942[(1)] = (12));

} else {
var statearr_46428_46943 = state_46417__$1;
(statearr_46428_46943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (3))){
var inst_46415 = (state_46417[(2)]);
var state_46417__$1 = state_46417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46417__$1,inst_46415);
} else {
if((state_val_46418 === (12))){
var inst_46381 = (state_46417[(7)]);
var inst_46405 = cljs.core.vec(inst_46381);
var state_46417__$1 = state_46417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46417__$1,(15),out,inst_46405);
} else {
if((state_val_46418 === (2))){
var state_46417__$1 = state_46417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46417__$1,(4),ch);
} else {
if((state_val_46418 === (11))){
var inst_46397 = (state_46417[(2)]);
var inst_46398 = (new Array(n));
var inst_46381 = inst_46398;
var inst_46382 = (0);
var state_46417__$1 = (function (){var statearr_46429 = state_46417;
(statearr_46429[(10)] = inst_46397);

(statearr_46429[(7)] = inst_46381);

(statearr_46429[(8)] = inst_46382);

return statearr_46429;
})();
var statearr_46430_46944 = state_46417__$1;
(statearr_46430_46944[(2)] = null);

(statearr_46430_46944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (9))){
var inst_46381 = (state_46417[(7)]);
var inst_46395 = cljs.core.vec(inst_46381);
var state_46417__$1 = state_46417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46417__$1,(11),out,inst_46395);
} else {
if((state_val_46418 === (5))){
var inst_46381 = (state_46417[(7)]);
var inst_46382 = (state_46417[(8)]);
var inst_46385 = (state_46417[(9)]);
var inst_46390 = (state_46417[(11)]);
var inst_46389 = (inst_46381[inst_46382] = inst_46385);
var inst_46390__$1 = (inst_46382 + (1));
var inst_46391 = (inst_46390__$1 < n);
var state_46417__$1 = (function (){var statearr_46431 = state_46417;
(statearr_46431[(12)] = inst_46389);

(statearr_46431[(11)] = inst_46390__$1);

return statearr_46431;
})();
if(cljs.core.truth_(inst_46391)){
var statearr_46432_46945 = state_46417__$1;
(statearr_46432_46945[(1)] = (8));

} else {
var statearr_46433_46946 = state_46417__$1;
(statearr_46433_46946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (14))){
var inst_46410 = (state_46417[(2)]);
var inst_46411 = cljs.core.async.close_BANG_(out);
var state_46417__$1 = (function (){var statearr_46435 = state_46417;
(statearr_46435[(13)] = inst_46410);

return statearr_46435;
})();
var statearr_46436_46947 = state_46417__$1;
(statearr_46436_46947[(2)] = inst_46411);

(statearr_46436_46947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (10))){
var inst_46401 = (state_46417[(2)]);
var state_46417__$1 = state_46417;
var statearr_46437_46948 = state_46417__$1;
(statearr_46437_46948[(2)] = inst_46401);

(statearr_46437_46948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46418 === (8))){
var inst_46381 = (state_46417[(7)]);
var inst_46390 = (state_46417[(11)]);
var tmp46434 = inst_46381;
var inst_46381__$1 = tmp46434;
var inst_46382 = inst_46390;
var state_46417__$1 = (function (){var statearr_46438 = state_46417;
(statearr_46438[(7)] = inst_46381__$1);

(statearr_46438[(8)] = inst_46382);

return statearr_46438;
})();
var statearr_46439_46949 = state_46417__$1;
(statearr_46439_46949[(2)] = null);

(statearr_46439_46949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46440[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46440[(1)] = (1));

return statearr_46440;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46417){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46417);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46441){var ex__34382__auto__ = e46441;
var statearr_46442_46950 = state_46417;
(statearr_46442_46950[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46417[(4)]))){
var statearr_46443_46951 = state_46417;
(statearr_46443_46951[(1)] = cljs.core.first((state_46417[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46952 = state_46417;
state_46417 = G__46952;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46444 = f__34484__auto__();
(statearr_46444[(6)] = c__34483__auto___46935);

return statearr_46444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46446 = arguments.length;
switch (G__46446) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34483__auto___46954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_46491){
var state_val_46492 = (state_46491[(1)]);
if((state_val_46492 === (7))){
var inst_46487 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
var statearr_46493_46955 = state_46491__$1;
(statearr_46493_46955[(2)] = inst_46487);

(statearr_46493_46955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (1))){
var inst_46447 = [];
var inst_46448 = inst_46447;
var inst_46449 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46491__$1 = (function (){var statearr_46494 = state_46491;
(statearr_46494[(7)] = inst_46448);

(statearr_46494[(8)] = inst_46449);

return statearr_46494;
})();
var statearr_46495_46956 = state_46491__$1;
(statearr_46495_46956[(2)] = null);

(statearr_46495_46956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (4))){
var inst_46452 = (state_46491[(9)]);
var inst_46452__$1 = (state_46491[(2)]);
var inst_46453 = (inst_46452__$1 == null);
var inst_46454 = cljs.core.not(inst_46453);
var state_46491__$1 = (function (){var statearr_46496 = state_46491;
(statearr_46496[(9)] = inst_46452__$1);

return statearr_46496;
})();
if(inst_46454){
var statearr_46497_46957 = state_46491__$1;
(statearr_46497_46957[(1)] = (5));

} else {
var statearr_46498_46958 = state_46491__$1;
(statearr_46498_46958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (15))){
var inst_46448 = (state_46491[(7)]);
var inst_46479 = cljs.core.vec(inst_46448);
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46491__$1,(18),out,inst_46479);
} else {
if((state_val_46492 === (13))){
var inst_46474 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
var statearr_46499_46959 = state_46491__$1;
(statearr_46499_46959[(2)] = inst_46474);

(statearr_46499_46959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (6))){
var inst_46448 = (state_46491[(7)]);
var inst_46476 = inst_46448.length;
var inst_46477 = (inst_46476 > (0));
var state_46491__$1 = state_46491;
if(cljs.core.truth_(inst_46477)){
var statearr_46500_46960 = state_46491__$1;
(statearr_46500_46960[(1)] = (15));

} else {
var statearr_46501_46961 = state_46491__$1;
(statearr_46501_46961[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (17))){
var inst_46484 = (state_46491[(2)]);
var inst_46485 = cljs.core.async.close_BANG_(out);
var state_46491__$1 = (function (){var statearr_46502 = state_46491;
(statearr_46502[(10)] = inst_46484);

return statearr_46502;
})();
var statearr_46503_46962 = state_46491__$1;
(statearr_46503_46962[(2)] = inst_46485);

(statearr_46503_46962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (3))){
var inst_46489 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46491__$1,inst_46489);
} else {
if((state_val_46492 === (12))){
var inst_46448 = (state_46491[(7)]);
var inst_46467 = cljs.core.vec(inst_46448);
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46491__$1,(14),out,inst_46467);
} else {
if((state_val_46492 === (2))){
var state_46491__$1 = state_46491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46491__$1,(4),ch);
} else {
if((state_val_46492 === (11))){
var inst_46448 = (state_46491[(7)]);
var inst_46452 = (state_46491[(9)]);
var inst_46456 = (state_46491[(11)]);
var inst_46464 = inst_46448.push(inst_46452);
var tmp46504 = inst_46448;
var inst_46448__$1 = tmp46504;
var inst_46449 = inst_46456;
var state_46491__$1 = (function (){var statearr_46505 = state_46491;
(statearr_46505[(12)] = inst_46464);

(statearr_46505[(7)] = inst_46448__$1);

(statearr_46505[(8)] = inst_46449);

return statearr_46505;
})();
var statearr_46506_46963 = state_46491__$1;
(statearr_46506_46963[(2)] = null);

(statearr_46506_46963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (9))){
var inst_46449 = (state_46491[(8)]);
var inst_46460 = cljs.core.keyword_identical_QMARK_(inst_46449,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46491__$1 = state_46491;
var statearr_46507_46964 = state_46491__$1;
(statearr_46507_46964[(2)] = inst_46460);

(statearr_46507_46964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (5))){
var inst_46452 = (state_46491[(9)]);
var inst_46456 = (state_46491[(11)]);
var inst_46449 = (state_46491[(8)]);
var inst_46457 = (state_46491[(13)]);
var inst_46456__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46452) : f.call(null,inst_46452));
var inst_46457__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46456__$1,inst_46449);
var state_46491__$1 = (function (){var statearr_46508 = state_46491;
(statearr_46508[(11)] = inst_46456__$1);

(statearr_46508[(13)] = inst_46457__$1);

return statearr_46508;
})();
if(inst_46457__$1){
var statearr_46509_46965 = state_46491__$1;
(statearr_46509_46965[(1)] = (8));

} else {
var statearr_46510_46966 = state_46491__$1;
(statearr_46510_46966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (14))){
var inst_46452 = (state_46491[(9)]);
var inst_46456 = (state_46491[(11)]);
var inst_46469 = (state_46491[(2)]);
var inst_46470 = [];
var inst_46471 = inst_46470.push(inst_46452);
var inst_46448 = inst_46470;
var inst_46449 = inst_46456;
var state_46491__$1 = (function (){var statearr_46511 = state_46491;
(statearr_46511[(14)] = inst_46469);

(statearr_46511[(15)] = inst_46471);

(statearr_46511[(7)] = inst_46448);

(statearr_46511[(8)] = inst_46449);

return statearr_46511;
})();
var statearr_46512_46967 = state_46491__$1;
(statearr_46512_46967[(2)] = null);

(statearr_46512_46967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (16))){
var state_46491__$1 = state_46491;
var statearr_46513_46968 = state_46491__$1;
(statearr_46513_46968[(2)] = null);

(statearr_46513_46968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (10))){
var inst_46462 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
if(cljs.core.truth_(inst_46462)){
var statearr_46514_46969 = state_46491__$1;
(statearr_46514_46969[(1)] = (11));

} else {
var statearr_46515_46970 = state_46491__$1;
(statearr_46515_46970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (18))){
var inst_46481 = (state_46491[(2)]);
var state_46491__$1 = state_46491;
var statearr_46516_46971 = state_46491__$1;
(statearr_46516_46971[(2)] = inst_46481);

(statearr_46516_46971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46492 === (8))){
var inst_46457 = (state_46491[(13)]);
var state_46491__$1 = state_46491;
var statearr_46517_46972 = state_46491__$1;
(statearr_46517_46972[(2)] = inst_46457);

(statearr_46517_46972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_46518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46518[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_46518[(1)] = (1));

return statearr_46518;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_46491){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_46491);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e46519){var ex__34382__auto__ = e46519;
var statearr_46520_46973 = state_46491;
(statearr_46520_46973[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_46491[(4)]))){
var statearr_46521_46974 = state_46491;
(statearr_46521_46974[(1)] = cljs.core.first((state_46491[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46975 = state_46491;
state_46491 = G__46975;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_46491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_46491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_46522 = f__34484__auto__();
(statearr_46522[(6)] = c__34483__auto___46954);

return statearr_46522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
