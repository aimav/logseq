goog.provide('frontend.components.page');
goog.scope(function(){
  frontend.components.page.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.page.get_page_name = (function frontend$components$page$get_page_name(state){
var route_match = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
if(frontend.util.web_platform_QMARK_){
/**
 * Return string block uuid for matching :name and :block-route-name params or
 *  nil if not found
 */
frontend.components.page.get_block_uuid_by_block_route_name = (function frontend$components$page$get_block_uuid_by_block_route_name(state){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"block-route-name","block-route-name",1558267328)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var route_name = temp__5804__auto__;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_block_by_page_name_and_block_route_name(frontend.state.get_current_repo(),frontend.components.page.get_page_name(state),route_name)));
} else {
return null;
}
});
} else {
frontend.components.page.get_block_uuid_by_block_route_name = cljs.core.constantly(null);
}
frontend.components.page.get_blocks = (function frontend$components$page$get_blocks(repo,page_name,block_id){
if(cljs.core.truth_(page_name)){
var root = (cljs.core.truth_(block_id)?(function (){var G__114777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__114777) : frontend.db.pull.call(null,G__114777));
})():frontend.db.model.get_page(page_name));
var opts = (cljs.core.truth_(block_id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root)], null):cljs.core.PersistentArrayMap.EMPTY);
var G__114778 = repo;
var G__114779 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root);
var G__114780 = opts;
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__114778,G__114779,G__114780) : frontend.db.get_paginated_blocks.call(null,G__114778,G__114779,G__114780));
} else {
return null;
}
});
frontend.components.page.open_first_block_BANG_ = (function frontend$components$page$open_first_block_BANG_(state){
var vec__114781_115038 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var __115039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114781_115038,(0),null);
var blocks_115040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114781_115038,(1),null);
var __115041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114781_115038,(2),null);
var sidebar_QMARK__115042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114781_115038,(3),null);
var preview_QMARK__115043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114781_115038,(4),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = preview_QMARK__115043;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"all-journals","all-journals",-347015095),null,new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),null], null), null),frontend.state.get_current_route())));
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(sidebar_QMARK__115042);
} else {
return and__5041__auto__;
}
})())){
var block_115044 = cljs.core.first(blocks_115040);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks_115040),(1))) && (((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_115044))) && (cljs.core.not(preview_QMARK__115043)))))){
var G__114784_115045 = block_115044;
var G__114785_115046 = new cljs.core.Keyword(null,"max","max",61366548);
var G__114786_115047 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_115044);
(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__114784_115045,G__114785_115046,G__114786_115047) : frontend.handler.editor.edit_block_BANG_.call(null,G__114784_115045,G__114785_115046,G__114786_115047));
} else {
}
} else {
}

return state;
});
frontend.components.page.page_blocks_inner = rum.core.lazy_build(rum.core.build_defc,(function (page_name,_blocks,hiccup,sidebar_QMARK_,whiteboard_QMARK_,_block_uuid){
return daiquiri.core.create_element("div",{'style':{'marginLeft':(cljs.core.truth_((function (){var or__5043__auto__ = sidebar_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return whiteboard_QMARK_;
}
})())?(0):(-20))},'className':"page-blocks-inner"},[rum.core.with_key(frontend.components.content.content(page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),hiccup,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_], null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),"-hiccup"].join(''))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),frontend.components.page.open_first_block_BANG_,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),frontend.components.page.open_first_block_BANG_,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (prev_state,state){
var vec__114787 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(prev_state);
var old_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114787,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114787,(1),null);
var old_hiccup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114787,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114787,(3),null);
var old_block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114787,(4),null);
var vec__114790 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114790,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114790,(1),null);
var hiccup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114790,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114790,(3),null);
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114790,(4),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_name,old_page_name)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hiccup,old_hiccup)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid,old_block_uuid)))));
})], null)], null),"frontend.components.page/page-blocks-inner");
frontend.components.page.dummy_block = rum.core.lazy_build(rum.core.build_defc,(function (page_name){
var vec__114794 = rum.core.use_state(false);
var hover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114794,(0),null);
var set_hover_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114794,(1),null);
var click_handler_fn = (function (){
var block = frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));
return setTimeout((function (){
var G__114797 = block;
var G__114798 = new cljs.core.Keyword(null,"max","max",61366548);
var G__114799 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__114797,G__114798,G__114799) : frontend.handler.editor.edit_block_BANG_.call(null,G__114797,G__114798,G__114799));
}),(0));
});
var drop_handler_fn = (function (event){
frontend.util.stop(event);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_selection_block_ids(),(function (block_uuids){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids),(function (lookup_refs){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__114800 = frontend.state.get_current_repo();
var G__114801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__114802 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__114800,G__114801,G__114802) : frontend.db.pull_many.call(null,G__114800,G__114801,G__114802));
})(),(function (selected){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(selected))?selected:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(frontend.components.block._STAR_dragging_block)], null)),(function (blocks){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null)),(function (_){
return promesa.protocols._promise(setTimeout((function (){
var target_block = (function (){var G__114803 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page.call(null,page_name)));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__114803) : frontend.db.pull.call(null,G__114803));
})();
return frontend.handler.dnd.move_blocks(event,blocks,target_block,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
}),(0)));
}));
}));
}));
}));
}));
}));
});
return daiquiri.core.create_element("div",{'style':{'width':"100%",'borderTop':(cljs.core.truth_(hover)?"3px solid #ccc":null)},'className':"ls-block flex-1 flex-col rounded-sm"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'style':{'height':(24)},'className':"flex flex-row items-center mr-2 ml-1"},[daiquiri.core.create_element("span",{'className':"bullet-container cursor"},[daiquiri.core.create_element("span",{'className':"bullet"},null)])]),daiquiri.core.create_element("div",{'tabIndex':(0),'onKeyPress':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return click_handler_fn();
} else {
return null;
}
}),'onClick':click_handler_fn,'onDragEnter':(function (){
return (set_hover_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hover_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hover_BANG_.call(null,true));
}),'onDragOver':(function (p1__114793_SHARP_){
return frontend.util.stop(p1__114793_SHARP_);
}),'onDrop':drop_handler_fn,'onDragLeave':(function (){
return (set_hover_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hover_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hover_BANG_.call(null,false));
}),'className':"flex flex-1"},[daiquiri.core.create_element("span",{'className':"opacity-70"},["Click here to edit..."])])])]);
}),null,"frontend.components.page/dummy-block");
frontend.components.page.add_button = rum.core.lazy_build(rum.core.build_defc,(function (args){
return daiquiri.core.create_element("div",{'onClick':(function (){
return frontend.handler.editor.api_insert_new_block_BANG_("",args);
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
frontend.handler.editor.api_insert_new_block_BANG_("",args);
} else {
}

return frontend.util.stop(e);
}),'tabIndex':(0),'className':"flex-1 flex-col rounded-sm add-button-link-wrap"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'style':{'height':(20),'width':(20),'marginLeft':(2)},'className':"block"},[(function (){var attrs114808 = frontend.ui.icon("circle-plus");
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs114808))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-button-link","block"], null)], null),attrs114808], 0))):{'className':"add-button-link block"}),((cljs.core.map_QMARK_(attrs114808))?null:[daiquiri.interpreter.interpret(attrs114808)]));
})()])])]);
}),null,"frontend.components.page/add-button");
frontend.components.page.page_blocks_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,page_e,p__114809){
var map__114810 = p__114809;
var map__114810__$1 = cljs.core.__destructure_map(map__114810);
var config = map__114810__$1;
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114810__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var whiteboard_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114810__$1,new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788));
if(cljs.core.truth_(page_e)){
var page_name = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_e);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_e));
}
})();
var block_id = cljs.core.parse_uuid(page_name);
var block_QMARK_ = cljs.core.boolean$(block_id);
var page_blocks = frontend.components.page.get_blocks(repo,page_name,block_id);
if(cljs.core.empty_QMARK_(page_blocks)){
return frontend.components.page.dummy_block(page_name);
} else {
var document_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
var block_entity = (function (){var G__114811 = (cljs.core.truth_(block_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114811) : frontend.db.entity.call(null,G__114811));
})();
var hiccup_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),((block_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id):page_name),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_entity),new cljs.core.Keyword(null,"block?","block?",1102479923),block_QMARK_,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword("document","mode?","document/mode?",-994203479),document_mode_QMARK_], null),config], 0));
var hiccup_config__$1 = frontend.handler.common.config_with_document_mode(hiccup_config);
var hiccup = frontend.components.block.__GT_hiccup(page_blocks,hiccup_config__$1,cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",null,[frontend.components.page.page_blocks_inner(page_name,page_blocks,hiccup,sidebar_QMARK_,whiteboard_QMARK_,block_id),((frontend.config.publishing_QMARK_)?null:(function (){var args = (cljs.core.truth_(block_id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_id], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
return frontend.components.page.add_button(args);
})())]);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var page_e_115048 = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var page_name_115049 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_e_115048);
if(cljs.core.truth_((function (){var and__5041__auto__ = (frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name_115049) : frontend.db.journal_page_QMARK_.call(null,page_name_115049));
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.date.journal_title__GT_int(page_name_115049) >= frontend.date.journal_title__GT_int(frontend.date.today()));
} else {
return and__5041__auto__;
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),page_name_115049], null));
} else {
}

