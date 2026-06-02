goog.provide('frontend.components.select');
frontend.components.select.render_item = rum.core.lazy_build(rum.core.build_defc,(function (result,chosen_QMARK_,multiple_choices_QMARK_,_STAR_selected_choices){
var value = ((cljs.core.map_QMARK_(result))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result):result);
var selected_choices = rum.core.react(_STAR_selected_choices);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","w-full",(cljs.core.truth_(chosen_QMARK_)?"chosen":null)], null))},[(function (){var attrs110834 = (cljs.core.truth_(multiple_choices_QMARK_)?frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),(selected_choices.cljs$core$IFn$_invoke$arity$1 ? selected_choices.cljs$core$IFn$_invoke$arity$1(value) : selected_choices.call(null,value)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.preventDefault();
})], null)):null);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110834))?daiquiri.interpreter.element_attributes(attrs110834):null),((cljs.core.map_QMARK_(attrs110834))?[daiquiri.interpreter.interpret(value)]:[daiquiri.interpreter.interpret(attrs110834),daiquiri.interpreter.interpret(value)]));
})(),(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(result);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result);
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",{'className':"tip flex"},[(function (){var attrs110835 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result);
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs110835))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-20","bg-transparent"], null)], null),attrs110835], 0))):{'className':"opacity-20 bg-transparent"}),((cljs.core.map_QMARK_(attrs110835))?null:[daiquiri.interpreter.interpret(attrs110835)]));
})()]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.select/render-item");
frontend.components.select.select = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__110859){
var map__110860 = p__110859;
var map__110860__$1 = cljs.core.__destructure_map(map__110860);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var empty_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110860__$1,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(function (_t){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
var prompt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110860__$1,new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select","default-prompt","select/default-prompt",-657561626));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var tap__STAR_input_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"tap-*input-val","tap-*input-val",1531539652));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110860__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var item_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"item-cp","item-cp",294728683));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110860__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"value","value",305978217));
var input_default_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250));
var input_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135));
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327));
var host_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"host-opts","host-opts",-933691505));
var on_apply = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"on-apply","on-apply",-1897056081));
var close_modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110860__$1,new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),true);
var multiple_choices_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490));
var _selected_choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110860__$1,new cljs.core.Keyword(null,"_selected-choices","_selected-choices",-1014664873));
var input = new cljs.core.Keyword("frontend.components.select","input","frontend.components.select/input",-1394442831).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_selected_choices = new cljs.core.Keyword("frontend.components.select","selected-choices","frontend.components.select/selected-choices",-195451595).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.fn_QMARK_(tap__STAR_input_val)){
(tap__STAR_input_val.cljs$core$IFn$_invoke$arity$1 ? tap__STAR_input_val.cljs$core$IFn$_invoke$arity$1(input) : tap__STAR_input_val.call(null,input));
} else {
}

var attrs110836 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__select-main"], null),host_opts], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110836))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__select"], null)], null),attrs110836], 0))):{'className':"cp__select"}),((cljs.core.map_QMARK_(attrs110836))?[daiquiri.core.create_element("div",{'className':"input-wrap"},[(function (){var attrs110861 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5043__auto__ = input_default_placeholder;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prompt_key], 0));
}
})(),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = frontend.util.evalue(e);
cljs.core.reset_BANG_(input,v);

