goog.provide('frontend.components.export$');
frontend.components.export$.export$ = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var current_repo = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.export","div.export",-41470672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export","export",214356590)], 0))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mr-1","ul.mr-1",-689922131),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-4","li.mb-4",-1136874751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_edn_v2_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-edn","export-edn",-319969369)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-4","li.mb-4",-1136874751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_json_v2_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-json","export-json",-629812380)], 0))], null)], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-4","li.mb-4",-1136874751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.download_repo_as_html_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-public-pages","export-public-pages",-2122765445)], 0))], null)], null):null),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-4","li.mb-4",-1136874751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.text.export_repo_as_markdown_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-markdown","export-markdown",2045533540)], 0))], null)], null)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-4","li.mb-4",-1136874751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.opml.export_repo_as_opml_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-opml","export-opml",-636284218)], 0))], null)], null)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-4","li.mb-4",-1136874751),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium","a.font-medium",-910158116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.export$.export_repo_as_roam_json_BANG_(current_repo);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-roam-json","export-roam-json",631486448)], 0))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-edn-v2.hidden","a#download-as-edn-v2.hidden",35025946)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-json-v2.hidden","a#download-as-json-v2.hidden",-1429454050)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-roam-json.hidden","a#download-as-roam-json.hidden",1957328973)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-html.hidden","a#download-as-html.hidden",-1218412359)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download-as-zip.hidden","a#download-as-zip.hidden",-1589405338)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#export-as-markdown.hidden","a#export-as-markdown.hidden",-1156151275)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#export-as-opml.hidden","a#export-as-opml.hidden",679727892)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#convert-markdown-to-unordered-list-or-heading.hidden","a#convert-markdown-to-unordered-list-or-heading.hidden",196834605)], null)], null);
} else {
return null;
}
})());
}),null,"frontend.components.export/export");
frontend.components.export$._STAR_export_block_type = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697));
frontend.components.export$.text_indent_style_options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"dashes",new cljs.core.Keyword(null,"selected","selected",574897764),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"spaces",new cljs.core.Keyword(null,"selected","selected",574897764),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"no-indent",new cljs.core.Keyword(null,"selected","selected",574897764),false], null)], null);
frontend.components.export$.export_helper = (function frontend$components$export$export_helper(block_uuids_or_page_name){
var current_repo = frontend.state.get_current_repo();
var text_indent_style = frontend.state.get_export_block_text_indent_style();
var text_remove_options = cljs.core.set(frontend.state.get_export_block_text_remove_options());
var text_other_options = frontend.state.get_export_block_text_other_options();
var tp = cljs.core.deref(frontend.components.export$._STAR_export_block_type);
var G__114048 = tp;
var G__114048__$1 = (((G__114048 instanceof cljs.core.Keyword))?G__114048.fqn:null);
switch (G__114048__$1) {
case "text":
return frontend.handler.export$.text.export_blocks_as_markdown(current_repo,block_uuids_or_page_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),text_indent_style,new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));

break;
case "opml":
return frontend.handler.export$.opml.export_blocks_as_opml(current_repo,block_uuids_or_page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));

