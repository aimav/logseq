goog.provide('frontend.components.content');
goog.scope(function(){
  frontend.components.content.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.content.custom_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"menu-links-wrapper"},[frontend.ui.menu_background_color((function (p1__114336_SHARP_){
return frontend.handler.editor.property.batch_add_block_property_BANG_(frontend.state.get_selection_block_ids(),new cljs.core.Keyword(null,"background-color","background-color",570434026),p1__114336_SHARP_);
}),(function (){
return frontend.handler.editor.property.batch_remove_block_property_BANG_(frontend.state.get_selection_block_ids(),new cljs.core.Keyword(null,"background-color","background-color",570434026));
})),frontend.ui.menu_heading((function (p1__114337_SHARP_){
return frontend.handler.editor.batch_set_heading_BANG_(frontend.state.get_selection_block_ids(),p1__114337_SHARP_);
}),(function (){
return frontend.handler.editor.batch_set_heading_BANG_(frontend.state.get_selection_block_ids(),true);
}),(function (){
return frontend.handler.editor.batch_remove_heading_BANG_(frontend.state.get_selection_block_ids());
})),daiquiri.core.create_element("hr",{'className':"menu-separator"},null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"cut",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.cut_selection_blocks(true);
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","cut","editor/cut",803621444))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","cut","editor/cut",803621444)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__114338_SHARP_){
frontend.handler.editor.delete_selection(p1__114338_SHARP_);

return frontend.state.hide_custom_context_menu_BANG_();
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","delete","editor/delete",1285565589))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","delete-selection","editor/delete-selection",-1313454836)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_selection_blocks,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","copy","editor/copy",-1849165166))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","copy","editor/copy",-1849165166)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy as",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var block_uuids = frontend.handler.editor.get_selected_toplevel_block_uuids();
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(block_uuids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),false], null));
}));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-export-as","content/copy-export-as",-1135224218)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy block refs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_block_refs], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-block-ref","content/copy-block-ref",2024909906)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy block embeds",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_block_embeds], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-block-emebed","content/copy-block-emebed",-126286151)], 0))),daiquiri.core.create_element("hr",{'className':"menu-separator"},null),(cljs.core.truth_(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0())?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make a Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.batch_make_cards_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","make-a-flashcard","context-menu/make-a-flashcard",942504552)], 0))):null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Toggle number list",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),frontend.state.get_selection_block_ids()], null));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","toggle-number-list","context-menu/toggle-number-list",-1283735842)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"cycle todos",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.cycle_todos_BANG_,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","cycle-todo","editor/cycle-todo",1017593231))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","cycle-todo","editor/cycle-todo",1017593231)], 0))),daiquiri.core.create_element("hr",{'className':"menu-separator"},null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"Expand all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.expand_all_selection_BANG_,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"Collapse all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.collapse_all_selection_BANG_,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392)], 0)))]);
}),null,"frontend.components.content/custom-context-menu-content");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.content !== 'undefined') && (typeof frontend.components.content._STAR_template_including_parent_QMARK_ !== 'undefined')){
} else {
frontend.components.content._STAR_template_including_parent_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.content.template_checkbox = rum.core.lazy_build(rum.core.build_defc,(function (template_including_parent_QMARK_){
return daiquiri.core.create_element("div",{'className':"flex flex-row w-auto items-center"},[(function (){var attrs114345 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","template-include-parent-block","context-menu/template-include-parent-block",-1605127051)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs114345))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-medium","mr-2"], null)], null),attrs114345], 0))):{'className':"text-medium mr-2"}),((cljs.core.map_QMARK_(attrs114345))?null:[daiquiri.interpreter.interpret(attrs114345)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2(template_including_parent_QMARK_,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.content._STAR_template_including_parent_QMARK_,cljs.core.not);
})))]);
}),null,"frontend.components.content/template-checkbox");
frontend.components.content.block_template = rum.core.lazy_build(rum.core.build_defcs,(function (state,block_id){
var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.content","edit?","frontend.components.content/edit?",117022613));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.content","input","frontend.components.content/input",-328843080));
var template_including_parent_QMARK_ = rum.core.react(frontend.components.content._STAR_template_including_parent_QMARK_);
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var block = (function (){var G__114346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114346) : frontend.db.entity.call(null,G__114346));
})();
var has_children_QMARK_ = cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block));
if((((template_including_parent_QMARK_ == null)) && (has_children_QMARK_))){
cljs.core.reset_BANG_(frontend.components.content._STAR_template_including_parent_QMARK_,true);
} else {
}

