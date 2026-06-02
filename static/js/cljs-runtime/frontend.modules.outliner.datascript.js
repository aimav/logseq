goog.provide('frontend.modules.outliner.datascript');
frontend.modules.outliner.datascript.new_outliner_txs_state = (function frontend$modules$outliner$datascript$new_outliner_txs_state(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
});
frontend.modules.outliner.datascript.outliner_txs_state_QMARK_ = (function frontend$modules$outliner$datascript$outliner_txs_state_QMARK_(state){
return (((state instanceof cljs.core.Atom)) && (cljs.core.coll_QMARK_(cljs.core.deref(state))));
});
frontend.modules.outliner.datascript.after_transact_pipelines = (function frontend$modules$outliner$datascript$after_transact_pipelines(repo,p__102675){
var map__102676 = p__102675;
var map__102676__$1 = cljs.core.__destructure_map(map__102676);
var tx_report = map__102676__$1;
var _db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102676__$1,new cljs.core.Keyword(null,"_db-before","_db-before",1857235147));
var _db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102676__$1,new cljs.core.Keyword(null,"_db-after","_db-after",-1808574796));
var _tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102676__$1,new cljs.core.Keyword(null,"_tx-data","_tx-data",-169400406));
var _tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102676__$1,new cljs.core.Keyword(null,"_tempids","_tempids",2126372359));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102676__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
if(frontend.config.test_QMARK_){
return null;
} else {
frontend.modules.outliner.pipeline.invoke_hooks(tx_report);

if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword("outliner","transact?","outliner/transact?",-1753370954).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("whiteboard","transact?","whiteboard/transact?",-1793205629).cljs$core$IFn$_invoke$arity$1(tx_meta);
}
})())){
frontend.modules.editor.undo_redo.listen_db_changes_BANG_(tx_report);
} else {
}

return frontend.search.sync_search_indice_BANG_(repo,tx_report);
}
});
frontend.modules.outliner.datascript.remove_nil_from_transaction = (function frontend$modules$outliner$datascript$remove_nil_from_transaction(txs){
var G__102677 = logseq.graph_parser.util.remove_nils(txs);
if((G__102677 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,(function (v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,v);
} else {
return v;
}
}));
} else {
return x;
}
}),G__102677);
}
});
frontend.modules.outliner.datascript.get_tx_id = (function frontend$modules$outliner$datascript$get_tx_id(tx_report){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null));
});
frontend.modules.outliner.datascript.update_block_refs = (function frontend$modules$outliner$datascript$update_block_refs(txs,opts){
var temp__5802__auto__ = new cljs.core.Keyword(null,"uuid-changed","uuid-changed",-420125800).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var changed = temp__5802__auto__;
var map__102678 = changed;
var map__102678__$1 = cljs.core.__destructure_map(map__102678);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102678__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102678__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from_e = (function (){var G__102679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),from], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102679) : frontend.db.entity.call(null,G__102679));
})();
var to_e = (function (){var G__102680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),to], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102680) : frontend.db.entity.call(null,G__102680));
})();
var from_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_e);
var to_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_e);
var from_refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(from_e);
var from_path_refs = new cljs.core.Keyword("block","_path-refs","block/_path-refs",1744643889).cljs$core$IFn$_invoke$arity$1(from_e);
var to_refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(to_e);
var from_refs_txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ref){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","refs","block/refs",-1214495349),from_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","refs","block/refs",-1214495349),to_id], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_refs], 0));
var from_path_refs_txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ref){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),from_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),to_id], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_path_refs], 0));
var to_refs_txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ref){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
var new_content = clojure.string.replace(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref),logseq.graph_parser.util.block_ref.__GT_block_ref(to),logseq.graph_parser.util.block_ref.__GT_block_ref(from));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","content","block/content",-161885195),new_content], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_refs], 0));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(txs,from_refs_txs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_path_refs_txs,to_refs_txs], 0));
} else {
return txs;
}
});
frontend.modules.outliner.datascript.replace_ref_with_content = (function frontend$modules$outliner$datascript$replace_ref_with_content(txs,opts){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"uuid-changed","uuid-changed",-420125800).cljs$core$IFn$_invoke$arity$1(opts))))){
var retracted_block_ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tx){
if(((cljs.core.vector_QMARK_(tx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),cljs.core.first(tx))))){
return cljs.core.second(tx);
} else {
return null;
}
}),txs);
var retracted_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.db.entity,retracted_block_ids);
var retracted_tx = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5520__auto__ = (function frontend$modules$outliner$datascript$replace_ref_with_content_$_iter__102681(s__102682){
return (new cljs.core.LazySeq(null,(function (){
var s__102682__$1 = s__102682;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__102682__$1);
if(temp__5804__auto__){
var s__102682__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102682__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102682__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102684 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102683 = (0);
while(true){
if((i__102683 < size__5519__auto__)){
var block = cljs.core._nth(c__5518__auto__,i__102683);
cljs.core.chunk_append(b__102684,(function (){var refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__102683,refs,block,c__5518__auto__,size__5519__auto__,b__102684,s__102682__$2,temp__5804__auto__,retracted_block_ids,retracted_blocks){
return (function (ref){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
var block_content = frontend.util.property.remove_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var new_content = clojure.string.replace(clojure.string.replace(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref),cljs.core.re_pattern(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("(?i){{embed \\(\\(%s\\)\\)\\s?}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], 0))),block_content),logseq.graph_parser.util.block_ref.__GT_block_ref(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),block_content);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","content","block/content",-161885195),new_content], null)], null),new cljs.core.Keyword(null,"revert-tx","revert-tx",1745816539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref)], null)], null)], null);
});})(i__102683,refs,block,c__5518__auto__,size__5519__auto__,b__102684,s__102682__$2,temp__5804__auto__,retracted_block_ids,retracted_blocks))
,refs);
})());

