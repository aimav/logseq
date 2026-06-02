goog.provide('frontend.handler.plugin_config');
/**
 * Full path to plugins.edn
 */
frontend.handler.plugin_config.plugin_config_path = (function frontend$handler$plugin_config$plugin_config_path(){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.global_config.global_config_dir(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["plugins.edn"], 0));
});
/**
 * Vec of plugin keys to store in plugins.edn and to compare with installed-plugins state
 */
frontend.handler.plugin_config.common_plugin_keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(frontend.schema.handler.plugin_config.Plugin));
/**
 * Adds or updates a plugin from plugin.edn
 */
frontend.handler.plugin_config.add_or_update_plugin = (function frontend$handler$plugin_config$add_or_update_plugin(p__109051){
var map__109052 = p__109051;
var map__109052__$1 = cljs.core.__destructure_map(map__109052);
var plugin = map__109052__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109052__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,frontend.handler.plugin_config.plugin_config_path()),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(borkdude.rewrite_edn.assoc(borkdude.rewrite_edn.parse_string(content),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),cljs.core.select_keys(plugin,frontend.handler.plugin_config.common_plugin_keys))),(function (updated_content){
return promesa.protocols._promise(frontend.fs.write_file_BANG_("",null,frontend.handler.plugin_config.plugin_config_path(),updated_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)));
}));
}));
}));
});
/**
 * Removes a plugin from plugin.edn
 */
frontend.handler.plugin_config.remove_plugin = (function frontend$handler$plugin_config$remove_plugin(plugin_id){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",frontend.handler.plugin_config.plugin_config_path()),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(borkdude.rewrite_edn.dissoc(borkdude.rewrite_edn.parse_string(content),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(plugin_id))),(function (updated_content){
return promesa.protocols._promise(frontend.fs.write_file_BANG_("",null,frontend.handler.plugin_config.plugin_config_path(),updated_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)));
}));
}));
}));
});
frontend.handler.plugin_config.create_plugin_config_file_if_not_exists = (function frontend$handler$plugin_config$create_plugin_config_file_if_not_exists(){
var content = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__109054_109074 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__109055_109075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__109056_109076 = true;
var _STAR_print_fn_STAR__temp_val__109057_109077 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__109056_109076);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__109057_109077);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.update_vals(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),(function (p1__109053_SHARP_){
return cljs.core.select_keys(p1__109053_SHARP_,frontend.handler.plugin_config.common_plugin_keys);
})));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__109055_109075);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__109054_109074);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4("",null,frontend.handler.plugin_config.plugin_config_path(),content);
});
/**
 * Given installed plugins state and plugins from plugins.edn,
 * returns map of plugins to install and uninstall
 */
frontend.handler.plugin_config.determine_plugins_to_change = (function frontend$handler$plugin_config$determine_plugins_to_change(installed_plugins,edn_plugins){
var installed_plugins_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109058_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(p1__109058_SHARP_,frontend.handler.plugin_config.common_plugin_keys),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__109058_SHARP_)));
}),cljs.core.vals(installed_plugins)));
var edn_plugins_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109060){
var vec__109061 = p__109060;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109061,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"id","id",-1388402092),k);
}),edn_plugins));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(installed_plugins_set,edn_plugins_set)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"install","install",-655751038),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109059_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__109059_SHARP_,new cljs.core.Keyword(null,"plugin-action","plugin-action",2020834682),"install");
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(edn_plugins_set,installed_plugins_set)),new cljs.core.Keyword(null,"uninstall","uninstall",-284438062),cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(installed_plugins_set,edn_plugins_set))], null);
}
});
frontend.handler.plugin_config.open_replace_plugins_modal = (function frontend$handler$plugin_config$open_replace_plugins_modal(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,frontend.handler.plugin_config.plugin_config_path()),(function (edn_plugins_STAR_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(edn_plugins_STAR_),(function (edn_plugins){
return promesa.protocols._promise((function (){var temp__5802__auto__ = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(frontend.schema.handler.plugin_config.Plugins_edn,edn_plugins));
if(cljs.core.truth_(temp__5802__auto__)){
var errors = temp__5802__auto__;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Invalid plugins.edn provided. See javascript console for specific errors",new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin-edn-errors","plugin-edn-errors",-699885047),errors,new cljs.core.Keyword(null,"line","line",212345235),86], null)),null);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid plugins.edn, errors: ",errors], 0));
} else {
var plugins_to_change = frontend.handler.plugin_config.determine_plugins_to_change(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),edn_plugins);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-from-file","go/plugins-from-file",-231716743),plugins_to_change], null));
}
})());
}));
}));
})),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Malformed plugins.edn provided. Please check the file has correct edn syntax.",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unexpected-error","unexpected-error",1973845951),e,new cljs.core.Keyword(null,"line","line",212345235),96], null)),null);
}
}));
});
/**
 * Replaces current plugins given plugins to install and uninstall
 */
