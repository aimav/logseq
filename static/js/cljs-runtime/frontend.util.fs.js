goog.provide('frontend.util.fs');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
/**
 * Ignore path for ls-dir-files-with-handler! and reload-dir!
 */
frontend.util.fs.ignored_path_QMARK_ = (function frontend$util$fs$ignored_path_QMARK_(dir,path){
var ignores = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".recycle","node_modules","logseq/bak","logseq/version-files","logseq/graphs-txid.edn"], null);
if(typeof path === 'string'){
var or__5043__auto__ = cljs.core.some((function (p1__90763_SHARP_){
return clojure.string.starts_with_QMARK_(path,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,""))?p1__90763_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__90763_SHARP_)].join('')));
}),ignores);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.some((function (p1__90764_SHARP_){
return clojure.string.includes_QMARK_(path,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,""))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__90764_SHARP_),"/"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__90764_SHARP_),"/"].join('')));
}),ignores);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = cljs.core.some((function (p1__90765_SHARP_){
return clojure.string.ends_with_QMARK_(path,p1__90765_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".DS_Store","logseq/graphs-txid.edn"], null));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = (function (){var relpath = module$node_modules$path$path.relative(dir,path);
var or__5043__auto____$3 = cljs.core.re_find(/\/\.[^.]+/,relpath);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
return cljs.core.re_find(/^\.[^.]+/,relpath);
}
})();
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var path__$1 = clojure.string.lower_case(path);
return (((!(clojure.string.blank_QMARK_(module$node_modules$path$path.extname(path__$1))))) && (cljs.core.not(cljs.core.some((function (p1__90766_SHARP_){
return clojure.string.ends_with_QMARK_(path__$1,p1__90766_SHARP_);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".md",".markdown",".org",".js",".edn",".css"], null)))));
}
}
}
}
} else {
return null;
}
});
frontend.util.fs.read_graphs_txid_info = (function frontend$util$fs$read_graphs_txid_info(root){
if(typeof root === 'string'){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(root,"logseq/graphs-txid.edn"),(function (exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(root,"logseq/graphs-txid.edn"),(function (txid_str){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = txid_str;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(txid_str);
} else {
return and__5041__auto__;
}
})(),(function (txid_meta){
return promesa.protocols._promise(txid_meta);
}));
}));
})),(function (e){
return console.error("[fs read txid data error]",e);
})):null));
}));
}));
} else {
return null;
}
});
frontend.util.fs.inflate_graphs_info = (function frontend$util$fs$inflate_graphs_info(graphs){
if(cljs.core.seq(graphs)){
return promesa.core.all((function (){var iter__5520__auto__ = (function frontend$util$fs$inflate_graphs_info_$_iter__90773(s__90774){
return (new cljs.core.LazySeq(null,(function (){
var s__90774__$1 = s__90774;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__90774__$1);
if(temp__5804__auto__){
var s__90774__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__90774__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__90774__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__90776 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__90775 = (0);
while(true){
if((i__90775 < size__5519__auto__)){
var map__90779 = cljs.core._nth(c__5518__auto__,i__90775);
var map__90779__$1 = cljs.core.__destructure_map(map__90779);
var graph = map__90779__$1;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90779__$1,new cljs.core.Keyword(null,"root","root",-448657453));
cljs.core.chunk_append(b__90776,promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (i__90775,map__90779,map__90779__$1,graph,root,c__5518__auto__,size__5519__auto__,b__90776,s__90774__$2,temp__5804__auto__){
return (function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.fs.read_graphs_txid_info(root),((function (i__90775,map__90779,map__90779__$1,graph,root,c__5518__auto__,size__5519__auto__,b__90776,s__90774__$2,temp__5804__auto__){
return (function (sync_meta){
return promesa.protocols._promise((cljs.core.truth_(sync_meta)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph,new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022),sync_meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),cljs.core.second(sync_meta)], 0)):graph));
});})(i__90775,map__90779,map__90779__$1,graph,root,c__5518__auto__,size__5519__auto__,b__90776,s__90774__$2,temp__5804__auto__))
);
});})(i__90775,map__90779,map__90779__$1,graph,root,c__5518__auto__,size__5519__auto__,b__90776,s__90774__$2,temp__5804__auto__))
));

var G__90806 = (i__90775 + (1));
i__90775 = G__90806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__90776),frontend$util$fs$inflate_graphs_info_$_iter__90773(cljs.core.chunk_rest(s__90774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__90776),null);
}
} else {
var map__90780 = cljs.core.first(s__90774__$2);
var map__90780__$1 = cljs.core.__destructure_map(map__90780);
var graph = map__90780__$1;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90780__$1,new cljs.core.Keyword(null,"root","root",-448657453));
return cljs.core.cons(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (map__90780,map__90780__$1,graph,root,s__90774__$2,temp__5804__auto__){
return (function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.fs.read_graphs_txid_info(root),(function (sync_meta){
return promesa.protocols._promise((cljs.core.truth_(sync_meta)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph,new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022),sync_meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),cljs.core.second(sync_meta)], 0)):graph));
}));
});})(map__90780,map__90780__$1,graph,root,s__90774__$2,temp__5804__auto__))
),frontend$util$fs$inflate_graphs_info_$_iter__90773(cljs.core.rest(s__90774__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(graphs);
})());
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
frontend.util.fs.read_repo_file = (function frontend$util$fs$read_repo_file(repo_url,file_rpath){
var temp__5804__auto__ = frontend.config.get_repo_dir(repo_url);
if(cljs.core.truth_(temp__5804__auto__)){
var repo_dir = temp__5804__auto__;
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath);
} else {
return null;
}
});
frontend.util.fs.multiplatform_reserved_chars = ":\\*\\?\"<>|\\#\\\\";
frontend.util.fs.reserved_chars_pattern = cljs.core.re_pattern(["[",frontend.util.fs.multiplatform_reserved_chars,"]+"].join(''));
/**
 * Includes reserved characters that would broken FS
 */
