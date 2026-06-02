goog.provide('frontend.modules.file.core');
frontend.modules.file.core.indented_block_content = (function frontend$modules$file$core$indented_block_content(content,spaces_tabs){
var lines = clojure.string.split_lines(content);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces_tabs)].join(''),lines);
});
/**
 * Only accept nake content (without any indentation)
 */
frontend.modules.file.core.content_with_collapsed_state = (function frontend$modules$file$core$content_with_collapsed_state(format,content,collapsed_QMARK_){
if(cljs.core.truth_(collapsed_QMARK_)){
return frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,content,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true);
} else {
if(collapsed_QMARK_ === false){
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),content);
} else {
return content;

}
}
});
frontend.modules.file.core.transform_content = (function frontend$modules$file$core$transform_content(p__102457,level,p__102458){
var map__102459 = p__102457;
var map__102459__$1 = cljs.core.__destructure_map(map__102459);
var b = map__102459__$1;
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102459__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var map__102460 = p__102458;
var map__102460__$1 = cljs.core.__destructure_map(map__102460);
var heading_to_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102460__$1,new cljs.core.Keyword(null,"heading-to-list?","heading-to-list?",2108324466));
var block_ref_not_saved_QMARK_ = ((cljs.core.seq(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__102461 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102461) : frontend.db.entity.call(null,G__102461));
})()))) && ((!(clojure.string.includes_QMARK_(content,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)))))));
var heading = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties);
var markdown_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format);
var content__$1 = (function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var pre_block_QMARK___$1 = (function (){var or__5043__auto__ = pre_block_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(page,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left], 0))) && (((markdown_QMARK_) && (clojure.string.includes_QMARK_(cljs.core.first(clojure.string.split_lines(content__$1)),":: ")))));
}
})();
var content__$2 = (cljs.core.truth_(pre_block_QMARK___$1)?(function (){var content__$2 = clojure.string.trim(content__$1);
return [content__$2,"\n"].join('');
})():(function (){var markdown_top_heading_QMARK_ = (function (){var and__5041__auto__ = markdown_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(parent,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left], 0));
if(and__5041__auto____$1){
return heading;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var vec__102462 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"*")),""], null):(cljs.core.truth_(markdown_top_heading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null):(function (){var level__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = heading_to_list_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return heading;
} else {
return and__5041__auto__;
}
})())?(((heading > (1)))?(heading - (1)):heading):level);
var spaces_tabs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level__$1 - (1)),frontend.state.get_export_bullet_indentation()));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces_tabs),"-"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces_tabs),"  "].join('')], null);
})()
));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102462,(0),null);
var spaces_tabs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102462,(1),null);
var content__$2 = (cljs.core.truth_(heading_to_list_QMARK_)?clojure.string.replace(clojure.string.replace(content__$1,/^\s?#+\s+/,""),/^\s?#+\s?$/,""):content__$1);
var content__$3 = frontend.modules.file.core.content_with_collapsed_state(format,content__$2,collapsed_QMARK_);
var new_content = frontend.modules.file.core.indented_block_content(clojure.string.trim(content__$3),spaces_tabs);
var sep = (cljs.core.truth_((function (){var or__5043__auto__ = markdown_top_heading_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.blank_QMARK_(new_content);
}
})())?"":" ");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),sep,new_content].join('');
})()
);
var content__$3 = ((block_ref_not_saved_QMARK_)?frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,content__$2,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))):content__$2);
return content__$3;
});
frontend.modules.file.core.tree__GT_file_content_aux = (function frontend$modules$file$core$tree__GT_file_content_aux(tree,p__102465){
var map__102466 = p__102465;
var map__102466__$1 = cljs.core.__destructure_map(map__102466);
var opts = map__102466__$1;
var init_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102466__$1,new cljs.core.Keyword(null,"init-level","init-level",-1605905283));
var block_contents = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__102470 = tree;
var vec__102471 = G__102470;
var seq__102472 = cljs.core.seq(vec__102471);
var first__102473 = cljs.core.first(seq__102472);
var seq__102472__$1 = cljs.core.next(seq__102472);
var f = first__102473;
var r = seq__102472__$1;
var level = init_level;
var G__102470__$1 = G__102470;
var level__$1 = level;
while(true){
var vec__102479 = G__102470__$1;
var seq__102480 = cljs.core.seq(vec__102479);
var first__102481 = cljs.core.first(seq__102480);
var seq__102480__$1 = cljs.core.next(seq__102480);
var f__$1 = first__102481;
var r__$1 = seq__102480__$1;
var level__$2 = level__$1;
if((f__$1 == null)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.persistent_BANG_(block_contents)));
} else {
var page_QMARK_ = (new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(f__$1) == null);
var content = ((page_QMARK_)?null:frontend.modules.file.core.transform_content(f__$1,level__$2,opts));
var new_content = (function (){var temp__5802__auto__ = cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(f__$1));
if(temp__5802__auto__){
var children = temp__5802__auto__;
return cljs.core.cons(content,(function (){var G__102482 = children;
var G__102483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(level__$2 + (1))], null);
return (frontend.modules.file.core.tree__GT_file_content_aux.cljs$core$IFn$_invoke$arity$2 ? frontend.modules.file.core.tree__GT_file_content_aux.cljs$core$IFn$_invoke$arity$2(G__102482,G__102483) : frontend.modules.file.core.tree__GT_file_content_aux.call(null,G__102482,G__102483));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null);
}
})();
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(block_contents,new_content);