break;
case "html":
return frontend.handler.export$.html.export_blocks_as_html(current_repo,block_uuids_or_page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remove-options","remove-options",768737839),text_remove_options,new cljs.core.Keyword(null,"other-options","other-options",170412142),text_other_options], null));

break;
default:
return "";

}
});
frontend.components.export$.get_zoom_level = (function frontend$components$export$get_zoom_level(page_uuid){
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(page_uuid) : frontend.db.get_page.call(null,page_uuid)));
var whiteboard_camera = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(sessionStorage.getItem(["logseq.tldraw.camera:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''))));
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(whiteboard_camera,"zoom");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
});
frontend.components.export$.get_image_blob = (function frontend$components$export$get_image_blob(block_uuids_or_page_name,p__114049,callback){
var map__114050 = p__114049;
var map__114050__$1 = cljs.core.__destructure_map(map__114050);
var transparent_bg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114050__$1,new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114050__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114050__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114050__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114050__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114050__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var html = document.body.parentNode;
var style = window.getComputedStyle(html);
var background = (cljs.core.truth_(transparent_bg_QMARK_)?null:style.getPropertyValue("--ls-primary-background-color"));
var page_QMARK_ = typeof block_uuids_or_page_name === 'string';
var selector = ((page_QMARK_)?"#main-content-container":["[blockid='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(block_uuids_or_page_name)),"']"].join(''));
var container = document.querySelector(selector);
var scale = ((page_QMARK_)?((1) / (function (){var or__5043__auto__ = zoom;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.components.export$.get_zoom_level(block_uuids_or_page_name);
}
})()):(1));
var options = ({"y": (function (){var or__5043__auto__ = (y / scale);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})(), "useCORS": true, "scrollX": (0), "scrollY": (0), "scale": scale, "width": (cljs.core.truth_(width)?(width / scale):null), "windowHeight": ((typeof block_uuids_or_page_name === 'string')?container.scrollHeight:null), "allowTaint": true, "x": (function (){var or__5043__auto__ = (x / scale);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})(), "backgroundColor": (function (){var or__5043__auto__ = background;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "transparent";
}
})(), "height": (cljs.core.truth_(height)?(height / scale):null)});
return html2canvas(container,options).then((function (canvas){
return canvas.toBlob((function (blob){
if(cljs.core.truth_(blob)){
var img = document.getElementById("export-preview");
var img_url = frontend.image.create_object_url(blob);
(img.src = img_url);

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(blob) : callback.call(null,blob));
} else {
return null;
}
}),"image/png");
}));
});
frontend.components.export$.export_blocks = rum.core.lazy_build(rum.core.build_defcs,(function (state,root_block_uuids_or_page_name,p__114054){
var map__114055 = p__114054;
var map__114055__$1 = cljs.core.__destructure_map(map__114055);
var options = map__114055__$1;
var whiteboard_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114055__$1,new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788));
var tp = cljs.core.deref(frontend.components.export$._STAR_export_block_type);
var _STAR_text_other_options = new cljs.core.Keyword("frontend.components.export","text-other-options","frontend.components.export/text-other-options",-180643399).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_text_remove_options = new cljs.core.Keyword("frontend.components.export","text-remove-options","frontend.components.export/text-remove-options",2122633606).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_text_indent_style = new cljs.core.Keyword("frontend.components.export","text-indent-style","frontend.components.export/text-indent-style",-1413931363).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_copied_QMARK_ = new cljs.core.Keyword("frontend.components.export","copied?","frontend.components.export/copied?",2118939016).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_content = new cljs.core.Keyword("frontend.components.export","content","frontend.components.export/content",-1876994088).cljs$core$IFn$_invoke$arity$1(state);
var attrs114051 = (cljs.core.truth_(whiteboard_QMARK_)?null:new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-2"], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Text",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"text","text",-1790561697));

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("OPML",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"opml","opml",2114938640));

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("HTML",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4 w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"html","html",-998796897));

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], 0)),((cljs.core.seq_QMARK_(root_block_uuids_or_page_name))?null:frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("PNG",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"w-20",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,new cljs.core.Keyword(null,"png","png",551930691));

cljs.core.reset_BANG_(_STAR_content,null);

return frontend.components.export$.get_image_blob(root_block_uuids_or_page_name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013),false], null)], 0)),(function (blob){
return cljs.core.reset_BANG_(_STAR_content,blob);
}));
})], 0)))], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114051))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["export","resize"], null)], null),attrs114051], 0))):{'className':"export resize"}),((cljs.core.map_QMARK_(attrs114051))?[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"png","png",551930691),tp))?(function (){var attrs114056 = ((cljs.core.not(cljs.core.deref(_STAR_content)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute","div.absolute",1404644568),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114056))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-center","relative"], null)], null),attrs114056], 0))):{'className':"flex items-center justify-center relative"}),((cljs.core.map_QMARK_(attrs114056))?[daiquiri.core.create_element("img",{'alt':"export preview",'id':"export-preview",'style':{'visibility':((cljs.core.not(cljs.core.deref(_STAR_content)))?"hidden":null)},'className':"my-4"},[])]:[daiquiri.interpreter.interpret(attrs114056),daiquiri.core.create_element("img",{'alt':"export preview",'id':"export-preview",'style':{'visibility':((cljs.core.not(cljs.core.deref(_STAR_content)))?"hidden":null)},'className':"my-4"},[])]));
})():daiquiri.core.create_element("textarea",{'value':cljs.core.deref(_STAR_content),'readOnly':true,'className':"overflow-y-auto h-96"},[])),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"png","png",551930691),tp))?daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs114057 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-transparent-background","export-transparent-background",-1052843380)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114057))?daiquiri.interpreter.element_attributes(attrs114057):null),((cljs.core.map_QMARK_(attrs114057))?null:[daiquiri.interpreter.interpret(attrs114057)]));
})(),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_(_STAR_content,null);