return state;
})], null)], null),"frontend.components.page/page-blocks-cp");
frontend.components.page.contents_page = (function frontend$components$page$contents_page(page){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return frontend.components.page.page_blocks_cp(repo,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true], null));
} else {
return null;
}
});
frontend.components.page.today_queries = rum.core.lazy_build(rum.core.build_defc,(function (repo,today_QMARK_,sidebar_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = today_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(sidebar_QMARK_);
} else {
return and__5041__auto__;
}
})())){
var queries = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.seq(queries)){
return daiquiri.core.create_element("div",{'id':"today-queries",'className':"mt-10"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$page$iter__114812(s__114813){
return (new cljs.core.LazySeq(null,(function (){
var s__114813__$1 = s__114813;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114813__$1);
if(temp__5804__auto__){
var s__114813__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114813__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114813__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114815 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114814 = (0);
while(true){
if((i__114814 < size__5519__auto__)){
var query = cljs.core._nth(c__5518__auto__,i__114814);
cljs.core.chunk_append(b__114815,rum.core.with_key(frontend.ui.catch_error(frontend.ui.component_error("Failed default query:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0))], null)),frontend.components.query.custom_query(frontend.components.block.wrap_query_components(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-10"], null),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"page","page",849072397),frontend.components.page.page], null)),query)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"-custom-query-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query))].join('')));

var G__115050 = (i__114814 + (1));
i__114814 = G__115050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114815),frontend$components$page$iter__114812(cljs.core.chunk_rest(s__114813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114815),null);
}
} else {
var query = cljs.core.first(s__114813__$2);
return cljs.core.cons(rum.core.with_key(frontend.ui.catch_error(frontend.ui.component_error("Failed default query:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0))], null)),frontend.components.query.custom_query(frontend.components.block.wrap_query_components(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-10"], null),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"page","page",849072397),frontend.components.page.page], null)),query)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"-custom-query-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query))].join('')),frontend$components$page$iter__114812(cljs.core.rest(s__114813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(queries);
})())]);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/today-queries");
frontend.components.page.tagged_pages = (function frontend$components$page$tagged_pages(repo,tag){
var pages = (frontend.db.get_tag_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_tag_pages.cljs$core$IFn$_invoke$arity$2(repo,tag) : frontend.db.get_tag_pages.call(null,repo,tag));
if(cljs.core.seq(pages)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.references.page-tags.mt-6.flex-1.flex-row","div.references.page-tags.mt-6.flex-1.flex-row",126651120),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-50","h2.font-bold.opacity-50",1276193375),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Pages tagged with \"%s\"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-2","ul.mt-2",-237871742),(function (){var iter__5520__auto__ = (function frontend$components$page$tagged_pages_$_iter__114816(s__114817){
return (new cljs.core.LazySeq(null,(function (){
var s__114817__$1 = s__114817;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114817__$1);
if(temp__5804__auto__){
var s__114817__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114817__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114817__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114819 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114818 = (0);
while(true){
if((i__114818 < size__5519__auto__)){
var vec__114820 = cljs.core._nth(c__5518__auto__,i__114818);
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114820,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114820,(1),null);
cljs.core.chunk_append(b__114819,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["tagged-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),original_name], null))], null));

var G__115051 = (i__114818 + (1));
i__114818 = G__115051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114819),frontend$components$page$tagged_pages_$_iter__114816(cljs.core.chunk_rest(s__114817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114819),null);
}
} else {
var vec__114823 = cljs.core.first(s__114817__$2);
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114823,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114823,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["tagged-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),original_name], null))], null),frontend$components$page$tagged_pages_$_iter__114816(cljs.core.rest(s__114817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pages));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),false], null))], null)], null);
} else {
return null;
}
});
frontend.components.page.page_title_editor = rum.core.lazy_build(rum.core.build_defc,(function (p__114826){
var map__114827 = p__114826;
var map__114827__$1 = cljs.core.__destructure_map(map__114827);
var _STAR_input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"*input-value","*input-value",1906486090));
var _STAR_title_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"*title-value","*title-value",1930859070));
var _STAR_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"*edit?","*edit?",1879943992));
var untitled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"untitled?","untitled?",1662295877));
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var old_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"old-name","old-name",1289683869));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"title","title",636505583));
var whiteboard_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114827__$1,new cljs.core.Keyword(null,"whiteboard-page?","whiteboard-page?",1626270426));
var input_ref = rum.core.create_ref();
var collide_QMARK_ = (function (){
var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)),(function (){var G__114828 = cljs.core.deref(_STAR_title_value);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__114828) : frontend.util.page_name_sanity_lc.call(null,G__114828));
})());
if(and__5041__auto__){
var and__5041__auto____$1 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.page_exists_QMARK_.call(null,page_name));
if(cljs.core.truth_(and__5041__auto____$1)){
var G__114829 = cljs.core.deref(_STAR_title_value);
return (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(G__114829) : frontend.db.page_exists_QMARK_.call(null,G__114829));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
var rollback_fn = (function (){
var old_name__$1 = (cljs.core.truth_(untitled_QMARK_)?"":old_name);
cljs.core.reset_BANG_(_STAR_title_value,old_name__$1);

frontend.components.page.goog$module$goog$object.set(rum.core.deref(input_ref),"value",old_name__$1);

cljs.core.reset_BANG_(_STAR_edit_QMARK_,true);

return rum.core.deref(input_ref).focus();
});
var confirm_fn = (function (){
var new_page_name = clojure.string.trim(cljs.core.deref(_STAR_title_value));
return frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(collide_QMARK_())?["Page \u201C",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_title_value)),"\u201D already exists, merge to it?"].join(''):["Do you really want to change the page name to \u201C",new_page_name,"\u201D?"].join('')),new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_e,p__114830){
var map__114831 = p__114830;
var map__114831__$1 = cljs.core.__destructure_map(map__114831);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114831__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})(),cljs.core.deref(_STAR_title_value));

return cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);
}),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),rollback_fn], null));
});
var blur_fn = (function (e){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(cljs.core.deref(_STAR_title_value))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_title_value,logseq.graph_parser.util.unquote_string);

frontend.components.page.goog$module$goog$object.set(rum.core.deref(input_ref),"value",cljs.core.deref(_STAR_title_value));
} else {
}

if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_name,cljs.core.deref(_STAR_title_value));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = whiteboard_page_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(cljs.core.deref(_STAR_title_value));
} else {
return and__5041__auto__;
}
}
})())){
cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);
} else {
if(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_title_value))){
if(cljs.core.truth_(untitled_QMARK_)){
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","illegal-page-name","page/illegal-page-name",249938697)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}

rollback_fn();
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = collide_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = whiteboard_page_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.whiteboard_page_QMARK_(cljs.core.deref(_STAR_title_value));
}
} else {
return and__5041__auto__;
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","page-already-exists","page/page-already-exists",953137327),cljs.core.deref(_STAR_title_value)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

rollback_fn();
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.date.valid_journal_title_QMARK_(cljs.core.deref(_STAR_title_value));
if(and__5041__auto__){
return whiteboard_page_QMARK_;
} else {
return and__5041__auto__;
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","whiteboard-to-journal-error","page/whiteboard-to-journal-error",-639341379)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

rollback_fn();
} else {
if(cljs.core.truth_(untitled_QMARK_)){
frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})(),cljs.core.deref(_STAR_title_value));
} else {
frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(confirm_fn());

}
}
}
}
}

return frontend.util.stop(e);
});
return daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","inset-0","edit-input-wrapper","z-10",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),cljs.core.deref(_STAR_edit_QMARK_)], null)], null))], null))},[daiquiri.core.create_element("input",{'placeholder':(cljs.core.truth_(untitled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0)):null),'ref':input_ref,'autoFocus':true,'autoComplete':(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off"),'value':rum.core.react(_STAR_input_value),'type':"text",'onBlur':blur_fn,'className':"edit-input",'style':{'outline':"none",'width':"100%",'fontWeight':"inherit"},'onKeyUp':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
cljs.core.reset_BANG_(_STAR_title_value,old_name);

return cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);
} else {
return null;
}
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.page.goog$module$goog$object.get(e,"key"),"Enter")){
return blur_fn(e);
} else {
return null;
}
}),'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
cljs.core.reset_BANG_(_STAR_title_value,clojure.string.trim(value));