frontend.handler.plugin_config.replace_plugins = (function frontend$handler$plugin_config$replace_plugins(plugins){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uninstall-plugins","uninstall-plugins",-167708943),new cljs.core.Keyword(null,"uninstall","uninstall",-284438062).cljs$core$IFn$_invoke$arity$1(plugins),new cljs.core.Keyword(null,"line","line",212345235),101], null)),null);

var seq__109064_109078 = cljs.core.seq(new cljs.core.Keyword(null,"uninstall","uninstall",-284438062).cljs$core$IFn$_invoke$arity$1(plugins));
var chunk__109065_109079 = null;
var count__109066_109080 = (0);
var i__109067_109081 = (0);
while(true){
if((i__109067_109081 < count__109066_109080)){
var plugin_109082 = chunk__109065_109079.cljs$core$IIndexed$_nth$arity$2(null,i__109067_109081);
frontend.handler.common.plugin.unregister_plugin(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin_109082)));


var G__109083 = seq__109064_109078;
var G__109084 = chunk__109065_109079;
var G__109085 = count__109066_109080;
var G__109086 = (i__109067_109081 + (1));
seq__109064_109078 = G__109083;
chunk__109065_109079 = G__109084;
count__109066_109080 = G__109085;
i__109067_109081 = G__109086;
continue;
} else {
var temp__5804__auto___109087 = cljs.core.seq(seq__109064_109078);
if(temp__5804__auto___109087){
var seq__109064_109088__$1 = temp__5804__auto___109087;
if(cljs.core.chunked_seq_QMARK_(seq__109064_109088__$1)){
var c__5565__auto___109089 = cljs.core.chunk_first(seq__109064_109088__$1);
var G__109090 = cljs.core.chunk_rest(seq__109064_109088__$1);
var G__109091 = c__5565__auto___109089;
var G__109092 = cljs.core.count(c__5565__auto___109089);
var G__109093 = (0);
seq__109064_109078 = G__109090;
chunk__109065_109079 = G__109091;
count__109066_109080 = G__109092;
i__109067_109081 = G__109093;
continue;
} else {
var plugin_109094 = cljs.core.first(seq__109064_109088__$1);
frontend.handler.common.plugin.unregister_plugin(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin_109094)));


var G__109095 = cljs.core.next(seq__109064_109088__$1);
var G__109096 = null;
var G__109097 = (0);
var G__109098 = (0);
seq__109064_109078 = G__109095;
chunk__109065_109079 = G__109096;
count__109066_109080 = G__109097;
i__109067_109081 = G__109098;
continue;
}
} else {
}
}
break;
}

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin-config",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"install-plugins","install-plugins",-1876490807),new cljs.core.Keyword(null,"install","install",-655751038).cljs$core$IFn$_invoke$arity$1(plugins),new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);

var seq__109068 = cljs.core.seq(new cljs.core.Keyword(null,"install","install",-655751038).cljs$core$IFn$_invoke$arity$1(plugins));
var chunk__109069 = null;
var count__109070 = (0);
var i__109071 = (0);
while(true){
if((i__109071 < count__109070)){
var plugin = chunk__109069.cljs$core$IIndexed$_nth$arity$2(null,i__109071);
frontend.handler.common.plugin.install_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin))));


var G__109099 = seq__109068;
var G__109100 = chunk__109069;
var G__109101 = count__109070;
var G__109102 = (i__109071 + (1));
seq__109068 = G__109099;
chunk__109069 = G__109100;
count__109070 = G__109101;
i__109071 = G__109102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__109068);
if(temp__5804__auto__){
var seq__109068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109068__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__109068__$1);
var G__109103 = cljs.core.chunk_rest(seq__109068__$1);
var G__109104 = c__5565__auto__;
var G__109105 = cljs.core.count(c__5565__auto__);
var G__109106 = (0);
seq__109068 = G__109103;
chunk__109069 = G__109104;
count__109070 = G__109105;
i__109071 = G__109106;
continue;
} else {
var plugin = cljs.core.first(seq__109068__$1);
frontend.handler.common.plugin.install_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin))));


var G__109107 = cljs.core.next(seq__109068__$1);
var G__109108 = null;
var G__109109 = (0);
var G__109110 = (0);
seq__109068 = G__109107;
chunk__109069 = G__109108;
count__109070 = G__109109;
i__109071 = G__109110;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Sets up a listener for the lsp-installed event to update plugins.edn
 */
frontend.handler.plugin_config.setup_install_listener_BANG_ = (function frontend$handler$plugin_config$setup_install_listener_BANG_(){
var listener = (function frontend$handler$plugin_config$setup_install_listener_BANG__$_listener(_,e){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(e);
if(cljs.core.truth_(temp__5804__auto__)){
var map__109072 = temp__5804__auto__;
var map__109072__$1 = cljs.core.__destructure_map(map__109072);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109072__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109072__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var only_check = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109072__$1,new cljs.core.Keyword(null,"only-check","only-check",-1961506795));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"completed")) && (cljs.core.not(only_check)))){
var map__109073 = payload;
var map__109073__$1 = cljs.core.__destructure_map(map__109073);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109073__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var effect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109073__$1,new cljs.core.Keyword(null,"effect","effect",347343289));
return frontend.handler.plugin_config.add_or_update_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(payload,new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"installed-version","installed-version",-802921561).cljs$core$IFn$_invoke$arity$1(payload),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effect","effect",347343289),cljs.core.boolean$(effect),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.boolean$(theme)], 0)));
} else {
return null;
}
} else {
return null;
}
});
return window.apis.addListener(cljs.core.name(new cljs.core.Keyword(null,"lsp-updates","lsp-updates",1924425351)),listener);
});
/**
 * This component has just one responsibility on start, to create a plugins.edn
 *   if none exists
 */
frontend.handler.plugin_config.start = (function frontend$handler$plugin_config$start(){
return frontend.handler.plugin_config.create_plugin_config_file_if_not_exists();
});

//# sourceMappingURL=frontend.handler.plugin_config.js.map