return frontend.components.export$.get_image_blob(root_block_uuids_or_page_name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013),e.currentTarget.checked], null)], 0)),(function (blob){
return cljs.core.reset_BANG_(_STAR_content,blob);
}));
})], null)))]):(function (){var options__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_text_indent_style),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(opt))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"selected","selected",574897764),true);
} else {
return opt;
}
}),frontend.components.export$.text_indent_style_options);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex items-center"},[daiquiri.core.create_element("label",{'style':{'visibility':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),tp))?"visible":"hidden")},'className':"mr-4"},["Indentation style:"]),daiquiri.core.create_element("select",{'style':{'visibility':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),tp))?"visible":"hidden")},'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
frontend.state.set_export_block_text_indent_style_BANG_(value);

cljs.core.reset_BANG_(_STAR_text_indent_style,value);

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})),'className':"block my-2 text-lg rounded border py-0 px-1"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$export$iter__114067(s__114068){
return (new cljs.core.LazySeq(null,(function (){
var s__114068__$1 = s__114068;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114068__$1);
if(temp__5804__auto__){
var s__114068__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114068__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114068__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114070 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114069 = (0);
while(true){
if((i__114069 < size__5519__auto__)){
var map__114071 = cljs.core._nth(c__5518__auto__,i__114069);
var map__114071__$1 = cljs.core.__destructure_map(map__114071);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114071__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114071__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114071__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__114070,(function (){var attrs114066 = (function (){var G__114072 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})()], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__114072,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__114072;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs114066))?daiquiri.interpreter.element_attributes(attrs114066):null),((cljs.core.map_QMARK_(attrs114066))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs114066),daiquiri.interpreter.interpret(label)]));
})());