return cljs.core.reset_BANG_(_STAR_input_value,value);
})),'onFocus':(function (){
if(cljs.core.truth_(untitled_QMARK_)){
return cljs.core.reset_BANG_(_STAR_title_value,"");
} else {
return null;
}
})},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/page-title-editor");
frontend.components.page.page_title = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name,icon,title,_format,fmt_journal_QMARK_){
if(cljs.core.truth_(title)){
var page = (cljs.core.truth_(page_name)?(function (){var G__114832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114832) : frontend.db.entity.call(null,G__114832));
})():null);
var _STAR_title_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","title-value","frontend.components.page/title-value",2110227395));
var _STAR_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","edit?","frontend.components.page/edit?",258127371));
var _STAR_input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","input-value","frontend.components.page/input-value",-1426574410));
var repo = frontend.state.get_current_repo();
var hls_page_QMARK_ = frontend.extensions.pdf.utils.hls_file_QMARK_(title);
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_name);
var untitled_QMARK_ = (function (){var and__5041__auto__ = whiteboard_page_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.parse_uuid(page_name);
} else {
return and__5041__auto__;
}
})();
var title__$1 = (cljs.core.truth_(hls_page_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref","a.asset-ref",-1346816545),frontend.extensions.pdf.utils.fix_local_asset_pagename(title)], null):(cljs.core.truth_(fmt_journal_QMARK_)?frontend.date.journal_title__GT_custom_format(title):title));
var old_name = (function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})();
return daiquiri.core.create_element("h1",{'onMouseDown':(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
} else {
return null;
}
}),'onClick':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target.nodeName,"INPUT")){
return null;
} else {
e.preventDefault();

if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5804__auto__ = (function (){var G__114833 = repo;
var G__114834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__114835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__114833,G__114834,G__114835) : frontend.db.pull.call(null,G__114833,G__114834,G__114835));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page__$1 = temp__5804__auto__;
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
} else {
if(((cljs.core.not(hls_page_QMARK_)) && (((cljs.core.not(fmt_journal_QMARK_)) && ((!(frontend.config.publishing_QMARK_))))))){
cljs.core.reset_BANG_(_STAR_input_value,(cljs.core.truth_(untitled_QMARK_)?"":old_name));

return cljs.core.reset_BANG_(_STAR_edit_QMARK_,true);
} else {
return null;
}
}
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-title","flex","cursor-pointer","gap-1","w-full",(cljs.core.truth_(whiteboard_page_QMARK_)?null:"title")], null))},[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,""))?(function (){var attrs114836 = icon;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114836))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-icon"], null)], null),attrs114836], 0))):{'className':"page-icon"}),((cljs.core.map_QMARK_(attrs114836))?null:[daiquiri.interpreter.interpret(attrs114836)]));
})():null),(function (){var attrs114837 = (cljs.core.truth_(cljs.core.deref(_STAR_edit_QMARK_))?frontend.components.page.page_title_editor(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*title-value","*title-value",1930859070),_STAR_title_value,new cljs.core.Keyword(null,"*edit?","*edit?",1879943992),_STAR_edit_QMARK_,new cljs.core.Keyword(null,"*input-value","*input-value",1906486090),_STAR_input_value,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"old-name","old-name",1289683869),old_name,new cljs.core.Keyword(null,"untitled?","untitled?",1662295877),untitled_QMARK_,new cljs.core.Keyword(null,"whiteboard-page?","whiteboard-page?",1626270426),whiteboard_page_QMARK_], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114837))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-title-sizer-wrapper","relative"], null)], null),attrs114837], 0))):{'className':"page-title-sizer-wrapper relative"}),((cljs.core.map_QMARK_(attrs114837))?[daiquiri.core.create_element("span",{'data-value':cljs.core.deref(_STAR_input_value),'data-ref':page_name,'style':{'opacity':(cljs.core.truth_(cljs.core.deref(_STAR_edit_QMARK_))?(0):null)},'className':"title block"},[(function (){var nested_QMARK_ = ((clojure.string.includes_QMARK_(title__$1,logseq.graph_parser.util.page_ref.left_brackets)) && (clojure.string.includes_QMARK_(title__$1,logseq.graph_parser.util.page_ref.right_brackets)));
if(cljs.core.truth_(cljs.core.deref(_STAR_edit_QMARK_))){
return daiquiri.core.create_element("span",{'style':{'whiteSpace':"pre"}},[daiquiri.interpreter.interpret(rum.core.react(_STAR_input_value))]);
} else {
if(cljs.core.truth_(untitled_QMARK_)){
var attrs114838 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114838))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-50"], null)], null),attrs114838], 0))):{'className':"opacity-50"}),((cljs.core.map_QMARK_(attrs114838))?null:[daiquiri.interpreter.interpret(attrs114838)]));
} else {
if(nested_QMARK_){
return daiquiri.interpreter.interpret(frontend.components.block.map_inline(cljs.core.PersistentArrayMap.EMPTY,logseq.graph_parser.mldoc.inline__GT_edn(title__$1,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page)))));
} else {
return daiquiri.interpreter.interpret(title__$1);

}
}
}
})()])]:[daiquiri.interpreter.interpret(attrs114837),daiquiri.core.create_element("span",{'data-value':cljs.core.deref(_STAR_input_value),'data-ref':page_name,'style':{'opacity':(cljs.core.truth_(cljs.core.deref(_STAR_edit_QMARK_))?(0):null)},'className':"title block"},[(function (){var nested_QMARK_ = ((clojure.string.includes_QMARK_(title__$1,logseq.graph_parser.util.page_ref.left_brackets)) && (clojure.string.includes_QMARK_(title__$1,logseq.graph_parser.util.page_ref.right_brackets)));
if(cljs.core.truth_(cljs.core.deref(_STAR_edit_QMARK_))){
return daiquiri.core.create_element("span",{'style':{'whiteSpace':"pre"}},[daiquiri.interpreter.interpret(rum.core.react(_STAR_input_value))]);
} else {
if(cljs.core.truth_(untitled_QMARK_)){
var attrs114839 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114839))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-50"], null)], null),attrs114839], 0))):{'className':"opacity-50"}),((cljs.core.map_QMARK_(attrs114839))?null:[daiquiri.interpreter.interpret(attrs114839)]));
} else {
if(nested_QMARK_){
return daiquiri.interpreter.interpret(frontend.components.block.map_inline(cljs.core.PersistentArrayMap.EMPTY,logseq.graph_parser.mldoc.inline__GT_edn(title__$1,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page)))));
} else {
return daiquiri.interpreter.interpret(title__$1);

}
}
}
})()])]));
})()]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","edit?","frontend.components.page/edit?",258127371)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.page","input-value","frontend.components.page/input-value",-1426574410)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.page","title-value","frontend.components.page/title-value",2110227395),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2))));
})], null)], null),"frontend.components.page/page-title");
frontend.components.page.page_mouse_over = (function frontend$components$page$page_mouse_over(e,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_){
frontend.util.stop(e);

cljs.core.reset_BANG_(_STAR_control_show_QMARK_,true);

var all_collapsed_QMARK_ = cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))));
return cljs.core.reset_BANG_(_STAR_all_collapsed_QMARK_,all_collapsed_QMARK_);
});
frontend.components.page.page_mouse_leave = (function frontend$components$page$page_mouse_leave(e,_STAR_control_show_QMARK_){
frontend.util.stop(e);

return cljs.core.reset_BANG_(_STAR_control_show_QMARK_,false);
});
frontend.components.page.page_blocks_collapse_control = rum.core.lazy_build(rum.core.build_defcs,(function (state,title,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_){
return daiquiri.core.create_element("a",{'id':["control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''),'onClick':(function (event){
frontend.util.stop(event);

if(cljs.core.truth_(cljs.core.deref(_STAR_all_collapsed_QMARK_))){
frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_all_collapsed_QMARK_,cljs.core.not);
}),'className':"page-blocks-collapse-control"},[daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-6",(cljs.core.truth_(cljs.core.deref(_STAR_control_show_QMARK_))?"control-show cursor-pointer":"control-hide")], null))},[frontend.ui.rotating_arrow(cljs.core.deref(_STAR_all_collapsed_QMARK_))])]);
}),null,"frontend.components.page/page-blocks-collapse-control");
frontend.components.page.page = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__114840){
var map__114841 = p__114840;
var map__114841__$1 = cljs.core.__destructure_map(map__114841);
var option = map__114841__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114841__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114841__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var or__5043__auto__ = page_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.components.page.get_block_uuid_by_block_route_name(state);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.components.page.get_page_name(state);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return frontend.state.get_current_page();
}
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var path_page_name = temp__5804__auto__;
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_repo;
}
})();
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(path_page_name) : frontend.util.page_name_sanity_lc.call(null,path_page_name));
var block_id = cljs.core.parse_uuid(page_name__$1);
var block_QMARK_ = cljs.core.boolean$(block_id);
var format = (function (){var page = (cljs.core.truth_(block_id)?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__114858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114858) : frontend.db.entity.call(null,G__114858));
})())):page_name__$1);
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page));
})();
var journal_QMARK_ = (frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.journal_page_QMARK_.call(null,page_name__$1));
var fmt_journal_QMARK_ = cljs.core.boolean$(frontend.date.journal_title__GT_int(page_name__$1));
var sidebar_QMARK_ = new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(option);
var whiteboard_QMARK_ = new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788).cljs$core$IFn$_invoke$arity$1(option);
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_name__$1);
var route_page_name = path_page_name;
var page = ((block_QMARK_)?(function (){var G__114859 = repo__$1;
var G__114860 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__114861 = repo__$1;
var G__114862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__114861,G__114862) : frontend.db.entity.call(null,G__114861,G__114862));
})()));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__114859,G__114860) : frontend.db.entity.call(null,G__114859,G__114860));
})():(function (){
if(cljs.core.truth_((function (){var G__114863 = repo__$1;
var G__114864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__114863,G__114864) : frontend.db.entity.call(null,G__114863,G__114864));
})())){
} else {
var m_115052 = frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(path_page_name,true);
var G__114865_115053 = repo__$1;
var G__114866_115054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_115052], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__114865_115053,G__114866_115054) : frontend.db.transact_BANG_.call(null,G__114865_115053,G__114866_115054));
}

