goog.provide('frontend.handler.repo');
frontend.handler.repo.create_contents_file = (function frontend$handler$repo$create_contents_file(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo_url),(function (repo_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_pages_directory(),(function (pages_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__106930_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pages_dir),"/contents.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__106930_SHARP_)].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["org","md"], null)),(function (p__106932){
var vec__106933 = p__106932;
var org_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106933,(0),null);
var md_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106933,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.some((function (p1__106931_SHARP_){
return frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo_dir,p1__106931_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [org_path,md_path], null)),(function (contents_file_exist_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(contents_file_exist_QMARK_)?null:(function (){var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var file_rpath = ["pages/","contents.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('');
var default_content = (function (){var G__106936 = cljs.core.name(format);
switch (G__106936) {
case "org":
return "*\n";

break;
case "markdown":
return "-\n";

break;
default:
return "";

}
})();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_dir], 0))),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_rpath,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,file_rpath,default_content)));
}));
}));
}));
})()));
}));
}));
}));
}));
}));
});
frontend.handler.repo.create_custom_theme = (function frontend$handler$repo$create_custom_theme(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [frontend.config.app_name,"/",frontend.config.custom_css_file].join('');
var file_rpath = path;
var default_content = "";
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0))),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_rpath,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
});
frontend.handler.repo.create_dummy_notes_page = (function frontend$handler$repo$create_dummy_notes_page(repo_url,content){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
var file_rpath = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_pages_directory()),"/how_to_make_dummy_notes.md"].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.get_pages_directory()], 0))),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_rpath,content),(function (_file_exists_QMARK_){
return promesa.protocols._promise(frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,file_rpath,content));
}));
}));
}));
});
frontend.handler.repo.create_today_journal_if_not_exists = (function frontend$handler$repo$create_today_journal_if_not_exists(repo_url,p__106937){
var map__106938 = p__106937;
var map__106938__$1 = cljs.core.__destructure_map(map__106938);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106938__$1,new cljs.core.Keyword(null,"content","content",15833224));
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

if(frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(repo_url)){
var repo_dir = frontend.config.get_repo_dir(repo_url);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(repo_url);
var title = frontend.date.today();
var file_name = frontend.date.journal_title__GT_default(title);
var default_content = frontend.util.default_content_with_title(format);
var template = frontend.state.get_default_journal_template();
var template__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = template;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(template)));
} else {
return and__5041__auto__;
}
})())?template:null);
var content__$1 = (cljs.core.truth_(content)?content:(cljs.core.truth_(template__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(default_content),template__$1].join(''):default_content
));
var file_rpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_journals_directory(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('')], 0));
var page_exists_QMARK_ = (function (){var G__106939 = repo_url;
var G__106940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__106939,G__106940) : frontend.db.entity.call(null,G__106939,G__106940));
})();
var empty_blocks_QMARK_ = (function (){var G__106941 = repo_url;
var G__106942 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title));
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__106941,G__106942) : frontend.db.page_empty_QMARK_.call(null,G__106941,G__106942));
})();
if(cljs.core.truth_((function (){var or__5043__auto__ = empty_blocks_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(page_exists_QMARK_);
}
})())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.check_directory_permission_BANG_(repo_url),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.get_journals_directory()], 0))),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath),(function (file_exists_QMARK_){
return promesa.protocols._promise((function (){
if(cljs.core.truth_(file_exists_QMARK_)){
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,file_rpath,content__$1),(function (___$2){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_rpath,content__$1),(function (___$3){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.editing_QMARK_())?null:frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0()));
}));
})));
}));
}));
}

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return null;
} else {
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
}
})()
);
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
frontend.handler.repo.create_default_files_BANG_ = (function frontend$handler$repo$create_default_files_BANG_(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0))),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.recycle_dir], 0))),(function (___37148__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.get_journals_directory()], 0))),(function (___37148__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo_config.create_config_file_if_not_exists(repo_url),(function (___37148__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_contents_file(repo_url),(function (___37148__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_custom_theme(repo_url),(function (___37148__auto____$5){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create-today-journal","page/create-today-journal",-248526088),repo_url], null)));
}));
}));
}));
}));
}));
}));
}));
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.repo !== 'undefined') && (typeof frontend.handler.repo._STAR_file_tx !== 'undefined')){
} else {
frontend.handler.repo._STAR_file_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Accept: .md, .org, .edn, .css
 */
frontend.handler.repo.parse_and_load_file_BANG_ = (function frontend$handler$repo$parse_and_load_file_BANG_(repo_url,file,p__106943){
var map__106944 = p__106943;
var map__106944__$1 = cljs.core.__destructure_map(map__106944);
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106944__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106944__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var skip_db_transact_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106944__$1,new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516),true);
var extracted_block_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106944__$1,new cljs.core.Keyword(null,"extracted-block-ids","extracted-block-ids",-1444219803));
try{cljs.core.reset_BANG_(frontend.handler.repo._STAR_file_tx,frontend.handler.file.alter_file(repo_url,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),true,new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516),skip_db_transact_QMARK_], null),(((!((extracted_block_ids == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extracted-block-ids","extracted-block-ids",-1444219803),extracted_block_ids], null):null),(((!((verbose == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose], null):null)], 0))));

frontend.state.set_parsing_state_BANG_((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"finished","finished",-1018867731),cljs.core.inc);
}));

return cljs.core.deref(frontend.handler.repo._STAR_file_tx);
}catch (e106945){var e = e106945;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parse and load file failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file))], 0));

console.error(e);

frontend.state.set_parsing_state_BANG_((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword(null,"failed-parsing-files","failed-parsing-files",1012423223),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),e], null));
}));

frontend.state.set_parsing_state_BANG_((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"finished","finished",-1018867731),cljs.core.inc);
}));

return null;
}});
frontend.handler.repo.after_parse = (function frontend$handler$repo$after_parse(repo_url,re_render_QMARK_,re_render_opts,opts,graph_added_chan){
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570).cljs$core$IFn$_invoke$arity$1(opts));
}
})())){
frontend.handler.repo.create_default_files_BANG_(repo_url);
} else {
}

if(cljs.core.truth_(re_render_QMARK_)){
frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1(re_render_opts);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","added","graph/added",2021754774),repo_url,opts], null));

var parse_errors_107194 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),repo_url,new cljs.core.Keyword(null,"failed-parsing-files","failed-parsing-files",1012423223)], null));
if(cljs.core.seq(parse_errors_107194)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","parse-and-load-error","file/parse-and-load-error",-808105720),repo_url,parse_errors_107194], null));
} else {
}