var G__114155 = (i__114069 + (1));
i__114069 = G__114155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114070),frontend$components$export$iter__114067(cljs.core.chunk_rest(s__114068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114070),null);
}
} else {
var map__114073 = cljs.core.first(s__114068__$2);
var map__114073__$1 = cljs.core.__destructure_map(map__114073);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114073__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114073__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114073__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons((function (){var attrs114066 = (function (){var G__114074 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})()], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__114074,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__114074;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs114066))?daiquiri.interpreter.element_attributes(attrs114066):null),((cljs.core.map_QMARK_(attrs114066))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs114066),daiquiri.interpreter.interpret(label)]));
})(),frontend$components$export$iter__114067(cljs.core.rest(s__114068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(options__$1);
})())])]),(function (){var attrs114060 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114075 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114075.cljs$core$IFn$_invoke$arity$1 ? fexpr__114075.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114075.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114060))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs114060], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs114060))?[daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114076 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114076.cljs$core$IFn$_invoke$arity$1 ? fexpr__114076.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114076.call(null,tp));
})())?"visible":"hidden")}},["[[text]] -> text"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114078 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114078.cljs$core$IFn$_invoke$arity$1 ? fexpr__114078.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114078.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"emphasis","emphasis",293543451));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114079.cljs$core$IFn$_invoke$arity$1 ? fexpr__114079.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114079.call(null,tp));
})())?"visible":"hidden")}},["remove emphasis"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114081.cljs$core$IFn$_invoke$arity$1 ? fexpr__114081.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114081.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"tag","tag",-1290361223));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114082 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114082.cljs$core$IFn$_invoke$arity$1 ? fexpr__114082.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114082.call(null,tp));
})())?"visible":"hidden")}},["remove #tags"])]:[daiquiri.interpreter.interpret(attrs114060),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114083.cljs$core$IFn$_invoke$arity$1 ? fexpr__114083.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114083.call(null,tp));
})())?"visible":"hidden")}},["[[text]] -> text"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114085 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114085.cljs$core$IFn$_invoke$arity$1 ? fexpr__114085.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114085.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"emphasis","emphasis",293543451));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114086 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114086.cljs$core$IFn$_invoke$arity$1 ? fexpr__114086.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114086.call(null,tp));
})())?"visible":"hidden")}},["remove emphasis"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114088 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114088.cljs$core$IFn$_invoke$arity$1 ? fexpr__114088.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114088.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"tag","tag",-1290361223));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114089.cljs$core$IFn$_invoke$arity$1 ? fexpr__114089.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114089.call(null,tp));
})())?"visible":"hidden")}},["remove #tags"])]));
})(),(function (){var attrs114063 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114090.cljs$core$IFn$_invoke$arity$1 ? fexpr__114090.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114090.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_text_other_options))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),cljs.core.boolean$(frontend.util.echecked_QMARK_(e)));

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114063))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs114063], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs114063))?[daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114091 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114091.cljs$core$IFn$_invoke$arity$1 ? fexpr__114091.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114091.call(null,tp));
})())?"visible":"hidden")}},["newline after block"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114093 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114093.cljs$core$IFn$_invoke$arity$1 ? fexpr__114093.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114093.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"property","property",-1114278232));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114094 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114094.cljs$core$IFn$_invoke$arity$1 ? fexpr__114094.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114094.call(null,tp));
})())?"visible":"hidden")}},["remove properties"])]:[daiquiri.interpreter.interpret(attrs114063),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114095 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114095.cljs$core$IFn$_invoke$arity$1 ? fexpr__114095.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114095.call(null,tp));
})())?"visible":"hidden")}},["newline after block"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114097.cljs$core$IFn$_invoke$arity$1 ? fexpr__114097.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114097.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"property","property",-1114278232));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114098.cljs$core$IFn$_invoke$arity$1 ? fexpr__114098.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114098.call(null,tp));
})())?"visible":"hidden")}},["remove properties"])]));
})(),daiquiri.core.create_element("div",{'className':"flex items-center"},[daiquiri.core.create_element("label",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114099 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114099.cljs$core$IFn$_invoke$arity$1 ? fexpr__114099.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114099.call(null,tp));
})())?"visible":"hidden")},'className':"mr-2"},["level <="]),daiquiri.core.create_element("select",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114100 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114100.cljs$core$IFn$_invoke$arity$1 ? fexpr__114100.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114100.call(null,tp));
})())?"visible":"hidden")},'value':(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_text_other_options));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"all","all",892129742);
}
})(),'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
var level = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("all",value))?new cljs.core.Keyword(null,"all","all",892129742):frontend.util.safe_parse_int(value));
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),level);

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})),'className':"block my-2 text-lg rounded border px-2 py-0"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$export$iter__114101(s__114102){
return (new cljs.core.LazySeq(null,(function (){
var s__114102__$1 = s__114102;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114102__$1);
if(temp__5804__auto__){
var s__114102__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114102__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114102__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114104 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114103 = (0);
while(true){
if((i__114103 < size__5519__auto__)){
var n = cljs.core._nth(c__5518__auto__,i__114103);
cljs.core.chunk_append(b__114104,daiquiri.core.create_element("option",{'key':n,'value':n},[daiquiri.interpreter.interpret(n)]));

var G__114156 = (i__114103 + (1));
i__114103 = G__114156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114104),frontend$components$export$iter__114101(cljs.core.chunk_rest(s__114102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114104),null);
}
} else {
var n = cljs.core.first(s__114102__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':n,'value':n},[daiquiri.interpreter.interpret(n)]),frontend$components$export$iter__114101(cljs.core.rest(s__114102__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.cons("all",cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10))));
})())])])]);
})()),(cljs.core.truth_(cljs.core.deref(_STAR_content))?(function (){var attrs114052 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.deref(_STAR_copied_QMARK_))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-copied-to-clipboard","export-copied-to-clipboard",1088136181)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-copy-to-clipboard","export-copy-to-clipboard",-872022684)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"png","png",551930691))){
navigator.clipboard.write(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ClipboardItem(({"image/png": cljs.core.deref(_STAR_content)})))], null));
} else {
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(_STAR_content),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html","html",-998796897),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"html","html",-998796897)))?cljs.core.deref(_STAR_content):null)], 0));
}

