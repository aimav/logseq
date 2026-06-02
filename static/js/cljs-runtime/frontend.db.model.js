goog.provide('frontend.db.model');
frontend.db.model.initial_blocks_length = (50);
frontend.db.model.step_loading_blocks = (25);
frontend.db.model.block_attrs = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","_refs","block/_refs",830218531),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","marker","block/marker",1231576318),new cljs.core.Keyword("block","priority","block/priority",1491369544),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","heading-level","block/heading-level",661361785),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_parent","block/_parent",-639389670),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
frontend.db.model.sub_block = (function frontend$db$model$sub_block(id){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return frontend.util.react(frontend.db.react.q(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block","frontend.db.react/block",1552179739),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (_){
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(frontend.db.model.block_attrs),id);
})], null),null));
} else {
return null;
}
});
frontend.db.model.get_original_name = frontend.util.get_page_original_name;
frontend.db.model.get_tag_pages = (function frontend$db$model$get_tag_pages(repo,tag_name){
if(cljs.core.truth_(tag_name)){
var G__69628 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?original-name","?original-name",-1097243956,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?original-name","?original-name",-1097243956,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__69629 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69630 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(tag_name) : frontend.util.page_name_sanity_lc.call(null,tag_name));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69628,G__69629,G__69630) : datascript.core.q.call(null,G__69628,G__69629,G__69630));
} else {
return null;
}
});
frontend.db.model.get_all_tagged_pages = (function frontend$db$model$get_all_tagged_pages(repo){
var G__69631 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null);
var G__69632 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69631,G__69632) : datascript.core.q.call(null,G__69631,G__69632));
});
frontend.db.model.get_all_namespace_relation = (function frontend$db$model$get_all_namespace_relation(repo){
var G__69633 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__69634 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69633,G__69634) : datascript.core.q.call(null,G__69633,G__69634));
});
frontend.db.model.get_all_namespace_parents = (function frontend$db$model$get_all_namespace_parents(repo){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,frontend.db.model.get_all_namespace_relation(repo));
});
frontend.db.model.get_pages = (function frontend$db$model$get_pages(repo){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__69635 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-original-name","?page-original-name",849062408,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)),new cljs.core.Symbol(null,"?page-original-name","?page-original-name",849062408,null)], null)], null);
var G__69636 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69635,G__69636) : datascript.core.q.call(null,G__69635,G__69636));
})());
});
frontend.db.model.get_all_pages = (function frontend$db$model$get_all_pages(repo){
var G__69637 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__69638 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69637,G__69638) : datascript.core.q.call(null,G__69637,G__69638));
});
frontend.db.model.get_all_page_original_names = (function frontend$db$model$get_all_page_original_names(repo){
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)));
});
/**
 * Return full file entity for calling file renaming
 */
frontend.db.model.get_pages_with_file = (function frontend$db$model$get_pages_with_file(repo){
var G__69639 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null)], null);
var G__69640 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69639,G__69640) : datascript.core.q.call(null,G__69639,G__69640));
});
frontend.db.model.get_page_alias = (function frontend$db$model$get_page_alias(repo,page_name){
var temp__5804__auto__ = (function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var G__69641 = (function (){var G__69642 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null)], null)], null);
var G__69643 = db;
var G__69644 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69642,G__69643,G__69644) : datascript.core.q.call(null,G__69642,G__69643,G__69644));
})();
var G__69641__$1 = (((G__69641 == null))?null:frontend.db.utils.seq_flatten(G__69641));
if((G__69641__$1 == null)){
return null;
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__69641__$1);
}
} else {
return null;
}
});
/**
 * return the source page (page-name) of an alias
 */
frontend.db.model.get_alias_source_page = (function frontend$db$model$get_alias_source_page(repo,alias){
var temp__5804__auto__ = (function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var alias__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(alias) : frontend.util.page_name_sanity_lc.call(null,alias));
var pages = frontend.db.utils.seq_flatten((function (){var G__69645 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null);
var G__69646 = db;
var G__69647 = alias__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69645,G__69646,G__69647) : datascript.core.q.call(null,G__69645,G__69646,G__69647));
})());
if(cljs.core.seq(pages)){
return cljs.core.some((function (page){
var aliases = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"alias","alias",-2039751630)], null))));
if(cljs.core.contains_QMARK_(aliases,alias__$1)){
return page;
} else {
return null;
}
}),pages);
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_files = (function frontend$db$model$get_files(repo){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return cljs.core.reverse(cljs.core.seq((function (){var G__69648 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
var G__69649 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69648,G__69649) : datascript.core.q.call(null,G__69648,G__69649));
})()));
} else {
return null;
}
});
frontend.db.model.get_files_blocks = (function frontend$db$model$get_files_blocks(repo_url,paths){
var paths__$1 = cljs.core.set(paths);
var pred = (function (_db,e){
return cljs.core.contains_QMARK_(paths__$1,e);
});
return frontend.db.utils.seq_flatten((function (){var G__69650 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__69651 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__69652 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69650,G__69651,G__69652) : datascript.core.q.call(null,G__69650,G__69651,G__69652));
})());
});
/**
 * Refresh file timestamps to DB
 */
frontend.db.model.set_file_last_modified_at_BANG_ = (function frontend$db$model$set_file_last_modified_at_BANG_(repo,path,last_modified_at){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = path;
if(cljs.core.truth_(and__5041__auto____$1)){
return last_modified_at;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo,false);
if(cljs.core.truth_(temp__5804__auto__)){
var conn = temp__5804__auto__;
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),last_modified_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_file_last_modified_at = (function frontend$db$model$get_file_last_modified_at(repo,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.file_exists_QMARK_ = (function frontend$db$model$file_exists_QMARK_(repo,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_files_full = (function frontend$db$model$get_files_full(repo){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return cljs.core.flatten((function (){var G__69653 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null);
var G__69654 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69653,G__69654) : datascript.core.q.call(null,G__69653,G__69654));
})());
} else {
return null;
}
});
frontend.db.model.get_file = (function frontend$db$model$get_file(var_args){
var G__69656 = arguments.length;
switch (G__69656) {
case 1:
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1 = (function (path){
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),path);
}));

(frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2 = (function (repo,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_file.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_custom_css = (function frontend$db$model$get_custom_css(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2(repo,"logseq/custom.css");
} else {
return null;
}
});
frontend.db.model.get_block_by_uuid = (function frontend$db$model$get_block_by_uuid(id){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),((cljs.core.uuid_QMARK_(id))?id:cljs.core.uuid(id))], null));
});
/**
 * Return block or page entity, depends on the uuid
 */
frontend.db.model.query_block_by_uuid = (function frontend$db$model$query_block_by_uuid(id){
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),((cljs.core.uuid_QMARK_(id))?id:cljs.core.uuid(id))], null));
});
/**
 * Converts a heading block's content to its route name. This works
 * independent of format as format specific heading characters are stripped
 */
frontend.db.model.heading_content__GT_route_name = (function frontend$db$model$heading_content__GT_route_name(block_content){
var G__69657 = block_content;
var G__69657__$1 = (((G__69657 == null))?null:cljs.core.re_find(/^#{0,}\s*(.*)(?:\n|$)/,G__69657));
var G__69657__$2 = (((G__69657__$1 == null))?null:cljs.core.second(G__69657__$1));
if((G__69657__$2 == null)){
return null;
} else {
return clojure.string.lower_case(G__69657__$2);
}
});
/**
 * Returns first block for given page name and block's route name. Block's route
 *   name must match the content of a page's block header
 */
frontend.db.model.get_block_by_page_name_and_block_route_name = (function frontend$db$model$get_block_by_page_name_and_block_route_name(repo,page_name,route_name){
return cljs.core.ffirst((function (){var G__69658 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?route-name","?route-name",1645323543,null),new cljs.core.Symbol(null,"?content-matches","?content-matches",-1315422313,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null),new cljs.core.Keyword(null,"heading","heading",-1312171873)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?content-matches","?content-matches",-1315422313,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Symbol(null,"?route-name","?route-name",1645323543,null))], null)], null);
var G__69659 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69660 = page_name;
var G__69661 = route_name;
var G__69662 = (function frontend$db$model$get_block_by_page_name_and_block_route_name_$_content_matches_QMARK_(block_content,external_content){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.db.model.heading_content__GT_route_name(block_content),clojure.string.lower_case(external_content));
});
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__69658,G__69659,G__69660,G__69661,G__69662) : datascript.core.q.call(null,G__69658,G__69659,G__69660,G__69661,G__69662));
})());
});
frontend.db.model.get_page_format = (function frontend$db$model$get_page_format(page_name){
var _PERCENT_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = (function (){var page = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page_name)], null));
var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file)));
if(cljs.core.truth_(temp__5804__auto____$1)){
var path = temp__5804__auto____$1;
return logseq.graph_parser.util.get_format(path);
} else {
return null;
}
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
}
})());
if((_PERCENT_ instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? %)"));
}

return _PERCENT_;
});
frontend.db.model.page_alias_set = (function frontend$db$model$page_alias_set(repo_url,page){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var page_id = temp__5804__auto__;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]),cljs.core.set(frontend.db.utils.seq_flatten((function (){var G__69663 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null))], null);
var G__69664 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__69665 = frontend.util.safe_page_name_sanity_lc(page);
var G__69666 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(logseq.db.rules.rules);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__69663,G__69664,G__69665,G__69666) : datascript.core.q.call(null,G__69663,G__69664,G__69665,G__69666));
})())));
} else {
return null;
}
});
frontend.db.model.get_entities_by_ids = (function frontend$db$model$get_entities_by_ids(var_args){
var G__69668 = arguments.length;
switch (G__69668) {
case 1:
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),ids);
}));

(frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,ids){
if(cljs.core.truth_(repo)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ids);
} else {
return null;
}
}));

(frontend.db.model.get_entities_by_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_names_by_ids = (function frontend$db$model$get_page_names_by_ids(var_args){
var G__69670 = arguments.length;
switch (G__69670) {
case 1:
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),ids);
}));

(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,ids){
if(cljs.core.truth_(repo)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null),ids));
} else {
return null;
}
}));

(frontend.db.model.get_page_names_by_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_alias_names = (function frontend$db$model$get_page_alias_names(repo,page_name){
var alias_ids = frontend.db.model.page_alias_set(repo,page_name);
if(cljs.core.seq(alias_ids)){
var names = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__69671_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p1__69671_SHARP_) : frontend.util.page_name_sanity_lc.call(null,p1__69671_SHARP_)),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2(repo,alias_ids)));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(name) : frontend.util.page_name_sanity_lc.call(null,name))], null);
}),names);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m);
}
}),frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),lookup_refs));
} else {
return null;
}
});
frontend.db.model.with_pages = (function frontend$db$model$with_pages(blocks){
var pages_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","page","block/page",822314108)),blocks));
var pages = ((cljs.core.seq(pages_ids))?frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null),pages_ids):null);
var pages_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,pages);
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages_map,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))));
}),blocks);
return blocks__$1;
});
frontend.db.model.get_page_properties = (function frontend$db$model$get_page_properties(page){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var page__$1 = temp__5804__auto__;
return new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page__$1);
} else {
return null;
}
});
frontend.db.model.sort_by_left = (function frontend$db$model$sort_by_left(var_args){
var G__69674 = arguments.length;
switch (G__69674) {
case 2:
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2 = (function (blocks,parent){
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3(blocks,parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"check?","check?",-1230991970),true], null));
}));

(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3 = (function (blocks,parent,p__69675){
var map__69676 = p__69675;
var map__69676__$1 = cljs.core.__destructure_map(map__69676);
var check_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69676__$1,new cljs.core.Keyword(null,"check?","check?",-1230991970));
var blocks__$1 = frontend.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks);
if(cljs.core.truth_((function (){var and__5041__auto__ = check_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))));
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks__$1),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566),blocks__$1))))){
var duplicates_69878 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69677){
var vec__69678 = p__69677;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69678,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69678,(1),null);
var left = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(k);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"duplicates","duplicates",1265485699),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69672_SHARP_){
return cljs.core.select_keys(p1__69672_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","file","block/file",183171933)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block)));
}),blocks__$1))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__69681){
var vec__69682 = p__69681;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69682,(1),null);
return (v > (1));
}),cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","left","block/left",-443712566)),blocks__$1))));
(frontend.util.pprint.cljs$core$IFn$_invoke$arity$1 ? frontend.util.pprint.cljs$core$IFn$_invoke$arity$1(duplicates_69878) : frontend.util.pprint.call(null,duplicates_69878));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks__$1),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566),blocks__$1))))){
} else {
throw (new Error(["Assert failed: ","Each block should have a different left node","\n","(= (count blocks) (count (set (map :block/left blocks))))"].join('')));
}
} else {
}

var left__GT_blocks = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(b)),b);
}),cljs.core.PersistentArrayMap.EMPTY,blocks__$1);
var block = parent;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(left__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5802__auto__)){
var next = temp__5802__auto__;
var G__69879 = next;
var G__69880 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next);
block = G__69879;
result = G__69880;
continue;
} else {
return cljs.core.vec(result);
}
break;
}
}));

(frontend.db.model.sort_by_left.cljs$lang$maxFixedArity = 3);

frontend.db.model.try_sort_by_left = (function frontend$db$model$try_sort_by_left(blocks,parent){
var result_SINGLEQUOTE_ = frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3(blocks,parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"check?","check?",-1230991970),false], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result_SINGLEQUOTE_),cljs.core.count(blocks))){
return result_SINGLEQUOTE_;
} else {
return blocks;
}
});
frontend.db.model.sort_by_left_recursive = (function frontend$db$model$sort_by_left_recursive(form){
return clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(f);
if(and__5041__auto__){
return new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__5041__auto__;
}
})())){
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("block","_parent","block/_parent",-639389670)),new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,f));
} else {
return f;
}
}),form);
});
frontend.db.model.get_sorted_page_block_ids = (function frontend$db$model$get_sorted_page_block_ids(page_id){
var root = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page_id);
var result = cljs.core.PersistentVector.EMPTY;
var children = frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(root),root);
while(true){
if(cljs.core.seq(children)){
var child = cljs.core.first(children);
var G__69881 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child));
var G__69882 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(child),child),cljs.core.rest(children));
result = G__69881;
children = G__69882;
continue;
} else {
return result;
}
break;
}
});
/**
 * Blocks could be non consecutive.
 */
frontend.db.model.sort_page_random_blocks = (function frontend$db$model$sort_page_random_blocks(blocks){
if(cljs.core.every_QMARK_((function (p1__69685_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__69685_SHARP_),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
}),blocks)){
} else {
throw (new Error(["Assert failed: ","Blocks must to be in a same page.","\n","(every? (fn* [p1__69685#] (= (:block/page p1__69685#) (:block/page (first blocks)))) blocks)"].join('')));
}

var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
var sorted_ids = frontend.db.model.get_sorted_page_block_ids(page_id);
var blocks_map = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(blocks_map,sorted_ids);
});
/**
 * page-name: the page name, original name
 * return: a list with elements in:
 *     :id    - a list of block ids, sorted by :block/left
 *     :level - the level of the block, 1 for root, 2 for children of root, etc.
 */
frontend.db.model.get_sorted_page_block_ids_and_levels = (function frontend$db$model$get_sorted_page_block_ids_and_levels(page_name){
if(typeof page_name === 'string'){
} else {
throw (new Error("Assert failed: (string? page-name)"));
}

var sanitized_page = logseq.graph_parser.util.page_name_sanity_lc(page_name);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),sanitized_page], null)));
var root = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page_id);
var result = cljs.core.PersistentVector.EMPTY;
var children = frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(root),root);
var levels = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(children),(1));
while(true){
if(cljs.core.seq(children)){
var child = cljs.core.first(children);
var cur_level = cljs.core.first(levels);
var next_children = frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(child),child);
var G__69883 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"level","level",1290497552),cur_level], null));
var G__69884 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(next_children,cljs.core.rest(children));
var G__69885 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(next_children),(cur_level + (1))),cljs.core.rest(levels));
result = G__69883;
children = G__69884;
levels = G__69885;
continue;
} else {
return result;
}
break;
}
});
frontend.db.model.has_children_QMARK_ = (function frontend$db$model$has_children_QMARK_(var_args){
var G__69687 = arguments.length;
switch (G__69687) {
case 1:
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),block_id);
}));

(frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db,block_id){
return (!((new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null))) == null)));
}));

(frontend.db.model.has_children_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.db.model.collapsed_and_has_children_QMARK_ = (function frontend$db$model$collapsed_and_has_children_QMARK_(db,block){
var and__5041__auto__ = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
});
frontend.db.model.get_by_parent__AMPERSAND__left = (function frontend$db$model$get_by_parent__AMPERSAND__left(db,parent_id,left_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = parent_id;
if(cljs.core.truth_(and__5041__auto__)){
return left_id;
} else {
return and__5041__auto__;
}
})())){
var lefts = new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,left_id));
return cljs.core.some((function (node){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node))))){
return node;
} else {
return null;
}
}),lefts);
} else {
return null;
}
});
/**
 * Get the next outdented block of the block that has the `id`.
 *   e.g.
 *   - a
 *  - b
 *    - c
 *   - d
 * 
 *   The next outdented block of `c` is `d`.
 */
frontend.db.model.get_next_outdented_block = (function frontend$db$model$get_next_outdented_block(db,id){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,id);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var temp__5802__auto__ = frontend.db.model.get_by_parent__AMPERSAND__left(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(temp__5802__auto__)){
var parent_sibling = temp__5802__auto__;
return parent_sibling;
} else {
var G__69688 = db;
var G__69689 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
return (frontend.db.model.get_next_outdented_block.cljs$core$IFn$_invoke$arity$2 ? frontend.db.model.get_next_outdented_block.cljs$core$IFn$_invoke$arity$2(G__69688,G__69689) : frontend.db.model.get_next_outdented_block.call(null,G__69688,G__69689));
}
} else {
return null;
}
});
frontend.db.model.top_block_QMARK_ = (function frontend$db$model$top_block_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
});
frontend.db.model.get_block_parent = (function frontend$db$model$get_block_parent(var_args){
var G__69691 = arguments.length;
switch (G__69691) {
case 1:
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),block_id);
}));

(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var block = temp__5804__auto____$1;
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_parent.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_block_parents = (function frontend$db$model$get_block_parents(var_args){
var G__69693 = arguments.length;
switch (G__69693) {
case 2:
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3(repo,block_id,(100));
}));

(frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_id,depth){
var block_id__$1 = block_id;
var parents = cljs.core.List.EMPTY;
var d = (1);
while(true){
if((d > depth)){
return parents;
} else {
var temp__5802__auto__ = frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2(repo,block_id__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var parent = temp__5802__auto__;
var G__69889 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
var G__69890 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,parent);
var G__69891 = (d + (1));
block_id__$1 = G__69889;
parents = G__69890;
d = G__69891;
continue;
} else {
return parents;
}
}
break;
}
}));

