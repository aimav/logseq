goog.provide('frontend.handler.editor.lifecycle');
frontend.handler.editor.lifecycle.did_mount_BANG_ = (function frontend$handler$editor$lifecycle$did_mount_BANG_(state){
var vec__113801_113811 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__113804_113812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113801_113811,(0),null);
var map__113804_113813__$1 = cljs.core.__destructure_map(map__113804_113812);
var block_parent_id_113814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113804_113813__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var id_113815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113801_113811,(1),null);
var content_113816 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id_113815], null));
if(cljs.core.truth_(block_parent_id_113814)){
frontend.state.set_editing_block_dom_id_BANG_(block_parent_id_113814);
} else {
}

if(cljs.core.truth_(content_113816)){
frontend.handler.editor.restore_cursor_pos_BANG_(id_113815,content_113816);
} else {
}

setTimeout((function (){
return frontend.handler.editor.keyboards.esc_save_BANG_(state);
}),(100));

var temp__5804__auto___113817 = cljs.core.vals(frontend.state.sub(new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881)));
if(cljs.core.truth_(temp__5804__auto___113817)){
var close_fns_113818 = temp__5804__auto___113817;
try{var seq__113806_113819 = cljs.core.seq(close_fns_113818);
var chunk__113807_113820 = null;
var count__113808_113821 = (0);
var i__113809_113822 = (0);
while(true){
if((i__113809_113822 < count__113808_113821)){
var f_113823 = chunk__113807_113820.cljs$core$IIndexed$_nth$arity$2(null,i__113809_113822);
(f_113823.cljs$core$IFn$_invoke$arity$0 ? f_113823.cljs$core$IFn$_invoke$arity$0() : f_113823.call(null));


var G__113824 = seq__113806_113819;
var G__113825 = chunk__113807_113820;
var G__113826 = count__113808_113821;
var G__113827 = (i__113809_113822 + (1));
seq__113806_113819 = G__113824;
chunk__113807_113820 = G__113825;
count__113808_113821 = G__113826;
i__113809_113822 = G__113827;
continue;
} else {
var temp__5804__auto___113828__$1 = cljs.core.seq(seq__113806_113819);
if(temp__5804__auto___113828__$1){
var seq__113806_113829__$1 = temp__5804__auto___113828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__113806_113829__$1)){
var c__5565__auto___113830 = cljs.core.chunk_first(seq__113806_113829__$1);
var G__113831 = cljs.core.chunk_rest(seq__113806_113829__$1);
var G__113832 = c__5565__auto___113830;
var G__113833 = cljs.core.count(c__5565__auto___113830);
var G__113834 = (0);
seq__113806_113819 = G__113831;
chunk__113807_113820 = G__113832;
count__113808_113821 = G__113833;
i__113809_113822 = G__113834;
continue;
} else {
var f_113835 = cljs.core.first(seq__113806_113829__$1);
(f_113835.cljs$core$IFn$_invoke$arity$0 ? f_113835.cljs$core$IFn$_invoke$arity$0() : f_113835.call(null));


var G__113836 = cljs.core.next(seq__113806_113829__$1);
var G__113837 = null;
var G__113838 = (0);
var G__113839 = (0);
seq__113806_113819 = G__113836;
chunk__113807_113820 = G__113837;
count__113808_113821 = G__113838;
i__113809_113822 = G__113839;
continue;
}
} else {
}
}
break;
}
}catch (e113805){var _e_113840 = e113805;
}} else {
}

var temp__5804__auto___113841 = goog.dom.getElement(id_113815);
if(cljs.core.truth_(temp__5804__auto___113841)){
var element_113842 = temp__5804__auto___113841;
element_113842.focus();

setTimeout((function (){
return frontend.util.scroll_editor_cursor(element_113842);
}),(50));
} else {
}

return state;
});
frontend.handler.editor.lifecycle.will_remount_BANG_ = (function frontend$handler$editor$lifecycle$will_remount_BANG_(_old_state,state){
frontend.handler.editor.keyboards.esc_save_BANG_(state);

return state;
});
frontend.handler.editor.lifecycle.will_unmount = (function frontend$handler$editor$lifecycle$will_unmount(state){
var map__113810_113843 = frontend.handler.editor.get_state();
var map__113810_113844__$1 = cljs.core.__destructure_map(map__113810_113843);
var value_113845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113810_113844__$1,new cljs.core.Keyword(null,"value","value",305978217));
frontend.handler.editor.clear_when_saved_BANG_();

if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"insert","insert",1286475395),null,new cljs.core.Keyword(null,"redo","redo",501190664),null,new cljs.core.Keyword(null,"auto-save","auto-save",1805740650),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"undo","undo",-1818036302),null,new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747),null], null), null),frontend.state.get_editor_op())))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"paste-blocks","paste-blocks",538514211),null,new cljs.core.Keyword(null,"redo","redo",501190664),null,new cljs.core.Keyword(null,"undo","undo",-1818036302),null], null), null),frontend.state.get_editor_latest_op())))))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_state(),value_113845);
} else {
}

return state;
});
frontend.handler.editor.lifecycle.lifecycle = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),frontend.handler.editor.lifecycle.did_mount_BANG_,new cljs.core.Keyword(null,"will-remount","will-remount",-141604325),frontend.handler.editor.lifecycle.will_remount_BANG_,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),frontend.handler.editor.lifecycle.will_unmount], null);

//# sourceMappingURL=frontend.handler.editor.lifecycle.js.map
