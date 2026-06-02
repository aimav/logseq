goog.provide('logseq.graph_parser.util.page_ref');
/**
 * Opening characters for page-ref
 */
logseq.graph_parser.util.page_ref.left_brackets = "[[";
/**
 * Closing characters for page-ref
 */
logseq.graph_parser.util.page_ref.right_brackets = "]]";
/**
 * Opening and closing characters for page-ref
 */
logseq.graph_parser.util.page_ref.left_and_right_brackets = [logseq.graph_parser.util.page_ref.left_brackets,logseq.graph_parser.util.page_ref.right_brackets].join('');
/**
 * Inner capture and doesn't match nested brackets
 */
logseq.graph_parser.util.page_ref.page_ref_re = /\[\[(.*?)\]\]/;
/**
 * Matches most inner nested brackets
 */
logseq.graph_parser.util.page_ref.page_ref_without_nested_re = /\[\[([^\[\]]+)\]\]/;
/**
 * Inner capture that matches anything between brackets
 */
logseq.graph_parser.util.page_ref.page_ref_any_re = /\[\[(.*)\]\]/;
/**
 * Determines if string is page-ref. Avoid using with format-specific page-refs e.g. org
 */
logseq.graph_parser.util.page_ref.page_ref_QMARK_ = (function logseq$graph_parser$util$page_ref$page_ref_QMARK_(s){
return ((clojure.string.starts_with_QMARK_(s,logseq.graph_parser.util.page_ref.left_brackets)) && (clojure.string.ends_with_QMARK_(s,logseq.graph_parser.util.page_ref.right_brackets)));
});
/**
 * Create a page ref given a page name
 */
logseq.graph_parser.util.page_ref.__GT_page_ref = (function logseq$graph_parser$util$page_ref$__GT_page_ref(page_name){
return [logseq.graph_parser.util.page_ref.left_brackets,cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),logseq.graph_parser.util.page_ref.right_brackets].join('');
});
/**
 * Extracts page-name from page-ref string
 */
logseq.graph_parser.util.page_ref.get_page_name = (function logseq$graph_parser$util$page_ref$get_page_name(s){
return cljs.core.second(cljs.core.re_matches(logseq.graph_parser.util.page_ref.page_ref_any_re,s));
});
/**
 * Extracts page-name from page-ref and fall back to arg. Useful for when user
 *   input may (not) be a page-ref
 */
logseq.graph_parser.util.page_ref.get_page_name_BANG_ = (function logseq$graph_parser$util$page_ref$get_page_name_BANG_(s){
var or__5043__auto__ = logseq.graph_parser.util.page_ref.get_page_name(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return s;
}
});

//# sourceMappingURL=logseq.graph_parser.util.page_ref.js.map