(frontend.db.model.get_block_parents.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_block_parents_v2 = (function frontend$db$model$get_block_parents_v2(repo,block_id){
var G__69694 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69695 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__69696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__69694,G__69695,G__69696) : datascript.core.pull.call(null,G__69694,G__69695,G__69696));
});
frontend.db.model.get_next_open_block = (function frontend$db$model$get_next_open_block(var_args){
var G__69698 = arguments.length;
switch (G__69698) {
case 2:
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$2 = (function (db,block){
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3(db,block,null);
}));

(frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3 = (function (db,block,scoped_block_id){
var block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var block_parent_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
var next_block = (function (){var or__5043__auto__ = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.db.model.collapsed_and_has_children_QMARK_(db,block);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_id,scoped_block_id);
} else {
return and__5041__auto__;
}
})())?frontend.db.model.get_by_parent__AMPERSAND__left(db,block_parent_id,block_id):(function (){var or__5043__auto__ = frontend.db.model.get_by_parent__AMPERSAND__left(db,block_id,block_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_by_parent__AMPERSAND__left(db,block_parent_id,block_id);
}
})());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_next_outdented_block(db,block_id);
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = scoped_block_id;
if(cljs.core.truth_(and__5041__auto__)){
return next_block;
} else {
return and__5041__auto__;
}
})())){
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(next_block))));
if(cljs.core.contains_QMARK_(parents,scoped_block_id)){
return next_block;
} else {
return null;
}
} else {
return next_block;
}
}));

(frontend.db.model.get_next_open_block.cljs$lang$maxFixedArity = 3);

/**
 * Result should be sorted.
 */
frontend.db.model.get_paginated_blocks_no_cache = (function frontend$db$model$get_paginated_blocks_no_cache(db,start_id,p__69699){
var map__69700 = p__69699;
var map__69700__$1 = cljs.core.__destructure_map(map__69700);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69700__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var include_start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69700__$1,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824));
var scoped_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69700__$1,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117));
var end_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69700__$1,new cljs.core.Keyword(null,"end-id","end-id",2084513705));
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,start_id);
if(cljs.core.truth_(temp__5804__auto__)){
var start = temp__5804__auto__;
var scoped_block_parents = (cljs.core.truth_(scoped_block_id)?(function (){var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,scoped_block_id);
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
})():null);
var result = (function (){var block = start;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__5041__auto__ = limit;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(result) >= limit);
} else {
return and__5041__auto__;
}
})())){
return result;
} else {
var next_block = frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3(db,block,scoped_block_id);
if(cljs.core.truth_(next_block)){
if(((cljs.core.seq(scoped_block_parents)) && (cljs.core.contains_QMARK_(scoped_block_parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(next_block)))))){
return result;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = end_id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(next_block));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next_block);
} else {
var G__69893 = next_block;
var G__69894 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next_block);
block = G__69893;
result = G__69894;
continue;

}
}
} else {
return result;
}
}
break;
}
})();
if(cljs.core.truth_(include_start_QMARK_)){
return cljs.core.cons(start,result);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Notice: if `not-collapsed?` is true, will skip searching for any collapsed block.
 */
frontend.db.model.get_block_last_direct_child = (function frontend$db$model$get_block_last_direct_child(var_args){
var G__69702 = arguments.length;
switch (G__69702) {
case 2:
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2 = (function (db,db_id){
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,db_id,true);
}));

(frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3 = (function (db,db_id,not_collapsed_QMARK_){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,db_id);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if((cljs.core.truth_(not_collapsed_QMARK_)?cljs.core.not(frontend.db.model.collapsed_and_has_children_QMARK_(db,block)):true)){
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
var all_left = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","left","block/left",-443712566)),children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id], null)));
var all_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),children));
return cljs.core.first(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_ids,all_left));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_last_direct_child.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_block_last_child = (function frontend$db$model$get_block_last_child(db,db_id){
var last_child = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2(db,db_id);
var prev = last_child;
var last_child__$1 = last_child;
while(true){
if(cljs.core.truth_(last_child__$1)){
var G__69896 = last_child__$1;
var G__69897 = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2(db,last_child__$1);
prev = G__69896;
last_child__$1 = G__69897;
continue;
} else {
return prev;
}
break;
}
});
frontend.db.model.get_prev_open_block = (function frontend$db$model$get_prev_open_block(db,id){
var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,id);
var left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block);
var left_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)))){
return left_id;
} else {
if(cljs.core.truth_(frontend.util.collapsed_QMARK_(left))){
return left_id;
} else {
var or__5043__auto__ = frontend.db.model.get_block_last_child(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return left_id;
}
}
}
});
frontend.db.model.recursive_child_QMARK_ = (function frontend$db$model$recursive_child_QMARK_(repo,child_id,parent_id){
var _STAR_last_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var node = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,child_id);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_last_node),node)){
return null;
} else {
cljs.core.reset_BANG_(_STAR_last_node,node);

if(cljs.core.truth_(node)){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),parent_id)){
return true;
} else {
var G__69898 = parent;
node = G__69898;
continue;
}
} else {
return false;
}
}
break;
}
});
frontend.db.model.get_prev_sibling = (function frontend$db$model$get_prev_sibling(db,id){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,id);
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
var left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(e)))){
return left;
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_right_sibling = (function frontend$db$model$get_right_sibling(db,db_id){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,db_id);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return frontend.db.model.get_by_parent__AMPERSAND__left(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),db_id);
} else {
return null;
}
});
/**
 * The child block could be collapsed.
 */
frontend.db.model.last_child_block_QMARK_ = (function frontend$db$model$last_child_block_QMARK_(db,parent_id,child_id){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,child_id);
if(cljs.core.truth_(temp__5804__auto__)){
var child = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,child_id)){
return true;
} else {
if(cljs.core.truth_(frontend.db.model.get_right_sibling(db,child_id))){
return false;
} else {
var G__69703 = db;
var G__69704 = parent_id;
var G__69705 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(child));
return (frontend.db.model.last_child_block_QMARK_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.model.last_child_block_QMARK_.cljs$core$IFn$_invoke$arity$3(G__69703,G__69704,G__69705) : frontend.db.model.last_child_block_QMARK_.call(null,G__69703,G__69704,G__69705));

}
}
} else {
return null;
}
});
frontend.db.model.consecutive_block_QMARK_ = (function frontend$db$model$consecutive_block_QMARK_(block_1,block_2){
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var aux_fn = (function (block_1__$1,block_2__$1){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_1__$1),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_2__$1));
if(and__5041__auto__){
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block_2__$1)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_1__$1));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var temp__5804__auto__ = frontend.db.model.get_prev_sibling(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_2__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var prev_sibling = temp__5804__auto__;
return frontend.db.model.last_child_block_QMARK_(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(prev_sibling),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_1__$1));
} else {
return null;
}
}
} else {
return and__5041__auto__;
}
});
var or__5043__auto__ = aux_fn(block_1,block_2);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return aux_fn(block_2,block_1);
}
});
frontend.db.model.get_non_consecutive_blocks = (function frontend$db$model$get_non_consecutive_blocks(blocks){
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_block){
if(((i + (1)) < cljs.core.count(blocks))){
if(cljs.core.truth_(frontend.db.model.consecutive_block_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(i + (1)))))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i);
}
} else {
return null;
}
}),blocks));
});
frontend.db.model.get_start_id_for_pagination_query = (function frontend$db$model$get_start_id_for_pagination_query(repo_url,current_db,p__69707,result,outliner_op,page_id,block_id,tx_block_ids){
var map__69708 = p__69707;
var map__69708__$1 = cljs.core.__destructure_map(map__69708);
var tx_report = map__69708__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69708__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69708__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var db_before__$1 = (function (){var or__5043__auto__ = db_before;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_db;
}
})();
var cached_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.deref(result));
var cached_ids_set = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cached_ids,page_id));
var first_changed_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)))?(cljs.core.truth_(frontend.state.logical_outdenting_QMARK_())?cljs.core.first(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999).cljs$core$IFn$_invoke$arity$1(tx_meta)):cljs.core.last(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999).cljs$core$IFn$_invoke$arity$1(tx_meta))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)))?(function (){var map__69709 = tx_meta;
var map__69709__$1 = cljs.core.__destructure_map(map__69709);
var move_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69709__$1,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69709__$1,new cljs.core.Keyword(null,"target","target",253001721));
var from_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69709__$1,new cljs.core.Keyword(null,"from-page","from-page",75165656));
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69709__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,target)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = from_page;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = to_page;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_page,to_page);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,from_page)){
return cljs.core.first(move_blocks);
} else {
return target;
}
} else {
var match_ids = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(move_blocks,target));
var G__69713 = cached_ids;
var vec__69714 = G__69713;
var seq__69715 = cljs.core.seq(vec__69714);
var first__69716 = cljs.core.first(seq__69715);
var seq__69715__$1 = cljs.core.next(seq__69715);
var id = first__69716;
var others = seq__69715__$1;
var G__69713__$1 = G__69713;
while(true){
var vec__69720 = G__69713__$1;
var seq__69721 = cljs.core.seq(vec__69720);
var first__69722 = cljs.core.first(seq__69721);
var seq__69721__$1 = cljs.core.next(seq__69721);
var id__$1 = first__69722;
var others__$1 = seq__69721__$1;
if(cljs.core.truth_(id__$1)){
if(cljs.core.contains_QMARK_(match_ids,id__$1)){
return id__$1;
} else {
if(cljs.core.seq(others__$1)){
var G__69899 = others__$1;
G__69713__$1 = G__69899;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}

}
}
})():(function (){var insert_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),outliner_op);
return cljs.core.some((function (p1__69706_SHARP_){
if(cljs.core.truth_((function (){var and__5041__auto__ = ((((insert_QMARK_) && ((!(cljs.core.contains_QMARK_(cached_ids_set,p1__69706_SHARP_)))))) || (true));
if(and__5041__auto__){
return frontend.db.model.recursive_child_QMARK_(repo_url,p1__69706_SHARP_,block_id);
} else {
return and__5041__auto__;
}
})())){
return p1__69706_SHARP_;
} else {
return null;
}
}),tx_block_ids);
})()
));
if(cljs.core.truth_(first_changed_id)){
var or__5043__auto__ = frontend.db.model.get_prev_open_block(db_before__$1,first_changed_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_prev_open_block(current_db,first_changed_id);
}
} else {
return null;
}
});
/**
 * Notice: tx-report could be nil.
 */
