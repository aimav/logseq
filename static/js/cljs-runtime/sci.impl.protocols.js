goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77108 = arguments.length;
var i__5767__auto___77109 = (0);
while(true){
if((i__5767__auto___77109 < len__5766__auto___77108)){
args__5772__auto__.push((arguments[i__5767__auto___77109]));

var G__77110 = (i__5767__auto___77109 + (1));
i__5767__auto___77109 = G__77110;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__76886 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76886,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76886,(1),null);
var vec__76889 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__76898){
var vec__76899 = p__76898;
var seq__76900 = cljs.core.seq(vec__76899);
var first__76901 = cljs.core.first(seq__76900);
var seq__76900__$1 = cljs.core.next(seq__76900);
var method_name = first__76901;
var ___$2 = seq__76900__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__76867__auto__","x__76867__auto__",1717243127,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__76868__auto__","args__76868__auto__",2098372218,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__76869__auto__","methods__76869__auto__",467481707,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__76867__auto__","x__76867__auto__",1717243127,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__76869__auto__","methods__76869__auto__",467481707,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__76867__auto__","x__76867__auto__",1717243127,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__76868__auto__","args__76868__auto__",2098372218,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__76870__auto__","x__76870__auto__",-492537628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__76871__auto__","args__76871__auto__",833286084,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__76872__auto__","meta__76872__auto__",-826713894,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__76870__auto__","x__76870__auto__",-492537628,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__76874__auto__","method__76874__auto__",-1218972060,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__76872__auto__","meta__76872__auto__",-826713894,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__76874__auto__","method__76874__auto__",-1218972060,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__76874__auto__","method__76874__auto__",-1218972060,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__76870__auto__","x__76870__auto__",-492537628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__76871__auto__","args__76871__auto__",833286084,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__76870__auto__","x__76870__auto__",-492537628,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq76878){
var G__76879 = cljs.core.first(seq76878);
var seq76878__$1 = cljs.core.next(seq76878);
var G__76880 = cljs.core.first(seq76878__$1);
var seq76878__$2 = cljs.core.next(seq76878__$1);
var G__76881 = cljs.core.first(seq76878__$2);
var seq76878__$3 = cljs.core.next(seq76878__$2);
var G__76882 = cljs.core.first(seq76878__$3);
var seq76878__$4 = cljs.core.next(seq76878__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76879,G__76880,G__76881,G__76882,seq76878__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77113 = arguments.length;
var i__5767__auto___77114 = (0);
while(true){
if((i__5767__auto___77114 < len__5766__auto___77113)){
args__5772__auto__.push((arguments[i__5767__auto___77114]));

var G__77115 = (i__5767__auto___77114 + (1));
i__5767__auto___77114 = G__77115;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__76911 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__76913 = null;
var count__76914 = (0);
var i__76915 = (0);
while(true){
if((i__76915 < count__76914)){
var vec__76973 = chunk__76913.cljs$core$IIndexed$_nth$arity$2(null,i__76915);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76973,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76973,(1),null);
var extend_via_metadata_77116 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_77117 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_77118 = sci.impl.vars.getName(proto_ns_77117);
var pns_str_77119 = (cljs.core.truth_(extend_via_metadata_77116)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_77118):null);
var seq__76976_77120 = cljs.core.seq(mmap);
var chunk__76977_77121 = null;
var count__76978_77122 = (0);
var i__76979_77123 = (0);
while(true){
if((i__76979_77123 < count__76978_77122)){
var vec__76993_77124 = chunk__76977_77121.cljs$core$IIndexed$_nth$arity$2(null,i__76979_77123);
var meth_name_77125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76993_77124,(0),null);
var f_77126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76993_77124,(1),null);
var meth_str_77127 = cljs.core.name(meth_name_77125);
var meth_sym_77128 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_77127);
var env_77129 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_77130 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_77129,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_77118,meth_sym_77128], null));
var multi_method_77131 = cljs.core.deref(multi_method_var_77130);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_77131,atype,(cljs.core.truth_(extend_via_metadata_77116)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_77119,meth_str_77127);
return ((function (seq__76976_77120,chunk__76977_77121,count__76978_77122,i__76979_77123,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77127,meth_sym_77128,env_77129,multi_method_var_77130,multi_method_77131,vec__76993_77124,meth_name_77125,f_77126,extend_via_metadata_77116,proto_ns_77117,pns_77118,pns_str_77119,vec__76973,proto,mmap){
return (function() { 
var G__77132__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77126,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77126,this$,args);
}
};
var G__77132 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__77133__i = 0, G__77133__a = new Array(arguments.length -  1);
while (G__77133__i < G__77133__a.length) {G__77133__a[G__77133__i] = arguments[G__77133__i + 1]; ++G__77133__i;}
  args = new cljs.core.IndexedSeq(G__77133__a,0,null);
} 
return G__77132__delegate.call(this,this$,args);};
G__77132.cljs$lang$maxFixedArity = 1;
G__77132.cljs$lang$applyTo = (function (arglist__77134){
var this$ = cljs.core.first(arglist__77134);
var args = cljs.core.rest(arglist__77134);
return G__77132__delegate(this$,args);
});
G__77132.cljs$core$IFn$_invoke$arity$variadic = G__77132__delegate;
return G__77132;
})()
;
;})(seq__76976_77120,chunk__76977_77121,count__76978_77122,i__76979_77123,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77127,meth_sym_77128,env_77129,multi_method_var_77130,multi_method_77131,vec__76993_77124,meth_name_77125,f_77126,extend_via_metadata_77116,proto_ns_77117,pns_77118,pns_str_77119,vec__76973,proto,mmap))
})():f_77126));


