goog.provide('frontend.handler.page');
goog.scope(function(){
  frontend.handler.page.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.page.get_directory = (function frontend$handler$page$get_directory(journal_QMARK_){
if(cljs.core.truth_(journal_QMARK_)){
return frontend.config.get_journals_directory();
} else {
return frontend.config.get_pages_directory();
}
});
frontend.handler.page.get_file_name = (function frontend$handler$page$get_file_name(journal_QMARK_,title){
var temp__5804__auto__ = (cljs.core.truth_(journal_QMARK_)?frontend.date.journal_title__GT_default(title):logseq.graph_parser.util.page_name_sanity(clojure.string.lower_case(title)));
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(s,(0),(200));
} else {
return null;
}
});
frontend.handler.page.build_title = (function frontend$handler$page$build_title(page){
return new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
});
frontend.handler.page.default_properties_block = (function frontend$handler$page$default_properties_block(var_args){
var G__107365 = arguments.length;
switch (G__107365) {
case 3:
return frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$3 = (function (title,format,page){
return frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4(title,format,page,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4 = (function (title,format,page,properties){
var p = frontend.handler.common.get_page_default_properties(title);
var ps = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,properties], 0));
var content = frontend.util.page_property.insert_properties(format,"",ps);
var refs = logseq.graph_parser.block.get_page_refs_from_properties(properties,(function (){var G__107366 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__107366) : frontend.db.get_db.call(null,G__107366));
})(),frontend.state.get_date_formatter(),frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[true,frontend.db.new_block_id(),ps,page,refs,cljs.core.keys(ps),format,content,page,page]);
}));

(frontend.handler.page.default_properties_block.cljs$lang$maxFixedArity = 4);

frontend.handler.page.create_title_property_QMARK_ = (function frontend$handler$page$create_title_property_QMARK_(journal_QMARK_,page_name){
var and__5041__auto__ = cljs.core.not(journal_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"legacy","legacy",1434943289));
if(and__5041__auto____$1){
return frontend.util.fs.create_title_property_QMARK_(page_name);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
frontend.handler.page.build_page_tx = (function frontend$handler$page$build_page_tx(format,properties,page,journal_QMARK_,whiteboard_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))){
var page_entity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null);
var title = frontend.util.get_page_original_name(page);
var create_title_QMARK_ = frontend.handler.page.create_title_property_QMARK_(journal_QMARK_,title);
var page__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page,((cljs.core.seq(properties))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","properties","block/properties",708347145),properties], null):null),(cljs.core.truth_(whiteboard_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","type","block/type",1537584409),"whiteboard"], null):null)], 0));
var page_empty_QMARK_ = (function (){var G__107367 = frontend.state.get_current_repo();
var G__107368 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page__$1);
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__107367,G__107368) : frontend.db.page_empty_QMARK_.call(null,G__107367,G__107368));
})();
if(cljs.core.not(page_empty_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1], null);
} else {
if(cljs.core.truth_(create_title_QMARK_)){
var properties_block = frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4(frontend.handler.page.build_title(page__$1),format,page_entity,properties);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,properties_block], null);
} else {
if(cljs.core.seq(properties)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.handler.editor.properties_block(properties,format,page_entity)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1], null);

}
}
}
} else {
return null;
}
});
/**
 * Create page.
 * :redirect?           - when true, redirect to the created page, otherwise return sanitized page name.
 * :split-namespace?    - when true, split hierarchical namespace into levels.
 * :create-first-block? - when true, create an empty block if the page is empty.
 * :uuid                - when set, use this uuid instead of generating a new one.
 */
frontend.handler.page.create_BANG_ = (function frontend$handler$page$create_BANG_(var_args){
var G__107371 = arguments.length;
switch (G__107371) {
case 1:
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (title){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(title,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (title,p__107372){
var map__107373 = p__107372;
var map__107373__$1 = cljs.core.__destructure_map(map__107373);
var redirect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107373__$1,new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),true);
var create_first_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107373__$1,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107373__$1,new cljs.core.Keyword(null,"format","format",-1306924766),null);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107373__$1,new cljs.core.Keyword(null,"properties","properties",685819552),null);
var split_namespace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107373__$1,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),true);
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107373__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107373__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),null);
var whiteboard_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107373__$1,new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788));
var title__$1 = clojure.string.replace(logseq.graph_parser.text.page_ref_un_brackets_BANG_(clojure.string.trim(title)),/^#+/,"");
var title__$2 = logseq.graph_parser.util.remove_boundary_slashes(title__$1);
var page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title__$2) : frontend.util.page_name_sanity_lc.call(null,title__$2));
var repo = frontend.state.get_current_repo();
var with_uuid_QMARK_ = ((cljs.core.uuid_QMARK_(uuid))?uuid:true);
if(cljs.core.truth_((frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,page_name) : frontend.db.page_empty_QMARK_.call(null,repo,page_name)))){
var pages_107477 = (cljs.core.truth_(split_namespace_QMARK_)?logseq.graph_parser.util.split_namespace_pages(title__$2):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$2], null));
var format_107478__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var pages_107479__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(page,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,title__$2))?with_uuid_QMARK_:true)),new cljs.core.Keyword("block","format","block/format",-1212045901),format_107478__$1);
}),pages_107477);
var txs_107480 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (m){
return (!(((function (){var G__107374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107374) : frontend.db.entity.call(null,G__107374));
})() == null)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__107369_SHARP_){
return frontend.handler.page.build_page_tx(format_107478__$1,null,p1__107369_SHARP_,journal_QMARK_,whiteboard_QMARK_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(pages_107479__$1)], 0))));
var last_txs_107481 = frontend.handler.page.build_page_tx(format_107478__$1,properties,cljs.core.last(pages_107479__$1),journal_QMARK_,whiteboard_QMARK_);
var txs_107482__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs_107480,last_txs_107481);
if(cljs.core.seq(txs_107482__$1)){
var G__107375_107483 = repo;
var G__107376_107484 = txs_107482__$1;
var G__107377_107485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-page","create-page",-1352656443)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__107375_107483,G__107376_107484,G__107377_107485) : frontend.db.transact_BANG_.call(null,G__107375_107483,G__107376_107484,G__107377_107485));
} else {
}

if(cljs.core.truth_(create_first_block_QMARK_)){
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var G__107378 = repo;
var G__107379 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__107380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107380) : frontend.db.entity.call(null,G__107380));
})());
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__107378,G__107379) : frontend.db.page_empty_QMARK_.call(null,G__107378,G__107379));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.page.create_title_property_QMARK_(journal_QMARK_,page_name);
}
})())){
frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_(redirect_QMARK_)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
} else {
}

return page_name;
}));

(frontend.handler.page.create_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.page.delete_file_BANG_ = (function frontend$handler$page$delete_file_BANG_(repo,page_name,unlink_file_QMARK_){
var file = (frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_file.call(null,page_name));
var file_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
if(clojure.string.blank_QMARK_(file_path)){
return null;
} else {
var G__107381_107486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file_path], null)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__107381_107486) : frontend.db.transact_BANG_.call(null,G__107381_107486));

