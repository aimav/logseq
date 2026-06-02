goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__50535 = arguments.length;
switch (G__50535) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__50536 = opts;
var map__50536__$1 = cljs.core.__destructure_map(map__50536);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50536__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50536__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__50537 = cljs.core.count(refs);
switch (G__50537) {
case (1):
var vec__50538 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50538,(0),null);
return (function (){
var G__50541 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50541) : f.call(null,G__50541));
});

break;
case (2):
var vec__50542 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(1),null);
return (function (){
var G__50545 = cljs.core.deref(a);
var G__50546 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__50545,G__50546) : f.call(null,G__50545,G__50546));
});

break;
case (3):
var vec__50547 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(2),null);
return (function (){
var G__50550 = cljs.core.deref(a);
var G__50551 = cljs.core.deref(b);
var G__50552 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__50550,G__50551,G__50552) : f.call(null,G__50550,G__50551,G__50552));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__50553 = ref;
cljs.core.reset_BANG_(G__50553,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__50553;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__50554_50560 = cljs.core.seq(refs);
var chunk__50555_50561 = null;
var count__50556_50562 = (0);
var i__50557_50563 = (0);
while(true){
if((i__50557_50563 < count__50556_50562)){
var ref_50564__$1 = chunk__50555_50561.cljs$core$IIndexed$_nth$arity$2(null,i__50557_50563);
cljs.core.add_watch(ref_50564__$1,key,watch);


var G__50565 = seq__50554_50560;
var G__50566 = chunk__50555_50561;
var G__50567 = count__50556_50562;
var G__50568 = (i__50557_50563 + (1));
seq__50554_50560 = G__50565;
chunk__50555_50561 = G__50566;
count__50556_50562 = G__50567;
i__50557_50563 = G__50568;
continue;
} else {
var temp__5804__auto___50569 = cljs.core.seq(seq__50554_50560);
if(temp__5804__auto___50569){
var seq__50554_50570__$1 = temp__5804__auto___50569;
if(cljs.core.chunked_seq_QMARK_(seq__50554_50570__$1)){
var c__5565__auto___50571 = cljs.core.chunk_first(seq__50554_50570__$1);
var G__50572 = cljs.core.chunk_rest(seq__50554_50570__$1);
var G__50573 = c__5565__auto___50571;
var G__50574 = cljs.core.count(c__5565__auto___50571);
var G__50575 = (0);
seq__50554_50560 = G__50572;
chunk__50555_50561 = G__50573;
count__50556_50562 = G__50574;
i__50557_50563 = G__50575;
continue;
} else {
var ref_50576__$1 = cljs.core.first(seq__50554_50570__$1);
cljs.core.add_watch(ref_50576__$1,key,watch);


var G__50577 = cljs.core.next(seq__50554_50570__$1);
var G__50578 = null;
var G__50579 = (0);
var G__50580 = (0);
seq__50554_50560 = G__50577;
chunk__50555_50561 = G__50578;
count__50556_50562 = G__50579;
i__50557_50563 = G__50580;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
