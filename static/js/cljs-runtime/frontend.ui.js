goog.provide('frontend.ui');
goog.scope(function(){
  frontend.ui.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$logseq$react_tweet_embed$dist$tweet_embed=shadow.js.require("module$node_modules$$logseq$react_tweet_embed$dist$tweet_embed", {});
var module$node_modules$react_intersection_observer$index=shadow.js.require("module$node_modules$react_intersection_observer$index", {});
var module$node_modules$react_resize_context$dist$index=shadow.js.require("module$node_modules$react_resize_context$dist$index", {});
var module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs=shadow.js.require("module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs", {});
var module$node_modules$react_tippy$dist$react_tippy=shadow.js.require("module$node_modules$react_tippy$dist$react_tippy", {});
var module$node_modules$react_transition_group$cjs$index=shadow.js.require("module$node_modules$react_transition_group$cjs$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.transition_group !== 'undefined')){
} else {
frontend.ui.transition_group = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$react_transition_group$cjs$index.TransitionGroup);
}
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.css_transition !== 'undefined')){
} else {
frontend.ui.css_transition = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$react_transition_group$cjs$index.CSSTransition);
}
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.textarea !== 'undefined')){
} else {
frontend.ui.textarea = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs,"default"));
}
frontend.ui.resize_provider = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_resize_context$dist$index,"ResizeProvider"));
frontend.ui.resize_consumer = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_resize_context$dist$index,"ResizeConsumer"));
frontend.ui.Tippy = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_tippy$dist$react_tippy,"Tooltip"));
frontend.ui.ReactTweetEmbed = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$$logseq$react_tweet_embed$dist$tweet_embed);
frontend.ui.useInView = frontend.ui.goog$module$goog$object.get(module$node_modules$react_intersection_observer$index,"useInView");
frontend.ui.reset_ios_whole_page_offset_BANG_ = (function frontend$ui$reset_ios_whole_page_offset_BANG_(){
var and__5041__auto__ = frontend.util.ios_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.safari_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return window.scrollTo((0),(0));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.icon_size !== 'undefined')){
} else {
frontend.ui.icon_size = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?(26):(20));
}
frontend.ui.built_in_colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yellow","red","pink","green","blue","purple","gray"], null);
frontend.ui.__GT_block_background_color = (function frontend$ui$__GT_block_background_color(color){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([color]),frontend.ui.built_in_colors))){
return ["var(--ls-highlight-color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),")"].join('');
} else {
return color;
}
});
frontend.ui.built_in_color_QMARK_ = (function frontend$ui$built_in_color_QMARK_(color){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([color]),frontend.ui.built_in_colors);
});
frontend.ui.menu_background_color = rum.core.lazy_build(rum.core.build_defc,(function (add_bgcolor_fn,rm_bgcolor_fn){
return daiquiri.core.create_element("div",{'className':"flex flex-row justify-between py-1 px-2 items-center"},[daiquiri.core.create_element("div",{'className':"flex flex-row justify-between flex-1 mx-2 mt-2"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__109903(s__109904){
return (new cljs.core.LazySeq(null,(function (){
var s__109904__$1 = s__109904;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109904__$1);
if(temp__5804__auto__){
var s__109904__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109904__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109904__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109906 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109905 = (0);
while(true){
if((i__109905 < size__5519__auto__)){
var color = cljs.core._nth(c__5518__auto__,i__109905);
cljs.core.chunk_append(b__109906,daiquiri.core.create_element("a",{'key':["key-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join(''),'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("color",color)], 0)),'onClick':((function (i__109905,color,c__5518__auto__,size__5519__auto__,b__109906,s__109904__$2,temp__5804__auto__){
return (function (){
return (add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1 ? add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1(color) : add_bgcolor_fn.call(null,color));
});})(i__109905,color,c__5518__auto__,size__5519__auto__,b__109906,s__109904__$2,temp__5804__auto__))
},[daiquiri.core.create_element("div",{'style':{'backgroundColor':["var(--color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-500)"].join('')},'className':"heading-bg"},[])]));

var G__110252 = (i__109905 + (1));
i__109905 = G__110252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109906),frontend$ui$iter__109903(cljs.core.chunk_rest(s__109904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109906),null);
}
} else {
var color = cljs.core.first(s__109904__$2);
return cljs.core.cons(daiquiri.core.create_element("a",{'key':["key-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join(''),'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("color",color)], 0)),'onClick':((function (color,s__109904__$2,temp__5804__auto__){
return (function (){
return (add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1 ? add_bgcolor_fn.cljs$core$IFn$_invoke$arity$1(color) : add_bgcolor_fn.call(null,color));
});})(color,s__109904__$2,temp__5804__auto__))
},[daiquiri.core.create_element("div",{'style':{'backgroundColor':["var(--color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-500)"].join('')},'className':"heading-bg"},[])]),frontend$ui$iter__109903(cljs.core.rest(s__109904__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.ui.built_in_colors);
})()),daiquiri.core.create_element("a",{'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-background","remove-background",291795686)], 0)),'onClick':rm_bgcolor_fn},[daiquiri.core.create_element("div",{'className':"heading-bg remove"},["-"])])])]);
}),null,"frontend.ui/menu-background-color");
frontend.ui.ls_textarea = rum.core.lazy_build(rum.core.build_defc,(function (p__109910){
var map__109911 = p__109910;
var map__109911__$1 = cljs.core.__destructure_map(map__109911);
var props = map__109911__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109911__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var skip_composition_QMARK_ = frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861));
var on_composition = (function (e){
if(cljs.core.truth_(skip_composition_QMARK_)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
var G__109912 = e.type;
switch (G__109912) {
case "compositionend":
frontend.state.set_editor_in_composition_BANG_(false);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));

break;
default:
return frontend.state.set_editor_in_composition_BANG_(true);

}
}
});
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
if(cljs.core.truth_(frontend.state.editor_in_composition_QMARK_())){
return null;
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-composition-start","on-composition-start",-1518620253),on_composition,new cljs.core.Keyword(null,"on-composition-update","on-composition-update",-337521083),on_composition,new cljs.core.Keyword(null,"on-composition-end","on-composition-end",581757376),on_composition], 0));
return daiquiri.interpreter.interpret((frontend.ui.textarea.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.textarea.cljs$core$IFn$_invoke$arity$1(props__$1) : frontend.ui.textarea.call(null,props__$1)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var el_110254 = rum.core.dom_node(state);
var _STAR_mouse_point_110255 = cljs.core.volatile_BANG_(null);
el_110254.setAttribute("aria-label","editing block");

var G__109913_110256 = el_110254;
G__109913_110256.addEventListener("select",(function (){
var start = frontend.util.get_selection_start(el_110254);
var end = frontend.util.get_selection_end(el_110254);
if(cljs.core.truth_((function (){var and__5041__auto__ = start;
if(cljs.core.truth_(and__5041__auto__)){
return end;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
if(and__5041__auto__){
var caret_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(el_110254);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"caret","caret",-1275001854),caret_pos,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end,new cljs.core.Keyword(null,"text","text",-1790561697),el_110254.value.substring(start,end),new cljs.core.Keyword(null,"point","point",1813198264),cljs.core.select_keys((function (){var or__5043__auto__ = cljs.core.deref(_STAR_mouse_point_110255);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return caret_pos;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))], null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-selection-end","input-selection-end",214372173),cljs_bean.core.__GT_js(e));

return cljs.core.vreset_BANG_(_STAR_mouse_point_110255,null);
} else {
return null;
}
} else {
return null;
}
}));

G__109913_110256.addEventListener("mouseup",(function (p1__109909_SHARP_){
return cljs.core.vreset_BANG_(_STAR_mouse_point_110255,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),p1__109909_SHARP_.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1__109909_SHARP_.y], null));
}));


return state;
})], null)], null),"frontend.ui/ls-textarea");
frontend.ui.dropdown_content_wrapper = rum.core.lazy_build(rum.core.build_defc,(function (dropdown_state,_close_fn,content,class$,style_opts){
var class$__$1 = (function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.hiccup__GT_class("origin-top-right.absolute.right-0.mt-2");
}
})();
return daiquiri.core.create_element("div",{'style':daiquiri.interpreter.element_attributes(style_opts),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-wrapper",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__109916 = dropdown_state;
switch (G__109916) {
case "entering":
return "transition ease-out duration-100 transform opacity-0 scale-95";

break;
case "entered":
return "transition ease-out duration-100 transform opacity-100 scale-100";

break;
case "exiting":
return "transition ease-in duration-75 transform opacity-100 scale-100";

break;
case "exited":
return "transition ease-in duration-75 transform opacity-0 scale-95";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109916)].join('')));

}
})())].join('')], null))},[daiquiri.interpreter.interpret(content)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var k = (cljs.core.count(frontend.state.sub(new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881))) + (1));
var args = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881),k], null),cljs.core.second(args));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.ui","k","frontend.ui/k",-230439489),k);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.update_state_BANG_(new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881),(function (p1__109914_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__109914_SHARP_,new cljs.core.Keyword("frontend.ui","k","frontend.ui/k",-230439489).cljs$core$IFn$_invoke$arity$1(state));
}));

