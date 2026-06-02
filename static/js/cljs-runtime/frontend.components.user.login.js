goog.provide('frontend.components.user.login');

frontend.components.user.login.sign_out_BANG_ = (function frontend$components$user$login$sign_out_BANG_(){
try{return LSAmplify.Auth.signOut();
}catch (e117546){var e = e117546;
return console.warn(e);
}});
frontend.components.user.login.setup_configure_BANG_ = (function frontend$components$user$login$setup_configure_BANG_(){
frontend.components.user.login.setupAuthConfigure_BANG_ = LSAmplify.setupAuthConfigure;

frontend.components.user.login.LSAuthenticator = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(LSAmplify.LSAuthenticator);

LSAmplify.I18n.setLanguage((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "en";
}
})());

var G__117547 = ({"region": frontend.config.REGION, "userPoolId": frontend.config.USER_POOL_ID, "userPoolWebClientId": frontend.config.COGNITO_CLIENT_ID, "identityPoolId": frontend.config.IDENTITY_POOL_ID, "oauthDomain": frontend.config.OAUTH_DOMAIN});
return (frontend.components.user.login.setupAuthConfigure_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.components.user.login.setupAuthConfigure_BANG_.cljs$core$IFn$_invoke$arity$1(G__117547) : frontend.components.user.login.setupAuthConfigure_BANG_.call(null,G__117547));
});
frontend.components.user.login.user_pane = rum.core.lazy_build(rum.core.build_defc,(function (_sign_out_BANG_,user){
var session = new cljs.core.Keyword(null,"signInUserSession","signInUserSession",1238093414).cljs$core$IFn$_invoke$arity$1(user);
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(session)){
frontend.handler.user.login_callback(session);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Hi, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)," :)"].join(''),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.state.close_modal_BANG_();
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return null;
}),null,"frontend.components.user.login/user-pane");
frontend.components.user.login.page_impl = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__117548 = rum.core.use_state(false);
var ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117548,(0),null);
var set_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117548,(1),null);
var _STAR_ref_el = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
frontend.components.user.login.setup_configure_BANG_();

(set_ready_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_ready_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_QMARK_.call(null,true));

var temp__5804__auto__ = rum.core.deref(_STAR_ref_el);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return setTimeout((function (){
var G__117551 = el.querySelector("input[name=username]");
if((G__117551 == null)){
return null;
} else {
return G__117551.focus();
}
}),(100));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'ref':_STAR_ref_el,'className':"cp__user-login"},[(cljs.core.truth_(ready_QMARK_)?daiquiri.interpreter.interpret((function (){var G__117555 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termsLink","termsLink",-238784098),"https://blog.logseq.com/terms/"], null);
var G__117556 = (function (op){
var sign_out_BANG_ = op.signOut;
var user_proxy = op.user;
var user = (function (){try{return JSON.parse(JSON.stringify(user_proxy));
}catch (e117557){if((e117557 instanceof Error)){
var e = e117557;
return console.error("Error: Amplify user payload:",e);
} else {
throw e117557;

}
}})();
var user_SINGLEQUOTE_ = cljs_bean.core.__GT_clj(user);
return frontend.components.user.login.user_pane(sign_out_BANG_,user_SINGLEQUOTE_);
});
return (frontend.components.user.login.LSAuthenticator.cljs$core$IFn$_invoke$arity$2 ? frontend.components.user.login.LSAuthenticator.cljs$core$IFn$_invoke$arity$2(G__117555,G__117556) : frontend.components.user.login.LSAuthenticator.call(null,G__117555,G__117556));
})()):null)]);
}),null,"frontend.components.user.login/page-impl");
frontend.components.user.login.page = rum.core.lazy_build(rum.core.build_defcs,(function (_state){
return frontend.components.user.login.page_impl();
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.disable_all_shortcuts], null),"frontend.components.user.login/page");
frontend.components.user.login.open_login_modal_BANG_ = (function frontend$components$user$login$open_login_modal_BANG_(){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close){
return frontend.components.user.login.page();
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),true,new cljs.core.Keyword(null,"label","label",1718410804),"user-login",new cljs.core.Keyword(null,"close-backdrop?","close-backdrop?",2081649802),false,new cljs.core.Keyword(null,"center?","center?",-323116631),false], null));
});

//# sourceMappingURL=frontend.components.user.login.js.map
