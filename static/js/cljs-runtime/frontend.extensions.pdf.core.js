goog.provide('frontend.extensions.pdf.core');

frontend.extensions.pdf.core._STAR_highlight_last_color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yellow","yellow",-881035449));
frontend.extensions.pdf.core.open_external_win_BANG_ = (function frontend$extensions$pdf$core$open_external_win_BANG_(pdf_current){
return frontend.extensions.pdf.windows.open_pdf_in_new_window_BANG_(frontend.extensions.pdf.core.system_embed_playground,pdf_current);
});
frontend.extensions.pdf.core.reset_current_pdf_BANG_ = (function frontend$extensions$pdf$core$reset_current_pdf_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
});
frontend.extensions.pdf.core.pdf_highlight_finder = rum.core.lazy_build(rum.core.build_defcs,(function (state,viewer){
var _STAR_mounted_QMARK_ = new cljs.core.Keyword("frontend.extensions.pdf.core","mounted?","frontend.extensions.pdf.core/mounted?",1240414367).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(viewer)){
var temp__5804__auto___119404 = frontend.state.sub(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267));
if(cljs.core.truth_(temp__5804__auto___119404)){
var ref_hl_119405 = temp__5804__auto___119404;
setTimeout((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_hl_119405))){
return frontend.extensions.pdf.utils.scroll_to_highlight(viewer,ref_hl_119405);
} else {
return (viewer.currentPageNumber = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ref_hl_119405);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}
}),(cljs.core.truth_(cljs.core.deref(_STAR_mounted_QMARK_))?(50):(500)));

setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),null);
}),(1000));
} else {
}
} else {
}

return daiquiri.interpreter.interpret(cljs.core.reset_BANG_(_STAR_mounted_QMARK_,true));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.pdf.core","mounted?","frontend.extensions.pdf.core/mounted?",1240414367))], null),"frontend.extensions.pdf.core/pdf-highlight-finder");
frontend.extensions.pdf.core.pdf_page_finder = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(viewer)){
var temp__5804__auto__ = new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(temp__5804__auto__)){
var _ = temp__5804__auto__;
var active_hl = new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(active_hl)){
return null;
} else {
return viewer.eventBus.on(cljs.core.name(new cljs.core.Keyword(null,"restore-last-page","restore-last-page",-1367707745)),(function (last_page){
if(cljs.core.truth_(last_page)){
return (viewer.currentPageNumber = frontend.util.safe_parse_int(last_page));
} else {
return null;
}
}));
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.extensions.pdf.core/pdf-page-finder");
/**
 * Watches for changes in the pdf container's width and adjusts the viewer.
 */
frontend.extensions.pdf.core.pdf_resizer = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
var el_ref = rum.core.use_ref(null);
var adjust_main_size_BANG_ = frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((200),(function (width){
var root_el = document.documentElement;
root_el.style.setProperty("--ph-view-container-width",width);

return (frontend.extensions.pdf.utils.adjust_viewer_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.pdf.utils.adjust_viewer_size_BANG_.cljs$core$IFn$_invoke$arity$1(viewer) : frontend.extensions.pdf.utils.adjust_viewer_size_BANG_.call(null,viewer));
}));
var group_id = viewer.$groupIdentity;
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto___119406 = (function (){var and__5041__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5041__auto__){
return rum.core.deref(el_ref);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___119406)){
var el_119407 = temp__5804__auto___119406;
interact(el_119407).draggable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var width = document.documentElement.clientWidth;
var offset = e.rect.left;
var el_ratio = (offset / width).toFixed((6));
var target_el = document.getElementById(["pdf-layout-container_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_id)].join(''));
if(cljs.core.truth_(target_el)){
var width__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5131__auto__ = (function (){var x__5128__auto__ = (el_ratio * (100));
var y__5129__auto__ = (20);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var y__5132__auto__ = (80);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})()),"vw"].join('');
target_el.style.setProperty("width",width__$1);

return (adjust_main_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? adjust_main_size_BANG_.cljs$core$IFn$_invoke$arity$1(width__$1) : adjust_main_size_BANG_.call(null,width__$1));
} else {
return null;
}
})], null)], null))).styleCursor(false).on("dragstart",(function (){
return document.documentElement.classList.add("is-resizing-buf");
})).on("dragend",(function (){
return document.documentElement.classList.remove("is-resizing-buf");
}));
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("span",{'ref':el_ref,'className':"extensions__pdf-resizer"},[]);
}),null,"frontend.extensions.pdf.core/pdf-resizer");
/**
 * The contextual menu which appears over a text selection and allows e.g. creating a highlight.
 */
frontend.extensions.pdf.core.pdf_highlights_ctx_menu = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__119221,p__119222){
var map__119223 = p__119221;
var map__119223__$1 = cljs.core.__destructure_map(map__119223);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119223__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119223__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119223__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var map__119224 = p__119222;
var map__119224__$1 = cljs.core.__destructure_map(map__119224);
var clear_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119224__$1,new cljs.core.Keyword(null,"clear-ctx-menu!","clear-ctx-menu!",1081183125));
var add_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119224__$1,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833));
var upd_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119224__$1,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274));
var del_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119224__$1,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var cb = (function (){
return (clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_ctx_menu_BANG_.call(null));
});
var doc = frontend.extensions.pdf.windows.resolve_own_document(viewer);
setTimeout((function (){
return doc.addEventListener("click",cb);
}));

return (function (){
return doc.removeEventListener("click",cb);
});
}),cljs.core.PersistentVector.EMPTY);

var _STAR_el = rum.core.use_ref(null);
var cnt = viewer.container;
var head_height = (0);
var top = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) + cnt.scrollTop) - head_height);
var left = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + cnt.scrollLeft);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight);
var new_QMARK_ = (id == null);
var new__AMPERSAND__highlight_mode_QMARK_ = (function (){var and__5041__auto__ = cljs.core.deref(frontend.extensions.pdf.toolbar._STAR_highlight_mode_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return new_QMARK_;
} else {
return and__5041__auto__;
}
})();
var show_ctx_menu_QMARK_ = (function (){var and__5041__auto__ = cljs.core.not(new__AMPERSAND__highlight_mode_QMARK_);
if(and__5041__auto__){
var or__5043__auto__ = cljs.core.not(selection);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto____$1 = selection;
if(cljs.core.truth_(and__5041__auto____$1)){
return frontend.state.sub(new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381));
} else {
return and__5041__auto____$1;
}
}
} else {
return and__5041__auto__;
}
})();
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight);
var area_QMARK_ = (!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content))));
var action_fn_BANG_ = (function (action,clear_QMARK_){
var temp__5804__auto__ = (function (){var and__5041__auto__ = action;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(action);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var action__$1 = temp__5804__auto__;
var highlight_119408__$1 = ((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight);
var content_119409__$1 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight_119408__$1);
var G__119225_119410 = action__$1;
switch (G__119225_119410) {
case "ref":
frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight_119408__$1,viewer);

break;
case "copy":
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content_119409__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.pdf.utils.fix_selection_text_breakline(selection.toString());
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"owner-window","owner-window",-2139116435),frontend.extensions.pdf.windows.resolve_own_window(viewer)], 0));

frontend.extensions.pdf.utils.clear_all_selection();

break;
case "link":
frontend.extensions.pdf.assets.goto_block_ref_BANG_(highlight_119408__$1);

break;
case "del":
(del_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? del_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight_119408__$1) : del_hl_BANG_.call(null,highlight_119408__$1));

frontend.extensions.pdf.assets.del_ref_block_BANG_(highlight_119408__$1);

frontend.extensions.pdf.assets.unlink_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),highlight_119408__$1);

break;
case "hook":

break;
default:
var properties_119412 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),action__$1], null);
if(cljs.core.not(id)){
var highlight_119413__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([highlight_119408__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.pdf.utils.gen_uuid(),new cljs.core.Keyword(null,"properties","properties",685819552),properties_119412], null)], 0));
(add_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight_119413__$2) : add_hl_BANG_.call(null,highlight_119413__$2));