frontend.db.model.build_paginated_blocks_from_cache = (function frontend$db$model$build_paginated_blocks_from_cache(repo_url,tx_report,result,outliner_op,page_id,block_id,tx_block_ids,scoped_block_id){
var map__69723 = tx_report;
var map__69723__$1 = cljs.core.__destructure_map(map__69723);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69723__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var current_db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"undo?","undo?",85877626).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"redo?","redo?",-1798545479).cljs$core$IFn$_invoke$arity$1(tx_meta);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(result);
} else {
return and__5041__auto__;
}
})())){
var blocks_range = new cljs.core.Keyword(null,"pagination-blocks-range","pagination-blocks-range",1937905534).cljs$core$IFn$_invoke$arity$1(tx_meta);
var vec__69724 = new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(blocks_range);
var start_block_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69724,(0),null);
var end_block_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69724,(1),null);
return frontend.db.model.get_paginated_blocks_no_cache(current_db,start_block_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-id","end-id",2084513705),end_block_id,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),true,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),outliner_op)) && ((cljs.core.count(cljs.core.deref(result)) <= frontend.db.model.initial_blocks_length)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-block","save-block",591532560),outliner_op)){
return cljs.core.deref(result);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367),null], null), null),outliner_op)){
var temp__5804__auto__ = frontend.db.model.get_start_id_for_pagination_query(repo_url,current_db,tx_report,result,outliner_op,page_id,block_id,tx_block_ids);
if(cljs.core.truth_(temp__5804__auto__)){
var start_id = temp__5804__auto__;
var start_page_QMARK_ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(start_id));
if(cljs.core.truth_(start_page_QMARK_)){
return null;
} else {
var previous_blocks = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.deref(result));
var limit = ((function (){var x__5128__auto__ = (frontend.db.model.initial_blocks_length - cljs.core.count(previous_blocks));
var y__5129__auto__ = cljs.core.count(tx_block_ids);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})() + (25));
var more = frontend.db.model.get_paginated_blocks_no_cache(current_db,start_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),true,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(previous_blocks,more);
}
} else {
return null;
}
} else {
return null;

}
}
}
}
});
/**
 * Get paginated blocks for a page or a specific block.
 * `scoped-block-id`: if specified, returns its children only.
 */
frontend.db.model.get_paginated_blocks = (function frontend$db$model$get_paginated_blocks(var_args){
var G__69729 = arguments.length;
switch (G__69729) {
case 2:
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,block_id){
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,block_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,block_id,p__69730){
var map__69731 = p__69730;
var map__69731__$1 = cljs.core.__destructure_map(map__69731);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69731__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null));
var start_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69731__$1,new cljs.core.Keyword(null,"start-block","start-block",885980136));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69731__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),frontend.db.model.initial_blocks_length);
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69731__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),true);
var scoped_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69731__$1,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),null);
if(cljs.core.truth_(block_id)){
if(cljs.core.integer_QMARK_(block_id)){
} else {
throw (new Error(["Assert failed: ",["wrong block-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''),"\n","(integer? block-id)"].join('')));
}

var entity = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,block_id);
var page_QMARK_ = (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity) == null)));
var page_entity = ((page_QMARK_)?entity:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(entity));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity);
var bare_page_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),page_id,new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page_entity)], null);
var query_key = ((page_QMARK_)?new cljs.core.Keyword("frontend.db.react","page-blocks","frontend.db.react/page-blocks",1515328263):new cljs.core.Keyword("frontend.db.react","block-and-children","frontend.db.react/block-and-children",-1481509175));
var G__69732 = frontend.db.react.q(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_key,block_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),use_cache_QMARK_,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (db,tx_report,result){
var tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var refs = (function (){var G__69736 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__69727_SHARP_));
}),tx_data);
if((G__69736 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),G__69736);
}
})();
var tx_block_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),tx_data),refs));
var vec__69733 = (cljs.core.truth_((function (){var and__5041__auto__ = tx_report;
if(cljs.core.truth_(and__5041__auto__)){
return result;
} else {
return and__5041__auto__;
}
})())?(function (){var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,tx_block_ids));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks),cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.deref(result)),cljs.core.deref(result))], null);
})():null);
var tx_id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69733,(0),null);
var cached_id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69733,(1),null);
var limit__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = result;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(result);
} else {
return and__5041__auto__;
}
})())?(function (){var x__5128__auto__ = (cljs.core.count(cljs.core.deref(result)) + (5));
var y__5129__auto__ = limit;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})():limit);
var outliner_op = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450)], null));
var blocks = frontend.db.model.build_paginated_blocks_from_cache(repo_url,tx_report,result,outliner_op,page_id,block_id,tx_block_ids,scoped_block_id);
var blocks__$1 = (function (){var or__5043__auto__ = blocks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_paginated_blocks_no_cache(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url),block_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit__$1,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),(!(page_QMARK_)),new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
}
})();
var block_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1);
var blocks__$2 = ((((cljs.core.seq(tx_id__GT_block)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null], null), null),outliner_op))))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_id__GT_block,id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cached_id__GT_block,id);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,id);
}
}
}),block_eids):frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,block_eids));
var blocks__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(b) == null);
}),blocks__$2);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","page","block/page",822314108),bare_page_map);
}),blocks__$3);
})], null),null);
if((G__69732 == null)){
return null;
} else {
return frontend.util.react(G__69732);
}
} else {
return null;
}
}));

(frontend.db.model.get_paginated_blocks.cljs$lang$maxFixedArity = 3);

/**
 * Return blocks of the designated page, without using cache.
 * page - name / title of the page
 */
frontend.db.model.get_page_blocks_no_cache = (function frontend$db$model$get_page_blocks_no_cache(var_args){
var G__69738 = arguments.length;
switch (G__69738) {
case 1:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,null);
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,page){
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(repo_url,page,null);
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,page,p__69739){
var map__69740 = p__69739;
var map__69740__$1 = cljs.core.__destructure_map(map__69740);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69740__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
if(cljs.core.truth_(page)){
var page__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null)));
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(page_id)){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
var block_eids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms);
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,block_eids);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_page_blocks_count = (function frontend$db$model$get_page_blocks_count(repo,page_id){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id));
} else {
return null;
}
});
/**
 * Whether a page exists.
 */
frontend.db.model.page_exists_QMARK_ = (function frontend$db$model$page_exists_QMARK_(page_name){
if(cljs.core.truth_(page_name)){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
} else {
return null;
}
});
/**
 * Whether a page is empty. Does it has a non-page block?
 *   `page-id` could be either a string or a db/id.
 */
frontend.db.model.page_empty_QMARK_ = (function frontend$db$model$page_empty_QMARK_(repo,page_id){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
try{var page_id__$1 = ((typeof page_id === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page_id)], null):page_id);
var page = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,page_id__$1);
return (new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page) == null);
}catch (e69741){var e = e69741;
if(clojure.string.includes_QMARK_(cljs.core.ex_message(e),"Lookup ref attribute should be marked as :db/unique: [:block/name")){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"It seems that the current graph is outdated, please re-index it.",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
return null;
}
}} else {
return null;
}
});
frontend.db.model.page_empty_or_dummy_QMARK_ = (function frontend$db$model$page_empty_or_dummy_QMARK_(repo,page_id){
var or__5043__auto__ = frontend.db.model.page_empty_QMARK_(repo,page_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(datoms),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)))))));
} else {
return null;
}
}
});
frontend.db.model.parents_collapsed_QMARK_ = (function frontend$db$model$parents_collapsed_QMARK_(repo,block_uuid){
var temp__5804__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_block_parents_v2(repo,block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return cljs.core.some(frontend.util.collapsed_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x)], null);
}),block));
} else {
return null;
}
});
frontend.db.model.get_block_page = (function frontend$db$model$get_block_page(repo,block_uuid){
if(cljs.core.uuid_QMARK_(block_uuid)){
} else {
throw (new Error(["Assert failed: ",["get-block-page requires block-uuid to be of type uuid but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)].join(''),"\n","(uuid? block-uuid)"].join('')));
}

var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return null;
}
});
frontend.db.model.get_pages_by_name_partition = (function frontend$db$model$get_pages_by_name_partition(repo,partition){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
if(clojure.string.blank_QMARK_(partition)){
return null;
} else {
var partition__$1 = (function (){var G__69742 = clojure.string.trim(partition);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__69742) : frontend.util.page_name_sanity_lc.call(null,G__69742));
})();
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
var page = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
return clojure.string.includes_QMARK_(page,partition__$1);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","name","block/name",1619760316))));
if(cljs.core.seq(ids)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),ids);
} else {
return null;
}
}
} else {
return null;
}
});
frontend.db.model.get_block_children_ids_in_db = (function frontend$db$model$get_block_children_ids_in_db(db,block_uuid){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var eid = temp__5804__auto__;
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var steps_69902 = (100);
var eids_to_expand_69903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null);
while(true){
if(cljs.core.seq(eids_to_expand_69903)){
var eids_to_expand_STAR__69904 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (steps_69902,eids_to_expand_69903,seen,eid,temp__5804__auto__){
return (function (eid__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064),eid__$1));
});})(steps_69902,eids_to_expand_69903,seen,eid,temp__5804__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eids_to_expand_69903], 0));
var uuids_to_add_69905 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (steps_69902,eids_to_expand_69903,eids_to_expand_STAR__69904,seen,eid,temp__5804__auto__){
return (function (p1__69743_SHARP_){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(db,p1__69743_SHARP_));
});})(steps_69902,eids_to_expand_69903,eids_to_expand_STAR__69904,seen,eid,temp__5804__auto__))
,eids_to_expand_STAR__69904));
if((((steps_69902 === (0))) && (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.deref(seen)),cljs.core.set(uuids_to_add_69905)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("bad outliner data, need to re-index to fix",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.deref(seen),new cljs.core.Keyword(null,"eids-to-expand","eids-to-expand",-1188782731),eids_to_expand_69903], null));
} else {
}

seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.conj)(seen.cljs$core$IDeref$_deref$arity$1(null),uuids_to_add_69905));

var G__69906 = (((steps_69902 === (0)))?(100):(steps_69902 - (1)));
var G__69907 = eids_to_expand_STAR__69904;
steps_69902 = G__69906;
eids_to_expand_69903 = G__69907;
continue;
} else {
}
break;
}

return cljs.core.deref(seen);
} else {
return null;
}
});
frontend.db.model.get_block_children_ids = (function frontend$db$model$get_block_children_ids(repo,block_uuid){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return frontend.db.model.get_block_children_ids_in_db(db,block_uuid);
} else {
return null;
}
});
/**
 * Doesn't include nested children.
 */
frontend.db.model.get_block_immediate_children = (function frontend$db$model$get_block_immediate_children(repo,block_uuid){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var parent = temp__5804__auto____$1;
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(parent),parent);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Including nested children.
 */
frontend.db.model.get_block_children = (function frontend$db$model$get_block_children(repo,block_uuid){
var ids = frontend.db.model.get_block_children_ids(repo,block_uuid);
if(cljs.core.seq(ids)){
var ids_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids);
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ids_SINGLEQUOTE_);
} else {
return null;
}
});
frontend.db.model.flatten_tree = (function frontend$db$model$flatten_tree(blocks_tree){
var temp__5802__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(blocks_tree);
if(cljs.core.truth_(temp__5802__auto__)){
var children = temp__5802__auto__;
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(blocks_tree,new cljs.core.Keyword("block","_parent","block/_parent",-639389670)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.db.model.flatten_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks_tree], null);
}
});
frontend.db.model.get_block_and_children = (function frontend$db$model$get_block_and_children(repo,block_uuid){
var G__69744 = (function (){var G__69745 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__69746 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69747 = block_uuid;
var G__69748 = frontend.db.model.block_attrs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__69745,G__69746,G__69747,G__69748) : datascript.core.q.call(null,G__69745,G__69746,G__69747,G__69748));
})();
var G__69744__$1 = (((G__69744 == null))?null:cljs.core.first(G__69744));
if((G__69744__$1 == null)){
return null;
} else {
return frontend.db.model.flatten_tree(G__69744__$1);
}
});
frontend.db.model.get_file_page = (function frontend$db$model$get_file_page(var_args){
var G__69750 = arguments.length;
switch (G__69750) {
case 1:
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$1 = (function (file_path){
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2(file_path,true);
}));

(frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2 = (function (file_path,original_name_QMARK_){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto____$1)){
var db = temp__5804__auto____$1;
var G__69751 = (function (){var G__69752 = (cljs.core.truth_(original_name_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null));
var G__69753 = db;
var G__69754 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69752,G__69753,G__69754) : datascript.core.q.call(null,G__69752,G__69753,G__69754));
})();
var G__69751__$1 = (((G__69751 == null))?null:frontend.db.utils.seq_flatten(G__69751));
if((G__69751__$1 == null)){
return null;
} else {
return cljs.core.first(G__69751__$1);
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_file_page.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_file = (function frontend$db$model$get_page_file(var_args){
var G__69756 = arguments.length;
switch (G__69756) {
case 1:
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page_name);
}));

(frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2 = (function (repo,page_name){
var G__69757 = (function (){var or__5043__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),page_name], null));
}
})();
if((G__69757 == null)){
return null;
} else {
return new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(G__69757);
}
}));

(frontend.db.model.get_page_file.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_block_file_path = (function frontend$db$model$get_block_file_path(block){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5804__auto__)){
var page_id = temp__5804__auto__;
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page_id)));
} else {
return null;
}
});
frontend.db.model.get_file_page_id = (function frontend$db$model$get_file_page_id(file_path){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto____$1)){
var db = temp__5804__auto____$1;
var G__69758 = (function (){var G__69759 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null)], null);
var G__69760 = db;
var G__69761 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69759,G__69760,G__69761) : datascript.core.q.call(null,G__69759,G__69760,G__69761));
})();
var G__69758__$1 = (((G__69758 == null))?null:frontend.db.utils.seq_flatten(G__69758));
if((G__69758__$1 == null)){
return null;
} else {
return cljs.core.first(G__69758__$1);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_page = (function frontend$db$model$get_page(page_name){
var temp__5802__auto__ = cljs.core.parse_uuid(page_name);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null));
} else {
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
}
});
/**
 * Given any readable page-name, return the exact page-name in db. If page
 * doesn't exists yet, will return the passed `page-name`. Accepts both
 * sanitized or unsanitized names.
 * alias?: if true, alias is allowed to be returned; otherwise, it would be deref.
 */
frontend.db.model.get_redirect_page_name = (function frontend$db$model$get_redirect_page_name(var_args){
var G__69763 = arguments.length;
switch (G__69763) {
case 1:
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name,false);
}));

(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2 = (function (page_name,alias_QMARK_){
if(cljs.core.truth_(page_name)){
var page_name_SINGLEQUOTE_ = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var page_entity = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_SINGLEQUOTE_], null));
if(cljs.core.truth_(alias_QMARK_)){
return page_name_SINGLEQUOTE_;
} else {
if((page_entity == null)){
return page_name;
} else {
if(cljs.core.truth_(frontend.db.model.page_empty_or_dummy_QMARK_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity)))){
var source_page = frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),page_name_SINGLEQUOTE_);
var or__5043__auto__ = (cljs.core.truth_(source_page)?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(source_page):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name_SINGLEQUOTE_;
}
} else {
return page_name_SINGLEQUOTE_;

}
}
}
} else {
return null;
}
}));

(frontend.db.model.get_redirect_page_name.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_original_name = (function frontend$db$model$get_page_original_name(page_name){
if(typeof page_name === 'string'){
var page = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
} else {
return null;
}
});
frontend.db.model.get_journals_length = (function frontend$db$model$get_journals_length(){
var today = logseq.graph_parser.util.db.date__GT_int((new Date()));
var G__69764 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null);
var G__69765 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
var G__69766 = today;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69764,G__69765,G__69766) : datascript.core.q.call(null,G__69764,G__69765,G__69766));
});
frontend.db.model.get_latest_journals = (function frontend$db$model$get_latest_journals(var_args){
var G__69768 = arguments.length;
switch (G__69768) {
case 1:
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$1 = (function (n){
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),n);
}));

(frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,n){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url))){
var date = (new Date());
var _ = date.setDate((date.getDate() - (n - (1))));
var today = logseq.graph_parser.util.db.date__GT_int((new Date()));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","journals","frontend.db.react/journals",-1864001064)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([today], 0))))));
} else {
return null;
}
}));

(frontend.db.model.get_latest_journals.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_referenced_pages = (function frontend$db$model$get_page_referenced_pages(repo,page){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var page_name = frontend.util.safe_page_name_sanity_lc(page);
var pages = frontend.db.model.page_alias_set(repo,page);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)));
var ref_pages = (function (){var G__69769 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"untuple","untuple",-606149900,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null);
var G__69770 = db;
var G__69771 = pages;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69769,G__69770,G__69771) : datascript.core.q.call(null,G__69769,G__69770,G__69771));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.db.model.get_page_alias(repo,page__$1)], null);
}),ref_pages);
} else {
return null;
}
});
frontend.db.model.ns_char = "/";
frontend.db.model.ns_re = /\//;
/**
 * Return list of parents namespace
 */
