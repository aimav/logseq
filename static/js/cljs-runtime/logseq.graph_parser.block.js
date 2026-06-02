goog.provide('logseq.graph_parser.block');
logseq.graph_parser.block.heading_block_QMARK_ = (function logseq$graph_parser$block$heading_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",cljs.core.first(block))));
});
logseq.graph_parser.block.get_tag = (function logseq$graph_parser$block$get_tag(block){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.vector_QMARK_(block);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block));
if(and__5041__auto____$1){
return cljs.core.second(block);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var tag_value = temp__5804__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85024){
var vec__85025 = p__85024;
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85025,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85025,(1),null);
var G__85028 = elem;
switch (G__85028) {
case "Plain":
return value;

break;
case "Link":
return new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(value);

break;
case "Nested_link":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value);

break;
default:
return "";

}
}),tag_value));
} else {
return null;
}
});
logseq.graph_parser.block.get_page_reference = (function logseq$graph_parser$block$get_page_reference(block,format){
var page = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block)))))?(function (){var url_type = cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var value = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"Page_ref");
if(and__5041__auto__){
var and__5041__auto____$1 = ((typeof value === 'string') && (cljs.core.not((function (){var or__5043__auto__ = logseq.graph_parser.config.local_asset_QMARK_(value);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.config.draw_QMARK_(value);
}
})())));
if(and__5041__auto____$1){
return value;
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
var or__5043__auto____$1 = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"Search");
if(and__5041__auto__){
var and__5041__auto____$1 = logseq.graph_parser.util.page_ref.page_ref_QMARK_(value);
if(and__5041__auto____$1){
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(value);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"Search");
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not(logseq.graph_parser.config.local_asset_QMARK_(value));
if(and__5041__auto____$2){
return value;
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
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url_type,"File");
if(and__5041__auto__){
return cljs.core.second(cljs.core.first(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))));
} else {
return and__5041__auto__;
}
}
}
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Nested_link",cljs.core.first(block)))))?(function (){var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.last(block));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__85029 = cljs.core.second(block);
var map__85029__$1 = cljs.core.__destructure_map(map__85029);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85029__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85029__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var argument = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(argument);
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block)))))?(function (){var text = logseq.graph_parser.block.get_tag(block);
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(text);
})():null
))));
if(cljs.core.truth_(page)){
var or__5043__auto__ = logseq.graph_parser.util.block_ref.get_block_ref_id(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page;
}
} else {
return null;
}
});
logseq.graph_parser.block.get_block_reference = (function logseq$graph_parser$block$get_block_reference(block){
var temp__5804__auto__ = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_reference",cljs.core.first(block)))))?cljs.core.last(block):((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (((cljs.core.map_QMARK_(cljs.core.second(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))))))))))?cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))):((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__85030 = cljs.core.second(block);
var map__85030__$1 = cljs.core.__destructure_map(map__85030);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85030__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")) && (((typeof cljs.core.first(arguments$) === 'string') && (logseq.graph_parser.util.block_ref.string_block_ref_QMARK_(cljs.core.first(arguments$))))))){
return logseq.graph_parser.util.block_ref.get_string_block_ref_id(cljs.core.first(arguments$));
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (cljs.core.map_QMARK_(cljs.core.second(block)))))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))))))?new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))):(function (){var id = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
if(typeof id === 'string'){
var or__5043__auto__ = logseq.graph_parser.util.block_ref.get_block_ref_id(id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return id;
}
} else {
return null;
}
})()):null
))));
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
if(cljs.core.truth_((function (){var G__85031 = block_id;
if((G__85031 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__85031);
}
})())){
return block_id;
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.block.paragraph_block_QMARK_ = (function logseq$graph_parser$block$paragraph_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.first(block))));
});
logseq.graph_parser.block.timestamp_block_QMARK_ = (function logseq$graph_parser$block$timestamp_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Timestamp",cljs.core.first(block))));
});
logseq.graph_parser.block.get_page_refs_from_property_names = (function logseq$graph_parser$block$get_page_refs_from_property_names(properties,p__85032){
var map__85033 = p__85032;
var map__85033__$1 = cljs.core.__destructure_map(map__85033);
var enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85033__$1,new cljs.core.Keyword("property-pages","enabled?","property-pages/enabled?",-48336645));
var excludelist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85033__$1,new cljs.core.Keyword("property-pages","excludelist","property-pages/excludelist",1710831097));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,true,null], null), null),enabled_QMARK_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(clojure.string.blank_QMARK_),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,excludelist))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,logseq.graph_parser.property.editable_built_in_properties(),logseq.graph_parser.property.hidden_built_in_properties()))),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),properties);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
logseq.graph_parser.block.extract_refs_from_property_value = (function logseq$graph_parser$block$extract_refs_from_property_value(value,format){
if(cljs.core.coll_QMARK_(value)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return ((typeof v === 'string') && ((!(clojure.string.blank_QMARK_(v)))));
}),value);
} else {
if(((typeof value === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("\"",cljs.core.first(value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(value)], 0))))){
return null;
} else {
if(typeof value === 'string'){
var ast = logseq.graph_parser.mldoc.inline__GT_edn(value,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
return logseq.graph_parser.text.extract_refs_from_mldoc_ast(ast);
} else {
return null;

}
}
}
});
logseq.graph_parser.block.get_page_ref_names_from_properties = (function logseq$graph_parser$block$get_page_ref_names_from_properties(properties,user_config){
var page_refs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.coll_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,properties))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (value){
var f = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"extract-refs-from-property-value-fn","extract-refs-from-property-value-fn",-586398737).cljs$core$IFn$_invoke$arity$1(user_config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.block.extract_refs_from_property_value;
}
})();
var G__85034 = value;
var G__85035 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_config,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__85034,G__85035) : f.call(null,G__85034,G__85035));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__85036){
var vec__85037 = p__85036;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85037,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85037,(1),null);
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,logseq.graph_parser.property.editable_built_in_properties(),logseq.graph_parser.property.editable_linkable_built_in_properties),logseq.graph_parser.property.hidden_built_in_properties()),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k));
}),properties))], 0)));
var page_refs_from_property_names = logseq.graph_parser.block.get_page_refs_from_property_names(properties,user_config);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_refs,page_refs_from_property_names)));
});
logseq.graph_parser.block.extract_block_refs = (function logseq$graph_parser$block$extract_block_refs(nodes){
var ref_blocks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (form){
var temp__5804__auto___85149 = logseq.graph_parser.block.get_block_reference(form);
if(cljs.core.truth_(temp__5804__auto___85149)){
var block_85150 = temp__5804__auto___85149;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_blocks,cljs.core.conj,block_85150);
} else {
}

return form;
}),nodes);

