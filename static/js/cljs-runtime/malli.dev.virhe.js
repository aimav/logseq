goog.provide('malli.dev.virhe');
malli.dev.virhe._dark_colors = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),(45),new cljs.core.Keyword(null,"title-dark","title-dark",-1835322435),(32),new cljs.core.Keyword(null,"text","text",-1790561697),(253),new cljs.core.Keyword(null,"link","link",-1769163468),(255),new cljs.core.Keyword(null,"string","string",-1989541586),(180),new cljs.core.Keyword(null,"constant","constant",-379609303),(149),new cljs.core.Keyword(null,"type","type",1174270348),(123),new cljs.core.Keyword(null,"error","error",-978969032),(196)], null);
malli.dev.virhe._color = (function malli$dev$virhe$_color(color,body,printer){
var colors = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$2(printer,malli.dev.virhe._dark_colors);
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(colors,color,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(colors));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),body], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
malli.dev.virhe.EdnPrinter = (function (symbols,print_meta,print_length,print_level,unknown,__meta,__extmap,__hash){
this.symbols = symbols;
this.print_meta = print_meta;
this.print_length = print_length;
this.print_level = print_level;
this.unknown = unknown;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.dev.virhe.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k59909,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__59913 = k59909;
var G__59913__$1 = (((G__59913 instanceof cljs.core.Keyword))?G__59913.fqn:null);
switch (G__59913__$1) {
case "symbols":
return self__.symbols;

break;
case "print-meta":
return self__.print_meta;

break;
case "print-length":
return self__.print_length;

break;
case "print-level":
return self__.print_level;

break;
case "unknown":
return self__.unknown;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59909,else__5343__auto__);

}
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__59914){
var vec__59915 = p__59914;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59915,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59915,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#malli.dev.virhe.EdnPrinter{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-length","print-length",1931866356),self__.print_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-level","print-level",-1825423733),self__.print_level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unknown","unknown",-935977881),self__.unknown],null))], null),self__.__extmap));
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59908){
var self__ = this;
var G__59908__$1 = this;
return (new cljs.core.RecordIter((0),G__59908__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbols","symbols",1211743),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"print-level","print-level",-1825423733),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.unknown,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL);

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.visit.visit(this$__$1,fipp.ednize.record__GT_tagged(x));
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,m,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"^",fipp.visit.visit(this$__$1,m)], null),new cljs.core.Keyword(null,"line","line",212345235),fipp.visit.visit_STAR_(this$__$1,x)], null);
} else {
return fipp.visit.visit_STAR_(this$__$1,x);
}
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))], null);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (function (){var and__5041__auto__ = self__.unknown;
if(cljs.core.truth_(and__5041__auto__)){
try{var G__59919 = (self__.unknown.cljs$core$IFn$_invoke$arity$1 ? self__.unknown.cljs$core$IFn$_invoke$arity$1(x) : self__.unknown.call(null,x));
if((G__59919 == null)){
return null;
} else {
return fipp.visit.visit(this$__$1,G__59919);
}
}catch (e59918){if((e59918 instanceof Error)){
var _ = e59918;
return null;
} else {
throw e59918;

}
}} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return fipp.visit.visit(this$__$1,fipp.ednize.edn(x));
}
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto__ = (function (){var G__59920 = cljs.core.first(x);
return (self__.symbols.cljs$core$IFn$_invoke$arity$1 ? self__.symbols.cljs$core$IFn$_invoke$arity$1(G__59920) : self__.symbols.call(null,G__59920));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var pretty = temp__5802__auto__;
return (pretty.cljs$core$IFn$_invoke$arity$2 ? pretty.cljs$core$IFn$_invoke$arity$2(this$__$1,x) : pretty.call(null,this$__$1,x));
} else {
return fipp.edn.pretty_coll(this$__$1,malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),"(",this$__$1),x,new cljs.core.Keyword(null,"line","line",212345235),malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),")",this$__$1),fipp.visit.visit);
}
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,p__59921){
var self__ = this;
var map__59922 = p__59921;
var map__59922__$1 = cljs.core.__destructure_map(map__59922);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59922__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59922__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var this$__$1 = this;
var object_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"object","object",-1179821820,null),tag);
var tag_f = ((cljs.core.map_QMARK_(form))?(function (p1__59907_SHARP_){
return malli.dev.virhe._color(new cljs.core.Keyword(null,"type","type",1174270348),p1__59907_SHARP_,this$__$1);
}):cljs.core.identity);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#",(function (){var G__59923 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0));
return (tag_f.cljs$core$IFn$_invoke$arity$1 ? tag_f.cljs$core$IFn$_invoke$arity$1(G__59923) : tag_f.call(null,G__59923));
})(),(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = self__.print_meta;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.meta(form);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (!(cljs.core.coll_QMARK_(form)));
}
})())?" ":null),((object_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),"[",fipp.visit.visit(this$__$1,cljs.core.last(form))], null),"]"], null):fipp.visit.visit(this$__$1,form))], null);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var xs = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,(function (a,b){
return arrangement.core.rank(cljs.core.first(a),cljs.core.first(b));
}),x);
return fipp.edn.pretty_coll(this$__$1,malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),"{",this$__$1),xs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),",",this$__$1),new cljs.core.Keyword(null,"line","line",212345235)], null),malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),"}",this$__$1),(function (printer,p__59924){
var vec__59925 = p__59924;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59925,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit(printer,k)," ",fipp.visit.visit(printer,v)], null);
}));
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),"nil",this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return malli.dev.virhe._color(new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),this$__$1);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var xs = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,(function (a,b){
return arrangement.core.rank(a,b);
}),cljs.core.seq(x));
return fipp.edn.pretty_coll(this$__$1,"#{",xs,new cljs.core.Keyword(null,"line","line",212345235),"}",fipp.visit.visit);
}));

