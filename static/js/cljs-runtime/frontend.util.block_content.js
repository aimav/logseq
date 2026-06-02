goog.provide('frontend.util.block_content');
frontend.util.block_content.get_ast = (function frontend$util$block_content$get_ast(content,format){
return frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
});
frontend.util.block_content.has_title_QMARK_ = (function frontend$util$block_content$has_title_QMARK_(content,format){
var ast = frontend.util.block_content.get_ast(content,format);
return frontend.format.mldoc.block_with_title_QMARK_(cljs.core.ffirst(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ast)));
});
/**
 * parses content and returns [title body]
 * returns nil if no title
 */
frontend.util.block_content.get_title_AMPERSAND_body = (function frontend$util$block_content$get_title_AMPERSAND_body(content,format){
var lines = clojure.string.split_lines(content);
if(frontend.util.block_content.has_title_QMARK_(content,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lines),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.rest(lines))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines)], null);
}
});

//# sourceMappingURL=frontend.util.block_content.js.map
