goog.provide('frontend.components.whiteboard');
goog.scope(function(){
  frontend.components.whiteboard.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.whiteboard !== 'undefined') && (typeof frontend.components.whiteboard.tldraw_loaded_QMARK_ !== 'undefined')){
} else {
frontend.components.whiteboard.tldraw_loaded_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.whiteboard.tldraw_app = rum.core.lazy_build(rum.core.build_defc,(function (name,shape_id){
var loaded_QMARK_ = rum.core.react(frontend.components.whiteboard.tldraw_loaded_QMARK_);
var draw_component = (cljs.core.truth_(loaded_QMARK_)?(((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.tldraw !== 'undefined') && (typeof frontend.extensions.tldraw.tldraw_app !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.tldraw.tldraw_app;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.tldraw","tldraw-app","frontend.extensions.tldraw/tldraw-app",-147934778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null):null);
if(cljs.core.truth_(draw_component)){
return daiquiri.interpreter.interpret((draw_component.cljs$core$IFn$_invoke$arity$2 ? draw_component.cljs$core$IFn$_invoke$arity$2(name,shape_id) : draw_component.call(null,name,shape_id)));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.components.whiteboard.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"tldraw","tldraw",-1177214555)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.whiteboard.tldraw_loaded_QMARK_,true));
}));
}));

return state;
})], null)], null),"frontend.components.whiteboard/tldraw-app");
frontend.components.whiteboard.tldraw_preview = rum.core.lazy_build(rum.core.build_defc,(function (page_name){
var loaded_QMARK_ = rum.core.react(frontend.components.whiteboard.tldraw_loaded_QMARK_);
var tldr = frontend.handler.whiteboard.page_name__GT_tldr_BANG_(page_name);
var generate_preview = (cljs.core.truth_(loaded_QMARK_)?(((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.tldraw !== 'undefined') && (typeof frontend.extensions.tldraw.generate_preview !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.tldraw.generate_preview;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.tldraw","generate-preview","frontend.extensions.tldraw/generate-preview",-109262068,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null):null);
if(cljs.core.truth_(generate_preview)){
return daiquiri.interpreter.interpret((generate_preview.cljs$core$IFn$_invoke$arity$1 ? generate_preview.cljs$core$IFn$_invoke$arity$1(tldr) : generate_preview.call(null,tldr)));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.components.whiteboard.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"tldraw","tldraw",-1177214555)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.whiteboard.tldraw_loaded_QMARK_,true));
}));
}));