return cljs.core.reset_BANG_(_STAR_copied_QMARK_,true);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114052))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-4","flex","flex-row","gap-2"], null)], null),attrs114052], 0))):{'className':"mt-4 flex flex-row gap-2"}),((cljs.core.map_QMARK_(attrs114052))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-save-to-file","export-save-to-file",1951446638)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var file_name = ((typeof root_block_uuids_or_page_name === 'string')?frontend.util.get_page_original_name((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(root_block_uuids_or_page_name) : frontend.db.get_page.call(null,root_block_uuids_or_page_name))):cljs_time.core.now());
return module$frontend$utils.saveToFile((new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_content)], null))),["logseq_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"text","text",-1790561697)))?"txt":cljs.core.name(tp)));
})], 0)))]:[daiquiri.interpreter.interpret(attrs114052),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-save-to-file","export-save-to-file",1951446638)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var file_name = ((typeof root_block_uuids_or_page_name === 'string')?frontend.util.get_page_original_name((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(root_block_uuids_or_page_name) : frontend.db.get_page.call(null,root_block_uuids_or_page_name))):cljs_time.core.now());
return module$frontend$utils.saveToFile((new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_content)], null))),["logseq_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"text","text",-1790561697)))?"txt":cljs.core.name(tp)));
})], 0)))]));
})():null)]:[daiquiri.interpreter.interpret(attrs114051),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"png","png",551930691),tp))?(function (){var attrs114105 = ((cljs.core.not(cljs.core.deref(_STAR_content)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute","div.absolute",1404644568),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114105))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-center","relative"], null)], null),attrs114105], 0))):{'className':"flex items-center justify-center relative"}),((cljs.core.map_QMARK_(attrs114105))?[daiquiri.core.create_element("img",{'alt':"export preview",'id':"export-preview",'style':{'visibility':((cljs.core.not(cljs.core.deref(_STAR_content)))?"hidden":null)},'className':"my-4"},[])]:[daiquiri.interpreter.interpret(attrs114105),daiquiri.core.create_element("img",{'alt':"export preview",'id':"export-preview",'style':{'visibility':((cljs.core.not(cljs.core.deref(_STAR_content)))?"hidden":null)},'className':"my-4"},[])]));
})():daiquiri.core.create_element("textarea",{'value':cljs.core.deref(_STAR_content),'readOnly':true,'className':"overflow-y-auto h-96"},[])),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"png","png",551930691),tp))?daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs114106 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-transparent-background","export-transparent-background",-1052843380)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114106))?daiquiri.interpreter.element_attributes(attrs114106):null),((cljs.core.map_QMARK_(attrs114106))?null:[daiquiri.interpreter.interpret(attrs114106)]));
})(),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_(_STAR_content,null);

