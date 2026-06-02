goog.provide('frontend.extensions.pdf.utils');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.MAX_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.MAX_SCALE = 5.0;
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.MIN_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.MIN_SCALE = 0.25;
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.DELTA_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.DELTA_SCALE = 1.05;
}
frontend.extensions.pdf.utils.hls_file_QMARK_ = (function frontend$extensions$pdf$utils$hls_file_QMARK_(filename){
var and__5041__auto__ = filename;
if(cljs.core.truth_(and__5041__auto__)){
return ((typeof filename === 'string') && (clojure.string.starts_with_QMARK_(filename,"hls__")));
} else {
return and__5041__auto__;
}
});
frontend.extensions.pdf.utils.get_area_block_asset_url = logseq.publishing.db.get_area_block_asset_url;
frontend.extensions.pdf.utils.get_bounding_rect = (function frontend$extensions$pdf$utils$get_bounding_rect(rects){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.getBoundingRect(cljs_bean.core.__GT_js(rects)));
});
frontend.extensions.pdf.utils.viewport_to_scaled = (function frontend$extensions$pdf$utils$viewport_to_scaled(bounding,viewport){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.viewportToScaled(cljs_bean.core.__GT_js(bounding),viewport));
});
frontend.extensions.pdf.utils.scaled_to_viewport = (function frontend$extensions$pdf$utils$scaled_to_viewport(bounding,viewport){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.scaledToViewport(cljs_bean.core.__GT_js(bounding),viewport));
});
frontend.extensions.pdf.utils.optimize_client_reacts = (function frontend$extensions$pdf$utils$optimize_client_reacts(rects){
if(cljs.core.seq(rects)){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.optimizeClientRects(cljs_bean.core.__GT_js(rects)));
} else {
return null;
}
});
frontend.extensions.pdf.utils.vw_to_scaled_pos = (function frontend$extensions$pdf$utils$vw_to_scaled_pos(viewer,p__102402){
var map__102403 = p__102402;
var map__102403__$1 = cljs.core.__destructure_map(map__102403);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102403__$1,new cljs.core.Keyword(null,"page","page",849072397));
var bounding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102403__$1,new cljs.core.Keyword(null,"bounding","bounding",-2125178263));
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102403__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var temp__5804__auto__ = viewer.getPageView((page - (1))).viewport;
if(cljs.core.truth_(temp__5804__auto__)){
var viewport = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),frontend.extensions.pdf.utils.viewport_to_scaled(bounding,viewport),new cljs.core.Keyword(null,"rects","rects",1714526167),(function (){var iter__5520__auto__ = (function frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__102404(s__102405){
return (new cljs.core.LazySeq(null,(function (){
var s__102405__$1 = s__102405;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__102405__$1);
if(temp__5804__auto____$1){
var s__102405__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__102405__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102405__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102407 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102406 = (0);
while(true){
if((i__102406 < size__5519__auto__)){
var rect = cljs.core._nth(c__5518__auto__,i__102406);
cljs.core.chunk_append(b__102407,frontend.extensions.pdf.utils.viewport_to_scaled(rect,viewport));

var G__102423 = (i__102406 + (1));
i__102406 = G__102423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102407),frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__102404(cljs.core.chunk_rest(s__102405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102407),null);
}
} else {
var rect = cljs.core.first(s__102405__$2);
return cljs.core.cons(frontend.extensions.pdf.utils.viewport_to_scaled(rect,viewport),frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__102404(cljs.core.rest(s__102405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rects);
})(),new cljs.core.Keyword(null,"page","page",849072397),page], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.scaled_to_vw_pos = (function frontend$extensions$pdf$utils$scaled_to_vw_pos(viewer,p__102408){
var map__102409 = p__102408;
var map__102409__$1 = cljs.core.__destructure_map(map__102409);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102409__$1,new cljs.core.Keyword(null,"page","page",849072397));
var bounding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102409__$1,new cljs.core.Keyword(null,"bounding","bounding",-2125178263));
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102409__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var temp__5804__auto__ = viewer.getPageView((page - (1))).viewport;
if(cljs.core.truth_(temp__5804__auto__)){
var viewport = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),frontend.extensions.pdf.utils.scaled_to_viewport(bounding,viewport),new cljs.core.Keyword(null,"rects","rects",1714526167),(function (){var iter__5520__auto__ = (function frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__102410(s__102411){
return (new cljs.core.LazySeq(null,(function (){
var s__102411__$1 = s__102411;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__102411__$1);
if(temp__5804__auto____$1){
var s__102411__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__102411__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102411__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102413 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102412 = (0);
while(true){
if((i__102412 < size__5519__auto__)){
var rect = cljs.core._nth(c__5518__auto__,i__102412);
cljs.core.chunk_append(b__102413,frontend.extensions.pdf.utils.scaled_to_viewport(rect,viewport));

var G__102424 = (i__102412 + (1));
i__102412 = G__102424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102413),frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__102410(cljs.core.chunk_rest(s__102411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102413),null);
}
} else {
var rect = cljs.core.first(s__102411__$2);
return cljs.core.cons(frontend.extensions.pdf.utils.scaled_to_viewport(rect,viewport),frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__102410(cljs.core.rest(s__102411__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rects);
})(),new cljs.core.Keyword(null,"page","page",849072397),page], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_page_bounding = (function frontend$extensions$pdf$utils$get_page_bounding(viewer,page_number){
var temp__5804__auto__ = (function (){var and__5041__auto__ = page_number;
if(cljs.core.truth_(and__5041__auto__)){
return viewer.getPageView((page_number - (1))).div;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return cljs_bean.core.__GT_clj(el.getBoundingClientRect().toJSON());
} else {
return null;
}
});
frontend.extensions.pdf.utils.resolve_hls_layer_BANG_ = (function frontend$extensions$pdf$utils$resolve_hls_layer_BANG_(viewer,page){
var temp__5804__auto__ = viewer.getPageView((page - (1))).textLayer;
if(cljs.core.truth_(temp__5804__auto__)){
var text_layer = temp__5804__auto__;
var cnt = text_layer.div;
var cls = "extensions__pdf-hls-layer";
var doc = document;
var layer = cnt.querySelector([".",cls].join(''));
if(cljs.core.not(layer)){
var layer__$1 = doc.createElement("div");
(layer__$1.className = cls);

cnt.appendChild(layer__$1);

return layer__$1;
} else {
return layer;
}
} else {
return null;
}
});
frontend.extensions.pdf.utils.scroll_to_highlight = (function frontend$extensions$pdf$utils$scroll_to_highlight(viewer,hl){
var temp__5804__auto__ = cljs_bean.core.__GT_js(hl);
if(cljs.core.truth_(temp__5804__auto__)){
var js_hl = temp__5804__auto__;
return module$frontend$extensions$pdf$utils.scrollToHighlight(viewer,js_hl);
} else {
return null;
}
});
frontend.extensions.pdf.utils.zoom_in_viewer = (function frontend$extensions$pdf$utils$zoom_in_viewer(viewer){
var cur_scale = viewer.currentScale;
if((cur_scale < frontend.extensions.pdf.utils.MAX_SCALE)){
var new_scale = (cur_scale * frontend.extensions.pdf.utils.DELTA_SCALE).toFixed((2));
var new_scale__$1 = (Math.ceil((new_scale * (10))) / (10));
var new_scale__$2 = (function (){var x__5131__auto__ = frontend.extensions.pdf.utils.MAX_SCALE;
var y__5132__auto__ = new_scale__$1;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
return (viewer.currentScale = new_scale__$2);
} else {
return null;
}
});
frontend.extensions.pdf.utils.zoom_out_viewer = (function frontend$extensions$pdf$utils$zoom_out_viewer(viewer){
var cur_scale = viewer.currentScale;
if((cur_scale > frontend.extensions.pdf.utils.MIN_SCALE)){
var new_scale = (cur_scale / frontend.extensions.pdf.utils.DELTA_SCALE).toFixed((2));
var new_scale__$1 = (Math.floor((new_scale * (10))) / (10));
var new_scale__$2 = (function (){var x__5128__auto__ = frontend.extensions.pdf.utils.MIN_SCALE;
var y__5129__auto__ = new_scale__$1;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
return (viewer.currentScale = new_scale__$2);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_meta_data$ = (function frontend$extensions$pdf$utils$get_meta_data$(viewer){
var temp__5804__auto__ = (function (){var and__5041__auto__ = viewer;
if(cljs.core.truth_(and__5041__auto__)){
return viewer.pdfDocument;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var doc = temp__5804__auto__;
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(doc.getMetadata(),(function (r){
console.debug("[metadata] ",r);

var temp__5804__auto____$1 = (function (){var and__5041__auto__ = r;
if(cljs.core.truth_(and__5041__auto__)){
return r.info;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var info = temp__5804__auto____$1;
var G__102414 = cljs_bean.core.__GT_clj(info);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__102414) : resolve.call(null,G__102414));
} else {
return null;
}
})),(function (e){
(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));

return console.error(e);
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.utils.clear_all_selection = (function frontend$extensions$pdf$utils$clear_all_selection(){
return window.getSelection().removeAllRanges();
});
frontend.extensions.pdf.utils.adjust_viewer_size_BANG_ = frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((200),(function (viewer){
return (viewer.currentScaleValue = "auto");
}));
frontend.extensions.pdf.utils.fix_nested_js = (function frontend$extensions$pdf$utils$fix_nested_js(its){
if(cljs.core.sequential_QMARK_(its)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__102415_SHARP_){
if(cljs.core.map_QMARK_(p1__102415_SHARP_)){
return p1__102415_SHARP_;
} else {
return cljs_bean.core.__GT_clj(p1__102415_SHARP_);
}
}),its);
} else {
return null;
}
});
frontend.extensions.pdf.utils.gen_uuid = (function frontend$extensions$pdf$utils$gen_uuid(){
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
});
frontend.extensions.pdf.utils.load_base_assets$ = (function frontend$extensions$pdf$utils$load_base_assets$(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.js_load$([frontend.util.JS_ROOT,"/pdfjs/pdf.js"].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.js_load$([frontend.util.JS_ROOT,"/pdfjs/pdf_viewer.js"].join('')),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
});
frontend.extensions.pdf.utils.get_page_from_el = (function frontend$extensions$pdf$utils$get_page_from_el(el){
var temp__5804__auto__ = (function (){var and__5041__auto__ = el;
if(cljs.core.truth_(and__5041__auto__)){
return el.closest(".page");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_el = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-number","page-number",556880104),page_el.dataset.pageNumber,new cljs.core.Keyword(null,"page-el","page-el",-124721580),page_el], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_page_from_range = (function frontend$extensions$pdf$utils$get_page_from_range(r){
var temp__5804__auto__ = (function (){var and__5041__auto__ = r;
if(cljs.core.truth_(and__5041__auto__)){
return r.startContainer.parentElement;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var parent_el = temp__5804__auto__;
return frontend.extensions.pdf.utils.get_page_from_el(parent_el);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_range_rects_LT__page_cnt = (function frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt(r,page_cnt){
var rge_rects = cljs_bean.core.__GT_clj(r.getClientRects());
var cnt_offset = page_cnt.getBoundingClientRect();
if(cljs.core.seq(rge_rects)){
var rects = (function (){var iter__5520__auto__ = (function frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__102416(s__102417){
return (new cljs.core.LazySeq(null,(function (){
var s__102417__$1 = s__102417;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__102417__$1);
if(temp__5804__auto__){
var s__102417__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102417__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102417__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102419 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102418 = (0);
while(true){
if((i__102418 < size__5519__auto__)){
var rect = cljs.core._nth(c__5518__auto__,i__102418);
if(cljs.core.truth_((function (){var and__5041__auto__ = rect;
if(cljs.core.truth_(and__5041__auto__)){
return (((!((rect.width === (0))))) && ((!((rect.height === (0))))));
} else {
return and__5041__auto__;
}
})())){
cljs.core.chunk_append(b__102419,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((rect.top + page_cnt.scrollTop) - cnt_offset.top),new cljs.core.Keyword(null,"left","left",-399115937),((rect.left + page_cnt.scrollLeft) - cnt_offset.left),new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null));

var G__102425 = (i__102418 + (1));
i__102418 = G__102425;
continue;
} else {
var G__102426 = (i__102418 + (1));
i__102418 = G__102426;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102419),frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__102416(cljs.core.chunk_rest(s__102417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102419),null);
}
} else {
var rect = cljs.core.first(s__102417__$2);
if(cljs.core.truth_((function (){var and__5041__auto__ = rect;
if(cljs.core.truth_(and__5041__auto__)){
return (((!((rect.width === (0))))) && ((!((rect.height === (0))))));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((rect.top + page_cnt.scrollTop) - cnt_offset.top),new cljs.core.Keyword(null,"left","left",-399115937),((rect.left + page_cnt.scrollLeft) - cnt_offset.left),new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null),frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__102416(cljs.core.rest(s__102417__$2)));
} else {
var G__102427 = cljs.core.rest(s__102417__$2);
s__102417__$1 = G__102427;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rge_rects);
})();
return frontend.extensions.pdf.utils.optimize_client_reacts(rects);
} else {
return null;
}
});
frontend.extensions.pdf.utils.fix_selection_text_breakline = (function frontend$extensions$pdf$utils$fix_selection_text_breakline(text){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
var sp = "|#|";
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/[\r\n]+/,sp),["-",sp].join(''),""),/\|#\|([a-zA-Z_])/," $1"),sp,"");
}
});
frontend.extensions.pdf.utils.fix_local_asset_pagename = (function frontend$extensions$pdf$utils$fix_local_asset_pagename(filename){
if(clojure.string.blank_QMARK_(filename)){
return null;
} else {
var local_asset_QMARK_ = cljs.core.re_find(/[0-9]{13}_\d$/,filename);
var hls_QMARK_ = frontend.extensions.pdf.utils.hls_file_QMARK_(filename);
var len = cljs.core.count(filename);
if(cljs.core.truth_((function (){var or__5043__auto__ = local_asset_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return hls_QMARK_;
}
})())){
return clojure.string.trimr(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(cljs.core.truth_(local_asset_QMARK_)?(len - (15)):len)),/^hls__/,""),/__[-\d]+$/,""),"_"," "));
} else {
return filename;
}
}
});
frontend.extensions.pdf.utils.next_page = (function frontend$extensions$pdf$utils$next_page(){
try{return cljs.core.js_invoke(window.lsActivePdfViewer,"nextPage");
}catch (e102420){var _e = e102420;
return null;
}});
frontend.extensions.pdf.utils.prev_page = (function frontend$extensions$pdf$utils$prev_page(){
try{return cljs.core.js_invoke(window.lsActivePdfViewer,"previousPage");
}catch (e102421){var _e = e102421;
return null;
}});
frontend.extensions.pdf.utils.open_finder = (function frontend$extensions$pdf$utils$open_finder(){
try{var temp__5804__auto__ = document.querySelector(".extensions__pdf-toolbar a[title=Search]");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return el.click();
} else {
return null;
}
}catch (e102422){if((e102422 instanceof Error)){
var _e = e102422;
return null;
} else {
throw e102422;

}
}});

//# sourceMappingURL=frontend.extensions.pdf.utils.js.map
