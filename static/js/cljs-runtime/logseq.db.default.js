goog.provide('logseq.db.default$');
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db.default !== 'undefined') && (typeof logseq.db.default.built_in_markers !== 'undefined')){
} else {
logseq.db.default$.built_in_markers = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOW","LATER","DOING","DONE","CANCELED","CANCELLED","IN-PROGRESS","TODO","WAIT","WAITING"], null);
}
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db.default !== 'undefined') && (typeof logseq.db.default.built_in_priorities !== 'undefined')){
} else {
logseq.db.default$.built_in_priorities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C"], null);
}
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db.default !== 'undefined') && (typeof logseq.db.default.built_in_pages_names !== 'undefined')){
} else {
logseq.db.default$.built_in_pages_names = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(logseq.db.default$.built_in_markers),cljs.core.set(logseq.db.default$.built_in_priorities),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Contents",null,"Favorites",null,"card",null], null), null)], 0));
}
logseq.db.default$.built_in_pages = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","name","block/name",1619760316),clojure.string.lower_case(p),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),p,new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.random_uuid()], null);
}),logseq.db.default$.built_in_pages_names);

//# sourceMappingURL=logseq.db.default.js.map