return frontend.components.export$.get_image_blob(root_block_uuids_or_page_name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013),e.currentTarget.checked], null)], 0)),(function (blob){
return cljs.core.reset_BANG_(_STAR_content,blob);
}));
})], null)))]):(function (){var options__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_text_indent_style),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(opt))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"selected","selected",574897764),true);
} else {
return opt;
}
}),frontend.components.export$.text_indent_style_options);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex items-center"},[daiquiri.core.create_element("label",{'style':{'visibility':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),tp))?"visible":"hidden")},'className':"mr-4"},["Indentation style:"]),daiquiri.core.create_element("select",{'style':{'visibility':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),tp))?"visible":"hidden")},'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
frontend.state.set_export_block_text_indent_style_BANG_(value);

cljs.core.reset_BANG_(_STAR_text_indent_style,value);

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})),'className':"block my-2 text-lg rounded border py-0 px-1"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$export$iter__114116(s__114117){
return (new cljs.core.LazySeq(null,(function (){
var s__114117__$1 = s__114117;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114117__$1);
if(temp__5804__auto__){
var s__114117__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114117__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114117__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114119 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114118 = (0);
while(true){
if((i__114118 < size__5519__auto__)){
var map__114120 = cljs.core._nth(c__5518__auto__,i__114118);
var map__114120__$1 = cljs.core.__destructure_map(map__114120);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114120__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114120__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114120__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__114119,(function (){var attrs114115 = (function (){var G__114121 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})()], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__114121,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__114121;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs114115))?daiquiri.interpreter.element_attributes(attrs114115):null),((cljs.core.map_QMARK_(attrs114115))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs114115),daiquiri.interpreter.interpret(label)]));
})());

var G__114157 = (i__114118 + (1));
i__114118 = G__114157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114119),frontend$components$export$iter__114116(cljs.core.chunk_rest(s__114117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114119),null);
}
} else {
var map__114122 = cljs.core.first(s__114117__$2);
var map__114122__$1 = cljs.core.__destructure_map(map__114122);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114122__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114122__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114122__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons((function (){var attrs114115 = (function (){var G__114123 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})()], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__114123,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__114123;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs114115))?daiquiri.interpreter.element_attributes(attrs114115):null),((cljs.core.map_QMARK_(attrs114115))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs114115),daiquiri.interpreter.interpret(label)]));
})(),frontend$components$export$iter__114116(cljs.core.rest(s__114117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(options__$1);
})())])]),(function (){var attrs114109 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114124 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114124.cljs$core$IFn$_invoke$arity$1 ? fexpr__114124.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114124.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114109))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs114109], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs114109))?[daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114125 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114125.cljs$core$IFn$_invoke$arity$1 ? fexpr__114125.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114125.call(null,tp));
})())?"visible":"hidden")}},["[[text]] -> text"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114127 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114127.cljs$core$IFn$_invoke$arity$1 ? fexpr__114127.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114127.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"emphasis","emphasis",293543451));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114128.cljs$core$IFn$_invoke$arity$1 ? fexpr__114128.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114128.call(null,tp));
})())?"visible":"hidden")}},["remove emphasis"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114130 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114130.cljs$core$IFn$_invoke$arity$1 ? fexpr__114130.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114130.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"tag","tag",-1290361223));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114131 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114131.cljs$core$IFn$_invoke$arity$1 ? fexpr__114131.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114131.call(null,tp));
})())?"visible":"hidden")}},["remove #tags"])]:[daiquiri.interpreter.interpret(attrs114109),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114132.cljs$core$IFn$_invoke$arity$1 ? fexpr__114132.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114132.call(null,tp));
})())?"visible":"hidden")}},["[[text]] -> text"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114134 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114134.cljs$core$IFn$_invoke$arity$1 ? fexpr__114134.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114134.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"emphasis","emphasis",293543451));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114135.cljs$core$IFn$_invoke$arity$1 ? fexpr__114135.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114135.call(null,tp));
})())?"visible":"hidden")}},["remove emphasis"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114137 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114137.cljs$core$IFn$_invoke$arity$1 ? fexpr__114137.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114137.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"tag","tag",-1290361223));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114138 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114138.cljs$core$IFn$_invoke$arity$1 ? fexpr__114138.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114138.call(null,tp));
})())?"visible":"hidden")}},["remove #tags"])]));
})(),(function (){var attrs114112 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114139 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114139.cljs$core$IFn$_invoke$arity$1 ? fexpr__114139.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114139.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_text_other_options))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),cljs.core.boolean$(frontend.util.echecked_QMARK_(e)));

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114112))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs114112], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs114112))?[daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114140 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114140.cljs$core$IFn$_invoke$arity$1 ? fexpr__114140.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114140.call(null,tp));
})())?"visible":"hidden")}},["newline after block"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114142 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114142.cljs$core$IFn$_invoke$arity$1 ? fexpr__114142.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114142.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"property","property",-1114278232));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114143 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114143.cljs$core$IFn$_invoke$arity$1 ? fexpr__114143.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114143.call(null,tp));
})())?"visible":"hidden")}},["remove properties"])]:[daiquiri.interpreter.interpret(attrs114112),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114144 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114144.cljs$core$IFn$_invoke$arity$1 ? fexpr__114144.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114144.call(null,tp));
})())?"visible":"hidden")}},["newline after block"]),daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2 ml-4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var fexpr__114146 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114146.cljs$core$IFn$_invoke$arity$1 ? fexpr__114146.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114146.call(null,tp));
})())?"visible":"hidden")], null),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(_STAR_text_remove_options),new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
frontend.state.update_export_block_text_remove_options_BANG_(e,new cljs.core.Keyword(null,"property","property",-1114278232));

