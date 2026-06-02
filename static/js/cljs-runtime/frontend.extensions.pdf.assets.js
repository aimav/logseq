goog.provide('frontend.extensions.pdf.assets');
frontend.extensions.pdf.assets.inflate_asset = (function frontend$extensions$pdf$assets$inflate_asset(original_path){
var filename = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(original_path) : frontend.util.node_path.basename.call(null,original_path));
var web_link_QMARK_ = clojure.string.starts_with_QMARK_(original_path,"http");
var ext_name = frontend.util.get_file_ext(filename);
var url = frontend.handler.assets.normalize_asset_resource_url(original_path);
var filekey = frontend.util.safe_sanitize_file_name(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(cljs.core.count(filename) - (cljs.core.count(ext_name) + (1)))));
var temp__5804__auto__ = (function (){var and__5041__auto__ = (!(clojure.string.blank_QMARK_(filekey)));
if(and__5041__auto__){
if(web_link_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(filekey),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(url))].join('');
} else {
return filekey;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var key = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(key,(cljs.core.count(key) - (15))),new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"hls-file","hls-file",192681120),["assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),".edn"].join(''),new cljs.core.Keyword(null,"original-path","original-path",538600599),original_path], null);
} else {
return null;
}
});
frontend.extensions.pdf.assets.resolve_area_image_file = (function frontend$extensions$pdf$assets$resolve_area_image_file(img_stamp,current,p__111251){
var map__111252 = p__111251;
var map__111252__$1 = cljs.core.__destructure_map(map__111252);
var _hl = map__111252__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111252__$1,new cljs.core.Keyword(null,"page","page",849072397));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111252__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5804__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(temp__5804__auto__)){
var key = temp__5804__auto__;
return [[logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s_%s_%s.png",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page,id,img_stamp], 0)))].join('');
} else {
return null;
}
});
frontend.extensions.pdf.assets.load_hls_data$ = (function frontend$extensions$pdf$assets$load_hls_data$(p__111253){
var map__111254 = p__111253;
var map__111254__$1 = cljs.core.__destructure_map(map__111254);
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111254__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
if(cljs.core.truth_(hls_file)){
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_cur,repo_dir,hls_file,"{:highlights []}"),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,hls_file),(function (res){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(res)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(res):cljs.core.PersistentArrayMap.EMPTY),(function (data){
return promesa.protocols._promise(data);
}));
}));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.persist_hls_data$ = (function frontend$extensions$pdf$assets$persist_hls_data$(p__111255,highlights,extra){
var map__111256 = p__111255;
var map__111256__$1 = cljs.core.__destructure_map(map__111256);
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111256__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
if(cljs.core.truth_(hls_file)){
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
var data = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__111257_111314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__111258_111315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__111259_111316 = true;
var _STAR_print_fn_STAR__temp_val__111260_111317 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__111259_111316);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__111260_111317);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"highlights","highlights",945143465),highlights,new cljs.core.Keyword(null,"extra","extra",1612569067),extra], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__111258_111315);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__111257_111314);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return frontend.fs.write_file_BANG_(repo_cur,repo_dir,hls_file,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
return null;
}
});
frontend.extensions.pdf.assets.resolve_hls_data_by_key$ = (function frontend$extensions$pdf$assets$resolve_hls_data_by_key$(target_key){
var temp__5804__auto__ = (function (){var and__5041__auto__ = target_key;
if(cljs.core.truth_(and__5041__auto__)){
return [logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_key),".edn"].join('');
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var hls_file = temp__5804__auto__;
return frontend.extensions.pdf.assets.load_hls_data$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hls-file","hls-file",192681120),hls_file], null));
} else {
return null;
}
});
frontend.extensions.pdf.assets.area_highlight_QMARK_ = (function frontend$extensions$pdf$assets$area_highlight_QMARK_(hl){
var and__5041__auto__ = hl;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)) == null)));
} else {
return and__5041__auto__;
}
});
/**
 * Save pdf highlight area image
 */