if(cljs.core.truth_(unlink_file_QMARK_)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.unlink_BANG_(repo,frontend.config.get_repo_fpath(repo,file_path),null),(function (error){
return console.error(error);
}));
} else {
return null;
}
}
});
/**
 * Construct the full path given old full path and the file sanitized body.
 * Ext. included in the `old-path`.
 */
frontend.handler.page.compute_new_file_path = (function frontend$handler$page$compute_new_file_path(old_path,new_file_name_body){
var result = clojure.string.split.cljs$core$IFn$_invoke$arity$2(old_path,"/");
var ext = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(result),"."));
var new_file = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_file_name_body),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var parts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_file], null));
return frontend.util.string_join_path(parts);
});
/**
 * emit file-rename events to :file/rename-event-chan
 * force-fs? - when true, rename file event the db transact is failed.
 */
frontend.handler.page.rename_file_BANG_ = (function frontend$handler$page$rename_file_BANG_(var_args){
var G__107383 = arguments.length;
switch (G__107383) {
case 3:
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (file,new_file_name_body,ok_handler){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4(file,new_file_name_body,ok_handler,false);
}));

(frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (file,new_file_name_body,ok_handler,force_fs_QMARK_){
var repo = frontend.state.get_current_repo();
var file__$1 = (function (){var G__107384 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__107384) : frontend.db.pull.call(null,G__107384));
})();
var old_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file__$1);
var new_path = frontend.handler.page.compute_new_file_path(old_path,new_file_name_body);
var transact = (function (){
var G__107385 = repo;
var G__107386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file__$1),new cljs.core.Keyword("file","path","file/path",-191335748),new_path], null)], null);
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__107385,G__107386) : frontend.db.transact_BANG_.call(null,G__107385,G__107386));
});
if(cljs.core.truth_(force_fs_QMARK_)){
try{transact();
}catch (e107387){var e_107488 = e107387;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.page",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),e_107488,new cljs.core.Keyword(null,"line","line",212345235),217], null)),null);
}} else {
transact();
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.offer_file_rename_event_chan_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"old-path","old-path",-2069757806),old_path,new cljs.core.Keyword(null,"new-path","new-path",1732999939),new_path], null)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.rename_BANG_(repo,old_path,new_path),(function (___$1){
return promesa.protocols._promise((ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)));
}));
}));
})),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["file rename failed: ",error], 0));
}));
}));

(frontend.handler.page.rename_file_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Unsanitized names
 */
frontend.handler.page.replace_page_ref_BANG_ = (function frontend$handler$page$replace_page_ref_BANG_(content,old_name,new_name){
var vec__107389 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_name,new_name], null));
var original_old_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107389,(0),null);
var original_new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107389,(1),null);
var vec__107392 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.util.page_ref.__GT_page_ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_name,new_name], null));
var old_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107392,(0),null);
var new_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107392,(1),null);
var vec__107395 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__107388_SHARP_){
if(clojure.string.includes_QMARK_(p1__107388_SHARP_,"/")){
return clojure.string.replace(p1__107388_SHARP_,"/",".");
} else {
return p1__107388_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_old_name,original_new_name], null));
var old_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107395,(0),null);
var new_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107395,(1),null);
var old_org_ref = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.re_find(cljs.core.re_pattern(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\\[\\[file:\\.*/.*%s\\.org\\]\\[(.*?)\\]\\]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_name__$1], 0))),content);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
return clojure.string.replace((cljs.core.truth_(old_org_ref)?(function (){var vec__107398 = old_org_ref;
var old_full_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107398,(0),null);
var old_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107398,(1),null);
var new_label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_label,original_old_name))?original_new_name:old_label);
var new_full_ref = clojure.string.replace(clojure.string.replace(old_full_ref,old_name__$1,new_name__$1),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_label),"]"].join(''),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_label),"]"].join(''));
return clojure.string.replace(content,old_full_ref,new_full_ref);
})():content),old_ref,new_ref);
});
frontend.handler.page.replace_tag_ref_BANG_ = (function frontend$handler$page$replace_tag_ref_BANG_(content,old_name,new_name){
var old_tag = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_name], 0));
var new_tag = (cljs.core.truth_(cljs.core.re_find(/[\s\t]+/,new_name))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_name], 0)):["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_name)].join(''));
return clojure.string.replace(content,cljs.core.re_pattern(["(?i)(^|\\s)(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.escape_regex_chars(old_tag)),")(?=[,\\.]*($|\\s))"].join('')),(function (p__107401){
var vec__107402 = p__107401;
var _match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107402,(0),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107402,(1),null);
var _grp2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107402,(2),null);
var _grp3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107402,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_tag)].join('');
}));
});
frontend.handler.page.replace_property_ref_BANG_ = (function frontend$handler$page$replace_property_ref_BANG_(content,old_name,new_name,format){
var new_name__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(new_name),/\s+/,"-"));
var org_format_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format);
var old_property = ((org_format_QMARK_)?logseq.graph_parser.property.colons_org(old_name):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_name),logseq.graph_parser.property.colons].join(''));
var new_property = ((org_format_QMARK_)?logseq.graph_parser.property.colons_org(cljs.core.name(new_name__$1)):[cljs.core.name(new_name__$1),logseq.graph_parser.property.colons].join(''));
return frontend.util.replace_ignore_case(content,old_property,new_property);
});
/**
 * Unsanitized names
 */
frontend.handler.page.replace_old_page_BANG_ = (function frontend$handler$page$replace_old_page_BANG_(content,old_name,new_name,format){
if(((typeof content === 'string') && (((typeof old_name === 'string') && (typeof new_name === 'string'))))){
return frontend.handler.page.replace_property_ref_BANG_(frontend.handler.page.replace_tag_ref_BANG_(frontend.handler.page.replace_page_ref_BANG_(content,old_name,new_name),old_name,new_name),old_name,new_name,format);
} else {
return null;
}
});
/**
 * Unsanitized names
 */
