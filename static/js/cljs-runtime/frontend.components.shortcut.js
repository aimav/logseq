goog.provide('frontend.components.shortcut');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut.categories !== 'undefined')){
} else {
frontend.components.shortcut.categories = (new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("shortcut.category","basics","shortcut.category/basics",-1775874746),new cljs.core.Keyword("shortcut.category","navigating","shortcut.category/navigating",-2030317791),new cljs.core.Keyword("shortcut.category","block-editing","shortcut.category/block-editing",-1150211354),new cljs.core.Keyword("shortcut.category","block-command-editing","shortcut.category/block-command-editing",1958480544),new cljs.core.Keyword("shortcut.category","block-selection","shortcut.category/block-selection",1439375136),new cljs.core.Keyword("shortcut.category","formatting","shortcut.category/formatting",-723875074),new cljs.core.Keyword("shortcut.category","toggle","shortcut.category/toggle",677164372),new cljs.core.Keyword("shortcut.category","whiteboard","shortcut.category/whiteboard",855366858),new cljs.core.Keyword("shortcut.category","plugins","shortcut.category/plugins",-1801186145),new cljs.core.Keyword("shortcut.category","others","shortcut.category/others",1492019197)],null));
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut._STAR_refresh_sentry !== 'undefined')){
} else {
frontend.components.shortcut._STAR_refresh_sentry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.components.shortcut.refresh_shortcuts_list_BANG_ = (function frontend$components$shortcut$refresh_shortcuts_list_BANG_(){
return cljs.core.reset_BANG_(frontend.components.shortcut._STAR_refresh_sentry,(cljs.core.deref(frontend.components.shortcut._STAR_refresh_sentry) + (1)));
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut._STAR_global_listener_setup_QMARK_ !== 'undefined')){
} else {
frontend.components.shortcut._STAR_global_listener_setup_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shortcut !== 'undefined') && (typeof frontend.components.shortcut._STAR_customize_modal_life_sentry !== 'undefined')){
} else {
frontend.components.shortcut._STAR_customize_modal_life_sentry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.components.shortcut.to_vector = (function frontend$components$shortcut$to_vector(v){
if((v == null)){
return null;
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.vec(v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}
});
frontend.components.shortcut.keyboard_filter_record_inner = rum.core.lazy_build(rum.core.build_defc,(function (keystroke,set_keystroke_BANG_,close_fn){
var keypressed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",keystroke);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var key_handler = (new goog.events.KeyHandler(document));
if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto___117126 = "[shortcuts] unlisten*";
console.time(k__62654__auto___117126);

var res__62655__auto___117127 = frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true);
console.timeEnd(k__62654__auto___117126);

} else {
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}

goog.events.listen(key_handler,"key",(function (e){
e.preventDefault();

var G__116766 = (function (p1__116765_SHARP_){
return frontend.util.trim_safe([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__116765_SHARP_),frontend.modules.shortcut.core.keyname(e)].join(''));
});
return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(G__116766) : set_keystroke_BANG_.call(null,G__116766));
}));

return (function (){
if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto___117128 = "[shortcuts] listen*";
console.time(k__62654__auto___117128);

var res__62655__auto___117129 = frontend.modules.shortcut.core.listen_all_BANG_();
console.timeEnd(k__62654__auto___117128);

} else {
frontend.modules.shortcut.core.listen_all_BANG_();
}

return key_handler.dispose();
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'className':"keyboard-filter-record"},[daiquiri.core.create_element("h2",null,[(function (){var attrs116768 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","keystroke-filter","keymap/keystroke-filter",-601559587)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs116768))?daiquiri.interpreter.element_attributes(attrs116768):null),((cljs.core.map_QMARK_(attrs116768))?null:[daiquiri.interpreter.interpret(attrs116768)]));
})(),(function (){var attrs116769 = ((keypressed_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));
})], null),frontend.ui.icon("zoom-reset",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null))], null):null);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116769))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","space-x-2"], null)], null),attrs116769], 0))):{'className':"flex space-x-2"}),((cljs.core.map_QMARK_(attrs116769))?[daiquiri.core.create_element("a",{'onClick':(function (){
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)))])]:[daiquiri.interpreter.interpret(attrs116769),daiquiri.core.create_element("a",{'onClick':(function (){
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)))])]));
})()]),(function (){var attrs116767 = (((!(keypressed_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","keystroke-record-desc","keymap/keystroke-record-desc",1257024427)], 0))], null):((clojure.string.blank_QMARK_(keystroke))?null:frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keystroke], null))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116767))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wrap","p-2"], null)], null),attrs116767], 0))):{'className':"wrap p-2"}),((cljs.core.map_QMARK_(attrs116767))?null:[daiquiri.interpreter.interpret(attrs116767)]));
})()]);
}),null,"frontend.components.shortcut/keyboard-filter-record-inner");
frontend.components.shortcut.pane_controls = rum.core.lazy_build(rum.core.build_defc,(function (q,set_q_BANG_,filters,set_filters_BANG_,keystroke,set_keystroke_BANG_,toggle_categories_fn){
var _STAR_search_ref = rum.core.use_ref(null);
return daiquiri.core.create_element("div",{'className':"cp__shortcut-page-x-pane-controls"},[daiquiri.core.create_element("a",{'onClick':toggle_categories_fn,'title':"Toggle categories pane",'className':"flex items-center icon-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("fold"))]),daiquiri.core.create_element("a",{'onClick':frontend.components.shortcut.refresh_shortcuts_list_BANG_,'title':"Refresh all",'className':"flex items-center icon-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("refresh"))]),daiquiri.core.create_element("span",{'className':"search-input-wrap"},[daiquiri.core.create_element("input",{'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","search","keymap/search",-18378929)], 0)),'ref':_STAR_search_ref,'value':(function (){var or__5043__auto__ = q;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),'autoFocus':true,'onKeyDown':(function (p1__116770_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),p1__116770_SHARP_.keyCode)){
frontend.util.stop(p1__116770_SHARP_);

if(clojure.string.blank_QMARK_(q)){
var G__116772 = rum.core.deref(_STAR_search_ref);
if((G__116772 == null)){
return null;
} else {
return G__116772.blur();
}
} else {
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_q_BANG_.call(null,""));
}
} else {
return null;
}
}),'onChange':rum.core.mark_sync_update((function (p1__116771_SHARP_){
var v = frontend.util.evalue(p1__116771_SHARP_);
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(v) : set_q_BANG_.call(null,v));
})),'className':"form-input is-small"},[]),((clojure.string.blank_QMARK_(q))?null:daiquiri.core.create_element("a",{'onClick':(function (){
(set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_q_BANG_.call(null,""));

return setTimeout((function (){
var G__116773 = rum.core.deref(_STAR_search_ref);
if((G__116773 == null)){
return null;
} else {
return G__116773.focus();
}
}),(50));
}),'className':"x"},[daiquiri.interpreter.interpret(frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)))]))]),frontend.ui.dropdown((function (p__116778){
var map__116779 = p__116778;
var map__116779__$1 = cljs.core.__destructure_map(map__116779);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116779__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.icon-link","a.flex.items-center.icon-link",2144652115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon("keyboard"),((clojure.string.blank_QMARK_(keystroke))?null:frontend.ui.point("bg-red-600.absolute",(4),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),(-2),new cljs.core.Keyword(null,"top","top",-1856271961),(-2)], null)], null)))], null);
}),(function (p__116780){
var map__116781 = p__116780;
var map__116781__$1 = cljs.core.__destructure_map(map__116781);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116781__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return frontend.components.shortcut.keyboard_filter_record_inner(keystroke,set_keystroke_BANG_,close_fn);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outside?","outside?",-1930213908),true,new cljs.core.Keyword(null,"trigger-class","trigger-class",1251717016),"keyboard-filter"], null)),frontend.ui.dropdown_with_links((function (p__116790){
var map__116791 = p__116790;
var map__116791__$1 = cljs.core.__destructure_map(map__116791);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116791__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.icon-link.relative","a.flex.items-center.icon-link.relative",1980117728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon("filter"),((cljs.core.seq(filters))?frontend.ui.point("bg-red-600.absolute",(4),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),(-2),new cljs.core.Keyword(null,"top","top",-1856271961),(-2)], null)], null)):null)], null);
}),(function (){var iter__5520__auto__ = (function frontend$components$shortcut$iter__116792(s__116793){
return (new cljs.core.LazySeq(null,(function (){
var s__116793__$1 = s__116793;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116793__$1);
if(temp__5804__auto__){
var s__116793__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116793__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116793__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116795 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116794 = (0);
while(true){
if((i__116794 < size__5519__auto__)){
var k = cljs.core._nth(c__5518__auto__,i__116794);
var all_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"All","All",-2078402587));
var checked_QMARK_ = ((cljs.core.contains_QMARK_(filters,k)) || (((all_QMARK_) && ((cljs.core.seq(filters) == null)))));
cljs.core.chunk_append(b__116795,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),((all_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","all","keymap/all",160385963)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keymap","keymap",-499605268),clojure.string.lower_case(cljs.core.name(k)))], 0))),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(((checked_QMARK_)?"checkbox":"square")),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__116794,all_QMARK_,checked_QMARK_,k,c__5518__auto__,size__5519__auto__,b__116795,s__116793__$2,temp__5804__auto__,_STAR_search_ref){
return (function (){
var G__116796 = ((all_QMARK_)?cljs.core.PersistentHashSet.EMPTY:(function (){var f = ((checked_QMARK_)?cljs.core.disj:cljs.core.conj);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(filters,k) : f.call(null,filters,k));
})());
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__116796) : set_filters_BANG_.call(null,G__116796));
});})(i__116794,all_QMARK_,checked_QMARK_,k,c__5518__auto__,size__5519__auto__,b__116795,s__116793__$2,temp__5804__auto__,_STAR_search_ref))
], null)], null));