return state;
})], null)], null),"frontend.ui/dropdown-content-wrapper");
frontend.ui.dropdown = rum.core.lazy_build(rum.core.build_defcs,(function() { 
var G__110258__delegate = function (state,content_fn,modal_content_fn,p__109917){
var vec__109918 = p__109917;
var map__109921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109918,(0),null);
var map__109921__$1 = cljs.core.__destructure_map(map__109921);
var modal_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109921__$1,new cljs.core.Keyword(null,"modal-class","modal-class",226435127));
var z_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109921__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999));
var trigger_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109921__$1,new cljs.core.Keyword(null,"trigger-class","trigger-class",1251717016));
var map__109922 = state;
var map__109922__$1 = cljs.core.__destructure_map(map__109922);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109922__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var modal_content = (modal_content_fn.cljs$core$IFn$_invoke$arity$1 ? modal_content_fn.cljs$core$IFn$_invoke$arity$1(state) : modal_content_fn.call(null,state));
var close_fn = new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["relative","ui__dropdown-trigger",trigger_class], null))},[daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$1 ? content_fn.cljs$core$IFn$_invoke$arity$1(state) : content_fn.call(null,state))),daiquiri.interpreter.interpret((function (){var G__109925 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(open_QMARK_),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__109926 = (function (dropdown_state){
if(cljs.core.truth_(cljs.core.deref(open_QMARK_))){
return frontend.ui.dropdown_content_wrapper(dropdown_state,close_fn,modal_content,modal_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),z_index], null));
} else {
return null;
}
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__109925,G__109926) : frontend.ui.css_transition.call(null,G__109925,G__109926));
})())]);
};
var G__110258 = function (state,content_fn,modal_content_fn,var_args){
var p__109917 = null;
if (arguments.length > 3) {
var G__110259__i = 0, G__110259__a = new Array(arguments.length -  3);
while (G__110259__i < G__110259__a.length) {G__110259__a[G__110259__i] = arguments[G__110259__i + 3]; ++G__110259__i;}
  p__109917 = new cljs.core.IndexedSeq(G__110259__a,0,null);
} 
return G__110258__delegate.call(this,state,content_fn,modal_content_fn,p__109917);};
G__110258.cljs$lang$maxFixedArity = 3;
G__110258.cljs$lang$applyTo = (function (arglist__110260){
var state = cljs.core.first(arglist__110260);
arglist__110260 = cljs.core.next(arglist__110260);
var content_fn = cljs.core.first(arglist__110260);
arglist__110260 = cljs.core.next(arglist__110260);
var modal_content_fn = cljs.core.first(arglist__110260);
var p__109917 = cljs.core.rest(arglist__110260);
return G__110258__delegate(state,content_fn,modal_content_fn,p__109917);
});
G__110258.cljs$core$IFn$_invoke$arity$variadic = G__110258__delegate;
return G__110258;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.modal(new cljs.core.Keyword(null,"open?","open?",1238443125))], null),"frontend.ui/dropdown");
frontend.ui.render_keyboard_shortcut = (function frontend$ui$render_keyboard_shortcut(var_args){
var args__5772__auto__ = [];
var len__5766__auto___110261 = arguments.length;
var i__5767__auto___110262 = (0);
while(true){
if((i__5767__auto___110262 < len__5766__auto___110261)){
args__5772__auto__.push((arguments[i__5767__auto___110262]));

var G__110263 = (i__5767__auto___110262 + (1));
i__5767__auto___110262 = G__110263;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic = (function (sequence,p__109929){
var map__109930 = p__109929;
var map__109930__$1 = cljs.core.__destructure_map(map__109930);
var opts = map__109930__$1;
var sequence__$1 = ((typeof sequence === 'string')?clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(clojure.string.trim(sequence)),/ /):sequence);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyboard-shortcut","span.keyboard-shortcut",-1239684213),logseq.shui.core.shortcut(sequence__$1,opts)], null);
}));

(frontend.ui.render_keyboard_shortcut.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.render_keyboard_shortcut.cljs$lang$applyTo = (function (seq109927){
var G__109928 = cljs.core.first(seq109927);
var seq109927__$1 = cljs.core.next(seq109927);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109928,seq109927__$1);
}));

frontend.ui.menu_link = rum.core.lazy_build(rum.core.build_defc,(function (p__109931,child){
var map__109932 = p__109931;
var map__109932__$1 = cljs.core.__destructure_map(map__109932);
var options = map__109932__$1;
var only_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109932__$1,new cljs.core.Keyword(null,"only-child?","only-child?",1700034724));
var no_padding_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109932__$1,new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109932__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109932__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
if(cljs.core.truth_(only_child_QMARK_)){
var attrs109933 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"only-child?","only-child?",1700034724));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs109933))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu-link"], null)], null),attrs109933], 0))):{'className':"menu-link"}),((cljs.core.map_QMARK_(attrs109933))?[daiquiri.interpreter.interpret(child)]:[daiquiri.interpreter.interpret(attrs109933),daiquiri.interpreter.interpret(child)]));
} else {
var attrs109936 = (function (){var G__109941 = options;
var G__109941__$1 = ((no_padding_QMARK_ === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109941,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," no-padding"].join('')):G__109941);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__109941__$1,new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522));

})();
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs109936))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-between","menu-link"], null)], null),attrs109936], 0))):{'className':"flex justify-between menu-link"}),((cljs.core.map_QMARK_(attrs109936))?[(function (){var attrs109937 = child;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs109937))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs109937], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs109937))?null:[daiquiri.interpreter.interpret(attrs109937)]));
})(),(cljs.core.truth_(shortcut)?(function (){var attrs109938 = frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(shortcut,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),false], null)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs109938))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs109938], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs109938))?null:[daiquiri.interpreter.interpret(attrs109938)]));
})():null)]:[daiquiri.interpreter.interpret(attrs109936),(function (){var attrs109939 = child;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs109939))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs109939], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs109939))?null:[daiquiri.interpreter.interpret(attrs109939)]));
})(),(cljs.core.truth_(shortcut)?(function (){var attrs109940 = frontend.ui.render_keyboard_shortcut.cljs$core$IFn$_invoke$arity$variadic(shortcut,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),false], null)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs109940))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs109940], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs109940))?null:[daiquiri.interpreter.interpret(attrs109940)]));
})():null)]));
}
}),null,"frontend.ui/menu-link");
frontend.ui.dropdown_with_links = rum.core.lazy_build(rum.core.build_defc,(function (content_fn,links,p__109942){
var map__109943 = p__109942;
var map__109943__$1 = cljs.core.__destructure_map(map__109943);
var opts = map__109943__$1;
var outer_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109943__$1,new cljs.core.Keyword(null,"outer-header","outer-header",-1732961785));
var outer_footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109943__$1,new cljs.core.Keyword(null,"outer-footer","outer-footer",1884321739));
var links_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109943__$1,new cljs.core.Keyword(null,"links-header","links-header",-1729119536));
var links_footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109943__$1,new cljs.core.Keyword(null,"links-footer","links-footer",1890937614));
return frontend.ui.dropdown(content_fn,(function (p__109954){
var map__109955 = p__109954;
var map__109955__$1 = cljs.core.__destructure_map(map__109955);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109955__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var links_children = (function (){var links__$1 = ((cljs.core.fn_QMARK_(links))?(links.cljs$core$IFn$_invoke$arity$0 ? links.cljs$core$IFn$_invoke$arity$0() : links.call(null)):links);
var links__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,links__$1);
var iter__5520__auto__ = (function frontend$ui$iter__109956(s__109957){
return (new cljs.core.LazySeq(null,(function (){
var s__109957__$1 = s__109957;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109957__$1);
if(temp__5804__auto__){
var s__109957__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109957__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109957__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109959 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109958 = (0);
while(true){
if((i__109958 < size__5519__auto__)){
var map__109960 = cljs.core._nth(c__5518__auto__,i__109958);
var map__109960__$1 = cljs.core.__destructure_map(map__109960);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"options","options",99638489));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var hover_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"item","item",249373802));
var _as_link_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109960__$1,new cljs.core.Keyword(null,"_as-link?","_as-link?",-2015408331));
cljs.core.chunk_append(b__109959,(function (){var new_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,(function (){var G__109961 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),hover_detail,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__109958,map__109960,map__109960__$1,options,title,icon,key,hr,hover_detail,item,_as_link_QMARK_,c__5518__auto__,size__5519__auto__,b__109959,s__109957__$2,temp__5804__auto__,links__$1,links__$2,map__109955,map__109955__$1,close_fn,map__109943,map__109943__$1,opts,outer_header,outer_footer,links_header,links_footer){
return (function (e){
if((function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5804__auto____$1)){
var on_click_fn = temp__5804__auto____$1;
return (on_click_fn.cljs$core$IFn$_invoke$arity$1 ? on_click_fn.cljs$core$IFn$_invoke$arity$1(e) : on_click_fn.call(null,e));
} else {
return null;
}
})() === false){
return null;
} else {
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
}
});})(i__109958,map__109960,map__109960__$1,options,title,icon,key,hr,hover_detail,item,_as_link_QMARK_,c__5518__auto__,size__5519__auto__,b__109959,s__109957__$2,temp__5804__auto__,links__$1,links__$2,map__109955,map__109955__$1,close_fn,map__109943,map__109943__$1,opts,outer_header,outer_footer,links_header,links_footer))
], null);
if(cljs.core.truth_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109961,new cljs.core.Keyword(null,"key","key",-1516042587),key);
} else {
return G__109961;
}
})()], 0));
var child = (cljs.core.truth_(hr)?null:(function (){var or__5043__auto__ = item;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(icon)?icon:null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-wrap","div.title-wrap",456162205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"8px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null),title], null)], null);
}
})());
if(cljs.core.truth_(hr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5043__auto__ = key;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "dropdown-hr";
}
})()], null)], null);
} else {
return rum.core.with_key(frontend.ui.menu_link(new_options,child),title);
}
})());

var G__110264 = (i__109958 + (1));
i__109958 = G__110264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109959),frontend$ui$iter__109956(cljs.core.chunk_rest(s__109957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109959),null);
}
} else {
var map__109962 = cljs.core.first(s__109957__$2);
var map__109962__$1 = cljs.core.__destructure_map(map__109962);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"options","options",99638489));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var hover_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"item","item",249373802));
var _as_link_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109962__$1,new cljs.core.Keyword(null,"_as-link?","_as-link?",-2015408331));
return cljs.core.cons((function (){var new_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,(function (){var G__109963 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),hover_detail,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__109962,map__109962__$1,options,title,icon,key,hr,hover_detail,item,_as_link_QMARK_,s__109957__$2,temp__5804__auto__,links__$1,links__$2,map__109955,map__109955__$1,close_fn,map__109943,map__109943__$1,opts,outer_header,outer_footer,links_header,links_footer){
return (function (e){
if((function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5804__auto____$1)){
var on_click_fn = temp__5804__auto____$1;
return (on_click_fn.cljs$core$IFn$_invoke$arity$1 ? on_click_fn.cljs$core$IFn$_invoke$arity$1(e) : on_click_fn.call(null,e));
} else {
return null;
}
})() === false){
return null;
} else {
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
}
});})(map__109962,map__109962__$1,options,title,icon,key,hr,hover_detail,item,_as_link_QMARK_,s__109957__$2,temp__5804__auto__,links__$1,links__$2,map__109955,map__109955__$1,close_fn,map__109943,map__109943__$1,opts,outer_header,outer_footer,links_header,links_footer))
], null);
if(cljs.core.truth_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109963,new cljs.core.Keyword(null,"key","key",-1516042587),key);
} else {
return G__109963;
}
})()], 0));
var child = (cljs.core.truth_(hr)?null:(function (){var or__5043__auto__ = item;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(icon)?icon:null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-wrap","div.title-wrap",456162205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"8px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null),title], null)], null);
}
})());
if(cljs.core.truth_(hr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5043__auto__ = key;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "dropdown-hr";
}
})()], null)], null);
} else {
return rum.core.with_key(frontend.ui.menu_link(new_options,child),title);
}
})(),frontend$ui$iter__109956(cljs.core.rest(s__109957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(links__$2);
})();
var wrapper_children = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu-links-wrapper",".menu-links-wrapper",202541467),(cljs.core.truth_(links_header)?links_header:null),links_children,(cljs.core.truth_(links_footer)?links_footer:null)], null);
if(cljs.core.truth_((function (){var or__5043__auto__ = outer_header;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return outer_footer;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu-links-outer",".menu-links-outer",-2127780108),outer_header,wrapper_children,outer_footer], null);
} else {
return wrapper_children;
}
}),opts);
}),null,"frontend.ui/dropdown-with-links");
frontend.ui.notification_content = rum.core.lazy_build(rum.core.build_defc,(function (state,content,status,uid){
if(cljs.core.truth_((function (){var and__5041__auto__ = content;
if(cljs.core.truth_(and__5041__auto__)){
return status;
} else {
return and__5041__auto__;
}
})())){
var svg = (((status instanceof cljs.core.Keyword))?(function (){var G__109964 = status;
var G__109964__$1 = (((G__109964 instanceof cljs.core.Keyword))?G__109964.fqn:null);
switch (G__109964__$1) {
case "success":
var G__109965 = "circle-check";
var G__109966 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-success",new cljs.core.Keyword(null,"size","size",1098693007),"20"], null);
return (frontend.ui.icon.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(G__109965,G__109966) : frontend.ui.icon.call(null,G__109965,G__109966));

break;
case "warning":
var G__109967 = "alert-circle";
var G__109968 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-warning",new cljs.core.Keyword(null,"size","size",1098693007),"20"], null);
return (frontend.ui.icon.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(G__109967,G__109968) : frontend.ui.icon.call(null,G__109967,G__109968));

break;
case "error":
var G__109969 = "circle-x";
var G__109970 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-error",new cljs.core.Keyword(null,"size","size",1098693007),"20"], null);
return (frontend.ui.icon.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(G__109969,G__109970) : frontend.ui.icon.call(null,G__109969,G__109970));

break;
default:
var G__109971 = "info-circle";
var G__109972 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-indigo-500",new cljs.core.Keyword(null,"size","size",1098693007),"20"], null);
return (frontend.ui.icon.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(G__109971,G__109972) : frontend.ui.icon.call(null,G__109971,G__109972));

}
})():status);
return daiquiri.core.create_element("div",{'style':daiquiri.interpreter.element_attributes(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,"exiting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,"exited"))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(-1)], null):null)),'className':"ui__notifications-content"},[daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max-w-sm","w-full","shadow-lg","rounded-lg","pointer-events-auto","notification-area",(function (){var G__109973 = state;
switch (G__109973) {
case "entering":
return "transition ease-out duration-300 transform opacity-0 translate-y-2 sm:translate-x-0";

break;
case "entered":
return "transition ease-out duration-300 transform translate-y-0 opacity-100 sm:translate-x-0";

break;
case "exiting":
return "transition ease-in duration-100 opacity-100";

break;
case "exited":
return "transition ease-in duration-100 opacity-0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109973)].join('')));

}
})()], null))},[daiquiri.core.create_element("div",{'style':{'maxHeight':"calc(100vh - 200px)",'overflowY':"auto",'overflowX':"hidden"},'className':"rounded-lg shadow-xs"},[daiquiri.core.create_element("div",{'className':"p-4"},[daiquiri.core.create_element("div",{'className':"flex items-start"},[(function (){var attrs109974 = svg;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs109974))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-shrink-0","pt-2"], null)], null),attrs109974], 0))):{'className':"flex-shrink-0 pt-2"}),((cljs.core.map_QMARK_(attrs109974))?null:[daiquiri.interpreter.interpret(attrs109974)]));
})(),daiquiri.core.create_element("div",{'className':"ml-3 w-0 flex-1 pt-2"},[daiquiri.core.create_element("div",{'style':{'margin':(0)},'className':"text-sm leading-5 font-medium whitespace-pre-line"},[daiquiri.interpreter.interpret(content)])]),daiquiri.core.create_element("div",{'style':{'marginTop':(-9),'marginRight':(-18)},'className':"flex-shrink-0 flex"},[daiquiri.interpreter.interpret((function (){var G__109976 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"button-props","button-props",-392655929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-transparent hover:text-foreground",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.notification.clear_BANG_(uid);
}),new cljs.core.Keyword(null,"icon","icon",1679606541),"x"], null);
return (frontend.ui.button.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.button.cljs$core$IFn$_invoke$arity$1(G__109976) : frontend.ui.button.call(null,G__109976));
})())])])])])])]);
} else {
return null;
}
}),null,"frontend.ui/notification-content");
frontend.ui.notification_clear_all = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"ui__notifications-content"},[(function (){var attrs109987 = (function (){var G__109988 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("notification","clear-all","notification/clear-all",-1229504749)], 0));
var G__109989 = new cljs.core.Keyword(null,"intent","intent",-390846953);
var G__109990 = "logseq";
var G__109991 = new cljs.core.Keyword(null,"on-click","on-click",1632826543);
var G__109992 = (function (){
return frontend.handler.notification.clear_all_BANG_();
});
return (frontend.ui.button.cljs$core$IFn$_invoke$arity$5 ? frontend.ui.button.cljs$core$IFn$_invoke$arity$5(G__109988,G__109989,G__109990,G__109991,G__109992) : frontend.ui.button.call(null,G__109988,G__109989,G__109990,G__109991,G__109992));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs109987))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pointer-events-auto","notification-clear"], null)], null),attrs109987], 0))):{'className':"pointer-events-auto notification-clear"}),((cljs.core.map_QMARK_(attrs109987))?null:[daiquiri.interpreter.interpret(attrs109987)]));
})()]);
}),null,"frontend.ui/notification-clear-all");
frontend.ui.notification = rum.core.lazy_build(rum.core.build_defc,(function (){
var contents = frontend.state.sub(new cljs.core.Keyword("notification","contents","notification/contents",-1760740618));
return daiquiri.interpreter.interpret((function (){var G__109999 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"notifications ui__notifications"], null);
var G__110000 = (function (){var notifications = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
var k = cljs.core.first(el);
var v = cljs.core.second(el);
var G__110001 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),(100),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(k)], null);
var G__110002 = (function (state){
return frontend.ui.notification_content(state,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(v),k);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110001,G__110002) : frontend.ui.css_transition.call(null,G__110001,G__110002));
}),contents);
var clear_all = (((cljs.core.count(contents) > (1)))?(function (){var G__110003 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),(100),new cljs.core.Keyword(null,"k","k",-2146297393),"clear-all"], null);
var G__110004 = (function (_state){
return frontend.ui.notification_clear_all();
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110003,G__110004) : frontend.ui.css_transition.call(null,G__110003,G__110004));
})():null);
var items = (cljs.core.truth_(clear_all)?cljs.core.cons(clear_all,notifications):notifications);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(items);
})();
return (frontend.ui.transition_group.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.transition_group.cljs$core$IFn$_invoke$arity$2(G__109999,G__110000) : frontend.ui.transition_group.call(null,G__109999,G__110000));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.ui/notification");
frontend.ui.humanity_time_ago = rum.core.lazy_build(rum.core.build_defc,(function (input,opts){
var time_fn = (function (){
try{return frontend.util.time_ago(input);
}catch (e110009){var e = e110009;
console.error(e);

return input;
}});
var vec__110006 = rum.core.use_state(time_fn());
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110006,(0),null);
var set_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110006,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var timer = setInterval((function (){
var G__110010 = time_fn();
return (set_time.cljs$core$IFn$_invoke$arity$1 ? set_time.cljs$core$IFn$_invoke$arity$1(G__110010) : set_time.call(null,G__110010));
}),((1000) * (30)));
return (function (){
return clearInterval(timer);
});
}),cljs.core.PersistentVector.EMPTY);