frontend.handler.page.walk_replace_old_page_BANG_ = (function frontend$handler$page$walk_replace_old_page_BANG_(form,old_name,new_name,format){
return clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Label",null,"Search",null], null), null),cljs.core.first(f))) && (clojure.string.starts_with_QMARK_(cljs.core.second(f),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_name),"/"].join(''))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(f),clojure.string.replace_first(cljs.core.second(f),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_name),"/"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_name),"/"].join(''))], null);
} else {
if(typeof f === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,old_name)){
return new_name;
} else {
return frontend.handler.page.replace_old_page_BANG_(f,old_name,new_name,format);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(f),old_name);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(new_name),/\s+/,"-"));
} else {
return f;

}
}
}
}),form);
});
frontend.handler.page.favorited_QMARK_ = (function frontend$handler$page$favorited_QMARK_(page_name){
var favorites = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()))));
return cljs.core.contains_QMARK_(favorites,page_name);
});
frontend.handler.page.favorite_page_BANG_ = (function frontend$handler$page$favorite_page_BANG_(page_name){
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
var favorites = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(page_name,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"favorites","favorites",1740773480),favorites);
}
});
frontend.handler.page.unfavorite_page_BANG_ = (function frontend$handler$page$unfavorite_page_BANG_(page_name){
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
var old_favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var new_favorites = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__107405_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(p1__107405_SHARP_),clojure.string.lower_case(page_name));
}),old_favorites));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_favorites,new_favorites)){
return null;
} else {
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"favorites","favorites",1740773480),new_favorites);
}
}
});
frontend.handler.page.toggle_favorite_BANG_ = (function frontend$handler$page$toggle_favorite_BANG_(){
var temp__5804__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
var favorited_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,favorites)),clojure.string.lower_case(page_name));
if(favorited_QMARK_){
return frontend.handler.page.unfavorite_page_BANG_(page_name);
} else {
return frontend.handler.page.favorite_page_BANG_(page_name);
}
} else {
return null;
}
});
frontend.handler.page.delete_BANG_ = (function frontend$handler$page$delete_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___107489 = arguments.length;
var i__5767__auto___107490 = (0);
while(true){
if((i__5767__auto___107490 < len__5766__auto___107489)){
args__5772__auto__.push((arguments[i__5767__auto___107490]));

var G__107491 = (i__5767__auto___107490 + (1));
i__5767__auto___107490 = G__107491;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page_name,ok_handler,p__107409){
var map__107410 = p__107409;
var map__107410__$1 = cljs.core.__destructure_map(map__107410);
var delete_file_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__107410__$1,new cljs.core.Keyword(null,"delete-file?","delete-file?",668245808),true);
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(page_name)){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var blocks = (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.get_page_blocks_no_cache.call(null,page_name__$1));
var tx_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
}),blocks);
var page = (function (){var G__107411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107411) : frontend.db.entity.call(null,G__107411));
})();
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx_data) : frontend.db.transact_BANG_.call(null,tx_data));

frontend.handler.page.delete_file_BANG_(repo,page_name__$1,delete_file_QMARK_);

if(cljs.core.truth_(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1(page))){
} else {
if(cljs.core.truth_(frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),page_name__$1))){
var temp__5804__auto___107492__$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__107412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107412) : frontend.db.entity.call(null,G__107412));
})());
if(cljs.core.truth_(temp__5804__auto___107492__$1)){
var id_107493 = temp__5804__auto___107492__$1;
var txs_107494 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id_107493,attribute], null);
}),logseq.db.schema.retract_page_attributes);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(txs_107494) : frontend.db.transact_BANG_.call(null,txs_107494));
} else {
}
} else {
var G__107413_107495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__107413_107495) : frontend.db.transact_BANG_.call(null,G__107413_107495));
}
}

frontend.handler.page.unfavorite_page_BANG_(page_name__$1);

if(cljs.core.fn_QMARK_(ok_handler)){
(ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
} else {
}

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.page.delete_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.page.delete_BANG_.cljs$lang$applyTo = (function (seq107406){
var G__107407 = cljs.core.first(seq107406);
var seq107406__$1 = cljs.core.next(seq107406);
var G__107408 = cljs.core.first(seq107406__$1);
var seq107406__$2 = cljs.core.next(seq107406__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107407,G__107408,seq107406__$2);
}));

frontend.handler.page.rename_update_block_refs_BANG_ = (function frontend$handler$page$rename_update_block_refs_BANG_(refs,from_id,to_id){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),from_id], null)]),refs))));
});
/**
 * Unsanitized only
 */
frontend.handler.page.rename_update_refs_BANG_ = (function frontend$handler$page$rename_update_refs_BANG_(page,old_original_name,new_name){
var repo = frontend.state.get_current_repo();
var to_page = (function (){var G__107414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(new_name) : frontend.util.page_name_sanity_lc.call(null,new_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107414) : frontend.db.entity.call(null,G__107414));
})();
var blocks = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__107415 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107415) : frontend.db.entity.call(null,G__107415));
})());
var page_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(b))], null);
}),blocks));
var tx = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107416){
var map__107417 = p__107416;
var map__107417__$1 = cljs.core.__destructure_map(map__107417);
var block = map__107417__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107417__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107417__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107417__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107417__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var content__$1 = (function (){var content_SINGLEQUOTE_ = frontend.handler.page.replace_old_page_BANG_(content,old_original_name,new_name,format);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content_SINGLEQUOTE_,content)){
return null;
} else {
return content_SINGLEQUOTE_;
}
})();
var properties__$1 = (function (){var properties_SINGLEQUOTE_ = frontend.handler.page.walk_replace_old_page_BANG_(properties,old_original_name,new_name,format);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(properties_SINGLEQUOTE_,properties)){
return null;
} else {
return properties_SINGLEQUOTE_;
}
})();
if(cljs.core.truth_((function (){var or__5043__auto__ = content__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return properties__$1;
}
})())){
return frontend.util.remove_nils_non_nested(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),content__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties__$1,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),((cljs.core.seq(properties__$1))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,properties__$1):null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_page))))], null));
} else {
return null;
}
}),blocks));
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,tx) : frontend.db.transact_BANG_.call(null,repo,tx));

var seq__107418 = cljs.core.seq(page_ids);
var chunk__107419 = null;
var count__107420 = (0);
var i__107421 = (0);
while(true){
if((i__107421 < count__107420)){
var page_id = chunk__107419.cljs$core$IIndexed$_nth$arity$2(null,i__107421);
frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1(page_id);


var G__107496 = seq__107418;
var G__107497 = chunk__107419;
var G__107498 = count__107420;
var G__107499 = (i__107421 + (1));
seq__107418 = G__107496;
chunk__107419 = G__107497;
count__107420 = G__107498;
i__107421 = G__107499;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__107418);
if(temp__5804__auto__){
var seq__107418__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__107418__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__107418__$1);
var G__107500 = cljs.core.chunk_rest(seq__107418__$1);
var G__107501 = c__5565__auto__;
var G__107502 = cljs.core.count(c__5565__auto__);
var G__107503 = (0);
seq__107418 = G__107500;
chunk__107419 = G__107501;
count__107420 = G__107502;
i__107421 = G__107503;
continue;
} else {
var page_id = cljs.core.first(seq__107418__$1);
frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1(page_id);


var G__107504 = cljs.core.next(seq__107418__$1);
var G__107505 = null;
var G__107506 = (0);
var G__107507 = (0);
seq__107418 = G__107504;
chunk__107419 = G__107505;
count__107420 = G__107506;
i__107421 = G__107507;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * update :block/namespace of the renamed block
 */
frontend.handler.page.rename_update_namespace_BANG_ = (function frontend$handler$page$rename_update_namespace_BANG_(page,old_original_name,new_name){
var old_namespace_QMARK_ = logseq.graph_parser.text.namespace_page_QMARK_(old_original_name);
var new_namespace_QMARK_ = logseq.graph_parser.text.namespace_page_QMARK_(new_name);
var update_namespace_BANG_ = (function (){
var namespace = cljs.core.first(logseq.graph_parser.util.split_last("/",new_name));
if(cljs.core.truth_(namespace)){
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(namespace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));

var namespace_block = (function (){var G__107422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(namespace)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__107422) : frontend.db.pull.call(null,G__107422));
})();
var repo = frontend.state.get_current_repo();
var page_txs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(namespace_block)], null)], null);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(repo,false) : frontend.db.get_db.call(null,repo,false)),page_txs);
} else {
return null;
}
});
var remove_namespace_BANG_ = (function (){
var G__107423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","namespace","block/namespace",-282500695)], null)], null);
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__107423) : frontend.db.transact_BANG_.call(null,G__107423));
});
if(old_namespace_QMARK_){
if(new_namespace_QMARK_){
update_namespace_BANG_();
} else {
remove_namespace_BANG_();
}
} else {
}

