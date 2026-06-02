goog.provide('malli.instrument');
goog.scope(function(){
  malli.instrument.goog$module$goog$object = goog.module.get('goog.object');
});
malli.instrument._ns_js_path = (function malli$instrument$_ns_js_path(ns){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),/\./)));
});
malli.instrument._prop_js_path = (function malli$instrument$_prop_js_path(ns,prop){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),/\./),cljs.core.name(prop))));
});
malli.instrument._get_prop = (function malli$instrument$_get_prop(ns,prop){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._prop_js_path(ns,prop));
});
malli.instrument._get_ns = (function malli$instrument$_get_ns(ns){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._ns_js_path(ns));
});
malli.instrument._find_var = (function malli$instrument$_find_var(n,s){
return malli.instrument._get_prop(n,s);
});
malli.instrument._original = (function malli$instrument$_original(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$original");
});
malli.instrument._instrumented_QMARK_ = (function malli$instrument$_instrumented_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$instrumented?") === true;
});
malli.instrument.meta_fn = (function malli$instrument$meta_fn(f,m){
var new_f = goog.bind(f,({}));
goog.mixin(new_f,f);

var x123220_123655 = new_f;
(x123220_123655.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x123220_123655.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return m;
}));


return new_f;
});
malli.instrument._filter_ns = (function malli$instrument$_filter_ns(var_args){
var args__5772__auto__ = [];
var len__5766__auto___123656 = arguments.length;
var i__5767__auto___123657 = (0);
while(true){
if((i__5767__auto___123657 < len__5766__auto___123656)){
args__5772__auto__.push((arguments[i__5767__auto___123657]));

var G__123658 = (i__5767__auto___123657 + (1));
i__5767__auto___123657 = G__123658;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__123233 = cljs.core.set(ns);
return (fexpr__123233.cljs$core$IFn$_invoke$arity$1 ? fexpr__123233.cljs$core$IFn$_invoke$arity$1(n) : fexpr__123233.call(null,n));
});
}));

(malli.instrument._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument._filter_ns.cljs$lang$applyTo = (function (seq123223){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq123223));
}));

malli.instrument._filter_var = (function malli$instrument$_filter_var(f){
return (function (n,s,d){
var G__123238 = (new cljs.core.Var(cljs.core.constantly(malli.instrument._find_var(n,s)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s),d));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__123238) : f.call(null,G__123238));
});
});
malli.instrument._filter_schema = (function malli$instrument$_filter_schema(f){
return (function (_,___$1,p__123243){
var map__123244 = p__123243;
var map__123244__$1 = cljs.core.__destructure_map(map__123244);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123244__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema) : f.call(null,schema));
});
});
malli.instrument._arity__GT_schema = (function malli$instrument$_arity__GT_schema(fn_schema){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema))),schema], null);
}),cljs.core.rest(fn_schema)));
});
malli.instrument._variadic_QMARK_ = (function malli$instrument$_variadic_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$core$IFn$_invoke$arity$variadic");
});
malli.instrument._max_fixed_arity = (function malli$instrument$_max_fixed_arity(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$lang$maxFixedArity");
});
malli.instrument._pure_variadic_QMARK_ = (function malli$instrument$_pure_variadic_QMARK_(f){
var max_fixed_arity = malli.instrument._max_fixed_arity(f);
var and__5041__auto__ = max_fixed_arity;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = malli.instrument._variadic_QMARK_(f);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.every_QMARK_((function (p1__123246_SHARP_){
return (!(cljs.core.fn_QMARK_(malli.instrument.goog$module$goog$object.get(f,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__123246_SHARP_)].join('')))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
malli.instrument._replace_variadic_fn = (function malli$instrument$_replace_variadic_fn(original_fn,n,s,opts){
var accessor = "cljs$core$IFn$_invoke$arity$variadic";
var arity_fn = malli.instrument.goog$module$goog$object.get(original_fn,accessor);
if(cljs.core.truth_(arity_fn)){
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

var max_fixed_arity = malli.instrument._max_fixed_arity(original_fn);
var instrumented_variadic_fn = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,(function() { 
var G__123659__delegate = function (args){
var vec__123258 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123258,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123258,(1),null);
var final_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(rest_args)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arity_fn,final_args);
};
var G__123659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__123660__i = 0, G__123660__a = new Array(arguments.length -  0);
while (G__123660__i < G__123660__a.length) {G__123660__a[G__123660__i] = arguments[G__123660__i + 0]; ++G__123660__i;}
  args = new cljs.core.IndexedSeq(G__123660__a,0,null);
} 
return G__123659__delegate.call(this,args);};
G__123659.cljs$lang$maxFixedArity = 0;
G__123659.cljs$lang$applyTo = (function (arglist__123661){
var args = cljs.core.seq(arglist__123661);
return G__123659__delegate(args);
});
G__123659.cljs$core$IFn$_invoke$arity$variadic = G__123659__delegate;
return G__123659;
})()
);
var instrumented_wrapper = (function() { 
var G__123662__delegate = function (args){
var vec__123264 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123264,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123264,(1),null);
var final_args = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),cljs.core.not_empty(rest_args))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instrumented_variadic_fn,final_args);
};
var G__123662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__123663__i = 0, G__123663__a = new Array(arguments.length -  0);
while (G__123663__i < G__123663__a.length) {G__123663__a[G__123663__i] = arguments[G__123663__i + 0]; ++G__123663__i;}
  args = new cljs.core.IndexedSeq(G__123663__a,0,null);
} 
return G__123662__delegate.call(this,args);};
G__123662.cljs$lang$maxFixedArity = 0;
G__123662.cljs$lang$applyTo = (function (arglist__123664){
var args = cljs.core.seq(arglist__123664);
return G__123662__delegate(args);
});
G__123662.cljs$core$IFn$_invoke$arity$variadic = G__123662__delegate;
return G__123662;
})()
;
malli.instrument.goog$module$goog$object.set(instrumented_wrapper,"malli$instrument$original",arity_fn);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor,instrumented_wrapper);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));
} else {
return null;
}
});
malli.instrument._replace_multi_arity = (function malli$instrument$_replace_multi_arity(original_fn,n,s,opts){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts);
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));

