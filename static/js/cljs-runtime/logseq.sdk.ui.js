goog.provide('logseq.sdk.ui');
logseq.sdk.ui.parse_hiccup_ui = (function logseq$sdk$ui$parse_hiccup_ui(input){
if(typeof input === 'string'){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130)], null));
}catch (e120962){var e = e120962;
console.error("[parse hiccup error]",e);

return input;
}} else {
return null;
}
});
logseq.sdk.ui._show_msg = (function logseq$sdk$ui$_show_msg(var_args){
var G__120964 = arguments.length;
switch (G__120964) {
case 1:
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$1 = (function (content){
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"success","success",1890645906),null);
}));

(logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$2 = (function (content,status){
return logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3(content,status,null);
}));

(logseq.sdk.ui._show_msg.cljs$core$IFn$_invoke$arity$3 = (function (content,status,opts){
var map__120965 = cljs_bean.core.__GT_clj(opts);
var map__120965__$1 = cljs.core.__destructure_map(map__120965);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120965__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120965__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var hiccup_QMARK_ = ((typeof content === 'string') && (clojure.string.starts_with_QMARK_(clojure.string.triml(content),"[:")));
var content__$1 = ((hiccup_QMARK_)?logseq.sdk.ui.parse_hiccup_ui(content):content);
var uid = ((typeof key === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):null);
var clear_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(timeout,(0));
var key_SINGLEQUOTE_ = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(status),clear_QMARK_,uid,timeout,null);
return cljs.core.name(key_SINGLEQUOTE_);
}));

(logseq.sdk.ui._show_msg.cljs$lang$maxFixedArity = 3);

logseq.sdk.ui.show_msg = (function logseq$sdk$ui$show_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___120973 = arguments.length;
var i__5767__auto___120974 = (0);
while(true){
if((i__5767__auto___120974 < len__5766__auto___120973)){
args__5772__auto__.push((arguments[i__5767__auto___120974]));

var G__120975 = (i__5767__auto___120974 + (1));
i__5767__auto___120974 = G__120975;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return logseq.sdk.ui.show_msg.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});
goog.exportSymbol('logseq.sdk.ui.show_msg', logseq.sdk.ui.show_msg);

(logseq.sdk.ui.show_msg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq.sdk.ui._show_msg,args);
}));

(logseq.sdk.ui.show_msg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.sdk.ui.show_msg.cljs$lang$applyTo = (function (seq120966){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq120966));
}));

logseq.sdk.ui.close_msg = (function logseq$sdk$ui$close_msg(key){
if(typeof key === 'string'){
frontend.handler.notification.clear_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.close_msg', logseq.sdk.ui.close_msg);
logseq.sdk.ui.query_element_rect = (function logseq$sdk$ui$query_element_rect(selector){
var temp__5804__auto__ = document.querySelector(selector);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return cljs_bean.core.__GT_js(el.getBoundingClientRect().toJSON());
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.query_element_rect', logseq.sdk.ui.query_element_rect);
logseq.sdk.ui.query_element_by_id = (function logseq$sdk$ui$query_element_by_id(id){
var temp__5804__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
if(cljs.core.truth_(el)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(el.tagName),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
} else {
return false;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.query_element_by_id', logseq.sdk.ui.query_element_by_id);
logseq.sdk.ui.check_slot_valid = (function logseq$sdk$ui$check_slot_valid(slot){
if(typeof slot === 'string'){
return cljs.core.boolean$(logseq.sdk.ui.query_element_by_id(slot));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.check_slot_valid', logseq.sdk.ui.check_slot_valid);
logseq.sdk.ui.resolve_theme_css_props_vals = (function logseq$sdk$ui$resolve_theme_css_props_vals(props){
var temp__5804__auto__ = ((typeof props === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [props], null):cljs_bean.core.__GT_clj(props));
if(cljs.core.truth_(temp__5804__auto__)){
var props__$1 = temp__5804__auto__;
var s = window.getComputedStyle(document.body);
var G__120967 = (function (){var iter__5520__auto__ = (function logseq$sdk$ui$resolve_theme_css_props_vals_$_iter__120968(s__120969){
return (new cljs.core.LazySeq(null,(function (){
var s__120969__$1 = s__120969;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__120969__$1);
if(temp__5804__auto____$1){
var s__120969__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__120969__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__120969__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__120971 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__120970 = (0);
while(true){
if((i__120970 < size__5519__auto__)){
var prop = cljs.core._nth(c__5518__auto__,i__120970);
cljs.core.chunk_append(b__120971,((typeof prop === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,frontend.util.trim_safe(s.getPropertyValue(prop))], null):null));

var G__120976 = (i__120970 + (1));
i__120970 = G__120976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__120971),logseq$sdk$ui$resolve_theme_css_props_vals_$_iter__120968(cljs.core.chunk_rest(s__120969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__120971),null);
}
} else {
var prop = cljs.core.first(s__120969__$2);
return cljs.core.cons(((typeof prop === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,frontend.util.trim_safe(s.getPropertyValue(prop))], null):null),logseq$sdk$ui$resolve_theme_css_props_vals_$_iter__120968(cljs.core.rest(s__120969__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(props__$1);
})();
var G__120967__$1 = (((G__120967 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__120967));
var G__120967__$2 = (((G__120967__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__120967__$1));
if((G__120967__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__120967__$2);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.ui.resolve_theme_css_props_vals', logseq.sdk.ui.resolve_theme_css_props_vals);

//# sourceMappingURL=logseq.sdk.ui.js.map