var G__117130 = (i__116794 + (1));
i__116794 = G__117130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116795),frontend$components$shortcut$iter__116792(cljs.core.chunk_rest(s__116793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116795),null);
}
} else {
var k = cljs.core.first(s__116793__$2);
var all_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"All","All",-2078402587));
var checked_QMARK_ = ((cljs.core.contains_QMARK_(filters,k)) || (((all_QMARK_) && ((cljs.core.seq(filters) == null)))));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),((all_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","all","keymap/all",160385963)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keymap","keymap",-499605268),clojure.string.lower_case(cljs.core.name(k)))], 0))),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(((checked_QMARK_)?"checkbox":"square")),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (all_QMARK_,checked_QMARK_,k,s__116793__$2,temp__5804__auto__,_STAR_search_ref){
return (function (){
var G__116797 = ((all_QMARK_)?cljs.core.PersistentHashSet.EMPTY:(function (){var f = ((checked_QMARK_)?cljs.core.disj:cljs.core.conj);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(filters,k) : f.call(null,filters,k));
})());
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__116797) : set_filters_BANG_.call(null,G__116797));
});})(all_QMARK_,checked_QMARK_,k,s__116793__$2,temp__5804__auto__,_STAR_search_ref))
], null)], null),frontend$components$shortcut$iter__116792(cljs.core.rest(s__116793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"All","All",-2078402587),new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627),new cljs.core.Keyword(null,"Unset","Unset",91993016),new cljs.core.Keyword(null,"Custom","Custom",-1084118283)], null));
})(),null)]);
}),null,"frontend.components.shortcut/pane-controls");
frontend.components.shortcut.shortcut_desc_label = rum.core.lazy_build(rum.core.build_defc,(function (id,binding_map){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = binding_map;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id_SINGLEQUOTE_ = temp__5804__auto__;
var plugin_QMARK_ = clojure.string.starts_with_QMARK_(id_SINGLEQUOTE_,":plugin.");
var id_SINGLEQUOTE___$1 = ((plugin_QMARK_)?(function (){var G__116801 = id_SINGLEQUOTE_;
if((G__116801 == null)){
return null;
} else {
return clojure.string.replace(G__116801,"plugin.","");
}
})():id_SINGLEQUOTE_);
var plugin_id = ((plugin_QMARK_)?cljs.core.namespace(id):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE___$1),"#",(function (){var G__116803 = new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(binding_map);
if((G__116803 == null)){
return null;
} else {
return cljs.core.name(G__116803);
}
})()].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.px-1","span.px-1",-2108616757),frontend.modules.shortcut.data_helper.get_shortcut_desc(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(binding_map,new cljs.core.Keyword(null,"id","id",-1388402092),id))], null),((plugin_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),plugin_id], null):null)], null);
} else {
return null;
}
})());
}),null,"frontend.components.shortcut/shortcut-desc-label");
frontend.components.shortcut.open_customize_shortcut_dialog_BANG_ = (function frontend$components$shortcut$open_customize_shortcut_dialog_BANG_(id){
var temp__5804__auto__ = frontend.modules.shortcut.data_helper.shortcut_item(id);
if(cljs.core.truth_(temp__5804__auto__)){
var map__116804 = temp__5804__auto__;
var map__116804__$1 = cljs.core.__destructure_map(map__116804);
var m = map__116804__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116804__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116804__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var modal_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customize-shortcut","customize-shortcut",1500084014)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var args = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,label,binding__$1,user_binding__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-cb","saved-cb",-1362182471),(function (){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((500)),frontend.components.shortcut.refresh_shortcuts_list_BANG_);
}),new cljs.core.Keyword(null,"modal-id","modal-id",-1810873919),modal_id], null)], null);
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut.customize_shortcut_dialog_inner,args);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"id","id",-1388402092),modal_id,new cljs.core.Keyword(null,"payload","payload",-383036092),args], null));
} else {
return null;
}
});
frontend.components.shortcut.shortcut_conflicts_display = rum.core.lazy_build(rum.core.build_defc,(function (_k,conflicts_map){
return daiquiri.core.create_element("div",{'className':"cp__shortcut-conflicts-list-wrap"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$shortcut$iter__116805(s__116806){
return (new cljs.core.LazySeq(null,(function (){
var s__116806__$1 = s__116806;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116806__$1);
if(temp__5804__auto__){
var s__116806__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116806__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116806__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116808 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116807 = (0);
while(true){
if((i__116807 < size__5519__auto__)){
var vec__116809 = cljs.core._nth(c__5518__auto__,i__116807);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116809,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116809,(1),null);
cljs.core.chunk_append(b__116808,daiquiri.core.create_element("section",{'className':"relative"},[(function (){var attrs116812 = frontend.ui.icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs116812))?daiquiri.interpreter.element_attributes(attrs116812):null),((cljs.core.map_QMARK_(attrs116812))?[(function (){var attrs116813 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","conflicts-for-label","keymap/conflicts-for-label",254824561)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116813))?daiquiri.interpreter.element_attributes(attrs116813):null),((cljs.core.map_QMARK_(attrs116813))?null:[daiquiri.interpreter.interpret(attrs116813)]));
})(),daiquiri.core.create_element("code",null,[frontend.modules.shortcut.utils.decorate_binding(g)])]:[daiquiri.interpreter.interpret(attrs116812),(function (){var attrs116814 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","conflicts-for-label","keymap/conflicts-for-label",254824561)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116814))?daiquiri.interpreter.element_attributes(attrs116814):null),((cljs.core.map_QMARK_(attrs116814))?null:[daiquiri.interpreter.interpret(attrs116814)]));
})(),daiquiri.core.create_element("code",null,[frontend.modules.shortcut.utils.decorate_binding(g)])]));
})(),daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116807,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function frontend$components$shortcut$iter__116805_$_iter__116815(s__116816){
return (new cljs.core.LazySeq(null,((function (i__116807,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
var s__116816__$1 = s__116816;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__116816__$1);
if(temp__5804__auto____$1){
var s__116816__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__116816__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__116816__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__116818 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__116817 = (0);
while(true){
if((i__116817 < size__5519__auto____$1)){
var v = cljs.core._nth(c__5518__auto____$1,i__116817);
var k = cljs.core.first(v);
var vs = cljs.core.second(v);
cljs.core.chunk_append(b__116818,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116817,i__116807,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function frontend$components$shortcut$iter__116805_$_iter__116815_$_iter__116819(s__116820){
return (new cljs.core.LazySeq(null,((function (i__116817,i__116807,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
var s__116820__$1 = s__116820;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__116820__$1);
if(temp__5804__auto____$2){
var s__116820__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__116820__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__116820__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__116822 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__116821 = (0);
while(true){
if((i__116821 < size__5519__auto____$2)){
var vec__116823 = cljs.core._nth(c__5518__auto____$2,i__116821);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116823,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116823,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
cljs.core.chunk_append(b__116822,daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (i__116821,s__116820__$1,i__116817,i__116807,m,vec__116823,id_SINGLEQUOTE_,handler_id,c__5518__auto____$2,size__5519__auto____$2,b__116822,s__116820__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(i__116821,s__116820__$1,i__116817,i__116807,m,vec__116823,id_SINGLEQUOTE_,handler_id,c__5518__auto____$2,size__5519__auto____$2,b__116822,s__116820__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]));

var G__117131 = (i__116821 + (1));
i__116821 = G__117131;
continue;
} else {
var G__117132 = (i__116821 + (1));
i__116821 = G__117132;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116822),frontend$components$shortcut$iter__116805_$_iter__116815_$_iter__116819(cljs.core.chunk_rest(s__116820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116822),null);
}
} else {
var vec__116827 = cljs.core.first(s__116820__$2);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116827,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116827,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
return cljs.core.cons(daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (s__116820__$1,i__116817,i__116807,m,vec__116827,id_SINGLEQUOTE_,handler_id,s__116820__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(s__116820__$1,i__116817,i__116807,m,vec__116827,id_SINGLEQUOTE_,handler_id,s__116820__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]),frontend$components$shortcut$iter__116805_$_iter__116815_$_iter__116819(cljs.core.rest(s__116820__$2)));
} else {
var G__117133 = cljs.core.rest(s__116820__$2);
s__116820__$1 = G__117133;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__116817,i__116807,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,null,null));
});})(i__116817,i__116807,k,vs,v,c__5518__auto____$1,size__5519__auto____$1,b__116818,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
;
return iter__5520__auto__(vs);
})()));

var G__117134 = (i__116817 + (1));
i__116817 = G__117134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116818),frontend$components$shortcut$iter__116805_$_iter__116815(cljs.core.chunk_rest(s__116816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116818),null);
}
} else {
var v = cljs.core.first(s__116816__$2);
var k = cljs.core.first(v);
var vs = cljs.core.second(v);
return cljs.core.cons(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116807,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function frontend$components$shortcut$iter__116805_$_iter__116815_$_iter__116830(s__116831){
return (new cljs.core.LazySeq(null,((function (i__116807,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
var s__116831__$1 = s__116831;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__116831__$1);
if(temp__5804__auto____$2){
var s__116831__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__116831__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__116831__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__116833 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__116832 = (0);
while(true){
if((i__116832 < size__5519__auto____$1)){
var vec__116834 = cljs.core._nth(c__5518__auto____$1,i__116832);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116834,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116834,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
cljs.core.chunk_append(b__116833,daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (i__116832,s__116831__$1,i__116807,m,vec__116834,id_SINGLEQUOTE_,handler_id,c__5518__auto____$1,size__5519__auto____$1,b__116833,s__116831__$2,temp__5804__auto____$2,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(i__116832,s__116831__$1,i__116807,m,vec__116834,id_SINGLEQUOTE_,handler_id,c__5518__auto____$1,size__5519__auto____$1,b__116833,s__116831__$2,temp__5804__auto____$2,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]));

var G__117135 = (i__116832 + (1));
i__116832 = G__117135;
continue;
} else {
var G__117136 = (i__116832 + (1));
i__116832 = G__117136;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116833),frontend$components$shortcut$iter__116805_$_iter__116815_$_iter__116830(cljs.core.chunk_rest(s__116831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116833),null);
}
} else {
var vec__116837 = cljs.core.first(s__116831__$2);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116837,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116837,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
return cljs.core.cons(daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (s__116831__$1,i__116807,m,vec__116837,id_SINGLEQUOTE_,handler_id,s__116831__$2,temp__5804__auto____$2,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(s__116831__$1,i__116807,m,vec__116837,id_SINGLEQUOTE_,handler_id,s__116831__$2,temp__5804__auto____$2,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]),frontend$components$shortcut$iter__116805_$_iter__116815_$_iter__116830(cljs.core.rest(s__116831__$2)));
} else {
var G__117137 = cljs.core.rest(s__116831__$2);
s__116831__$1 = G__117137;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__116807,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,null,null));
});})(i__116807,k,vs,v,s__116816__$2,temp__5804__auto____$1,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
;
return iter__5520__auto__(vs);
})()),frontend$components$shortcut$iter__116805_$_iter__116815(cljs.core.rest(s__116816__$2)));
}
} else {
return null;
}
break;
}
});})(i__116807,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
,null,null));
});})(i__116807,vec__116809,g,ks,c__5518__auto__,size__5519__auto__,b__116808,s__116806__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.vals(ks));
})())])]));

