goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__5043__auto__ = elem.textContent;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__52961 = arguments.length;
switch (G__52961) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5802__auto__ = elem.classList;
if(cljs.core.truth_(temp__5802__auto__)){
var class_list = temp__5802__auto__;
return class_list.contains(c__$1);
} else {
var temp__5804__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5804__auto__)){
var class_name = temp__5804__auto__;
var temp__5804__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5804__auto____$1)){
var i = temp__5804__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__52968 = arguments.length;
switch (G__52968) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__52971 = arguments.length;
switch (G__52971) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__52969_SHARP_){
return (!((p1__52969_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53330 = arguments.length;
var i__5767__auto___53331 = (0);
while(true){
if((i__5767__auto___53331 < len__5766__auto___53330)){
args__5772__auto__.push((arguments[i__5767__auto___53331]));

var G__53332 = (i__5767__auto___53331 + (1));
i__5767__auto___53331 = G__53332;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__52974_53333 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__52975_53334 = null;
var count__52976_53335 = (0);
var i__52977_53336 = (0);
while(true){
if((i__52977_53336 < count__52976_53335)){
var vec__52984_53337 = chunk__52975_53334.cljs$core$IIndexed$_nth$arity$2(null,i__52977_53336);
var k_53338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52984_53337,(0),null);
var v_53339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52984_53337,(1),null);
style.setProperty(dommy.utils.as_str(k_53338),v_53339);


var G__53340 = seq__52974_53333;
var G__53341 = chunk__52975_53334;
var G__53342 = count__52976_53335;
var G__53343 = (i__52977_53336 + (1));
seq__52974_53333 = G__53340;
chunk__52975_53334 = G__53341;
count__52976_53335 = G__53342;
i__52977_53336 = G__53343;
continue;
} else {
var temp__5804__auto___53344 = cljs.core.seq(seq__52974_53333);
if(temp__5804__auto___53344){
var seq__52974_53345__$1 = temp__5804__auto___53344;
if(cljs.core.chunked_seq_QMARK_(seq__52974_53345__$1)){
var c__5565__auto___53346 = cljs.core.chunk_first(seq__52974_53345__$1);
var G__53347 = cljs.core.chunk_rest(seq__52974_53345__$1);
var G__53348 = c__5565__auto___53346;
var G__53349 = cljs.core.count(c__5565__auto___53346);
var G__53350 = (0);
seq__52974_53333 = G__53347;
chunk__52975_53334 = G__53348;
count__52976_53335 = G__53349;
i__52977_53336 = G__53350;
continue;
} else {
var vec__52987_53351 = cljs.core.first(seq__52974_53345__$1);
var k_53352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52987_53351,(0),null);
var v_53353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52987_53351,(1),null);
style.setProperty(dommy.utils.as_str(k_53352),v_53353);


var G__53354 = cljs.core.next(seq__52974_53345__$1);
var G__53355 = null;
var G__53356 = (0);
var G__53357 = (0);
seq__52974_53333 = G__53354;
chunk__52975_53334 = G__53355;
count__52976_53335 = G__53356;
i__52977_53336 = G__53357;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq52972){
var G__52973 = cljs.core.first(seq52972);
var seq52972__$1 = cljs.core.next(seq52972);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52973,seq52972__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53358 = arguments.length;
var i__5767__auto___53359 = (0);
while(true){
if((i__5767__auto___53359 < len__5766__auto___53358)){
args__5772__auto__.push((arguments[i__5767__auto___53359]));

var G__53360 = (i__5767__auto___53359 + (1));
i__5767__auto___53359 = G__53360;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__52992_53361 = cljs.core.seq(keywords);
var chunk__52993_53362 = null;
var count__52994_53363 = (0);
var i__52995_53364 = (0);
while(true){
if((i__52995_53364 < count__52994_53363)){
var kw_53365 = chunk__52993_53362.cljs$core$IIndexed$_nth$arity$2(null,i__52995_53364);
style.removeProperty(dommy.utils.as_str(kw_53365));


var G__53366 = seq__52992_53361;
var G__53367 = chunk__52993_53362;
var G__53368 = count__52994_53363;
var G__53369 = (i__52995_53364 + (1));
seq__52992_53361 = G__53366;
chunk__52993_53362 = G__53367;
count__52994_53363 = G__53368;
i__52995_53364 = G__53369;
continue;
} else {
var temp__5804__auto___53370 = cljs.core.seq(seq__52992_53361);
if(temp__5804__auto___53370){
var seq__52992_53371__$1 = temp__5804__auto___53370;
if(cljs.core.chunked_seq_QMARK_(seq__52992_53371__$1)){
var c__5565__auto___53372 = cljs.core.chunk_first(seq__52992_53371__$1);
var G__53373 = cljs.core.chunk_rest(seq__52992_53371__$1);
var G__53374 = c__5565__auto___53372;
var G__53375 = cljs.core.count(c__5565__auto___53372);
var G__53376 = (0);
seq__52992_53361 = G__53373;
chunk__52993_53362 = G__53374;
count__52994_53363 = G__53375;
i__52995_53364 = G__53376;
continue;
} else {
var kw_53377 = cljs.core.first(seq__52992_53371__$1);
style.removeProperty(dommy.utils.as_str(kw_53377));


var G__53378 = cljs.core.next(seq__52992_53371__$1);
var G__53379 = null;
var G__53380 = (0);
var G__53381 = (0);
seq__52992_53361 = G__53378;
chunk__52993_53362 = G__53379;
count__52994_53363 = G__53380;
i__52995_53364 = G__53381;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq52990){
var G__52991 = cljs.core.first(seq52990);
var seq52990__$1 = cljs.core.next(seq52990);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52991,seq52990__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53382 = arguments.length;
var i__5767__auto___53383 = (0);
while(true){
if((i__5767__auto___53383 < len__5766__auto___53382)){
args__5772__auto__.push((arguments[i__5767__auto___53383]));

var G__53384 = (i__5767__auto___53383 + (1));
i__5767__auto___53383 = G__53384;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__52998_53385 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__52999_53386 = null;
var count__53000_53387 = (0);
var i__53001_53388 = (0);
while(true){
if((i__53001_53388 < count__53000_53387)){
var vec__53008_53389 = chunk__52999_53386.cljs$core$IIndexed$_nth$arity$2(null,i__53001_53388);
var k_53390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53008_53389,(0),null);
var v_53391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53008_53389,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_53390,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_53391),"px"].join('')], 0));


var G__53392 = seq__52998_53385;
var G__53393 = chunk__52999_53386;
var G__53394 = count__53000_53387;
var G__53395 = (i__53001_53388 + (1));
seq__52998_53385 = G__53392;
chunk__52999_53386 = G__53393;
count__53000_53387 = G__53394;
i__53001_53388 = G__53395;
continue;
} else {
var temp__5804__auto___53396 = cljs.core.seq(seq__52998_53385);
if(temp__5804__auto___53396){
var seq__52998_53397__$1 = temp__5804__auto___53396;
if(cljs.core.chunked_seq_QMARK_(seq__52998_53397__$1)){
var c__5565__auto___53398 = cljs.core.chunk_first(seq__52998_53397__$1);
var G__53399 = cljs.core.chunk_rest(seq__52998_53397__$1);
var G__53400 = c__5565__auto___53398;
var G__53401 = cljs.core.count(c__5565__auto___53398);
var G__53402 = (0);
seq__52998_53385 = G__53399;
chunk__52999_53386 = G__53400;
count__53000_53387 = G__53401;
i__53001_53388 = G__53402;
continue;
} else {
var vec__53011_53403 = cljs.core.first(seq__52998_53397__$1);
var k_53404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011_53403,(0),null);
var v_53405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011_53403,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_53404,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_53405),"px"].join('')], 0));


var G__53406 = cljs.core.next(seq__52998_53397__$1);
var G__53407 = null;
var G__53408 = (0);
var G__53409 = (0);
seq__52998_53385 = G__53406;
chunk__52999_53386 = G__53407;
count__53000_53387 = G__53408;
i__53001_53388 = G__53409;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq52996){
var G__52997 = cljs.core.first(seq52996);
var seq52996__$1 = cljs.core.next(seq52996);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52997,seq52996__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__53019 = arguments.length;
switch (G__53019) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53411 = arguments.length;
var i__5767__auto___53412 = (0);
while(true){
if((i__5767__auto___53412 < len__5766__auto___53411)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53412]));

var G__53413 = (i__5767__auto___53412 + (1));
i__5767__auto___53412 = G__53413;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__53020 = elem;
(G__53020[k__$1] = v);

return G__53020;
} else {
var G__53021 = elem;
G__53021.setAttribute(k__$1,v);

return G__53021;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__53022_53414 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__53023_53415 = null;
var count__53024_53416 = (0);
var i__53025_53417 = (0);
while(true){
if((i__53025_53417 < count__53024_53416)){
var vec__53032_53418 = chunk__53023_53415.cljs$core$IIndexed$_nth$arity$2(null,i__53025_53417);
var k_53419__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53032_53418,(0),null);
var v_53420__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53032_53418,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_53419__$1,v_53420__$1);


var G__53421 = seq__53022_53414;
var G__53422 = chunk__53023_53415;
var G__53423 = count__53024_53416;
var G__53424 = (i__53025_53417 + (1));
seq__53022_53414 = G__53421;
chunk__53023_53415 = G__53422;
count__53024_53416 = G__53423;
i__53025_53417 = G__53424;
continue;
} else {
var temp__5804__auto___53425 = cljs.core.seq(seq__53022_53414);
if(temp__5804__auto___53425){
var seq__53022_53426__$1 = temp__5804__auto___53425;
if(cljs.core.chunked_seq_QMARK_(seq__53022_53426__$1)){
var c__5565__auto___53427 = cljs.core.chunk_first(seq__53022_53426__$1);
var G__53428 = cljs.core.chunk_rest(seq__53022_53426__$1);
var G__53429 = c__5565__auto___53427;
var G__53430 = cljs.core.count(c__5565__auto___53427);
var G__53431 = (0);
seq__53022_53414 = G__53428;
chunk__53023_53415 = G__53429;
count__53024_53416 = G__53430;
i__53025_53417 = G__53431;
continue;
} else {
var vec__53035_53432 = cljs.core.first(seq__53022_53426__$1);
var k_53433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53035_53432,(0),null);
var v_53434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53035_53432,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_53433__$1,v_53434__$1);


var G__53435 = cljs.core.next(seq__53022_53426__$1);
var G__53436 = null;
var G__53437 = (0);
var G__53438 = (0);
seq__53022_53414 = G__53435;
chunk__53023_53415 = G__53436;
count__53024_53416 = G__53437;
i__53025_53417 = G__53438;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq53015){
var G__53016 = cljs.core.first(seq53015);
var seq53015__$1 = cljs.core.next(seq53015);
var G__53017 = cljs.core.first(seq53015__$1);
var seq53015__$2 = cljs.core.next(seq53015__$1);
var G__53018 = cljs.core.first(seq53015__$2);
var seq53015__$3 = cljs.core.next(seq53015__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53016,G__53017,G__53018,seq53015__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__53042 = arguments.length;
switch (G__53042) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53440 = arguments.length;
var i__5767__auto___53441 = (0);
while(true){
if((i__5767__auto___53441 < len__5766__auto___53440)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53441]));

var G__53442 = (i__5767__auto___53441 + (1));
i__5767__auto___53441 = G__53442;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_53443__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__53043 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__53043.cljs$core$IFn$_invoke$arity$1 ? fexpr__53043.cljs$core$IFn$_invoke$arity$1(k_53443__$1) : fexpr__53043.call(null,k_53443__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_53443__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__53044_53444 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__53045_53445 = null;
var count__53046_53446 = (0);
var i__53047_53447 = (0);
while(true){
if((i__53047_53447 < count__53046_53446)){
var k_53448__$1 = chunk__53045_53445.cljs$core$IIndexed$_nth$arity$2(null,i__53047_53447);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_53448__$1);


var G__53449 = seq__53044_53444;
var G__53450 = chunk__53045_53445;
var G__53451 = count__53046_53446;
var G__53452 = (i__53047_53447 + (1));
seq__53044_53444 = G__53449;
chunk__53045_53445 = G__53450;
count__53046_53446 = G__53451;
i__53047_53447 = G__53452;
continue;
} else {
var temp__5804__auto___53453 = cljs.core.seq(seq__53044_53444);
if(temp__5804__auto___53453){
var seq__53044_53454__$1 = temp__5804__auto___53453;
if(cljs.core.chunked_seq_QMARK_(seq__53044_53454__$1)){
var c__5565__auto___53455 = cljs.core.chunk_first(seq__53044_53454__$1);
var G__53456 = cljs.core.chunk_rest(seq__53044_53454__$1);
var G__53457 = c__5565__auto___53455;
var G__53458 = cljs.core.count(c__5565__auto___53455);
var G__53459 = (0);
seq__53044_53444 = G__53456;
chunk__53045_53445 = G__53457;
count__53046_53446 = G__53458;
i__53047_53447 = G__53459;
continue;
} else {
var k_53460__$1 = cljs.core.first(seq__53044_53454__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_53460__$1);


var G__53461 = cljs.core.next(seq__53044_53454__$1);
var G__53462 = null;
var G__53463 = (0);
var G__53464 = (0);
seq__53044_53444 = G__53461;
chunk__53045_53445 = G__53462;
count__53046_53446 = G__53463;
i__53047_53447 = G__53464;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq53039){
var G__53040 = cljs.core.first(seq53039);
var seq53039__$1 = cljs.core.next(seq53039);
var G__53041 = cljs.core.first(seq53039__$1);
var seq53039__$2 = cljs.core.next(seq53039__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53040,G__53041,seq53039__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__53049 = arguments.length;
switch (G__53049) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__53054 = arguments.length;
switch (G__53054) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53467 = arguments.length;
var i__5767__auto___53468 = (0);
while(true){
if((i__5767__auto___53468 < len__5766__auto___53467)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53468]));

var G__53469 = (i__5767__auto___53468 + (1));
i__5767__auto___53468 = G__53469;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5802__auto___53470 = elem.classList;
if(cljs.core.truth_(temp__5802__auto___53470)){
var class_list_53471 = temp__5802__auto___53470;
var seq__53055_53472 = cljs.core.seq(classes__$1);
var chunk__53056_53473 = null;
var count__53057_53474 = (0);
var i__53058_53475 = (0);
while(true){
if((i__53058_53475 < count__53057_53474)){
var c_53476 = chunk__53056_53473.cljs$core$IIndexed$_nth$arity$2(null,i__53058_53475);
class_list_53471.add(c_53476);


var G__53477 = seq__53055_53472;
var G__53478 = chunk__53056_53473;
var G__53479 = count__53057_53474;
var G__53480 = (i__53058_53475 + (1));
seq__53055_53472 = G__53477;
chunk__53056_53473 = G__53478;
count__53057_53474 = G__53479;
i__53058_53475 = G__53480;
continue;
} else {
var temp__5804__auto___53481 = cljs.core.seq(seq__53055_53472);
if(temp__5804__auto___53481){
var seq__53055_53482__$1 = temp__5804__auto___53481;
if(cljs.core.chunked_seq_QMARK_(seq__53055_53482__$1)){
var c__5565__auto___53483 = cljs.core.chunk_first(seq__53055_53482__$1);
var G__53484 = cljs.core.chunk_rest(seq__53055_53482__$1);
var G__53485 = c__5565__auto___53483;
var G__53486 = cljs.core.count(c__5565__auto___53483);
var G__53487 = (0);
seq__53055_53472 = G__53484;
chunk__53056_53473 = G__53485;
count__53057_53474 = G__53486;
i__53058_53475 = G__53487;
continue;
} else {
var c_53488 = cljs.core.first(seq__53055_53482__$1);
class_list_53471.add(c_53488);


var G__53489 = cljs.core.next(seq__53055_53482__$1);
var G__53490 = null;
var G__53491 = (0);
var G__53492 = (0);
seq__53055_53472 = G__53489;
chunk__53056_53473 = G__53490;
count__53057_53474 = G__53491;
i__53058_53475 = G__53492;
continue;
}
} else {
}
}
break;
}
} else {
var seq__53059_53493 = cljs.core.seq(classes__$1);
var chunk__53060_53494 = null;
var count__53061_53495 = (0);
var i__53062_53496 = (0);
while(true){
if((i__53062_53496 < count__53061_53495)){
var c_53497 = chunk__53060_53494.cljs$core$IIndexed$_nth$arity$2(null,i__53062_53496);
var class_name_53498 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_53498,c_53497))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_53498 === ""))?c_53497:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_53498)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_53497)].join('')));
}


var G__53499 = seq__53059_53493;
var G__53500 = chunk__53060_53494;
var G__53501 = count__53061_53495;
var G__53502 = (i__53062_53496 + (1));
seq__53059_53493 = G__53499;
chunk__53060_53494 = G__53500;
count__53061_53495 = G__53501;
i__53062_53496 = G__53502;
continue;
} else {
var temp__5804__auto___53503 = cljs.core.seq(seq__53059_53493);
if(temp__5804__auto___53503){
var seq__53059_53504__$1 = temp__5804__auto___53503;
if(cljs.core.chunked_seq_QMARK_(seq__53059_53504__$1)){
var c__5565__auto___53505 = cljs.core.chunk_first(seq__53059_53504__$1);
var G__53506 = cljs.core.chunk_rest(seq__53059_53504__$1);
var G__53507 = c__5565__auto___53505;
var G__53508 = cljs.core.count(c__5565__auto___53505);
var G__53509 = (0);
seq__53059_53493 = G__53506;
chunk__53060_53494 = G__53507;
count__53061_53495 = G__53508;
i__53062_53496 = G__53509;
continue;
} else {
var c_53510 = cljs.core.first(seq__53059_53504__$1);
var class_name_53511 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_53511,c_53510))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_53511 === ""))?c_53510:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_53511)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_53510)].join('')));
}