var seq__123268 = cljs.core.seq(malli.instrument._arity__GT_schema(schema));
var chunk__123269 = null;
var count__123270 = (0);
var i__123271 = (0);
while(true){
if((i__123271 < count__123270)){
var vec__123288 = chunk__123269.cljs$core$IIndexed$_nth$arity$2(null,i__123271);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123288,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123288,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_123665 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('');
var arity_fn_123666 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_123665);
if(cljs.core.truth_(arity_fn_123666)){
var instrumented_fn_123667 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_123666);
malli.instrument.goog$module$goog$object.set(instrumented_fn_123667,"malli$instrument$original",arity_fn_123666);

malli.instrument.goog$module$goog$object.set(instrumented_fn_123667,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_123665,instrumented_fn_123667);
} else {
}
}


var G__123668 = seq__123268;
var G__123669 = chunk__123269;
var G__123670 = count__123270;
var G__123671 = (i__123271 + (1));
seq__123268 = G__123668;
chunk__123269 = G__123669;
count__123270 = G__123670;
i__123271 = G__123671;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__123268);
if(temp__5804__auto__){
var seq__123268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__123268__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__123268__$1);
var G__123672 = cljs.core.chunk_rest(seq__123268__$1);
var G__123673 = c__5565__auto__;
var G__123674 = cljs.core.count(c__5565__auto__);
var G__123675 = (0);
seq__123268 = G__123672;
chunk__123269 = G__123673;
count__123270 = G__123674;
i__123271 = G__123675;
continue;
} else {
var vec__123294 = cljs.core.first(seq__123268__$1);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123294,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123294,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_123676 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('');
var arity_fn_123677 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_123676);
if(cljs.core.truth_(arity_fn_123677)){
var instrumented_fn_123678 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_123677);
malli.instrument.goog$module$goog$object.set(instrumented_fn_123678,"malli$instrument$original",arity_fn_123677);

malli.instrument.goog$module$goog$object.set(instrumented_fn_123678,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_123676,instrumented_fn_123678);
} else {
}
}


