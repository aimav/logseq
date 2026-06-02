goog.provide('frontend.components.query.builder');
frontend.components.query.builder.page_block_selector = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_find){
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return frontend.util.stop_propagation(e);
}),'className':"filter-item"},[frontend.ui.select(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Blocks",new cljs.core.Keyword(null,"value","value",305978217),"block",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_find),new cljs.core.Keyword(null,"page","page",849072397))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Pages",new cljs.core.Keyword(null,"value","value",305978217),"page",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_find),new cljs.core.Keyword(null,"page","page",849072397))], null)], null),(function (e,v){
frontend.util.stop(e);

return cljs.core.reset_BANG_(_STAR_find,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v));
}))]);
}),null,"frontend.components.query.builder/page-block-selector");
frontend.components.query.builder.select = (function frontend$components$query$builder$select(var_args){
var G__110904 = arguments.length;
switch (G__110904) {
case 2:
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2 = (function (items,on_chosen){
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(items,on_chosen,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3 = (function (items,on_chosen,options){
return frontend.components.select.select(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),on_chosen,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),null], null),options], 0)));
}));

(frontend.components.query.builder.select.cljs$lang$maxFixedArity = 3);

frontend.components.query.builder.append_tree_BANG_ = (function frontend$components$query$builder$append_tree_BANG_(_STAR_tree,p__110906,loc,x){
var map__110907 = p__110906;
var map__110907__$1 = cljs.core.__destructure_map(map__110907);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110907__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
var toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110907__$1,new cljs.core.Keyword(null,"toggle?","toggle?",-664005476),true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (p1__110905_SHARP_){
return frontend.handler.query.builder.append_element(p1__110905_SHARP_,loc,x);
}));

if(cljs.core.truth_(toggle_QMARK_)){
return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
} else {
return null;
}
});
frontend.components.query.builder.search = rum.core.lazy_build(rum.core.build_defcs,(function (state,_on_submit,_on_cancel){
var _STAR_input_value = new cljs.core.Keyword("frontend.components.query.builder","input-value","frontend.components.query.builder/input-value",-953596856).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("input",{'id':"query-builder-search",'autoFocus':true,'placeholder':"Full text search",'aria-label':"Full text search",'onChange':rum.core.mark_sync_update((function (p1__110908_SHARP_){
return cljs.core.reset_BANG_(_STAR_input_value,frontend.util.evalue(p1__110908_SHARP_));
})),'className':"form-input block sm:text-sm sm:leading-5"},[]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","input-value","frontend.components.query.builder/input-value",-953596856)),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 2, [(13),(function (state__$1,e){
var input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword("frontend.components.query.builder","input-value","frontend.components.query.builder/input-value",-953596856));
if(clojure.string.blank_QMARK_(cljs.core.deref(input_value))){
return null;
} else {
frontend.util.stop(e);

var on_submit_110990 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state__$1));
var G__110909_110991 = cljs.core.deref(input_value);
(on_submit_110990.cljs$core$IFn$_invoke$arity$1 ? on_submit_110990.cljs$core$IFn$_invoke$arity$1(G__110909_110991) : on_submit_110990.call(null,G__110909_110991));

return cljs.core.reset_BANG_(input_value,null);
}
}),(27),(function (_state,_e){
var vec__110910 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var _on_submit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110910,(0),null);
var on_cancel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110910,(1),null);
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
})], null));
}))], null),"frontend.components.query.builder/search");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.query !== 'undefined') && (typeof frontend.components.query.builder !== 'undefined') && (typeof frontend.components.query.builder._STAR_shown_datepicker !== 'undefined')){
} else {
frontend.components.query.builder._STAR_shown_datepicker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.query !== 'undefined') && (typeof frontend.components.query.builder !== 'undefined') && (typeof frontend.components.query.builder._STAR_between_dates !== 'undefined')){
} else {
frontend.components.query.builder._STAR_between_dates = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.components.query.builder.datepicker = rum.core.lazy_build(rum.core.build_defcs,(function (state,id,placeholder,p__110913){
var map__110914 = p__110913;
var map__110914__$1 = cljs.core.__destructure_map(map__110914);
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110914__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231));
var _STAR_input_value = new cljs.core.Keyword("frontend.components.query.builder","input-value","frontend.components.query.builder/input-value",-953596856).cljs$core$IFn$_invoke$arity$1(state);
var show_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,rum.core.react(frontend.components.query.builder._STAR_shown_datepicker));
return daiquiri.core.create_element("div",{'className':"ml-4"},[daiquiri.core.create_element("input",{'autoFocus':(function (){var or__5043__auto__ = auto_focus;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})(),'placeholder':placeholder,'aria-label':placeholder,'value':cljs.core.deref(_STAR_input_value),'onClick':(function (){
return cljs.core.reset_BANG_(frontend.components.query.builder._STAR_shown_datepicker,id);
}),'className':"query-builder-datepicker form-input block sm:text-sm sm:leading-5"},[]),((show_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.datepicker(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_e,date){
var journal_date = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date);
cljs.core.reset_BANG_(_STAR_input_value,journal_date);

cljs.core.reset_BANG_(frontend.components.query.builder._STAR_shown_datepicker,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.query.builder._STAR_between_dates,cljs.core.assoc,id,journal_date);
})], null))):null)]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","input-value","frontend.components.query.builder/input-value",-953596856)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))){
cljs.core.reset_BANG_(frontend.components.query.builder._STAR_shown_datepicker,cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));
} else {
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.components.query.builder._STAR_between_dates,cljs.core.dissoc,cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));

