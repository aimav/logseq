goog.provide('frontend.context.i18n');
frontend.context.i18n.dicts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.dicts.dicts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tongue","fallback","tongue/fallback",1378320181),new cljs.core.Keyword(null,"en","en",88457073)], null)], 0));
frontend.context.i18n.translate = tongue.core.build_translate(frontend.context.i18n.dicts);
frontend.context.i18n.t = (function frontend$context$i18n$t(var_args){
var args__5772__auto__ = [];
var len__5766__auto___84916 = arguments.length;
var i__5767__auto___84917 = (0);
while(true){
if((i__5767__auto___84917 < len__5766__auto___84916)){
args__5772__auto__.push((arguments[i__5767__auto___84917]));

var G__84918 = (i__5767__auto___84917 + (1));
i__5767__auto___84917 = G__84918;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var preferred_language = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.sub(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)));
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,preferred_language,args);
}catch (e84914){var e = e84914;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.context.i18n",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"failed-translation","failed-translation",-790554549),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"lang","lang",-1819677104),preferred_language], null),new cljs.core.Keyword(null,"line","line",212345235),21], null)),null);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failed-translation","failed-translation",-790554549),new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"lang","lang",-1819677104),preferred_language], null)], null)], null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,new cljs.core.Keyword(null,"en","en",88457073),args);
}}));

(frontend.context.i18n.t.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.context.i18n.t.cljs$lang$applyTo = (function (seq84913){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84913));
}));

frontend.context.i18n.fetch_local_language = (function frontend$context$i18n$fetch_local_language(){
return window.navigator.language;
});
frontend.context.i18n.start = (function frontend$context$i18n$start(){
var preferred_language = frontend.state.sub(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017));
if((preferred_language == null)){
return frontend.state.set_preferred_language_BANG_(frontend.context.i18n.fetch_local_language());
} else {
return null;
}
});

//# sourceMappingURL=frontend.context.i18n.js.map
