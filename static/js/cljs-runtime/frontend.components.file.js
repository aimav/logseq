goog.provide('frontend.components.file');
goog.scope(function(){
  frontend.components.file.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.file.get_path = (function frontend$components$file$get_path(state){
var route_match = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168)], null));
});
frontend.components.file.files_all = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
if(cljs.core.truth_(temp__5804__auto__)){
var current_repo = temp__5804__auto__;
var files = (frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(current_repo) : frontend.db.get_files.call(null,current_repo));
var files__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,goog.string.intAwareCompare,files);
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-auto","table.table-auto",-490665373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","name","file/name",1848919477)], 0))], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310)], 0))], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5520__auto__ = (function frontend$components$file$iter__120102(s__120103){
return (new cljs.core.LazySeq(null,(function (){
var s__120103__$1 = s__120103;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__120103__$1);
if(temp__5804__auto____$1){
var s__120103__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__120103__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__120103__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__120105 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__120104 = (0);
while(true){
if((i__120104 < size__5519__auto__)){
var vec__120106 = cljs.core._nth(c__5518__auto__,i__120104);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120106,(0),null);
var modified_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120106,(1),null);
cljs.core.chunk_append(b__120105,(function (){var file_id = file;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var href = ((logseq.graph_parser.config.draw_QMARK_(file))?reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"draw","draw",1358331674),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file,[logseq.graph_parser.config.default_draw_directory,"/"].join(''),"")], null)):reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_id], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),file], null);
})()], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),(((modified_at === (0)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","no-data","file/no-data",-1707813734)], 0)):frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(modified_at))))], null)], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__120104,file_id,vec__120106,file,modified_at,c__5518__auto__,size__5519__auto__,b__120105,s__120103__$2,temp__5804__auto____$1,files,files__$1,mobile_QMARK_,current_repo,temp__5804__auto__){
return (function (_e){
return frontend.handler.export$.download_file_BANG_(file);
});})(i__120104,file_id,vec__120106,file,modified_at,c__5518__auto__,size__5519__auto__,b__120105,s__120103__$2,temp__5804__auto____$1,files,files__$1,mobile_QMARK_,current_repo,temp__5804__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"download","download",-300081668)], 0))], null)], null)], null))], null);
})());