if(cljs.core.truth_(cljs.core.deref(edit_QMARK_))){
frontend.state.clear_edit_BANG_();

return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'onClick':(function (e){
return frontend.util.stop(e);
}),'className':"px-4 py-2 text-sm"},[(function (){var attrs114349 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","input-template-name","context-menu/input-template-name",-16334388)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs114349))?daiquiri.interpreter.element_attributes(attrs114349):null),((cljs.core.map_QMARK_(attrs114349))?null:[daiquiri.interpreter.interpret(attrs114349)]));
})(),daiquiri.core.create_element("input",{'id':"new-template",'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(input,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),((has_children_QMARK_)?frontend.components.content.template_checkbox(template_including_parent_QMARK_):null),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"submit","submit",-49315317)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var title = clojure.string.trim(cljs.core.deref(input));
if((!(clojure.string.blank_QMARK_(title)))){
if(cljs.core.truth_(frontend.handler.page.template_exists_QMARK_(title))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","template-exists-warning","context-menu/template-exists-warning",-2038001652)], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
frontend.handler.editor.property.set_block_property_BANG_(block_id__$1,new cljs.core.Keyword(null,"template","template",-702405684),title);

if(template_including_parent_QMARK_ === false){
frontend.handler.editor.property.set_block_property_BANG_(block_id__$1,new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),false);
} else {
}

return frontend.state.hide_custom_context_menu_BANG_();
}
} else {
return null;
}
})], 0)))]),daiquiri.core.create_element("hr",{'className':"menu-separator"},null)]);
} else {
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make a Template",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return cljs.core.reset_BANG_(edit_QMARK_,true);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","make-a-template","context-menu/make-a-template",531196665)], 0)));
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.modules.shortcut.core.disable_all_shortcuts,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.content","edit?","frontend.components.content/edit?",117022613)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.content","input","frontend.components.content/input",-328843080)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.content._STAR_template_including_parent_QMARK_,null);

return state;
})], null)], null),"frontend.components.content/block-template");
frontend.components.content.block_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (_target,block_id){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var G__114367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114367) : frontend.db.entity.call(null,G__114367));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var heading = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})();
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu-links-wrapper",".menu-links-wrapper",202541467),frontend.ui.menu_background_color((function (p1__114350_SHARP_){
return frontend.handler.editor.property.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"background-color","background-color",570434026),p1__114350_SHARP_);
}),(function (){
return frontend.handler.editor.property.remove_block_property_BANG_(block_id,new cljs.core.Keyword(null,"background-color","background-color",570434026));
})),frontend.ui.menu_heading(heading,(function (p1__114351_SHARP_){
return frontend.handler.editor.set_heading_BANG_(block_id,p1__114351_SHARP_);
}),(function (){
return frontend.handler.editor.set_heading_BANG_(block_id,true);
}),(function (){
return frontend.handler.editor.remove_heading_BANG_(block_id);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"Open in sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.open_block_in_sidebar_BANG_(block_id);
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u21E7+click"], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","open-in-sidebar","content/open-in-sidebar",731683416)], 0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block ref",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,logseq.graph_parser.util.block_ref.__GT_block_ref);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-block-ref","content/copy-block-ref",2024909906)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block embed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__114352_SHARP_){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__114352_SHARP_], 0));
}));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-block-emebed","content/copy-block-emebed",-126286151)], 0))),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block URL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var current_repo = frontend.state.get_current_repo();
var tap_f = (function (block_id__$1){
return frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$3(null,current_repo,block_id__$1);
});
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,tap_f);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-block-url","content/copy-block-url",1258898377)], 0))):null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy as",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),false], null));
}));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-export-as","content/copy-export-as",-1135224218)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"Cut",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.cut_block_BANG_(block_id);
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","cut","editor/cut",803621444))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","cut","editor/cut",803621444)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.delete_block_aux_BANG_(block,true);
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","delete","editor/delete",1285565589))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","delete-selection","editor/delete-selection",-1313454836)], 0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null),frontend.components.content.block_template(block_id),((frontend.extensions.srs.card_block_QMARK_(block))?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Preview Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.preview(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","preview-flashcard","context-menu/preview-flashcard",31934109)], 0))):(cljs.core.truth_(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0())?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make a Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.make_block_a_card_BANG_(block_id);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","make-a-flashcard","context-menu/make-a-flashcard",942504552)], 0))):null
)),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Toggle number list",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),frontend.state.get_selection_block_ids()], null));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("context-menu","toggle-number-list","context-menu/toggle-number-list",-1283735842)], 0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"Expand all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","expand-block-children","editor/expand-block-children",2088308354)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"Collapse all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","collapse-block-children","editor/collapse-block-children",1709191392)], 0))),(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996)], null)))?(function (){var temp__5804__auto____$1 = frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"block-context-menu-item","block-context-menu-item",-1128965744));
if(cljs.core.truth_(temp__5804__auto____$1)){
var cmds = temp__5804__auto____$1;
var iter__5520__auto__ = (function frontend$components$content$iter__114368(s__114369){
return (new cljs.core.LazySeq(null,(function (){
var s__114369__$1 = s__114369;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__114369__$1);
if(temp__5804__auto____$2){
var s__114369__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__114369__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114369__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114371 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114370 = (0);
while(true){
if((i__114370 < size__5519__auto__)){
var vec__114372 = cljs.core._nth(c__5518__auto__,i__114370);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114372,(0),null);
var map__114375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114372,(1),null);
var map__114375__$1 = cljs.core.__destructure_map(map__114375);
var cmd = map__114375__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114375__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114375__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114372,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114372,(3),null);
cljs.core.chunk_append(b__114371,frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__114370,vec__114372,_,map__114375,map__114375__$1,cmd,key,label,action,pid,c__5518__auto__,size__5519__auto__,b__114371,s__114369__$2,temp__5804__auto____$2,cmds,temp__5804__auto____$1,heading,block,temp__5804__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_id),action);
});})(i__114370,vec__114372,_,map__114375,map__114375__$1,cmd,key,label,action,pid,c__5518__auto__,size__5519__auto__,b__114371,s__114369__$2,temp__5804__auto____$2,cmds,temp__5804__auto____$1,heading,block,temp__5804__auto__))
], null),label));

