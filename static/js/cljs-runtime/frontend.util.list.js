goog.provide('frontend.util.list');
frontend.util.list.newline_QMARK_ = (function frontend$util$list$newline_QMARK_(line){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,"\r\n")));
});
frontend.util.list.re_order_items = (function frontend$util$list$re_order_items(lines,start_idx){
var lines__$1 = lines;
var idx = start_idx;
var result = cljs.core.PersistentVector.EMPTY;
var double_newlines_QMARK_ = false;
while(true){
var vec__105517 = lines__$1;
var seq__105518 = cljs.core.seq(vec__105517);
var first__105519 = cljs.core.first(seq__105518);
var seq__105518__$1 = cljs.core.next(seq__105518);
var line = first__105519;
var others = seq__105518__$1;
if(cljs.core.empty_QMARK_(lines__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines__$1,idx,result,double_newlines_QMARK_,vec__105517,seq__105518,first__105519,seq__105518__$1,line,others){
return (function (line__$1){
if(frontend.util.list.newline_QMARK_(line__$1)){
return "";
} else {
return line__$1;
}
});})(lines__$1,idx,result,double_newlines_QMARK_,vec__105517,seq__105518,first__105519,seq__105518__$1,line,others))
,result));
} else {
var vec__105520 = cljs.core.re_find(/^(\d+){1}\./,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105520,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105520,(1),null);
var num = (cljs.core.truth_(num_str)?cljs.core.parse_long(num_str):null);
var double_newlines_QMARK__SINGLEQUOTE_ = ((double_newlines_QMARK_) || (((frontend.util.list.newline_QMARK_(line)) && (((cljs.core.seq(others)) && (frontend.util.list.newline_QMARK_(cljs.core.first(others))))))));
var vec__105523 = (cljs.core.truth_((function (){var and__5041__auto__ = (!(double_newlines_QMARK__SINGLEQUOTE_));
if(and__5041__auto__){
return num;
} else {
return and__5041__auto__;
}
})())?(function (){var idx_SINGLEQUOTE_ = (idx + (1));
var line_SINGLEQUOTE_ = clojure.string.replace_first(line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"."].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_SINGLEQUOTE_),"."].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line_SINGLEQUOTE_)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line)], null));
var idx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105523,(0),null);
var result_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105523,(1),null);
var G__105526 = others;
var G__105527 = idx_SINGLEQUOTE_;
var G__105528 = result_SINGLEQUOTE_;
var G__105529 = double_newlines_QMARK__SINGLEQUOTE_;
lines__$1 = G__105526;
idx = G__105527;
result = G__105528;
double_newlines_QMARK_ = G__105529;
continue;
}
break;
}
});

//# sourceMappingURL=frontend.util.list.js.map