var G__114867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__114867) : frontend.db.pull.call(null,G__114867));
})()
);
var map__114857 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page);
var map__114857__$1 = cljs.core.__destructure_map(map__114857);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114857__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var page_name__$2 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
var page_original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var title = (function (){var or__5043__auto__ = page_original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name__$2;
}
})();
var icon__$1 = (function (){var or__5043__auto__ = icon;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var today_QMARK_ = (function (){var and__5041__auto__ = journal_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$2,(function (){var G__114868 = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__114868) : frontend.util.page_name_sanity_lc.call(null,G__114868));
})());
} else {
return and__5041__auto__;
}
})();
var _STAR_control_show_QMARK_ = new cljs.core.Keyword("frontend.components.page","control-show?","frontend.components.page/control-show?",-964317787).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_all_collapsed_QMARK_ = new cljs.core.Keyword("frontend.components.page","all-collapsed?","frontend.components.page/all-collapsed?",-1574936479).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_current_block_page = new cljs.core.Keyword("frontend.components.page","current-page","frontend.components.page/current-page",1280998925).cljs$core$IFn$_invoke$arity$1(state);
var block_or_whiteboard_QMARK_ = (function (){var or__5043__auto__ = block_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return whiteboard_QMARK_;
}
})();
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.page.relative","div.flex-1.page.relative",2041847252),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page)))?(function (){var page_names = frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-page-tags","data-page-tags",347588105),frontend.util.text.build_data_value(page_names)], null);
})():cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),path_page_name,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-journals","is-journals",-1555155588),(function (){var or__5043__auto__ = journal_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return fmt_journal_QMARK_;
}
})()], null)], null))], null)], 0)),(cljs.core.truth_((function (){var and__5041__auto__ = whiteboard_page_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(sidebar_QMARK_);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var fexpr__114869 = frontend.state.get_component(new cljs.core.Keyword("whiteboard","tldraw-preview","whiteboard/tldraw-preview",663400157));
return (fexpr__114869.cljs$core$IFn$_invoke$arity$1 ? fexpr__114869.cljs$core$IFn$_invoke$arity$1(page_name__$2) : fexpr__114869.call(null,page_name__$2));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),((((cljs.core.not(sidebar_QMARK_)) && ((!(block_QMARK_)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-between","div.flex.flex-row.space-between",1433228948),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.mobile_QMARK_();
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.pr-2","div.flex.flex-row.pr-2",1648161181),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-15)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
return frontend.components.page.page_mouse_over(e,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (e){
return frontend.components.page.page_mouse_leave(e,_STAR_control_show_QMARK_);
})], null),frontend.components.page.page_blocks_collapse_control(title,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_)], null):null),(cljs.core.truth_(whiteboard_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-page-title.flex-1.flex-row.w-full","div.ls-page-title.flex-1.flex-row.w-full",-465341923),frontend.components.page.page_title(page_name__$2,icon__$1,title,format,fmt_journal_QMARK_)], null)),(((!(frontend.config.publishing_QMARK_)))?(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),frontend.components.plugins.hook_ui_slot(new cljs.core.Keyword(null,"page-head-actions-slotted","page-head-actions-slotted",1227457137),null),frontend.components.plugins.hook_ui_items(new cljs.core.Keyword(null,"pagebar","pagebar",-1992158385))], null):null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((((block_QMARK_) && (((cljs.core.not(sidebar_QMARK_)) && (cljs.core.not(whiteboard_QMARK_))))))?(function (){var config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"block-parent",new cljs.core.Keyword(null,"block?","block?",1102479923),true], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),frontend.components.block.breadcrumb(config,repo__$1,block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level-limit","level-limit",-1660435238),(3)], null))], null);
})():null),(function (){var page__$1 = ((block_QMARK_)?(function (){var G__114870 = repo__$1;
var G__114871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__114870,G__114871) : frontend.db.entity.call(null,G__114870,G__114871));
})():page);
var _ = (function (){var and__5041__auto__ = block_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = page__$1;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.reset_BANG_(_STAR_current_block_page,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(page__$1)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var ___$1 = ((((block_QMARK_) && (cljs.core.not(page__$1))))?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_current_block_page)):null);
return frontend.components.page.page_blocks_cp(repo__$1,page__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),whiteboard_QMARK_], null));
})()], null)], null)),(cljs.core.truth_(today_QMARK_)?frontend.components.page.today_queries(repo__$1,today_QMARK_,sidebar_QMARK_):null),(cljs.core.truth_(today_QMARK_)?frontend.components.scheduled_deadlines.scheduled_and_deadlines(page_name__$2):null),((block_QMARK_)?null:frontend.components.page.tagged_pages(repo__$1,page_name__$2)),(cljs.core.truth_(block_or_whiteboard_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-references"], null),rum.core.with_key(frontend.components.reference.references(route_page_name),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route_page_name),"-refs"].join(''))], null)),(cljs.core.truth_(block_or_whiteboard_QMARK_)?null:((cljs.core.not(journal_QMARK_))?frontend.components.hierarchy.structures(route_page_name):null)),(cljs.core.truth_(block_or_whiteboard_QMARK_)?null:(cljs.core.truth_(sidebar_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-unlinked-references"], null),frontend.components.reference.unlinked_references(route_page_name)], null)))], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","all-collapsed?","frontend.components.page/all-collapsed?",-1574936479)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","control-show?","frontend.components.page/control-show?",-964317787)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","current-page","frontend.components.page/current-page",1280998925))], null),"frontend.components.page/page");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page.layout !== 'undefined')){
} else {
frontend.components.page.layout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}
frontend.components.page.graph_filter_section = rum.core.lazy_build(rum.core.build_defcs,(function (state,title,content,p__114872){
var map__114873 = p__114872;
var map__114873__$1 = cljs.core.__destructure_map(map__114873);
var search_filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114873__$1,new cljs.core.Keyword(null,"search-filters","search-filters",-2121899355));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","open?","frontend.components.page/open?",1985200624));
if(((cljs.core.seq(search_filters)) && (cljs.core.not(cljs.core.deref(open_QMARK_))))){
cljs.core.reset_BANG_(open_QMARK_,true);
} else {
}

return daiquiri.core.create_element("li",{'className':"relative"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
}),'className':"w-full px-4 py-2 text-left focus:outline-none"},[(function (){var attrs114874 = title;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114874))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-between"], null)], null),attrs114874], 0))):{'className':"flex items-center justify-between"}),((cljs.core.map_QMARK_(attrs114874))?[(cljs.core.truth_(cljs.core.deref(open_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_right())]:[daiquiri.interpreter.interpret(attrs114874),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_right())]));
})()]),daiquiri.interpreter.interpret((content.cljs$core$IFn$_invoke$arity$1 ? content.cljs$core$IFn$_invoke$arity$1(open_QMARK_) : content.call(null,open_QMARK_)))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","open?","frontend.components.page/open?",1985200624))], null),"frontend.components.page/graph-filter-section");
frontend.components.page.filter_expand_area = rum.core.lazy_build(rum.core.build_defc,(function (open_QMARK_,content){
return daiquiri.core.create_element("div",{'style':{'maxHeight':(cljs.core.truth_(cljs.core.deref(open_QMARK_))?(400):(0))},'className':"relative overflow-hidden transition-all max-h-0 duration-700"},[daiquiri.interpreter.interpret(content)]);
}),null,"frontend.components.page/filter-expand-area");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_n_hops !== 'undefined')){
} else {
frontend.components.page._STAR_n_hops = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_focus_nodes !== 'undefined')){
} else {
frontend.components.page._STAR_focus_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_graph_reset_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_graph_reset_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_graph_forcereset_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_graph_forcereset_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_journal_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_journal_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_orphan_pages_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_orphan_pages_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_builtin_pages_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_builtin_pages_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_excluded_pages_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_excluded_pages_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_show_journals_in_page_graph_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_show_journals_in_page_graph_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_link_dist !== 'undefined')){
} else {
frontend.components.page._STAR_link_dist = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((70));
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_charge_strength !== 'undefined')){
} else {
frontend.components.page._STAR_charge_strength = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-600));
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_charge_range !== 'undefined')){
} else {
frontend.components.page._STAR_charge_range = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((600));
}
frontend.components.page.simulation_switch = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _STAR_simulation_paused_QMARK_ = frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_;
return daiquiri.core.create_element("div",{'className':"flex flex-col mb-2"},[daiquiri.core.create_element("p",{'title':"Pause simulation"},["Pause simulation"]),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(rum.core.react(_STAR_simulation_paused_QMARK_),(function (){
var paused_QMARK_ = cljs.core.deref(_STAR_simulation_paused_QMARK_);
if(cljs.core.truth_(paused_QMARK_)){
return frontend.extensions.graph.pixi.resume_simulation_BANG_();
} else {
return frontend.extensions.graph.pixi.stop_simulation_BANG_();
}
}),true))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/simulation-switch");
frontend.components.page.graph_filters = rum.core.lazy_build(rum.core.build_defc,(function (graph,settings,forcesettings,n_hops){
var map__114881 = settings;
var map__114881__$1 = cljs.core.__destructure_map(map__114881);
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114881__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var orphan_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__114881__$1,new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206),true);
var builtin_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114881__$1,new cljs.core.Keyword(null,"builtin-pages?","builtin-pages?",1299611390));
var excluded_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114881__$1,new cljs.core.Keyword(null,"excluded-pages?","excluded-pages?",1527958391));
var map__114882 = forcesettings;
var map__114882__$1 = cljs.core.__destructure_map(map__114882);
var link_dist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114882__$1,new cljs.core.Keyword(null,"link-dist","link-dist",48179915));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114882__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var charge_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114882__$1,new cljs.core.Keyword(null,"charge-range","charge-range",509183775));
var journal_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_journal_QMARK_);
var orphan_pages_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_orphan_pages_QMARK_);
var builtin_pages_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_builtin_pages_QMARK_);
var excluded_pages_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_excluded_pages_QMARK_);
var link_dist_SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_link_dist);
var charge_strength_SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_charge_strength);
var charge_range_SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_charge_range);
var journal_QMARK___$1 = (((journal_QMARK__SINGLEQUOTE_ == null))?journal_QMARK_:journal_QMARK__SINGLEQUOTE_);
var orphan_pages_QMARK___$1 = (((orphan_pages_QMARK__SINGLEQUOTE_ == null))?orphan_pages_QMARK_:orphan_pages_QMARK__SINGLEQUOTE_);
var builtin_pages_QMARK___$1 = (((builtin_pages_QMARK__SINGLEQUOTE_ == null))?builtin_pages_QMARK_:builtin_pages_QMARK__SINGLEQUOTE_);
var excluded_pages_QMARK___$1 = (((excluded_pages_QMARK__SINGLEQUOTE_ == null))?excluded_pages_QMARK_:excluded_pages_QMARK__SINGLEQUOTE_);
var link_dist__$1 = (((link_dist_SINGLEQUOTE_ == null))?link_dist:link_dist_SINGLEQUOTE_);
var charge_strength__$1 = (((charge_strength_SINGLEQUOTE_ == null))?charge_strength:charge_strength_SINGLEQUOTE_);
var charge_range__$1 = (((charge_range_SINGLEQUOTE_ == null))?charge_range:charge_range_SINGLEQUOTE_);
var set_setting_BANG_ = (function (key,value){
var new_settings = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,key,value);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("graph","settings","graph/settings",1067459097),new_settings);
});
var set_forcesetting_BANG_ = (function (key,value){
var new_forcesettings = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(forcesettings,key,value);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("graph","forcesettings","graph/forcesettings",-17461404),new_forcesettings);
});
var search_graph_filters = frontend.state.sub(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152));
var focus_nodes = rum.core.react(frontend.components.page._STAR_focus_nodes);
return daiquiri.core.create_element("div",{'className':"absolute top-4 right-4 graph-filters"},[daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("div",{'className':"shadow-xl rounded-sm"},[daiquiri.core.create_element("ul",null,[frontend.components.page.graph_filter_section(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),"Nodes"], null),(function (open_QMARK_){
return frontend.components.page.filter_expand_area(open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.px-4","p.text-sm.opacity-70.px-4",-1579335593),(function (){var c1 = cljs.core.count(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph));
var s1 = (((c1 > (1)))?"s":"");
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%d page%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,s1], 0));
})()], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","enable-journals","settings-page/enable-journals",-1792981415)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(journal_QMARK___$1,(function (){
var value = cljs.core.not(journal_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_journal_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"journal?","journal?",-897756522),value);
}),true)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Orphan pages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(orphan_pages_QMARK___$1,(function (){
var value = cljs.core.not(orphan_pages_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_orphan_pages_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206),value);
}),true)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Built-in pages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(builtin_pages_QMARK___$1,(function (){
var value = cljs.core.not(builtin_pages_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_builtin_pages_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"builtin-pages?","builtin-pages?",1299611390),value);
}),true)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Excluded pages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(excluded_pages_QMARK___$1,(function (){
var value = cljs.core.not(excluded_pages_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_excluded_pages_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"excluded-pages?","excluded-pages?",1527958391),value);
}),true)], null)], null),((cljs.core.seq(focus_nodes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.mb-2","div.flex.flex-col.mb-2",760540690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"N hops from selected nodes"], null),"N hops from selected nodes"], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-3","div.pr-3",1377924057),n_hops], null)], null),frontend.ui.slider((function (){var or__5043__auto__ = n_hops;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (10);
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__114877_SHARP_){
return cljs.core.reset_BANG_(frontend.components.page._STAR_n_hops,(p1__114877_SHARP_ | (0)));
})], null)))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.page._STAR_graph_reset_QMARK_,cljs.core.not);

cljs.core.reset_BANG_(frontend.components.page._STAR_focus_nodes,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(frontend.components.page._STAR_n_hops,null);

return frontend.state.clear_search_filters_BANG_();
})], null),"Reset Graph"], null)], null)], null));
}),cljs.core.PersistentArrayMap.EMPTY),frontend.components.page.graph_filter_section(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),"Search"], null),(function (open_QMARK_){
return frontend.components.page.filter_expand_area(open_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),((cljs.core.seq(search_graph_filters))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5520__auto__ = (function frontend$components$page$iter__114887(s__114888){
return (new cljs.core.LazySeq(null,(function (){
var s__114888__$1 = s__114888;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114888__$1);
if(temp__5804__auto__){
var s__114888__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114888__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114888__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114890 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114889 = (0);
while(true){
if((i__114889 < size__5519__auto__)){
var q = cljs.core._nth(c__5518__auto__,i__114889);
cljs.core.chunk_append(b__114890,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.items-center.mb-2","div.flex.flex-row.justify-between.items-center.mb-2",14359473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),q], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.search-filter-close.opacity-70.opacity-100","a.search-filter-close.opacity-70.opacity-100",820760152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__114889,q,c__5518__auto__,size__5519__auto__,b__114890,s__114888__$2,temp__5804__auto__,map__114881,map__114881__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,excluded_pages_QMARK_,map__114882,map__114882__$1,link_dist,charge_strength,charge_range,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,excluded_pages_QMARK__SINGLEQUOTE_,link_dist_SINGLEQUOTE_,charge_strength_SINGLEQUOTE_,charge_range_SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,excluded_pages_QMARK___$1,link_dist__$1,charge_strength__$1,charge_range__$1,set_setting_BANG_,set_forcesetting_BANG_,search_graph_filters,focus_nodes){
return (function (){
return frontend.state.remove_search_filter_BANG_(q);
});})(i__114889,q,c__5518__auto__,size__5519__auto__,b__114890,s__114888__$2,temp__5804__auto__,map__114881,map__114881__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,excluded_pages_QMARK_,map__114882,map__114882__$1,link_dist,charge_strength,charge_range,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,excluded_pages_QMARK__SINGLEQUOTE_,link_dist_SINGLEQUOTE_,charge_strength_SINGLEQUOTE_,charge_range_SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,excluded_pages_QMARK___$1,link_dist__$1,charge_strength__$1,charge_range__$1,set_setting_BANG_,set_forcesetting_BANG_,search_graph_filters,focus_nodes))
], null),frontend.components.svg.close], null)], null));

var G__115055 = (i__114889 + (1));
i__114889 = G__115055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114890),frontend$components$page$iter__114887(cljs.core.chunk_rest(s__114888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114890),null);
}
} else {
var q = cljs.core.first(s__114888__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.items-center.mb-2","div.flex.flex-row.justify-between.items-center.mb-2",14359473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),q], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.search-filter-close.opacity-70.opacity-100","a.search-filter-close.opacity-70.opacity-100",820760152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (q,s__114888__$2,temp__5804__auto__,map__114881,map__114881__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,excluded_pages_QMARK_,map__114882,map__114882__$1,link_dist,charge_strength,charge_range,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,excluded_pages_QMARK__SINGLEQUOTE_,link_dist_SINGLEQUOTE_,charge_strength_SINGLEQUOTE_,charge_range_SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,excluded_pages_QMARK___$1,link_dist__$1,charge_strength__$1,charge_range__$1,set_setting_BANG_,set_forcesetting_BANG_,search_graph_filters,focus_nodes){
return (function (){
return frontend.state.remove_search_filter_BANG_(q);
});})(q,s__114888__$2,temp__5804__auto__,map__114881,map__114881__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,excluded_pages_QMARK_,map__114882,map__114882__$1,link_dist,charge_strength,charge_range,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,excluded_pages_QMARK__SINGLEQUOTE_,link_dist_SINGLEQUOTE_,charge_strength_SINGLEQUOTE_,charge_range_SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,excluded_pages_QMARK___$1,link_dist__$1,charge_strength__$1,charge_range__$1,set_setting_BANG_,set_forcesetting_BANG_,search_graph_filters,focus_nodes))
], null),frontend.components.svg.close], null)], null),frontend$components$page$iter__114887(cljs.core.rest(s__114888__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(search_graph_filters);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.clear_search_filters_BANG_], null),"Clear All"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.go_to_search_BANG_(new cljs.core.Keyword(null,"graph","graph",1558099509));
})], null),"Click to search"], null))], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-filters","search-filters",-2121899355),search_graph_filters], null)),frontend.components.page.graph_filter_section(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),"Forces"], null),(function (open_QMARK_){
return frontend.components.page.filter_expand_area(open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.px-4","p.text-sm.opacity-70.px-4",-1579335593),(function (){var c2 = cljs.core.count(new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph));
var s2 = (((c2 > (1)))?"s":"");
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%d link%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c2,s2], 0));
})()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),frontend.components.page.simulation_switch(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.mb-2","div.flex.flex-col.mb-2",760540690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Link Distance"], null),"Link Distance"], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-3","div.pr-3",1377924057),link_dist__$1], null)], null),frontend.ui.slider((link_dist__$1 / (10)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(18),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__114878_SHARP_){
var value = (p1__114878_SHARP_ | (0));
cljs.core.reset_BANG_(frontend.components.page._STAR_link_dist,(value * (10)));

