goog.provide('frontend.modules.shortcut.data_helper');
frontend.modules.shortcut.data_helper.flatten_bindings_by_id = (function frontend$modules$shortcut$data_helper$flatten_bindings_by_id(config,user_shortcuts,binding_only_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109141){
var vec__109142 = p__109141;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109142,(0),null);
var map__109145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109142,(1),null);
var map__109145__$1 = cljs.core.__destructure_map(map__109145);
var opts = map__109145__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109145__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,(cljs.core.truth_(binding_only_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_shortcuts,id,binding):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"user-binding","user-binding",851596332),cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_shortcuts,id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),(frontend.modules.shortcut.data_helper.get_group.cljs$core$IFn$_invoke$arity$1 ? frontend.modules.shortcut.data_helper.get_group.cljs$core$IFn$_invoke$arity$1(id) : frontend.modules.shortcut.data_helper.get_group.call(null,id)),new cljs.core.Keyword(null,"id","id",-1388402092),id], 0)))]);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.vals(config))));
});
frontend.modules.shortcut.data_helper.flatten_bindings_by_key = (function frontend$modules$shortcut$data_helper$flatten_bindings_by_key(config,user_shortcuts){
return cljs.core.reduce_kv((function (r,handler_id,vs){
return cljs.core.reduce_kv((function (r__$1,id,p__109146){
var map__109147 = p__109146;
var map__109147__$1 = cljs.core.__destructure_map(map__109147);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109147__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_shortcuts,id,binding);
if(cljs.core.truth_(temp__5802__auto__)){
var ks = temp__5802__auto__;
var ks__$1 = ((cljs.core.sequential_QMARK_(ks))?ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k){
var k__$1 = frontend.modules.shortcut.utils.undecorate_binding(k);
var k_SINGLEQUOTE_ = frontend.modules.shortcut.utils.safe_parse_string_binding(k__$1);
var k_SINGLEQUOTE___$1 = cljs_bean.core.__GT_clj(k_SINGLEQUOTE_);
return cljs.core.assoc_in(cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"key","key",-1516042587)], null),k__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"refs","refs",-1560051448),id], null),handler_id);
}),r__$1,ks__$1);
} else {
return r__$1;
}
}),r,vs);
}),cljs.core.PersistentArrayMap.EMPTY,config);
});
frontend.modules.shortcut.data_helper.m_flatten_bindings_by_id = frontend.util.memoize_last(frontend.modules.shortcut.data_helper.flatten_bindings_by_id);
frontend.modules.shortcut.data_helper.m_flatten_bindings_by_key = frontend.util.memoize_last(frontend.modules.shortcut.data_helper.flatten_bindings_by_key);
frontend.modules.shortcut.data_helper.get_bindings = (function frontend$modules$shortcut$data_helper$get_bindings(){
return frontend.modules.shortcut.data_helper.m_flatten_bindings_by_id(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),frontend.state.shortcuts(),true);
});
frontend.modules.shortcut.data_helper.get_bindings_keys_map = (function frontend$modules$shortcut$data_helper$get_bindings_keys_map(){
return frontend.modules.shortcut.data_helper.m_flatten_bindings_by_key(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),frontend.state.shortcuts());
});
frontend.modules.shortcut.data_helper.get_bindings_ids_map = (function frontend$modules$shortcut$data_helper$get_bindings_ids_map(){
return frontend.modules.shortcut.data_helper.m_flatten_bindings_by_id(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),frontend.state.shortcuts(),false);
});
frontend.modules.shortcut.data_helper.get_shortcut_desc = (function frontend$modules$shortcut$data_helper$get_shortcut_desc(binding_map){
var map__109148 = binding_map;
var map__109148__$1 = cljs.core.__destructure_map(map__109148);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109148__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109148__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var desc__$1 = (function (){var or__5043__auto__ = desc;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cmd);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var G__109149 = id;
var G__109149__$1 = (((G__109149 == null))?null:frontend.modules.shortcut.utils.decorate_namespace(G__109149));
if((G__109149__$1 == null)){
return null;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__109149__$1], 0));
}
}
}
})();
if((((desc__$1 == null)) || (((typeof desc__$1 === 'string') && (clojure.string.starts_with_QMARK_(desc__$1,"{Missing")))))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
} else {
return desc__$1;
}
});
frontend.modules.shortcut.data_helper.mod_key = (function frontend$modules$shortcut$data_helper$mod_key(shortcut){
if(typeof shortcut === 'string'){
return clojure.string.replace(shortcut,/mod/i,(cljs.core.truth_(frontend.util.mac_QMARK_)?"meta":"ctrl"));
} else {
return null;
}
});
/**
 * override by user custom binding
 */