frontend.util.fs.include_reserved_chars_QMARK_ = (function frontend$util$fs$include_reserved_chars_QMARK_(s){
return frontend.util.safe_re_find(frontend.util.fs.reserved_chars_pattern,s);
});
frontend.util.fs.encode_url_lowbar = (function frontend$util$fs$encode_url_lowbar(input){
return clojure.string.replace(input,"_","%5F");
});
frontend.util.fs.encode_url_percent = (function frontend$util$fs$encode_url_percent(input){
return clojure.string.replace(input,"%","%25");
});
/**
 * Encode slashes / as triple lowbars ___
 * Don't encode _ in most cases, except causing ambiguation
 */
frontend.util.fs.escape_namespace_slashes_and_multilowbars = (function frontend$util$fs$escape_namespace_slashes_and_multilowbars(string){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(string,"___",frontend.util.fs.encode_url_lowbar),"_/",frontend.util.fs.encode_url_lowbar),"/_",frontend.util.fs.encode_url_lowbar),"/","___");
});
frontend.util.fs.windows_reserved_filebodies = cljs.core.set(cljs.core.list("CON","PRN","AUX","NUL","COM1","COM2","COM3","COM4","COM5","COM6","COM7","COM8","COM9","LPT1","LPT2","LPT3","LPT4","LPT5","LPT6","LPT7","LPT8","LPT9"));
/**
 * Encode reserved file names in Windows
 */
frontend.util.fs.escape_windows_reserved_filebodies = (function frontend$util$fs$escape_windows_reserved_filebodies(file_body){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_body),((((cljs.core.contains_QMARK_(frontend.util.fs.windows_reserved_filebodies,file_body)) || (clojure.string.ends_with_QMARK_(file_body,"."))))?"/":null)].join('');
});
frontend.util.fs.url_encode_file_name = (function frontend$util$fs$url_encode_file_name(file_name){
return clojure.string.replace(encodeURIComponent(file_name),"*","%2A");
});
/**
 * Sanitize page-name for file name (strict), for file name in file writing.
 * Use triple lowbar as namespace separator
 */
