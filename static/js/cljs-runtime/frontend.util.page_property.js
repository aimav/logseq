goog.provide('frontend.util.page_property');
frontend.util.page_property.insert_property = (function frontend$util$page_property$insert_property(format,content,key,value){
if(((typeof content === 'string') && ((!(clojure.string.blank_QMARK_(cljs.core.name(key))))))){
var key__$1 = ((typeof key === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):key);
var key_part = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic((function (){var G__107314 = format;
var G__107314__$1 = (((G__107314 instanceof cljs.core.Keyword))?G__107314.fqn:null);
switch (G__107314__$1) {
case "org":
return "#+%s: ";

break;
default:
return "%s:: ";

}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.lower_case(cljs.core.name(key__$1))], 0));
var new_property_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_part),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var lines = clojure.string.split_lines(content);
var key_exists_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var lines__$1 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
if(((clojure.string.starts_with_QMARK_(clojure.string.lower_case(line),clojure.string.lower_case(key_part))) && (cljs.core.not(cljs.core.deref(key_exists_QMARK_))))){
cljs.core.reset_BANG_(key_exists_QMARK_,true);

return new_property_line;
} else {
return line;
}
}),lines));
var lines__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)))?null:lines__$1);
var lines__$3 = (cljs.core.truth_(cljs.core.deref(key_exists_QMARK_))?lines__$2:cljs.core.cons(new_property_line,lines__$2));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$3);
} else {
return null;
}
});
frontend.util.page_property.insert_properties = (function frontend$util$page_property$insert_properties(format,content,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__107315){
var vec__107316 = p__107315;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107316,(1),null);
var k__$1 = ((typeof k === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(k)," ","-")):k);
var v__$1 = ((cljs.core.coll_QMARK_(v))?(function (){var G__107319 = cljs.core.seq(v);
var G__107319__$1 = (((G__107319 == null))?null:cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__107319));
if((G__107319__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",G__107319__$1);
}
})():v);
return frontend.util.page_property.insert_property(format,content__$1,k__$1,v__$1);
}),content,kvs);
});
/**
 * Sanitized page-name, unsanitized key / value
 */
frontend.util.page_property.add_property_BANG_ = (function frontend$util$page_property$add_property_BANG_(page_name,key,value){
var temp__5804__auto__ = (function (){var G__107320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__107320) : frontend.db.pull.call(null,G__107320));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var repo = frontend.state.get_current_repo();
var key__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
var pre_block = (function (){var G__107321 = repo;
var G__107322 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_pre_block.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pre_block.cljs$core$IFn$_invoke$arity$2(G__107321,G__107322) : frontend.db.get_pre_block.call(null,G__107321,G__107322));
})();
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var page_id = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null);
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var value__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),null], null), null),key__$1))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)):value);
if(cljs.core.truth_(pre_block)){
var properties_107328 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(pre_block);
var new_properties_107329 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_107328,key__$1,value__$1);
var content_107330 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(pre_block);
var new_content_107331 = frontend.util.page_property.insert_property(format,content_107330,key__$1,value__$1);
var block_107332 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(pre_block),new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties_107329,new cljs.core.Keyword("block","content","block/content",-161885195),new_content_107331,new cljs.core.Keyword("block","page","block/page",822314108),page_id], null);
var tx_107333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_id,new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties_107329),block_107332], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx_107333) : frontend.db.transact_BANG_.call(null,tx_107333));
} else {
var block_107334 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","left","block/left",-443712566),page_id,new cljs.core.Keyword("block","parent","block/parent",-918309064),page_id,new cljs.core.Keyword("block","page","block/page",822314108),page_id,new cljs.core.Keyword("block","content","block/content",-161885195),((org_QMARK_)?["#+",clojure.string.upper_case(cljs.core.name(key__$1)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)].join(''):[cljs.core.name(key__$1),":: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)].join('')),new cljs.core.Keyword("block","format","block/format",-1212045901),format,new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,value__$1]),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),true], null);
var page_properties_tx_107335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_id,new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,value__$1]))], null);
var transact_data__102865__auto___107336 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___107337 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___107338 = (cljs.core.truth_(transact_data__102865__auto___107336)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),page_properties_tx_107335], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),page_properties_tx_107335], null));
var before_editor_cursor__102868__auto___107339 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___107336)){
if(cljs.core.truth_(transaction_opts__102866__auto___107337)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___107337,opts__102867__auto___107338);
} else {
}

frontend.modules.outliner.core.insert_blocks_BANG_(block_107334,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
} else {
var _STAR_transaction_data_STAR__orig_val__107323_107340 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__107324_107341 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__107325_107342 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__107326_107343 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__107325_107342);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__107326_107343);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___107337,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___107338], 0));

frontend.modules.outliner.core.insert_blocks_BANG_(block_107334,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));

var r__102869__auto___107344 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___107345 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___107344], 0));
var tx_meta__102871__auto___107346 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___107344));
var all_tx__102872__auto___107347 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___107345,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___107338));
var o__102873__auto___107348 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___107349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___107348));
var opts_SHARP___102875__auto___107350 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___107349,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___107346], 0));
if(cljs.core.seq(all_tx__102872__auto___107347)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___107338))){
} else {
var result__102876__auto___107351 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___107347,opts_SHARP___102875__auto___107350,before_editor_cursor__102868__auto___107339);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___107347,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___107346,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___107351], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__107324_107341);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__107323_107340);
}}
}

return frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1(page_id);
} else {
return null;
}
});

//# sourceMappingURL=frontend.util.page_property.js.map