var attrs110005 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,opts], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110005))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__humanity-time"], null)], null),attrs110005], 0))):{'className':"ui__humanity-time"}),((cljs.core.map_QMARK_(attrs110005))?[daiquiri.interpreter.interpret(time)]:[daiquiri.interpreter.interpret(attrs110005),daiquiri.interpreter.interpret(time)]));
}),null,"frontend.ui/humanity-time-ago");
frontend.ui.checkbox = (function frontend$ui$checkbox(option){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-checkbox.h-4.w-4.transition.duration-150.ease-in-out","input.form-checkbox.h-4.w-4.transition.duration-150.ease-in-out",-1809567774),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null),option], 0))], null);
});
frontend.ui.main_node = (function frontend$ui$main_node(){
return goog.dom.getElement("main-content-container");
});
frontend.ui.focus_element = (function frontend$ui$focus_element(element){
var temp__5804__auto__ = goog.dom.getElement(element);
if(cljs.core.truth_(temp__5804__auto__)){
var element__$1 = temp__5804__auto__;
return element__$1.focus();
} else {
return null;
}
});
frontend.ui.get_scroll_top = (function frontend$ui$get_scroll_top(){
return frontend.ui.main_node().scrollTop;
});
frontend.ui.get_dynamic_style_node = (function frontend$ui$get_dynamic_style_node(){
return document.getElementById("dynamic-style-scope");
});
frontend.ui.inject_document_devices_envs_BANG_ = (function frontend$ui$inject_document_devices_envs_BANG_(){
var cl = document.documentElement.classList;
if(frontend.config.publishing_QMARK_){
cl.add("is-publish-mode");
} else {
}

if(cljs.core.truth_(frontend.util.mac_QMARK_)){
cl.add("is-mac");
} else {
}

if(cljs.core.truth_(frontend.util.win32_QMARK_)){
cl.add("is-win32");
} else {
}

if(cljs.core.truth_(frontend.util.linux_QMARK_)){
cl.add("is-linux");
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
cl.add("is-electron");
} else {
}

if(cljs.core.truth_(frontend.util.ios_QMARK_())){
cl.add("is-ios");
} else {
}

if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
cl.add("is-mobile");
} else {
}

if(cljs.core.truth_(frontend.util.safari_QMARK_())){
cl.add("is-safari");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
cl.add("is-native-ios");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
cl.add("is-native-android");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())){
cl.add("is-native-iphone");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_iphone_without_notch_QMARK_())){
cl.add("is-native-iphone-without-notch");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ipad_QMARK_())){
cl.add("is-native-ipad");
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var seq__110015_110267 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["persist-zoom-level",((function (cl){
return (function (p1__110011_SHARP_){
return frontend.storage.set(new cljs.core.Keyword(null,"zoom-level","zoom-level",-91022225),p1__110011_SHARP_);
});})(cl))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["restore-zoom-level",((function (cl){
return (function (){
var temp__5804__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"zoom-level","zoom-level",-91022225));
if(cljs.core.truth_(temp__5804__auto__)){
var zoom_level = temp__5804__auto__;
return window.apis.setZoomLevel(zoom_level);
} else {
return null;
}
});})(cl))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-screen",((function (cl){
return (function (p1__110012_SHARP_){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(cl,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__110012_SHARP_,"enter"))?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["is-fullscreen"], 0));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__110012_SHARP_,"enter"));
});})(cl))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maximize",((function (cl){
return (function (p1__110013_SHARP_){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935),p1__110013_SHARP_);
});})(cl))
], null)], null));
var chunk__110016_110268 = null;
var count__110017_110269 = (0);
var i__110018_110270 = (0);
while(true){
if((i__110018_110270 < count__110017_110269)){
var vec__110025_110271 = chunk__110016_110268.cljs$core$IIndexed$_nth$arity$2(null,i__110018_110270);
var event_110272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110025_110271,(0),null);
var function_110273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110025_110271,(1),null);
window.apis.on(event_110272,function_110273);


var G__110274 = seq__110015_110267;
var G__110275 = chunk__110016_110268;
var G__110276 = count__110017_110269;
var G__110277 = (i__110018_110270 + (1));
seq__110015_110267 = G__110274;
chunk__110016_110268 = G__110275;
count__110017_110269 = G__110276;
i__110018_110270 = G__110277;
continue;
} else {
var temp__5804__auto___110278 = cljs.core.seq(seq__110015_110267);
if(temp__5804__auto___110278){
var seq__110015_110279__$1 = temp__5804__auto___110278;
if(cljs.core.chunked_seq_QMARK_(seq__110015_110279__$1)){
var c__5565__auto___110280 = cljs.core.chunk_first(seq__110015_110279__$1);
var G__110281 = cljs.core.chunk_rest(seq__110015_110279__$1);
var G__110282 = c__5565__auto___110280;
var G__110283 = cljs.core.count(c__5565__auto___110280);
var G__110284 = (0);
seq__110015_110267 = G__110281;
chunk__110016_110268 = G__110282;
count__110017_110269 = G__110283;
i__110018_110270 = G__110284;
continue;
} else {
var vec__110028_110285 = cljs.core.first(seq__110015_110279__$1);
var event_110286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110028_110285,(0),null);
var function_110287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110028_110285,(1),null);
window.apis.on(event_110286,function_110287);


var G__110288 = cljs.core.next(seq__110015_110279__$1);
var G__110289 = null;
var G__110290 = (0);
var G__110291 = (0);
seq__110015_110267 = G__110288;
chunk__110016_110268 = G__110289;
count__110017_110269 = G__110290;
i__110018_110270 = G__110291;
continue;
}
} else {
}
}
break;
}

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"getAppBaseInfo","getAppBaseInfo",-1406218507)], 0)),(function (p1__110014_SHARP_){
var map__110031 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__110014_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__110031__$1 = cljs.core.__destructure_map(map__110031);
var isFullScreen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110031__$1,new cljs.core.Keyword(null,"isFullScreen","isFullScreen",-1879720011));
var isMaximized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110031__$1,new cljs.core.Keyword(null,"isMaximized","isMaximized",-2003319926));
if(cljs.core.truth_(isFullScreen)){
cl.add("is-fullscreen");

frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630),true);
} else {
}

if(cljs.core.truth_(isMaximized)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935),true);
} else {
return null;
}
}));
} else {
return null;
}
});
frontend.ui.inject_dynamic_style_node_BANG_ = (function frontend$ui$inject_dynamic_style_node_BANG_(){
var style = frontend.ui.get_dynamic_style_node();
if((style == null)){
var node = document.createElement("style");
(node.id = "dynamic-style-scope");

return document.head.appendChild(node);
} else {
return style;
}
});
frontend.ui.apply_custom_theme_effect_BANG_ = (function frontend$ui$apply_custom_theme_effect_BANG_(theme){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
var temp__5804__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(theme)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var custom_theme = temp__5804__auto__;
if((!((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(custom_theme) == null)))){
return LSPluginCore.selectTheme(cljs_bean.core.__GT_js(custom_theme),cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit","emit",-1327179018),false], null)));
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(custom_theme));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.ui.setup_system_theme_effect_BANG_ = (function frontend$ui$setup_system_theme_effect_BANG_(){
var schemaMedia = window.matchMedia("(prefers-color-scheme: dark)");
try{schemaMedia.addEventListener("change",frontend.state.sync_system_theme_BANG_);
}catch (e110032){var _error_110292 = e110032;
schemaMedia.addListener(frontend.state.sync_system_theme_BANG_);
}
frontend.state.sync_system_theme_BANG_();

return (function (){
try{return schemaMedia.removeEventListener("change",frontend.state.sync_system_theme_BANG_);
}catch (e110033){var _error = e110033;
return schemaMedia.removeListener(frontend.state.sync_system_theme_BANG_);
}});
});
frontend.ui.set_global_active_keystroke = (function frontend$ui$set_global_active_keystroke(val){
return document.body.setAttribute("data-active-keystroke",val);
});
frontend.ui.setup_active_keystroke_BANG_ = (function frontend$ui$setup_active_keystroke_BANG_(){
var active_keystroke = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var heads = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"control","control",1892578036),null], null), null);
var handle_global_keystroke = (function (down_QMARK_,e){
var handler_110293 = (cljs.core.truth_(down_QMARK_)?cljs.core.conj:cljs.core.disj);
var keystroke_110294 = e.key;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_keystroke,handler_110293,keystroke_110294);

if(cljs.core.contains_QMARK_(heads,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(e.key)))){
return frontend.ui.set_global_active_keystroke(clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.deref(active_keystroke)));
} else {
return null;
}
});
var keydown_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_global_keystroke,true);
var keyup_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_global_keystroke,false);
var clear_all = (function (){
frontend.ui.set_global_active_keystroke("");

return cljs.core.reset_BANG_(active_keystroke,cljs.core.PersistentHashSet.EMPTY);
});
window.addEventListener("keydown",keydown_handler);

window.addEventListener("keyup",keyup_handler);

window.addEventListener("blur",clear_all);

window.addEventListener("visibilitychange",clear_all);