var G__53512 = cljs.core.next(seq__53059_53504__$1);
var G__53513 = null;
var G__53514 = (0);
var G__53515 = (0);
seq__53059_53493 = G__53512;
chunk__53060_53494 = G__53513;
count__53061_53495 = G__53514;
i__53062_53496 = G__53515;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__53063_53516 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__53064_53517 = null;
var count__53065_53518 = (0);
var i__53066_53519 = (0);
while(true){
if((i__53066_53519 < count__53065_53518)){
var c_53520 = chunk__53064_53517.cljs$core$IIndexed$_nth$arity$2(null,i__53066_53519);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_53520);


var G__53521 = seq__53063_53516;
var G__53522 = chunk__53064_53517;
var G__53523 = count__53065_53518;
var G__53524 = (i__53066_53519 + (1));
seq__53063_53516 = G__53521;
chunk__53064_53517 = G__53522;
count__53065_53518 = G__53523;
i__53066_53519 = G__53524;
continue;
} else {
var temp__5804__auto___53525 = cljs.core.seq(seq__53063_53516);
if(temp__5804__auto___53525){
var seq__53063_53526__$1 = temp__5804__auto___53525;
if(cljs.core.chunked_seq_QMARK_(seq__53063_53526__$1)){
var c__5565__auto___53527 = cljs.core.chunk_first(seq__53063_53526__$1);
var G__53528 = cljs.core.chunk_rest(seq__53063_53526__$1);
var G__53529 = c__5565__auto___53527;
var G__53530 = cljs.core.count(c__5565__auto___53527);
var G__53531 = (0);
seq__53063_53516 = G__53528;
chunk__53064_53517 = G__53529;
count__53065_53518 = G__53530;
i__53066_53519 = G__53531;
continue;
} else {
var c_53532 = cljs.core.first(seq__53063_53526__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_53532);


var G__53533 = cljs.core.next(seq__53063_53526__$1);
var G__53534 = null;
var G__53535 = (0);
var G__53536 = (0);
seq__53063_53516 = G__53533;
chunk__53064_53517 = G__53534;
count__53065_53518 = G__53535;
i__53066_53519 = G__53536;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq53051){
var G__53052 = cljs.core.first(seq53051);
var seq53051__$1 = cljs.core.next(seq53051);
var G__53053 = cljs.core.first(seq53051__$1);
var seq53051__$2 = cljs.core.next(seq53051__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53052,G__53053,seq53051__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__53071 = arguments.length;
switch (G__53071) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53538 = arguments.length;
var i__5767__auto___53539 = (0);
while(true){
if((i__5767__auto___53539 < len__5766__auto___53538)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53539]));

var G__53540 = (i__5767__auto___53539 + (1));
i__5767__auto___53539 = G__53540;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5802__auto___53541 = elem.classList;
if(cljs.core.truth_(temp__5802__auto___53541)){
var class_list_53542 = temp__5802__auto___53541;
class_list_53542.remove(c__$1);
} else {
var class_name_53543 = dommy.core.class$(elem);
var new_class_name_53544 = dommy.utils.remove_class_str(class_name_53543,c__$1);
if((class_name_53543 === new_class_name_53544)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_53544);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__53072 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__53073 = null;
var count__53074 = (0);
var i__53075 = (0);
while(true){
if((i__53075 < count__53074)){
var c = chunk__53073.cljs$core$IIndexed$_nth$arity$2(null,i__53075);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__53545 = seq__53072;
var G__53546 = chunk__53073;
var G__53547 = count__53074;
var G__53548 = (i__53075 + (1));
seq__53072 = G__53545;
chunk__53073 = G__53546;
count__53074 = G__53547;
i__53075 = G__53548;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53072);
if(temp__5804__auto__){
var seq__53072__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53072__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__53072__$1);
var G__53549 = cljs.core.chunk_rest(seq__53072__$1);
var G__53550 = c__5565__auto__;
var G__53551 = cljs.core.count(c__5565__auto__);
var G__53552 = (0);
seq__53072 = G__53549;
chunk__53073 = G__53550;
count__53074 = G__53551;
i__53075 = G__53552;
continue;
} else {
var c = cljs.core.first(seq__53072__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__53553 = cljs.core.next(seq__53072__$1);
var G__53554 = null;
var G__53555 = (0);
var G__53556 = (0);
seq__53072 = G__53553;
chunk__53073 = G__53554;
count__53074 = G__53555;
i__53075 = G__53556;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq53068){
var G__53069 = cljs.core.first(seq53068);
var seq53068__$1 = cljs.core.next(seq53068);
var G__53070 = cljs.core.first(seq53068__$1);
var seq53068__$2 = cljs.core.next(seq53068__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53069,G__53070,seq53068__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__53077 = arguments.length;
switch (G__53077) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5802__auto___53558 = elem.classList;
if(cljs.core.truth_(temp__5802__auto___53558)){
var class_list_53559 = temp__5802__auto___53558;
class_list_53559.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__53079 = arguments.length;
switch (G__53079) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__53081 = arguments.length;
switch (G__53081) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__53086 = arguments.length;
switch (G__53086) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53563 = arguments.length;
var i__5767__auto___53564 = (0);
while(true){
if((i__5767__auto___53564 < len__5766__auto___53563)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53564]));

var G__53565 = (i__5767__auto___53564 + (1));
i__5767__auto___53564 = G__53565;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__53087 = parent;
G__53087.appendChild(child);

return G__53087;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__53088_53566 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__53089_53567 = null;
var count__53090_53568 = (0);
var i__53091_53569 = (0);
while(true){
if((i__53091_53569 < count__53090_53568)){
var c_53570 = chunk__53089_53567.cljs$core$IIndexed$_nth$arity$2(null,i__53091_53569);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53570);


var G__53571 = seq__53088_53566;
var G__53572 = chunk__53089_53567;
var G__53573 = count__53090_53568;
var G__53574 = (i__53091_53569 + (1));
seq__53088_53566 = G__53571;
chunk__53089_53567 = G__53572;
count__53090_53568 = G__53573;
i__53091_53569 = G__53574;
continue;
} else {
var temp__5804__auto___53575 = cljs.core.seq(seq__53088_53566);
if(temp__5804__auto___53575){
var seq__53088_53576__$1 = temp__5804__auto___53575;
if(cljs.core.chunked_seq_QMARK_(seq__53088_53576__$1)){
var c__5565__auto___53577 = cljs.core.chunk_first(seq__53088_53576__$1);
var G__53578 = cljs.core.chunk_rest(seq__53088_53576__$1);
var G__53579 = c__5565__auto___53577;
var G__53580 = cljs.core.count(c__5565__auto___53577);
var G__53581 = (0);
seq__53088_53566 = G__53578;
chunk__53089_53567 = G__53579;
count__53090_53568 = G__53580;
i__53091_53569 = G__53581;
continue;
} else {
var c_53582 = cljs.core.first(seq__53088_53576__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53582);


var G__53583 = cljs.core.next(seq__53088_53576__$1);
var G__53584 = null;
var G__53585 = (0);
var G__53586 = (0);
seq__53088_53566 = G__53583;
chunk__53089_53567 = G__53584;
count__53090_53568 = G__53585;
i__53091_53569 = G__53586;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq53083){
var G__53084 = cljs.core.first(seq53083);
var seq53083__$1 = cljs.core.next(seq53083);
var G__53085 = cljs.core.first(seq53083__$1);
var seq53083__$2 = cljs.core.next(seq53083__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53084,G__53085,seq53083__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__53096 = arguments.length;
switch (G__53096) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53588 = arguments.length;
var i__5767__auto___53589 = (0);
while(true){
if((i__5767__auto___53589 < len__5766__auto___53588)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53589]));

var G__53590 = (i__5767__auto___53589 + (1));
i__5767__auto___53589 = G__53590;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__53097 = parent;
G__53097.insertBefore(child,parent.firstChild);

return G__53097;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__53098_53591 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__53099_53592 = null;
var count__53100_53593 = (0);
var i__53101_53594 = (0);
while(true){
if((i__53101_53594 < count__53100_53593)){
var c_53595 = chunk__53099_53592.cljs$core$IIndexed$_nth$arity$2(null,i__53101_53594);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53595);


var G__53596 = seq__53098_53591;
var G__53597 = chunk__53099_53592;
var G__53598 = count__53100_53593;
var G__53599 = (i__53101_53594 + (1));
seq__53098_53591 = G__53596;
chunk__53099_53592 = G__53597;
count__53100_53593 = G__53598;
i__53101_53594 = G__53599;
continue;
} else {
var temp__5804__auto___53600 = cljs.core.seq(seq__53098_53591);
if(temp__5804__auto___53600){
var seq__53098_53601__$1 = temp__5804__auto___53600;
if(cljs.core.chunked_seq_QMARK_(seq__53098_53601__$1)){
var c__5565__auto___53602 = cljs.core.chunk_first(seq__53098_53601__$1);
var G__53603 = cljs.core.chunk_rest(seq__53098_53601__$1);
var G__53604 = c__5565__auto___53602;
var G__53605 = cljs.core.count(c__5565__auto___53602);
var G__53606 = (0);
seq__53098_53591 = G__53603;
chunk__53099_53592 = G__53604;
count__53100_53593 = G__53605;
i__53101_53594 = G__53606;
continue;
} else {
var c_53607 = cljs.core.first(seq__53098_53601__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53607);


var G__53608 = cljs.core.next(seq__53098_53601__$1);
var G__53609 = null;
var G__53610 = (0);
var G__53611 = (0);
seq__53098_53591 = G__53608;
chunk__53099_53592 = G__53609;
count__53100_53593 = G__53610;
i__53101_53594 = G__53611;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq53093){
var G__53094 = cljs.core.first(seq53093);
var seq53093__$1 = cljs.core.next(seq53093);
var G__53095 = cljs.core.first(seq53093__$1);
var seq53093__$2 = cljs.core.next(seq53093__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53094,G__53095,seq53093__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5802__auto___53612 = other.nextSibling;
if(cljs.core.truth_(temp__5802__auto___53612)){
var next_53613 = temp__5802__auto___53612;
dommy.core.insert_before_BANG_(elem,next_53613);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__53103 = arguments.length;
switch (G__53103) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__53104 = p;
G__53104.removeChild(elem);

return G__53104;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53105){
var vec__53106 = p__53105;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53106,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53106,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5043__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = related_target;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5041__auto__ = selected_target;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__5041__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5043__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53615 = arguments.length;
var i__5767__auto___53616 = (0);
while(true){
if((i__5767__auto___53616 < len__5766__auto___53615)){
args__5772__auto__.push((arguments[i__5767__auto___53616]));

var G__53617 = (i__5767__auto___53616 + (1));
i__5767__auto___53616 = G__53617;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq53109){
var G__53110 = cljs.core.first(seq53109);
var seq53109__$1 = cljs.core.next(seq53109);
var G__53111 = cljs.core.first(seq53109__$1);
var seq53109__$2 = cljs.core.next(seq53109__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53110,G__53111,seq53109__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53618 = arguments.length;
var i__5767__auto___53619 = (0);
while(true){
if((i__5767__auto___53619 < len__5766__auto___53618)){
args__5772__auto__.push((arguments[i__5767__auto___53619]));

var G__53620 = (i__5767__auto___53619 + (1));
i__5767__auto___53619 = G__53620;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__53114_53621 = dommy.core.elem_and_selector(elem_sel);
var elem_53622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114_53621,(0),null);
var selector_53623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114_53621,(1),null);
var seq__53117_53624 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__53124_53625 = null;
var count__53125_53626 = (0);
var i__53126_53627 = (0);
while(true){
if((i__53126_53627 < count__53125_53626)){
var vec__53179_53628 = chunk__53124_53625.cljs$core$IIndexed$_nth$arity$2(null,i__53126_53627);
var orig_type_53629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53179_53628,(0),null);
var f_53630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53179_53628,(1),null);
var seq__53127_53631 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53629,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53629,cljs.core.identity])));
var chunk__53129_53632 = null;
var count__53130_53633 = (0);
var i__53131_53634 = (0);
while(true){
if((i__53131_53634 < count__53130_53633)){
var vec__53192_53635 = chunk__53129_53632.cljs$core$IIndexed$_nth$arity$2(null,i__53131_53634);
var actual_type_53636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53192_53635,(0),null);
var factory_53637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53192_53635,(1),null);
var canonical_f_53638 = (function (){var G__53196 = (factory_53637.cljs$core$IFn$_invoke$arity$1 ? factory_53637.cljs$core$IFn$_invoke$arity$1(f_53630) : factory_53637.call(null,f_53630));
var fexpr__53195 = (cljs.core.truth_(selector_53623)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53622,selector_53623):cljs.core.identity);
return (fexpr__53195.cljs$core$IFn$_invoke$arity$1 ? fexpr__53195.cljs$core$IFn$_invoke$arity$1(G__53196) : fexpr__53195.call(null,G__53196));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53622,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53623,actual_type_53636,f_53630], null),canonical_f_53638], 0));

if(cljs.core.truth_(elem_53622.addEventListener)){
elem_53622.addEventListener(cljs.core.name(actual_type_53636),canonical_f_53638);
} else {
elem_53622.attachEvent(cljs.core.name(actual_type_53636),canonical_f_53638);
}


var G__53639 = seq__53127_53631;
var G__53640 = chunk__53129_53632;
var G__53641 = count__53130_53633;
var G__53642 = (i__53131_53634 + (1));
seq__53127_53631 = G__53639;
chunk__53129_53632 = G__53640;
count__53130_53633 = G__53641;
i__53131_53634 = G__53642;
continue;
} else {
var temp__5804__auto___53643 = cljs.core.seq(seq__53127_53631);
if(temp__5804__auto___53643){
var seq__53127_53644__$1 = temp__5804__auto___53643;
if(cljs.core.chunked_seq_QMARK_(seq__53127_53644__$1)){
var c__5565__auto___53645 = cljs.core.chunk_first(seq__53127_53644__$1);
var G__53646 = cljs.core.chunk_rest(seq__53127_53644__$1);
var G__53647 = c__5565__auto___53645;
var G__53648 = cljs.core.count(c__5565__auto___53645);
var G__53649 = (0);
seq__53127_53631 = G__53646;
chunk__53129_53632 = G__53647;
count__53130_53633 = G__53648;
i__53131_53634 = G__53649;
continue;
} else {
var vec__53197_53650 = cljs.core.first(seq__53127_53644__$1);
var actual_type_53651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53197_53650,(0),null);
var factory_53652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53197_53650,(1),null);
var canonical_f_53653 = (function (){var G__53201 = (factory_53652.cljs$core$IFn$_invoke$arity$1 ? factory_53652.cljs$core$IFn$_invoke$arity$1(f_53630) : factory_53652.call(null,f_53630));
var fexpr__53200 = (cljs.core.truth_(selector_53623)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53622,selector_53623):cljs.core.identity);
return (fexpr__53200.cljs$core$IFn$_invoke$arity$1 ? fexpr__53200.cljs$core$IFn$_invoke$arity$1(G__53201) : fexpr__53200.call(null,G__53201));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53622,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53623,actual_type_53651,f_53630], null),canonical_f_53653], 0));

if(cljs.core.truth_(elem_53622.addEventListener)){
elem_53622.addEventListener(cljs.core.name(actual_type_53651),canonical_f_53653);
} else {
elem_53622.attachEvent(cljs.core.name(actual_type_53651),canonical_f_53653);
}


var G__53654 = cljs.core.next(seq__53127_53644__$1);
var G__53655 = null;
var G__53656 = (0);
var G__53657 = (0);
seq__53127_53631 = G__53654;
chunk__53129_53632 = G__53655;
count__53130_53633 = G__53656;
i__53131_53634 = G__53657;
continue;
}
} else {
}
}
break;
}

var G__53658 = seq__53117_53624;
var G__53659 = chunk__53124_53625;
var G__53660 = count__53125_53626;
var G__53661 = (i__53126_53627 + (1));
seq__53117_53624 = G__53658;
chunk__53124_53625 = G__53659;
count__53125_53626 = G__53660;
i__53126_53627 = G__53661;
continue;
} else {
var temp__5804__auto___53662 = cljs.core.seq(seq__53117_53624);
if(temp__5804__auto___53662){
var seq__53117_53663__$1 = temp__5804__auto___53662;
if(cljs.core.chunked_seq_QMARK_(seq__53117_53663__$1)){
var c__5565__auto___53664 = cljs.core.chunk_first(seq__53117_53663__$1);
var G__53665 = cljs.core.chunk_rest(seq__53117_53663__$1);
var G__53666 = c__5565__auto___53664;
var G__53667 = cljs.core.count(c__5565__auto___53664);
var G__53668 = (0);
seq__53117_53624 = G__53665;
chunk__53124_53625 = G__53666;
count__53125_53626 = G__53667;
i__53126_53627 = G__53668;
continue;
} else {
var vec__53202_53669 = cljs.core.first(seq__53117_53663__$1);
var orig_type_53670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53202_53669,(0),null);
var f_53671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53202_53669,(1),null);
var seq__53118_53672 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53670,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53670,cljs.core.identity])));
var chunk__53120_53673 = null;
var count__53121_53674 = (0);
var i__53122_53675 = (0);
while(true){
if((i__53122_53675 < count__53121_53674)){
var vec__53215_53676 = chunk__53120_53673.cljs$core$IIndexed$_nth$arity$2(null,i__53122_53675);
var actual_type_53677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53215_53676,(0),null);
var factory_53678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53215_53676,(1),null);
var canonical_f_53679 = (function (){var G__53219 = (factory_53678.cljs$core$IFn$_invoke$arity$1 ? factory_53678.cljs$core$IFn$_invoke$arity$1(f_53671) : factory_53678.call(null,f_53671));
var fexpr__53218 = (cljs.core.truth_(selector_53623)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53622,selector_53623):cljs.core.identity);
return (fexpr__53218.cljs$core$IFn$_invoke$arity$1 ? fexpr__53218.cljs$core$IFn$_invoke$arity$1(G__53219) : fexpr__53218.call(null,G__53219));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53622,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53623,actual_type_53677,f_53671], null),canonical_f_53679], 0));

