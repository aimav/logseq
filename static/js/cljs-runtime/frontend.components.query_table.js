goog.provide('frontend.components.query_table');
frontend.components.query_table.attach_clock_property = (function frontend$components$query_table$attach_clock_property(result){
var ks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null);
var result__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var b__$1 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.assoc_in(b__$1,ks,(function (){var or__5043__auto__ = frontend.util.clock.clock_summary(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(b__$1),false);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})());
}),result);
if(cljs.core.every_QMARK_((function (p1__111010_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__111010_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__111011_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__111011_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_column,item,p__111012){
var map__111013 = p__111012;
var map__111013__$1 = cljs.core.__destructure_map(map__111013);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111013__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
var G__111014 = sort_by_column;
var G__111014__$1 = (((G__111014 instanceof cljs.core.Keyword))?G__111014.fqn:null);
switch (G__111014__$1) {
case "created-at":
return new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);

break;
case "updated-at":
return new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);

break;
case "block":
return new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);

break;
case "page":
if(cljs.core.truth_(page_QMARK_)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null));
}

break;
default:
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),sort_by_column], null));

}
});
/**
 * Use locale specific comparison for strings and general comparison for others.
 */
frontend.components.query_table.locale_compare = (function frontend$components$query_table$locale_compare(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return (x < y);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x).localeCompare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),frontend.state.sub(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)),({"numeric": true}));
}
});
frontend.components.query_table.sort_result = (function frontend$components$query_table$sort_result(result,p__111017){
var map__111018 = p__111017;
var map__111018__$1 = cljs.core.__destructure_map(map__111018);
var sort_by_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111018__$1,new cljs.core.Keyword(null,"sort-by-column","sort-by-column",-1857171302));
var sort_desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111018__$1,new cljs.core.Keyword(null,"sort-desc?","sort-desc?",-1338011224));
var sort_nlp_date_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111018__$1,new cljs.core.Keyword(null,"sort-nlp-date?","sort-nlp-date?",-929578317));
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111018__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
if((!((sort_by_column == null)))){
var comp_fn = (cljs.core.truth_(sort_desc_QMARK_)?(function (p1__111016_SHARP_,p2__111015_SHARP_){
return frontend.components.query_table.locale_compare(p2__111015_SHARP_,p1__111016_SHARP_);
}):frontend.components.query_table.locale_compare);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (item){
return frontend.format.block.normalize_block(frontend.components.query_table.sort_by_fn(sort_by_column,item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_], null)),sort_nlp_date_QMARK_);
}),comp_fn,result);
} else {
return result;
}
});
/**
 * Return current sort direction and column being sorted, respectively
 *   :sort-desc? and :sort-by-column. :sort-by-column is nil if no sorting is to be
 *   done
 */
