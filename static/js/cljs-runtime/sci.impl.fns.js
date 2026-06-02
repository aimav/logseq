goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__72526 = (fixed_arity | (0));
switch (G__72526) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__72527){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__72527);

while(true){
var ret__71494__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71494__auto__)){
continue;
} else {
return ret__71494__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__72527 = null;
if (arguments.length > 0) {
var G__73578__i = 0, G__73578__a = new Array(arguments.length -  0);
while (G__73578__i < G__73578__a.length) {G__73578__a[G__73578__i] = arguments[G__73578__i + 0]; ++G__73578__i;}
  G__72527 = new cljs.core.IndexedSeq(G__73578__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__72527);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__73579){
var G__72527 = cljs.core.seq(arglist__73579);
return sci$impl$fns$fun_$_arity_0__delegate(G__72527);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__72533 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__72531,G__72532){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72531);

(invoc_array[vararg_idx] = G__72532);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__72531,var_args){
var G__72532 = null;
if (arguments.length > 1) {
var G__73580__i = 0, G__73580__a = new Array(arguments.length -  1);
while (G__73580__i < G__73580__a.length) {G__73580__a[G__73580__i] = arguments[G__73580__i + 1]; ++G__73580__i;}
  G__72532 = new cljs.core.IndexedSeq(G__73580__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__72531,G__72532);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__73581){
var G__72531 = cljs.core.first(arglist__73581);
var G__72532 = cljs.core.rest(arglist__73581);
return sci$impl$fns$fun_$_arity_1__delegate(G__72531,G__72532);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__72538 = cljs.core._nth(params,(0));
var G__72539 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__72535,G__72536,G__72537){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72535);

(invoc_array[(1)] = G__72536);

(invoc_array[vararg_idx] = G__72537);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__72535,G__72536,var_args){
var G__72537 = null;
if (arguments.length > 2) {
var G__73582__i = 0, G__73582__a = new Array(arguments.length -  2);
while (G__73582__i < G__73582__a.length) {G__73582__a[G__73582__i] = arguments[G__73582__i + 2]; ++G__73582__i;}
  G__72537 = new cljs.core.IndexedSeq(G__73582__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__72535,G__72536,G__72537);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__73583){
var G__72535 = cljs.core.first(arglist__73583);
arglist__73583 = cljs.core.next(arglist__73583);
var G__72536 = cljs.core.first(arglist__73583);
var G__72537 = cljs.core.rest(arglist__73583);
return sci$impl$fns$fun_$_arity_2__delegate(G__72535,G__72536,G__72537);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__72549 = cljs.core._nth(params,(0));
var G__72550 = cljs.core._nth(params,(1));
var G__72551 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__72545,G__72546,G__72547,G__72548){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72545);

(invoc_array[(1)] = G__72546);

(invoc_array[(2)] = G__72547);

(invoc_array[vararg_idx] = G__72548);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__72545,G__72546,G__72547,var_args){
var G__72548 = null;
if (arguments.length > 3) {
var G__73584__i = 0, G__73584__a = new Array(arguments.length -  3);
while (G__73584__i < G__73584__a.length) {G__73584__a[G__73584__i] = arguments[G__73584__i + 3]; ++G__73584__i;}
  G__72548 = new cljs.core.IndexedSeq(G__73584__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__72545,G__72546,G__72547,G__72548);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__73585){
var G__72545 = cljs.core.first(arglist__73585);
arglist__73585 = cljs.core.next(arglist__73585);
var G__72546 = cljs.core.first(arglist__73585);
arglist__73585 = cljs.core.next(arglist__73585);
var G__72547 = cljs.core.first(arglist__73585);
var G__72548 = cljs.core.rest(arglist__73585);
return sci$impl$fns$fun_$_arity_3__delegate(G__72545,G__72546,G__72547,G__72548);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__72559 = cljs.core._nth(params,(0));
var G__72560 = cljs.core._nth(params,(1));
var G__72561 = cljs.core._nth(params,(2));
var G__72562 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__72554,G__72555,G__72556,G__72557,G__72558){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72554);

(invoc_array[(1)] = G__72555);

(invoc_array[(2)] = G__72556);

(invoc_array[(3)] = G__72557);

(invoc_array[vararg_idx] = G__72558);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__72554,G__72555,G__72556,G__72557,var_args){
var G__72558 = null;
if (arguments.length > 4) {
var G__73586__i = 0, G__73586__a = new Array(arguments.length -  4);
while (G__73586__i < G__73586__a.length) {G__73586__a[G__73586__i] = arguments[G__73586__i + 4]; ++G__73586__i;}
  G__72558 = new cljs.core.IndexedSeq(G__73586__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__72554,G__72555,G__72556,G__72557,G__72558);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__73587){
var G__72554 = cljs.core.first(arglist__73587);
arglist__73587 = cljs.core.next(arglist__73587);
var G__72555 = cljs.core.first(arglist__73587);
arglist__73587 = cljs.core.next(arglist__73587);
var G__72556 = cljs.core.first(arglist__73587);
arglist__73587 = cljs.core.next(arglist__73587);
var G__72557 = cljs.core.first(arglist__73587);
var G__72558 = cljs.core.rest(arglist__73587);
return sci$impl$fns$fun_$_arity_4__delegate(G__72554,G__72555,G__72556,G__72557,G__72558);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__72571 = cljs.core._nth(params,(0));
var G__72572 = cljs.core._nth(params,(1));
var G__72573 = cljs.core._nth(params,(2));
var G__72574 = cljs.core._nth(params,(3));
var G__72575 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__72565,G__72566,G__72567,G__72568,G__72569,G__72570){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72565);

(invoc_array[(1)] = G__72566);

(invoc_array[(2)] = G__72567);

(invoc_array[(3)] = G__72568);

(invoc_array[(4)] = G__72569);

(invoc_array[vararg_idx] = G__72570);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__72565,G__72566,G__72567,G__72568,G__72569,var_args){
var G__72570 = null;
if (arguments.length > 5) {
var G__73588__i = 0, G__73588__a = new Array(arguments.length -  5);
while (G__73588__i < G__73588__a.length) {G__73588__a[G__73588__i] = arguments[G__73588__i + 5]; ++G__73588__i;}
  G__72570 = new cljs.core.IndexedSeq(G__73588__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__72565,G__72566,G__72567,G__72568,G__72569,G__72570);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__73589){
var G__72565 = cljs.core.first(arglist__73589);
arglist__73589 = cljs.core.next(arglist__73589);
var G__72566 = cljs.core.first(arglist__73589);
arglist__73589 = cljs.core.next(arglist__73589);
var G__72567 = cljs.core.first(arglist__73589);
arglist__73589 = cljs.core.next(arglist__73589);
var G__72568 = cljs.core.first(arglist__73589);
arglist__73589 = cljs.core.next(arglist__73589);
var G__72569 = cljs.core.first(arglist__73589);
var G__72570 = cljs.core.rest(arglist__73589);
return sci$impl$fns$fun_$_arity_5__delegate(G__72565,G__72566,G__72567,G__72568,G__72569,G__72570);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__72583 = cljs.core._nth(params,(0));
var G__72584 = cljs.core._nth(params,(1));
var G__72585 = cljs.core._nth(params,(2));
var G__72586 = cljs.core._nth(params,(3));
var G__72587 = cljs.core._nth(params,(4));
var G__72588 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__72576,G__72577,G__72578,G__72579,G__72580,G__72581,G__72582){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72576);

(invoc_array[(1)] = G__72577);

(invoc_array[(2)] = G__72578);

(invoc_array[(3)] = G__72579);

(invoc_array[(4)] = G__72580);

(invoc_array[(5)] = G__72581);

(invoc_array[vararg_idx] = G__72582);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__72576,G__72577,G__72578,G__72579,G__72580,G__72581,var_args){
var G__72582 = null;
if (arguments.length > 6) {
var G__73590__i = 0, G__73590__a = new Array(arguments.length -  6);
while (G__73590__i < G__73590__a.length) {G__73590__a[G__73590__i] = arguments[G__73590__i + 6]; ++G__73590__i;}
  G__72582 = new cljs.core.IndexedSeq(G__73590__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__72576,G__72577,G__72578,G__72579,G__72580,G__72581,G__72582);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__73591){
var G__72576 = cljs.core.first(arglist__73591);
arglist__73591 = cljs.core.next(arglist__73591);
var G__72577 = cljs.core.first(arglist__73591);
arglist__73591 = cljs.core.next(arglist__73591);
var G__72578 = cljs.core.first(arglist__73591);
arglist__73591 = cljs.core.next(arglist__73591);
var G__72579 = cljs.core.first(arglist__73591);
arglist__73591 = cljs.core.next(arglist__73591);
var G__72580 = cljs.core.first(arglist__73591);
arglist__73591 = cljs.core.next(arglist__73591);
var G__72581 = cljs.core.first(arglist__73591);
var G__72582 = cljs.core.rest(arglist__73591);
return sci$impl$fns$fun_$_arity_6__delegate(G__72576,G__72577,G__72578,G__72579,G__72580,G__72581,G__72582);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__72600 = cljs.core._nth(params,(0));
var G__72601 = cljs.core._nth(params,(1));
var G__72602 = cljs.core._nth(params,(2));
var G__72603 = cljs.core._nth(params,(3));
var G__72604 = cljs.core._nth(params,(4));
var G__72605 = cljs.core._nth(params,(5));
var G__72606 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__72592,G__72593,G__72594,G__72595,G__72596,G__72597,G__72598,G__72599){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72592);

(invoc_array[(1)] = G__72593);

(invoc_array[(2)] = G__72594);

(invoc_array[(3)] = G__72595);

(invoc_array[(4)] = G__72596);

(invoc_array[(5)] = G__72597);

(invoc_array[(6)] = G__72598);

(invoc_array[vararg_idx] = G__72599);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__72592,G__72593,G__72594,G__72595,G__72596,G__72597,G__72598,var_args){
var G__72599 = null;
if (arguments.length > 7) {
var G__73592__i = 0, G__73592__a = new Array(arguments.length -  7);
while (G__73592__i < G__73592__a.length) {G__73592__a[G__73592__i] = arguments[G__73592__i + 7]; ++G__73592__i;}
  G__72599 = new cljs.core.IndexedSeq(G__73592__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__72592,G__72593,G__72594,G__72595,G__72596,G__72597,G__72598,G__72599);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__73593){
var G__72592 = cljs.core.first(arglist__73593);
arglist__73593 = cljs.core.next(arglist__73593);
var G__72593 = cljs.core.first(arglist__73593);
arglist__73593 = cljs.core.next(arglist__73593);
var G__72594 = cljs.core.first(arglist__73593);
arglist__73593 = cljs.core.next(arglist__73593);
var G__72595 = cljs.core.first(arglist__73593);
arglist__73593 = cljs.core.next(arglist__73593);
var G__72596 = cljs.core.first(arglist__73593);
arglist__73593 = cljs.core.next(arglist__73593);
var G__72597 = cljs.core.first(arglist__73593);
arglist__73593 = cljs.core.next(arglist__73593);
var G__72598 = cljs.core.first(arglist__73593);
var G__72599 = cljs.core.rest(arglist__73593);
return sci$impl$fns$fun_$_arity_7__delegate(G__72592,G__72593,G__72594,G__72595,G__72596,G__72597,G__72598,G__72599);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__72617 = cljs.core._nth(params,(0));
var G__72618 = cljs.core._nth(params,(1));
var G__72619 = cljs.core._nth(params,(2));
var G__72620 = cljs.core._nth(params,(3));
var G__72621 = cljs.core._nth(params,(4));
var G__72622 = cljs.core._nth(params,(5));
var G__72623 = cljs.core._nth(params,(6));
var G__72624 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__72608,G__72609,G__72610,G__72611,G__72612,G__72613,G__72614,G__72615,G__72616){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72608);

(invoc_array[(1)] = G__72609);

(invoc_array[(2)] = G__72610);

(invoc_array[(3)] = G__72611);

(invoc_array[(4)] = G__72612);

(invoc_array[(5)] = G__72613);

(invoc_array[(6)] = G__72614);

(invoc_array[(7)] = G__72615);

(invoc_array[vararg_idx] = G__72616);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__72608,G__72609,G__72610,G__72611,G__72612,G__72613,G__72614,G__72615,var_args){
var G__72616 = null;
if (arguments.length > 8) {
var G__73594__i = 0, G__73594__a = new Array(arguments.length -  8);
while (G__73594__i < G__73594__a.length) {G__73594__a[G__73594__i] = arguments[G__73594__i + 8]; ++G__73594__i;}
  G__72616 = new cljs.core.IndexedSeq(G__73594__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__72608,G__72609,G__72610,G__72611,G__72612,G__72613,G__72614,G__72615,G__72616);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__73595){
var G__72608 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72609 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72610 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72611 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72612 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72613 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72614 = cljs.core.first(arglist__73595);
arglist__73595 = cljs.core.next(arglist__73595);
var G__72615 = cljs.core.first(arglist__73595);
var G__72616 = cljs.core.rest(arglist__73595);
return sci$impl$fns$fun_$_arity_8__delegate(G__72608,G__72609,G__72610,G__72611,G__72612,G__72613,G__72614,G__72615,G__72616);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__72637 = cljs.core._nth(params,(0));
var G__72638 = cljs.core._nth(params,(1));
var G__72639 = cljs.core._nth(params,(2));
var G__72640 = cljs.core._nth(params,(3));
var G__72642 = cljs.core._nth(params,(4));
var G__72643 = cljs.core._nth(params,(5));
var G__72644 = cljs.core._nth(params,(6));
var G__72645 = cljs.core._nth(params,(7));
var G__72646 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__72627,G__72628,G__72629,G__72630,G__72631,G__72632,G__72633,G__72634,G__72635,G__72636){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72627);

(invoc_array[(1)] = G__72628);

(invoc_array[(2)] = G__72629);

(invoc_array[(3)] = G__72630);

(invoc_array[(4)] = G__72631);

(invoc_array[(5)] = G__72632);

(invoc_array[(6)] = G__72633);

(invoc_array[(7)] = G__72634);

(invoc_array[(8)] = G__72635);

(invoc_array[vararg_idx] = G__72636);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__72627,G__72628,G__72629,G__72630,G__72631,G__72632,G__72633,G__72634,G__72635,var_args){
var G__72636 = null;
if (arguments.length > 9) {
var G__73596__i = 0, G__73596__a = new Array(arguments.length -  9);
while (G__73596__i < G__73596__a.length) {G__73596__a[G__73596__i] = arguments[G__73596__i + 9]; ++G__73596__i;}
  G__72636 = new cljs.core.IndexedSeq(G__73596__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__72627,G__72628,G__72629,G__72630,G__72631,G__72632,G__72633,G__72634,G__72635,G__72636);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__73597){
var G__72627 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72628 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72629 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72630 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72631 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72632 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72633 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72634 = cljs.core.first(arglist__73597);
arglist__73597 = cljs.core.next(arglist__73597);
var G__72635 = cljs.core.first(arglist__73597);
var G__72636 = cljs.core.rest(arglist__73597);
return sci$impl$fns$fun_$_arity_9__delegate(G__72627,G__72628,G__72629,G__72630,G__72631,G__72632,G__72633,G__72634,G__72635,G__72636);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__72662 = cljs.core._nth(params,(0));
var G__72663 = cljs.core._nth(params,(1));
var G__72664 = cljs.core._nth(params,(2));
var G__72665 = cljs.core._nth(params,(3));
var G__72666 = cljs.core._nth(params,(4));
var G__72667 = cljs.core._nth(params,(5));
var G__72668 = cljs.core._nth(params,(6));
var G__72669 = cljs.core._nth(params,(7));
var G__72670 = cljs.core._nth(params,(8));
var G__72671 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__72651,G__72652,G__72653,G__72654,G__72655,G__72656,G__72657,G__72658,G__72659,G__72660,G__72661){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72651);

(invoc_array[(1)] = G__72652);

(invoc_array[(2)] = G__72653);

(invoc_array[(3)] = G__72654);

(invoc_array[(4)] = G__72655);

(invoc_array[(5)] = G__72656);

(invoc_array[(6)] = G__72657);

(invoc_array[(7)] = G__72658);

(invoc_array[(8)] = G__72659);

(invoc_array[(9)] = G__72660);

(invoc_array[vararg_idx] = G__72661);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__72651,G__72652,G__72653,G__72654,G__72655,G__72656,G__72657,G__72658,G__72659,G__72660,var_args){
var G__72661 = null;
if (arguments.length > 10) {
var G__73598__i = 0, G__73598__a = new Array(arguments.length -  10);
while (G__73598__i < G__73598__a.length) {G__73598__a[G__73598__i] = arguments[G__73598__i + 10]; ++G__73598__i;}
  G__72661 = new cljs.core.IndexedSeq(G__73598__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__72651,G__72652,G__72653,G__72654,G__72655,G__72656,G__72657,G__72658,G__72659,G__72660,G__72661);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__73599){
var G__72651 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72652 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72653 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72654 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72655 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72656 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72657 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72658 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72659 = cljs.core.first(arglist__73599);
arglist__73599 = cljs.core.next(arglist__73599);
var G__72660 = cljs.core.first(arglist__73599);
var G__72661 = cljs.core.rest(arglist__73599);
return sci$impl$fns$fun_$_arity_10__delegate(G__72651,G__72652,G__72653,G__72654,G__72655,G__72656,G__72657,G__72658,G__72659,G__72660,G__72661);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__72690 = cljs.core._nth(params,(0));
var G__72691 = cljs.core._nth(params,(1));
var G__72692 = cljs.core._nth(params,(2));
var G__72693 = cljs.core._nth(params,(3));
var G__72694 = cljs.core._nth(params,(4));
var G__72695 = cljs.core._nth(params,(5));
var G__72696 = cljs.core._nth(params,(6));
var G__72697 = cljs.core._nth(params,(7));
var G__72698 = cljs.core._nth(params,(8));
var G__72699 = cljs.core._nth(params,(9));
var G__72700 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__72678,G__72679,G__72680,G__72681,G__72682,G__72683,G__72684,G__72685,G__72686,G__72687,G__72688,G__72689){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72678);

(invoc_array[(1)] = G__72679);

(invoc_array[(2)] = G__72680);

(invoc_array[(3)] = G__72681);

(invoc_array[(4)] = G__72682);

(invoc_array[(5)] = G__72683);

(invoc_array[(6)] = G__72684);

(invoc_array[(7)] = G__72685);

(invoc_array[(8)] = G__72686);

(invoc_array[(9)] = G__72687);

(invoc_array[(10)] = G__72688);

(invoc_array[vararg_idx] = G__72689);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__72678,G__72679,G__72680,G__72681,G__72682,G__72683,G__72684,G__72685,G__72686,G__72687,G__72688,var_args){
var G__72689 = null;
if (arguments.length > 11) {
var G__73600__i = 0, G__73600__a = new Array(arguments.length -  11);
while (G__73600__i < G__73600__a.length) {G__73600__a[G__73600__i] = arguments[G__73600__i + 11]; ++G__73600__i;}
  G__72689 = new cljs.core.IndexedSeq(G__73600__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__72678,G__72679,G__72680,G__72681,G__72682,G__72683,G__72684,G__72685,G__72686,G__72687,G__72688,G__72689);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__73601){
var G__72678 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72679 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72680 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72681 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72682 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72683 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72684 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72685 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72686 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72687 = cljs.core.first(arglist__73601);
arglist__73601 = cljs.core.next(arglist__73601);
var G__72688 = cljs.core.first(arglist__73601);
var G__72689 = cljs.core.rest(arglist__73601);
return sci$impl$fns$fun_$_arity_11__delegate(G__72678,G__72679,G__72680,G__72681,G__72682,G__72683,G__72684,G__72685,G__72686,G__72687,G__72688,G__72689);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__72719 = cljs.core._nth(params,(0));
var G__72721 = cljs.core._nth(params,(1));
var G__72722 = cljs.core._nth(params,(2));
var G__72723 = cljs.core._nth(params,(3));
var G__72724 = cljs.core._nth(params,(4));
var G__72725 = cljs.core._nth(params,(5));
var G__72726 = cljs.core._nth(params,(6));
var G__72727 = cljs.core._nth(params,(7));
var G__72728 = cljs.core._nth(params,(8));
var G__72729 = cljs.core._nth(params,(9));
var G__72730 = cljs.core._nth(params,(10));
var G__72731 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__72706,G__72707,G__72708,G__72709,G__72710,G__72711,G__72712,G__72713,G__72714,G__72715,G__72716,G__72717,G__72718){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72706);

(invoc_array[(1)] = G__72707);

(invoc_array[(2)] = G__72708);

(invoc_array[(3)] = G__72709);

(invoc_array[(4)] = G__72710);

(invoc_array[(5)] = G__72711);

(invoc_array[(6)] = G__72712);

(invoc_array[(7)] = G__72713);

(invoc_array[(8)] = G__72714);

(invoc_array[(9)] = G__72715);

(invoc_array[(10)] = G__72716);

(invoc_array[(11)] = G__72717);

(invoc_array[vararg_idx] = G__72718);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__72706,G__72707,G__72708,G__72709,G__72710,G__72711,G__72712,G__72713,G__72714,G__72715,G__72716,G__72717,var_args){
var G__72718 = null;
if (arguments.length > 12) {
var G__73602__i = 0, G__73602__a = new Array(arguments.length -  12);
while (G__73602__i < G__73602__a.length) {G__73602__a[G__73602__i] = arguments[G__73602__i + 12]; ++G__73602__i;}
  G__72718 = new cljs.core.IndexedSeq(G__73602__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__72706,G__72707,G__72708,G__72709,G__72710,G__72711,G__72712,G__72713,G__72714,G__72715,G__72716,G__72717,G__72718);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__73603){
var G__72706 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72707 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72708 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72709 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72710 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72711 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72712 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72713 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72714 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72715 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72716 = cljs.core.first(arglist__73603);
arglist__73603 = cljs.core.next(arglist__73603);
var G__72717 = cljs.core.first(arglist__73603);
var G__72718 = cljs.core.rest(arglist__73603);
return sci$impl$fns$fun_$_arity_12__delegate(G__72706,G__72707,G__72708,G__72709,G__72710,G__72711,G__72712,G__72713,G__72714,G__72715,G__72716,G__72717,G__72718);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__72746 = cljs.core._nth(params,(0));
var G__72747 = cljs.core._nth(params,(1));
var G__72748 = cljs.core._nth(params,(2));
var G__72749 = cljs.core._nth(params,(3));
var G__72750 = cljs.core._nth(params,(4));
var G__72751 = cljs.core._nth(params,(5));
var G__72752 = cljs.core._nth(params,(6));
var G__72753 = cljs.core._nth(params,(7));
var G__72754 = cljs.core._nth(params,(8));
var G__72755 = cljs.core._nth(params,(9));
var G__72756 = cljs.core._nth(params,(10));
var G__72757 = cljs.core._nth(params,(11));
var G__72758 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__72732,G__72733,G__72734,G__72735,G__72736,G__72737,G__72738,G__72739,G__72740,G__72741,G__72742,G__72743,G__72744,G__72745){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72732);

(invoc_array[(1)] = G__72733);

(invoc_array[(2)] = G__72734);

(invoc_array[(3)] = G__72735);

(invoc_array[(4)] = G__72736);

(invoc_array[(5)] = G__72737);

(invoc_array[(6)] = G__72738);

(invoc_array[(7)] = G__72739);

(invoc_array[(8)] = G__72740);

(invoc_array[(9)] = G__72741);

(invoc_array[(10)] = G__72742);

(invoc_array[(11)] = G__72743);

(invoc_array[(12)] = G__72744);

(invoc_array[vararg_idx] = G__72745);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__72732,G__72733,G__72734,G__72735,G__72736,G__72737,G__72738,G__72739,G__72740,G__72741,G__72742,G__72743,G__72744,var_args){
var G__72745 = null;
if (arguments.length > 13) {
var G__73604__i = 0, G__73604__a = new Array(arguments.length -  13);
while (G__73604__i < G__73604__a.length) {G__73604__a[G__73604__i] = arguments[G__73604__i + 13]; ++G__73604__i;}
  G__72745 = new cljs.core.IndexedSeq(G__73604__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__72732,G__72733,G__72734,G__72735,G__72736,G__72737,G__72738,G__72739,G__72740,G__72741,G__72742,G__72743,G__72744,G__72745);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__73605){
var G__72732 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72733 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72734 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72735 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72736 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72737 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72738 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72739 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72740 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72741 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72742 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72743 = cljs.core.first(arglist__73605);
arglist__73605 = cljs.core.next(arglist__73605);
var G__72744 = cljs.core.first(arglist__73605);
var G__72745 = cljs.core.rest(arglist__73605);
return sci$impl$fns$fun_$_arity_13__delegate(G__72732,G__72733,G__72734,G__72735,G__72736,G__72737,G__72738,G__72739,G__72740,G__72741,G__72742,G__72743,G__72744,G__72745);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__72785 = cljs.core._nth(params,(0));
var G__72786 = cljs.core._nth(params,(1));
var G__72787 = cljs.core._nth(params,(2));
var G__72788 = cljs.core._nth(params,(3));
var G__72789 = cljs.core._nth(params,(4));
var G__72790 = cljs.core._nth(params,(5));
var G__72791 = cljs.core._nth(params,(6));
var G__72792 = cljs.core._nth(params,(7));
var G__72793 = cljs.core._nth(params,(8));
var G__72794 = cljs.core._nth(params,(9));
var G__72795 = cljs.core._nth(params,(10));
var G__72796 = cljs.core._nth(params,(11));
var G__72797 = cljs.core._nth(params,(12));
var G__72798 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__72770,G__72771,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777,G__72778,G__72779,G__72780,G__72781,G__72782,G__72783,G__72784){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72770);

(invoc_array[(1)] = G__72771);

(invoc_array[(2)] = G__72772);

(invoc_array[(3)] = G__72773);

(invoc_array[(4)] = G__72774);

(invoc_array[(5)] = G__72775);

(invoc_array[(6)] = G__72776);

(invoc_array[(7)] = G__72777);

(invoc_array[(8)] = G__72778);

(invoc_array[(9)] = G__72779);

(invoc_array[(10)] = G__72780);

(invoc_array[(11)] = G__72781);

(invoc_array[(12)] = G__72782);

(invoc_array[(13)] = G__72783);

(invoc_array[vararg_idx] = G__72784);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__72770,G__72771,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777,G__72778,G__72779,G__72780,G__72781,G__72782,G__72783,var_args){
var G__72784 = null;
if (arguments.length > 14) {
var G__73606__i = 0, G__73606__a = new Array(arguments.length -  14);
while (G__73606__i < G__73606__a.length) {G__73606__a[G__73606__i] = arguments[G__73606__i + 14]; ++G__73606__i;}
  G__72784 = new cljs.core.IndexedSeq(G__73606__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__72770,G__72771,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777,G__72778,G__72779,G__72780,G__72781,G__72782,G__72783,G__72784);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__73607){
var G__72770 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72771 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72772 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72773 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72774 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72775 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72776 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72777 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72778 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72779 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72780 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72781 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72782 = cljs.core.first(arglist__73607);
arglist__73607 = cljs.core.next(arglist__73607);
var G__72783 = cljs.core.first(arglist__73607);
var G__72784 = cljs.core.rest(arglist__73607);
return sci$impl$fns$fun_$_arity_14__delegate(G__72770,G__72771,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777,G__72778,G__72779,G__72780,G__72781,G__72782,G__72783,G__72784);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__72819 = cljs.core._nth(params,(0));
var G__72820 = cljs.core._nth(params,(1));
var G__72821 = cljs.core._nth(params,(2));
var G__72822 = cljs.core._nth(params,(3));
var G__72823 = cljs.core._nth(params,(4));
var G__72824 = cljs.core._nth(params,(5));
var G__72825 = cljs.core._nth(params,(6));
var G__72826 = cljs.core._nth(params,(7));
var G__72827 = cljs.core._nth(params,(8));
var G__72828 = cljs.core._nth(params,(9));
var G__72829 = cljs.core._nth(params,(10));
var G__72830 = cljs.core._nth(params,(11));
var G__72831 = cljs.core._nth(params,(12));
var G__72832 = cljs.core._nth(params,(13));
var G__72833 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__72803,G__72804,G__72805,G__72806,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816,G__72817,G__72818){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72803);

(invoc_array[(1)] = G__72804);

(invoc_array[(2)] = G__72805);

(invoc_array[(3)] = G__72806);

(invoc_array[(4)] = G__72807);

(invoc_array[(5)] = G__72808);

(invoc_array[(6)] = G__72809);

(invoc_array[(7)] = G__72810);

(invoc_array[(8)] = G__72811);

(invoc_array[(9)] = G__72812);

(invoc_array[(10)] = G__72813);

(invoc_array[(11)] = G__72814);

(invoc_array[(12)] = G__72815);

(invoc_array[(13)] = G__72816);

(invoc_array[(14)] = G__72817);

(invoc_array[vararg_idx] = G__72818);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__72803,G__72804,G__72805,G__72806,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816,G__72817,var_args){
var G__72818 = null;
if (arguments.length > 15) {
var G__73608__i = 0, G__73608__a = new Array(arguments.length -  15);
while (G__73608__i < G__73608__a.length) {G__73608__a[G__73608__i] = arguments[G__73608__i + 15]; ++G__73608__i;}
  G__72818 = new cljs.core.IndexedSeq(G__73608__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__72803,G__72804,G__72805,G__72806,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816,G__72817,G__72818);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__73609){
var G__72803 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72804 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72805 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72806 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72807 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72808 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72809 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72810 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72811 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72812 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72813 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72814 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72815 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72816 = cljs.core.first(arglist__73609);
arglist__73609 = cljs.core.next(arglist__73609);
var G__72817 = cljs.core.first(arglist__73609);
var G__72818 = cljs.core.rest(arglist__73609);
return sci$impl$fns$fun_$_arity_15__delegate(G__72803,G__72804,G__72805,G__72806,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812,G__72813,G__72814,G__72815,G__72816,G__72817,G__72818);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__72855 = cljs.core._nth(params,(0));
var G__72856 = cljs.core._nth(params,(1));
var G__72857 = cljs.core._nth(params,(2));
var G__72858 = cljs.core._nth(params,(3));
var G__72859 = cljs.core._nth(params,(4));
var G__72860 = cljs.core._nth(params,(5));
var G__72861 = cljs.core._nth(params,(6));
var G__72862 = cljs.core._nth(params,(7));
var G__72863 = cljs.core._nth(params,(8));
var G__72864 = cljs.core._nth(params,(9));
var G__72865 = cljs.core._nth(params,(10));
var G__72866 = cljs.core._nth(params,(11));
var G__72867 = cljs.core._nth(params,(12));
var G__72868 = cljs.core._nth(params,(13));
var G__72869 = cljs.core._nth(params,(14));
var G__72870 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__72838,G__72839,G__72840,G__72841,G__72842,G__72843,G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72838);

(invoc_array[(1)] = G__72839);

(invoc_array[(2)] = G__72840);

(invoc_array[(3)] = G__72841);

(invoc_array[(4)] = G__72842);

(invoc_array[(5)] = G__72843);

(invoc_array[(6)] = G__72844);

(invoc_array[(7)] = G__72845);

(invoc_array[(8)] = G__72846);

(invoc_array[(9)] = G__72847);

(invoc_array[(10)] = G__72848);

(invoc_array[(11)] = G__72849);

(invoc_array[(12)] = G__72850);

(invoc_array[(13)] = G__72851);

(invoc_array[(14)] = G__72852);

(invoc_array[(15)] = G__72853);

(invoc_array[vararg_idx] = G__72854);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__72838,G__72839,G__72840,G__72841,G__72842,G__72843,G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,var_args){
var G__72854 = null;
if (arguments.length > 16) {
var G__73610__i = 0, G__73610__a = new Array(arguments.length -  16);
while (G__73610__i < G__73610__a.length) {G__73610__a[G__73610__i] = arguments[G__73610__i + 16]; ++G__73610__i;}
  G__72854 = new cljs.core.IndexedSeq(G__73610__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__72838,G__72839,G__72840,G__72841,G__72842,G__72843,G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__73611){
var G__72838 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72839 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72840 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72841 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72842 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72843 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72844 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72845 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72846 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72847 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72848 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72849 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72850 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72851 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72852 = cljs.core.first(arglist__73611);
arglist__73611 = cljs.core.next(arglist__73611);
var G__72853 = cljs.core.first(arglist__73611);
var G__72854 = cljs.core.rest(arglist__73611);
return sci$impl$fns$fun_$_arity_16__delegate(G__72838,G__72839,G__72840,G__72841,G__72842,G__72843,G__72844,G__72845,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__72898 = cljs.core._nth(params,(0));
var G__72899 = cljs.core._nth(params,(1));
var G__72900 = cljs.core._nth(params,(2));
var G__72901 = cljs.core._nth(params,(3));
var G__72902 = cljs.core._nth(params,(4));
var G__72903 = cljs.core._nth(params,(5));
var G__72904 = cljs.core._nth(params,(6));
var G__72905 = cljs.core._nth(params,(7));
var G__72906 = cljs.core._nth(params,(8));
var G__72907 = cljs.core._nth(params,(9));
var G__72908 = cljs.core._nth(params,(10));
var G__72909 = cljs.core._nth(params,(11));
var G__72910 = cljs.core._nth(params,(12));
var G__72911 = cljs.core._nth(params,(13));
var G__72912 = cljs.core._nth(params,(14));
var G__72913 = cljs.core._nth(params,(15));
var G__72914 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891,G__72892,G__72893,G__72894,G__72895,G__72896,G__72897){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72880);

(invoc_array[(1)] = G__72881);

(invoc_array[(2)] = G__72882);

(invoc_array[(3)] = G__72883);

(invoc_array[(4)] = G__72884);

(invoc_array[(5)] = G__72885);

(invoc_array[(6)] = G__72886);

(invoc_array[(7)] = G__72887);

(invoc_array[(8)] = G__72888);

(invoc_array[(9)] = G__72889);

(invoc_array[(10)] = G__72890);

(invoc_array[(11)] = G__72891);

(invoc_array[(12)] = G__72892);

(invoc_array[(13)] = G__72893);

(invoc_array[(14)] = G__72894);

(invoc_array[(15)] = G__72895);

(invoc_array[(16)] = G__72896);

(invoc_array[vararg_idx] = G__72897);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891,G__72892,G__72893,G__72894,G__72895,G__72896,var_args){
var G__72897 = null;
if (arguments.length > 17) {
var G__73612__i = 0, G__73612__a = new Array(arguments.length -  17);
while (G__73612__i < G__73612__a.length) {G__73612__a[G__73612__i] = arguments[G__73612__i + 17]; ++G__73612__i;}
  G__72897 = new cljs.core.IndexedSeq(G__73612__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891,G__72892,G__72893,G__72894,G__72895,G__72896,G__72897);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__73613){
var G__72880 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72881 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72882 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72883 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72884 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72885 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72886 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72887 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72888 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72889 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72890 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72891 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72892 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72893 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72894 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72895 = cljs.core.first(arglist__73613);
arglist__73613 = cljs.core.next(arglist__73613);
var G__72896 = cljs.core.first(arglist__73613);
var G__72897 = cljs.core.rest(arglist__73613);
return sci$impl$fns$fun_$_arity_17__delegate(G__72880,G__72881,G__72882,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891,G__72892,G__72893,G__72894,G__72895,G__72896,G__72897);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__72941 = cljs.core._nth(params,(0));
var G__72942 = cljs.core._nth(params,(1));
var G__72943 = cljs.core._nth(params,(2));
var G__72944 = cljs.core._nth(params,(3));
var G__72945 = cljs.core._nth(params,(4));
var G__72946 = cljs.core._nth(params,(5));
var G__72947 = cljs.core._nth(params,(6));
var G__72948 = cljs.core._nth(params,(7));
var G__72949 = cljs.core._nth(params,(8));
var G__72950 = cljs.core._nth(params,(9));
var G__72951 = cljs.core._nth(params,(10));
var G__72952 = cljs.core._nth(params,(11));
var G__72953 = cljs.core._nth(params,(12));
var G__72954 = cljs.core._nth(params,(13));
var G__72955 = cljs.core._nth(params,(14));
var G__72956 = cljs.core._nth(params,(15));
var G__72957 = cljs.core._nth(params,(16));
var G__72958 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934,G__72935,G__72936,G__72937,G__72938,G__72939,G__72940){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72922);

(invoc_array[(1)] = G__72923);

(invoc_array[(2)] = G__72924);

(invoc_array[(3)] = G__72925);

(invoc_array[(4)] = G__72926);

(invoc_array[(5)] = G__72927);

(invoc_array[(6)] = G__72928);

(invoc_array[(7)] = G__72929);

(invoc_array[(8)] = G__72930);

(invoc_array[(9)] = G__72931);

(invoc_array[(10)] = G__72932);

(invoc_array[(11)] = G__72933);

(invoc_array[(12)] = G__72934);

(invoc_array[(13)] = G__72935);

(invoc_array[(14)] = G__72936);

(invoc_array[(15)] = G__72937);

(invoc_array[(16)] = G__72938);

(invoc_array[(17)] = G__72939);

(invoc_array[vararg_idx] = G__72940);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934,G__72935,G__72936,G__72937,G__72938,G__72939,var_args){
var G__72940 = null;
if (arguments.length > 18) {
var G__73614__i = 0, G__73614__a = new Array(arguments.length -  18);
while (G__73614__i < G__73614__a.length) {G__73614__a[G__73614__i] = arguments[G__73614__i + 18]; ++G__73614__i;}
  G__72940 = new cljs.core.IndexedSeq(G__73614__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934,G__72935,G__72936,G__72937,G__72938,G__72939,G__72940);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__73615){
var G__72922 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72923 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72924 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72925 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72926 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72927 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72928 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72929 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72930 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72931 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72932 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72933 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72934 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72935 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72936 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72937 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72938 = cljs.core.first(arglist__73615);
arglist__73615 = cljs.core.next(arglist__73615);
var G__72939 = cljs.core.first(arglist__73615);
var G__72940 = cljs.core.rest(arglist__73615);
return sci$impl$fns$fun_$_arity_18__delegate(G__72922,G__72923,G__72924,G__72925,G__72926,G__72927,G__72928,G__72929,G__72930,G__72931,G__72932,G__72933,G__72934,G__72935,G__72936,G__72937,G__72938,G__72939,G__72940);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__72981 = cljs.core._nth(params,(0));
var G__72982 = cljs.core._nth(params,(1));
var G__72983 = cljs.core._nth(params,(2));
var G__72984 = cljs.core._nth(params,(3));
var G__72985 = cljs.core._nth(params,(4));
var G__72986 = cljs.core._nth(params,(5));
var G__72987 = cljs.core._nth(params,(6));
var G__72988 = cljs.core._nth(params,(7));
var G__72989 = cljs.core._nth(params,(8));
var G__72990 = cljs.core._nth(params,(9));
var G__72991 = cljs.core._nth(params,(10));
var G__72992 = cljs.core._nth(params,(11));
var G__72993 = cljs.core._nth(params,(12));
var G__72994 = cljs.core._nth(params,(13));
var G__72995 = cljs.core._nth(params,(14));
var G__72996 = cljs.core._nth(params,(15));
var G__72997 = cljs.core._nth(params,(16));
var G__72998 = cljs.core._nth(params,(17));
var G__72999 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979,G__72980){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72961);

(invoc_array[(1)] = G__72962);

(invoc_array[(2)] = G__72963);

(invoc_array[(3)] = G__72964);

(invoc_array[(4)] = G__72965);

(invoc_array[(5)] = G__72966);

(invoc_array[(6)] = G__72967);

(invoc_array[(7)] = G__72968);

(invoc_array[(8)] = G__72969);

(invoc_array[(9)] = G__72970);

(invoc_array[(10)] = G__72971);

(invoc_array[(11)] = G__72972);

(invoc_array[(12)] = G__72973);

(invoc_array[(13)] = G__72974);

(invoc_array[(14)] = G__72975);

(invoc_array[(15)] = G__72976);

(invoc_array[(16)] = G__72977);

(invoc_array[(17)] = G__72978);

(invoc_array[(18)] = G__72979);

(invoc_array[vararg_idx] = G__72980);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979,var_args){
var G__72980 = null;
if (arguments.length > 19) {
var G__73616__i = 0, G__73616__a = new Array(arguments.length -  19);
while (G__73616__i < G__73616__a.length) {G__73616__a[G__73616__i] = arguments[G__73616__i + 19]; ++G__73616__i;}
  G__72980 = new cljs.core.IndexedSeq(G__73616__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979,G__72980);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__73617){
var G__72961 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72962 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72963 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72964 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72965 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72966 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72967 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72968 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72969 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72970 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72971 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72972 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72973 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72974 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72975 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72976 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72977 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72978 = cljs.core.first(arglist__73617);
arglist__73617 = cljs.core.next(arglist__73617);
var G__72979 = cljs.core.first(arglist__73617);
var G__72980 = cljs.core.rest(arglist__73617);
return sci$impl$fns$fun_$_arity_19__delegate(G__72961,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968,G__72969,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976,G__72977,G__72978,G__72979,G__72980);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__73027 = cljs.core._nth(params,(0));
var G__73028 = cljs.core._nth(params,(1));
var G__73029 = cljs.core._nth(params,(2));
var G__73030 = cljs.core._nth(params,(3));
var G__73031 = cljs.core._nth(params,(4));
var G__73032 = cljs.core._nth(params,(5));
var G__73033 = cljs.core._nth(params,(6));
var G__73034 = cljs.core._nth(params,(7));
var G__73035 = cljs.core._nth(params,(8));
var G__73036 = cljs.core._nth(params,(9));
var G__73037 = cljs.core._nth(params,(10));
var G__73038 = cljs.core._nth(params,(11));
var G__73039 = cljs.core._nth(params,(12));
var G__73040 = cljs.core._nth(params,(13));
var G__73041 = cljs.core._nth(params,(14));
var G__73042 = cljs.core._nth(params,(15));
var G__73043 = cljs.core._nth(params,(16));
var G__73044 = cljs.core._nth(params,(17));
var G__73045 = cljs.core._nth(params,(18));
var G__73046 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__73006,G__73007,G__73008,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73006);

(invoc_array[(1)] = G__73007);

(invoc_array[(2)] = G__73008);

(invoc_array[(3)] = G__73009);

(invoc_array[(4)] = G__73010);

(invoc_array[(5)] = G__73011);

(invoc_array[(6)] = G__73012);

(invoc_array[(7)] = G__73013);

(invoc_array[(8)] = G__73014);

(invoc_array[(9)] = G__73015);

(invoc_array[(10)] = G__73016);

(invoc_array[(11)] = G__73017);

(invoc_array[(12)] = G__73018);

(invoc_array[(13)] = G__73019);

(invoc_array[(14)] = G__73020);

(invoc_array[(15)] = G__73021);

(invoc_array[(16)] = G__73022);

(invoc_array[(17)] = G__73023);

(invoc_array[(18)] = G__73024);

(invoc_array[(19)] = G__73025);

(invoc_array[vararg_idx] = G__73026);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__73006,G__73007,G__73008,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,var_args){
var G__73026 = null;
if (arguments.length > 20) {
var G__73618__i = 0, G__73618__a = new Array(arguments.length -  20);
while (G__73618__i < G__73618__a.length) {G__73618__a[G__73618__i] = arguments[G__73618__i + 20]; ++G__73618__i;}
  G__73026 = new cljs.core.IndexedSeq(G__73618__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__73006,G__73007,G__73008,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__73619){
var G__73006 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73007 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73008 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73009 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73010 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73011 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73012 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73013 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73014 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73015 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73016 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73017 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73018 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73019 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73020 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73021 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73022 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73023 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73024 = cljs.core.first(arglist__73619);
arglist__73619 = cljs.core.next(arglist__73619);
var G__73025 = cljs.core.first(arglist__73619);
var G__73026 = cljs.core.rest(arglist__73619);
return sci$impl$fns$fun_$_arity_20__delegate(G__73006,G__73007,G__73008,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014,G__73015,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024,G__73025,G__73026);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72526)].join('')));

}
})():(function (){var G__73051 = (fixed_arity | (0));
switch (G__73051) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__71494__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71494__auto__)){
continue;
} else {
return ret__71494__auto__;
}
break;
}
});

