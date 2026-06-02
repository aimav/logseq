goog.provide('frontend.idb');
goog.scope(function(){
  frontend.idb.goog$module$goog$object = goog.module.get('goog.object');
});
var module$frontend$idbkv=shadow.js.require("module$frontend$idbkv", {});
if((typeof frontend !== 'undefined') && (typeof frontend.idb !== 'undefined') && (typeof frontend.idb.store !== 'undefined')){
} else {
frontend.idb.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.idb.clear_idb_BANG_ = (function frontend$idb$clear_idb_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.idb.store))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$idbkv.clear(cljs.core.deref(frontend.idb.store)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.indexedDB.databases(),(function (dbs){
return promesa.protocols._promise((function (){var seq__83063 = cljs.core.seq(dbs);
var chunk__83064 = null;
var count__83065 = (0);
var i__83066 = (0);
while(true){
if((i__83066 < count__83065)){
var db = chunk__83064.cljs$core$IIndexed$_nth$arity$2(null,i__83066);
window.indexedDB.deleteDatabase(frontend.idb.goog$module$goog$object.get(db,"name"));


var G__83080 = seq__83063;
var G__83081 = chunk__83064;
var G__83082 = count__83065;
var G__83083 = (i__83066 + (1));
seq__83063 = G__83080;
chunk__83064 = G__83081;
count__83065 = G__83082;
i__83066 = G__83083;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__83063);
if(temp__5804__auto__){
var seq__83063__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83063__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__83063__$1);
var G__83084 = cljs.core.chunk_rest(seq__83063__$1);
var G__83085 = c__5565__auto__;
var G__83086 = cljs.core.count(c__5565__auto__);
var G__83087 = (0);
seq__83063 = G__83084;
chunk__83064 = G__83085;
count__83065 = G__83086;
i__83066 = G__83087;
continue;
} else {
var db = cljs.core.first(seq__83063__$1);
window.indexedDB.deleteDatabase(frontend.idb.goog$module$goog$object.get(db,"name"));


var G__83088 = cljs.core.next(seq__83063__$1);
var G__83089 = null;
var G__83090 = (0);
var G__83091 = (0);
seq__83063 = G__83088;
chunk__83064 = G__83089;
count__83065 = G__83090;
i__83066 = G__83091;
continue;
}
} else {
return null;
}
}
break;
}
})());
}));
}));
})),(function (_e){
return null;
}));
} else {
return null;
}
});
frontend.idb.clear_local_storage_and_idb_BANG_ = (function frontend$idb$clear_local_storage_and_idb_BANG_(){
frontend.storage.clear();

return frontend.idb.clear_idb_BANG_();
});
frontend.idb.remove_item_BANG_ = (function frontend$idb$remove_item_BANG_(key){
if(cljs.core.truth_((function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(frontend.idb.store);
} else {
return and__5041__auto__;
}
})())){
return module$frontend$idbkv.del(key,cljs.core.deref(frontend.idb.store));
} else {
return null;
}
});
frontend.idb.set_item_BANG_ = (function frontend$idb$set_item_BANG_(key,value){
if(cljs.core.truth_((function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(frontend.idb.store);
} else {
return and__5041__auto__;
}
})())){
return module$frontend$idbkv.set(key,value,cljs.core.deref(frontend.idb.store));
} else {
return null;
}
});
frontend.idb.rename_item_BANG_ = (function frontend$idb$rename_item_BANG_(old_key,new_key){
if(cljs.core.truth_((function (){var and__5041__auto__ = old_key;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new_key;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.deref(frontend.idb.store);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$idbkv.get(old_key,cljs.core.deref(frontend.idb.store)),(function (value){
return promesa.protocols._promise((cljs.core.truth_(value)?(function (){
module$frontend$idbkv.set(new_key,value,cljs.core.deref(frontend.idb.store));

return module$frontend$idbkv.del(old_key,cljs.core.deref(frontend.idb.store));
})()
:null));
}));
}));
} else {
return null;
}
});
frontend.idb.set_batch_BANG_ = (function frontend$idb$set_batch_BANG_(items){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(items);
if(and__5041__auto__){
return cljs.core.deref(frontend.idb.store);
} else {
return and__5041__auto__;
}
})())){
return module$frontend$idbkv.setBatch(cljs.core.clj__GT_js(items),cljs.core.deref(frontend.idb.store));
} else {
return null;
}
});
frontend.idb.get_item = (function frontend$idb$get_item(key){
if(cljs.core.truth_((function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(frontend.idb.store);
} else {
return and__5041__auto__;
}
})())){
return module$frontend$idbkv.get(key,cljs.core.deref(frontend.idb.store));
} else {
return null;
}
});
frontend.idb.get_keys = (function frontend$idb$get_keys(){
if(cljs.core.truth_(cljs.core.deref(frontend.idb.store))){
return module$frontend$idbkv.keys(cljs.core.deref(frontend.idb.store));
} else {
return null;
}
});
frontend.idb.get_nfs_dbs = (function frontend$idb$get_nfs_dbs(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_keys(),(function (ks){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83074_SHARP_){
return clojure.string.replace_first(p1__83074_SHARP_,frontend.config.idb_db_prefix,"");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return clojure.string.starts_with_QMARK_(k,[frontend.config.idb_db_prefix,frontend.config.local_db_prefix].join(''));
}),ks)));
}));
}));
});
frontend.idb.clear_local_db_BANG_ = (function frontend$idb$clear_local_db_BANG_(repo){
if(cljs.core.truth_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_keys(),(function (ks){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return clojure.string.starts_with_QMARK_(k,[frontend.config.local_handle,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join(''));
}),ks),(function (ks__$1){
return promesa.protocols._promise(((cljs.core.seq(ks__$1))?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return frontend.idb.remove_item_BANG_(key);
}),ks__$1)):null));
}));
}));
}));
} else {
return null;
}
});
/**
 * This component's only responsibility is to create a Store object
 */
frontend.idb.start = (function frontend$idb$start(){
return cljs.core.reset_BANG_(frontend.idb.store,(new module$frontend$idbkv.Store("localforage","keyvaluepairs",(2))));
});

//# sourceMappingURL=frontend.idb.js.map
