goog.provide('logseq.graph_parser.text');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
/**
 * Returns the basename of a file path. e.g. /a/b/c.md -> c.md
 */
logseq.graph_parser.text.get_file_basename = (function logseq$graph_parser$text$get_file_basename(path){
if(clojure.string.blank_QMARK_(path)){
return null;
} else {
return module$node_modules$path$path.parse(clojure.string.replace(path,"+","/")).base;
}
});
/**
 * Returns the rootname of a file path. e.g. /a/b/c.md -> c
 */
logseq.graph_parser.text.get_file_rootname = (function logseq$graph_parser$text$get_file_rootname(path){
if(clojure.string.blank_QMARK_(path)){
return null;
} else {
return module$node_modules$path$path.parse(clojure.string.replace(path,"+","/")).name;
}
});
logseq.graph_parser.text.page_ref_re_0 = /\[\[(.*)\]\]/;
logseq.graph_parser.text.org_page_ref_re = /\[\[(file:.*)\]\[.+?\]\]/;
logseq.graph_parser.text.markdown_page_ref_re = /\[(.*)\]\(file:.*\)/;
/**
 * Extracts page names from format-specific page-refs e.g. org/md specific and
 *   logseq page-refs. Only call in contexts where format-specific page-refs are
 *   used. For logseq page-refs use page-ref/get-page-name
 */
logseq.graph_parser.text.get_page_name = (function logseq$graph_parser$text$get_page_name(s){
var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
var or__5043__auto__ = (function (){var temp__5804__auto__ = cljs.core.re_matches(logseq.graph_parser.text.markdown_page_ref_re,s);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__69200 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69200,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69200,(1),null);
var _path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69200,(2),null);
return clojure.string.trim(label);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.re_matches(logseq.graph_parser.text.org_page_ref_re,s);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__69203 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69203,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69203,(1),null);
var _label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69203,(2),null);
var G__69206 = logseq.graph_parser.text.get_file_rootname(path);
if((G__69206 == null)){
return null;
} else {
return clojure.string.replace(G__69206,".","/");
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.second(cljs.core.re_matches(logseq.graph_parser.text.page_ref_re_0,s));
}
}
} else {
return and__5041__auto__;
}
});
logseq.graph_parser.text.page_ref_un_brackets_BANG_ = (function logseq$graph_parser$text$page_ref_un_brackets_BANG_(s){
var or__5043__auto__ = logseq.graph_parser.text.get_page_name(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return s;
}
});
logseq.graph_parser.text.get_nested_page_name = (function logseq$graph_parser$text$get_nested_page_name(page_name){
var temp__5804__auto__ = cljs.core.re_find(logseq.graph_parser.util.page_ref.page_ref_without_nested_re,page_name);
if(cljs.core.truth_(temp__5804__auto__)){
var first_match = temp__5804__auto__;
return cljs.core.second(first_match);
} else {
return null;
}
});
logseq.graph_parser.text.remove_level_space_aux_BANG_ = (function logseq$graph_parser$text$remove_level_space_aux_BANG_(text,pattern,space_QMARK_,trim_left_QMARK_){
var pattern__$1 = goog.string.format((cljs.core.truth_(space_QMARK_)?"^[%s]+\\s+":"^[%s]+\\s?"),pattern);
var text__$1 = (cljs.core.truth_(trim_left_QMARK_)?clojure.string.triml(text):text);
return clojure.string.replace_first(text__$1,cljs.core.re_pattern(pattern__$1),"");
});
logseq.graph_parser.text.remove_level_spaces = (function logseq$graph_parser$text$remove_level_spaces(var_args){
var G__69208 = arguments.length;
switch (G__69208) {
case 3:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3 = (function (text,format,block_pattern){
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5(text,format,block_pattern,false,true);
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$4 = (function (text,format,block_pattern,space_QMARK_){
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5(text,format,block_pattern,space_QMARK_,true);
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5 = (function (text,format,block_pattern,space_QMARK_,trim_left_QMARK_){
if(cljs.core.truth_(format)){
if(clojure.string.blank_QMARK_(text)){
return "";
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("markdown",cljs.core.name(format))) && (clojure.string.starts_with_QMARK_(text,"---")))){
return text;
} else {
return logseq.graph_parser.text.remove_level_space_aux_BANG_(text,block_pattern,space_QMARK_,trim_left_QMARK_);

}
}
} else {
return null;
}
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$lang$maxFixedArity = 5);

logseq.graph_parser.text.namespace_page_QMARK_ = (function logseq$graph_parser$text$namespace_page_QMARK_(page_name){
return ((typeof page_name === 'string') && (((clojure.string.includes_QMARK_(page_name,"/")) && ((((!(clojure.string.starts_with_QMARK_(page_name,"../")))) && ((((!(clojure.string.starts_with_QMARK_(page_name,"./")))) && (cljs.core.not(logseq.graph_parser.util.url_QMARK_(page_name))))))))));
});
/**
 * Return parsed non-string property value or nil if none is found
 */
logseq.graph_parser.text.parse_non_string_property_value = (function logseq$graph_parser$text$parse_non_string_property_value(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"true")){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"false")){
return false;
} else {
if(cljs.core.truth_(cljs.core.re_find(/^\d+$/,v))){
return cljs.core.parse_long(v);
} else {
return null;
}
}
}
});
logseq.graph_parser.text.get_ref_from_ast = (function logseq$graph_parser$text$get_ref_from_ast(p__69209){
var vec__69210 = p__69209;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69210,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69210,(1),null);
var G__69213 = typ;
switch (G__69213) {
case "Link":
var G__69214 = cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data));
switch (G__69214) {
case "Page_ref":
return cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data));

