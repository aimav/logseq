goog.provide('logseq.publishing.db');
/**
 * Returns asset url for an area block used by pdf assets. This lives in this ns
 *   because it is used by this dep and needs to be independent from the frontend app
 */
logseq.publishing.db.get_area_block_asset_url = (function logseq$publishing$db$get_area_block_asset_url(block,page){
var temp__5808__auto__ = (function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = page;
if(cljs.core.truth_(and__5041__auto____$1)){
return new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var props = temp__5808__auto__;
var temp__5808__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if((temp__5808__auto____$1 == null)){
return null;
} else {
var uuid = temp__5808__auto____$1;
var temp__5808__auto____$2 = new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5808__auto____$2 == null)){
return null;
} else {
var stamp = temp__5808__auto____$2;
var group_key = clojure.string.replace_first(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page),/^hls__/,"");
var hl_page = new cljs.core.Keyword(null,"hl-page","hl-page",949012424).cljs$core$IFn$_invoke$arity$1(props);
var encoded_chars_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/%[0-9a-f]{2}/i,group_key));
var group_key__$1 = ((encoded_chars_QMARK_)?encodeURI(group_key):group_key);
return ["./assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_key__$1),"/",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hl_page),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stamp),".png"].join('')].join('');
}
}
}
});
logseq.publishing.db.clean_asset_path_prefix = (function logseq$publishing$db$clean_asset_path_prefix(path){
if(typeof path === 'string'){
return clojure.string.replace_first(path,/^[.\\/\\]*(assets)[\\/\\]+/,"");
} else {
return null;
}
});
logseq.publishing.db.get_public_pages = (function logseq$publishing$db$get_public_pages(db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__102369 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null)], null);
var G__102370 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__102369,G__102370) : datascript.core.q.call(null,G__102369,G__102370));
})());
});
logseq.publishing.db.get_public_false_pages = (function logseq$publishing$db$get_public_false_pages(db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__102371 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null)], null);
var G__102372 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__102371,G__102372) : datascript.core.q.call(null,G__102371,G__102372));
})());
});
logseq.publishing.db.get_public_false_block_ids = (function logseq$publishing$db$get_public_false_block_ids(db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__102373 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__102374 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__102373,G__102374) : datascript.core.q.call(null,G__102373,G__102374));
})());
});
logseq.publishing.db.get_assets = (function logseq$publishing$db$get_assets(db,datoms){
var pull = (function (eid,db__$1){
var G__102377 = db__$1;
var G__102378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__102379 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__102377,G__102378,G__102379) : datascript.core.pull.call(null,G__102377,G__102378,G__102379));
});
var get_page_by_eid = cljs.core.memoize((function (p1__102375_SHARP_){
var G__102380 = pull(p1__102375_SHARP_,db);
var G__102380__$1 = (((G__102380 == null))?null:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(G__102380));
var G__102380__$2 = (((G__102380__$1 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__102380__$1));
if((G__102380__$2 == null)){
return null;
} else {
return pull(G__102380__$2,db);
}
}));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var G__102381 = cljs.core.PersistentVector.EMPTY;
var G__102381__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__102381,(function (){var matched = cljs.core.re_seq(/\([.\/]*\/assets\/([^)]+)\)/,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom));
if(cljs.core.seq(matched)){
var iter__5520__auto__ = (function logseq$publishing$db$get_assets_$_iter__102382(s__102383){
return (new cljs.core.LazySeq(null,(function (){
var s__102383__$1 = s__102383;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__102383__$1);
if(temp__5804__auto__){
var s__102383__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102383__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102383__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102385 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102384 = (0);
while(true){
if((i__102384 < size__5519__auto__)){
var vec__102386 = cljs.core._nth(c__5518__auto__,i__102384);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102386,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102386,(1),null);
cljs.core.chunk_append(b__102385,((((typeof path === 'string') && ((!(clojure.string.ends_with_QMARK_(path,".js"))))))?path:null));

var G__102401 = (i__102384 + (1));
i__102384 = G__102401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102385),logseq$publishing$db$get_assets_$_iter__102382(cljs.core.chunk_rest(s__102383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102385),null);
}
} else {
var vec__102389 = cljs.core.first(s__102383__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102389,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102389,(1),null);
return cljs.core.cons(((((typeof path === 'string') && ((!(clojure.string.ends_with_QMARK_(path,".js"))))))?path:null),logseq$publishing$db$get_assets_$_iter__102382(cljs.core.rest(s__102383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(matched);
} else {
return null;
}
})()):G__102381);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hl-type","hl-type",992471876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),"area")){
return (function (p1__102376_SHARP_){
var path = (function (){var G__102392 = pull(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),db);
if((G__102392 == null)){
return null;
} else {
return logseq.publishing.db.get_area_block_asset_url(G__102392,get_page_by_eid(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)));
}
})();
var path__$1 = logseq.publishing.db.clean_asset_path_prefix(path);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__102376_SHARP_,path__$1);
})(G__102381__$1);
} else {
return G__102381__$1;
}
}),datoms)));
});
logseq.publishing.db.get_aliases_for_page_ids = (function logseq$publishing$db$get_aliases_for_page_ids(db,page_ids){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__102393 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null))], null);
var G__102394 = db;
var G__102395 = cljs.core.set(page_ids);
var G__102396 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(logseq.db.rules.rules);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__102393,G__102394,G__102395,G__102396) : datascript.core.q.call(null,G__102393,G__102394,G__102395,G__102396));
})()));
});
/**
 * Prepares a database assuming all pages are public unless a page has a 'public:: false'
 */
