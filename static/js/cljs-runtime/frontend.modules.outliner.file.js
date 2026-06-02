goog.provide('frontend.modules.outliner.file');
goog.scope(function(){
  frontend.modules.outliner.file.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.modules.outliner.file.batch_write_interval = (1000);
frontend.modules.outliner.file.whiteboard_blocks_pull_keys_with_persisted_ids = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null)], null);
frontend.modules.outliner.file.cleanup_whiteboard_block = (function frontend$modules$outliner$file$cleanup_whiteboard_block(block){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"ls-type","ls-type",1383834313)], null),false))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","parent","block/parent",-918309064)], 0));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","page","block/page",822314108)], 0));
}
});
frontend.modules.outliner.file.do_write_file_BANG_ = (function frontend$modules$outliner$file$do_write_file_BANG_(repo,page_db_id,outliner_op){
var page_block = (function (){var G__102528 = repo;
var G__102529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__102530 = page_db_id;
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__102528,G__102529,G__102530) : frontend.db.pull.call(null,G__102528,G__102529,G__102530));
})();
var page_db_id__$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_block);
var whiteboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page_block));
var blocks_count = frontend.db.model.get_page_blocks_count(repo,page_db_id__$1);
var blocks_just_deleted_QMARK_ = (((blocks_count === (0))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),null], null), null),outliner_op)));
if((((blocks_count >= (1))) || (blocks_just_deleted_QMARK_))){
if((((((blocks_count > (500))) && (cljs.core.not(frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"diff","diff",2135942783),(3000)], null)], 0)))))) || (((whiteboard_QMARK_) && (cljs.core.not(frontend.state.whiteboard_idle_QMARK_(repo))))))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_file_write_chan(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,page_db_id__$1,outliner_op,cljs_time.coerce.to_long(cljs_time.core.now())], null));
} else {
var pull_keys = ((whiteboard_QMARK_)?frontend.modules.outliner.file.whiteboard_blocks_pull_keys_with_persisted_ids:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),pull_keys], null));
var blocks__$1 = ((whiteboard_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.file.cleanup_whiteboard_block,blocks):blocks);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(blocks__$1))) && (((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1)))) && ((new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_block) == null)))))){
return null;
} else {
var tree_or_blocks = ((whiteboard_QMARK_)?blocks__$1:frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$3(repo,blocks__$1,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block)));
if(cljs.core.truth_(page_block)){
return frontend.modules.file.core.save_tree_BANG_(page_block,tree_or_blocks,blocks_just_deleted_QMARK_);
} else {
return console.error(["can't find page id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_db_id__$1)].join(''));
}
}
}
} else {
return null;
}
});
frontend.modules.outliner.file.write_files_BANG_ = (function frontend$modules$outliner$file$write_files_BANG_(pages){
if(cljs.core.seq(pages)){
if(frontend.config.publishing_QMARK_){
return null;
} else {
var seq__102532 = cljs.core.seq(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102531_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),p1__102531_SHARP_);
}),pages)));
var chunk__102533 = null;
var count__102534 = (0);
var i__102535 = (0);
while(true){
if((i__102535 < count__102534)){
var vec__102544 = chunk__102533.cljs$core$IIndexed$_nth$arity$2(null,i__102535);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102544,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102544,(1),null);
var outliner_op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102544,(2),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id,outliner_op);
}catch (e102547){var e_102564 = e102547;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_102564,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_102564], null),new cljs.core.Keyword(null,"line","line",212345235),84], null)),null);
}

var G__102565 = seq__102532;
var G__102566 = chunk__102533;
var G__102567 = count__102534;
var G__102568 = (i__102535 + (1));
seq__102532 = G__102565;
chunk__102533 = G__102566;
count__102534 = G__102567;
i__102535 = G__102568;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__102532);
if(temp__5804__auto__){
var seq__102532__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__102532__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__102532__$1);
var G__102569 = cljs.core.chunk_rest(seq__102532__$1);
var G__102570 = c__5565__auto__;
var G__102571 = cljs.core.count(c__5565__auto__);
var G__102572 = (0);
seq__102532 = G__102569;
chunk__102533 = G__102570;
count__102534 = G__102571;
i__102535 = G__102572;
continue;
} else {
var vec__102548 = cljs.core.first(seq__102532__$1);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102548,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102548,(1),null);
var outliner_op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102548,(2),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id,outliner_op);
}catch (e102551){var e_102573 = e102551;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_102573,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_102573], null),new cljs.core.Keyword(null,"line","line",212345235),84], null)),null);
}