return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5804__auto__ = cljs.core.parse_uuid(block);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
}),cljs.core.deref(ref_blocks));
});
logseq.graph_parser.block.extract_properties = (function logseq$graph_parser$block$extract_properties(properties,user_config){
if(cljs.core.seq(properties)){
var properties__$1 = cljs.core.seq(properties);
var _STAR_invalid_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var properties__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__85040_SHARP_){
return (cljs.core.second(p1__85040_SHARP_) == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85041){
var vec__85042 = p__85041;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85042,(1),null);
var mldoc_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85042,(2),null);
var k__$1 = (((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),(1)):k);
var k__$2 = clojure.string.replace(clojure.string.replace(clojure.string.lower_case(k__$1)," ","-"),"_","-");
if(cljs.core.truth_(logseq.graph_parser.property.valid_property_name_QMARK_([":",k__$2].join('')))){
var k_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["custom-id",null,"custom_id",null], null), null),k__$2))?"id":k__$2));
var v_SINGLEQUOTE_ = logseq.graph_parser.text.parse_property(k__$2,v,mldoc_ast,user_config);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_,mldoc_ast,v], null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_invalid_properties,cljs.core.conj,k__$2);

return null;
}
}),properties__$1));
var page_refs = logseq.graph_parser.block.get_page_ref_names_from_properties(properties__$2,user_config);
var block_refs = logseq.graph_parser.block.extract_block_refs(properties__$2);
var properties_text_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85045){
var vec__85046 = p__85045;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85046,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85046,(1),null);
var _refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85046,(2),null);
var original_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85046,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,original_text], null);
}),properties__$2));
var properties__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85049){
var vec__85050 = p__85049;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85050,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85050,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),properties__$2);
var properties_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,properties__$3);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"properties","properties",685819552),properties_SINGLEQUOTE_,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,properties__$3),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),properties_text_values,new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099),cljs.core.deref(_STAR_invalid_properties),new cljs.core.Keyword(null,"page-refs","page-refs",1204379971),page_refs,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),block_refs], null);
} else {
return null;
}
});
logseq.graph_parser.block.paragraph_timestamp_block_QMARK_ = (function logseq$graph_parser$block$paragraph_timestamp_block_QMARK_(block){
return ((logseq.graph_parser.block.paragraph_block_QMARK_(block)) && (((logseq.graph_parser.block.timestamp_block_QMARK_(cljs.core.first(cljs.core.second(block)))) || (logseq.graph_parser.block.timestamp_block_QMARK_(cljs.core.second(cljs.core.second(block)))))));
});
logseq.graph_parser.block.extract_timestamps = (function logseq$graph_parser$block$extract_timestamps(block){
var G__85053 = cljs.core.second(block);
var G__85053__$1 = (((G__85053 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.timestamp_block_QMARK_,G__85053));
var G__85053__$2 = (((G__85053__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,G__85053__$1));
if((G__85053__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__85053__$2);
}
});
logseq.graph_parser.block.timestamps__GT_scheduled_and_deadline = (function logseq$graph_parser$block$timestamps__GT_scheduled_and_deadline(timestamps){
var timestamps__$1 = cljs.core.update_keys(timestamps,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case));
var m = (function (){var G__85054 = cljs.core.select_keys(timestamps__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"deadline","deadline",628964572)], null));
if((G__85054 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85055){
var vec__85056 = p__85055;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85056,(1),null);
var map__85059 = v;
var map__85059__$1 = cljs.core.__destructure_map(map__85059);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85059__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85059__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var map__85060 = date;
var map__85060__$1 = cljs.core.__destructure_map(map__85060);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85060__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85060__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85060__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var day__$1 = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),logseq.graph_parser.util.zero_pad(month),logseq.graph_parser.util.zero_pad(day)].join(''));
var G__85061 = (function (){var G__85062 = k;
var G__85062__$1 = (((G__85062 instanceof cljs.core.Keyword))?G__85062.fqn:null);
switch (G__85062__$1) {
case "scheduled":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),day__$1], null);