if(old_namespace_QMARK_){
return null;
} else {
if(new_namespace_QMARK_){
return update_namespace_BANG_();
} else {
return null;
}
}
});
/**
 * Only accepts unsanitized page names
 */
frontend.handler.page.rename_page_aux = (function frontend$handler$page$rename_page_aux(old_name,new_name,redirect_QMARK_){
var old_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_name) : frontend.util.page_name_sanity_lc.call(null,old_name));
var new_file_name_body = frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$1(new_name);
var new_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(new_name) : frontend.util.page_name_sanity_lc.call(null,new_name));
var repo = frontend.state.get_current_repo();
var page = (function (){var G__107424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),old_page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__107424) : frontend.db.pull.call(null,G__107424));
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return page;
} else {
return and__5041__auto__;
}
})())){
var old_original_name_107508 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var file_107509 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var journal_QMARK__107510 = new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page);
var properties_block_107511 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.tree._get_down(frontend.modules.outliner.core.block(page)));
var properties_content_107512 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_107511);
var properties_block_tx_107513 = (cljs.core.truth_((function (){var and__5041__auto__ = properties_block_107511;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = properties_content_107512;
if(cljs.core.truth_(and__5041__auto____$1)){
return clojure.string.includes_QMARK_((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(properties_content_107512) : frontend.util.page_name_sanity_lc.call(null,properties_content_107512)),old_page_name);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?(function (){var front_matter_QMARK_ = ((frontend.util.property.front_matter_QMARK_(properties_content_107512)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(properties_block_107511))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(properties_block_107511),new cljs.core.Keyword("block","content","block/content",-161885195),frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(properties_block_107511),properties_content_107512,new cljs.core.Keyword(null,"title","title",636505583),new_name,front_matter_QMARK_)], null);
})():null);
var page_txs_107514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","name","block/name",1619760316),new_page_name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new_name], null)], null);
var page_txs_107515__$1 = (cljs.core.truth_(properties_block_tx_107513)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(page_txs_107514,properties_block_tx_107513):page_txs_107514);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(repo,false) : frontend.db.get_db.call(null,repo,false)),page_txs_107515__$1);

if(cljs.core.truth_(frontend.util.fs.create_title_property_QMARK_(new_page_name))){
frontend.util.page_property.add_property_BANG_(new_page_name,new cljs.core.Keyword(null,"title","title",636505583),new_name);
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = file_107509;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(journal_QMARK__107510);
} else {
return and__5041__auto__;
}
})())){
frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file_107509,new_file_name_body,(function (){
return null;
}));
} else {
}

var home_107516 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_page_name,(function (){var G__107425 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(home_107516,new cljs.core.Keyword(null,"page","page",849072397),"");
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__107425) : frontend.util.page_name_sanity_lc.call(null,G__107425));
})())){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(home_107516,new cljs.core.Keyword(null,"page","page",849072397),new_name));
} else {
}

frontend.handler.page.rename_update_refs_BANG_(page,old_original_name_107508,new_name);

frontend.handler.page.rename_update_namespace_BANG_(page,old_original_name_107508,new_name);

frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1(page);

if(cljs.core.truth_(redirect_QMARK_)){
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),(cljs.core.truth_(frontend.db.model.whiteboard_page_QMARK_(page))?new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928):new cljs.core.Keyword(null,"page","page",849072397)),new cljs.core.Keyword(null,"push","push",799791267),false,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new_page_name], null)], null));
} else {
}

if(frontend.handler.page.favorited_QMARK_(old_page_name)){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.unfavorite_page_BANG_(old_page_name),(function (___37148__auto__){
return promesa.protocols._promise(frontend.handler.page.favorite_page_BANG_(new_page_name));
}));
}));
} else {
}

frontend.handler.recent.update_or_add_renamed_page(repo,old_page_name,new_page_name);

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});
/**
 * Unsanitized names only
 */