break;
case (1):
var G__73053 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__73052){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73052);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (2):
var G__73056 = cljs.core._nth(params,(0));
var G__73057 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__73054,G__73055){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73054);

(invoc_array[(1)] = G__73055);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (3):
var G__73061 = cljs.core._nth(params,(0));
var G__73062 = cljs.core._nth(params,(1));
var G__73063 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__73058,G__73059,G__73060){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73058);

(invoc_array[(1)] = G__73059);

(invoc_array[(2)] = G__73060);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (4):
var G__73071 = cljs.core._nth(params,(0));
var G__73072 = cljs.core._nth(params,(1));
var G__73073 = cljs.core._nth(params,(2));
var G__73074 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__73067,G__73068,G__73069,G__73070){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73067);

(invoc_array[(1)] = G__73068);

(invoc_array[(2)] = G__73069);

(invoc_array[(3)] = G__73070);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (5):
var G__73080 = cljs.core._nth(params,(0));
var G__73081 = cljs.core._nth(params,(1));
var G__73082 = cljs.core._nth(params,(2));
var G__73083 = cljs.core._nth(params,(3));
var G__73084 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__73075,G__73076,G__73077,G__73078,G__73079){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73075);

(invoc_array[(1)] = G__73076);

(invoc_array[(2)] = G__73077);