var G__77135 = seq__76976_77120;
var G__77136 = chunk__76977_77121;
var G__77137 = count__76978_77122;
var G__77138 = (i__76979_77123 + (1));
seq__76976_77120 = G__77135;
chunk__76977_77121 = G__77136;
count__76978_77122 = G__77137;
i__76979_77123 = G__77138;
continue;
} else {
var temp__5804__auto___77139 = cljs.core.seq(seq__76976_77120);
if(temp__5804__auto___77139){
var seq__76976_77140__$1 = temp__5804__auto___77139;
if(cljs.core.chunked_seq_QMARK_(seq__76976_77140__$1)){
var c__5565__auto___77141 = cljs.core.chunk_first(seq__76976_77140__$1);
var G__77142 = cljs.core.chunk_rest(seq__76976_77140__$1);
var G__77143 = c__5565__auto___77141;
var G__77144 = cljs.core.count(c__5565__auto___77141);
var G__77145 = (0);
seq__76976_77120 = G__77142;
chunk__76977_77121 = G__77143;
count__76978_77122 = G__77144;
i__76979_77123 = G__77145;
continue;
} else {
var vec__76997_77146 = cljs.core.first(seq__76976_77140__$1);
var meth_name_77147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76997_77146,(0),null);
var f_77148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76997_77146,(1),null);
var meth_str_77149 = cljs.core.name(meth_name_77147);
var meth_sym_77150 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_77149);
var env_77151 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_77152 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_77151,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_77118,meth_sym_77150], null));
var multi_method_77153 = cljs.core.deref(multi_method_var_77152);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_77153,atype,(cljs.core.truth_(extend_via_metadata_77116)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_77119,meth_str_77149);
return ((function (seq__76976_77120,chunk__76977_77121,count__76978_77122,i__76979_77123,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77149,meth_sym_77150,env_77151,multi_method_var_77152,multi_method_77153,vec__76997_77146,meth_name_77147,f_77148,seq__76976_77140__$1,temp__5804__auto___77139,extend_via_metadata_77116,proto_ns_77117,pns_77118,pns_str_77119,vec__76973,proto,mmap){
return (function() { 
var G__77157__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77148,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77148,this$,args);
}
};
var G__77157 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__77158__i = 0, G__77158__a = new Array(arguments.length -  1);
while (G__77158__i < G__77158__a.length) {G__77158__a[G__77158__i] = arguments[G__77158__i + 1]; ++G__77158__i;}
  args = new cljs.core.IndexedSeq(G__77158__a,0,null);
} 
return G__77157__delegate.call(this,this$,args);};
G__77157.cljs$lang$maxFixedArity = 1;
G__77157.cljs$lang$applyTo = (function (arglist__77159){
var this$ = cljs.core.first(arglist__77159);
var args = cljs.core.rest(arglist__77159);
return G__77157__delegate(this$,args);
});
G__77157.cljs$core$IFn$_invoke$arity$variadic = G__77157__delegate;
return G__77157;
})()
;
;})(seq__76976_77120,chunk__76977_77121,count__76978_77122,i__76979_77123,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77149,meth_sym_77150,env_77151,multi_method_var_77152,multi_method_77153,vec__76997_77146,meth_name_77147,f_77148,seq__76976_77140__$1,temp__5804__auto___77139,extend_via_metadata_77116,proto_ns_77117,pns_77118,pns_str_77119,vec__76973,proto,mmap))
})():f_77148));