var G__120129 = (i__120104 + (1));
i__120104 = G__120129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__120105),frontend$components$file$iter__120102(cljs.core.chunk_rest(s__120103__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__120105),null);
}
} else {
var vec__120109 = cljs.core.first(s__120103__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120109,(0),null);
var modified_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120109,(1),null);
return cljs.core.cons((function (){var file_id = file;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var href = ((logseq.graph_parser.config.draw_QMARK_(file))?reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"draw","draw",1358331674),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file,[logseq.graph_parser.config.default_draw_directory,"/"].join(''),"")], null)):reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_id], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),file], null);
})()], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),(((modified_at === (0)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","no-data","file/no-data",-1707813734)], 0)):frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(modified_at))))], null)], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (file_id,vec__120109,file,modified_at,s__120103__$2,temp__5804__auto____$1,files,files__$1,mobile_QMARK_,current_repo,temp__5804__auto__){
return (function (_e){
return frontend.handler.export$.download_file_BANG_(file);
});})(file_id,vec__120109,file,modified_at,s__120103__$2,temp__5804__auto____$1,files,files__$1,mobile_QMARK_,current_repo,temp__5804__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"download","download",-300081668)], 0))], null)], null)], null))], null);
})(),frontend$components$file$iter__120102(cljs.core.rest(s__120103__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(files__$1);
})()], null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.file/files-all");
frontend.components.file.files = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"flex-1 overflow-hidden"},[(function (){var attrs120112 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-files","all-files",1120339891)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs120112))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs120112], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs120112))?null:[daiquiri.interpreter.interpret(attrs120112)]));
})(),frontend.components.file.files_all()]);
}),null,"frontend.components.file/files");
frontend.components.file.file_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,path,format){
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var rel_path = ((clojure.string.starts_with_QMARK_(path,repo_dir))?logseq.common.path.trim_dir_prefix(repo_dir,path):null);
var original_name = (function (){var G__120113 = (function (){var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return rel_path;
}
})();
return (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(G__120113) : frontend.db.get_file_page.call(null,G__120113));
})();
var in_db_QMARK_ = ((logseq.common.path.absolute_QMARK_(path))?null:cljs.core.boolean$((function (){var G__120114 = (function (){var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return rel_path;
}
})();
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(G__120114) : frontend.db.get_file.call(null,G__120114));
})()));
var file_fpath = (cljs.core.truth_(in_db_QMARK_)?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)):path);
var random_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)));
var content = rum.core.react(new cljs.core.Keyword("frontend.components.file","file-content","frontend.components.file/file-content",1852452186).cljs$core$IFn$_invoke$arity$1(state));
return daiquiri.core.create_element("div",{'id':["file-edit-wrapper-",random_id].join(''),'key':path,'className':"file"},[daiquiri.core.create_element("h1",{'className':"title"},[(function (){var attrs120121 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = rel_path;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return path;
}
}
})();
return daiquiri.core.create_element("bdi",((cljs.core.map_QMARK_(attrs120121))?daiquiri.interpreter.element_attributes(attrs120121):null),((cljs.core.map_QMARK_(attrs120121))?null:[daiquiri.interpreter.interpret(attrs120121)]));
})()]),(cljs.core.truth_(original_name)?daiquiri.core.create_element("div",{'className':"text-sm mb-4 ml-1"},["Page: ",daiquiri.core.create_element("a",{'style':{'borderRadius':(4)},'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),original_name], null)),'onClick':(function (e){
if(cljs.core.truth_(frontend.components.file.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5804__auto___120130 = (function (){var G__120122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(original_name) : frontend.util.page_name_sanity_lc.call(null,original_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__120122) : frontend.db.entity.call(null,G__120122));
})();
if(cljs.core.truth_(temp__5804__auto___120130)){
var page_120131 = temp__5804__auto___120130;
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_120131),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}

return frontend.util.stop(e);
} else {
return null;
}
}),'className':"bg-base-2 p-1 ml-1"},[daiquiri.interpreter.interpret(original_name)])]):null),(cljs.core.truth_((function (){var and__5041__auto__ = original_name;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.starts_with_QMARK_(original_name,"logseq/")));
} else {
return and__5041__auto__;
}
})())?(function (){var attrs120115 = frontend.components.svg.warning.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs120115))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","ml-1","mb-4"], null)], null),attrs120115], 0))):{'className':"text-sm ml-1 mb-4"}),((cljs.core.map_QMARK_(attrs120115))?[daiquiri.core.create_element("span",{'className':"ml-1"},["Please don't remove the page's title property (you can still modify it)."])]:[daiquiri.interpreter.interpret(attrs120115),daiquiri.core.create_element("span",{'className':"ml-1"},["Please don't remove the page's title property (you can still modify it)."])]));
})():null),(cljs.core.truth_((function (){var and__5041__auto__ = format;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.img_formats(),format);
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))},[]):(cljs.core.truth_((function (){var and__5041__auto__ = format;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.contains_QMARK_(logseq.graph_parser.config.text_formats(),format);
if(and__5041__auto____$1){
return content;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?(function (){var content_SINGLEQUOTE_ = clojure.string.trim(content);
var mode = frontend.util.get_file_ext(path);
return frontend.components.lazy_editor.editor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),file_fpath], null),["file-edit-",random_id].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),mode], null),content_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY);
})():(cljs.core.truth_((function (){var and__5041__auto__ = format;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.text_formats(),format);
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.ui.loading.cljs$core$IFn$_invoke$arity$0()):(function (){var attrs120120 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","format-not-supported","file/format-not-supported",1268716007),cljs.core.name(format)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120120))?daiquiri.interpreter.element_attributes(attrs120120):null),((cljs.core.map_QMARK_(attrs120120))?null:[daiquiri.interpreter.interpret(attrs120120)]));
})()
)))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var _STAR_content = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var vec__120123 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120123,(0),null);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120123,(1),null);
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var vec__120126 = ((logseq.common.path.absolute_QMARK_(path))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo_dir,path], null)
);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120126,(0),null);
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120126,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = format;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.text_formats(),format);
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(dir,path__$1),(function (content){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_content,(function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()));
}));
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.file","file-content","frontend.components.file/file-content",1852452186),_STAR_content);
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.state.set_file_component_BANG_(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.clear_file_component_BANG_();

return state;
})], null)], null),"frontend.components.file/file-inner");
frontend.components.file.file = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var path = frontend.components.file.get_path(state);
var format = logseq.graph_parser.util.get_format(path);
return rum.core.with_key(frontend.components.file.file_inner(path,format),path);
}),null,"frontend.components.file/file");

//# sourceMappingURL=frontend.components.file.js.map