(invoc_array[(3)] = G__73078);

(invoc_array[(4)] = G__73079);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (6):
var G__73091 = cljs.core._nth(params,(0));
var G__73092 = cljs.core._nth(params,(1));
var G__73093 = cljs.core._nth(params,(2));
var G__73094 = cljs.core._nth(params,(3));
var G__73095 = cljs.core._nth(params,(4));
var G__73096 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__73085,G__73086,G__73087,G__73088,G__73089,G__73090){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73085);

(invoc_array[(1)] = G__73086);

(invoc_array[(2)] = G__73087);

(invoc_array[(3)] = G__73088);

(invoc_array[(4)] = G__73089);

(invoc_array[(5)] = G__73090);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (7):
var G__73104 = cljs.core._nth(params,(0));
var G__73105 = cljs.core._nth(params,(1));
var G__73106 = cljs.core._nth(params,(2));
var G__73107 = cljs.core._nth(params,(3));
var G__73108 = cljs.core._nth(params,(4));
var G__73109 = cljs.core._nth(params,(5));
var G__73110 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__73097,G__73098,G__73099,G__73100,G__73101,G__73102,G__73103){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73097);

(invoc_array[(1)] = G__73098);

(invoc_array[(2)] = G__73099);

(invoc_array[(3)] = G__73100);