var G__123679 = cljs.core.next(seq__123268__$1);
var G__123680 = null;
var G__123681 = (0);
var G__123682 = (0);
seq__123268 = G__123679;
chunk__123269 = G__123680;
count__123270 = G__123681;
i__123271 = G__123682;
continue;
}
} else {
return null;
}
}
break;
}
});
malli.instrument._replace_fn = (function malli$instrument$_replace_fn(original_fn,n,s,opts){
try{if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn))){
return malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn))){
return malli.instrument._replace_multi_arity(original_fn,n,s,opts);
} else {
var instrumented_fn = malli.instrument.meta_fn(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,original_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))], null));
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$original",original_fn);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s)),instrumented_fn);

}
}
}catch (e123297){var e = e123297;
if((e instanceof cljs.core.ExceptionInfo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Schema error when instrumenting function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join(''),cljs.core.ex_data(e));
} else {
throw (new Error(["Schema error when instrumenting function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}
}});
malli.instrument._strument_BANG_ = (function malli$instrument$_strument_BANG_(var_args){
var G__123302 = arguments.length;
switch (G__123302) {
case 0:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__123303){
var map__123304 = p__123303;
var map__123304__$1 = cljs.core.__destructure_map(map__123304);
var options = map__123304__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123304__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123304__$1,new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123304__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123304__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123304__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var skip_instrumented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123304__$1,new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),false);
var seq__123305 = cljs.core.seq(data);
var chunk__123310 = null;
var count__123311 = (0);
var i__123312 = (0);
while(true){
if((i__123312 < count__123311)){
var vec__123520 = chunk__123310.cljs$core$IIndexed$_nth$arity$2(null,i__123312);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123520,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123520,(1),null);
var seq__123313_123684 = cljs.core.seq(d);
var chunk__123314_123685 = null;
var count__123315_123686 = (0);
var i__123316_123687 = (0);
while(true){
if((i__123316_123687 < count__123315_123686)){
var vec__123553_123688 = chunk__123314_123685.cljs$core$IIndexed$_nth$arity$2(null,i__123316_123687);
var s_123689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123553_123688,(0),null);
var d_123690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123553_123688,(1),null);
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(filters);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(((function (seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123553_123688,s_123689,d_123690__$1,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__123298_SHARP_){
return (p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_123689,d_123690__$1) : p1__123298_SHARP_.call(null,n,s_123689,d_123690__$1));
});})(seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123553_123688,s_123689,d_123690__$1,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___123691 = malli.instrument._find_var(n,s_123689);
if(cljs.core.truth_(temp__5804__auto___123691)){
var v_123692 = temp__5804__auto___123691;
var G__123556_123693 = mode;
var G__123556_123694__$1 = (((G__123556_123693 instanceof cljs.core.Keyword))?G__123556_123693.fqn:null);
switch (G__123556_123694__$1) {
case "instrument":
var original_fn_123696 = (function (){var or__5043__auto__ = malli.instrument._original(v_123692);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123692;
}
})();
var dgen_123697 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__123557 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__123557,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123557,$,original_fn_123696,G__123556_123693,G__123556_123694__$1,v_123692,temp__5804__auto___123691,vec__123553_123688,s_123689,d_123690__$1,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123557,$,original_fn_123696,G__123556_123693,G__123556_123694__$1,v_123692,temp__5804__auto___123691,vec__123553_123688,s_123689,d_123690__$1,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__123558 = t;
var G__123559 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_123689)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__123558,G__123559) : r.call(null,G__123558,G__123559));
});
;})(seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123557,$,original_fn_123696,G__123556_123693,G__123556_123694__$1,v_123692,temp__5804__auto___123691,vec__123553_123688,s_123689,d_123690__$1,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123557,$,original_fn_123696,G__123556_123693,G__123556_123694__$1,v_123692,temp__5804__auto___123691,vec__123553_123688,s_123689,d_123690__$1,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__123557;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_123690__$1], 0));
if(cljs.core.truth_((function (){var and__5041__auto__ = gen;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123690__$1) === true;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123690__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return malli.instrument._instrumented_QMARK_(v_123692);
} else {
return and__5041__auto__;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["skipping",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123689),"already instrumented"], 0));
} else {
if(cljs.core.truth_(original_fn_123696)){
malli.instrument._replace_fn(original_fn_123696,n,s_123689,dgen_123697);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..instrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123689)], 0));
} else {
}
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_123692)){
var original_fn_123698 = (function (){var or__5043__auto__ = malli.instrument._original(v_123692);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123692;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_123698))){
var accessor_123699 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_123700 = malli.instrument.goog$module$goog$object.get(v_123692,accessor_123699);
var orig_variadic_fn_123701 = malli.instrument.goog$module$goog$object.get(variadic_fn_123700,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123698,accessor_123699,orig_variadic_fn_123701);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_123698))){
var seq__123560_123702 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__123563_123703 = null;
var count__123564_123704 = (0);
var i__123565_123705 = (0);
while(true){
if((i__123565_123705 < count__123564_123704)){
var arity_123706 = chunk__123563_123703.cljs$core$IIndexed$_nth$arity$2(null,i__123565_123705);
var accessor_123707 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123706)].join('');
var arity_fn_123708 = malli.instrument.goog$module$goog$object.get(original_fn_123698,accessor_123707);
if(cljs.core.truth_(arity_fn_123708)){
var orig_123709 = malli.instrument.goog$module$goog$object.get(arity_fn_123708,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123698,accessor_123707,orig_123709);


var G__123710 = seq__123560_123702;
var G__123711 = chunk__123563_123703;
var G__123712 = count__123564_123704;
var G__123713 = (i__123565_123705 + (1));
seq__123560_123702 = G__123710;
chunk__123563_123703 = G__123711;
count__123564_123704 = G__123712;
i__123565_123705 = G__123713;
continue;
} else {
var G__123714 = seq__123560_123702;
var G__123715 = chunk__123563_123703;
var G__123716 = count__123564_123704;
var G__123717 = (i__123565_123705 + (1));
seq__123560_123702 = G__123714;
chunk__123563_123703 = G__123715;
count__123564_123704 = G__123716;
i__123565_123705 = G__123717;
continue;
}
} else {
var temp__5804__auto___123718__$1 = cljs.core.seq(seq__123560_123702);
if(temp__5804__auto___123718__$1){
var seq__123560_123719__$1 = temp__5804__auto___123718__$1;
if(cljs.core.chunked_seq_QMARK_(seq__123560_123719__$1)){
var c__5565__auto___123720 = cljs.core.chunk_first(seq__123560_123719__$1);
var G__123721 = cljs.core.chunk_rest(seq__123560_123719__$1);
var G__123722 = c__5565__auto___123720;
var G__123723 = cljs.core.count(c__5565__auto___123720);
var G__123724 = (0);
seq__123560_123702 = G__123721;
chunk__123563_123703 = G__123722;
count__123564_123704 = G__123723;
i__123565_123705 = G__123724;
continue;
} else {
var arity_123725 = cljs.core.first(seq__123560_123719__$1);
var accessor_123726 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123725)].join('');
var arity_fn_123727 = malli.instrument.goog$module$goog$object.get(original_fn_123698,accessor_123726);
if(cljs.core.truth_(arity_fn_123727)){
var orig_123728 = malli.instrument.goog$module$goog$object.get(arity_fn_123727,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123698,accessor_123726,orig_123728);


var G__123729 = cljs.core.next(seq__123560_123719__$1);
var G__123730 = null;
var G__123731 = (0);
var G__123732 = (0);
seq__123560_123702 = G__123729;
chunk__123563_123703 = G__123730;
count__123564_123704 = G__123731;
i__123565_123705 = G__123732;
continue;
} else {
var G__123733 = cljs.core.next(seq__123560_123719__$1);
var G__123734 = null;
var G__123735 = (0);
var G__123736 = (0);
seq__123560_123702 = G__123733;
chunk__123563_123703 = G__123734;
count__123564_123704 = G__123735;
i__123565_123705 = G__123736;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_123689)),original_fn_123698);

}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..unstrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123689)], 0));
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_123692,d_123690__$1) : mode.call(null,v_123692,d_123690__$1));

}
} else {
}
} else {
}


