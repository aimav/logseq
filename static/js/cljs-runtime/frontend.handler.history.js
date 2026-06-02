goog.provide('frontend.handler.history');
frontend.handler.history.restore_cursor_BANG_ = (function frontend$handler$history$restore_cursor_BANG_(p__108768){
var map__108769 = p__108768;
var map__108769__$1 = cljs.core.__destructure_map(map__108769);
var last_edit_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108769__$1,new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316));
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108769__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108769__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.truth_((function (){var and__5041__auto__ = container;
if(cljs.core.truth_(and__5041__auto__)){
return last_edit_block;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = goog.dom.getElement(container);
if(cljs.core.truth_(temp__5804__auto__)){
var container__$1 = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_edit_block);
if(cljs.core.truth_(temp__5804__auto____$1)){
var block_uuid = temp__5804__auto____$1;
var temp__5804__auto____$2 = (function (){var G__108770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__108770) : frontend.db.pull.call(null,G__108770));
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var block = temp__5804__auto____$2;
var G__108771 = block;
var G__108772 = pos;
var G__108773 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var G__108774 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(G__108771,G__108772,G__108773,G__108774) : frontend.handler.editor.edit_block_BANG_.call(null,G__108771,G__108772,G__108773,G__108774));
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
frontend.handler.history.get_route_data = (function frontend$handler$history$get_route_data(route_match){
if(cljs.core.seq(route_match)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_match),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route_match)], null);
} else {
return null;
}
});
frontend.handler.history.restore_app_state_BANG_ = (function frontend$handler$history$restore_app_state_BANG_(state){
if(cljs.core.truth_(new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
var route_match = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(state);
var current_route = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var prev_route_data = frontend.handler.history.get_route_data(route_match);
var current_route_data = frontend.handler.history.get_route_data(current_route);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_route_data,current_route_data);
if(and__5041__auto__){
return prev_route_data;
} else {
return and__5041__auto__;
}
})())){
frontend.handler.route.redirect_BANG_(prev_route_data);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,cljs.core.merge,state);
}
});
frontend.handler.history.undo_BANG_ = (function frontend$handler$history$undo_BANG_(e){
frontend.util.stop(e);

frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"undo","undo",-1818036302));

frontend.state.clear_editor_action_BANG_();

frontend.state.set_block_op_type_BANG_(null);

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),frontend.state.get_current_repo()], null),null);

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var map__108775_108777 = frontend.modules.editor.undo_redo.undo();
var map__108775_108778__$1 = cljs.core.__destructure_map(map__108775_108777);
var editor_cursor_108779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108775_108778__$1,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800));
var app_state_108780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108775_108778__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
frontend.handler.history.restore_cursor_BANG_(editor_cursor_108779);

frontend.handler.history.restore_app_state_BANG_(app_state_108780);

return frontend.state.set_editor_op_BANG_(null);
});
frontend.handler.history.redo_BANG_ = (function frontend$handler$history$redo_BANG_(e){
frontend.util.stop(e);

frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"redo","redo",501190664));

frontend.state.clear_editor_action_BANG_();

var map__108776_108781 = frontend.modules.editor.undo_redo.redo();
var map__108776_108782__$1 = cljs.core.__destructure_map(map__108776_108781);
var editor_cursor_108783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108776_108782__$1,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800));
var app_state_108784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108776_108782__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
frontend.handler.history.restore_cursor_BANG_(editor_cursor_108783);

frontend.handler.history.restore_app_state_BANG_(app_state_108784);

return frontend.state.set_editor_op_BANG_(null);
});

//# sourceMappingURL=frontend.handler.history.js.map