(invoc_array[(4)] = G__73101);

(invoc_array[(5)] = G__73102);

(invoc_array[(6)] = G__73103);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (8):
var G__73120 = cljs.core._nth(params,(0));
var G__73121 = cljs.core._nth(params,(1));
var G__73122 = cljs.core._nth(params,(2));
var G__73123 = cljs.core._nth(params,(3));
var G__73124 = cljs.core._nth(params,(4));
var G__73125 = cljs.core._nth(params,(5));
var G__73126 = cljs.core._nth(params,(6));
var G__73127 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__73112,G__73113,G__73114,G__73115,G__73116,G__73117,G__73118,G__73119){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73112);

(invoc_array[(1)] = G__73113);

(invoc_array[(2)] = G__73114);

(invoc_array[(3)] = G__73115);

(invoc_array[(4)] = G__73116);

(invoc_array[(5)] = G__73117);

(invoc_array[(6)] = G__73118);

(invoc_array[(7)] = G__73119);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (9):
var G__73140 = cljs.core._nth(params,(0));
var G__73141 = cljs.core._nth(params,(1));
var G__73142 = cljs.core._nth(params,(2));
var G__73143 = cljs.core._nth(params,(3));
var G__73144 = cljs.core._nth(params,(4));
var G__73145 = cljs.core._nth(params,(5));
var G__73146 = cljs.core._nth(params,(6));
var G__73147 = cljs.core._nth(params,(7));
var G__73148 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__73131,G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73131);