frontend.state.reset_parsing_state_BANG_();

frontend.state.set_loading_files_BANG_(repo_url,false);

return cljs.core.async.offer_BANG_(graph_added_chan,true);
});
frontend.handler.repo.parse_files_and_create_default_files_inner_BANG_ = (function frontend$handler$repo$parse_files_and_create_default_files_inner_BANG_(repo_url,files,delete_files,delete_blocks,re_render_QMARK_,re_render_opts,opts){
var supported_files = logseq.graph_parser.filter_files(files);
var delete_data = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(delete_files,delete_blocks));
var indexed_files = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(supported_files);
var chan = cljs.core.async.to_chan_BANG_(indexed_files);
var graph_added_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var total = cljs.core.count(supported_files);
var large_graph_QMARK_ = (total > (1000));
var _STAR_page_names = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var _STAR_page_name__GT_path = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_extracted_block_ids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.seq(delete_data)){
var G__106946_107195 = repo_url;
var G__106947_107196 = delete_data;
var G__106948_107197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete-files?","delete-files?",-1341179689),true], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__106946_107195,G__106947_107196,G__106948_107197) : frontend.db.transact_BANG_.call(null,G__106946_107195,G__106947_107196,G__106948_107197));
} else {
}

frontend.state.set_current_repo_BANG_(repo_url);

frontend.state.set_parsing_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(supported_files)], null));

if(frontend.util.node_test_QMARK_){
var seq__106949_107198 = cljs.core.seq(supported_files);
var chunk__106950_107199 = null;
var count__106951_107200 = (0);
var i__106952_107201 = (0);
while(true){
if((i__106952_107201 < count__106951_107200)){
var file_107202 = chunk__106950_107199.cljs$core$IIndexed$_nth$arity$2(null,i__106952_107201);
frontend.state.set_parsing_state_BANG_(((function (seq__106949_107198,chunk__106950_107199,count__106951_107200,i__106952_107201,file_107202,supported_files,delete_data,indexed_files,chan,graph_added_chan,total,large_graph_QMARK_,_STAR_page_names,_STAR_page_name__GT_path,_STAR_extracted_block_ids){
return (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file_107202));
});})(seq__106949_107198,chunk__106950_107199,count__106951_107200,i__106952_107201,file_107202,supported_files,delete_data,indexed_files,chan,graph_added_chan,total,large_graph_QMARK_,_STAR_page_names,_STAR_page_name__GT_path,_STAR_extracted_block_ids))
);

frontend.handler.repo.parse_and_load_file_BANG_(repo_url,file_107202,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"verbose","verbose",1694226060)], null)),new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516),false));


var G__107203 = seq__106949_107198;
var G__107204 = chunk__106950_107199;
var G__107205 = count__106951_107200;
var G__107206 = (i__106952_107201 + (1));
seq__106949_107198 = G__107203;
chunk__106950_107199 = G__107204;
count__106951_107200 = G__107205;
i__106952_107201 = G__107206;
continue;
} else {
var temp__5804__auto___107207 = cljs.core.seq(seq__106949_107198);
if(temp__5804__auto___107207){
var seq__106949_107208__$1 = temp__5804__auto___107207;
if(cljs.core.chunked_seq_QMARK_(seq__106949_107208__$1)){
var c__5565__auto___107209 = cljs.core.chunk_first(seq__106949_107208__$1);
var G__107210 = cljs.core.chunk_rest(seq__106949_107208__$1);
var G__107211 = c__5565__auto___107209;
var G__107212 = cljs.core.count(c__5565__auto___107209);
var G__107213 = (0);
seq__106949_107198 = G__107210;
chunk__106950_107199 = G__107211;
count__106951_107200 = G__107212;
i__106952_107201 = G__107213;
continue;
} else {
var file_107214 = cljs.core.first(seq__106949_107208__$1);
frontend.state.set_parsing_state_BANG_(((function (seq__106949_107198,chunk__106950_107199,count__106951_107200,i__106952_107201,file_107214,seq__106949_107208__$1,temp__5804__auto___107207,supported_files,delete_data,indexed_files,chan,graph_added_chan,total,large_graph_QMARK_,_STAR_page_names,_STAR_page_name__GT_path,_STAR_extracted_block_ids){
return (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file_107214));
});})(seq__106949_107198,chunk__106950_107199,count__106951_107200,i__106952_107201,file_107214,seq__106949_107208__$1,temp__5804__auto___107207,supported_files,delete_data,indexed_files,chan,graph_added_chan,total,large_graph_QMARK_,_STAR_page_names,_STAR_page_name__GT_path,_STAR_extracted_block_ids))
);

frontend.handler.repo.parse_and_load_file_BANG_(repo_url,file_107214,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"verbose","verbose",1694226060)], null)),new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516),false));


var G__107215 = cljs.core.next(seq__106949_107208__$1);
var G__107216 = null;
var G__107217 = (0);
var G__107218 = (0);
seq__106949_107198 = G__107215;
chunk__106950_107199 = G__107216;
count__106951_107200 = G__107217;
i__106952_107201 = G__107218;
continue;
}
} else {
}
}
break;
}