frontend.extensions.pdf.utils.clear_all_selection();

frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight_119413__$2,viewer);
} else {
var G__119226_119414 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(highlight_119408__$1,new cljs.core.Keyword(null,"properties","properties",685819552),properties_119412);
(upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1(G__119226_119414) : upd_hl_BANG_.call(null,G__119226_119414));
}

cljs.core.reset_BANG_(frontend.extensions.pdf.core._STAR_highlight_last_color,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(action__$1));

}

var and__5041__auto__ = clear_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return setTimeout((function (){
return (clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_ctx_menu_BANG_.call(null));
}),(68));
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(new__AMPERSAND__highlight_mode_QMARK_)){
setTimeout((function (){
return action_fn_BANG_(cljs.core.deref(frontend.extensions.pdf.core._STAR_highlight_last_color),true);
}),(300));
} else {
var el_119415 = rum.core.deref(_STAR_el);
var map__119227_119416 = frontend.util.calc_delta_rect_offset(el_119415,el_119415.closest(".extensions__pdf-viewer"));
var map__119227_119417__$1 = cljs.core.__destructure_map(map__119227_119416);
var x_119418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119227_119417__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_119419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119227_119417__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
(el_119415.style.transform = ["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x_119418 < (0)))?(x_119418 - (5)):(0))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y_119419 < (0)))?(y_119419 - (5)):(0))),"px",",0)"].join(''));
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("ul",{'ref':_STAR_el,'style':{'top':top,'left':left,'visibility':(cljs.core.truth_(show_ctx_menu_QMARK_)?"visible":"hidden")},'onClick':(function (e){
e.stopPropagation();

var temp__5804__auto__ = e.target.dataset.action;
if(cljs.core.truth_(temp__5804__auto__)){
var action = temp__5804__auto__;
return action_fn_BANG_(action,true);
} else {
return null;
}
}),'className':"extensions__pdf-hls-ctx-menu"},[daiquiri.core.create_element("li",{'className':"item-colors"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$pdf$core$iter__119228(s__119229){
return (new cljs.core.LazySeq(null,(function (){
var s__119229__$1 = s__119229;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119229__$1);
if(temp__5804__auto__){
var s__119229__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119229__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119229__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119231 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119230 = (0);
while(true){
if((i__119230 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__119230);
cljs.core.chunk_append(b__119231,daiquiri.core.create_element("a",{'key':it,'data-color':it,'data-action':it},[daiquiri.interpreter.interpret(it)]));

var G__119420 = (i__119230 + (1));
i__119230 = G__119420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119231),frontend$extensions$pdf$core$iter__119228(cljs.core.chunk_rest(s__119229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119231),null);
}
} else {
var it = cljs.core.first(s__119229__$2);
return cljs.core.cons(daiquiri.core.create_element("a",{'key':it,'data-color':it,'data-action':it},[daiquiri.interpreter.interpret(it)]),frontend$extensions$pdf$core$iter__119228(cljs.core.rest(s__119229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yellow","red","green","blue","purple"], null));
})())]),daiquiri.interpreter.interpret((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"ref"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","copy-ref","pdf/copy-ref",1111581184)], 0))], null);
} else {
return and__5041__auto__;
}
})()),daiquiri.interpreter.interpret((function (){var and__5041__auto__ = (!(area_QMARK_));
if(and__5041__auto__){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"copy"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","copy-text","pdf/copy-text",-1645704266)], 0))], null);
} else {
return and__5041__auto__;
}
})()),daiquiri.interpreter.interpret((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"link"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0))], null);
} else {
return and__5041__auto__;
}
})()),daiquiri.interpreter.interpret((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"del"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete","delete",-1768633620)], 0))], null);
} else {
return and__5041__auto__;
}
})()),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (!(area_QMARK_));
} else {
return and__5041__auto__;
}
})())?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$pdf$core$iter__119232(s__119233){
return (new cljs.core.LazySeq(null,(function (){
var s__119233__$1 = s__119233;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119233__$1);
if(temp__5804__auto__){
var s__119233__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119233__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119233__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119235 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119234 = (0);
while(true){
if((i__119234 < size__5519__auto__)){
var vec__119236 = cljs.core._nth(c__5518__auto__,i__119234);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119236,(0),null);
var map__119239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119236,(1),null);
var map__119239__$1 = cljs.core.__destructure_map(map__119239);
var _cmd = map__119239__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119239__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119239__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var extras = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119239__$1,new cljs.core.Keyword(null,"extras","extras",-1110348066));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119236,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119236,(3),null);
cljs.core.chunk_append(b__119235,daiquiri.core.create_element("li",{'key':key,'data-action':"hook",'onClick':((function (i__119234,vec__119236,_,map__119239,map__119239__$1,_cmd,key,label,extras,action,pid,c__5518__auto__,size__5519__auto__,b__119235,s__119233__$2,temp__5804__auto__,_STAR_el,cnt,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__119223,map__119223__$1,highlight,point,selection,map__119224,map__119224__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_){
return (function (){
var highlight__$1 = ((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight);
frontend.commands.exec_plugin_simple_command_BANG_(pid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight__$1),new cljs.core.Keyword(null,"point","point",1813198264),point], null),action);

if(new cljs.core.Keyword(null,"clearSelection","clearSelection",839903009).cljs$core$IFn$_invoke$arity$1(extras) === true){
return frontend.extensions.pdf.utils.clear_all_selection();
} else {
return null;
}
});})(i__119234,vec__119236,_,map__119239,map__119239__$1,_cmd,key,label,extras,action,pid,c__5518__auto__,size__5519__auto__,b__119235,s__119233__$2,temp__5804__auto__,_STAR_el,cnt,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__119223,map__119223__$1,highlight,point,selection,map__119224,map__119224__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_))
,'className':"item"},[daiquiri.interpreter.interpret(label)]));

var G__119421 = (i__119234 + (1));
i__119234 = G__119421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119235),frontend$extensions$pdf$core$iter__119232(cljs.core.chunk_rest(s__119233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119235),null);
}
} else {
var vec__119240 = cljs.core.first(s__119233__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119240,(0),null);
var map__119243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119240,(1),null);
var map__119243__$1 = cljs.core.__destructure_map(map__119243);
var _cmd = map__119243__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119243__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119243__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var extras = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119243__$1,new cljs.core.Keyword(null,"extras","extras",-1110348066));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119240,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119240,(3),null);
return cljs.core.cons(daiquiri.core.create_element("li",{'key':key,'data-action':"hook",'onClick':((function (vec__119240,_,map__119243,map__119243__$1,_cmd,key,label,extras,action,pid,s__119233__$2,temp__5804__auto__,_STAR_el,cnt,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__119223,map__119223__$1,highlight,point,selection,map__119224,map__119224__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_){
return (function (){
var highlight__$1 = ((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight);
frontend.commands.exec_plugin_simple_command_BANG_(pid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight__$1),new cljs.core.Keyword(null,"point","point",1813198264),point], null),action);

if(new cljs.core.Keyword(null,"clearSelection","clearSelection",839903009).cljs$core$IFn$_invoke$arity$1(extras) === true){
return frontend.extensions.pdf.utils.clear_all_selection();
} else {
return null;
}
});})(vec__119240,_,map__119243,map__119243__$1,_cmd,key,label,extras,action,pid,s__119233__$2,temp__5804__auto__,_STAR_el,cnt,head_height,top,left,id,new_QMARK_,new__AMPERSAND__highlight_mode_QMARK_,show_ctx_menu_QMARK_,content,area_QMARK_,action_fn_BANG_,map__119223,map__119223__$1,highlight,point,selection,map__119224,map__119224__$1,clear_ctx_menu_BANG_,add_hl_BANG_,upd_hl_BANG_,del_hl_BANG_))
,'className':"item"},[daiquiri.interpreter.interpret(label)]),frontend$extensions$pdf$core$iter__119232(cljs.core.rest(s__119233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"highlight-context-menu-item","highlight-context-menu-item",494511872)));
})()):null)]);
}),null,"frontend.extensions.pdf.core/pdf-highlights-ctx-menu");
frontend.extensions.pdf.core.pdf_highlights_text_region = rum.core.lazy_build(rum.core.build_defc,(function (viewer,vw_hl,hl,p__119244){
var map__119245 = p__119244;
var map__119245__$1 = cljs.core.__destructure_map(map__119245);
var show_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119245__$1,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810));
var map__119246 = hl;
var map__119246__$1 = cljs.core.__destructure_map(map__119246);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119246__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__119247 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var map__119247__$1 = cljs.core.__destructure_map(map__119247);
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119247__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var map__119248 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__119248__$1 = cljs.core.__destructure_map(map__119248);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119248__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var open_ctx_menu_BANG_ = (function (e){
e.preventDefault();

var x = e.clientX;
var y = e.clientY;
var G__119249 = viewer;
var G__119250 = hl;
var G__119251 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3(G__119249,G__119250,G__119251) : show_ctx_menu_BANG_.call(null,G__119249,G__119250,G__119251));
});
var dragstart_handle_BANG_ = (function (e){
var temp__5804__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return e.dataTransfer;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var dt = temp__5804__auto__;
cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,true);

frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_pdf(),hl);

