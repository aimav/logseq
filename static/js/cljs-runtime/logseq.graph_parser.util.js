goog.provide('logseq.graph_parser.util');
logseq.graph_parser.util.safe_decode_uri_component = (function logseq$graph_parser$util$safe_decode_uri_component(uri){
try{return decodeURIComponent(uri);
}catch (e53833){var _ = e53833;
logseq.graph_parser.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"decode-uri-component-failed","decode-uri-component-failed",-1939148471),uri], 0));

return uri;
}});
logseq.graph_parser.util.safe_url_decode = (function logseq$graph_parser$util$safe_url_decode(string){
if(clojure.string.includes_QMARK_(string,"%")){
var G__53834 = string;
var G__53834__$1 = (((G__53834 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53834));
if((G__53834__$1 == null)){
return null;
} else {
return logseq.graph_parser.util.safe_decode_uri_component(G__53834__$1);
}
} else {
return string;
}
});
/**
 * Normalize file path (for reading paths from FS, not required by writing)
 * Keep capitalization senstivity
 */
logseq.graph_parser.util.path_normalize = (function logseq$graph_parser$util$path_normalize(s){
return s.normalize("NFC");
});
/**
 * remove pairs of key-value that has nil value from a (possibly nested) map or
 *   coll of maps.
 */
logseq.graph_parser.util.remove_nils = (function logseq$graph_parser$util$remove_nils(nm){
return clojure.walk.postwalk((function (el){
if(cljs.core.map_QMARK_(el)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second)),el);
} else {
return el;
}
}),nm);
});
/**
 * remove pairs of key-value that has nil value from a map (nested not supported).
 */
logseq.graph_parser.util.remove_nils_non_nested = (function logseq$graph_parser$util$remove_nils_non_nested(nm){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second)),nm);
});
/**
 * remove pairs of key-value that has nil value from a coll of maps.
 */
logseq.graph_parser.util.fast_remove_nils = (function logseq$graph_parser$util$fast_remove_nils(nm){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (m){
if(cljs.core.map_QMARK_(m)){
return logseq.graph_parser.util.remove_nils_non_nested(m);
} else {
return m;
}
}),nm);
});
logseq.graph_parser.util.split_first = (function logseq$graph_parser$util$split_first(pattern,s){
var temp__5804__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5804__auto__)){
var first_index = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),first_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(first_index + cljs.core.count(pattern)),cljs.core.count(s))], null);
} else {
return null;
}
});
logseq.graph_parser.util.split_last = (function logseq$graph_parser$util$split_last(pattern,s){
var temp__5804__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5804__auto__)){
var last_index = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_index + cljs.core.count(pattern)),cljs.core.count(s))], null);
} else {
return null;
}
});
logseq.graph_parser.util.tag_valid_QMARK_ = (function logseq$graph_parser$util$tag_valid_QMARK_(tag_name){
if(typeof tag_name === 'string'){
return cljs.core.not(cljs.core.re_find(/[# \t\r\n]+/,tag_name));
} else {
return null;
}
});
logseq.graph_parser.util.safe_subs = (function logseq$graph_parser$util$safe_subs(var_args){
var G__53836 = arguments.length;
switch (G__53836) {
case 2:
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
var c = cljs.core.count(s);
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(s,start,c);
}));

(logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var c = cljs.core.count(s);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(function (){var x__5131__auto__ = c;
var y__5132__auto__ = start;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),(function (){var x__5131__auto__ = c;
var y__5132__auto__ = end;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
}));

(logseq.graph_parser.util.safe_subs.cljs$lang$maxFixedArity = 3);

logseq.graph_parser.util.unquote_string = (function logseq$graph_parser$util$unquote_string(v){
return clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(v,(1),(cljs.core.count(v) - (1))));
});
logseq.graph_parser.util.wrapped_by_quotes_QMARK_ = (function logseq$graph_parser$util$wrapped_by_quotes_QMARK_(v){
return ((typeof v === 'string') && ((((cljs.core.count(v) >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("\"",cljs.core.first(v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(v)], 0))))));
});
/**
 * Test if it is a `protocol://`-style URL.
 * 
 * NOTE: Can not handle mailto: links, use this with caution.
 */
logseq.graph_parser.util.url_QMARK_ = (function logseq$graph_parser$util$url_QMARK_(s){
var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
try{return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,"null",null], null), null),(new URL(s)).origin)));
}catch (e53837){var _e = e53837;
return false;
}} else {
return and__5041__auto__;
}
});
logseq.graph_parser.util.json__GT_clj = (function logseq$graph_parser$util$json__GT_clj(json_string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * Copy of frontend.util/zero-pad. Too basic to couple to main app
 */
logseq.graph_parser.util.zero_pad = (function logseq$graph_parser$util$zero_pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
logseq.graph_parser.util.remove_boundary_slashes = (function logseq$graph_parser$util$remove_boundary_slashes(s){
if(typeof s === 'string'){
var s__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(s)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(s__$1))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(((s__$1).length) - (1)));
} else {
return s__$1;
}
} else {
return null;
}
});
logseq.graph_parser.util.split_namespace_pages = (function logseq$graph_parser$util$split_namespace_pages(title){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,"/");
var others = cljs.core.rest(parts);
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts)], null);
while(true){
if(cljs.core.seq(others)){
var prev = cljs.core.last(result);
var G__53865 = cljs.core.rest(others);
var G__53866 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prev),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(others))].join(''));
others = G__53865;
result = G__53866;
continue;
} else {
return result;
}
break;
}
});
/**
 * Decode namespace underlines to slashed;
 * If continuous underlines, only decode at start;
 * Having empty namespace is invalid.
 */
