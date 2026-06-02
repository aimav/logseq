goog.provide('frontend.fs.watcher_handler');
/**
 * For every referred block in the content, fix their block ids in files if missing.
 */
frontend.fs.watcher_handler.set_missing_block_ids_BANG_ = (function frontend$fs$watcher_handler$set_missing_block_ids_BANG_(content){
if(typeof content === 'string'){
var missing_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_block_by_uuid,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.block_ref.get_all_block_ref_ids(content))));
if(cljs.core.seq(missing_blocks)){
return frontend.handler.editor.property.batch_set_block_property_BANG_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))], null);
}),missing_blocks));
} else {
return null;
}
} else {
return null;
}
});
frontend.fs.watcher_handler.handle_add_and_change_BANG_ = (function frontend$fs$watcher_handler$handle_add_and_change_BANG_(repo,path,content,db_content,mtime,backup_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(backup_QMARK_)?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){var temp__5804__auto__ = frontend.config.get_local_dir(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var repo_dir = temp__5804__auto__;
return frontend.handler.file.backup_file_BANG_(repo_dir,path,db_content,content);
} else {
return null;
}
})(),(function (p1__107597_SHARP_){
return console.error("\u274C Bak Error: ",path,p1__107597_SHARP_);
})):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_file(repo,path,content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),true,new cljs.core.Keyword("fs","event","fs/event",301434435),new cljs.core.Keyword("fs","local-file-change","fs/local-file-change",-2084936824)], null)),(function (___$1){
return promesa.protocols._promise((function (){
frontend.fs.watcher_handler.set_missing_block_ids_BANG_(content);

return (frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,mtime) : frontend.db.set_file_last_modified_at_BANG_.call(null,repo,path,mtime));
})()
);
}));
}));
}));
});
frontend.fs.watcher_handler.handle_changed_BANG_ = (function frontend$fs$watcher_handler$handle_changed_BANG_(type,p__107598){
var map__107599 = p__107598;
var map__107599__$1 = cljs.core.__destructure_map(map__107599);
var payload = map__107599__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107599__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107599__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107599__$1,new cljs.core.Keyword(null,"content","content",15833224));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107599__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
var global_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107599__$1,new cljs.core.Keyword(null,"global-dir","global-dir",-1891401566));
if(cljs.core.truth_(dir)){
var repo = (cljs.core.truth_(global_dir)?frontend.state.get_current_repo():((clojure.string.starts_with_QMARK_(dir,"memory://"))?"local":frontend.config.get_local_repo(dir)
));
var repo_dir = frontend.config.get_local_dir(repo);
var map__107600 = stat;
var map__107600__$1 = cljs.core.__destructure_map(map__107600);
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107600__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(logseq.common.path.file_ext(path));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"tldr","tldr",1945790343),null,new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502),null,new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null),ext)){
var db_content_107611 = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
var exists_in_db_QMARK__107612 = (!((db_content_107611 == null)));
var db_content_107613__$1 = (function (){var or__5043__auto__ = db_content_107611;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
if(cljs.core.truth_((function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["unlinkDir",null,"unlink",null,"addDir",null], null), null),type);
}
})())){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlinkDir",type);
if(and__5041__auto__){
return dir;
} else {
return and__5041__auto__;
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","dir-gone","graph/dir-gone",-796087345),dir], null));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("addDir",type);
if(and__5041__auto__){
return dir;
} else {
return and__5041__auto__;
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","dir-back","graph/dir-back",-1720939782),repo,dir], null));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),dir)){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("add",type)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim(db_content_107613__$1))))){
var backup_QMARK__107614 = (!(clojure.string.blank_QMARK_(db_content_107613__$1)));
frontend.fs.watcher_handler.handle_add_and_change_BANG_(repo,path,content,db_content_107613__$1,mtime,backup_QMARK__107614);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("change",type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,repo_dir)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim(db_content_107613__$1))) && (cljs.core.not(logseq.graph_parser.config.local_asset_QMARK_(path))))))))){
if(((clojure.string.includes_QMARK_(path,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory()),"/"].join(''))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim((function (){var or__5043__auto__ = frontend.state.get_default_journal_template();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),"-")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),"*")))))))){
} else {
frontend.fs.watcher_handler.handle_add_and_change_BANG_(repo,path,content,db_content_107613__$1,mtime,cljs.core.not(global_dir));
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlink",type)) && (exists_in_db_QMARK__107612))){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(dir,""),(function (dir_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(dir_exists_QMARK_)?(function (){var temp__5804__auto__ = (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page.call(null,path));
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Delete page: ",page_name,", file path: ",path,"."], 0));

return frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic(page_name,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete-file?","delete-file?",668245808),false], 0));
} else {
return null;
}
})():null));
}));
}));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("change",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,frontend.handler.global_config.global_config_dir())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,"config.edn")){
frontend.handler.file.alter_global_file(frontend.handler.global_config.global_config_path(),content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),true], null));
} else {
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("change",type)) && ((!(exists_in_db_QMARK__107612))))){
console.error("Can't get file in the db: ",path);
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["unlink",null,"add",null,"change",null], null), null),type)) && (clojure.string.ends_with_QMARK_(path,"logseq/custom.css")))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reloading custom.css"], 0));

