goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101264 = arguments.length;
var i__5767__auto___101265 = (0);
while(true){
if((i__5767__auto___101265 < len__5766__auto___101264)){
args__5772__auto__.push((arguments[i__5767__auto___101265]));

var G__101266 = (i__5767__auto___101265 + (1));
i__5767__auto___101265 = G__101266;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq101203){
var G__101204 = cljs.core.first(seq101203);
var seq101203__$1 = cljs.core.next(seq101203);
var G__101205 = cljs.core.first(seq101203__$1);
var seq101203__$2 = cljs.core.next(seq101203__$1);
var G__101206 = cljs.core.first(seq101203__$2);
var seq101203__$3 = cljs.core.next(seq101203__$2);
var G__101207 = cljs.core.first(seq101203__$3);
var seq101203__$4 = cljs.core.next(seq101203__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101204,G__101205,G__101206,G__101207,seq101203__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101267 = arguments.length;
var i__5767__auto___101268 = (0);
while(true){
if((i__5767__auto___101268 < len__5766__auto___101267)){
args__5772__auto__.push((arguments[i__5767__auto___101268]));

var G__101269 = (i__5767__auto___101268 + (1));
i__5767__auto___101268 = G__101269;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq101208){
var G__101209 = cljs.core.first(seq101208);
var seq101208__$1 = cljs.core.next(seq101208);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101209,seq101208__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101270 = arguments.length;
var i__5767__auto___101271 = (0);
while(true){
if((i__5767__auto___101271 < len__5766__auto___101270)){
args__5772__auto__.push((arguments[i__5767__auto___101271]));

var G__101272 = (i__5767__auto___101271 + (1));
i__5767__auto___101271 = G__101272;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq101210){
var G__101211 = cljs.core.first(seq101210);
var seq101210__$1 = cljs.core.next(seq101210);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101211,seq101210__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101273 = arguments.length;
var i__5767__auto___101274 = (0);
while(true){
if((i__5767__auto___101274 < len__5766__auto___101273)){
args__5772__auto__.push((arguments[i__5767__auto___101274]));

var G__101275 = (i__5767__auto___101274 + (1));
i__5767__auto___101274 = G__101275;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq101212){
var G__101213 = cljs.core.first(seq101212);
var seq101212__$1 = cljs.core.next(seq101212);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101213,seq101212__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101276 = arguments.length;
var i__5767__auto___101277 = (0);
while(true){
if((i__5767__auto___101277 < len__5766__auto___101276)){
args__5772__auto__.push((arguments[i__5767__auto___101277]));

var G__101278 = (i__5767__auto___101277 + (1));
i__5767__auto___101277 = G__101278;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq101214){
var G__101215 = cljs.core.first(seq101214);
var seq101214__$1 = cljs.core.next(seq101214);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101215,seq101214__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101279 = arguments.length;
var i__5767__auto___101280 = (0);
while(true){
if((i__5767__auto___101280 < len__5766__auto___101279)){
args__5772__auto__.push((arguments[i__5767__auto___101280]));

var G__101281 = (i__5767__auto___101280 + (1));
i__5767__auto___101280 = G__101281;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq101216){
var G__101217 = cljs.core.first(seq101216);
var seq101216__$1 = cljs.core.next(seq101216);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101217,seq101216__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101282 = arguments.length;
var i__5767__auto___101283 = (0);
while(true){
if((i__5767__auto___101283 < len__5766__auto___101282)){
args__5772__auto__.push((arguments[i__5767__auto___101283]));

var G__101284 = (i__5767__auto___101283 + (1));
i__5767__auto___101283 = G__101284;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq101218){
var G__101219 = cljs.core.first(seq101218);
var seq101218__$1 = cljs.core.next(seq101218);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101219,seq101218__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101285 = arguments.length;
var i__5767__auto___101286 = (0);
while(true){
if((i__5767__auto___101286 < len__5766__auto___101285)){
args__5772__auto__.push((arguments[i__5767__auto___101286]));

var G__101287 = (i__5767__auto___101286 + (1));
i__5767__auto___101286 = G__101287;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq101220){
var G__101221 = cljs.core.first(seq101220);
var seq101220__$1 = cljs.core.next(seq101220);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101221,seq101220__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101288 = arguments.length;
var i__5767__auto___101289 = (0);
while(true){
if((i__5767__auto___101289 < len__5766__auto___101288)){
args__5772__auto__.push((arguments[i__5767__auto___101289]));

var G__101290 = (i__5767__auto___101289 + (1));
i__5767__auto___101289 = G__101290;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq101222){
var G__101223 = cljs.core.first(seq101222);
var seq101222__$1 = cljs.core.next(seq101222);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101223,seq101222__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101291 = arguments.length;
var i__5767__auto___101292 = (0);
while(true){
if((i__5767__auto___101292 < len__5766__auto___101291)){
args__5772__auto__.push((arguments[i__5767__auto___101292]));

var G__101293 = (i__5767__auto___101292 + (1));
i__5767__auto___101292 = G__101293;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq101224){
var G__101225 = cljs.core.first(seq101224);
var seq101224__$1 = cljs.core.next(seq101224);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101225,seq101224__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101294 = arguments.length;
var i__5767__auto___101295 = (0);
while(true){
if((i__5767__auto___101295 < len__5766__auto___101294)){
args__5772__auto__.push((arguments[i__5767__auto___101295]));

var G__101296 = (i__5767__auto___101295 + (1));
i__5767__auto___101295 = G__101296;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq101226){
var G__101227 = cljs.core.first(seq101226);
var seq101226__$1 = cljs.core.next(seq101226);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101227,seq101226__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101297 = arguments.length;
var i__5767__auto___101298 = (0);
while(true){
if((i__5767__auto___101298 < len__5766__auto___101297)){
args__5772__auto__.push((arguments[i__5767__auto___101298]));

var G__101299 = (i__5767__auto___101298 + (1));
i__5767__auto___101298 = G__101299;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq101228){
var G__101229 = cljs.core.first(seq101228);
var seq101228__$1 = cljs.core.next(seq101228);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101229,seq101228__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101300 = arguments.length;
var i__5767__auto___101301 = (0);
while(true){
if((i__5767__auto___101301 < len__5766__auto___101300)){
args__5772__auto__.push((arguments[i__5767__auto___101301]));

var G__101302 = (i__5767__auto___101301 + (1));
i__5767__auto___101301 = G__101302;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq101230){
var G__101231 = cljs.core.first(seq101230);
var seq101230__$1 = cljs.core.next(seq101230);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101231,seq101230__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101303 = arguments.length;
var i__5767__auto___101304 = (0);
while(true){
if((i__5767__auto___101304 < len__5766__auto___101303)){
args__5772__auto__.push((arguments[i__5767__auto___101304]));

var G__101305 = (i__5767__auto___101304 + (1));
i__5767__auto___101304 = G__101305;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq101232){
var G__101233 = cljs.core.first(seq101232);
var seq101232__$1 = cljs.core.next(seq101232);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101233,seq101232__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101306 = arguments.length;
var i__5767__auto___101307 = (0);
while(true){
if((i__5767__auto___101307 < len__5766__auto___101306)){
args__5772__auto__.push((arguments[i__5767__auto___101307]));

var G__101308 = (i__5767__auto___101307 + (1));
i__5767__auto___101307 = G__101308;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq101234){
var G__101235 = cljs.core.first(seq101234);
var seq101234__$1 = cljs.core.next(seq101234);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101235,seq101234__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101309 = arguments.length;
var i__5767__auto___101310 = (0);
while(true){
if((i__5767__auto___101310 < len__5766__auto___101309)){
args__5772__auto__.push((arguments[i__5767__auto___101310]));

var G__101311 = (i__5767__auto___101310 + (1));
i__5767__auto___101310 = G__101311;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq101236){
var G__101237 = cljs.core.first(seq101236);
var seq101236__$1 = cljs.core.next(seq101236);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101237,seq101236__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101312 = arguments.length;
var i__5767__auto___101313 = (0);
while(true){
if((i__5767__auto___101313 < len__5766__auto___101312)){
args__5772__auto__.push((arguments[i__5767__auto___101313]));

var G__101314 = (i__5767__auto___101313 + (1));
i__5767__auto___101313 = G__101314;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq101238){
var G__101239 = cljs.core.first(seq101238);
var seq101238__$1 = cljs.core.next(seq101238);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101239,seq101238__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101315 = arguments.length;
var i__5767__auto___101316 = (0);
while(true){
if((i__5767__auto___101316 < len__5766__auto___101315)){
args__5772__auto__.push((arguments[i__5767__auto___101316]));

var G__101317 = (i__5767__auto___101316 + (1));
i__5767__auto___101316 = G__101317;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq101240){
var G__101241 = cljs.core.first(seq101240);
var seq101240__$1 = cljs.core.next(seq101240);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101241,seq101240__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101318 = arguments.length;
var i__5767__auto___101319 = (0);
while(true){
if((i__5767__auto___101319 < len__5766__auto___101318)){
args__5772__auto__.push((arguments[i__5767__auto___101319]));

var G__101320 = (i__5767__auto___101319 + (1));
i__5767__auto___101319 = G__101320;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq101242){
var G__101243 = cljs.core.first(seq101242);
var seq101242__$1 = cljs.core.next(seq101242);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101243,seq101242__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101321 = arguments.length;
var i__5767__auto___101322 = (0);
while(true){
if((i__5767__auto___101322 < len__5766__auto___101321)){
args__5772__auto__.push((arguments[i__5767__auto___101322]));

var G__101323 = (i__5767__auto___101322 + (1));
i__5767__auto___101322 = G__101323;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq101244){
var G__101245 = cljs.core.first(seq101244);
var seq101244__$1 = cljs.core.next(seq101244);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101245,seq101244__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101324 = arguments.length;
var i__5767__auto___101325 = (0);
while(true){
if((i__5767__auto___101325 < len__5766__auto___101324)){
args__5772__auto__.push((arguments[i__5767__auto___101325]));

var G__101326 = (i__5767__auto___101325 + (1));
i__5767__auto___101325 = G__101326;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq101246){
var G__101247 = cljs.core.first(seq101246);
var seq101246__$1 = cljs.core.next(seq101246);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101247,seq101246__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101327 = arguments.length;
var i__5767__auto___101328 = (0);
while(true){
if((i__5767__auto___101328 < len__5766__auto___101327)){
args__5772__auto__.push((arguments[i__5767__auto___101328]));

var G__101329 = (i__5767__auto___101328 + (1));
i__5767__auto___101328 = G__101329;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq101248){
var G__101249 = cljs.core.first(seq101248);
var seq101248__$1 = cljs.core.next(seq101248);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101249,seq101248__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101330 = arguments.length;
var i__5767__auto___101331 = (0);
while(true){
if((i__5767__auto___101331 < len__5766__auto___101330)){
args__5772__auto__.push((arguments[i__5767__auto___101331]));

var G__101332 = (i__5767__auto___101331 + (1));
i__5767__auto___101331 = G__101332;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq101250){
var G__101251 = cljs.core.first(seq101250);
var seq101250__$1 = cljs.core.next(seq101250);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101251,seq101250__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101333 = arguments.length;
var i__5767__auto___101334 = (0);
while(true){
if((i__5767__auto___101334 < len__5766__auto___101333)){
args__5772__auto__.push((arguments[i__5767__auto___101334]));

var G__101335 = (i__5767__auto___101334 + (1));
i__5767__auto___101334 = G__101335;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq101252){
var G__101253 = cljs.core.first(seq101252);
var seq101252__$1 = cljs.core.next(seq101252);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101253,seq101252__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101336 = arguments.length;
var i__5767__auto___101337 = (0);
while(true){
if((i__5767__auto___101337 < len__5766__auto___101336)){
args__5772__auto__.push((arguments[i__5767__auto___101337]));

var G__101338 = (i__5767__auto___101337 + (1));
i__5767__auto___101337 = G__101338;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq101254){
var G__101255 = cljs.core.first(seq101254);
var seq101254__$1 = cljs.core.next(seq101254);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101255,seq101254__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101339 = arguments.length;
var i__5767__auto___101340 = (0);
while(true){
if((i__5767__auto___101340 < len__5766__auto___101339)){
args__5772__auto__.push((arguments[i__5767__auto___101340]));

var G__101341 = (i__5767__auto___101340 + (1));
i__5767__auto___101340 = G__101341;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38129__auto__,rest__38130__auto__){
var convert_case__38131__auto__ = (function (p1__38128__38132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__38128__38132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38129__auto__,convert_case__38131__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq101256){
var G__101257 = cljs.core.first(seq101256);
var seq101256__$1 = cljs.core.next(seq101256);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101257,seq101256__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101342 = arguments.length;
var i__5767__auto___101343 = (0);
while(true){
if((i__5767__auto___101343 < len__5766__auto___101342)){
args__5772__auto__.push((arguments[i__5767__auto___101343]));

var G__101344 = (i__5767__auto___101343 + (1));
i__5767__auto___101343 = G__101344;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq101258){
var G__101259 = cljs.core.first(seq101258);
var seq101258__$1 = cljs.core.next(seq101258);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101259,seq101258__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101345 = arguments.length;
var i__5767__auto___101346 = (0);
while(true){
if((i__5767__auto___101346 < len__5766__auto___101345)){
args__5772__auto__.push((arguments[i__5767__auto___101346]));

var G__101347 = (i__5767__auto___101346 + (1));
i__5767__auto___101346 = G__101347;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq101260){
var G__101261 = cljs.core.first(seq101260);
var seq101260__$1 = cljs.core.next(seq101260);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101261,seq101260__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___101348 = arguments.length;
var i__5767__auto___101349 = (0);
while(true){
if((i__5767__auto___101349 < len__5766__auto___101348)){
args__5772__auto__.push((arguments[i__5767__auto___101349]));

var G__101350 = (i__5767__auto___101349 + (1));
i__5767__auto___101349 = G__101350;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38134__auto__,rest__38135__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__38134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38135__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq101262){
var G__101263 = cljs.core.first(seq101262);
var seq101262__$1 = cljs.core.next(seq101262);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101263,seq101262__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