(invoc_array[(1)] = G__73132);

(invoc_array[(2)] = G__73133);

(invoc_array[(3)] = G__73134);

(invoc_array[(4)] = G__73135);

(invoc_array[(5)] = G__73136);

(invoc_array[(6)] = G__73137);

(invoc_array[(7)] = G__73138);

(invoc_array[(8)] = G__73139);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (10):
var G__73169 = cljs.core._nth(params,(0));
var G__73170 = cljs.core._nth(params,(1));
var G__73171 = cljs.core._nth(params,(2));
var G__73172 = cljs.core._nth(params,(3));
var G__73173 = cljs.core._nth(params,(4));
var G__73174 = cljs.core._nth(params,(5));
var G__73175 = cljs.core._nth(params,(6));
var G__73176 = cljs.core._nth(params,(7));
var G__73177 = cljs.core._nth(params,(8));
var G__73178 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__73159,G__73160,G__73161,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73159);

(invoc_array[(1)] = G__73160);

(invoc_array[(2)] = G__73161);

(invoc_array[(3)] = G__73162);

(invoc_array[(4)] = G__73163);

(invoc_array[(5)] = G__73164);

(invoc_array[(6)] = G__73165);

(invoc_array[(7)] = G__73166);

(invoc_array[(8)] = G__73167);

