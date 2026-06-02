goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48322,res){
var map__48323 = p__48322;
var map__48323__$1 = cljs.core.__destructure_map(map__48323);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48323__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48323__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48324 = res;
var G__48324__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48324,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48324);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48324__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48324__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48326 = arguments.length;
switch (G__48326) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48327,msg,handlers,timeout_after_ms){
var map__48328 = p__48327;
var map__48328__$1 = cljs.core.__destructure_map(map__48328);
var runtime = map__48328__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48328__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48381 = arguments.length;
var i__5767__auto___48382 = (0);
while(true){
if((i__5767__auto___48382 < len__5766__auto___48381)){
args__5772__auto__.push((arguments[i__5767__auto___48382]));

var G__48383 = (i__5767__auto___48382 + (1));
i__5767__auto___48382 = G__48383;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48332,ev,args){
var map__48333 = p__48332;
var map__48333__$1 = cljs.core.__destructure_map(map__48333);
var runtime = map__48333__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48334 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48337 = null;
var count__48338 = (0);
var i__48339 = (0);
while(true){
if((i__48339 < count__48338)){
var ext = chunk__48337.cljs$core$IIndexed$_nth$arity$2(null,i__48339);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48384 = seq__48334;
var G__48385 = chunk__48337;
var G__48386 = count__48338;
var G__48387 = (i__48339 + (1));
seq__48334 = G__48384;
chunk__48337 = G__48385;
count__48338 = G__48386;
i__48339 = G__48387;
continue;
} else {
var G__48388 = seq__48334;
var G__48389 = chunk__48337;
var G__48390 = count__48338;
var G__48391 = (i__48339 + (1));
seq__48334 = G__48388;
chunk__48337 = G__48389;
count__48338 = G__48390;
i__48339 = G__48391;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48334);
if(temp__5804__auto__){
var seq__48334__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48334__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48334__$1);
var G__48392 = cljs.core.chunk_rest(seq__48334__$1);
var G__48393 = c__5565__auto__;
var G__48394 = cljs.core.count(c__5565__auto__);
var G__48395 = (0);
seq__48334 = G__48392;
chunk__48337 = G__48393;
count__48338 = G__48394;
i__48339 = G__48395;
continue;
} else {
var ext = cljs.core.first(seq__48334__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48396 = cljs.core.next(seq__48334__$1);
var G__48397 = null;
var G__48398 = (0);
var G__48399 = (0);
seq__48334 = G__48396;
chunk__48337 = G__48397;
count__48338 = G__48398;
i__48339 = G__48399;
continue;
} else {
var G__48400 = cljs.core.next(seq__48334__$1);
var G__48401 = null;
var G__48402 = (0);
var G__48403 = (0);
seq__48334 = G__48400;
chunk__48337 = G__48401;
count__48338 = G__48402;
i__48339 = G__48403;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48329){
var G__48330 = cljs.core.first(seq48329);
var seq48329__$1 = cljs.core.next(seq48329);
var G__48331 = cljs.core.first(seq48329__$1);
var seq48329__$2 = cljs.core.next(seq48329__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48330,G__48331,seq48329__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48342,p__48343){
var map__48344 = p__48342;
var map__48344__$1 = cljs.core.__destructure_map(map__48344);
var runtime = map__48344__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48345 = p__48343;
var map__48345__$1 = cljs.core.__destructure_map(map__48345);
var msg = map__48345__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48346 = cljs.core.deref(state_ref);
var map__48346__$1 = cljs.core.__destructure_map(map__48346);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48347){
var map__48348 = p__48347;
var map__48348__$1 = cljs.core.__destructure_map(map__48348);
var runtime = map__48348__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48348__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48349,msg){
var map__48350 = p__48349;
var map__48350__$1 = cljs.core.__destructure_map(map__48350);
var runtime = map__48350__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48350__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48351,key,p__48352){
var map__48353 = p__48351;
var map__48353__$1 = cljs.core.__destructure_map(map__48353);
var state = map__48353__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48354 = p__48352;
var map__48354__$1 = cljs.core.__destructure_map(map__48354);
var spec = map__48354__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48354__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48355,key,spec){
var map__48356 = p__48355;
var map__48356__$1 = cljs.core.__destructure_map(map__48356);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48356__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48357_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48357_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48358_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48358_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48359_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48359_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48360_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48360_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48361_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48361_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48362,key){
var map__48363 = p__48362;
var map__48363__$1 = cljs.core.__destructure_map(map__48363);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48363__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48364,msg){
var map__48365 = p__48364;
var map__48365__$1 = cljs.core.__destructure_map(map__48365);
var runtime = map__48365__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48366,p__48367){
var map__48368 = p__48366;
var map__48368__$1 = cljs.core.__destructure_map(map__48368);
var runtime = map__48368__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48369 = p__48367;
var map__48369__$1 = cljs.core.__destructure_map(map__48369);
var msg = map__48369__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48369__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48369__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48370 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48372 = null;
var count__48373 = (0);
var i__48374 = (0);
while(true){
if((i__48374 < count__48373)){
var map__48378 = chunk__48372.cljs$core$IIndexed$_nth$arity$2(null,i__48374);
var map__48378__$1 = cljs.core.__destructure_map(map__48378);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48378__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48404 = seq__48370;
var G__48405 = chunk__48372;
var G__48406 = count__48373;
var G__48407 = (i__48374 + (1));
seq__48370 = G__48404;
chunk__48372 = G__48405;
count__48373 = G__48406;
i__48374 = G__48407;
continue;
} else {
var G__48408 = seq__48370;
var G__48409 = chunk__48372;
var G__48410 = count__48373;
var G__48411 = (i__48374 + (1));
seq__48370 = G__48408;
chunk__48372 = G__48409;
count__48373 = G__48410;
i__48374 = G__48411;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48370);
if(temp__5804__auto__){
var seq__48370__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48370__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48370__$1);
var G__48412 = cljs.core.chunk_rest(seq__48370__$1);
var G__48413 = c__5565__auto__;
var G__48414 = cljs.core.count(c__5565__auto__);
var G__48415 = (0);
seq__48370 = G__48412;
chunk__48372 = G__48413;
count__48373 = G__48414;
i__48374 = G__48415;
continue;
} else {
var map__48379 = cljs.core.first(seq__48370__$1);
var map__48379__$1 = cljs.core.__destructure_map(map__48379);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48416 = cljs.core.next(seq__48370__$1);
var G__48417 = null;
var G__48418 = (0);
var G__48419 = (0);
seq__48370 = G__48416;
chunk__48372 = G__48417;
count__48373 = G__48418;
i__48374 = G__48419;
continue;
} else {
var G__48420 = cljs.core.next(seq__48370__$1);
var G__48421 = null;
var G__48422 = (0);
var G__48423 = (0);
seq__48370 = G__48420;
chunk__48372 = G__48421;
count__48373 = G__48422;
i__48374 = G__48423;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