if(cljs.core.truth_(elem_53622.addEventListener)){
elem_53622.addEventListener(cljs.core.name(actual_type_53677),canonical_f_53679);
} else {
elem_53622.attachEvent(cljs.core.name(actual_type_53677),canonical_f_53679);
}


var G__53680 = seq__53118_53672;
var G__53681 = chunk__53120_53673;
var G__53682 = count__53121_53674;
var G__53683 = (i__53122_53675 + (1));
seq__53118_53672 = G__53680;
chunk__53120_53673 = G__53681;
count__53121_53674 = G__53682;
i__53122_53675 = G__53683;
continue;
} else {
var temp__5804__auto___53684__$1 = cljs.core.seq(seq__53118_53672);
if(temp__5804__auto___53684__$1){
var seq__53118_53685__$1 = temp__5804__auto___53684__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53118_53685__$1)){
var c__5565__auto___53686 = cljs.core.chunk_first(seq__53118_53685__$1);
var G__53687 = cljs.core.chunk_rest(seq__53118_53685__$1);
var G__53688 = c__5565__auto___53686;
var G__53689 = cljs.core.count(c__5565__auto___53686);
var G__53690 = (0);
seq__53118_53672 = G__53687;
chunk__53120_53673 = G__53688;
count__53121_53674 = G__53689;
i__53122_53675 = G__53690;
continue;
} else {
var vec__53220_53691 = cljs.core.first(seq__53118_53685__$1);
var actual_type_53692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53220_53691,(0),null);
var factory_53693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53220_53691,(1),null);
var canonical_f_53694 = (function (){var G__53224 = (factory_53693.cljs$core$IFn$_invoke$arity$1 ? factory_53693.cljs$core$IFn$_invoke$arity$1(f_53671) : factory_53693.call(null,f_53671));
var fexpr__53223 = (cljs.core.truth_(selector_53623)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53622,selector_53623):cljs.core.identity);
return (fexpr__53223.cljs$core$IFn$_invoke$arity$1 ? fexpr__53223.cljs$core$IFn$_invoke$arity$1(G__53224) : fexpr__53223.call(null,G__53224));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53622,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53623,actual_type_53692,f_53671], null),canonical_f_53694], 0));

