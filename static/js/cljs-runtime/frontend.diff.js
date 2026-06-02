goog.provide('frontend.diff');
goog.scope(function(){
  frontend.diff.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$diff$dist$diff=shadow.js.require("module$node_modules$diff$dist$diff", {});
frontend.diff.diff = (function frontend$diff$diff(s1,s2){
return cljs_bean.core.__GT_clj((function (){var G__84705 = s1;
var G__84706 = s2;
var G__84707 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["newlineIsToken",true], null));
var fexpr__84704 = frontend.diff.goog$module$goog$object.get(module$node_modules$diff$dist$diff,"diffLines");
return (fexpr__84704.cljs$core$IFn$_invoke$arity$3 ? fexpr__84704.cljs$core$IFn$_invoke$arity$3(G__84705,G__84706,G__84707) : fexpr__84704.call(null,G__84705,G__84706,G__84707));
})());
});
frontend.diff.inline_special_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["`",null,"$",null,"*",null,"+",null,"/",null,"^",null,"~",null,"_",null], null), null);
frontend.diff.markdown_link_QMARK_ = (function frontend$diff$markdown_link_QMARK_(markup,current_line,pos){
var and__5041__auto__ = current_line;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,pos),"]")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,(pos + (1))),"(")) && (((clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_line,(0),pos),"[")) && (clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")")))))));
} else {
return and__5041__auto__;
}
});
frontend.diff.find_position = (function frontend$diff$find_position(markup,text){
if(((typeof markup === 'string') && (typeof text === 'string'))){
try{var pos = (function (){var t1 = cljs.core.seq(clojure.string.lower_case(markup));
var t2 = cljs.core.seq(clojure.string.lower_case(text));
var i1 = (0);
var i2 = (0);
while(true){
var vec__84717 = t1;
var seq__84718 = cljs.core.seq(vec__84717);
var first__84719 = cljs.core.first(seq__84718);
var seq__84718__$1 = cljs.core.next(seq__84718);
var h1 = first__84719;
var r1 = seq__84718__$1;
var vec__84720 = t2;
var seq__84721 = cljs.core.seq(vec__84720);
var first__84722 = cljs.core.first(seq__84721);
var seq__84721__$1 = cljs.core.next(seq__84721);
var h2 = first__84722;
var r2 = seq__84721__$1;
if(((cljs.core.empty_QMARK_(t1)) || (cljs.core.empty_QMARK_(t2)))){
return i1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h1,h2)){
var G__84724 = r1;
var G__84725 = r2;
var G__84726 = (i1 + (1));
var G__84727 = (i2 + (1));
t1 = G__84724;
t2 = G__84725;
i1 = G__84726;
i2 = G__84727;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__84723 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"[",null,"]",null], null), null);
return (fexpr__84723.cljs$core$IFn$_invoke$arity$1 ? fexpr__84723.cljs$core$IFn$_invoke$arity$1(h2) : fexpr__84723.call(null,h2));
})())){
var G__84728 = t1;
var G__84729 = r2;
var G__84730 = i1;
var G__84731 = (i2 + (1));
t1 = G__84728;
t2 = G__84729;
i1 = G__84730;
i2 = G__84731;
continue;
} else {
var G__84732 = r1;
var G__84733 = t2;
var G__84734 = (i1 + (1));
var G__84735 = i2;
t1 = G__84732;
t2 = G__84733;
i1 = G__84734;
i2 = G__84735;
continue;

}
}
}
break;
}
})();
var current_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(frontend.util.text.get_current_line_by_pos(markup,pos));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(frontend.util.nth_safe(markup,pos),frontend.util.nth_safe(markup,(pos + (1))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["]"], 0))){
return (pos + (2));
} else {
if(cljs.core.contains_QMARK_(frontend.diff.inline_special_chars,frontend.util.nth_safe(markup,pos))){
var matched = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(frontend.diff.inline_special_chars,logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(markup,pos)));
var matched_QMARK_ = (function (){var and__5041__auto__ = current_line;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(current_line,clojure.string.reverse(matched));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(matched_QMARK_)){
return (pos + cljs.core.count(matched));
} else {
return pos;
}
} else {
if(cljs.core.truth_(frontend.diff.markdown_link_QMARK_(markup,current_line,pos))){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")");
return (pos + (idx + (1)));
} else {
return pos;

}
}
}
}catch (e84709){var e = e84709;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.diff",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("diff","find-position","diff/find-position",-780421417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),72], null)),null);

return cljs.core.count(markup);
}} else {
return null;
}
});

//# sourceMappingURL=frontend.diff.js.map
