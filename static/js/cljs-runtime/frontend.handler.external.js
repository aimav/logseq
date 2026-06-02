goog.provide('frontend.handler.external');
/**
 * Create file structure, then parse into DB (client only)
 */
frontend.handler.external.index_files_BANG_ = (function frontend$handler$external$index_files_BANG_(repo,files,finish_handler){
var titles = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),files));
var files__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(file);
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var temp__5804__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(temp__5804__auto__)){
var text = temp__5804__auto__;
var title__$1 = (function (){var or__5043__auto__ = ((journal_QMARK_)?frontend.date.journal_title__GT_default(title):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.replace(title,"/","-");
}
})();
var title__$2 = clojure.string.replace(logseq.graph_parser.util.page_name_sanity(title__$1),"\n"," ");
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((journal_QMARK_)?frontend.config.get_journals_directory():frontend.config.get_pages_directory())),"/",title__$2,".md"].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),text], null);
} else {
return null;
}
}),files);
var files__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,files__$1);
frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo,files__$2,null);

var files_118519__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118422){
var map__118423 = p__118422;
var map__118423__$1 = cljs.core.__destructure_map(map__118423);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118423__$1,new cljs.core.Keyword("file","path","file/path",-191335748));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118423__$1,new cljs.core.Keyword("file","content","file/content",12680964));
if(cljs.core.truth_(path)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,content], null);
} else {
return null;
}
}),files__$2));
frontend.handler.file.alter_files(repo,files_118519__$3,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"add-history?","add-history?",1354241628),false,new cljs.core.Keyword(null,"update-db?","update-db?",-1641846808),false,new cljs.core.Keyword(null,"update-status?","update-status?",-1878751221),false,new cljs.core.Keyword(null,"finish-handler","finish-handler",770511735),finish_handler], null));

var journal_pages_tx = (function (){var titles__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.date.normalize_journal_title,titles);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (title){
var day = frontend.date.journal_title__GT_int(title);
var journal_title = logseq.graph_parser.date_time_util.int__GT_journal_title(day,frontend.state.get_date_formatter());
if(cljs.core.truth_(journal_title)){
var page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(journal_title) : frontend.util.page_name_sanity_lc.call(null,journal_title));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name,new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),day], null);
} else {
return null;
}
}),titles__$1);
})();
if(cljs.core.seq(journal_pages_tx)){
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,journal_pages_tx) : frontend.db.transact_BANG_.call(null,repo,journal_pages_tx));
} else {
return null;
}
});
frontend.handler.external.import_from_roam_json_BANG_ = (function frontend$handler$external$import_from_roam_json_BANG_(data,finished_ok_handler){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var files = frontend.external.to_markdown_files(new cljs.core.Keyword(null,"roam","roam",-1785859900),data,cljs.core.PersistentArrayMap.EMPTY);
return frontend.handler.external.index_files_BANG_(repo,files,(function (){
return (finished_ok_handler.cljs$core$IFn$_invoke$arity$0 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$0() : finished_ok_handler.call(null));
}));
} else {
return null;
}
});
frontend.handler.external.import_from_opml_BANG_ = (function frontend$handler$external$import_from_opml_BANG_(data,finished_ok_handler){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var config = logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var vec__118424 = frontend.format.mldoc.opml__GT_edn(config,data);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118424,(0),null);
var parsed_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118424,(1),null);
var parsed_blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,cljs.core.PersistentArrayMap.EMPTY], null);
}),parsed_blocks);
var page_name = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(headers);
var parsed_blocks__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.wrap_parse_block,frontend.format.block.extract_blocks(parsed_blocks__$1,"",new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name], null)));
if(cljs.core.not((frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.page_exists_QMARK_.call(null,page_name)))){
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));
} else {
}

var page_block = (function (){var G__118430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__118430) : frontend.db.entity.call(null,G__118430));
})();
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(page_block);
var blocks = (frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2 ? frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,page_block) : frontend.db.sort_by_left.call(null,children,page_block));
var last_block = cljs.core.last(blocks);
var snd_last_block = cljs.core.last(cljs.core.butlast(blocks));
var vec__118427 = (cljs.core.truth_((function (){var and__5041__auto__ = last_block;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(last_block));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(snd_last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snd_last_block,true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_block,false], null)));
var target_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118427,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118427,(1),null);
frontend.handler.editor.paste_blocks(parsed_blocks__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null));