var G__117138 = (i__116807 + (1));
i__116807 = G__117138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116808),frontend$components$shortcut$iter__116805(cljs.core.chunk_rest(s__116806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116808),null);
}
} else {
var vec__116840 = cljs.core.first(s__116806__$2);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116840,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116840,(1),null);
return cljs.core.cons(daiquiri.core.create_element("section",{'className':"relative"},[(function (){var attrs116812 = frontend.ui.icon("alert-triangle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(15)], null));
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs116812))?daiquiri.interpreter.element_attributes(attrs116812):null),((cljs.core.map_QMARK_(attrs116812))?[(function (){var attrs116813 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","conflicts-for-label","keymap/conflicts-for-label",254824561)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116813))?daiquiri.interpreter.element_attributes(attrs116813):null),((cljs.core.map_QMARK_(attrs116813))?null:[daiquiri.interpreter.interpret(attrs116813)]));
})(),daiquiri.core.create_element("code",null,[frontend.modules.shortcut.utils.decorate_binding(g)])]:[daiquiri.interpreter.interpret(attrs116812),(function (){var attrs116814 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","conflicts-for-label","keymap/conflicts-for-label",254824561)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116814))?daiquiri.interpreter.element_attributes(attrs116814):null),((cljs.core.map_QMARK_(attrs116814))?null:[daiquiri.interpreter.interpret(attrs116814)]));
})(),daiquiri.core.create_element("code",null,[frontend.modules.shortcut.utils.decorate_binding(g)])]));
})(),daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function frontend$components$shortcut$iter__116805_$_iter__116843(s__116844){
return (new cljs.core.LazySeq(null,(function (){
var s__116844__$1 = s__116844;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__116844__$1);
if(temp__5804__auto____$1){
var s__116844__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__116844__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116844__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116846 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116845 = (0);
while(true){
if((i__116845 < size__5519__auto__)){
var v = cljs.core._nth(c__5518__auto__,i__116845);
var k = cljs.core.first(v);
var vs = cljs.core.second(v);
cljs.core.chunk_append(b__116846,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116845,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function frontend$components$shortcut$iter__116805_$_iter__116843_$_iter__116847(s__116848){
return (new cljs.core.LazySeq(null,((function (i__116845,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function (){
var s__116848__$1 = s__116848;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__116848__$1);
if(temp__5804__auto____$2){
var s__116848__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__116848__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__116848__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__116850 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__116849 = (0);
while(true){
if((i__116849 < size__5519__auto____$1)){
var vec__116851 = cljs.core._nth(c__5518__auto____$1,i__116849);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116851,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116851,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
cljs.core.chunk_append(b__116850,daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (i__116849,s__116848__$1,i__116845,m,vec__116851,id_SINGLEQUOTE_,handler_id,c__5518__auto____$1,size__5519__auto____$1,b__116850,s__116848__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(i__116849,s__116848__$1,i__116845,m,vec__116851,id_SINGLEQUOTE_,handler_id,c__5518__auto____$1,size__5519__auto____$1,b__116850,s__116848__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]));

var G__117139 = (i__116849 + (1));
i__116849 = G__117139;
continue;
} else {
var G__117140 = (i__116849 + (1));
i__116849 = G__117140;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116850),frontend$components$shortcut$iter__116805_$_iter__116843_$_iter__116847(cljs.core.chunk_rest(s__116848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116850),null);
}
} else {
var vec__116854 = cljs.core.first(s__116848__$2);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116854,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116854,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
return cljs.core.cons(daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (s__116848__$1,i__116845,m,vec__116854,id_SINGLEQUOTE_,handler_id,s__116848__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(s__116848__$1,i__116845,m,vec__116854,id_SINGLEQUOTE_,handler_id,s__116848__$2,temp__5804__auto____$2,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]),frontend$components$shortcut$iter__116805_$_iter__116843_$_iter__116847(cljs.core.rest(s__116848__$2)));
} else {
var G__117141 = cljs.core.rest(s__116848__$2);
s__116848__$1 = G__117141;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__116845,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
,null,null));
});})(i__116845,k,vs,v,c__5518__auto__,size__5519__auto__,b__116846,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
;
return iter__5520__auto__(vs);
})()));

var G__117142 = (i__116845 + (1));
i__116845 = G__117142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116846),frontend$components$shortcut$iter__116805_$_iter__116843(cljs.core.chunk_rest(s__116844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116846),null);
}
} else {
var v = cljs.core.first(s__116844__$2);
var k = cljs.core.first(v);
var vs = cljs.core.second(v);
return cljs.core.cons(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (k,vs,v,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function frontend$components$shortcut$iter__116805_$_iter__116843_$_iter__116857(s__116858){
return (new cljs.core.LazySeq(null,(function (){
var s__116858__$1 = s__116858;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__116858__$1);
if(temp__5804__auto____$2){
var s__116858__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__116858__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116858__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116860 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116859 = (0);
while(true){
if((i__116859 < size__5519__auto__)){
var vec__116861 = cljs.core._nth(c__5518__auto__,i__116859);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116861,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116861,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
cljs.core.chunk_append(b__116860,daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (i__116859,s__116858__$1,m,vec__116861,id_SINGLEQUOTE_,handler_id,c__5518__auto__,size__5519__auto__,b__116860,s__116858__$2,temp__5804__auto____$2,k,vs,v,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(i__116859,s__116858__$1,m,vec__116861,id_SINGLEQUOTE_,handler_id,c__5518__auto__,size__5519__auto__,b__116860,s__116858__$2,temp__5804__auto____$2,k,vs,v,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]));

var G__117143 = (i__116859 + (1));
i__116859 = G__117143;
continue;
} else {
var G__117144 = (i__116859 + (1));
i__116859 = G__117144;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116860),frontend$components$shortcut$iter__116805_$_iter__116843_$_iter__116857(cljs.core.chunk_rest(s__116858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116860),null);
}
} else {
var vec__116864 = cljs.core.first(s__116858__$2);
var id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116864,(0),null);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116864,(1),null);
var m = frontend.modules.shortcut.data_helper.shortcut_item(id_SINGLEQUOTE_);
if((!((m == null)))){
return cljs.core.cons(daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)},[daiquiri.core.create_element("a",{'onClick':((function (s__116858__$1,m,vec__116864,id_SINGLEQUOTE_,handler_id,s__116858__$2,temp__5804__auto____$2,k,vs,v,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id_SINGLEQUOTE_);
});})(s__116858__$1,m,vec__116864,id_SINGLEQUOTE_,handler_id,s__116858__$2,temp__5804__auto____$2,k,vs,v,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
,'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_id),'className':"select-none hover:underline"},[daiquiri.core.create_element("code",{'className':"inline-block mr-1 text-xs"},[frontend.modules.shortcut.utils.decorate_binding(k)]),(function (){var attrs116826 = frontend.modules.shortcut.data_helper.get_shortcut_desc(m);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116826))?daiquiri.interpreter.element_attributes(attrs116826):null),((cljs.core.map_QMARK_(attrs116826))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]:[daiquiri.interpreter.interpret(attrs116826),daiquiri.interpreter.interpret(frontend.ui.icon("external-link",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)))]));
})(),daiquiri.core.create_element("code",null,[daiquiri.core.create_element("small",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_SINGLEQUOTE_)])])])]),frontend$components$shortcut$iter__116805_$_iter__116843_$_iter__116857(cljs.core.rest(s__116858__$2)));
} else {
var G__117145 = cljs.core.rest(s__116858__$2);
s__116858__$1 = G__117145;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(k,vs,v,s__116844__$2,temp__5804__auto____$1,vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
;
return iter__5520__auto__(vs);
})()),frontend$components$shortcut$iter__116805_$_iter__116843(cljs.core.rest(s__116844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__116840,g,ks,s__116806__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.vals(ks));
})())])]),frontend$components$shortcut$iter__116805(cljs.core.rest(s__116806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(conflicts_map);
})())]);
}),null,"frontend.components.shortcut/shortcut-conflicts-display");
frontend.components.shortcut.customize_shortcut_dialog_inner = rum.core.lazy_build(rum.core.build_defc,(function (k,action_name,binding,user_binding,p__116871){
var map__116872 = p__116871;
var map__116872__$1 = cljs.core.__destructure_map(map__116872);
var saved_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116872__$1,new cljs.core.Keyword(null,"saved-cb","saved-cb",-1362182471));
var modal_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116872__$1,new cljs.core.Keyword(null,"modal-id","modal-id",-1810873919));
var _STAR_ref_el = rum.core.use_ref(null);
var vec__116873 = frontend.rum.use_atom(frontend.components.shortcut._STAR_customize_modal_life_sentry);
var modal_life = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116873,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116873,(1),null);
var vec__116876 = rum.core.use_state("");
var keystroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116876,(0),null);
var set_keystroke_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116876,(1),null);
var vec__116879 = rum.core.use_state((function (){var or__5043__auto__ = user_binding;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return binding;
}
})());
var current_binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116879,(0),null);
var set_current_binding_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116879,(1),null);
var vec__116882 = rum.core.use_state(null);
var key_conflicts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116882,(0),null);
var set_key_conflicts_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116882,(1),null);
var handler_id = rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.modules.shortcut.data_helper.get_group(k);
}));
var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = user_binding;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return binding;
}
})(),current_binding);
var keypressed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",keystroke);
var save_keystroke_fn_BANG_ = (function (){
var temp__5802__auto__ = cljs.core.seq(frontend.modules.shortcut.data_helper.parse_conflicts_from_binding(current_binding,keystroke));
if(temp__5802__auto__){
var current_conflicts = temp__5802__auto__;
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5(["Shortcut conflicts from existing binding: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__116886 = current_conflicts;
if((G__116886 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__116867_SHARP_){
return frontend.modules.shortcut.utils.decorate_binding(p1__116867_SHARP_);
}),G__116886);
}
})()], 0))].join(''),new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword("shortcut-conflicts","warning","shortcut-conflicts/warning",1445082331),(5000));
} else {
var conflicts_map = frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$2(keystroke,handler_id);
if(cljs.core.not(cljs.core.seq(conflicts_map))){
var G__116887_117146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_binding,keystroke);
(set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(G__116887_117146) : set_current_binding_BANG_.call(null,G__116887_117146));

(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

return (set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));
} else {
return (set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(conflicts_map) : set_key_conflicts_BANG_.call(null,conflicts_map));
}
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var mid = frontend.state.sub(new cljs.core.Keyword("modal","id","modal/id",-1274892409));
var mid_SINGLEQUOTE_ = (function (){var G__116888 = frontend.state.sub(new cljs.core.Keyword("modal","subsets","modal/subsets",627467906));
var G__116888__$1 = (((G__116888 == null))?null:cljs.core.last(G__116888));
if((G__116888__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(G__116888__$1);
}
})();
var el = rum.core.deref(_STAR_ref_el);
if(((((cljs.core.not(mid_SINGLEQUOTE_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mid,modal_id)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mid_SINGLEQUOTE_,modal_id)))){
var G__116889_117147 = el;
if((G__116889_117147 == null)){
} else {
G__116889_117147.focus();
}

return setTimeout((function (){
var G__116890 = el.querySelector(".shortcut-record-control a.submit");
if((G__116890 == null)){
return null;
} else {
return G__116890.click();
}
}),(200));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modal_life], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el = rum.core.deref(_STAR_ref_el);
var key_handler = (new goog.events.KeyHandler(el));
var teardown_global_BANG_ = (cljs.core.truth_(cljs.core.deref(frontend.components.shortcut._STAR_global_listener_setup_QMARK_))?null:(function (){
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$1(true);

cljs.core.reset_BANG_(frontend.components.shortcut._STAR_global_listener_setup_QMARK_,true);

return (function (){
frontend.modules.shortcut.core.listen_all_BANG_();

return cljs.core.reset_BANG_(frontend.components.shortcut._STAR_global_listener_setup_QMARK_,false);
});
})()
);
goog.events.listen(key_handler,"key",(function (e){
e.preventDefault();

(set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));

var G__116891 = (function (p1__116868_SHARP_){
return frontend.util.trim_safe([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__116868_SHARP_),frontend.modules.shortcut.core.keyname(e)].join(''));
});
return (set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1(G__116891) : set_keystroke_BANG_.call(null,G__116891));
}));

