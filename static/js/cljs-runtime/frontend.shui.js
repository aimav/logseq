goog.provide('frontend.shui');
frontend.shui.default_versions = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logseq.table.version","logseq.table.version",63322881),(1)], null);
/**
 * Returns the version of the shui component, checking first 
 *   the block properties, then the global config, then the defaults.
 */
frontend.shui.get_shui_component_version = (function frontend$shui$get_shui_component_version(component_name,block_config){
var version_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["logseq.",cljs.core.name(component_name),".version"].join(''));
return parseFloat((function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","properties","block/properties",708347145),version_key], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [version_key], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.shui.default_versions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [version_key], null));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return (1);
}
}
}
})());
});
frontend.shui.make_shui_context = (function frontend$shui$make_shui_context(var_args){
var G__111008 = arguments.length;
switch (G__111008) {
case 0:
return frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$2 = (function (block_config,inline){
return logseq.shui.context.make_context(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"get-block-and-children","get-block-and-children",521291361),new cljs.core.Keyword(null,"int->local-time-2","int->local-time-2",1621408837),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047),new cljs.core.Keyword(null,"block-config","block-config",1304228520),new cljs.core.Keyword(null,"get-page","get-page",264342825),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"get-page-blocks-no-cache","get-page-blocks-no-cache",1813899247),new cljs.core.Keyword(null,"get-block-children","get-block-children",-1246703502),new cljs.core.Keyword(null,"get-current-repo","get-current-repo",-1854875373),new cljs.core.Keyword(null,"color-accent","color-accent",-843871719),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"inline","inline",1399884222)],[frontend.db.get_block_and_children,frontend.date.int__GT_local_time_2,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),frontend.colors.linear_gradient,block_config,frontend.db.get_page,frontend.state.state,frontend.handler.search.search,frontend.db.get_page_blocks_no_cache,frontend.db.get_block_children,frontend.state.get_current_repo,frontend.state.get_color_accent(),frontend.db.utils.entity,inline]));
}));

(frontend.shui.make_shui_context.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=frontend.shui.js.map