return set_forcesetting_BANG_(new cljs.core.Keyword(null,"link-dist","link-dist",48179915),(value * (10)));
})], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.mb-2","div.flex.flex-col.mb-2",760540690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Charge Strength"], null),"Charge Strength"], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-3","div.pr-3",1377924057),charge_strength__$1], null)], null),frontend.ui.slider((charge_strength__$1 / (100)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(-10),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__114879_SHARP_){
var value = (p1__114879_SHARP_ | (0));
cljs.core.reset_BANG_(frontend.components.page._STAR_charge_strength,(value * (100)));

return set_forcesetting_BANG_(new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),(value * (100)));
})], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.mb-2","div.flex.flex-col.mb-2",760540690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Charge Range"], null),"Charge Range"], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-3","div.pr-3",1377924057),charge_range__$1], null)], null),frontend.ui.slider((charge_range__$1 / (100)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(40),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__114880_SHARP_){
var value = (p1__114880_SHARP_ | (0));
cljs.core.reset_BANG_(frontend.components.page._STAR_charge_range,(value * (100)));

return set_forcesetting_BANG_(new cljs.core.Keyword(null,"charge-range","charge-range",509183775),(value * (100)));
})], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.page._STAR_graph_forcereset_QMARK_,cljs.core.not);

cljs.core.reset_BANG_(frontend.components.page._STAR_link_dist,(70));

cljs.core.reset_BANG_(frontend.components.page._STAR_charge_strength,(-600));

return cljs.core.reset_BANG_(frontend.components.page._STAR_charge_range,(600));
})], null),"Reset Forces"], null)], null)], null));
}),cljs.core.PersistentArrayMap.EMPTY),frontend.components.page.graph_filter_section(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),"Export"], null),(function (open_QMARK_){
return frontend.components.page.filter_expand_area(open_QMARK_,(function (){var temp__5804__auto__ = document.querySelector("#global-graph canvas");
if(cljs.core.truth_(temp__5804__auto__)){
var canvas = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.requestAnimationFrame((function (){
return module$frontend$utils.canvasToImage(canvas,"graph","png");
}));
})], null),"as PNG"], null)], null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-filters","search-filters",-2121899355),search_graph_filters], null))])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/graph-filters");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page.last_node_position !== 'undefined')){
} else {
frontend.components.page.last_node_position = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.page.graph_register_handlers = (function frontend$components$page$graph_register_handlers(graph,focus_nodes,n_hops,dark_QMARK_){
graph.on("nodeClick",(function (event,node){
var x = event.x;
var y = event.y;
var drag_QMARK_ = (!((function (){var vec__114891 = cljs.core.deref(frontend.components.page.last_node_position);
var last_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114891,(0),null);
var last_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114891,(1),null);
var last_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114891,(2),null);
var threshold = (5);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,last_node)) && ((((cljs.core.abs((x - last_x)) <= threshold)) && ((cljs.core.abs((y - last_y)) <= threshold)))));
})()));
return frontend.extensions.graph.on_click_handler(graph,node,event,focus_nodes,n_hops,drag_QMARK_,dark_QMARK_);
}));

return graph.on("nodeMousedown",(function (event,node){
return cljs.core.reset_BANG_(frontend.components.page.last_node_position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,event.x,event.y], null));
}));
});
frontend.components.page.global_graph_inner = rum.core.lazy_build(rum.core.build_defc,(function (graph,settings,forcesettings,theme){
var vec__114894 = rum.core.react(frontend.components.page.layout);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114894,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114894,(1),null);
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark");
var n_hops = rum.core.react(frontend.components.page._STAR_n_hops);
var link_dist = rum.core.react(frontend.components.page._STAR_link_dist);
var charge_strength = rum.core.react(frontend.components.page._STAR_charge_strength);
var charge_range = rum.core.react(frontend.components.page._STAR_charge_range);
var reset_QMARK_ = rum.core.react(frontend.components.page._STAR_graph_reset_QMARK_);
var forcereset_QMARK_ = rum.core.react(frontend.components.page._STAR_graph_forcereset_QMARK_);
var focus_nodes = (cljs.core.truth_(n_hops)?rum.core.react(frontend.components.page._STAR_focus_nodes):null);
var graph__$1 = ((((cljs.core.integer_QMARK_(n_hops)) && (((cljs.core.seq(focus_nodes)) && (cljs.core.not(new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206).cljs$core$IFn$_invoke$arity$1(settings)))))))?frontend.handler.graph.n_hops(graph,focus_nodes,n_hops):graph);
var graph__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(graph__$1,new cljs.core.Keyword(null,"links","links",-654507394),(function (links){
var nodes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph__$1)));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (link){
return ((cljs.core.not((function (){var G__114897 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__114897) : nodes.call(null,G__114897));
})())) && (cljs.core.not((function (){var G__114898 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__114898) : nodes.call(null,G__114898));
})())));
}),links);
}));
return daiquiri.core.create_element("div",{'id':"global-graph",'className':"relative"},[frontend.extensions.graph.graph_2d(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"forcereset?","forcereset?",-326825913),new cljs.core.Keyword(null,"reset?","reset?",-1051875415),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"link-dist","link-dist",48179915),new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094),new cljs.core.Keyword(null,"dark?","dark?",622933231),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"charge-range","charge-range",509183775)],[charge_strength,forcereset_QMARK_,reset_QMARK_,(width - (24)),link_dist,(function (graph__$3){
return frontend.components.page.graph_register_handlers(graph__$3,frontend.components.page._STAR_focus_nodes,frontend.components.page._STAR_n_hops,dark_QMARK_);
}),dark_QMARK_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph__$2),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph__$2),(height - (48)),charge_range])),frontend.components.page.graph_filters(graph__$2,settings,forcesettings,n_hops)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/global-graph-inner");
frontend.components.page.filter_graph_nodes = (function frontend$components$page$filter_graph_nodes(nodes,filters){
if(cljs.core.seq(filters)){
var filter_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__114899_SHARP_){
return cljs.core.re_pattern(["(?i)",frontend.util.regex_escape(p1__114899_SHARP_)].join(''));
}),filters);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.some((function (p1__114900_SHARP_){
return cljs.core.re_find(p1__114900_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
}),filter_patterns);
}),nodes);
} else {
return nodes;
}
});
frontend.components.page.global_graph = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var settings = frontend.state.graph_settings();
var forcesettings = frontend.state.graph_forcesettings();
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var graph = frontend.handler.graph.build_global_graph(theme,settings);
var search_graph_filters = frontend.state.sub(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152));
var graph__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(graph,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (p1__114901_SHARP_){
return frontend.components.page.filter_graph_nodes(p1__114901_SHARP_,search_graph_filters);
}));
return frontend.components.page.global_graph_inner(graph__$1,settings,forcesettings,theme);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.listen(state,window,"resize",(function (_e){
return cljs.core.reset_BANG_(frontend.components.page.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.page._STAR_n_hops,null);

cljs.core.reset_BANG_(frontend.components.page._STAR_focus_nodes,cljs.core.PersistentVector.EMPTY);

frontend.state.set_search_mode_BANG_(new cljs.core.Keyword(null,"global","global",93595047));

return state;
})], null)], null),"frontend.components.page/global-graph");
frontend.components.page.page_graph_inner = rum.core.lazy_build(rum.core.build_defc,(function (_page,graph,dark_QMARK_){
var show_journals_in_page_graph_QMARK_ = rum.core.react(frontend.components.page._STAR_show_journals_in_page_graph_QMARK_);
return daiquiri.core.create_element("div",{'className':"sidebar-item flex-col"},[daiquiri.core.create_element("div",{'className':"flex items-center justify-between mb-0"},[(function (){var attrs114902 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","show-journals","right-side-bar/show-journals",-1717841874)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114902))?daiquiri.interpreter.element_attributes(attrs114902):null),((cljs.core.map_QMARK_(attrs114902))?null:[daiquiri.interpreter.interpret(attrs114902)]));
})(),(function (){var attrs114903 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(show_journals_in_page_graph_QMARK_,(function (){
var value = cljs.core.not(show_journals_in_page_graph_QMARK_);
return cljs.core.reset_BANG_(frontend.components.page._STAR_show_journals_in_page_graph_QMARK_,value);
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114903))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs114903], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs114903))?null:[daiquiri.interpreter.interpret(attrs114903)]));
})()]),frontend.extensions.graph.graph_2d(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"dark?","dark?",622933231),dark_QMARK_,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094),(function (graph__$1){
return frontend.components.page.graph_register_handlers(graph__$1,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),dark_QMARK_);
})], null))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/page-graph-inner");
frontend.components.page.page_graph = rum.core.lazy_build(rum.core.build_defc,(function (){
var page = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
if(and__5041__auto__){
return frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})();
var theme = new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark");
var show_journals_in_page_graph = rum.core.react(frontend.components.page._STAR_show_journals_in_page_graph_QMARK_);
var graph = ((frontend.util.uuid_string_QMARK_(page))?frontend.handler.graph.build_block_graph(cljs.core.uuid(page),theme):frontend.handler.graph.build_page_graph(page,theme,show_journals_in_page_graph));
if(cljs.core.seq(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph))){
return frontend.components.page.page_graph_inner(page,graph,dark_QMARK_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db_mixins.query,rum.core.reactive], null),"frontend.components.page/page-graph");
frontend.components.page.sort_pages_by = (function frontend$components$page$sort_pages_by(by_item,desc_QMARK_,pages){
var comp = (cljs.core.truth_(desc_QMARK_)?cljs.core._GT_:cljs.core._LT_);
var by_item__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(by_item,new cljs.core.Keyword("block","name","block/name",1619760316)))?(function (x){
return clojure.string.lower_case(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(x));
}):by_item);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(by_item__$1,comp,pages);
});
frontend.components.page.checkbox_opt = rum.core.lazy_build(rum.core.build_defc,(function (key,checked,opts){
var _STAR_input = rum.core.create_ref();
var indeterminate_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976).cljs$core$IFn$_invoke$arity$1(opts));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return (rum.core.deref(_STAR_input).indeterminate = indeterminate_QMARK_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [indeterminate_QMARK_], null));