frontend.db.model.get_parents_namespace_list = (function frontend$db$model$get_parents_namespace_list(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69912 = arguments.length;
var i__5767__auto___69913 = (0);
while(true){
if((i__5767__auto___69913 < len__5766__auto___69912)){
args__5772__auto__.push((arguments[i__5767__auto___69913]));

var G__69914 = (i__5767__auto___69913 + (1));
i__5767__auto___69913 = G__69914;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.db.model.get_parents_namespace_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.db.model.get_parents_namespace_list.cljs$core$IFn$_invoke$arity$variadic = (function (page_namespace,nested_found){
while(true){
if(logseq.graph_parser.text.namespace_page_QMARK_(page_namespace)){
var pre_nested_vec = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(clojure.string.split.cljs$core$IFn$_invoke$arity$2(page_namespace,frontend.db.model.ns_re));
var my_nested_found = (((nested_found == null))?cljs.core.PersistentVector.EMPTY:nested_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre_nested_vec),(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(my_nested_found,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pre_nested_vec,(0)));
} else {
var pre_nested_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(frontend.db.model.ns_char,pre_nested_vec);
var G__69915 = pre_nested_str;
var G__69916 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(my_nested_found,pre_nested_str);
page_namespace = G__69915;
nested_found = G__69916;
continue;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
break;
}
}));

(frontend.db.model.get_parents_namespace_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.model.get_parents_namespace_list.cljs$lang$applyTo = (function (seq69772){
var G__69773 = cljs.core.first(seq69772);
var seq69772__$1 = cljs.core.next(seq69772);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69773,seq69772__$1);
}));

/**
 * Return unnecessary namespace from a list of page's name
 */
frontend.db.model.get_unnecessary_namespaces_name = (function frontend$db$model$get_unnecessary_namespaces_name(pages_list){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.db.model.get_parents_namespace_list,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages_list)], 0)));
});
/**
 * Remove relations between pages and their nested namespace
 */
frontend.db.model.remove_nested_namespaces_link = (function frontend$db$model$remove_nested_namespaces_link(pages_relations){
var pages_relations_to_return = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5520__auto__ = (function frontend$db$model$remove_nested_namespaces_link_$_iter__69774(s__69775){
return (new cljs.core.LazySeq(null,(function (){
var s__69775__$1 = s__69775;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__69775__$1);
if(temp__5804__auto__){
var s__69775__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69775__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__69775__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__69777 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__69776 = (0);
while(true){
if((i__69776 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__69776);
var list_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(1));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(0));
var namespaces_to_remove = frontend.db.model.get_unnecessary_namespaces_name(list_to);
var list_to_without_nested_ns = cljs.core.filterv(((function (i__69776,list_to,page,namespaces_to_remove,item,c__5518__auto__,size__5519__auto__,b__69777,s__69775__$2,temp__5804__auto__){
return (function (elem){
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([elem]),namespaces_to_remove));
});})(i__69776,list_to,page,namespaces_to_remove,item,c__5518__auto__,size__5519__auto__,b__69777,s__69775__$2,temp__5804__auto__))
,list_to);
var node_links = (function (){var iter__5520__auto__ = ((function (i__69776,list_to,page,namespaces_to_remove,list_to_without_nested_ns,item,c__5518__auto__,size__5519__auto__,b__69777,s__69775__$2,temp__5804__auto__){
return (function frontend$db$model$remove_nested_namespaces_link_$_iter__69774_$_iter__69778(s__69779){
return (new cljs.core.LazySeq(null,((function (i__69776,list_to,page,namespaces_to_remove,list_to_without_nested_ns,item,c__5518__auto__,size__5519__auto__,b__69777,s__69775__$2,temp__5804__auto__){
return (function (){
var s__69779__$1 = s__69779;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__69779__$1);
if(temp__5804__auto____$1){
var s__69779__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69779__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__69779__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__69781 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__69780 = (0);
while(true){
if((i__69780 < size__5519__auto____$1)){
var item_ok = cljs.core._nth(c__5518__auto____$1,i__69780);
cljs.core.chunk_append(b__69781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,item_ok], null));

var G__69917 = (i__69780 + (1));
i__69780 = G__69917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69781),frontend$db$model$remove_nested_namespaces_link_$_iter__69774_$_iter__69778(cljs.core.chunk_rest(s__69779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69781),null);
}
} else {
var item_ok = cljs.core.first(s__69779__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,item_ok], null),frontend$db$model$remove_nested_namespaces_link_$_iter__69774_$_iter__69778(cljs.core.rest(s__69779__$2)));
}
} else {
return null;
}
break;
}
});})(i__69776,list_to,page,namespaces_to_remove,list_to_without_nested_ns,item,c__5518__auto__,size__5519__auto__,b__69777,s__69775__$2,temp__5804__auto__))
,null,null));
});})(i__69776,list_to,page,namespaces_to_remove,list_to_without_nested_ns,item,c__5518__auto__,size__5519__auto__,b__69777,s__69775__$2,temp__5804__auto__))
;
return iter__5520__auto__(list_to_without_nested_ns);
})();
cljs.core.chunk_append(b__69777,cljs.core.seq(node_links));

var G__69918 = (i__69776 + (1));
i__69776 = G__69918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69777),frontend$db$model$remove_nested_namespaces_link_$_iter__69774(cljs.core.chunk_rest(s__69775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69777),null);
}
} else {
var item = cljs.core.first(s__69775__$2);
var list_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(1));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(0));
var namespaces_to_remove = frontend.db.model.get_unnecessary_namespaces_name(list_to);
var list_to_without_nested_ns = cljs.core.filterv(((function (list_to,page,namespaces_to_remove,item,s__69775__$2,temp__5804__auto__){
return (function (elem){
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([elem]),namespaces_to_remove));
});})(list_to,page,namespaces_to_remove,item,s__69775__$2,temp__5804__auto__))
,list_to);
var node_links = (function (){var iter__5520__auto__ = ((function (list_to,page,namespaces_to_remove,list_to_without_nested_ns,item,s__69775__$2,temp__5804__auto__){
return (function frontend$db$model$remove_nested_namespaces_link_$_iter__69774_$_iter__69782(s__69783){
return (new cljs.core.LazySeq(null,(function (){
var s__69783__$1 = s__69783;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__69783__$1);
if(temp__5804__auto____$1){
var s__69783__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69783__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__69783__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__69785 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__69784 = (0);
while(true){
if((i__69784 < size__5519__auto__)){
var item_ok = cljs.core._nth(c__5518__auto__,i__69784);
cljs.core.chunk_append(b__69785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,item_ok], null));

var G__69919 = (i__69784 + (1));
i__69784 = G__69919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69785),frontend$db$model$remove_nested_namespaces_link_$_iter__69774_$_iter__69782(cljs.core.chunk_rest(s__69783__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69785),null);
}
} else {
var item_ok = cljs.core.first(s__69783__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,item_ok], null),frontend$db$model$remove_nested_namespaces_link_$_iter__69774_$_iter__69782(cljs.core.rest(s__69783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(list_to,page,namespaces_to_remove,list_to_without_nested_ns,item,s__69775__$2,temp__5804__auto__))
;
return iter__5520__auto__(list_to_without_nested_ns);
})();
return cljs.core.cons(cljs.core.seq(node_links),frontend$db$model$remove_nested_namespaces_link_$_iter__69774(cljs.core.rest(s__69775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__((function (){var iter__5520__auto____$1 = (function frontend$db$model$remove_nested_namespaces_link_$_iter__69786(s__69787){
return (new cljs.core.LazySeq(null,(function (){
var s__69787__$1 = s__69787;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__69787__$1);
if(temp__5804__auto__){
var s__69787__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69787__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__69787__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__69789 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__69788 = (0);
while(true){
if((i__69788 < size__5519__auto__)){
var a_link_from = cljs.core._nth(c__5518__auto__,i__69788);
cljs.core.chunk_append(b__69789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_link_from,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__69788,a_link_from,c__5518__auto__,size__5519__auto__,b__69789,s__69787__$2,temp__5804__auto__,iter__5520__auto__){
return (function (a_rel){
return cljs.core.second(a_rel);
});})(i__69788,a_link_from,c__5518__auto__,size__5519__auto__,b__69789,s__69787__$2,temp__5804__auto__,iter__5520__auto__))
,cljs.core.filterv(((function (i__69788,a_link_from,c__5518__auto__,size__5519__auto__,b__69789,s__69787__$2,temp__5804__auto__,iter__5520__auto__){
return (function (link_target){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_link_from,cljs.core.first(link_target));
});})(i__69788,a_link_from,c__5518__auto__,size__5519__auto__,b__69789,s__69787__$2,temp__5804__auto__,iter__5520__auto__))
,pages_relations))], null));

var G__69920 = (i__69788 + (1));
i__69788 = G__69920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69789),frontend$db$model$remove_nested_namespaces_link_$_iter__69786(cljs.core.chunk_rest(s__69787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69789),null);
}
} else {
var a_link_from = cljs.core.first(s__69787__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_link_from,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (a_link_from,s__69787__$2,temp__5804__auto__,iter__5520__auto__){
return (function (a_rel){
return cljs.core.second(a_rel);
});})(a_link_from,s__69787__$2,temp__5804__auto__,iter__5520__auto__))
,cljs.core.filterv(((function (a_link_from,s__69787__$2,temp__5804__auto__,iter__5520__auto__){
return (function (link_target){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_link_from,cljs.core.first(link_target));
});})(a_link_from,s__69787__$2,temp__5804__auto__,iter__5520__auto__))
,pages_relations))], null),frontend$db$model$remove_nested_namespaces_link_$_iter__69786(cljs.core.rest(s__69787__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto____$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (a_rel){
return cljs.core.first(a_rel);
}),pages_relations));
})());
})()], 0)));
return pages_relations_to_return;
});
frontend.db.model.get_pages_relation = (function frontend$db$model$get_pages_relation(repo,with_journal_QMARK_){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var q = (cljs.core.truth_(with_journal_QMARK_)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null));
return frontend.db.model.remove_nested_namespaces_link(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69790){
var vec__69791 = p__69790;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69791,(0),null);
var ref_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,ref_page_name], null);
}),(datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(q,db) : datascript.core.q.call(null,q,db))));
} else {
return null;
}
});
frontend.db.model.get_pages_that_mentioned_page = (function frontend$db$model$get_pages_that_mentioned_page(repo,page,include_journals){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var query_base = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?mentioned-page-name","?mentioned-page-name",-1771964146,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?mentioned-page-name","?mentioned-page-name",-1771964146,null)], null)], null);
var query = (cljs.core.truth_(include_journals)?query_base:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(query_base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null)));
var mentioned_pages = frontend.db.utils.seq_flatten(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-pages","frontend.db.react/page<-pages",-577219055),page_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages,page], 0))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.db.model.get_page_alias(repo,page__$1)], null);
}),mentioned_pages);
} else {
return null;
}
});
frontend.db.model.get_page_referenced_blocks_full = (function frontend$db$model$get_page_referenced_blocks_full(var_args){
var G__69795 = arguments.length;
switch (G__69795) {
case 1:
return frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,null);
}));

(frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$2 = (function (page,options){
return frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,options);
}));

(frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$3 = (function (repo,page,options){
if(cljs.core.truth_(repo)){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var aliases = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pages,cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69796){
var vec__69797 = p__69796;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69797,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69797,(1),null);
var k__$1 = ((cljs.core.contains_QMARK_(aliases,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(k)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,blocks], null);
}),frontend.db.utils.group_by_page(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),(function (){var G__69800 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null);
var G__69801 = db;
var G__69802 = pages;
var G__69803 = cljs.core.butlast(frontend.db.model.block_attrs);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__69800,G__69801,G__69802,G__69803) : datascript.core.q.call(null,G__69800,G__69801,G__69802,G__69803));
})())));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_referenced_blocks_full.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_page_referenced_blocks = (function frontend$db$model$get_page_referenced_blocks(var_args){
var G__69805 = arguments.length;
switch (G__69805) {
case 1:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,null);
}));

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2 = (function (page,options){
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,options);
}));

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$3 = (function (repo,page,options){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var aliases = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pages,cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(frontend.util.react(frontend.db.react.q(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","refs","frontend.db.react/refs",-797838103),page_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (){
var entities = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (id){
return new cljs.core.Keyword("block","_path-refs","block/_path-refs",1744643889).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(id));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages], 0));
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(e)], null);
}),entities);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entities","entities",1940967403),entities,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], null);
})], null),null))));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_referenced_blocks.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_date_scheduled_or_deadlines = (function frontend$db$model$get_date_scheduled_or_deadlines(journal_title){
var temp__5804__auto__ = frontend.date.journal_title__GT_int(journal_title);
if(cljs.core.truth_(temp__5804__auto__)){
var date = temp__5804__auto__;
var future_days = frontend.state.get_scheduled_future_days();
var date_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd");
var current_day = cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(date_format,cljs.core.str.cljs$core$IFn$_invoke$arity$1(date));
var future_day = (function (){var G__69806 = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(current_day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(future_days));
var G__69806__$1 = (((G__69806 == null))?null:cljs_time.format.unparse(date_format,G__69806));
if((G__69806__$1 == null)){
return null;
} else {
return cljs.core.parse_long(G__69806__$1);
}
})();
if(cljs.core.truth_(future_day)){
var temp__5804__auto____$1 = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto____$1)){
var repo = temp__5804__auto____$1;
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"scheduled-deadline","scheduled-deadline",915680828),journal_title], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?day","?day",686036275,null),new cljs.core.Symbol(null,"?future","?future",1027205190,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799),false),new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","marker","block/marker",1231576318),"NIL"),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"DONE")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"CANCELED")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"CANCELLED")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?future","?future",1027205190,null))], null),cljs.core.list(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?day","?day",686036275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?day","?day",686036275,null))], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([date,future_day,frontend.db.model.block_attrs], 0)))));
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
frontend.db.model.pattern = (function frontend$db$model$pattern(name){
return cljs.core.re_pattern(["(?i)(^|[^\\[#0-9a-zA-Z]|((^|[^\\[])\\[))",frontend.util.regex_escape(name),"($|[^0-9a-zA-Z])"].join(''));
});
frontend.db.model.get_page_unlinked_references = (function frontend$db$model$get_page_unlinked_references(page){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page__$1 = frontend.util.safe_page_name_sanity_lc(page);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null)));
var alias_names = frontend.db.model.get_page_alias_names(repo,page__$1);
var patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.db.model.pattern,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(alias_names,page__$1));
var filter_fn = (function (datom){
return cljs.core.some((function (p){
return cljs.core.re_find(p,frontend.util.drawer.remove_logbook(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)));
}),patterns);
});
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page-unlinked-refs","frontend.db.react/page-unlinked-refs",2088680220),page_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (db,_tx_report,_result){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","content","block/content",-161885195))));
var result = (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(db,frontend.db.model.block_attrs,ids) : datascript.core.pull_many.call(null,db,frontend.db.model.block_attrs,ids));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),result);
})], null),null))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_block_referenced_blocks = (function frontend$db$model$get_block_referenced_blocks(var_args){
var G__69808 = arguments.length;
switch (G__69808) {
case 1:
return frontend.db.model.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 = (function (block_uuid){
return frontend.db.model.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$2(block_uuid,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.model.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$2 = (function (block_uuid,options){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
var query_result = frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","refs","frontend.db.react/refs",-797838103),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?block","?block",1541466123,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid,frontend.db.model.block_attrs], 0))));
return frontend.db.utils.group_by_page(query_result);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_referenced_blocks.cljs$lang$maxFixedArity = 2);

/**
 * sanitized page-name only
 */
frontend.db.model.journal_page_QMARK_ = (function frontend$db$model$journal_page_QMARK_(page_name){
return new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)));
});
frontend.db.model.get_all_templates = (function frontend$db$model$get_all_templates(){
var pred = (function (_db,properties){
return (!((new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(properties) == null)));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69809){
var vec__69810 = p__69809;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69810,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69810,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"template","template",-702405684)),e], null);
}),(function (){var G__69813 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null)], null);
var G__69814 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__69815 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69813,G__69814,G__69815) : datascript.core.q.call(null,G__69813,G__69814,G__69815));
})()));
});
frontend.db.model.get_all_properties = (function frontend$db$model$get_all_properties(){
var properties = (function (){var G__69816 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__69817 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69816,G__69817) : datascript.core.q.call(null,G__69816,G__69817));
})();
var properties__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.empty_QMARK_(m);
}),properties);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,properties__$1))));
});
/**
 * Given a property value's refs and full text, determines the value to
 *   autocomplete
 */
frontend.db.model.property_value_for_refs_and_text = (function frontend$db$model$property_value_for_refs_and_text(p__69819){
var vec__69820 = p__69819;
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69820,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69820,(1),null);
if((((!(cljs.core.coll_QMARK_(refs)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(refs))))){
return text;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69818_SHARP_){
if(clojure.string.includes_QMARK_(text,logseq.graph_parser.util.page_ref.__GT_page_ref(p1__69818_SHARP_))){
return logseq.graph_parser.util.page_ref.__GT_page_ref(p1__69818_SHARP_);
} else {
if(clojure.string.includes_QMARK_(text,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__69818_SHARP_)].join(''))){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__69818_SHARP_)].join('');
} else {
return p1__69818_SHARP_;

}
}
}),refs);
}
});
frontend.db.model.get_property_values = (function frontend$db$model$get_property_values(property){
var pred = (function (_db,properties,text_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,property),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_properties,property)], null);
});
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.coll_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.db.model.property_value_for_refs_and_text,(function (){var G__69823 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?property-val","?property-val",-1623962467,null),new cljs.core.Symbol(null,"?text-property-val","?text-property-val",-1877071407,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Symbol(null,"?p2","?p2",2122867810,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?p2","?p2",2122867810,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?property-val","?property-val",-1623962467,null),new cljs.core.Symbol(null,"?text-property-val","?text-property-val",-1877071407,null)], null)], null)], null);
var G__69824 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__69825 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69823,G__69824,G__69825) : datascript.core.q.call(null,G__69823,G__69824,G__69825));
})())))))));
});
frontend.db.model.get_template_by_name = (function frontend$db$model$get_template_by_name(name){
if(typeof name === 'string'){
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__69826 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"template","template",-702405684)),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null))], null)], null);
var G__69827 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__69828 = name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69826,G__69827,G__69828) : datascript.core.q.call(null,G__69826,G__69827,G__69828));
})()));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.model !== 'undefined') && (typeof frontend.db.model.blocks_count_cache !== 'undefined')){
} else {
frontend.db.model.blocks_count_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.db.model.blocks_count = (function frontend$db$model$blocks_count(var_args){
var G__69830 = arguments.length;
switch (G__69830) {
case 0:
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1 = (function (cache_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = cache_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(frontend.db.model.blocks_count_cache);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.deref(frontend.db.model.blocks_count_cache);
} else {
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var n = cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)));
cljs.core.reset_BANG_(frontend.db.model.blocks_count_cache,n);

return n;
} else {
return null;
}
}
}));

(frontend.db.model.blocks_count.cljs$lang$maxFixedArity = 1);

/**
 * Get all uuids of blocks with any back link exists.
 */
