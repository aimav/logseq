goog.provide('frontend.handler.file');
frontend.handler.file.load_file = (function frontend$handler$file$load_file(repo_url,path){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo_url),path),(function (content){
return promesa.protocols._promise(content);
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Load file failed: ",path], 0));

return console.error(e);
}));
});
frontend.handler.file.load_multiple_files = (function frontend$handler$file$load_multiple_files(repo_url,paths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__90936_SHARP_){
return frontend.handler.file.load_file(repo_url,p1__90936_SHARP_);
}),paths));
});
frontend.handler.file.keep_formats = (function frontend$handler$file$keep_formats(files,formats){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var format = logseq.graph_parser.util.get_format(file);
return cljs.core.contains_QMARK_(formats,format);
}),files);
});
frontend.handler.file.only_text_formats = (function frontend$handler$file$only_text_formats(files){
return frontend.handler.file.keep_formats(files,logseq.graph_parser.config.text_formats());
});
frontend.handler.file.only_image_formats = (function frontend$handler$file$only_image_formats(files){
return frontend.handler.file.keep_formats(files,logseq.graph_parser.config.img_formats());
});
frontend.handler.file.load_files_contents_BANG_ = (function frontend$handler$file$load_files_contents_BANG_(repo_url,files,ok_handler){
var images = frontend.handler.file.only_image_formats(files);
var files__$1 = frontend.handler.file.only_text_formats(files);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(frontend.handler.file.load_multiple_files(repo_url,files__$1)),(function (contents){
var file_contents = (function (){var G__90937 = cljs.core.zipmap(files__$1,contents);
if(cljs.core.seq(images)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__90937,cljs.core.zipmap(images,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(images),""))], 0));
} else {
return G__90937;
}
})();
var file_contents__$1 = (function (){var iter__5520__auto__ = (function frontend$handler$file$load_files_contents_BANG__$_iter__90938(s__90939){
return (new cljs.core.LazySeq(null,(function (){
var s__90939__$1 = s__90939;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__90939__$1);
if(temp__5804__auto__){
var s__90939__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__90939__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__90939__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__90941 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__90940 = (0);
while(true){
if((i__90940 < size__5519__auto__)){
var vec__90942 = cljs.core._nth(c__5518__auto__,i__90940);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90942,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90942,(1),null);
cljs.core.chunk_append(b__90941,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null));

var G__90979 = (i__90940 + (1));
i__90940 = G__90979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__90941),frontend$handler$file$load_files_contents_BANG__$_iter__90938(cljs.core.chunk_rest(s__90939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__90941),null);
}
} else {
var vec__90945 = cljs.core.first(s__90939__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90945,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90945,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null),frontend$handler$file$load_files_contents_BANG__$_iter__90938(cljs.core.rest(s__90939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(file_contents);
})();
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(file_contents__$1) : ok_handler.call(null,file_contents__$1));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo_url,new cljs.core.Keyword(null,"line","line",212345235),75], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),76], null)),error);
}));
});
/**
 * Backup db content to bak directory
 */
frontend.handler.file.backup_file_BANG_ = (function frontend$handler$file$backup_file_BANG_(repo_url,path,db_content,content){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["backupDbFile",repo_url,path,db_content,content], 0));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.fs.capacitor_fs.backup_file_handle_changed_BANG_(repo_url,path,db_content);
} else {
return null;

}
}
});
frontend.handler.file.detect_deprecations = (function frontend$handler$file$detect_deprecations(path,content){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"logseq/config.edn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.path.dirname(path),frontend.handler.global_config.safe_global_config_dir())))){
return frontend.handler.common.config_edn.detect_deprecations(path,content);
} else {
return null;
}
});
/**
 * Returns true if valid and if false validator displays error message. Files
 *   that are not validated just return true
 */
frontend.handler.file.validate_file = (function frontend$handler$file$validate_file(path,content){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"logseq/config.edn")){
return frontend.handler.common.config_edn.validate_config_edn(path,content,frontend.schema.handler.repo_config.Config_edn);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.path.dirname(path),frontend.handler.global_config.safe_global_config_dir())){
return frontend.handler.common.config_edn.validate_config_edn(path,content,frontend.schema.handler.global_config.Config_edn);
} else {
return true;

}
}
});
frontend.handler.file.write_file_aux_BANG_ = (function frontend$handler$file$write_file_aux_BANG_(repo,path,content,write_file_options){
var original_content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
var path_dir = frontend.config.get_repo_dir(repo);
var write_file_options_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([write_file_options,(cljs.core.truth_(original_content)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null):null)], 0));
return frontend.fs.write_file_BANG_(repo,path_dir,path,content,write_file_options_SINGLEQUOTE_);
});
/**
 * Does pre-checks on a global file, writes if it's not already written
 *   (:from-disk? is not set) and then does post-checks. Currently only handles
 *   global config.edn but can be extended as needed
 */