var G__118431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name], null);
return (finished_ok_handler.cljs$core$IFn$_invoke$arity$1 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$1(G__118431) : finished_ok_handler.call(null,G__118431));
} else {
return null;
}
});
/**
 * Create page from the per page object generated in `export-repo-as-edn-v2!`
 * Return page-name (title)
 * Extension to `insert-block-tree-after-target`
 * :id       - page's uuid
 * :title    - page's title (original name)
 * :children - tree
 * 
 */
frontend.handler.external.create_page_with_exported_tree_BANG_ = (function frontend$handler$external$create_page_with_exported_tree_BANG_(p__118432){
var map__118433 = p__118432;
var map__118433__$1 = cljs.core.__destructure_map(map__118433);
var tree = map__118433__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118433__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118433__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var has_children_QMARK__118520 = cljs.core.seq(children);
var page_format_118521 = (function (){var G__118434 = tree;
var G__118434__$1 = (((G__118434 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__118434));
var G__118434__$2 = (((G__118434__$1 == null))?null:cljs.core.first(G__118434__$1));
if((G__118434__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(G__118434__$2);
}
})();
try{frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"format","format",-1306924766),page_format_118521,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid], null));
}catch (e118435){var e_118522 = e118435;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Error happens when creating page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),":\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_118522),"\nSkipped and continue the remaining import."].join(''),new cljs.core.Keyword(null,"error","error",-978969032));
}
if(has_children_QMARK__118520){
var page_block_118523 = (function (){var G__118436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__118436) : frontend.db.entity.call(null,G__118436));
})();
var first_child_118524 = cljs.core.first(new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page_block_118523));
try{frontend.handler.editor.insert_block_tree(children,page_format_118521,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target-block","target-block",348392017),first_child_118524,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
}catch (e118437){var e_118525 = e118437;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Error happens when creating block content of page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_118525),"\nSkipped and continue the remaining import."].join(''),new cljs.core.Keyword(null,"error","error",-978969032));
}} else {
}

return title;
});
/**
 * Collect all uuids from page trees and write them to the db before hand.
 */
frontend.handler.external.pre_transact_uuids_BANG_ = (function frontend$handler$external$pre_transact_uuids_BANG_(pages){
var uuids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block)], null);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__118438_SHARP_){
return cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),p1__118438_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages], 0)));
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(uuids) : frontend.db.transact_BANG_.call(null,uuids));
});
/**
 * Not rely on file system - backend compatible.
 * tree-translator-fn: translate exported tree structure to the desired tree for import
 */
frontend.handler.external.import_from_tree_BANG_ = (function frontend$handler$external$import_from_tree_BANG_(data,tree_translator_fn){
var imported_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
try{var blocks = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tree_translator_fn,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data))));
var job_chan = cljs.core.async.to_chan_BANG_(blocks);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"total","total",1916810418)], null),cljs.core.count(blocks));

frontend.handler.external.pre_transact_uuids_BANG_(blocks);

