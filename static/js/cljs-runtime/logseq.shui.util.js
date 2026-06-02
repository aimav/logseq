goog.provide('logseq.shui.util');
goog.scope(function(){
  logseq.shui.util.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {boolean}
 */
logseq.shui.util.NODETEST = goog.define("logseq.shui.util.NODETEST",false);
logseq.shui.util.$app = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"app-container");
logseq.shui.util.$left = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"left-container");
logseq.shui.util.$head = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"head-container");
logseq.shui.util.$main = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"main-container");
logseq.shui.util.$main_content = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"main-content-container");
logseq.shui.util.$left_sidebar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"left-sidebar");
logseq.shui.util.$right_sidebar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.dom.getElement,"right-sidebar");
logseq.shui.util.el__GT_clj_rect = (function logseq$shui$util$el__GT_clj_rect(el){
var rect = el.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"top","top",-1856271961),rect.top,new cljs.core.Keyword(null,"left","left",-399115937),rect.left,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rect.bottom,new cljs.core.Keyword(null,"right","right",-452581833),rect.right,new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height,new cljs.core.Keyword(null,"x","x",2099068185),rect.x,new cljs.core.Keyword(null,"y","y",-1757859776),rect.y], null);
});
logseq.shui.util.clj_rect_observer = (function logseq$shui$util$clj_rect_observer(update_BANG_){
return (new ResizeObserver((function (entries){
if(cljs.core.truth_(cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(entries)).contentRect)){
return (update_BANG_.cljs$core$IFn$_invoke$arity$0 ? update_BANG_.cljs$core$IFn$_invoke$arity$0() : update_BANG_.call(null));
} else {
return null;
}
})));
});
logseq.shui.util.use_dom_bounding_client_rect = (function logseq$shui$util$use_dom_bounding_client_rect(var_args){
var G__108435 = arguments.length;
switch (G__108435) {
case 1:
return logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$1 = (function (el){
return logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$2(el,null);
}));

(logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$2 = (function (el,tick){
var vec__108436 = rum.core.use_state(null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108436,(0),null);
var set_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108436,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(el)?(function (){
var update_BANG_ = (function (){
var G__108439 = logseq.shui.util.el__GT_clj_rect(el);
return (set_rect.cljs$core$IFn$_invoke$arity$1 ? set_rect.cljs$core$IFn$_invoke$arity$1(G__108439) : set_rect.call(null,G__108439));
});
var observer = logseq.shui.util.clj_rect_observer(update_BANG_);
update_BANG_();

observer.observe(el);

return (function (){
return observer.disconnect();
});
}):(function (){
return cljs.core.List.EMPTY;
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,tick], null));

return rect;
}));

(logseq.shui.util.use_dom_bounding_client_rect.cljs$lang$maxFixedArity = 2);

logseq.shui.util.use_ref_bounding_client_rect = (function logseq$shui$util$use_ref_bounding_client_rect(var_args){
var G__108441 = arguments.length;
switch (G__108441) {
case 0:
return logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$1(null);
}));

(logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$1 = (function (tick){
var vec__108442 = rum.core.use_state(null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108442,(0),null);
var set_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108442,(1),null);
var rect = logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$2(ref,tick);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [set_ref,rect,ref], null);
}));

(logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$2 = (function (ref,tick){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$2(ref,tick)], null);
}));

(logseq.shui.util.use_ref_bounding_client_rect.cljs$lang$maxFixedArity = 2);