frontend.handler.page.rename_nested_pages = (function frontend$handler$page$rename_nested_pages(old_ns_name,new_ns_name){
var repo = frontend.state.get_current_repo();
var nested_page_str = logseq.graph_parser.util.page_ref.__GT_page_ref((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_ns_name) : frontend.util.page_name_sanity_lc.call(null,old_ns_name)));
var ns_prefix_format_str = [logseq.graph_parser.util.page_ref.left_brackets,"%s/"].join('');
var ns_prefix = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(ns_prefix_format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_ns_name) : frontend.util.page_name_sanity_lc.call(null,old_ns_name))], 0));
var nested_pages = (frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2(repo,nested_page_str) : frontend.db.get_pages_by_name_partition.call(null,repo,nested_page_str));
var nested_pages_ns = (frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2(repo,ns_prefix) : frontend.db.get_pages_by_name_partition.call(null,repo,ns_prefix));
if(cljs.core.truth_(nested_pages)){
var seq__107426_107517 = cljs.core.seq(nested_pages);
var chunk__107427_107518 = null;
var count__107428_107519 = (0);
var i__107429_107520 = (0);
while(true){
if((i__107429_107520 < count__107428_107519)){
var map__107432_107521 = chunk__107427_107518.cljs$core$IIndexed$_nth$arity$2(null,i__107429_107520);
var map__107432_107522__$1 = cljs.core.__destructure_map(map__107432_107521);
var name_107523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107432_107522__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name_107524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107432_107522__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_107525 = (function (){var or__5043__auto__ = original_name_107524;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name_107523;
}
})();
var new_page_title_107526 = clojure.string.replace(old_page_title_107525,logseq.graph_parser.util.page_ref.__GT_page_ref(old_ns_name),logseq.graph_parser.util.page_ref.__GT_page_ref(new_ns_name));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_107525;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_107526;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107525,new_page_title_107526,map__107432_107521,map__107432_107522__$1,name_107523,original_name_107524,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_107525,new_page_title_107526,false),((function (seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107525,new_page_title_107526,map__107432_107521,map__107432_107522__$1,name_107523,original_name_107524,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37148__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_107525," to ",new_page_title_107526], 0)));
});})(seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107525,new_page_title_107526,map__107432_107521,map__107432_107522__$1,name_107523,original_name_107524,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107525,new_page_title_107526,map__107432_107521,map__107432_107522__$1,name_107523,original_name_107524,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__107527 = seq__107426_107517;
var G__107528 = chunk__107427_107518;
var G__107529 = count__107428_107519;
var G__107530 = (i__107429_107520 + (1));
seq__107426_107517 = G__107527;
chunk__107427_107518 = G__107528;
count__107428_107519 = G__107529;
i__107429_107520 = G__107530;
continue;
} else {
var temp__5804__auto___107531 = cljs.core.seq(seq__107426_107517);
if(temp__5804__auto___107531){
var seq__107426_107532__$1 = temp__5804__auto___107531;
if(cljs.core.chunked_seq_QMARK_(seq__107426_107532__$1)){
var c__5565__auto___107533 = cljs.core.chunk_first(seq__107426_107532__$1);
var G__107534 = cljs.core.chunk_rest(seq__107426_107532__$1);
var G__107535 = c__5565__auto___107533;
var G__107536 = cljs.core.count(c__5565__auto___107533);
var G__107537 = (0);
seq__107426_107517 = G__107534;
chunk__107427_107518 = G__107535;
count__107428_107519 = G__107536;
i__107429_107520 = G__107537;
continue;
} else {
var map__107433_107538 = cljs.core.first(seq__107426_107532__$1);
var map__107433_107539__$1 = cljs.core.__destructure_map(map__107433_107538);
var name_107540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107433_107539__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name_107541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107433_107539__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_107542 = (function (){var or__5043__auto__ = original_name_107541;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name_107540;
}
})();
var new_page_title_107543 = clojure.string.replace(old_page_title_107542,logseq.graph_parser.util.page_ref.__GT_page_ref(old_ns_name),logseq.graph_parser.util.page_ref.__GT_page_ref(new_ns_name));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_107542;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_107543;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107542,new_page_title_107543,map__107433_107538,map__107433_107539__$1,name_107540,original_name_107541,seq__107426_107532__$1,temp__5804__auto___107531,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_107542,new_page_title_107543,false),((function (seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107542,new_page_title_107543,map__107433_107538,map__107433_107539__$1,name_107540,original_name_107541,seq__107426_107532__$1,temp__5804__auto___107531,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37148__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_107542," to ",new_page_title_107543], 0)));
});})(seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107542,new_page_title_107543,map__107433_107538,map__107433_107539__$1,name_107540,original_name_107541,seq__107426_107532__$1,temp__5804__auto___107531,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__107426_107517,chunk__107427_107518,count__107428_107519,i__107429_107520,old_page_title_107542,new_page_title_107543,map__107433_107538,map__107433_107539__$1,name_107540,original_name_107541,seq__107426_107532__$1,temp__5804__auto___107531,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__107544 = cljs.core.next(seq__107426_107532__$1);
var G__107545 = null;
var G__107546 = (0);
var G__107547 = (0);
seq__107426_107517 = G__107544;
chunk__107427_107518 = G__107545;
count__107428_107519 = G__107546;
i__107429_107520 = G__107547;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(nested_pages_ns)){
var seq__107434 = cljs.core.seq(nested_pages_ns);
var chunk__107435 = null;
var count__107436 = (0);
var i__107437 = (0);
while(true){
if((i__107437 < count__107436)){
var map__107440 = chunk__107435.cljs$core$IIndexed$_nth$arity$2(null,i__107437);
var map__107440__$1 = cljs.core.__destructure_map(map__107440);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107440__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107440__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_107548 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_107549 = clojure.string.replace(old_page_title_107548,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(ns_prefix_format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(ns_prefix_format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_107548;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_107549;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107548,new_page_title_107549,map__107440,map__107440__$1,name,original_name,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_107548,new_page_title_107549,false),((function (seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107548,new_page_title_107549,map__107440,map__107440__$1,name,original_name,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37148__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_107548," to ",new_page_title_107549], 0)));
});})(seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107548,new_page_title_107549,map__107440,map__107440__$1,name,original_name,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107548,new_page_title_107549,map__107440,map__107440__$1,name,original_name,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__107550 = seq__107434;
var G__107551 = chunk__107435;
var G__107552 = count__107436;
var G__107553 = (i__107437 + (1));
seq__107434 = G__107550;
chunk__107435 = G__107551;
count__107436 = G__107552;
i__107437 = G__107553;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__107434);
if(temp__5804__auto__){
var seq__107434__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__107434__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__107434__$1);
var G__107554 = cljs.core.chunk_rest(seq__107434__$1);
var G__107555 = c__5565__auto__;
var G__107556 = cljs.core.count(c__5565__auto__);
var G__107557 = (0);
seq__107434 = G__107554;
chunk__107435 = G__107555;
count__107436 = G__107556;
i__107437 = G__107557;
continue;
} else {
var map__107441 = cljs.core.first(seq__107434__$1);
var map__107441__$1 = cljs.core.__destructure_map(map__107441);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107441__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107441__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_107558 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_107559 = clojure.string.replace(old_page_title_107558,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(ns_prefix_format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(ns_prefix_format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_107558;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_107559;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107558,new_page_title_107559,map__107441,map__107441__$1,name,original_name,seq__107434__$1,temp__5804__auto__,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_107558,new_page_title_107559,false),((function (seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107558,new_page_title_107559,map__107441,map__107441__$1,name,original_name,seq__107434__$1,temp__5804__auto__,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___37148__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_107558," to ",new_page_title_107559], 0)));
});})(seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107558,new_page_title_107559,map__107441,map__107441__$1,name,original_name,seq__107434__$1,temp__5804__auto__,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__107434,chunk__107435,count__107436,i__107437,old_page_title_107558,new_page_title_107559,map__107441,map__107441__$1,name,original_name,seq__107434__$1,temp__5804__auto__,repo,nested_page_str,ns_prefix_format_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__107560 = cljs.core.next(seq__107434__$1);
var G__107561 = null;
var G__107562 = (0);
var G__107563 = (0);
seq__107434 = G__107560;
chunk__107435 = G__107561;
count__107436 = G__107562;
i__107437 = G__107563;
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
/**
 * Original names (unsanitized only)
 */
frontend.handler.page.rename_namespace_pages_BANG_ = (function frontend$handler$page$rename_namespace_pages_BANG_(repo,old_name,new_name){
var pages = (frontend.db.get_namespace_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_namespace_pages.cljs$core$IFn$_invoke$arity$2(repo,old_name) : frontend.db.get_namespace_pages.call(null,repo,old_name));
var page = (function (){var G__107442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_name) : frontend.util.page_name_sanity_lc.call(null,old_name))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__107442) : frontend.db.pull.call(null,G__107442));
})();
var pages__$1 = cljs.core.cons(page,pages);
var seq__107443 = cljs.core.seq(pages__$1);
var chunk__107444 = null;
var count__107445 = (0);
var i__107446 = (0);
while(true){
if((i__107446 < count__107445)){
var map__107449 = chunk__107444.cljs$core$IIndexed$_nth$arity$2(null,i__107446);
var map__107449__$1 = cljs.core.__destructure_map(map__107449);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107449__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107449__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_107564 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_107565 = clojure.string.replace_first(old_page_title_107564,old_name,new_name);
var redirect_QMARK__107566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_107564;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_107565;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107564,new_page_title_107565,redirect_QMARK__107566,map__107449,map__107449__$1,name,original_name,pages,page,pages__$1){
return (function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_107564,new_page_title_107565,redirect_QMARK__107566),((function (seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107564,new_page_title_107565,redirect_QMARK__107566,map__107449,map__107449__$1,name,original_name,pages,page,pages__$1){
return (function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_107564," to ",new_page_title_107565], 0)));
});})(seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107564,new_page_title_107565,redirect_QMARK__107566,map__107449,map__107449__$1,name,original_name,pages,page,pages__$1))
);
});})(seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107564,new_page_title_107565,redirect_QMARK__107566,map__107449,map__107449__$1,name,original_name,pages,page,pages__$1))
);
} else {
}