frontend.components.query_table.get_sort_state = (function frontend$components$query_table$get_sort_state(current_block){
var p_desc_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008)], null));
var desc_QMARK_ = (((!((p_desc_QMARK_ == null))))?p_desc_QMARK_:true);
var p_sort_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033)], null)));
var nlp_date_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("logseq.query","nlp-date","logseq.query/nlp-date",-145078221)], null));
var sort_by_column = (function (){var or__5043__auto__ = (function (){var G__111019 = p_sort_by;
if((G__111019 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__111019);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(frontend.db.query_dsl.query_contains_filter_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(current_block),"sort-by")){
return null;
} else {
return new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336);
}
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-desc?","sort-desc?",-1338011224),desc_QMARK_,new cljs.core.Keyword(null,"sort-by-column","sort-by-column",-1857171302),sort_by_column,new cljs.core.Keyword(null,"sort-nlp-date?","sort-nlp-date?",-929578317),nlp_date_QMARK_], null);
});
frontend.components.query_table.sortable_title = rum.core.lazy_build(rum.core.build_defc,(function (title,column,p__111020,block_id){
var map__111021 = p__111020;
var map__111021__$1 = cljs.core.__destructure_map(map__111021);
var sort_by_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111021__$1,new cljs.core.Keyword(null,"sort-by-column","sort-by-column",-1857171302));
var sort_desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111021__$1,new cljs.core.Keyword(null,"sort-desc?","sort-desc?",-1338011224));
return daiquiri.core.create_element("th",{'className':"whitespace-nowrap"},[daiquiri.core.create_element("a",{'onClick':(function (){
frontend.handler.editor.property.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),cljs.core.name(column));

return frontend.handler.editor.property.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),cljs.core.not(sort_desc_QMARK_));
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs111022 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs111022))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs111022], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs111022))?null:[daiquiri.interpreter.interpret(attrs111022)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_by_column,column))?(function (){var attrs111023 = (cljs.core.truth_(sort_desc_QMARK_)?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs111023))?daiquiri.interpreter.element_attributes(attrs111023):null),((cljs.core.map_QMARK_(attrs111023))?null:[daiquiri.interpreter.interpret(attrs111023)]));
})():null)])])]);
}),null,"frontend.components.query-table/sortable-title");
/**
 * Get keys for a query table result, which are the columns in a table
 */
frontend.components.query_table.get_keys = (function frontend$components$query_table$get_keys(result,page_QMARK_){
var keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template","template",-702405684),null], null), null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((frontend.util.property.built_in_properties.cljs$core$IFn$_invoke$arity$0 ? frontend.util.property.built_in_properties.cljs$core$IFn$_invoke$arity$0() : frontend.util.property.built_in_properties.call(null)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties","block/properties",708347145),result)], 0)))));
var keys__$1 = (cljs.core.truth_(page_QMARK_)?cljs.core.cons(new cljs.core.Keyword(null,"page","page",849072397),keys):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"page","page",849072397)),keys));
var keys__$2 = (cljs.core.truth_(page_QMARK_)?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keys__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336)], null))):keys__$1);
return keys__$2;
});
frontend.components.query_table.get_columns = (function frontend$components$query_table$get_columns(current_block,result,p__111024){
var map__111025 = p__111024;
var map__111025__$1 = cljs.core.__destructure_map(map__111025);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111025__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
var query_properties = (function (){var G__111026 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__111026 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__111026,"Parsing query properties failed");
}
})();
var query_properties__$1 = (cljs.core.truth_(page_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),null], null), null),query_properties):query_properties);
var columns = ((cljs.core.seq(query_properties__$1))?query_properties__$1:frontend.components.query_table.get_keys(result,page_QMARK_));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(columns);
});
/**
 * Builds a column's tuple value for a query table given a row, column and
 *   options
 */
frontend.components.query_table.build_column_value = (function frontend$components$query_table$build_column_value(row,column,p__111027){
var map__111028 = p__111027;
var map__111028__$1 = cljs.core.__destructure_map(map__111028);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111028__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
var __GT_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111028__$1,new cljs.core.Keyword(null,"->elem","->elem",-260360654));
var map_inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111028__$1,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144));
var comma_separated_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111028__$1,new cljs.core.Keyword(null,"comma-separated-property?","comma-separated-property?",-580287681));
var G__111029 = column;
var G__111029__$1 = (((G__111029 instanceof cljs.core.Keyword))?G__111029.fqn:null);
switch (G__111029__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(cljs.core.truth_(page_QMARK_)?(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(row);
}
})():(function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null));
}
})())], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(row);
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row);
var map__111030 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(row),content);
var map__111030__$1 = cljs.core.__destructure_map(map__111030);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111030__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__111031 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__111032 = (function (){var G__111033 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
var G__111034 = title;
return (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(G__111033,G__111034) : map_inline.call(null,G__111033,G__111034));
})();
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__111031,G__111032) : __GT_elem.call(null,G__111031,G__111032));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5804__auto__ = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(temp__5804__auto__)){
var created_at = temp__5804__auto__;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5804__auto__ = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(temp__5804__auto__)){
var updated_at = temp__5804__auto__;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(cljs.core.truth_(comma_separated_property_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),column], null)):(function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),column], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),column], null));
}
})())], null);

}
});
frontend.components.query_table.build_column_text = (function frontend$components$query_table$build_column_text(row,column){
var G__111035 = column;
var G__111035__$1 = (((G__111035 instanceof cljs.core.Keyword))?G__111035.fqn:null);
switch (G__111035__$1) {
case "page":
var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","content","block/content",-161885195)], null));
}
}

break;
case "block":
var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","content","block/content",-161885195)], null));
}