return daiquiri.core.create_element("label",{'htmlFor':key},[(function (){var attrs114904 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(checked),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input,new cljs.core.Keyword(null,"id","id",-1388402092),key], null),opts], 0));
return daiquiri.core.create_element("input",((cljs.core.map_QMARK_(attrs114904))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-checkbox"], null)], null),attrs114904], 0))):{'className':"form-checkbox"}),((cljs.core.map_QMARK_(attrs114904))?null:[daiquiri.interpreter.interpret(attrs114904)]));
})()]);
}),null,"frontend.components.page/checkbox-opt");
frontend.components.page.sortable_title = rum.core.lazy_build(rum.core.build_defc,(function (title,key,by_item,desc_QMARK_){
return daiquiri.core.create_element("th",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(key)], null))},[daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(by_item,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(desc_QMARK_,cljs.core.not);
}),'className':"fade-link"},[daiquiri.core.create_element("span",{'className':"flex items-center"},[(function (){var attrs114905 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114905))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs114905], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs114905))?null:[daiquiri.interpreter.interpret(attrs114905)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs114906 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114906))?daiquiri.interpreter.element_attributes(attrs114906):null),((cljs.core.map_QMARK_(attrs114906))?null:[daiquiri.interpreter.interpret(attrs114906)]));
})():null)])])]);
}),null,"frontend.components.page/sortable-title");
frontend.components.page.batch_delete_dialog = (function frontend$components$page$batch_delete_dialog(pages,orphaned_pages_QMARK_,refresh_fn){
return (function (close_fn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.items-center","div.sm:flex.items-center",1228718030),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10",434929029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-error.text-xl","span.text-error.text-xl",-1341009425),frontend.ui.icon("alert-triangle")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.text-lg.leading-6.font-medium","h3#modal-headline.text-lg.leading-6.font-medium",365314317),(cljs.core.truth_(orphaned_pages_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-orphaned-pages","remove-orphaned-pages",-1101045668)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete-confirmation","page/delete-confirmation",-1967752819)], 0)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-auto.cp__all_pages_table.mt-4","table.table-auto.cp__all_pages_table.mt-4",-950590708),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.opacity-70","tr.opacity-70",-1367042518),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","backlinks","page/backlinks",1645776383)], 0))], null)], null),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","created-at","page/created-at",-84781299)], 0))], null)], null)),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","updated-at","page/updated-at",-1598282641)], 0))], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5520__auto__ = (function frontend$components$page$batch_delete_dialog_$_iter__114907(s__114908){
return (new cljs.core.LazySeq(null,(function (){
var s__114908__$1 = s__114908;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114908__$1);
if(temp__5804__auto__){
var s__114908__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114908__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114908__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114910 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114909 = (0);
while(true){
if((i__114909 < size__5519__auto__)){
var vec__114911 = cljs.core._nth(c__5518__auto__,i__114909);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114911,(0),null);
var map__114914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114911,(1),null);
var map__114914__$1 = cljs.core.__destructure_map(map__114914);
var page = map__114914__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114914__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114914__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114914__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114914__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
cljs.core.chunk_append(b__114910,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.n.w-12","td.n.w-12",-2045477331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1))),"."].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.name","td.name",-643029721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.backlinks","td.backlinks",1215238996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__5043__auto__ = backlinks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
})()], null)], null),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.created-at","td.created-at",694689899),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown")], null)], null)),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.updated-at","td.updated-at",1830087514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown")], null)], null))], null));

var G__115056 = (i__114909 + (1));
i__114909 = G__115056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114910),frontend$components$page$batch_delete_dialog_$_iter__114907(cljs.core.chunk_rest(s__114908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114910),null);
}
} else {
var vec__114915 = cljs.core.first(s__114908__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114915,(0),null);
var map__114918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114915,(1),null);
var map__114918__$1 = cljs.core.__destructure_map(map__114918);
var page = map__114918__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114918__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114918__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114918__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114918__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.n.w-12","td.n.w-12",-2045477331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1))),"."].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.name","td.name",-643029721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.backlinks","td.backlinks",1215238996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__5043__auto__ = backlinks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
})()], null)], null),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.created-at","td.created-at",694689899),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown")], null)], null)),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.updated-at","td.updated-at",1830087514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown")], null)], null))], null),frontend$components$page$batch_delete_dialog_$_iter__114907(cljs.core.rest(s__114908__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(pages));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-6.flex.justify-end.gap-4","div.pt-6.flex.justify-end.gap-4",-1914024520),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

var seq__114919_115057 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),pages));
var chunk__114920_115058 = null;
var count__114921_115059 = (0);
var i__114922_115060 = (0);
while(true){
if((i__114922_115060 < count__114921_115059)){
var page_name_115061 = chunk__114920_115058.cljs$core$IIndexed$_nth$arity$2(null,i__114922_115060);
frontend.handler.page.delete_BANG_(page_name_115061,((function (seq__114919_115057,chunk__114920_115058,count__114921_115059,i__114922_115060,page_name_115061){
return (function (){
return cljs.core.List.EMPTY;
});})(seq__114919_115057,chunk__114920_115058,count__114921_115059,i__114922_115060,page_name_115061))
);


var G__115062 = seq__114919_115057;
var G__115063 = chunk__114920_115058;
var G__115064 = count__114921_115059;
var G__115065 = (i__114922_115060 + (1));
seq__114919_115057 = G__115062;
chunk__114920_115058 = G__115063;
count__114921_115059 = G__115064;
i__114922_115060 = G__115065;
continue;
} else {
var temp__5804__auto___115066 = cljs.core.seq(seq__114919_115057);
if(temp__5804__auto___115066){
var seq__114919_115067__$1 = temp__5804__auto___115066;
if(cljs.core.chunked_seq_QMARK_(seq__114919_115067__$1)){
var c__5565__auto___115068 = cljs.core.chunk_first(seq__114919_115067__$1);
var G__115069 = cljs.core.chunk_rest(seq__114919_115067__$1);
var G__115070 = c__5565__auto___115068;
var G__115071 = cljs.core.count(c__5565__auto___115068);
var G__115072 = (0);
seq__114919_115057 = G__115069;
chunk__114920_115058 = G__115070;
count__114921_115059 = G__115071;
i__114922_115060 = G__115072;
continue;
} else {
var page_name_115073 = cljs.core.first(seq__114919_115067__$1);
frontend.handler.page.delete_BANG_(page_name_115073,((function (seq__114919_115057,chunk__114920_115058,count__114921_115059,i__114922_115060,page_name_115073,seq__114919_115067__$1,temp__5804__auto___115066){
return (function (){
return cljs.core.List.EMPTY;
});})(seq__114919_115057,chunk__114920_115058,count__114921_115059,i__114922_115060,page_name_115073,seq__114919_115067__$1,temp__5804__auto___115066))
);


var G__115074 = cljs.core.next(seq__114919_115067__$1);
var G__115075 = null;
var G__115076 = (0);
var G__115077 = (0);
seq__114919_115057 = G__115074;
chunk__114920_115058 = G__115075;
count__114921_115059 = G__115076;
i__114922_115060 = G__115077;
continue;
}
} else {
}
}
break;
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tips","all-done","tips/all-done",-433291957)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));

return setTimeout((function (){
return (refresh_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_fn.cljs$core$IFn$_invoke$arity$0() : refresh_fn.call(null));
}),(200));
})], 0))], null)], null);
});
});
/**
 * Pagination component, like `<< <Prev 1/10 Next> >>`.
 * 
 * - current: current page number
 * - total: total number of items
 * - per-page: number of items per page
 * - on-change: callback function when page number changes
 */
