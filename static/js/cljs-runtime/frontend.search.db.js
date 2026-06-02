goog.provide('frontend.search.db');
var module$node_modules$fuse_DOT_js$dist$fuse_common=shadow.js.require("module$node_modules$fuse_DOT_js$dist$fuse_common", {});
if((typeof frontend !== 'undefined') && (typeof frontend.search !== 'undefined') && (typeof frontend.search.db !== 'undefined') && (typeof frontend.search.db.indices !== 'undefined')){
} else {
frontend.search.db.indices = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.search.db.max_len = (function frontend$search$db$max_len(){
return frontend.state.block_content_max_length(frontend.state.get_current_repo());
});
frontend.search.db.sanitize = (function frontend$search$db$sanitize(content){
var G__101758 = content;
if((G__101758 == null)){
return null;
} else {
return frontend.util.search_normalize(G__101758,frontend.state.enable_search_remove_accents_QMARK_());
}
});
/**
 * Convert a block to the index for searching.
 * 
 * Applies full text preprocessing to the content, including removing built-in properties
 */
frontend.search.db.strict_block__GT_index = (function frontend$search$db$strict_block__GT_index(p__101760){
var map__101761 = p__101760;
var map__101761__$1 = cljs.core.__destructure_map(map__101761);
var block = map__101761__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101761__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101761__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101761__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__101761__$1,new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
if((cljs.core.count(content) > frontend.search.db.max_len())){
return null;
} else {
var content__$1 = frontend.util.property.remove_built_in_properties(format,content);
if(clojure.string.blank_QMARK_(content__$1)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"content","content",15833224),frontend.search.db.sanitize(content__$1)], null);
}
}
});
/**
 * Convert a block to the index for searching
 * 
 * For speed, applies no preprocessing to the content
 */
frontend.search.db.loose_block__GT_index = (function frontend$search$db$loose_block__GT_index(p__101762){
var map__101763 = p__101762;
var map__101763__$1 = cljs.core.__destructure_map(map__101763);
var block = map__101763__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101763__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101763__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101763__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"content","content",15833224),content], null);
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.search !== 'undefined') && (typeof frontend.search.db !== 'undefined') && (typeof frontend.search.db.block__GT_index !== 'undefined')){
} else {
frontend.search.db.block__GT_index = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.search.db.strict_block__GT_index:frontend.search.db.loose_block__GT_index);
}
/**
 * Convert a page name to the index for searching (page content level)
 * Generate index based on the DB content AT THE POINT OF TIME
 */
frontend.search.db.page__GT_index = (function frontend$search$db$page__GT_index(p__101764){
var map__101765 = p__101764;
var map__101765__$1 = cljs.core.__destructure_map(map__101765);
var page = map__101765__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101765__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101765__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var temp__5804__auto__ = (function (){var G__101767 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
if((G__101767 == null)){
return null;
} else {
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(G__101767);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var content = temp__5804__auto__;
if(clojure.string.blank_QMARK_(original_name)){
return null;
} else {
if((cljs.core.count(content) > (frontend.search.db.max_len() * (10)))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"content","content",15833224),frontend.search.db.sanitize(["$pfts_f6ld>$ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original_name)," $<pfts_f6ld$ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))], null);
}
}
} else {
return null;
}
});
frontend.search.db.build_blocks_indice = (function frontend$search$db$build_blocks_indice(repo){
return cljs_bean.core.__GT_js(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.block__GT_index,(frontend.db.get_all_block_contents.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_block_contents.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_block_contents.call(null)))));
});
frontend.search.db.build_pages_indice = (function frontend$search$db$build_pages_indice(repo){
return cljs_bean.core.__GT_js(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.page__GT_index,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__101768_SHARP_){
var G__101769 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__101768_SHARP_);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__101769) : frontend.db.entity.call(null,G__101769));
}),(frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo))))));
});
frontend.search.db.make_blocks_indice_BANG_ = (function frontend$search$db$make_blocks_indice_BANG_(var_args){
var G__101771 = arguments.length;
switch (G__101771) {
case 1:
return frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$2(repo,frontend.search.db.build_blocks_indice(repo));
}));

(frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,blocks){
var indice = (new module$node_modules$fuse_DOT_js$dist$fuse_common(blocks,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uuid","content","page"], null),new cljs.core.Keyword(null,"shouldSort","shouldSort",-1733947834),true,new cljs.core.Keyword(null,"tokenize","tokenize",1336117716),true,new cljs.core.Keyword(null,"minMatchCharLength","minMatchCharLength",-46930554),(1),new cljs.core.Keyword(null,"distance","distance",-1671893894),(1000),new cljs.core.Keyword(null,"threshold","threshold",204221583),0.35], null))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),indice);

return indice;
}));

(frontend.search.db.make_blocks_indice_BANG_.cljs$lang$maxFixedArity = 2);

frontend.search.db.original_page_name__GT_index = (function frontend$search$db$original_page_name__GT_index(p){
if(cljs.core.truth_(p)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),frontend.util.search_normalize(p,frontend.state.enable_search_remove_accents_QMARK_()),new cljs.core.Keyword(null,"original-name","original-name",-1427702839),p], null);
} else {
return null;
}
});
/**
 * Build a page title indice from scratch.
 * Incremental page title indice is implemented in frontend.search.sync-search-indice!
 * Rename from the page indice since 10.25.2022, since this is only used for page title search.
 * From now on, page indice is talking about page content search.
 */
frontend.search.db.make_pages_title_indice_BANG_ = (function frontend$search$db$make_pages_title_indice_BANG_(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var pages = cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.original_page_name__GT_index,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,(function (){var G__101772 = frontend.state.get_current_repo();
return (frontend.db.get_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_pages.cljs$core$IFn$_invoke$arity$1(G__101772) : frontend.db.get_pages.call(null,G__101772));
})())));
var indice = (new module$node_modules$fuse_DOT_js$dist$fuse_common(pages,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name"], null),new cljs.core.Keyword(null,"shouldSort","shouldSort",-1733947834),true,new cljs.core.Keyword(null,"tokenize","tokenize",1336117716),true,new cljs.core.Keyword(null,"distance","distance",-1671893894),(1024),new cljs.core.Keyword(null,"threshold","threshold",204221583),0.5,new cljs.core.Keyword(null,"minMatchCharLength","minMatchCharLength",-46930554),(1)], null))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),indice);

return indice;
} else {
return null;
}
});

//# sourceMappingURL=frontend.search.db.js.map