if(cljs.core.truth_(elem_53622.addEventListener)){
elem_53622.addEventListener(cljs.core.name(actual_type_53692),canonical_f_53694);
} else {
elem_53622.attachEvent(cljs.core.name(actual_type_53692),canonical_f_53694);
}


var G__53695 = cljs.core.next(seq__53118_53685__$1);
var G__53696 = null;
var G__53697 = (0);
var G__53698 = (0);
seq__53118_53672 = G__53695;
chunk__53120_53673 = G__53696;
count__53121_53674 = G__53697;
i__53122_53675 = G__53698;
continue;
}
} else {
}
}
break;
}

var G__53699 = cljs.core.next(seq__53117_53663__$1);
var G__53700 = null;
var G__53701 = (0);
var G__53702 = (0);
seq__53117_53624 = G__53699;
chunk__53124_53625 = G__53700;
count__53125_53626 = G__53701;
i__53126_53627 = G__53702;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq53112){
var G__53113 = cljs.core.first(seq53112);
var seq53112__$1 = cljs.core.next(seq53112);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53113,seq53112__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53703 = arguments.length;
var i__5767__auto___53704 = (0);
while(true){
if((i__5767__auto___53704 < len__5766__auto___53703)){
args__5772__auto__.push((arguments[i__5767__auto___53704]));

var G__53705 = (i__5767__auto___53704 + (1));
i__5767__auto___53704 = G__53705;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__53227_53706 = dommy.core.elem_and_selector(elem_sel);
var elem_53707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53227_53706,(0),null);
var selector_53708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53227_53706,(1),null);
var seq__53230_53709 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__53237_53710 = null;
var count__53238_53711 = (0);
var i__53239_53712 = (0);
while(true){
if((i__53239_53712 < count__53238_53711)){
var vec__53276_53713 = chunk__53237_53710.cljs$core$IIndexed$_nth$arity$2(null,i__53239_53712);
var orig_type_53714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53276_53713,(0),null);
var f_53715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53276_53713,(1),null);
var seq__53240_53716 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53714,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53714,cljs.core.identity])));
var chunk__53242_53717 = null;
var count__53243_53718 = (0);
var i__53244_53719 = (0);
while(true){
if((i__53244_53719 < count__53243_53718)){
var vec__53285_53720 = chunk__53242_53717.cljs$core$IIndexed$_nth$arity$2(null,i__53244_53719);
var actual_type_53721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53285_53720,(0),null);
var __53722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53285_53720,(1),null);
var keys_53723 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53708,actual_type_53721,f_53715], null);
var canonical_f_53724 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53707),keys_53723);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53707,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53723], 0));

