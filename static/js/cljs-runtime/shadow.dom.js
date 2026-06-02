goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47248 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47248(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47249 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47249(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46995 = coll;
var G__46996 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46995,G__46996) : shadow.dom.lazy_native_coll_seq.call(null,G__46995,G__46996));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46999 = arguments.length;
switch (G__46999) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47001 = arguments.length;
switch (G__47001) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47003 = arguments.length;
switch (G__47003) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47005 = arguments.length;
switch (G__47005) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47007 = arguments.length;
switch (G__47007) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47009 = arguments.length;
switch (G__47009) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47010){if((e47010 instanceof Object)){
var e = e47010;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47010;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47011 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47012 = null;
var count__47013 = (0);
var i__47014 = (0);
while(true){
if((i__47014 < count__47013)){
var el = chunk__47012.cljs$core$IIndexed$_nth$arity$2(null,i__47014);
var handler_47256__$1 = ((function (seq__47011,chunk__47012,count__47013,i__47014,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47011,chunk__47012,count__47013,i__47014,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47256__$1);


var G__47257 = seq__47011;
var G__47258 = chunk__47012;
var G__47259 = count__47013;
var G__47260 = (i__47014 + (1));
seq__47011 = G__47257;
chunk__47012 = G__47258;
count__47013 = G__47259;
i__47014 = G__47260;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47011);
if(temp__5804__auto__){
var seq__47011__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47011__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47011__$1);
var G__47261 = cljs.core.chunk_rest(seq__47011__$1);
var G__47262 = c__5565__auto__;
var G__47263 = cljs.core.count(c__5565__auto__);
var G__47264 = (0);
seq__47011 = G__47261;
chunk__47012 = G__47262;
count__47013 = G__47263;
i__47014 = G__47264;
continue;
} else {
var el = cljs.core.first(seq__47011__$1);
var handler_47265__$1 = ((function (seq__47011,chunk__47012,count__47013,i__47014,el,seq__47011__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47011,chunk__47012,count__47013,i__47014,el,seq__47011__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47265__$1);


var G__47266 = cljs.core.next(seq__47011__$1);
var G__47267 = null;
var G__47268 = (0);
var G__47269 = (0);
seq__47011 = G__47266;
chunk__47012 = G__47267;
count__47013 = G__47268;
i__47014 = G__47269;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47016 = arguments.length;
switch (G__47016) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47017 = cljs.core.seq(events);
var chunk__47018 = null;
var count__47019 = (0);
var i__47020 = (0);
while(true){
if((i__47020 < count__47019)){
var vec__47027 = chunk__47018.cljs$core$IIndexed$_nth$arity$2(null,i__47020);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47027,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47271 = seq__47017;
var G__47272 = chunk__47018;
var G__47273 = count__47019;
var G__47274 = (i__47020 + (1));
seq__47017 = G__47271;
chunk__47018 = G__47272;
count__47019 = G__47273;
i__47020 = G__47274;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47017);
if(temp__5804__auto__){
var seq__47017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47017__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47017__$1);
var G__47275 = cljs.core.chunk_rest(seq__47017__$1);
var G__47276 = c__5565__auto__;
var G__47277 = cljs.core.count(c__5565__auto__);
var G__47278 = (0);
seq__47017 = G__47275;
chunk__47018 = G__47276;
count__47019 = G__47277;
i__47020 = G__47278;
continue;
} else {
var vec__47030 = cljs.core.first(seq__47017__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47279 = cljs.core.next(seq__47017__$1);
var G__47280 = null;
var G__47281 = (0);
var G__47282 = (0);
seq__47017 = G__47279;
chunk__47018 = G__47280;
count__47019 = G__47281;
i__47020 = G__47282;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47033 = cljs.core.seq(styles);
var chunk__47034 = null;
var count__47035 = (0);
var i__47036 = (0);
while(true){
if((i__47036 < count__47035)){
var vec__47043 = chunk__47034.cljs$core$IIndexed$_nth$arity$2(null,i__47036);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47043,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47283 = seq__47033;
var G__47284 = chunk__47034;
var G__47285 = count__47035;
var G__47286 = (i__47036 + (1));
seq__47033 = G__47283;
chunk__47034 = G__47284;
count__47035 = G__47285;
i__47036 = G__47286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47033);
if(temp__5804__auto__){
var seq__47033__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47033__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47033__$1);
var G__47287 = cljs.core.chunk_rest(seq__47033__$1);
var G__47288 = c__5565__auto__;
var G__47289 = cljs.core.count(c__5565__auto__);
var G__47290 = (0);
seq__47033 = G__47287;
chunk__47034 = G__47288;
count__47035 = G__47289;
i__47036 = G__47290;
continue;
} else {
var vec__47046 = cljs.core.first(seq__47033__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47291 = cljs.core.next(seq__47033__$1);
var G__47292 = null;
var G__47293 = (0);
var G__47294 = (0);
seq__47033 = G__47291;
chunk__47034 = G__47292;
count__47035 = G__47293;
i__47036 = G__47294;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47049_47295 = key;
var G__47049_47296__$1 = (((G__47049_47295 instanceof cljs.core.Keyword))?G__47049_47295.fqn:null);
switch (G__47049_47296__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47298 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_47298,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_47298,"aria-");
}
})())){
el.setAttribute(ks_47298,value);
} else {
(el[ks_47298] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47050){
var map__47051 = p__47050;
var map__47051__$1 = cljs.core.__destructure_map(map__47051);
var props = map__47051__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47051__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47052 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47055 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47055,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47055;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47057 = arguments.length;
switch (G__47057) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47058){
var vec__47059 = p__47058;
var seq__47060 = cljs.core.seq(vec__47059);
var first__47061 = cljs.core.first(seq__47060);
var seq__47060__$1 = cljs.core.next(seq__47060);
var nn = first__47061;
var first__47061__$1 = cljs.core.first(seq__47060__$1);
var seq__47060__$2 = cljs.core.next(seq__47060__$1);
var np = first__47061__$1;
var nc = seq__47060__$2;
var node = vec__47059;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47062 = nn;
var G__47063 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47062,G__47063) : create_fn.call(null,G__47062,G__47063));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47064 = nn;
var G__47065 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47064,G__47065) : create_fn.call(null,G__47064,G__47065));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47066 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47066,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47066,(1),null);
var seq__47069_47300 = cljs.core.seq(node_children);
var chunk__47070_47301 = null;
var count__47071_47302 = (0);
var i__47072_47303 = (0);
while(true){
if((i__47072_47303 < count__47071_47302)){
var child_struct_47304 = chunk__47070_47301.cljs$core$IIndexed$_nth$arity$2(null,i__47072_47303);
var children_47305 = shadow.dom.dom_node(child_struct_47304);
if(cljs.core.seq_QMARK_(children_47305)){
var seq__47085_47306 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47305));
var chunk__47087_47307 = null;
var count__47088_47308 = (0);
var i__47089_47309 = (0);
while(true){
if((i__47089_47309 < count__47088_47308)){
var child_47310 = chunk__47087_47307.cljs$core$IIndexed$_nth$arity$2(null,i__47089_47309);
if(cljs.core.truth_(child_47310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47310);


var G__47311 = seq__47085_47306;
var G__47312 = chunk__47087_47307;
var G__47313 = count__47088_47308;
var G__47314 = (i__47089_47309 + (1));
seq__47085_47306 = G__47311;
chunk__47087_47307 = G__47312;
count__47088_47308 = G__47313;
i__47089_47309 = G__47314;
continue;
} else {
var G__47315 = seq__47085_47306;
var G__47316 = chunk__47087_47307;
var G__47317 = count__47088_47308;
var G__47318 = (i__47089_47309 + (1));
seq__47085_47306 = G__47315;
chunk__47087_47307 = G__47316;
count__47088_47308 = G__47317;
i__47089_47309 = G__47318;
continue;
}
} else {
var temp__5804__auto___47319 = cljs.core.seq(seq__47085_47306);
if(temp__5804__auto___47319){
var seq__47085_47320__$1 = temp__5804__auto___47319;
if(cljs.core.chunked_seq_QMARK_(seq__47085_47320__$1)){
var c__5565__auto___47321 = cljs.core.chunk_first(seq__47085_47320__$1);
var G__47322 = cljs.core.chunk_rest(seq__47085_47320__$1);
var G__47323 = c__5565__auto___47321;
var G__47324 = cljs.core.count(c__5565__auto___47321);
var G__47325 = (0);
seq__47085_47306 = G__47322;
chunk__47087_47307 = G__47323;
count__47088_47308 = G__47324;
i__47089_47309 = G__47325;
continue;
} else {
var child_47326 = cljs.core.first(seq__47085_47320__$1);
if(cljs.core.truth_(child_47326)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47326);


var G__47327 = cljs.core.next(seq__47085_47320__$1);
var G__47328 = null;
var G__47329 = (0);
var G__47330 = (0);
seq__47085_47306 = G__47327;
chunk__47087_47307 = G__47328;
count__47088_47308 = G__47329;
i__47089_47309 = G__47330;
continue;
} else {
var G__47331 = cljs.core.next(seq__47085_47320__$1);
var G__47332 = null;
var G__47333 = (0);
var G__47334 = (0);
seq__47085_47306 = G__47331;
chunk__47087_47307 = G__47332;
count__47088_47308 = G__47333;
i__47089_47309 = G__47334;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47305);
}


var G__47335 = seq__47069_47300;
var G__47336 = chunk__47070_47301;
var G__47337 = count__47071_47302;
var G__47338 = (i__47072_47303 + (1));
seq__47069_47300 = G__47335;
chunk__47070_47301 = G__47336;
count__47071_47302 = G__47337;
i__47072_47303 = G__47338;
continue;
} else {
var temp__5804__auto___47339 = cljs.core.seq(seq__47069_47300);
if(temp__5804__auto___47339){
var seq__47069_47340__$1 = temp__5804__auto___47339;
if(cljs.core.chunked_seq_QMARK_(seq__47069_47340__$1)){
var c__5565__auto___47341 = cljs.core.chunk_first(seq__47069_47340__$1);
var G__47342 = cljs.core.chunk_rest(seq__47069_47340__$1);
var G__47343 = c__5565__auto___47341;
var G__47344 = cljs.core.count(c__5565__auto___47341);
var G__47345 = (0);
seq__47069_47300 = G__47342;
chunk__47070_47301 = G__47343;
count__47071_47302 = G__47344;
i__47072_47303 = G__47345;
continue;
} else {
var child_struct_47346 = cljs.core.first(seq__47069_47340__$1);
var children_47347 = shadow.dom.dom_node(child_struct_47346);
if(cljs.core.seq_QMARK_(children_47347)){
var seq__47091_47348 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47347));
var chunk__47093_47349 = null;
var count__47094_47350 = (0);
var i__47095_47351 = (0);
while(true){
if((i__47095_47351 < count__47094_47350)){
var child_47352 = chunk__47093_47349.cljs$core$IIndexed$_nth$arity$2(null,i__47095_47351);
if(cljs.core.truth_(child_47352)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47352);


var G__47353 = seq__47091_47348;
var G__47354 = chunk__47093_47349;
var G__47355 = count__47094_47350;
var G__47356 = (i__47095_47351 + (1));
seq__47091_47348 = G__47353;
chunk__47093_47349 = G__47354;
count__47094_47350 = G__47355;
i__47095_47351 = G__47356;
continue;
} else {
var G__47357 = seq__47091_47348;
var G__47358 = chunk__47093_47349;
var G__47359 = count__47094_47350;
var G__47360 = (i__47095_47351 + (1));
seq__47091_47348 = G__47357;
chunk__47093_47349 = G__47358;
count__47094_47350 = G__47359;
i__47095_47351 = G__47360;
continue;
}
} else {
var temp__5804__auto___47361__$1 = cljs.core.seq(seq__47091_47348);
if(temp__5804__auto___47361__$1){
var seq__47091_47362__$1 = temp__5804__auto___47361__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47091_47362__$1)){
var c__5565__auto___47363 = cljs.core.chunk_first(seq__47091_47362__$1);
var G__47364 = cljs.core.chunk_rest(seq__47091_47362__$1);
var G__47365 = c__5565__auto___47363;
var G__47366 = cljs.core.count(c__5565__auto___47363);
var G__47367 = (0);
seq__47091_47348 = G__47364;
chunk__47093_47349 = G__47365;
count__47094_47350 = G__47366;
i__47095_47351 = G__47367;
continue;
} else {
var child_47368 = cljs.core.first(seq__47091_47362__$1);
if(cljs.core.truth_(child_47368)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47368);


var G__47369 = cljs.core.next(seq__47091_47362__$1);
var G__47370 = null;
var G__47371 = (0);
var G__47372 = (0);
seq__47091_47348 = G__47369;
chunk__47093_47349 = G__47370;
count__47094_47350 = G__47371;
i__47095_47351 = G__47372;
continue;
} else {
var G__47373 = cljs.core.next(seq__47091_47362__$1);
var G__47374 = null;
var G__47375 = (0);
var G__47376 = (0);
seq__47091_47348 = G__47373;
chunk__47093_47349 = G__47374;
count__47094_47350 = G__47375;
i__47095_47351 = G__47376;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47347);
}


var G__47377 = cljs.core.next(seq__47069_47340__$1);
var G__47378 = null;
var G__47379 = (0);
var G__47380 = (0);
seq__47069_47300 = G__47377;
chunk__47070_47301 = G__47378;
count__47071_47302 = G__47379;
i__47072_47303 = G__47380;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47098 = cljs.core.seq(node);
var chunk__47099 = null;
var count__47100 = (0);
var i__47101 = (0);
while(true){
if((i__47101 < count__47100)){
var n = chunk__47099.cljs$core$IIndexed$_nth$arity$2(null,i__47101);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47381 = seq__47098;
var G__47382 = chunk__47099;
var G__47383 = count__47100;
var G__47384 = (i__47101 + (1));
seq__47098 = G__47381;
chunk__47099 = G__47382;
count__47100 = G__47383;
i__47101 = G__47384;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47098);
if(temp__5804__auto__){
var seq__47098__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47098__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47098__$1);
var G__47385 = cljs.core.chunk_rest(seq__47098__$1);
var G__47386 = c__5565__auto__;
var G__47387 = cljs.core.count(c__5565__auto__);
var G__47388 = (0);
seq__47098 = G__47385;
chunk__47099 = G__47386;
count__47100 = G__47387;
i__47101 = G__47388;
continue;
} else {
var n = cljs.core.first(seq__47098__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47389 = cljs.core.next(seq__47098__$1);
var G__47390 = null;
var G__47391 = (0);
var G__47392 = (0);
seq__47098 = G__47389;
chunk__47099 = G__47390;
count__47100 = G__47391;
i__47101 = G__47392;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47103 = arguments.length;
switch (G__47103) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47105 = arguments.length;
switch (G__47105) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47107 = arguments.length;
switch (G__47107) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47396 = arguments.length;
var i__5767__auto___47397 = (0);
while(true){
if((i__5767__auto___47397 < len__5766__auto___47396)){
args__5772__auto__.push((arguments[i__5767__auto___47397]));

var G__47398 = (i__5767__auto___47397 + (1));
i__5767__auto___47397 = G__47398;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47109_47399 = cljs.core.seq(nodes);
var chunk__47110_47400 = null;
var count__47111_47401 = (0);
var i__47112_47402 = (0);
while(true){
if((i__47112_47402 < count__47111_47401)){
var node_47403 = chunk__47110_47400.cljs$core$IIndexed$_nth$arity$2(null,i__47112_47402);
fragment.appendChild(shadow.dom._to_dom(node_47403));


var G__47404 = seq__47109_47399;
var G__47405 = chunk__47110_47400;
var G__47406 = count__47111_47401;
var G__47407 = (i__47112_47402 + (1));
seq__47109_47399 = G__47404;
chunk__47110_47400 = G__47405;
count__47111_47401 = G__47406;
i__47112_47402 = G__47407;
continue;
} else {
var temp__5804__auto___47408 = cljs.core.seq(seq__47109_47399);
if(temp__5804__auto___47408){
var seq__47109_47409__$1 = temp__5804__auto___47408;
if(cljs.core.chunked_seq_QMARK_(seq__47109_47409__$1)){
var c__5565__auto___47410 = cljs.core.chunk_first(seq__47109_47409__$1);
var G__47411 = cljs.core.chunk_rest(seq__47109_47409__$1);
var G__47412 = c__5565__auto___47410;
var G__47413 = cljs.core.count(c__5565__auto___47410);
var G__47414 = (0);
seq__47109_47399 = G__47411;
chunk__47110_47400 = G__47412;
count__47111_47401 = G__47413;
i__47112_47402 = G__47414;
continue;
} else {
var node_47415 = cljs.core.first(seq__47109_47409__$1);
fragment.appendChild(shadow.dom._to_dom(node_47415));


var G__47416 = cljs.core.next(seq__47109_47409__$1);
var G__47417 = null;
var G__47418 = (0);
var G__47419 = (0);
seq__47109_47399 = G__47416;
chunk__47110_47400 = G__47417;
count__47111_47401 = G__47418;
i__47112_47402 = G__47419;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47108){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47108));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47113_47420 = cljs.core.seq(scripts);
var chunk__47114_47421 = null;
var count__47115_47422 = (0);
var i__47116_47423 = (0);
while(true){
if((i__47116_47423 < count__47115_47422)){
var vec__47123_47424 = chunk__47114_47421.cljs$core$IIndexed$_nth$arity$2(null,i__47116_47423);
var script_tag_47425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47123_47424,(0),null);
var script_body_47426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47123_47424,(1),null);
eval(script_body_47426);


var G__47427 = seq__47113_47420;
var G__47428 = chunk__47114_47421;
var G__47429 = count__47115_47422;
var G__47430 = (i__47116_47423 + (1));
seq__47113_47420 = G__47427;
chunk__47114_47421 = G__47428;
count__47115_47422 = G__47429;
i__47116_47423 = G__47430;
continue;
} else {
var temp__5804__auto___47431 = cljs.core.seq(seq__47113_47420);
if(temp__5804__auto___47431){
var seq__47113_47432__$1 = temp__5804__auto___47431;
if(cljs.core.chunked_seq_QMARK_(seq__47113_47432__$1)){
var c__5565__auto___47433 = cljs.core.chunk_first(seq__47113_47432__$1);
var G__47434 = cljs.core.chunk_rest(seq__47113_47432__$1);
var G__47435 = c__5565__auto___47433;
var G__47436 = cljs.core.count(c__5565__auto___47433);
var G__47437 = (0);
seq__47113_47420 = G__47434;
chunk__47114_47421 = G__47435;
count__47115_47422 = G__47436;
i__47116_47423 = G__47437;
continue;
} else {
var vec__47126_47438 = cljs.core.first(seq__47113_47432__$1);
var script_tag_47439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47126_47438,(0),null);
var script_body_47440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47126_47438,(1),null);
eval(script_body_47440);


var G__47441 = cljs.core.next(seq__47113_47432__$1);
var G__47442 = null;
var G__47443 = (0);
var G__47444 = (0);
seq__47113_47420 = G__47441;
chunk__47114_47421 = G__47442;
count__47115_47422 = G__47443;
i__47116_47423 = G__47444;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47129){
var vec__47130 = p__47129;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47130,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47130,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47134 = arguments.length;
switch (G__47134) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47135 = cljs.core.seq(style_keys);
var chunk__47136 = null;
var count__47137 = (0);
var i__47138 = (0);
while(true){
if((i__47138 < count__47137)){
var it = chunk__47136.cljs$core$IIndexed$_nth$arity$2(null,i__47138);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47446 = seq__47135;
var G__47447 = chunk__47136;
var G__47448 = count__47137;
var G__47449 = (i__47138 + (1));
seq__47135 = G__47446;
chunk__47136 = G__47447;
count__47137 = G__47448;
i__47138 = G__47449;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47135);
if(temp__5804__auto__){
var seq__47135__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47135__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47135__$1);
var G__47450 = cljs.core.chunk_rest(seq__47135__$1);
var G__47451 = c__5565__auto__;
var G__47452 = cljs.core.count(c__5565__auto__);
var G__47453 = (0);
seq__47135 = G__47450;
chunk__47136 = G__47451;
count__47137 = G__47452;
i__47138 = G__47453;
continue;
} else {
var it = cljs.core.first(seq__47135__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47454 = cljs.core.next(seq__47135__$1);
var G__47455 = null;
var G__47456 = (0);
var G__47457 = (0);
seq__47135 = G__47454;
chunk__47136 = G__47455;
count__47137 = G__47456;
i__47138 = G__47457;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k47140,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__47144 = k47140;
var G__47144__$1 = (((G__47144 instanceof cljs.core.Keyword))?G__47144.fqn:null);
switch (G__47144__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47140,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__47145){
var vec__47146 = p__47145;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47146,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47146,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47139){
var self__ = this;
var G__47139__$1 = this;
return (new cljs.core.RecordIter((0),G__47139__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47141,other47142){
var self__ = this;
var this47141__$1 = this;
return (((!((other47142 == null)))) && ((((this47141__$1.constructor === other47142.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47141__$1.x,other47142.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47141__$1.y,other47142.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47141__$1.__extmap,other47142.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k47140){
var self__ = this;
var this__5347__auto____$1 = this;
var G__47149 = k47140;
var G__47149__$1 = (((G__47149 instanceof cljs.core.Keyword))?G__47149.fqn:null);
switch (G__47149__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47140);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__47139){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__47150 = cljs.core.keyword_identical_QMARK_;
var expr__47151 = k__5349__auto__;
if(cljs.core.truth_((pred__47150.cljs$core$IFn$_invoke$arity$2 ? pred__47150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47151) : pred__47150.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47151)))){
return (new shadow.dom.Coordinate(G__47139,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47150.cljs$core$IFn$_invoke$arity$2 ? pred__47150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47151) : pred__47150.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47151)))){
return (new shadow.dom.Coordinate(self__.x,G__47139,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__47139),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__47139){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47139,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47143){
var extmap__5382__auto__ = (function (){var G__47153 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47143,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47143)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47153);
} else {
return G__47153;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47143),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47143),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k47155,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__47159 = k47155;
var G__47159__$1 = (((G__47159 instanceof cljs.core.Keyword))?G__47159.fqn:null);
switch (G__47159__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47155,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__47160){
var vec__47161 = p__47160;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47161,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47161,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47154){
var self__ = this;
var G__47154__$1 = this;
return (new cljs.core.RecordIter((0),G__47154__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47156,other47157){
var self__ = this;
var this47156__$1 = this;
return (((!((other47157 == null)))) && ((((this47156__$1.constructor === other47157.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47156__$1.w,other47157.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47156__$1.h,other47157.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47156__$1.__extmap,other47157.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k47155){
var self__ = this;
var this__5347__auto____$1 = this;
var G__47164 = k47155;
var G__47164__$1 = (((G__47164 instanceof cljs.core.Keyword))?G__47164.fqn:null);
switch (G__47164__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47155);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__47154){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__47165 = cljs.core.keyword_identical_QMARK_;
var expr__47166 = k__5349__auto__;
if(cljs.core.truth_((pred__47165.cljs$core$IFn$_invoke$arity$2 ? pred__47165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47166) : pred__47165.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47166)))){
return (new shadow.dom.Size(G__47154,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47165.cljs$core$IFn$_invoke$arity$2 ? pred__47165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47166) : pred__47165.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47166)))){
return (new shadow.dom.Size(self__.w,G__47154,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__47154),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__47154){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47154,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47158){
var extmap__5382__auto__ = (function (){var G__47168 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47158,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47168);
} else {
return G__47168;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47158),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47158),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__47462 = (i + (1));
var G__47463 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47462;
ret = G__47463;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47173){
var vec__47174 = p__47173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47178 = arguments.length;
switch (G__47178) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47465 = ps;
var G__47466 = (i + (1));
el__$1 = G__47465;
i = G__47466;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47179 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47179,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47179,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47179,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47182_47467 = cljs.core.seq(props);
var chunk__47183_47468 = null;
var count__47184_47469 = (0);
var i__47185_47470 = (0);
while(true){
if((i__47185_47470 < count__47184_47469)){
var vec__47192_47471 = chunk__47183_47468.cljs$core$IIndexed$_nth$arity$2(null,i__47185_47470);
var k_47472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192_47471,(0),null);
var v_47473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192_47471,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_47472);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47472),v_47473);


var G__47474 = seq__47182_47467;
var G__47475 = chunk__47183_47468;
var G__47476 = count__47184_47469;
var G__47477 = (i__47185_47470 + (1));
seq__47182_47467 = G__47474;
chunk__47183_47468 = G__47475;
count__47184_47469 = G__47476;
i__47185_47470 = G__47477;
continue;
} else {
var temp__5804__auto___47478 = cljs.core.seq(seq__47182_47467);
if(temp__5804__auto___47478){
var seq__47182_47479__$1 = temp__5804__auto___47478;
if(cljs.core.chunked_seq_QMARK_(seq__47182_47479__$1)){
var c__5565__auto___47480 = cljs.core.chunk_first(seq__47182_47479__$1);
var G__47481 = cljs.core.chunk_rest(seq__47182_47479__$1);
var G__47482 = c__5565__auto___47480;
var G__47483 = cljs.core.count(c__5565__auto___47480);
var G__47484 = (0);
seq__47182_47467 = G__47481;
chunk__47183_47468 = G__47482;
count__47184_47469 = G__47483;
i__47185_47470 = G__47484;
continue;
} else {
var vec__47195_47485 = cljs.core.first(seq__47182_47479__$1);
var k_47486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47195_47485,(0),null);
var v_47487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47195_47485,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_47486);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47486),v_47487);


var G__47488 = cljs.core.next(seq__47182_47479__$1);
var G__47489 = null;
var G__47490 = (0);
var G__47491 = (0);
seq__47182_47467 = G__47488;
chunk__47183_47468 = G__47489;
count__47184_47469 = G__47490;
i__47185_47470 = G__47491;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47199 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(1),null);
var seq__47202_47492 = cljs.core.seq(node_children);
var chunk__47204_47493 = null;
var count__47205_47494 = (0);
var i__47206_47495 = (0);
while(true){
if((i__47206_47495 < count__47205_47494)){
var child_struct_47496 = chunk__47204_47493.cljs$core$IIndexed$_nth$arity$2(null,i__47206_47495);
if((!((child_struct_47496 == null)))){
if(typeof child_struct_47496 === 'string'){
var text_47497 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47497),child_struct_47496].join(''));
} else {
var children_47498 = shadow.dom.svg_node(child_struct_47496);
if(cljs.core.seq_QMARK_(children_47498)){
var seq__47220_47499 = cljs.core.seq(children_47498);
var chunk__47222_47500 = null;
var count__47223_47501 = (0);
var i__47224_47502 = (0);
while(true){
if((i__47224_47502 < count__47223_47501)){
var child_47503 = chunk__47222_47500.cljs$core$IIndexed$_nth$arity$2(null,i__47224_47502);
if(cljs.core.truth_(child_47503)){
node.appendChild(child_47503);


var G__47504 = seq__47220_47499;
var G__47505 = chunk__47222_47500;
var G__47506 = count__47223_47501;
var G__47507 = (i__47224_47502 + (1));
seq__47220_47499 = G__47504;
chunk__47222_47500 = G__47505;
count__47223_47501 = G__47506;
i__47224_47502 = G__47507;
continue;
} else {
var G__47508 = seq__47220_47499;
var G__47509 = chunk__47222_47500;
var G__47510 = count__47223_47501;
var G__47511 = (i__47224_47502 + (1));
seq__47220_47499 = G__47508;
chunk__47222_47500 = G__47509;
count__47223_47501 = G__47510;
i__47224_47502 = G__47511;
continue;
}
} else {
var temp__5804__auto___47512 = cljs.core.seq(seq__47220_47499);
if(temp__5804__auto___47512){
var seq__47220_47513__$1 = temp__5804__auto___47512;
if(cljs.core.chunked_seq_QMARK_(seq__47220_47513__$1)){
var c__5565__auto___47514 = cljs.core.chunk_first(seq__47220_47513__$1);
var G__47515 = cljs.core.chunk_rest(seq__47220_47513__$1);
var G__47516 = c__5565__auto___47514;
var G__47517 = cljs.core.count(c__5565__auto___47514);
var G__47518 = (0);
seq__47220_47499 = G__47515;
chunk__47222_47500 = G__47516;
count__47223_47501 = G__47517;
i__47224_47502 = G__47518;
continue;
} else {
var child_47519 = cljs.core.first(seq__47220_47513__$1);
if(cljs.core.truth_(child_47519)){
node.appendChild(child_47519);


var G__47520 = cljs.core.next(seq__47220_47513__$1);
var G__47521 = null;
var G__47522 = (0);
var G__47523 = (0);
seq__47220_47499 = G__47520;
chunk__47222_47500 = G__47521;
count__47223_47501 = G__47522;
i__47224_47502 = G__47523;
continue;
} else {
var G__47524 = cljs.core.next(seq__47220_47513__$1);
var G__47525 = null;
var G__47526 = (0);
var G__47527 = (0);
seq__47220_47499 = G__47524;
chunk__47222_47500 = G__47525;
count__47223_47501 = G__47526;
i__47224_47502 = G__47527;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47498);
}
}


var G__47528 = seq__47202_47492;
var G__47529 = chunk__47204_47493;
var G__47530 = count__47205_47494;
var G__47531 = (i__47206_47495 + (1));
seq__47202_47492 = G__47528;
chunk__47204_47493 = G__47529;
count__47205_47494 = G__47530;
i__47206_47495 = G__47531;
continue;
} else {
var G__47532 = seq__47202_47492;
var G__47533 = chunk__47204_47493;
var G__47534 = count__47205_47494;
var G__47535 = (i__47206_47495 + (1));
seq__47202_47492 = G__47532;
chunk__47204_47493 = G__47533;
count__47205_47494 = G__47534;
i__47206_47495 = G__47535;
continue;
}
} else {
var temp__5804__auto___47536 = cljs.core.seq(seq__47202_47492);
if(temp__5804__auto___47536){
var seq__47202_47537__$1 = temp__5804__auto___47536;
if(cljs.core.chunked_seq_QMARK_(seq__47202_47537__$1)){
var c__5565__auto___47538 = cljs.core.chunk_first(seq__47202_47537__$1);
var G__47539 = cljs.core.chunk_rest(seq__47202_47537__$1);
var G__47540 = c__5565__auto___47538;
var G__47541 = cljs.core.count(c__5565__auto___47538);
var G__47542 = (0);
seq__47202_47492 = G__47539;
chunk__47204_47493 = G__47540;
count__47205_47494 = G__47541;
i__47206_47495 = G__47542;
continue;
} else {
var child_struct_47543 = cljs.core.first(seq__47202_47537__$1);
if((!((child_struct_47543 == null)))){
if(typeof child_struct_47543 === 'string'){
var text_47544 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47544),child_struct_47543].join(''));
} else {
var children_47545 = shadow.dom.svg_node(child_struct_47543);
if(cljs.core.seq_QMARK_(children_47545)){
var seq__47226_47546 = cljs.core.seq(children_47545);
var chunk__47228_47547 = null;
var count__47229_47548 = (0);
var i__47230_47549 = (0);
while(true){
if((i__47230_47549 < count__47229_47548)){
var child_47550 = chunk__47228_47547.cljs$core$IIndexed$_nth$arity$2(null,i__47230_47549);
if(cljs.core.truth_(child_47550)){
node.appendChild(child_47550);


var G__47551 = seq__47226_47546;
var G__47552 = chunk__47228_47547;
var G__47553 = count__47229_47548;
var G__47554 = (i__47230_47549 + (1));
seq__47226_47546 = G__47551;
chunk__47228_47547 = G__47552;
count__47229_47548 = G__47553;
i__47230_47549 = G__47554;
continue;
} else {
var G__47555 = seq__47226_47546;
var G__47556 = chunk__47228_47547;
var G__47557 = count__47229_47548;
var G__47558 = (i__47230_47549 + (1));
seq__47226_47546 = G__47555;
chunk__47228_47547 = G__47556;
count__47229_47548 = G__47557;
i__47230_47549 = G__47558;
continue;
}
} else {
var temp__5804__auto___47559__$1 = cljs.core.seq(seq__47226_47546);
if(temp__5804__auto___47559__$1){
var seq__47226_47560__$1 = temp__5804__auto___47559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47226_47560__$1)){
var c__5565__auto___47561 = cljs.core.chunk_first(seq__47226_47560__$1);
var G__47562 = cljs.core.chunk_rest(seq__47226_47560__$1);
var G__47563 = c__5565__auto___47561;
var G__47564 = cljs.core.count(c__5565__auto___47561);
var G__47565 = (0);
seq__47226_47546 = G__47562;
chunk__47228_47547 = G__47563;
count__47229_47548 = G__47564;
i__47230_47549 = G__47565;
continue;
} else {
var child_47566 = cljs.core.first(seq__47226_47560__$1);
if(cljs.core.truth_(child_47566)){
node.appendChild(child_47566);


var G__47567 = cljs.core.next(seq__47226_47560__$1);
var G__47568 = null;
var G__47569 = (0);
var G__47570 = (0);
seq__47226_47546 = G__47567;
chunk__47228_47547 = G__47568;
count__47229_47548 = G__47569;
i__47230_47549 = G__47570;
continue;
} else {
var G__47571 = cljs.core.next(seq__47226_47560__$1);
var G__47572 = null;
var G__47573 = (0);
var G__47574 = (0);
seq__47226_47546 = G__47571;
chunk__47228_47547 = G__47572;
count__47229_47548 = G__47573;
i__47230_47549 = G__47574;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47545);
}
}


var G__47575 = cljs.core.next(seq__47202_47537__$1);
var G__47576 = null;
var G__47577 = (0);
var G__47578 = (0);
seq__47202_47492 = G__47575;
chunk__47204_47493 = G__47576;
count__47205_47494 = G__47577;
i__47206_47495 = G__47578;
continue;
} else {
var G__47579 = cljs.core.next(seq__47202_47537__$1);
var G__47580 = null;
var G__47581 = (0);
var G__47582 = (0);
seq__47202_47492 = G__47579;
chunk__47204_47493 = G__47580;
count__47205_47494 = G__47581;
i__47206_47495 = G__47582;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47583 = arguments.length;
var i__5767__auto___47584 = (0);
while(true){
if((i__5767__auto___47584 < len__5766__auto___47583)){
args__5772__auto__.push((arguments[i__5767__auto___47584]));

var G__47585 = (i__5767__auto___47584 + (1));
i__5767__auto___47584 = G__47585;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47232){
var G__47233 = cljs.core.first(seq47232);
var seq47232__$1 = cljs.core.next(seq47232);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47233,seq47232__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47235 = arguments.length;
switch (G__47235) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__34483__auto___47587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_47240){
var state_val_47241 = (state_47240[(1)]);
if((state_val_47241 === (1))){
var state_47240__$1 = state_47240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47240__$1,(2),once_or_cleanup);
} else {
if((state_val_47241 === (2))){
var inst_47237 = (state_47240[(2)]);
var inst_47238 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47240__$1 = (function (){var statearr_47242 = state_47240;
(statearr_47242[(7)] = inst_47237);

return statearr_47242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47240__$1,inst_47238);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34379__auto__ = null;
var shadow$dom$state_machine__34379__auto____0 = (function (){
var statearr_47243 = [null,null,null,null,null,null,null,null];
(statearr_47243[(0)] = shadow$dom$state_machine__34379__auto__);

(statearr_47243[(1)] = (1));

return statearr_47243;
});
var shadow$dom$state_machine__34379__auto____1 = (function (state_47240){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_47240);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e47244){var ex__34382__auto__ = e47244;
var statearr_47245_47588 = state_47240;
(statearr_47245_47588[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_47240[(4)]))){
var statearr_47246_47589 = state_47240;
(statearr_47246_47589[(1)] = cljs.core.first((state_47240[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47590 = state_47240;
state_47240 = G__47590;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
shadow$dom$state_machine__34379__auto__ = function(state_47240){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34379__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34379__auto____1.call(this,state_47240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34379__auto____0;
shadow$dom$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34379__auto____1;
return shadow$dom$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_47247 = f__34484__auto__();
(statearr_47247[(6)] = c__34483__auto___47587);

return statearr_47247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
