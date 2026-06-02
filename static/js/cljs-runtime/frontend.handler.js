goog.provide('frontend.handler');
goog.scope(function(){
  frontend.handler.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.set_global_error_notification_BANG_ = (function frontend$handler$set_global_error_notification_BANG_(){
return (window.onerror = (function (message,_source,_lineno,_colno,error){
if(frontend.error.ignored_QMARK_(message)){
return null;
} else {
console.error(message);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),53], null)),error);
}
}));
});
frontend.handler.watch_for_date_BANG_ = (function frontend$handler$watch_for_date_BANG_(){
var f = (function (){
var repo = frontend.state.get_current_repo();
if(((cljs.core.not(frontend.state.nfs_refreshing_QMARK_())) && ((!(cljs.core.contains_QMARK_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.config.get_repo_dir(repo))))))){
return frontend.handler.page.create_today_journal_BANG_();
} else {
return null;
}
});
f();

return setInterval(f,(5000));
});
frontend.handler.instrument_BANG_ = (function frontend$handler$instrument_BANG_(){
var total = frontend.extensions.srs.get_srs_cards_total();
return frontend.state.set_state_BANG_(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),total);
});
frontend.handler.restore_and_setup_BANG_ = (function frontend$handler$restore_and_setup_BANG_(repos){
var temp__5804__auto__ = (function (){var or__5043__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(repos));
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.db.restore_BANG_(repo),(function (){
frontend.handler.ui.add_style_if_exists_BANG_();

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo_config.start(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null)),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?frontend.handler.global_config.start(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null)):null),(function (___37148__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(frontend.config.plugin_config_enabled_QMARK_())?frontend.handler.plugin_config.start():null));
}));
}));
})),(function (){
(frontend.modules.shortcut.core.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.modules.shortcut.core.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.modules.shortcut.core.refresh_BANG_.call(null));

if(((cljs.core.not(cljs.core.seq((frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(frontend.config.local_repo) : frontend.db.get_files.call(null,frontend.config.local_repo))))) && (((cljs.core.not(cljs.core.some(frontend.config.local_db_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),repos)))) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))))){
return frontend.handler.repo.setup_local_repo_if_not_exists_BANG_();
} else {
return frontend.state.set_db_restoring_BANG_(false);

}
}));
})),(function (){
console.log("db restored, setting up repo hooks");

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","nfs-ask-permission","modal/nfs-ask-permission",-1078859519)], null));

frontend.handler.page.init_commands_BANG_();

frontend.handler.watch_for_date_BANG_();

frontend.handler.file.watch_for_current_graph_dir_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","restored","graph/restored",1296384092),frontend.state.get_current_repo()], null));
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),121], null)),error);
}));
} else {
return null;
}
});
frontend.handler.handle_connection_change = (function frontend$handler$handle_connection_change(e){
var online_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.goog$module$goog$object.get(e,"type"),"online");
return frontend.state.set_online_BANG_(online_QMARK_);
});
frontend.handler.set_network_watcher_BANG_ = (function frontend$handler$set_network_watcher_BANG_(){
window.addEventListener("online",frontend.handler.handle_connection_change);

return window.addEventListener("offline",frontend.handler.handle_connection_change);
});
/**
 * Enables datalog console in browser provided by https://github.com/homebaseio/datalog-console
 */
