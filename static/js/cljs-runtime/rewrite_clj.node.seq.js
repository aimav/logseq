goog.provide('rewrite_clj.node.seq');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.seq.SeqNode = (function (tag,format_string,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.format_string = format_string;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k88206,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__88210 = k88206;
var G__88210__$1 = (((G__88210 instanceof cljs.core.Keyword))?G__88210.fqn:null);
switch (G__88210__$1) {
case "tag":
return self__.tag;

break;
case "format-string":
return self__.format_string;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88206,else__5343__auto__);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__88211){
var vec__88212 = p__88211;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88212,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88212,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format-string","format-string",832187437),self__.format_string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88205){
var self__ = this;
var G__88205__$1 = this;
return (new cljs.core.RecordIter((0),G__88205__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"format-string","format-string",832187437),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (580297420 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88207,other88208){
var self__ = this;
var this88207__$1 = this;
return (((!((other88208 == null)))) && ((((this88207__$1.constructor === other88208.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88207__$1.tag,other88208.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88207__$1.format_string,other88208.format_string)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88207__$1.wrap_length,other88208.wrap_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88207__$1.seq_fn,other88208.seq_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88207__$1.children,other88208.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88207__$1.__extmap,other88208.__extmap)))))))))))))));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
var G__88215 = rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2(self__.children,opts);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__88215) : self__.seq_fn.call(null,G__88215));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic(self__.format_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_clj.node.protocols.concat_strings(self__.children)], 0));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"format-string","format-string",832187437),null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (self__.wrap_length - (1));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k88206){
var self__ = this;
var this__5347__auto____$1 = this;
var G__88216 = k88206;
var G__88216__$1 = (((G__88216 instanceof cljs.core.Keyword))?G__88216.fqn:null);
switch (G__88216__$1) {
case "tag":
case "format-string":
case "wrap-length":
case "seq-fn":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k88206);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__88205){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__88217 = cljs.core.keyword_identical_QMARK_;
var expr__88218 = k__5349__auto__;
if(cljs.core.truth_((pred__88217.cljs$core$IFn$_invoke$arity$2 ? pred__88217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__88218) : pred__88217.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__88218)))){
return (new rewrite_clj.node.seq.SeqNode(G__88205,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88217.cljs$core$IFn$_invoke$arity$2 ? pred__88217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format-string","format-string",832187437),expr__88218) : pred__88217.call(null,new cljs.core.Keyword(null,"format-string","format-string",832187437),expr__88218)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__88205,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88217.cljs$core$IFn$_invoke$arity$2 ? pred__88217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__88218) : pred__88217.call(null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__88218)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,G__88205,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88217.cljs$core$IFn$_invoke$arity$2 ? pred__88217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__88218) : pred__88217.call(null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__88218)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,G__88205,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88217.cljs$core$IFn$_invoke$arity$2 ? pred__88217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__88218) : pred__88217.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__88218)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,G__88205,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__88205),null));
}
}
}
}
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"format-string","format-string",832187437),self__.format_string,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__88205){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,G__88205,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_clj.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"format-string","format-string",-1822248332,null),new cljs.core.Symbol(null,"wrap-length","wrap-length",1372423008,null),new cljs.core.Symbol(null,"seq-fn","seq-fn",649518296,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$type = true);

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.seq/SeqNode",null,(1),null));
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-clj.node.seq/SeqNode");
}));

/**
 * Positional factory function for rewrite-clj.node.seq/SeqNode.
 */
rewrite_clj.node.seq.__GT_SeqNode = (function rewrite_clj$node$seq$__GT_SeqNode(tag,format_string,wrap_length,seq_fn,children){
return (new rewrite_clj.node.seq.SeqNode(tag,format_string,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_clj.node.seq.map__GT_SeqNode = (function rewrite_clj$node$seq$map__GT_SeqNode(G__88209){
var extmap__5382__auto__ = (function (){var G__88220 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__88209,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"format-string","format-string",832187437),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__88209)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88220);
} else {
return G__88220;
}
})();
return (new rewrite_clj.node.seq.SeqNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__88209),new cljs.core.Keyword(null,"format-string","format-string",832187437).cljs$core$IFn$_invoke$arity$1(G__88209),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519).cljs$core$IFn$_invoke$arity$1(G__88209),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231).cljs$core$IFn$_invoke$arity$1(G__88209),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__88209),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.seq.SeqNode);
var list_node_seq_fn_88225 = (function (p1__88221_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__88221_SHARP_);
});
/**
 * Create a node representing a list with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/list-node [(n/token-node 1)
 *                   (n/spaces 1)
 *                   (n/token-node 2)
 *                   (n/spaces 1)
 *                   (n/token-node 3)])
 *     n/string)
 * ;; => "(1 2 3)"
 * ```
 */
rewrite_clj.node.seq.list_node = (function rewrite_clj$node$seq$list_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"list","list",765357683),"(%s)",(2),list_node_seq_fn_88225,children);
});
/**
 * Create a node representing a vector with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/vector-node [(n/token-node 1)
 *                     (n/spaces 1)
 *                     (n/token-node 2)
 *                     (n/spaces 1)
 *                     (n/token-node 3)])
 *     n/string)
 * ;; => "[1 2 3]"
 * ```
 */
rewrite_clj.node.seq.vector_node = (function rewrite_clj$node$seq$vector_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"vector","vector",1902966158),"[%s]",(2),cljs.core.vec,children);
});
/**
 * Create a node representing a set with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/set-node [(n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/token-node 2)
 *                  (n/spaces 1)
 *                  (n/token-node 3)])
 *     n/string)
 * ;; => "#{1 2 3}"
 * ```
 * 
 * Note that rewrite-clj allows the, technically illegal, set with duplicate values:
 * ```Clojure
 * (-> (n/set-node [(n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/token-node 1)])
 *     (n/string))
 * ;; => "#{1 1}"
 * ```
 * 
 * See [docs on sets with duplicate values](/doc/01-user-guide.adoc#sets-with-duplicate-values).
 */
rewrite_clj.node.seq.set_node = (function rewrite_clj$node$seq$set_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"set","set",304602554),"#{%s}",(3),cljs.core.set,children);
});
var map_seq_fn_88226 = (function (p1__88222_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__88222_SHARP_);
});
/**
 * Create a node representing a map with `children`.
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/map-node [(n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/keyword-node :b)
 *                  (n/spaces 1)
 *                  (n/token-node 2)])
 *     (n/string))
 * ;; => "{:a 1 :b 2}"
 * ```
 * 
 * Note that rewrite-clj allows the, technically illegal, unbalanced map:
 * ```Clojure
 * (-> (n/map-node [(n/keyword-node :a)])
 *     (n/string))
 * ;; => "{:a}"
 * ```
 * See [docs on unbalanced maps](/doc/01-user-guide.adoc#unbalanced-maps).
 * 
 * Rewrite-clj also allows the, also technically illegal, map with duplicate keys:
 * ```Clojure
 * (-> (n/map-node [(n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 2)])
 *     (n/string))
 * ;; => "{:a 1 :a 2}"
 * ```
 * See [docs on maps with duplicate keys](/doc/01-user-guide.adoc#maps-with-duplicate-keys).
 */
rewrite_clj.node.seq.map_node = (function rewrite_clj$node$seq$map_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"map","map",1371690461),"{%s}",(2),map_seq_fn_88226,children);
});

//# sourceMappingURL=rewrite_clj.node.seq.js.map