return state;
})], null)], null),"frontend.components.query.builder/datepicker");
frontend.components.query.builder.between = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__110915){
var map__110916 = p__110915;
var map__110916__$1 = cljs.core.__destructure_map(map__110916);
var opts = map__110916__$1;
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110916__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110916__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return frontend.util.stop_propagation(e);
}),'className':"between-date"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'className':"font-medium mt-2"},["Between: "]),frontend.components.query.builder.datepicker(new cljs.core.Keyword(null,"start","start",-355208981),"Start date",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true], null)], 0))),frontend.components.query.builder.datepicker(new cljs.core.Keyword(null,"end","end",-268185958),"End date",opts)]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var map__110920 = cljs.core.deref(frontend.components.query.builder._STAR_between_dates);
var map__110920__$1 = cljs.core.__destructure_map(map__110920);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110920__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110920__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_((function (){var and__5041__auto__ = start;
if(cljs.core.truth_(and__5041__auto__)){
return end;
} else {
return and__5041__auto__;
}
})())){
var clause = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),start,end], null);
frontend.components.query.builder.append_tree_BANG_(tree,opts,loc,clause);

return cljs.core.reset_BANG_(frontend.components.query.builder._STAR_between_dates,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
})], 0)))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","start","frontend.components.query.builder/start",997146870)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","end","frontend.components.query.builder/end",-1534550361))], null),"frontend.components.query.builder/between");
frontend.components.query.builder.query_filter_picker = (function frontend$components$query$builder$query_filter_picker(state,_STAR_find,_STAR_tree,loc,clause,opts){
var _STAR_mode = new cljs.core.Keyword("frontend.components.query.builder","mode","frontend.components.query.builder/mode",2020350070).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_property = new cljs.core.Keyword("frontend.components.query.builder","property","frontend.components.query.builder/property",-278387025).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__110921 = cljs.core.deref(_STAR_mode);
switch (G__110921) {
case "namespace":
var items = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_all_namespace_parents(repo));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(items,(function (value){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),value], null));
}));

break;
case "tags":
var items = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,frontend.db.model.get_all_tagged_pages(repo)));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(items,(function (value){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-tags","page-tags",-1009436025),value], null));
}));