return dt.setData("text/plain",["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"))"].join(''));
} else {
return null;
}
});
return daiquiri.core.create_element("div",{'id':["hl_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),'onClick':open_ctx_menu_BANG_,'onContextMenu':open_ctx_menu_BANG_,'className':"extensions__pdf-hls-text-region"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,rect){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hls-text-region-item","div.hls-text-region-item",-1046800817),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),rect,new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true",new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),dragstart_handle_BANG_,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color], null)], null);
}),rects))]);
}),null,"frontend.extensions.pdf.core/pdf-highlights-text-region");
frontend.extensions.pdf.core.pdf_highlight_area_region = rum.core.lazy_build(rum.core.build_defc,(function (viewer,vw_hl,hl,p__119253){
var map__119254 = p__119253;
var map__119254__$1 = cljs.core.__destructure_map(map__119254);
var ops = map__119254__$1;
var show_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119254__$1,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810));
var map__119255 = hl;
var map__119255__$1 = cljs.core.__destructure_map(map__119255);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119255__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _STAR_el = rum.core.use_ref(null);
var _STAR_dirty = rum.core.use_ref(null);
var _STAR_ops_ref = rum.core.use_ref(ops);
var open_ctx_menu_BANG_ = (function (e){
e.preventDefault();

if(cljs.core.truth_(rum.core.deref(_STAR_dirty))){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var G__119256 = viewer;
var G__119257 = hl;
var G__119258 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$3(G__119256,G__119257,G__119258) : show_ctx_menu_BANG_.call(null,G__119256,G__119257,G__119258));
}
});
var dragstart_handle_BANG_ = (function (e){
var temp__5804__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return e.dataTransfer;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var dt = temp__5804__auto__;
return dt.setData("text/plain",["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"))"].join(''));
} else {
return null;
}
});
var update_hl_BANG_ = (function (hl__$1){
var G__119259 = rum.core.deref(_STAR_ops_ref);
var G__119259__$1 = (((G__119259 == null))?null:new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274).cljs$core$IFn$_invoke$arity$1(G__119259));
if((G__119259__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__119259__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl__$1], null));
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return rum.core.set_ref_BANG_(_STAR_ops_ref,ops);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ops], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el = rum.core.deref(_STAR_el);
var it = interact(el).resizable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),true,new cljs.core.Keyword(null,"right","right",-452581833),true,new cljs.core.Keyword(null,"top","top",-1856271961),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),true], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(function (_e){
return rum.core.set_ref_BANG_(_STAR_dirty,true);
}),new cljs.core.Keyword(null,"end","end",-268185958),(function (e){
var vw_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var target = e.target;
var vw_rect = e.rect;
var vec__119260 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__119252_SHARP_){
var val = target.getAttribute(["data-",cljs.core.name(p1__119252_SHARP_)].join(''));
if((!((val == null)))){
return parseFloat(val);
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119260,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119260,(1),null);
var to_top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"top","top",-1856271961)], null)) + dy);
var to_left = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"left","left",-399115937)], null)) + dx);
var to_w = vw_rect.width;
var to_h = vw_rect.height;
var to_vw_pos = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(vw_pos,new cljs.core.Keyword(null,"bounding","bounding",-2125178263),cljs.core.assoc,new cljs.core.Keyword(null,"top","top",-1856271961),to_top,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_left,new cljs.core.Keyword(null,"width","width",-384071477),to_w,new cljs.core.Keyword(null,"height","height",1025178622),to_h], 0));
var to_sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,to_vw_pos);
var hl_SINGLEQUOTE__119422 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.Keyword(null,"position","position",-2011731912),to_sc_pos);
var hl_SINGLEQUOTE__119423__$1 = cljs.core.assoc_in(hl_SINGLEQUOTE__119422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null),Date.now());
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),hl_SINGLEQUOTE__119423__$1,hl,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(to_vw_pos)),(function (){
return setTimeout((function (){
(target.style.transform = "translate(0, 0)");

target.removeAttribute("data-x");

target.removeAttribute("data-y");

return update_hl_BANG_(hl_SINGLEQUOTE__119423__$1);
}),(200));
}));

return setTimeout((function (){
return rum.core.set_ref_BANG_(_STAR_dirty,false);
}));
}),new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var target = e.target;
var x = target.getAttribute("data-x");
var y = target.getAttribute("data-y");
var bx = (((!((x == null))))?parseFloat(x):(0));
var by = (((!((y == null))))?parseFloat(y):(0));
(target.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.rect.width),"px"].join(''));

(target.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.rect.height),"px"].join(''));

var ax = (bx + e.deltaRect.left);
var ay = (by + e.deltaRect.top);
(target.style.transform = ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ax),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ay),"px)"].join(''));

target.setAttribute("data-x",ax);

return target.setAttribute("data-y",ay);
})], null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interact.modifiers.restrict(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"restriction","restriction",-1380234912),el.closest(".page")], null)))], null),new cljs.core.Keyword(null,"inertia","inertia",-1478343701),true], null)));
return (function (){
return it.unset();
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl], null));

return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"bounding","bounding",-2125178263)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var vw_bounding = temp__5804__auto__;
var map__119264 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__119264__$1 = cljs.core.__destructure_map(map__119264);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119264__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-hls-area-region","div.extensions__pdf-hls-area-region",-850888181),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),["hl_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"style","style",-496642736),vw_bounding,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color,new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true",new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),dragstart_handle_BANG_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_ctx_menu_BANG_,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),open_ctx_menu_BANG_], null)], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.core/pdf-highlight-area-region");
/**
 * Displays the highlights over a pdf document.
 */