var G__123737 = seq__123313_123684;
var G__123738 = chunk__123314_123685;
var G__123739 = count__123315_123686;
var G__123740 = (i__123316_123687 + (1));
seq__123313_123684 = G__123737;
chunk__123314_123685 = G__123738;
count__123315_123686 = G__123739;
i__123316_123687 = G__123740;
continue;
} else {
var temp__5804__auto___123741 = cljs.core.seq(seq__123313_123684);
if(temp__5804__auto___123741){
var seq__123313_123742__$1 = temp__5804__auto___123741;
if(cljs.core.chunked_seq_QMARK_(seq__123313_123742__$1)){
var c__5565__auto___123743 = cljs.core.chunk_first(seq__123313_123742__$1);
var G__123744 = cljs.core.chunk_rest(seq__123313_123742__$1);
var G__123745 = c__5565__auto___123743;
var G__123746 = cljs.core.count(c__5565__auto___123743);
var G__123747 = (0);
seq__123313_123684 = G__123744;
chunk__123314_123685 = G__123745;
count__123315_123686 = G__123746;
i__123316_123687 = G__123747;
continue;
} else {
var vec__123568_123748 = cljs.core.first(seq__123313_123742__$1);
var s_123749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123568_123748,(0),null);
var d_123750__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123568_123748,(1),null);
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(filters);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(((function (seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123568_123748,s_123749,d_123750__$1,seq__123313_123742__$1,temp__5804__auto___123741,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__123298_SHARP_){
return (p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_123749,d_123750__$1) : p1__123298_SHARP_.call(null,n,s_123749,d_123750__$1));
});})(seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123568_123748,s_123749,d_123750__$1,seq__123313_123742__$1,temp__5804__auto___123741,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___123751__$1 = malli.instrument._find_var(n,s_123749);
if(cljs.core.truth_(temp__5804__auto___123751__$1)){
var v_123752 = temp__5804__auto___123751__$1;
var G__123571_123753 = mode;
var G__123571_123754__$1 = (((G__123571_123753 instanceof cljs.core.Keyword))?G__123571_123753.fqn:null);
switch (G__123571_123754__$1) {
case "instrument":
var original_fn_123756 = (function (){var or__5043__auto__ = malli.instrument._original(v_123752);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123752;
}
})();
var dgen_123757 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__123572 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__123572,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123572,$,original_fn_123756,G__123571_123753,G__123571_123754__$1,v_123752,temp__5804__auto___123751__$1,vec__123568_123748,s_123749,d_123750__$1,seq__123313_123742__$1,temp__5804__auto___123741,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123572,$,original_fn_123756,G__123571_123753,G__123571_123754__$1,v_123752,temp__5804__auto___123751__$1,vec__123568_123748,s_123749,d_123750__$1,seq__123313_123742__$1,temp__5804__auto___123741,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__123573 = t;
var G__123574 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_123749)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__123573,G__123574) : r.call(null,G__123573,G__123574));
});
;})(seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123572,$,original_fn_123756,G__123571_123753,G__123571_123754__$1,v_123752,temp__5804__auto___123751__$1,vec__123568_123748,s_123749,d_123750__$1,seq__123313_123742__$1,temp__5804__auto___123741,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__123313_123684,chunk__123314_123685,count__123315_123686,i__123316_123687,seq__123305,chunk__123310,count__123311,i__123312,G__123572,$,original_fn_123756,G__123571_123753,G__123571_123754__$1,v_123752,temp__5804__auto___123751__$1,vec__123568_123748,s_123749,d_123750__$1,seq__123313_123742__$1,temp__5804__auto___123741,vec__123520,n,d,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__123572;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_123750__$1], 0));
if(cljs.core.truth_((function (){var and__5041__auto__ = gen;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123750__$1) === true;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123750__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return malli.instrument._instrumented_QMARK_(v_123752);
} else {
return and__5041__auto__;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["skipping",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123749),"already instrumented"], 0));
} else {
if(cljs.core.truth_(original_fn_123756)){
malli.instrument._replace_fn(original_fn_123756,n,s_123749,dgen_123757);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..instrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123749)], 0));
} else {
}
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_123752)){
var original_fn_123758 = (function (){var or__5043__auto__ = malli.instrument._original(v_123752);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123752;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_123758))){
var accessor_123759 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_123760 = malli.instrument.goog$module$goog$object.get(v_123752,accessor_123759);
var orig_variadic_fn_123761 = malli.instrument.goog$module$goog$object.get(variadic_fn_123760,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123758,accessor_123759,orig_variadic_fn_123761);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_123758))){
var seq__123575_123762 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__123578_123763 = null;
var count__123579_123764 = (0);
var i__123580_123765 = (0);
while(true){
if((i__123580_123765 < count__123579_123764)){
var arity_123766 = chunk__123578_123763.cljs$core$IIndexed$_nth$arity$2(null,i__123580_123765);
var accessor_123767 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123766)].join('');
var arity_fn_123768 = malli.instrument.goog$module$goog$object.get(original_fn_123758,accessor_123767);
if(cljs.core.truth_(arity_fn_123768)){
var orig_123769 = malli.instrument.goog$module$goog$object.get(arity_fn_123768,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123758,accessor_123767,orig_123769);


var G__123770 = seq__123575_123762;
var G__123771 = chunk__123578_123763;
var G__123772 = count__123579_123764;
var G__123773 = (i__123580_123765 + (1));
seq__123575_123762 = G__123770;
chunk__123578_123763 = G__123771;
count__123579_123764 = G__123772;
i__123580_123765 = G__123773;
continue;
} else {
var G__123774 = seq__123575_123762;
var G__123775 = chunk__123578_123763;
var G__123776 = count__123579_123764;
var G__123777 = (i__123580_123765 + (1));
seq__123575_123762 = G__123774;
chunk__123578_123763 = G__123775;
count__123579_123764 = G__123776;
i__123580_123765 = G__123777;
continue;
}
} else {
var temp__5804__auto___123778__$2 = cljs.core.seq(seq__123575_123762);
if(temp__5804__auto___123778__$2){
var seq__123575_123779__$1 = temp__5804__auto___123778__$2;
if(cljs.core.chunked_seq_QMARK_(seq__123575_123779__$1)){
var c__5565__auto___123780 = cljs.core.chunk_first(seq__123575_123779__$1);
var G__123781 = cljs.core.chunk_rest(seq__123575_123779__$1);
var G__123782 = c__5565__auto___123780;
var G__123783 = cljs.core.count(c__5565__auto___123780);
var G__123784 = (0);
seq__123575_123762 = G__123781;
chunk__123578_123763 = G__123782;
count__123579_123764 = G__123783;
i__123580_123765 = G__123784;
continue;
} else {
var arity_123785 = cljs.core.first(seq__123575_123779__$1);
var accessor_123786 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123785)].join('');
var arity_fn_123787 = malli.instrument.goog$module$goog$object.get(original_fn_123758,accessor_123786);
if(cljs.core.truth_(arity_fn_123787)){
var orig_123788 = malli.instrument.goog$module$goog$object.get(arity_fn_123787,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123758,accessor_123786,orig_123788);


var G__123789 = cljs.core.next(seq__123575_123779__$1);
var G__123790 = null;
var G__123791 = (0);
var G__123792 = (0);
seq__123575_123762 = G__123789;
chunk__123578_123763 = G__123790;
count__123579_123764 = G__123791;
i__123580_123765 = G__123792;
continue;
} else {
var G__123793 = cljs.core.next(seq__123575_123779__$1);
var G__123794 = null;
var G__123795 = (0);
var G__123796 = (0);
seq__123575_123762 = G__123793;
chunk__123578_123763 = G__123794;
count__123579_123764 = G__123795;
i__123580_123765 = G__123796;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_123749)),original_fn_123758);

}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..unstrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123749)], 0));
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_123752,d_123750__$1) : mode.call(null,v_123752,d_123750__$1));

}
} else {
}
} else {
}