el.focus();

return (function (){
var G__116892_117148 = teardown_global_BANG_;
if((G__116892_117148 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__116892_117148,null);
}

key_handler.dispose();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.shortcut._STAR_customize_modal_life_sentry,cljs.core.inc);
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'tabIndex':(-1),'ref':_STAR_ref_el,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__shortcut-page-x-record-dialog-inner",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keypressed","keypressed",-1097101815),keypressed_QMARK_,new cljs.core.Keyword(null,"dirty","dirty",729553281),dirty_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"sm:w-lsm"},[(function (){var attrs116910 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","customize-for-label","keymap/customize-for-label",1860516586)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs116910))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-2xl","pb-2"], null)], null),attrs116910], 0))):{'className':"text-2xl pb-2"}),((cljs.core.map_QMARK_(attrs116910))?null:[daiquiri.interpreter.interpret(attrs116910)]));
})(),daiquiri.core.create_element("p",{'className':"mb-4 text-md"},[(function (){var attrs116911 = action_name;
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs116911))?daiquiri.interpreter.element_attributes(attrs116911):null),((cljs.core.map_QMARK_(attrs116911))?null:[daiquiri.interpreter.interpret(attrs116911)]));
})()]),daiquiri.core.create_element("div",{'className':"shortcuts-keys-wrap"},[daiquiri.core.create_element("span",{'className':"keyboard-shortcut flex flex-wrap mr-2 space-x-2"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$shortcut$iter__116913(s__116914){
return (new cljs.core.LazySeq(null,(function (){
var s__116914__$1 = s__116914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116914__$1);
if(temp__5804__auto__){
var s__116914__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116914__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116914__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116916 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116915 = (0);
while(true){
if((i__116915 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__116915);
if(typeof x === 'string'){
cljs.core.chunk_append(b__116916,daiquiri.core.create_element("code",{'className':"tracking-wider"},[frontend.modules.shortcut.utils.decorate_binding(clojure.string.lower_case(clojure.string.trim(x))),daiquiri.core.create_element("a",{'onClick':((function (i__116915,s__116914__$1,x,c__5518__auto__,size__5519__auto__,b__116916,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id){
return (function (){
var G__116917 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__116915,s__116914__$1,x,c__5518__auto__,size__5519__auto__,b__116916,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id){
return (function (p1__116869_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,p1__116869_SHARP_);
});})(i__116915,s__116914__$1,x,c__5518__auto__,size__5519__auto__,b__116916,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id))
,current_binding));
return (set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(G__116917) : set_current_binding_BANG_.call(null,G__116917));
});})(i__116915,s__116914__$1,x,c__5518__auto__,size__5519__auto__,b__116916,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id))
,'className':"x"},[daiquiri.interpreter.interpret(frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)))])]));

var G__117149 = (i__116915 + (1));
i__116915 = G__117149;
continue;
} else {
var G__117150 = (i__116915 + (1));
i__116915 = G__117150;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116916),frontend$components$shortcut$iter__116913(cljs.core.chunk_rest(s__116914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116916),null);
}
} else {
var x = cljs.core.first(s__116914__$2);
if(typeof x === 'string'){
return cljs.core.cons(daiquiri.core.create_element("code",{'className':"tracking-wider"},[frontend.modules.shortcut.utils.decorate_binding(clojure.string.lower_case(clojure.string.trim(x))),daiquiri.core.create_element("a",{'onClick':((function (s__116914__$1,x,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id){
return (function (){
var G__116918 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (s__116914__$1,x,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id){
return (function (p1__116869_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,p1__116869_SHARP_);
});})(s__116914__$1,x,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id))
,current_binding));
return (set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(G__116918) : set_current_binding_BANG_.call(null,G__116918));
});})(s__116914__$1,x,s__116914__$2,temp__5804__auto__,_STAR_ref_el,vec__116873,modal_life,_,vec__116876,keystroke,set_keystroke_BANG_,vec__116879,current_binding,set_current_binding_BANG_,vec__116882,key_conflicts,set_key_conflicts_BANG_,handler_id,dirty_QMARK_,keypressed_QMARK_,save_keystroke_fn_BANG_,map__116872,map__116872__$1,saved_cb,modal_id))
,'className':"x"},[daiquiri.interpreter.interpret(frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)))])]),frontend$components$shortcut$iter__116913(cljs.core.rest(s__116914__$2)));
} else {
var G__117151 = cljs.core.rest(s__116914__$2);
s__116914__$1 = G__117151;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(current_binding);
})())]),(function (){var attrs116912 = ((keypressed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((clojure.string.blank_QMARK_(keystroke))?null:frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keystroke], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.active:opacity-90.submit","a.flex.items-center.active:opacity-90.submit",-1059179250),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_keystroke_fn_BANG_], null),frontend.ui.icon("check",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-red-600.hover:text-red-700.active:opacity-90.cancel","a.flex.items-center.text-red-600.hover:text-red-700.active:opacity-90.cancel",389890030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_keystroke_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_keystroke_BANG_.call(null,""));

return (set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_key_conflicts_BANG_.call(null,null));
})], null),frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.flex.items-center","code.flex.items-center",450036941),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.pr-1","small.pr-1",794910716),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","keystroke-record-setup-label","keymap/keystroke-record-setup-label",-1426705636)], 0))], null),frontend.ui.icon("keyboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116912))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shortcut-record-control"], null)], null),attrs116912], 0))):{'className':"shortcut-record-control"}),((cljs.core.map_QMARK_(attrs116912))?null:[daiquiri.interpreter.interpret(attrs116912)]));
})()])]),((cljs.core.seq(key_conflicts))?frontend.components.shortcut.shortcut_conflicts_display(k,key_conflicts):null),(function (){var attrs116907 = (cljs.core.truth_((function (){var and__5041__auto__ = dirty_QMARK_;
if(and__5041__auto__){
var or__5043__auto__ = user_binding;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return binding;
}
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.space-x-1.text-sm.fade-link","a.flex.items-center.space-x-1.text-sm.fade-link",-1501146342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__116919 = (function (){var or__5043__auto__ = user_binding;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return binding;
}
})();
return (set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_binding_BANG_.cljs$core$IFn$_invoke$arity$1(G__116919) : set_current_binding_BANG_.call(null,G__116919));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","restore-to-default","keymap/restore-to-default",805883024)], 0)),(function (){var iter__5520__auto__ = (function frontend$components$shortcut$iter__116920(s__116921){
return (new cljs.core.LazySeq(null,(function (){
var s__116921__$1 = s__116921;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116921__$1);
if(temp__5804__auto__){
var s__116921__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116921__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116921__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116923 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116922 = (0);
while(true){
if((i__116922 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__116922);
cljs.core.chunk_append(b__116923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyboard-shortcut.ml-1","span.keyboard-shortcut.ml-1",-656404157),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),it], null)], null));

var G__117152 = (i__116922 + (1));
i__116922 = G__117152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116923),frontend$components$shortcut$iter__116920(cljs.core.chunk_rest(s__116921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116923),null);
}
} else {
var it = cljs.core.first(s__116921__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyboard-shortcut.ml-1","span.keyboard-shortcut.ml-1",-656404157),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),it], null)], null),frontend$components$shortcut$iter__116920(cljs.core.rest(s__116921__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__((function (){var G__116924 = (function (){var or__5043__auto__ = binding;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return user_binding;
}
})();
if((G__116924 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__116870_SHARP_){
var G__116925 = p1__116870_SHARP_;
var G__116925__$1 = (((G__116925 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__116925));
if((G__116925__$1 == null)){
return null;
} else {
return frontend.modules.shortcut.utils.decorate_binding(G__116925__$1);
}
}),G__116924);
}
})());
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116907))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-btns","text-right","mt-6","flex","justify-between","items-center"], null)], null),attrs116907], 0))):{'className':"action-btns text-right mt-6 flex justify-between items-center"}),((cljs.core.map_QMARK_(attrs116907))?[(function (){var attrs116908 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save","save",1850079149)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(dirty_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var binding_SINGLEQUOTE_ = (((current_binding == null))?cljs.core.PersistentVector.EMPTY:current_binding);
var conflicts = frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(binding_SINGLEQUOTE_,handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318),cljs.core.PersistentHashSet.createAsIfByAssoc([k])], null));
if(cljs.core.seq(conflicts)){
return (set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(conflicts) : set_key_conflicts_BANG_.call(null,conflicts));
} else {
var binding_SINGLEQUOTE___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding,binding_SINGLEQUOTE_))?null:binding_SINGLEQUOTE_);
frontend.modules.shortcut.core.persist_user_shortcut_BANG_(k,binding_SINGLEQUOTE___$1);

