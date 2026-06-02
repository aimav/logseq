goog.provide('frontend.extensions.tldraw');
goog.scope(function(){
  frontend.extensions.tldraw.goog$module$goog$object = goog.module.get('goog.object');
});
var module$frontend$tldraw_logseq=shadow.js.require("module$frontend$tldraw_logseq", {});
frontend.extensions.tldraw.tldraw = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.extensions.tldraw.goog$module$goog$object.get(module$frontend$tldraw_logseq,"App"));
frontend.extensions.tldraw.generate_preview = frontend.extensions.tldraw.goog$module$goog$object.get(module$frontend$tldraw_logseq,"generateJSXFromModel");
frontend.extensions.tldraw.page_cp = rum.core.lazy_build(rum.core.build_defc,(function (props){
return frontend.components.page.page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-name","page-name",974981762),frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(frontend.extensions.tldraw.goog$module$goog$object.get(props,"pageName")),new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),true], null));
}),null,"frontend.extensions.tldraw/page-cp");
frontend.extensions.tldraw.block_cp = rum.core.lazy_build(rum.core.build_defc,(function (props){
return daiquiri.interpreter.interpret((function (){var G__126175 = cljs.core.uuid(frontend.extensions.tldraw.goog$module$goog$object.get(props,"blockId"));
var fexpr__126174 = frontend.state.get_component(new cljs.core.Keyword("block","single-block","block/single-block",-1166935635));
return (fexpr__126174.cljs$core$IFn$_invoke$arity$1 ? fexpr__126174.cljs$core$IFn$_invoke$arity$1(G__126175) : fexpr__126174.call(null,G__126175));
})());
}),null,"frontend.extensions.tldraw/block-cp");
frontend.extensions.tldraw.breadcrumb = rum.core.lazy_build(rum.core.build_defc,(function (props){
return daiquiri.interpreter.interpret(frontend.components.block.breadcrumb(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null),frontend.state.get_current_repo(),cljs.core.uuid(frontend.extensions.tldraw.goog$module$goog$object.get(props,"blockId")),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-separator?","end-separator?",424414922),frontend.extensions.tldraw.goog$module$goog$object.get(props,"endSeparator"),new cljs.core.Keyword(null,"level-limit","level-limit",-1660435238),frontend.extensions.tldraw.goog$module$goog$object.get(props,"levelLimit",(3))], null)));
}),null,"frontend.extensions.tldraw/breadcrumb");
frontend.extensions.tldraw.tweet = rum.core.lazy_build(rum.core.build_defc,(function (props){
return frontend.ui.tweet_embed(frontend.extensions.tldraw.goog$module$goog$object.get(props,"tweetId"));
}),null,"frontend.extensions.tldraw/tweet");
frontend.extensions.tldraw.block_reference = rum.core.lazy_build(rum.core.build_defc,(function (props){
return frontend.components.block.block_reference(cljs.core.PersistentArrayMap.EMPTY,frontend.extensions.tldraw.goog$module$goog$object.get(props,"blockId"),null);
}),null,"frontend.extensions.tldraw/block-reference");
frontend.extensions.tldraw.page_name_link = rum.core.lazy_build(rum.core.build_defc,(function (props){
return frontend.components.block.page_cp(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.extensions.tldraw.goog$module$goog$object.get(props,"pageName")], null));
}),null,"frontend.extensions.tldraw/page-name-link");
frontend.extensions.tldraw.search_handler = (function frontend$extensions$tldraw$search_handler(q,filters){
var map__126176 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(filters,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0));
var map__126176__$1 = cljs.core.__destructure_map(map__126176);
var pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126176__$1,new cljs.core.Keyword(null,"pages?","pages?",-2065014049));
var blocks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126176__$1,new cljs.core.Keyword(null,"blocks?","blocks?",58578620));
var files_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126176__$1,new cljs.core.Keyword(null,"files?","files?",-1267491104));
var repo = frontend.state.get_current_repo();
var limit = (100);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(blocks_QMARK_)?frontend.search.block_search(repo,q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null)):null),(function (blocks){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(pages_QMARK_)?frontend.search.page_search.cljs$core$IFn$_invoke$arity$1(q):null),(function (pages){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(files_QMARK_)?frontend.search.file_search.cljs$core$IFn$_invoke$arity$2(q,limit):null),(function (files){
return promesa.protocols._promise(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages","pages",-285406513),pages,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"files","files",-472457450),files], null)));
}));
}));
}));
}));
});
frontend.extensions.tldraw.save_asset_handler = (function frontend$extensions$tldraw$save_asset_handler(file){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(file)], null)),(function (res){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(res);
if(and__5041__auto__){
return cljs.core.first(res);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var vec__126177 = temp__5804__auto__;
var asset_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126177,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126177,(1),null);
var full_file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126177,(2),null);
return frontend.handler.editor.resolve_relative_path((function (){var or__5043__auto__ = full_file_path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return asset_file_name;
}
})());
} else {
return null;
}
}));
});
frontend.extensions.tldraw.references_count = (function frontend$extensions$tldraw$references_count(props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.components.whiteboard.references_count,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(frontend.extensions.tldraw.goog$module$goog$object.get(props,k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id","className","options"], null)));
});
frontend.extensions.tldraw.keyboard_shortcut = rum.core.lazy_build(rum.core.build_defc,(function (props){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = cljs_bean.core.__GT_clj(props);
if(cljs.core.truth_(temp__5804__auto__)){
var props__$1 = temp__5804__auto__;
var map__126182 = props__$1;
var map__126182__$1 = cljs.core.__destructure_map(map__126182);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126182__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126182__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126182__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var shortcut__$1 = ((typeof action === 'string')?frontend.ui.keyboard_shortcut_from_config(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(action)):shortcut);
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),false], null),opts], 0));
if(typeof shortcut__$1 === 'string'){
return frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(shortcut__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1], 0));
} else {
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__126180_SHARP_){
return frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(p1__126180_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1], 0));
}),shortcut__$1));

}
} else {
return null;
}
})());
}),null,"frontend.extensions.tldraw/keyboard-shortcut");
frontend.extensions.tldraw.tldraw_renderers = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"Page","Page",-1267059506),frontend.extensions.tldraw.page_cp,new cljs.core.Keyword(null,"Block","Block",-1959785792),frontend.extensions.tldraw.block_cp,new cljs.core.Keyword(null,"Breadcrumb","Breadcrumb",-1351298906),frontend.extensions.tldraw.breadcrumb,new cljs.core.Keyword(null,"Tweet","Tweet",-452258680),frontend.extensions.tldraw.tweet,new cljs.core.Keyword(null,"PageName","PageName",-164991013),frontend.extensions.tldraw.page_name_link,new cljs.core.Keyword(null,"BacklinksCount","BacklinksCount",364670631),frontend.extensions.tldraw.references_count,new cljs.core.Keyword(null,"BlockReference","BlockReference",-120254741),frontend.extensions.tldraw.block_reference,new cljs.core.Keyword(null,"KeyboardShortcut","KeyboardShortcut",1250004264),frontend.extensions.tldraw.keyboard_shortcut], null);
frontend.extensions.tldraw.undo = (function frontend$extensions$tldraw$undo(){
return frontend.handler.history.undo_BANG_(null);
});
frontend.extensions.tldraw.redo = (function frontend$extensions$tldraw$redo(){
return frontend.handler.history.redo_BANG_(null);
});
frontend.extensions.tldraw.get_tldraw_handlers = (function frontend$extensions$tldraw$get_tldraw_handlers(current_whiteboard_name){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"getBlockPageName","getBlockPageName",-1656908032),new cljs.core.Keyword(null,"inflateAsset","inflateAsset",-1449040639),new cljs.core.Keyword(null,"getRedirectPageName","getRedirectPageName",-1858136925),new cljs.core.Keyword(null,"setCurrentPdf","setCurrentPdf",-63289336),new cljs.core.Keyword(null,"addNewWhiteboard","addNewWhiteboard",554297706),new cljs.core.Keyword(null,"isMobile","isMobile",-2043133877),new cljs.core.Keyword(null,"insertFirstPageBlock","insertFirstPageBlock",-1676658548),new cljs.core.Keyword(null,"isWhiteboardPage","isWhiteboardPage",-134150579),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"saveAsset","saveAsset",-668047853),new cljs.core.Keyword(null,"makeAssetUrl","makeAssetUrl",217779988),new cljs.core.Keyword(null,"copyToClipboard","copyToClipboard",1092115063),new cljs.core.Keyword(null,"addNewBlock","addNewBlock",1426762680),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"exportToImage","exportToImage",-154356643),new cljs.core.Keyword(null,"sidebarAddBlock","sidebarAddBlock",-1204903203),new cljs.core.Keyword(null,"redirectToPage","redirectToPage",87147838),new cljs.core.Keyword(null,"queryBlockByUUID","queryBlockByUUID",2091812895)],[(function (p1__126183_SHARP_){
var block_id_str = p1__126183_SHARP_;
if(frontend.util.uuid_string_QMARK_(block_id_str)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_block_page(frontend.state.get_current_repo(),cljs.core.parse_uuid(block_id_str)));
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__126184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(block_id_str) : frontend.util.page_name_sanity_lc.call(null,block_id_str))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__126184) : frontend.db.entity.call(null,G__126184));
})());
}
}),(function (src){
return cljs.core.clj__GT_js(frontend.extensions.pdf.assets.inflate_asset(src));
}),(function (page_name_or_uuid){
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name_or_uuid);
}),(function (src){
return frontend.state.set_current_pdf_BANG_((cljs.core.truth_(src)?frontend.extensions.pdf.assets.inflate_asset(src):null));
}),(function (page_name){
return frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}),frontend.util.mobile_QMARK_,(function (page_name){
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));
}),frontend.db.model.whiteboard_page_QMARK_,frontend.extensions.tldraw.search_handler,frontend.extensions.tldraw.save_asset_handler,frontend.handler.editor.make_asset_url,(function (text,html){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html","html",-998796897),html], 0));
}),(function (content){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.whiteboard.add_new_block_BANG_(current_whiteboard_name,content));
}),(function (key){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)], 0));
}),(function (page_name,options){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(page_name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),true], null)], 0)));
}));
}),(function (uuid,type){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_page(uuid)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),(function (page_name_or_uuid){
var page_name = (function (){var or__5043__auto__ = ((frontend.util.uuid_string_QMARK_(page_name_or_uuid))?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_block_page(frontend.state.get_current_repo(),cljs.core.parse_uuid(page_name_or_uuid))):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name_or_uuid;
}
})();
var page_exists_QMARK_ = frontend.db.model.page_exists_QMARK_(page_name);
var whiteboard_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_name);
if(cljs.core.truth_(page_exists_QMARK_)){
if(cljs.core.truth_(whiteboard_QMARK_)){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),page_name_or_uuid], null));
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name_or_uuid));
}
} else {
return null;
}
}),(function (block_uuid){
return cljs.core.clj__GT_js(frontend.db.model.query_block_by_uuid(cljs.core.parse_uuid(block_uuid)));
})]);
});
frontend.extensions.tldraw.tldraw_app = rum.core.lazy_build(rum.core.build_defc,(function (page_name,block_id){
var populate_onboarding_QMARK_ = frontend.handler.whiteboard.should_populate_onboarding_whiteboard_QMARK_(page_name);
var data = frontend.handler.whiteboard.page_name__GT_tldr_BANG_(page_name);
var vec__126185 = rum.core.use_state(null);
var loaded_app = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126185,(0),null);
var set_loaded_app = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126185,(1),null);
var on_mount = (function (tln){
if(cljs.core.truth_(tln)){
(tln.appUndo = frontend.extensions.tldraw.undo);

(tln.appRedo = frontend.extensions.tldraw.redo);

var temp__5804__auto__ = frontend.extensions.tldraw.goog$module$goog$object.get(tln,"api");
if(cljs.core.truth_(temp__5804__auto__)){
var api = temp__5804__auto__;
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(((populate_onboarding_QMARK_)?frontend.handler.whiteboard.populate_onboarding_whiteboard(api):null),(function (){
frontend.handler.whiteboard.cleanup_BANG_(tln.currentPage);

frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$2(tln,block_id);

return (set_loaded_app.cljs$core$IFn$_invoke$arity$1 ? set_loaded_app.cljs$core$IFn$_invoke$arity$1(tln) : set_loaded_app.call(null,tln));
}));
} else {
return null;
}
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = loaded_app;
if(cljs.core.truth_(and__5041__auto__)){
return block_id;
} else {
return and__5041__auto__;
}
})())){
frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$2(loaded_app,block_id);
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,loaded_app], null));

