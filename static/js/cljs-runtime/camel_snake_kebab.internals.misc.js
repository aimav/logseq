goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101200 = arguments.length;
var i__5767__auto___101201 = (0);
while(true){
if((i__5767__auto___101201 < len__5766__auto___101200)){
args__5772__auto__.push((arguments[i__5767__auto___101201]));

var G__101202 = (i__5767__auto___101201 + (1));
i__5767__auto___101201 = G__101202;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__101194){
var map__101195 = p__101194;
var map__101195__$1 = cljs.core.__destructure_map(map__101195);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__101195__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5802__auto__){
var vec__101196 = temp__5802__auto__;
var seq__101197 = cljs.core.seq(vec__101196);
var first__101198 = cljs.core.first(seq__101197);
var seq__101197__$1 = cljs.core.next(seq__101197);
var first = first__101198;
var rest = seq__101197__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq101189){
var G__101190 = cljs.core.first(seq101189);
var seq101189__$1 = cljs.core.next(seq101189);
var G__101191 = cljs.core.first(seq101189__$1);
var seq101189__$2 = cljs.core.next(seq101189__$1);
var G__101192 = cljs.core.first(seq101189__$2);
var seq101189__$3 = cljs.core.next(seq101189__$2);
var G__101193 = cljs.core.first(seq101189__$3);
var seq101189__$4 = cljs.core.next(seq101189__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101190,G__101191,G__101192,G__101193,seq101189__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5043__auto__ = (function (){var G__101199 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__101199) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__101199));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