frontend.modules.shortcut.data_helper.shortcut_binding = (function frontend$modules$shortcut$data_helper$shortcut_binding(id){
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.get_bindings(),id);
if((shortcut == null)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.data-helper",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","binding-not-found","shortcut/binding-not-found",-1239068733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),82], null)),null);
} else {
if(shortcut === false){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.data-helper",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","disabled","shortcut/disabled",-1351895776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),86], null)),null);

return false;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.mod_key,((typeof shortcut === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut], null):shortcut));

}
}
});
frontend.modules.shortcut.data_helper.shortcut_item = (function frontend$modules$shortcut$data_helper$shortcut_item(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.get_bindings_ids_map(),id);
});
frontend.modules.shortcut.data_helper.binding_by_category = (function frontend$modules$shortcut$data_helper$binding_by_category(name){
var dict = frontend.modules.shortcut.data_helper.get_bindings_ids_map();
var plugin_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("shortcut.category","plugins","shortcut.category/plugins",-1801186145));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dict,k),new cljs.core.Keyword(null,"category","category",-593092832),name)], null);
}),((plugin_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__109150_SHARP_){
return clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__109150_SHARP_),":plugin.");
}),cljs.core.keys(dict)):frontend.modules.shortcut.config.get_category_shortcuts(name)));
});
frontend.modules.shortcut.data_helper.shortcut_map = (function frontend$modules$shortcut$data_helper$shortcut_map(var_args){
var G__109152 = arguments.length;
switch (G__109152) {
case 1:
return frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$1 = (function (handler_id){
return frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,null);
}));

(frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,state){
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),handler_id);
var handler_m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109153){
var vec__109154 = p__109153;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109154,(0),null);
var map__109157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109154,(1),null);
var map__109157__$1 = cljs.core.__destructure_map(map__109157);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109157__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,fn]);
}),raw));
var before = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw));
var G__109158 = handler_m;
var G__109158__$1 = (cljs.core.truth_(state)?cljs.core.reduce_kv((function (r,k,handle_fn){
var handle_fn_SINGLEQUOTE_ = ((cljs.core.volatile_QMARK_(state))?(function() { 
var G__109187__delegate = function (_STAR_state,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handle_fn,cljs.core.cons(cljs.core.deref(_STAR_state),args));
};
var G__109187 = function (_STAR_state,var_args){
var args = null;
if (arguments.length > 1) {
var G__109188__i = 0, G__109188__a = new Array(arguments.length -  1);
while (G__109188__i < G__109188__a.length) {G__109188__a[G__109188__i] = arguments[G__109188__i + 1]; ++G__109188__i;}
  args = new cljs.core.IndexedSeq(G__109188__a,0,null);
} 
return G__109187__delegate.call(this,_STAR_state,args);};
G__109187.cljs$lang$maxFixedArity = 1;
G__109187.cljs$lang$applyTo = (function (arglist__109189){
var _STAR_state = cljs.core.first(arglist__109189);
var args = cljs.core.rest(arglist__109189);
return G__109187__delegate(_STAR_state,args);
});
G__109187.cljs$core$IFn$_invoke$arity$variadic = G__109187__delegate;
return G__109187;
})()
:handle_fn);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_fn_SINGLEQUOTE_,state));
}),cljs.core.PersistentArrayMap.EMPTY,G__109158):G__109158);
if(cljs.core.truth_(before)){
return cljs.core.reduce_kv((function (r,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,(before.cljs$core$IFn$_invoke$arity$1 ? before.cljs$core$IFn$_invoke$arity$1(v) : before.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,G__109158__$1);
} else {
return G__109158__$1;
}
}));