(invoc_array[(9)] = G__73168);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (11):
var G__73196 = cljs.core._nth(params,(0));
var G__73197 = cljs.core._nth(params,(1));
var G__73198 = cljs.core._nth(params,(2));
var G__73199 = cljs.core._nth(params,(3));
var G__73200 = cljs.core._nth(params,(4));
var G__73201 = cljs.core._nth(params,(5));
var G__73202 = cljs.core._nth(params,(6));
var G__73203 = cljs.core._nth(params,(7));
var G__73204 = cljs.core._nth(params,(8));
var G__73205 = cljs.core._nth(params,(9));
var G__73206 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191,G__73192,G__73193,G__73194,G__73195){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73185);

(invoc_array[(1)] = G__73186);

(invoc_array[(2)] = G__73187);

(invoc_array[(3)] = G__73188);

(invoc_array[(4)] = G__73189);

(invoc_array[(5)] = G__73190);

(invoc_array[(6)] = G__73191);

(invoc_array[(7)] = G__73192);

(invoc_array[(8)] = G__73193);

(invoc_array[(9)] = G__73194);

(invoc_array[(10)] = G__73195);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (12):
var G__73219 = cljs.core._nth(params,(0));
var G__73220 = cljs.core._nth(params,(1));
var G__73221 = cljs.core._nth(params,(2));
var G__73222 = cljs.core._nth(params,(3));
var G__73223 = cljs.core._nth(params,(4));
var G__73224 = cljs.core._nth(params,(5));
var G__73225 = cljs.core._nth(params,(6));
var G__73226 = cljs.core._nth(params,(7));
var G__73227 = cljs.core._nth(params,(8));
var G__73228 = cljs.core._nth(params,(9));
var G__73229 = cljs.core._nth(params,(10));
var G__73230 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__73207,G__73208,G__73209,G__73210,G__73211,G__73212,G__73213,G__73214,G__73215,G__73216,G__73217,G__73218){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73207);

