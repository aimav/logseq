goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__75052 = arguments.length;
switch (G__75052) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__75058 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75060 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75060);

try{var G__75062 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__75062);

return G__75062;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75058);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__75067 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75068 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75068);

try{var G__75069 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__75069);

return G__75069;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75067);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__75072 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75073 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75073);

try{var G__75075 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__75075);

return G__75075;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75072);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__75078 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75079 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75079);

try{var G__75080 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__75080);

return G__75080;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75078);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__75090 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__75091 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75091);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75090);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75271 = arguments.length;
var i__5767__auto___75272 = (0);
while(true){
if((i__5767__auto___75272 < len__5766__auto___75271)){
args__5772__auto__.push((arguments[i__5767__auto___75272]));

var G__75273 = (i__5767__auto___75272 + (1));
i__5767__auto___75272 = G__75273;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75119 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75120 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75121 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75122 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75123 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75124 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75125 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75126 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75127 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75128 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75129 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75130 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75131 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75132 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75126);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75127);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75128);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75129);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75130);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75131);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75132);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75125);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75124);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75123);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75122);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75121);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75120);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75119);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq75108){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75108));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__75140 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__75141 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75141);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75140);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75274 = arguments.length;
var i__5767__auto___75275 = (0);
while(true){
if((i__5767__auto___75275 < len__5766__auto___75274)){
args__5772__auto__.push((arguments[i__5767__auto___75275]));

var G__75276 = (i__5767__auto___75275 + (1));
i__5767__auto___75275 = G__75276;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75146 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75147 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75148 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75149 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75150 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75151 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__75152 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75153 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75154 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75155 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75156 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75157 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75152);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75153);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75154);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75155);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75156);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75157);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75151);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75150);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75149);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75148);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75147);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75146);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq75145){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75145));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75277 = arguments.length;
var i__5767__auto___75278 = (0);
while(true){
if((i__5767__auto___75278 < len__5766__auto___75277)){
args__5772__auto__.push((arguments[i__5767__auto___75278]));

var G__75279 = (i__5767__auto___75278 + (1));
i__5767__auto___75278 = G__75279;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75162 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75163 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75164 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75165 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75166 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75167 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75168 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75169 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75170 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75171 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75172 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75173 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75174 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75168);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75169);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75170);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75171);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75172);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75173);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75174);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75167);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75166);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75165);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75164);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75163);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75162);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75161);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq75160){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75160));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75280 = arguments.length;
var i__5767__auto___75281 = (0);
while(true){
if((i__5767__auto___75281 < len__5766__auto___75280)){
args__5772__auto__.push((arguments[i__5767__auto___75281]));

var G__75282 = (i__5767__auto___75281 + (1));
i__5767__auto___75281 = G__75282;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75203 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75204 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75205 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75206 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75207 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75208 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__75210 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75211 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75212 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75213 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75214 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75215 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75210);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75211);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75212);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75213);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75214);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75215);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75208);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75207);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75206);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75205);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75204);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75203);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq75191){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75191));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75283 = arguments.length;
var i__5767__auto___75284 = (0);
while(true){
if((i__5767__auto___75284 < len__5766__auto___75283)){
args__5772__auto__.push((arguments[i__5767__auto___75284]));

var G__75285 = (i__5767__auto___75284 + (1));
i__5767__auto___75284 = G__75285;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75220 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75221 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75222 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75223 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75224 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75225 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75226 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75227 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75228 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__75229 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75230 = null;
var _STAR_print_newline_STAR__temp_val__75231 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75226);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75227);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75228);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75229);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75230);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75231);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75225);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75224);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75223);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75222);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75221);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75220);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq75219){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75219));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75286 = arguments.length;
var i__5767__auto___75287 = (0);
while(true){
if((i__5767__auto___75287 < len__5766__auto___75286)){
args__5772__auto__.push((arguments[i__5767__auto___75287]));

var G__75288 = (i__5767__auto___75287 + (1));
i__5767__auto___75287 = G__75288;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75233 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75234 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75235 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75236 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75237 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75238 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__75239 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75240 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75241 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75242 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75243 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75244 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75239);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75240);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75241);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75242);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75243);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75244);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75238);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75237);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75236);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75235);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75234);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75233);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq75232){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75232));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75289 = arguments.length;
var i__5767__auto___75290 = (0);
while(true){
if((i__5767__auto___75290 < len__5766__auto___75289)){
args__5772__auto__.push((arguments[i__5767__auto___75290]));

var G__75291 = (i__5767__auto___75290 + (1));
i__5767__auto___75290 = G__75291;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75246 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75247 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75248 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75249 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75250 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75251 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75252 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75253 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75254 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75255 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75256 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75257 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75258 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75259 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75253);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75254);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75255);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75256);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75257);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75258);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75259);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75252);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75251);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75250);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75249);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75248);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75247);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75246);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq75245){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75245));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75292 = arguments.length;
var i__5767__auto___75293 = (0);
while(true){
if((i__5767__auto___75293 < len__5766__auto___75292)){
args__5772__auto__.push((arguments[i__5767__auto___75293]));

var G__75294 = (i__5767__auto___75293 + (1));
i__5767__auto___75293 = G__75294;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__75264__auto__","s__75264__auto__",-72578278,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__75265__auto__","x__75265__auto__",-2051860834,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75264__auto__","s__75264__auto__",-72578278,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75265__auto__","x__75265__auto__",-2051860834,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75264__auto__","s__75264__auto__",-72578278,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq75266){
var G__75267 = cljs.core.first(seq75266);
var seq75266__$1 = cljs.core.next(seq75266);
var G__75268 = cljs.core.first(seq75266__$1);
var seq75266__$2 = cljs.core.next(seq75266__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75267,G__75268,seq75266__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