return state;
})], null)], null),"frontend.components.whiteboard/tldraw-preview");
frontend.components.whiteboard.dropdown = rum.core.lazy_build(rum.core.build_defc,(function (label,children,show_QMARK_,outside_click_handler,portal_QMARK_){
var vec__115283 = frontend.rum.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$1(show_QMARK_);
var anchor_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115283,(0),null);
var anchor_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115283,(1),null);
var vec__115286 = frontend.rum.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$1(show_QMARK_);
var content_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115286,(0),null);
var content_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115286,(1),null);
var offset_x = (cljs.core.truth_((function (){var and__5041__auto__ = anchor_rect;
if(cljs.core.truth_(and__5041__auto__)){
return content_rect;
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(portal_QMARK_)?(function (){var offset_x = ((0.5 * (anchor_rect.width - content_rect.width)) + anchor_rect.x);
var vp_w = window.innerWidth;
var right = ((offset_x + content_rect.width) + (16));
var offset_x__$1 = (((right > vp_w))?(offset_x - (right - vp_w)):offset_x);
return offset_x__$1;
})():(0.5 * (anchor_rect.width - content_rect.width))):null);
var offset_y = (cljs.core.truth_((function (){var and__5041__auto__ = anchor_rect;
if(cljs.core.truth_(and__5041__auto__)){
return content_rect;
} else {
return and__5041__auto__;
}
})())?((anchor_rect.y + anchor_rect.height) + (8)):null);
var click_outside_ref = frontend.rum.use_click_outside(outside_click_handler);
var vec__115289 = rum.core.use_state(false);
var d_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115289,(0),null);
var set_d_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115289,(1),null);
var _ = rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return setTimeout((function (){
return (set_d_open.cljs$core$IFn$_invoke$arity$1 ? set_d_open.cljs$core$IFn$_invoke$arity$1(show_QMARK_) : set_d_open.call(null,show_QMARK_));
}),(100));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [show_QMARK_], null));
return daiquiri.core.create_element("div",{'ref':anchor_ref,'className':"inline-block dropdown-anchor"},[daiquiri.interpreter.interpret(label),(cljs.core.truth_(portal_QMARK_)?frontend.ui.portal(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.shadow-lg.color-level.px-2.rounded-lg.transition.md:w-64.lg:w-128.overflow-auto","div.fixed.shadow-lg.color-level.px-2.rounded-lg.transition.md:w-64.lg:w-128.overflow-auto",-1190694199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(content_ref,click_outside_ref),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(d_open)?(1):(0)),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(d_open)?"auto":"none"),new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_open)?(0):(10))),"px)"].join(''),new cljs.core.Keyword(null,"min-height","min-height",398480837),"40px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"420px",new cljs.core.Keyword(null,"left","left",-399115937),offset_x,new cljs.core.Keyword(null,"top","top",-1856271961),offset_y], null)], null),(cljs.core.truth_(d_open)?children:null)], null)):daiquiri.core.create_element("div",{'ref':cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(content_ref,click_outside_ref),'style':{'opacity':(cljs.core.truth_(d_open)?(1):(0)),'pointerEvents':(cljs.core.truth_(d_open)?"auto":"none"),'transform':["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_open)?(0):(10))),"px)"].join(''),'minHeight':"40px",'maxHeight':"420px",'left':offset_x},'className':"absolute shadow-lg color-level px-2 rounded-lg transition md:w-64 lg:w-128 overflow-auto"},[(cljs.core.truth_(d_open)?daiquiri.interpreter.interpret(children):null)]))]);
}),null,"frontend.components.whiteboard/dropdown");
frontend.components.whiteboard.dropdown_menu = rum.core.lazy_build(rum.core.build_defc,(function (p__115294){
var map__115295 = p__115294;
var map__115295__$1 = cljs.core.__destructure_map(map__115295);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115295__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var classname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115295__$1,new cljs.core.Keyword(null,"classname","classname",777390796));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115295__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var portal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115295__$1,new cljs.core.Keyword(null,"portal?","portal?",-167584340));
var vec__115296 = rum.core.use_state((0));
var open_flag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115296,(0),null);
var set_open_flag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115296,(1),null);
var open_QMARK_ = (open_flag > (cljs.core.truth_(hover_QMARK_)?(0):(1)));
var d_open_flag = rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((200),set_open_flag);
}),cljs.core.PersistentVector.EMPTY);
return frontend.components.whiteboard.dropdown(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),((open_QMARK_)?" open":null)].join(''),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
var G__115302 = (function (p1__115292_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__115292_SHARP_,(0))){
return (1);
} else {
return p1__115292_SHARP_;
}
});
return (d_open_flag.cljs$core$IFn$_invoke$arity$1 ? d_open_flag.cljs$core$IFn$_invoke$arity$1(G__115302) : d_open_flag.call(null,G__115302));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
var G__115303 = (function (p1__115293_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__115293_SHARP_,(2))){
return p1__115293_SHARP_;
} else {
return (0);
}
});
return (d_open_flag.cljs$core$IFn$_invoke$arity$1 ? d_open_flag.cljs$core$IFn$_invoke$arity$1(G__115303) : d_open_flag.call(null,G__115303));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__115304 = (function (o){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o,(2))){
return (2);
} else {
return (0);
}
});
return (d_open_flag.cljs$core$IFn$_invoke$arity$1 ? d_open_flag.cljs$core$IFn$_invoke$arity$1(G__115304) : d_open_flag.call(null,G__115304));
})], null),((cljs.core.fn_QMARK_(label))?(label.cljs$core$IFn$_invoke$arity$1 ? label.cljs$core$IFn$_invoke$arity$1(open_QMARK_) : label.call(null,open_QMARK_)):label)], null),children,open_QMARK_,(function (){
return (set_open_flag.cljs$core$IFn$_invoke$arity$1 ? set_open_flag.cljs$core$IFn$_invoke$arity$1((0)) : set_open_flag.call(null,(0)));
}),portal_QMARK_);
}),null,"frontend.components.whiteboard/dropdown-menu");
/**
 * Shows a references count for any block or page.
 * When clicked, a dropdown menu will show the reference details
 */