if(cljs.core.truth_(elem_53707.removeEventListener)){
elem_53707.removeEventListener(cljs.core.name(actual_type_53721),canonical_f_53724);
} else {
elem_53707.detachEvent(cljs.core.name(actual_type_53721),canonical_f_53724);
}


var G__53725 = seq__53240_53716;
var G__53726 = chunk__53242_53717;
var G__53727 = count__53243_53718;
var G__53728 = (i__53244_53719 + (1));
seq__53240_53716 = G__53725;
chunk__53242_53717 = G__53726;
count__53243_53718 = G__53727;
i__53244_53719 = G__53728;
continue;
} else {
var temp__5804__auto___53729 = cljs.core.seq(seq__53240_53716);
if(temp__5804__auto___53729){
var seq__53240_53730__$1 = temp__5804__auto___53729;
if(cljs.core.chunked_seq_QMARK_(seq__53240_53730__$1)){
var c__5565__auto___53731 = cljs.core.chunk_first(seq__53240_53730__$1);
var G__53732 = cljs.core.chunk_rest(seq__53240_53730__$1);
var G__53733 = c__5565__auto___53731;
var G__53734 = cljs.core.count(c__5565__auto___53731);
var G__53735 = (0);
seq__53240_53716 = G__53732;
chunk__53242_53717 = G__53733;
count__53243_53718 = G__53734;
i__53244_53719 = G__53735;
continue;
} else {
var vec__53288_53736 = cljs.core.first(seq__53240_53730__$1);
var actual_type_53737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53288_53736,(0),null);
var __53738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53288_53736,(1),null);
var keys_53739 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53708,actual_type_53737,f_53715], null);
var canonical_f_53740 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53707),keys_53739);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53707,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53739], 0));