(malli.dev.virhe.EdnPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.edn.pretty_coll(this$__$1,malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),"[",this$__$1),x,new cljs.core.Keyword(null,"line","line",212345235),malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),"]",this$__$1),fipp.visit.visit);
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1062596876 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59910,other59911){
var self__ = this;
var this59910__$1 = this;
return (((!((other59911 == null)))) && ((((this59910__$1.constructor === other59911.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59910__$1.symbols,other59911.symbols)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59910__$1.print_meta,other59911.print_meta)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59910__$1.print_length,other59911.print_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59910__$1.print_level,other59911.print_level)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59910__$1.unknown,other59911.unknown)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59910__$1.__extmap,other59911.__extmap)))))))))))))));
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),null,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),null,new cljs.core.Keyword(null,"print-length","print-length",1931866356),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.unknown,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k59909){
var self__ = this;
var this__5347__auto____$1 = this;
var G__59928 = k59909;
var G__59928__$1 = (((G__59928 instanceof cljs.core.Keyword))?G__59928.fqn:null);
switch (G__59928__$1) {
case "symbols":
case "print-meta":
case "print-length":
case "print-level":
case "unknown":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59909);

}
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__59908){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__59929 = cljs.core.keyword_identical_QMARK_;
var expr__59930 = k__5349__auto__;
if(cljs.core.truth_((pred__59929.cljs$core$IFn$_invoke$arity$2 ? pred__59929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__59930) : pred__59929.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__59930)))){
return (new malli.dev.virhe.EdnPrinter(G__59908,self__.print_meta,self__.print_length,self__.print_level,self__.unknown,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59929.cljs$core$IFn$_invoke$arity$2 ? pred__59929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__59930) : pred__59929.call(null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__59930)))){
return (new malli.dev.virhe.EdnPrinter(self__.symbols,G__59908,self__.print_length,self__.print_level,self__.unknown,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59929.cljs$core$IFn$_invoke$arity$2 ? pred__59929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-length","print-length",1931866356),expr__59930) : pred__59929.call(null,new cljs.core.Keyword(null,"print-length","print-length",1931866356),expr__59930)))){
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,G__59908,self__.print_level,self__.unknown,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59929.cljs$core$IFn$_invoke$arity$2 ? pred__59929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print-level","print-level",-1825423733),expr__59930) : pred__59929.call(null,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),expr__59930)))){
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,G__59908,self__.unknown,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59929.cljs$core$IFn$_invoke$arity$2 ? pred__59929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unknown","unknown",-935977881),expr__59930) : pred__59929.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),expr__59930)))){
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,G__59908,self__.__meta,self__.__extmap,null));
} else {
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.unknown,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__59908),null));
}
}
}
}
}
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-length","print-length",1931866356),self__.print_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-level","print-level",-1825423733),self__.print_level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unknown","unknown",-935977881),self__.unknown,null))], null),self__.__extmap));
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__59908){
var self__ = this;
var this__5339__auto____$1 = this;
return (new malli.dev.virhe.EdnPrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.unknown,G__59908,self__.__extmap,self__.__hash));
}));