frontend.handler.file.alter_global_file = (function frontend$handler$file$alter_global_file(path,content,p__90948){
var map__90949 = p__90948;
var map__90949__$1 = cljs.core.__destructure_map(map__90949);
var from_disk_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90949__$1,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161));
if(cljs.core.truth_((function (){var and__5041__auto__ = path;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,frontend.handler.global_config.safe_global_config_path());
} else {
return and__5041__auto__;
}
})())){
frontend.handler.file.detect_deprecations(path,content);

if(frontend.handler.file.validate_file(path,content)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(from_disk_QMARK_)?null:frontend.fs.write_file_BANG_("",null,path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null))),(function (_){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.global_config.restore_global_config_BANG_(),(function (___37148__auto__){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577)], null)));
}));
})));
}));
})),(function (error){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),["Failed to write to file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),", error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write","failed","write/failed",-1544073021),error,new cljs.core.Keyword(null,"line","line",212345235),136], null)),null);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed-for-alter-file","write-file/failed-for-alter-file",-2085354444)], null)], null)], null));
}));
} else {
return null;
}
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"alter-global-file does not support this file",new cljs.core.Keyword(null,"file","file",-1269645878),path,new cljs.core.Keyword(null,"line","line",212345235),140], null)),null);
}
});
/**
 * Write any in-DB file, e.g. repo config, page, whiteboard, etc.
 */
frontend.handler.file.alter_file = (function frontend$handler$file$alter_file(repo,path,content,p__90950){
var map__90951 = p__90950;
var map__90951__$1 = cljs.core.__destructure_map(map__90951);
var skip_compare_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90951__$1,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),false);
var extracted_block_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90951__$1,new cljs.core.Keyword(null,"extracted-block-ids","extracted-block-ids",-1444219803));
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90951__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),true);
var re_render_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90951__$1,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false);
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90951__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var from_disk_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90951__$1,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),false);
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90951__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90951__$1,new cljs.core.Keyword("fs","event","fs/event",301434435));
var skip_db_transact_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90951__$1,new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516));
var path__$1 = logseq.graph_parser.util.path_normalize(path);
var config_file_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,"logseq/config.edn");
var _ = ((config_file_QMARK_)?frontend.handler.file.detect_deprecations(path__$1,content):null);
var config_valid_QMARK_ = ((config_file_QMARK_) && (frontend.handler.file.validate_file(path__$1,content)));
if(((config_valid_QMARK_) || ((!(config_file_QMARK_))))){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),from_disk_QMARK_,new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516),skip_db_transact_QMARK_,new cljs.core.Keyword("fs","event","fs/event",301434435),event], null);
var result = (cljs.core.truth_(reset_QMARK_)?(function (){
if(cljs.core.truth_(skip_db_transact_QMARK_)){
} else {
var temp__5804__auto___90980 = (frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1(path__$1) : frontend.db.get_file_page_id.call(null,path__$1));
if(cljs.core.truth_(temp__5804__auto___90980)){
var page_id_90981 = temp__5804__auto___90980;
var G__90952_90982 = repo;
var G__90953_90983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_90981,new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_90981,new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null);
var G__90954_90984 = opts;
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__90952_90982,G__90953_90983,G__90954_90984) : frontend.db.transact_BANG_.call(null,G__90952_90982,G__90953_90983,G__90954_90984));
} else {
}
}

return frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo,path__$1,content,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,(((!((extracted_block_ids == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extracted-block-ids","extracted-block-ids",-1444219803),extracted_block_ids], null):null),(((!((verbose == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose], null):null)], 0)));
})()
:(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$4(repo,path__$1,content,opts) : frontend.db.set_file_content_BANG_.call(null,repo,path__$1,content,opts)));
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(from_disk_QMARK_)?null:frontend.handler.file.write_file_aux_BANG_(repo,path__$1,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),skip_compare_QMARK_], null))),(function (___$1){
return promesa.protocols._promise((function (){
if(cljs.core.truth_(re_render_root_QMARK_)){
frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,"logseq/custom.css")){
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path__$1,content) : frontend.db.set_file_content_BANG_.call(null,repo,path__$1,content));

return frontend.handler.ui.add_style_if_exists_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,"logseq/config.edn")){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo,content),(function (___$2){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577)], null)));
}));
}));
} else {
return null;
}
}
})()
);
}));
})),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Write file failed, path: ",path__$1,", content: ",content], 0));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write","failed","write/failed",-1544073021),error,new cljs.core.Keyword(null,"line","line",212345235),192], null)),null);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed-for-alter-file","write-file/failed-for-alter-file",-2085354444)], null)], null)], null));
}));

