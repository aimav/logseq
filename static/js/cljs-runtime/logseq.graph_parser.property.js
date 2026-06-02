goog.provide('logseq.graph_parser.property');
/**
 * Property delimiter for markdown mode
 */
logseq.graph_parser.property.colons = "::";
/**
 * Property delimiter for org mode
 */
logseq.graph_parser.property.colons_org = (function logseq$graph_parser$property$colons_org(property){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property),":"].join('');
});
/**
 * Creates a block content string from properties map
 */
logseq.graph_parser.property.__GT_block_content = (function logseq$graph_parser$property$__GT_block_content(properties){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69020_SHARP_){
return [cljs.core.name(cljs.core.key(p1__69020_SHARP_)),[logseq.graph_parser.property.colons," "].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.val(p1__69020_SHARP_))].join('');
}),properties));
});
logseq.graph_parser.property.valid_property_name_QMARK_ = (function logseq$graph_parser$property$valid_property_name_QMARK_(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var and__5041__auto__ = logseq.graph_parser.util.valid_edn_keyword_QMARK_(s);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(cljs.core.re_find(/[\"|^|(|)|{|}]+/,s))) && (cljs.core.not(cljs.core.re_find(/^:#/,s))));
} else {
return and__5041__auto__;
}
});
logseq.graph_parser.property.properties_ast_QMARK_ = (function logseq$graph_parser$property$properties_ast_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.first(block))));
});
logseq.graph_parser.property.built_in_extended_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
logseq.graph_parser.property.register_built_in_properties = (function logseq$graph_parser$property$register_built_in_properties(props){
return cljs.core.reset_BANG_(logseq.graph_parser.property.built_in_extended_properties,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(logseq.graph_parser.property.built_in_extended_properties),props));
});
/**
 * Properties used by logseq that user can edit and that can have linkable property values
 */
logseq.graph_parser.property.editable_linkable_built_in_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,new cljs.core.Keyword(null,"aliases","aliases",1346874714),null], null), null);
/**
 * Properties used by view and table component
 */
logseq.graph_parser.property.editable_view_and_table_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"logseq.table.version","logseq.table.version",63322881),null,new cljs.core.Keyword(null,"logseq.table.max-width","logseq.table.max-width",-767146077),null,new cljs.core.Keyword(null,"logseq.table.hover","logseq.table.hover",-1465923417),null,new cljs.core.Keyword(null,"logseq.table.compact","logseq.table.compact",615654834),null,new cljs.core.Keyword(null,"logseq.table.headers","logseq.table.headers",-900536583),null,new cljs.core.Keyword(null,"logseq.color","logseq.color",-42542213),null,new cljs.core.Keyword(null,"logseq.table.borders","logseq.table.borders",-1178350466),null,new cljs.core.Keyword(null,"logseq.table.stripes","logseq.table.stripes",1430094207),null], null), null);
/**
 * Properties used by logseq that user can edit
 */
logseq.graph_parser.property.editable_built_in_properties = (function logseq$graph_parser$property$editable_built_in_properties(){
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),null,new cljs.core.Keyword(null,"filetags","filetags",-1157605850),null,new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"public","public",1566243851),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"exclude-from-graph-view","exclude-from-graph-view",-1509369969),null,new cljs.core.Keyword("logseq.query","nlp-date","logseq.query/nlp-date",-145078221),null,new cljs.core.Keyword(null,"macro","macro",-867863404),null], null), null),logseq.graph_parser.property.editable_linkable_built_in_properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.property.editable_view_and_table_properties], 0));
});
/**
 * Properties used by logseq that user can't edit or see
 */
logseq.graph_parser.property.hidden_built_in_properties = (function logseq$graph_parser$property$hidden_built_in_properties(){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 30, [new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),null,new cljs.core.Keyword(null,"last_modified_at","last_modified_at",-1069251263),null,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),null,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),null,new cljs.core.Keyword(null,"query-table","query-table",2095143554),null,new cljs.core.Keyword(null,"doing","doing",-3342172),null,new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"logseq.macro-arguments","logseq.macro-arguments",-655551868),null,new cljs.core.Keyword(null,"hl-type","hl-type",992471876),null,new cljs.core.Keyword(null,"now","now",-1650525531),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"later","later",961723974),null,new cljs.core.Keyword(null,"logseq.tldraw.shape","logseq.tldraw.shape",-771542905),null,new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),null,new cljs.core.Keyword(null,"custom-id","custom-id",-615733336),null,new cljs.core.Keyword(null,"hl-page","hl-page",949012424),null,new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),null,new cljs.core.Keyword(null,"background_color","background_color",-1953390743),null,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null,new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"todo","todo",-1046442570),null,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),null,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),null,new cljs.core.Keyword(null,"logseq.macro-name","logseq.macro-name",1789949403),null,new cljs.core.Keyword(null,"created-at","created-at",-89248644),null,new cljs.core.Keyword(null,"hl-color","hl-color",1100781725),null,new cljs.core.Keyword(null,"created_at","created_at",1484050750),null,new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null),cljs.core.deref(logseq.graph_parser.property.built_in_extended_properties));
});
/**
 * Types for built-in properties. Built-in properties whose values are to be
 *   parsed by gp-text/parse-non-string-property-value should be added here
 */
