goog.provide('frontend.modules.editor.undo_redo');
frontend.modules.editor.undo_redo.undo_redo_states = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.modules.editor.undo_redo._STAR_pause_listener = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.modules.editor.undo_redo.get_state = (function frontend$modules$editor$undo_redo$get_state(){
var repo = frontend.state.get_current_repo();
if(typeof repo === 'string'){
} else {
throw (new Error(["Assert failed: ","Repo should satisfy string?","\n","(string? repo)"].join('')));
}

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.editor.undo_redo.undo_redo_states),repo);
if(cljs.core.truth_(temp__5802__auto__)){
var state = temp__5802__auto__;
return state;
} else {
var new_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.modules.editor.undo_redo.undo_redo_states,cljs.core.assoc,repo,new_state);

return new_state;
}
});
frontend.modules.editor.undo_redo.get_undo_stack = (function frontend$modules$editor$undo_redo$get_undo_stack(){
return new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892).cljs$core$IFn$_invoke$arity$1(frontend.modules.editor.undo_redo.get_state());
});
frontend.modules.editor.undo_redo.get_redo_stack = (function frontend$modules$editor$undo_redo$get_redo_stack(){
return new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(frontend.modules.editor.undo_redo.get_state());
});
frontend.modules.editor.undo_redo.push_undo = (function frontend$modules$editor$undo_redo$push_undo(txs){
var undo_stack = frontend.modules.editor.undo_redo.get_undo_stack();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(undo_stack,cljs.core.conj,txs);
});
frontend.modules.editor.undo_redo.pop_undo = (function frontend$modules$editor$undo_redo$pop_undo(){
var undo_stack = frontend.modules.editor.undo_redo.get_undo_stack();
var temp__5804__auto__ = cljs.core.deref(undo_stack);
if(cljs.core.truth_(temp__5804__auto__)){
var stack = temp__5804__auto__;
if(cljs.core.seq(stack)){
var removed_e = cljs.core.peek(stack);
var popped_stack = cljs.core.pop(stack);
cljs.core.reset_BANG_(undo_stack,popped_stack);

return removed_e;
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.editor.undo_redo.push_redo = (function frontend$modules$editor$undo_redo$push_redo(txs){
var redo_stack = frontend.modules.editor.undo_redo.get_redo_stack();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(redo_stack,cljs.core.conj,txs);
});
frontend.modules.editor.undo_redo.pop_redo = (function frontend$modules$editor$undo_redo$pop_redo(){
var redo_stack = frontend.modules.editor.undo_redo.get_redo_stack();
var temp__5804__auto__ = cljs.core.peek(cljs.core.deref(redo_stack));
if(cljs.core.truth_(temp__5804__auto__)){
var removed_e = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(redo_stack,cljs.core.pop);

return removed_e;
} else {
return null;
}
});
frontend.modules.editor.undo_redo.page_pop_redo = (function frontend$modules$editor$undo_redo$page_pop_redo(page_id){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[debug] redo: ",new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.pull.call(null,page_id)))], 0));

var temp__5804__auto__ = frontend.modules.editor.undo_redo.get_redo_stack();
if(cljs.core.truth_(temp__5804__auto__)){
var redo_stack = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.deref(redo_stack);
if(cljs.core.truth_(temp__5804__auto____$1)){
var stack = temp__5804__auto____$1;
if(cljs.core.seq(stack)){
var reversed_stack = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(stack));
var idx = cljs.core.some((function (p__102645){
var vec__102646 = p__102645;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102646,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102646,(1),null);
return cljs.core.some((function (p1__102644_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__102644_SHARP_),page_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__102644_SHARP_)),page_id)))){
return idx;
} else {
return null;
}
}),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(item));
}),reversed_stack);
if(cljs.core.truth_(idx)){
var idx_SINGLEQUOTE_ = ((cljs.core.count(stack) - idx) - (1));
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(stack,(0),idx_SINGLEQUOTE_);
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(stack,(idx_SINGLEQUOTE_ + (1)));
var others = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(before,after));
cljs.core.reset_BANG_(redo_stack,others);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[debug] redo remove: ",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stack,idx_SINGLEQUOTE_)], 0));

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stack,idx_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.editor.undo_redo.smart_pop_redo = (function frontend$modules$editor$undo_redo$smart_pop_redo(){
if(cljs.core.truth_(new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
var temp__5802__auto__ = frontend.util.page.get_editing_page_id();
if(cljs.core.truth_(temp__5802__auto__)){
var page_id = temp__5802__auto__;
return frontend.modules.editor.undo_redo.page_pop_redo(page_id);
} else {
return frontend.modules.editor.undo_redo.pop_redo();
}
} else {
return frontend.modules.editor.undo_redo.pop_redo();
}
});
frontend.modules.editor.undo_redo.reset_redo = (function frontend$modules$editor$undo_redo$reset_redo(){
var redo_stack = frontend.modules.editor.undo_redo.get_redo_stack();
return cljs.core.reset_BANG_(redo_stack,cljs.core.PersistentVector.EMPTY);
});
frontend.modules.editor.undo_redo.get_txs = (function frontend$modules$editor$undo_redo$get_txs(redo_QMARK_,txs){
var txs__$1 = (cljs.core.truth_(redo_QMARK_)?txs:cljs.core.reverse(txs));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__102649){
var vec__102650 = p__102649;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102650,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102650,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102650,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102650,(3),null);
var add_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102650,(4),null);
var op = (cljs.core.truth_((function (){var and__5041__auto__ = redo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return add_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","add","db/add",235286841):(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(redo_QMARK_);
if(and__5041__auto__){
return add_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","retract","db/retract",-1549825231):(cljs.core.truth_((function (){var and__5041__auto__ = redo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(add_QMARK_);
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","retract","db/retract",-1549825231):((((cljs.core.not(redo_QMARK_)) && (cljs.core.not(add_QMARK_))))?new cljs.core.Keyword("db","add","db/add",235286841):null))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,id,attr,value,tx], null);
}),txs__$1);
});
frontend.modules.editor.undo_redo.transact_BANG_ = (function frontend$modules$editor$undo_redo$transact_BANG_(txs,tx_meta){
var conn = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(false);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,txs,tx_meta);
});
frontend.modules.editor.undo_redo.page_pop_undo = (function frontend$modules$editor$undo_redo$page_pop_undo(page_id){
var undo_stack = frontend.modules.editor.undo_redo.get_undo_stack();
var temp__5804__auto__ = cljs.core.deref(undo_stack);
if(cljs.core.truth_(temp__5804__auto__)){
var stack = temp__5804__auto__;
if(cljs.core.seq(stack)){
var reversed_stack = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(stack));
var idx = cljs.core.some((function (p__102654){
var vec__102655 = p__102654;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102655,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102655,(1),null);
return cljs.core.some((function (p1__102653_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__102653_SHARP_),page_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__102653_SHARP_)),page_id)))){
return idx;
} else {
return null;
}
}),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(item));
}),reversed_stack);
if(cljs.core.truth_(idx)){
var idx_SINGLEQUOTE_ = ((cljs.core.count(stack) - idx) - (1));
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(stack,(0),idx_SINGLEQUOTE_);
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(stack,(idx_SINGLEQUOTE_ + (1)));
var others = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(before,after));
cljs.core.reset_BANG_(undo_stack,others);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[debug] undo remove: ",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stack,idx_SINGLEQUOTE_)], 0));

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(stack,idx_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.editor.undo_redo.smart_pop_undo = (function frontend$modules$editor$undo_redo$smart_pop_undo(){
if(cljs.core.truth_(new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
var temp__5802__auto__ = frontend.util.page.get_editing_page_id();
if(cljs.core.truth_(temp__5802__auto__)){
var page_id = temp__5802__auto__;
return frontend.modules.editor.undo_redo.page_pop_undo(page_id);
} else {
return frontend.modules.editor.undo_redo.pop_undo();
}
} else {
return frontend.modules.editor.undo_redo.pop_undo();
}
});
/**
 * Prevent block auto-save during undo/redo.
 */
frontend.modules.editor.undo_redo.set_editor_content_BANG_ = (function frontend$modules$editor$undo_redo$set_editor_content_BANG_(){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1((function (){var G__102658 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102658) : frontend.db.entity.call(null,G__102658));
})());
if(cljs.core.truth_(temp__5804__auto____$1)){
var content = temp__5804__auto____$1;
var content_SINGLEQUOTE_ = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content));
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),content_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.editor.undo_redo.get_next_tx_editor_cursor = (function frontend$modules$editor$undo_redo$get_next_tx_editor_cursor(tx_id){
var result = cljs.core.second(cljs.core.split_with((function (p1__102659_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__102659_SHARP_,tx_id);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))))));
if((cljs.core.count(result) > (1))){
var temp__5804__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1));
if(cljs.core.truth_(temp__5804__auto__)){
var next_tx_id = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009),next_tx_id], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.editor.undo_redo.get_previous_tx_id = (function frontend$modules$editor$undo_redo$get_previous_tx_id(tx_id){
var result = cljs.core.first(cljs.core.split_with((function (p1__102660_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__102660_SHARP_,tx_id);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))))));
if((cljs.core.count(result) >= (1))){
return cljs.core.last(result);
} else {
return null;
}
});
frontend.modules.editor.undo_redo.get_previous_tx_editor_cursor = (function frontend$modules$editor$undo_redo$get_previous_tx_editor_cursor(tx_id){
var temp__5804__auto__ = frontend.modules.editor.undo_redo.get_previous_tx_id(tx_id);
if(cljs.core.truth_(temp__5804__auto__)){
var prev_tx_id = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009),prev_tx_id], null));
} else {
return null;
}
});
frontend.modules.editor.undo_redo.undo = (function frontend$modules$editor$undo_redo$undo(){
var temp__5804__auto__ = frontend.modules.editor.undo_redo.smart_pop_undo();
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
var map__102661 = e;
var map__102661__$1 = cljs.core.__destructure_map(map__102661);
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102661__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102661__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102661__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var new_txs = frontend.modules.editor.undo_redo.get_txs(false,txs);
var current_editor_cursor = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009),tx_id], null));
var save_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"save-block","save-block",591532560));
var prev_editor_cursor = frontend.modules.editor.undo_redo.get_previous_tx_editor_cursor(tx_id);
var editor_cursor = ((((save_block_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316).cljs$core$IFn$_invoke$arity$1(prev_editor_cursor)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())))))?prev_editor_cursor:current_editor_cursor);
frontend.modules.editor.undo_redo.push_redo(e);