frontend.db.model.get_all_referenced_blocks_uuid = (function frontend$db$model$get_all_referenced_blocks_uuid(){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
var G__69831 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?refed-uuid","?refed-uuid",417914050,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?refed-b","?refed-b",-875900233,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?refed-uuid","?refed-uuid",417914050,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?referee-b","?referee-b",1661362384,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?refed-b","?refed-b",-875900233,null)], null)], null);
var G__69832 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69831,G__69832) : datascript.core.q.call(null,G__69831,G__69832));
} else {
return null;
}
});
frontend.db.model.get_single_block_contents = (function frontend$db$model$get_single_block_contents(id){
var e = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null));
if(((cljs.core.not(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e))) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(e))))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
});
frontend.db.model.get_all_block_contents = (function frontend$db$model$get_all_block_contents(){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_single_block_contents,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))));
} else {
return null;
}
});
frontend.db.model.get_all_block_avets = (function frontend$db$model$get_all_block_avets(){
var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
} else {
return null;
}
});
frontend.db.model.delete_blocks = (function frontend$db$model$delete_blocks(repo_url,files,_delete_page_QMARK_){
if(cljs.core.seq(files)){
var blocks = frontend.db.model.get_files_blocks(repo_url,files);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),blocks);
} else {
return null;
}
});
frontend.db.model.delete_files = (function frontend$db$model$delete_files(files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)], null);
}),files);
});
frontend.db.model.delete_pages_by_files = (function frontend$db$model$delete_pages_by_files(files){
var pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_file_page,files));
if(cljs.core.seq(pages)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page], null)], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,pages));
} else {
return null;
}
});
frontend.db.model.set_file_content_BANG_ = (function frontend$db$model$set_file_content_BANG_(var_args){
var G__69834 = arguments.length;
switch (G__69834) {
case 3:
return frontend.db.model.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.db.model.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,path,content){
return frontend.db.model.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$4(repo,path,content,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.model.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo,path,content,opts){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var tx_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null)], 0)));
} else {
return null;
}
}));

(frontend.db.model.set_file_content_BANG_.cljs$lang$maxFixedArity = 4);

frontend.db.model.get_pre_block = (function frontend$db$model$get_pre_block(repo,page_id){
return cljs.core.ffirst((function (){var G__69835 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),true], null)], null);
var G__69836 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69837 = page_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69835,G__69836,G__69837) : datascript.core.q.call(null,G__69835,G__69836,G__69837));
})());
});
/**
 * Accepts both sanitized and unsanitized namespaces
 */
frontend.db.model.get_namespace_pages = (function frontend$db$model$get_namespace_pages(repo,namespace){
if(typeof namespace === 'string'){
} else {
throw (new Error("Assert failed: (string? namespace)"));
}

var namespace__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(namespace) : frontend.util.page_name_sanity_lc.call(null,namespace));
var G__69838 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?namespace","?namespace",567450183,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?namespace","?namespace",567450183,null)], null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null);
var G__69839 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69840 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(logseq.db.rules.rules);
var G__69841 = namespace__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__69838,G__69839,G__69840,G__69841) : datascript.core.q.call(null,G__69838,G__69839,G__69840,G__69841));
});
frontend.db.model.tree = (function frontend$db$model$tree(flat_col,root){
var sort_fn = (function (p1__69842_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),p1__69842_SHARP_);
});
var children = cljs.core.group_by(new cljs.core.Keyword("block","namespace","block/namespace",-282500695),flat_col);
var namespace_children = (function frontend$db$model$tree_$_namespace_children(parent_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("namespace","children","namespace/children",-2095628387),sort_fn(frontend$db$model$tree_$_namespace_children(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m)], null))));
}),sort_fn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,parent_id)));
});
return namespace_children(root);
});
/**
 * Unsanitized namespaces
 */
frontend.db.model.get_namespace_hierarchy = (function frontend$db$model$get_namespace_hierarchy(repo,namespace){
var children = frontend.db.model.get_namespace_pages(repo,namespace);
var namespace_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(namespace) : frontend.util.page_name_sanity_lc.call(null,namespace))], null)));
var root = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),namespace_id], null);
var col = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,root);
return frontend.db.model.tree(col,root);
});
frontend.db.model.get_page_namespace = (function frontend$db$model$get_page_namespace(repo,page){
return new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null)));
});
frontend.db.model.get_page_namespace_routes = (function frontend$db$model$get_page_namespace_routes(repo,page){
if(typeof page === 'string'){
} else {
throw (new Error("Assert failed: (string? page)"));
}

var temp__5804__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var db = temp__5804__auto__;
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
var page__$1 = (function (){var G__69843 = clojure.string.trim(page);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__69843) : frontend.util.page_name_sanity_lc.call(null,G__69843));
})();
var page_exist_QMARK_ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null));
var ids = (cljs.core.truth_(page_exist_QMARK_)?cljs.core.List.EMPTY:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom),["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page__$1)].join(''));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","name","block/name",1619760316)))));
if(cljs.core.seq(ids)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null)], null),ids);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Given a page name or a page object, check if it is a whiteboard page
 */
frontend.db.model.whiteboard_page_QMARK_ = (function frontend$db$model$whiteboard_page_QMARK_(page){
if(typeof page === 'string'){
var page__$1 = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null));
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page__$1));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file)));
if(cljs.core.truth_(temp__5804__auto____$1)){
var path = temp__5804__auto____$1;
return logseq.graph_parser.config.whiteboard_QMARK_(path);
} else {
return null;
}
} else {
return null;
}
}
} else {
if(cljs.core.seq(page)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page));
} else {
return false;

}
}
});
frontend.db.model.get_orphaned_pages = (function frontend$db$model$get_orphaned_pages(p__69844){
var map__69845 = p__69844;
var map__69845__$1 = cljs.core.__destructure_map(map__69845);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69845__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo());
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69845__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var empty_ref_f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69845__$1,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
return (cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page)) === (0));
}));
var pages__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var or__5043__auto__ = pages;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_pages(repo);
}
})());
var built_in_pages = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,logseq.db.default$.built_in_pages_names));
var orphaned_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),name], null));
if(cljs.core.truth_(temp__5804__auto__)){
var page__$1 = temp__5804__auto__;
var and__5041__auto__ = (empty_ref_f.cljs$core$IFn$_invoke$arity$1 ? empty_ref_f.cljs$core$IFn$_invoke$arity$1(page__$1) : empty_ref_f.call(null,page__$1));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (function (){var or__5043__auto__ = frontend.db.model.page_empty_QMARK_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var first_child = cljs.core.first(new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page__$1));
var children = new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page__$1);
var and__5041__auto____$1 = first_child;
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["",null,"*",null,"-",null], null), null),clojure.string.trim(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(first_child)))));
} else {
return and__5041__auto____$1;
}
}
})();
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = (!(cljs.core.contains_QMARK_(built_in_pages,name)));
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.not(frontend.db.model.whiteboard_page_QMARK_(page__$1));
if(and__5041__auto____$3){
var and__5041__auto____$4 = cljs.core.not(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1(page__$1));
if(and__5041__auto____$4){
var and__5041__auto____$5 = (!(((clojure.string.includes_QMARK_(name,"/")) && (cljs.core.not(new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page__$1))))));
if(and__5041__auto____$5){
return page__$1;
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
}),pages__$1)));
return orphaned_pages;
});
frontend.db.model.get_macro_blocks = (function frontend$db$model$get_macro_blocks(repo,macro_name){
var G__69847 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?macro-name","?macro-name",-1670244125,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","type","block/type",1537584409),"macro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"logseq.macro-name","logseq.macro-name",1789949403)),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?macro-name","?macro-name",-1670244125,null))], null)], null);
var G__69848 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__69849 = macro_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__69847,G__69848,G__69849) : datascript.core.q.call(null,G__69847,G__69848,G__69849));
});
frontend.db.model.block_or_page = (function frontend$db$model$block_or_page(page_name_or_uuid){
var entity = frontend.db.model.get_page(cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name_or_uuid));
if((!((!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity) == null)))))){
return new cljs.core.Keyword(null,"block","block",664686210);
} else {
return new cljs.core.Keyword(null,"page","page",849072397);
}
});
frontend.db.model.page_QMARK_ = (function frontend$db$model$page_QMARK_(page_name_or_uuid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.db.model.block_or_page(page_name_or_uuid));
});
frontend.db.model.untitled_page_QMARK_ = (function frontend$db$model$untitled_page_QMARK_(page_name){
var temp__5804__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
if(cljs.core.truth_(temp__5804__auto__)){
var entity = temp__5804__auto__;
return (!((cljs.core.parse_uuid(page_name) == null)));
} else {
return null;
}
});
frontend.db.model.get_all_whiteboards = (function frontend$db$model$get_all_whiteboards(repo){
var G__69854 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","type","block/type",1537584409),"whiteboard"], null)], null);
var G__69855 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__69854,G__69855) : datascript.core.q.call(null,G__69854,G__69855));
});
frontend.db.model.get_whiteboard_id_nonces = (function frontend$db$model$get_whiteboard_id_nonces(repo,page_name){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69857){
var map__69858 = p__69857;
var map__69858__$1 = cljs.core.__destructure_map(map__69858);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69858__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69858__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"nonce","nonce",564330331),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logseq.tldraw.shape","logseq.tldraw.shape",-771542905),new cljs.core.Keyword(null,"nonce","nonce",564330331)], null))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69856_SHARP_){
return new cljs.core.Keyword(null,"logseq.tldraw.shape","logseq.tldraw.shape",-771542905).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(p1__69856_SHARP_));
}),frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(repo,page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145)], null)], null))));
});

//# sourceMappingURL=frontend.db.model.js.map
