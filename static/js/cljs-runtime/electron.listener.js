goog.provide('electron.listener');
/**
 * Force the callback result to be nil, otherwise, ipc calls could lead to
 *   window crash.
 */
electron.listener.safe_api_call = (function electron$listener$safe_api_call(k,f){
return window.apis.on(k,(function (data){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));

return null;
}));
});
electron.listener.persist_dbs_BANG_ = (function electron$listener$persist_dbs_BANG_(){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return frontend.ui.notify_graph_persist_BANG_();
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["persistent-dbs-saved"], 0));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["persistent-dbs-error"], 0));
})], null));
});
electron.listener.listen_persistent_dbs_BANG_ = (function electron$listener$listen_persistent_dbs_BANG_(){
return electron.listener.safe_api_call("persistent-dbs",(function (_data){
return electron.listener.persist_dbs_BANG_();
}));
});
electron.listener.listen_to_electron_BANG_ = (function electron$listener$listen_to_electron_BANG_(){
electron.listener.safe_api_call("file-watcher",(function (data){
var map__110328 = cljs_bean.core.__GT_clj(data);
var map__110328__$1 = cljs.core.__destructure_map(map__110328);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110328__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110328__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var path = logseq.graph_parser.util.path_normalize(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(payload));
var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(payload);
var payload__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(payload,new cljs.core.Keyword(null,"path","path",-188191168),logseq.common.path.relative_path(dir,path));
frontend.fs.watcher_handler.handle_changed_BANG_(type,payload__$1);

if(cljs.core.truth_(frontend.handler.file_sync.enable_sync_QMARK_())){
return frontend.fs.sync.file_watch_handler(type,payload__$1);
} else {
return null;
}
}));

electron.listener.safe_api_call("file-sync-progress",(function (data){
var payload = cljs_bean.core.__GT_clj(data);
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword("file-sync","progress","file-sync/progress",-1051866953),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(payload)], null),payload);
}));

electron.listener.safe_api_call("notification",(function (data){
var map__110329 = cljs_bean.core.__GT_clj(data);
var map__110329__$1 = cljs.core.__destructure_map(map__110329);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110329__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110329__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var comp = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(payload)], null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(comp,type__$1,false);
}));

electron.listener.safe_api_call("graphUnlinked",(function (data){
var repo = cljs_bean.core.__GT_clj(data);
return frontend.handler.repo.remove_repo_BANG_(repo);
}));

electron.listener.safe_api_call("rebuildSearchIndice",(function (_data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Rebuild search indices"], 0));

return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

electron.listener.safe_api_call("setGitUsernameAndEmail",(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-git-username-and-email","modal/set-git-username-and-email",-1189789991)], null));
}));

electron.listener.safe_api_call("setCurrentGraph",(function (){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var graph = temp__5804__auto__;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setCurrentGraph","setCurrentGraph",391110974),graph], 0));
} else {
return null;
}
}));

electron.listener.safe_api_call("redirect",(function (data){
var map__110330 = cljs_bean.core.__GT_clj(data);
var map__110330__$1 = cljs.core.__destructure_map(map__110330);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110330__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var payload__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(payload,new cljs.core.Keyword(null,"to","to",192099007),cljs.core.keyword);
return frontend.handler.route.redirect_BANG_(payload__$1);
}));

electron.listener.safe_api_call("redirectWhenExists",(function (data){
var map__110331 = cljs_bean.core.__GT_clj(data);
var map__110331__$1 = cljs.core.__destructure_map(map__110331);
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110331__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110331__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110331__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(page_name)){
var db_page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name);
var whiteboard_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(db_page_name);
if(cljs.core.truth_(whiteboard_QMARK_)){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null));
} else {
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(db_page_name);
}
} else {
if(cljs.core.truth_(block_id)){
var temp__5802__auto__ = frontend.db.model.get_block_by_uuid(block_id);
if(cljs.core.truth_(temp__5802__auto__)){
var block = temp__5802__auto__;
if(logseq.graph_parser.whiteboard.shape_block_QMARK_(block)){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null));
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
}
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Open link failed. Block-id `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id),"` doesn't exist in the graph."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
} else {
if(cljs.core.truth_(file)){
var temp__5802__auto__ = frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2(file,false);
if(cljs.core.truth_(temp__5802__auto__)){
var db_page_name = temp__5802__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(db_page_name);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Open link failed. File `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"` doesn't exist in the graph."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
} else {
return null;
}
}
}
}));