frontend.modules.editor.undo_redo.transact_BANG_(new_txs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo?","undo?",85877626),true], null),tx_meta,cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination-blocks-range","pagination-blocks-range",1937905534)], null))], 0)));

frontend.modules.editor.undo_redo.set_editor_content_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword("whiteboard","transact?","whiteboard/transact?",-1793205629).cljs$core$IFn$_invoke$arity$1(tx_meta))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","undo","whiteboard/undo",-2067979761),e], null));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e,new cljs.core.Keyword(null,"txs-op","txs-op",2083668558),new_txs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),editor_cursor], 0));
} else {
return null;
}
});
frontend.modules.editor.undo_redo.redo = (function frontend$modules$editor$undo_redo$redo(){
var temp__5804__auto__ = frontend.modules.editor.undo_redo.smart_pop_redo();
if(cljs.core.truth_(temp__5804__auto__)){
var map__102662 = temp__5804__auto__;
var map__102662__$1 = cljs.core.__destructure_map(map__102662);
var e = map__102662__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102662__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102662__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102662__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var new_txs = frontend.modules.editor.undo_redo.get_txs(true,txs);
var current_editor_cursor = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009),tx_id], null));
var editor_cursor = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"save-block","save-block",591532560)))?current_editor_cursor:frontend.modules.editor.undo_redo.get_next_tx_editor_cursor(tx_id));
frontend.modules.editor.undo_redo.push_undo(e);

