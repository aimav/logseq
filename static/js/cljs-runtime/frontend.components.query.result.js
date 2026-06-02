goog.provide('frontend.components.query.result');
frontend.components.query.result.trigger_custom_query_BANG_ = (function frontend$components$query$result$trigger_custom_query_BANG_(config,query,_STAR_query_error){
var repo = frontend.state.get_current_repo();
var result_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var current_block_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var _ = cljs.core.reset_BANG_(_STAR_query_error,null);
var query_atom = (function (){try{if(cljs.core.truth_(new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config))){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query);
var form = logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (form instanceof cljs.core.Symbol);
} else {
return and__5041__auto__;
}
})())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(repo,clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(30)], null)),(function (blocks){
return promesa.protocols._promise(((cljs.core.seq(blocks))?(function (){var result = (function (){var G__111086 = frontend.state.get_current_repo();
var G__111087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__111088 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))], null);
}),blocks);
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__111086,G__111087,G__111088) : frontend.db.pull_many.call(null,G__111086,G__111087,G__111088));
})();
return cljs.core.reset_BANG_(result_atom,result);
})():null));
}));
}));
} else {
if((form instanceof cljs.core.Symbol)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
} else {
return frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),q);

}
}
} else {
var G__111089 = query;
var G__111090 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957),current_block_uuid], null);
return (frontend.db.custom_query.cljs$core$IFn$_invoke$arity$2 ? frontend.db.custom_query.cljs$core$IFn$_invoke$arity$2(G__111089,G__111090) : frontend.db.custom_query.call(null,G__111089,G__111090));

}
}catch (e111085){var e = e111085;
cljs.core.reset_BANG_(_STAR_query_error,e);

return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}})();
if((query_atom instanceof cljs.core.Atom)){
return query_atom;
} else {
return result_atom;
}
});
frontend.components.query.result.get_group_by_page = (function frontend$components$query$result$get_group_by_page(p__111091,p__111092){
var map__111093 = p__111091;
var map__111093__$1 = cljs.core.__destructure_map(map__111093);
var query_m = map__111093__$1;
var result_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111093__$1,new cljs.core.Keyword(null,"result-transform","result-transform",1904908186));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111093__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__111094 = p__111092;
var map__111094__$1 = cljs.core.__destructure_map(map__111094);
var table_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111094__$1,new cljs.core.Keyword(null,"table?","table?",-1064705406));
if(cljs.core.truth_(table_QMARK_)){
return false;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(query_m,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),((cljs.core.not(result_transform)) && ((!(((typeof query === 'string') && (clojure.string.includes_QMARK_(query,"(by-page false)"))))))));
}
});
/**
 * Fetches a query's result, transforms it as needed and saves the result into
 *   an atom that is passed in as an argument
 */
frontend.components.query.result.get_query_result = (function frontend$components$query$result$get_query_result(config,query_m,_STAR_query_error,current_block_uuid,options){
var query_atom = frontend.components.query.result.trigger_custom_query_BANG_(config,query_m,_STAR_query_error);
var query_result = (function (){var and__5041__auto__ = query_atom;
if(cljs.core.truth_(and__5041__auto__)){
return rum.core.react(query_atom);
} else {
return and__5041__auto__;
}
})();
var remove_blocks = (cljs.core.truth_(current_block_uuid)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_block_uuid], null):null);
var transformed_query_result = (cljs.core.truth_(query_result)?(function (){var result = (frontend.db.custom_query_result_transform.cljs$core$IFn$_invoke$arity$3 ? frontend.db.custom_query_result_transform.cljs$core$IFn$_invoke$arity$3(query_result,remove_blocks,query_m) : frontend.db.custom_query_result_transform.call(null,query_result,remove_blocks,query_m));
if(cljs.core.truth_((function (){var and__5041__auto__ = query_result;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.coll_QMARK_(result);
if(and__5041__auto____$1){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var G__111095 = result;
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(query_m,new cljs.core.Keyword(null,"remove-block-children?","remove-block-children?",-228491460),true))){
return frontend.modules.outliner.tree.filter_top_level_blocks(G__111095);
} else {
return G__111095;
}
} else {
return result;
}
})():null);
var group_by_page_QMARK_ = frontend.components.query.result.get_group_by_page(query_m,options);
var result = (cljs.core.truth_((function (){var and__5041__auto__ = group_by_page_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(transformed_query_result));
} else {
return and__5041__auto__;
}
})())?(function (){var result = frontend.db.utils.group_by_page(transformed_query_result);
if(cljs.core.map_QMARK_(result)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,null);
} else {
return result;
}
})():transformed_query_result);
var temp__5804__auto___111096 = new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto___111096)){
var query_result_111097__$1 = temp__5804__auto___111096;
cljs.core.reset_BANG_(query_result_111097__$1,result);
} else {
}

if(cljs.core.truth_(query_atom)){
return frontend.util.safe_with_meta(result,cljs.core.meta(cljs.core.deref(query_atom)));
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.query.result.js.map
