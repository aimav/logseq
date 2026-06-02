goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__72516){
var vec__72517 = p__72516;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72517,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (k instanceof cljs.core.Symbol);
if(and__5041__auto__){
var and__5041__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__72528){
var map__72529 = p__72528;
var map__72529__$1 = cljs.core.__destructure_map(map__72529);
var _parsed_libspec = map__72529__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__72541 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72541,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___73111 = (function (){var G__72553 = the_loaded_ns;
var G__72553__$1 = (((G__72553 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__72553));
var G__72553__$2 = (((G__72553__$1 == null))?null:cljs.core.meta(G__72553__$1));
if((G__72553__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__72553__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___73111)){
var on_loaded_73128 = temp__5804__auto___73111;
var G__72563_73129 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_73128.cljs$core$IFn$_invoke$arity$1 ? on_loaded_73128.cljs$core$IFn$_invoke$arity$1(G__72563_73129) : on_loaded_73128.call(null,G__72563_73129));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var temp__5802__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var as_alias = temp__5802__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__72590 = opts;
var map__72590__$1 = cljs.core.__destructure_map(map__72590);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72590__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72590__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = reload_all;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5802__auto___73130__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5802__auto___73130__$1)){
var the_loaded_ns_73149 = temp__5802__auto___73130__$1;
var loading_73150 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5041__auto__ = loading_73150;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_73150.indexOf(lib))));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_73150,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_73149,lib,opts));
}
} else {
var temp__5802__auto___73151__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___73151__$2)){
var load_fn_73152 = temp__5802__auto___73151__$2;
var temp__5802__auto___73153__$3 = (function (){var G__72607 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_73152.cljs$core$IFn$_invoke$arity$1 ? load_fn_73152.cljs$core$IFn$_invoke$arity$1(G__72607) : load_fn_73152.call(null,G__72607));
})();
if(cljs.core.truth_(temp__5802__auto___73153__$3)){
var map__72625_73154 = temp__5802__auto___73153__$3;
var map__72625_73155__$1 = cljs.core.__destructure_map(map__72625_73154);
var file_73156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72625_73155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_73157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72625_73155__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_73158__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_73156]));