var G__77160 = cljs.core.next(seq__76976_77140__$1);
var G__77161 = null;
var G__77162 = (0);
var G__77163 = (0);
seq__76976_77120 = G__77160;
chunk__76977_77121 = G__77161;
count__76978_77122 = G__77162;
i__76979_77123 = G__77163;
continue;
}
} else {
}
}
break;
}


var G__77164 = seq__76911;
var G__77165 = chunk__76913;
var G__77166 = count__76914;
var G__77167 = (i__76915 + (1));
seq__76911 = G__77164;
chunk__76913 = G__77165;
count__76914 = G__77166;
i__76915 = G__77167;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76911);
if(temp__5804__auto__){
var seq__76911__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76911__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__76911__$1);
var G__77168 = cljs.core.chunk_rest(seq__76911__$1);
var G__77169 = c__5565__auto__;
var G__77170 = cljs.core.count(c__5565__auto__);
var G__77171 = (0);
seq__76911 = G__77168;
chunk__76913 = G__77169;
count__76914 = G__77170;
i__76915 = G__77171;
continue;
} else {
var vec__77004 = cljs.core.first(seq__76911__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77004,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77004,(1),null);
var extend_via_metadata_77172 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_77173 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_77174 = sci.impl.vars.getName(proto_ns_77173);
var pns_str_77175 = (cljs.core.truth_(extend_via_metadata_77172)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_77174):null);
var seq__77007_77177 = cljs.core.seq(mmap);
var chunk__77008_77178 = null;
var count__77009_77179 = (0);
var i__77010_77180 = (0);
while(true){
if((i__77010_77180 < count__77009_77179)){
var vec__77021_77182 = chunk__77008_77178.cljs$core$IIndexed$_nth$arity$2(null,i__77010_77180);
var meth_name_77183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77021_77182,(0),null);
var f_77184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77021_77182,(1),null);
var meth_str_77185 = cljs.core.name(meth_name_77183);
var meth_sym_77186 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_77185);
var env_77187 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_77188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_77187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_77174,meth_sym_77186], null));
var multi_method_77189 = cljs.core.deref(multi_method_var_77188);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_77189,atype,(cljs.core.truth_(extend_via_metadata_77172)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_77175,meth_str_77185);
return ((function (seq__77007_77177,chunk__77008_77178,count__77009_77179,i__77010_77180,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77185,meth_sym_77186,env_77187,multi_method_var_77188,multi_method_77189,vec__77021_77182,meth_name_77183,f_77184,extend_via_metadata_77172,proto_ns_77173,pns_77174,pns_str_77175,vec__77004,proto,mmap,seq__76911__$1,temp__5804__auto__){
return (function() { 
var G__77190__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77184,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77184,this$,args);
}
};
var G__77190 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__77191__i = 0, G__77191__a = new Array(arguments.length -  1);
while (G__77191__i < G__77191__a.length) {G__77191__a[G__77191__i] = arguments[G__77191__i + 1]; ++G__77191__i;}
  args = new cljs.core.IndexedSeq(G__77191__a,0,null);
} 
return G__77190__delegate.call(this,this$,args);};
G__77190.cljs$lang$maxFixedArity = 1;
G__77190.cljs$lang$applyTo = (function (arglist__77192){
var this$ = cljs.core.first(arglist__77192);
var args = cljs.core.rest(arglist__77192);
return G__77190__delegate(this$,args);
});
G__77190.cljs$core$IFn$_invoke$arity$variadic = G__77190__delegate;
return G__77190;
})()
;
;})(seq__77007_77177,chunk__77008_77178,count__77009_77179,i__77010_77180,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77185,meth_sym_77186,env_77187,multi_method_var_77188,multi_method_77189,vec__77021_77182,meth_name_77183,f_77184,extend_via_metadata_77172,proto_ns_77173,pns_77174,pns_str_77175,vec__77004,proto,mmap,seq__76911__$1,temp__5804__auto__))
})():f_77184));