break;
default:
var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),column], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),column], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),column)], null));
}
}

}
});
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__111038,map_inline,page_cp,__GT_elem,inline_text,inline){
var map__111039 = p__111038;
var map__111039__$1 = cljs.core.__destructure_map(map__111039);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111039__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
if(cljs.core.truth_(current_block)){
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424));
var _STAR_mouse_down_QMARK_ = new cljs.core.Keyword("frontend.components.query-table","mouse-down?","frontend.components.query-table/mouse-down?",-262290485).cljs$core$IFn$_invoke$arity$1(state);
var result_SINGLEQUOTE_ = (cljs.core.truth_(page_QMARK_)?result:frontend.components.query_table.attach_clock_property(result));
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__111036_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__111036_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result_SINGLEQUOTE_)));
var columns = frontend.components.query_table.get_columns(current_block,result_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_], null));
var sort_state = frontend.components.query_table.get_sort_state(current_block);
var sort_result = frontend.components.query_table.sort_result(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sort_state,new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_));
var property_separated_by_commas_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.text.separated_by_commas_QMARK_,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var table_version = frontend.shui.get_shui_component_version(new cljs.core.Keyword(null,"table","table",-564943036),config);
var result_as_text = (function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__111040(s__111041){
return (new cljs.core.LazySeq(null,(function (){
var s__111041__$1 = s__111041;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__111041__$1);
if(temp__5804__auto__){
var s__111041__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__111041__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111041__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111043 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111042 = (0);
while(true){
if((i__111042 < size__5519__auto__)){
var row = cljs.core._nth(c__5518__auto__,i__111042);
cljs.core.chunk_append(b__111043,(function (){var iter__5520__auto__ = ((function (i__111042,row,c__5518__auto__,size__5519__auto__,b__111043,s__111041__$2,temp__5804__auto__,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,map__111039,map__111039__$1,page_QMARK_){
return (function frontend$components$query_table$iter__111040_$_iter__111044(s__111045){
return (new cljs.core.LazySeq(null,((function (i__111042,row,c__5518__auto__,size__5519__auto__,b__111043,s__111041__$2,temp__5804__auto__,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,map__111039,map__111039__$1,page_QMARK_){
return (function (){
var s__111045__$1 = s__111045;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__111045__$1);
if(temp__5804__auto____$1){
var s__111045__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__111045__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__111045__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__111047 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__111046 = (0);
while(true){
if((i__111046 < size__5519__auto____$1)){
var column = cljs.core._nth(c__5518__auto____$1,i__111046);
cljs.core.chunk_append(b__111047,frontend.components.query_table.build_column_text(row,column));

var G__111077 = (i__111046 + (1));
i__111046 = G__111077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111047),frontend$components$query_table$iter__111040_$_iter__111044(cljs.core.chunk_rest(s__111045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111047),null);
}
} else {
var column = cljs.core.first(s__111045__$2);
return cljs.core.cons(frontend.components.query_table.build_column_text(row,column),frontend$components$query_table$iter__111040_$_iter__111044(cljs.core.rest(s__111045__$2)));
}
} else {
return null;
}
break;
}
});})(i__111042,row,c__5518__auto__,size__5519__auto__,b__111043,s__111041__$2,temp__5804__auto__,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,map__111039,map__111039__$1,page_QMARK_))
,null,null));
});})(i__111042,row,c__5518__auto__,size__5519__auto__,b__111043,s__111041__$2,temp__5804__auto__,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,map__111039,map__111039__$1,page_QMARK_))
;
return iter__5520__auto__(columns);
})());

var G__111078 = (i__111042 + (1));
i__111042 = G__111078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111043),frontend$components$query_table$iter__111040(cljs.core.chunk_rest(s__111041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111043),null);
}
} else {
var row = cljs.core.first(s__111041__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (row,s__111041__$2,temp__5804__auto__,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,map__111039,map__111039__$1,page_QMARK_){
return (function frontend$components$query_table$iter__111040_$_iter__111048(s__111049){
return (new cljs.core.LazySeq(null,(function (){
var s__111049__$1 = s__111049;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__111049__$1);
if(temp__5804__auto____$1){
var s__111049__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__111049__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111049__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111051 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111050 = (0);
while(true){
if((i__111050 < size__5519__auto__)){
var column = cljs.core._nth(c__5518__auto__,i__111050);
cljs.core.chunk_append(b__111051,frontend.components.query_table.build_column_text(row,column));

var G__111079 = (i__111050 + (1));
i__111050 = G__111079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111051),frontend$components$query_table$iter__111040_$_iter__111048(cljs.core.chunk_rest(s__111049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111051),null);
}
} else {
var column = cljs.core.first(s__111049__$2);
return cljs.core.cons(frontend.components.query_table.build_column_text(row,column),frontend$components$query_table$iter__111040_$_iter__111048(cljs.core.rest(s__111049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__111041__$2,temp__5804__auto__,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,map__111039,map__111039__$1,page_QMARK_))
;
return iter__5520__auto__(columns);
})(),frontend$components$query_table$iter__111040(cljs.core.rest(s__111041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sort_result);
})();
var render_column_value = (function (row_block,row_format,cell_format,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cell_format)){
return value;
} else {
if(cljs.core.coll_QMARK_(value)){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__111037_SHARP_){
var G__111052 = cljs.core.PersistentArrayMap.EMPTY;
var G__111053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),p1__111037_SHARP_], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__111052,G__111053) : page_cp.call(null,G__111052,G__111053));
}),value));
} else {
if(cljs.core.boolean_QMARK_(value)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
} else {
if(typeof value === 'string'){
var temp__5802__auto__ = (function (){var G__111054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value) : frontend.util.page_name_sanity_lc.call(null,value))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__111054) : frontend.db.entity.call(null,G__111054));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var page = temp__5802__auto__;
var G__111055 = cljs.core.PersistentArrayMap.EMPTY;
var G__111056 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__111055,G__111056) : page_cp.call(null,G__111055,G__111056));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$3 ? inline_text.cljs$core$IFn$_invoke$arity$3(row_block,row_format,value) : inline_text.call(null,row_block,row_format,value));
}
} else {
return value;

}
}
}
}
});
var G__111057 = table_version;
switch (G__111057) {
case (2):
return daiquiri.interpreter.interpret(logseq.shui.core.table_v2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [columns], null)], null),result_as_text)], null),frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$2(config,inline)));

