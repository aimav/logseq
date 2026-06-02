goog.provide('frontend.components.theme');
frontend.components.theme.scrollbar_measure = rum.core.lazy_build(rum.core.build_defc,(function (){
var _STAR_el = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = rum.core.deref(_STAR_el);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var w = (el.offsetWidth - el.clientWidth);
var c = "custom-scrollbar";
var l = document.documentElement.classList;
if(((cljs.core.not(frontend.util.mac_QMARK_)) || ((w > (2))))){
return l.add(c);
} else {
return l.remove(c);
}
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'ref':_STAR_el,'className':"fixed w-16 h-16 overflow-scroll opacity-0 top-1/2 -left-1/2 z-[-999]"},[]);
}),null,"frontend.components.theme/scrollbar-measure");
frontend.components.theme.container = rum.core.lazy_build(rum.core.build_defc,(function (p__119496,child){
var map__119497 = p__119496;
var map__119497__$1 = cljs.core.__destructure_map(map__119497);
var system_theme_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"system-theme?","system-theme?",1330394234));
var settings_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651));
var sidebar_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467));
var onboarding_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"onboarding-state","onboarding-state",2059697923));
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var sidebar_blocks_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"sidebar-blocks-len","sidebar-blocks-len",235708585));
var accent_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"accent-color","accent-color",908336425));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"route","route",329891309));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var preferred_language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017));
var nfs_granted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119497__$1,new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328));
var mounted_fn = frontend.rum.use_mounted();
var vec__119498 = rum.core.use_state(false);
var restored_sidebar_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119498,(0),null);
var set_restored_sidebar_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119498,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var doc = document.documentElement;
var cls = doc.classList;
var cls_body = document.body.classList;
doc.setAttribute("data-theme",theme);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark")){
cls.add("dark");

var G__119501_119504 = cls_body;
G__119501_119504.remove("white-theme","light-theme");

G__119501_119504.add("dark-theme");

} else {
cls.remove("dark");

var G__119502_119505 = cls_body;
G__119502_119505.remove("dark-theme");

G__119502_119505.add("white-theme","light-theme");

}

frontend.ui.apply_custom_theme_effect_BANG_(theme);

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme-mode-changed","theme-mode-changed",-761875935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),theme], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__119503 = document.documentElement;
if((G__119503 == null)){
return null;
} else {
return G__119503.setAttribute("data-color",(function (){var or__5043__auto__ = accent_color;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "logseq";
}
})());
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [accent_color], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
var doc = document.documentElement;
return doc.setAttribute("lang",preferred_language);
}));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return setTimeout((function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["theme-loaded"], 0));
}),(100));
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = restored_sidebar_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return mounted_fn();
} else {
return and__5041__auto__;
}
})())){
frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sidebar-visible-changed","sidebar-visible-changed",946926799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),sidebar_open_QMARK_], null));

return frontend.handler.ui.persist_right_sidebar_state_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar_open_QMARK_,restored_sidebar_QMARK_,sidebar_blocks_len], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
frontend.handler.plugin.setup_install_listener_BANG_();

frontend.handler.plugin_config.setup_install_listener_BANG_();

frontend.handler.plugin.load_plugin_preferences();

return (function (){
return window.apis.removeAllListeners(cljs.core.name(new cljs.core.Keyword(null,"lsp-updates","lsp-updates",1924425351)));
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
frontend.handler.ui.reset_custom_css_BANG_();

frontend.extensions.pdf.core.reset_current_pdf_BANG_();

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-graph-changed","current-graph-changed",1449126454),cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var db_restored_QMARK_ = db_restoring_QMARK_ === false;
if(cljs.core.truth_(db_restoring_QMARK_)){
return frontend.util.set_title_BANG_(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189)], 0)));
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = nfs_granted_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return db_restored_QMARK_;
}
})())){
return frontend.handler.route.update_page_title_BANG_(route);
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nfs_granted_QMARK_,db_restoring_QMARK_,route], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(db_restoring_QMARK_)){
return null;
} else {
var repos = frontend.state.get_repos();
if(cljs.core.not((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(repos));
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword(null,"example?","example?",-1695437732).cljs$core$IFn$_invoke$arity$1(cljs.core.first(repos));
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(frontend.util.mobile_QMARK_());
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((frontend.config.publishing_QMARK_) || (cljs.core.seq(repos)));
}
})())){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"repo-add","repo-add",458734484)], null));
} else {
frontend.handler.ui.restore_right_sidebar_state_BANG_();

return (set_restored_sidebar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_restored_sidebar_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_restored_sidebar_QMARK_.call(null,true));
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_restoring_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(system_theme_QMARK_)){
return frontend.ui.setup_system_theme_effect_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [system_theme_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(settings_open_QMARK_)?(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-modal","div.settings-modal",666226730),frontend.components.settings.settings(settings_open_QMARK_)], null);
}):null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [settings_open_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.storage.set(new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833),onboarding_state);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [onboarding_state], null));

return daiquiri.core.create_element("div",{'onClick':on_click,'className':"theme-container"},[daiquiri.interpreter.interpret(child),frontend.extensions.pdf.core.default_embed_playground(),frontend.components.theme.scrollbar_measure()]);
}),null,"frontend.components.theme/container");

//# sourceMappingURL=frontend.components.theme.js.map