var G__123797 = cljs.core.next(seq__123313_123742__$1);
var G__123798 = null;
var G__123799 = (0);
var G__123800 = (0);
seq__123313_123684 = G__123797;
chunk__123314_123685 = G__123798;
count__123315_123686 = G__123799;
i__123316_123687 = G__123800;
continue;
}
} else {
}
}
break;
}

var G__123801 = seq__123305;
var G__123802 = chunk__123310;
var G__123803 = count__123311;
var G__123804 = (i__123312 + (1));
seq__123305 = G__123801;
chunk__123310 = G__123802;
count__123311 = G__123803;
i__123312 = G__123804;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__123305);
if(temp__5804__auto__){
var seq__123305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__123305__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__123305__$1);
var G__123805 = cljs.core.chunk_rest(seq__123305__$1);
var G__123806 = c__5565__auto__;
var G__123807 = cljs.core.count(c__5565__auto__);
var G__123808 = (0);
seq__123305 = G__123805;
chunk__123310 = G__123806;
count__123311 = G__123807;
i__123312 = G__123808;
continue;
} else {
var vec__123583 = cljs.core.first(seq__123305__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123583,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123583,(1),null);
var seq__123306_123809 = cljs.core.seq(d);
var chunk__123307_123810 = null;
var count__123308_123811 = (0);
var i__123309_123812 = (0);
while(true){
if((i__123309_123812 < count__123308_123811)){
var vec__123616_123813 = chunk__123307_123810.cljs$core$IIndexed$_nth$arity$2(null,i__123309_123812);
var s_123814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123616_123813,(0),null);
var d_123815__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123616_123813,(1),null);
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(filters);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(((function (seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123616_123813,s_123814,d_123815__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__123298_SHARP_){
return (p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_123814,d_123815__$1) : p1__123298_SHARP_.call(null,n,s_123814,d_123815__$1));
});})(seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123616_123813,s_123814,d_123815__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___123816__$1 = malli.instrument._find_var(n,s_123814);
if(cljs.core.truth_(temp__5804__auto___123816__$1)){
var v_123817 = temp__5804__auto___123816__$1;
var G__123619_123818 = mode;
var G__123619_123819__$1 = (((G__123619_123818 instanceof cljs.core.Keyword))?G__123619_123818.fqn:null);
switch (G__123619_123819__$1) {
case "instrument":
var original_fn_123821 = (function (){var or__5043__auto__ = malli.instrument._original(v_123817);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123817;
}
})();
var dgen_123822 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__123620 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__123620,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123620,$,original_fn_123821,G__123619_123818,G__123619_123819__$1,v_123817,temp__5804__auto___123816__$1,vec__123616_123813,s_123814,d_123815__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123620,$,original_fn_123821,G__123619_123818,G__123619_123819__$1,v_123817,temp__5804__auto___123816__$1,vec__123616_123813,s_123814,d_123815__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__123621 = t;
var G__123622 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_123814)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__123621,G__123622) : r.call(null,G__123621,G__123622));
});
;})(seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123620,$,original_fn_123821,G__123619_123818,G__123619_123819__$1,v_123817,temp__5804__auto___123816__$1,vec__123616_123813,s_123814,d_123815__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123620,$,original_fn_123821,G__123619_123818,G__123619_123819__$1,v_123817,temp__5804__auto___123816__$1,vec__123616_123813,s_123814,d_123815__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__123620;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_123815__$1], 0));
if(cljs.core.truth_((function (){var and__5041__auto__ = gen;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123815__$1) === true;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123815__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return malli.instrument._instrumented_QMARK_(v_123817);
} else {
return and__5041__auto__;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["skipping",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123814),"already instrumented"], 0));
} else {
if(cljs.core.truth_(original_fn_123821)){
malli.instrument._replace_fn(original_fn_123821,n,s_123814,dgen_123822);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..instrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123814)], 0));
} else {
}
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_123817)){
var original_fn_123823 = (function (){var or__5043__auto__ = malli.instrument._original(v_123817);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123817;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_123823))){
var accessor_123824 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_123825 = malli.instrument.goog$module$goog$object.get(v_123817,accessor_123824);
var orig_variadic_fn_123826 = malli.instrument.goog$module$goog$object.get(variadic_fn_123825,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123823,accessor_123824,orig_variadic_fn_123826);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_123823))){
var seq__123623_123827 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__123626_123828 = null;
var count__123627_123829 = (0);
var i__123628_123830 = (0);
while(true){
if((i__123628_123830 < count__123627_123829)){
var arity_123831 = chunk__123626_123828.cljs$core$IIndexed$_nth$arity$2(null,i__123628_123830);
var accessor_123832 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123831)].join('');
var arity_fn_123833 = malli.instrument.goog$module$goog$object.get(original_fn_123823,accessor_123832);
if(cljs.core.truth_(arity_fn_123833)){
var orig_123834 = malli.instrument.goog$module$goog$object.get(arity_fn_123833,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123823,accessor_123832,orig_123834);


var G__123835 = seq__123623_123827;
var G__123836 = chunk__123626_123828;
var G__123837 = count__123627_123829;
var G__123838 = (i__123628_123830 + (1));
seq__123623_123827 = G__123835;
chunk__123626_123828 = G__123836;
count__123627_123829 = G__123837;
i__123628_123830 = G__123838;
continue;
} else {
var G__123839 = seq__123623_123827;
var G__123840 = chunk__123626_123828;
var G__123841 = count__123627_123829;
var G__123842 = (i__123628_123830 + (1));
seq__123623_123827 = G__123839;
chunk__123626_123828 = G__123840;
count__123627_123829 = G__123841;
i__123628_123830 = G__123842;
continue;
}
} else {
var temp__5804__auto___123843__$2 = cljs.core.seq(seq__123623_123827);
if(temp__5804__auto___123843__$2){
var seq__123623_123844__$1 = temp__5804__auto___123843__$2;
if(cljs.core.chunked_seq_QMARK_(seq__123623_123844__$1)){
var c__5565__auto___123845 = cljs.core.chunk_first(seq__123623_123844__$1);
var G__123846 = cljs.core.chunk_rest(seq__123623_123844__$1);
var G__123847 = c__5565__auto___123845;
var G__123848 = cljs.core.count(c__5565__auto___123845);
var G__123849 = (0);
seq__123623_123827 = G__123846;
chunk__123626_123828 = G__123847;
count__123627_123829 = G__123848;
i__123628_123830 = G__123849;
continue;
} else {
var arity_123850 = cljs.core.first(seq__123623_123844__$1);
var accessor_123851 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123850)].join('');
var arity_fn_123852 = malli.instrument.goog$module$goog$object.get(original_fn_123823,accessor_123851);
if(cljs.core.truth_(arity_fn_123852)){
var orig_123853 = malli.instrument.goog$module$goog$object.get(arity_fn_123852,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123823,accessor_123851,orig_123853);


var G__123854 = cljs.core.next(seq__123623_123844__$1);
var G__123855 = null;
var G__123856 = (0);
var G__123857 = (0);
seq__123623_123827 = G__123854;
chunk__123626_123828 = G__123855;
count__123627_123829 = G__123856;
i__123628_123830 = G__123857;
continue;
} else {
var G__123858 = cljs.core.next(seq__123623_123844__$1);
var G__123859 = null;
var G__123860 = (0);
var G__123861 = (0);
seq__123623_123827 = G__123858;
chunk__123626_123828 = G__123859;
count__123627_123829 = G__123860;
i__123628_123830 = G__123861;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_123814)),original_fn_123823);

}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..unstrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123814)], 0));
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_123817,d_123815__$1) : mode.call(null,v_123817,d_123815__$1));

}
} else {
}
} else {
}


