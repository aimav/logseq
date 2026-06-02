goog.provide('frontend.external.roam_export');
frontend.external.roam_export.todo_marker_regex = /^(NOW|LATER|TODO|DOING|WAITING|WAIT|CANCELED|CANCELLED|STARTED|IN-PROGRESS)/;
frontend.external.roam_export.done_marker_regex = /^DONE/;
frontend.external.roam_export.nano_char_range = "_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
frontend.external.roam_export.nano_id_char = (function frontend$external$roam_export$nano_id_char(){
return cljs.core.rand_nth(frontend.external.roam_export.nano_char_range);
});
frontend.external.roam_export.nano_id = (function frontend$external$roam_export$nano_id(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((9),frontend.external.roam_export.nano_id_char));
});
frontend.external.roam_export.uuid__GT_uid_map = (function frontend$external$roam_export$uuid__GT_uid_map(){
var db = (function (){var G__108785 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__108785) : frontend.db.get_db.call(null,G__108785));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uuid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid,frontend.external.roam_export.nano_id()], null);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first),(function (){var G__108786 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?r","?r",-516400708,null)], null)], null);
var G__108787 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__108786,G__108787) : datascript.core.q.call(null,G__108786,G__108787));
})()))));
});
frontend.external.roam_export.update_content = (function frontend$external$roam_export$update_content(content,uuid__GT_uid_map){
if(cljs.core.truth_(content)){
var uuids = cljs.core.keys(uuid__GT_uid_map);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,uuid){
if(clojure.string.includes_QMARK_(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))){
return clojure.string.replace(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_uid_map,uuid));
} else {
return acc;
}
}),content,uuids);
} else {
return null;
}
});
frontend.external.roam_export.update_uid = (function frontend$external$roam_export$update_uid(p__108789,uuid__GT_uid_map){
var map__108790 = p__108789;
var map__108790__$1 = cljs.core.__destructure_map(map__108790);
var b = map__108790__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108790__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108790__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var G__108791 = b;
var G__108791__$1 = ((cljs.core.contains_QMARK_(uuid__GT_uid_map,uuid))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__108791,new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_uid_map,uuid)):G__108791);
if(cljs.core.truth_(cljs.core.some((function (id){
return clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
}),cljs.core.keys(uuid__GT_uid_map)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__108791__$1,new cljs.core.Keyword("block","content","block/content",-161885195),(function (p1__108788_SHARP_){
return frontend.external.roam_export.update_content(p1__108788_SHARP_,uuid__GT_uid_map);
}));
} else {
return G__108791__$1;
}
});
frontend.external.roam_export.update_todo = (function frontend$external$roam_export$update_todo(p__108792){
var map__108793 = p__108792;
var map__108793__$1 = cljs.core.__destructure_map(map__108793);
var block = map__108793__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108793__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
if(cljs.core.truth_(content)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),(function (c){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(clojure.string.replace(c,frontend.external.roam_export.todo_marker_regex,"{{[[TODO]]}}"),frontend.external.roam_export.done_marker_regex,"{{[[DONE]]}}"),"{{embed ","{{embed: "));
}));
} else {
return block;
}
});
frontend.external.roam_export.traverse = (function frontend$external$roam_export$traverse(keyseq,vec_tree){
var uuid__GT_uid_map = frontend.external.roam_export.uuid__GT_uid_map();
return clojure.walk.postwalk((function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))))){
return cljs.core.select_keys(clojure.set.rename_keys(frontend.external.roam_export.update_todo(frontend.external.roam_export.update_uid(x,uuid__GT_uid_map)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("page","title","page/title",628894782),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","string","block/string",-2066596447)], null)),keyseq);
} else {
return x;

}
}),vec_tree);
});

//# sourceMappingURL=frontend.external.roam_export.js.map