if(cljs.core.truth_(elem_53707.removeEventListener)){
elem_53707.removeEventListener(cljs.core.name(actual_type_53737),canonical_f_53740);
} else {
elem_53707.detachEvent(cljs.core.name(actual_type_53737),canonical_f_53740);
}


var G__53741 = cljs.core.next(seq__53240_53730__$1);
var G__53742 = null;
var G__53743 = (0);
var G__53744 = (0);
seq__53240_53716 = G__53741;
chunk__53242_53717 = G__53742;
count__53243_53718 = G__53743;
i__53244_53719 = G__53744;
continue;
}
} else {
}
}
break;
}

var G__53745 = seq__53230_53709;
var G__53746 = chunk__53237_53710;
var G__53747 = count__53238_53711;
var G__53748 = (i__53239_53712 + (1));
seq__53230_53709 = G__53745;
chunk__53237_53710 = G__53746;
count__53238_53711 = G__53747;
i__53239_53712 = G__53748;
continue;
} else {
var temp__5804__auto___53749 = cljs.core.seq(seq__53230_53709);
if(temp__5804__auto___53749){
var seq__53230_53750__$1 = temp__5804__auto___53749;
if(cljs.core.chunked_seq_QMARK_(seq__53230_53750__$1)){
var c__5565__auto___53751 = cljs.core.chunk_first(seq__53230_53750__$1);
var G__53752 = cljs.core.chunk_rest(seq__53230_53750__$1);
var G__53753 = c__5565__auto___53751;
var G__53754 = cljs.core.count(c__5565__auto___53751);
var G__53755 = (0);
seq__53230_53709 = G__53752;
chunk__53237_53710 = G__53753;
count__53238_53711 = G__53754;
i__53239_53712 = G__53755;
continue;
} else {
var vec__53291_53756 = cljs.core.first(seq__53230_53750__$1);
var orig_type_53757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53291_53756,(0),null);
var f_53758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53291_53756,(1),null);
var seq__53231_53759 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53757,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53757,cljs.core.identity])));
var chunk__53233_53760 = null;
var count__53234_53761 = (0);
var i__53235_53762 = (0);
while(true){
if((i__53235_53762 < count__53234_53761)){
var vec__53300_53763 = chunk__53233_53760.cljs$core$IIndexed$_nth$arity$2(null,i__53235_53762);
var actual_type_53764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53300_53763,(0),null);
var __53765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53300_53763,(1),null);
var keys_53766 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53708,actual_type_53764,f_53758], null);
var canonical_f_53767 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53707),keys_53766);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53707,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53766], 0));