if(cljs.core.truth_(data)){
return daiquiri.core.create_element("div",{'style':{'overscrollBehavior':"none"},'onBlur':(function (e){
if(cljs.core.truth_((function (){var G__126189 = frontend.extensions.tldraw.goog$module$goog$object.get(e,"target").tagName;
var fexpr__126188 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null);
return (fexpr__126188.cljs$core$IFn$_invoke$arity$1 ? fexpr__126188.cljs$core$IFn$_invoke$arity$1(G__126189) : fexpr__126188.call(null,G__126189));
})())){
return frontend.state.clear_edit_BANG_();
} else {
return null;
}
}),'onWheel':frontend.util.stop_propagation,'className':"draw tldraw whiteboard relative w-full h-full"},[((((populate_onboarding_QMARK_) && (cljs.core.not(loaded_app))))?daiquiri.core.create_element("div",{'style':{'zIndex':(200)},'className':"absolute inset-0 flex items-center justify-center"},[daiquiri.interpreter.interpret(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("Loading onboarding whiteboard ..."))]):null),daiquiri.interpreter.interpret((function (){var G__126191 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"renderers","renderers",-1460292282),frontend.extensions.tldraw.tldraw_renderers,new cljs.core.Keyword(null,"handlers","handlers",79528781),frontend.extensions.tldraw.get_tldraw_handlers(page_name),new cljs.core.Keyword(null,"onMount","onMount",-876858467),on_mount,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),frontend.config.publishing_QMARK_,new cljs.core.Keyword(null,"onPersist","onPersist",-1848738852),(function (app,info){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","last-persisted-at","whiteboard/last-persisted-at",-669908968),frontend.state.get_current_repo()], null),frontend.util.time_ms());

if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto__ = "tldraw persist";
console.time(k__62654__auto__);

var res__62655__auto__ = frontend.handler.whiteboard.transact_tldr_delta_BANG_(page_name,app,info.replace);
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
} else {
return frontend.handler.whiteboard.transact_tldr_delta_BANG_(page_name,app,info.replace);
}
}),new cljs.core.Keyword(null,"model","model",331153215),data], null);
return (frontend.extensions.tldraw.tldraw.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.tldraw.tldraw.cljs$core$IFn$_invoke$arity$1(G__126191) : frontend.extensions.tldraw.tldraw.call(null,G__126191));
})())]);
} else {
return null;
}
}),null,"frontend.extensions.tldraw/tldraw-app");

//# sourceMappingURL=frontend.extensions.tldraw.js.map