var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_118473){
var state_val_118474 = (state_118473[(1)]);
if((state_val_118474 === (1))){
var state_118473__$1 = state_118473;
var statearr_118475_118526 = state_118473__$1;
(statearr_118475_118526[(2)] = null);

(statearr_118475_118526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118474 === (2))){
var state_118473__$1 = state_118473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118473__$1,(4),job_chan);
} else {
if((state_val_118474 === (3))){
var inst_118471 = (state_118473[(2)]);
var state_118473__$1 = state_118473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118473__$1,inst_118471);
} else {
if((state_val_118474 === (4))){
var inst_118442 = (state_118473[(7)]);
var inst_118442__$1 = (state_118473[(2)]);
var state_118473__$1 = (function (){var statearr_118476 = state_118473;
(statearr_118476[(7)] = inst_118442__$1);

return statearr_118476;
})();
if(cljs.core.truth_(inst_118442__$1)){
var statearr_118477_118527 = state_118473__$1;
(statearr_118477_118527[(1)] = (5));

} else {
var statearr_118478_118528 = state_118473__$1;
(statearr_118478_118528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118474 === (5))){
var inst_118442 = (state_118473[(7)]);
var inst_118448 = (state_118473[(8)]);
var inst_118447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_118442,(0),null);
var inst_118448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_118442,(1),null);
var inst_118449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118450 = [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444)];
var inst_118451 = (new cljs.core.PersistentVector(null,2,(5),inst_118449,inst_118450,null));
var inst_118452 = (inst_118447 + (1));
var inst_118453 = frontend.state.set_state_BANG_(inst_118451,inst_118452);
var inst_118454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118455 = [new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword(null,"current-page","current-page",-101294180)];
var inst_118456 = (new cljs.core.PersistentVector(null,2,(5),inst_118454,inst_118455,null));
var inst_118457 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(inst_118448__$1);
var inst_118458 = frontend.state.set_state_BANG_(inst_118456,inst_118457);
var inst_118459 = cljs.core.async.timeout((10));
var state_118473__$1 = (function (){var statearr_118479 = state_118473;
(statearr_118479[(8)] = inst_118448__$1);

(statearr_118479[(9)] = inst_118453);

(statearr_118479[(10)] = inst_118458);

return statearr_118479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118473__$1,(8),inst_118459);
} else {
if((state_val_118474 === (6))){
var inst_118465 = (frontend.db.get_all_referenced_blocks_uuid.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_referenced_blocks_uuid.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_referenced_blocks_uuid.call(null));
var inst_118466 = frontend.handler.editor.set_blocks_id_BANG_(inst_118465);
var inst_118467 = cljs.core.async.offer_BANG_(imported_chan,true);
var state_118473__$1 = (function (){var statearr_118480 = state_118473;
(statearr_118480[(11)] = inst_118466);

return statearr_118480;
})();
var statearr_118481_118529 = state_118473__$1;
(statearr_118481_118529[(2)] = inst_118467);

(statearr_118481_118529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118474 === (7))){
var inst_118469 = (state_118473[(2)]);
var state_118473__$1 = state_118473;
var statearr_118482_118530 = state_118473__$1;
(statearr_118482_118530[(2)] = inst_118469);

(statearr_118482_118530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118474 === (8))){
var inst_118448 = (state_118473[(8)]);
var inst_118461 = (state_118473[(2)]);
var inst_118462 = frontend.handler.external.create_page_with_exported_tree_BANG_(inst_118448);
var state_118473__$1 = (function (){var statearr_118483 = state_118473;
(statearr_118483[(12)] = inst_118461);

(statearr_118483[(13)] = inst_118462);

return statearr_118483;
})();
var statearr_118484_118531 = state_118473__$1;
(statearr_118484_118531[(2)] = null);

(statearr_118484_118531[(1)] = (2));


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
});
return (function() {
var frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_118485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_118485[(0)] = frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto__);

(statearr_118485[(1)] = (1));

return statearr_118485;
});
var frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto____1 = (function (state_118473){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_118473);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e118486){var ex__34382__auto__ = e118486;
var statearr_118487_118532 = state_118473;
(statearr_118487_118532[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_118473[(4)]))){
var statearr_118488_118533 = state_118473;
(statearr_118488_118533[(1)] = cljs.core.first((state_118473[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118534 = state_118473;
state_118473 = G__118534;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto__ = function(state_118473){
switch(arguments.length){
case 0:
return frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto____1.call(this,state_118473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto____0;
frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto____1;
return frontend$handler$external$import_from_tree_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_118489 = f__34484__auto__();
(statearr_118489[(6)] = c__34483__auto__);

return statearr_118489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}catch (e118439){var e = e118439;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Error happens when importing:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.async.offer_BANG_(imported_chan,true);
}});
/**
 * Actions to do for loading edn tree structure.
 * 1) Removes namespace `:block/` from all levels of the `tree-vec`
 * 2) Rename all :block/page-name to :title
 * 3) Rename all :block/id to :uuid
 */
frontend.handler.external.tree_vec_translate_edn = (function frontend$handler$external$tree_vec_translate_edn(tree_vec){
var kw_trans_fn = (function (p1__118490_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__118490_SHARP_),":block/page-name",":block/title"),":block/id",":block/uuid"),":block/",""));
});
var map_trans_fn = (function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kw_trans_fn(k),v);
});
var tree_trans_fn = (function (form){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(form);
if(and__5041__auto__){
return new cljs.core.Keyword("block","id","block/id",-1461684825).cljs$core$IFn$_invoke$arity$1(form);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.reduce_kv(map_trans_fn,cljs.core.PersistentArrayMap.EMPTY,form);
} else {
return form;
}
});
return clojure.walk.postwalk(tree_trans_fn,tree_vec);
});
frontend.handler.external.import_from_edn_BANG_ = (function frontend$handler$external$import_from_edn_BANG_(raw,finished_ok_handler){
try{var data = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(raw);
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_118497){
var state_val_118498 = (state_118497[(1)]);
if((state_val_118498 === (1))){
var inst_118492 = frontend.handler.external.import_from_tree_BANG_(data,frontend.handler.external.tree_vec_translate_edn);
var state_118497__$1 = state_118497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118497__$1,(2),inst_118492);
} else {
if((state_val_118498 === (2))){
var inst_118494 = (state_118497[(2)]);
var inst_118495 = (finished_ok_handler.cljs$core$IFn$_invoke$arity$1 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$1(null) : finished_ok_handler.call(null,null));
var state_118497__$1 = (function (){var statearr_118499 = state_118497;
(statearr_118499[(7)] = inst_118494);

return statearr_118499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_118497__$1,inst_118495);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_118500 = [null,null,null,null,null,null,null,null];
(statearr_118500[(0)] = frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto__);

(statearr_118500[(1)] = (1));

return statearr_118500;
});
var frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto____1 = (function (state_118497){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_118497);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e118501){var ex__34382__auto__ = e118501;
var statearr_118502_118535 = state_118497;
(statearr_118502_118535[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_118497[(4)]))){
var statearr_118503_118536 = state_118497;
(statearr_118503_118536[(1)] = cljs.core.first((state_118497[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118537 = state_118497;
state_118497 = G__118537;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto__ = function(state_118497){
switch(arguments.length){
case 0:
return frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto____1.call(this,state_118497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto____0;
frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto____1;
return frontend$handler$external$import_from_edn_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_118504 = f__34484__auto__();
(statearr_118504[(6)] = c__34483__auto__);

return statearr_118504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}catch (e118491){var e = e118491;
console.error(e);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message),new cljs.core.Keyword(null,"error","error",-978969032));
}});
/**
 * Actions to do for loading json tree structure.
 * 1) Rename all :id to :uuid
 * 2) Rename all :page-name to :title
 * 3) Rename all :format "markdown" to :format `:markdown`
 */
frontend.handler.external.tree_vec_translate_json = (function frontend$handler$external$tree_vec_translate_json(tree_vec){
var kw_trans_fn = (function (p1__118505_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__118505_SHARP_),":page-name",":title"),":id",":uuid"),/^:/,""));
});
var map_trans_fn = (function (acc,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format","format",-1306924766),k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kw_trans_fn(k),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kw_trans_fn(k),cljs.core.uuid(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kw_trans_fn(k),v);

}
}
});
var tree_trans_fn = (function (form){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(form);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(form);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.reduce_kv(map_trans_fn,cljs.core.PersistentArrayMap.EMPTY,form);
} else {
return form;
}
});
return clojure.walk.postwalk(tree_trans_fn,tree_vec);
});
frontend.handler.external.import_from_json_BANG_ = (function frontend$handler$external$import_from_json_BANG_(raw,finished_ok_handler){
var json = JSON.parse(raw);
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_118511){
var state_val_118512 = (state_118511[(1)]);
if((state_val_118512 === (1))){
var inst_118506 = frontend.handler.external.import_from_tree_BANG_(clj_data,frontend.handler.external.tree_vec_translate_json);
var state_118511__$1 = state_118511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118511__$1,(2),inst_118506);
} else {
if((state_val_118512 === (2))){
var inst_118508 = (state_118511[(2)]);
var inst_118509 = (finished_ok_handler.cljs$core$IFn$_invoke$arity$1 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$1(null) : finished_ok_handler.call(null,null));
var state_118511__$1 = (function (){var statearr_118513 = state_118511;
(statearr_118513[(7)] = inst_118508);

return statearr_118513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_118511__$1,inst_118509);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_118514 = [null,null,null,null,null,null,null,null];
(statearr_118514[(0)] = frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto__);

(statearr_118514[(1)] = (1));

return statearr_118514;
});
var frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto____1 = (function (state_118511){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_118511);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e118515){var ex__34382__auto__ = e118515;
var statearr_118516_118538 = state_118511;
(statearr_118516_118538[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_118511[(4)]))){
var statearr_118517_118539 = state_118511;
(statearr_118517_118539[(1)] = cljs.core.first((state_118511[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118540 = state_118511;
state_118511 = G__118540;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto__ = function(state_118511){
switch(arguments.length){
case 0:
return frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto____1.call(this,state_118511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto____0;
frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto____1;
return frontend$handler$external$import_from_json_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_118518 = f__34484__auto__();
(statearr_118518[(6)] = c__34483__auto__);

return statearr_118518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});

//# sourceMappingURL=frontend.handler.external.js.map
