goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(tx_report,page){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"created-from-journal-template?","created-from-journal-template?",-2127356314)], null)))){
return null;
} else {
return frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)));
}
});
frontend.modules.outliner.pipeline.compute_block_path_refs = (function frontend$modules$outliner$pipeline$compute_block_path_refs(p__102593,blocks){
var map__102594 = p__102593;
var map__102594__$1 = cljs.core.__destructure_map(map__102594);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102594__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102594__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var repo = frontend.state.get_current_repo();
var blocks__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),blocks);
if(cljs.core.truth_(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta))){
if(cljs.core.truth_(frontend.db.react.path_refs_need_recalculated_QMARK_(tx_meta))){
var _STAR_computed_ids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
if(((cljs.core.not((function (){var G__102596 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var fexpr__102595 = cljs.core.deref(_STAR_computed_ids);
return (fexpr__102595.cljs$core$IFn$_invoke$arity$1 ? fexpr__102595.cljs$core$IFn$_invoke$arity$1(G__102596) : fexpr__102595.call(null,G__102596));
})())) && (cljs.core.not(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))))){
var parents = frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var parents_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0)));
var old_refs = (cljs.core.truth_(db_before)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1((function (){var G__102597 = db_before;
var G__102598 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__102597,G__102598) : datascript.core.entity.call(null,G__102597,G__102598));
})()))):cljs.core.PersistentHashSet.EMPTY);
var new_refs = cljs.core.set(frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block)),parents_refs], 0)));
var refs_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_refs,new_refs);
var children = frontend.db.model.get_block_children_ids(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var children_maps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var entity = (function (){var G__102599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102599) : frontend.db.entity.call(null,G__102599));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.Keyword(null,"block-ref-ids","block-ref-ids",-280941211),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(entity))], null)], null);
}),children));
var children_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__102600){
var vec__102601 = p__102600;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102601,(0),null);
var map__102604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102601,(1),null);
var map__102604__$1 = cljs.core.__destructure_map(map__102604);
var child_map = map__102604__$1;
var block_ref_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102604__$1,new cljs.core.Keyword(null,"block-ref-ids","block-ref-ids",-280941211));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(new_refs,block_ref_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var parent_refs = cljs.core.PersistentHashSet.EMPTY;
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(child_map);
while(true){
var temp__5802__auto__ = (children_maps.cljs$core$IFn$_invoke$arity$1 ? children_maps.cljs$core$IFn$_invoke$arity$1(parent_id) : children_maps.call(null,parent_id));
if(cljs.core.truth_(temp__5802__auto__)){
var parent = temp__5802__auto__;
var G__102613 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(parent_refs,new cljs.core.Keyword(null,"block-ref-ids","block-ref-ids",-280941211).cljs$core$IFn$_invoke$arity$1(parent));
var G__102614 = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent);
parent_refs = G__102613;
parent_id = G__102614;
continue;
} else {
return parent_refs;
}
break;
}
})()], 0))], null);
}),children_maps);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_computed_ids,clojure.set.union,cljs.core.set(cljs.core.cons(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),children)));

return frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.seq(new_refs)) && (refs_changed_QMARK_)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new_refs], null):null)], null),children_refs], 0));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks__$1], 0));
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var tx_meta = new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report);
if(((cljs.core.not(new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161).cljs$core$IFn$_invoke$arity$1(tx_meta))) && (((cljs.core.not(new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695).cljs$core$IFn$_invoke$arity$1(tx_meta))) && (cljs.core.not(new cljs.core.Keyword(null,"replace?","replace?",-877816403).cljs$core$IFn$_invoke$arity$1(tx_meta))))))){
var map__102605 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__102605__$1 = cljs.core.__destructure_map(map__102605);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102605__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102605__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var repo = frontend.state.get_current_repo();
var refs_tx = (cljs.core.truth_(goog.DEBUG)?(function (){var k__62654__auto__ = "Compute path refs: ";
console.time(k__62654__auto__);

var res__62655__auto__ = cljs.core.set(frontend.modules.outliner.pipeline.compute_block_path_refs(tx_report,blocks));
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
})():cljs.core.set(frontend.modules.outliner.pipeline.compute_block_path_refs(tx_report,blocks)));
var truncate_refs_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352)], null);
}),refs_tx);
var tx = frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([truncate_refs_tx,refs_tx], 0));
var tx_report_SINGLEQUOTE_ = ((cljs.core.seq(tx))?(function (){var refs_tx_data_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((function (){var G__102606 = repo;
var G__102607 = tx;
var G__102608 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("outliner","transact?","outliner/transact?",-1753370954),true,new cljs.core.Keyword(null,"replace?","replace?",-877816403),true], null);
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__102606,G__102607,G__102608) : frontend.db.transact_BANG_.call(null,G__102606,G__102607,G__102608));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_report,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report),refs_tx_data_SINGLEQUOTE_));
})():tx_report);
var importing_QMARK_ = new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(importing_QMARK_)){
} else {
frontend.db.react.refresh_BANG_(repo,tx_report_SINGLEQUOTE_);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-files?","delete-files?",-1341179689).cljs$core$IFn$_invoke$arity$1(tx_meta))){
} else {
var seq__102609_102615 = cljs.core.seq(cljs.core.seq(pages));
var chunk__102610_102616 = null;
var count__102611_102617 = (0);
var i__102612_102618 = (0);
while(true){
if((i__102612_102618 < count__102611_102617)){
var p_102619 = chunk__102610_102616.cljs$core$IIndexed$_nth$arity$2(null,i__102612_102618);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_102619);


var G__102620 = seq__102609_102615;
var G__102621 = chunk__102610_102616;
var G__102622 = count__102611_102617;
var G__102623 = (i__102612_102618 + (1));
seq__102609_102615 = G__102620;
chunk__102610_102616 = G__102621;
count__102611_102617 = G__102622;
i__102612_102618 = G__102623;
continue;
} else {
var temp__5804__auto___102624 = cljs.core.seq(seq__102609_102615);
if(temp__5804__auto___102624){
var seq__102609_102625__$1 = temp__5804__auto___102624;
if(cljs.core.chunked_seq_QMARK_(seq__102609_102625__$1)){
var c__5565__auto___102626 = cljs.core.chunk_first(seq__102609_102625__$1);
var G__102627 = cljs.core.chunk_rest(seq__102609_102625__$1);
var G__102628 = c__5565__auto___102626;
var G__102629 = cljs.core.count(c__5565__auto___102626);
var G__102630 = (0);
seq__102609_102615 = G__102627;
chunk__102610_102616 = G__102628;
count__102611_102617 = G__102629;
i__102612_102618 = G__102630;
continue;
} else {
var p_102631 = cljs.core.first(seq__102609_102625__$1);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_102631);


var G__102632 = cljs.core.next(seq__102609_102625__$1);
var G__102633 = null;
var G__102634 = (0);
var G__102635 = (0);
seq__102609_102615 = G__102632;
chunk__102610_102616 = G__102633;
count__102611_102617 = G__102634;
i__102612_102618 = G__102635;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.seq(blocks)) && (((cljs.core.not(importing_QMARK_)) && ((cljs.core.count(blocks) <= (1000))))));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)], null)], null));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.pipeline.js.map