frontend.handler.enable_datalog_console = (function frontend$handler$enable_datalog_console(){
document.documentElement.setAttribute("__datalog-console-remote-installed__",true);

return window.addEventListener("message",(function (event){
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var temp__5804__auto__ = frontend.handler.goog$module$goog$object.getValueByKeys(event,"data",":datalog-console.client/devtool-message");
if(cljs.core.truth_(temp__5804__auto__)){
var devtool_message = temp__5804__auto__;
var msg_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(devtool_message));
var G__118245 = msg_type;
var G__118245__$1 = (((G__118245 instanceof cljs.core.Keyword))?G__118245.fqn:null);
switch (G__118245__$1) {
case "datalog-console.client/request-whole-database-as-string":
return window.postMessage(({":datalog-console.remote/remote-message": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0))}),"*");

break;
default:
return null;

}
} else {
return null;
}
}));
});
frontend.handler.clear_cache_BANG_ = (function frontend$handler$clear_cache_BANG_(){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Clearing...",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clearCache"], 0)):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.clear_local_storage_and_idb_BANG_(),(function (___$1){
return promesa.protocols._promise(setTimeout((function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reloadWindowPage","reloadWindowPage",-363535123)], 0));
} else {
return window.location.reload();
}
}),(2000)));
}));
}));
}));
});
frontend.handler.get_repos = (function frontend$handler$get_repos(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.get_all_graphs(),(function (nfs_dbs){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.some((function (p1__118246_SHARP_){
return ((clojure.string.includes_QMARK_(p1__118246_SHARP_," ")) || (clojure.string.includes_QMARK_(p1__118246_SHARP_,"logseq_local_/")));
}),nfs_dbs);
} else {
return and__5041__auto__;
}
})())?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DB version is not compatible, please clear cache then re-add your graph back.",frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","clear-cache","settings-page/clear-cache",-1602321055)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.clear_cache_BANG_], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032),false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),frontend.config.local_repo,new cljs.core.Keyword(null,"example?","example?",-1695437732),true], null);
})()
:((cljs.core.seq(nfs_dbs))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),db,new cljs.core.Keyword(null,"nfs?","nfs?",-544337673),true], null);
}),nfs_dbs):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),frontend.config.local_repo,new cljs.core.Keyword(null,"example?","example?",-1695437732),true], null)], null)
)));
}));
}));
});
frontend.handler.register_components_fns_BANG_ = (function frontend$handler$register_components_fns_BANG_(){
frontend.state.set_page_blocks_cp_BANG_(frontend.components.page.page_blocks_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","linked-references","block/linked-references",-2022711478),frontend.components.reference.block_linked_references);

frontend.state.set_component_BANG_(new cljs.core.Keyword("whiteboard","tldraw-preview","whiteboard/tldraw-preview",663400157),frontend.components.whiteboard.tldraw_preview);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","single-block","block/single-block",-1166935635),frontend.components.block.single_block_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","container","block/container",510671002),frontend.components.block.block_container);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","embed","block/embed",148991792),frontend.components.block.block_embed);

frontend.state.set_component_BANG_(new cljs.core.Keyword("editor","box","editor/box",-1921770435),frontend.components.editor.box);

return frontend.handler.command_palette.register_global_shortcut_commands();
});
cljs.core.reset_BANG_(frontend.db._STAR_db_listener,frontend.modules.outliner.datascript.after_transact_pipelines);
frontend.handler.start_BANG_ = (function frontend$handler$start_BANG_(render){
frontend.handler.set_global_error_notification_BANG_();

(window.onhashchange = (function (){
return frontend.state.hide_custom_context_menu_BANG_();
}));

frontend.handler.register_components_fns_BANG_();

frontend.handler.user.restore_tokens_from_localstorage();

frontend.state.set_db_restoring_BANG_(true);

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.listener.listen_BANG_();
} else {
}

(render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));

frontend.context.i18n.start();

frontend.modules.instrumentation.core.init();

frontend.state.set_online_BANG_(navigator.onLine);

frontend.handler.set_network_watcher_BANG_();

frontend.util.indexeddb_check_QMARK_((function (_error){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Sorry, it seems that your browser doesn't support IndexedDB, we recommend to use latest Chrome(Chromium) or Firefox(Non-private mode).",new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_indexedb_support_BANG_(false);
}));

frontend.idb.start();

frontend.db.react.run_custom_queries_when_idle_BANG_();

frontend.handler.events.run_BANG_();

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?frontend.mobile.core.mobile_preinit():null),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.get_repos(),(function (repos){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_repos_BANG_(repos),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.hide_splash(),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.restore_and_setup_BANG_(repos),(function (___$2){
return promesa.protocols._promise((cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?frontend.state.restore_mobile_theme_BANG_():null));
}));
}));
}));
}));
})),(function (e){
return console.error("Error while restoring repos: ",e);
})),(function (){
return frontend.state.set_db_restoring_BANG_(false);
})),(function (___37148__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.run_batch_txs_BANG_(),(function (___37148__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.file._LT_ratelimit_file_writes_BANG_(),(function (___37148__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util._LT_app_wake_up_from_sleep_loop(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false)),(function (___37148__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.config.dev_QMARK_)?frontend.handler.enable_datalog_console():null),(function (___37148__auto____$5){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.persist_var.load_vars(),(function (___37148__auto____$6){
return promesa.protocols._promise(setTimeout(frontend.handler.instrument_BANG_,((60) * (1000))));
}));
}));
}));
}));
}));
}));
}));
}));
});
frontend.handler.stop_BANG_ = (function frontend$handler$stop_BANG_(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop!"], 0));
});
frontend.handler.quit_and_install_new_version_BANG_ = (function frontend$handler$quit_and_install_new_version_BANG_(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.listener.persist_dbs_BANG_(),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic("set-quit-dirty-state",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),(function (___$1){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"quitAndInstall","quitAndInstall",-856751624)], 0)));
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.js.map