return result;
} else {
return null;
}
});
frontend.handler.file.set_file_content_BANG_ = (function frontend$handler$file$set_file_content_BANG_(repo,path,new_content){
return frontend.handler.file.alter_file(repo,path,new_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false], null));
});
frontend.handler.file.alter_files_handler_BANG_ = (function frontend$handler$file$alter_files_handler_BANG_(repo,files,p__90955,file__GT_content){
var map__90956 = p__90955;
var map__90956__$1 = cljs.core.__destructure_map(map__90956);
var finish_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90956__$1,new cljs.core.Keyword(null,"finish-handler","finish-handler",770511735));
var write_file_f = (function (p__90957){
var vec__90958 = p__90957;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90958,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90958,(1),null);
if(cljs.core.truth_(path)){
var path__$1 = logseq.graph_parser.util.path_normalize(path);
var original_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file__GT_content,path__$1);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.fs.nfs.check_directory_permission_BANG_(repo);
}
})(),(function (_){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path__$1,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null)));
}));
})),(function (error){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["Failed to save the file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),". Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed","write-file/failed",325307384)], null)], null)], null));

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),223], null)),null);
}));
} else {
return null;
}
});
var finish_handler__$1 = (function (){
if(cljs.core.truth_(finish_handler)){
return (finish_handler.cljs$core$IFn$_invoke$arity$0 ? finish_handler.cljs$core$IFn$_invoke$arity$0() : finish_handler.call(null));
} else {
return null;
}
});
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(write_file_f,files)),(function (){
return finish_handler__$1();
})),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Alter files failed:"], 0));

return console.error(error);
}));
});
frontend.handler.file.alter_files = (function frontend$handler$file$alter_files(repo,files,p__90961){
var map__90962 = p__90961;
var map__90962__$1 = cljs.core.__destructure_map(map__90962);
var opts = map__90962__$1;
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90962__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false);
var update_db_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90962__$1,new cljs.core.Keyword(null,"update-db?","update-db?",-1641846808),true);
var file__GT_content = (function (){var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,files);
return cljs.core.zipmap(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
}),paths));
})();
if(cljs.core.truth_(update_db_QMARK_)){
var seq__90963_90985 = cljs.core.seq(files);
var chunk__90964_90986 = null;
var count__90965_90987 = (0);
var i__90966_90988 = (0);
while(true){
if((i__90966_90988 < count__90965_90987)){
var vec__90973_90989 = chunk__90964_90986.cljs$core$IIndexed$_nth$arity$2(null,i__90966_90988);
var path_90990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90973_90989,(0),null);
var content_90991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90973_90989,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_90990,content_90991);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_90990,content_90991) : frontend.db.set_file_content_BANG_.call(null,repo,path_90990,content_90991));
}


var G__90992 = seq__90963_90985;
var G__90993 = chunk__90964_90986;
var G__90994 = count__90965_90987;
var G__90995 = (i__90966_90988 + (1));
seq__90963_90985 = G__90992;
chunk__90964_90986 = G__90993;
count__90965_90987 = G__90994;
i__90966_90988 = G__90995;
continue;
} else {
var temp__5804__auto___90996 = cljs.core.seq(seq__90963_90985);
if(temp__5804__auto___90996){
var seq__90963_90997__$1 = temp__5804__auto___90996;
if(cljs.core.chunked_seq_QMARK_(seq__90963_90997__$1)){
var c__5565__auto___90998 = cljs.core.chunk_first(seq__90963_90997__$1);
var G__90999 = cljs.core.chunk_rest(seq__90963_90997__$1);
var G__91000 = c__5565__auto___90998;
var G__91001 = cljs.core.count(c__5565__auto___90998);
var G__91002 = (0);
seq__90963_90985 = G__90999;
chunk__90964_90986 = G__91000;
count__90965_90987 = G__91001;
i__90966_90988 = G__91002;
continue;
} else {
var vec__90976_91003 = cljs.core.first(seq__90963_90997__$1);
var path_91004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90976_91003,(0),null);
var content_91005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90976_91003,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_91004,content_91005);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_91004,content_91005) : frontend.db.set_file_content_BANG_.call(null,repo,path_91004,content_91005));
}


var G__91006 = cljs.core.next(seq__90963_90997__$1);
var G__91007 = null;
var G__91008 = (0);
var G__91009 = (0);
seq__90963_90985 = G__91006;
chunk__90964_90986 = G__91007;
count__90965_90987 = G__91008;
i__90966_90988 = G__91009;
continue;
}
} else {
}
}
break;
}
} else {
}

return frontend.handler.file.alter_files_handler_BANG_(repo,files,opts,file__GT_content);
});
frontend.handler.file.watch_for_current_graph_dir_BANG_ = (function frontend$handler$file$watch_for_current_graph_dir_BANG_(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5804__auto____$1)){
var dir = temp__5804__auto____$1;
frontend.fs.unwatch_dir_BANG_(dir);

return frontend.fs.watch_dir_BANG_.cljs$core$IFn$_invoke$arity$1(dir);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.file.js.map