electron.listener.safe_api_call("dbsync",(function (data){
var map__110332 = cljs_bean.core.__GT_clj(data);
var map__110332__$1 = cljs.core.__destructure_map(map__110332);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110332__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110332__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_data__$1 = (function (){var G__110333 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tx_data);
return (frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1(G__110333) : frontend.db.string__GT_db.call(null,G__110333));
})();
var temp__5804__auto___110335 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(graph,false) : frontend.db.get_db.call(null,graph,false));
if(cljs.core.truth_(temp__5804__auto___110335)){
var conn_110336 = temp__5804__auto___110335;
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn_110336,tx_data__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dbsync?","dbsync?",931937939),true], null));
} else {
}

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

electron.listener.safe_api_call("persistGraph",(function (data){
var repo = cljs_bean.core.__GT_clj(data);
var before_f = (function (){
return frontend.ui.notify_graph_persist_BANG_();
});
var after_f = (function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["broadcastPersistGraphDone"], 0));
});
var error_f = (function (){
after_f();

return frontend.ui.notify_graph_persist_error_BANG_();
});
var handlers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"before","before",-1633692388),before_f,new cljs.core.Keyword(null,"on-success","on-success",1786904109),after_f,new cljs.core.Keyword(null,"on-error","on-error",1728533530),error_f], null);
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(repo,handlers);
}));

electron.listener.safe_api_call("foundInPage",(function (data){
var data_SINGLEQUOTE_ = cljs_bean.core.__GT_clj(data);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"matches","matches",635497998)], null),data_SINGLEQUOTE_);

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(document.getElementById("search-in-page-input"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visibility","visibility",1338380893)], 0));

dommy.core.set_text_BANG_(document.getElementById("search-in-page-placeholder"),"");

return frontend.ui.focus_element("search-in-page-input");
}));

electron.listener.safe_api_call("loginCallback",(function (code){
return frontend.handler.user.login_callback(code);
}));

electron.listener.safe_api_call("quickCapture",(function (args){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","quick-capture","editor/quick-capture",799865811),args], null));
}));

electron.listener.safe_api_call("openNewWindowOfGraph",(function (repo){
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
}));

electron.listener.safe_api_call("invokeLogseqAPI",(function (data){
var sync_id = data.syncId;
var method = data.method;
var args = data.args;
var ret_fn_BANG_ = (function (p1__110325_SHARP_){
return electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("electron.server","sync!","electron.server/sync!",749164490)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sync_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__110325_SHARP_], 0));
});
try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["invokeLogseqAPI:",method], 0));

var apis = (window.logseq["api"]);
if(cljs.core.truth_((apis[method]))){
} else {
throw (new Error(["MethodNotExist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join('')));
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,apis,method,args)),(function (p1__110326_SHARP_){
return ret_fn_BANG_(p1__110326_SHARP_);
})),(function (p1__110327_SHARP_){
return ret_fn_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__110327_SHARP_], null));
}));
}catch (e110334){if((e110334 instanceof Error)){
var e = e110334;
return ret_fn_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
} else {
throw e110334;

}
}}));

electron.listener.safe_api_call("syncAPIServerState",(function (data){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","server","electron/server",1484164422),cljs_bean.core.__GT_clj(data));
}));

return electron.listener.safe_api_call("handbook",(function (data){
var temp__5804__auto__ = (function (){var and__5041__auto__ = data;
if(cljs.core.truth_(and__5041__auto__)){
return data.key;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var k = temp__5804__auto__;
return frontend.state.open_handbook_pane_BANG_(k);
} else {
return null;
}
}));
});
electron.listener.listen_BANG_ = (function electron$listener$listen_BANG_(){
electron.listener.listen_to_electron_BANG_();

return electron.listener.listen_persistent_dbs_BANG_();
});

//# sourceMappingURL=electron.listener.js.map