var G__102574 = cljs.core.next(seq__102532__$1);
var G__102575 = null;
var G__102576 = (0);
var G__102577 = (0);
seq__102532 = G__102574;
chunk__102533 = G__102575;
count__102534 = G__102576;
i__102535 = G__102577;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
frontend.modules.outliner.file.sync_to_file = (function frontend$modules$outliner$file$sync_to_file(var_args){
var G__102553 = arguments.length;
switch (G__102553) {
case 1:
return frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$2(page,null);
}));

(frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$2 = (function (p__102554,outliner_op){
var map__102555 = p__102554;
var map__102555__$1 = cljs.core.__destructure_map(map__102555);
var page_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102555__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if((page_db_id == null)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Write file failed, can't find the current page!",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return frontend.modules.outliner.file.write_files_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,page_db_id,outliner_op], null)], null));
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_file_write_chan(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,page_db_id,outliner_op,cljs_time.coerce.to_long(cljs_time.core.now())], null));
}
} else {
return null;
}
}
}));

(frontend.modules.outliner.file.sync_to_file.cljs$lang$maxFixedArity = 2);

frontend.modules.outliner.file._STAR_writes_finished_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.modules.outliner.file._LT_ratelimit_file_writes_BANG_ = (function frontend$modules$outliner$file$_LT_ratelimit_file_writes_BANG_(){
return frontend.util._LT_ratelimit.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_file_write_chan(),frontend.modules.outliner.file.batch_write_interval,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),(function (p__102556){
var vec__102557 = p__102556;
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102557,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102557,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102557,(2),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102557,(3),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.modules.outliner.file._STAR_writes_finished_QMARK_,cljs.core.assoc,repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"value","value",305978217),false], null));

return true;
}),new cljs.core.Keyword(null,"flush-fn","flush-fn",668974810),(function (col){
var start_time = cljs_time.coerce.to_long(cljs_time.core.now());
var repos = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,col));
frontend.modules.outliner.file.write_files_BANG_(col);

var seq__102560 = cljs.core.seq(repos);
var chunk__102561 = null;
var count__102562 = (0);
var i__102563 = (0);
while(true){
if((i__102563 < count__102562)){
var repo = chunk__102561.cljs$core$IIndexed$_nth$arity$2(null,i__102563);
var last_write_time_102579 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.outliner.file._STAR_writes_finished_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"time","time",1385887882)], null));
if((start_time > last_write_time_102579)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.modules.outliner.file._STAR_writes_finished_QMARK_,cljs.core.assoc,repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
} else {
}


var G__102580 = seq__102560;
var G__102581 = chunk__102561;
var G__102582 = count__102562;
var G__102583 = (i__102563 + (1));
seq__102560 = G__102580;
chunk__102561 = G__102581;
count__102562 = G__102582;
i__102563 = G__102583;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__102560);
if(temp__5804__auto__){
var seq__102560__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__102560__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__102560__$1);
var G__102584 = cljs.core.chunk_rest(seq__102560__$1);
var G__102585 = c__5565__auto__;
var G__102586 = cljs.core.count(c__5565__auto__);
var G__102587 = (0);
seq__102560 = G__102584;
chunk__102561 = G__102585;
count__102562 = G__102586;
i__102563 = G__102587;
continue;
} else {
var repo = cljs.core.first(seq__102560__$1);
var last_write_time_102588 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.outliner.file._STAR_writes_finished_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"time","time",1385887882)], null));
if((start_time > last_write_time_102588)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.modules.outliner.file._STAR_writes_finished_QMARK_,cljs.core.assoc,repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
} else {
}


var G__102589 = cljs.core.next(seq__102560__$1);
var G__102590 = null;
var G__102591 = (0);
var G__102592 = (0);
seq__102560 = G__102589;
chunk__102561 = G__102590;
count__102562 = G__102591;
i__102563 = G__102592;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
});

//# sourceMappingURL=frontend.modules.outliner.file.js.map
