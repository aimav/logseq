goog.provide('frontend.mobile.mobile_bar');
/**
 * Call blur on the textarea if it is in composition mode, let the IME commit the composing text
 */
frontend.mobile.mobile_bar.blur_if_compositing = (function frontend$mobile$mobile_bar$blur_if_compositing(){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.state.editor_in_composition_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.get_edit_input_id();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var edit_input_id = temp__5804__auto__;
var textarea_el = goog.dom.getElement(edit_input_id);
return textarea_el.blur();
} else {
return null;
}
});
frontend.mobile.mobile_bar.indent_outdent = rum.core.lazy_build(rum.core.build_defc,(function (indent_QMARK_,icon){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

frontend.mobile.mobile_bar.blur_if_compositing();

return frontend.handler.editor.indent_outdent(indent_QMARK_);
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size], null)))])]);
}),null,"frontend.mobile.mobile-bar/indent-outdent");
frontend.mobile.mobile_bar.command = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__119857__delegate = function (command_handler,p__119847,p__119848){
var map__119849 = p__119847;
var map__119849__$1 = cljs.core.__destructure_map(map__119849);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119849__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119849__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vec__119850 = p__119848;
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119850,(0),null);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(event_QMARK_)){
return (command_handler.cljs$core$IFn$_invoke$arity$1 ? command_handler.cljs$core$IFn$_invoke$arity$1(e) : command_handler.call(null,e));
} else {
return (command_handler.cljs$core$IFn$_invoke$arity$0 ? command_handler.cljs$core$IFn$_invoke$arity$0() : command_handler.call(null));
}
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)))])]);
};
var G__119857 = function (command_handler,p__119847,var_args){
var p__119848 = null;
if (arguments.length > 2) {
var G__119858__i = 0, G__119858__a = new Array(arguments.length -  2);
while (G__119858__i < G__119858__a.length) {G__119858__a[G__119858__i] = arguments[G__119858__i + 2]; ++G__119858__i;}
  p__119848 = new cljs.core.IndexedSeq(G__119858__a,0,null);
} 
return G__119857__delegate.call(this,command_handler,p__119847,p__119848);};
G__119857.cljs$lang$maxFixedArity = 2;
G__119857.cljs$lang$applyTo = (function (arglist__119859){
var command_handler = cljs.core.first(arglist__119859);
arglist__119859 = cljs.core.next(arglist__119859);
var p__119847 = cljs.core.first(arglist__119859);
var p__119848 = cljs.core.rest(arglist__119859);
return G__119857__delegate(command_handler,p__119847,p__119848);
});
G__119857.cljs$core$IFn$_invoke$arity$variadic = G__119857__delegate;
return G__119857;
})()
,null,"frontend.mobile.mobile-bar/command");
frontend.mobile.mobile_bar.timestamp_submenu = rum.core.lazy_build(rum.core.build_defc,(function (parent_id){
var callback = (function (event){
frontend.util.stop(event);

var target = goog.dom.getElement("mobile-toolbar-timestamp-submenu");
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(target,"show-submenu");
});
var command_cp = (function (action,description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
(action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));

return callback(e);
})], null),description], null);
});
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (event){
frontend.util.stop(event);

var target = goog.dom.getElement("mobile-toolbar-timestamp-submenu");
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(target,"show-submenu");
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon("calendar",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size], null)))]),daiquiri.core.create_element("div",{'id':"mobile-toolbar-timestamp-submenu",'style':{'bottom':cljs.core.deref(frontend.util.keyboard_height)},'className':"submenu"},[daiquiri.interpreter.interpret(command_cp((function (){
var today = frontend.handler.page.get_page_ref_text(frontend.date.today());
return frontend.commands.simple_insert_BANG_(parent_id,today,cljs.core.PersistentArrayMap.EMPTY);
}),"Today")),daiquiri.interpreter.interpret(command_cp((function (){
var tomorrow = frontend.handler.page.get_page_ref_text(frontend.date.tomorrow());
return frontend.commands.simple_insert_BANG_(parent_id,tomorrow,cljs.core.PersistentArrayMap.EMPTY);
}),"Tomorrow")),daiquiri.interpreter.interpret(command_cp((function (){
var yesterday = frontend.handler.page.get_page_ref_text(frontend.date.yesterday());
return frontend.commands.simple_insert_BANG_(parent_id,yesterday,cljs.core.PersistentArrayMap.EMPTY);
}),"Yesterday")),daiquiri.interpreter.interpret(command_cp((function (){
var timestamp = frontend.date.get_current_time();
return frontend.commands.simple_insert_BANG_(parent_id,timestamp,cljs.core.PersistentArrayMap.EMPTY);
}),"Time"))])]);
}),null,"frontend.mobile.mobile-bar/timestamp-submenu");
frontend.mobile.mobile_bar.commands = (function frontend$mobile$mobile_bar$commands(parent_id){
var viewport_fn = (function (){
var temp__5804__auto__ = goog.dom.getElement(parent_id);
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$variadic(input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"to-vw-one-quarter?","to-vw-one-quarter?",1745595255),true], 0));

return input.focus();
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.handler.editor.toggle_page_reference_embed(parent_id);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"brackets"], null),true),frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.handler.editor.toggle_block_reference_embed(parent_id);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"parentheses"], null),true),frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.commands.simple_insert_BANG_(parent_id,"/",cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"command"], null),true)], null);
});
frontend.mobile.mobile_bar.mobile_bar = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.sub(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417));
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = frontend.state.sub(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_ipad_QMARK_();
}
} else {
return and__5041__auto__;
}
})())){
var parent_id = frontend.state.get_edit_input_id();
var commands = frontend.mobile.mobile_bar.commands(parent_id);
return daiquiri.core.create_element("div",{'id':"mobile-editor-toolbar",'className':"bg-base-2"},[daiquiri.core.create_element("div",{'className':"toolbar-commands"},[frontend.mobile.mobile_bar.indent_outdent(false,"indent-decrease"),frontend.mobile.mobile_bar.indent_outdent(true,"indent-increase"),frontend.mobile.mobile_bar.command(frontend.handler.editor.move_up_down(true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"arrow-bar-to-up"], null)),frontend.mobile.mobile_bar.command(frontend.handler.editor.move_up_down(false),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"arrow-bar-to-down"], null)),frontend.mobile.mobile_bar.command((function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479)))){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(null);
} else {
return frontend.commands.simple_insert_BANG_(parent_id,"\n",cljs.core.PersistentArrayMap.EMPTY);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"arrow-back"], null)),frontend.mobile.mobile_bar.command((function (){
frontend.mobile.mobile_bar.blur_if_compositing();

return frontend.handler.editor.cycle_todo_BANG_();
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"checkbox"], null),true),frontend.mobile.mobile_bar.command((function (){
return frontend.mobile.camera.embed_photo(parent_id);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"camera"], null),true),frontend.mobile.mobile_bar.command(frontend.handler.history.undo_BANG_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"rotate",new cljs.core.Keyword(null,"class","class",-2030961996),"rotate-180"], null),true),frontend.mobile.mobile_bar.command(frontend.handler.history.redo_BANG_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"rotate-clockwise",new cljs.core.Keyword(null,"class","class",-2030961996),"rotate-180"], null),true),frontend.mobile.mobile_bar.timestamp_submenu(parent_id),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$mobile$mobile_bar$iter__119853(s__119854){
return (new cljs.core.LazySeq(null,(function (){
var s__119854__$1 = s__119854;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119854__$1);
if(temp__5804__auto__){
var s__119854__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119854__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119854__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119856 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119855 = (0);
while(true){
if((i__119855 < size__5519__auto__)){
var command = cljs.core._nth(c__5518__auto__,i__119855);
cljs.core.chunk_append(b__119856,daiquiri.interpreter.interpret(command));

var G__119860 = (i__119855 + (1));
i__119855 = G__119860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119856),frontend$mobile$mobile_bar$iter__119853(cljs.core.chunk_rest(s__119854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119856),null);
}
} else {
var command = cljs.core.first(s__119854__$2);
return cljs.core.cons(daiquiri.interpreter.interpret(command),frontend$mobile$mobile_bar$iter__119853(cljs.core.rest(s__119854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(commands);
})())]),daiquiri.core.create_element("div",{'className':"toolbar-hide-keyboard"},[frontend.mobile.mobile_bar.command((function (){
return frontend.state.clear_edit_BANG_();
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"keyboard-show"], null))])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.mobile.mobile-bar/mobile-bar");

//# sourceMappingURL=frontend.mobile.mobile_bar.js.map