cljs.core.reset_BANG_(_STAR_text_remove_options,frontend.state.get_export_block_text_remove_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})], null))),daiquiri.core.create_element("div",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114147.cljs$core$IFn$_invoke$arity$1 ? fexpr__114147.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114147.call(null,tp));
})())?"visible":"hidden")}},["remove properties"])]));
})(),daiquiri.core.create_element("div",{'className':"flex items-center"},[daiquiri.core.create_element("label",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114148.cljs$core$IFn$_invoke$arity$1 ? fexpr__114148.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114148.call(null,tp));
})())?"visible":"hidden")},'className':"mr-2"},["level <="]),daiquiri.core.create_element("select",{'style':{'visibility':(cljs.core.truth_((function (){var fexpr__114149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opml","opml",2114938640),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__114149.cljs$core$IFn$_invoke$arity$1 ? fexpr__114149.cljs$core$IFn$_invoke$arity$1(tp) : fexpr__114149.call(null,tp));
})())?"visible":"hidden")},'value':(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_text_other_options));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"all","all",892129742);
}
})(),'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
var level = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("all",value))?new cljs.core.Keyword(null,"all","all",892129742):frontend.util.safe_parse_int(value));
frontend.state.update_export_block_text_other_options_BANG_(new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),level);

cljs.core.reset_BANG_(_STAR_text_other_options,frontend.state.get_export_block_text_other_options());

return cljs.core.reset_BANG_(_STAR_content,frontend.components.export$.export_helper(root_block_uuids_or_page_name));
})),'className':"block my-2 text-lg rounded border px-2 py-0"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$export$iter__114150(s__114151){
return (new cljs.core.LazySeq(null,(function (){
var s__114151__$1 = s__114151;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114151__$1);
if(temp__5804__auto__){
var s__114151__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114151__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114151__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114153 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114152 = (0);
while(true){
if((i__114152 < size__5519__auto__)){
var n = cljs.core._nth(c__5518__auto__,i__114152);
cljs.core.chunk_append(b__114153,daiquiri.core.create_element("option",{'key':n,'value':n},[daiquiri.interpreter.interpret(n)]));

var G__114158 = (i__114152 + (1));
i__114152 = G__114158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114153),frontend$components$export$iter__114150(cljs.core.chunk_rest(s__114151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114153),null);
}
} else {
var n = cljs.core.first(s__114151__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':n,'value':n},[daiquiri.interpreter.interpret(n)]),frontend$components$export$iter__114150(cljs.core.rest(s__114151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.cons("all",cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10))));
})())])])]);
})()),(cljs.core.truth_(cljs.core.deref(_STAR_content))?(function (){var attrs114053 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.deref(_STAR_copied_QMARK_))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-copied-to-clipboard","export-copied-to-clipboard",1088136181)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-copy-to-clipboard","export-copy-to-clipboard",-872022684)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"mr-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"png","png",551930691))){
navigator.clipboard.write(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ClipboardItem(({"image/png": cljs.core.deref(_STAR_content)})))], null));
} else {
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(_STAR_content),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html","html",-998796897),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"html","html",-998796897)))?cljs.core.deref(_STAR_content):null)], 0));
}