frontend.components.page.pagination = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__115078__delegate = function (p__114924){
var map__114925 = p__114924;
var map__114925__$1 = cljs.core.__destructure_map(map__114925);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__114925__$1,new cljs.core.Keyword(null,"current","current",-1088038603),(1));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114925__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__114925__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429),(40));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114925__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var total_pages = (Math.ceil((total / per_page)) | (0));
var has_prev_QMARK_ = (current > (1));
var has_next_QMARK_ = (current < total_pages);
var prev_page = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),current))?(1):(current - (1)));
var next_page = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_pages,current))?total_pages:(current + (1)));
var attrs114923 = ((has_prev_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link.flex","a.fade-link.flex",-1119199551),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1((1)) : on_change.call(null,(1)));
})], null),frontend.ui.icon("chevrons-left")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link.flex.items-center","a.fade-link.flex.items-center",173382696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(prev_page) : on_change.call(null,prev_page));
})], null),frontend.ui.icon("caret-left"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","prev","paginates/prev",-40373326)], 0))], null)], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114923))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","select-none"], null)], null),attrs114923], 0))):{'className':"flex items-center select-none"}),((cljs.core.map_QMARK_(attrs114923))?[daiquiri.core.create_element("div",{'className':"px-2"},[daiquiri.core.create_element("span",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_pages)].join('')])]),((has_next_QMARK_)?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link.flex.items-center","a.fade-link.flex.items-center",173382696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(next_page) : on_change.call(null,next_page));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","next","paginates/next",-1127294609)], 0)),frontend.ui.icon("caret-right")], null),daiquiri.core.create_element("a",{'onClick':(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(total_pages) : on_change.call(null,total_pages));
}),'className':"fade-link flex"},[daiquiri.interpreter.interpret(frontend.ui.icon("chevrons-right"))])], null)):null)]:[daiquiri.interpreter.interpret(attrs114923),daiquiri.core.create_element("div",{'className':"px-2"},[daiquiri.core.create_element("span",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_pages)].join('')])]),((has_next_QMARK_)?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link.flex.items-center","a.fade-link.flex.items-center",173382696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(next_page) : on_change.call(null,next_page));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","next","paginates/next",-1127294609)], 0)),frontend.ui.icon("caret-right")], null),daiquiri.core.create_element("a",{'onClick':(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(total_pages) : on_change.call(null,total_pages));
}),'className':"fade-link flex"},[daiquiri.interpreter.interpret(frontend.ui.icon("chevrons-right"))])], null)):null)]));
};
var G__115078 = function (var_args){
var p__114924 = null;
if (arguments.length > 0) {
var G__115079__i = 0, G__115079__a = new Array(arguments.length -  0);
while (G__115079__i < G__115079__a.length) {G__115079__a[G__115079__i] = arguments[G__115079__i + 0]; ++G__115079__i;}
  p__114924 = new cljs.core.IndexedSeq(G__115079__a,0,null);
} 
return G__115078__delegate.call(this,p__114924);};
G__115078.cljs$lang$maxFixedArity = 0;
G__115078.cljs$lang$applyTo = (function (arglist__115080){
var p__114924 = cljs.core.seq(arglist__115080);
return G__115078__delegate(p__114924);
});
G__115078.cljs$core$IFn$_invoke$arity$variadic = G__115078__delegate;
return G__115078;
})()
,null,"frontend.components.page/pagination");
frontend.components.page.all_pages = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var per_page_num = (40);
var _STAR_sort_by_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","sort-by-item","frontend.components.page/sort-by-item",307335329));
var _STAR_desc_QMARK_ = new cljs.core.Keyword("frontend.components.page","desc?","frontend.components.page/desc?",-469547603).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_journal_QMARK_ = new cljs.core.Keyword("frontend.components.page","journals","frontend.components.page/journals",2069311928).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_whiteboard_QMARK_ = new cljs.core.Keyword("frontend.components.page","whiteboards","frontend.components.page/whiteboards",-137279969).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_results = new cljs.core.Keyword("frontend.components.page","results","frontend.components.page/results",198906230).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_results_all = new cljs.core.Keyword("frontend.components.page","results-all","frontend.components.page/results-all",-1149662250).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_checks = new cljs.core.Keyword("frontend.components.page","checks","frontend.components.page/checks",-236499980).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_pages = new cljs.core.Keyword("frontend.components.page","pages","frontend.components.page/pages",-1418153914).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_current_page = new cljs.core.Keyword("frontend.components.page","current-page","frontend.components.page/current-page",1280998925).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_filter_fn = new cljs.core.Keyword("frontend.components.page","filter-fn","frontend.components.page/filter-fn",-1892237326).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_search_key = new cljs.core.Keyword("frontend.components.page","search-key","frontend.components.page/search-key",308974929).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_search_input = rum.core.create_ref();
var _STAR_indeterminate = (function (){var G__114930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_STAR_checks], null);
var G__114931 = new cljs.core.Keyword("frontend.components.page","indeterminate","frontend.components.page/indeterminate",1341570075);
var G__114932 = (function (checks){
var temp__5804__auto__ = cljs.core.vals(checks);
if(cljs.core.truth_(temp__5804__auto__)){
var checks__$1 = temp__5804__auto__;
if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,checks__$1)){
return (1);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.true_QMARK_,checks__$1))){
return (-1);
} else {
return (0);
}
}
} else {
return null;
}
});
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__114930,G__114931,G__114932) : rum.core.derived_atom.call(null,G__114930,G__114931,G__114932));
})();
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
var total_items = cljs.core.count(cljs.core.deref(_STAR_results_all));
var total_pages = ((cljs.core.not(cljs.core.deref(_STAR_results_all)))?(0):Math.ceil((total_items / per_page_num)));
var to_page = (function (page){
if((total_pages > (1))){
if((((page > (0))) && ((page <= total_pages)))){
cljs.core.reset_BANG_(_STAR_current_page,page);
} else {
cljs.core.reset_BANG_(_STAR_current_page,(1));
}

return setTimeout((function (){
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
}));
} else {
return null;
}
});
var search_key = (function (key){
var temp__5804__auto__ = (function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.trim(key);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var key__$1 = temp__5804__auto__;
if((((!(clojure.string.blank_QMARK_(key__$1)))) && (cljs.core.seq(cljs.core.deref(_STAR_results))))){
return cljs.core.reset_BANG_(_STAR_search_key,key__$1);
} else {
return cljs.core.reset_BANG_(_STAR_search_key,null);
}
} else {
return null;
}
});
var refresh_pages = (function (){
cljs.core.reset_BANG_(_STAR_pages,null);

return cljs.core.reset_BANG_(_STAR_current_page,(1));
});
return daiquiri.core.create_element("div",{'className':"flex-1 cp__all_pages"},[(function (){var attrs114933 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs114933))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs114933], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs114933))?null:[daiquiri.interpreter.interpret(attrs114933)]));
})(),(function (){var attrs114934 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","pages","paginates/pages",977255411),total_items], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114934))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","ml-1","opacity-70","mb-4"], null)], null),attrs114934], 0))):{'className':"text-sm ml-1 opacity-70 mb-4"}),((cljs.core.map_QMARK_(attrs114934))?null:[daiquiri.interpreter.interpret(attrs114934)]));
})(),(cljs.core.truth_(current_repo)?(function (){
if((cljs.core.deref(_STAR_pages) == null)){
var pages_115081 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441),cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__114935 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114935) : frontend.db.entity.call(null,G__114935));
})())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","idx","block/idx",1480967726),idx], 0));
}),frontend.handler.page.get_all_pages(current_repo));
cljs.core.reset_BANG_(_STAR_filter_fn,cljs.core.memoize((function (sort_by_item,desc_QMARK_,journal_QMARK_,whiteboard_QMARK_){
return frontend.components.page.sort_pages_by(sort_by_item,desc_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__114926_SHARP_){
return ((((cljs.core.boolean$(journal_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.boolean$(new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(p1__114926_SHARP_)))))) && (((cljs.core.boolean$(whiteboard_QMARK_)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(p1__114926_SHARP_))))));
}),pages_115081));
})));

daiquiri.interpreter.interpret(cljs.core.reset_BANG_(_STAR_pages,pages_115081));
} else {
}

if(cljs.core.truth_(cljs.core.deref(_STAR_filter_fn))){
var pages_115082 = (function (){var G__114937 = cljs.core.deref(_STAR_sort_by_item);
var G__114938 = cljs.core.deref(_STAR_desc_QMARK_);
var G__114939 = cljs.core.deref(_STAR_journal_QMARK_);
var G__114940 = cljs.core.deref(_STAR_whiteboard_QMARK_);
var fexpr__114936 = cljs.core.deref(_STAR_filter_fn);
return (fexpr__114936.cljs$core$IFn$_invoke$arity$4 ? fexpr__114936.cljs$core$IFn$_invoke$arity$4(G__114937,G__114938,G__114939,G__114940) : fexpr__114936.call(null,G__114937,G__114938,G__114939,G__114940));
})();
var pages_115083__$1 = (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(pages_115082,(function (){var G__114941 = cljs.core.deref(_STAR_search_key);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__114941) : frontend.util.page_name_sanity_lc.call(null,G__114941));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(20),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword("block","name","block/name",1619760316)], 0)):pages_115082);
var __115084 = cljs.core.reset_BANG_(_STAR_results_all,pages_115083__$1);
var pages_115085__$2 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page_num,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page_num * (cljs.core.deref(_STAR_current_page) - (1))),pages_115083__$1));
cljs.core.reset_BANG_(_STAR_checks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function frontend$components$page$iter__114942(s__114943){
return (new cljs.core.LazySeq(null,(function (){
var s__114943__$1 = s__114943;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114943__$1);
if(temp__5804__auto__){
var s__114943__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114943__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114943__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114945 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114944 = (0);
while(true){
if((i__114944 < size__5519__auto__)){
var map__114946 = cljs.core._nth(c__5518__auto__,i__114944);
var map__114946__$1 = cljs.core.__destructure_map(map__114946);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114946__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
cljs.core.chunk_append(b__114945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx))], null));

var G__115086 = (i__114944 + (1));
i__114944 = G__115086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114945),frontend$components$page$iter__114942(cljs.core.chunk_rest(s__114943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114945),null);
}
} else {
var map__114947 = cljs.core.first(s__114943__$2);
var map__114947__$1 = cljs.core.__destructure_map(map__114947);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114947__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx))], null),frontend$components$page$iter__114942(cljs.core.rest(s__114943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(pages_115085__$2);
})()));

daiquiri.interpreter.interpret(cljs.core.reset_BANG_(_STAR_results,pages_115085__$2));
} else {
}

