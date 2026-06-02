goog.provide('frontend.modules.file.uprint');
frontend.modules.file.uprint.print_prefix_map_STAR_ = (function frontend$modules$file$uprint$print_prefix_map_STAR_(prefix,m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__102446_102454 = cljs.core.key(e);
var G__102447_102455 = w;
var G__102448_102456 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__102446_102454,G__102447_102455,G__102448_102456) : print_one.call(null,G__102446_102454,G__102447_102455,G__102448_102456));

cljs.core._write(w," ");

var G__102449 = cljs.core.val(e);
var G__102450 = w;
var G__102451 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__102449,G__102450,G__102451) : print_one.call(null,G__102449,G__102450,G__102451));
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"\n{"].join(''),"\n","}",opts,cljs.core.seq(m));
});
/**
 * Ugly printing fast, with newlines so that git diffs are smaller
 */
frontend.modules.file.uprint.ugly_pr_str = (function frontend$modules$file$uprint$ugly_pr_str(x){
var print_prefix_map_orig_val__102452 = cljs.core.print_prefix_map;
var print_prefix_map_temp_val__102453 = frontend.modules.file.uprint.print_prefix_map_STAR_;
(cljs.core.print_prefix_map = print_prefix_map_temp_val__102453);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core.print_prefix_map = print_prefix_map_orig_val__102452);
}});

//# sourceMappingURL=frontend.modules.file.uprint.js.map