frontend.extensions.pdf.assets.persist_hl_area_image$ = (function frontend$extensions$pdf$assets$persist_hl_area_image$(viewer,current,new_hl,old_hl,p__111261){
var map__111262 = p__111261;
var map__111262__$1 = cljs.core.__destructure_map(map__111262);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111262__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111262__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111262__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111262__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var temp__5804__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(and__5041__auto__)){
return viewer.getPageView((new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(new_hl) - (1))).canvas;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var canvas = temp__5804__auto__;
var doc = canvas.ownerDocument;
var canvas_SINGLEQUOTE_ = doc.createElement("canvas");
var dpr = window.devicePixelRatio;
var repo_url = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_url);
var dw = (dpr * width);
var dh = (dpr * height);
(canvas_SINGLEQUOTE_.width = dw);

(canvas_SINGLEQUOTE_.height = dh);

var temp__5804__auto____$1 = canvas_SINGLEQUOTE_.getContext("2d",({"alpha": false}));
if(cljs.core.truth_(temp__5804__auto____$1)){
var ctx = temp__5804__auto____$1;
(ctx.imageSmoothingEnabled = false);

ctx.drawImage(canvas,(left * dpr),(top * dpr),(width * dpr),(height * dpr),(0),(0),dw,dh);

var callback = (function (png){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(console.time(new cljs.core.Keyword(null,"write-area-image","write-area-image",-1753983626)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(png.arrayBuffer(),(function (png__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(current,(function (p__111271){
var map__111272 = p__111271;
var map__111272__$1 = cljs.core.__destructure_map(map__111272);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111272__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)),(function (fstamp){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = old_hl;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null));
} else {
return and__5041__auto__;
}
})(),(function (old_fstamp){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(new_hl)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_hl))].join(''),(function (fname){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),(function (fdir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fdir], 0))),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstamp),".png"].join(''),(function (new_fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = old_fstamp;
if(cljs.core.truth_(and__5041__auto__)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_fstamp),".png"].join('');
} else {
return and__5041__auto__;
}
})(),(function (old_fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = old_fpath;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.fs.rename_BANG_(repo_url,old_fpath,new_fpath);
} else {
return and__5041__auto__;
}
})(),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo_url,repo_dir,new_fpath,png__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (___$3){
return promesa.protocols._promise(console.timeEnd(new cljs.core.Keyword(null,"write-area-image","write-area-image",-1753983626)));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (err){
return console.error("[write area image Error]",err);
}));
});
return canvas_SINGLEQUOTE_.toBlob(callback);
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.pdf.assets.update_hl_block_BANG_ = (function frontend$extensions$pdf$assets$update_hl_block_BANG_(highlight){
var temp__5804__auto__ = frontend.db.model.get_block_by_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var seq__111273 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),(cljs.core.truth_(frontend.extensions.pdf.assets.area_highlight_QMARK_(highlight))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(highlight,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)):Date.now()),new cljs.core.Keyword(null,"hl-color","hl-color",1100781725),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(highlight,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"color","color",1011675173)], null))], null));
var chunk__111274 = null;
var count__111275 = (0);
var i__111276 = (0);
while(true){
if((i__111276 < count__111275)){
var vec__111283 = chunk__111274.cljs$core$IIndexed$_nth$arity$2(null,i__111276);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111283,(1),null);
frontend.handler.editor.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),k,v);


var G__111318 = seq__111273;
var G__111319 = chunk__111274;
var G__111320 = count__111275;
var G__111321 = (i__111276 + (1));
seq__111273 = G__111318;
chunk__111274 = G__111319;
count__111275 = G__111320;
i__111276 = G__111321;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__111273);
if(temp__5804__auto____$1){
var seq__111273__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__111273__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__111273__$1);
var G__111322 = cljs.core.chunk_rest(seq__111273__$1);
var G__111323 = c__5565__auto__;
var G__111324 = cljs.core.count(c__5565__auto__);
var G__111325 = (0);
seq__111273 = G__111322;
chunk__111274 = G__111323;
count__111275 = G__111324;
i__111276 = G__111325;
continue;
} else {
var vec__111286 = cljs.core.first(seq__111273__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111286,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111286,(1),null);
frontend.handler.editor.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),k,v);


var G__111326 = cljs.core.next(seq__111273__$1);
var G__111327 = null;
var G__111328 = (0);
var G__111329 = (0);
seq__111273 = G__111326;
chunk__111274 = G__111327;
count__111275 = G__111328;
i__111276 = G__111329;
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
frontend.extensions.pdf.assets.unlink_hl_area_image$ = (function frontend$extensions$pdf$assets$unlink_hl_area_image$(_viewer,current,hl){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(hl);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var fkey = temp__5804__auto__;
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
var fstamp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null));
var fname = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(hl)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl))].join('');
var fdir = [logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)].join('');
var fpath = (function (){var G__111289 = repo_dir;
var G__111290 = [fdir,"/",fname,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstamp),".png"].join('');
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__111289,G__111290) : frontend.util.node_path.join.call(null,G__111289,G__111290));
})();
return frontend.fs.unlink_BANG_(repo_cur,fpath,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.extensions.pdf.assets.ensure_ref_page_BANG_ = (function frontend$extensions$pdf$assets$ensure_ref_page_BANG_(pdf_current){
var temp__5804__auto__ = frontend.util.trim_safe(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(pdf_current));
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
var page_name__$1 = ["hls__",page_name].join('');
var page = frontend.db.model.get_page(page_name__$1);
var file_path = new cljs.core.Keyword(null,"original-path","original-path",538600599).cljs$core$IFn$_invoke$arity$1(pdf_current);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var asset_dir = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(repo_dir,logseq.graph_parser.config.local_assets_dir) : frontend.util.node_path.join.call(null,repo_dir,logseq.graph_parser.config.local_assets_dir));
var url = ((clojure.string.includes_QMARK_(file_path,asset_dir))?["..",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_path,repo_dir)))].join(''):file_path);
if(cljs.core.not(page)){
var label_111330 = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(pdf_current);
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),false,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),(function (){var G__111291 = format;
var G__111291__$1 = (((G__111291 instanceof cljs.core.Keyword))?G__111291.fqn:null);
switch (G__111291__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label_111330,url], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url,label_111330], 0));