(invoc_array[(1)] = G__73208);

(invoc_array[(2)] = G__73209);

(invoc_array[(3)] = G__73210);

(invoc_array[(4)] = G__73211);

(invoc_array[(5)] = G__73212);

(invoc_array[(6)] = G__73213);

(invoc_array[(7)] = G__73214);

(invoc_array[(8)] = G__73215);

(invoc_array[(9)] = G__73216);

(invoc_array[(10)] = G__73217);

(invoc_array[(11)] = G__73218);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (13):
var G__73263 = cljs.core._nth(params,(0));
var G__73264 = cljs.core._nth(params,(1));
var G__73265 = cljs.core._nth(params,(2));
var G__73266 = cljs.core._nth(params,(3));
var G__73268 = cljs.core._nth(params,(4));
var G__73269 = cljs.core._nth(params,(5));
var G__73270 = cljs.core._nth(params,(6));
var G__73271 = cljs.core._nth(params,(7));
var G__73272 = cljs.core._nth(params,(8));
var G__73273 = cljs.core._nth(params,(9));
var G__73274 = cljs.core._nth(params,(10));
var G__73275 = cljs.core._nth(params,(11));
var G__73276 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73250);

(invoc_array[(1)] = G__73251);

(invoc_array[(2)] = G__73252);

(invoc_array[(3)] = G__73253);

(invoc_array[(4)] = G__73254);

(invoc_array[(5)] = G__73255);

(invoc_array[(6)] = G__73256);

(invoc_array[(7)] = G__73257);

(invoc_array[(8)] = G__73258);

(invoc_array[(9)] = G__73259);

(invoc_array[(10)] = G__73260);

(invoc_array[(11)] = G__73261);

(invoc_array[(12)] = G__73262);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (14):
var G__73331 = cljs.core._nth(params,(0));
var G__73336 = cljs.core._nth(params,(1));
var G__73337 = cljs.core._nth(params,(2));
var G__73338 = cljs.core._nth(params,(3));
var G__73339 = cljs.core._nth(params,(4));
var G__73340 = cljs.core._nth(params,(5));
var G__73341 = cljs.core._nth(params,(6));
var G__73342 = cljs.core._nth(params,(7));
var G__73343 = cljs.core._nth(params,(8));
var G__73344 = cljs.core._nth(params,(9));
var G__73345 = cljs.core._nth(params,(10));
var G__73346 = cljs.core._nth(params,(11));
var G__73347 = cljs.core._nth(params,(12));
var G__73348 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__73317,G__73318,G__73319,G__73320,G__73321,G__73322,G__73323,G__73324,G__73325,G__73326,G__73327,G__73328,G__73329,G__73330){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73317);

(invoc_array[(1)] = G__73318);

(invoc_array[(2)] = G__73319);

(invoc_array[(3)] = G__73320);

(invoc_array[(4)] = G__73321);

(invoc_array[(5)] = G__73322);

(invoc_array[(6)] = G__73323);

(invoc_array[(7)] = G__73324);

(invoc_array[(8)] = G__73325);

(invoc_array[(9)] = G__73326);

(invoc_array[(10)] = G__73327);

(invoc_array[(11)] = G__73328);

(invoc_array[(12)] = G__73329);

(invoc_array[(13)] = G__73330);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (15):
var G__73377 = cljs.core._nth(params,(0));
var G__73378 = cljs.core._nth(params,(1));
var G__73379 = cljs.core._nth(params,(2));
var G__73380 = cljs.core._nth(params,(3));
var G__73381 = cljs.core._nth(params,(4));
var G__73382 = cljs.core._nth(params,(5));
var G__73383 = cljs.core._nth(params,(6));
var G__73384 = cljs.core._nth(params,(7));
var G__73385 = cljs.core._nth(params,(8));
var G__73386 = cljs.core._nth(params,(9));
var G__73387 = cljs.core._nth(params,(10));
var G__73388 = cljs.core._nth(params,(11));
var G__73389 = cljs.core._nth(params,(12));
var G__73390 = cljs.core._nth(params,(13));
var G__73391 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__73362,G__73363,G__73364,G__73365,G__73366,G__73367,G__73368,G__73369,G__73370,G__73371,G__73372,G__73373,G__73374,G__73375,G__73376){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73362);

(invoc_array[(1)] = G__73363);

(invoc_array[(2)] = G__73364);

(invoc_array[(3)] = G__73365);

(invoc_array[(4)] = G__73366);

(invoc_array[(5)] = G__73367);

(invoc_array[(6)] = G__73368);

(invoc_array[(7)] = G__73369);

(invoc_array[(8)] = G__73370);

(invoc_array[(9)] = G__73371);

(invoc_array[(10)] = G__73372);

(invoc_array[(11)] = G__73373);

(invoc_array[(12)] = G__73374);

(invoc_array[(13)] = G__73375);

(invoc_array[(14)] = G__73376);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (16):
var G__73409 = cljs.core._nth(params,(0));
var G__73410 = cljs.core._nth(params,(1));
var G__73411 = cljs.core._nth(params,(2));
var G__73412 = cljs.core._nth(params,(3));
var G__73413 = cljs.core._nth(params,(4));
var G__73414 = cljs.core._nth(params,(5));
var G__73415 = cljs.core._nth(params,(6));
var G__73416 = cljs.core._nth(params,(7));
var G__73417 = cljs.core._nth(params,(8));
var G__73418 = cljs.core._nth(params,(9));
var G__73419 = cljs.core._nth(params,(10));
var G__73420 = cljs.core._nth(params,(11));
var G__73421 = cljs.core._nth(params,(12));
var G__73422 = cljs.core._nth(params,(13));
var G__73423 = cljs.core._nth(params,(14));
var G__73424 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__73393,G__73394,G__73395,G__73396,G__73397,G__73398,G__73399,G__73400,G__73401,G__73402,G__73403,G__73404,G__73405,G__73406,G__73407,G__73408){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73393);

(invoc_array[(1)] = G__73394);

(invoc_array[(2)] = G__73395);

(invoc_array[(3)] = G__73396);

(invoc_array[(4)] = G__73397);

(invoc_array[(5)] = G__73398);

(invoc_array[(6)] = G__73399);

(invoc_array[(7)] = G__73400);

(invoc_array[(8)] = G__73401);

(invoc_array[(9)] = G__73402);

(invoc_array[(10)] = G__73403);

(invoc_array[(11)] = G__73404);

(invoc_array[(12)] = G__73405);

(invoc_array[(13)] = G__73406);

(invoc_array[(14)] = G__73407);