frontend.extensions.pdf.core.pdf_highlights_region_container = rum.core.lazy_build(rum.core.build_defc,(function (viewer,page_hls,ops){
return daiquiri.core.create_element("div",{'className':"hls-region-container"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$pdf$core$iter__119266(s__119267){
return (new cljs.core.LazySeq(null,(function (){
var s__119267__$1 = s__119267;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119267__$1);
if(temp__5804__auto__){
var s__119267__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119267__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119267__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119269 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119268 = (0);
while(true){
if((i__119268 < size__5519__auto__)){
var hl = cljs.core._nth(c__5518__auto__,i__119268);
cljs.core.chunk_append(b__119269,(function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (i__119268,hl,c__5518__auto__,size__5519__auto__,b__119269,s__119267__$2,temp__5804__auto__){
return (function (p1__119265_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__119265_SHARP_);
});})(i__119268,hl,c__5518__auto__,size__5519__auto__,b__119269,s__119267__$2,temp__5804__auto__))
);
return rum.core.with_key((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?frontend.extensions.pdf.core.pdf_highlight_area_region(viewer,vw_hl,hl,ops):frontend.extensions.pdf.core.pdf_highlights_text_region(viewer,vw_hl,hl,ops)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
})());

var G__119424 = (i__119268 + (1));
i__119268 = G__119424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119269),frontend$extensions$pdf$core$iter__119266(cljs.core.chunk_rest(s__119267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119269),null);
}
} else {
var hl = cljs.core.first(s__119267__$2);
return cljs.core.cons((function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (hl,s__119267__$2,temp__5804__auto__){
return (function (p1__119265_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__119265_SHARP_);
});})(hl,s__119267__$2,temp__5804__auto__))
);
return rum.core.with_key((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?frontend.extensions.pdf.core.pdf_highlight_area_region(viewer,vw_hl,hl,ops):frontend.extensions.pdf.core.pdf_highlights_text_region(viewer,vw_hl,hl,ops)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
})(),frontend$extensions$pdf$core$iter__119266(cljs.core.rest(s__119267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(page_hls);
})())]);
}),null,"frontend.extensions.pdf.core/pdf-highlights-region-container");
frontend.extensions.pdf.core.pdf_highlight_area_selection = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__119273){
var map__119274 = p__119273;
var map__119274__$1 = cljs.core.__destructure_map(map__119274);
var show_ctx_menu_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119274__$1,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810));
var viewer_clt = viewer.viewer.classList;
var cnt_el = viewer.container;
var _STAR_el = rum.core.use_ref(null);
var _STAR_start_el = rum.core.use_ref(null);
var _STAR_cnt_rect = rum.core.use_ref(null);
var _STAR_page_el = rum.core.use_ref(null);
var _STAR_page_rect = rum.core.use_ref(null);
var _STAR_start_xy = rum.core.use_ref(null);
var vec__119275 = rum.core.use_state(null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119275,(0),null);
var set_start_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119275,(1),null);
var vec__119278 = rum.core.use_state(null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119278,(0),null);
var set_end_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119278,(1),null);
var vec__119281 = frontend.rum.use_atom(frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119281,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119281,(1),null);
var should_start = (function (e){
var target = e.target;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(target.classList.contains("extensions__pdf-hls-area-region"));
if(and__5041__auto__){
return target.closest(".page");
} else {
return and__5041__auto__;
}
})())){
var and__5041__auto__ = e;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = e.metaKey;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.deref(frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_);
}
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
var reset_coords_BANG_ = (function (){
(set_start_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_start_BANG_.call(null,null));

(set_end_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_end_BANG_.call(null,null));

rum.core.set_ref_BANG_(_STAR_start_xy,null);

rum.core.set_ref_BANG_(_STAR_start_el,null);

rum.core.set_ref_BANG_(_STAR_cnt_rect,null);

rum.core.set_ref_BANG_(_STAR_page_el,null);

return rum.core.set_ref_BANG_(_STAR_page_rect,null);
});
var calc_coords_BANG_ = (function (page_x,page_y){
if(cljs.core.truth_(cnt_el)){
var cnt_rect = rum.core.deref(_STAR_cnt_rect);
var cnt_rect__$1 = (function (){var or__5043__auto__ = cnt_rect;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs_bean.core.__GT_clj(cnt_el.getBoundingClientRect().toJSON());
}
})();
var page_rect = rum.core.deref(_STAR_page_rect);
var vec__119284 = rum.core.deref(_STAR_start_xy);
var start_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119284,(0),null);
var start_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119284,(1),null);
var dx_left_QMARK_ = (start_x > page_x);
var dy_top_QMARK_ = (start_y > page_y);
var page_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(page_rect);
var page_right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(page_rect);
var page_top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(page_rect);
var page_bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(page_rect);
var ___$1 = rum.core.set_ref_BANG_(_STAR_cnt_rect,cnt_rect__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((function (p1__119270_SHARP_){
if(dx_left_QMARK_){
if((p1__119270_SHARP_ < page_left)){
return page_left;
} else {
return p1__119270_SHARP_;
}
} else {
if((p1__119270_SHARP_ > page_right)){
return page_right;
} else {
return p1__119270_SHARP_;
}
}
})(page_x) + cnt_el.scrollLeft),new cljs.core.Keyword(null,"y","y",-1757859776),((function (p1__119271_SHARP_){
if(dy_top_QMARK_){
if((p1__119271_SHARP_ < page_top)){
return page_top;
} else {
return p1__119271_SHARP_;
}
} else {
if((p1__119271_SHARP_ > page_bottom)){
return page_bottom;
} else {
return p1__119271_SHARP_;
}
}
})(page_y) + cnt_el.scrollTop)], null);
} else {
return null;
}
});
var calc_rect = (function (start__$1,end__$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(function (){var x__5131__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start__$1);
var y__5132__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end__$1);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),new cljs.core.Keyword(null,"top","top",-1856271961),(function (){var x__5131__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start__$1);
var y__5132__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end__$1);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),new cljs.core.Keyword(null,"width","width",-384071477),Math.abs((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end__$1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start__$1))),new cljs.core.Keyword(null,"height","height",1025178622),Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end__$1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start__$1)))], null);
});
var disable_text_selection_BANG_ = (function (p1__119272_SHARP_){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(viewer_clt,(cljs.core.truth_(p1__119272_SHARP_)?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["disabled-text-selection"], 0));
});
var fn_move = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (e){
var G__119287 = calc_coords_BANG_(e.pageX,e.pageY);
return (set_end_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_BANG_.cljs$core$IFn$_invoke$arity$1(G__119287) : set_end_BANG_.call(null,G__119287));
}),cljs.core.PersistentVector.EMPTY);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = cnt_el;
if(cljs.core.truth_(temp__5804__auto__)){
var root = temp__5804__auto__;
var fn_start = (function (e){
if(cljs.core.truth_(should_start(e))){
var target = e.target;
var page_el = target.closest(".page");
var vec__119288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.pageX,e.pageY], null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119288,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119288,(1),null);
rum.core.set_ref_BANG_(_STAR_start_el,target);

rum.core.set_ref_BANG_(_STAR_start_xy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

rum.core.set_ref_BANG_(_STAR_page_el,page_el);

rum.core.set_ref_BANG_(_STAR_page_rect,(function (){var G__119291 = page_el;
var G__119291__$1 = (((G__119291 == null))?null:G__119291.getBoundingClientRect());
var G__119291__$2 = (((G__119291__$1 == null))?null:G__119291__$1.toJSON());
if((G__119291__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__119291__$2);
}
})());

var G__119292_119425 = calc_coords_BANG_(x,y);
(set_start_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_BANG_.cljs$core$IFn$_invoke$arity$1(G__119292_119425) : set_start_BANG_.call(null,G__119292_119425));

disable_text_selection_BANG_(true);

return root.addEventListener("mousemove",fn_move);
} else {
reset_coords_BANG_();

return disable_text_selection_BANG_(false);
}
});
var fn_end = (function (e){
var temp__5804__auto____$1 = rum.core.deref(_STAR_start_el);
if(cljs.core.truth_(temp__5804__auto____$1)){
var start_el = temp__5804__auto____$1;
var end_119426__$1 = calc_coords_BANG_(e.pageX,e.pageY);
var rect_119427 = calc_rect(start,end_119426__$1);
if((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect_119427) > (10))) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect_119427) > (10))))){
var temp__5804__auto___119428__$2 = start_el.closest(".page");
if(cljs.core.truth_(temp__5804__auto___119428__$2)){
var page_el_119429 = temp__5804__auto___119428__$2;
var page_number_119430 = (page_el_119429.dataset.pageNumber | (0));
var page_pos_119431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rect_119427,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect_119427) - page_el_119429.offsetTop),new cljs.core.Keyword(null,"left","left",-399115937),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect_119427) - page_el_119429.offsetLeft)], null)], 0));
var vw_pos_119432 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),page_pos_119431,new cljs.core.Keyword(null,"rects","rects",1714526167),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"page","page",849072397),page_number_119430], null);
var sc_pos_119433 = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos_119432);
var point_119434 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
var hl_119435 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page_number_119430,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos_119433,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"[:span]",new cljs.core.Keyword(null,"image","image",-58725096),Date.now()], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
var G__119293_119436 = viewer;
var G__119294_119437 = hl_119435;
var G__119295_119438 = point_119434;
var G__119296_119439 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),(function (){
return reset_coords_BANG_();
})], null);
(show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$4 ? show_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$4(G__119293_119436,G__119294_119437,G__119295_119438,G__119296_119439) : show_ctx_menu_BANG_.call(null,G__119293_119436,G__119294_119437,G__119295_119438,G__119296_119439));

