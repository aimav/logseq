goog.provide('frontend.modules.shortcut.core');
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.shortcut !== 'undefined') && (typeof frontend.modules.shortcut.core !== 'undefined') && (typeof frontend.modules.shortcut.core._STAR_installed_handlers !== 'undefined')){
} else {
frontend.modules.shortcut.core._STAR_installed_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.shortcut !== 'undefined') && (typeof frontend.modules.shortcut.core !== 'undefined') && (typeof frontend.modules.shortcut.core._STAR_pending_inited_QMARK_ !== 'undefined')){
} else {
frontend.modules.shortcut.core._STAR_pending_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.shortcut !== 'undefined') && (typeof frontend.modules.shortcut.core !== 'undefined') && (typeof frontend.modules.shortcut.core._STAR_pending_shortcuts !== 'undefined')){
} else {
frontend.modules.shortcut.core._STAR_pending_shortcuts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
frontend.modules.shortcut.core.global_keys = [goog.events.KeyCodes.TAB,goog.events.KeyCodes.ENTER,goog.events.KeyCodes.BACKSPACE,goog.events.KeyCodes.DELETE,goog.events.KeyCodes.UP,goog.events.KeyCodes.LEFT,goog.events.KeyCodes.DOWN,goog.events.KeyCodes.RIGHT];
frontend.modules.shortcut.core.key_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.KeyNames);
frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_ = (function frontend$modules$shortcut$core$consume_pending_shortcuts_BANG_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_shortcuts));
} else {
return and__5041__auto__;
}
})())){
var seq__109191_109281 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_shortcuts));
var chunk__109192_109282 = null;
var count__109193_109283 = (0);
var i__109194_109284 = (0);
while(true){
if((i__109194_109284 < count__109193_109283)){
var vec__109201_109285 = chunk__109192_109282.cljs$core$IIndexed$_nth$arity$2(null,i__109194_109284);
var handler_id_109286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109201_109285,(0),null);
var id_109287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109201_109285,(1),null);
var shortcut_109288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109201_109285,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_109286,id_109287,shortcut_109288) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_109286,id_109287,shortcut_109288));


var G__109289 = seq__109191_109281;
var G__109290 = chunk__109192_109282;
var G__109291 = count__109193_109283;
var G__109292 = (i__109194_109284 + (1));
seq__109191_109281 = G__109289;
chunk__109192_109282 = G__109290;
count__109193_109283 = G__109291;
i__109194_109284 = G__109292;
continue;
} else {
var temp__5804__auto___109293 = cljs.core.seq(seq__109191_109281);
if(temp__5804__auto___109293){
var seq__109191_109294__$1 = temp__5804__auto___109293;
if(cljs.core.chunked_seq_QMARK_(seq__109191_109294__$1)){
var c__5565__auto___109295 = cljs.core.chunk_first(seq__109191_109294__$1);
var G__109296 = cljs.core.chunk_rest(seq__109191_109294__$1);
var G__109297 = c__5565__auto___109295;
var G__109298 = cljs.core.count(c__5565__auto___109295);
var G__109299 = (0);
seq__109191_109281 = G__109296;
chunk__109192_109282 = G__109297;
count__109193_109283 = G__109298;
i__109194_109284 = G__109299;
continue;
} else {
var vec__109204_109300 = cljs.core.first(seq__109191_109294__$1);
var handler_id_109301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109204_109300,(0),null);
var id_109302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109204_109300,(1),null);
var shortcut_109303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109204_109300,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_109301,id_109302,shortcut_109303) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_109301,id_109302,shortcut_109303));