break;
case "deadline":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deadline","deadline",628964572),day__$1], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85062__$1)].join('')));

}
})();
if(cljs.core.truth_(repetition)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85061,new cljs.core.Keyword(null,"repeated?","repeated?",-1169980868),true);
} else {
return G__85061;
}
}),G__85054);
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,m);
});
/**
 * Convert journal file name to user' custom date format
 */
logseq.graph_parser.block.convert_page_if_journal_impl = (function logseq$graph_parser$block$convert_page_if_journal_impl(original_page_name,date_formatter){
if(cljs.core.truth_(original_page_name)){
var page_name = logseq.graph_parser.util.page_name_sanity_lc(original_page_name);
var day = logseq.graph_parser.date_time_util.journal_title__GT_int(page_name,logseq.graph_parser.date_time_util.safe_journal_title_formatters(date_formatter));
if(cljs.core.truth_(day)){
var original_page_name__$1 = logseq.graph_parser.date_time_util.int__GT_journal_title(day,date_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name__$1,logseq.graph_parser.util.page_name_sanity_lc(original_page_name__$1),day], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name,page_name,day], null);
}
} else {
return null;
}
});
logseq.graph_parser.block.convert_page_if_journal = cljs.core.memoize(logseq.graph_parser.block.convert_page_if_journal_impl);
/**
 * Create a page's map structure given a original page name (string).
 * map as input is supported for legacy compatibility.
 * with-id?: if true, assign uuid to the map structure.
 *  if the page entity already exists, no-op.
 *  else, if with-id? is a uuid, the uuid is used.
 *  otherwise, generate a uuid.
 * with-timestamp?: assign timestampes to the map structure.
 *  Useful when creating new pages from references or namespaces,
 *  as there's no chance to introduce timestamps via editing in page
 */
logseq.graph_parser.block.page_name__GT_map = (function logseq$graph_parser$block$page_name__GT_map(var_args){
var args__5772__auto__ = [];
var len__5766__auto___85152 = arguments.length;
var i__5767__auto___85153 = (0);
while(true){
if((i__5767__auto___85153 < len__5766__auto___85152)){
args__5772__auto__.push((arguments[i__5767__auto___85153]));

var G__85154 = (i__5767__auto___85153 + (1));
i__5767__auto___85153 = G__85154;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((5) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((5)),(0),null)):null);
return logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5773__auto__);
});

(logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (original_page_name,with_id_QMARK_,db,with_timestamp_QMARK_,date_formatter,p__85069){
var map__85070 = p__85069;
var map__85070__$1 = cljs.core.__destructure_map(map__85070);
var from_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85070__$1,new cljs.core.Keyword(null,"from-page","from-page",75165656));
if(cljs.core.truth_((function (){var and__5041__auto__ = original_page_name;
if(cljs.core.truth_(and__5041__auto__)){
return typeof original_page_name === 'string';
} else {
return and__5041__auto__;
}
})())){
var original_page_name__$1 = logseq.graph_parser.util.remove_boundary_slashes(original_page_name);
var vec__85071 = logseq.graph_parser.block.convert_page_if_journal(original_page_name__$1,date_formatter);
var original_page_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85071,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85071,(1),null);
var journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85071,(2),null);
var namespace_QMARK_ = (((!(cljs.core.boolean$(logseq.graph_parser.text.get_nested_page_name(original_page_name__$2))))) && (logseq.graph_parser.text.namespace_page_QMARK_(original_page_name__$2)));
var page_entity = (function (){var G__85074 = db;
if((G__85074 == null)){
return null;
} else {
var G__85075 = G__85074;
var G__85076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__85075,G__85076) : datascript.core.entity.call(null,G__85075,G__85076));
}
})();
var original_page_name__$3 = (function (){var or__5043__auto__ = from_page;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return original_page_name__$2;
}
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),original_page_name__$3], null),(cljs.core.truth_(with_id_QMARK_)?(function (){var new_uuid = (cljs.core.truth_(page_entity)?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity):((cljs.core.uuid_QMARK_(with_id_QMARK_))?with_id_QMARK_:(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))
));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
})():null),((namespace_QMARK_)?(function (){var namespace = cljs.core.first(logseq.graph_parser.util.split_last("/",original_page_name__$3));
if(clojure.string.blank_QMARK_(namespace)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(namespace)], null)], null);
}
})():null),(cljs.core.truth_((function (){var and__5041__auto__ = with_timestamp_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(page_entity);
} else {
return and__5041__auto__;
}
})())?(function (){var current_ms = logseq.graph_parser.date_time_util.time_ms();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),current_ms,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),current_ms], null);
})():null),(cljs.core.truth_(journal_day)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),journal_day], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null))], 0));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(original_page_name);
if(and__5041__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_page_name);
} else {
return and__5041__auto__;
}
})())){
return original_page_name;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(original_page_name);
if(and__5041__auto__){
return with_id_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original_page_name,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null)));
} else {
return null;

}
}
}
}));

