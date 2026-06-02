goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49630,p__49631){
var map__49632 = p__49630;
var map__49632__$1 = cljs.core.__destructure_map(map__49632);
var svc = map__49632__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49633 = p__49631;
var map__49633__$1 = cljs.core.__destructure_map(map__49633);
var msg = map__49633__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49633__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49633__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49633__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49633__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49634,p__49635){
var map__49636 = p__49634;
var map__49636__$1 = cljs.core.__destructure_map(map__49636);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49636__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49637 = p__49635;
var map__49637__$1 = cljs.core.__destructure_map(map__49637);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49637__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49638,p__49639){
var map__49640 = p__49638;
var map__49640__$1 = cljs.core.__destructure_map(map__49640);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49640__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49640__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49641 = p__49639;
var map__49641__$1 = cljs.core.__destructure_map(map__49641);
var msg = map__49641__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49641__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49642,tid){
var map__49643 = p__49642;
var map__49643__$1 = cljs.core.__destructure_map(map__49643);
var svc = map__49643__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49643__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49648 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49649 = null;
var count__49650 = (0);
var i__49651 = (0);
while(true){
if((i__49651 < count__49650)){
var vec__49658 = chunk__49649.cljs$core$IIndexed$_nth$arity$2(null,i__49651);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49658,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49658,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49666 = seq__49648;
var G__49667 = chunk__49649;
var G__49668 = count__49650;
var G__49669 = (i__49651 + (1));
seq__49648 = G__49666;
chunk__49649 = G__49667;
count__49650 = G__49668;
i__49651 = G__49669;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49648);
if(temp__5804__auto__){
var seq__49648__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49648__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49648__$1);
var G__49670 = cljs.core.chunk_rest(seq__49648__$1);
var G__49671 = c__5565__auto__;
var G__49672 = cljs.core.count(c__5565__auto__);
var G__49673 = (0);
seq__49648 = G__49670;
chunk__49649 = G__49671;
count__49650 = G__49672;
i__49651 = G__49673;
continue;
} else {
var vec__49661 = cljs.core.first(seq__49648__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49661,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49661,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49674 = cljs.core.next(seq__49648__$1);
var G__49675 = null;
var G__49676 = (0);
var G__49677 = (0);
seq__49648 = G__49674;
chunk__49649 = G__49675;
count__49650 = G__49676;
i__49651 = G__49677;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49644_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49644_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49645_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49645_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49646_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49646_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49647_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49647_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49664){
var map__49665 = p__49664;
var map__49665__$1 = cljs.core.__destructure_map(map__49665);
var svc = map__49665__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