logseq.publishing.db.clean_export_BANG_ = (function logseq$publishing$db$clean_export_BANG_(db){
var remove_QMARK_ = (function (p1__102397_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["file",null,"recent",null], null), null),p1__102397_SHARP_);
});
var non_public_pages = logseq.publishing.db.get_public_false_pages(db);
var non_public_datoms = logseq.publishing.db.get_public_false_block_ids(db);
var non_public_datom_ids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(non_public_pages,non_public_datoms));
var filtered_db = datascript.core.filter(db,(function (_db,datom){
var ns = cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
return (((!(remove_QMARK_(ns)))) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))) && ((!(cljs.core.contains_QMARK_(non_public_datom_ids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))))))));
}));
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(filtered_db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var assets = logseq.publishing.db.get_assets(db,datoms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,logseq.db.schema.schema)),assets], null);
});
/**
 * Prepares a database assuming all pages are private unless a page has a 'public:: true'
 */
logseq.publishing.db.filter_only_public_pages_and_blocks = (function logseq$publishing$db$filter_only_public_pages_and_blocks(db){
var temp__5804__auto__ = cljs.core.seq(logseq.publishing.db.get_public_pages(db));
if(temp__5804__auto__){
var public_pages_STAR_ = temp__5804__auto__;
var public_pages = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(public_pages_STAR_),logseq.publishing.db.get_aliases_for_page_ids(db,public_pages_STAR_));
var exported_namespace_QMARK_ = (function (p1__102398_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["block",null,"recent",null], null), null),p1__102398_SHARP_);
});
var filtered_db = datascript.core.filter(db,(function (db__$1,datom){
var ns = cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
return (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns,"file")) && ((((!(exported_namespace_QMARK_(ns)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,"block")) && (((cljs.core.contains_QMARK_(public_pages,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))) || (cljs.core.contains_QMARK_(public_pages,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__102399 = db__$1;
var G__102400 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__102399,G__102400) : datascript.core.entity.call(null,G__102399,G__102400));
})())))))))))))));
}));
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(filtered_db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var assets = logseq.publishing.db.get_assets(db,datoms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,logseq.db.schema.schema)),assets], null);
} else {
return null;
}
});

//# sourceMappingURL=logseq.publishing.db.js.map