break;
case "property":
var properties = frontend.search.get_all_properties();
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(properties,(function (value){
cljs.core.reset_BANG_(_STAR_mode,"property-value");

return cljs.core.reset_BANG_(_STAR_property,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value));
}));

break;
case "property-value":
var values = cljs.core.cons("Select all",frontend.db.model.get_property_values(cljs.core.deref(_STAR_property)));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(values,(function (value){
var x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"Select all"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_find),new cljs.core.Keyword(null,"page","page",849072397)))?new cljs.core.Keyword(null,"page-property","page-property",-417044665):new cljs.core.Keyword(null,"property","property",-1114278232)),cljs.core.deref(_STAR_property)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_find),new cljs.core.Keyword(null,"page","page",849072397)))?new cljs.core.Keyword(null,"page-property","page-property",-417044665):new cljs.core.Keyword(null,"property","property",-1114278232)),cljs.core.deref(_STAR_property),value], null));
cljs.core.reset_BANG_(_STAR_property,null);

return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,x);
}));

break;
case "sample":
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(101)),(function (value){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample","sample",79023601),frontend.util.safe_parse_int(value)], null));
}));

break;
case "task":
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(logseq.db.default$.built_in_markers,(function (value){
if(cljs.core.seq(value)){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"task","task",-1476607993),value)));
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true,new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select","default-select-multiple","select/default-select-multiple",-1340588908),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"on-apply","on-apply",-1897056081),new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425).cljs$core$IFn$_invoke$arity$1(opts)], null));

break;
case "priority":
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(logseq.db.default$.built_in_priorities,(function (value){
if(cljs.core.seq(value)){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"priority","priority",1431093715),value)));
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"multiple-choices?","multiple-choices?",-1858892490),true,new cljs.core.Keyword(null,"selected-choices","selected-choices",1913324317),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select","default-select-multiple","select/default-select-multiple",-1340588908),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"on-apply","on-apply",-1897056081),new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425).cljs$core$IFn$_invoke$arity$1(opts)], null));

break;
case "page":
var pages = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_all_page_original_names(repo));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$2(pages,(function (value){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),value], null));
}));

break;
case "page reference":
var pages = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_all_page_original_names(repo));
return frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(pages,(function (value){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),value], null));
}),cljs.core.PersistentArrayMap.EMPTY);

break;
case "full text search":
return frontend.components.query.builder.search((function (v){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,v);
}),new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425).cljs$core$IFn$_invoke$arity$1(opts));

break;
case "between":
return frontend.components.query.builder.between(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tree","tree",-196312028),_STAR_tree,new cljs.core.Keyword(null,"loc","loc",-584284901),loc,new cljs.core.Keyword(null,"clause","clause",1479668060),clause], null)], 0)));

break;
default:
return null;

}
})()], null);
});
frontend.components.query.builder.picker = rum.core.lazy_build(rum.core.build_defcs,(function (state,_STAR_find,_STAR_tree,loc,clause,opts){
var _STAR_mode = new cljs.core.Keyword("frontend.components.query.builder","mode","frontend.components.query.builder/mode",2020350070).cljs$core$IFn$_invoke$arity$1(state);
var filters = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),cljs.core.deref(_STAR_find)))?frontend.handler.query.builder.page_filters:frontend.handler.query.builder.block_filters);
var filters_and_ops = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(filters,frontend.handler.query.builder.operators);
var operator_QMARK_ = (function (p1__110922_SHARP_){
return cljs.core.contains_QMARK_(frontend.handler.query.builder.operators_set,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__110922_SHARP_));
});
var attrs110925 = (cljs.core.truth_(cljs.core.deref(_STAR_mode))?((operator_QMARK_(cljs.core.deref(_STAR_mode)))?null:frontend.components.query.builder.query_filter_picker(state,_STAR_find,_STAR_tree,loc,clause,opts)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(_STAR_find))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.p-2.justify-between","div.flex.flex-row.items-center.p-2.justify-between",1859527721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2","div.ml-2",1561421207),"Find: "], null),frontend.components.query.builder.page_block_selector(_STAR_find)], null)),(cljs.core.truth_(cljs.core.deref(_STAR_find))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.m-0","hr.m-0",-256784560)], null)),frontend.components.query.builder.select.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,filters_and_ops),(function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"all page tags")){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-page-tags","all-page-tags",-1759251965)], null));
} else {
if(operator_QMARK_(value)){
return frontend.components.query.builder.append_tree_BANG_(_STAR_tree,opts,loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)], null));
} else {
return cljs.core.reset_BANG_(_STAR_mode,value);

}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-default-placeholder","input-default-placeholder",-1040139250),"Add filter/operator"], null))], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110925))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["query-builder-picker"], null)], null),attrs110925], 0))):{'className':"query-builder-picker"}),((cljs.core.map_QMARK_(attrs110925))?null:[daiquiri.interpreter.interpret(attrs110925)]));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.state.clear_selection_BANG_();