frontend.state.close_modal_BANG_();

return (saved_cb.cljs$core$IFn$_invoke$arity$0 ? saved_cb.cljs$core$IFn$_invoke$arity$0() : saved_cb.call(null));
}
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116908))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center","gap-2"], null)], null),attrs116908], 0))):{'className':"flex flex-row items-center gap-2"}),((cljs.core.map_QMARK_(attrs116908))?null:[daiquiri.interpreter.interpret(attrs116908)]));
})()]:[daiquiri.interpreter.interpret(attrs116907),(function (){var attrs116909 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save","save",1850079149)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(dirty_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var binding_SINGLEQUOTE_ = (((current_binding == null))?cljs.core.PersistentVector.EMPTY:current_binding);
var conflicts = frontend.modules.shortcut.data_helper.get_conflicts_by_keys.cljs$core$IFn$_invoke$arity$3(binding_SINGLEQUOTE_,handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude-ids","exclude-ids",7408318),cljs.core.PersistentHashSet.createAsIfByAssoc([k])], null));
if(cljs.core.seq(conflicts)){
return (set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_key_conflicts_BANG_.cljs$core$IFn$_invoke$arity$1(conflicts) : set_key_conflicts_BANG_.call(null,conflicts));
} else {
var binding_SINGLEQUOTE___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding,binding_SINGLEQUOTE_))?null:binding_SINGLEQUOTE_);
frontend.modules.shortcut.core.persist_user_shortcut_BANG_(k,binding_SINGLEQUOTE___$1);

frontend.state.close_modal_BANG_();

return (saved_cb.cljs$core$IFn$_invoke$arity$0 ? saved_cb.cljs$core$IFn$_invoke$arity$0() : saved_cb.call(null));
}
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116909))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center","gap-2"], null)], null),attrs116909], 0))):{'className':"flex flex-row items-center gap-2"}),((cljs.core.map_QMARK_(attrs116909))?null:[daiquiri.interpreter.interpret(attrs116909)]));
})()]));
})()]);
}),null,"frontend.components.shortcut/customize-shortcut-dialog-inner");
frontend.components.shortcut.build_categories_map = (function frontend$components$shortcut$build_categories_map(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__116926_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__116926_SHARP_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),frontend.modules.shortcut.data_helper.binding_by_category(p1__116926_SHARP_))],null));
}),frontend.components.shortcut.categories);
});
frontend.components.shortcut.shortcut_keymap_x = rum.core.lazy_build(rum.core.build_defc,(function (){
var _ = frontend.rum.use_atom(frontend.modules.shortcut.config._STAR_category);
var ___$1 = frontend.rum.use_atom(frontend.components.shortcut._STAR_refresh_sentry);
var vec__116932 = rum.core.use_state(false);
var ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116932,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116932,(1),null);
var vec__116935 = rum.core.use_state(cljs.core.PersistentHashSet.EMPTY);
var filters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116935,(0),null);
var set_filters_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116935,(1),null);
var vec__116938 = rum.core.use_state("");
var keystroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116938,(0),null);
var set_keystroke_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116938,(1),null);
var vec__116941 = rum.core.use_state(null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116941,(0),null);
var set_q_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116941,(1),null);
var categories_list_map = frontend.components.shortcut.build_categories_map();
var all_categories = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,categories_list_map));
var in_filters_QMARK_ = cljs.core.boolean$(cljs.core.seq(filters));
var in_query_QMARK_ = (!(clojure.string.blank_QMARK_(frontend.util.trim_safe(q))));
var in_keystroke_QMARK_ = (!(clojure.string.blank_QMARK_(keystroke)));
var vec__116944 = rum.core.use_state(cljs.core.PersistentHashSet.EMPTY);
var folded_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116944,(0),null);
var set_folded_categories_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116944,(1),null);
var matched_list_map = ((((in_query_QMARK_) && ((!(in_keystroke_QMARK_)))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__116947){
var vec__116948 = p__116947;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116948,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116948,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(binding_map,q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),(function (p1__116927_SHARP_){
var vec__116951 = p1__116927_SHARP_;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116951,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116951,(1),null);
return [cljs.core.name(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.data_helper.get_shortcut_desc(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),id)))].join('');
})], 0))], null);
}),categories_list_map):null);
var result_list_map = (function (){var or__5043__auto__ = matched_list_map;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return categories_list_map;
}
})();
var toggle_categories_BANG_ = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(folded_categories,all_categories)){
var G__116954 = cljs.core.PersistentHashSet.EMPTY;
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__116954) : set_folded_categories_BANG_.call(null,G__116954));
} else {
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(all_categories) : set_folded_categories_BANG_.call(null,all_categories));
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return setTimeout((function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}),(100));
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'className':"cp__shortcut-page-x"},[daiquiri.core.create_element("header",{'className':"relative"},[daiquiri.core.create_element("h2",{'className':"text-xs opacity-70"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","total","keymap/total",-1306092209)], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ready_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__116928_SHARP_){
return cljs.core.count(cljs.core.second(p1__116928_SHARP_));
}),result_list_map)):" ..."))].join('')]),frontend.components.shortcut.pane_controls(q,set_q_BANG_,filters,set_filters_BANG_,keystroke,set_keystroke_BANG_,toggle_categories_BANG_)]),(function (){var attrs116955 = (cljs.core.truth_(ready_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.py-8.flex.justify-center","p.py-8.flex.justify-center",-1082958729),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null));
return daiquiri.core.create_element("article",((cljs.core.map_QMARK_(attrs116955))?daiquiri.interpreter.element_attributes(attrs116955):null),((cljs.core.map_QMARK_(attrs116955))?[(cljs.core.truth_(ready_QMARK_)?daiquiri.core.create_element("ul",{'className':"list-none m-0 py-3"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$shortcut$iter__116959(s__116960){
return (new cljs.core.LazySeq(null,(function (){
var s__116960__$1 = s__116960;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116960__$1);
if(temp__5804__auto__){
var s__116960__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116960__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116960__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116962 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116961 = (0);
while(true){
if((i__116961 < size__5519__auto__)){
var vec__116963 = cljs.core._nth(c__5518__auto__,i__116961);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116963,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116963,(1),null);
var folded_QMARK_ = cljs.core.contains_QMARK_(folded_categories,c);
cljs.core.chunk_append(b__116962,(function (){var attrs116958 = (((((!(in_query_QMARK_))) && ((((!(in_filters_QMARK_))) && ((!(in_keystroke_QMARK_)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.justify-between.th","li.flex.justify-between.th",-179015278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__116961,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var f = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
var G__116966 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : f.call(null,folded_categories,c));
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__116966) : set_folded_categories_BANG_.call(null,G__116966));
});})(i__116961,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center","i.flex.items-center",1064024509),frontend.ui.icon(((folded_QMARK_)?"chevron-left":"chevron-down"))], null)], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs116958))?daiquiri.interpreter.element_attributes(attrs116958):null),((cljs.core.map_QMARK_(attrs116958))?[((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__116959_$_iter__116967(s__116968){
return (new cljs.core.LazySeq(null,((function (i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var s__116968__$1 = s__116968;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__116968__$1);
if(temp__5804__auto____$1){
var s__116968__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__116968__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__116968__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__116970 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__116969 = (0);
while(true){
if((i__116969 < size__5519__auto____$1)){
var vec__116971 = cljs.core._nth(c__5518__auto____$1,i__116969);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116971,(0),null);
var map__116974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116971,(1),null);
var map__116974__$1 = cljs.core.__destructure_map(map__116974);
var m = map__116974__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116974__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116974__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__116970,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__116975 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__116975 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__116975);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__116969,i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__116976 = p1__116929_SHARP_;
var G__116976__$1 = (((G__116976 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__116976));
var G__116976__$2 = (((G__116976__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__116976__$1));
if((G__116976__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__116976__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__116969,i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116977 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116977))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116977], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116977))?null:[daiquiri.interpreter.interpret(attrs116977)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__116969,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__116969,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116978 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116969,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__116969,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116978))?daiquiri.interpreter.element_attributes(attrs116978):null),((cljs.core.map_QMARK_(attrs116978))?null:[daiquiri.interpreter.interpret(attrs116978)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116979 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116969,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__116969,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116971,id,map__116974,map__116974__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116970,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116979))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116979], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116979))?null:[daiquiri.interpreter.interpret(attrs116979)]));
})():null))])]):null):null));

var G__117153 = (i__116969 + (1));
i__116969 = G__117153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116970),frontend$components$shortcut$iter__116959_$_iter__116967(cljs.core.chunk_rest(s__116968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116970),null);
}
} else {
var vec__116980 = cljs.core.first(s__116968__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116980,(0),null);
var map__116983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116980,(1),null);
var map__116983__$1 = cljs.core.__destructure_map(map__116983);
var m = map__116983__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116983__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116983__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__116984 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__116984 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__116984);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__116985 = p1__116929_SHARP_;
var G__116985__$1 = (((G__116985 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__116985));
var G__116985__$2 = (((G__116985__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__116985__$1));
if((G__116985__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__116985__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116977 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116977))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116977], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116977))?null:[daiquiri.interpreter.interpret(attrs116977)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116978 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116978))?daiquiri.interpreter.element_attributes(attrs116978):null),((cljs.core.map_QMARK_(attrs116978))?null:[daiquiri.interpreter.interpret(attrs116978)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116979 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116980,id,map__116983,map__116983__$1,m,binding,user_binding,s__116968__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116979))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116979], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116979))?null:[daiquiri.interpreter.interpret(attrs116979)]));
})():null))])]):null):null),frontend$components$shortcut$iter__116959_$_iter__116967(cljs.core.rest(s__116968__$2)));
}
} else {
return null;
}
break;
}
});})(i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,null,null));
});})(i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]:[daiquiri.interpreter.interpret(attrs116958),((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__116959_$_iter__116986(s__116987){
return (new cljs.core.LazySeq(null,((function (i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var s__116987__$1 = s__116987;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__116987__$1);
if(temp__5804__auto____$1){
var s__116987__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__116987__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__116987__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__116989 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__116988 = (0);
while(true){
if((i__116988 < size__5519__auto____$1)){
var vec__116990 = cljs.core._nth(c__5518__auto____$1,i__116988);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116990,(0),null);
var map__116993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116990,(1),null);
var map__116993__$1 = cljs.core.__destructure_map(map__116993);
var m = map__116993__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116993__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116993__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__116989,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__116994 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__116994 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__116994);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__116988,i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__116995 = p1__116929_SHARP_;
var G__116995__$1 = (((G__116995 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__116995));
var G__116995__$2 = (((G__116995__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__116995__$1));
if((G__116995__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__116995__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__116988,i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116996 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116996))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116996], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116996))?null:[daiquiri.interpreter.interpret(attrs116996)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__116988,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__116988,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116997 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116988,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__116988,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116997))?daiquiri.interpreter.element_attributes(attrs116997):null),((cljs.core.map_QMARK_(attrs116997))?null:[daiquiri.interpreter.interpret(attrs116997)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116998 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116988,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__116988,i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116990,id,map__116993,map__116993__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__116989,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116998))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116998], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116998))?null:[daiquiri.interpreter.interpret(attrs116998)]));
})():null))])]):null):null));