frontend.handler.ui.add_style_if_exists_BANG_();
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["unlink",null,"add",null,"change",null], null), null),type)){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.watcher-handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fs","watcher-no-handler","fs/watcher-no-handler",1727093639),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null),new cljs.core.Keyword(null,"line","line",212345235),133], null)),null);

}
}
}
}
}
}
}
}
}
}
} else {
}
} else {
}

return null;
} else {
return null;
}
});
/**
 * Preload the homepage file for the current graph. Return loaded file paths.
 * 
 * Prerequisites:
 * - current graph is set
 * - config is loaded
 */
frontend.fs.watcher_handler.preload_graph_homepage_files_BANG_ = (function frontend$fs$watcher_handler$preload_graph_homepage_files_BANG_(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(((cljs.core.not(frontend.state.loading_files_QMARK_(repo))) && (frontend.config.local_db_QMARK_(repo)))){
var repo_dir = frontend.config.get_repo_dir(repo);
var page_name = ((frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(repo))?frontend.date.today():(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Contents";
}
})());
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var file_rpath = (function (){var or__5043__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.get_page_file.call(null,page_name__$1)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(repo);
var ext = frontend.config.get_file_extension(format);
var file_name = ((frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(repo))?frontend.date.journal_title__GT_default(frontend.date.today()):(function (){var or__5043__auto____$1 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home());
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "contents";
}
})());
var parent_dir = ((frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(repo))?frontend.config.get_journals_directory():frontend.config.get_pages_directory());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.watcher-handler","preload-homepage","frontend.fs.watcher-handler/preload-homepage",-1917642873),file_rpath], 0));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath),(function (file_exists_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_exists_QMARK_)?frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(false):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_exists_QMARK_)?frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath):null),(function (file_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_exists_QMARK_)?new cljs.core.Keyword(null,"mtime","mtime",963165087).cljs$core$IFn$_invoke$arity$1(frontend.fs.stat.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath)):null),(function (file_mtime){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,page_name__$1) : frontend.db.page_empty_QMARK_.call(null,repo,page_name__$1)),(function (db_empty_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(db_empty_QMARK_))?(frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,file_rpath) : frontend.db.get_file.call(null,repo,file_rpath)):""),(function (db_content){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5041__auto__ = file_exists_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return db_empty_QMARK_;
} else {
return and__5041__auto__;
}
})())?frontend.fs.watcher_handler.handle_add_and_change_BANG_(repo,file_rpath,file_content,db_content,file_mtime,false):(cljs.core.truth_((function (){var and__5041__auto__ = file_exists_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(db_empty_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_content,db_content)));
} else {
return and__5041__auto__;
}
})())?frontend.fs.watcher_handler.handle_add_and_change_BANG_(repo,file_rpath,file_content,db_content,file_mtime,true):null)),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (___37148__auto____$1){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_rpath], null));
}));
}));
})));
}));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
});
/**
 * This fn replaces the former initial fs watcher
 */