logseq.shui.util.rem__GT_px = (function logseq$shui$util$rem__GT_px(rem){
return (parseFloat(getComputedStyle(document.documentElement).fontSize) * rem);
});
logseq.shui.util.px__GT_rem = (function logseq$shui$util$px__GT_rem(px){
return (px / parseFloat(getComputedStyle(document.documentElement).fontSize));
});
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
logseq.shui.util.kebab_case__GT_camel_case = (function logseq$shui$util$kebab_case__GT_camel_case(input){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/-/);
var capitalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108445_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__108445_SHARP_)),cljs.core.rest(p1__108445_SHARP_));
}),cljs.core.rest(words));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.first(words),capitalize);
});
/**
 * Stringify all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified,
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
logseq.shui.util.map_keys__GT_camel_case = (function logseq$shui$util$map_keys__GT_camel_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108476 = arguments.length;
var i__5767__auto___108477 = (0);
while(true){
if((i__5767__auto___108477 < len__5766__auto___108476)){
args__5772__auto__.push((arguments[i__5767__auto___108477]));

var G__108478 = (i__5767__auto___108477 + (1));
i__5767__auto___108477 = G__108478;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.shui.util.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(logseq.shui.util.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__108448){
var map__108449 = p__108448;
var map__108449__$1 = cljs.core.__destructure_map(map__108449);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108449__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = (function (p__108450){
var vec__108451 = p__108450;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108451,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108451,(1),null);
var k = cljs.core.name(key);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!(clojure.string.starts_with_QMARK_(k,"data-"))))?logseq.shui.util.kebab_case__GT_camel_case(k):k),value], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_to_camel,new_map));
} else {
return x;
}
}),data);
}));

(logseq.shui.util.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.util.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq108446){
var G__108447 = cljs.core.first(seq108446);
var seq108446__$1 = cljs.core.next(seq108446);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108447,seq108446__$1);
}));

logseq.shui.util.dev_QMARK_ = (function (){var G__108454 = (window["LSUtils"]);
if((G__108454 == null)){
return null;
} else {
return (G__108454["isDev"]);
}
})();
/**
 * Returns the component path.
 */
logseq.shui.util.get_path = (function logseq$shui$util$get_path(component_name){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(component_name),/\./);
});
logseq.shui.util.adapt_class = (function logseq$shui$util$adapt_class(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108479 = arguments.length;
var i__5767__auto___108480 = (0);
while(true){
if((i__5767__auto___108480 < len__5766__auto___108479)){
args__5772__auto__.push((arguments[i__5767__auto___108480]));

var G__108481 = (i__5767__auto___108480 + (1));
i__5767__auto___108480 = G__108481;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.shui.util.adapt_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(logseq.shui.util.adapt_class.cljs$core$IFn$_invoke$arity$variadic = (function (react_class,args){
var vec__108457 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108457,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108457,(1),null);
var type_SHARP_ = cljs.core.first(children);
var new_children = ((cljs.core.sequential_QMARK_(type_SHARP_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.interpret(children)], null):daiquiri.interpreter.interpret(children));
var vector__GT_react_elems = (function (p__108460){
var vec__108461 = p__108460;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108461,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108461,(1),null);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,daiquiri.interpreter.interpret(val)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
}
});
var new_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vector__GT_react_elems,opts));
var react_class__$1 = (cljs.core.truth_(logseq.shui.util.dev_QMARK_)?(react_class.cljs$core$IFn$_invoke$arity$0 ? react_class.cljs$core$IFn$_invoke$arity$0() : react_class.call(null)):react_class);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class__$1,cljs_bean.core.__GT_js(logseq.shui.util.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(new_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html-props","html-props",-455448229),true], 0))),new_children);
}));

(logseq.shui.util.adapt_class.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.util.adapt_class.cljs$lang$applyTo = (function (seq108455){
var G__108456 = cljs.core.first(seq108455);
var seq108455__$1 = cljs.core.next(seq108455);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108456,seq108455__$1);
}));

logseq.shui.util.use_atom_fn = (function logseq$shui$util$use_atom_fn(a,getter_fn,setter_fn){
var vec__108465 = rum.core.use_state((function (){var G__108468 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__108468) : getter_fn.call(null,G__108468));
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108465,(0),null);
var set_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108465,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
cljs.core.add_watch(a,id,(function (_,___$1,prev_state,next_state){
var prev_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(prev_state) : getter_fn.call(null,prev_state));
var next_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(next_state) : getter_fn.call(null,next_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_value,next_value)){
return null;
} else {
return (set_val.cljs$core$IFn$_invoke$arity$1 ? set_val.cljs$core$IFn$_invoke$arity$1(next_value) : set_val.call(null,next_value));
}
}));

