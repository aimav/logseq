goog.provide('logseq.shui.rum');
goog.scope(function(){
  logseq.shui.rum.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
logseq.shui.rum.create_element = (function logseq$shui$rum$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
logseq.shui.rum.component_attributes = (function logseq$shui$rum$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__108376_108409 = cljs.core.seq(x);
var chunk__108377_108410 = null;
var count__108378_108411 = (0);
var i__108379_108412 = (0);
while(true){
if((i__108379_108412 < count__108378_108411)){
var vec__108386_108413 = chunk__108377_108410.cljs$core$IIndexed$_nth$arity$2(null,i__108379_108412);
var k_108414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108386_108413,(0),null);
var v_108415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108386_108413,(1),null);
logseq.shui.rum.goog$module$goog$object.set(m,cljs.core.name(k_108414),v_108415);


var G__108416 = seq__108376_108409;
var G__108417 = chunk__108377_108410;
var G__108418 = count__108378_108411;
var G__108419 = (i__108379_108412 + (1));
seq__108376_108409 = G__108416;
chunk__108377_108410 = G__108417;
count__108378_108411 = G__108418;
i__108379_108412 = G__108419;
continue;
} else {
var temp__5804__auto___108420 = cljs.core.seq(seq__108376_108409);
if(temp__5804__auto___108420){
var seq__108376_108421__$1 = temp__5804__auto___108420;
if(cljs.core.chunked_seq_QMARK_(seq__108376_108421__$1)){
var c__5565__auto___108422 = cljs.core.chunk_first(seq__108376_108421__$1);
var G__108423 = cljs.core.chunk_rest(seq__108376_108421__$1);
var G__108424 = c__5565__auto___108422;
var G__108425 = cljs.core.count(c__5565__auto___108422);
var G__108426 = (0);
seq__108376_108409 = G__108423;
chunk__108377_108410 = G__108424;
count__108378_108411 = G__108425;
i__108379_108412 = G__108426;
continue;
} else {
var vec__108389_108427 = cljs.core.first(seq__108376_108421__$1);
var k_108428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108389_108427,(0),null);
var v_108429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108389_108427,(1),null);
logseq.shui.rum.goog$module$goog$object.set(m,cljs.core.name(k_108428),v_108429);


var G__108430 = cljs.core.next(seq__108376_108421__$1);
var G__108431 = null;
var G__108432 = (0);
var G__108433 = (0);
seq__108376_108409 = G__108430;
chunk__108377_108410 = G__108431;
count__108378_108411 = G__108432;
i__108379_108412 = G__108433;
continue;
}
} else {
}
}
break;
}

return m;
});
logseq.shui.rum.element_attributes = (function logseq$shui$rum$element_attributes(attrs){
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
logseq.shui.rum.interpret_seq = (function logseq$shui$rum$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(logseq.shui.rum.interpret.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.rum.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : logseq.shui.rum.interpret.call(null,x__$1)));
}),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Render an element vector as a HTML element.
 */
logseq.shui.rum.element = (function logseq$shui$rum$element(element){
var vec__108392 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108392,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108392,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108392,(2),null);
return logseq.shui.rum.create_element(type,logseq.shui.rum.element_attributes(attrs),logseq.shui.rum.interpret_seq(content));
});
logseq.shui.rum.fragment = (function logseq$shui$rum$fragment(p__108395){
var vec__108396 = p__108395;
var seq__108397 = cljs.core.seq(vec__108396);
var first__108398 = cljs.core.first(seq__108397);
var seq__108397__$1 = cljs.core.next(seq__108397);
var _ = first__108398;
var first__108398__$1 = cljs.core.first(seq__108397__$1);
var seq__108397__$2 = cljs.core.next(seq__108397__$1);
var attrs = first__108398__$1;
var children = seq__108397__$2;
var vec__108399 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.rum.component_attributes(attrs),logseq.shui.rum.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,logseq.shui.rum.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108399,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108399,(1),null);
return logseq.shui.rum.create_element(React.Fragment,attrs__$1,children__$1);
});
logseq.shui.rum.interop = (function logseq$shui$rum$interop(p__108402){
var vec__108403 = p__108402;
var seq__108404 = cljs.core.seq(vec__108403);
var first__108405 = cljs.core.first(seq__108404);
var seq__108404__$1 = cljs.core.next(seq__108404);
var _ = first__108405;
var first__108405__$1 = cljs.core.first(seq__108404__$1);
var seq__108404__$2 = cljs.core.next(seq__108404__$1);
var component = first__108405__$1;
var first__108405__$2 = cljs.core.first(seq__108404__$2);
var seq__108404__$3 = cljs.core.next(seq__108404__$2);
var attrs = first__108405__$2;
var children = seq__108404__$3;
var vec__108406 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.rum.component_attributes(attrs),logseq.shui.rum.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,logseq.shui.rum.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108406,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108406,(1),null);
return logseq.shui.rum.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
logseq.shui.rum.interpret_vec = (function logseq$shui$rum$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return logseq.shui.rum.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return logseq.shui.rum.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return logseq.shui.rum.element(x);
} else {
return logseq.shui.rum.interpret_seq(x);

}
}
}
});
logseq.shui.rum.interpret = (function logseq$shui$rum$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return logseq.shui.rum.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return logseq.shui.rum.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=logseq.shui.rum.js.map