break;
case (1):
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return e.stopPropagation();
}),'style':{'width':"100%"},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow-x-auto",(cljs.core.truth_(page_QMARK_)?null:"query-table")], null))},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__111058(s__111059){
return (new cljs.core.LazySeq(null,(function (){
var s__111059__$1 = s__111059;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__111059__$1);
if(temp__5804__auto__){
var s__111059__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__111059__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111059__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111061 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111060 = (0);
while(true){
if((i__111060 < size__5519__auto__)){
var column = cljs.core._nth(c__5518__auto__,i__111060);
cljs.core.chunk_append(b__111061,(function (){var title = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.seconds__GT_days_COLON_hours_COLON_minutes_COLON_seconds(clock_time_total)], 0)):cljs.core.name(column));
return frontend.components.query_table.sortable_title(title,column,sort_state,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__111081 = (i__111060 + (1));
i__111060 = G__111081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111061),frontend$components$query_table$iter__111058(cljs.core.chunk_rest(s__111059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111061),null);
}
} else {
var column = cljs.core.first(s__111059__$2);
return cljs.core.cons((function (){var title = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.seconds__GT_days_COLON_hours_COLON_minutes_COLON_seconds(clock_time_total)], 0)):cljs.core.name(column));
return frontend.components.query_table.sortable_title(title,column,sort_state,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__111058(cljs.core.rest(s__111059__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(columns);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__111062(s__111063){
return (new cljs.core.LazySeq(null,(function (){
var s__111063__$1 = s__111063;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__111063__$1);
if(temp__5804__auto__){
var s__111063__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__111063__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111063__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111065 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111064 = (0);
while(true){
if((i__111064 < size__5519__auto__)){
var row = cljs.core._nth(c__5518__auto__,i__111064);
cljs.core.chunk_append(b__111065,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(row);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__111064,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function frontend$components$query_table$iter__111062_$_iter__111066(s__111067){
return (new cljs.core.LazySeq(null,((function (i__111064,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
var s__111067__$1 = s__111067;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__111067__$1);
if(temp__5804__auto____$1){
var s__111067__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__111067__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__111067__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__111069 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__111068 = (0);
while(true){
if((i__111068 < size__5519__auto____$1)){
var column = cljs.core._nth(c__5518__auto____$1,i__111068);
cljs.core.chunk_append(b__111069,(function (){var value = frontend.components.query_table.build_column_value(row,column,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"->elem","->elem",-260360654),__GT_elem,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144),map_inline,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"comma-separated-property?","comma-separated-property?",-580287681),property_separated_by_commas_QMARK_(column)], null));
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__111068,i__111064,value,column,c__5518__auto____$1,size__5519__auto____$1,b__111069,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,true);

return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__111068,i__111064,value,column,c__5518__auto____$1,size__5519__auto____$1,b__111069,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseMove':((function (i__111068,i__111064,value,column,c__5518__auto____$1,size__5519__auto____$1,b__111069,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__111068,i__111064,value,column,c__5518__auto____$1,size__5519__auto____$1,b__111069,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseUp':((function (i__111068,i__111064,value,column,c__5518__auto____$1,size__5519__auto____$1,b__111069,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(_STAR_mouse_down_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.deref(select_QMARK_));
} else {
return and__5041__auto__;
}
})())){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));

return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,false);
} else {
return null;
}
});})(i__111068,i__111064,value,column,c__5518__auto____$1,size__5519__auto____$1,b__111069,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(render_column_value,row,format,value)):null)]);
})());

var G__111082 = (i__111068 + (1));
i__111068 = G__111082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111069),frontend$components$query_table$iter__111062_$_iter__111066(cljs.core.chunk_rest(s__111067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111069),null);
}
} else {
var column = cljs.core.first(s__111067__$2);
return cljs.core.cons((function (){var value = frontend.components.query_table.build_column_value(row,column,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"->elem","->elem",-260360654),__GT_elem,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144),map_inline,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"comma-separated-property?","comma-separated-property?",-580287681),property_separated_by_commas_QMARK_(column)], null));
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__111064,value,column,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,true);