if(cljs.core.truth_(elem_53707.removeEventListener)){
elem_53707.removeEventListener(cljs.core.name(actual_type_53764),canonical_f_53767);
} else {
elem_53707.detachEvent(cljs.core.name(actual_type_53764),canonical_f_53767);
}


var G__53768 = seq__53231_53759;
var G__53769 = chunk__53233_53760;
var G__53770 = count__53234_53761;
var G__53771 = (i__53235_53762 + (1));
seq__53231_53759 = G__53768;
chunk__53233_53760 = G__53769;
count__53234_53761 = G__53770;
i__53235_53762 = G__53771;
continue;
} else {
var temp__5804__auto___53772__$1 = cljs.core.seq(seq__53231_53759);
if(temp__5804__auto___53772__$1){
var seq__53231_53773__$1 = temp__5804__auto___53772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53231_53773__$1)){
var c__5565__auto___53774 = cljs.core.chunk_first(seq__53231_53773__$1);
var G__53775 = cljs.core.chunk_rest(seq__53231_53773__$1);
var G__53776 = c__5565__auto___53774;
var G__53777 = cljs.core.count(c__5565__auto___53774);
var G__53778 = (0);
seq__53231_53759 = G__53775;
chunk__53233_53760 = G__53776;
count__53234_53761 = G__53777;
i__53235_53762 = G__53778;
continue;
} else {
var vec__53303_53779 = cljs.core.first(seq__53231_53773__$1);
var actual_type_53780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303_53779,(0),null);
var __53781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303_53779,(1),null);
var keys_53782 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53708,actual_type_53780,f_53758], null);
var canonical_f_53783 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53707),keys_53782);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53707,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53782], 0));

