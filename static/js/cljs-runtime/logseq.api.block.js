goog.provide('logseq.api.block');
logseq.api.block.get_block = (function logseq$api$block$get_block(id_or_uuid,opts){
var temp__5804__auto__ = ((typeof id_or_uuid === 'number')?frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(id_or_uuid):(function (){var and__5041__auto__ = id_or_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(id_or_uuid));
} else {
return and__5041__auto__;
}
})());
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if(cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","name","block/name",1619760316))){
return null;
} else {
var temp__5804__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto____$1)){
var uuid = temp__5804__auto____$1;
var map__120981 = cljs_bean.core.__GT_clj(opts);
var map__120981__$1 = cljs.core.__destructure_map(map__120981);
var includeChildren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120981__$1,new cljs.core.Keyword(null,"includeChildren","includeChildren",-941062106));
var repo = frontend.state.get_current_repo();
var block__$1 = (cljs.core.truth_(includeChildren)?cljs.core.first(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_block_and_children(repo,uuid),uuid)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__120980_SHARP_){
return (new cljs.core.List(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(new cljs.core.List(null,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__120980_SHARP_),null,(1),null)),(2),null));
}),(frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2(repo,uuid) : frontend.db.get_block_immediate_children.call(null,repo,uuid)))));
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(block__$1));
} else {
return null;
}
}
} else {
return null;
}
});

//# sourceMappingURL=logseq.api.block.js.map