return (function (){
window.removeEventListener("keydown",keydown_handler);

window.removeEventListener("keyup",keyup_handler);

window.removeEventListener("blur",clear_all);

return window.removeEventListener("visibilitychange",clear_all);
});
});
frontend.ui.setup_viewport_listeners_BANG_ = (function frontend$ui$setup_viewport_listeners_BANG_(){
var temp__5804__auto__ = frontend.ui.goog$module$goog$object.get(window,"visualViewport");
if(cljs.core.truth_(temp__5804__auto__)){
var vw = temp__5804__auto__;
var handler = (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","viewport","ui/viewport",443348007),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),vw.width,new cljs.core.Keyword(null,"height","height",1025178622),vw.height,new cljs.core.Keyword(null,"scale","scale",-230427353),vw.scale], null));
});
window.visualViewport.addEventListener("resize",handler);

handler();

return (function (){
return window.visualViewport.removeEventListener("resize",handler);
});
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.last_scroll_top !== 'undefined')){
} else {
frontend.ui.last_scroll_top = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.ui.scroll_down_QMARK_ = (function frontend$ui$scroll_down_QMARK_(){
var scroll_top = frontend.ui.get_scroll_top();
var down_QMARK_ = (scroll_top >= cljs.core.deref(frontend.ui.last_scroll_top));
cljs.core.reset_BANG_(frontend.ui.last_scroll_top,scroll_top);

return down_QMARK_;
});
frontend.ui.bottom_reached_QMARK_ = (function frontend$ui$bottom_reached_QMARK_(node,threshold){
var full_height = frontend.ui.goog$module$goog$object.get(node,"scrollHeight");
var scroll_top = frontend.ui.goog$module$goog$object.get(node,"scrollTop");
var client_height = frontend.ui.goog$module$goog$object.get(node,"clientHeight");
return (((full_height - scroll_top) - client_height) <= threshold);
});
frontend.ui.on_scroll = (function frontend$ui$on_scroll(node,p__110034){
var map__110035 = p__110034;
var map__110035__$1 = cljs.core.__destructure_map(map__110035);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110035__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_top_reached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110035__$1,new cljs.core.Keyword(null,"on-top-reached","on-top-reached",1295153037));
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110035__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(500));
var bottom_reached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110035__$1,new cljs.core.Keyword(null,"bottom-reached","bottom-reached",-2132308834));
var scroll_top = frontend.ui.goog$module$goog$object.get(node,"scrollTop");
var bottom_reached_QMARK_ = ((cljs.core.fn_QMARK_(bottom_reached))?(bottom_reached.cljs$core$IFn$_invoke$arity$0 ? bottom_reached.cljs$core$IFn$_invoke$arity$0() : bottom_reached.call(null)):frontend.ui.bottom_reached_QMARK_(node,threshold));
var top_reached_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scroll_top,(0));
var down_QMARK_ = frontend.ui.scroll_down_QMARK_();
if(cljs.core.truth_((function (){var and__5041__auto__ = bottom_reached_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return on_load;
} else {
return and__5041__auto__;
}
})())){
(on_load.cljs$core$IFn$_invoke$arity$0 ? on_load.cljs$core$IFn$_invoke$arity$0() : on_load.call(null));
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = (!(down_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = top_reached_QMARK_;
if(and__5041__auto____$1){
return on_top_reached;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return (on_top_reached.cljs$core$IFn$_invoke$arity$0 ? on_top_reached.cljs$core$IFn$_invoke$arity$0() : on_top_reached.call(null));
} else {
return null;
}
});
/**
 * Attach scroll and resize listeners.
 */
frontend.ui.attach_listeners = (function frontend$ui$attach_listeners(state){
var list_element_id = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
var node = document.getElementById(list_element_id);
var debounced_on_scroll = goog.functions.debounce((function (){
return frontend.ui.on_scroll(node,opts);
}),(100));
return frontend.mixins.listen(state,node,new cljs.core.Keyword(null,"scroll","scroll",971553779),debounced_on_scroll);
});
/**
 * Render an infinite list.
 */
frontend.ui.infinite_list = rum.core.lazy_build(rum.core.build_defcs,(function (state,_list_element_id,body,p__110037){
var map__110038 = p__110037;
var map__110038__$1 = cljs.core.__destructure_map(map__110038);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110038__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var has_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110038__$1,new cljs.core.Keyword(null,"has-more","has-more",-320006781));
var more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110038__$1,new cljs.core.Keyword(null,"more","more",-2058821800));
var more_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110038__$1,new cljs.core.Keyword(null,"more-class","more-class",-869337192),"text-sm");
var attrs110036 = body;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110036))?daiquiri.interpreter.element_attributes(attrs110036):null),((cljs.core.map_QMARK_(attrs110036))?[(cljs.core.truth_(has_more)?daiquiri.core.create_element("div",{'className':"w-full p-4"},[daiquiri.core.create_element("a",{'onClick':on_load,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade-link","text-link","font-bold",more_class], null))},[daiquiri.interpreter.interpret((function (){var or__5043__auto__ = more;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","earlier","page/earlier",-61115488)], 0));
}
})())])]):null)]:[daiquiri.interpreter.interpret(attrs110036),(cljs.core.truth_(has_more)?daiquiri.core.create_element("div",{'className':"w-full p-4"},[daiquiri.core.create_element("a",{'onClick':on_load,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade-link","text-link","font-bold",more_class], null))},[daiquiri.interpreter.interpret((function (){var or__5043__auto__ = more;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","earlier","page/earlier",-61115488)], 0));
}
})())])]):null)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1(frontend.ui.attach_listeners)], null),"frontend.ui/infinite-list");
frontend.ui.auto_complete = rum.core.lazy_build(rum.core.build_defcs,(function (state,matched,p__110039){
var map__110040 = p__110039;
var map__110040__$1 = cljs.core.__destructure_map(map__110040);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_shift_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328));
var get_group_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"get-group-name","get-group-name",-160379696));
var empty_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085));
var item_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"item-render","item-render",253627868));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110040__$1,new cljs.core.Keyword(null,"header","header",119441134));
var _STAR_current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
return daiquiri.core.create_element("div",{'id':"ui__ac",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null))},[((cljs.core.seq(matched))?(function (){var attrs110041 = (cljs.core.truth_(header)?header:null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110041))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ui__ac-inner",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hide-scrollbar"], null)], null),attrs110041], 0))):{'id':"ui__ac-inner",'className':"hide-scrollbar"}),((cljs.core.map_QMARK_(attrs110041))?[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__110042(s__110043){
return (new cljs.core.LazySeq(null,(function (){
var s__110043__$1 = s__110043;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110043__$1);
if(temp__5804__auto__){
var s__110043__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110043__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110043__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110045 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110044 = (0);
while(true){
if((i__110044 < size__5519__auto__)){
var vec__110046 = cljs.core._nth(c__5518__auto__,i__110044);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110046,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110046,(1),null);
cljs.core.chunk_append(b__110045,daiquiri.core.create_element(daiquiri.core.fragment,{'key':idx},[(function (){var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link-wrap","div.menu-link-wrap",2002705411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (i__110044,vec__110046,idx,item,c__5518__auto__,size__5519__auto__,b__110045,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (){
return cljs.core.reset_BANG_(_STAR_current_idx,idx);
});})(i__110044,vec__110046,idx,item,c__5518__auto__,size__5519__auto__,b__110045,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_current_idx),idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__110044,chosen_QMARK_,vec__110046,idx,item,c__5518__auto__,size__5519__auto__,b__110045,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5041__auto__)){
return on_shift_chosen;
} else {
return and__5041__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_chosen.call(null,item));
}
});})(i__110044,chosen_QMARK_,vec__110046,idx,item,c__5518__auto__,size__5519__auto__,b__110045,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
if(cljs.core.truth_(get_group_name)){
return daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
if(cljs.core.truth_(temp__5802__auto__)){
var group_name = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());
} else {
return daiquiri.interpreter.interpret(item_cp);
}
})()]));

var G__110295 = (i__110044 + (1));
i__110044 = G__110295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110045),frontend$ui$iter__110042(cljs.core.chunk_rest(s__110043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110045),null);
}
} else {
var vec__110049 = cljs.core.first(s__110043__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110049,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110049,(1),null);
return cljs.core.cons(daiquiri.core.create_element(daiquiri.core.fragment,{'key':idx},[(function (){var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link-wrap","div.menu-link-wrap",2002705411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (vec__110049,idx,item,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (){
return cljs.core.reset_BANG_(_STAR_current_idx,idx);
});})(vec__110049,idx,item,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_current_idx),idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (chosen_QMARK_,vec__110049,idx,item,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5041__auto__)){
return on_shift_chosen;
} else {
return and__5041__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_chosen.call(null,item));
}
});})(chosen_QMARK_,vec__110049,idx,item,s__110043__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
if(cljs.core.truth_(get_group_name)){
return daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
if(cljs.core.truth_(temp__5802__auto__)){
var group_name = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());
} else {
return daiquiri.interpreter.interpret(item_cp);
}
})()]),frontend$ui$iter__110042(cljs.core.rest(s__110043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(matched));
})())]:[daiquiri.interpreter.interpret(attrs110041),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__110052(s__110053){
return (new cljs.core.LazySeq(null,(function (){
var s__110053__$1 = s__110053;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110053__$1);
if(temp__5804__auto__){
var s__110053__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110053__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110053__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110055 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110054 = (0);
while(true){
if((i__110054 < size__5519__auto__)){
var vec__110056 = cljs.core._nth(c__5518__auto__,i__110054);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110056,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110056,(1),null);
cljs.core.chunk_append(b__110055,daiquiri.core.create_element(daiquiri.core.fragment,{'key':idx},[(function (){var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link-wrap","div.menu-link-wrap",2002705411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (i__110054,vec__110056,idx,item,c__5518__auto__,size__5519__auto__,b__110055,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (){
return cljs.core.reset_BANG_(_STAR_current_idx,idx);
});})(i__110054,vec__110056,idx,item,c__5518__auto__,size__5519__auto__,b__110055,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_current_idx),idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__110054,chosen_QMARK_,vec__110056,idx,item,c__5518__auto__,size__5519__auto__,b__110055,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5041__auto__)){
return on_shift_chosen;
} else {
return and__5041__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_chosen.call(null,item));
}
});})(i__110054,chosen_QMARK_,vec__110056,idx,item,c__5518__auto__,size__5519__auto__,b__110055,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
if(cljs.core.truth_(get_group_name)){
return daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
if(cljs.core.truth_(temp__5802__auto__)){
var group_name = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());
} else {
return daiquiri.interpreter.interpret(item_cp);
}
})()]));

var G__110296 = (i__110054 + (1));
i__110054 = G__110296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110055),frontend$ui$iter__110052(cljs.core.chunk_rest(s__110053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110055),null);
}
} else {
var vec__110059 = cljs.core.first(s__110053__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110059,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110059,(1),null);
return cljs.core.cons(daiquiri.core.create_element(daiquiri.core.fragment,{'key':idx},[(function (){var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-link-wrap","div.menu-link-wrap",2002705411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (vec__110059,idx,item,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (){
return cljs.core.reset_BANG_(_STAR_current_idx,idx);
});})(vec__110059,idx,item,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_current_idx),idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (chosen_QMARK_,vec__110059,idx,item,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__5041__auto__)){
return on_shift_chosen;
} else {
return and__5041__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_chosen.call(null,item));
}
});})(chosen_QMARK_,vec__110059,idx,item,s__110053__$2,temp__5804__auto__,attrs110041,_STAR_current_idx,map__110040,map__110040__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$,header))
], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
if(cljs.core.truth_(get_group_name)){
return daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
if(cljs.core.truth_(temp__5802__auto__)){
var group_name = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());
} else {
return daiquiri.interpreter.interpret(item_cp);
}
})()]),frontend$ui$iter__110052(cljs.core.rest(s__110053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(matched));
})())]));
})():(cljs.core.truth_(empty_placeholder)?daiquiri.interpreter.interpret(empty_placeholder):null))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612)),frontend.modules.shortcut.core.mixin_STAR_(new cljs.core.Keyword("shortcut.handler","auto-complete","shortcut.handler/auto-complete",1783376094))], null),"frontend.ui/auto-complete");
frontend.ui.datepicker = frontend.ui.date_picker.date_picker;
frontend.ui.toggle = (function frontend$ui$toggle(var_args){
var G__110063 = arguments.length;
switch (G__110063) {
case 2:
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2 = (function (on_QMARK_,on_click){
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_click,false);
}));

(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3 = (function (on_QMARK_,on_click,small_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ui__toggle","a.ui__toggle",307271518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(small_QMARK_)?"is-small":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.wrapper.transition-colors.ease-in-out.duration-200","span.wrapper.transition-colors.ease-in-out.duration-200",805399991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-checked","aria-checked",980530562),(cljs.core.truth_(on_QMARK_)?"true":"false"),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"0",new cljs.core.Keyword(null,"role","role",-736691072),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(on_QMARK_)?"ui__toggle-background-on":"ui__toggle-background-off")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.switcher.transform.transition.ease-in-out.duration-200","span.switcher.transform.transition.ease-in-out.duration-200",-1989927127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(on_QMARK_)?(cljs.core.truth_(small_QMARK_)?"translate-x-4":"translate-x-5"):"translate-x-0"),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null)], null);
}));

(frontend.ui.toggle.cljs$lang$maxFixedArity = 3);

frontend.ui.keyboard_shortcut_from_config = (function frontend$ui$keyboard_shortcut_from_config(var_args){
var args__5772__auto__ = [];
var len__5766__auto___110298 = arguments.length;
var i__5767__auto___110299 = (0);
while(true){
if((i__5767__auto___110299 < len__5766__auto___110298)){
args__5772__auto__.push((arguments[i__5767__auto___110299]));

var G__110300 = (i__5767__auto___110299 + (1));
i__5767__auto___110299 = G__110300;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.ui.keyboard_shortcut_from_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.ui.keyboard_shortcut_from_config.cljs$core$IFn$_invoke$arity$variadic = (function (shortcut_name,p__110066){
var map__110067 = p__110066;
var map__110067__$1 = cljs.core.__destructure_map(map__110067);
var pick_first_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110067__$1,new cljs.core.Keyword(null,"pick-first?","pick-first?",-2055544652));
var built_in_binding = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.config.all_built_in_keyboard_shortcuts,shortcut_name));
var custom_binding = (cljs.core.truth_(frontend.state.shortcuts())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.shortcuts(),shortcut_name):null);
var binding = (function (){var or__5043__auto__ = custom_binding;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return built_in_binding;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = pick_first_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.coll_QMARK_(binding);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.first(binding);
} else {
return frontend.modules.shortcut.utils.decorate_binding(binding);
}
}));

(frontend.ui.keyboard_shortcut_from_config.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.keyboard_shortcut_from_config.cljs$lang$applyTo = (function (seq110064){
var G__110065 = cljs.core.first(seq110064);
var seq110064__$1 = cljs.core.next(seq110064);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__110065,seq110064__$1);
}));