break;
case "Search":
return cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data));

break;
default:
return null;

}

break;
case "Nested_link":
return logseq.graph_parser.util.page_ref.get_page_name(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(data));

break;
case "Tag":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Plain",cljs.core.ffirst(data))){
return cljs.core.second(cljs.core.first(data));
} else {
var G__69215 = cljs.core.first(data);
return (logseq.graph_parser.text.get_ref_from_ast.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.get_ref_from_ast.cljs$core$IFn$_invoke$arity$1(G__69215) : logseq.graph_parser.text.get_ref_from_ast.call(null,G__69215));
}

break;
default:
return null;

}
});
logseq.graph_parser.text.extract_refs_from_mldoc_ast = (function logseq$graph_parser$text$extract_refs_from_mldoc_ast(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.mldoc.ast_link_QMARK_),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.text.get_ref_from_ast),cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.string.trim)),v);
});
logseq.graph_parser.text.sep_by_comma = (function logseq$graph_parser$text$sep_by_comma(s){
if(cljs.core.string_QMARK_){
} else {
throw (new Error("Assert failed: string?"));
}

if(cljs.core.truth_(s)){
} else {
throw (new Error("Assert failed: s"));
}

return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\,，]{1}/))));
});
logseq.graph_parser.text.separated_by_commas_QMARK_ = (function logseq$graph_parser$text$separated_by_commas_QMARK_(config_state,k){
var k_SINGLEQUOTE_ = (((k instanceof cljs.core.Keyword))?k:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k));
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.editable_linkable_built_in_properties,cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(config_state,new cljs.core.Keyword("property","separated-by-commas","property/separated-by-commas",1105223737)))),k_SINGLEQUOTE_);
});
logseq.graph_parser.text.extract_refs_by_commas = (function logseq$graph_parser$text$extract_refs_by_commas(v,format){
var plains = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69216_SHARP_){
return ((cljs.core.vector_QMARK_(p1__69216_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Plain",cljs.core.first(p1__69216_SHARP_))));
}),cljs.core.second(cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,logseq.graph_parser.mldoc.__GT_edn(v,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)))))));
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.text.sep_by_comma,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plains], 0)));
});
logseq.graph_parser.text.parse_property_refs = (function logseq$graph_parser$text$parse_property_refs(k,v,mldoc_references_ast,config_state){
var refs = logseq.graph_parser.text.extract_refs_from_mldoc_ast(mldoc_references_ast);
var property_separated_by_commas_QMARK_ = logseq.graph_parser.text.separated_by_commas_QMARK_(config_state,k);
if(property_separated_by_commas_QMARK_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(refs,logseq.graph_parser.text.extract_refs_by_commas(v,cljs.core.get.cljs$core$IFn$_invoke$arity$3(config_state,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089))));
} else {
return refs;
}
});
/**
 * Property value parsing that takes into account built-in properties, format
 *   and user config
 */
logseq.graph_parser.text.parse_property = (function logseq$graph_parser$text$parse_property(k,v,mldoc_references_ast,config_state){
var v_SINGLEQUOTE_ = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,logseq.graph_parser.property.unparsed_built_in_properties())),cljs.core.get.cljs$core$IFn$_invoke$arity$2(config_state,new cljs.core.Keyword(null,"ignored-page-references-keywords","ignored-page-references-keywords",44006978))),cljs.core.name(k))){
return v_SINGLEQUOTE_;
} else {
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(v_SINGLEQUOTE_)){
return v_SINGLEQUOTE_;
} else {
var refs = logseq.graph_parser.text.parse_property_refs(k,v_SINGLEQUOTE_,mldoc_references_ast,config_state);
if(cljs.core.seq(refs)){
return refs;
} else {
var temp__5806__auto__ = logseq.graph_parser.text.parse_non_string_property_value(v_SINGLEQUOTE_);
if((temp__5806__auto__ == null)){
return v_SINGLEQUOTE_;
} else {
var new_val = temp__5806__auto__;
return new_val;
}
}

}
}
});

//# sourceMappingURL=logseq.graph_parser.text.js.map