frontend.modules.editor.undo_redo.transact_BANG_(new_txs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redo?","redo?",-1798545479),true], null),tx_meta,cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination-blocks-range","pagination-blocks-range",1937905534)], null))], 0)));

frontend.modules.editor.undo_redo.set_editor_content_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword("whiteboard","transact?","whiteboard/transact?",-1793205629).cljs$core$IFn$_invoke$arity$1(tx_meta))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","redo","whiteboard/redo",225581989),e], null));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e,new cljs.core.Keyword(null,"txs-op","txs-op",2083668558),new_txs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),editor_cursor], 0));
} else {
return null;
}
});
frontend.modules.editor.undo_redo.toggle_undo_redo_mode_BANG_ = (function frontend$modules$editor$undo_redo$toggle_undo_redo_mode_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050),cljs.core.not);

var mode = (cljs.core.truth_(new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))?"Page only":"Global");
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Undo/redo mode: ",mode].join('')], null));
});
frontend.modules.editor.undo_redo.pause_listener_BANG_ = (function frontend$modules$editor$undo_redo$pause_listener_BANG_(){
return cljs.core.reset_BANG_(frontend.modules.editor.undo_redo._STAR_pause_listener,true);
});
frontend.modules.editor.undo_redo.resume_listener_BANG_ = (function frontend$modules$editor$undo_redo$resume_listener_BANG_(){
return cljs.core.reset_BANG_(frontend.modules.editor.undo_redo._STAR_pause_listener,false);
});
frontend.modules.editor.undo_redo.listen_db_changes_BANG_ = (function frontend$modules$editor$undo_redo$listen_db_changes_BANG_(p__102663){
var map__102664 = p__102663;
var map__102664__$1 = cljs.core.__destructure_map(map__102664);
var tx_report = map__102664__$1;
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102664__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102664__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
if(((cljs.core.seq(tx_data)) && (((cljs.core.not((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"undo?","undo?",85877626).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"redo?","redo?",-1798545479).cljs$core$IFn$_invoke$arity$1(tx_meta);
}
})())) && (((cljs.core.not(cljs.core.deref(frontend.modules.editor.undo_redo._STAR_pause_listener))) && ((!(clojure.set.subset_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),tx_data)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null], null), null))))))))))){
frontend.modules.editor.undo_redo.reset_redo();

if(cljs.core.truth_(new cljs.core.Keyword(null,"replace?","replace?",-877816403).cljs$core$IFn$_invoke$arity$1(tx_meta))){
var removed_e = frontend.modules.editor.undo_redo.pop_undo();
var entity = cljs.core.update.cljs$core$IFn$_invoke$arity$4(removed_e,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.concat,tx_data);
return frontend.modules.editor.undo_redo.push_undo(entity);
} else {
var updated_blocks = frontend.modules.datascript_report.core.get_blocks(tx_report);
var entity = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),updated_blocks,new cljs.core.Keyword(null,"txs","txs",2056038378),tx_data,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta,new cljs.core.Keyword(null,"pagination-blocks-range","pagination-blocks-range",1937905534),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","pagination-blocks-range","ui/pagination-blocks-range",1937900778),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null))], null),cljs.core.deref(frontend.state.state)),new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.select_keys(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475)], null))], null);
return frontend.modules.editor.undo_redo.push_undo(entity);
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.editor.undo_redo.js.map