frontend.ui.modal_overlay = rum.core.lazy_build(rum.core.build_defc,(function (state,close_fn,close_backdrop_QMARK_){
return daiquiri.core.create_element("div",{'onClick':(function (){
if(cljs.core.truth_(close_backdrop_QMARK_)){
return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__modal-overlay",(function (){var G__110068 = state;
switch (G__110068) {
case "entering":
return "ease-out duration-300 opacity-0";

break;
case "entered":
return "ease-out duration-300 opacity-100";

break;
case "exiting":
return "ease-in duration-200 opacity-100";

break;
case "exited":
return "ease-in duration-200 opacity-0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110068)].join('')));

}
})()], null))},[daiquiri.core.create_element("div",{'className':"absolute inset-0 opacity-75"},null)]);
}),null,"frontend.ui/modal-overlay");
frontend.ui.modal_panel_content = rum.core.lazy_build(rum.core.build_defc,(function (panel_content,close_fn){
return daiquiri.interpreter.interpret((panel_content.cljs$core$IFn$_invoke$arity$1 ? panel_content.cljs$core$IFn$_invoke$arity$1(close_fn) : panel_content.call(null,close_fn)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.component_editing_mode], null),"frontend.ui/modal-panel-content");
frontend.ui.modal_panel = rum.core.lazy_build(rum.core.build_defc,(function (show_QMARK_,panel_content,transition_state,close_fn,fullscreen_QMARK_,close_btn_QMARK_){
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__modal-panel","transform","transition-all","sm:min-w-lg","sm",(function (){var G__110071 = transition_state;
switch (G__110071) {
case "entering":
return "ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95";

break;
case "entered":
return "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100";

break;
case "exiting":
return "ease-in duration-200 opacity-100 translate-y-0 sm:scale-100";

break;
case "exited":
return "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110071)].join('')));

}
})()], null))},[((close_btn_QMARK_ === false)?null:daiquiri.core.create_element("div",{'className':"ui__modal-close-wrap"},[daiquiri.core.create_element("a",{'aria-label':"Close",'type':"button",'onClick':close_fn,'className':"ui__modal-close"},[daiquiri.core.create_element("svg",{'stroke':"currentColor",'viewBox':"0 0 24 24",'fill':"none",'className':"h-6 w-6"},[daiquiri.core.create_element("path",{'d':"M6 18L18 6M6 6l12 12",'strokeWidth':"2",'strokeLinejoin':"round",'strokeLinecap':"round"},null)])])])),(cljs.core.truth_(show_QMARK_)?daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fullscreen_QMARK_)?"":"panel-content")], null))},[frontend.ui.modal_panel_content(panel_content,close_fn)]):null)]);
}),null,"frontend.ui/modal-panel");
frontend.ui.modal = rum.core.lazy_build(rum.core.build_defc,(function (){
var modal_panel_content = frontend.state.sub(new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448));
var fullscreen_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297));
var close_btn_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151));
var close_backdrop_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","close-backdrop?","modal/close-backdrop?",1915188727));
var show_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","show?","modal/show?",1441869594));
var label = frontend.state.sub(new cljs.core.Keyword("modal","label","modal/label",-1776753955));
var class$ = frontend.state.sub(new cljs.core.Keyword("modal","class","modal/class",-1928981561));
var close_fn = (function (){
frontend.state.close_modal_BANG_();

return frontend.state.close_settings_BANG_();
});
var modal_panel_content__$1 = (function (){var or__5043__auto__ = modal_panel_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (function (_close){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
}
})();
return daiquiri.core.create_element("div",{'style':{'zIndex':(cljs.core.truth_(show_QMARK_)?(999):(-1)),'display':(cljs.core.truth_(show_QMARK_)?"flex":"none")},'label':label,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__modal",class$], null))},[daiquiri.interpreter.interpret((function (){var G__110076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__110077 = (function (state){
return frontend.ui.modal_overlay(state,close_fn,close_backdrop_QMARK_);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110076,G__110077) : frontend.ui.css_transition.call(null,G__110076,G__110077));
})()),daiquiri.interpreter.interpret((function (){var G__110080 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__110081 = (function (state){
return frontend.ui.modal_panel(show_QMARK_,modal_panel_content__$1,state,close_fn,fullscreen_QMARK_,close_btn_QMARK_);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110080,G__110081) : frontend.ui.css_transition.call(null,G__110080,G__110081));
})())]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__110082 = rum.core.dom_node(state).querySelector("button.ui__modal-close");
if((G__110082 == null)){
return null;
} else {
return G__110082.click();
}
}),new cljs.core.Keyword(null,"outside?","outside?",-1930213908),false], 0));

return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [(13),(function (state__$1,e){
e.preventDefault();

var G__110083 = rum.core.dom_node(state__$1).querySelector("button.ui__modal-enter");
if((G__110083 == null)){
return null;
} else {
return G__110083.click();
}
})], null));
}))], null),"frontend.ui/modal");
frontend.ui.make_confirm_modal = (function frontend$ui$make_confirm_modal(p__110085){
var map__110086 = p__110085;
var map__110086__$1 = cljs.core.__destructure_map(map__110086);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110086__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110086__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110086__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var sub_checkbox_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110086__$1,new cljs.core.Keyword(null,"sub-checkbox?","sub-checkbox?",-671905753));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110086__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return cljs.core.List.EMPTY;
}));
var on_confirm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110086__$1,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038));
return (function (close_fn){
var _STAR_sub_checkbox_selected = (function (){var and__5041__auto__ = sub_checkbox_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
} else {
return and__5041__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__confirm-modal","div.ui__confirm-modal",975358362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["is-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.sm:items-start","div.sm:flex.sm:items-start",-437342012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-error.sm:mx-0.sm:h-10.sm:w-10",434929029),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6.text-error","svg.h-6.w-6.text-error",-1874128299),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.headline.text-lg.leading-6.font-medium","h2.headline.text-lg.leading-6.font-medium",1093036727),(((title instanceof cljs.core.Keyword))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)):title)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.sublabel","label.sublabel",644574517),(cljs.core.truth_(sub_checkbox_QMARK_)?frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var checked = e.target.checked;
return cljs.core.reset_BANG_(_STAR_sub_checkbox_selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [checked], null));
})], null)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.subline.text-gray-400","h3.subline.text-gray-400",-1915997625),(((sub_title instanceof cljs.core.Keyword))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_title], 0)):sub_title)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.sm:mt-4.flex.gap-4","div.mt-5.sm:mt-4.flex.gap-4",427953357),(function (){var G__110087 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0));
var G__110088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(on_cancel,close_fn)], null);
return (frontend.ui.button.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.button.cljs$core$IFn$_invoke$arity$2(G__110087,G__110088) : frontend.ui.button.call(null,G__110087,G__110088));
})(),(function (){var G__110089 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0));
var G__110090 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__110084_SHARP_){
var and__5041__auto__ = cljs.core.fn_QMARK_(on_confirm);
if(and__5041__auto__){
var G__110091 = p1__110084_SHARP_;
var G__110092 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),close_fn,new cljs.core.Keyword(null,"sub-selected","sub-selected",-1251753428),(function (){var and__5041__auto____$1 = _STAR_sub_checkbox_selected;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.deref(_STAR_sub_checkbox_selected);
} else {
return and__5041__auto____$1;
}
})()], null);
return (on_confirm.cljs$core$IFn$_invoke$arity$2 ? on_confirm.cljs$core$IFn$_invoke$arity$2(G__110091,G__110092) : on_confirm.call(null,G__110091,G__110092));
} else {
return and__5041__auto__;
}
}),new cljs.core.Keyword(null,"button-props","button-props",-392655929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),"on"], null)], null);
return (frontend.ui.button.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.button.cljs$core$IFn$_invoke$arity$2(G__110089,G__110090) : frontend.ui.button.call(null,G__110089,G__110090));
})()], null)], null);
});
});
frontend.ui.sub_modal = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = cljs.core.seq(frontend.state.sub(new cljs.core.Keyword("modal","subsets","modal/subsets",627467906)));
if(temp__5804__auto__){
var modals = temp__5804__auto__;
var iter__5520__auto__ = (function frontend$ui$iter__110111(s__110112){
return (new cljs.core.LazySeq(null,(function (){
var s__110112__$1 = s__110112;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__110112__$1);
if(temp__5804__auto____$1){
var s__110112__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__110112__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110112__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110114 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110113 = (0);
while(true){
if((i__110113 < size__5519__auto__)){
var vec__110115 = cljs.core._nth(c__5518__auto__,i__110113);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110115,(0),null);
var modal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110115,(1),null);
cljs.core.chunk_append(b__110114,(function (){var id = new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(modal);
var modal_panel_content = new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448).cljs$core$IFn$_invoke$arity$1(modal);
var close_btn_QMARK_ = new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151).cljs$core$IFn$_invoke$arity$1(modal);
var close_backdrop_QMARK_ = new cljs.core.Keyword("modal","close-backdrop?","modal/close-backdrop?",1915188727).cljs$core$IFn$_invoke$arity$1(modal);
var show_QMARK_ = new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(modal);
var label = new cljs.core.Keyword("modal","label","modal/label",-1776753955).cljs$core$IFn$_invoke$arity$1(modal);
var class$ = new cljs.core.Keyword("modal","class","modal/class",-1928981561).cljs$core$IFn$_invoke$arity$1(modal);
var close_fn = ((function (i__110113,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(id);
});})(i__110113,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
;
var modal_panel_content__$1 = (function (){var or__5043__auto__ = modal_panel_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((function (i__110113,or__5043__auto__,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (_close){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
;})(i__110113,or__5043__auto__,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__modal.is-sub-modal","div.ui__modal.is-sub-modal",1533892698),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(show_QMARK_)?((999) + idx):(-1))], null),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),(function (){var G__110118 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__110119 = ((function (i__110113,G__110118,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (state){
return frontend.ui.modal_overlay(state,close_fn,close_backdrop_QMARK_);
});})(i__110113,G__110118,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110118,G__110119) : frontend.ui.css_transition.call(null,G__110118,G__110119));
})(),(function (){var G__110120 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__110121 = ((function (i__110113,G__110120,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (state){
return frontend.ui.modal_panel(show_QMARK_,modal_panel_content__$1,state,close_fn,false,close_btn_QMARK_);
});})(i__110113,G__110120,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110115,idx,modal,c__5518__auto__,size__5519__auto__,b__110114,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110120,G__110121) : frontend.ui.css_transition.call(null,G__110120,G__110121));
})()], null);
})());

var G__110303 = (i__110113 + (1));
i__110113 = G__110303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110114),frontend$ui$iter__110111(cljs.core.chunk_rest(s__110112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110114),null);
}
} else {
var vec__110122 = cljs.core.first(s__110112__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110122,(0),null);
var modal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110122,(1),null);
return cljs.core.cons((function (){var id = new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(modal);
var modal_panel_content = new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448).cljs$core$IFn$_invoke$arity$1(modal);
var close_btn_QMARK_ = new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151).cljs$core$IFn$_invoke$arity$1(modal);
var close_backdrop_QMARK_ = new cljs.core.Keyword("modal","close-backdrop?","modal/close-backdrop?",1915188727).cljs$core$IFn$_invoke$arity$1(modal);
var show_QMARK_ = new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(modal);
var label = new cljs.core.Keyword("modal","label","modal/label",-1776753955).cljs$core$IFn$_invoke$arity$1(modal);
var class$ = new cljs.core.Keyword("modal","class","modal/class",-1928981561).cljs$core$IFn$_invoke$arity$1(modal);
var close_fn = ((function (id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(id);
});})(id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
;
var modal_panel_content__$1 = (function (){var or__5043__auto__ = modal_panel_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((function (or__5043__auto__,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (_close){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
;})(or__5043__auto__,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__modal.is-sub-modal","div.ui__modal.is-sub-modal",1533892698),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(show_QMARK_)?((999) + idx):(-1))], null),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),(function (){var G__110125 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__110126 = ((function (G__110125,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (state){
return frontend.ui.modal_overlay(state,close_fn,close_backdrop_QMARK_);
});})(G__110125,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110125,G__110126) : frontend.ui.css_transition.call(null,G__110125,G__110126));
})(),(function (){var G__110127 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__110128 = ((function (G__110127,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__){
return (function (state){
return frontend.ui.modal_panel(show_QMARK_,modal_panel_content__$1,state,close_fn,false,close_btn_QMARK_);
});})(G__110127,id,modal_panel_content,close_btn_QMARK_,close_backdrop_QMARK_,show_QMARK_,label,class$,close_fn,modal_panel_content__$1,vec__110122,idx,modal,s__110112__$2,temp__5804__auto____$1,modals,temp__5804__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__110127,G__110128) : frontend.ui.css_transition.call(null,G__110127,G__110128));
})()], null);
})(),frontend$ui$iter__110111(cljs.core.rest(s__110112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(modals));
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.ui/sub-modal");
frontend.ui.loading = (function frontend$ui$loading(var_args){
var G__110130 = arguments.length;
switch (G__110130) {
case 0:
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.ui.loading.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189)], 0)));
}));

(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1 = (function (content){
return frontend.ui.loading.cljs$core$IFn$_invoke$arity$2(content,null);
}));

(frontend.ui.loading.cljs$core$IFn$_invoke$arity$2 = (function (content,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.inline.icon-loading","div.flex.flex-row.items-center.inline.icon-loading",-1637284770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.flex.items-center","span.icon.flex.items-center",-1264305839),frontend.components.svg.loader_fn(opts),((clojure.string.blank_QMARK_(content))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text.pl-2","span.text.pl-2",-2100749954),content], null))], null)], null);
}));

(frontend.ui.loading.cljs$lang$maxFixedArity = 2);

