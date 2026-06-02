goog.provide('logseq.common.config');
logseq.common.config.hidden_QMARK_ = (function logseq$common$config$hidden_QMARK_(path,patterns){
var path__$1 = ((((typeof path === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path)))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1)):path);
return cljs.core.some((function (pattern){
var pattern__$1 = ((((typeof pattern === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(pattern)))))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join(''):pattern);
return clojure.string.starts_with_QMARK_(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),pattern__$1);
}),patterns);
});
/**
 * Removes files that match a pattern specified by :hidden config
 */
logseq.common.config.remove_hidden_files = (function logseq$common$config$remove_hidden_files(files,config,get_path_fn){
var temp__5802__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(config));
if(temp__5802__auto__){
var patterns = temp__5802__auto__;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var path = (get_path_fn.cljs$core$IFn$_invoke$arity$1 ? get_path_fn.cljs$core$IFn$_invoke$arity$1(file) : get_path_fn.call(null,file));
return logseq.common.config.hidden_QMARK_(path,patterns);
}),files);
} else {
return files;
}
});

//# sourceMappingURL=logseq.common.config.js.map