(set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_area_mode_BANG_.call(null,false));
} else {
}
} else {
reset_coords_BANG_();
}

disable_text_selection_BANG_(false);

return root.removeEventListener("mousemove",fn_move);
} else {
return null;
}
});
var G__119297_119440 = root;
G__119297_119440.addEventListener("mousedown",fn_start);

G__119297_119440.addEventListener("mouseup",fn_end,({"once": true}));


return (function (){
var G__119298 = root;
G__119298.removeEventListener("mousedown",fn_start);

G__119298.removeEventListener("mouseup",fn_end);

return G__119298;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null));

return daiquiri.core.create_element("div",{'ref':_STAR_el,'className':"extensions__pdf-area-selection"},[(cljs.core.truth_((function (){var and__5041__auto__ = start;
if(cljs.core.truth_(and__5041__auto__)){
return end;
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",{'style':daiquiri.interpreter.element_attributes(calc_rect(start,end)),'className':"shadow-rect"},[]):null)]);
}),null,"frontend.extensions.pdf.core/pdf-highlight-area-selection");
frontend.extensions.pdf.core.pdf_highlights = rum.core.lazy_build(rum.core.build_defc,(function (el,viewer,initial_hls,loaded_pages,p__119301){
var map__119302 = p__119301;
var map__119302__$1 = cljs.core.__destructure_map(map__119302);
var set_dirty_hls_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119302__$1,new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512));
var doc = el.ownerDocument;
var win = doc.defaultView;
var _STAR_mounted = rum.core.use_ref(false);
var vec__119303 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null));
var sel_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119303,(0),null);
var set_sel_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119303,(1),null);
var vec__119306 = rum.core.use_state(initial_hls);
var highlights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119306,(0),null);
var set_highlights_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119306,(1),null);
var vec__119309 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),null,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),null,new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"point","point",1813198264),null,new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),null], null));
var ctx_menu_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119309,(0),null);
var set_ctx_menu_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119309,(1),null);
var clear_ctx_menu_BANG_ = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (){
var reset_fn = new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550).cljs$core$IFn$_invoke$arity$1(ctx_menu_state);
var G__119312_119441 = cljs.core.PersistentArrayMap.EMPTY;
(set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119312_119441) : set_ctx_menu_state_BANG_.call(null,G__119312_119441));

var and__5041__auto__ = cljs.core.fn_QMARK_(reset_fn);
if(and__5041__auto__){
return (reset_fn.cljs$core$IFn$_invoke$arity$0 ? reset_fn.cljs$core$IFn$_invoke$arity$0() : reset_fn.call(null));
} else {
return and__5041__auto__;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx_menu_state], null));
var show_ctx_menu_BANG_ = (function() { 
var G__119442__delegate = function (viewer__$1,hl,point,ops){
var vw_pos = frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer__$1,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
var G__119313 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),vw_pos,new cljs.core.Keyword(null,"point","point",1813198264),point], null),ops));
return (set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119313) : set_ctx_menu_state_BANG_.call(null,G__119313));
};
var G__119442 = function (viewer__$1,hl,point,var_args){
var ops = null;
if (arguments.length > 3) {
var G__119443__i = 0, G__119443__a = new Array(arguments.length -  3);
while (G__119443__i < G__119443__a.length) {G__119443__a[G__119443__i] = arguments[G__119443__i + 3]; ++G__119443__i;}
  ops = new cljs.core.IndexedSeq(G__119443__a,0,null);
} 
return G__119442__delegate.call(this,viewer__$1,hl,point,ops);};
G__119442.cljs$lang$maxFixedArity = 3;
G__119442.cljs$lang$applyTo = (function (arglist__119444){
var viewer__$1 = cljs.core.first(arglist__119444);
arglist__119444 = cljs.core.next(arglist__119444);
var hl = cljs.core.first(arglist__119444);
arglist__119444 = cljs.core.next(arglist__119444);
var point = cljs.core.first(arglist__119444);
var ops = cljs.core.rest(arglist__119444);
return G__119442__delegate(viewer__$1,hl,point,ops);
});
G__119442.cljs$core$IFn$_invoke$arity$variadic = G__119442__delegate;
return G__119442;
})()
;
var add_hl_BANG_ = (function (hl){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl))){
var highlights_119445__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var G__119314_119446 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(highlights_119445__$1,hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__119314_119446) : set_highlights_BANG_.call(null,G__119314_119446));

var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(hl);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var vw_pos = temp__5804__auto__;
return frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),hl,null,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(vw_pos));
} else {
return null;
}
} else {
return null;
}
});
var upd_hl_BANG_ = (function (hl){
var highlights__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var temp__5804__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__119299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__119299_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(highlights__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__119315 = temp__5804__auto__;
var target_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119315,(0),null);
var G__119318_119447 = cljs.core.assoc_in(highlights__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_idx], null),hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__119318_119447) : set_highlights_BANG_.call(null,G__119318_119447));

return frontend.extensions.pdf.assets.update_hl_block_BANG_(hl);
} else {
return null;
}
});
var del_hl_BANG_ = (function (hl){
var temp__5804__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
var G__119319 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__119300_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__119300_SHARP_));
}),highlights));
return (set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__119319) : set_highlights_BANG_.call(null,G__119319));
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(rum.core.deref(_STAR_mounted))){
return (set_dirty_hls_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_dirty_hls_BANG_.cljs$core$IFn$_invoke$arity$1(highlights) : set_dirty_hls_BANG_.call(null,highlights));
} else {
return rum.core.set_ref_BANG_(_STAR_mounted,true);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlights], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var fn_selection_ok = (function (e){
var selection = doc.getSelection();
var sel_range = selection.getRangeAt((0));
if(cljs.core.truth_(selection.isCollapsed)){
var G__119320 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119320) : set_sel_state_BANG_.call(null,G__119320));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = sel_range;
if(cljs.core.truth_(and__5041__auto__)){
return el.contains(sel_range.commonAncestorContainer);
} else {
return and__5041__auto__;
}
})())){
var G__119321 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),false,new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"range","range",1639692286),sel_range,new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null)], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119321) : set_sel_state_BANG_.call(null,G__119321));
} else {
return null;
}
}
});
var fn_selection = (function (){
var _STAR_dirty = cljs.core.volatile_BANG_(false);
var fn_dirty = (function (){
return cljs.core.vreset_BANG_(_STAR_dirty,true);
});
doc.addEventListener("selectionchange",fn_dirty);

return doc.addEventListener("mouseup",(function (e){
var and__5041__auto___119448 = cljs.core.deref(_STAR_dirty);
if(cljs.core.truth_(and__5041__auto___119448)){
fn_selection_ok(e);
} else {
}

return doc.removeEventListener("selectionchange",fn_dirty);
}),({"once": true}));
});
var fn_resize = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.adjust_viewer_size_BANG_,viewer);
if(cljs.core.truth_(el)){
el.addEventListener("mousedown",fn_selection);
} else {
}

if(cljs.core.truth_(win)){
win.addEventListener("resize",fn_resize);
} else {
}