var G__123862 = seq__123306_123809;
var G__123863 = chunk__123307_123810;
var G__123864 = count__123308_123811;
var G__123865 = (i__123309_123812 + (1));
seq__123306_123809 = G__123862;
chunk__123307_123810 = G__123863;
count__123308_123811 = G__123864;
i__123309_123812 = G__123865;
continue;
} else {
var temp__5804__auto___123866__$1 = cljs.core.seq(seq__123306_123809);
if(temp__5804__auto___123866__$1){
var seq__123306_123867__$1 = temp__5804__auto___123866__$1;
if(cljs.core.chunked_seq_QMARK_(seq__123306_123867__$1)){
var c__5565__auto___123868 = cljs.core.chunk_first(seq__123306_123867__$1);
var G__123869 = cljs.core.chunk_rest(seq__123306_123867__$1);
var G__123870 = c__5565__auto___123868;
var G__123871 = cljs.core.count(c__5565__auto___123868);
var G__123872 = (0);
seq__123306_123809 = G__123869;
chunk__123307_123810 = G__123870;
count__123308_123811 = G__123871;
i__123309_123812 = G__123872;
continue;
} else {
var vec__123631_123873 = cljs.core.first(seq__123306_123867__$1);
var s_123874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123631_123873,(0),null);
var d_123875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123631_123873,(1),null);
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(filters);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(((function (seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123631_123873,s_123874,d_123875__$1,seq__123306_123867__$1,temp__5804__auto___123866__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__123298_SHARP_){
return (p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__123298_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_123874,d_123875__$1) : p1__123298_SHARP_.call(null,n,s_123874,d_123875__$1));
});})(seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,or__5043__auto__,vec__123631_123873,s_123874,d_123875__$1,seq__123306_123867__$1,temp__5804__auto___123866__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var temp__5804__auto___123876__$2 = malli.instrument._find_var(n,s_123874);
if(cljs.core.truth_(temp__5804__auto___123876__$2)){
var v_123877 = temp__5804__auto___123876__$2;
var G__123634_123878 = mode;
var G__123634_123879__$1 = (((G__123634_123878 instanceof cljs.core.Keyword))?G__123634_123878.fqn:null);
switch (G__123634_123879__$1) {
case "instrument":
var original_fn_123881 = (function (){var or__5043__auto__ = malli.instrument._original(v_123877);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123877;
}
})();
var dgen_123882 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__123635 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__123635,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123635,$,original_fn_123881,G__123634_123878,G__123634_123879__$1,v_123877,temp__5804__auto___123876__$2,vec__123631_123873,s_123874,d_123875__$1,seq__123306_123867__$1,temp__5804__auto___123866__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123635,$,original_fn_123881,G__123634_123878,G__123634_123879__$1,v_123877,temp__5804__auto___123876__$2,vec__123631_123873,s_123874,d_123875__$1,seq__123306_123867__$1,temp__5804__auto___123866__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__123636 = t;
var G__123637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_123874)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__123636,G__123637) : r.call(null,G__123636,G__123637));
});
;})(seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123635,$,original_fn_123881,G__123634_123878,G__123634_123879__$1,v_123877,temp__5804__auto___123876__$2,vec__123631_123873,s_123874,d_123875__$1,seq__123306_123867__$1,temp__5804__auto___123866__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__123306_123809,chunk__123307_123810,count__123308_123811,i__123309_123812,seq__123305,chunk__123310,count__123311,i__123312,G__123635,$,original_fn_123881,G__123634_123878,G__123634_123879__$1,v_123877,temp__5804__auto___123876__$2,vec__123631_123873,s_123874,d_123875__$1,seq__123306_123867__$1,temp__5804__auto___123866__$1,vec__123583,n,d,seq__123305__$1,temp__5804__auto__,map__123304,map__123304__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__123635;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_123875__$1], 0));
if(cljs.core.truth_((function (){var and__5041__auto__ = gen;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123875__$1) === true;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_123875__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return malli.instrument._instrumented_QMARK_(v_123877);
} else {
return and__5041__auto__;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["skipping",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123874),"already instrumented"], 0));
} else {
if(cljs.core.truth_(original_fn_123881)){
malli.instrument._replace_fn(original_fn_123881,n,s_123874,dgen_123882);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..instrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123874)], 0));
} else {
}
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_123877)){
var original_fn_123883 = (function (){var or__5043__auto__ = malli.instrument._original(v_123877);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return v_123877;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_123883))){
var accessor_123884 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_123885 = malli.instrument.goog$module$goog$object.get(v_123877,accessor_123884);
var orig_variadic_fn_123886 = malli.instrument.goog$module$goog$object.get(variadic_fn_123885,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123883,accessor_123884,orig_variadic_fn_123886);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_123883))){
var seq__123638_123887 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__123641_123888 = null;
var count__123642_123889 = (0);
var i__123643_123890 = (0);
while(true){
if((i__123643_123890 < count__123642_123889)){
var arity_123891 = chunk__123641_123888.cljs$core$IIndexed$_nth$arity$2(null,i__123643_123890);
var accessor_123892 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123891)].join('');
var arity_fn_123893 = malli.instrument.goog$module$goog$object.get(original_fn_123883,accessor_123892);
if(cljs.core.truth_(arity_fn_123893)){
var orig_123894 = malli.instrument.goog$module$goog$object.get(arity_fn_123893,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123883,accessor_123892,orig_123894);


var G__123895 = seq__123638_123887;
var G__123896 = chunk__123641_123888;
var G__123897 = count__123642_123889;
var G__123898 = (i__123643_123890 + (1));
seq__123638_123887 = G__123895;
chunk__123641_123888 = G__123896;
count__123642_123889 = G__123897;
i__123643_123890 = G__123898;
continue;
} else {
var G__123899 = seq__123638_123887;
var G__123900 = chunk__123641_123888;
var G__123901 = count__123642_123889;
var G__123902 = (i__123643_123890 + (1));
seq__123638_123887 = G__123899;
chunk__123641_123888 = G__123900;
count__123642_123889 = G__123901;
i__123643_123890 = G__123902;
continue;
}
} else {
var temp__5804__auto___123903__$3 = cljs.core.seq(seq__123638_123887);
if(temp__5804__auto___123903__$3){
var seq__123638_123904__$1 = temp__5804__auto___123903__$3;
if(cljs.core.chunked_seq_QMARK_(seq__123638_123904__$1)){
var c__5565__auto___123905 = cljs.core.chunk_first(seq__123638_123904__$1);
var G__123906 = cljs.core.chunk_rest(seq__123638_123904__$1);
var G__123907 = c__5565__auto___123905;
var G__123908 = cljs.core.count(c__5565__auto___123905);
var G__123909 = (0);
seq__123638_123887 = G__123906;
chunk__123641_123888 = G__123907;
count__123642_123889 = G__123908;
i__123643_123890 = G__123909;
continue;
} else {
var arity_123910 = cljs.core.first(seq__123638_123904__$1);
var accessor_123911 = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_123910)].join('');
var arity_fn_123912 = malli.instrument.goog$module$goog$object.get(original_fn_123883,accessor_123911);
if(cljs.core.truth_(arity_fn_123912)){
var orig_123913 = malli.instrument.goog$module$goog$object.get(arity_fn_123912,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_123883,accessor_123911,orig_123913);


var G__123914 = cljs.core.next(seq__123638_123904__$1);
var G__123915 = null;
var G__123916 = (0);
var G__123917 = (0);
seq__123638_123887 = G__123914;
chunk__123641_123888 = G__123915;
count__123642_123889 = G__123916;
i__123643_123890 = G__123917;
continue;
} else {
var G__123918 = cljs.core.next(seq__123638_123904__$1);
var G__123919 = null;
var G__123920 = (0);
var G__123921 = (0);
seq__123638_123887 = G__123918;
chunk__123641_123888 = G__123919;
count__123642_123889 = G__123920;
i__123643_123890 = G__123921;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_123874)),original_fn_123883);

}
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..unstrumented",cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s_123874)], 0));
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_123877,d_123875__$1) : mode.call(null,v_123877,d_123875__$1));

}
} else {
}
} else {
}