var G__114400 = (i__114370 + (1));
i__114370 = G__114400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114371),frontend$components$content$iter__114368(cljs.core.chunk_rest(s__114369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114371),null);
}
} else {
var vec__114376 = cljs.core.first(s__114369__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114376,(0),null);
var map__114379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114376,(1),null);
var map__114379__$1 = cljs.core.__destructure_map(map__114379);
var cmd = map__114379__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114379__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114379__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114376,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114376,(3),null);
return cljs.core.cons(frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__114376,_,map__114379,map__114379__$1,cmd,key,label,action,pid,s__114369__$2,temp__5804__auto____$2,cmds,temp__5804__auto____$1,heading,block,temp__5804__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_id),action);
});})(vec__114376,_,map__114379,map__114379__$1,cmd,key,label,action,pid,s__114369__$2,temp__5804__auto____$2,cmds,temp__5804__auto____$1,heading,block,temp__5804__auto__))
], null),label),frontend$components$content$iter__114368(cljs.core.rest(s__114369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cmds);
} else {
return null;
}
})():null),(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null)))?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"(Dev) Show block data",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.common.developer.show_entity_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null)], 0));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("dev","show-block-data","dev/show-block-data",299125726)], 0))):null),(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null)))?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"(Dev) Show block AST",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var block__$1 = (function (){var G__114380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__114380) : frontend.db.pull.call(null,G__114380));
})();
return frontend.handler.common.developer.show_content_ast(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block__$1));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("dev","show-block-ast","dev/show-block-ast",-227225549)], 0))):null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.disable_all_shortcuts], null),"frontend.components.content/block-context-menu-content");
frontend.components.content.block_ref_custom_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (block,block_ref_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return block_ref_id;
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("div",{'className':"menu-links-wrapper"},[frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-in-sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),block_ref_id,new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u21E7+click"], null)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","open-in-sidebar","content/open-in-sidebar",731683416)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.copy_current_ref(block_ref_id);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","copy-ref","content/copy-ref",-2112625163)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.delete_current_ref_BANG_(block,block_ref_id);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","delete-ref","content/delete-ref",1711148336)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"replace-with-text",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.replace_ref_with_text_BANG_(block,block_ref_id);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","replace-with-text","content/replace-with-text",1336545931)], 0))),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"replace-with-embed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.replace_ref_with_embed_BANG_(block,block_ref_id);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","replace-with-embed","content/replace-with-embed",-1134258828)], 0)))]);
} else {
return null;
}
}),null,"frontend.components.content/block-ref-custom-context-menu-content");
frontend.components.content.page_title_custom_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (page){
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
var page_menu_options = frontend.components.page_menu.page_menu(page);
return daiquiri.core.create_element("div",{'className':"menu-links-wrapper"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$content$iter__114381(s__114382){
return (new cljs.core.LazySeq(null,(function (){
var s__114382__$1 = s__114382;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114382__$1);
if(temp__5804__auto__){
var s__114382__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114382__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114382__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114384 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114383 = (0);
while(true){
if((i__114383 < size__5519__auto__)){
var map__114385 = cljs.core._nth(c__5518__auto__,i__114383);
var map__114385__$1 = cljs.core.__destructure_map(map__114385);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114385__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114385__$1,new cljs.core.Keyword(null,"options","options",99638489));
cljs.core.chunk_append(b__114384,rum.core.with_key(frontend.ui.menu_link(options,title),title));

var G__114401 = (i__114383 + (1));
i__114383 = G__114401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114384),frontend$components$content$iter__114381(cljs.core.chunk_rest(s__114382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114384),null);
}
} else {
var map__114386 = cljs.core.first(s__114382__$2);
var map__114386__$1 = cljs.core.__destructure_map(map__114386);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114386__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114386__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.cons(rum.core.with_key(frontend.ui.menu_link(options,title),title),frontend$components$content$iter__114381(cljs.core.rest(s__114382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(page_menu_options);
})())]);
}
}),null,"frontend.components.content/page-title-custom-context-menu-content");
frontend.components.content.hiccup_content = rum.core.lazy_build(rum.core.build_defc,(function (id,p__114387){
var map__114388 = p__114387;
var map__114388__$1 = cljs.core.__destructure_map(map__114388);
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114388__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
return daiquiri.core.create_element("div",{'id':id},[(cljs.core.truth_(hiccup)?daiquiri.interpreter.interpret(hiccup):(function (){var attrs114389 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","click-to-edit","content/click-to-edit",-166350355)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114389))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor"], null)], null),attrs114389], 0))):{'className':"cursor"}),((cljs.core.map_QMARK_(attrs114389))?null:[daiquiri.interpreter.interpret(attrs114389)]));
})())]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.listen(state,window,"contextmenu",(function (e){
var target = frontend.components.content.goog$module$goog$object.get(e,"target");
var block_el = target.closest(".bullet-container[blockid]");
var block_id = (function (){var G__114392 = block_el;
if((G__114392 == null)){
return null;
} else {
return G__114392.getAttribute("blockid");
}
})();
var map__114390 = frontend.state.sub(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446));
var map__114390__$1 = cljs.core.__destructure_map(map__114390);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114390__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114390__$1,new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
var map__114391 = frontend.state.sub(new cljs.core.Keyword("page-title","context","page-title/context",1788836745));
var map__114391__$1 = cljs.core.__destructure_map(map__114391);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114391__$1,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_(page)){
frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.page_title_custom_context_menu_content(page));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),null);
} else {
if(cljs.core.truth_(block_ref)){
frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.block_ref_custom_context_menu_content(block,block_ref));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446),null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (!(dommy.core.has_class_QMARK_(target,"bullet")));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.custom_context_menu_content());
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = block_id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.parse_uuid(block_id);
} else {
return and__5041__auto__;
}
})())){
var block__$1 = target.closest(".ls-block");
if(cljs.core.truth_(block__$1)){
frontend.state.clear_selection_BANG_();

frontend.state.conj_selection_block_BANG_(block__$1,new cljs.core.Keyword(null,"down","down",1565245570));
} else {
}

return frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.block_context_menu_content(target,cljs.core.uuid(block_id)));
} else {
return null;

}
}
}
}
}));
}))], null),"frontend.components.content/hiccup-content");
frontend.components.content.non_hiccup_content = rum.core.lazy_build(rum.core.build_defc,(function (id,content,on_click,on_hide,config,format){
var edit_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),id], null));
if(cljs.core.truth_(edit_QMARK_)){
return frontend.components.editor.box(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),on_hide,new cljs.core.Keyword(null,"format","format",-1306924766),format], null),id,config);
} else {
var on_click__$1 = (function (e){
if(frontend.util.link_QMARK_(frontend.components.content.goog$module$goog$object.get(e,"target"))){
return null;
} else {
frontend.util.stop(e);

frontend.handler.editor.reset_cursor_range_BANG_(goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));

frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(id,content);

frontend.state.set_edit_input_id_BANG_(id);

if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
return null;
}
}
});
return daiquiri.core.create_element("pre",{'id':id,'onClick':on_click__$1,'className':"cursor content pre-white-space"},[((clojure.string.blank_QMARK_(content))?(function (){var attrs114393 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","click-to-edit","content/click-to-edit",-166350355)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114393))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor"], null)], null),attrs114393], 0))):{'className':"cursor"}),((cljs.core.map_QMARK_(attrs114393))?null:[daiquiri.interpreter.interpret(attrs114393)]));
})():daiquiri.interpreter.interpret(content))]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.content/non-hiccup-content");
frontend.components.content.set_draw_iframe_style_BANG_ = (function frontend$components$content$set_draw_iframe_style_BANG_(){
var width = frontend.components.content.goog$module$goog$object.get(window,"innerWidth");
if((width >= (1024))){
var draws = dommy.utils.__GT_Array(document.getElementsByClassName("draw-iframe"));
var width__$1 = (width - (200));
var seq__114394 = cljs.core.seq(draws);
var chunk__114395 = null;
var count__114396 = (0);
var i__114397 = (0);
while(true){
if((i__114397 < count__114396)){
var draw = chunk__114395.cljs$core$IIndexed$_nth$arity$2(null,i__114397);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1),"px"].join('')], 0));