var G__109304 = cljs.core.next(seq__109191_109294__$1);
var G__109305 = null;
var G__109306 = (0);
var G__109307 = (0);
seq__109191_109281 = G__109304;
chunk__109192_109282 = G__109305;
count__109193_109283 = G__109306;
i__109194_109284 = G__109307;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_pending_shortcuts,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
frontend.modules.shortcut.core.get_handler_by_id = (function frontend$modules$shortcut$core$get_handler_by_id(handler_id){
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__109207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__109207_SHARP_),handler_id);
}),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers)))));
});
frontend.modules.shortcut.core.get_installed_ids_by_handler_id = (function frontend$modules$shortcut$core$get_installed_ids_by_handler_id(handler_id){
var G__109209 = cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers);
var G__109209__$1 = (((G__109209 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__109208_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__109208_SHARP_)),handler_id);
}),G__109209));
var G__109209__$2 = (((G__109209__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,G__109209__$1));
var G__109209__$3 = (((G__109209__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__109209__$2));
if((G__109209__$3 == null)){
return null;
} else {
return cljs.core.vec(G__109209__$3);
}
});
/**
 * Register a shortcut, notice the id need to be a namespaced keyword to avoid
 *   conflicts.
 *   Example:
 *   (register-shortcut! :shortcut.handler/misc :foo/bar {:binding "mod+shift+8"
 *   :fn (fn [_state _event]
 *   (js/alert "test shortcut"))})
 */
frontend.modules.shortcut.core.register_shortcut_BANG_ = (function frontend$modules$shortcut$core$register_shortcut_BANG_(var_args){
var G__109211 = arguments.length;
switch (G__109211) {
case 2:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,id){
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,null);
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,id,shortcut_map){
if((((handler_id instanceof cljs.core.Keyword)) && (cljs.core.not(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_pending_shortcuts,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_id,id,shortcut_map], null));
} else {
var temp__5804__auto__ = ((((typeof handler_id === 'string') || ((handler_id instanceof cljs.core.Keyword))))?(function (){var handler_id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handler_id);
return frontend.modules.shortcut.core.get_handler_by_id(handler_id__$1);
})():handler_id);
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
if(cljs.core.truth_(shortcut_map)){
frontend.modules.shortcut.config.add_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,shortcut_map);
} else {
}

if(frontend.modules.shortcut.data_helper.shortcut_binding(id) === false){
return null;
} else {
var seq__109212 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__109213 = null;
var count__109214 = (0);
var i__109215 = (0);
while(true){
if((i__109215 < count__109214)){
var k = chunk__109213.cljs$core$IIndexed$_nth$arity$2(null,i__109215);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),80], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.utils.undecorate_binding(k));
}catch (e109218){var e_109309 = e109218;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_109309], null),new cljs.core.Keyword(null,"line","line",212345235),83], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_109309.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
}

var G__109310 = seq__109212;
var G__109311 = chunk__109213;
var G__109312 = count__109214;
var G__109313 = (i__109215 + (1));
seq__109212 = G__109310;
chunk__109213 = G__109311;
count__109214 = G__109312;
i__109215 = G__109313;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__109212);
if(temp__5804__auto____$1){
var seq__109212__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__109212__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__109212__$1);
var G__109314 = cljs.core.chunk_rest(seq__109212__$1);
var G__109315 = c__5565__auto__;
var G__109316 = cljs.core.count(c__5565__auto__);
var G__109317 = (0);
seq__109212 = G__109314;
chunk__109213 = G__109315;
count__109214 = G__109316;
i__109215 = G__109317;
continue;
} else {
var k = cljs.core.first(seq__109212__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),80], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.utils.undecorate_binding(k));
}catch (e109219){var e_109318 = e109219;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_109318], null),new cljs.core.Keyword(null,"line","line",212345235),83], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_109318.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
}

var G__109319 = cljs.core.next(seq__109212__$1);
var G__109320 = null;
var G__109321 = (0);
var G__109322 = (0);
seq__109212 = G__109319;
chunk__109213 = G__109320;
count__109214 = G__109321;
i__109215 = G__109322;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
}
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Unregister a shortcut.
 *   Example:
 *   (unregister-shortcut! :shortcut.handler/misc :foo/bar)
 */