var and__5041__auto__ = cljs.core.fn_QMARK_(on_input);
if(and__5041__auto__){
return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(v) : on_input.call(null,v));
} else {
return and__5041__auto__;
}
})], null),input_opts], 0));
return daiquiri.core.create_element("input",((cljs.core.map_QMARK_(attrs110861))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__select-input","w-full"], null)], null),attrs110861], 0))):{'className':"cp__select-input w-full"}),((cljs.core.map_QMARK_(attrs110861))?null:[daiquiri.interpreter.interpret(attrs110861)]));
})()]),daiquiri.core.create_element("div",{'className':"item-results-wrap"},[frontend.ui.auto_complete((function (){var G__110867 = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(items,cljs.core.deref(input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),extract_fn], 0));
if(cljs.core.fn_QMARK_(transform_fn)){
var G__110868 = G__110867;
var G__110869 = cljs.core.deref(input);
return (transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(G__110868,G__110869) : transform_fn.call(null,G__110868,G__110869));
} else {
return G__110867;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (){var or__5043__auto__ = item_cp;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (function (result,chosen_QMARK_){
return frontend.components.select.render_item(result,chosen_QMARK_,multiple_choices_QMARK_,_STAR_selected_choices);
});
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"cp__select-results",new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (x){
cljs.core.reset_BANG_(input,"");

if(cljs.core.truth_(multiple_choices_QMARK_)){
if(cljs.core.truth_((function (){var fexpr__110870 = cljs.core.deref(_STAR_selected_choices);
return (fexpr__110870.cljs$core$IFn$_invoke$arity$1 ? fexpr__110870.cljs$core$IFn$_invoke$arity$1(x) : fexpr__110870.call(null,x));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_selected_choices,cljs.core.disj,x);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_selected_choices,cljs.core.conj,x);
}
} else {
if(cljs.core.truth_(close_modal_QMARK_)){
frontend.state.close_modal_BANG_();
} else {
}

if(cljs.core.truth_(on_chosen)){
var G__110871 = (cljs.core.truth_(multiple_choices_QMARK_)?cljs.core.deref(_STAR_selected_choices):x);
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(G__110871) : on_chosen.call(null,G__110871));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(empty_placeholder.cljs$core$IFn$_invoke$arity$1 ? empty_placeholder.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t) : empty_placeholder.call(null,frontend.context.i18n.t))], null))]),(cljs.core.truth_(multiple_choices_QMARK_)?(function (){var attrs110847 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Apply updates",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_apply], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110847))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-4"], null)], null),attrs110847], 0))):{'className':"p-4"}),((cljs.core.map_QMARK_(attrs110847))?null:[daiquiri.interpreter.interpret(attrs110847)]));
})():null)]:[daiquiri.interpreter.interpret(attrs110836),daiquiri.core.create_element("div",{'className':"input-wrap"},[(function (){var attrs110872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5043__auto__ = input_default_placeholder;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prompt_key], 0));
}
})(),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = frontend.util.evalue(e);
cljs.core.reset_BANG_(input,v);

var and__5041__auto__ = cljs.core.fn_QMARK_(on_input);
if(and__5041__auto__){
return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(v) : on_input.call(null,v));
} else {
return and__5041__auto__;
}
})], null),input_opts], 0));
return daiquiri.core.create_element("input",((cljs.core.map_QMARK_(attrs110872))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__select-input","w-full"], null)], null),attrs110872], 0))):{'className':"cp__select-input w-full"}),((cljs.core.map_QMARK_(attrs110872))?null:[daiquiri.interpreter.interpret(attrs110872)]));
})()]),daiquiri.core.create_element("div",{'className':"item-results-wrap"},[frontend.ui.auto_complete((function (){var G__110878 = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(items,cljs.core.deref(input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),extract_fn], 0));
if(cljs.core.fn_QMARK_(transform_fn)){
var G__110879 = G__110878;
var G__110880 = cljs.core.deref(input);
return (transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(G__110879,G__110880) : transform_fn.call(null,G__110879,G__110880));
} else {
return G__110878;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (){var or__5043__auto__ = item_cp;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (function (result,chosen_QMARK_){
return frontend.components.select.render_item(result,chosen_QMARK_,multiple_choices_QMARK_,_STAR_selected_choices);
});
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"cp__select-results",new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (x){
cljs.core.reset_BANG_(input,"");

if(cljs.core.truth_(multiple_choices_QMARK_)){
if(cljs.core.truth_((function (){var fexpr__110881 = cljs.core.deref(_STAR_selected_choices);
return (fexpr__110881.cljs$core$IFn$_invoke$arity$1 ? fexpr__110881.cljs$core$IFn$_invoke$arity$1(x) : fexpr__110881.call(null,x));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_selected_choices,cljs.core.disj,x);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_selected_choices,cljs.core.conj,x);
}
} else {
if(cljs.core.truth_(close_modal_QMARK_)){
frontend.state.close_modal_BANG_();
} else {
}

if(cljs.core.truth_(on_chosen)){
var G__110882 = (cljs.core.truth_(multiple_choices_QMARK_)?cljs.core.deref(_STAR_selected_choices):x);
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(G__110882) : on_chosen.call(null,G__110882));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(empty_placeholder.cljs$core$IFn$_invoke$arity$1 ? empty_placeholder.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t) : empty_placeholder.call(null,frontend.context.i18n.t))], null))]),(cljs.core.truth_(multiple_choices_QMARK_)?(function (){var attrs110858 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Apply updates",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_apply], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110858))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-4"], null)], null),attrs110858], 0))):{'className':"p-4"}),((cljs.core.map_QMARK_(attrs110858))?null:[daiquiri.interpreter.interpret(attrs110858)]));
})():null)]));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.modules.shortcut.core.disable_all_shortcuts,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.select","input","frontend.components.select/input",-1394442831)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.select","selected-choices","frontend.components.select/selected-choices",-195451595),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.set(new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open-select","ui/open-select",687174842)], null),null);

var map__110883_110897 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__110883_110898__$1 = cljs.core.__destructure_map(map__110883_110897);
var multiple_choices_QMARK__110899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110883_110898__$1,new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490));
var on_chosen_110900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110883_110898__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
if(cljs.core.truth_((function (){var and__5041__auto__ = multiple_choices_QMARK__110899;
if(cljs.core.truth_(and__5041__auto__)){
return on_chosen_110900;
} else {
return and__5041__auto__;
}
})())){
var G__110884_110901 = cljs.core.deref(new cljs.core.Keyword("frontend.components.select","selected-choices","frontend.components.select/selected-choices",-195451595).cljs$core$IFn$_invoke$arity$1(state));
(on_chosen_110900.cljs$core$IFn$_invoke$arity$1 ? on_chosen_110900.cljs$core$IFn$_invoke$arity$1(G__110884_110901) : on_chosen_110900.call(null,G__110884_110901));
} else {
}