return cljs.core.reset_BANG_(_STAR_copied_QMARK_,true);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114053))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-4","flex","flex-row","gap-2"], null)], null),attrs114053], 0))):{'className':"mt-4 flex flex-row gap-2"}),((cljs.core.map_QMARK_(attrs114053))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-save-to-file","export-save-to-file",1951446638)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var file_name = ((typeof root_block_uuids_or_page_name === 'string')?frontend.util.get_page_original_name((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(root_block_uuids_or_page_name) : frontend.db.get_page.call(null,root_block_uuids_or_page_name))):cljs_time.core.now());
return module$frontend$utils.saveToFile((new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_content)], null))),["logseq_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"text","text",-1790561697)))?"txt":cljs.core.name(tp)));
})], 0)))]:[daiquiri.interpreter.interpret(attrs114053),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-save-to-file","export-save-to-file",1951446638)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var file_name = ((typeof root_block_uuids_or_page_name === 'string')?frontend.util.get_page_original_name((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(root_block_uuids_or_page_name) : frontend.db.get_page.call(null,root_block_uuids_or_page_name))):cljs_time.core.now());
return module$frontend$utils.saveToFile((new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_content)], null))),["logseq_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,new cljs.core.Keyword(null,"text","text",-1790561697)))?"txt":cljs.core.name(tp)));
})], 0)))]));
})():null)]));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.export","copied?","frontend.components.export/copied?",2118939016)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.export","text-remove-options","frontend.components.export/text-remove-options",2122633606)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.export","text-indent-style","frontend.components.export/text-indent-style",-1413931363)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.export","text-other-options","frontend.components.export/text-other-options",-180643399)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.export","content","frontend.components.export/content",-1876994088)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
cljs.core.reset_BANG_(frontend.components.export$._STAR_export_block_type,(cljs.core.truth_(new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))?new cljs.core.Keyword(null,"png","png",551930691):new cljs.core.Keyword(null,"text","text",-1790561697)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.export$._STAR_export_block_type),new cljs.core.Keyword(null,"png","png",551930691))){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.export","content","frontend.components.export/content",-1876994088).cljs$core$IFn$_invoke$arity$1(state),null);

frontend.components.export$.get_image_blob(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent-bg?","transparent-bg?",1544645013),false], null)], 0)),(function (blob){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.export","content","frontend.components.export/content",-1876994088).cljs$core$IFn$_invoke$arity$1(state),blob);
}));
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.export","content","frontend.components.export/content",-1876994088).cljs$core$IFn$_invoke$arity$1(state),frontend.components.export$.export_helper(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))));
}

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.export","text-remove-options","frontend.components.export/text-remove-options",2122633606).cljs$core$IFn$_invoke$arity$1(state),cljs.core.set(frontend.state.get_export_block_text_remove_options()));

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.export","text-indent-style","frontend.components.export/text-indent-style",-1413931363).cljs$core$IFn$_invoke$arity$1(state),frontend.state.get_export_block_text_indent_style());

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.export","text-other-options","frontend.components.export/text-other-options",-180643399).cljs$core$IFn$_invoke$arity$1(state),frontend.state.get_export_block_text_other_options());

return state;
})], null)], null),"frontend.components.export/export-blocks");

//# sourceMappingURL=frontend.components.export.js.map