frontend.ui.notify_graph_persist_BANG_ = (function frontend$ui$notify_graph_persist_BANG_(){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist","graph/persist",846795802)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
});
frontend.ui.notify_graph_persist_error_BANG_ = (function frontend$ui$notify_graph_persist_error_BANG_(){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist-error","graph/persist-error",341856949)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
});
frontend.ui.rotating_arrow = rum.core.lazy_build(rum.core.build_defc,(function (collapsed_QMARK_){
return daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(collapsed_QMARK_)?"rotating-arrow collapsed":"rotating-arrow not-collapsed")], null))},[frontend.components.svg.caret_right()]);
}),null,"frontend.ui/rotating-arrow");
frontend.ui.foldable_title = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__110131){
var map__110132 = p__110131;
var map__110132__$1 = cljs.core.__destructure_map(map__110132);
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110132__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110132__$1,new cljs.core.Keyword(null,"header","header",119441134));
var title_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110132__$1,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110132__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var control_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","control?","frontend.ui/control?",1642964409));
return daiquiri.core.create_element("div",{'className':"content"},[(function (){var attrs110135 = (function (){var G__110142 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(control_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.reset_BANG_(control_QMARK_,false);
})], null);
if(cljs.core.truth_(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__110142,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"cursor"], 0));
} else {
return G__110142;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110135))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","flex-row","foldable-title"], null)], null),attrs110135], 0))):{'className':"flex-1 flex-row foldable-title"}),((cljs.core.map_QMARK_(attrs110135))?[(function (){var attrs110138 = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block-control.opacity-50.hover:opacity-100.mr-2","a.block-control.opacity-50.hover:opacity-100.mr-2",-1668360838),(function (){var G__110143 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-30)], null)], null);
if(cljs.core.not(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110143,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down);
} else {
return G__110143;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.deref(control_QMARK_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.deref(collapsed_QMARK_);
}
})())?"control-show cursor-pointer":"control-hide")], null),frontend.ui.rotating_arrow(cljs.core.deref(collapsed_QMARK_))], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110138))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs110138], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs110138))?[((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__110145 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__110145) : header.call(null,G__110145));
})()):daiquiri.interpreter.interpret(header))]:[daiquiri.interpreter.interpret(attrs110138),((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__110147 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__110147) : header.call(null,G__110147));
})()):daiquiri.interpreter.interpret(header))]));
})()]:[daiquiri.interpreter.interpret(attrs110135),(function (){var attrs110141 = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block-control.opacity-50.hover:opacity-100.mr-2","a.block-control.opacity-50.hover:opacity-100.mr-2",-1668360838),(function (){var G__110148 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-30)], null)], null);
if(cljs.core.not(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110148,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down);
} else {
return G__110148;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.deref(control_QMARK_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.deref(collapsed_QMARK_);
}
})())?"control-show cursor-pointer":"control-hide")], null),frontend.ui.rotating_arrow(cljs.core.deref(collapsed_QMARK_))], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110141))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs110141], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs110141))?[((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__110150 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__110150) : header.call(null,G__110150));
})()):daiquiri.interpreter.interpret(header))]:[daiquiri.interpreter.interpret(attrs110141),((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__110152 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__110152) : header.call(null,G__110152));
})()):daiquiri.interpreter.interpret(header))]));
})()]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","control?","frontend.ui/control?",1642964409))], null),"frontend.ui/foldable-title");
frontend.ui.foldable = rum.core.lazy_build(rum.core.build_defcs,(function (state,header,content,p__110153){
var map__110154 = p__110153;
var map__110154__$1 = cljs.core.__destructure_map(map__110154);
var title_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _default_collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword(null,"_default-collapsed?","_default-collapsed?",1256331234));
var _init_collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword(null,"_init-collapsed","_init-collapsed",282845909));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586));
var on_mouse_down__$1 = (function (e){
frontend.util.stop(e);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_QMARK_,cljs.core.not);

if(cljs.core.truth_(on_mouse_down)){
var G__110155 = cljs.core.deref(collapsed_QMARK_);
return (on_mouse_down.cljs$core$IFn$_invoke$arity$1 ? on_mouse_down.cljs$core$IFn$_invoke$arity$1(G__110155) : on_mouse_down.call(null,G__110155));
} else {
return null;
}
});
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-col",class$], null))},[frontend.ui.foldable_title(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down__$1,new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),title_trigger_QMARK_,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_], null)),daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return e.stopPropagation();
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(collapsed_QMARK_))?"hidden":"initial")], null))},[((cljs.core.fn_QMARK_(content))?((cljs.core.not(cljs.core.deref(collapsed_QMARK_)))?daiquiri.interpreter.interpret((content.cljs$core$IFn$_invoke$arity$0 ? content.cljs$core$IFn$_invoke$arity$0() : content.call(null))):null):daiquiri.interpreter.interpret(content))])]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db_mixins.query,rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var args_110305 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
if(new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823).cljs$core$IFn$_invoke$arity$1(cljs.core.last(args_110305)) === true){
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586)),true);
} else {
}

return state;
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var temp__5804__auto___110306 = new cljs.core.Keyword(null,"init-collapsed","init-collapsed",-220931385).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(temp__5804__auto___110306)){
var f_110307 = temp__5804__auto___110306;
var G__110156_110308 = new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586).cljs$core$IFn$_invoke$arity$1(state);
(f_110307.cljs$core$IFn$_invoke$arity$1 ? f_110307.cljs$core$IFn$_invoke$arity$1(G__110156_110308) : f_110307.call(null,G__110156_110308));
} else {
}

return state;
})], null)], null),"frontend.ui/foldable");
frontend.ui.admonition = rum.core.lazy_build(rum.core.build_defc,(function (type,content){
var type__$1 = cljs.core.name(type);
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var G__110158 = clojure.string.lower_case(type__$1);
switch (G__110158) {
case "note":
return frontend.components.svg.note;

break;
case "tip":
return frontend.components.svg.tip;

break;
case "important":
return frontend.components.svg.important;

break;
case "caution":
return frontend.components.svg.caution;

break;
case "warning":
return frontend.components.svg.warning;

break;
case "pinned":
return frontend.components.svg.pinned;

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var icon = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.admonitionblock.align-items","div.flex.flex-row.admonitionblock.align-items",-513234862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),type__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-4.admonition-icon.flex.flex-col.justify-center","div.pr-4.admonition-icon.flex.flex-col.justify-center",-1325303445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),clojure.string.capitalize(type__$1)], null),(icon.cljs$core$IFn$_invoke$arity$0 ? icon.cljs$core$IFn$_invoke$arity$0() : icon.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-4.text-lg","div.ml-4.text-lg",525424974),content], null)], null);
} else {
return null;
}
})());
}),null,"frontend.ui/admonition");
frontend.ui.catch_error = rum.core.lazy_build(rum.core.build_defcs,(function (p__110159,error_view,view){
var map__110160 = p__110159;
var map__110160__$1 = cljs.core.__destructure_map(map__110160);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110160__$1,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110160__$1,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248));
if((!((error == null)))){
return daiquiri.interpreter.interpret(error_view);
} else {
return daiquiri.interpreter.interpret(view);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),(function (state,error,_info){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),845], null)),error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008),error);
})], null)], null),"frontend.ui/catch-error");
frontend.ui.catch_error_and_notify = rum.core.lazy_build(rum.core.build_defcs,(function (p__110161,error_view,view){
var map__110162 = p__110161;
var map__110162__$1 = cljs.core.__destructure_map(map__110162);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110162__$1,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110162__$1,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248));
if((!((error == null)))){
return daiquiri.interpreter.interpret(error_view);
} else {
return daiquiri.interpreter.interpret(view);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),(function (state,error,_info){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),855], null)),error);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Error caught by UI!\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008),error);
})], null)], null),"frontend.ui/catch-error-and-notify");
/**
 * Well styled error message for blocks
 */
frontend.ui.block_error = rum.core.lazy_build(rum.core.build_defc,(function (title,p__110166){
var map__110167 = p__110166;
var map__110167__$1 = cljs.core.__destructure_map(map__110167);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110167__$1,new cljs.core.Keyword(null,"content","content",15833224));
var section_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110167__$1,new cljs.core.Keyword(null,"section-attrs","section-attrs",1373816150));
var attrs110163 = section_attrs;
return daiquiri.core.create_element("section",((cljs.core.map_QMARK_(attrs110163))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","mt-1","p-1","cursor-pointer","block-content-fallback-ui"], null)], null),attrs110163], 0))):{'className':"border mt-1 p-1 cursor-pointer block-content-fallback-ui"}),((cljs.core.map_QMARK_(attrs110163))?[daiquiri.core.create_element("div",{'className':"flex justify-between items-center px-1"},[(function (){var attrs110168 = title;
return daiquiri.core.create_element("h5",((cljs.core.map_QMARK_(attrs110168))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-error","pb-1"], null)], null),attrs110168], 0))):{'className':"text-error pb-1"}),((cljs.core.map_QMARK_(attrs110168))?null:[daiquiri.interpreter.interpret(attrs110168)]));
})(),daiquiri.core.create_element("a",{'href':"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",'target':"_blank",'className':"text-xs opacity-50 hover:opacity-80"},["report issue"])]),(cljs.core.truth_(content)?(function (){var attrs110164 = content;
return daiquiri.core.create_element("pre",((cljs.core.map_QMARK_(attrs110164))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m-0","text-sm"], null)], null),attrs110164], 0))):{'className':"m-0 text-sm"}),((cljs.core.map_QMARK_(attrs110164))?null:[daiquiri.interpreter.interpret(attrs110164)]));
})():null)]:[daiquiri.interpreter.interpret(attrs110163),daiquiri.core.create_element("div",{'className':"flex justify-between items-center px-1"},[(function (){var attrs110171 = title;
return daiquiri.core.create_element("h5",((cljs.core.map_QMARK_(attrs110171))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-error","pb-1"], null)], null),attrs110171], 0))):{'className':"text-error pb-1"}),((cljs.core.map_QMARK_(attrs110171))?null:[daiquiri.interpreter.interpret(attrs110171)]));
})(),daiquiri.core.create_element("a",{'href':"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",'target':"_blank",'className':"text-xs opacity-50 hover:opacity-80"},["report issue"])]),(cljs.core.truth_(content)?(function (){var attrs110165 = content;
return daiquiri.core.create_element("pre",((cljs.core.map_QMARK_(attrs110165))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m-0","text-sm"], null)], null),attrs110165], 0))):{'className':"m-0 text-sm"}),((cljs.core.map_QMARK_(attrs110165))?null:[daiquiri.interpreter.interpret(attrs110165)]));
})():null)]));
}),null,"frontend.ui/block-error");
/**
 * Well styled error message for higher level components. Currently same as
 *   block-error but this could change
 */
frontend.ui.component_error = frontend.ui.block_error;
frontend.ui.select = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__110310 = null;
var G__110310__2 = (function (options,on_change){
return daiquiri.interpreter.interpret((frontend.ui.select.cljs$core$IFn$_invoke$arity$3 ? frontend.ui.select.cljs$core$IFn$_invoke$arity$3(options,on_change,null) : frontend.ui.select.call(null,options,on_change,null)));
});
var G__110310__3 = (function (options,on_change,class$){
return daiquiri.core.create_element("select",{'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(e,value) : on_change.call(null,e,value));
})),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-6","block","text-base","leading-6","border-gray-300","focus:outline-none","focus:shadow-outline-blue","focus:border-blue-300","sm:text-sm","sm:leading-5",(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "form-select";
}
})()], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__110177(s__110178){
return (new cljs.core.LazySeq(null,(function (){
var s__110178__$1 = s__110178;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110178__$1);
if(temp__5804__auto__){
var s__110178__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110178__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110178__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110180 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110179 = (0);
while(true){
if((i__110179 < size__5519__auto__)){
var map__110181 = cljs.core._nth(c__5518__auto__,i__110179);
var map__110181__$1 = cljs.core.__destructure_map(map__110181);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110181__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110181__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110181__$1,new cljs.core.Keyword(null,"selected","selected",574897764),false);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110181__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
cljs.core.chunk_append(b__110180,(function (){var attrs110176 = (function (){var G__110182 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})()], null);
var G__110182__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110182,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled):G__110182);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110182__$1,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__110182__$1;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs110176))?daiquiri.interpreter.element_attributes(attrs110176):null),((cljs.core.map_QMARK_(attrs110176))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs110176),daiquiri.interpreter.interpret(label)]));
})());

