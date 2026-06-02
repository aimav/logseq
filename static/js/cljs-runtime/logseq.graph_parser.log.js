goog.provide('logseq.graph_parser.log');
logseq.graph_parser.log.error = (function logseq$graph_parser$log$error(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53830 = arguments.length;
var i__5767__auto___53831 = (0);
while(true){
if((i__5767__auto___53831 < len__5766__auto___53830)){
args__5772__auto__.push((arguments[i__5767__auto___53831]));

var G__53832 = (i__5767__auto___53831 + (1));
i__5767__auto___53831 = G__53832;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return logseq.graph_parser.log.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(logseq.graph_parser.log.error.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.error,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,msgs));
}));

(logseq.graph_parser.log.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.graph_parser.log.error.cljs$lang$applyTo = (function (seq53829){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53829));
}));


//# sourceMappingURL=logseq.graph_parser.log.js.map