return state;
})], null)], null),"frontend.components.select/select");
/**
 * Config that supports multiple types (uses) of this component. To add a new
 *   type, add a key with the value being a map with the following keys:
 * 
 *   * :items-fn - fn that returns items with a :value key that are used for the
 *  fuzzy search and selection. Items can have an optional :id and are displayed
 *  lightly for a given item.
 *   * :on-chosen - fn that is given item when it is chosen.
 *   * :empty-placeholder (optional) - fn that returns hiccup html to render if no
 *  matched graphs found.
 *   * :prompt-key (optional) - dictionary keyword that prompts when components is
 *  first open. Defaults to :select/default-prompt.
 */
frontend.components.select.select_config = (function frontend$components$select$select_config(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-open","graph-open",-328022081),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__110887){
var map__110888 = p__110887;
var map__110888__$1 = cljs.core.__destructure_map(map__110888);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110888__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(url),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__110889){
var map__110890 = p__110889;
var map__110890__$1 = cljs.core.__destructure_map(map__110890);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110890__$1,new cljs.core.Keyword(null,"url","url",276297046));
return ((frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,frontend.state.get_current_repo())));
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select.graph","prompt","select.graph/prompt",640552877),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__110885_SHARP_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(p1__110885_SHARP_)], null));
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2","div.px-4.py-2",441645500),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("select.graph","empty-placeholder-description","select.graph/empty-placeholder-description",-1915654845)) : t.call(null,new cljs.core.Keyword("select.graph","empty-placeholder-description","select.graph/empty-placeholder-description",-1915654845)))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("select.graph","add-graph","select.graph/add-graph",-167280293)) : t.call(null,new cljs.core.Keyword("select.graph","add-graph","select.graph/add-graph",-167280293))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repo-add","repo-add",458734484)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.close_modal_BANG_], 0))], null);
})], null),new cljs.core.Keyword(null,"graph-remove","graph-remove",-143683669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__110891){
var map__110892 = p__110891;
var map__110892__$1 = cljs.core.__destructure_map(map__110892);
var original_graph = map__110892__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110892__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(url),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url,new cljs.core.Keyword(null,"original-graph","original-graph",1959751157),original_graph], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__110893){
var map__110894 = p__110893;
var map__110894__$1 = cljs.core.__destructure_map(map__110894);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110894__$1,new cljs.core.Keyword(null,"url","url",276297046));
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url);
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__110886_SHARP_){
return frontend.handler.repo.remove_repo_BANG_(new cljs.core.Keyword(null,"original-graph","original-graph",1959751157).cljs$core$IFn$_invoke$arity$1(p1__110886_SHARP_));
})], null)], null);
});
frontend.components.select.select_modal = rum.core.lazy_build(rum.core.build_defc,(function (){
var temp__5804__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open-select","ui/open-select",687174842)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var select_type = temp__5804__auto__;
var select_type_config_110902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.select.select_config(),select_type);
frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.select.select(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(select_type_config_110902,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683)], null)),new cljs.core.Keyword(null,"items","items",1031954938),(function (){var fexpr__110896 = new cljs.core.Keyword(null,"items-fn","items-fn",1580041737).cljs$core$IFn$_invoke$arity$1(select_type_config_110902);
return (fexpr__110896.cljs$core$IFn$_invoke$arity$0 ? fexpr__110896.cljs$core$IFn$_invoke$arity$0() : fexpr__110896.call(null));
})()));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false], null));

return null;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.select/select-modal");

//# sourceMappingURL=frontend.components.select.js.map