frontend.handler.repo.after_parse(repo_url,re_render_QMARK_,re_render_opts,opts,graph_added_chan);
} else {
var c__34483__auto___107219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107083){
var state_val_107084 = (state_107083[(1)]);
if((state_val_107084 === (7))){
var inst_107079 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
var statearr_107085_107220 = state_107083__$1;
(statearr_107085_107220[(2)] = inst_107079);

(statearr_107085_107220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (20))){
var inst_106988 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
var statearr_107086_107221 = state_107083__$1;
(statearr_107086_107221[(2)] = inst_106988);

(statearr_107086_107221[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (27))){
var inst_106954 = (state_107083[(7)]);
var state_107083__$1 = state_107083;
var statearr_107087_107222 = state_107083__$1;
(statearr_107087_107222[(2)] = inst_106954);

(statearr_107087_107222[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (1))){
var inst_106953 = cljs.core.PersistentVector.EMPTY;
var inst_106954 = inst_106953;
var state_107083__$1 = (function (){var statearr_107088 = state_107083;
(statearr_107088[(7)] = inst_106954);

return statearr_107088;
})();
var statearr_107089_107223 = state_107083__$1;
(statearr_107089_107223[(2)] = null);

(statearr_107089_107223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (24))){
var inst_107004 = (state_107083[(8)]);
var inst_107006 = cljs.core.deref(_STAR_page_names);
var inst_107007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_107006,inst_107004);
var state_107083__$1 = state_107083;
var statearr_107090_107224 = state_107083__$1;
(statearr_107090_107224[(2)] = inst_107007);

(statearr_107090_107224[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (39))){
var inst_107004 = (state_107083[(8)]);
var inst_106963 = (state_107083[(9)]);
var inst_107044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_page_names,cljs.core.conj,inst_107004);
var inst_107045 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_106963);
var inst_107046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_page_name__GT_path,cljs.core.assoc,inst_107004,inst_107045);
var state_107083__$1 = (function (){var statearr_107091 = state_107083;
(statearr_107091[(10)] = inst_107044);

return statearr_107091;
})();
var statearr_107092_107225 = state_107083__$1;
(statearr_107092_107225[(2)] = inst_107046);

(statearr_107092_107225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (46))){
var inst_107037 = (state_107083[(11)]);
var state_107083__$1 = state_107083;
var statearr_107093_107226 = state_107083__$1;
(statearr_107093_107226[(2)] = inst_107037);

(statearr_107093_107226[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (4))){
var inst_106957 = (state_107083[(12)]);
var inst_106957__$1 = (state_107083[(2)]);
var state_107083__$1 = (function (){var statearr_107094 = state_107083;
(statearr_107094[(12)] = inst_106957__$1);

return statearr_107094;
})();
if(cljs.core.truth_(inst_106957__$1)){
var statearr_107095_107227 = state_107083__$1;
(statearr_107095_107227[(1)] = (5));

} else {
var statearr_107096_107228 = state_107083__$1;
(statearr_107096_107228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (15))){
var inst_106965 = (state_107083[(13)]);
var state_107083__$1 = state_107083;
var statearr_107097_107229 = state_107083__$1;
(statearr_107097_107229[(2)] = inst_106965);

(statearr_107097_107229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (48))){
var inst_106954 = (state_107083[(7)]);
var inst_107070 = [new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161)];
var inst_107071 = [true];
var inst_107072 = cljs.core.PersistentHashMap.fromArrays(inst_107070,inst_107071);
var inst_107073 = (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,inst_106954,inst_107072) : frontend.db.transact_BANG_.call(null,repo_url,inst_106954,inst_107072));
var state_107083__$1 = state_107083;
var statearr_107098_107230 = state_107083__$1;
(statearr_107098_107230[(2)] = inst_107073);

(statearr_107098_107230[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (50))){
var inst_107076 = (state_107083[(2)]);
var inst_107077 = frontend.handler.repo.after_parse(repo_url,re_render_QMARK_,re_render_opts,opts,graph_added_chan);
var state_107083__$1 = (function (){var statearr_107099 = state_107083;
(statearr_107099[(14)] = inst_107076);

return statearr_107099;
})();
var statearr_107100_107231 = state_107083__$1;
(statearr_107100_107231[(2)] = inst_107077);

(statearr_107100_107231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (21))){
var inst_106996 = (state_107083[(15)]);
var inst_106998 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_106996,new cljs.core.Keyword(null,"skip-db-transact?","skip-db-transact?",684666516),false);
var state_107083__$1 = state_107083;
var statearr_107101_107232 = state_107083__$1;
(statearr_107101_107232[(2)] = inst_106998);

(statearr_107101_107232[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (31))){
var state_107083__$1 = state_107083;
var statearr_107102_107233 = state_107083__$1;
(statearr_107102_107233[(1)] = (33));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (32))){
var inst_107035 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
var statearr_107104_107234 = state_107083__$1;
(statearr_107104_107234[(2)] = inst_107035);

(statearr_107104_107234[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (40))){
var state_107083__$1 = state_107083;
var statearr_107105_107235 = state_107083__$1;
(statearr_107105_107235[(2)] = null);

(statearr_107105_107235[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (33))){
var inst_106954 = (state_107083[(7)]);
var inst_107002 = (state_107083[(16)]);
var inst_107030 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_106954,inst_107002);
var state_107083__$1 = state_107083;
var statearr_107106_107236 = state_107083__$1;
(statearr_107106_107236[(2)] = inst_107030);

(statearr_107106_107236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (13))){
var inst_106980 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
var statearr_107107_107237 = state_107083__$1;
(statearr_107107_107237[(2)] = inst_106980);

(statearr_107107_107237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (22))){
var inst_106996 = (state_107083[(15)]);
var state_107083__$1 = state_107083;
var statearr_107108_107238 = state_107083__$1;
(statearr_107108_107238[(2)] = inst_106996);

(statearr_107108_107238[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (36))){
var inst_107010 = (state_107083[(17)]);
var inst_107039 = cljs.core.not(inst_107010);
var state_107083__$1 = state_107083;
var statearr_107109_107239 = state_107083__$1;
(statearr_107109_107239[(2)] = inst_107039);

(statearr_107109_107239[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (41))){
var inst_106965 = (state_107083[(13)]);
var inst_107049 = (state_107083[(2)]);
var state_107083__$1 = (function (){var statearr_107110 = state_107083;
(statearr_107110[(18)] = inst_107049);

return statearr_107110;
})();
if(cljs.core.truth_(inst_106965)){
var statearr_107111_107240 = state_107083__$1;
(statearr_107111_107240[(1)] = (42));

} else {
var statearr_107112_107241 = state_107083__$1;
(statearr_107112_107241[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (43))){
var inst_106962 = (state_107083[(19)]);
var inst_107052 = (inst_106962 + (1));
var inst_107053 = cljs.core.rem(inst_107052,(100));
var inst_107054 = (inst_107053 === (0));
var state_107083__$1 = state_107083;
var statearr_107113_107242 = state_107083__$1;
(statearr_107113_107242[(2)] = inst_107054);

(statearr_107113_107242[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (29))){
var inst_107004 = (state_107083[(8)]);
var inst_107037 = (state_107083[(2)]);
var state_107083__$1 = (function (){var statearr_107114 = state_107083;
(statearr_107114[(11)] = inst_107037);

return statearr_107114;
})();
if(cljs.core.truth_(inst_107004)){
var statearr_107115_107243 = state_107083__$1;
(statearr_107115_107243[(1)] = (36));

} else {
var statearr_107116_107244 = state_107083__$1;
(statearr_107116_107244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (44))){
var inst_107056 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
if(cljs.core.truth_(inst_107056)){
var statearr_107117_107245 = state_107083__$1;
(statearr_107117_107245[(1)] = (45));

} else {
var statearr_107118_107246 = state_107083__$1;
(statearr_107118_107246[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (6))){
var inst_106954 = (state_107083[(7)]);
var inst_107068 = cljs.core.seq(inst_106954);
var state_107083__$1 = state_107083;
if(inst_107068){
var statearr_107119_107247 = state_107083__$1;
(statearr_107119_107247[(1)] = (48));

} else {
var statearr_107120_107248 = state_107083__$1;
(statearr_107120_107248[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (28))){
var inst_107010 = (state_107083[(17)]);
var state_107083__$1 = state_107083;
if(cljs.core.truth_(inst_107010)){
var statearr_107121_107249 = state_107083__$1;
(statearr_107121_107249[(1)] = (30));

} else {
var statearr_107122_107250 = state_107083__$1;
(statearr_107122_107250[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (25))){
var inst_107004 = (state_107083[(8)]);
var state_107083__$1 = state_107083;
var statearr_107123_107251 = state_107083__$1;
(statearr_107123_107251[(2)] = inst_107004);

(statearr_107123_107251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (34))){
var state_107083__$1 = state_107083;
var statearr_107124_107253 = state_107083__$1;
(statearr_107124_107253[(2)] = null);

(statearr_107124_107253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (17))){
var inst_106986 = cljs.core.async.timeout((1));
var state_107083__$1 = state_107083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107083__$1,(20),inst_106986);
} else {
if((state_val_107084 === (3))){
var inst_107081 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107083__$1,inst_107081);
} else {
if((state_val_107084 === (12))){
var inst_106962 = (state_107083[(19)]);
var inst_106974 = (state_107083[(20)]);
var inst_106973 = (total - inst_106962);
var inst_106974__$1 = (inst_106973 <= (10));
var state_107083__$1 = (function (){var statearr_107125 = state_107083;
(statearr_107125[(20)] = inst_106974__$1);

return statearr_107125;
})();
if(cljs.core.truth_(inst_106974__$1)){
var statearr_107126_107254 = state_107083__$1;
(statearr_107126_107254[(1)] = (14));

} else {
var statearr_107127_107255 = state_107083__$1;
(statearr_107127_107255[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (2))){
var state_107083__$1 = state_107083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107083__$1,(4),chan);
} else {
if((state_val_107084 === (23))){
var inst_106963 = (state_107083[(9)]);
var inst_106962 = (state_107083[(19)]);
var inst_106957 = (state_107083[(12)]);
var inst_106965 = (state_107083[(13)]);
var inst_106982 = (state_107083[(21)]);
var inst_106954 = (state_107083[(7)]);
var inst_107002 = (state_107083[(16)]);
var inst_107004 = (state_107083[(8)]);
var inst_107001 = (state_107083[(2)]);
var inst_107002__$1 = frontend.handler.repo.parse_and_load_file_BANG_(repo_url,inst_106963,inst_107001);
var inst_107003 = (function (){var idx = inst_106962;
var temp__5802__auto__ = inst_106957;
var whiteboard_QMARK_ = inst_106965;
var yield_for_ui_QMARK_ = inst_106982;
var file = inst_106963;
var item = inst_106957;
var opts_SINGLEQUOTE_ = inst_107001;
var tx = inst_106954;
var result = inst_107002__$1;
var vec__106959 = inst_106957;
return (function (x){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(x);
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(x)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
})();
var inst_107004__$1 = cljs.core.some(inst_107003,inst_107002__$1);
var state_107083__$1 = (function (){var statearr_107128 = state_107083;
(statearr_107128[(16)] = inst_107002__$1);

(statearr_107128[(8)] = inst_107004__$1);

return statearr_107128;
})();
if(cljs.core.truth_(inst_107004__$1)){
var statearr_107129_107256 = state_107083__$1;
(statearr_107129_107256[(1)] = (24));

} else {
var statearr_107130_107257 = state_107083__$1;
(statearr_107130_107257[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (47))){
var inst_107065 = (state_107083[(2)]);
var inst_106954 = inst_107065;
var state_107083__$1 = (function (){var statearr_107131 = state_107083;
(statearr_107131[(7)] = inst_106954);

return statearr_107131;
})();
var statearr_107132_107258 = state_107083__$1;
(statearr_107132_107258[(2)] = null);

(statearr_107132_107258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (35))){
var inst_107033 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
var statearr_107133_107259 = state_107083__$1;
(statearr_107133_107259[(2)] = inst_107033);

(statearr_107133_107259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (19))){
var inst_106965 = (state_107083[(13)]);
var inst_106991 = (state_107083[(2)]);
var inst_106992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_106993 = [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"verbose","verbose",1694226060)];
var inst_106994 = (new cljs.core.PersistentVector(null,2,(5),inst_106992,inst_106993,null));
var inst_106995 = cljs.core.select_keys(opts,inst_106994);
var inst_106996 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_106995,new cljs.core.Keyword(null,"extracted-block-ids","extracted-block-ids",-1444219803),_STAR_extracted_block_ids);
var state_107083__$1 = (function (){var statearr_107134 = state_107083;
(statearr_107134[(22)] = inst_106991);

(statearr_107134[(15)] = inst_106996);

return statearr_107134;
})();
if(cljs.core.truth_(inst_106965)){
var statearr_107135_107260 = state_107083__$1;
(statearr_107135_107260[(1)] = (21));

} else {
var statearr_107136_107261 = state_107083__$1;
(statearr_107136_107261[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (11))){
var inst_106970 = (state_107083[(23)]);
var state_107083__$1 = state_107083;
var statearr_107137_107262 = state_107083__$1;
(statearr_107137_107262[(2)] = inst_106970);

(statearr_107137_107262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (9))){
var inst_106962 = (state_107083[(19)]);
var inst_106970 = (state_107083[(23)]);
var inst_106969 = cljs.core.rem(inst_106962,(10));
var inst_106970__$1 = (inst_106969 === (0));
var state_107083__$1 = (function (){var statearr_107138 = state_107083;
(statearr_107138[(23)] = inst_106970__$1);

return statearr_107138;
})();
if(cljs.core.truth_(inst_106970__$1)){
var statearr_107139_107264 = state_107083__$1;
(statearr_107139_107264[(1)] = (11));

} else {
var statearr_107140_107266 = state_107083__$1;
(statearr_107140_107266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (5))){
var inst_106957 = (state_107083[(12)]);
var inst_106963 = (state_107083[(9)]);
var inst_106966 = (state_107083[(24)]);
var inst_106962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_106957,(0),null);
var inst_106963__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_106957,(1),null);
var inst_106964 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_106963__$1);
var inst_106965 = logseq.graph_parser.config.whiteboard_QMARK_(inst_106964);
var inst_106966__$1 = (!(large_graph_QMARK_));
var state_107083__$1 = (function (){var statearr_107141 = state_107083;
(statearr_107141[(19)] = inst_106962);

(statearr_107141[(9)] = inst_106963__$1);

(statearr_107141[(13)] = inst_106965);

(statearr_107141[(24)] = inst_106966__$1);

return statearr_107141;
})();
if(inst_106966__$1){
var statearr_107142_107269 = state_107083__$1;
(statearr_107142_107269[(1)] = (8));

} else {
var statearr_107143_107271 = state_107083__$1;
(statearr_107143_107271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (14))){
var inst_106974 = (state_107083[(20)]);
var state_107083__$1 = state_107083;
var statearr_107144_107272 = state_107083__$1;
(statearr_107144_107272[(2)] = inst_106974);

(statearr_107144_107272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (45))){
var inst_107037 = (state_107083[(11)]);
var inst_107058 = [new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161)];
var inst_107059 = [true];
var inst_107060 = cljs.core.PersistentHashMap.fromArrays(inst_107058,inst_107059);
var inst_107061 = (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,inst_107037,inst_107060) : frontend.db.transact_BANG_.call(null,repo_url,inst_107037,inst_107060));
var inst_107062 = cljs.core.PersistentVector.EMPTY;
var state_107083__$1 = (function (){var statearr_107145 = state_107083;
(statearr_107145[(25)] = inst_107061);

return statearr_107145;
})();
var statearr_107146_107273 = state_107083__$1;
(statearr_107146_107273[(2)] = inst_107062);

(statearr_107146_107273[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (26))){
var inst_106965 = (state_107083[(13)]);
var inst_107010 = (state_107083[(2)]);
var state_107083__$1 = (function (){var statearr_107147 = state_107083;
(statearr_107147[(17)] = inst_107010);

return statearr_107147;
})();
if(cljs.core.truth_(inst_106965)){
var statearr_107148_107275 = state_107083__$1;
(statearr_107148_107275[(1)] = (27));

} else {
var statearr_107149_107276 = state_107083__$1;
(statearr_107149_107276[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (16))){
var inst_106978 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
var statearr_107150_107278 = state_107083__$1;
(statearr_107150_107278[(2)] = inst_106978);

(statearr_107150_107278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (38))){
var inst_107042 = (state_107083[(2)]);
var state_107083__$1 = state_107083;
if(cljs.core.truth_(inst_107042)){
var statearr_107151_107279 = state_107083__$1;
(statearr_107151_107279[(1)] = (39));

} else {
var statearr_107152_107280 = state_107083__$1;
(statearr_107152_107280[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (30))){
var inst_106963 = (state_107083[(9)]);
var inst_107004 = (state_107083[(8)]);
var inst_106954 = (state_107083[(7)]);
var inst_107014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107015 = [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"clear?","clear?",1363344639)];
var inst_107016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107017 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_106963);
var inst_107018 = cljs.core.deref(_STAR_page_name__GT_path);
var inst_107019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_107018,inst_107004);
var inst_107020 = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("The file \"%s\" will be skipped because another file \"%s\" has the same page title.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_107017,inst_107019], 0));
var inst_107021 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_107020];
var inst_107022 = (new cljs.core.PersistentVector(null,2,(5),inst_107016,inst_107021,null));
var inst_107023 = [inst_107022,new cljs.core.Keyword(null,"warning","warning",-1685650671),false];
var inst_107024 = cljs.core.PersistentHashMap.fromArrays(inst_107015,inst_107023);
var inst_107025 = [new cljs.core.Keyword("notification","show","notification/show",1864741804),inst_107024];
var inst_107026 = (new cljs.core.PersistentVector(null,2,(5),inst_107014,inst_107025,null));
var inst_107027 = frontend.state.pub_event_BANG_(inst_107026);
var state_107083__$1 = (function (){var statearr_107153 = state_107083;
(statearr_107153[(26)] = inst_107027);

return statearr_107153;
})();
var statearr_107154_107281 = state_107083__$1;
(statearr_107154_107281[(2)] = inst_106954);

(statearr_107154_107281[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (10))){
var inst_106954 = (state_107083[(7)]);
var inst_106957 = (state_107083[(12)]);
var inst_106962 = (state_107083[(19)]);
var inst_106963 = (state_107083[(9)]);
var inst_106965 = (state_107083[(13)]);
var inst_106982 = (state_107083[(21)]);
var inst_106982__$1 = (state_107083[(2)]);
var inst_106983 = (function (){var tx = inst_106954;
var temp__5802__auto__ = inst_106957;
var item = inst_106957;
var vec__106959 = inst_106957;
var idx = inst_106962;
var file = inst_106963;
var whiteboard_QMARK_ = inst_106965;
var yield_for_ui_QMARK_ = inst_106982__$1;
return (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
});
})();
var inst_106984 = frontend.state.set_parsing_state_BANG_(inst_106983);
var state_107083__$1 = (function (){var statearr_107155 = state_107083;
(statearr_107155[(21)] = inst_106982__$1);

(statearr_107155[(27)] = inst_106984);

return statearr_107155;
})();
if(cljs.core.truth_(inst_106982__$1)){
var statearr_107156_107282 = state_107083__$1;
(statearr_107156_107282[(1)] = (17));

} else {
var statearr_107157_107284 = state_107083__$1;
(statearr_107157_107284[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (18))){
var state_107083__$1 = state_107083;
var statearr_107158_107285 = state_107083__$1;
(statearr_107158_107285[(2)] = null);

(statearr_107158_107285[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (42))){
var inst_106965 = (state_107083[(13)]);
var state_107083__$1 = state_107083;
var statearr_107159_107286 = state_107083__$1;
(statearr_107159_107286[(2)] = inst_106965);

(statearr_107159_107286[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (37))){
var inst_107004 = (state_107083[(8)]);
var state_107083__$1 = state_107083;
var statearr_107160_107287 = state_107083__$1;
(statearr_107160_107287[(2)] = inst_107004);

(statearr_107160_107287[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (8))){
var inst_106966 = (state_107083[(24)]);
var state_107083__$1 = state_107083;
var statearr_107161_107288 = state_107083__$1;
(statearr_107161_107288[(2)] = inst_106966);

(statearr_107161_107288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107084 === (49))){
var state_107083__$1 = state_107083;
var statearr_107162_107289 = state_107083__$1;
(statearr_107162_107289[(2)] = null);

(statearr_107162_107289[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_107163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107163[(0)] = frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto__);

(statearr_107163[(1)] = (1));

return statearr_107163;
});
var frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto____1 = (function (state_107083){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107083);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107164){var ex__34382__auto__ = e107164;
var statearr_107165_107291 = state_107083;
(statearr_107165_107291[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107083[(4)]))){
var statearr_107166_107292 = state_107083;
(statearr_107166_107292[(1)] = cljs.core.first((state_107083[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107293 = state_107083;
state_107083 = G__107293;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto__ = function(state_107083){
switch(arguments.length){
case 0:
return frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto____1.call(this,state_107083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto____0;
frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto____1;
return frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107167 = f__34484__auto__();
(statearr_107167[(6)] = c__34483__auto___107219);

return statearr_107167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

}

return graph_added_chan;
});
frontend.handler.repo.parse_files_and_create_default_files_BANG_ = (function frontend$handler$repo$parse_files_and_create_default_files_BANG_(repo_url,files,delete_files,delete_blocks,re_render_QMARK_,re_render_opts,opts){
return frontend.handler.repo.parse_files_and_create_default_files_inner_BANG_(repo_url,files,delete_files,delete_blocks,re_render_QMARK_,re_render_opts,opts);
});
frontend.handler.repo.parse_files_and_load_to_db_BANG_ = (function frontend$handler$repo$parse_files_and_load_to_db_BANG_(repo_url,files,p__107168){
var map__107169 = p__107168;
var map__107169__$1 = cljs.core.__destructure_map(map__107169);
var opts = map__107169__$1;
var delete_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107169__$1,new cljs.core.Keyword(null,"delete-files","delete-files",-1930731439));
var delete_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107169__$1,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596));
var re_render_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107169__$1,new cljs.core.Keyword(null,"re-render?","re-render?",-1390644928),true);
var re_render_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107169__$1,new cljs.core.Keyword(null,"re-render-opts","re-render-opts",-832360338));
var _refresh_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107169__$1,new cljs.core.Keyword(null,"_refresh?","_refresh?",677352006));
return frontend.handler.repo.parse_files_and_create_default_files_BANG_(repo_url,files,delete_files,delete_blocks,re_render_QMARK_,re_render_opts,opts);
});
/**
 * load graph files to db.
 */
frontend.handler.repo.load_new_repo_to_db_BANG_ = (function frontend$handler$repo$load_new_repo_to_db_BANG_(repo_url,p__107171){
var map__107172 = p__107171;
var map__107172__$1 = cljs.core.__destructure_map(map__107172);
var file_objs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107172__$1,new cljs.core.Keyword(null,"file-objs","file-objs",545613385));
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107172__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var empty_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107172__$1,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639));
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.handler.repo","load-new-repo","frontend.handler.repo/load-new-repo",350818319),repo_url,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),empty_graph_QMARK_,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_], 0));

frontend.state.set_parsing_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-loading?","graph-loading?",1136649541),true], null));

var config = (function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = (function (){var G__107173 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__107170_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("logseq/config.edn",new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__107170_SHARP_));
}),file_objs));
if((G__107173 == null)){
return null;
} else {
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(G__107173);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var content = temp__5804__auto__;
return frontend.handler.repo_config.read_repo_config(content);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo_url);
}
})();
var _ = frontend.state.set_config_BANG_(repo_url,config);
var file_objs__$1 = logseq.common.config.remove_hidden_files(file_objs,config,new cljs.core.Keyword("file","path","file/path",-191335748));
frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,file_objs__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),empty_graph_QMARK_], null));

return frontend.state.set_parsing_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-loading?","graph-loading?",1136649541),false], null));
});
frontend.handler.repo.load_repo_to_db_BANG_ = (function frontend$handler$repo$load_repo_to_db_BANG_(repo_url,p__107175){
var map__107176 = p__107175;
var map__107176__$1 = cljs.core.__destructure_map(map__107176);
var diffs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107176__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var file_objs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107176__$1,new cljs.core.Keyword(null,"file-objs","file-objs",545613385));
var refresh_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107176__$1,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570));
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107176__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var empty_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107176__$1,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639));
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.state.set_parsing_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-loading?","graph-loading?",1136649541),true], null));

var config = (function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = (function (){var G__107177 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__107174_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_config_path(),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__107174_SHARP_));
}),file_objs));
if((G__107177 == null)){
return null;
} else {
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(G__107177);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var content = temp__5804__auto__;
return frontend.handler.repo_config.read_repo_config(content);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo_url);
}
})();
var _ = frontend.state.set_config_BANG_(repo_url,config);
var nfs_files = logseq.common.config.remove_hidden_files(file_objs,config,new cljs.core.Keyword("file","node-node-path","file/node-node-path",-146810932));
var diffs__$1 = logseq.common.config.remove_hidden_files(diffs,config,new cljs.core.Keyword(null,"path","path",-188191168));
var load_contents = (function (files,option){
return frontend.handler.file.load_files_contents_BANG_(repo_url,files,(function (files_contents){
return frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,files_contents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),refresh_QMARK_));
}));
});
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(cljs.core.seq(diffs__$1));
if(and__5041__auto__){
return nfs_files;
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,nfs_files,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),empty_graph_QMARK_], null));
} else {
if(cljs.core.seq(diffs__$1)){
var filter_diffs = (function (type){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(f));
}),diffs__$1));
});
var remove_files = filter_diffs("remove");
var modify_files = filter_diffs("modify");
var add_files = filter_diffs("add");
var delete_files = ((cljs.core.seq(remove_files))?(frontend.db.delete_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.delete_files.cljs$core$IFn$_invoke$arity$1(remove_files) : frontend.db.delete_files.call(null,remove_files)):null);
var delete_blocks = (frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,remove_files,true) : frontend.db.delete_blocks.call(null,repo_url,remove_files,true));
var delete_blocks__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(delete_blocks,(frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,modify_files,false) : frontend.db.delete_blocks.call(null,repo_url,modify_files,false))));
var delete_pages = ((cljs.core.seq(remove_files))?(frontend.db.delete_pages_by_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.delete_pages_by_files.cljs$core$IFn$_invoke$arity$1(remove_files) : frontend.db.delete_pages_by_files.call(null,remove_files)):cljs.core.PersistentVector.EMPTY);
var add_or_modify_files = (function (){var G__107178 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(modify_files,add_files);
if((G__107178 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__107178);
}
})();
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delete-files","delete-files",-1930731439),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(delete_files,delete_pages),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),delete_blocks__$1,new cljs.core.Keyword(null,"re-render?","re-render?",-1390644928),true], null);
if(cljs.core.seq(nfs_files)){
return frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,nfs_files,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),refresh_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-render-opts","re-render-opts",-832360338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-all-query-state?","clear-all-query-state?",-289780993),true], null)], 0)));
} else {
return load_contents(add_or_modify_files,options);
}
} else {
return null;
}

}
});
frontend.handler.repo.remove_repo_BANG_ = (function frontend$handler$repo$remove_repo_BANG_(p__107179){
var map__107180 = p__107179;
var map__107180__$1 = cljs.core.__destructure_map(map__107180);
var repo = map__107180__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107180__$1,new cljs.core.Keyword(null,"url","url",276297046));
var delete_db_f = (function (){
var graph_exists_QMARK_ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_db.call(null,url));
var current_repo = frontend.state.get_current_repo();
(frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.remove_conn_BANG_.call(null,url));

frontend.db.persist.delete_graph_BANG_(url);

frontend.search.remove_db_BANG_(url);

frontend.state.delete_repo_BANG_(repo);

if(cljs.core.truth_(graph_exists_QMARK_)){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphUnlinked",repo], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,url)){
return frontend.state.set_current_repo_BANG_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_repos())));
} else {
return null;
}
});
if(((frontend.config.local_db_QMARK_(url)) || (frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url)))){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.clear_local_db_BANG_(url),(function (_){
return promesa.protocols._promise(null);
}));
})),delete_db_f);
} else {
return null;
}
});
frontend.handler.repo.start_repo_db_if_not_exists_BANG_ = (function frontend$handler$repo$start_repo_db_if_not_exists_BANG_(repo){
frontend.state.set_current_repo_BANG_(repo);

return frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
});
frontend.handler.repo.setup_local_repo_if_not_exists_impl_BANG_ = (function frontend$handler$repo$setup_local_repo_if_not_exists_impl_BANG_(){
if(cljs.core.truth_(window.pfs)){
var repo = frontend.config.local_repo;
var repo_dir = frontend.config.get_repo_dir(repo);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(repo_dir),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_current_repo_BANG_(repo),(function (___37148__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$1(repo),(function (___37148__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((frontend.config.publishing_QMARK_)?null:(function (){var dummy_notes = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tutorial","dummy-notes","tutorial/dummy-notes",-1163921856)], 0));
return frontend.handler.repo.create_dummy_notes_page(repo,dummy_notes);
})()),(function (___37148__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((frontend.config.publishing_QMARK_)?null:(function (){var tutorial = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tutorial","text","tutorial/text",-1708662915)], 0));
var tutorial__$1 = clojure.string.replace_first(tutorial,"$today",frontend.date.today());
return frontend.handler.repo.create_today_journal_if_not_exists(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tutorial__$1], null));
})()),(function (___37148__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo_config.create_config_file_if_not_exists(repo),(function (___37148__auto____$5){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_contents_file(repo),(function (___37148__auto____$6){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_custom_theme(repo),(function (___37148__auto____$7){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_db_restoring_BANG_(false),(function (___37148__auto____$8){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
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
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((100)),frontend.handler.repo.setup_local_repo_if_not_exists_impl_BANG_);
}
});
/**
 * Setup demo repo, i.e. `local-repo`
 */
frontend.handler.repo.setup_local_repo_if_not_exists_BANG_ = (function frontend$handler$repo$setup_local_repo_if_not_exists_BANG_(){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.setup_local_repo_if_not_exists_impl_BANG_(),(3000)),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setup-local-repo failed! timeout 3000ms"], 0));
})),(function (){
return frontend.state.set_db_restoring_BANG_(false);
}));
});
/**
 * Restore the db of a graph from the persisted data, and setup. Create a new
 *   conn, or replace the conn in state with a new one.
 */
frontend.handler.repo.restore_and_setup_repo_BANG_ = (function frontend$handler$repo$restore_and_setup_repo_BANG_(repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_db_restoring_BANG_(true),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.restore_graph_BANG_(repo),(function (___37148__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(repo),(function (___37148__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?frontend.handler.global_config.restore_global_config_BANG_():null),(function (___37148__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.listen_and_persist_BANG_(repo),(function (___37148__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.ui.add_style_if_exists_BANG_(),(function (___37148__auto____$5){
return promesa.protocols._promise(frontend.state.set_db_restoring_BANG_(false));
}));
}));
}));
}));
}));
}));
}));
});
frontend.handler.repo.rebuild_index_BANG_ = (function frontend$handler$repo$rebuild_index_BANG_(url){
if(frontend.state.unlinked_dir_QMARK_(frontend.config.get_repo_dir(url))){
return null;
} else {
if(cljs.core.truth_(url)){
frontend.search.reset_indice_BANG_(url);

(frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.remove_conn_BANG_.call(null,url));

(frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_BANG_.call(null));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.protocols._promise(frontend.db.persist.delete_graph_BANG_(url));
})),(function (error){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Delete repo failed, error: ",error], 0));
}));
} else {
return null;
}
}
});
frontend.handler.repo.re_index_BANG_ = (function frontend$handler$repo$re_index_BANG_(nfs_rebuild_index_BANG_,ok_handler){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
frontend.state.reset_parsing_state_BANG_();

var dir = frontend.config.get_repo_dir(repo);
if(frontend.state.unlinked_dir_QMARK_(dir)){
return null;
} else {
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

var local_QMARK_ = frontend.config.local_db_QMARK_(repo);
if(local_QMARK_){
(nfs_rebuild_index_BANG_.cljs$core$IFn$_invoke$arity$2 ? nfs_rebuild_index_BANG_.cljs$core$IFn$_invoke$arity$2(repo,ok_handler) : nfs_rebuild_index_BANG_.call(null,repo,ok_handler));
} else {
frontend.handler.repo.rebuild_index_BANG_(repo);
}

return setTimeout(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0(),(500));
}
} else {
return null;
}
});
frontend.handler.repo.persist_db_BANG_ = (function frontend$handler$repo$persist_db_BANG_(var_args){
var G__107182 = arguments.length;
switch (G__107182) {
case 0:
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (handlers){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),handlers);
}));