(frontend.modules.shortcut.data_helper.shortcut_map.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.data_helper.gen_shortcut_seq = (function frontend$modules$shortcut$data_helper$gen_shortcut_seq(id){
var bindings = frontend.modules.shortcut.data_helper.shortcut_binding(id);
if(bindings === false){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(bindings),/ |\+/);
}
});
frontend.modules.shortcut.data_helper.binding_for_display = (function frontend$modules$shortcut$data_helper$binding_for_display(k,binding){
var tmp = ((binding === false)?(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","kill-line-after","editor/kill-line-after",-1948172258));
} else {
return and__5041__auto__;
}
})())?"ctrl k":(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","beginning-of-block","editor/beginning-of-block",-1731001628));
} else {
return and__5041__auto__;
}
})())?"ctrl a":(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","end-of-block","editor/end-of-block",87939440));
} else {
return and__5041__auto__;
}
})())?"ctrl e":(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","backward-kill-word","editor/backward-kill-word",2024635319));
} else {
return and__5041__auto__;
}
})())?"opt delete":frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0))
)))):((typeof binding === 'string')?frontend.modules.shortcut.utils.decorate_binding(binding):clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.utils.decorate_binding,binding))
));
return clojure.string.replace(tmp,"meta","cmd");
});
/**
 * Given shortcut key, return handler group
 *   eg: :editor/new-line -> :shortcut.handler/block-editing-only
 */
frontend.modules.shortcut.data_helper.get_group = (function frontend$modules$shortcut$data_helper$get_group(k){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__109159){
var vec__109160 = p__109159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109160,(1),null);
return cljs.core.contains_QMARK_(v,k);
}),cljs.core.deref(frontend.modules.shortcut.config._STAR_config))));
});
frontend.modules.shortcut.data_helper.should_be_included_to_global_handler = (function frontend$modules$shortcut$data_helper$should_be_included_to_global_handler(from_handler_id){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shortcut.handler","pdf","shortcut.handler/pdf",468089398),null], null), null),from_handler_id)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),from_handler_id]);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([from_handler_id]);
}
});
frontend.modules.shortcut.data_helper.get_conflicts_by_keys = (function frontend$modules$shortcut$data_helper$get_conflicts_by_keys(var_args){
var G__109166 = arguments.length;
switch (G__109166) {
case 1:
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(ks,new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-global?","group-global?",188550543),true], null));
}));

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$2 = (function (ks,handler_id){
return frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(ks,handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-global?","group-global?",188550543),true], null));
}));

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3 = (function (ks,handler_id,p__109167){
var map__109168 = p__109167;
var map__109168__$1 = cljs.core.__destructure_map(map__109168);
var exclude_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109168__$1,new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318));
var group_global_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109168__$1,new cljs.core.Keyword(null,"group-global?","group-global?",188550543));
var global_handlers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),null,new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),null,new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),null,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),null], null), null);
var ks_bindings = frontend.modules.shortcut.data_helper.get_bindings_keys_map();
var handler_ids = frontend.modules.shortcut.data_helper.should_be_included_to_global_handler(handler_id);
var global_QMARK_ = (cljs.core.truth_(group_global_QMARK_)?cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(global_handlers,handler_ids)):null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__109164_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.vals(cljs.core.second(p1__109164_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5804__auto__ = frontend.modules.shortcut.utils.undecorate_binding(k);
if(cljs.core.truth_(temp__5804__auto__)){
var k_SINGLEQUOTE_ = temp__5804__auto__;
var k__$1 = frontend.modules.shortcut.utils.safe_parse_string_binding(k_SINGLEQUOTE_);
var k__$2 = cljs_bean.core.__GT_clj(k__$1);
var same_leading_key_QMARK_ = (function (p__109169){
var vec__109170 = p__109169;
var k_SINGLEQUOTE___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109170,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109170,(1),null);
if(cljs.core.sequential_QMARK_(k__$2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,k_SINGLEQUOTE___$1)) || ((((cljs.core.count(k_SINGLEQUOTE___$1) > cljs.core.count(k__$2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k__$2),cljs.core.first(k_SINGLEQUOTE___$1))))));
} else {
return null;
}
});
var into_conflict_refs = (function (p__109173){
var vec__109174 = p__109173;
var k__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109174,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109174,(1),null);
var temp__5804__auto____$1 = o;
if(cljs.core.truth_(temp__5804__auto____$1)){
var map__109177 = temp__5804__auto____$1;
var map__109177__$1 = cljs.core.__destructure_map(map__109177);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109177__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109177__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.reduce_kv((function (r,id,handler_id_SINGLEQUOTE_){
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(cljs.core.contains_QMARK_(exclude_ids,id)));
if(and__5041__auto__){
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_ids,cljs.core.PersistentHashSet.createAsIfByAssoc([handler_id_SINGLEQUOTE_]));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.set_QMARK_(handler_ids)) && (cljs.core.contains_QMARK_(handler_ids,handler_id_SINGLEQUOTE_)));
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$1 = global_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.contains_QMARK_(global_handlers,handler_id_SINGLEQUOTE_);
} else {
return and__5041__auto____$1;
}
}
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,id,handler_id_SINGLEQUOTE_);
} else {
return r;
}
}),cljs.core.PersistentArrayMap.EMPTY,refs)], null)], null);
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__109163_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.second(cljs.core.second(p1__109163_SHARP_)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(into_conflict_refs,cljs.core.filterv(same_leading_key_QMARK_,ks_bindings))))], null);
} else {
return null;
}
}),((typeof ks === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null):ks))));
}));

(frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$lang$maxFixedArity = 3);

frontend.modules.shortcut.data_helper.parse_conflicts_from_binding = (function frontend$modules$shortcut$data_helper$parse_conflicts_from_binding(from_binding,target){
var temp__5804__auto__ = ((typeof target === 'string') && (((cljs.core.sequential_QMARK_(from_binding)) && (cljs.core.seq(from_binding)))));
if(temp__5804__auto__){
var from_binding__$1 = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var G__109179 = target;
var G__109179__$1 = (((G__109179 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__109179));
var G__109179__$2 = (((G__109179__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__109179__$1));
if((G__109179__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__109179__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target__$1 = temp__5804__auto____$1;
return cljs.core.filterv((function (p1__109178_SHARP_){
var temp__5804__auto____$2 = (function (){var G__109180 = p1__109178_SHARP_;
var G__109180__$1 = (((G__109180 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__109180));
var G__109180__$2 = (((G__109180__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__109180__$1));
if((G__109180__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__109180__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var from = temp__5804__auto____$2;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,target__$1)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(from),(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(target__$1),(1))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target__$1),cljs.core.first(from))))));
} else {
return null;
}
}),from_binding__$1);
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.shortcut.data_helper.shortcut_data_by_id = (function frontend$modules$shortcut$data_helper$shortcut_data_by_id(id){
var binding = frontend.modules.shortcut.data_helper.shortcut_binding(id);
var data = (function (){var G__109181 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config._STAR_config)));
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__109181) : id.call(null,G__109181));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"binding","binding",539932593),frontend.modules.shortcut.data_helper.binding_for_display(id,binding));
});
frontend.modules.shortcut.data_helper.shortcuts__GT_commands = (function frontend$modules$shortcut$data_helper$shortcuts__GT_commands(handler_id){
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config._STAR_config),handler_id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109182){
var vec__109183 = p__109182;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109183,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109183,(1),null);
return clojure.set.rename_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.shortcut_data_by_id(id),new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),handler_id], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"action","action",-811238024)], null));
}),m);
});

//# sourceMappingURL=frontend.modules.shortcut.data_helper.js.map