var height_114402 = (function (){var x__5128__auto__ = (700);
var y__5129__auto__ = (width__$1 / (2));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_114402),"px"].join('')], 0));

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- ((width__$1 - (570)) / (2)))),"px"].join('')], 0));


var G__114403 = seq__114394;
var G__114404 = chunk__114395;
var G__114405 = count__114396;
var G__114406 = (i__114397 + (1));
seq__114394 = G__114403;
chunk__114395 = G__114404;
count__114396 = G__114405;
i__114397 = G__114406;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__114394);
if(temp__5804__auto__){
var seq__114394__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__114394__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__114394__$1);
var G__114407 = cljs.core.chunk_rest(seq__114394__$1);
var G__114408 = c__5565__auto__;
var G__114409 = cljs.core.count(c__5565__auto__);
var G__114410 = (0);
seq__114394 = G__114407;
chunk__114395 = G__114408;
count__114396 = G__114409;
i__114397 = G__114410;
continue;
} else {
var draw = cljs.core.first(seq__114394__$1);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1),"px"].join('')], 0));

var height_114411 = (function (){var x__5128__auto__ = (700);
var y__5129__auto__ = (width__$1 / (2));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_114411),"px"].join('')], 0));

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- ((width__$1 - (570)) / (2)))),"px"].join('')], 0));