(logseq.graph_parser.block.page_name__GT_map.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(logseq.graph_parser.block.page_name__GT_map.cljs$lang$applyTo = (function (seq85063){
var G__85064 = cljs.core.first(seq85063);
var seq85063__$1 = cljs.core.next(seq85063);
var G__85065 = cljs.core.first(seq85063__$1);
var seq85063__$2 = cljs.core.next(seq85063__$1);
var G__85066 = cljs.core.first(seq85063__$2);
var seq85063__$3 = cljs.core.next(seq85063__$2);
var G__85067 = cljs.core.first(seq85063__$3);
var seq85063__$4 = cljs.core.next(seq85063__$3);
var G__85068 = cljs.core.first(seq85063__$4);
var seq85063__$5 = cljs.core.next(seq85063__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85064,G__85065,G__85066,G__85067,G__85068,seq85063__$5);
}));

logseq.graph_parser.block.with_page_refs = (function logseq$graph_parser$block$with_page_refs(p__85078,with_id_QMARK_,db,date_formatter){
var map__85079 = p__85078;
var map__85079__$1 = cljs.core.__destructure_map(map__85079);
var block = map__85079__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85079__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85079__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85079__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85079__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85079__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85079__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var refs__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tags,refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker,priority], null)], 0))));
var _STAR_refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(refs__$1);
clojure.walk.prewalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),"Custom")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),"query")))))){
return null;
} else {
var temp__5804__auto___85156 = logseq.graph_parser.block.get_page_reference(form,new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5804__auto___85156)){
var page_85158 = temp__5804__auto___85156;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_refs,cljs.core.conj,page_85158);
} else {
}

var temp__5804__auto___85159 = logseq.graph_parser.block.get_tag(form);
if(cljs.core.truth_(temp__5804__auto___85159)){
var tag_85160 = temp__5804__auto___85159;
var tag_85161__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(tag_85160);
if(cljs.core.truth_(logseq.graph_parser.util.tag_valid_QMARK_(tag_85161__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_refs,cljs.core.conj,tag_85161__$1);
} else {
}
} else {
}

return form;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_refs,(function (p1__85077_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,p1__85077_SHARP_);
}));

var children_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p){
var p__$1 = ((cljs.core.map_QMARK_(p))?new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p):p);
if(typeof p__$1 === 'string'){
var p__$2 = (function (){var or__5043__auto__ = logseq.graph_parser.text.get_nested_page_name(p__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return p__$1;
}
})();
if(logseq.graph_parser.text.namespace_page_QMARK_(p__$2)){
return logseq.graph_parser.util.split_namespace_pages(p__$2);
} else {
return null;
}
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(_STAR_refs)], 0))));
var refs_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return logseq.graph_parser.block.page_name__GT_map(ref,with_id_QMARK_,db,true,date_formatter);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_refs),children_pages))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs_SINGLEQUOTE_);
});
logseq.graph_parser.block.with_block_refs = (function logseq$graph_parser$block$with_block_refs(p__85080){
var map__85081 = p__85080;
var map__85081__$1 = cljs.core.__destructure_map(map__85081);
var block = map__85081__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85081__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85081__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ref_blocks = logseq.graph_parser.block.extract_block_refs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));
var refs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(block),ref_blocks));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs);
});
logseq.graph_parser.block.block_keywordize = (function logseq$graph_parser$block$block_keywordize(block){
return cljs.core.update_keys(block,(function (k){
if(cljs.core.truth_(cljs.core.namespace(k))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("block",k);
}
}));
});
/**
 * Clean up blocks data and add `block` ns to all keys
 */