frontend.modules.shortcut.core.unregister_shortcut_BANG_ = (function frontend$modules$shortcut$core$unregister_shortcut_BANG_(handler_id,shortcut_id){
var temp__5804__auto___109323 = frontend.modules.shortcut.core.get_handler_by_id(handler_id);
if(cljs.core.truth_(temp__5804__auto___109323)){
var handler_109324 = temp__5804__auto___109323;
var temp__5804__auto___109325__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5804__auto___109325__$1)){
var ks_109326 = temp__5804__auto___109325__$1;
var seq__109220_109327 = cljs.core.seq(ks_109326);
var chunk__109221_109328 = null;
var count__109222_109329 = (0);
var i__109223_109330 = (0);
while(true){
if((i__109223_109330 < count__109222_109329)){
var k_109331 = chunk__109221_109328.cljs$core$IIndexed$_nth$arity$2(null,i__109223_109330);
handler_109324.unregisterShortcut(frontend.modules.shortcut.utils.undecorate_binding(k_109331));


var G__109332 = seq__109220_109327;
var G__109333 = chunk__109221_109328;
var G__109334 = count__109222_109329;
var G__109335 = (i__109223_109330 + (1));
seq__109220_109327 = G__109332;
chunk__109221_109328 = G__109333;
count__109222_109329 = G__109334;
i__109223_109330 = G__109335;
continue;
} else {
var temp__5804__auto___109336__$2 = cljs.core.seq(seq__109220_109327);
if(temp__5804__auto___109336__$2){
var seq__109220_109337__$1 = temp__5804__auto___109336__$2;
if(cljs.core.chunked_seq_QMARK_(seq__109220_109337__$1)){
var c__5565__auto___109338 = cljs.core.chunk_first(seq__109220_109337__$1);
var G__109339 = cljs.core.chunk_rest(seq__109220_109337__$1);
var G__109340 = c__5565__auto___109338;
var G__109341 = cljs.core.count(c__5565__auto___109338);
var G__109342 = (0);
seq__109220_109327 = G__109339;
chunk__109221_109328 = G__109340;
count__109222_109329 = G__109341;
i__109223_109330 = G__109342;
continue;
} else {
var k_109343 = cljs.core.first(seq__109220_109337__$1);
handler_109324.unregisterShortcut(frontend.modules.shortcut.utils.undecorate_binding(k_109343));


var G__109344 = cljs.core.next(seq__109220_109337__$1);
var G__109345 = null;
var G__109346 = (0);
var G__109347 = (0);
seq__109220_109327 = G__109344;
chunk__109221_109328 = G__109345;
count__109222_109329 = G__109346;
i__109223_109330 = G__109347;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.truth_(shortcut_id)){
return frontend.modules.shortcut.config.remove_shortcut_BANG_(handler_id,shortcut_id);
} else {
return null;
}
});
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_ = (function frontend$modules$shortcut$core$uninstall_shortcut_handler_BANG_(var_args){
var G__109225 = arguments.length;
switch (G__109225) {
case 1:
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (install_id){
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(install_id,false);
}));

(frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (install_id,refresh_QMARK_){
var temp__5804__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers),install_id));
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
handler.dispose();

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcuts","uninstall-handler","shortcuts/uninstall-handler",-1055305832),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers),install_id))),(cljs.core.truth_(refresh_QMARK_)?"*":"")].join(''),new cljs.core.Keyword(null,"line","line",212345235),106], null)),null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed_handlers,cljs.core.dissoc,install_id);
} else {
return null;
}
}));

(frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.core.install_shortcut_handler_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_handler_BANG_(handler_id,p__109227){
var map__109228 = p__109227;
var map__109228__$1 = cljs.core.__destructure_map(map__109228);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109228__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109228__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109228__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__109229_109349 = frontend.modules.shortcut.core.get_installed_ids_by_handler_id(handler_id);
var G__109229_109350__$1 = (((G__109229_109349 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109226_SHARP_){
return frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$2(p1__109226_SHARP_,true);
}),G__109229_109349));
if((G__109229_109350__$1 == null)){
} else {
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(G__109229_109350__$1);
}

var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__109230_109351 = cljs.core.seq(shortcut_map);
var chunk__109231_109352 = null;
var count__109232_109353 = (0);
var i__109233_109354 = (0);
while(true){
if((i__109233_109354 < count__109232_109353)){
var vec__109240_109355 = chunk__109231_109352.cljs$core$IIndexed$_nth$arity$2(null,i__109233_109354);
var id_109356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109240_109355,(0),null);
var __109357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109240_109355,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_109356);


var G__109358 = seq__109230_109351;
var G__109359 = chunk__109231_109352;
var G__109360 = count__109232_109353;
var G__109361 = (i__109233_109354 + (1));
seq__109230_109351 = G__109358;
chunk__109231_109352 = G__109359;
count__109232_109353 = G__109360;
i__109233_109354 = G__109361;
continue;
} else {
var temp__5804__auto___109362 = cljs.core.seq(seq__109230_109351);
if(temp__5804__auto___109362){
var seq__109230_109363__$1 = temp__5804__auto___109362;
if(cljs.core.chunked_seq_QMARK_(seq__109230_109363__$1)){
var c__5565__auto___109364 = cljs.core.chunk_first(seq__109230_109363__$1);
var G__109365 = cljs.core.chunk_rest(seq__109230_109363__$1);
var G__109366 = c__5565__auto___109364;
var G__109367 = cljs.core.count(c__5565__auto___109364);
var G__109368 = (0);
seq__109230_109351 = G__109365;
chunk__109231_109352 = G__109366;
count__109232_109353 = G__109367;
i__109233_109354 = G__109368;
continue;
} else {
var vec__109243_109369 = cljs.core.first(seq__109230_109363__$1);
var id_109370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109243_109369,(0),null);
var __109371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109243_109369,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_109370);


var G__109372 = cljs.core.next(seq__109230_109363__$1);
var G__109373 = null;
var G__109374 = (0);
var G__109375 = (0);
seq__109230_109351 = G__109372;
chunk__109231_109352 = G__109373;
count__109232_109353 = G__109374;
i__109233_109354 = G__109375;
continue;
}
} else {
}
}
break;
}

var f = (function (e){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.identifier);
var shortcut_map__$1 = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shortcut_map__$1,id);
if(cljs.core.truth_(dispatch_fn)){
return frontend.handler.plugin.hook_lifecycle_fn_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,dispatch_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
return null;
}
});
var install_id = cljs.core.random_uuid();
var data = cljs.core.PersistentArrayMap.createAsIfByAssoc([install_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),handler_id,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),f,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null)]);
handler.listen(goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,f);

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcuts","install-handler","shortcuts/install-handler",657811157),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),new cljs.core.Keyword(null,"line","line",212345235),150], null)),null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed_handlers,cljs.core.merge,data);

return install_id;
});
frontend.modules.shortcut.core.install_shortcuts_BANG_ = (function frontend$modules$shortcut$core$install_shortcuts_BANG_(handler_ids){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109246_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_handler_BANG_(p1__109246_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),(function (){var or__5043__auto__ = cljs.core.seq(handler_ids);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682)], null);
}
})()));
});
frontend.modules.shortcut.core.mixin = (function frontend$modules$shortcut$core$mixin(var_args){
var G__109248 = arguments.length;
switch (G__109248) {
case 1:
return frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$1 = (function (handler_id){
return frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$2(handler_id,true);
}));

(frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,remount_reinstall_QMARK_){
var G__109249 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var install_id = frontend.modules.shortcut.core.install_shortcut_handler_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5804__auto___109377 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto___109377)){
var install_id_109378 = temp__5804__auto___109377;
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(install_id_109378);
} else {
}

return state;
})], null);
if(cljs.core.truth_(remount_reinstall_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109249,new cljs.core.Keyword(null,"will-remount","will-remount",-141604325),(function (old_state,new_state){
if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto__ = "[shortcuts] reinstalled:";
console.time(k__62654__auto__);

var res__62655__auto__ = (function (){
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(old_state));

var temp__5804__auto__ = frontend.modules.shortcut.core.install_shortcut_handler_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state], null));
if(cljs.core.truth_(temp__5804__auto__)){
var install_id = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
} else {
return null;
}
})()
;
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
} else {
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(old_state));