(invoc_array[(15)] = G__73408);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (17):
var G__73445 = cljs.core._nth(params,(0));
var G__73446 = cljs.core._nth(params,(1));
var G__73447 = cljs.core._nth(params,(2));
var G__73448 = cljs.core._nth(params,(3));
var G__73449 = cljs.core._nth(params,(4));
var G__73450 = cljs.core._nth(params,(5));
var G__73451 = cljs.core._nth(params,(6));
var G__73452 = cljs.core._nth(params,(7));
var G__73453 = cljs.core._nth(params,(8));
var G__73454 = cljs.core._nth(params,(9));
var G__73455 = cljs.core._nth(params,(10));
var G__73456 = cljs.core._nth(params,(11));
var G__73457 = cljs.core._nth(params,(12));
var G__73458 = cljs.core._nth(params,(13));
var G__73459 = cljs.core._nth(params,(14));
var G__73460 = cljs.core._nth(params,(15));
var G__73461 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__73428,G__73429,G__73430,G__73431,G__73432,G__73433,G__73434,G__73435,G__73436,G__73437,G__73438,G__73439,G__73440,G__73441,G__73442,G__73443,G__73444){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73428);

(invoc_array[(1)] = G__73429);

(invoc_array[(2)] = G__73430);

(invoc_array[(3)] = G__73431);

(invoc_array[(4)] = G__73432);

(invoc_array[(5)] = G__73433);

(invoc_array[(6)] = G__73434);

(invoc_array[(7)] = G__73435);

(invoc_array[(8)] = G__73436);

(invoc_array[(9)] = G__73437);

(invoc_array[(10)] = G__73438);

(invoc_array[(11)] = G__73439);

(invoc_array[(12)] = G__73440);

(invoc_array[(13)] = G__73441);

(invoc_array[(14)] = G__73442);

(invoc_array[(15)] = G__73443);

(invoc_array[(16)] = G__73444);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (18):
var G__73480 = cljs.core._nth(params,(0));
var G__73481 = cljs.core._nth(params,(1));
var G__73482 = cljs.core._nth(params,(2));
var G__73483 = cljs.core._nth(params,(3));
var G__73484 = cljs.core._nth(params,(4));
var G__73485 = cljs.core._nth(params,(5));
var G__73486 = cljs.core._nth(params,(6));
var G__73487 = cljs.core._nth(params,(7));
var G__73488 = cljs.core._nth(params,(8));
var G__73489 = cljs.core._nth(params,(9));
var G__73490 = cljs.core._nth(params,(10));
var G__73491 = cljs.core._nth(params,(11));
var G__73492 = cljs.core._nth(params,(12));
var G__73493 = cljs.core._nth(params,(13));
var G__73494 = cljs.core._nth(params,(14));
var G__73495 = cljs.core._nth(params,(15));
var G__73496 = cljs.core._nth(params,(16));
var G__73497 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__73462,G__73463,G__73464,G__73465,G__73466,G__73467,G__73468,G__73469,G__73470,G__73471,G__73472,G__73473,G__73474,G__73475,G__73476,G__73477,G__73478,G__73479){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73462);

(invoc_array[(1)] = G__73463);

(invoc_array[(2)] = G__73464);

(invoc_array[(3)] = G__73465);

(invoc_array[(4)] = G__73466);

(invoc_array[(5)] = G__73467);

(invoc_array[(6)] = G__73468);

(invoc_array[(7)] = G__73469);

(invoc_array[(8)] = G__73470);

(invoc_array[(9)] = G__73471);

(invoc_array[(10)] = G__73472);

(invoc_array[(11)] = G__73473);

(invoc_array[(12)] = G__73474);

(invoc_array[(13)] = G__73475);

(invoc_array[(14)] = G__73476);

(invoc_array[(15)] = G__73477);

(invoc_array[(16)] = G__73478);

(invoc_array[(17)] = G__73479);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (19):
var G__73517 = cljs.core._nth(params,(0));
var G__73518 = cljs.core._nth(params,(1));
var G__73519 = cljs.core._nth(params,(2));
var G__73520 = cljs.core._nth(params,(3));
var G__73521 = cljs.core._nth(params,(4));
var G__73522 = cljs.core._nth(params,(5));
var G__73523 = cljs.core._nth(params,(6));
var G__73524 = cljs.core._nth(params,(7));
var G__73525 = cljs.core._nth(params,(8));
var G__73526 = cljs.core._nth(params,(9));
var G__73527 = cljs.core._nth(params,(10));
var G__73528 = cljs.core._nth(params,(11));
var G__73529 = cljs.core._nth(params,(12));
var G__73530 = cljs.core._nth(params,(13));
var G__73531 = cljs.core._nth(params,(14));
var G__73532 = cljs.core._nth(params,(15));
var G__73533 = cljs.core._nth(params,(16));
var G__73534 = cljs.core._nth(params,(17));
var G__73535 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__73498,G__73499,G__73500,G__73501,G__73502,G__73503,G__73504,G__73505,G__73506,G__73507,G__73508,G__73509,G__73510,G__73511,G__73512,G__73513,G__73514,G__73515,G__73516){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73498);

(invoc_array[(1)] = G__73499);

(invoc_array[(2)] = G__73500);

(invoc_array[(3)] = G__73501);

(invoc_array[(4)] = G__73502);

(invoc_array[(5)] = G__73503);

(invoc_array[(6)] = G__73504);

(invoc_array[(7)] = G__73505);

(invoc_array[(8)] = G__73506);

(invoc_array[(9)] = G__73507);

(invoc_array[(10)] = G__73508);

(invoc_array[(11)] = G__73509);

(invoc_array[(12)] = G__73510);

(invoc_array[(13)] = G__73511);

(invoc_array[(14)] = G__73512);

(invoc_array[(15)] = G__73513);

(invoc_array[(16)] = G__73514);

(invoc_array[(17)] = G__73515);

(invoc_array[(18)] = G__73516);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
case (20):
var G__73556 = cljs.core._nth(params,(0));
var G__73557 = cljs.core._nth(params,(1));
var G__73558 = cljs.core._nth(params,(2));
var G__73559 = cljs.core._nth(params,(3));
var G__73560 = cljs.core._nth(params,(4));
var G__73561 = cljs.core._nth(params,(5));
var G__73562 = cljs.core._nth(params,(6));
var G__73563 = cljs.core._nth(params,(7));
var G__73564 = cljs.core._nth(params,(8));
var G__73565 = cljs.core._nth(params,(9));
var G__73566 = cljs.core._nth(params,(10));
var G__73567 = cljs.core._nth(params,(11));
var G__73568 = cljs.core._nth(params,(12));
var G__73569 = cljs.core._nth(params,(13));
var G__73570 = cljs.core._nth(params,(14));
var G__73571 = cljs.core._nth(params,(15));
var G__73572 = cljs.core._nth(params,(16));
var G__73573 = cljs.core._nth(params,(17));
var G__73574 = cljs.core._nth(params,(18));
var G__73575 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__73536,G__73537,G__73538,G__73539,G__73540,G__73541,G__73542,G__73543,G__73544,G__73545,G__73546,G__73547,G__73548,G__73549,G__73550,G__73551,G__73552,G__73553,G__73554,G__73555){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73536);

(invoc_array[(1)] = G__73537);

(invoc_array[(2)] = G__73538);

(invoc_array[(3)] = G__73539);

(invoc_array[(4)] = G__73540);

(invoc_array[(5)] = G__73541);

(invoc_array[(6)] = G__73542);

(invoc_array[(7)] = G__73543);

(invoc_array[(8)] = G__73544);

(invoc_array[(9)] = G__73545);

(invoc_array[(10)] = G__73546);

(invoc_array[(11)] = G__73547);

(invoc_array[(12)] = G__73548);

(invoc_array[(13)] = G__73549);

(invoc_array[(14)] = G__73550);

(invoc_array[(15)] = G__73551);

(invoc_array[(16)] = G__73552);

(invoc_array[(17)] = G__73553);

(invoc_array[(18)] = G__73554);

(invoc_array[(19)] = G__73555);

while(true){
var ret__71495__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71495__auto__)){
continue;
} else {
return ret__71495__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73051)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__73621__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__73621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73622__i = 0, G__73622__a = new Array(arguments.length -  0);
while (G__73622__i < G__73622__a.length) {G__73622__a[G__73622__i] = arguments[G__73622__i + 0]; ++G__73622__i;}
  args = new cljs.core.IndexedSeq(G__73622__a,0,null);
} 
return G__73621__delegate.call(this,args);};
G__73621.cljs$lang$maxFixedArity = 0;
G__73621.cljs$lang$applyTo = (function (arglist__73623){
var args = cljs.core.seq(arglist__73623);
return G__73621__delegate(args);
});
G__73621.cljs$core$IFn$_invoke$arity$variadic = G__73621__delegate;
return G__73621;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__73576_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__73576_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
