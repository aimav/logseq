goog.provide('frontend.components.page_menu');
frontend.components.page_menu.delete_page_BANG_ = (function frontend$components$page_menu$delete_page_BANG_(page_name){
frontend.handler.page.delete_BANG_(page_name,(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)," was deleted successfully!"].join(''),new cljs.core.Keyword(null,"success","success",1890645906));
}));

frontend.state.close_modal_BANG_();

return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
});
frontend.components.page_menu.delete_page_dialog = (function frontend$components$page_menu$delete_page_dialog(page_name){
return (function (close_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.items-center","div.sm:flex.items-center",1228718030),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10",434929029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-error.text-xl","span.text-error.text-xl",-1341009425),frontend.ui.icon("alert-triangle")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.text-lg.leading-6.font-medium","h3#modal-headline.text-lg.leading-6.font-medium",365314317),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete-confirmation","page/delete-confirmation",-1967752819)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.sm:mt-4.flex.gap-4","div.mt-5.sm:mt-4.flex.gap-4",427953357),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null)], 0)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.page_menu.delete_page_BANG_(page_name);
}),new cljs.core.Keyword(null,"button-props","button-props",-392655929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),"on"], null)], null)], 0))], null)], null);
});
});
frontend.components.page_menu.page_menu = (function frontend$components$page_menu$page_menu(page_name){
var temp__5804__auto__ = (function (){var or__5043__auto__ = page_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.state.get_current_whiteboard();
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_name__$1 = temp__5804__auto__;
var page_name__$2 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.util.page_name_sanity_lc.call(null,page_name__$1));
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var page = (function (){var G__114188 = repo;
var G__114189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$2], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__114188,G__114189) : frontend.db.entity.call(null,G__114188,G__114189));
})();
var page_original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var whiteboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page));
var block_QMARK_ = (function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
return ((frontend.util.uuid_string_QMARK_(page_name__$2)) && ((!(whiteboard_QMARK_))));
} else {
return and__5041__auto__;
}
})();
var contents_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$2,"contents");
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page);
var public_QMARK_ = new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(properties) === true;
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
var favorited_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,favorites)),page_name__$2);
var developer_mode_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var file_rpath = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$1(page_name__$2):null);
var _ = frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var file_sync_graph_uuid = (function (){var and__5041__auto__ = frontend.handler.user.logged_in_QMARK_();
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.handler.file_sync.enable_sync_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = frontend.handler.file_sync.current_graph_sync_on_QMARK_();
if(cljs.core.truth_(and__5041__auto____$2)){
return frontend.handler.file_sync.get_current_graph_uuid();
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(block_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),((favorited_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","add-to-favorites","page/add-to-favorites",-641181093)], 0))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(favorited_QMARK_){
return frontend.handler.page.unfavorite_page_BANG_(page_original_name);
} else {
return frontend.handler.page.favorite_page_BANG_(page_original_name);
}
})], null)], null)),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return file_sync_graph_uuid;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","version-history","page/version-history",-664927562)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(file_sync_graph_uuid)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","pick-page-histories","graph/pick-page-histories",2080848727),file_sync_graph_uuid,page_name__$2], null));
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.handler.shell.get_file_latest_git_log(page,(100));
} else {
return null;

}
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"cp__btn_history_version"], null)], null):null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","copy-page-url","page/copy-page-url",-1474029803)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.copy_page_url.cljs$core$IFn$_invoke$arity$1(page_original_name);
})], null)], null):null),((((contents_QMARK_) || (frontend.config.publishing_QMARK_)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete","page/delete",-1774686917)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page_menu.delete_page_dialog(page_name__$2));
})], null)], null)),(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(frontend.mobile.util.native_platform_QMARK_());
if(and__5041__auto__){
return frontend.state.get_current_page();
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","slide-view","page/slide-view",1144385748)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page-slide-view","page-slide-view",1234456322));
})], null)], null):null),(cljs.core.truth_(file_rpath)?(function (){var repo_dir = frontend.config.get_repo_dir(repo);
var file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-in-finder","page/open-in-finder",-891703594)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileInFolder",file_fpath], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-with-default-app","page/open-with-default-app",2097221682)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.openPath(file_fpath);
})], null)], null)], null);
})():null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return whiteboard_QMARK_;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-page","export-page",-2087621584)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whiteboard?","whiteboard?",-1968190788),whiteboard_QMARK_], null));
}));
})], null)], null):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((public_QMARK_)?new cljs.core.Keyword("page","make-private","page/make-private",1298627280):new cljs.core.Keyword("page","make-public","page/make-public",1736118164))], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.page.update_public_attribute_BANG_(page_name__$2,((public_QMARK_)?false:true));