var temp__5804__auto__ = frontend.modules.shortcut.core.install_shortcut_handler_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state], null));
if(cljs.core.truth_(temp__5804__auto__)){
var install_id = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
} else {
return null;
}
}
}));
} else {
return G__109249;
}
}));

(frontend.modules.shortcut.core.mixin.cljs$lang$maxFixedArity = 2);

/**
 * This is an optimized version compared to (mixin).
 * And the shortcuts will not be frequently loaded and unloaded.
 * As well as ensuring unnecessary updates of components.
 */
frontend.modules.shortcut.core.mixin_STAR_ = (function frontend$modules$shortcut$core$mixin_STAR_(handler_id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var _STAR_state = cljs.core.volatile_BANG_(state);
var install_id = frontend.modules.shortcut.core.install_shortcut_handler_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),_STAR_state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.modules.shortcut.core","*state","frontend.modules.shortcut.core/*state",262386927),_STAR_state], 0));
}),new cljs.core.Keyword(null,"will-remount","will-remount",-141604325),(function (old_state,new_state){
var temp__5804__auto___109379 = new cljs.core.Keyword("frontend.modules.shortcut.core","*state","frontend.modules.shortcut.core/*state",262386927).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(temp__5804__auto___109379)){
var _STAR_state_109380 = temp__5804__auto___109379;
cljs.core.vreset_BANG_(_STAR_state_109380,new_state);
} else {
}

return new_state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5804__auto___109381 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto___109381)){
var install_id_109382 = temp__5804__auto___109381;
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(install_id_109382);

var G__109250_109383 = new cljs.core.Keyword("frontend.modules.shortcut.core","*state","frontend.modules.shortcut.core/*state",262386927).cljs$core$IFn$_invoke$arity$1(state);
if((G__109250_109383 == null)){
} else {
cljs.core.vreset_BANG_(G__109250_109383,null);
}
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all_BANG_ = (function frontend$modules$shortcut$core$unlisten_all_BANG_(var_args){
var G__109252 = arguments.length;
switch (G__109252) {
case 0:
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (dispose_QMARK_){
var seq__109253 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers)));
var chunk__109255 = null;
var count__109256 = (0);
var i__109257 = (0);
while(true){
if((i__109257 < count__109256)){
var map__109261 = chunk__109255.cljs$core$IIndexed$_nth$arity$2(null,i__109257);
var map__109261__$1 = cljs.core.__destructure_map(map__109261);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109261__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109261__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109261__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
if(cljs.core.truth_(dispose_QMARK_)){
handler.dispose();
} else {
goog.events.unlisten(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__109385 = seq__109253;
var G__109386 = chunk__109255;
var G__109387 = count__109256;
var G__109388 = (i__109257 + (1));
seq__109253 = G__109385;
chunk__109255 = G__109386;
count__109256 = G__109387;
i__109257 = G__109388;
continue;
} else {
var G__109389 = seq__109253;
var G__109390 = chunk__109255;
var G__109391 = count__109256;
var G__109392 = (i__109257 + (1));
seq__109253 = G__109389;
chunk__109255 = G__109390;
count__109256 = G__109391;
i__109257 = G__109392;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__109253);
if(temp__5804__auto__){
var seq__109253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109253__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__109253__$1);
var G__109393 = cljs.core.chunk_rest(seq__109253__$1);
var G__109394 = c__5565__auto__;
var G__109395 = cljs.core.count(c__5565__auto__);
var G__109396 = (0);
seq__109253 = G__109393;
chunk__109255 = G__109394;
count__109256 = G__109395;
i__109257 = G__109396;
continue;
} else {
var map__109262 = cljs.core.first(seq__109253__$1);
var map__109262__$1 = cljs.core.__destructure_map(map__109262);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109262__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109262__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109262__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
if(cljs.core.truth_(dispose_QMARK_)){
handler.dispose();
} else {
goog.events.unlisten(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__109397 = cljs.core.next(seq__109253__$1);
var G__109398 = null;
var G__109399 = (0);
var G__109400 = (0);
seq__109253 = G__109397;
chunk__109255 = G__109398;
count__109256 = G__109399;
i__109257 = G__109400;
continue;
} else {
var G__109401 = cljs.core.next(seq__109253__$1);
var G__109402 = null;
var G__109403 = (0);
var G__109404 = (0);
seq__109253 = G__109401;
chunk__109255 = G__109402;
count__109256 = G__109403;
i__109257 = G__109404;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$lang$maxFixedArity = 1);

frontend.modules.shortcut.core.listen_all_BANG_ = (function frontend$modules$shortcut$core$listen_all_BANG_(){
var seq__109263 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers)));
var chunk__109265 = null;
var count__109266 = (0);
var i__109267 = (0);
while(true){
if((i__109267 < count__109266)){
var map__109271 = chunk__109265.cljs$core$IIndexed$_nth$arity$2(null,i__109267);
var map__109271__$1 = cljs.core.__destructure_map(map__109271);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109271__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109271__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109271__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
if(cljs.core.truth_(handler.isDisposed())){
frontend.modules.shortcut.core.install_shortcut_handler_BANG_(group,cljs.core.PersistentArrayMap.EMPTY);
} else {
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__109405 = seq__109263;
var G__109406 = chunk__109265;
var G__109407 = count__109266;
var G__109408 = (i__109267 + (1));
seq__109263 = G__109405;
chunk__109265 = G__109406;
count__109266 = G__109407;
i__109267 = G__109408;
continue;
} else {
var G__109409 = seq__109263;
var G__109410 = chunk__109265;
var G__109411 = count__109266;
var G__109412 = (i__109267 + (1));
seq__109263 = G__109409;
chunk__109265 = G__109410;
count__109266 = G__109411;
i__109267 = G__109412;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__109263);
if(temp__5804__auto__){
var seq__109263__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109263__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__109263__$1);
var G__109413 = cljs.core.chunk_rest(seq__109263__$1);
var G__109414 = c__5565__auto__;
var G__109415 = cljs.core.count(c__5565__auto__);
var G__109416 = (0);
seq__109263 = G__109413;
chunk__109265 = G__109414;
count__109266 = G__109415;
i__109267 = G__109416;
continue;
} else {
var map__109272 = cljs.core.first(seq__109263__$1);
var map__109272__$1 = cljs.core.__destructure_map(map__109272);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109272__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109272__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109272__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
if(cljs.core.truth_(handler.isDisposed())){
frontend.modules.shortcut.core.install_shortcut_handler_BANG_(group,cljs.core.PersistentArrayMap.EMPTY);
} else {
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);
}


var G__109417 = cljs.core.next(seq__109263__$1);
var G__109418 = null;
var G__109419 = (0);
var G__109420 = (0);
seq__109263 = G__109417;
chunk__109265 = G__109418;
count__109266 = G__109419;
i__109267 = G__109420;
continue;
} else {
var G__109421 = cljs.core.next(seq__109263__$1);
var G__109422 = null;
var G__109423 = (0);
var G__109424 = (0);
seq__109263 = G__109421;
chunk__109265 = G__109422;
count__109266 = G__109423;
i__109267 = G__109424;
continue;
}
}
} else {
return null;
}
}
break;
}
});
frontend.modules.shortcut.core.disable_all_shortcuts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0();

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.modules.shortcut.core.listen_all_BANG_();

return state;
})], null);
/**
 * Always use this function to refresh shortcuts
 */
frontend.modules.shortcut.core.refresh_internal_BANG_ = (function frontend$modules$shortcut$core$refresh_internal_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481),true);