if(cljs.core.truth_(elem_53707.removeEventListener)){
elem_53707.removeEventListener(cljs.core.name(actual_type_53780),canonical_f_53783);
} else {
elem_53707.detachEvent(cljs.core.name(actual_type_53780),canonical_f_53783);
}


var G__53784 = cljs.core.next(seq__53231_53773__$1);
var G__53785 = null;
var G__53786 = (0);
var G__53787 = (0);
seq__53231_53759 = G__53784;
chunk__53233_53760 = G__53785;
count__53234_53761 = G__53786;
i__53235_53762 = G__53787;
continue;
}
} else {
}
}
break;
}

var G__53788 = cljs.core.next(seq__53230_53750__$1);
var G__53789 = null;
var G__53790 = (0);
var G__53791 = (0);
seq__53230_53709 = G__53788;
chunk__53237_53710 = G__53789;
count__53238_53711 = G__53790;
i__53239_53712 = G__53791;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq53225){
var G__53226 = cljs.core.first(seq53225);
var seq53225__$1 = cljs.core.next(seq53225);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53226,seq53225__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53792 = arguments.length;
var i__5767__auto___53793 = (0);
while(true){
if((i__5767__auto___53793 < len__5766__auto___53792)){
args__5772__auto__.push((arguments[i__5767__auto___53793]));

var G__53794 = (i__5767__auto___53793 + (1));
i__5767__auto___53793 = G__53794;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__53308_53795 = dommy.core.elem_and_selector(elem_sel);
var elem_53796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53308_53795,(0),null);
var selector_53797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53308_53795,(1),null);
var seq__53311_53798 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__53312_53799 = null;
var count__53313_53800 = (0);
var i__53314_53801 = (0);
while(true){
if((i__53314_53801 < count__53313_53800)){
var vec__53321_53802 = chunk__53312_53799.cljs$core$IIndexed$_nth$arity$2(null,i__53314_53801);
var type_53803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53321_53802,(0),null);
var f_53804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53321_53802,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53803,((function (seq__53311_53798,chunk__53312_53799,count__53313_53800,i__53314_53801,vec__53321_53802,type_53803,f_53804,vec__53308_53795,elem_53796,selector_53797){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53803,dommy$core$this_fn], 0));

return (f_53804.cljs$core$IFn$_invoke$arity$1 ? f_53804.cljs$core$IFn$_invoke$arity$1(e) : f_53804.call(null,e));
});})(seq__53311_53798,chunk__53312_53799,count__53313_53800,i__53314_53801,vec__53321_53802,type_53803,f_53804,vec__53308_53795,elem_53796,selector_53797))
], 0));


var G__53805 = seq__53311_53798;
var G__53806 = chunk__53312_53799;
var G__53807 = count__53313_53800;
var G__53808 = (i__53314_53801 + (1));
seq__53311_53798 = G__53805;
chunk__53312_53799 = G__53806;
count__53313_53800 = G__53807;
i__53314_53801 = G__53808;
continue;
} else {
var temp__5804__auto___53809 = cljs.core.seq(seq__53311_53798);
if(temp__5804__auto___53809){
var seq__53311_53810__$1 = temp__5804__auto___53809;
if(cljs.core.chunked_seq_QMARK_(seq__53311_53810__$1)){
var c__5565__auto___53811 = cljs.core.chunk_first(seq__53311_53810__$1);
var G__53812 = cljs.core.chunk_rest(seq__53311_53810__$1);
var G__53813 = c__5565__auto___53811;
var G__53814 = cljs.core.count(c__5565__auto___53811);
var G__53815 = (0);
seq__53311_53798 = G__53812;
chunk__53312_53799 = G__53813;
count__53313_53800 = G__53814;
i__53314_53801 = G__53815;
continue;
} else {
var vec__53324_53816 = cljs.core.first(seq__53311_53810__$1);
var type_53817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53324_53816,(0),null);
var f_53818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53324_53816,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53817,((function (seq__53311_53798,chunk__53312_53799,count__53313_53800,i__53314_53801,vec__53324_53816,type_53817,f_53818,seq__53311_53810__$1,temp__5804__auto___53809,vec__53308_53795,elem_53796,selector_53797){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53817,dommy$core$this_fn], 0));

return (f_53818.cljs$core$IFn$_invoke$arity$1 ? f_53818.cljs$core$IFn$_invoke$arity$1(e) : f_53818.call(null,e));
});})(seq__53311_53798,chunk__53312_53799,count__53313_53800,i__53314_53801,vec__53324_53816,type_53817,f_53818,seq__53311_53810__$1,temp__5804__auto___53809,vec__53308_53795,elem_53796,selector_53797))
], 0));


var G__53819 = cljs.core.next(seq__53311_53810__$1);
var G__53820 = null;
var G__53821 = (0);
var G__53822 = (0);
seq__53311_53798 = G__53819;
chunk__53312_53799 = G__53820;
count__53313_53800 = G__53821;
i__53314_53801 = G__53822;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq53306){
var G__53307 = cljs.core.first(seq53306);
var seq53306__$1 = cljs.core.next(seq53306);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53307,seq53306__$1);
}));


//# sourceMappingURL=dommy.core.js.map