return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__111064,value,column,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseMove':((function (i__111064,value,column,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__111064,value,column,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseUp':((function (i__111064,value,column,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(_STAR_mouse_down_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.deref(select_QMARK_));
} else {
return and__5041__auto__;
}
})())){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));

return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,false);
} else {
return null;
}
});})(i__111064,value,column,s__111067__$2,temp__5804__auto____$1,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(render_column_value,row,format,value)):null)]);
})(),frontend$components$query_table$iter__111062_$_iter__111066(cljs.core.rest(s__111067__$2)));
}
} else {
return null;
}
break;
}
});})(i__111064,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,null,null));
});})(i__111064,format,row,c__5518__auto__,size__5519__auto__,b__111065,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
;
return iter__5520__auto__(columns);
})())]);
})());

var G__111083 = (i__111064 + (1));
i__111064 = G__111083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111065),frontend$components$query_table$iter__111062(cljs.core.chunk_rest(s__111063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111065),null);
}
} else {
var row = cljs.core.first(s__111063__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(row);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function frontend$components$query_table$iter__111062_$_iter__111070(s__111071){
return (new cljs.core.LazySeq(null,(function (){
var s__111071__$1 = s__111071;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__111071__$1);
if(temp__5804__auto____$1){
var s__111071__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__111071__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__111071__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__111073 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__111072 = (0);
while(true){
if((i__111072 < size__5519__auto__)){
var column = cljs.core._nth(c__5518__auto__,i__111072);
cljs.core.chunk_append(b__111073,(function (){var value = frontend.components.query_table.build_column_value(row,column,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"->elem","->elem",-260360654),__GT_elem,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144),map_inline,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"comma-separated-property?","comma-separated-property?",-580287681),property_separated_by_commas_QMARK_(column)], null));
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__111072,value,column,c__5518__auto__,size__5519__auto__,b__111073,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,true);

return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__111072,value,column,c__5518__auto__,size__5519__auto__,b__111073,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseMove':((function (i__111072,value,column,c__5518__auto__,size__5519__auto__,b__111073,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__111072,value,column,c__5518__auto__,size__5519__auto__,b__111073,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseUp':((function (i__111072,value,column,c__5518__auto__,size__5519__auto__,b__111073,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(_STAR_mouse_down_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.deref(select_QMARK_));
} else {
return and__5041__auto__;
}
})())){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));

return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,false);
} else {
return null;
}
});})(i__111072,value,column,c__5518__auto__,size__5519__auto__,b__111073,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(render_column_value,row,format,value)):null)]);
})());