var ids_109425 = cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers));
var _handler_ids_109426 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed_handlers))));
var seq__109273_109427 = cljs.core.seq(ids_109425);
var chunk__109274_109428 = null;
var count__109275_109429 = (0);
var i__109276_109430 = (0);
while(true){
if((i__109276_109430 < count__109275_109429)){
var id_109431 = chunk__109274_109428.cljs$core$IIndexed$_nth$arity$2(null,i__109276_109430);
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(id_109431);


var G__109432 = seq__109273_109427;
var G__109433 = chunk__109274_109428;
var G__109434 = count__109275_109429;
var G__109435 = (i__109276_109430 + (1));
seq__109273_109427 = G__109432;
chunk__109274_109428 = G__109433;
count__109275_109429 = G__109434;
i__109276_109430 = G__109435;
continue;
} else {
var temp__5804__auto___109436 = cljs.core.seq(seq__109273_109427);
if(temp__5804__auto___109436){
var seq__109273_109437__$1 = temp__5804__auto___109436;
if(cljs.core.chunked_seq_QMARK_(seq__109273_109437__$1)){
var c__5565__auto___109438 = cljs.core.chunk_first(seq__109273_109437__$1);
var G__109439 = cljs.core.chunk_rest(seq__109273_109437__$1);
var G__109440 = c__5565__auto___109438;
var G__109441 = cljs.core.count(c__5565__auto___109438);
var G__109442 = (0);
seq__109273_109427 = G__109439;
chunk__109274_109428 = G__109440;
count__109275_109429 = G__109441;
i__109276_109430 = G__109442;
continue;
} else {
var id_109443 = cljs.core.first(seq__109273_109437__$1);
frontend.modules.shortcut.core.uninstall_shortcut_handler_BANG_.cljs$core$IFn$_invoke$arity$1(id_109443);


var G__109444 = cljs.core.next(seq__109273_109437__$1);
var G__109445 = null;
var G__109446 = (0);
var G__109447 = (0);
seq__109273_109427 = G__109444;
chunk__109274_109428 = G__109445;
count__109275_109429 = G__109446;
i__109276_109430 = G__109447;
continue;
}
} else {
}
}
break;
}