frontend.components.whiteboard.references_count = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__115354 = null;
var G__115354__2 = (function (page_name_or_uuid,classname){
return daiquiri.interpreter.interpret((frontend.components.whiteboard.references_count.cljs$core$IFn$_invoke$arity$3 ? frontend.components.whiteboard.references_count.cljs$core$IFn$_invoke$arity$3(page_name_or_uuid,classname,null) : frontend.components.whiteboard.references_count.call(null,page_name_or_uuid,classname,null)));
});
var G__115354__3 = (function (page_name_or_uuid,classname,p__115305){
var map__115306 = p__115305;
var map__115306__$1 = cljs.core.__destructure_map(map__115306);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115306__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115306__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var portal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__115306__$1,new cljs.core.Keyword(null,"portal?","portal?",-167584340),true);
var page_entity = frontend.db.model.get_page(page_name_or_uuid);
var page = frontend.db.model.sub_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity));
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity);
var refs_count = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page));
if((refs_count > (0))){
return frontend.components.whiteboard.dropdown_menu(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"classname","classname",777390796),classname,new cljs.core.Keyword(null,"label","label",1718410804),(function (open_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-flex.items-center.gap-2","div.inline-flex.items-center.gap-2",-561621654),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.open-page-ref-link","div.open-page-ref-link",-1340586219),refs_count], null),(cljs.core.truth_(render_fn)?(render_fn.cljs$core$IFn$_invoke$arity$2 ? render_fn.cljs$core$IFn$_invoke$arity$2(open_QMARK_,refs_count) : render_fn.call(null,open_QMARK_,refs_count)):null)], null);
}),new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_QMARK_,new cljs.core.Keyword(null,"portal?","portal?",-167584340),portal_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),frontend.components.reference.block_linked_references(block_uuid)], null));
} else {
return null;
}
});
G__115354 = function(page_name_or_uuid,classname,p__115305){
switch(arguments.length){
case 2:
return G__115354__2.call(this,page_name_or_uuid,classname);
case 3:
return G__115354__3.call(this,page_name_or_uuid,classname,p__115305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__115354.cljs$core$IFn$_invoke$arity$2 = G__115354__2;
G__115354.cljs$core$IFn$_invoke$arity$3 = G__115354__3;
return G__115354;
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.whiteboard/references-count");
frontend.components.whiteboard.get_page_display_name = (function frontend$components$whiteboard$get_page_display_name(page_name){
var page_entity = frontend.db.model.get_page(page_name);
var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(page_entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null),null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return page_name;
}
}
});
frontend.components.whiteboard.get_page_human_update_time = (function frontend$components$whiteboard$get_page_human_update_time(page_name){
var page_entity = frontend.db.model.get_page(page_name);
var map__115307 = page_entity;
var map__115307__$1 = cljs.core.__destructure_map(map__115307);
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115307__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115307__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(created_at,updated_at))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("whiteboard","dashboard-card-created","whiteboard/dashboard-card-created",-1651021771)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("whiteboard","dashboard-card-edited","whiteboard/dashboard-card-edited",1417624794)], 0)))),frontend.util.time_ago((new Date(updated_at)))].join('');
});
frontend.components.whiteboard.dashboard_preview_card = rum.core.lazy_build(rum.core.build_defc,(function (page_name,p__115308){
var map__115309 = p__115308;
var map__115309__$1 = cljs.core.__destructure_map(map__115309);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115309__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var on_checked_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115309__$1,new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819));
var show_checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115309__$1,new cljs.core.Keyword(null,"show-checked?","show-checked?",-405251948));
return daiquiri.core.create_element("div",{'data-checked':checked,'style':{'filter':(cljs.core.truth_((function (){var and__5041__auto__ = show_checked_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(checked);
} else {
return and__5041__auto__;
}
})())?"opacity(0.5)":"none")},'onClick':(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(show_checked_QMARK_)){
var G__115310 = cljs.core.not(checked);
return (on_checked_change.cljs$core$IFn$_invoke$arity$1 ? on_checked_change.cljs$core$IFn$_invoke$arity$1(G__115310) : on_checked_change.call(null,G__115310));
} else {
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}
}),'className':"dashboard-card dashboard-preview-card cursor-pointer hover:shadow-lg"},[daiquiri.core.create_element("div",{'className':"dashboard-card-title"},[daiquiri.core.create_element("div",{'className':"flex w-full items-center"},[(function (){var attrs115311 = (cljs.core.truth_(frontend.db.model.untitled_page_QMARK_(page_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0))], null):frontend.components.whiteboard.get_page_display_name(page_name));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115311))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dashboard-card-title-name","font-bold"], null)], null),attrs115311], 0))):{'className':"dashboard-card-title-name font-bold"}),((cljs.core.map_QMARK_(attrs115311))?null:[daiquiri.interpreter.interpret(attrs115311)]));
})(),daiquiri.core.create_element("div",{'className':"flex-1"},null),daiquiri.core.create_element("div",{'tabIndex':(-1),'style':{'visibility':(cljs.core.truth_(show_checked_QMARK_)?"visible":null)},'onClick':frontend.util.stop_propagation,'className':"dashboard-card-checkbox"},[daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__115315 = cljs.core.not(checked);
return (on_checked_change.cljs$core$IFn$_invoke$arity$1 ? on_checked_change.cljs$core$IFn$_invoke$arity$1(G__115315) : on_checked_change.call(null,G__115315));
})], null)))])]),daiquiri.core.create_element("div",{'className':"flex w-full opacity-50"},[daiquiri.core.create_element("div",null,[frontend.components.whiteboard.get_page_human_update_time(page_name)]),daiquiri.core.create_element("div",{'className':"flex-1"},null),frontend.components.whiteboard.references_count(page_name,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null))])]),frontend.ui.lazy_visible((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.h-64.flex.justify-center","div.p-4.h-64.flex.justify-center",722712029),frontend.components.whiteboard.tldraw_preview(page_name)], null);
}))]);
}),null,"frontend.components.whiteboard/dashboard-preview-card");
frontend.components.whiteboard.dashboard_create_card = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'id':"tl-create-whiteboard",'onClick':(function (e){
frontend.util.stop(e);

return frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$0();
}),'className':"dashboard-card dashboard-create-card cursor-pointer"},[daiquiri.interpreter.interpret(frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(32)], null))),(function (){var attrs115318 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("whiteboard","dashboard-card-new-whiteboard","whiteboard/dashboard-card-new-whiteboard",-423217066)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs115318))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dashboard-create-card-caption","select-none"], null)], null),attrs115318], 0))):{'className':"dashboard-create-card-caption select-none"}),((cljs.core.map_QMARK_(attrs115318))?null:[daiquiri.interpreter.interpret(attrs115318)]));
})()]);
}),null,"frontend.components.whiteboard/dashboard-create-card");
frontend.components.whiteboard.whiteboard_dashboard = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$0())){
var whiteboards = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),frontend.db.model.get_all_whiteboards(frontend.state.get_current_repo())));
var whiteboard_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),whiteboards);
var vec__115321 = frontend.rum.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115321,(0),null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115321,(1),null);
var vec__115324 = (cljs.core.truth_(rect)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.width,rect.height], null):null);
var container_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115324,(0),null);
var cols = (((container_width < (600)))?(1):(((container_width < (900)))?(2):(((container_width < (1200)))?(3):(4)
)));
var total_whiteboards = cljs.core.count(whiteboards);
var empty_cards = ((function (){var x__5128__auto__ = (cljs.math.ceil(((total_whiteboards + (1)) / cols)) * cols);
var y__5129__auto__ = ((2) * cols);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})() - (total_whiteboards + (1)));
var vec__115327 = rum.core.use_state(cljs.core.PersistentHashSet.EMPTY);
var checked_page_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115327,(0),null);
var set_checked_page_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115327,(1),null);
var has_checked_QMARK_ = cljs.core.not_empty(checked_page_names);
return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("h1",{'className':"select-none flex items-center whiteboard-dashboard-title title"},[(function (){var attrs115330 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-whiteboards","all-whiteboards",-1803913411)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115330))?daiquiri.interpreter.element_attributes(attrs115330):null),((cljs.core.map_QMARK_(attrs115330))?[daiquiri.core.create_element("span",{'className':"opacity-50"},[[" \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_whiteboards)].join('')])]:[daiquiri.interpreter.interpret(attrs115330),daiquiri.core.create_element("span",{'className':"opacity-50"},[[" \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_whiteboards)].join('')])]));
})(),daiquiri.core.create_element("div",{'className':"flex-1"},null),(cljs.core.truth_(has_checked_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(checked_page_names),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"trash",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page.batch_delete_dialog(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return cljs.core.some((function (w){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(w),name)){
return w;
} else {
return null;
}
}),whiteboards);
}),checked_page_names),false,frontend.handler.route.redirect_to_whiteboard_dashboard_BANG_));
})], null)], 0))):null)]),daiquiri.core.create_element("div",{'ref':ref},[daiquiri.core.create_element("div",{'style':{'visibility':(((container_width == null))?"hidden":null),'gridTemplateColumns':["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cols),", minmax(0, 1fr))"].join('')},'className':"gap-8 grid grid-rows-auto"},[((frontend.config.publishing_QMARK_)?null:frontend.components.whiteboard.dashboard_create_card()),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$whiteboard$iter__115333(s__115334){
return (new cljs.core.LazySeq(null,(function (){
var s__115334__$1 = s__115334;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115334__$1);
if(temp__5804__auto__){
var s__115334__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115334__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115334__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115336 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115335 = (0);
while(true){
if((i__115335 < size__5519__auto__)){
var whiteboard_name = cljs.core._nth(c__5518__auto__,i__115335);
cljs.core.chunk_append(b__115336,daiquiri.core.create_element(daiquiri.core.fragment,{'key':whiteboard_name},[frontend.components.whiteboard.dashboard_preview_card(whiteboard_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-checked?","show-checked?",-405251948),has_checked_QMARK_,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((checked_page_names.cljs$core$IFn$_invoke$arity$1 ? checked_page_names.cljs$core$IFn$_invoke$arity$1(whiteboard_name) : checked_page_names.call(null,whiteboard_name))),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),((function (i__115335,whiteboard_name,c__5518__auto__,size__5519__auto__,b__115336,s__115334__$2,temp__5804__auto__,whiteboards,whiteboard_names,vec__115321,ref,rect,vec__115324,container_width,cols,total_whiteboards,empty_cards,vec__115327,checked_page_names,set_checked_page_names,has_checked_QMARK_){
return (function (checked){
var G__115338 = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(checked_page_names,whiteboard_name):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(checked_page_names,whiteboard_name));
return (set_checked_page_names.cljs$core$IFn$_invoke$arity$1 ? set_checked_page_names.cljs$core$IFn$_invoke$arity$1(G__115338) : set_checked_page_names.call(null,G__115338));
});})(i__115335,whiteboard_name,c__5518__auto__,size__5519__auto__,b__115336,s__115334__$2,temp__5804__auto__,whiteboards,whiteboard_names,vec__115321,ref,rect,vec__115324,container_width,cols,total_whiteboards,empty_cards,vec__115327,checked_page_names,set_checked_page_names,has_checked_QMARK_))
], null))]));

var G__115355 = (i__115335 + (1));
i__115335 = G__115355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115336),frontend$components$whiteboard$iter__115333(cljs.core.chunk_rest(s__115334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115336),null);
}
} else {
var whiteboard_name = cljs.core.first(s__115334__$2);
return cljs.core.cons(daiquiri.core.create_element(daiquiri.core.fragment,{'key':whiteboard_name},[frontend.components.whiteboard.dashboard_preview_card(whiteboard_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-checked?","show-checked?",-405251948),has_checked_QMARK_,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((checked_page_names.cljs$core$IFn$_invoke$arity$1 ? checked_page_names.cljs$core$IFn$_invoke$arity$1(whiteboard_name) : checked_page_names.call(null,whiteboard_name))),new cljs.core.Keyword(null,"on-checked-change","on-checked-change",-482086819),((function (whiteboard_name,s__115334__$2,temp__5804__auto__,whiteboards,whiteboard_names,vec__115321,ref,rect,vec__115324,container_width,cols,total_whiteboards,empty_cards,vec__115327,checked_page_names,set_checked_page_names,has_checked_QMARK_){
return (function (checked){
var G__115340 = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(checked_page_names,whiteboard_name):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(checked_page_names,whiteboard_name));
return (set_checked_page_names.cljs$core$IFn$_invoke$arity$1 ? set_checked_page_names.cljs$core$IFn$_invoke$arity$1(G__115340) : set_checked_page_names.call(null,G__115340));
});})(whiteboard_name,s__115334__$2,temp__5804__auto__,whiteboards,whiteboard_names,vec__115321,ref,rect,vec__115324,container_width,cols,total_whiteboards,empty_cards,vec__115327,checked_page_names,set_checked_page_names,has_checked_QMARK_))
], null))]),frontend$components$whiteboard$iter__115333(cljs.core.rest(s__115334__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(whiteboard_names);
})()),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$whiteboard$iter__115341(s__115342){
return (new cljs.core.LazySeq(null,(function (){
var s__115342__$1 = s__115342;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115342__$1);
if(temp__5804__auto__){
var s__115342__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115342__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115342__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115344 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115343 = (0);
while(true){
if((i__115343 < size__5519__auto__)){
var n = cljs.core._nth(c__5518__auto__,i__115343);
cljs.core.chunk_append(b__115344,daiquiri.core.create_element("div",{'key':n,'className':"dashboard-card dashboard-bg-card"},[]));

var G__115356 = (i__115343 + (1));
i__115343 = G__115356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115344),frontend$components$whiteboard$iter__115341(cljs.core.chunk_rest(s__115342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115344),null);
}
} else {
var n = cljs.core.first(s__115342__$2);
return cljs.core.cons(daiquiri.core.create_element("div",{'key':n,'className':"dashboard-card dashboard-bg-card"},[]),frontend$components$whiteboard$iter__115341(cljs.core.rest(s__115342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(empty_cards));
})())])])]);
} else {
return daiquiri.core.create_element("div",null,["This feature is not publicly available yet."]);
}
}),null,"frontend.components.whiteboard/whiteboard-dashboard");
frontend.components.whiteboard.whiteboard_page = rum.core.lazy_build(rum.core.build_defc,(function (page_name,block_id){
var vec__115345 = frontend.rum.use_breakpoint.cljs$core$IFn$_invoke$arity$0();
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115345,(0),null);
var bp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115345,(1),null);
return daiquiri.core.create_element("div",{'key':page_name,'ref':ref,'data-breakpoint':cljs.core.name(bp),'style':{'padding':"0.5px",'zIndex':(0),'transform':"translateZ(0)",'textRendering':"geometricPrecision",'WebkitFontSmoothing':"subpixel-antialiased"},'className':"absolute w-full h-full whiteboard-page"},[daiquiri.core.create_element("div",{'data-html2canvas-ignore':true,'className':"whiteboard-page-title-root"},[daiquiri.core.create_element("div",{'style':{'color':"var(--ls-primary-text-color)",'userSelect':"none"},'onContextMenu':(function (e){
frontend.util.stop(e);

frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.page_title_custom_context_menu_content(page_name));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),null);
}),'className':"whiteboard-page-title"},[frontend.components.page.page_title(page_name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-lg","span.text-lg",1517355809),frontend.ui.icon("whiteboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null))], null),frontend.components.whiteboard.get_page_display_name(page_name),null,false)]),daiquiri.core.create_element("div",{'className':"whiteboard-page-refs"},[frontend.components.whiteboard.references_count(page_name,"text-md px-3 py-2 cursor-default whiteboard-page-refs-count",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (open_QMARK_,refs_count){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.whiteboard-page-refs-count-label","span.whiteboard-page-refs-count-label",1594979945),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("whiteboard","reference-count","whiteboard/reference-count",463273373),refs_count], 0)),frontend.ui.icon((cljs.core.truth_(open_QMARK_)?"references-hide":"references-show"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null))], null);
})], null))])]),frontend.components.whiteboard.tldraw_app(page_name,block_id)]);
}),null,"frontend.components.whiteboard/whiteboard-page");
frontend.components.whiteboard.whiteboard_route = rum.core.lazy_build(rum.core.build_defc,(function (route_match){
var name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var map__115348 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var map__115348__$1 = cljs.core.__destructure_map(map__115348);
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115348__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
return frontend.components.whiteboard.whiteboard_page(name,block_id);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shortcut.handler","whiteboard","shortcut.handler/whiteboard",-364922674),false)], null),"frontend.components.whiteboard/whiteboard-route");
frontend.components.whiteboard.onboarding_welcome = rum.core.lazy_build(rum.core.build_defc,(function (close_fn){
return daiquiri.core.create_element("div",{'className':"cp__whiteboard-welcome"},[daiquiri.core.create_element("span",{'className':"head-bg"},null),(function (){var attrs115351 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","welcome-whiteboard-modal-title","on-boarding/welcome-whiteboard-modal-title",-1738898845)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs115351))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-2xl","font-bold","flex-col","sm:flex-row"], null)], null),attrs115351], 0))):{'className':"text-2xl font-bold flex-col sm:flex-row"}),((cljs.core.map_QMARK_(attrs115351))?null:[daiquiri.interpreter.interpret(attrs115351)]));
})(),(function (){var attrs115352 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","welcome-whiteboard-modal-description","on-boarding/welcome-whiteboard-modal-description",-1310086322)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115352))?daiquiri.interpreter.element_attributes(attrs115352):null),((cljs.core.map_QMARK_(attrs115352))?null:[daiquiri.interpreter.interpret(attrs115352)]));
})(),(function (){var attrs115353 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","welcome-whiteboard-modal-skip","on-boarding/welcome-whiteboard-modal-skip",-1465544680)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-60 skip-welcome"], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115353))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-6","flex","justify-center","space-x-2","sm:justify-end"], null)], null),attrs115353], 0))):{'className':"pt-6 flex justify-center space-x-2 sm:justify-end"}),((cljs.core.map_QMARK_(attrs115353))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","welcome-whiteboard-modal-start","on-boarding/welcome-whiteboard-modal-start",-25803730)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.onboarding.quick_tour.ready((function (){
frontend.components.onboarding.quick_tour.start_whiteboard();

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
}));
})], 0)))]:[daiquiri.interpreter.interpret(attrs115353),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","welcome-whiteboard-modal-start","on-boarding/welcome-whiteboard-modal-start",-25803730)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.onboarding.quick_tour.ready((function (){
frontend.components.onboarding.quick_tour.start_whiteboard();

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
}));
})], 0)))]));
})()]);
}),null,"frontend.components.whiteboard/onboarding-welcome");

//# sourceMappingURL=frontend.components.whiteboard.js.map