return frontend.state.close_modal_BANG_();
})], null)], null):null),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = file_rpath;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(frontend.handler.file_sync.synced_file_graph_QMARK_(repo));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-backup-directory","page/open-backup-directory",-197993503)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileBackupDir",frontend.config.get_local_dir(repo),file_rpath], 0));
})], null)], null):null),(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)?(function (){var iter__5520__auto__ = (function frontend$components$page_menu$page_menu_$_iter__114190(s__114191){
return (new cljs.core.LazySeq(null,(function (){
var s__114191__$1 = s__114191;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__114191__$1);
if(temp__5804__auto____$1){
var s__114191__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__114191__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114191__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114193 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114192 = (0);
while(true){
if((i__114192 < size__5519__auto__)){
var vec__114194 = cljs.core._nth(c__5518__auto__,i__114192);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114194,(0),null);
var map__114197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114194,(1),null);
var map__114197__$1 = cljs.core.__destructure_map(map__114197);
var cmd = map__114197__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114197__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114194,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114194,(3),null);
cljs.core.chunk_append(b__114193,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__114192,vec__114194,___$1,map__114197,map__114197__$1,cmd,label,action,pid,c__5518__auto__,size__5519__auto__,b__114193,s__114191__$2,temp__5804__auto____$1,page_name__$2,repo,page,page_original_name,whiteboard_QMARK_,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_rpath,_,file_sync_graph_uuid,page_name__$1,temp__5804__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"page","page",849072397),page_name__$2),action);
});})(i__114192,vec__114194,___$1,map__114197,map__114197__$1,cmd,label,action,pid,c__5518__auto__,size__5519__auto__,b__114193,s__114191__$2,temp__5804__auto____$1,page_name__$2,repo,page,page_original_name,whiteboard_QMARK_,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_rpath,_,file_sync_graph_uuid,page_name__$1,temp__5804__auto__))
], null)], null));

var G__114204 = (i__114192 + (1));
i__114192 = G__114204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114193),frontend$components$page_menu$page_menu_$_iter__114190(cljs.core.chunk_rest(s__114191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114193),null);
}
} else {
var vec__114198 = cljs.core.first(s__114191__$2);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114198,(0),null);
var map__114201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114198,(1),null);
var map__114201__$1 = cljs.core.__destructure_map(map__114201);
var cmd = map__114201__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114201__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114198,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114198,(3),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__114198,___$1,map__114201,map__114201__$1,cmd,label,action,pid,s__114191__$2,temp__5804__auto____$1,page_name__$2,repo,page,page_original_name,whiteboard_QMARK_,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_rpath,_,file_sync_graph_uuid,page_name__$1,temp__5804__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"page","page",849072397),page_name__$2),action);
});})(vec__114198,___$1,map__114201,map__114201__$1,cmd,label,action,pid,s__114191__$2,temp__5804__auto____$1,page_name__$2,repo,page,page_original_name,whiteboard_QMARK_,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_rpath,_,file_sync_graph_uuid,page_name__$1,temp__5804__auto__))
], null)], null),frontend$components$page_menu$page_menu_$_iter__114190(cljs.core.rest(s__114191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"page-menu-item","page-menu-item",1913872913)));
})():null),(cljs.core.truth_(developer_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("dev","show-page-data","dev/show-page-data",727860802)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.common.developer.show_entity_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], 0));
})], null)], null):null),(cljs.core.truth_(developer_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("dev","show-page-ast","dev/show-page-ast",1834625593)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var page__$1 = (function (){var G__114202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","content","file/content",12680964)], null)], null)], null);
var G__114203 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$2(G__114202,G__114203) : frontend.db.pull.call(null,G__114202,G__114203));
})();
return frontend.handler.common.developer.show_content_ast(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("file","content","file/content",12680964)], null)),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page__$1));
})], null)], null):null)], null)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.page_menu.js.map