var G__102691 = (i__102683 + (1));
i__102683 = G__102691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102684),frontend$modules$outliner$datascript$replace_ref_with_content_$_iter__102681(cljs.core.chunk_rest(s__102682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102684),null);
}
} else {
var block = cljs.core.first(s__102682__$2);
return cljs.core.cons((function (){var refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (refs,block,s__102682__$2,temp__5804__auto__,retracted_block_ids,retracted_blocks){
return (function (ref){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
var block_content = frontend.util.property.remove_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var new_content = clojure.string.replace(clojure.string.replace(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref),cljs.core.re_pattern(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("(?i){{embed \\(\\(%s\\)\\)\\s?}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], 0))),block_content),logseq.graph_parser.util.block_ref.__GT_block_ref(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),block_content);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","content","block/content",-161885195),new_content], null)], null),new cljs.core.Keyword(null,"revert-tx","revert-tx",1745816539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref)], null)], null)], null);
});})(refs,block,s__102682__$2,temp__5804__auto__,retracted_block_ids,retracted_blocks))
,refs);
})(),frontend$modules$outliner$datascript$replace_ref_with_content_$_iter__102681(cljs.core.rest(s__102682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(retracted_blocks);
})());
var retracted_tx_SINGLEQUOTE_ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([retracted_tx], 0));
var revert_tx = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"revert-tx","revert-tx",1745816539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([retracted_tx], 0));
if(cljs.core.seq(retracted_tx_SINGLEQUOTE_)){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),frontend.state.get_current_repo()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"retracted-block-ids","retracted-block-ids",-491940807),retracted_block_ids,new cljs.core.Keyword(null,"revert-tx","revert-tx",1745816539),revert_tx], null));
} else {
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,retracted_tx_SINGLEQUOTE_);
} else {
return txs;
}
});
frontend.modules.outliner.datascript.transact_BANG_ = (function frontend$modules$outliner$datascript$transact_BANG_(txs,opts,before_editor_cursor){
var txs__$1 = frontend.modules.outliner.datascript.remove_nil_from_transaction(txs);
var txs__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("db","other-tx","db/other-tx",337296620),new cljs.core.Keyword("block.temp","container","block.temp/container",-493626206),new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865),new cljs.core.Keyword("block.temp","bottom?","block.temp/bottom?",-752374337),new cljs.core.Keyword("block.temp","additional-properties","block.temp/additional-properties",-1828325767)], 0));
} else {
return m;
}
}),txs__$1);
var txs__$3 = (function (){var G__102685 = txs__$2;
var G__102685__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"uuid-changed","uuid-changed",-420125800).cljs$core$IFn$_invoke$arity$1(opts))?frontend.modules.outliner.datascript.update_block_refs(G__102685,opts):G__102685);
var G__102685__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"uuid-changed","uuid-changed",-420125800).cljs$core$IFn$_invoke$arity$1(opts)))))?frontend.modules.outliner.datascript.replace_ref_with_content(G__102685__$1,opts):G__102685__$1);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__102685__$2);

})();
if(((cljs.core.seq(txs__$3)) && (((cljs.core.not(new cljs.core.Keyword(null,"skip-transact?","skip-transact?",-1820887310).cljs$core$IFn$_invoke$arity$1(opts))) && ((!(cljs.core.contains_QMARK_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.config.get_repo_dir(frontend.state.get_current_repo()))))))))){
try{var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo());
var conn = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo,false);
var rs = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,txs__$3,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("outliner","transact?","outliner/transact?",-1753370954),true));
var tx_id = frontend.modules.outliner.datascript.get_tx_id(rs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009),tx_id], null),before_editor_cursor);

var temp__5804__auto___102692 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto___102692)){
var block_102693 = temp__5804__auto___102692;
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_102693);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_102693));
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block","editor/block",1699377461),(function (){var G__102687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_102693)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102687) : frontend.db.pull.call(null,G__102687));
})());
} else {
}
} else {
}

var eids_102694 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(rs)));
var left_AMPERSAND_parent_list_102695 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.next,cljs.core.vec((function (){var G__102688 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?l","?l",550795544,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Symbol(null,"?l","?l",550795544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__102689 = cljs.core.deref(conn);
var G__102690 = eids_102694;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__102688,G__102689,G__102690) : datascript.core.q.call(null,G__102688,G__102689,G__102690));
})()));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(left_AMPERSAND_parent_list_102695),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(left_AMPERSAND_parent_list_102695)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(eids_102694),"\n","(= (count left&parent-list) (count (distinct left&parent-list)))"].join('')));
}


return rs;
}catch (e102686){var e = e102686;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.datascript",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),177], null)),e);

throw e;
}} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.datascript.js.map
