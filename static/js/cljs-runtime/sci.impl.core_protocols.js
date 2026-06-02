goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__75053 = cljs.core.get_global_hierarchy;
return (fexpr__75053.cljs$core$IFn$_invoke$arity$0 ? fexpr__75053.cljs$core$IFn$_invoke$arity$0() : fexpr__75053.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__75056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__75056.cljs$core$IFn$_invoke$arity$1 ? fexpr__75056.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__75056.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__75081 = cljs.core.get_global_hierarchy;
return (fexpr__75081.cljs$core$IFn$_invoke$arity$0 ? fexpr__75081.cljs$core$IFn$_invoke$arity$0() : fexpr__75081.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__75087 = cljs.core.get_global_hierarchy;
return (fexpr__75087.cljs$core$IFn$_invoke$arity$0 ? fexpr__75087.cljs$core$IFn$_invoke$arity$0() : fexpr__75087.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__75187 = null;
var G__75187__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__75094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__75094.cljs$core$IFn$_invoke$arity$2 ? fexpr__75094.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__75094.call(null,ref,f));
});
var G__75187__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__75107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__75107.cljs$core$IFn$_invoke$arity$3 ? fexpr__75107.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__75107.call(null,ref,f,a1));
});
var G__75187__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__75109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__75109.cljs$core$IFn$_invoke$arity$4 ? fexpr__75109.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__75109.call(null,ref,f,a1,a2));
});
var G__75187__5 = (function() { 
var G__75194__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__75194 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__75195__i = 0, G__75195__a = new Array(arguments.length -  4);
while (G__75195__i < G__75195__a.length) {G__75195__a[G__75195__i] = arguments[G__75195__i + 4]; ++G__75195__i;}
  args = new cljs.core.IndexedSeq(G__75195__a,0,null);
} 
return G__75194__delegate.call(this,ref,f,a1,a2,args);};
G__75194.cljs$lang$maxFixedArity = 4;
G__75194.cljs$lang$applyTo = (function (arglist__75196){
var ref = cljs.core.first(arglist__75196);
arglist__75196 = cljs.core.next(arglist__75196);
var f = cljs.core.first(arglist__75196);
arglist__75196 = cljs.core.next(arglist__75196);
var a1 = cljs.core.first(arglist__75196);
arglist__75196 = cljs.core.next(arglist__75196);
var a2 = cljs.core.first(arglist__75196);
var args = cljs.core.rest(arglist__75196);
return G__75194__delegate(ref,f,a1,a2,args);
});
G__75194.cljs$core$IFn$_invoke$arity$variadic = G__75194__delegate;
return G__75194;
})()
;
G__75187 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__75187__2.call(this,ref,f);
case 3:
return G__75187__3.call(this,ref,f,a1);
case 4:
return G__75187__4.call(this,ref,f,a1,a2);
default:
var G__75198 = null;
if (arguments.length > 4) {
var G__75199__i = 0, G__75199__a = new Array(arguments.length -  4);
while (G__75199__i < G__75199__a.length) {G__75199__a[G__75199__i] = arguments[G__75199__i + 4]; ++G__75199__i;}
G__75198 = new cljs.core.IndexedSeq(G__75199__a,0,null);
}
return G__75187__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__75198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75187.cljs$lang$maxFixedArity = 4;
G__75187.cljs$lang$applyTo = G__75187__5.cljs$lang$applyTo;
G__75187.cljs$core$IFn$_invoke$arity$2 = G__75187__2;
G__75187.cljs$core$IFn$_invoke$arity$3 = G__75187__3;
G__75187.cljs$core$IFn$_invoke$arity$4 = G__75187__4;
G__75187.cljs$core$IFn$_invoke$arity$variadic = G__75187__5.cljs$core$IFn$_invoke$arity$variadic;
return G__75187;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__75118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__75118.cljs$core$IFn$_invoke$arity$2 ? fexpr__75118.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__75118.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__75201__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__75201 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__75202__i = 0, G__75202__a = new Array(arguments.length -  2);
while (G__75202__i < G__75202__a.length) {G__75202__a[G__75202__i] = arguments[G__75202__i + 2]; ++G__75202__i;}
  args = new cljs.core.IndexedSeq(G__75202__a,0,null);
} 
return G__75201__delegate.call(this,ref,f,args);};
G__75201.cljs$lang$maxFixedArity = 2;
G__75201.cljs$lang$applyTo = (function (arglist__75209){
var ref = cljs.core.first(arglist__75209);
arglist__75209 = cljs.core.next(arglist__75209);
var f = cljs.core.first(arglist__75209);
var args = cljs.core.rest(arglist__75209);
return G__75201__delegate(ref,f,args);
});
G__75201.cljs$core$IFn$_invoke$arity$variadic = G__75201__delegate;
return G__75201;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75216 = arguments.length;
var i__5767__auto___75217 = (0);
while(true){
if((i__5767__auto___75217 < len__5766__auto___75216)){
args__5772__auto__.push((arguments[i__5767__auto___75217]));

var G__75218 = (i__5767__auto___75217 + (1));
i__5767__auto___75217 = G__75218;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq75137){
var G__75138 = cljs.core.first(seq75137);
var seq75137__$1 = cljs.core.next(seq75137);
var G__75139 = cljs.core.first(seq75137__$1);
var seq75137__$2 = cljs.core.next(seq75137__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75138,G__75139,seq75137__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