frontend.util.fs.tri_lb_file_name_sanity = (function frontend$util$fs$tri_lb_file_name_sanity(title){
var G__90787 = title;
var G__90787__$1 = (((G__90787 == null))?null:logseq.graph_parser.util.page_name_sanity(G__90787));
var G__90787__$2 = (((G__90787__$1 == null))?null:clojure.string.replace(G__90787__$1,logseq.graph_parser.util.url_encoded_pattern,frontend.util.fs.encode_url_percent));
var G__90787__$3 = (((G__90787__$2 == null))?null:clojure.string.replace(G__90787__$2,frontend.util.fs.reserved_chars_pattern,frontend.util.fs.url_encode_file_name));
var G__90787__$4 = (((G__90787__$3 == null))?null:clojure.string.replace(G__90787__$3,/^\./,"%2E"));
var G__90787__$5 = (((G__90787__$4 == null))?null:frontend.util.fs.escape_windows_reserved_filebodies(G__90787__$4));
if((G__90787__$5 == null)){
return null;
} else {
return frontend.util.fs.escape_namespace_slashes_and_multilowbars(G__90787__$5);
}
});
frontend.util.fs.legacy_dot_file_name_sanity = (function frontend$util$fs$legacy_dot_file_name_sanity(page_name){
if(typeof page_name === 'string'){
var normalize = (function (s){
return s.normalize("NFC");
});
var remove_boundary_slashes = (function (s){
if(typeof s === 'string'){
var s__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(s)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(s__$1))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(((s__$1).length) - (1)));
} else {
return s__$1;
}
} else {
return null;
}
});
var page = (function (){var G__90790 = page_name;
var G__90790__$1 = (((G__90790 == null))?null:remove_boundary_slashes(G__90790));
var G__90790__$2 = (((G__90790__$1 == null))?null:clojure.string.replace(G__90790__$1,/[:\\*\\?\"<>|]+/,"_"));
var G__90790__$3 = (((G__90790__$2 == null))?null:clojure.string.replace(G__90790__$2,/[\\#|%]+/,"_"));
if((G__90790__$3 == null)){
return null;
} else {
return normalize(G__90790__$3);
}
})();
return clojure.string.replace(page,/\//,".");
} else {
return null;
}
});
frontend.util.fs.legacy_url_file_name_sanity = (function frontend$util$fs$legacy_url_file_name_sanity(page_name){
var url_encode = (function (p1__90794_SHARP_){
var G__90795 = p1__90794_SHARP_;
var G__90795__$1 = (((G__90795 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90795));
var G__90795__$2 = (((G__90795__$1 == null))?null:encodeURIComponent(G__90795__$1));
if((G__90795__$2 == null)){
return null;
} else {
return G__90795__$2.replace("+","%20");
}
});
var G__90796 = page_name;
var G__90796__$1 = (((G__90796 == null))?null:logseq.graph_parser.util.page_name_sanity(G__90796));
var G__90796__$2 = (((G__90796__$1 == null))?null:clojure.string.replace(G__90796__$1,/[\\#|%]+/,url_encode));
var G__90796__$3 = (((G__90796__$2 == null))?null:clojure.string.replace(G__90796__$2,/[:\\*\\?\"<>|]+/,url_encode));
var G__90796__$4 = (((G__90796__$3 == null))?null:clojure.string.replace(G__90796__$3,/\//,url_encode));
if((G__90796__$4 == null)){
return null;
} else {
return clojure.string.replace(G__90796__$4,"*","%2A");
}
});
frontend.util.fs.file_name_sanity = (function frontend$util$fs$file_name_sanity(var_args){
var G__90798 = arguments.length;
switch (G__90798) {
case 1:
return frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$1 = (function (title){
return frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(title,frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$0());
}));

(frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2 = (function (title,file_name_format){
if(typeof title === 'string'){
var G__90799 = file_name_format;
var G__90799__$1 = (((G__90799 instanceof cljs.core.Keyword))?G__90799.fqn:null);
switch (G__90799__$1) {
case "triple-lowbar":
return frontend.util.fs.tri_lb_file_name_sanity(title);

break;
case "legacy-dot":
return frontend.util.fs.legacy_dot_file_name_sanity(title);

break;
default:
return frontend.util.fs.legacy_url_file_name_sanity(title);

}
} else {
return null;
}
}));

(frontend.util.fs.file_name_sanity.cljs$lang$maxFixedArity = 2);

frontend.util.fs.create_title_property_QMARK_ = (function frontend$util$fs$create_title_property_QMARK_(page_name){
var and__5041__auto__ = typeof page_name === 'string';
if(and__5041__auto__){
var filename_format = frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$0();
var file_name = frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(page_name,filename_format);
var page_name_SINGLEQUOTE_ = logseq.graph_parser.util.title_parsing(file_name,filename_format);
var result = (function (){var or__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_name,page_name_SINGLEQUOTE_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return frontend.util.fs.include_reserved_chars_QMARK_(file_name);
}
})();
return result;
} else {
return and__5041__auto__;
}
});

//# sourceMappingURL=frontend.util.fs.js.map