break;
default:
return url;

}
})(),new cljs.core.Keyword(null,"file-path","file-path",-2005501162),url], null)], null));

frontend.db.model.get_page(page_name__$1);
} else {
frontend.util.page_property.add_property_BANG_(page_name__$1,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),url);
}

return page;
} else {
return null;
}
});
frontend.extensions.pdf.assets.ensure_ref_block_BANG_ = (function frontend$extensions$pdf$assets$ensure_ref_block_BANG_(var_args){
var G__111294 = arguments.length;
switch (G__111294) {
case 2:
return frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pdf,hl){
return frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$3(pdf,hl,null);
}));

(frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pdf_current,p__111295,insert_opts){
var map__111296 = p__111295;
var map__111296__$1 = cljs.core.__destructure_map(map__111296);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111296__$1,new cljs.core.Keyword(null,"content","content",15833224));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111296__$1,new cljs.core.Keyword(null,"page","page",849072397));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111296__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var temp__5804__auto__ = (function (){var and__5041__auto__ = pdf_current;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.extensions.pdf.assets.ensure_ref_page_BANG_(pdf_current);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var ref_page = temp__5804__auto__;
var ref_block = frontend.db.model.query_block_by_uuid(id);
if((!((new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref_block) == null)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[existed ref block]",ref_block], 0));

return ref_block;
} else {
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content);
var wrap_props = (function (p1__111292_SHARP_){
var temp__5802__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(temp__5802__auto__)){
var stamp = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__111292_SHARP_,new cljs.core.Keyword(null,"hl-type","hl-type",992471876),"area",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),stamp], 0));
} else {
return p1__111292_SHARP_;
}
});
if(typeof text === 'string'){
return frontend.handler.editor.api_insert_new_block_BANG_(text,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref_page),new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430),id,new cljs.core.Keyword(null,"properties","properties",685819552),wrap_props(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),"annotation",new cljs.core.Keyword(null,"hl-page","hl-page",949012424),page,new cljs.core.Keyword(null,"hl-color","hl-color",1100781725),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(properties),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null))], null),insert_opts], 0)));
} else {
return null;
}
}
} else {
return null;
}
}));

(frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$lang$maxFixedArity = 3);

frontend.extensions.pdf.assets.del_ref_block_BANG_ = (function frontend$extensions$pdf$assets$del_ref_block_BANG_(p__111297){
var map__111298 = p__111297;
var map__111298__$1 = cljs.core.__destructure_map(map__111298);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111298__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.model.get_block_by_uuid(id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var block = temp__5804__auto____$1;
return frontend.handler.editor.delete_block_aux_BANG_(block,true);
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.pdf.assets.copy_hl_ref_BANG_ = (function frontend$extensions$pdf$assets$copy_hl_ref_BANG_(highlight,viewer){
var temp__5804__auto__ = frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_pdf(),highlight);
if(cljs.core.truth_(temp__5804__auto__)){
var ref_block = temp__5804__auto__;
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.util.block_ref.__GT_block_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_block)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"owner-window","owner-window",-2139116435),frontend.extensions.pdf.windows.resolve_own_window(viewer)], 0));
} else {
return null;
}
});
frontend.extensions.pdf.assets.open_block_ref_BANG_ = (function frontend$extensions$pdf$assets$open_block_ref_BANG_(block){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var page = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
var page_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var file_path = new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page));
var hl_page = new cljs.core.Keyword(null,"hl-page","hl-page",949012424).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block));
var temp__5804__auto__ = (function (){var and__5041__auto__ = page_name;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_name,(5));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var target_key = temp__5804__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.resolve_hls_data_by_key$(target_key),(function (hls){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = hls;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"highlights","highlights",945143465).cljs$core$IFn$_invoke$arity$1(hls);
} else {
return and__5041__auto__;
}
})(),(function (hls__$1){
return promesa.protocols._promise((function (){var file_path__$1 = (function (){var or__5043__auto__ = file_path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ["../assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_key),".pdf"].join('');
}
})();
var temp__5802__auto__ = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = hls__$1;
if(cljs.core.truth_(and__5041__auto__)){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__111299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__111299_SHARP_));
}),hls__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = hl_page;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),hl_page], null);
} else {
return and__5041__auto__;
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var matched = temp__5802__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),matched);