frontend.modules.shortcut.core.install_shortcuts_BANG_(null);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011)], null));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-handler-refreshing?","ui/shortcut-handler-refreshing?",741908481),false);
}
});
frontend.modules.shortcut.core.refresh_BANG_ = goog.functions.debounce(frontend.modules.shortcut.core.refresh_internal_BANG_,(1000));
frontend.modules.shortcut.core.name_with_meta = (function frontend$modules$shortcut$core$name_with_meta(e){
var ctrl = e.ctrlKey;
var alt = e.altKey;
var meta = e.metaKey;
var shift = e.shiftKey;
var keyname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__109277 = keyname;
var G__109277__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109277)].join(''):G__109277);
var G__109277__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109277__$1)].join(''):G__109277__$1);
var G__109277__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109277__$2)].join(''):G__109277__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109277__$3)].join('');
} else {
return G__109277__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__109278 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__109278)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__109278)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__109278)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__109278)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__109278)){
return null;
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.core.name_with_meta(e))].join('');

}
}
}
}
}
});
frontend.modules.shortcut.core.persist_user_shortcut_BANG_ = (function frontend$modules$shortcut$core$persist_user_shortcut_BANG_(id,binding){
var graph_shortcuts = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var global_shortcuts = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_global_config());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var global_QMARK_ = true;
var into_shortcuts = (function frontend$modules$shortcut$core$persist_user_shortcut_BANG__$_into_shortcuts(shortcuts){
var G__109280 = shortcuts;
var G__109280__$1 = (((binding == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__109280,id):G__109280);
if(((global_QMARK_) && (((typeof binding === 'string') || (((cljs.core.vector_QMARK_(binding)) || (cljs.core.boolean_QMARK_(binding)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109280__$1,id,binding);
} else {
return G__109280__$1;
}
});
if((binding == null)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),into_shortcuts(graph_shortcuts));
} else {
}

return frontend.handler.global_config.set_global_config_kv_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),into_shortcuts(global_shortcuts));
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