logseq.graph_parser.block.sanity_blocks_data = (function logseq$graph_parser$block$sanity_blocks_data(blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.map_QMARK_(block)){
return logseq.graph_parser.block.block_keywordize(logseq.graph_parser.util.remove_nils_non_nested(block));
} else {
return block;
}
}),blocks);
});
logseq.graph_parser.block.block_tags__GT_pages = (function logseq$graph_parser$block$block_tags__GT_pages(p__85082){
var map__85083 = p__85082;
var map__85083__$1 = cljs.core.__destructure_map(map__85083);
var block = map__85083__$1;
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85083__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
if(cljs.core.seq(tags)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
var tag__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(tag);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(tag__$1)], null);
}),tags));
} else {
return block;
}
});
logseq.graph_parser.block.get_block_content = (function logseq$graph_parser$block$get_block_content(utf8_content,block,format,meta,block_pattern){
var content = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"end_pos","end_pos",-1418940).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(temp__5802__auto__)){
var end_pos = temp__5802__auto__;
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta),end_pos);
} else {
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$2(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta));
}
})();
var content__$1 = (cljs.core.truth_(content)?(function (){var content__$1 = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,block_pattern);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"org","org",1495985));
}
})())){
return content__$1;
} else {
return logseq.graph_parser.mldoc.remove_indentation_spaces(content__$1,(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block) + (1)),false);
}
})():null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
return content__$1;
} else {
return logseq.graph_parser.property.__GT_new_properties(content__$1);
}
});
logseq.graph_parser.block.get_custom_id_or_new_id = (function logseq$graph_parser$block$get_custom_id_or_new_id(properties){
var or__5043__auto__ = (function (){var temp__5804__auto__ = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom-id","custom-id",-615733336)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom_id","custom_id",834948303)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var custom_id = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var and__5041__auto__ = typeof custom_id === 'string';
if(and__5041__auto__){
return clojure.string.trim(custom_id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var custom_id__$1 = temp__5804__auto____$1;
var G__85084 = custom_id__$1;
if((G__85084 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__85084);
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
}
});
logseq.graph_parser.block.get_page_refs_from_properties = (function logseq$graph_parser$block$get_page_refs_from_properties(properties,db,date_formatter,user_config){
var page_refs = logseq.graph_parser.block.get_page_ref_names_from_properties(properties,user_config);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return logseq.graph_parser.block.page_name__GT_map(page,true,db,true,date_formatter);
}),page_refs);
});
logseq.graph_parser.block.with_page_block_refs = (function logseq$graph_parser$block$with_page_block_refs(block,with_id_QMARK_,db,date_formatter){
var G__85085 = block;
var G__85085__$1 = (((G__85085 == null))?null:logseq.graph_parser.block.with_page_refs(G__85085,with_id_QMARK_,db,date_formatter));
var G__85085__$2 = (((G__85085__$1 == null))?null:logseq.graph_parser.block.with_block_refs(G__85085__$1));
var G__85085__$3 = (((G__85085__$2 == null))?null:logseq.graph_parser.block.block_tags__GT_pages(G__85085__$2));
if((G__85085__$3 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__85085__$3,new cljs.core.Keyword(null,"refs","refs",-1560051448),(function (col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
}));
}
});
logseq.graph_parser.block.with_path_refs = (function logseq$graph_parser$block$with_path_refs(blocks){
var blocks__$1 = blocks;
var acc = cljs.core.PersistentVector.EMPTY;
var parents = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(blocks__$1)){
return acc;
} else {
var block = cljs.core.first(blocks__$1);
var cur_level = new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block);
var level_diff = (cur_level - cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.last(parents),new cljs.core.Keyword("block","level","block/level",1182509971),(0)));
var vec__85089 = (((level_diff === (0)))?(function (){var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents)], 0));
var parents__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(parents)),block);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,parents__$1], null);
})():(((level_diff > (0)))?(function (){var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,block)], null);
})():(((level_diff < (0)))?(function (){var parents__$1 = cljs.core.vec(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff){
return (function (p){
return (new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(p) < cur_level);
});})(blocks__$1,acc,parents,block,cur_level,level_diff))
,parents));
var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents__$1], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents__$1,block)], null);
})():null)));
var path_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85089,(0),null);
var parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85089,(1),null);
var path_ref_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff,vec__85089,path_refs,parents__$1){
return (function (ref){
if(typeof ref === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(ref)], null);
} else {
return ref;
}
});})(blocks__$1,acc,parents,block,cur_level,level_diff,vec__85089,path_refs,parents__$1))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff,vec__85089,path_refs,parents__$1){
return (function (ref){
if(cljs.core.map_QMARK_(ref)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
} else {
return ref;

}
});})(blocks__$1,acc,parents,block,cur_level,level_diff,vec__85089,path_refs,parents__$1))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),path_refs)))))));
var G__85175 = cljs.core.rest(blocks__$1);
var G__85176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),path_ref_pages));
var G__85177 = parents__$1;
blocks__$1 = G__85175;
acc = G__85176;
parents = G__85177;
continue;
}
break;
}
});
/**
 * macro: {:name "" arguments [""]}
 */
logseq.graph_parser.block.macro__GT_block = (function logseq$graph_parser$block$macro__GT_block(macro){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(macro))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(macro))].join(''),new cljs.core.Keyword("block","type","block/type",1537584409),"macro",new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logseq.macro-name","logseq.macro-name",1789949403),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(macro),new cljs.core.Keyword(null,"logseq.macro-arguments","logseq.macro-arguments",-655551868),new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(macro)], null)], null);
});
logseq.graph_parser.block.extract_macros_from_ast = (function logseq$graph_parser$block$extract_macros_from_ast(ast){
var _STAR_result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),"Macro")))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_result,cljs.core.conj,cljs.core.second(f));