var G__77193 = seq__77007_77177;
var G__77194 = chunk__77008_77178;
var G__77195 = count__77009_77179;
var G__77196 = (i__77010_77180 + (1));
seq__77007_77177 = G__77193;
chunk__77008_77178 = G__77194;
count__77009_77179 = G__77195;
i__77010_77180 = G__77196;
continue;
} else {
var temp__5804__auto___77197__$1 = cljs.core.seq(seq__77007_77177);
if(temp__5804__auto___77197__$1){
var seq__77007_77198__$1 = temp__5804__auto___77197__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77007_77198__$1)){
var c__5565__auto___77199 = cljs.core.chunk_first(seq__77007_77198__$1);
var G__77200 = cljs.core.chunk_rest(seq__77007_77198__$1);
var G__77201 = c__5565__auto___77199;
var G__77202 = cljs.core.count(c__5565__auto___77199);
var G__77203 = (0);
seq__77007_77177 = G__77200;
chunk__77008_77178 = G__77201;
count__77009_77179 = G__77202;
i__77010_77180 = G__77203;
continue;
} else {
var vec__77030_77204 = cljs.core.first(seq__77007_77198__$1);
var meth_name_77205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77030_77204,(0),null);
var f_77206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77030_77204,(1),null);
var meth_str_77207 = cljs.core.name(meth_name_77205);
var meth_sym_77208 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_77207);
var env_77209 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_77210 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_77209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_77174,meth_sym_77208], null));
var multi_method_77211 = cljs.core.deref(multi_method_var_77210);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_77211,atype,(cljs.core.truth_(extend_via_metadata_77172)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_77175,meth_str_77207);
return ((function (seq__77007_77177,chunk__77008_77178,count__77009_77179,i__77010_77180,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77207,meth_sym_77208,env_77209,multi_method_var_77210,multi_method_77211,vec__77030_77204,meth_name_77205,f_77206,seq__77007_77198__$1,temp__5804__auto___77197__$1,extend_via_metadata_77172,proto_ns_77173,pns_77174,pns_str_77175,vec__77004,proto,mmap,seq__76911__$1,temp__5804__auto__){
return (function() { 
var G__77212__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77206,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_77206,this$,args);
}
};
var G__77212 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__77213__i = 0, G__77213__a = new Array(arguments.length -  1);
while (G__77213__i < G__77213__a.length) {G__77213__a[G__77213__i] = arguments[G__77213__i + 1]; ++G__77213__i;}
  args = new cljs.core.IndexedSeq(G__77213__a,0,null);
} 
return G__77212__delegate.call(this,this$,args);};
G__77212.cljs$lang$maxFixedArity = 1;
G__77212.cljs$lang$applyTo = (function (arglist__77214){
var this$ = cljs.core.first(arglist__77214);
var args = cljs.core.rest(arglist__77214);
return G__77212__delegate(this$,args);
});
G__77212.cljs$core$IFn$_invoke$arity$variadic = G__77212__delegate;
return G__77212;
})()
;
;})(seq__77007_77177,chunk__77008_77178,count__77009_77179,i__77010_77180,seq__76911,chunk__76913,count__76914,i__76915,fq,meth_str_77207,meth_sym_77208,env_77209,multi_method_var_77210,multi_method_77211,vec__77030_77204,meth_name_77205,f_77206,seq__77007_77198__$1,temp__5804__auto___77197__$1,extend_via_metadata_77172,proto_ns_77173,pns_77174,pns_str_77175,vec__77004,proto,mmap,seq__76911__$1,temp__5804__auto__))
})():f_77206));


var G__77215 = cljs.core.next(seq__77007_77198__$1);
var G__77216 = null;
var G__77217 = (0);
var G__77218 = (0);
seq__77007_77177 = G__77215;
chunk__77008_77178 = G__77216;
count__77009_77179 = G__77217;
i__77010_77180 = G__77218;
continue;
}
} else {
}
}
break;
}


