goog.provide('frontend.template');
frontend.template.variable_rules = (function frontend$template$variable_rules(){
return new cljs.core.PersistentArrayMap(null, 5, ["today",logseq.graph_parser.util.page_ref.__GT_page_ref(frontend.date.today()),"yesterday",logseq.graph_parser.util.page_ref.__GT_page_ref(frontend.date.yesterday()),"tomorrow",logseq.graph_parser.util.page_ref.__GT_page_ref(frontend.date.tomorrow()),"time",frontend.date.get_current_time(),"current page",(function (){var temp__5804__auto__ = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var current_page = temp__5804__auto__;
var block_uuid = cljs.core.parse_uuid(current_page);
var page = (cljs.core.truth_(block_uuid)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null))):frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(current_page) : frontend.util.page_name_sanity_lc.call(null,current_page))], null)));
var current_page_SINGLEQUOTE_ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
return logseq.graph_parser.util.page_ref.__GT_page_ref(current_page_SINGLEQUOTE_);
} else {
return null;
}
})()], null);
});
frontend.template.resolve_dynamic_template_BANG_ = (function frontend$template$resolve_dynamic_template_BANG_(content){
return clojure.string.replace(content,/<%([^%].*?)%>/,(function (p__82788){
var vec__82789 = p__82788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82789,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82789,(1),null);
var match__$1 = clojure.string.trim(match);
if(clojure.string.blank_QMARK_(match__$1)){
return "";
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.template.variable_rules(),clojure.string.lower_case(match__$1)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.template.variable_rules(),clojure.string.lower_case(match__$1));
} else {
var temp__5802__auto__ = frontend.date.nld_parse(match__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var nld = temp__5802__auto__;
var date = (function (){var G__82796 = (new goog.date.DateTime());
G__82796.setTime(nld.getTime());

return G__82796;
})();
return logseq.graph_parser.util.page_ref.__GT_page_ref(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date));
} else {
return match__$1;
}

}
}
}));
});

//# sourceMappingURL=frontend.template.js.map