var G__114412 = cljs.core.next(seq__114394__$1);
var G__114413 = null;
var G__114414 = (0);
var G__114415 = (0);
seq__114394 = G__114412;
chunk__114395 = G__114413;
count__114396 = G__114414;
i__114397 = G__114415;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
frontend.components.content.content = rum.core.lazy_build(rum.core.build_defcs,(function (state,id,p__114398){
var map__114399 = p__114398;
var map__114399__$1 = cljs.core.__destructure_map(map__114399);
var option = map__114399__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114399__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114399__$1,new cljs.core.Keyword(null,"config","config",994861415));
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114399__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114399__$1,new cljs.core.Keyword(null,"content","content",15833224));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114399__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114399__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
if(cljs.core.truth_(hiccup)){
return daiquiri.core.create_element("div",null,[frontend.components.content.hiccup_content(id,option)]);
} else {
var format__$1 = logseq.graph_parser.util.normalize_format(format);
return frontend.components.content.non_hiccup_content(id,content,on_click,on_hide,config,format__$1);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.components.content.set_draw_iframe_style_BANG_();

frontend.handler.image.render_local_images_BANG_();

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
frontend.components.content.set_draw_iframe_style_BANG_();

frontend.handler.image.render_local_images_BANG_();

return state;
})], null)], null),"frontend.components.content/content");

//# sourceMappingURL=frontend.components.content.js.map