(malli.dev.virhe.EdnPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(malli.dev.virhe.EdnPrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbols","symbols",1641743270,null),new cljs.core.Symbol(null,"print-meta","print-meta",-1620321171,null),new cljs.core.Symbol(null,"print-length","print-length",-722569413,null),new cljs.core.Symbol(null,"print-level","print-level",-184892206,null),new cljs.core.Symbol(null,"unknown","unknown",704553646,null)], null);
}));

(malli.dev.virhe.EdnPrinter.cljs$lang$type = true);

(malli.dev.virhe.EdnPrinter.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"malli.dev.virhe/EdnPrinter",null,(1),null));
}));

(malli.dev.virhe.EdnPrinter.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"malli.dev.virhe/EdnPrinter");
}));

/**
 * Positional factory function for malli.dev.virhe/EdnPrinter.
 */
malli.dev.virhe.__GT_EdnPrinter = (function malli$dev$virhe$__GT_EdnPrinter(symbols,print_meta,print_length,print_level,unknown){
return (new malli.dev.virhe.EdnPrinter(symbols,print_meta,print_length,print_level,unknown,null,null,null));
});

/**
 * Factory function for malli.dev.virhe/EdnPrinter, taking a map of keywords to field values.
 */
malli.dev.virhe.map__GT_EdnPrinter = (function malli$dev$virhe$map__GT_EdnPrinter(G__59912){
var extmap__5382__auto__ = (function (){var G__59932 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59912,new cljs.core.Keyword(null,"symbols","symbols",1211743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"print-level","print-level",-1825423733),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], 0));
if(cljs.core.record_QMARK_(G__59912)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59932);
} else {
return G__59932;
}
})();
return (new malli.dev.virhe.EdnPrinter(new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__59912),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598).cljs$core$IFn$_invoke$arity$1(G__59912),new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(G__59912),new cljs.core.Keyword(null,"print-level","print-level",-1825423733).cljs$core$IFn$_invoke$arity$1(G__59912),new cljs.core.Keyword(null,"unknown","unknown",-935977881).cljs$core$IFn$_invoke$arity$1(G__59912),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

malli.dev.virhe._printer = (function malli$dev$virhe$_printer(var_args){
var G__59934 = arguments.length;
switch (G__59934) {
case 0:
return malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$1 = (function (options){
var defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"symbols","symbols",1211743),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"colors","colors",1157174732),malli.dev.virhe._dark_colors,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),cljs.core._STAR_print_level_STAR_,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),cljs.core._STAR_print_meta_STAR_], null);
return malli.dev.virhe.map__GT_EdnPrinter((function (){var G__59935 = defaults;
if(cljs.core.truth_(options)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__59935,options], 0));
} else {
return G__59935;
}
})());
}));

(malli.dev.virhe._printer.cljs$lang$maxFixedArity = 1);

malli.dev.virhe._pprint = (function malli$dev$virhe$_pprint(var_args){
var G__59937 = arguments.length;
switch (G__59937) {
case 1:
return malli.dev.virhe._pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.dev.virhe._pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.virhe._pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return malli.dev.virhe._pprint.cljs$core$IFn$_invoke$arity$2(x,malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$0());
}));