return (function (){
if(cljs.core.truth_(el)){
el.removeEventListener("mousedown",fn_selection);
} else {
}

if(cljs.core.truth_(win)){
return win.removeEventListener("resize",fn_resize);
} else {
return null;
}
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.not(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523).cljs$core$IFn$_invoke$arity$1(sel_state));
if(and__5041__auto__){
return new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var sel_range = temp__5804__auto__;
var point_119449 = new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(sel_state);
var selection_119450 = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(sel_state);
var hl_fn_119451 = (function (){
var temp__5804__auto____$1 = frontend.extensions.pdf.utils.get_page_from_range(sel_range);
if(cljs.core.truth_(temp__5804__auto____$1)){
var page_info = temp__5804__auto____$1;
var temp__5804__auto____$2 = frontend.extensions.pdf.utils.get_range_rects_LT__page_cnt(sel_range,new cljs.core.Keyword(null,"page-el","page-el",-124721580).cljs$core$IFn$_invoke$arity$1(page_info));
if(cljs.core.truth_(temp__5804__auto____$2)){
var sel_rects = temp__5804__auto____$2;
var page = (new cljs.core.Keyword(null,"page-number","page-number",556880104).cljs$core$IFn$_invoke$arity$1(page_info) | (0));
var bounding = frontend.extensions.pdf.utils.get_bounding_rect(sel_rects);
var vw_pos = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),bounding,new cljs.core.Keyword(null,"rects","rects",1714526167),sel_rects,new cljs.core.Keyword(null,"page","page",849072397),page], null);
var sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.extensions.pdf.utils.fix_selection_text_breakline(selection_119450.toString())], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return null;
}
} else {
return null;
}
});
setTimeout((function (){
var G__119322 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl_fn_119451,new cljs.core.Keyword(null,"selection","selection",975998651),selection_119450,new cljs.core.Keyword(null,"point","point",1813198264),point_119449], null);
return (set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ctx_menu_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119322) : set_ctx_menu_state_BANG_.call(null,G__119322));
}));

return (0);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state)], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto___119452 = (function (){var and__5041__auto__ = cljs.core.sequential_QMARK_(highlights);
if(and__5041__auto__){
return cljs.core.group_by(new cljs.core.Keyword(null,"page","page",849072397),highlights);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___119452)){
var grouped_hls_119453 = temp__5804__auto___119452;
var seq__119323_119454 = cljs.core.seq(loaded_pages);
var chunk__119324_119455 = null;
var count__119325_119456 = (0);
var i__119326_119457 = (0);
while(true){
if((i__119326_119457 < count__119325_119456)){
var page_119458 = chunk__119324_119455.cljs$core$IIndexed$_nth$arity$2(null,i__119326_119457);
var temp__5804__auto___119459__$1 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_119458);
if(cljs.core.truth_(temp__5804__auto___119459__$1)){
var hls_layer_119460 = temp__5804__auto___119459__$1;
var page_hls_119461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_119453,page_119458);
rum.core.mount(frontend.extensions.pdf.core.pdf_highlights_region_container(viewer,page_hls_119461,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810),show_ctx_menu_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),hls_layer_119460);
} else {
}


var G__119462 = seq__119323_119454;
var G__119463 = chunk__119324_119455;
var G__119464 = count__119325_119456;
var G__119465 = (i__119326_119457 + (1));
seq__119323_119454 = G__119462;
chunk__119324_119455 = G__119463;
count__119325_119456 = G__119464;
i__119326_119457 = G__119465;
continue;
} else {
var temp__5804__auto___119466__$1 = cljs.core.seq(seq__119323_119454);
if(temp__5804__auto___119466__$1){
var seq__119323_119467__$1 = temp__5804__auto___119466__$1;
if(cljs.core.chunked_seq_QMARK_(seq__119323_119467__$1)){
var c__5565__auto___119468 = cljs.core.chunk_first(seq__119323_119467__$1);
var G__119469 = cljs.core.chunk_rest(seq__119323_119467__$1);
var G__119470 = c__5565__auto___119468;
var G__119471 = cljs.core.count(c__5565__auto___119468);
var G__119472 = (0);
seq__119323_119454 = G__119469;
chunk__119324_119455 = G__119470;
count__119325_119456 = G__119471;
i__119326_119457 = G__119472;
continue;
} else {
var page_119473 = cljs.core.first(seq__119323_119467__$1);
var temp__5804__auto___119474__$2 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_119473);
if(cljs.core.truth_(temp__5804__auto___119474__$2)){
var hls_layer_119475 = temp__5804__auto___119474__$2;
var page_hls_119476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_119453,page_119473);
rum.core.mount(frontend.extensions.pdf.core.pdf_highlights_region_container(viewer,page_hls_119476,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810),show_ctx_menu_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),hls_layer_119475);
} else {
}


var G__119477 = cljs.core.next(seq__119323_119467__$1);
var G__119478 = null;
var G__119479 = (0);
var G__119480 = (0);
seq__119323_119454 = G__119477;
chunk__119324_119455 = G__119478;
count__119325_119456 = G__119479;
i__119326_119457 = G__119480;
continue;
}
} else {
}
}
break;
}
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_pages,highlights], null));

return daiquiri.core.create_element("div",{'className':"extensions__pdf-highlights-cnt"},[(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(ctx_menu_state);
if(cljs.core.truth_(temp__5804__auto__)){
var _hl = temp__5804__auto__;
return ReactDOM.createPortal(frontend.extensions.pdf.core.pdf_highlights_ctx_menu(viewer,ctx_menu_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear-ctx-menu!","clear-ctx-menu!",1081183125),clear_ctx_menu_BANG_,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833),add_hl_BANG_,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207),del_hl_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),el.querySelector(".pp-holder"));
} else {
return null;
}
})(),frontend.extensions.pdf.core.pdf_page_finder(viewer),frontend.extensions.pdf.core.pdf_highlight_area_selection(viewer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear-ctx-menu!","clear-ctx-menu!",1081183125),clear_ctx_menu_BANG_,new cljs.core.Keyword(null,"show-ctx-menu!","show-ctx-menu!",-29500810),show_ctx_menu_BANG_,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833),add_hl_BANG_], null))]);
}),null,"frontend.extensions.pdf.core/pdf-highlights");
frontend.extensions.pdf.core.pdf_viewer = rum.core.lazy_build(rum.core.build_defc,(function (_url,pdf_document,p__119328,ops){
var map__119329 = p__119328;
var map__119329__$1 = cljs.core.__destructure_map(map__119329);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119329__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119329__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var initial_hls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119329__$1,new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820));
var initial_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119329__$1,new cljs.core.Keyword(null,"initial-page","initial-page",1974282031));
var initial_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119329__$1,new cljs.core.Keyword(null,"initial-error","initial-error",-1070014476));
var _STAR_el_ref = rum.core.create_ref();
var vec__119330 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),null,new cljs.core.Keyword(null,"bus","bus",-1090873603),null,new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"el","el",-1618201118),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119330,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119330,(1),null);
var vec__119333 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.PersistentVector.EMPTY], null));
var ano_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119333,(0),null);
var set_ano_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119333,(1),null);
var vec__119336 = rum.core.use_state(false);
var page_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119336,(0),null);
var set_page_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119336,(1),null);
var vec__119339 = frontend.rum.use_atom(frontend.extensions.pdf.toolbar._STAR_area_dashed_QMARK_);
var area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119339,(0),null);
var _set_area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119339,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var event_bus = (new pdfjsViewer.EventBus());
var link_service = (new pdfjsViewer.PDFLinkService(({"eventBus": event_bus, "externalLinkTarget": (2)})));
var el = rum.core.deref(_STAR_el_ref);
var viewer = (new pdfjsViewer.PDFViewer(({"container": el, "eventBus": event_bus, "linkService": link_service, "findController": (new pdfjsViewer.PDFFindController(({"linkService": link_service, "eventBus": event_bus}))), "textLayerMode": (2), "annotationMode": (2), "removePageBorders": true})));
var in_system_win_QMARK_ = cljs.core.boolean$(el.closest(".is-system-window"));
(viewer.$groupIdentity = identity);