return state;
})], null),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","mode","frontend.components.query.builder/mode",2020350070)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","property","frontend.components.query.builder/property",-278387025))], null),"frontend.components.query.builder/picker");
frontend.components.query.builder.add_filter = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_find,_STAR_tree,loc,clause){
return frontend.ui.dropdown((function (p__110930){
var map__110931 = p__110930;
var map__110931__$1 = cljs.core.__destructure_map(map__110931);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110931__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.add-filter","a.flex.add-filter",1236645187),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Add clause",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null);
}),(function (p__110932){
var map__110933 = p__110932;
var map__110933__$1 = cljs.core.__destructure_map(map__110933);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110933__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.components.query.builder.picker(_STAR_find,_STAR_tree,loc,clause,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),toggle_fn], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-class","modal-class",226435127),frontend.util.hiccup__GT_class("origin-top-right.absolute.left-0.mt-2.ml-2.rounded-md.shadow-lg")], null));
}),null,"frontend.components.query.builder/add-filter");
frontend.components.query.builder.dsl_human_output = (function frontend$components$query$builder$dsl_human_output(clause){
var f = cljs.core.first(clause);
if(typeof clause === 'string'){
return ["search: ",clause].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151))){
return logseq.graph_parser.util.page_ref.__GT_page_ref(cljs.core.second(clause));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"page-tags","page-tags",-1009436025))){
if(typeof cljs.core.second(clause) === 'string'){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(clause))].join('');
} else {
if((cljs.core.second(clause) instanceof cljs.core.Symbol)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(clause))].join('');
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.second(clause)))].join('');

}
}
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-property","page-property",-417044665),null,new cljs.core.Keyword(null,"property","property",-1114278232),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return [cljs.core.name(cljs.core.second(clause)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.vector_QMARK_(cljs.core.last(clause))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151),cljs.core.first(cljs.core.last(clause))))))?cljs.core.second(cljs.core.last(clause)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(clause)))?"ALL":cljs.core.last(clause)
)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"between","between",1131099276))){
var start = (((((cljs.core.second(clause) instanceof cljs.core.Keyword)) || ((cljs.core.second(clause) instanceof cljs.core.Symbol))))?cljs.core.name(cljs.core.second(clause)):cljs.core.second(cljs.core.second(clause)));
var end = (((((cljs.core.last(clause) instanceof cljs.core.Keyword)) || ((cljs.core.last(clause) instanceof cljs.core.Symbol))))?cljs.core.name(cljs.core.last(clause)):cljs.core.second(cljs.core.last(clause)));
return ["between: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)," ~ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('');
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"priority","priority",1431093715),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return [cljs.core.name(f),": ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.rest(clause))].join('');
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f))){
return [cljs.core.name(f),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.vector_QMARK_(cljs.core.second(clause)))?cljs.core.second(cljs.core.second(clause)):cljs.core.second(clause)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(clause))){
return [cljs.core.name(f),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(clause))].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.query.builder.__GT_dsl(clause));

}
}
}
}
}
}
}
}
});
frontend.components.query.builder.clause_inner = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__110993__delegate = function (_STAR_tree,loc,clause,p__110934){
var map__110935 = p__110934;
var map__110935__$1 = cljs.core.__destructure_map(map__110935);
var operator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110935__$1,new cljs.core.Keyword(null,"operator?","operator?",68029935));
return frontend.ui.dropdown((function (p__110948){
var map__110949 = p__110948;
var map__110949__$1 = cljs.core.__destructure_map(map__110949);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110949__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
if(cljs.core.truth_(operator_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.text-sm.query-clause","a.flex.text-sm.query-clause",-2059076424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),clause], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center.gap-2.p-1.rounded.border.query-clause-btn","div.flex.flex-row.items-center.gap-2.p-1.rounded.border.query-clause-btn",1101786590),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.query-clause","a.flex.query-clause",26608086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.components.query.builder.dsl_human_output(clause)], null)], null);
}
}),(function (p__110950){
var map__110951 = p__110950;
var map__110951__$1 = cljs.core.__destructure_map(map__110951);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110951__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.flex.flex-col.gap-2","div.p-4.flex.flex-col.gap-2",1074883200),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
var loc_SINGLEQUOTE_ = (cljs.core.truth_(operator_QMARK_)?cljs.core.vec(cljs.core.butlast(loc)):loc);
return frontend.handler.query.builder.remove_element(q,loc_SINGLEQUOTE_);
}));

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
})], null),"Delete"], null),(cljs.core.truth_(operator_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unwrap this operator",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
var loc_SINGLEQUOTE_ = cljs.core.vec(cljs.core.butlast(loc));
return frontend.handler.query.builder.unwrap_operator(q,loc_SINGLEQUOTE_);
}));

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
})], null),"Unwrap"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm","div.font-medium.text-sm",619848115),"Wrap this filter with: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2","div.flex.flex-row.gap-2",-1457313917),(function (){var iter__5520__auto__ = (function frontend$components$query$builder$iter__110952(s__110953){
return (new cljs.core.LazySeq(null,(function (){
var s__110953__$1 = s__110953;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110953__$1);
if(temp__5804__auto__){
var s__110953__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110953__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110953__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110955 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110954 = (0);
while(true){
if((i__110954 < size__5519__auto__)){
var op = cljs.core._nth(c__5518__auto__,i__110954);
cljs.core.chunk_append(b__110955,frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__110954,op,c__5518__auto__,size__5519__auto__,b__110955,s__110953__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,((function (i__110954,op,c__5518__auto__,size__5519__auto__,b__110955,s__110953__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_){
return (function (q){
var loc_SINGLEQUOTE_ = (cljs.core.truth_(operator_QMARK_)?cljs.core.vec(cljs.core.butlast(loc)):loc);
return frontend.handler.query.builder.wrap_operator(q,loc_SINGLEQUOTE_,op);
});})(i__110954,op,c__5518__auto__,size__5519__auto__,b__110955,s__110953__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_))
);

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
});})(i__110954,op,c__5518__auto__,size__5519__auto__,b__110955,s__110953__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_))
], 0)));