(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,p__107183){
var map__107184 = p__107183;
var map__107184__$1 = cljs.core.__destructure_map(map__107184);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107184__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107184__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107184__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(before)?(before.cljs$core$IFn$_invoke$arity$0 ? before.cljs$core$IFn$_invoke$arity$0() : before.call(null)):null),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist_BANG_(repo),(function (___37148__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(on_success)?(on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null)):null));
}));
}));
})),(function (error){
console.error(error);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db","persist-failed","db/persist-failed",486084683)], null)], null)], null));

if(cljs.core.truth_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$0 ? on_error.cljs$core$IFn$_invoke$arity$0() : on_error.call(null));
} else {
return null;
}
}));
}));

(frontend.handler.repo.persist_db_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Only works for electron
 * Call backend to handle persisting a specific db on other window
 * Skip persisting if no other windows is open (controlled by electron)
 *   step 1. [In HERE]  a window         ---broadcastPersistGraph---->   electron
 *   step 2.            electron         ---------persistGraph------->   window holds the graph
 *   step 3.            window w/ graph  --broadcastPersistGraphDone->   electron
 *   step 4. [In HERE]  a window         <--broadcastPersistGraph-----   electron
 */
frontend.handler.repo.broadcast_persist_db_BANG_ = (function frontend$handler$repo$broadcast_persist_db_BANG_(graph){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["broadcastPersistGraph",graph], 0)),(function (_){
return promesa.protocols._promise(null);
}));
}));
});
frontend.handler.repo.get_repos = (function frontend$handler$repo$get_repos(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.get_all_graphs(),(function (nfs_dbs){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (db){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),db,new cljs.core.Keyword(null,"root","root",-448657453),frontend.config.get_local_dir(db),new cljs.core.Keyword(null,"nfs?","nfs?",-544337673),true], null);
}),nfs_dbs),(function (nfs_dbs__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = cljs.core.seq(nfs_dbs__$1);
if(and__5041__auto__){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inflateGraphsInfo","inflateGraphsInfo",429320753),nfs_dbs__$1], 0));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.util.fs.inflate_graphs_info(nfs_dbs__$1);
} else {
return null;

}
}
} else {
return and__5041__auto__;
}
})(),(function (nfs_dbs__$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(cljs_bean.core.__GT_clj(nfs_dbs__$2)),(function (nfs_dbs__$3){
return promesa.protocols._promise(((cljs.core.seq(nfs_dbs__$3))?nfs_dbs__$3:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),frontend.config.local_repo,new cljs.core.Keyword(null,"example?","example?",-1695437732),true], null)], null)
));
}));
}));
}));
}));
}));
});
frontend.handler.repo.combine_local__AMPERSAND__remote_graphs = (function frontend$handler$repo$combine_local__AMPERSAND__remote_graphs(local_repos,remote_repos){
var temp__5804__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__107185_SHARP_){
var temp__5802__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022).cljs$core$IFn$_invoke$arity$1(p1__107185_SHARP_));
if(temp__5802__auto__){
var sync_meta = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__107185_SHARP_,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),cljs.core.second(sync_meta));
} else {
return p1__107185_SHARP_;
}
}),local_repos),(function (){var G__107187 = remote_repos;
if((G__107187 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__107186_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__107186_SHARP_,new cljs.core.Keyword(null,"remote?","remote?",-517415110),true);
}),G__107187);
}
})()));
if(temp__5804__auto__){
var repos_SINGLEQUOTE_ = temp__5804__auto__;
var repos_SINGLEQUOTE___$1 = cljs.core.group_by(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),repos_SINGLEQUOTE_);
var repos_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__107188){
var vec__107189 = p__107188;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107189,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107189,(1),null);
if((!((k == null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(vs),cljs.core.second(vs)], 0))], null);
} else {
return vs;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repos_SINGLEQUOTE___$1], 0));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (repo){
var graph_name = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(repo),/\//));
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote?","remote?",-517415110).cljs$core$IFn$_invoke$arity$1(repo),clojure.string.lower_case(graph_name)], null);
}),repos_SINGLEQUOTE__SINGLEQUOTE_);
} else {
return null;
}
});
frontend.handler.repo.get_detail_graph_info = (function frontend$handler$repo$get_detail_graph_info(url){
var temp__5804__auto__ = cljs.core.seq((function (){var and__5041__auto__ = url;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(frontend.state.get_repos(),frontend.state.get_remote_graphs());
} else {
return and__5041__auto__;
}
})());
if(temp__5804__auto__){
var graphs = temp__5804__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__107192_SHARP_){
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__107192_SHARP_);
if(cljs.core.truth_(temp__5804__auto____$1)){
var url_SINGLEQUOTE_ = temp__5804__auto____$1;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,url_SINGLEQUOTE_);
} else {
return null;
}
}),graphs));
} else {
return null;
}
});
frontend.handler.repo.refresh_repos_BANG_ = (function frontend$handler$repo$refresh_repos_BANG_(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.get_repos(),(function (repos){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(repos,frontend.state.get_remote_graphs()),(function (repos_SINGLEQUOTE_){
return promesa.protocols._promise((function (){
frontend.state.set_repos_BANG_(repos_SINGLEQUOTE_);

return repos_SINGLEQUOTE_;
})()
);
}));
}));
}));
});
frontend.handler.repo.graph_ready_BANG_ = (function frontend$handler$repo$graph_ready_BANG_(graph){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphReady",graph], 0));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.repo.js.map