var G__117154 = (i__116988 + (1));
i__116988 = G__117154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116989),frontend$components$shortcut$iter__116959_$_iter__116986(cljs.core.chunk_rest(s__116987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116989),null);
}
} else {
var vec__116999 = cljs.core.first(s__116987__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116999,(0),null);
var map__117002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116999,(1),null);
var map__117002__$1 = cljs.core.__destructure_map(map__117002);
var m = map__117002__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117002__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117002__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117003 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117003 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117003);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117004 = p1__116929_SHARP_;
var G__117004__$1 = (((G__117004 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117004));
var G__117004__$2 = (((G__117004__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117004__$1));
if((G__117004__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117004__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__116961,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116996 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116996))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116996], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116996))?null:[daiquiri.interpreter.interpret(attrs116996)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116997 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116997))?daiquiri.interpreter.element_attributes(attrs116997):null),((cljs.core.map_QMARK_(attrs116997))?null:[daiquiri.interpreter.interpret(attrs116997)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116998 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__116961,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__116999,id,map__117002,map__117002__$1,m,binding,user_binding,s__116987__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116998))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116998], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116998))?null:[daiquiri.interpreter.interpret(attrs116998)]));
})():null))])]):null):null),frontend$components$shortcut$iter__116959_$_iter__116986(cljs.core.rest(s__116987__$2)));
}
} else {
return null;
}
break;
}
});})(i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,null,null));
});})(i__116961,attrs116958,folded_QMARK_,vec__116963,c,binding_map,c__5518__auto__,size__5519__auto__,b__116962,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]));
})());

var G__117155 = (i__116961 + (1));
i__116961 = G__117155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116962),frontend$components$shortcut$iter__116959(cljs.core.chunk_rest(s__116960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116962),null);
}
} else {
var vec__117005 = cljs.core.first(s__116960__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117005,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117005,(1),null);
var folded_QMARK_ = cljs.core.contains_QMARK_(folded_categories,c);
return cljs.core.cons((function (){var attrs116958 = (((((!(in_query_QMARK_))) && ((((!(in_filters_QMARK_))) && ((!(in_keystroke_QMARK_)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.justify-between.th","li.flex.justify-between.th",-179015278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var f = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
var G__117008 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : f.call(null,folded_categories,c));
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__117008) : set_folded_categories_BANG_.call(null,G__117008));
});})(folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center","i.flex.items-center",1064024509),frontend.ui.icon(((folded_QMARK_)?"chevron-left":"chevron-down"))], null)], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs116958))?daiquiri.interpreter.element_attributes(attrs116958):null),((cljs.core.map_QMARK_(attrs116958))?[((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__116959_$_iter__117009(s__117010){
return (new cljs.core.LazySeq(null,(function (){
var s__117010__$1 = s__117010;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__117010__$1);
if(temp__5804__auto____$1){
var s__117010__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117010__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117010__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117012 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117011 = (0);
while(true){
if((i__117011 < size__5519__auto__)){
var vec__117013 = cljs.core._nth(c__5518__auto__,i__117011);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117013,(0),null);
var map__117016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117013,(1),null);
var map__117016__$1 = cljs.core.__destructure_map(map__117016);
var m = map__117016__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117016__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117016__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__117012,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117017 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117017 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117017);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117011,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117018 = p1__116929_SHARP_;
var G__117018__$1 = (((G__117018 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117018));
var G__117018__$2 = (((G__117018__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117018__$1));
if((G__117018__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117018__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117011,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116977 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116977))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116977], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116977))?null:[daiquiri.interpreter.interpret(attrs116977)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117011,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117011,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116978 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117011,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117011,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116978))?daiquiri.interpreter.element_attributes(attrs116978):null),((cljs.core.map_QMARK_(attrs116978))?null:[daiquiri.interpreter.interpret(attrs116978)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116979 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117011,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117011,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117013,id,map__117016,map__117016__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117012,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116979))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116979], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116979))?null:[daiquiri.interpreter.interpret(attrs116979)]));
})():null))])]):null):null));

var G__117156 = (i__117011 + (1));
i__117011 = G__117156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117012),frontend$components$shortcut$iter__116959_$_iter__117009(cljs.core.chunk_rest(s__117010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117012),null);
}
} else {
var vec__117019 = cljs.core.first(s__117010__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117019,(0),null);
var map__117022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117019,(1),null);
var map__117022__$1 = cljs.core.__destructure_map(map__117022);
var m = map__117022__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117022__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117022__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117023 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117023 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117023);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117024 = p1__116929_SHARP_;
var G__117024__$1 = (((G__117024 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117024));
var G__117024__$2 = (((G__117024__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117024__$1));
if((G__117024__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117024__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116977 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116977))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116977], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116977))?null:[daiquiri.interpreter.interpret(attrs116977)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116978 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116978))?daiquiri.interpreter.element_attributes(attrs116978):null),((cljs.core.map_QMARK_(attrs116978))?null:[daiquiri.interpreter.interpret(attrs116978)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116979 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117019,id,map__117022,map__117022__$1,m,binding,user_binding,s__117010__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116979))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116979], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116979))?null:[daiquiri.interpreter.interpret(attrs116979)]));
})():null))])]):null):null),frontend$components$shortcut$iter__116959_$_iter__117009(cljs.core.rest(s__117010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]:[daiquiri.interpreter.interpret(attrs116958),((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__116959_$_iter__117025(s__117026){
return (new cljs.core.LazySeq(null,(function (){
var s__117026__$1 = s__117026;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__117026__$1);
if(temp__5804__auto____$1){
var s__117026__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117026__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117026__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117028 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117027 = (0);
while(true){
if((i__117027 < size__5519__auto__)){
var vec__117029 = cljs.core._nth(c__5518__auto__,i__117027);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117029,(0),null);
var map__117032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117029,(1),null);
var map__117032__$1 = cljs.core.__destructure_map(map__117032);
var m = map__117032__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117032__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117032__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__117028,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117033 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117033 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117033);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117027,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117034 = p1__116929_SHARP_;
var G__117034__$1 = (((G__117034 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117034));
var G__117034__$2 = (((G__117034__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117034__$1));
if((G__117034__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117034__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117027,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116996 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116996))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116996], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116996))?null:[daiquiri.interpreter.interpret(attrs116996)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117027,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117027,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116997 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117027,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117027,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116997))?daiquiri.interpreter.element_attributes(attrs116997):null),((cljs.core.map_QMARK_(attrs116997))?null:[daiquiri.interpreter.interpret(attrs116997)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116998 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117027,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117027,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117029,id,map__117032,map__117032__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117028,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116998))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116998], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116998))?null:[daiquiri.interpreter.interpret(attrs116998)]));
})():null))])]):null):null));

