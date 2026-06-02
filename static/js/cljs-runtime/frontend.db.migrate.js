goog.provide('frontend.db.migrate');
/**
 * Get schema version from db, the current version is defined in db-schema/version
 */
frontend.db.migrate.get_schema_version = (function frontend$db$migrate$get_schema_version(db){
var G__84007 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("schema","version","schema/version",1396190655),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null);
var G__84008 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__84007,G__84008) : datascript.core.q.call(null,G__84007,G__84008));
});
frontend.db.migrate.get_collapsed_blocks = (function frontend$db$migrate$get_collapsed_blocks(db){
var G__84009 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)),new cljs.core.Symbol(null,"?collapsed","?collapsed",4745616,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,new cljs.core.Symbol(null,"?collapsed","?collapsed",4745616,null))], null)], null);
var G__84010 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__84009,G__84010) : datascript.core.q.call(null,G__84009,G__84010));
});
frontend.db.migrate.migrate_collapsed_blocks = (function frontend$db$migrate$migrate_collapsed_blocks(db){
if(cljs.core.truth_(db)){
var collapsed_blocks = frontend.db.migrate.get_collapsed_blocks(db);
if(cljs.core.seq(collapsed_blocks)){
var tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),true], null);
}),collapsed_blocks);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"migrate-collapsed-blocks","migrate-collapsed-blocks",1785314491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(collapsed_blocks)], null)], 0));

return datascript.core.db_with(db,tx_data);
} else {
return db;
}
} else {
return null;
}
});
frontend.db.migrate.migrate_absolute_file_path_to_relative = (function frontend$db$migrate$migrate_absolute_file_path_to_relative(db){
if(cljs.core.truth_(db)){
var all_files = (function (){var G__84012 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null);
var G__84013 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__84012,G__84013) : datascript.core.q.call(null,G__84012,G__84013));
})();
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
if(cljs.core.seq(all_files)){
var tx_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (db_file){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(db_file),new cljs.core.Keyword("file","path","file/path",-191335748),logseq.common.path.trim_dir_prefix(repo_dir,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(db_file))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (db_file){
return ((logseq.common.path.absolute_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(db_file))) && (clojure.string.starts_with_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(db_file),repo_dir)));
}),all_files));
if(cljs.core.truth_(tx_data)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Migrated from an old version of DB, please re-index the graph from the graph list dropdown."], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));
} else {
}

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"migrate-absolute-file-path-to-relative","migrate-absolute-file-path-to-relative",-571019234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(tx_data)], null)], 0));

return datascript.core.db_with(db,tx_data);
} else {
return db;
}
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.migrate !== 'undefined') && (typeof frontend.db.migrate.do_migration !== 'undefined')){
} else {
frontend.db.migrate.do_migration = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__84017 = cljs.core.get_global_hierarchy;
return (fexpr__84017.cljs$core$IFn$_invoke$arity$0 ? fexpr__84017.cljs$core$IFn$_invoke$arity$0() : fexpr__84017.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.db.migrate","do-migration"),frontend.db.migrate.get_schema_version,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.db.migrate.do_migration.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (db){
return frontend.db.migrate.migrate_absolute_file_path_to_relative(frontend.db.migrate.migrate_collapsed_blocks(db));
}));
frontend.db.migrate.do_migration.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (db){
return frontend.db.migrate.migrate_absolute_file_path_to_relative(db);
}));
frontend.db.migrate.do_migration.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (db){
return db;
}));
frontend.db.migrate.migrate = (function frontend$db$migrate$migrate(db){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.db.migrate","migrate","frontend.db.migrate/migrate",1610986328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),frontend.db.migrate.get_schema_version(db),new cljs.core.Keyword(null,"to","to",192099007),logseq.db.schema.version], null)], 0));

return frontend.db.migrate.do_migration.cljs$core$IFn$_invoke$arity$1(db);
});

//# sourceMappingURL=frontend.db.migrate.js.map