var G__110994 = (i__110954 + (1));
i__110954 = G__110994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110955),frontend$components$query$builder$iter__110952(cljs.core.chunk_rest(s__110953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110955),null);
}
} else {
var op = cljs.core.first(s__110953__$2);
return cljs.core.cons(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (op,s__110953__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
var loc_SINGLEQUOTE_ = (cljs.core.truth_(operator_QMARK_)?cljs.core.vec(cljs.core.butlast(loc)):loc);
return frontend.handler.query.builder.wrap_operator(q,loc_SINGLEQUOTE_,op);
}));

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
});})(op,s__110953__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_))
], 0)),frontend$components$query$builder$iter__110952(cljs.core.rest(s__110953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.handler.query.builder.operators);
})()], null),(cljs.core.truth_(operator_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm","div.font-medium.text-sm",619848115),"Replace with: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-2","div.flex.flex-row.gap-2",-1457313917),(function (){var iter__5520__auto__ = (function frontend$components$query$builder$iter__110956(s__110957){
return (new cljs.core.LazySeq(null,(function (){
var s__110957__$1 = s__110957;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110957__$1);
if(temp__5804__auto__){
var s__110957__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110957__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110957__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110959 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110958 = (0);
while(true){
if((i__110958 < size__5519__auto__)){
var op = cljs.core._nth(c__5518__auto__,i__110958);
cljs.core.chunk_append(b__110959,frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__110958,op,c__5518__auto__,size__5519__auto__,b__110959,s__110957__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,((function (i__110958,op,c__5518__auto__,size__5519__auto__,b__110959,s__110957__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_){
return (function (q){
return frontend.handler.query.builder.replace_element(q,loc,op);
});})(i__110958,op,c__5518__auto__,size__5519__auto__,b__110959,s__110957__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_))
);

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
});})(i__110958,op,c__5518__auto__,size__5519__auto__,b__110959,s__110957__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_))
], 0)));