return null;
} else {
return f;
}
}),ast);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.macro__GT_block,cljs.core.deref(_STAR_result));
});
logseq.graph_parser.block.with_pre_block_if_exists = (function logseq$graph_parser$block$with_pre_block_if_exists(blocks,body,pre_block_properties,encoded_content,p__85092){
var map__85093 = p__85092;
var map__85093__$1 = cljs.core.__destructure_map(map__85093);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"db","db",993250759));
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var first_block = cljs.core.first(blocks);
var first_block_start_pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null));
var blocks__$1 = (((((first_block_start_pos > (0))) || (cljs.core.empty_QMARK_(blocks))))?cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var content = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(encoded_content,(0),first_block_start_pos);
var map__85094 = pre_block_properties;
var map__85094__$1 = cljs.core.__destructure_map(map__85094);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85094__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var properties_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85094__$1,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444));
var properties_text_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85094__$1,new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535));
var invalid_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85094__$1,new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099));
var id = logseq.graph_parser.block.get_custom_id_or_new_id(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
var property_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),logseq.graph_parser.block.get_page_refs_from_properties(properties,db,date_formatter,user_config));
var pre_block_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties))?false:true);
var block = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","macros","block/macros",650396438)],[properties_text_values,pre_block_QMARK_,id,invalid_properties,properties,cljs.core.vec(properties_order),body,(1),content,logseq.graph_parser.block.extract_macros_from_ast(body)]);
var map__85095 = logseq.graph_parser.block.with_page_block_refs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"refs","refs",-1560051448),property_refs], null),false,db,date_formatter);
var map__85095__$1 = cljs.core.__destructure_map(map__85095);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85095__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85095__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var G__85096 = block;
var G__85096__$1 = (cljs.core.truth_(tags)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85096,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags):G__85096);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85096__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(refs,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(pre_block_properties)));

})(),cljs.core.select_keys(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108)], null))], 0)),blocks):blocks);
return logseq.graph_parser.block.with_path_refs(blocks__$1);
});
logseq.graph_parser.block.with_heading_property = (function logseq$graph_parser$block$with_heading_property(properties,markdown_heading_QMARK_,size){
if(cljs.core.truth_(markdown_heading_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"heading","heading",-1312171873),size);
} else {
return properties;
}
});
logseq.graph_parser.block.construct_block = (function logseq$graph_parser$block$construct_block(block,properties,timestamps,body,encoded_content,format,pos_meta,with_id_QMARK_,p__85097){
var map__85098 = p__85097;
var map__85098__$1 = cljs.core.__destructure_map(map__85098);
var block_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85098__$1,new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85098__$1,new cljs.core.Keyword(null,"db","db",993250759));
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85098__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var id = logseq.graph_parser.block.get_custom_id_or_new_id(properties);
var ref_pages_in_properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"page-refs","page-refs",1204379971).cljs$core$IFn$_invoke$arity$1(properties));
var block__$1 = cljs.core.second(block);
var unordered_QMARK_ = new cljs.core.Keyword(null,"unordered","unordered",-731655096).cljs$core$IFn$_invoke$arity$1(block__$1);
var markdown_heading_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format);
} else {
return and__5041__auto__;
}
})();
var block__$2 = (cljs.core.truth_(markdown_heading_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword(null,"level","level",1290497552),(cljs.core.truth_(unordered_QMARK_)?new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block__$1):(1))):block__$1);
var block__$3 = (function (){var G__85100 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refs","refs",-1560051448),ref_pages_in_properties,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"meta","meta",1499536964),pos_meta], 0)),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unordered","unordered",-731655096)], 0));
var G__85100__$1 = (cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return markdown_heading_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__85100,new cljs.core.Keyword(null,"properties","properties",685819552),logseq.graph_parser.block.with_heading_property(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties),markdown_heading_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535).cljs$core$IFn$_invoke$arity$1(properties),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),cljs.core.vec(new cljs.core.Keyword(null,"properties-order","properties-order",-768725444).cljs$core$IFn$_invoke$arity$1(properties))], 0)):G__85100);
if(cljs.core.seq(new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85100__$1,new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099),new cljs.core.Keyword(null,"invalid-properties","invalid-properties",1416774099).cljs$core$IFn$_invoke$arity$1(properties));
} else {
return G__85100__$1;
}
})();
var block__$4 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true),new cljs.core.Keyword(null,"properties","properties",685819552),(function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
})),new cljs.core.Keyword(null,"properties-text-values","properties-text-values",1110303535),cljs.core.dissoc,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),(function (keys){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null], null), null),keys));
})):block__$3);
var block__$5 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$4,new cljs.core.Keyword(null,"content","content",15833224),logseq.graph_parser.block.get_block_content(encoded_content,block__$4,format,pos_meta,block_pattern));
var block__$6 = ((cljs.core.seq(timestamps))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$5,logseq.graph_parser.block.timestamps__GT_scheduled_and_deadline(timestamps)], 0)):block__$5);
var block__$7 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword(null,"body","body",-2049205669),body);
var block__$8 = logseq.graph_parser.block.with_page_block_refs(block__$7,with_id_QMARK_,db,date_formatter);
var block__$9 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(block__$8,new cljs.core.Keyword(null,"refs","refs",-1560051448),cljs.core.concat,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(properties));
var map__85099 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties);
var map__85099__$1 = cljs.core.__destructure_map(map__85099);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85099__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85099__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
var block__$10 = (function (){var G__85101 = block__$9;
var G__85101__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = created_at;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.integer_QMARK_(created_at);
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85101,new cljs.core.Keyword("block","created-at","block/created-at",1440015),created_at):G__85101);
if(cljs.core.truth_((function (){var and__5041__auto__ = updated_at;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.integer_QMARK_(updated_at);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85101__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
} else {
return G__85101__$1;
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$10,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0));
});
logseq.graph_parser.block.fix_duplicate_id = (function logseq$graph_parser$block$fix_duplicate_id(block){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Logseq will assign a new id for this block: ",block], 0));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),(function (p1__85102_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),p1__85102_SHARP_));
})),new cljs.core.Keyword("block","content","block/content",-161885195),(function (c){
var replace_str = cljs.core.re_pattern(["\n*\\s*",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block)))?["id",logseq.graph_parser.property.colons," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))].join(''):[logseq.graph_parser.property.colons_org("id")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))].join(''))].join(''));
return clojure.string.replace_first(c,replace_str,"");
}));
});
/**
 * For sanity check only.
 * For renaming file externally, the file is actually deleted and transacted before-hand.
 */
logseq.graph_parser.block.block_exists_in_another_page_QMARK_ = (function logseq$graph_parser$block$block_exists_in_another_page_QMARK_(db,block_uuid,current_page_name){
if(cljs.core.truth_((function (){var and__5041__auto__ = db;
if(cljs.core.truth_(and__5041__auto__)){
return current_page_name;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__85103 = db;
var G__85104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__85103,G__85104) : datascript.core.entity.call(null,G__85103,G__85104));
})()));
if(cljs.core.truth_(temp__5804__auto__)){
var block_page_name = temp__5804__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_page_name,block_page_name);
} else {
return null;
}
} else {
return null;
}
});
/**
 * If the block exists in another page, we need to fix it
 * If the block exists in the current extraction process, we also need to fix it
 */