(viewer.$inSystemWindow = in_system_win_QMARK_);

link_service.setDocument(pdf_document);

link_service.setViewer(viewer);

var G__119342_119481 = event_bus;
G__119342_119481.on("pagesinit",(function (){
(viewer.currentScaleValue = "auto");

return (set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_page_ready_BANG_.call(null,true));
}));

G__119342_119481.on(cljs.core.name(new cljs.core.Keyword(null,"ls-update-extra-state","ls-update-extra-state",893479284)),(function (p1__119327_SHARP_){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(p1__119327_SHARP_);
if(cljs.core.truth_(temp__5804__auto__)){
var extra = temp__5804__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-hls-extra!","set-hls-extra!",2055356477).cljs$core$IFn$_invoke$arity$1(ops),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [extra], null));
} else {
return null;
}
}));


promesa.core.then.cljs$core$IFn$_invoke$arity$2(viewer.setDocument(pdf_document),(function (){
var G__119343 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer,new cljs.core.Keyword(null,"bus","bus",-1090873603),event_bus,new cljs.core.Keyword(null,"link","link",-1769163468),link_service,new cljs.core.Keyword(null,"el","el",-1618201118),el], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119343) : set_state_BANG_.call(null,G__119343));
}));

(window.lsActivePdfViewer = viewer);

setTimeout((function (){
return (viewer.currentPageNumber = initial_page);
}),(16));

return (function (){
pdf_document.destroy();

(window.lsActivePdfViewer = null);

return viewer.cleanup();
});
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto__)){
var viewer = temp__5804__auto__;
if(cljs.core.truth_(frontend.extensions.pdf.windows.check_viewer_in_system_win_QMARK_(viewer))){
var G__119344 = frontend.extensions.pdf.windows.resolve_own_document(viewer);
if((G__119344 == null)){
return null;
} else {
return (G__119344.title = filename);
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state)], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto__)){
var viewer = temp__5804__auto__;
var fn_textlayer_ready = (function (p){
var G__119345 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state),(p.pageNumber | (0)))], null);
return (set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119345) : set_ano_state_BANG_.call(null,G__119345));
});
var G__119346_119482 = viewer.eventBus;
G__119346_119482.on("textlayerrendered",fn_textlayer_ready);


return (function (){
var G__119347 = viewer.eventBus;
G__119347.off("textlayerrendered",fn_textlayer_ready);

return G__119347;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state)], null));

var viewer = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
var in_system_window_QMARK_ = (function (){var G__119348 = viewer;
if((G__119348 == null)){
return null;
} else {
return G__119348.$inSystemWindow;
}
})();
return daiquiri.core.create_element("div",{'className':"extensions__pdf-viewer-cnt visible-scrollbar"},[daiquiri.core.create_element("div",{'ref':_STAR_el_ref,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-viewer","overflow-x-auto",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-area-dashed","is-area-dashed",510137497),area_dashed_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"pdfViewer"},["viewer pdf"]),daiquiri.core.create_element("div",{'className':"pp-holder"},null),frontend.extensions.pdf.core.pdf_highlight_finder(viewer),(cljs.core.truth_((function (){var and__5041__auto__ = page_ready_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = viewer;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(initial_error);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.extensions.pdf.core.pdf_highlights(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(state),viewer,initial_hls,new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state),ops),"pdf-highlights")], null)):null)]),(cljs.core.truth_((function (){var and__5041__auto__ = page_ready_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return viewer;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(in_system_window_QMARK_)?null:rum.core.with_key(frontend.extensions.pdf.core.pdf_resizer(viewer),"pdf-resizer")),rum.core.with_key(frontend.extensions.pdf.toolbar.pdf_toolbar(viewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-external-window!","on-external-window!",244908467),(function (){
return frontend.extensions.pdf.core.open_external_win_BANG_(frontend.state.get_current_pdf());
})], null)),"pdf-toolbar")], null)):null)]);
}),null,"frontend.extensions.pdf.core/pdf-viewer");
frontend.extensions.pdf.core.pdf_password_input = rum.core.lazy_build(rum.core.build_defcs,(function (state,confirm_fn){
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.pdf.core","password","frontend.extensions.pdf.core/password",-195127968));
return daiquiri.core.create_element("div",{'className':"container"},[daiquiri.core.create_element("div",{'className':"text-lg mb-4"},["Password required"]),daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"leading-6 font-medium"},["This document is password protected. Please enter a password:"])])]),daiquiri.core.create_element("input",{'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(password,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2 mb-4"},[]),(function (){var attrs119357 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var password__$1 = cljs.core.deref(password);
return (confirm_fn.cljs$core$IFn$_invoke$arity$1 ? confirm_fn.cljs$core$IFn$_invoke$arity$1(password__$1) : confirm_fn.call(null,password__$1));
})], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119357))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-5","sm:mt-4","flex"], null)], null),attrs119357], 0))):{'className':"mt-5 sm:mt-4 flex"}),((cljs.core.map_QMARK_(attrs119357))?null:[daiquiri.interpreter.interpret(attrs119357)]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.extensions.pdf.core","password","frontend.extensions.pdf.core/password",-195127968))], null),"frontend.extensions.pdf.core/pdf-password-input");
frontend.extensions.pdf.core.pdf_loader = rum.core.lazy_build(rum.core.build_defc,(function (p__119361){
var map__119362 = p__119361;
var map__119362__$1 = cljs.core.__destructure_map(map__119362);
var pdf_current = map__119362__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119362__$1,new cljs.core.Keyword(null,"url","url",276297046));
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119362__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119362__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119362__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var _STAR_doc_ref = rum.core.use_ref(null);
var vec__119363 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),null,new cljs.core.Keyword(null,"status","status",-1997798413),null], null));
var loader_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119363,(0),null);
var set_loader_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119363,(1),null);
var vec__119366 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),null,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
var hls_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119366,(0),null);
var set_hls_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119366,(1),null);
var vec__119369 = rum.core.use_state(null);
var doc_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119369,(0),null);
var set_doc_password_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119369,(1),null);
var vec__119372 = rum.core.use_state((1));
var initial_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119372,(0),null);
var set_initial_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119372,(1),null);
var set_dirty_hls_BANG_ = (function (latest_hls){
var G__119375 = (function (p1__119358_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__119358_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),latest_hls], null)], 0));
});
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119375) : set_hls_state_BANG_.call(null,G__119375));
});
var set_hls_extra_BANG_ = (function (extra){
var G__119376 = (function (p1__119359_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__119359_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra","extra",1612569067),extra], null)], 0));
});
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119376) : set_hls_state_BANG_.call(null,G__119376));
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(pdf_current)){
return frontend.extensions.pdf.assets.ensure_ref_page_BANG_(pdf_current);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_current], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.load_hls_data$(pdf_current),(function (data){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(data,(function (p__119377){
var map__119378 = p__119377;
var map__119378__$1 = cljs.core.__destructure_map(map__119378);
var highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119378__$1,new cljs.core.Keyword(null,"highlights","highlights",945143465));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119378__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
return promesa.protocols._promise((function (){
var G__119379_119483 = (function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(extra);
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
return frontend.util.safe_parse_int(page);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})();
(set_initial_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_initial_page_BANG_.cljs$core$IFn$_invoke$arity$1(G__119379_119483) : set_initial_page_BANG_.call(null,G__119379_119483));

var G__119380 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),highlights,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),highlights,new cljs.core.Keyword(null,"extra","extra",1612569067),extra,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119380) : set_hls_state_BANG_.call(null,G__119380));
})()
);
}));
}));
})),(function (e){
console.error("[load hls error]",e);

var msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Error: failed to load the highlights file: \"%s\". \n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hls-file","hls-file",192681120).cljs$core$IFn$_invoke$arity$1(pdf_current)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.Keyword(null,"error","error",-978969032));

