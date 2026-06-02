goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5772__auto__ = [];
var len__5766__auto___123226 = arguments.length;
var i__5767__auto___123227 = (0);
while(true){
if((i__5767__auto___123227 < len__5766__auto___123226)){
args__5772__auto__.push((arguments[i__5767__auto___123227]));

var G__123228 = (i__5767__auto___123227 + (1));
i__5767__auto___123227 = G__123228;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq123213){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq123213));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5772__auto__ = [];
var len__5766__auto___123230 = arguments.length;
var i__5767__auto___123231 = (0);
while(true){
if((i__5767__auto___123231 < len__5766__auto___123230)){
args__5772__auto__.push((arguments[i__5767__auto___123231]));

var G__123232 = (i__5767__auto___123231 + (1));
i__5767__auto___123231 = G__123232;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq123216){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq123216));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__123219 = "";
var G__123219__$1 = (cljs.core.truth_(re.ignoreCase)?[G__123219,"i"].join(''):G__123219);
var G__123219__$2 = (cljs.core.truth_(re.multiline)?[G__123219__$1,"m"].join(''):G__123219__$1);
if(cljs.core.truth_(re.unicode)){
return [G__123219__$2,"u"].join('');
} else {
return G__123219__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