return (function (){
return cljs.core.remove_watch(a,id);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,(function (p1__108464_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,setter_fn,p1__108464_SHARP_);
})], null);
});
/**
 * (use-atom my-atom)
 */
logseq.shui.util.use_atom = (function logseq$shui$util$use_atom(a){
return logseq.shui.util.use_atom_fn(a,cljs.core.identity,(function (_,v){
return v;
}));
});
logseq.shui.util.use_mounted = (function logseq$shui$util$use_mounted(){
var _STAR_mounted = rum.core.use_ref(false);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
rum.core.set_ref_BANG_(_STAR_mounted,true);

return (function (){
return rum.core.set_ref_BANG_(_STAR_mounted,false);
});
}),cljs.core.PersistentVector.EMPTY);

return (function (){
return rum.core.deref(_STAR_mounted);
});
});
logseq.shui.util.react__GT_rum = (function logseq$shui$util$react__GT_rum(c,static_QMARK_){
if(cljs.core.truth_(static_QMARK_)){
return (
logseq.shui.util.react__GT_rum_SINGLEQUOTE_ = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__108482__delegate = function (args){
return daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.shui.util.adapt_class,c,args));
};
var G__108482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108483__i = 0, G__108483__a = new Array(arguments.length -  0);
while (G__108483__i < G__108483__a.length) {G__108483__a[G__108483__i] = arguments[G__108483__i + 0]; ++G__108483__i;}
  args = new cljs.core.IndexedSeq(G__108483__a,0,null);
} 
return G__108482__delegate.call(this,args);};
G__108482.cljs$lang$maxFixedArity = 0;
G__108482.cljs$lang$applyTo = (function (arglist__108484){
var args = cljs.core.seq(arglist__108484);
return G__108482__delegate(args);
});
G__108482.cljs$core$IFn$_invoke$arity$variadic = G__108482__delegate;
return G__108482;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"logseq.shui.util/react->rum'"))
;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.util.adapt_class,c);
}
});
/**
 * Returns the component by the given component name.
 */
logseq.shui.util.component_wrap = (function logseq$shui$util$component_wrap(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108485 = arguments.length;
var i__5767__auto___108486 = (0);
while(true){
if((i__5767__auto___108486 < len__5766__auto___108485)){
args__5772__auto__.push((arguments[i__5767__auto___108486]));

var G__108487 = (i__5767__auto___108486 + (1));
i__5767__auto___108486 = G__108487;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return logseq.shui.util.component_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(logseq.shui.util.component_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (ns,name,p__108472){
var map__108473 = p__108472;
var map__108473__$1 = cljs.core.__destructure_map(map__108473);
var static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108473__$1,new cljs.core.Keyword(null,"static?","static?",-1639874822),false);
var path = logseq.shui.util.get_path(name);
var cp = (function (){
return logseq.shui.util.goog$module$goog$object.getValueByKeys(ns,cljs.core.clj__GT_js(path));
});
return logseq.shui.util.react__GT_rum((cljs.core.truth_(logseq.shui.util.dev_QMARK_)?cp:cp()),static_QMARK_);
}));

(logseq.shui.util.component_wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.util.component_wrap.cljs$lang$applyTo = (function (seq108469){
var G__108470 = cljs.core.first(seq108469);
var seq108469__$1 = cljs.core.next(seq108469);
var G__108471 = cljs.core.first(seq108469__$1);
var seq108469__$2 = cljs.core.next(seq108469__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108470,G__108471,seq108469__$2);
}));

logseq.shui.util.lsui_wrap = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.util.component_wrap,window.LSUI);
logseq.shui.util.lsui_get = (function logseq$shui$util$lsui_get(name){
if(logseq.shui.util.NODETEST){
return ({});
} else {
return (window.LSUI[name]);
}
});

//# sourceMappingURL=logseq.shui.util.js.map