var G__119381 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true,new cljs.core.Keyword(null,"error","error",-978969032),e], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119381) : set_hls_state_BANG_.call(null,G__119381));
}));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hls_file], null));

var persist_hls_data_BANG__119484 = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2(frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((4000),(function (latest_hls,extra){
return frontend.extensions.pdf.assets.persist_hls_data$(pdf_current,latest_hls,extra);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_current], null));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(loader_state))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(hls_state))?null:promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.protocols._promise((function (){var G__119382 = new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948).cljs$core$IFn$_invoke$arity$1(hls_state);
var G__119383 = new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(hls_state);
return (persist_hls_data_BANG__119484.cljs$core$IFn$_invoke$arity$2 ? persist_hls_data_BANG__119484.cljs$core$IFn$_invoke$arity$2(G__119382,G__119383) : persist_hls_data_BANG__119484.call(null,G__119382,G__119383));
})());
}))),(function (e){
return console.error("[write hls error]",e);
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948).cljs$core$IFn$_invoke$arity$1(hls_state),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(hls_state)], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var loader_el = rum.core.deref(_STAR_doc_ref);
var get_doc$ = (function (opts){
return pdfjsLib.getDocument(opts).promise;
});
var opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"password","password",417022471),(function (){var or__5043__auto__ = doc_password;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"ownerDocument","ownerDocument",1761316797),loader_el.ownerDocument,new cljs.core.Keyword(null,"cMapUrl","cMapUrl",-2054175479),"./js/pdfjs/cmaps/",new cljs.core.Keyword(null,"cMapPacked","cMapPacked",377437190),true], null);
var G__119384_119485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
(set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119384_119485) : set_loader_state_BANG_.call(null,G__119384_119485));

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(get_doc$(cljs.core.clj__GT_js(opts)),(function (doc){
var G__119385 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),doc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null);
return (set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119385) : set_loader_state_BANG_.call(null,G__119385));
})),(function (p1__119360_SHARP_){
var G__119386 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__119360_SHARP_], null);
return (set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119386) : set_loader_state_BANG_.call(null,G__119386));
}));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,doc_password], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(loader_state);
if(cljs.core.truth_(temp__5804__auto__)){
var error = temp__5804__auto__;
console.error("[PDF loader]",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(loader_state));

var G__119387 = error.name;
switch (G__119387) {
case "MissingPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message),"\n Is this the correct path?"].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
case "InvalidPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message),"\n","Is this .pdf file corrupted?\n","Please confirm with external pdf viewer."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
case "PasswordException":
var G__119388_119487 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null);
(set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_loader_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119388_119487) : set_loader_state_BANG_.call(null,G__119388_119487));

return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (close_fn){
var on_password_fn = (function (password){
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return (set_doc_password_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_doc_password_BANG_.cljs$core$IFn$_invoke$arity$1(password) : set_doc_password_BANG_.call(null,password));
});
return frontend.extensions.pdf.core.pdf_password_input(on_password_fn);
}));

break;
default:
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.name),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message),"\n","Please confirm with pdf file resource."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(loader_state)], null));

return React.createElement(frontend.extensions.pdf.toolbar._STAR_highlights_ctx_STAR_.Provider,(function (){var obj119393 = ({"value":hls_state});
return obj119393;
})(),daiquiri.core.create_element("div",{'ref':_STAR_doc_ref,'className':"extensions__pdf-loader"},[(function (){var status_doc = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(loader_state);
var initial_hls = new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820).cljs$core$IFn$_invoke$arity$1(hls_state);
var initial_error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(hls_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status_doc,new cljs.core.Keyword(null,"loading","loading",-737050189))){
var attrs119394 = frontend.components.svg.loading;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119394))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","items-center","h-screen","text-gray-500","text-lg"], null)], null),attrs119394], 0))):{'className':"flex justify-center items-center h-screen text-gray-500 text-lg"}),((cljs.core.map_QMARK_(attrs119394))?null:[daiquiri.interpreter.interpret(attrs119394)]));
} else {
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(hls_state);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968).cljs$core$IFn$_invoke$arity$1(loader_state);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pdf_document = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.extensions.pdf.core.pdf_viewer(url,pdf_document,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"identity","identity",1647396035),identity,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),initial_hls,new cljs.core.Keyword(null,"initial-page","initial-page",1974282031),initial_page,new cljs.core.Keyword(null,"initial-error","initial-error",-1070014476),initial_error], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512),set_dirty_hls_BANG_,new cljs.core.Keyword(null,"set-hls-extra!","set-hls-extra!",2055356477),set_hls_extra_BANG_], null)),"pdf-viewer")], null);
} else {
return null;
}
})());
}
})()]));
}),null,"frontend.extensions.pdf.core/pdf-loader");
frontend.extensions.pdf.core.pdf_container_outer = rum.core.lazy_build(rum.core.build_defc,(function (child){
var attrs119395 = child;
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs119395))?daiquiri.interpreter.element_attributes(attrs119395):null),((cljs.core.map_QMARK_(attrs119395))?null:[daiquiri.interpreter.interpret(attrs119395)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shortcut.handler","pdf","shortcut.handler/pdf",468089398),false)], null),"frontend.extensions.pdf.core/pdf-container-outer");
frontend.extensions.pdf.core.pdf_container = rum.core.lazy_build(rum.core.build_defc,(function (p__119396){
var map__119397 = p__119396;
var map__119397__$1 = cljs.core.__destructure_map(map__119397);
var pdf_current = map__119397__$1;
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119397__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var vec__119398 = rum.core.use_state(false);
var prepared = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119398,(0),null);
var set_prepared_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119398,(1),null);
var vec__119401 = rum.core.use_state(false);
var ready = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119401,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119401,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.load_base_assets$(),(function (){
return (set_prepared_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prepared_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_prepared_BANG_.call(null,true));
}));
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
setTimeout((function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}),(100));

return (function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_ready_BANG_.call(null,false));
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity], null));

return daiquiri.core.create_element("div",{'id':["pdf-layout-container_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(identity)].join(''),'className':"extensions__pdf-container"},[(cljs.core.truth_((function (){var and__5041__auto__ = prepared;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = identity;
if(cljs.core.truth_(and__5041__auto____$1)){
return ready;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.extensions.pdf.core.pdf_loader(pdf_current):null)]);
}),null,"frontend.extensions.pdf.core/pdf-container");
frontend.extensions.pdf.core.playground_effects = rum.core.lazy_build(rum.core.build_defc,(function (active){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var flg = "is-pdf-active";
var cls = document.body.classList;
var and__5041__auto___119488 = active;
if(cljs.core.truth_(and__5041__auto___119488)){
cls.add(flg);
} else {
}

return (function (){
return cls.remove(flg);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active], null));

return null;
}),null,"frontend.extensions.pdf.core/playground-effects");
frontend.extensions.pdf.core.default_embed_playground = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var pdf_current = frontend.state.sub(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477));
var system_win_QMARK_ = frontend.state.sub(new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550));
return daiquiri.core.create_element("div",{'className':"extensions__pdf-playground"},[frontend.extensions.pdf.core.playground_effects(((cljs.core.not(system_win_QMARK_)) && ((!((pdf_current == null)))))),(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(system_win_QMARK_);
if(and__5041__auto__){
return pdf_current;
} else {
return and__5041__auto__;
}
})())?ReactDOM.createPortal(frontend.extensions.pdf.core.pdf_container_outer(frontend.extensions.pdf.core.pdf_container(pdf_current)),document.querySelector("#app-single-container")):null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"frontend.extensions.pdf.core/default-embed-playground");
frontend.extensions.pdf.core.system_embed_playground = rum.core.lazy_build(rum.core.build_defcs,(function (){
var pdf_current = frontend.state.sub(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477));
return frontend.extensions.pdf.core.pdf_container(pdf_current);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.pdf.core/system-embed-playground");

//# sourceMappingURL=frontend.extensions.pdf.core.js.map