var G__117157 = (i__117027 + (1));
i__117027 = G__117157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117028),frontend$components$shortcut$iter__116959_$_iter__117025(cljs.core.chunk_rest(s__117026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117028),null);
}
} else {
var vec__117035 = cljs.core.first(s__117026__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117035,(0),null);
var map__117038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117035,(1),null);
var map__117038__$1 = cljs.core.__destructure_map(map__117038);
var m = map__117038__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117038__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117038__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117039 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117039 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117039);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117040 = p1__116929_SHARP_;
var G__117040__$1 = (((G__117040 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117040));
var G__117040__$2 = (((G__117040__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117040__$1));
if((G__117040__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117040__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs116996 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116996))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs116996], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs116996))?null:[daiquiri.interpreter.interpret(attrs116996)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs116997 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116997))?daiquiri.interpreter.element_attributes(attrs116997):null),((cljs.core.map_QMARK_(attrs116997))?null:[daiquiri.interpreter.interpret(attrs116997)]));
})():(((!(unset_QMARK_)))?(function (){var attrs116998 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117035,id,map__117038,map__117038__$1,m,binding,user_binding,s__117026__$2,temp__5804__auto____$1,attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs116998))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs116998], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs116998))?null:[daiquiri.interpreter.interpret(attrs116998)]));
})():null))])]):null):null),frontend$components$shortcut$iter__116959_$_iter__117025(cljs.core.rest(s__117026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(attrs116958,folded_QMARK_,vec__117005,c,binding_map,s__116960__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]));
})(),frontend$components$shortcut$iter__116959(cljs.core.rest(s__116960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(result_list_map);
})())]):null)]:[daiquiri.interpreter.interpret(attrs116955),(cljs.core.truth_(ready_QMARK_)?daiquiri.core.create_element("ul",{'className':"list-none m-0 py-3"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$shortcut$iter__117044(s__117045){
return (new cljs.core.LazySeq(null,(function (){
var s__117045__$1 = s__117045;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117045__$1);
if(temp__5804__auto__){
var s__117045__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117045__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117045__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117047 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117046 = (0);
while(true){
if((i__117046 < size__5519__auto__)){
var vec__117048 = cljs.core._nth(c__5518__auto__,i__117046);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117048,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117048,(1),null);
var folded_QMARK_ = cljs.core.contains_QMARK_(folded_categories,c);
cljs.core.chunk_append(b__117047,(function (){var attrs117043 = (((((!(in_query_QMARK_))) && ((((!(in_filters_QMARK_))) && ((!(in_keystroke_QMARK_)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.justify-between.th","li.flex.justify-between.th",-179015278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__117046,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var f = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
var G__117051 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : f.call(null,folded_categories,c));
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__117051) : set_folded_categories_BANG_.call(null,G__117051));
});})(i__117046,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center","i.flex.items-center",1064024509),frontend.ui.icon(((folded_QMARK_)?"chevron-left":"chevron-down"))], null)], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs117043))?daiquiri.interpreter.element_attributes(attrs117043):null),((cljs.core.map_QMARK_(attrs117043))?[((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__117044_$_iter__117052(s__117053){
return (new cljs.core.LazySeq(null,((function (i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var s__117053__$1 = s__117053;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__117053__$1);
if(temp__5804__auto____$1){
var s__117053__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117053__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__117053__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__117055 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__117054 = (0);
while(true){
if((i__117054 < size__5519__auto____$1)){
var vec__117056 = cljs.core._nth(c__5518__auto____$1,i__117054);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117056,(0),null);
var map__117059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117056,(1),null);
var map__117059__$1 = cljs.core.__destructure_map(map__117059);
var m = map__117059__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117059__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117059__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__117055,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117060 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117060 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117060);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117054,i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117061 = p1__116929_SHARP_;
var G__117061__$1 = (((G__117061 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117061));
var G__117061__$2 = (((G__117061__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117061__$1));
if((G__117061__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117061__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117054,i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117062 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117062))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117062], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117062))?null:[daiquiri.interpreter.interpret(attrs117062)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117054,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117054,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117063 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117054,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117054,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117063))?daiquiri.interpreter.element_attributes(attrs117063):null),((cljs.core.map_QMARK_(attrs117063))?null:[daiquiri.interpreter.interpret(attrs117063)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117064 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117054,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117054,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117056,id,map__117059,map__117059__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117055,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117064))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117064], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117064))?null:[daiquiri.interpreter.interpret(attrs117064)]));
})():null))])]):null):null));

var G__117158 = (i__117054 + (1));
i__117054 = G__117158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117055),frontend$components$shortcut$iter__117044_$_iter__117052(cljs.core.chunk_rest(s__117053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117055),null);
}
} else {
var vec__117065 = cljs.core.first(s__117053__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117065,(0),null);
var map__117068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117065,(1),null);
var map__117068__$1 = cljs.core.__destructure_map(map__117068);
var m = map__117068__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117068__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117068__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117069 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117069 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117069);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117070 = p1__116929_SHARP_;
var G__117070__$1 = (((G__117070 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117070));
var G__117070__$2 = (((G__117070__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117070__$1));
if((G__117070__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117070__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117062 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117062))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117062], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117062))?null:[daiquiri.interpreter.interpret(attrs117062)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117063 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117063))?daiquiri.interpreter.element_attributes(attrs117063):null),((cljs.core.map_QMARK_(attrs117063))?null:[daiquiri.interpreter.interpret(attrs117063)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117064 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117065,id,map__117068,map__117068__$1,m,binding,user_binding,s__117053__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117064))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117064], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117064))?null:[daiquiri.interpreter.interpret(attrs117064)]));
})():null))])]):null):null),frontend$components$shortcut$iter__117044_$_iter__117052(cljs.core.rest(s__117053__$2)));
}
} else {
return null;
}
break;
}
});})(i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,null,null));
});})(i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]:[daiquiri.interpreter.interpret(attrs117043),((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__117044_$_iter__117071(s__117072){
return (new cljs.core.LazySeq(null,((function (i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var s__117072__$1 = s__117072;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__117072__$1);
if(temp__5804__auto____$1){
var s__117072__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117072__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__117072__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__117074 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__117073 = (0);
while(true){
if((i__117073 < size__5519__auto____$1)){
var vec__117075 = cljs.core._nth(c__5518__auto____$1,i__117073);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117075,(0),null);
var map__117078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117075,(1),null);
var map__117078__$1 = cljs.core.__destructure_map(map__117078);
var m = map__117078__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117078__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117078__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__117074,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117079 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117079 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117079);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117073,i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117080 = p1__116929_SHARP_;
var G__117080__$1 = (((G__117080 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117080));
var G__117080__$2 = (((G__117080__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117080__$1));
if((G__117080__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117080__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117073,i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117081 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117081))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117081], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117081))?null:[daiquiri.interpreter.interpret(attrs117081)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117073,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117073,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117082 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117073,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117073,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117082))?daiquiri.interpreter.element_attributes(attrs117082):null),((cljs.core.map_QMARK_(attrs117082))?null:[daiquiri.interpreter.interpret(attrs117082)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117083 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117073,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117073,i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117075,id,map__117078,map__117078__$1,m,binding,user_binding,c__5518__auto____$1,size__5519__auto____$1,b__117074,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117083))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117083], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117083))?null:[daiquiri.interpreter.interpret(attrs117083)]));
})():null))])]):null):null));

var G__117159 = (i__117073 + (1));
i__117073 = G__117159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117074),frontend$components$shortcut$iter__117044_$_iter__117071(cljs.core.chunk_rest(s__117072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117074),null);
}
} else {
var vec__117084 = cljs.core.first(s__117072__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117084,(0),null);
var map__117087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117084,(1),null);
var map__117087__$1 = cljs.core.__destructure_map(map__117087);
var m = map__117087__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117087__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117087__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117088 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117088 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117088);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117089 = p1__116929_SHARP_;
var G__117089__$1 = (((G__117089 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117089));
var G__117089__$2 = (((G__117089__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117089__$1));
if((G__117089__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117089__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117046,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117081 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117081))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117081], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117081))?null:[daiquiri.interpreter.interpret(attrs117081)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117082 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117082))?daiquiri.interpreter.element_attributes(attrs117082):null),((cljs.core.map_QMARK_(attrs117082))?null:[daiquiri.interpreter.interpret(attrs117082)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117083 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117046,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117084,id,map__117087,map__117087__$1,m,binding,user_binding,s__117072__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117083))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117083], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117083))?null:[daiquiri.interpreter.interpret(attrs117083)]));
})():null))])]):null):null),frontend$components$shortcut$iter__117044_$_iter__117071(cljs.core.rest(s__117072__$2)));
}
} else {
return null;
}
break;
}
});})(i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,null,null));
});})(i__117046,attrs117043,folded_QMARK_,vec__117048,c,binding_map,c__5518__auto__,size__5519__auto__,b__117047,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]));
})());

var G__117160 = (i__117046 + (1));
i__117046 = G__117160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117047),frontend$components$shortcut$iter__117044(cljs.core.chunk_rest(s__117045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117047),null);
}
} else {
var vec__117090 = cljs.core.first(s__117045__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117090,(0),null);
var binding_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117090,(1),null);
var folded_QMARK_ = cljs.core.contains_QMARK_(folded_categories,c);
return cljs.core.cons((function (){var attrs117043 = (((((!(in_query_QMARK_))) && ((((!(in_filters_QMARK_))) && ((!(in_keystroke_QMARK_)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.justify-between.th","li.flex.justify-between.th",-179015278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
var f = ((folded_QMARK_)?cljs.core.disj:cljs.core.conj);
var G__117093 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(folded_categories,c) : f.call(null,folded_categories,c));
return (set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_folded_categories_BANG_.cljs$core$IFn$_invoke$arity$1(G__117093) : set_folded_categories_BANG_.call(null,G__117093));
});})(folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center","i.flex.items-center",1064024509),frontend.ui.icon(((folded_QMARK_)?"chevron-left":"chevron-down"))], null)], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs117043))?daiquiri.interpreter.element_attributes(attrs117043):null),((cljs.core.map_QMARK_(attrs117043))?[((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__117044_$_iter__117094(s__117095){
return (new cljs.core.LazySeq(null,(function (){
var s__117095__$1 = s__117095;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__117095__$1);
if(temp__5804__auto____$1){
var s__117095__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117095__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117095__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117097 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117096 = (0);
while(true){
if((i__117096 < size__5519__auto__)){
var vec__117098 = cljs.core._nth(c__5518__auto__,i__117096);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117098,(0),null);
var map__117101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117098,(1),null);
var map__117101__$1 = cljs.core.__destructure_map(map__117101);
var m = map__117101__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117101__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117101__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__117097,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117102 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117102 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117102);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117096,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117103 = p1__116929_SHARP_;
var G__117103__$1 = (((G__117103 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117103));
var G__117103__$2 = (((G__117103__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117103__$1));
if((G__117103__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117103__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117096,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117062 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117062))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117062], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117062))?null:[daiquiri.interpreter.interpret(attrs117062)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117096,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117096,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117063 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117096,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117096,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117063))?daiquiri.interpreter.element_attributes(attrs117063):null),((cljs.core.map_QMARK_(attrs117063))?null:[daiquiri.interpreter.interpret(attrs117063)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117064 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117096,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117096,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117098,id,map__117101,map__117101__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117097,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117064))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117064], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117064))?null:[daiquiri.interpreter.interpret(attrs117064)]));
})():null))])]):null):null));