var G__110311 = (i__110179 + (1));
i__110179 = G__110311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110180),frontend$ui$iter__110177(cljs.core.chunk_rest(s__110178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110180),null);
}
} else {
var map__110183 = cljs.core.first(s__110178__$2);
var map__110183__$1 = cljs.core.__destructure_map(map__110183);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110183__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110183__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110183__$1,new cljs.core.Keyword(null,"selected","selected",574897764),false);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110183__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
return cljs.core.cons((function (){var attrs110176 = (function (){var G__110184 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})()], null);
var G__110184__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110184,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled):G__110184);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110184__$1,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__110184__$1;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs110176))?daiquiri.interpreter.element_attributes(attrs110176):null),((cljs.core.map_QMARK_(attrs110176))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs110176),daiquiri.interpreter.interpret(label)]));
})(),frontend$ui$iter__110177(cljs.core.rest(s__110178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(options);
})())]);
});
G__110310 = function(options,on_change,class$){
switch(arguments.length){
case 2:
return G__110310__2.call(this,options,on_change);
case 3:
return G__110310__3.call(this,options,on_change,class$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110310.cljs$core$IFn$_invoke$arity$2 = G__110310__2;
G__110310.cljs$core$IFn$_invoke$arity$3 = G__110310__3;
return G__110310;
})()
,null,"frontend.ui/select");
frontend.ui.radio_list = rum.core.lazy_build(rum.core.build_defc,(function (options,on_change,class$){
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__radio-list",class$], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__110186(s__110187){
return (new cljs.core.LazySeq(null,(function (){
var s__110187__$1 = s__110187;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110187__$1);
if(temp__5804__auto__){
var s__110187__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110187__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110187__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110189 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110188 = (0);
while(true){
if((i__110188 < size__5519__auto__)){
var map__110190 = cljs.core._nth(c__5518__auto__,i__110188);
var map__110190__$1 = cljs.core.__destructure_map(map__110190);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110190__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110190__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110190__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__110189,daiquiri.core.create_element("label",{'key':["radio-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"radio",'onChange':rum.core.mark_sync_update(((function (i__110188,map__110190,map__110190__$1,label,value,selected,c__5518__auto__,size__5519__auto__,b__110189,s__110187__$2,temp__5804__auto__){
return (function (p1__110185_SHARP_){
var G__110191 = frontend.util.evalue(p1__110185_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__110191) : on_change.call(null,G__110191));
});})(i__110188,map__110190,map__110190__$1,label,value,selected,c__5518__auto__,size__5519__auto__,b__110189,s__110187__$2,temp__5804__auto__))
),'checked':selected,'className':"form-radio"},[]),daiquiri.interpreter.interpret(label)]));

var G__110312 = (i__110188 + (1));
i__110188 = G__110312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110189),frontend$ui$iter__110186(cljs.core.chunk_rest(s__110187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110189),null);
}
} else {
var map__110192 = cljs.core.first(s__110187__$2);
var map__110192__$1 = cljs.core.__destructure_map(map__110192);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110192__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110192__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110192__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons(daiquiri.core.create_element("label",{'key':["radio-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"radio",'onChange':rum.core.mark_sync_update(((function (map__110192,map__110192__$1,label,value,selected,s__110187__$2,temp__5804__auto__){
return (function (p1__110185_SHARP_){
var G__110193 = frontend.util.evalue(p1__110185_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__110193) : on_change.call(null,G__110193));
});})(map__110192,map__110192__$1,label,value,selected,s__110187__$2,temp__5804__auto__))
),'checked':selected,'className':"form-radio"},[]),daiquiri.interpreter.interpret(label)]),frontend$ui$iter__110186(cljs.core.rest(s__110187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(options);
})())]);
}),null,"frontend.ui/radio-list");
frontend.ui.checkbox_list = rum.core.lazy_build(rum.core.build_defc,(function (options,on_change,class$){
var checked_vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764),options)));
var on_item_change = (function (e){
var target = e.target;
var checked_QMARK_ = target.checked;
var value = target.value;
var G__110194 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(checked_vals,value):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(checked_vals,value)));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__110194) : on_change.call(null,G__110194));
});
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__checkbox-list",class$], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__110195(s__110196){
return (new cljs.core.LazySeq(null,(function (){
var s__110196__$1 = s__110196;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110196__$1);
if(temp__5804__auto__){
var s__110196__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110196__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110196__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110198 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110197 = (0);
while(true){
if((i__110197 < size__5519__auto__)){
var map__110199 = cljs.core._nth(c__5518__auto__,i__110197);
var map__110199__$1 = cljs.core.__destructure_map(map__110199);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110199__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110199__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110199__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__110198,daiquiri.core.create_element("label",{'key':["check-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"checkbox",'onChange':rum.core.mark_sync_update(on_item_change),'checked':selected,'className':"form-checkbox"},[]),daiquiri.interpreter.interpret(label)]));

var G__110313 = (i__110197 + (1));
i__110197 = G__110313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110198),frontend$ui$iter__110195(cljs.core.chunk_rest(s__110196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110198),null);
}
} else {
var map__110200 = cljs.core.first(s__110196__$2);
var map__110200__$1 = cljs.core.__destructure_map(map__110200);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110200__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110200__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110200__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons(daiquiri.core.create_element("label",{'key':["check-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"checkbox",'onChange':rum.core.mark_sync_update(on_item_change),'checked':selected,'className':"form-checkbox"},[]),daiquiri.interpreter.interpret(label)]),frontend$ui$iter__110195(cljs.core.rest(s__110196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(options);
})())]);
}),null,"frontend.ui/checkbox-list");
frontend.ui.tippy = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__110201,child){
var map__110202 = p__110201;
var map__110202__$1 = cljs.core.__destructure_map(map__110202);
var opts = map__110202__$1;
var fixed_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110202__$1,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110202__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in_editor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110202__$1,new cljs.core.Keyword(null,"in-editor?","in-editor?",323048069));
var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110202__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var _STAR_mounted_QMARK_ = new cljs.core.Keyword("frontend.ui","mounted?","frontend.ui/mounted?",-515662152).cljs$core$IFn$_invoke$arity$1(state);
var manual = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,null);
var edit_id = cljs.core.ffirst(frontend.state.sub(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417)));
var editing_node = (cljs.core.truth_(edit_id)?goog.dom.getElement(edit_id):null);
var editing_QMARK_ = (!((editing_node == null)));
var scrolling_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943));
var open_QMARK___$1 = ((manual)?open_QMARK_:cljs.core.deref(_STAR_mounted_QMARK_));
var disabled_QMARK_ = cljs.core.boolean$((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = in_editor_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.not(frontend.util.rec_get_tippy_container(editing_node));
if(and__5041__auto____$1){
var or__5043__auto__ = editing_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return scrolling_QMARK_;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(frontend.state.enable_tooltip_QMARK_());
}
})());
return daiquiri.interpreter.interpret((function (){var G__110206 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"unmountHTMLWhenHide","unmountHTMLWhenHide",234758660),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"onShow","onShow",-897525328),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"onHide","onHide",-394246948),new cljs.core.Keyword(null,"delay","delay",-574225219)],[((disabled_QMARK_)?false:open_QMARK___$1),true,true,disabled_QMARK_,"customized",(function (){
return cljs.core.reset_BANG_(_STAR_mounted_QMARK_,true);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flip","flip",2033871302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),cljs.core.not(fixed_position_QMARK_)], null),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.Keyword(null,"preventOverflow","preventOverflow",276572465),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null),true,((manual)?"manual":"mouseenter focus"),(function (){
return cljs.core.reset_BANG_(_STAR_mounted_QMARK_,false);
}),(600)]),opts], 0)),new cljs.core.Keyword(null,"html","html",-998796897),(function (){var or__5043__auto__ = (cljs.core.truth_(open_QMARK___$1)?(function (){try{if(cljs.core.truth_(html)){
if(cljs.core.fn_QMARK_(html)){
return (html.cljs$core$IFn$_invoke$arity$0 ? html.cljs$core$IFn$_invoke$arity$0() : html.call(null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-2.py-1","div.px-2.py-1",220629592),html], null);
}
} else {
return null;
}
}catch (e110208){var e = e110208;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),989], null)),e);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}})():null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"tippy"], null),""], null);
}
})());
var G__110207 = React.createElement(React.Fragment,{'key':"tippy-children"},daiquiri.interpreter.interpret(child));
return (frontend.ui.Tippy.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.Tippy.cljs$core$IFn$_invoke$arity$2(G__110206,G__110207) : frontend.ui.Tippy.call(null,G__110206,G__110207));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","mounted?","frontend.ui/mounted?",-515662152))], null),"frontend.ui/tippy");
frontend.ui.slider = rum.core.lazy_build(rum.core.build_defcs,(function (state,_default_value,p__110211){
var map__110212 = p__110211;
var map__110212__$1 = cljs.core.__destructure_map(map__110212);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110212__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110212__$1,new cljs.core.Keyword(null,"max","max",61366548));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110212__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var _STAR_value = new cljs.core.Keyword("frontend.ui","value","frontend.ui/value",-1486153895).cljs$core$IFn$_invoke$arity$1(state);
var value = rum.core.react(_STAR_value);
var value_SINGLEQUOTE_ = (value | (0));
if(cljs.core.int_QMARK_(value_SINGLEQUOTE_)){
} else {
throw (new Error("Assert failed: (int? value')"));
}

return daiquiri.core.create_element("input",{'type':"range",'value':value_SINGLEQUOTE_,'min':min,'max':max,'style':{'width':"100%"},'onChange':rum.core.mark_sync_update((function (p1__110209_SHARP_){
var value__$1 = frontend.util.evalue(p1__110209_SHARP_);
return cljs.core.reset_BANG_(_STAR_value,value__$1);
})),'onMouseUp':(function (p1__110210_SHARP_){
var value__$1 = frontend.util.evalue(p1__110210_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value__$1) : on_change.call(null,value__$1));
}),'className':"cursor-pointer"},[]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.ui","value","frontend.ui/value",-1486153895),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))));
})], null)], null),"frontend.ui/slider");
frontend.ui.tweet_embed = rum.core.lazy_build(rum.core.build_defcs,(function (state,id){
var _STAR_loading_QMARK_ = new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",null,[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(_STAR_loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.svg.loading," ... loading"], null)], null):null),(function (){var G__110213 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"contents",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)),"dark"))?"dark":null)], null),new cljs.core.Keyword(null,"on-tweet-load-success","on-tweet-load-success",1698437749),(function (){
return cljs.core.reset_BANG_(_STAR_loading_QMARK_,false);
})], null);
return (frontend.ui.ReactTweetEmbed.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.ReactTweetEmbed.cljs$core$IFn$_invoke$arity$1(G__110213) : frontend.ui.ReactTweetEmbed.call(null,G__110213));
})()], null))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"loading?","loading?",1905707049))], null),"frontend.ui/tweet-embed");
frontend.ui.icon = logseq.shui.core.icon;
frontend.ui.button_inner = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__110314__delegate = function (text,p__110214){
var map__110215 = p__110214;
var map__110215__$1 = cljs.core.__destructure_map(map__110215);
var opts = map__110215__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var button_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"button-props","button-props",-392655929));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var icon_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"icon-props","icon-props",-895221875));
var small_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110215__$1,new cljs.core.Keyword(null,"small?","small?",95242445),false);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var intent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110215__$1,new cljs.core.Keyword(null,"intent","intent",-390846953));
var button_props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"small?","small?",95242445),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"button-props","button-props",-392655929)], 0)),button_props], 0));
var props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.Keyword(null,"gray","gray",1013268388)))?new cljs.core.Keyword(null,"ghost","ghost",-1531157576):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(background,"gray"))?new cljs.core.Keyword(null,"secondary","secondary",-669381460):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(background,"red"))?new cljs.core.Keyword(null,"destructive","destructive",-1587723243):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(intent,"link"))?new cljs.core.Keyword(null,"ghost","ghost",-1531157576):(function (){var or__5043__auto__ = variant;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()
)))),new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(small_QMARK_)?new cljs.core.Keyword(null,"xs","xs",649443341):(function (){var or__5043__auto__ = size;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"sm","sm",-1402575065);
}
})()),new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"class","class",-2030961996),((((typeof background === 'string') && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["gray",null,"red",null], null), null),background))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," primary-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(background)].join(''):class$),new cljs.core.Keyword(null,"muted","muted",1275109029),disabled_QMARK_], null),button_props__$1], 0));
var icon__$1 = (cljs.core.truth_(icon)?logseq.shui.ui.tabler_icon(icon,icon_props):null);
var href_QMARK_ = (!(clojure.string.blank_QMARK_(href)));
var text__$1 = ((href_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),text], null):text
);
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon__$1,text__$1], null);
return daiquiri.interpreter.interpret((logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(props,children) : logseq.shui.ui.button.call(null,props,children)));
};
var G__110314 = function (text,var_args){
var p__110214 = null;
if (arguments.length > 1) {
var G__110315__i = 0, G__110315__a = new Array(arguments.length -  1);
while (G__110315__i < G__110315__a.length) {G__110315__a[G__110315__i] = arguments[G__110315__i + 1]; ++G__110315__i;}
  p__110214 = new cljs.core.IndexedSeq(G__110315__a,0,null);
} 
return G__110314__delegate.call(this,text,p__110214);};
G__110314.cljs$lang$maxFixedArity = 1;
G__110314.cljs$lang$applyTo = (function (arglist__110316){
var text = cljs.core.first(arglist__110316);
var p__110214 = cljs.core.rest(arglist__110316);
return G__110314__delegate(text,p__110214);
});
G__110314.cljs$core$IFn$_invoke$arity$variadic = G__110314__delegate;
return G__110314;
})()
,null,"frontend.ui/button-inner");
frontend.ui.button = (function frontend$ui$button(var_args){
var args__5772__auto__ = [];
var len__5766__auto___110317 = arguments.length;
var i__5767__auto___110318 = (0);
while(true){
if((i__5767__auto___110318 < len__5766__auto___110317)){
args__5772__auto__.push((arguments[i__5767__auto___110318]));

var G__110319 = (i__5767__auto___110318 + (1));
i__5767__auto___110318 = G__110319;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__110218){
var map__110219 = p__110218;
var map__110219__$1 = cljs.core.__destructure_map(map__110219);
var opts = map__110219__$1;
if(cljs.core.map_QMARK_(text)){
return frontend.ui.button_inner(null,text);
} else {
return frontend.ui.button_inner(text,opts);
}
}));

(frontend.ui.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.button.cljs$lang$applyTo = (function (seq110216){
var G__110217 = cljs.core.first(seq110216);
var seq110216__$1 = cljs.core.next(seq110216);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__110217,seq110216__$1);
}));