(malli.dev.virhe._pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,printer){
var printer__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(printer,new cljs.core.Keyword(null,"margin","margin",-995903681));
var margin = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$2(printer__$1,(0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" ")));
var _STAR_print_meta_STAR__orig_val__59938 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__59939 = false;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__59939);

try{return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),margin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit(printer__$1,x)], null)], null),printer__$1);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__59938);
}}));

(malli.dev.virhe._pprint.cljs$lang$maxFixedArity = 2);

malli.dev.virhe._print_doc = (function malli$dev$virhe$_print_doc(doc,printer){
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2(doc,printer);
});
malli.dev.virhe._visit = (function malli$dev$virhe$_visit(x,printer){
return fipp.visit.visit(printer,x);
});
malli.dev.virhe._title = (function malli$dev$virhe$_title(message,source,p__59940){
var map__59941 = p__59940;
var map__59941__$1 = cljs.core.__destructure_map(map__59941);
var printer = map__59941__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var between = (((width - cljs.core.count(message)) - (8)) - cljs.core.count(source));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.virhe._color(new cljs.core.Keyword(null,"title-dark","title-dark",-1835322435),"-- ",printer),malli.dev.virhe._color(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),message," "], null),printer),malli.dev.virhe._color(new cljs.core.Keyword(null,"title-dark","title-dark",-1835322435),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(between,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("-"))),printer),(cljs.core.truth_(source)?malli.dev.virhe._color(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",source," "], null),printer):malli.dev.virhe._color(new cljs.core.Keyword(null,"title-dark","title-dark",-1835322435),"--",printer)),malli.dev.virhe._color(new cljs.core.Keyword(null,"title-dark","title-dark",-1835322435),"--",printer)], null);
});
malli.dev.virhe._footer = (function malli$dev$virhe$_footer(p__59942){
var map__59943 = p__59942;
var map__59943__$1 = cljs.core.__destructure_map(map__59943);
var printer = map__59943__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59943__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return malli.dev.virhe._color(new cljs.core.Keyword(null,"title-dark","title-dark",-1835322435),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(width,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("-"))),printer);
});
malli.dev.virhe._text = (function malli$dev$virhe$_text(body,printer){
return malli.dev.virhe._color(new cljs.core.Keyword(null,"text","text",-1790561697),body,printer);
});
malli.dev.virhe._section = (function malli$dev$virhe$_section(title,location,body,printer){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.virhe._title(title,location,printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),body,new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.virhe._footer(printer)], null);
});
if((typeof malli !== 'undefined') && (typeof malli.dev !== 'undefined') && (typeof malli.dev.virhe !== 'undefined') && (typeof malli.dev.virhe._format !== 'undefined')){
} else {
malli.dev.virhe._format = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.dev.virhe","default","malli.dev.virhe/default",1530256530)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59944 = cljs.core.get_global_hierarchy;
return (fexpr__59944.cljs$core$IFn$_invoke$arity$0 ? fexpr__59944.cljs$core$IFn$_invoke$arity$0() : fexpr__59944.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.dev.virhe","-format"),(function (type,_,___$1,___$2){
return type;
}),new cljs.core.Keyword("malli.dev.virhe","default","malli.dev.virhe/default",1530256530),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.dev.virhe","default","malli.dev.virhe/default",1530256530),(function (_,message,data,printer){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.virhe._text((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return message;
}
})(),printer)], null),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.virhe._visit(data,printer)], null):null))], null);
}));
malli.dev.virhe._exception_doc = (function malli$dev$virhe$_exception_doc(e,printer){
var map__59945 = cljs.core.ex_data(e);
var map__59945__$1 = cljs.core.__destructure_map(map__59945);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59945__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59946 = malli.dev.virhe._format.cljs$core$IFn$_invoke$arity$4(type,cljs.core.ex_message(e),data,printer);
var map__59946__$1 = cljs.core.__destructure_map(map__59946);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59946__$1,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(printer));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59946__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var location__$1 = null;
return malli.dev.virhe._section(title,location__$1,body,printer);
});

//# sourceMappingURL=malli.dev.virhe.js.map