logseq.graph_parser.property.built_in_property_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),new cljs.core.Keyword(null,"last_modified_at","last_modified_at",-1069251263),new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),new cljs.core.Keyword(null,"query-table","query-table",2095143554),new cljs.core.Keyword(null,"doing","doing",-3342172),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword(null,"later","later",961723974),new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),new cljs.core.Keyword(null,"hl-page","hl-page",949012424),new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),new cljs.core.Keyword(null,"public","public",1566243851),new cljs.core.Keyword(null,"exclude-from-graph-view","exclude-from-graph-view",-1509369969),new cljs.core.Keyword("logseq.query","nlp-date","logseq.query/nlp-date",-145078221),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"created_at","created_at",1484050750),new cljs.core.Keyword(null,"heading","heading",-1312171873)],[new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)]);
if(clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(logseq.graph_parser.property.built_in_property_types)),clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.hidden_built_in_properties(),logseq.graph_parser.property.editable_built_in_properties()))){
} else {
throw (new Error(["Assert failed: ","Keys of built-in-property-types must be valid built-in properties","\n","(set/subset? (set (keys built-in-property-types)) (set/union (hidden-built-in-properties) (editable-built-in-properties)))"].join('')));
}
/**
 * Properties whose values will not be parsed by gp-text/parse-property
 */
logseq.graph_parser.property.unparsed_built_in_properties = (function logseq$graph_parser$property$unparsed_built_in_properties(){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.hidden_built_in_properties(),logseq.graph_parser.property.editable_built_in_properties()),cljs.core.deref(logseq.graph_parser.property.built_in_extended_properties),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.property.editable_linkable_built_in_properties,cljs.core.set(cljs.core.keys(logseq.graph_parser.property.built_in_property_types))], 0));
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_start !== 'undefined')){
} else {
logseq.graph_parser.property.properties_start = ":PROPERTIES:";
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_end !== 'undefined')){
} else {
logseq.graph_parser.property.properties_end = ":END:";
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_end_pattern !== 'undefined')){
} else {
logseq.graph_parser.property.properties_end_pattern = cljs.core.re_pattern(goog.string.format("%s[\t\r ]*\n|(%s\\s*$)",logseq.graph_parser.property.properties_end,logseq.graph_parser.property.properties_end));
}
logseq.graph_parser.property.contains_properties_QMARK_ = (function logseq$graph_parser$property$contains_properties_QMARK_(content){
if(cljs.core.truth_(content)){
var and__5041__auto__ = clojure.string.includes_QMARK_(content,logseq.graph_parser.property.properties_start);
if(and__5041__auto__){
return cljs.core.re_find(logseq.graph_parser.property.properties_end_pattern,content);
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
/**
 * New syntax: key:: value
 */
logseq.graph_parser.property.__GT_new_properties = (function logseq$graph_parser$property$__GT_new_properties(content){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
var lines = clojure.string.split_lines(content);
var start_idx = lines.indexOf(logseq.graph_parser.property.properties_start);
var end_idx = lines.indexOf(logseq.graph_parser.property.properties_end);
if((((start_idx >= (0))) && ((((end_idx > (0))) && ((end_idx > start_idx)))))){
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(0),start_idx);
var middle = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
var vec__69021 = logseq.graph_parser.util.split_first(":",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1)));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69021,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = k;
if(cljs.core.truth_(and__5041__auto__)){
return v;
} else {
return and__5041__auto__;
}
})())){
var k__$1 = clojure.string.replace(k,"_","-");
var compare_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1));
var k__$2 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-id","custom-id",-615733336),null,new cljs.core.Keyword(null,"custom_id","custom_id",834948303),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),compare_k))?"id":k__$1);
var k__$3 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),null], null), null),compare_k))?"updated-at":k__$2);
return [k__$3,logseq.graph_parser.property.colons," ",clojure.string.trim(v)].join('');
} else {
return text;
}
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(start_idx + (1)),end_idx));
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(end_idx + (1)));
var lines__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,middle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
} else {
return content;
}
} else {
return content;
}
});

//# sourceMappingURL=logseq.graph_parser.property.js.map