frontend.ui.point = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__110320 = null;
var G__110320__0 = (function (){
return daiquiri.interpreter.interpret((frontend.ui.point.cljs$core$IFn$_invoke$arity$3 ? frontend.ui.point.cljs$core$IFn$_invoke$arity$3("bg-red-600",(5),null) : frontend.ui.point.call(null,"bg-red-600",(5),null)));
});
var G__110320__3 = (function (klass,size,p__110221){
var map__110222 = p__110221;
var map__110222__$1 = cljs.core.__destructure_map(map__110222);
var opts = map__110222__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110222__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attrs110220 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[frontend.util.hiccup__GT_class(klass)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null),style], 0))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996)], 0))], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110220))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__point","overflow-hidden","rounded-full","inline-block"], null)], null),attrs110220], 0))):{'className':"ui__point overflow-hidden rounded-full inline-block"}),((cljs.core.map_QMARK_(attrs110220))?null:[daiquiri.interpreter.interpret(attrs110220)]));
});
G__110320 = function(klass,size,p__110221){
switch(arguments.length){
case 0:
return G__110320__0.call(this);
case 3:
return G__110320__3.call(this,klass,size,p__110221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110320.cljs$core$IFn$_invoke$arity$0 = G__110320__0;
G__110320.cljs$core$IFn$_invoke$arity$3 = G__110320__3;
return G__110320;
})()
,null,"frontend.ui/point");
frontend.ui.type_icon = rum.core.lazy_build(rum.core.build_defc,(function (p__110223){
var map__110224 = p__110223;
var map__110224__$1 = cljs.core.__destructure_map(map__110224);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110224__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110224__$1,new cljs.core.Keyword(null,"title","title",636505583));
var extension_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110224__$1,new cljs.core.Keyword(null,"extension?","extension?",-1574402873));
return daiquiri.core.create_element("div",{'title':title,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type-icon",class$], null))},[daiquiri.interpreter.interpret(frontend.ui.icon(name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),extension_QMARK_], null)))]);
}),null,"frontend.ui/type-icon");
frontend.ui.with_shortcut = rum.core.lazy_build(rum.core.build_defc,(function (shortcut_key,position,content){
var tooltip_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
if(cljs.core.truth_(tooltip_QMARK_)){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-medium","div.text-sm.font-medium",-120265550),frontend.ui.keyboard_shortcut_from_config(shortcut_key)], null),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"theme","theme",-1247880880),"monospace",new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),content);
} else {
return daiquiri.interpreter.interpret(content);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (key,pos){
return ["shortcut-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos)].join('');
})], null)], null),"frontend.ui/with-shortcut");
frontend.ui.progress_bar = rum.core.lazy_build(rum.core.build_defc,(function (width){
if(cljs.core.truth_(cljs.core.integer_QMARK_)){
} else {
throw (new Error("Assert failed: integer?"));
}

if(cljs.core.truth_(width)){
} else {
throw (new Error("Assert failed: width"));
}

return daiquiri.core.create_element("div",{'className':"w-full rounded-full h-2 5 animate-pulse bg-gray-06-alpha"},[daiquiri.core.create_element("div",{'style':{'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"%"].join('')},'transition':"width 1s",'className':"bg-gray-09-alpha h-2 5 rounded-full"},[])]);
}),null,"frontend.ui/progress-bar");
frontend.ui.progress_bar_with_label = rum.core.lazy_build(rum.core.build_defc,(function (width,label_left,label_right){
if(cljs.core.truth_(cljs.core.integer_QMARK_)){
} else {
throw (new Error("Assert failed: integer?"));
}

if(cljs.core.truth_(width)){
} else {
throw (new Error("Assert failed: width"));
}

return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex justify-between mb-1"},[(function (){var attrs110225 = label_left;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110225))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-base"], null)], null),attrs110225], 0))):{'className':"text-base"}),((cljs.core.map_QMARK_(attrs110225))?null:[daiquiri.interpreter.interpret(attrs110225)]));
})(),(function (){var attrs110226 = label_right;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110226))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","font-medium"], null)], null),attrs110226], 0))):{'className':"text-sm font-medium"}),((cljs.core.map_QMARK_(attrs110226))?null:[daiquiri.interpreter.interpret(attrs110226)]));
})()]),frontend.ui.progress_bar(width)]);
}),null,"frontend.ui/progress-bar-with-label");
frontend.ui.lazy_loading_placeholder = rum.core.lazy_build(rum.core.build_defc,(function (height){
return daiquiri.core.create_element("div",{'style':{'height':height},'className':"shadow rounded-md p-4 w-full mx-auto mb-5 fade-in"},[daiquiri.core.create_element("div",{'className':"animate-pulse flex space-x-4"},[daiquiri.core.create_element("div",{'className':"flex-1 space-y-3 py-1"},[daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded"},null),daiquiri.core.create_element("div",{'className':"space-y-3"},[daiquiri.core.create_element("div",{'className':"grid grid-cols-3 gap-4"},[daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded col-span-2"},null),daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded col-span-1"},null)]),daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded"},null)])])])]);
}),null,"frontend.ui/lazy-loading-placeholder");
frontend.ui.lazy_visible_inner = rum.core.lazy_build(rum.core.build_defc,(function (visible_QMARK_,content_fn,ref){
var vec__110230 = frontend.rum.use_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();
var set_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110230,(0),null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110230,(1),null);
var placeholder_height = (function (){var or__5043__auto__ = (cljs.core.truth_(rect)?rect.height:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (88);
}
})();
return daiquiri.core.create_element("div",{'ref':ref,'className':"lazy-visibility"},[daiquiri.core.create_element("div",{'ref':set_ref},[(cljs.core.truth_(visible_QMARK_)?((cljs.core.fn_QMARK_(content_fn))?daiquiri.core.create_element("div",{'ref':(function (p1__110229_SHARP_){
var temp__5804__auto__ = (function (){var and__5041__auto__ = p1__110229_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return p1__110229_SHARP_.classList;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var cls = temp__5804__auto__;
return cls.add("fade-enter-active");
} else {
return null;
}
}),'className':"fade-enter"},[daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null)))]):null):frontend.ui.lazy_loading_placeholder(placeholder_height))])]);
}),null,"frontend.ui/lazy-visible-inner");
frontend.ui.lazy_visible = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__110321 = null;
var G__110321__1 = (function (content_fn){
return daiquiri.interpreter.interpret((frontend.ui.lazy_visible.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.lazy_visible.cljs$core$IFn$_invoke$arity$2(content_fn,null) : frontend.ui.lazy_visible.call(null,content_fn,null)));
});
var G__110321__2 = (function (content_fn,p__110233){
var map__110234 = p__110233;
var map__110234__$1 = cljs.core.__destructure_map(map__110234);
var trigger_once_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110234__$1,new cljs.core.Keyword(null,"trigger-once?","trigger-once?",1582103477),true);
var _debug_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110234__$1,new cljs.core.Keyword(null,"_debug-id","_debug-id",1776601068));
var vec__110235 = rum.core.use_state(false);
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110235,(0),null);
var set_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110235,(1),null);
var root_margin = (100);
var inViewState = (function (){var G__110238 = ({"rootMargin": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_margin),"px"].join(''), "triggerOnce": trigger_once_QMARK_, "onChange": (function (in_view_QMARK_,entry){
var self_top = entry.boundingClientRect.top;
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core.not(visible_QMARK_);
if(and__5041__auto__){
return in_view_QMARK_;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = visible_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(in_view_QMARK_)) && ((self_top > root_margin)));
} else {
return and__5041__auto__;
}
}
})())){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(in_view_QMARK_) : set_visible_BANG_.call(null,in_view_QMARK_));
} else {
return null;
}
})});
return (frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1(G__110238) : frontend.ui.useInView.call(null,G__110238));
})();
var ref = inViewState.ref;
return frontend.ui.lazy_visible_inner(visible_QMARK_,content_fn,ref);
});
G__110321 = function(content_fn,p__110233){
switch(arguments.length){
case 1:
return G__110321__1.call(this,content_fn);
case 2:
return G__110321__2.call(this,content_fn,p__110233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110321.cljs$core$IFn$_invoke$arity$1 = G__110321__1;
G__110321.cljs$core$IFn$_invoke$arity$2 = G__110321__2;
return G__110321;
})()
,null,"frontend.ui/lazy-visible");
frontend.ui.portal = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__110322 = null;
var G__110322__1 = (function (children){
return daiquiri.interpreter.interpret((function (){var G__110242 = children;
var G__110243 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attach-to","attach-to",-350412458),(function (){
return document.body;
}),new cljs.core.Keyword(null,"prepend?","prepend?",948801066),false], null);
return (frontend.ui.portal.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.portal.cljs$core$IFn$_invoke$arity$2(G__110242,G__110243) : frontend.ui.portal.call(null,G__110242,G__110243));
})());
});
var G__110322__2 = (function (children,p__110239){
var map__110244 = p__110239;
var map__110244__$1 = cljs.core.__destructure_map(map__110244);
var attach_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110244__$1,new cljs.core.Keyword(null,"attach-to","attach-to",-350412458));
var prepend_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110244__$1,new cljs.core.Keyword(null,"prepend?","prepend?",948801066));
var vec__110245 = rum.core.use_state(null);
var portal_anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110245,(0),null);
var set_portal_anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110245,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var div = document.createElement("div");
var attached = (function (){var or__5043__auto__ = ((cljs.core.fn_QMARK_(attach_to))?(attach_to.cljs$core$IFn$_invoke$arity$0 ? attach_to.cljs$core$IFn$_invoke$arity$0() : attach_to.call(null)):attach_to);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return document.body;
}
})();
div.setAttribute("data-logseq-portal",cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))));

if(cljs.core.truth_(prepend_QMARK_)){
attached.prepend(div);
} else {
attached.append(div);
}

(set_portal_anchor.cljs$core$IFn$_invoke$arity$1 ? set_portal_anchor.cljs$core$IFn$_invoke$arity$1(div) : set_portal_anchor.call(null,div));

return (function (){
return div.remove();
});
}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(portal_anchor)){
return rum.core.portal(React.createElement(React.Fragment,null,daiquiri.interpreter.interpret(children)),portal_anchor);
} else {
return null;
}
});
G__110322 = function(children,p__110239){
switch(arguments.length){
case 1:
return G__110322__1.call(this,children);
case 2:
return G__110322__2.call(this,children,p__110239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110322.cljs$core$IFn$_invoke$arity$1 = G__110322__1;
G__110322.cljs$core$IFn$_invoke$arity$2 = G__110322__2;
return G__110322;
})()
,null,"frontend.ui/portal");
frontend.ui.menu_heading = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__110323 = null;
var G__110323__3 = (function (add_heading_fn,auto_heading_fn,rm_heading_fn){
return daiquiri.interpreter.interpret((frontend.ui.menu_heading.cljs$core$IFn$_invoke$arity$4 ? frontend.ui.menu_heading.cljs$core$IFn$_invoke$arity$4(null,add_heading_fn,auto_heading_fn,rm_heading_fn) : frontend.ui.menu_heading.call(null,null,add_heading_fn,auto_heading_fn,rm_heading_fn)));
});
var G__110323__4 = (function (heading,add_heading_fn,auto_heading_fn,rm_heading_fn){
return daiquiri.core.create_element("div",{'className':"flex flex-row justify-between pb-2 pt-1 px-2 items-center"},[daiquiri.core.create_element("div",{'className':"flex flex-row justify-between flex-1 px-1"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$ui$iter__110248(s__110249){
return (new cljs.core.LazySeq(null,(function (){
var s__110249__$1 = s__110249;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110249__$1);
if(temp__5804__auto__){
var s__110249__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110249__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110249__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110251 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110250 = (0);
while(true){
if((i__110250 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__110250);
cljs.core.chunk_append(b__110251,rum.core.with_key(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(((!((heading == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading,i))),new cljs.core.Keyword(null,"icon","icon",1679606541),["h-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"heading","heading",-1312171873),i], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"to-heading-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__110250,i,c__5518__auto__,size__5519__auto__,b__110251,s__110249__$2,temp__5804__auto__){
return (function (){
return (add_heading_fn.cljs$core$IFn$_invoke$arity$1 ? add_heading_fn.cljs$core$IFn$_invoke$arity$1(i) : add_heading_fn.call(null,i));
});})(i__110250,i,c__5518__auto__,size__5519__auto__,b__110251,s__110249__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true], 0)),["key-h-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__110324 = (i__110250 + (1));
i__110250 = G__110324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110251),frontend$ui$iter__110248(cljs.core.chunk_rest(s__110249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110251),null);
}
} else {
var i = cljs.core.first(s__110249__$2);
return cljs.core.cons(rum.core.with_key(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(((!((heading == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading,i))),new cljs.core.Keyword(null,"icon","icon",1679606541),["h-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"heading","heading",-1312171873),i], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"to-heading-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__110249__$2,temp__5804__auto__){
return (function (){
return (add_heading_fn.cljs$core$IFn$_invoke$arity$1 ? add_heading_fn.cljs$core$IFn$_invoke$arity$1(i) : add_heading_fn.call(null,i));
});})(i,s__110249__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true], 0)),["key-h-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),frontend$ui$iter__110248(cljs.core.rest(s__110249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)));
})()),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),"h-auto",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(((!((heading == null)))) && (heading === true)),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null),new cljs.core.Keyword(null,"class","class",-2030961996),"to-heading-button",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-heading","auto-heading",-1133447719)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),auto_heading_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true], 0))),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),"heading-off",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(((!((heading == null)))) && (cljs.core.not(heading))),new cljs.core.Keyword(null,"icon-props","icon-props",-895221875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null),new cljs.core.Keyword(null,"class","class",-2030961996),"to-heading-button",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-heading","remove-heading",-698258619)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rm_heading_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true], 0)))])]);
});
G__110323 = function(heading,add_heading_fn,auto_heading_fn,rm_heading_fn){
switch(arguments.length){
case 3:
return G__110323__3.call(this,heading,add_heading_fn,auto_heading_fn);
case 4:
return G__110323__4.call(this,heading,add_heading_fn,auto_heading_fn,rm_heading_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110323.cljs$core$IFn$_invoke$arity$3 = G__110323__3;
G__110323.cljs$core$IFn$_invoke$arity$4 = G__110323__4;
return G__110323;
})()
,null,"frontend.ui/menu-heading");

//# sourceMappingURL=frontend.ui.js.map