logseq.graph_parser.block.fix_block_id_if_duplicated_BANG_ = (function logseq$graph_parser$block$fix_block_id_if_duplicated_BANG_(db,page_name,_STAR_block_exists_in_extraction,block){
var block__$1 = (cljs.core.truth_((function (){var or__5043__auto__ = (function (){var G__85106 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var fexpr__85105 = cljs.core.deref(_STAR_block_exists_in_extraction);
return (fexpr__85105.cljs$core$IFn$_invoke$arity$1 ? fexpr__85105.cljs$core$IFn$_invoke$arity$1(G__85106) : fexpr__85105.call(null,G__85106));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.block.block_exists_in_another_page_QMARK_(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),page_name);
}
})())?logseq.graph_parser.block.fix_duplicate_id(block):block);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_block_exists_in_extraction,cljs.core.conj,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1));

return block__$1;
});
/**
 * Extract headings from mldoc ast.
 *   Args:
 *  `blocks`: mldoc ast.
 *  `content`: markdown or org-mode text.
 *  `with-id?`: If `with-id?` equals to true, all the referenced pages will have new db ids.
 *  `format`: content's format, it could be either :markdown or :org-mode.
 *  `options`: Options supported are :user-config, :block-pattern,
 *             :extract-macros, :date-formatter, :page-name and :db
 */
logseq.graph_parser.block.extract_blocks = (function logseq$graph_parser$block$extract_blocks(blocks,content,with_id_QMARK_,format,p__85108){
var map__85109 = p__85108;
var map__85109__$1 = cljs.core.__destructure_map(map__85109);
var options = map__85109__$1;
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85109__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(typeof content === 'string'){
} else {
throw (new Error("Assert failed: (string? content)"));
}

if(cljs.core.boolean_QMARK_(with_id_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? with-id?)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null], null), null),format)){
} else {
throw (new Error("Assert failed: (contains? #{:markdown :org} format)"));
}

