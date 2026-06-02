goog.provide('logseq.sdk.utils');
logseq.sdk.utils.normalize_keyword_for_json = (function logseq$sdk$utils$normalize_keyword_for_json(var_args){
var G__120959 = arguments.length;
switch (G__120959) {
case 1:
return logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1 = (function (input){
return logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2(input,true);
}));

(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2 = (function (input,camel_case_QMARK_){
if(cljs.core.truth_(input)){
return clojure.walk.postwalk((function (a){
if((a instanceof cljs.core.Keyword)){
var G__120960 = cljs.core.name(a);
if(cljs.core.truth_(camel_case_QMARK_)){
return camel_snake_kebab.core.__GT_camelCase(G__120960);
} else {
return G__120960;
}
} else {
if(cljs.core.uuid_QMARK_(a)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
return a;

}
}
}),input);
} else {
return null;
}
}));

(logseq.sdk.utils.normalize_keyword_for_json.cljs$lang$maxFixedArity = 2);

logseq.sdk.utils.uuid_or_throw_error = (function logseq$sdk$utils$uuid_or_throw_error(s){
if(cljs.core.uuid_QMARK_(s)){
return s;
} else {
if(frontend.util.uuid_string_QMARK_(s)){
return cljs.core.uuid(s);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," is not a valid UUID string."].join('')));

}
}
});

//# sourceMappingURL=logseq.sdk.utils.js.map