return frontend.state.set_current_pdf_BANG_(frontend.extensions.pdf.assets.inflate_asset(file_path__$1));
} else {
return console.debug("[Unmatched highlight ref]",block);
}
})());
}));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.goto_block_ref_BANG_ = (function frontend$extensions$pdf$assets$goto_block_ref_BANG_(p__111300){
var map__111301 = p__111300;
var map__111301__$1 = cljs.core.__destructure_map(map__111301);
var hl = map__111301__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111301__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
frontend.extensions.pdf.assets.ensure_ref_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_pdf(),hl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false], null));

return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
} else {
return null;
}
});
frontend.extensions.pdf.assets.goto_annotations_page_BANG_ = (function frontend$extensions$pdf$assets$goto_annotations_page_BANG_(var_args){
var G__111303 = arguments.length;
switch (G__111303) {
case 1:
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (current){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2(current,null);
}));

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (current,id){
var temp__5804__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(temp__5804__auto__)){
var name = temp__5804__auto__;
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),["hls__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),["block-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._PLUS_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null):null));
} else {
return null;
}
}));

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$lang$maxFixedArity = 2);

frontend.extensions.pdf.assets.open_lightbox = (function frontend$extensions$pdf$assets$open_lightbox(e){
var images = document.querySelectorAll(".hl-area img");
var images__$1 = cljs.core.to_array(images);
var images__$2 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((images__$1).length),(1)))))?(function (){var image = e.target.closest(".hl-area");
var image__$1 = image.querySelector("img");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(cljs.core.split_with(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([image__$1])),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__111304_SHARP_){
return p1__111304_SHARP_.y;
}),(function (p1__111305_SHARP_){
return p1__111305_SHARP_.x;
})),images__$1))));
})():images__$1);
var images__$3 = (function (){var iter__5520__auto__ = (function frontend$extensions$pdf$assets$open_lightbox_$_iter__111306(s__111307){
return (new cljs.core.LazySeq(null,(function (){
var s__111307__$1 = s__111307;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__111307__$1);
if(temp__5804__auto__){
var s__111307__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__111307__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111307__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111309 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111308 = (0);
while(true){
if((i__111308 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__111308);
cljs.core.chunk_append(b__111309,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null));

var G__111334 = (i__111308 + (1));
i__111308 = G__111334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111309),frontend$extensions$pdf$assets$open_lightbox_$_iter__111306(cljs.core.chunk_rest(s__111307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111309),null);
}
} else {
var it = cljs.core.first(s__111307__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null),frontend$extensions$pdf$assets$open_lightbox_$_iter__111306(cljs.core.rest(s__111307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(images__$2);
})();
if(cljs.core.seq(images__$3)){
return frontend.extensions.lightbox.preview_images_BANG_(images__$3);
} else {
return null;
}
});
frontend.extensions.pdf.assets.area_display = rum.core.lazy_build(rum.core.build_defc,(function (block){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
var G__111312 = block;
var G__111313 = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
return (frontend.extensions.pdf.utils.get_area_block_asset_url.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.pdf.utils.get_area_block_asset_url.cljs$core$IFn$_invoke$arity$2(G__111312,G__111313) : frontend.extensions.pdf.utils.get_area_block_asset_url.call(null,G__111312,G__111313));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var asset_path_SINGLEQUOTE_ = temp__5804__auto__;
var asset_path = frontend.handler.editor.make_asset_url(asset_path_SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hl-area","span.hl-area",-760805068),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.actions","span.actions",790723433),((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn.px-1","button.asset-action-btn.px-1",-1306523656),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","copy","asset/copy",-867708909)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.util.copy_image_to_clipboard(logseq.graph_parser.config.remove_asset_protocol(asset_path)),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));
}));
})], null),frontend.ui.icon("copy")], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn.px-1","button.asset-action-btn.px-1",-1306523656),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","maximize","asset/maximize",-20255358)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.extensions.pdf.assets.open_lightbox], null),frontend.ui.icon("maximize")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),asset_path], null)], null)], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.assets/area-display");

//# sourceMappingURL=frontend.extensions.pdf.assets.js.map