try{var fexpr__72650_73179 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__72650_73179.cljs$core$IFn$_invoke$arity$2 ? fexpr__72650_73179.cljs$core$IFn$_invoke$arity$2(ctx_73158__$1,source_73157) : fexpr__72650_73179.call(null,ctx_73158__$1,source_73157));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e72626){if((e72626 instanceof Error)){
var e_73180 = e72626;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_73180;
} else {
throw e72626;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5043__auto___73181 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5043__auto___73181)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73182 = arguments.length;
var i__5767__auto___73183 = (0);
while(true){
if((i__5767__auto___73183 < len__5766__auto___73182)){
args__5772__auto__.push((arguments[i__5767__auto___73183]));

var G__73184 = (i__5767__auto___73183 + (1));
i__5767__auto___73183 = G__73184;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5041__auto__ = prefix;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq72674){
var G__72675 = cljs.core.first(seq72674);
var seq72674__$1 = cljs.core.next(seq72674);
var G__72676 = cljs.core.first(seq72674__$1);
var seq72674__$2 = cljs.core.next(seq72674__$1);
var G__72677 = cljs.core.first(seq72674__$2);
var seq72674__$3 = cljs.core.next(seq72674__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72675,G__72676,G__72677,seq72674__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_73231 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_73232 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_73231,flags));
if(unsupported_73232){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_73232)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__72759 = cljs.core.seq(args_STAR___$1);
var chunk__72760 = null;
var count__72761 = (0);
var i__72762 = (0);
while(true){
if((i__72762 < count__72761)){
var arg = chunk__72760.cljs$core$IIndexed$_nth$arity$2(null,i__72762);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__72872_73233 = arg;
var seq__72873_73234 = cljs.core.seq(vec__72872_73233);
var first__72874_73235 = cljs.core.first(seq__72873_73234);
var seq__72873_73236__$1 = cljs.core.next(seq__72873_73234);
var prefix_73237 = first__72874_73235;
var args_STAR__73238__$2 = seq__72873_73236__$1;
if((prefix_73237 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__72875_73239 = cljs.core.seq(args_STAR__73238__$2);
var chunk__72876_73240 = null;
var count__72877_73241 = (0);
var i__72878_73242 = (0);
while(true){
if((i__72878_73242 < count__72877_73241)){
var arg_73243__$1 = chunk__72876_73240.cljs$core$IIndexed$_nth$arity$2(null,i__72878_73242);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73237,sci.impl.load.prependss(arg_73243__$1,opts));


var G__73244 = seq__72875_73239;
var G__73245 = chunk__72876_73240;
var G__73246 = count__72877_73241;
var G__73247 = (i__72878_73242 + (1));
seq__72875_73239 = G__73244;
chunk__72876_73240 = G__73245;
count__72877_73241 = G__73246;
i__72878_73242 = G__73247;
continue;
} else {
var temp__5804__auto___73248 = cljs.core.seq(seq__72875_73239);
if(temp__5804__auto___73248){
var seq__72875_73249__$1 = temp__5804__auto___73248;
if(cljs.core.chunked_seq_QMARK_(seq__72875_73249__$1)){
var c__5565__auto___73267 = cljs.core.chunk_first(seq__72875_73249__$1);
var G__73277 = cljs.core.chunk_rest(seq__72875_73249__$1);
var G__73278 = c__5565__auto___73267;
var G__73279 = cljs.core.count(c__5565__auto___73267);
var G__73280 = (0);
seq__72875_73239 = G__73277;
chunk__72876_73240 = G__73278;
count__72877_73241 = G__73279;
i__72878_73242 = G__73280;
continue;
} else {
var arg_73281__$1 = cljs.core.first(seq__72875_73249__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73237,sci.impl.load.prependss(arg_73281__$1,opts));


var G__73282 = cljs.core.next(seq__72875_73249__$1);
var G__73283 = null;
var G__73284 = (0);
var G__73285 = (0);
seq__72875_73239 = G__73282;
chunk__72876_73240 = G__73283;
count__72877_73241 = G__73284;
i__72878_73242 = G__73285;
continue;
}
} else {
}
}
break;
}
}


var G__73286 = seq__72759;
var G__73287 = chunk__72760;
var G__73288 = count__72761;
var G__73289 = (i__72762 + (1));
seq__72759 = G__73286;
chunk__72760 = G__73287;
count__72761 = G__73288;
i__72762 = G__73289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72759);
if(temp__5804__auto__){
var seq__72759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72759__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72759__$1);
var G__73290 = cljs.core.chunk_rest(seq__72759__$1);
var G__73291 = c__5565__auto__;
var G__73292 = cljs.core.count(c__5565__auto__);
var G__73293 = (0);
seq__72759 = G__73290;
chunk__72760 = G__73291;
count__72761 = G__73292;
i__72762 = G__73293;
continue;
} else {
var arg = cljs.core.first(seq__72759__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__72915_73294 = arg;
var seq__72916_73295 = cljs.core.seq(vec__72915_73294);
var first__72917_73296 = cljs.core.first(seq__72916_73295);
var seq__72916_73297__$1 = cljs.core.next(seq__72916_73295);
var prefix_73298 = first__72917_73296;
var args_STAR__73299__$2 = seq__72916_73297__$1;
if((prefix_73298 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__72918_73300 = cljs.core.seq(args_STAR__73299__$2);
var chunk__72919_73301 = null;
var count__72920_73302 = (0);
var i__72921_73303 = (0);
while(true){
if((i__72921_73303 < count__72920_73302)){
var arg_73304__$1 = chunk__72919_73301.cljs$core$IIndexed$_nth$arity$2(null,i__72921_73303);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73298,sci.impl.load.prependss(arg_73304__$1,opts));


var G__73305 = seq__72918_73300;
var G__73306 = chunk__72919_73301;
var G__73307 = count__72920_73302;
var G__73308 = (i__72921_73303 + (1));
seq__72918_73300 = G__73305;
chunk__72919_73301 = G__73306;
count__72920_73302 = G__73307;
i__72921_73303 = G__73308;
continue;
} else {
var temp__5804__auto___73309__$1 = cljs.core.seq(seq__72918_73300);
if(temp__5804__auto___73309__$1){
var seq__72918_73310__$1 = temp__5804__auto___73309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72918_73310__$1)){
var c__5565__auto___73311 = cljs.core.chunk_first(seq__72918_73310__$1);
var G__73312 = cljs.core.chunk_rest(seq__72918_73310__$1);
var G__73313 = c__5565__auto___73311;
var G__73314 = cljs.core.count(c__5565__auto___73311);
var G__73315 = (0);
seq__72918_73300 = G__73312;
chunk__72919_73301 = G__73313;
count__72920_73302 = G__73314;
i__72921_73303 = G__73315;
continue;
} else {
var arg_73316__$1 = cljs.core.first(seq__72918_73310__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73298,sci.impl.load.prependss(arg_73316__$1,opts));


var G__73332 = cljs.core.next(seq__72918_73310__$1);
var G__73333 = null;
var G__73334 = (0);
var G__73335 = (0);
seq__72918_73300 = G__73332;
chunk__72919_73301 = G__73333;
count__72920_73302 = G__73334;
i__72921_73303 = G__73335;
continue;
}
} else {
}
}
break;
}
}


var G__73349 = cljs.core.next(seq__72759__$1);
var G__73350 = null;
var G__73351 = (0);
var G__73352 = (0);
seq__72759 = G__73349;
chunk__72760 = G__73350;
count__72761 = G__73351;
i__72762 = G__73352;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73353 = arguments.length;
var i__5767__auto___73354 = (0);
while(true){
if((i__5767__auto___73354 < len__5766__auto___73353)){
args__5772__auto__.push((arguments[i__5767__auto___73354]));

var G__73355 = (i__5767__auto___73354 + (1));
i__5767__auto___73354 = G__73355;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq72959){
var G__72960 = cljs.core.first(seq72959);
var seq72959__$1 = cljs.core.next(seq72959);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72960,seq72959__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73356 = arguments.length;
var i__5767__auto___73357 = (0);
while(true){
if((i__5767__auto___73357 < len__5766__auto___73356)){
args__5772__auto__.push((arguments[i__5767__auto___73357]));

var G__73358 = (i__5767__auto___73357 + (1));
i__5767__auto___73357 = G__73358;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq73000){
var G__73001 = cljs.core.first(seq73000);
var seq73000__$1 = cljs.core.next(seq73000);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73001,seq73000__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__73002 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73002,(1),null);
var G__73005_73359 = k;
var G__73005_73360__$1 = (((G__73005_73359 instanceof cljs.core.Keyword))?G__73005_73359.fqn:null);
switch (G__73005_73360__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym){
return (function (acc,p__73047){
var vec__73048 = p__73047;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73048,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73048,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__73005_73359,G__73005_73360__$1,vec__73002,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73005_73360__$1)].join('')));

}

var G__73392 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__73392;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = to_do;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5041__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73425 = arguments.length;
var i__5767__auto___73426 = (0);
while(true){
if((i__5767__auto___73426 < len__5766__auto___73425)){
args__5772__auto__.push((arguments[i__5767__auto___73426]));

var G__73427 = (i__5767__auto___73426 + (1));
i__5767__auto___73426 = G__73427;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq73064){
var G__73065 = cljs.core.first(seq73064);
var seq73064__$1 = cljs.core.next(seq73064);
var G__73066 = cljs.core.first(seq73064__$1);
var seq73064__$2 = cljs.core.next(seq73064__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73065,G__73066,seq73064__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