var G__102485 = r__$1;
var G__102486 = level__$2;
G__102470__$1 = G__102485;
level__$1 = G__102486;
continue;
}
break;
}
});
frontend.modules.file.core.tree__GT_file_content = (function frontend$modules$file$core$tree__GT_file_content(tree,opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",frontend.modules.file.core.tree__GT_file_content_aux(tree,opts));
});
frontend.modules.file.core.init_level = (1);
frontend.modules.file.core.transact_file_tx_if_not_exists_BANG_ = (function frontend$modules$file$core$transact_file_tx_if_not_exists_BANG_(page_block,ok_handler){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block);
} else {
return and__5041__auto__;
}
})())){
var format = cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$3(page_block,new cljs.core.Keyword("block","format","block/format",-1212045901),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()));
var title = clojure.string.capitalize(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block));
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_block);
var format__$1 = (cljs.core.truth_(whiteboard_page_QMARK_)?"edn":format);
var journal_page_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var journal_title = frontend.date.normalize_journal_title(title);
var journal_page_QMARK___$1 = ((journal_page_QMARK_) && ((!(clojure.string.blank_QMARK_(journal_title)))));
var filename = ((journal_page_QMARK___$1)?frontend.date.date__GT_file_name(journal_title):frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block);
}
})()));
var sub_dir = ((journal_page_QMARK___$1)?frontend.config.get_journals_directory():(cljs.core.truth_(whiteboard_page_QMARK_)?frontend.config.get_whiteboards_directory():frontend.config.get_pages_directory()
));
var ext = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format__$1,"markdown"))?"md":format__$1);
var file_rpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(sub_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".",ext].join('')], 0));
var file = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file_rpath], null);
var tx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file_rpath], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block),new cljs.core.Keyword("block","file","block/file",183171933),file], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx) : frontend.db.transact_BANG_.call(null,tx));

if(cljs.core.truth_(ok_handler)){
return (ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.file.core.remove_transit_ids = (function frontend$modules$file$core$remove_transit_ids(block){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","file","block/file",183171933)], 0));
});
frontend.modules.file.core.save_tree_aux_BANG_ = (function frontend$modules$file$core$save_tree_aux_BANG_(page_block,tree,blocks_just_deleted_QMARK_){
var page_block__$1 = (function (){var G__102484 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102484) : frontend.db.pull.call(null,G__102484));
})();
var file_db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_block__$1));
var file_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(file_db_id));
if(cljs.core.truth_((function (){var and__5041__auto__ = typeof file_path === 'string';
if(and__5041__auto__){
return cljs.core.not_empty(file_path);
} else {
return and__5041__auto__;
}
})())){
var new_content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page_block__$1)))?clojure.string.triml(frontend.modules.file.uprint.ugly_pr_str(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),tree,new cljs.core.Keyword(null,"pages","pages",-285406513),(new cljs.core.List(null,frontend.modules.file.core.remove_transit_ids(page_block__$1),null,(1),null))], null))):frontend.modules.file.core.tree__GT_file_content(tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),frontend.modules.file.core.init_level], null)));
if(((clojure.string.blank_QMARK_(new_content)) && (cljs.core.not(blocks_just_deleted_QMARK_)))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),(new Error("Empty content")),new cljs.core.Keyword(null,"payload","payload",-383036092),cljs.core.PersistentArrayMap.EMPTY], null)], null));
} else {
var files = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,new_content], null)], null);
var repo = frontend.state.get_current_repo();
return frontend.handler.file.alter_files_handler_BANG_(repo,files,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return console.error("File path from page-block is not valid",page_block__$1,tree);
}
});
frontend.modules.file.core.save_tree_BANG_ = (function frontend$modules$file$core$save_tree_BANG_(page_block,tree,blocks_just_deleted_QMARK_){
if(cljs.core.map_QMARK_(page_block)){
} else {
throw (new Error("Assert failed: (map? page-block)"));
}

var ok_handler = (function (){
return frontend.modules.file.core.save_tree_aux_BANG_(page_block,tree,blocks_just_deleted_QMARK_);
});
var file = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(page_block));
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
return new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;
}
}
})();
if(cljs.core.truth_(file)){
return ok_handler();
} else {
return frontend.modules.file.core.transact_file_tx_if_not_exists_BANG_(page_block,ok_handler);
}
});

//# sourceMappingURL=frontend.modules.file.core.js.map
