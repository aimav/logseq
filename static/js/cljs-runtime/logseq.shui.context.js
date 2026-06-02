goog.provide('logseq.shui.context');
logseq.shui.context.inline__GT_inline_block = (function logseq$shui$context$inline__GT_inline_block(inline,block_config){
return (function (_context,item){
return (inline.cljs$core$IFn$_invoke$arity$2 ? inline.cljs$core$IFn$_invoke$arity$2(block_config,item) : inline.call(null,block_config,item));
});
});
logseq.shui.context.inline__GT_map_inline_block = (function logseq$shui$context$inline__GT_map_inline_block(inline,block_config){
var inline_STAR_ = logseq.shui.context.inline__GT_inline_block(inline,block_config);
return (function (context,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109544_SHARP_){
return inline_STAR_(context,p1__109544_SHARP_);
}),col);
});
});
logseq.shui.context.make_context = (function logseq$shui$context$make_context(p__109545){
var map__109546 = p__109545;
var map__109546__$1 = cljs.core.__destructure_map(map__109546);
var props = map__109546__$1;
var block_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"block-config","block-config",1304228520));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"config","config",994861415));
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var int__GT_local_time_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"int->local-time-2","int->local-time-2",1621408837));
var blocks_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"blocks-container","blocks-container",-540819511));
var page_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109546__$1,new cljs.core.Keyword(null,"page","page",849072397));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"mode?","mode?",-258410076),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"query-result","query-result",-833644142),new cljs.core.Keyword(null,"map-inline-block","map-inline-block",-1961752782),new cljs.core.Keyword(null,"block?","block?",1102479923),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340),new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),new cljs.core.Keyword(null,"editor-box","editor-box",708759870)],[logseq.shui.context.inline__GT_inline_block(inline,block_config),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"mode?","mode?",-258410076).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(block_config),logseq.shui.context.inline__GT_map_inline_block(inline,block_config),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788).cljs$core$IFn$_invoke$arity$1(block_config),new cljs.core.Keyword(null,"editor-box","editor-box",708759870).cljs$core$IFn$_invoke$arity$1(block_config)])], 0));
});

//# sourceMappingURL=logseq.shui.context.js.map
