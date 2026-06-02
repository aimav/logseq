goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69859 = arguments.length;
var i__5767__auto___69860 = (0);
while(true){
if((i__5767__auto___69860 < len__5766__auto___69859)){
args__5772__auto__.push((arguments[i__5767__auto___69860]));

var G__69861 = (i__5767__auto___69860 + (1));
i__5767__auto___69860 = G__69861;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.truth_(frontend.state.developer_mode_QMARK_())){
var seq__69850 = cljs.core.seq(xs);
var chunk__69851 = null;
var count__69852 = (0);
var i__69853 = (0);
while(true){
if((i__69853 < count__69852)){
var x = chunk__69851.cljs$core$IIndexed$_nth$arity$2(null,i__69853);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__69862 = seq__69850;
var G__69863 = chunk__69851;
var G__69864 = count__69852;
var G__69865 = (i__69853 + (1));
seq__69850 = G__69862;
chunk__69851 = G__69863;
count__69852 = G__69864;
i__69853 = G__69865;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69850);
if(temp__5804__auto__){
var seq__69850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69850__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69850__$1);
var G__69866 = cljs.core.chunk_rest(seq__69850__$1);
var G__69867 = c__5565__auto__;
var G__69868 = cljs.core.count(c__5565__auto__);
var G__69869 = (0);
seq__69850 = G__69866;
chunk__69851 = G__69867;
count__69852 = G__69868;
i__69853 = G__69869;
continue;
} else {
var x = cljs.core.first(seq__69850__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__69870 = cljs.core.next(seq__69850__$1);
var G__69871 = null;
var G__69872 = (0);
var G__69873 = (0);
seq__69850 = G__69870;
chunk__69851 = G__69871;
count__69852 = G__69872;
i__69853 = G__69873;
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
}));

(frontend.debug.pprint.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq69846){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69846));
}));


//# sourceMappingURL=frontend.debug.js.map