var G__107567 = seq__107443;
var G__107568 = chunk__107444;
var G__107569 = count__107445;
var G__107570 = (i__107446 + (1));
seq__107443 = G__107567;
chunk__107444 = G__107568;
count__107445 = G__107569;
i__107446 = G__107570;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__107443);
if(temp__5804__auto__){
var seq__107443__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__107443__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__107443__$1);
var G__107571 = cljs.core.chunk_rest(seq__107443__$1);
var G__107572 = c__5565__auto__;
var G__107573 = cljs.core.count(c__5565__auto__);
var G__107574 = (0);
seq__107443 = G__107571;
chunk__107444 = G__107572;
count__107445 = G__107573;
i__107446 = G__107574;
continue;
} else {
var map__107450 = cljs.core.first(seq__107443__$1);
var map__107450__$1 = cljs.core.__destructure_map(map__107450);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107450__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107450__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_107575 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_107576 = clojure.string.replace_first(old_page_title_107575,old_name,new_name);
var redirect_QMARK__107577 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_107575;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_107576;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107575,new_page_title_107576,redirect_QMARK__107577,map__107450,map__107450__$1,name,original_name,seq__107443__$1,temp__5804__auto__,pages,page,pages__$1){
return (function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_107575,new_page_title_107576,redirect_QMARK__107577),((function (seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107575,new_page_title_107576,redirect_QMARK__107577,map__107450,map__107450__$1,name,original_name,seq__107443__$1,temp__5804__auto__,pages,page,pages__$1){
return (function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_107575," to ",new_page_title_107576], 0)));
});})(seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107575,new_page_title_107576,redirect_QMARK__107577,map__107450,map__107450__$1,name,original_name,seq__107443__$1,temp__5804__auto__,pages,page,pages__$1))
);
});})(seq__107443,chunk__107444,count__107445,i__107446,old_page_title_107575,new_page_title_107576,redirect_QMARK__107577,map__107450,map__107450__$1,name,original_name,seq__107443__$1,temp__5804__auto__,pages,page,pages__$1))
);
} else {
}


var G__107578 = cljs.core.next(seq__107443__$1);
var G__107579 = null;
var G__107580 = (0);
var G__107581 = (0);
seq__107443 = G__107578;
chunk__107444 = G__107579;
count__107445 = G__107580;
i__107446 = G__107581;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Only accepts sanitized page names
 */
frontend.handler.page.merge_pages_BANG_ = (function frontend$handler$page$merge_pages_BANG_(from_page_name,to_page_name){
if(cljs.core.truth_((function (){var and__5041__auto__ = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(from_page_name) : frontend.db.page_exists_QMARK_.call(null,from_page_name));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(to_page_name) : frontend.db.page_exists_QMARK_.call(null,to_page_name));
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_page_name,to_page_name);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var to_page_107582 = (function (){var G__107451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),to_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107451) : frontend.db.entity.call(null,G__107451));
})();
var to_id_107583 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_page_107582);
var from_page_107584 = (function (){var G__107452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),from_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107452) : frontend.db.entity.call(null,G__107452));
})();
var from_id_107585 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_page_107584);
var from_first_child_107586 = (function (){var G__107453 = (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(from_id_107585) : frontend.db.pull.call(null,from_id_107585));
var G__107453__$1 = (((G__107453 == null))?null:frontend.modules.outliner.core.block(G__107453));
var G__107453__$2 = (((G__107453__$1 == null))?null:frontend.modules.outliner.tree._get_down(G__107453__$1));
if((G__107453__$2 == null)){
return null;
} else {
return frontend.modules.outliner.core.get_data(G__107453__$2);
}
})();
var to_last_direct_child_id_107587 = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),to_id_107583,false);
var repo_107588 = frontend.state.get_current_repo();
var conn_107589 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo_107588,false);
var datoms_107590 = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(conn_107589),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),from_id_107585);
var block_eids_107591 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms_107590);
var blocks_107592 = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_107588,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),block_eids_107591);
var tx_data_107593 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__107454 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_107583], null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),from_id_107585,to_id_107583)], null);
var G__107454__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = from_first_child_107586;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_first_child_107586));
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__107454,new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5043__auto__ = to_last_direct_child_id_107587;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return to_id_107583;
}
})()], null)):G__107454);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),from_id_107585], null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__107454__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_107583], null));
} else {
return G__107454__$1;
}
}),blocks_107592);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn_107589,tx_data_107593);

frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_107583], null));

frontend.handler.page.rename_update_refs_BANG_(from_page_107584,frontend.util.get_page_original_name(from_page_107584),frontend.util.get_page_original_name(to_page_107582));

frontend.handler.page.rename_update_namespace_BANG_(from_page_107584,frontend.util.get_page_original_name(from_page_107584),frontend.util.get_page_original_name(to_page_107582));

frontend.handler.page.delete_BANG_(from_page_name,null);

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"push","push",799791267),false,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),to_page_name], null)], null));
} else {
return null;
}
});
/**
 * Accepts unsanitized page names
 */
