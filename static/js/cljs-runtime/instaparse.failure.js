goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__123408 = (line + (1));
var G__123409 = (1);
var G__123410 = (counter + (1));
line = G__123408;
col = G__123409;
counter = G__123410;
continue;
} else {
var G__123411 = line;
var G__123412 = (col + (1));
var G__123413 = (counter + (1));
line = G__123411;
col = G__123412;
counter = G__123413;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__123417 = cljs.core.next(chars);
var G__123418 = (n__$1 - (1));
chars = G__123417;
n__$1 = G__123418;
continue;
} else {
var G__123419 = cljs.core.next(chars);
var G__123420 = n__$1;
chars = G__123419;
n__$1 = G__123420;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__123374){
var map__123375 = p__123374;
var map__123375__$1 = cljs.core.__destructure_map(map__123375);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123375__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123375__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__123384_123425 = cljs.core.seq(full_reasons);
var chunk__123385_123426 = null;
var count__123386_123427 = (0);
var i__123387_123428 = (0);
while(true){
if((i__123387_123428 < count__123386_123427)){
var r_123429 = chunk__123385_123426.cljs$core$IIndexed$_nth$arity$2(null,i__123387_123428);
instaparse.failure.print_reason(r_123429);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__123430 = seq__123384_123425;
var G__123431 = chunk__123385_123426;
var G__123432 = count__123386_123427;
var G__123433 = (i__123387_123428 + (1));
seq__123384_123425 = G__123430;
chunk__123385_123426 = G__123431;
count__123386_123427 = G__123432;
i__123387_123428 = G__123433;
continue;
} else {
var temp__5804__auto___123434 = cljs.core.seq(seq__123384_123425);
if(temp__5804__auto___123434){
var seq__123384_123435__$1 = temp__5804__auto___123434;
if(cljs.core.chunked_seq_QMARK_(seq__123384_123435__$1)){
var c__5565__auto___123436 = cljs.core.chunk_first(seq__123384_123435__$1);
var G__123437 = cljs.core.chunk_rest(seq__123384_123435__$1);
var G__123438 = c__5565__auto___123436;
var G__123439 = cljs.core.count(c__5565__auto___123436);
var G__123440 = (0);
seq__123384_123425 = G__123437;
chunk__123385_123426 = G__123438;
count__123386_123427 = G__123439;
i__123387_123428 = G__123440;
continue;
} else {
var r_123441 = cljs.core.first(seq__123384_123435__$1);
instaparse.failure.print_reason(r_123441);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__123442 = cljs.core.next(seq__123384_123435__$1);
var G__123443 = null;
var G__123444 = (0);
var G__123445 = (0);
seq__123384_123425 = G__123442;
chunk__123385_123426 = G__123443;
count__123386_123427 = G__123444;
i__123387_123428 = G__123445;
continue;
}
} else {
}
}
break;
}

var seq__123389 = cljs.core.seq(partial_reasons);
var chunk__123390 = null;
var count__123391 = (0);
var i__123392 = (0);
while(true){
if((i__123392 < count__123391)){
var r = chunk__123390.cljs$core$IIndexed$_nth$arity$2(null,i__123392);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__123446 = seq__123389;
var G__123447 = chunk__123390;
var G__123448 = count__123391;
var G__123449 = (i__123392 + (1));
seq__123389 = G__123446;
chunk__123390 = G__123447;
count__123391 = G__123448;
i__123392 = G__123449;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__123389);
if(temp__5804__auto__){
var seq__123389__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__123389__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__123389__$1);
var G__123450 = cljs.core.chunk_rest(seq__123389__$1);
var G__123451 = c__5565__auto__;
var G__123452 = cljs.core.count(c__5565__auto__);
var G__123453 = (0);
seq__123389 = G__123450;
chunk__123390 = G__123451;
count__123391 = G__123452;
i__123392 = G__123453;
continue;
} else {
var r = cljs.core.first(seq__123389__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__123463 = cljs.core.next(seq__123389__$1);
var G__123464 = null;
var G__123465 = (0);
var G__123466 = (0);
seq__123389 = G__123463;
chunk__123390 = G__123464;
count__123391 = G__123465;
i__123392 = G__123466;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