frontend.fs.watcher_handler.load_graph_files_BANG_ = (function frontend$fs$watcher_handler$load_graph_files_BANG_(graph,exclude_files){
if(cljs.core.truth_(graph)){
var repo_dir = frontend.config.get_repo_dir(graph);
var db_files = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(graph) : frontend.db.get_files.call(null,graph)));
var exclude_files__$1 = cljs.core.set((function (){var or__5043__auto__ = exclude_files;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(frontend.fs.readdir.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-only?","path-only?",-825545027),true], 0)),(function (files){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(!(clojure.string.starts_with_QMARK_(f,"logseq/"))),(!(clojure.string.starts_with_QMARK_(f,"journals/"))),(!(clojure.string.starts_with_QMARK_(f,"pages/"))),clojure.string.lower_case(f)], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__107602_SHARP_){
return frontend.util.fs.ignored_path_QMARK_(repo_dir,p1__107602_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__107601_SHARP_){
return logseq.common.path.relative_path(repo_dir,p1__107601_SHARP_);
}),files)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (files){
var deleted_files = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(db_files),cljs.core.set(files));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__107603_SHARP_){
return cljs.core.contains_QMARK_(exclude_files__$1,p1__107603_SHARP_);
}),files),deleted_files], null);
})], 0)),(function (error){
if(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(graph)){
} else {
console.error("reading",graph);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["The graph ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph)," can not be read:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
})),(function (p__107604){
var vec__107605 = p__107604;
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107605,(0),null);
var deleted_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107605,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((((((cljs.core.abs((cljs.core.count(db_files) - cljs.core.count(files))) > (100))) || ((cljs.core.count(deleted_files) > (100)))))?(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.watcher-handler","init-watcher-large-change-set","frontend.fs.watcher-handler/init-watcher-large-change-set",-1379095453)], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Loading changes from disk...",new cljs.core.Keyword(null,"info","info",-317069002),false);
})()
:null),(function (notification_uid){
return promesa.protocols._promise((function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.watcher-handler","initial-watcher","frontend.fs.watcher-handler/initial-watcher",164808834),repo_dir,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),cljs.core.count(deleted_files),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(files)], null)], 0));

if(cljs.core.seq(deleted_files)){
var delete_tx_data_107615 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3(graph,deleted_files,null) : frontend.db.delete_blocks.call(null,graph,deleted_files,null)),(frontend.db.delete_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.delete_files.cljs$core$IFn$_invoke$arity$1(deleted_files) : frontend.db.delete_files.call(null,deleted_files))));
var G__107608_107616 = graph;
var G__107609_107617 = delete_tx_data_107615;
var G__107610_107618 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete-files?","delete-files?",-1341179689),true], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__107608_107616,G__107609_107617,G__107610_107618) : frontend.db.transact_BANG_.call(null,G__107608_107616,G__107609_107617,G__107610_107618));
} else {
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((500)),(function (){
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file_rpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.stat.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath),(function (stat){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((frontend.db.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(graph,file_rpath) : frontend.db.file_exists_QMARK_.call(null,graph,file_rpath)))?"change":"add"),(function (type){
return promesa.protocols._promise(frontend.fs.watcher_handler.handle_changed_BANG_(type,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dir","dir",1734754661),repo_dir,new cljs.core.Keyword(null,"path","path",-188191168),file_rpath,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"stat","stat",-1370599836),stat], null)));
}));
}));
}));
}));
}),files));
})),(function (){
if(cljs.core.truth_(notification_uid)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.watcher-handler","init-notify","frontend.fs.watcher-handler/init-notify",-1180623646)], 0));

frontend.handler.notification.clear_BANG_(notification_uid);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["The graph ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph)," is loaded."].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"clear?","clear?",1363344639),true], null)], null));
} else {
return null;
}
})),(function (error){
return console.dir(error);
}));
})()
);
}));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.fs.watcher_handler.js.map