var encoded_content = logseq.graph_parser.utf8.encode(content);
var vec__85110 = (function (){var headings = cljs.core.PersistentVector.EMPTY;
var blocks__$1 = cljs.core.reverse(blocks);
var timestamps = cljs.core.PersistentArrayMap.EMPTY;
var properties = cljs.core.PersistentArrayMap.EMPTY;
var body = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(blocks__$1)){
var vec__85116 = cljs.core.first(blocks__$1);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85116,(0),null);
var pos_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85116,(1),null);
var pos_meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pos_meta,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940),((cljs.core.seq(headings))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.last(headings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null)):null));
if(logseq.graph_parser.block.paragraph_timestamp_block_QMARK_(block)){
var timestamps__$1 = logseq.graph_parser.block.extract_timestamps(block);
var timestamps_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timestamps__$1,timestamps__$1], 0));
var G__85197 = headings;
var G__85198 = cljs.core.rest(blocks__$1);
var G__85199 = timestamps_SINGLEQUOTE_;
var G__85200 = properties;
var G__85201 = body;
headings = G__85197;
blocks__$1 = G__85198;
timestamps = G__85199;
properties = G__85200;
body = G__85201;
continue;
} else {
if(logseq.graph_parser.property.properties_ast_QMARK_(block)){
var properties__$1 = logseq.graph_parser.block.extract_properties(cljs.core.second(block),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(user_config,new cljs.core.Keyword(null,"format","format",-1306924766),format));
var G__85202 = headings;
var G__85203 = cljs.core.rest(blocks__$1);
var G__85204 = timestamps;
var G__85205 = properties__$1;
var G__85206 = body;
headings = G__85202;
blocks__$1 = G__85203;
timestamps = G__85204;
properties = G__85205;
body = G__85206;
continue;
} else {
if(logseq.graph_parser.block.heading_block_QMARK_(block)){
var block_SINGLEQUOTE_ = logseq.graph_parser.block.construct_block(block,properties,timestamps,body,encoded_content,format,pos_meta__$1,with_id_QMARK_,options);
var block_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block_SINGLEQUOTE_,new cljs.core.Keyword(null,"macros","macros",811339431),logseq.graph_parser.block.extract_macros_from_ast(cljs.core.cons(block,body)));
var G__85207 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(headings,block_SINGLEQUOTE__SINGLEQUOTE_);
var G__85208 = cljs.core.rest(blocks__$1);
var G__85209 = cljs.core.PersistentArrayMap.EMPTY;
var G__85210 = cljs.core.PersistentArrayMap.EMPTY;
var G__85211 = cljs.core.PersistentVector.EMPTY;
headings = G__85207;
blocks__$1 = G__85208;
timestamps = G__85209;
properties = G__85210;
body = G__85211;
continue;
} else {
var G__85212 = headings;
var G__85213 = cljs.core.rest(blocks__$1);
var G__85214 = timestamps;
var G__85215 = properties;
var G__85216 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,block);
headings = G__85212;
blocks__$1 = G__85213;
timestamps = G__85214;
properties = G__85215;
body = G__85216;
continue;

}
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.block.sanity_blocks_data(cljs.core.reverse(headings)),body,properties], null);
}
break;
}
})();
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85110,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85110,(1),null);
var pre_block_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85110,(2),null);
var result = logseq.graph_parser.block.with_pre_block_if_exists(blocks__$1,body,pre_block_properties,encoded_content,options);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__85107_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__85107_SHARP_,new cljs.core.Keyword("block","meta","block/meta",1064819153));
}),result);
});
logseq.graph_parser.block.with_parent_and_left = (function logseq$graph_parser$block$with_parent_and_left(page_id,blocks){
var vec__85121 = cljs.core.split_with((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("macro",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(b));
}),blocks);
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85121,(0),null);
var other_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85121,(1),null);
var result = (function (){var blocks__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__85121,blocks__$1,other_blocks){
return (function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block));
});})(vec__85121,blocks__$1,other_blocks))
,blocks__$1);
var parents = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","id","page/id",-1375529051),page_id,new cljs.core.Keyword("block","level","block/level",1182509971),(0),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),(0)], null)], null);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(blocks__$2)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$2,parents,result,vec__85121,blocks__$1,other_blocks){
return (function (p1__85119_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__85119_SHARP_,new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765));
});})(blocks__$2,parents,result,vec__85121,blocks__$1,other_blocks))
,result);
} else {
var vec__85136 = blocks__$2;
var seq__85137 = cljs.core.seq(vec__85136);
var first__85138 = cljs.core.first(seq__85137);
var seq__85137__$1 = cljs.core.next(seq__85137);
var block = first__85138;
var others = seq__85137__$1;
var level_spaces = new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(block);
var map__85139 = cljs.core.last(parents);
var map__85139__$1 = cljs.core.__destructure_map(map__85139);
var last_parent = map__85139__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85139__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85139__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85139__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var parent_spaces = new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(last_parent);
var vec__85140 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_spaces,parent_spaces))?(function (){var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null),new cljs.core.Keyword("block","level","block/level",1182509971),level], 0));
var parents_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(parents)),block__$1);
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})():(((level_spaces > parent_spaces))?(function (){var parent__$1 = (cljs.core.truth_(uuid)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null):new cljs.core.Keyword("page","id","page/id",-1375529051).cljs$core$IFn$_invoke$arity$1(last_parent));
var block__$1 = (function (){var G__85143 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),parent__$1], 0));
if(((level_spaces - parent_spaces) >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85143,new cljs.core.Keyword("block","level","block/level",1182509971),(level + (1)));
} else {
return G__85143;
}
})();
var parents_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,block__$1);
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})():(((level_spaces < parent_spaces))?(cljs.core.truth_(cljs.core.some(((function (blocks__$2,parents,result,vec__85136,seq__85137,first__85138,seq__85137__$1,block,others,level_spaces,map__85139,map__85139__$1,last_parent,uuid,level,parent,parent_spaces,vec__85121,blocks__$1,other_blocks){
return (function (p1__85120_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p1__85120_SHARP_),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(block));
});})(blocks__$2,parents,result,vec__85136,seq__85137,first__85138,seq__85137__$1,block,others,level_spaces,map__85139,map__85139__$1,last_parent,uuid,level,parent,parent_spaces,vec__85121,blocks__$1,other_blocks))
,parents))?(function (){var parents_SINGLEQUOTE_ = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (blocks__$2,parents,result,vec__85136,seq__85137,first__85138,seq__85137__$1,block,others,level_spaces,map__85139,map__85139__$1,last_parent,uuid,level,parent,parent_spaces,vec__85121,blocks__$1,other_blocks){
return (function (p){
return (new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p) <= level_spaces);
});})(blocks__$2,parents,result,vec__85136,seq__85137,first__85138,seq__85137__$1,block,others,level_spaces,map__85139,map__85139__$1,last_parent,uuid,level,parent,parent_spaces,vec__85121,blocks__$1,other_blocks))
,parents));
var left = cljs.core.last(parents_SINGLEQUOTE_);
var blocks__$3 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(blocks__$2),new cljs.core.Keyword("block","level","block/level",1182509971),(level - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(left)], null)], 0)),cljs.core.rest(blocks__$2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks__$3,parents_SINGLEQUOTE_,result], null);
})():(function (){var vec__85144 = cljs.core.split_with(((function (blocks__$2,parents,result,vec__85136,seq__85137,first__85138,seq__85137__$1,block,others,level_spaces,map__85139,map__85139__$1,last_parent,uuid,level,parent,parent_spaces,vec__85121,blocks__$1,other_blocks){
return (function (p){
return (new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p) <= level_spaces);
});})(blocks__$2,parents,result,vec__85136,seq__85137,first__85138,seq__85137__$1,block,others,level_spaces,map__85139,map__85139__$1,last_parent,uuid,level,parent,parent_spaces,vec__85121,blocks__$1,other_blocks))
,parents);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85144,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85144,(1),null);
var left = cljs.core.first(r);
var parent_id = (function (){var temp__5802__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.last(f));
if(cljs.core.truth_(temp__5802__auto__)){
var block_id = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
} else {
return page_id;
}
})();
var block__$1 = (function (){var G__85147 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(left)], null),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(left)], 0));
return G__85147;
})();
var parents_SINGLEQUOTE_ = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null)));
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})()
):null)));
var blocks__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85140,(0),null);
var parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85140,(1),null);
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85140,(2),null);
var G__85221 = blocks__$3;
var G__85222 = parents__$1;
var G__85223 = result__$1;
blocks__$2 = G__85221;
parents = G__85222;
result = G__85223;
continue;
}
break;
}
})();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,other_blocks);
});

//# sourceMappingURL=logseq.graph_parser.block.js.map