var G__117161 = (i__117096 + (1));
i__117096 = G__117161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117097),frontend$components$shortcut$iter__117044_$_iter__117094(cljs.core.chunk_rest(s__117095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117097),null);
}
} else {
var vec__117104 = cljs.core.first(s__117095__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117104,(0),null);
var map__117107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117104,(1),null);
var map__117107__$1 = cljs.core.__destructure_map(map__117107);
var m = map__117107__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117107__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117107__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117108 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117108 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117108);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117109 = p1__116929_SHARP_;
var G__117109__$1 = (((G__117109 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117109));
var G__117109__$2 = (((G__117109__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117109__$1));
if((G__117109__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117109__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117062 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117062))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117062], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117062))?null:[daiquiri.interpreter.interpret(attrs117062)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117063 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117063))?daiquiri.interpreter.element_attributes(attrs117063):null),((cljs.core.map_QMARK_(attrs117063))?null:[daiquiri.interpreter.interpret(attrs117063)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117064 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117104,id,map__117107,map__117107__$1,m,binding,user_binding,s__117095__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117064))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117064], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117064))?null:[daiquiri.interpreter.interpret(attrs117064)]));
})():null))])]):null):null),frontend$components$shortcut$iter__117044_$_iter__117094(cljs.core.rest(s__117095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]:[daiquiri.interpreter.interpret(attrs117043),((((in_query_QMARK_) || (((in_filters_QMARK_) || ((!(folded_QMARK_)))))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function frontend$components$shortcut$iter__117044_$_iter__117110(s__117111){
return (new cljs.core.LazySeq(null,(function (){
var s__117111__$1 = s__117111;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__117111__$1);
if(temp__5804__auto____$1){
var s__117111__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__117111__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117111__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117113 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117112 = (0);
while(true){
if((i__117112 < size__5519__auto__)){
var vec__117114 = cljs.core._nth(c__5518__auto__,i__117112);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117114,(0),null);
var map__117117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117114,(1),null);
var map__117117__$1 = cljs.core.__destructure_map(map__117117);
var m = map__117117__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117117__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117117__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
cljs.core.chunk_append(b__117113,(cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117118 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117118 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117118);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (i__117112,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117119 = p1__116929_SHARP_;
var G__117119__$1 = (((G__117119 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117119));
var G__117119__$2 = (((G__117119__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117119__$1));
if((G__117119__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117119__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(i__117112,binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117081 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117081))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117081], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117081))?null:[daiquiri.interpreter.interpret(attrs117081)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (i__117112,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(i__117112,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117082 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117112,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(i__117112,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117082))?daiquiri.interpreter.element_attributes(attrs117082):null),((cljs.core.map_QMARK_(attrs117082))?null:[daiquiri.interpreter.interpret(attrs117082)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117083 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__117112,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(i__117112,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117114,id,map__117117,map__117117__$1,m,binding,user_binding,c__5518__auto__,size__5519__auto__,b__117113,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117083))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117083], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117083))?null:[daiquiri.interpreter.interpret(attrs117083)]));
})():null))])]):null):null));

var G__117162 = (i__117112 + (1));
i__117112 = G__117162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117113),frontend$components$shortcut$iter__117044_$_iter__117110(cljs.core.chunk_rest(s__117111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117113),null);
}
} else {
var vec__117120 = cljs.core.first(s__117111__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117120,(0),null);
var map__117123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117120,(1),null);
var map__117123__$1 = cljs.core.__destructure_map(map__117123);
var m = map__117123__$1;
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117123__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var user_binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117123__$1,new cljs.core.Keyword(null,"user-binding","user-binding",851596332));
var binding__$1 = frontend.components.shortcut.to_vector(binding);
var user_binding__$1 = (function (){var and__5041__auto__ = user_binding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.shortcut.to_vector(user_binding);
} else {
return and__5041__auto__;
}
})();
var label = frontend.components.shortcut.shortcut_desc_label(id,m);
var custom_QMARK_ = (!((user_binding__$1 == null)));
var disabled_QMARK_ = ((user_binding__$1 === false) || (cljs.core.first(binding__$1) === false));
var unset_QMARK_ = (((!(disabled_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_binding__$1,cljs.core.PersistentVector.EMPTY)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding__$1,cljs.core.PersistentVector.EMPTY)) && ((user_binding__$1 == null)))))));
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (cljs.core.seq(filters) == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Custom","Custom",-1084118283)))?custom_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = ((cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Disabled","Disabled",-1564259627)))?disabled_QMARK_:null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"Unset","Unset",91993016))){
return unset_QMARK_;
} else {
return null;
}
}
}
}
})())?(cljs.core.truth_((function (){var or__5043__auto__ = (!(in_keystroke_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!(disabled_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = (!(unset_QMARK_));
if(and__5041__auto____$1){
var binding_SINGLEQUOTE_ = (function (){var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return binding__$1;
}
})();
var keystroke_SINGLEQUOTE_ = (function (){var G__117124 = frontend.modules.shortcut.utils.safe_parse_string_binding(keystroke);
if((G__117124 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117124);
}
})();
if(cljs.core.sequential_QMARK_(binding_SINGLEQUOTE_)){
return cljs.core.some(((function (binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116929_SHARP_){
var temp__5804__auto____$2 = (function (){var G__117125 = p1__116929_SHARP_;
var G__117125__$1 = (((G__117125 == null))?null:frontend.modules.shortcut.data_helper.mod_key(G__117125));
var G__117125__$2 = (((G__117125__$1 == null))?null:frontend.modules.shortcut.utils.safe_parse_string_binding(G__117125__$1));
if((G__117125__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__117125__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var s = temp__5804__auto____$2;
var or__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,keystroke_SINGLEQUOTE_);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$2 = cljs.core.sequential_QMARK_(s);
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.sequential_QMARK_(keystroke_SINGLEQUOTE_);
if(and__5041__auto____$3){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,keystroke_SINGLEQUOTE_], null)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
}
} else {
return null;
}
});})(binding_SINGLEQUOTE_,keystroke_SINGLEQUOTE_,and__5041__auto____$1,and__5041__auto__,or__5043__auto__,binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding_SINGLEQUOTE_);
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())?daiquiri.core.create_element("li",{'key':cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),'className':"flex items-center justify-between text-sm"},[(function (){var attrs117081 = label;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117081))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["label-wrap"], null)], null),attrs117081], 0))):{'className':"label-wrap"}),((cljs.core.map_QMARK_(attrs117081))?null:[daiquiri.interpreter.interpret(attrs117081)]));
})(),daiquiri.core.create_element("a",{'onClick':(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return (!(disabled_QMARK_));
} else {
return and__5041__auto__;
}
})())?((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (){
return frontend.components.shortcut.open_customize_shortcut_dialog_BANG_(id);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
:null),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = unset_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = user_binding__$1;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return user_binding__$1 === false;
}
}
})())?(function (){var attrs117082 = ((unset_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","unset","keymap/unset",629799647)], 0)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","custom","keymap/custom",1357129701)], 0))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((disabled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0)):cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116930_SHARP_){
if(p1__116930_SHARP_ === false){
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keymap","disabled","keymap/disabled",1622330055)], 0));
} else {
return frontend.modules.shortcut.utils.decorate_binding(p1__116930_SHARP_);
}
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,user_binding__$1))))].join(''));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117082))?daiquiri.interpreter.element_attributes(attrs117082):null),((cljs.core.map_QMARK_(attrs117082))?null:[daiquiri.interpreter.interpret(attrs117082)]));
})():(((!(unset_QMARK_)))?(function (){var attrs117083 = logseq.shui.core.shortcut(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_){
return (function (p1__116931_SHARP_){
return frontend.modules.shortcut.data_helper.binding_for_display(id,p1__116931_SHARP_);
});})(binding__$1,user_binding__$1,label,custom_QMARK_,disabled_QMARK_,unset_QMARK_,vec__117120,id,map__117123,map__117123__$1,m,binding,user_binding,s__117111__$2,temp__5804__auto____$1,attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
,binding__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs117083))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","bg-transparent"], null)], null),attrs117083], 0))):{'className':"flex items-center bg-transparent"}),((cljs.core.map_QMARK_(attrs117083))?null:[daiquiri.interpreter.interpret(attrs117083)]));
})():null))])]):null):null),frontend$components$shortcut$iter__117044_$_iter__117110(cljs.core.rest(s__117111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(attrs117043,folded_QMARK_,vec__117090,c,binding_map,s__117045__$2,temp__5804__auto__,attrs116955,_,___$1,vec__116932,ready_QMARK_,set_ready_BANG_,vec__116935,filters,set_filters_BANG_,vec__116938,keystroke,set_keystroke_BANG_,vec__116941,q,set_q_BANG_,categories_list_map,all_categories,in_filters_QMARK_,in_query_QMARK_,in_keystroke_QMARK_,vec__116944,folded_categories,set_folded_categories_BANG_,matched_list_map,result_list_map,toggle_categories_BANG_))
;
return iter__5520__auto__(binding_map);
})()):null)]));
})(),frontend$components$shortcut$iter__117044(cljs.core.rest(s__117045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(result_list_map);
})())]):null)]));
})()]);
}),null,"frontend.components.shortcut/shortcut-keymap-x");

//# sourceMappingURL=frontend.components.shortcut.js.map
