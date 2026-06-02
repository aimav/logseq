goog.provide('frontend.components.query');
frontend.components.query.built_in_custom_query_QMARK_ = (function frontend$components$query$built_in_custom_query_QMARK_(title){
var queries = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.seq(queries)){
return cljs.core.boolean$(cljs.core.some((function (p1__111098_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__111098_SHARP_,title);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),queries)));
} else {
return null;
}
});
frontend.components.query.query_refresh_button = rum.core.lazy_build(rum.core.build_defc,(function (query_time,p__111099){
var map__111100 = p__111099;
var map__111100__$1 = cljs.core.__destructure_map(map__111100);
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111100__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var full_text_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111100__$1,new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206));
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(cljs.core.truth_(full_text_search_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Full-text search results will not be refreshed automatically."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["This query takes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((query_time | (0))),"ms to finish, it's a bit slow so that auto refresh is disabled."].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click the refresh button instead if you want to see the latest result."], null)], null),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preventOverflow","preventOverflow",276572465),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"boundariesElement","boundariesElement",-501812857),"viewport"], null)], null)], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link.flex","a.fade-link.flex",-1119199551),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down], null),frontend.ui.icon("refresh",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null));
}),null,"frontend.components.query/query-refresh-button");
frontend.components.query.custom_query_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,p__111101,p__111102){
var map__111103 = p__111101;
var map__111103__$1 = cljs.core.__destructure_map(map__111103);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111103__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111103__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108));
var breadcrumb_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111103__$1,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369));
var map__111104 = p__111102;
var map__111104__$1 = cljs.core.__destructure_map(map__111104);
var query_error_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"query-error-atom","query-error-atom",-2138638607));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var table_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"table?","table?",-1064705406));
var dsl_query_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662));
var page_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"page-list?","page-list?",-466504566));
var view_f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"view-f","view-f",314082005));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var group_by_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111104__$1,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448));
var map__111105 = config;
var map__111105__$1 = cljs.core.__destructure_map(map__111105);
var __GT_hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111105__$1,new cljs.core.Keyword(null,"->hiccup","->hiccup",1204690951));
var __GT_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111105__$1,new cljs.core.Keyword(null,"->elem","->elem",-260360654));
var inline_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111105__$1,new cljs.core.Keyword(null,"inline-text","inline-text",910915394));
var page_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111105__$1,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595));
var map_inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111105__$1,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144));
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111105__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var _STAR_query_error = query_error_atom;
var only_blocks_QMARK_ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result));
var blocks_grouped_by_page_QMARK_ = (function (){var and__5041__auto__ = group_by_page_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.seq(result);
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.coll_QMARK_(cljs.core.first(result));
if(and__5041__auto____$2){
var and__5041__auto____$3 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(result));
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(cljs.core.first(result))));
if(cljs.core.truth_(and__5041__auto____$4)){
return true;
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(cljs.core.deref(_STAR_query_error))){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.query",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.deref(_STAR_query_error),new cljs.core.Keyword(null,"line","line",212345235),65], null)),cljs.core.deref(_STAR_query_error));

return daiquiri.core.create_element("div",{'className':"warning my-1"},["Query failed: ",(function (){var attrs111133 = cljs.core.deref(_STAR_query_error).message;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs111133))?daiquiri.interpreter.element_attributes(attrs111133):null),((cljs.core.map_QMARK_(attrs111133))?null:[daiquiri.interpreter.interpret(attrs111133)]));
})()]);
} else {
var attrs111132 = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(result);
if(and__5041__auto__){
return view_f;
} else {
return and__5041__auto__;
}
})())?(function (){var result__$1 = (function (){try{return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic(view_f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
}catch (e111134){var error = e111134;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.query",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-view-failed","custom-view-failed",-1564949541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"line","line",212345235),74], null)),null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Custom view failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
}})();
return frontend.util.hiccup_keywordize(result__$1);
})():(cljs.core.truth_(page_list_QMARK_)?frontend.components.query_table.result_table(config,current_block,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),true], null),map_inline,page_cp,__GT_elem,inline_text,inline):(cljs.core.truth_(table_QMARK_)?frontend.components.query_table.result_table(config,current_block,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),false], null),map_inline,page_cp,__GT_elem,inline_text,inline):(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(result);
if(and__5041__auto__){
var or__5043__auto__ = only_blocks_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return blocks_grouped_by_page_QMARK_;
}
} else {
return and__5041__auto__;
}
})())?(function (){var G__111135 = result;
var G__111136 = (function (){var G__111138 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662),dsl_query_QMARK_,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),(((!((breadcrumb_show_QMARK_ == null))))?breadcrumb_show_QMARK_:true),new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),blocks_grouped_by_page_QMARK_,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true], 0));
if(cljs.core.truth_(children_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__111138,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true);
} else {
return G__111138;
}
})();
var G__111137 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null);
return (__GT_hiccup.cljs$core$IFn$_invoke$arity$3 ? __GT_hiccup.cljs$core$IFn$_invoke$arity$3(G__111135,G__111136,G__111137) : __GT_hiccup.call(null,G__111135,G__111136,G__111137));
})():((cljs.core.seq(result))?(function (){var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5520__auto__ = (function frontend$components$query$iter__111139(s__111140){
return (new cljs.core.LazySeq(null,(function (){
var s__111140__$1 = s__111140;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__111140__$1);
if(temp__5804__auto__){
var s__111140__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__111140__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111140__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111142 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111141 = (0);
while(true){
if((i__111141 < size__5519__auto__)){
var record = cljs.core._nth(c__5518__auto__,i__111141);
cljs.core.chunk_append(b__111142,((cljs.core.map_QMARK_(record))?[frontend.util.pp_str(record),"\n"].join(''):record));

var G__111184 = (i__111141 + (1));
i__111141 = G__111184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111142),frontend$components$query$iter__111139(cljs.core.chunk_rest(s__111140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111142),null);
}
} else {
var record = cljs.core.first(s__111140__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(record))?[frontend.util.pp_str(record),"\n"].join(''):record),frontend$components$query$iter__111139(cljs.core.rest(s__111140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(result);
})());
if(cljs.core.seq(result__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function frontend$components$query$iter__111143(s__111144){
return (new cljs.core.LazySeq(null,(function (){
var s__111144__$1 = s__111144;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__111144__$1);
if(temp__5804__auto__){
var s__111144__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__111144__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111144__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111146 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111145 = (0);
while(true){
if((i__111145 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__111145);
cljs.core.chunk_append(b__111146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)], null));

var G__111185 = (i__111145 + (1));
i__111145 = G__111185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111146),frontend$components$query$iter__111143(cljs.core.chunk_rest(s__111144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111146),null);
}
} else {
var item = cljs.core.first(s__111144__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)], null),frontend$components$query$iter__111143(cljs.core.rest(s__111144__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(result__$1);
})()], null);
} else {
return null;
}
})():((((clojure.string.blank_QMARK_(query)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,"(and)"))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.mt-2.opacity-90","div.text-sm.mt-2.opacity-90",1307580190),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search-item","no-result","search-item/no-result",-1067254379)], 0))], null)
))))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111132))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["custom-query-results"], null)], null),attrs111132], 0))):{'className':"custom-query-results"}),((cljs.core.map_QMARK_(attrs111132))?null:[daiquiri.interpreter.interpret(attrs111132)]));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.query/custom-query-inner");
frontend.components.query.query_title = rum.core.lazy_build(rum.core.build_defc,(function (config,title,p__111147){
var map__111148 = p__111147;
var map__111148__$1 = cljs.core.__destructure_map(map__111148);
var result_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111148__$1,new cljs.core.Keyword(null,"result-count","result-count",-1827800573));
var inline_text = new cljs.core.Keyword(null,"inline-text","inline-text",910915394).cljs$core$IFn$_invoke$arity$1(config);
return daiquiri.core.create_element("div",{'className':"custom-query-title flex justify-between w-full"},[(function (){var attrs111155 = ((cljs.core.vector_QMARK_(title))?title:((typeof title === 'string')?(function (){var G__111156 = config;
var G__111157 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var G__111158 = title;
return (inline_text.cljs$core$IFn$_invoke$arity$3 ? inline_text.cljs$core$IFn$_invoke$arity$3(G__111156,G__111157,G__111158) : inline_text.call(null,G__111156,G__111157,G__111158));
})():title
));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs111155))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title-text"], null)], null),attrs111155], 0))):{'className':"title-text"}),((cljs.core.map_QMARK_(attrs111155))?null:[daiquiri.interpreter.interpret(attrs111155)]));
})(),(cljs.core.truth_(result_count)?daiquiri.core.create_element("span",{'className':"opacity-60 text-sm ml-2 results-count"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_count),(((result_count > (1)))?" results":" result")].join('')]):null)]);
}),null,"frontend.components.query/query-title");
frontend.components.query.custom_query_STAR_ = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,p__111159){
var map__111160 = p__111159;
var map__111160__$1 = cljs.core.__destructure_map(map__111160);
var q = map__111160__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111160__$1,new cljs.core.Keyword(null,"title","title",636505583));
var builder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111160__$1,new cljs.core.Keyword(null,"builder","builder",-2055262005));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111160__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111160__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111160__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var table_view_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111160__$1,new cljs.core.Keyword(null,"table-view?","table-view?",2073887505));
var _STAR_query_error = new cljs.core.Keyword(null,"query-error","query-error",-898801975).cljs$core$IFn$_invoke$arity$1(state);
var built_in_QMARK_ = frontend.components.query.built_in_custom_query_QMARK_(title);
var dsl_query_QMARK_ = new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config);
var current_block_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var current_block = (function (){var G__111161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),current_block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__111161) : frontend.db.entity.call(null,G__111161));
})();
var temp_collapsed_QMARK_ = frontend.state.sub_collapsed(current_block_uuid);
var collapsed_QMARK__SINGLEQUOTE_ = (((!((temp_collapsed_QMARK_ == null))))?temp_collapsed_QMARK_:(function (){var or__5043__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(current_block);
}
})());
var built_in_collapsed_QMARK_ = (function (){var and__5041__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return built_in_QMARK_;
} else {
return and__5041__auto__;
}
})();
var table_QMARK_ = (function (){var or__5043__auto__ = table_view_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-table","query-table",2095143554)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return ((typeof query === 'string') && (clojure.string.ends_with_QMARK_(clojure.string.trim(query),"table")));
}
}
})();
var view_fn = (((view instanceof cljs.core.Keyword))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("query","views","query/views",1105149223),view], null)):view);
var view_f = (function (){var and__5041__auto__ = view_fn;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view_fn], 0)));
} else {
return and__5041__auto__;
}
})();
var dsl_page_query_QMARK_ = (function (){var and__5041__auto__ = dsl_query_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"blocks?","blocks?",58578620).cljs$core$IFn$_invoke$arity$1(frontend.db.query_dsl.parse_query(query)) === false;
} else {
return and__5041__auto__;
}
})();
var full_text_search_QMARK_ = (function (){var and__5041__auto__ = dsl_query_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return (logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(query) instanceof cljs.core.Symbol);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var result = (cljs.core.truth_((function (){var or__5043__auto__ = built_in_collapsed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(collapsed_QMARK__SINGLEQUOTE_);
}
})())?frontend.components.query.result.get_query_result(config,q,_STAR_query_error,current_block_uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",-1064705406),table_QMARK_], null)):null);
var query_time = new cljs.core.Keyword(null,"query-time","query-time",128933024).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(result));
var page_list_QMARK_ = ((cljs.core.seq(result)) && ((!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result)) == null)))));
var opts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"query-error-atom","query-error-atom",-2138638607),_STAR_query_error,new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662),dsl_query_QMARK_,new cljs.core.Keyword(null,"table?","table?",-1064705406),table_QMARK_,new cljs.core.Keyword(null,"view-f","view-f",314082005),view_f,new cljs.core.Keyword(null,"page-list?","page-list?",-466504566),page_list_QMARK_,new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),frontend.components.query.result.get_group_by_page(q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table?","table?",-1064705406),table_QMARK_], null))], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config))){
var attrs111162 = (cljs.core.truth_(dsl_query_QMARK_)?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{query %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0)):"{{query hidden}}");
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs111162))?daiquiri.interpreter.element_attributes(attrs111162):null),((cljs.core.map_QMARK_(attrs111162))?null:[daiquiri.interpreter.interpret(attrs111162)]));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = built_in_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.empty_QMARK_(result);
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
var attrs111163 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111163))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["custom-query"], null)], null),attrs111163], 0))):{'className':"custom-query"}),((cljs.core.map_QMARK_(attrs111163))?[(cljs.core.truth_(built_in_QMARK_)?null:(function (){var attrs111164 = (cljs.core.truth_(dsl_query_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-row","div.flex.flex-1.flex-row",-1228865658),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1","div.ml-1",-809469015),["Live query",(cljs.core.truth_(dsl_page_query_QMARK_)?" for pages":null)].join('')], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"initial"], null)], null),title], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111164))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["th"], null)], null),attrs111164], 0))):{'className':"th"}),((cljs.core.map_QMARK_(attrs111164))?[((((cljs.core.not(dsl_query_QMARK_)) || (cljs.core.not(collapsed_QMARK__SINGLEQUOTE_))))?(function (){var attrs111165 = (((cljs.core.count(result) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.results-count","span.results-count",819772375),(function (){var result_count = ((((cljs.core.not(table_QMARK_)) && (cljs.core.map_QMARK_(result))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),result)):cljs.core.count(result));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_count),(((result_count > (1)))?" results":" result")].join('');
})()], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111165))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center","fade-in"], null)], null),attrs111165], 0))):{'className':"flex flex-row items-center fade-in"}),((cljs.core.map_QMARK_(attrs111165))?[(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111166 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111166))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111166], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111166))?null:[daiquiri.interpreter.interpret(attrs111166)]));
})()]:[daiquiri.interpreter.interpret(attrs111165),(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111167 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111167))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111167], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111167))?null:[daiquiri.interpreter.interpret(attrs111167)]));
})()]));
})():null)]:[daiquiri.interpreter.interpret(attrs111164),((((cljs.core.not(dsl_query_QMARK_)) || (cljs.core.not(collapsed_QMARK__SINGLEQUOTE_))))?(function (){var attrs111168 = (((cljs.core.count(result) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.results-count","span.results-count",819772375),(function (){var result_count = ((((cljs.core.not(table_QMARK_)) && (cljs.core.map_QMARK_(result))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),result)):cljs.core.count(result));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_count),(((result_count > (1)))?" results":" result")].join('');
})()], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111168))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center","fade-in"], null)], null),attrs111168], 0))):{'className':"flex flex-row items-center fade-in"}),((cljs.core.map_QMARK_(attrs111168))?[(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111169 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111169))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111169], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111169))?null:[daiquiri.interpreter.interpret(attrs111169)]));
})()]:[daiquiri.interpreter.interpret(attrs111168),(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111170 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111170))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111170], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111170))?null:[daiquiri.interpreter.interpret(attrs111170)]));
})()]));
})():null)]));
})()),(cljs.core.truth_(dsl_query_QMARK_)?daiquiri.interpreter.interpret(builder):null),(cljs.core.truth_(built_in_QMARK_)?daiquiri.core.create_element("div",{'style':{'marginLeft':(2)}},[frontend.ui.foldable(frontend.components.query.query_title(config,title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-count","result-count",-1827800573),cljs.core.count(result)], null)),(function (){
return frontend.components.query.custom_query_inner(config,q,opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))]):(function (){var attrs111178 = (cljs.core.truth_(collapsed_QMARK__SINGLEQUOTE_)?null:frontend.components.query.custom_query_inner(config,q,opts));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111178))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bd"], null)], null),attrs111178], 0))):{'className':"bd"}),((cljs.core.map_QMARK_(attrs111178))?null:[daiquiri.interpreter.interpret(attrs111178)]));
})())]:[daiquiri.interpreter.interpret(attrs111163),(cljs.core.truth_(built_in_QMARK_)?null:(function (){var attrs111171 = (cljs.core.truth_(dsl_query_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-1.flex-row","div.flex.flex-1.flex-row",-1228865658),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1","div.ml-1",-809469015),["Live query",(cljs.core.truth_(dsl_page_query_QMARK_)?" for pages":null)].join('')], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"initial"], null)], null),title], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111171))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["th"], null)], null),attrs111171], 0))):{'className':"th"}),((cljs.core.map_QMARK_(attrs111171))?[((((cljs.core.not(dsl_query_QMARK_)) || (cljs.core.not(collapsed_QMARK__SINGLEQUOTE_))))?(function (){var attrs111172 = (((cljs.core.count(result) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.results-count","span.results-count",819772375),(function (){var result_count = ((((cljs.core.not(table_QMARK_)) && (cljs.core.map_QMARK_(result))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),result)):cljs.core.count(result));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_count),(((result_count > (1)))?" results":" result")].join('');
})()], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111172))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center","fade-in"], null)], null),attrs111172], 0))):{'className':"flex flex-row items-center fade-in"}),((cljs.core.map_QMARK_(attrs111172))?[(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111173 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111173))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111173], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111173))?null:[daiquiri.interpreter.interpret(attrs111173)]));
})()]:[daiquiri.interpreter.interpret(attrs111172),(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111174 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111174))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111174], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111174))?null:[daiquiri.interpreter.interpret(attrs111174)]));
})()]));
})():null)]:[daiquiri.interpreter.interpret(attrs111171),((((cljs.core.not(dsl_query_QMARK_)) || (cljs.core.not(collapsed_QMARK__SINGLEQUOTE_))))?(function (){var attrs111175 = (((cljs.core.count(result) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.results-count","span.results-count",819772375),(function (){var result_count = ((((cljs.core.not(table_QMARK_)) && (cljs.core.map_QMARK_(result))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),result)):cljs.core.count(result));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_count),(((result_count > (1)))?" results":" result")].join('');
})()], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111175))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center","fade-in"], null)], null),attrs111175], 0))):{'className':"flex flex-row items-center fade-in"}),((cljs.core.map_QMARK_(attrs111175))?[(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111176 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111176))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111176], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111176))?null:[daiquiri.interpreter.interpret(attrs111176)]));
})()]:[daiquiri.interpreter.interpret(attrs111175),(cljs.core.truth_((function (){var and__5041__auto__ = current_block;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(view_f)) && ((((table_view_QMARK_ == null)) && ((!(page_list_QMARK_))))));
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(table_QMARK_)?daiquiri.core.create_element("a",{'title':"Switch to list view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",false);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]):daiquiri.core.create_element("a",{'title':"Switch to table view",'onClick':(function (){
return frontend.handler.editor.property.set_block_property_BANG_(current_block_uuid,"query-table",true);
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))])):null),daiquiri.core.create_element("a",{'title':"Setting properties",'onClick':(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
}),'className':"flex ml-1 fade-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)))]),(function (){var attrs111177 = (cljs.core.truth_((function (){var or__5043__auto__ = full_text_search_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = query_time;
if(cljs.core.truth_(and__5041__auto__)){
return (query_time > (50));
} else {
return and__5041__auto__;
}
}
})())?frontend.components.query.query_refresh_button(query_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-text-search?","full-text-search?",-1837750206),full_text_search_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return frontend.components.query.result.trigger_custom_query_BANG_(config,q,_STAR_query_error);
})], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111177))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs111177], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs111177))?null:[daiquiri.interpreter.interpret(attrs111177)]));
})()]));
})():null)]));
})()),(cljs.core.truth_(dsl_query_QMARK_)?daiquiri.interpreter.interpret(builder):null),(cljs.core.truth_(built_in_QMARK_)?daiquiri.core.create_element("div",{'style':{'marginLeft':(2)}},[frontend.ui.foldable(frontend.components.query.query_title(config,title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-count","result-count",-1827800573),cljs.core.count(result)], null)),(function (){
return frontend.components.query.custom_query_inner(config,q,opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))]):(function (){var attrs111179 = (cljs.core.truth_(collapsed_QMARK__SINGLEQUOTE_)?null:frontend.components.query.custom_query_inner(config,q,opts));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs111179))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bd"], null)], null),attrs111179], 0))):{'className':"bd"}),((cljs.core.map_QMARK_(attrs111179))?null:[daiquiri.interpreter.interpret(attrs111179)]));
})())]));
}
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var vec__111180_111186 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config_111187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111180_111186,(0),null);
var map__111183_111188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111180_111186,(1),null);
var map__111183_111189__$1 = cljs.core.__destructure_map(map__111183_111188);
var title_111190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111183_111189__$1,new cljs.core.Keyword(null,"title","title",636505583));
var collapsed_QMARK__111191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111183_111189__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var built_in_QMARK__111192 = frontend.components.query.built_in_custom_query_QMARK_(title_111190);
var dsl_query_QMARK__111193 = new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config_111187);
var current_block_uuid_111194 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config_111187));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config_111187);
}
})();
if(cljs.core.truth_((function (){var or__5043__auto__ = built_in_QMARK__111192;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return dsl_query_QMARK__111193;
}
})())){
} else {
if(cljs.core.truth_(collapsed_QMARK__111191)){
frontend.handler.editor.collapse_block_BANG_(current_block_uuid_111194);
} else {
}
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"query-error","query-error",-898801975),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
})], null)], null),"frontend.components.query/custom-query*");
frontend.components.query.custom_query = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,q){
return frontend.ui.catch_error(frontend.ui.block_error("Query Error:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(q)], null)),frontend.ui.lazy_visible((function (){
return frontend.components.query.custom_query_STAR_(config,q);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),q], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.query/custom-query");

//# sourceMappingURL=frontend.components.query.js.map