var G__111084 = (i__111072 + (1));
i__111072 = G__111084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111073),frontend$components$query_table$iter__111062_$_iter__111070(cljs.core.chunk_rest(s__111071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111073),null);
}
} else {
var column = cljs.core.first(s__111071__$2);
return cljs.core.cons((function (){var value = frontend.components.query_table.build_column_value(row,column,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"->elem","->elem",-260360654),__GT_elem,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144),map_inline,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"comma-separated-property?","comma-separated-property?",-580287681),property_separated_by_commas_QMARK_(column)], null));
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,column,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,true);

return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,column,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseMove':((function (value,column,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,column,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'onMouseUp':((function (value,column,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(_STAR_mouse_down_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.deref(select_QMARK_));
} else {
return and__5041__auto__;
}
})())){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));

return cljs.core.reset_BANG_(_STAR_mouse_down_QMARK_,false);
} else {
return null;
}
});})(value,column,s__111071__$2,temp__5804__auto____$1,format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(render_column_value,row,format,value)):null)]);
})(),frontend$components$query_table$iter__111062_$_iter__111070(cljs.core.rest(s__111071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,row,s__111063__$2,temp__5804__auto__,G__111057,select_QMARK_,_STAR_mouse_down_QMARK_,result_SINGLEQUOTE_,clock_time_total,columns,sort_state,sort_result,property_separated_by_commas_QMARK_,table_version,result_as_text,render_column_value,map__111039,map__111039__$1,page_QMARK_))
;
return iter__5520__auto__(columns);
})())]);
})(),frontend$components$query_table$iter__111062(cljs.core.rest(s__111063__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sort_result);
})())])])]);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111057)].join('')));

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.query-table","mouse-down?","frontend.components.query-table/mouse-down?",-262290485))], null),"frontend.components.query-table/result-table");

//# sourceMappingURL=frontend.components.query_table.js.map