var G__123922 = cljs.core.next(seq__123306_123867__$1);
var G__123923 = null;
var G__123924 = (0);
var G__123925 = (0);
seq__123306_123809 = G__123922;
chunk__123307_123810 = G__123923;
count__123308_123811 = G__123924;
i__123309_123812 = G__123925;
continue;
}
} else {
}
}
break;
}

var G__123926 = cljs.core.next(seq__123305__$1);
var G__123927 = null;
var G__123928 = (0);
var G__123929 = (0);
seq__123305 = G__123926;
chunk__123310 = G__123927;
count__123311 = G__123928;
i__123312 = G__123929;
continue;
}
} else {
return null;
}
}
break;
}
}));

(malli.instrument._strument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Checks all registered function schemas using generative testing.
 * Returns nil or a map of symbol -> explanation in case of errors.
 */
malli.instrument.check = (function malli$instrument$check(var_args){
var G__123647 = arguments.length;
switch (G__123647) {
case 0:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument.check.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.check.cljs$core$IFn$_invoke$arity$1 = (function (options){
var res_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),(function (v,p__123648){
var map__123649 = p__123648;
var map__123649__$1 = cljs.core.__destructure_map(map__123649);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123649__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123649__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__123650 = malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,malli.instrument._original(v));
if((G__123650 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res_STAR_,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name),G__123650);
}
})));

return cljs.core.not_empty(cljs.core.deref(res_STAR_));
}));

(malli.instrument.check.cljs$lang$maxFixedArity = 1);

/**
 * Applies instrumentation for a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.instrument_BANG_ = (function malli$instrument$instrument_BANG_(var_args){
var G__123652 = arguments.length;
switch (G__123652) {
case 0:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
}));

(malli.instrument.instrument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Removes instrumentation from a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.unstrument_BANG_ = (function malli$instrument$unstrument_BANG_(var_args){
var G__123654 = arguments.length;
switch (G__123654) {
case 0:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"unstrument","unstrument",-312041116)));
}));

(malli.instrument.unstrument_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=malli.instrument.js.map