logseq.graph_parser.util.decode_namespace_underlines = (function logseq$graph_parser$util$decode_namespace_underlines(string){
return clojure.string.replace(string,"___","/");
});
/**
 * Sanitize the page-name. Unify different diacritics and other visual differences.
 * Two objectives:
 * 1. To be the same as in the filesystem;
 * 2. To be easier to search
 */
logseq.graph_parser.util.page_name_sanity = (function logseq$graph_parser$util$page_name_sanity(page_name){
var G__53838 = page_name;
var G__53838__$1 = (((G__53838 == null))?null:logseq.graph_parser.util.remove_boundary_slashes(G__53838));
if((G__53838__$1 == null)){
return null;
} else {
return logseq.graph_parser.util.path_normalize(G__53838__$1);
}
});
/**
 * Remove those empty namespaces from title to make it a valid page name.
 */
logseq.graph_parser.util.make_valid_namespaces = (function logseq$graph_parser$util$make_valid_namespaces(title){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,"/")));
});
logseq.graph_parser.util.url_encoded_pattern = /%[0-9a-f]{2}/i;
/**
 * Parsing file name under the new file name format
 * Avoid calling directly
 */
logseq.graph_parser.util.tri_lb_title_parsing = (function logseq$graph_parser$util$tri_lb_title_parsing(file_name){
var G__53839 = file_name;
var G__53839__$1 = (((G__53839 == null))?null:logseq.graph_parser.util.decode_namespace_underlines(G__53839));
var G__53839__$2 = (((G__53839__$1 == null))?null:clojure.string.replace(G__53839__$1,logseq.graph_parser.util.url_encoded_pattern,logseq.graph_parser.util.safe_url_decode));
if((G__53839__$2 == null)){
return null;
} else {
return logseq.graph_parser.util.make_valid_namespaces(G__53839__$2);
}
});
/**
 * Sanitize the query string for a page name (mandate for :block/name)
 */
logseq.graph_parser.util.page_name_sanity_lc = (function logseq$graph_parser$util$page_name_sanity_lc(s){
return logseq.graph_parser.util.page_name_sanity(clojure.string.lower_case(s));
});
logseq.graph_parser.util.capitalize_all = (function logseq$graph_parser$util$capitalize_all(s){
var G__53840 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /);
var G__53840__$1 = (((G__53840 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,G__53840));
if((G__53840__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",G__53840__$1);
}
});
/**
 * Copy from medley
 */
logseq.graph_parser.util.distinct_by = (function logseq$graph_parser$util$distinct_by(f,coll){
var step = (function logseq$graph_parser$util$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__53841,seen__$1){
while(true){
var vec__53842 = p__53841;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53842,(0),null);
var xs__$1 = vec__53842;
var temp__5804__auto__ = cljs.core.seq(xs__$1);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__53867 = cljs.core.rest(s);
var G__53868 = seen__$1;
p__53841 = G__53867;
seen__$1 = G__53868;
continue;
} else {
return cljs.core.cons(x,logseq$graph_parser$util$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(cljs.core.seq(coll),cljs.core.PersistentHashSet.EMPTY);
});
logseq.graph_parser.util.normalize_format = (function logseq$graph_parser$util$normalize_format(format){
var G__53845 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__53845__$1 = (((G__53845 instanceof cljs.core.Keyword))?G__53845.fqn:null);
switch (G__53845__$1) {
case "md":
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);

break;
default:
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);

}
});
logseq.graph_parser.util.path__GT_file_name = (function logseq$graph_parser$util$path__GT_file_name(path){
if(clojure.string.includes_QMARK_(path,"/")){
return cljs.core.last(logseq.graph_parser.util.split_last("/",path));
} else {
return path;
}
});
logseq.graph_parser.util.path__GT_file_body = (function logseq$graph_parser$util$path__GT_file_body(path){
var temp__5804__auto__ = logseq.graph_parser.util.path__GT_file_name(path);
if(cljs.core.truth_(temp__5804__auto__)){
var file_name = temp__5804__auto__;
if(clojure.string.includes_QMARK_(file_name,".")){
return cljs.core.first(logseq.graph_parser.util.split_last(".",file_name));
} else {
return file_name;
}
} else {
return null;
}
});
logseq.graph_parser.util.path__GT_file_ext = (function logseq$graph_parser$util$path__GT_file_ext(path_or_file_name){
return cljs.core.second(cljs.core.re_find(/(?:\.)(\w+)[^.]*$/,path_or_file_name));
});
/**
 * File path to format keyword, :org, :markdown, etc.
 */
logseq.graph_parser.util.get_format = (function logseq$graph_parser$util$get_format(file){
if(cljs.core.truth_(file)){
return logseq.graph_parser.util.normalize_format(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__53846 = logseq.graph_parser.util.path__GT_file_ext(file);
if((G__53846 == null)){
return null;
} else {
return clojure.string.lower_case(G__53846);
}
})()));
} else {
return null;
}
});
/**
 * Copy of frontend.util/get-file-ext. Too basic to couple to main app
 */