return daiquiri.core.create_element("div",{'className':"cp__all_pages-content"},[daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["actions","pt-4",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-selected","has-selected",2005390583),(((cljs.core.deref(_STAR_indeterminate) == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(_STAR_indeterminate))))], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"l flex items-center"},[(function (){var attrs114976 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete","delete",-1768633620)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var selected = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__114980){
var vec__114981 = p__114980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114981,(1),null);
return v;
}),cljs.core.deref(_STAR_checks));
var selected__$1 = (function (){var and__5041__auto__ = cljs.core.seq(selected);
if(and__5041__auto__){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5520__auto__ = (function frontend$components$page$iter__114984(s__114985){
return (new cljs.core.LazySeq(null,(function (){
var s__114985__$1 = s__114985;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114985__$1);
if(temp__5804__auto__){
var s__114985__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114985__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114985__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114987 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114986 = (0);
while(true){
if((i__114986 < size__5519__auto__)){
var vec__114988 = cljs.core._nth(c__5518__auto__,i__114986);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114988,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114988,(1),null);
cljs.core.chunk_append(b__114987,k);

var G__115087 = (i__114986 + (1));
i__114986 = G__115087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114987),frontend$components$page$iter__114984(cljs.core.chunk_rest(s__114985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114987),null);
}
} else {
var vec__114991 = cljs.core.first(s__114985__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114991,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114991,(1),null);
return cljs.core.cons(k,frontend$components$page$iter__114984(cljs.core.rest(s__114985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(selected);
})());
} else {
return and__5041__auto__;
}
})();
var temp__5804__auto__ = (function (){var and__5041__auto__ = selected__$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__114927_SHARP_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726).cljs$core$IFn$_invoke$arity$1(p1__114927_SHARP_));
}),cljs.core.deref(_STAR_results));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pages = temp__5804__auto__;
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page.batch_delete_dialog(pages,false,(function (){
cljs.core.reset_BANG_(_STAR_checks,null);

return refresh_pages();
})));
} else {
return null;
}
}),new cljs.core.Keyword(null,"icon","icon",1679606541),"trash",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114976))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["actions-wrap"], null)], null),attrs114976], 0))):{'className':"actions-wrap"}),((cljs.core.map_QMARK_(attrs114976))?null:[daiquiri.interpreter.interpret(attrs114976)]));
})(),(function (){var attrs114979 = (function (){var search_fn = (function (){
var input = rum.core.deref(_STAR_search_input);
search_key(input.value);

return cljs.core.reset_BANG_(_STAR_current_page,(1));
});
var reset_fn = (function (){
var input = rum.core.deref(_STAR_search_input);
(input.value = "");

return cljs.core.reset_BANG_(_STAR_search_key,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("search"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),search_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","page-names","search/page-names",-1441293352)], 0)),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
var target = e.target;
if(clojure.string.blank_QMARK_(target.value)){
return cljs.core.reset_BANG_(_STAR_search_key,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.keyCode)){
return search_fn();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
return reset_fn();
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_search_input,new cljs.core.Keyword(null,"default-value","default-value",232220170),""], null)], null),(((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.cancel","a.cancel",-604588983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_fn], null),frontend.ui.icon("x")], null):null)], null);
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114979))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-wrap","flex","items-center","pl-2"], null)], null),attrs114979], 0))):{'className':"search-wrap flex items-center pl-2"}),((cljs.core.map_QMARK_(attrs114979))?null:[daiquiri.interpreter.interpret(attrs114979)]));
})()]),daiquiri.core.create_element("div",{'className':"r flex items-center justify-between"},[daiquiri.core.create_element("div",null,[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","show-whiteboards","page/show-whiteboards",892408277)], 0))], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.whiteboard","a.button.whiteboard",1397203798),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.boolean$(cljs.core.deref(_STAR_whiteboard_QMARK_))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_whiteboard_QMARK_,cljs.core.not(cljs.core.deref(_STAR_whiteboard_QMARK_)));
})], null),frontend.ui.icon("whiteboard",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null))]),daiquiri.core.create_element("div",null,[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","show-journals","page/show-journals",-981574769)], 0))], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.journal","a.button.journal",998619172),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.boolean$(cljs.core.deref(_STAR_journal_QMARK_))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_journal_QMARK_,cljs.core.not(cljs.core.deref(_STAR_journal_QMARK_)));
})], null),frontend.ui.icon("calendar",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size], null))], null))]),daiquiri.core.create_element("div",{'className':"paginates"},[frontend.components.page.pagination(new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.deref(_STAR_current_page),new cljs.core.Keyword(null,"total","total",1916810418),total_items,new cljs.core.Keyword(null,"per-page","per-page",-54905429),per_page_num,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__114928_SHARP_){
return to_page(p1__114928_SHARP_);
}))]),frontend.ui.dropdown_with_links((function (p__114996){
var map__114997 = p__114996;
var map__114997__$1 = cljs.core.__destructure_map(map__114997);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114997__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.fade-link","a.button.fade-link",-500712368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size], null))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-orphaned-pages","remove-orphaned-pages",-1101045668)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var orphaned_pages = frontend.db.model.get_orphaned_pages(cljs.core.PersistentArrayMap.EMPTY);
var orphaned_pages_QMARK_ = cljs.core.seq(orphaned_pages);
if(orphaned_pages_QMARK_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page.batch_delete_dialog(orphaned_pages,true,(function (){
cljs.core.reset_BANG_(_STAR_checks,null);

return refresh_pages();
})));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Congratulations, no orphaned pages in your graph!",new cljs.core.Keyword(null,"success","success",1890645906));
}
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("file-x")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-files","all-files",1120339891)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-files","all-files",1120339891))], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("files")], null)], null),cljs.core.PersistentArrayMap.EMPTY)])]),daiquiri.core.create_element("table",{'className':"table-auto cp__all_pages_table"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[daiquiri.core.create_element("th",{'className':"selector"},[frontend.components.page.checkbox_opt("all-pages-select-all",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(_STAR_indeterminate)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var indeterminate_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.deref(_STAR_indeterminate));
var all_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(_STAR_indeterminate));
var seq__115022 = cljs.core.seq(cljs.core.deref(_STAR_results));
var chunk__115023 = null;
var count__115024 = (0);
var i__115025 = (0);
while(true){
if((i__115025 < count__115024)){
var map__115028 = chunk__115023.cljs$core$IIndexed$_nth$arity$2(null,i__115025);
var map__115028__$1 = cljs.core.__destructure_map(map__115028);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115028__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.assoc,idx,((indeterminate_QMARK_) || ((!(all_QMARK_)))));


var G__115088 = seq__115022;
var G__115089 = chunk__115023;
var G__115090 = count__115024;
var G__115091 = (i__115025 + (1));
seq__115022 = G__115088;
chunk__115023 = G__115089;
count__115024 = G__115090;
i__115025 = G__115091;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__115022);
if(temp__5804__auto__){
var seq__115022__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__115022__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__115022__$1);
var G__115092 = cljs.core.chunk_rest(seq__115022__$1);
var G__115093 = c__5565__auto__;
var G__115094 = cljs.core.count(c__5565__auto__);
var G__115095 = (0);
seq__115022 = G__115092;
chunk__115023 = G__115093;
count__115024 = G__115094;
i__115025 = G__115095;
continue;
} else {
var map__115029 = cljs.core.first(seq__115022__$1);
var map__115029__$1 = cljs.core.__destructure_map(map__115029);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115029__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.assoc,idx,((indeterminate_QMARK_) || ((!(all_QMARK_)))));


var G__115096 = cljs.core.next(seq__115022__$1);
var G__115097 = null;
var G__115098 = (0);
var G__115099 = (0);
seq__115022 = G__115096;
chunk__115023 = G__115097;
count__115024 = G__115098;
i__115025 = G__115099;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.deref(_STAR_indeterminate)))?"indeterminate":null)], null))]),frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316)], 0)),new cljs.core.Keyword("block","name","block/name",1619760316),_STAR_sort_by_item,_STAR_desc_QMARK_),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","backlinks","page/backlinks",1645776383)], 0)),new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441),_STAR_sort_by_item,_STAR_desc_QMARK_),frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","created-at","page/created-at",-84781299)], 0)),new cljs.core.Keyword("block","created-at","block/created-at",1440015),_STAR_sort_by_item,_STAR_desc_QMARK_),frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","updated-at","page/updated-at",-1598282641)], 0)),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),_STAR_sort_by_item,_STAR_desc_QMARK_)], null)))])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$page$iter__115030(s__115031){
return (new cljs.core.LazySeq(null,(function (){
var s__115031__$1 = s__115031;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115031__$1);
if(temp__5804__auto__){
var s__115031__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115031__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115031__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115033 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115032 = (0);
while(true){
if((i__115032 < size__5519__auto__)){
var map__115034 = cljs.core._nth(c__5518__auto__,i__115032);
var map__115034__$1 = cljs.core.__destructure_map(map__115034);
var page = map__115034__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115034__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115034__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115034__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115034__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115034__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
cljs.core.chunk_append(b__115033,((clojure.string.blank_QMARK_(name))?null:daiquiri.core.create_element("tr",{'key':name},[daiquiri.core.create_element("td",{'className':"selector"},[frontend.components.page.checkbox_opt(["label-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__115032,map__115034,map__115034__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__115033,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.update,idx,cljs.core.not);
});})(i__115032,map__115034,map__115034__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__115033,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages))
], null))]),daiquiri.core.create_element("td",{'className':"name"},[daiquiri.core.create_element("a",{'onClick':((function (i__115032,map__115034,map__115034__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__115033,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages){
return (function (e){
e.preventDefault();

var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});})(i__115032,map__115034,map__115034__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__115033,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages))
,'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))},[daiquiri.interpreter.interpret((function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var icon = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),icon], null);
} else {
return null;
}
})()),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)])]),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.backlinks","td.backlinks",1215238996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),backlinks], null)], null),daiquiri.core.create_element("td",{'className':"created-at"},[(function (){var attrs115035 = (cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs115035))?daiquiri.interpreter.element_attributes(attrs115035):null),((cljs.core.map_QMARK_(attrs115035))?null:[daiquiri.interpreter.interpret(attrs115035)]));
})()]),daiquiri.core.create_element("td",{'className':"updated-at"},[(function (){var attrs115036 = (cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs115036))?daiquiri.interpreter.element_attributes(attrs115036):null),((cljs.core.map_QMARK_(attrs115036))?null:[daiquiri.interpreter.interpret(attrs115036)]));
})()])], null)))])));

var G__115100 = (i__115032 + (1));
i__115032 = G__115100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115033),frontend$components$page$iter__115030(cljs.core.chunk_rest(s__115031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115033),null);
}
} else {
var map__115037 = cljs.core.first(s__115031__$2);
var map__115037__$1 = cljs.core.__destructure_map(map__115037);
var page = map__115037__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115037__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115037__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115037__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115037__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115037__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
return cljs.core.cons(((clojure.string.blank_QMARK_(name))?null:daiquiri.core.create_element("tr",{'key':name},[daiquiri.core.create_element("td",{'className':"selector"},[frontend.components.page.checkbox_opt(["label-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__115037,map__115037__$1,page,idx,name,created_at,updated_at,backlinks,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.update,idx,cljs.core.not);
});})(map__115037,map__115037__$1,page,idx,name,created_at,updated_at,backlinks,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages))
], null))]),daiquiri.core.create_element("td",{'className':"name"},[daiquiri.core.create_element("a",{'onClick':((function (map__115037,map__115037__$1,page,idx,name,created_at,updated_at,backlinks,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages){
return (function (e){
e.preventDefault();

var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});})(map__115037,map__115037__$1,page,idx,name,created_at,updated_at,backlinks,s__115031__$2,temp__5804__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_whiteboard_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_items,total_pages,to_page,search_key,refresh_pages))
,'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))},[daiquiri.interpreter.interpret((function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var icon = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),icon], null);
} else {
return null;
}
})()),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)])]),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.backlinks","td.backlinks",1215238996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),backlinks], null)], null),daiquiri.core.create_element("td",{'className':"created-at"},[(function (){var attrs115035 = (cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs115035))?daiquiri.interpreter.element_attributes(attrs115035):null),((cljs.core.map_QMARK_(attrs115035))?null:[daiquiri.interpreter.interpret(attrs115035)]));
})()]),daiquiri.core.create_element("td",{'className':"updated-at"},[(function (){var attrs115036 = (cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs115036))?daiquiri.interpreter.element_attributes(attrs115036):null),((cljs.core.map_QMARK_(attrs115036))?null:[daiquiri.interpreter.interpret(attrs115036)]));
})()])], null)))])),frontend$components$page$iter__115030(cljs.core.rest(s__115031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.deref(_STAR_results));
})())])]),daiquiri.core.create_element("div",{'className':"flex justify-end py-4"},[frontend.components.page.pagination(new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.deref(_STAR_current_page),new cljs.core.Keyword(null,"total","total",1916810418),total_items,new cljs.core.Keyword(null,"per-page","per-page",-54905429),per_page_num,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__114929_SHARP_){
return to_page(p1__114929_SHARP_);
}))])]);
})()
:null)]);
}),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","pages","frontend.components.page/pages",-1418153914)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","search-key","frontend.components.page/search-key",308974929)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","results-all","frontend.components.page/results-all",-1149662250)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","results","frontend.components.page/results",198906230)),rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("frontend.components.page","checks","frontend.components.page/checks",-236499980)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("frontend.components.page","sort-by-item","frontend.components.page/sort-by-item",307335329)),rum.core.local.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword("frontend.components.page","desc?","frontend.components.page/desc?",-469547603)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","journals","frontend.components.page/journals",2069311928)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","whiteboards","frontend.components.page/whiteboards",-137279969)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","filter-fn","frontend.components.page/filter-fn",-1892237326)),rum.core.local.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("frontend.components.page","current-page","frontend.components.page/current-page",1280998925))], null),"frontend.components.page/all-pages");

//# sourceMappingURL=frontend.components.page.js.map
