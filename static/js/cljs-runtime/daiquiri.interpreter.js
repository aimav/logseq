goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__50464_50497 = cljs.core.seq(x);
var chunk__50465_50498 = null;
var count__50466_50499 = (0);
var i__50467_50500 = (0);
while(true){
if((i__50467_50500 < count__50466_50499)){
var vec__50474_50501 = chunk__50465_50498.cljs$core$IIndexed$_nth$arity$2(null,i__50467_50500);
var k_50502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50474_50501,(0),null);
var v_50503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50474_50501,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_50502),v_50503);


var G__50504 = seq__50464_50497;
var G__50505 = chunk__50465_50498;
var G__50506 = count__50466_50499;
var G__50507 = (i__50467_50500 + (1));
seq__50464_50497 = G__50504;
chunk__50465_50498 = G__50505;
count__50466_50499 = G__50506;
i__50467_50500 = G__50507;
continue;
} else {
var temp__5804__auto___50508 = cljs.core.seq(seq__50464_50497);
if(temp__5804__auto___50508){
var seq__50464_50509__$1 = temp__5804__auto___50508;
if(cljs.core.chunked_seq_QMARK_(seq__50464_50509__$1)){
var c__5565__auto___50510 = cljs.core.chunk_first(seq__50464_50509__$1);
var G__50511 = cljs.core.chunk_rest(seq__50464_50509__$1);
var G__50512 = c__5565__auto___50510;
var G__50513 = cljs.core.count(c__5565__auto___50510);
var G__50514 = (0);
seq__50464_50497 = G__50511;
chunk__50465_50498 = G__50512;
count__50466_50499 = G__50513;
i__50467_50500 = G__50514;
continue;
} else {
var vec__50477_50515 = cljs.core.first(seq__50464_50509__$1);
var k_50516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477_50515,(0),null);
var v_50517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477_50515,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_50516),v_50517);


var G__50518 = cljs.core.next(seq__50464_50509__$1);
var G__50519 = null;
var G__50520 = (0);
var G__50521 = (0);
seq__50464_50497 = G__50518;
chunk__50465_50498 = G__50519;
count__50466_50499 = G__50520;
i__50467_50500 = G__50521;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5804__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5804__auto__)){
var js_attrs = temp__5804__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__50480 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50480,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__50483){
var vec__50484 = p__50483;
var seq__50485 = cljs.core.seq(vec__50484);
var first__50486 = cljs.core.first(seq__50485);
var seq__50485__$1 = cljs.core.next(seq__50485);
var _ = first__50486;
var first__50486__$1 = cljs.core.first(seq__50485__$1);
var seq__50485__$2 = cljs.core.next(seq__50485__$1);
var attrs = first__50486__$1;
var children = seq__50485__$2;
var vec__50487 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50487,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50487,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__50490){
var vec__50491 = p__50490;
var seq__50492 = cljs.core.seq(vec__50491);
var first__50493 = cljs.core.first(seq__50492);
var seq__50492__$1 = cljs.core.next(seq__50492);
var _ = first__50493;
var first__50493__$1 = cljs.core.first(seq__50492__$1);
var seq__50492__$2 = cljs.core.next(seq__50492__$1);
var component = first__50493__$1;
var first__50493__$2 = cljs.core.first(seq__50492__$2);
var seq__50492__$3 = cljs.core.next(seq__50492__$2);
var attrs = first__50493__$2;
var children = seq__50492__$3;
var vec__50494 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50494,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50494,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