var G__110995 = (i__110958 + (1));
i__110958 = G__110995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110959),frontend$components$query$builder$iter__110956(cljs.core.chunk_rest(s__110957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110959),null);
}
} else {
var op = cljs.core.first(s__110957__$2);
return cljs.core.cons(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(clojure.string.upper_case(cljs.core.name(op)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (op,s__110957__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_tree,(function (q){
return frontend.handler.query.builder.replace_element(q,loc,op);
}));

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
});})(op,s__110957__$2,temp__5804__auto__,map__110951,map__110951__$1,toggle_fn,map__110935,map__110935__$1,operator_QMARK_))
], 0)),frontend$components$query$builder$iter__110956(cljs.core.rest(s__110957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(clause))]),frontend.handler.query.builder.operators));
})()], null)], null):null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-class","modal-class",226435127),frontend.util.hiccup__GT_class("origin-top-right.absolute.left-0.mt-2.ml-2.rounded-md.shadow-lg.w-64")], null));
};
var G__110993 = function (_STAR_tree,loc,clause,var_args){
var p__110934 = null;
if (arguments.length > 3) {
var G__110996__i = 0, G__110996__a = new Array(arguments.length -  3);
while (G__110996__i < G__110996__a.length) {G__110996__a[G__110996__i] = arguments[G__110996__i + 3]; ++G__110996__i;}
  p__110934 = new cljs.core.IndexedSeq(G__110996__a,0,null);
} 
return G__110993__delegate.call(this,_STAR_tree,loc,clause,p__110934);};
G__110993.cljs$lang$maxFixedArity = 3;
G__110993.cljs$lang$applyTo = (function (arglist__110997){
var _STAR_tree = cljs.core.first(arglist__110997);
arglist__110997 = cljs.core.next(arglist__110997);
var loc = cljs.core.first(arglist__110997);
arglist__110997 = cljs.core.next(arglist__110997);
var clause = cljs.core.first(arglist__110997);
var p__110934 = cljs.core.rest(arglist__110997);
return G__110993__delegate(_STAR_tree,loc,clause,p__110934);
});
G__110993.cljs$core$IFn$_invoke$arity$variadic = G__110993__delegate;
return G__110993;
})()
,null,"frontend.components.query.builder/clause-inner");
frontend.components.query.builder.clause = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_tree,_STAR_find,loc,clause){
if(cljs.core.seq(clause)){
var attrs110970 = (function (){var kind = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clause));
if(cljs.core.truth_((frontend.handler.query.builder.operators_set.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.query.builder.operators_set.cljs$core$IFn$_invoke$arity$1(kind) : frontend.handler.query.builder.operators_set.call(null,kind)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.operator-clause.flex.flex-row.items-center","div.operator-clause.flex.flex-row.items-center",-1542341153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-level","data-level",1364295892),cljs.core.count(loc)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),"("], null),(function (){var G__110971 = _STAR_tree;
var G__110972 = _STAR_find;
var G__110973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loc,(0));
var G__110974 = kind;
var G__110975 = cljs.core.rest(clause);
return (frontend.components.query.builder.clauses_group.cljs$core$IFn$_invoke$arity$5 ? frontend.components.query.builder.clauses_group.cljs$core$IFn$_invoke$arity$5(G__110971,G__110972,G__110973,G__110974,G__110975) : frontend.components.query.builder.clauses_group.call(null,G__110971,G__110972,G__110973,G__110974,G__110975));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),")"], null)], null);
} else {
return frontend.components.query.builder.clause_inner(_STAR_tree,loc,clause);
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110970))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["query-builder-clause"], null)], null),attrs110970], 0))):{'className':"query-builder-clause"}),((cljs.core.map_QMARK_(attrs110970))?null:[daiquiri.interpreter.interpret(attrs110970)]));
} else {
return null;
}
}),null,"frontend.components.query.builder/clause");
frontend.components.query.builder.clauses_group = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_tree,_STAR_find,loc,kind,clauses){
var parens_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))) && ((cljs.core.count(clauses) > (1))));
var attrs110977 = ((parens_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clause-bracket","div.clause-bracket",-988173709),"("], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110977))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clauses-group"], null)], null),attrs110977], 0))):{'className':"clauses-group"}),((cljs.core.map_QMARK_(attrs110977))?[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"and","and",-971899817))) && ((cljs.core.count(clauses) <= (1)))))))?null:frontend.components.query.builder.clause_inner(_STAR_tree,loc,clojure.string.upper_case(cljs.core.name(kind)),new cljs.core.Keyword(null,"operator?","operator?",68029935),true)),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
return frontend.components.query.builder.clause(_STAR_tree,_STAR_find,cljs.core.update.cljs$core$IFn$_invoke$arity$3(loc,(cljs.core.count(loc) - (1)),(function (p1__110976_SHARP_){
return ((p1__110976_SHARP_ + i) + (1));
})),item);
}),clauses)),((parens_QMARK_)?daiquiri.core.create_element("div",{'className':"clause-bracket"},[")"]):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))?frontend.components.query.builder.add_filter(_STAR_find,_STAR_tree,loc,cljs.core.PersistentVector.EMPTY):null)]:[daiquiri.interpreter.interpret(attrs110977),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"and","and",-971899817))) && ((cljs.core.count(clauses) <= (1)))))))?null:frontend.components.query.builder.clause_inner(_STAR_tree,loc,clojure.string.upper_case(cljs.core.name(kind)),new cljs.core.Keyword(null,"operator?","operator?",68029935),true)),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
return frontend.components.query.builder.clause(_STAR_tree,_STAR_find,cljs.core.update.cljs$core$IFn$_invoke$arity$3(loc,(cljs.core.count(loc) - (1)),(function (p1__110976_SHARP_){
return ((p1__110976_SHARP_ + i) + (1));
})),item);
}),clauses)),((parens_QMARK_)?daiquiri.core.create_element("div",{'className':"clause-bracket"},[")"]):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))?frontend.components.query.builder.add_filter(_STAR_find,_STAR_tree,loc,cljs.core.PersistentVector.EMPTY):null)]));
}),null,"frontend.components.query.builder/clauses-group");
frontend.components.query.builder.clause_tree = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_tree,_STAR_find){
var tree = rum.core.react(_STAR_tree);
var kind = (function (){var G__110986 = cljs.core.first(tree);
var fexpr__110985 = cljs.core.set(frontend.handler.query.builder.operators);
return (fexpr__110985.cljs$core$IFn$_invoke$arity$1 ? fexpr__110985.cljs$core$IFn$_invoke$arity$1(G__110986) : fexpr__110985.call(null,G__110986));
})();
var vec__110982 = (cljs.core.truth_(kind)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,cljs.core.rest(tree)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(tree)], null)], null));
var kind_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110982,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110982,(1),null);
return frontend.components.query.builder.clauses_group(_STAR_tree,_STAR_find,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),kind_SINGLEQUOTE_,clauses);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.query.builder/clause-tree");
frontend.components.query.builder.builder = rum.core.lazy_build(rum.core.build_defcs,(function (state,_query,_config){
var _STAR_find = new cljs.core.Keyword("frontend.components.query.builder","find","frontend.components.query.builder/find",-1608822873).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_tree = new cljs.core.Keyword("frontend.components.query.builder","tree","frontend.components.query.builder/tree",1053242395).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'className':"cp__query-builder"},[(function (){var attrs110987 = ((((cljs.core.seq(cljs.core.deref(_STAR_tree))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_tree),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null)))))?frontend.components.query.builder.clause_tree(_STAR_tree,_STAR_find):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110987))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__query-builder-filter"], null)], null),attrs110987], 0))):{'className':"cp__query-builder-filter"}),((cljs.core.map_QMARK_(attrs110987))?[frontend.components.query.builder.add_filter(_STAR_find,_STAR_tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.PersistentVector.EMPTY)]:[daiquiri.interpreter.interpret(attrs110987),frontend.components.query.builder.add_filter(_STAR_find,_STAR_tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.PersistentVector.EMPTY)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query.builder","find","frontend.components.query.builder/find",-1608822873)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var q_str = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var query = logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$2(frontend.db.query_dsl.custom_readers,frontend.db.query_dsl.pre_transform_query(q_str));
var query_SINGLEQUOTE_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),cljs.core.first(query)))?query:(cljs.core.truth_(query)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),query], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null)
));
var tree = frontend.handler.query.builder.from_dsl(query_SINGLEQUOTE_);
var _STAR_tree = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tree);
var config = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.add_watch(_STAR_tree,new cljs.core.Keyword(null,"updated","updated",-1627192056),(function (_,___$1,_old,_new){
var temp__5804__auto__ = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var q = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.deref(_STAR_tree)))?"":(function (){var result = frontend.handler.query.builder.__GT_dsl(cljs.core.deref(_STAR_tree));
if(typeof result === 'string'){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\"%s\"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
}
})());
var repo = frontend.state.get_current_repo();
var block__$1 = (function (){var G__110988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110988) : frontend.db.pull.call(null,G__110988));
})();
if(cljs.core.truth_(block__$1)){
var content = clojure.string.replace(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1),/\{\{query[^}]+\}\}/,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{query %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0)));
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1),content);
} else {
return null;
}
} else {
return null;
}
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.query.builder","tree","frontend.components.query.builder/tree",1053242395),_STAR_tree);
}),new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var q_str = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var parsed_query = frontend.db.query_dsl.parse_query(q_str);
var blocks_query_QMARK_ = new cljs.core.Keyword(null,"blocks?","blocks?",58578620).cljs$core$IFn$_invoke$arity$1(parsed_query);
var find_mode = (cljs.core.truth_(blocks_query_QMARK_)?new cljs.core.Keyword(null,"block","block",664686210):((blocks_query_QMARK_ === false)?new cljs.core.Keyword(null,"page","page",849072397):null
));
if(cljs.core.truth_(find_mode)){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.query.builder","find","frontend.components.query.builder/find",-1608822873).cljs$core$IFn$_invoke$arity$1(state),find_mode);
} else {
}

return state;
})], null)], null),"frontend.components.query.builder/builder");

//# sourceMappingURL=frontend.components.query.builder.js.map