frontend.handler.page.rename_BANG_ = (function frontend$handler$page$rename_BANG_(var_args){
var G__107456 = arguments.length;
switch (G__107456) {
case 2:
return frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (old_name,new_name){
return frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$3(old_name,new_name,true);
}));

(frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (old_name,new_name,redirect_QMARK_){
var repo = frontend.state.get_current_repo();
var old_name__$1 = clojure.string.trim(old_name);
var new_name__$1 = clojure.string.trim(new_name);
var old_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_name__$1) : frontend.util.page_name_sanity_lc.call(null,old_name__$1));
var new_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(new_name__$1) : frontend.util.page_name_sanity_lc.call(null,new_name__$1));
var name_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_name__$1,new_name__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = old_name__$1;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new_name__$1;
if(cljs.core.truth_(and__5041__auto____$1)){
return (((!(clojure.string.blank_QMARK_(new_name__$1)))) && (name_changed_QMARK_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_page_name,new_page_name)){
frontend.handler.page.rename_page_aux(old_name__$1,new_name__$1,redirect_QMARK_);
} else {
if(cljs.core.truth_((function (){var G__107457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new_page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__107457) : frontend.db.pull.call(null,G__107457));
})())){
frontend.handler.page.merge_pages_BANG_(old_page_name,new_page_name);
} else {
frontend.handler.page.rename_namespace_pages_BANG_(repo,old_name__$1,new_name__$1);

}
}

frontend.handler.page.rename_nested_pages(old_name__$1,new_name__$1);
} else {
if(clojure.string.blank_QMARK_(new_name__$1)){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please use a valid name, empty name is not allowed!",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
}
}

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(frontend.handler.page.rename_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.page.split_col_by_element = (function frontend$handler$page$split_col_by_element(col,element){
var col__$1 = cljs.core.vec(col);
var idx = col__$1.indexOf(element);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(col__$1,(0),(idx + (1))),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(col__$1,(idx + (1)))], null);
});
frontend.handler.page.reorder_favorites_BANG_ = (function frontend$handler$page$reorder_favorites_BANG_(p__107459){
var map__107460 = p__107459;
var map__107460__$1 = cljs.core.__destructure_map(map__107460);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107460__$1,new cljs.core.Keyword(null,"to","to",192099007));
var up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107460__$1,new cljs.core.Keyword(null,"up?","up?",77854972));
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178));
if(cljs.core.truth_((function (){var and__5041__auto__ = from;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = to;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var vec__107461 = frontend.handler.page.split_col_by_element(favorites,to);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107461,(0),null);
var next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107461,(1),null);
var vec__107464 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__107458_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,e);
}),p1__107458_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,next], null));
var prev__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107464,(0),null);
var next__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107464,(1),null);
var favorites__$1 = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(cljs.core.truth_(up_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(prev__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,cljs.core.last(prev__$1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next__$1], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(prev__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next__$1], 0)))))));
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"favorites","favorites",1740773480),favorites__$1);
} else {
return null;
}
});
frontend.handler.page.has_more_journals_QMARK_ = (function frontend$handler$page$has_more_journals_QMARK_(){
var current_length = new cljs.core.Keyword(null,"journals-length","journals-length",1463764186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return (current_length < (frontend.db.get_journals_length.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_journals_length.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_journals_length.call(null)));
});
frontend.handler.page.load_more_journals_BANG_ = (function frontend$handler$page$load_more_journals_BANG_(){
if(frontend.handler.page.has_more_journals_QMARK_()){
return frontend.state.set_journals_length_BANG_((new cljs.core.Keyword(null,"journals-length","journals-length",1463764186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) + (7)));
} else {
return null;
}
});
frontend.handler.page.update_public_attribute_BANG_ = (function frontend$handler$page$update_public_attribute_BANG_(page_name,value){
return frontend.util.page_property.add_property_BANG_(page_name,new cljs.core.Keyword(null,"public","public",1566243851),value);
});
frontend.handler.page.get_page_ref_text = (function frontend$handler$page$get_page_ref_text(page){
var edit_block_file_path = frontend.db.model.get_block_file_path(frontend.state.get_edit_block());
var page_name = clojure.string.lower_case(page);
if(cljs.core.truth_((function (){var and__5041__auto__ = edit_block_file_path;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.org_mode_file_link_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())){
var temp__5802__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_file.call(null,page_name)));
if(cljs.core.truth_(temp__5802__auto__)){
var ref_file_path = temp__5802__auto__;
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[file:%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.get_relative_path(edit_block_file_path,ref_file_path),page], 0));
} else {
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(page);
var ref_file_path = [(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?[clojure.string.replace(decodeURI(frontend.config.get_repo_dir(frontend.state.get_current_repo())),/\/+$/,""),"/"].join(''):""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.page.get_directory(journal_QMARK_)),"/",frontend.handler.page.get_file_name(journal_QMARK_,page),".org"].join('');
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));

return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[file:%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.get_relative_path(edit_block_file_path,ref_file_path),page], 0));
}
} else {
return logseq.graph_parser.util.page_ref.__GT_page_ref(page);
}
});
frontend.handler.page.init_commands_BANG_ = (function frontend$handler$page$init_commands_BANG_(){
return frontend.commands.init_commands_BANG_(frontend.handler.page.get_page_ref_text);
});
frontend.handler.page.rebuild_slash_commands_list_BANG_ = goog.functions.debounce(frontend.handler.page.init_commands_BANG_,(1500));
frontend.handler.page.template_exists_QMARK_ = (function frontend$handler$page$template_exists_QMARK_(title){
if(cljs.core.truth_(title)){
var templates = cljs.core.keys((frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_templates.call(null)));
if(cljs.core.seq(templates)){
var templates__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,templates);
return cljs.core.contains_QMARK_(cljs.core.set(templates__$1),clojure.string.lower_case(title));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.page.ls_dir_files_BANG_ = (function frontend$handler$page$ls_dir_files_BANG_(var_args){
var G__107468 = arguments.length;
switch (G__107468) {
case 1:
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (ok_handler){
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$2(ok_handler,null);
}));

(frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ok_handler,opts){
return frontend.handler.web.nfs.ls_dir_files_with_handler_BANG_.cljs$core$IFn$_invoke$arity$2((function (e){
frontend.handler.page.init_commands_BANG_();

if(cljs.core.truth_(ok_handler)){
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(e) : ok_handler.call(null,e));
} else {
return null;
}
}),opts);
}));

(frontend.handler.page.ls_dir_files_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.page.get_all_pages = (function frontend$handler$page$get_all_pages(repo){
return frontend.handler.common.fix_pages_timestamps(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
var name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
var or__5043__auto__ = frontend.util.uuid_string_QMARK_(name);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = logseq.graph_parser.config.draw_QMARK_(name);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var G__107469 = clojure.string.upper_case(name);
return (frontend.db.built_in_pages_names.cljs$core$IFn$_invoke$arity$1 ? frontend.db.built_in_pages_names.cljs$core$IFn$_invoke$arity$1(G__107469) : frontend.db.built_in_pages_names.call(null,G__107469));
}
}
}),(frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo))));
});
frontend.handler.page.get_filters = (function frontend$handler$page$get_filters(page_name){
var properties = (frontend.db.get_page_properties.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_properties.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_properties.call(null,page_name));
var properties_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"filters","filters",974726919),"{}");
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(properties_str);
}catch (e107470){var e = e107470;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.page",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("syntax","filters","syntax/filters",1060305692),e,new cljs.core.Keyword(null,"line","line",212345235),754], null)),null);
}});
frontend.handler.page.save_filter_BANG_ = (function frontend$handler$page$save_filter_BANG_(page_name,filter_state){
return frontend.util.page_property.add_property_BANG_(page_name,new cljs.core.Keyword(null,"filters","filters",974726919),filter_state);
});
frontend.handler.page.page_not_exists_handler = (function frontend$handler$page$page_not_exists_handler(input,id,q,current_pos){
frontend.state.clear_editor_action_BANG_();

if(cljs.core.truth_(frontend.state.org_mode_file_link_QMARK_(frontend.state.get_current_repo()))){
var page_ref_text = frontend.handler.page.get_page_ref_text(q);
var value = frontend.handler.page.goog$module$goog$object.get(input,"value");
var old_page_ref = logseq.graph_parser.util.page_ref.__GT_page_ref(q);
var new_value = clojure.string.replace(value,old_page_ref,page_ref_text);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(id,new_value);

var new_pos = ((current_pos + (cljs.core.count(page_ref_text) - ((old_page_ref).length))) + (2));
return frontend.util.cursor.move_cursor_to(input,new_pos);
} else {
var current_selected = frontend.util.get_selected_text();
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,((2) + cljs.core.count(current_selected)));
}
});
frontend.handler.page.on_chosen_handler = (function frontend$handler$page$on_chosen_handler(input,id,_q,pos,format){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
var action = frontend.state.get_editor_action();
var hashtag_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
var q = (function (){var or__5043__auto__ = frontend.handler.editor.get_selected_text();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((hashtag_QMARK_)?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
if((cljs.core.count(edit_content) > current_pos)){
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
} else {
return null;
}
}
}
})();
if(hashtag_QMARK_){
return (function (chosen,_click_QMARK_){
frontend.state.clear_editor_action_BANG_();

var wrapped_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.util.page_ref.left_brackets,logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,(pos - (2)),pos));
var chosen__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.safe_re_find(/\s+/,chosen);
if(cljs.core.truth_(and__5041__auto__)){
return (!(wrapped_QMARK_));
} else {
return and__5041__auto__;
}
})())?logseq.graph_parser.util.page_ref.__GT_page_ref(chosen):chosen);
var q__$1 = (cljs.core.truth_(frontend.handler.editor.get_selected_text())?"":q);
var last_pattern = ((wrapped_QMARK_)?q__$1:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(q__$1)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(q__$1,(1)):q__$1));
var last_pattern__$1 = ["#",((wrapped_QMARK_)?logseq.graph_parser.util.page_ref.left_brackets:null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_pattern)].join('');
return frontend.handler.editor.insert_command_BANG_(id,["#",((wrapped_QMARK_)?logseq.graph_parser.util.page_ref.left_brackets:null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen__$1)].join(''),format,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),last_pattern__$1,new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),((wrapped_QMARK_)?logseq.graph_parser.util.page_ref.right_brackets:null),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null));
});
} else {
return (function (chosen,_click_QMARK_){
frontend.state.clear_editor_action_BANG_();

var page_ref_text = frontend.handler.page.get_page_ref_text(chosen);
return frontend.handler.editor.insert_command_BANG_(id,page_ref_text,format,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[logseq.graph_parser.util.page_ref.left_brackets,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frontend.handler.editor.get_selected_text())?"":q))].join(''),new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),logseq.graph_parser.util.page_ref.right_brackets,new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144),(function (s){
return frontend.util.replace_first(logseq.graph_parser.util.page_ref.right_brackets,s,"");
}),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null));
});
}
});
frontend.handler.page.create_today_journal_BANG_ = (function frontend$handler$page$create_today_journal_BANG_(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(((frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(repo)) && (((cljs.core.not(frontend.state.loading_files_QMARK_(repo))) && ((!(frontend.state.whiteboard_route_QMARK_()))))))){
frontend.state.set_today_BANG_(frontend.date.today());

if(((frontend.config.local_db_QMARK_(repo)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("local",repo)) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))))){
var title = frontend.date.today();
var today_page = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title));
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(repo);
var file_name = frontend.date.journal_title__GT_default(title);
var file_rpath = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('');
var repo_dir = frontend.config.get_repo_dir(repo);
var template = frontend.state.get_default_journal_template();
if(cljs.core.truth_((frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,today_page) : frontend.db.page_empty_QMARK_.call(null,repo,today_page)))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath),(function (file_exists_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_exists_QMARK_)?frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,file_rpath):null),(function (file_content){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(file_exists_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = file_exists_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(file_content);
} else {
return and__5041__auto__;
}
}
})())?(function (){
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),cljs.core.not(template),new cljs.core.Keyword(null,"journal?","journal?",-897756522),true], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),today_page], null));

frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"today-journal-created","today-journal-created",-908154954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),today_page], null));
})()
:null));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.page.open_today_in_sidebar = (function frontend$handler$page$open_today_in_sidebar(){
var temp__5804__auto__ = (function (){var G__107471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__107472 = frontend.date.today();
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__107472) : frontend.util.page_name_sanity_lc.call(null,G__107472));
})()], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__107471) : frontend.db.entity.call(null,G__107471));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});
frontend.handler.page.open_file_in_default_app = (function frontend$handler$page$open_file_in_default_app(){
var temp__5802__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var file_rpath = temp__5802__auto__;
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath], 0));
return window.apis.openPath(file_fpath);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No file found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
/**
 * FIXME: clarify usage, copy file or copy file path
 */
frontend.handler.page.copy_current_file = (function frontend$handler$page$copy_current_file(){
var temp__5802__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var file_rpath = temp__5802__auto__;
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath], 0));
return frontend.util.copy_to_clipboard_BANG_(file_fpath);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No file found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
frontend.handler.page.open_file_in_directory = (function frontend$handler$page$open_file_in_directory(){
var temp__5802__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var file_rpath = temp__5802__auto__;
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath], 0));
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileInFolder",file_fpath], 0));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No file found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
frontend.handler.page.copy_page_url = (function frontend$handler$page$copy_page_url(var_args){
var G__107474 = arguments.length;
switch (G__107474) {
case 0:
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1(frontend.util.page.get_current_page_name());
}));

(frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
if(cljs.core.truth_(page_name)){
return frontend.util.copy_to_clipboard_BANG_(frontend.util.url.get_logseq_graph_page_url.cljs$core$IFn$_invoke$arity$3(null,frontend.state.get_current_repo(),page_name));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No page found to copy",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}));

(frontend.handler.page.copy_page_url.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=frontend.handler.page.js.map