var G__77219 = cljs.core.next(seq__76911__$1);
var G__77220 = null;
var G__77221 = (0);
var G__77222 = (0);
seq__76911 = G__77219;
chunk__76913 = G__77220;
count__76914 = G__77221;
i__76915 = G__77222;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq76907){
var G__76908 = cljs.core.first(seq76907);
var seq76907__$1 = cljs.core.next(seq76907);
var G__76909 = cljs.core.first(seq76907__$1);
var seq76907__$2 = cljs.core.next(seq76907__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76908,G__76909,seq76907__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__77046){
var vec__77047 = p__77046;
var seq__77048 = cljs.core.seq(vec__77047);
var first__77049 = cljs.core.first(seq__77048);
var seq__77048__$1 = cljs.core.next(seq__77048);
var args = first__77049;
var body = seq__77048__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__77043__auto__","farg__77043__auto__",184066709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__77044__auto__","m__77044__auto__",-173050730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__77043__auto__","farg__77043__auto__",184066709,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__77045__auto__","meth__77045__auto__",-434711326,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__77044__auto__","m__77044__auto__",-173050730,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__77045__auto__","meth__77045__auto__",-434711326,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77051){
var vec__77052 = p__77051;
var seq__77053 = cljs.core.seq(vec__77052);
var first__77054 = cljs.core.first(seq__77053);
var seq__77053__$1 = cljs.core.next(seq__77053);
var meth_name = first__77054;
var fn_body = seq__77053__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77050_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__77050_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77224 = arguments.length;
var i__5767__auto___77225 = (0);
while(true){
if((i__5767__auto___77225 < len__5766__auto___77224)){
args__5772__auto__.push((arguments[i__5767__auto___77225]));

var G__77226 = (i__5767__auto___77225 + (1));
i__5767__auto___77225 = G__77226;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__77058_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__77058_SHARP_)));
}),impls);
var protocol_var = (function (){var G__77068 = ctx;
var G__77069 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__77070 = protocol_name;
var fexpr__77067 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__77067.cljs$core$IFn$_invoke$arity$3 ? fexpr__77067.cljs$core$IFn$_invoke$arity$3(G__77068,G__77069,G__77070) : fexpr__77067.call(null,G__77068,G__77069,G__77070));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77072){
var vec__77073 = p__77072;
var seq__77074 = cljs.core.seq(vec__77073);
var first__77075 = cljs.core.first(seq__77074);
var seq__77074__$1 = cljs.core.next(seq__77074);
var type = first__77075;
var meths = seq__77074__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq77059){
var G__77060 = cljs.core.first(seq77059);
var seq77059__$1 = cljs.core.next(seq77059);
var G__77061 = cljs.core.first(seq77059__$1);
var seq77059__$2 = cljs.core.next(seq77059__$1);
var G__77062 = cljs.core.first(seq77059__$2);
var seq77059__$3 = cljs.core.next(seq77059__$2);
var G__77063 = cljs.core.first(seq77059__$3);
var seq77059__$4 = cljs.core.next(seq77059__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77060,G__77061,G__77062,G__77063,seq77059__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77227 = arguments.length;
var i__5767__auto___77228 = (0);
while(true){
if((i__5767__auto___77228 < len__5766__auto___77227)){
args__5772__auto__.push((arguments[i__5767__auto___77228]));

var G__77229 = (i__5767__auto___77228 + (1));
i__5767__auto___77228 = G__77229;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__77077_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__77077_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77086){
var vec__77087 = p__77086;
var seq__77088 = cljs.core.seq(vec__77087);
var first__77089 = cljs.core.first(seq__77088);
var seq__77088__$1 = cljs.core.next(seq__77088);
var proto = first__77089;
var meths = seq__77088__$1;
var protocol_var = (function (){var G__77092 = ctx;
var G__77093 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__77094 = proto;
var fexpr__77091 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__77091.cljs$core$IFn$_invoke$arity$3 ? fexpr__77091.cljs$core$IFn$_invoke$arity$3(G__77092,G__77093,G__77094) : fexpr__77091.call(null,G__77092,G__77093,G__77094));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq77080){
var G__77081 = cljs.core.first(seq77080);
var seq77080__$1 = cljs.core.next(seq77080);
var G__77082 = cljs.core.first(seq77080__$1);
var seq77080__$2 = cljs.core.next(seq77080__$1);
var G__77083 = cljs.core.first(seq77080__$2);
var seq77080__$3 = cljs.core.next(seq77080__$2);
var G__77084 = cljs.core.first(seq77080__$3);
var seq77080__$4 = cljs.core.next(seq77080__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77081,G__77082,G__77083,G__77084,seq77080__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__77095_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__77095_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__77095_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5043__auto__ = (function (){var and__5041__auto__ = p;
if(cljs.core.truth_(and__5041__auto__)){
var pred__77098 = cljs.core._EQ_;
var expr__77099 = p;
if(cljs.core.truth_((pred__77098.cljs$core$IFn$_invoke$arity$2 ? pred__77098.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__77099) : pred__77098.call(null,cljs.core.IDeref,expr__77099)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__77098.cljs$core$IFn$_invoke$arity$2 ? pred__77098.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__77099) : pred__77098.call(null,cljs.core.ISwap,expr__77099)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__77098.cljs$core$IFn$_invoke$arity$2 ? pred__77098.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__77099) : pred__77098.call(null,cljs.core.IReset,expr__77099)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__77099)].join('')));
}
}
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5041__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5041__auto__){
var G__77105 = clazz;
var G__77105__$1 = (((G__77105 == null))?null:cljs.core.meta(G__77105));
if((G__77105__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__77105__$1);
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__77106_SHARP_){
return cljs.core.get_method(p1__77106_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