logseq.graph_parser.util.get_file_ext = (function logseq$graph_parser$util$get_file_ext(file){
var and__5041__auto__ = typeof file === 'string';
if(and__5041__auto__){
var and__5041__auto____$1 = clojure.string.includes_QMARK_(file,".");
if(and__5041__auto____$1){
var G__53847 = logseq.graph_parser.util.path__GT_file_ext(file);
if((G__53847 == null)){
return null;
} else {
return clojure.string.lower_case(G__53847);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
/**
 * Determine if string is a valid edn keyword
 */
logseq.graph_parser.util.valid_edn_keyword_QMARK_ = (function logseq$graph_parser$util$valid_edn_keyword_QMARK_(s){
try{return cljs.core.boolean$((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(s));
if(and__5041__auto__){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," nil}"].join(''));
} else {
return and__5041__auto__;
}
})());
}catch (e53848){var _ = e53848;
return false;
}});
logseq.graph_parser.util.legacy_title_parsing = (function logseq$graph_parser$util$legacy_title_parsing(file_name_body){
var title = clojure.string.replace(file_name_body,".","/");
var or__5043__auto__ = logseq.graph_parser.util.safe_decode_uri_component(title);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return title;
}
});
/**
 * Convert file name in the given file name format to page title
 */
logseq.graph_parser.util.title_parsing = (function logseq$graph_parser$util$title_parsing(file_name_body,filename_format){
var G__53849 = filename_format;
var G__53849__$1 = (((G__53849 instanceof cljs.core.Keyword))?G__53849.fqn:null);
switch (G__53849__$1) {
case "triple-lowbar":
return logseq.graph_parser.util.tri_lb_title_parsing(file_name_body);

break;
default:
return logseq.graph_parser.util.legacy_title_parsing(file_name_body);

}
});
logseq.graph_parser.util.safe_read_string = (function logseq$graph_parser$util$safe_read_string(var_args){
var G__53851 = arguments.length;
switch (G__53851) {
case 1:
return logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1 = (function (content){
return logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,content);
}));

(logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,content){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(opts,content);
}catch (e53852){var e = e53852;
logseq.graph_parser.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("parse","read-string-failed","parse/read-string-failed",-1539006048),e], 0));

return cljs.core.PersistentArrayMap.EMPTY;
}}));

(logseq.graph_parser.util.safe_read_string.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
logseq.graph_parser.util.dissoc_in = (function logseq$graph_parser$util$dissoc_in(var_args){
var G__53857 = arguments.length;
switch (G__53857) {
case 2:
return logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53873 = arguments.length;
var i__5767__auto___53874 = (0);
while(true){
if((i__5767__auto___53874 < len__5766__auto___53873)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53874]));

var G__53875 = (i__5767__auto___53874 + (1));
i__5767__auto___53874 = G__53875;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5802__auto__ = cljs.core.seq(ks);
if(temp__5802__auto__){
var vec__53858 = temp__5802__auto__;
var seq__53859 = cljs.core.seq(vec__53858);
var first__53860 = cljs.core.first(seq__53859);
var seq__53859__$1 = cljs.core.next(seq__53859);
var k = first__53860;
var ks__$1 = seq__53859__$1;
if(cljs.core.seq(ks__$1)){
var v = logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
}));

(logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5802__auto__ = cljs.core.seq(kss);
if(temp__5802__auto__){
var vec__53861 = temp__5802__auto__;
var seq__53862 = cljs.core.seq(vec__53861);
var first__53863 = cljs.core.first(seq__53862);
var seq__53862__$1 = cljs.core.next(seq__53862);
var ks_SINGLEQUOTE_ = first__53863;
var kss__$1 = seq__53862__$1;
var G__53876 = logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var G__53877 = ks_SINGLEQUOTE_;
var G__53878 = kss__$1;
m = G__53876;
ks = G__53877;
kss = G__53878;
continue;
} else {
return logseq.graph_parser.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
break;
}
}));

/** @this {Function} */
(logseq.graph_parser.util.dissoc_in.cljs$lang$applyTo = (function (seq53854){
var G__53855 = cljs.core.first(seq53854);
var seq53854__$1 = cljs.core.next(seq53854);
var G__53856 = cljs.core.first(seq53854__$1);
var seq53854__$2 = cljs.core.next(seq53854__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53855,G__53856,seq53854__$2);
}));

(logseq.graph_parser.util.dissoc_in.cljs$lang$maxFixedArity = (2));


//# sourceMappingURL=logseq.graph_parser.util.js.map
