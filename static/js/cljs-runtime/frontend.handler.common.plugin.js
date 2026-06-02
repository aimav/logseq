goog.provide('frontend.handler.common.plugin');
/**
 * For the given plugin id, returns boolean indicating if it is installed
 */
frontend.handler.common.plugin.installed_QMARK_ = (function frontend$handler$common$plugin$installed_QMARK_(id){
var and__5041__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id));
if(and__5041__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"iir","iir",-231680811)], null));
} else {
return and__5041__auto__;
}
});
/**
 * Installs plugin given plugin map with id
 */
frontend.handler.common.plugin.install_marketplace_plugin = (function frontend$handler$common$plugin$install_marketplace_plugin(p__101161){
var map__101162 = p__101161;
var map__101162__$1 = cljs.core.__destructure_map(map__101162);
var mft = map__101162__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.common.plugin.installed_QMARK_(id);
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),mft);

electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"installMarketPlugin","installMarketPlugin",842572313),mft], 0));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(id) : resolve.call(null,id));
}));
}
});
/**
 * Unregister and uninstall plugin given plugin id
 */
frontend.handler.common.plugin.unregister_plugin = (function frontend$handler$common$plugin$unregister_plugin(id){
return LSPluginCore.unregister(id);
});

//# sourceMappingURL=frontend.handler.common.plugin.js.map
