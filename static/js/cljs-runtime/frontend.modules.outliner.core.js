goog.provide('frontend.modules.outliner.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__102696){
return cljs.core.map_QMARK_(G__102696);
})], null),(function (G__102696){
return cljs.core.map_QMARK_(G__102696);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.modules.outliner.core","block-map-or-entity","frontend.modules.outliner.core/block-map-or-entity",1526834445),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.impl.entity.entity_QMARK_,new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790)], null),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
frontend.modules.outliner.core.Block = (function (data,__meta,__extmap,__hash){
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.modules.outliner.core.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k102698,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__102702 = k102698;
var G__102702__$1 = (((G__102702 instanceof cljs.core.Keyword))?G__102702.fqn:null);
switch (G__102702__$1) {
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k102698,else__5343__auto__);

}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__102703){
var vec__102704 = p__102703;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102704,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102704,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.modules.outliner.core.Block{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__102697){
var self__ = this;
var G__102697__$1 = this;
return (new cljs.core.RecordIter((0),G__102697__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.modules.outliner.core.Block(self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1889080954 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this102699,other102700){
var self__ = this;
var this102699__$1 = this;
return (((!((other102700 == null)))) && ((((this102699__$1.constructor === other102700.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this102699__$1.data,other102700.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this102699__$1.__extmap,other102700.__extmap)))))));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.modules.outliner.core.Block(self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k102698){
var self__ = this;
var this__5347__auto____$1 = this;
var G__102707 = k102698;
var G__102707__$1 = (((G__102707 instanceof cljs.core.Keyword))?G__102707.fqn:null);
switch (G__102707__$1) {
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k102698);

}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__102697){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__102708 = cljs.core.keyword_identical_QMARK_;
var expr__102709 = k__5349__auto__;
if(cljs.core.truth_((pred__102708.cljs$core$IFn$_invoke$arity$2 ? pred__102708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__102709) : pred__102708.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__102709)))){
return (new frontend.modules.outliner.core.Block(G__102697,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.modules.outliner.core.Block(self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__102697),null));
}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__102697){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.modules.outliner.core.Block(self__.data,G__102697,self__.__extmap,self__.__hash));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.modules.outliner.core.Block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(frontend.modules.outliner.core.Block.cljs$lang$type = true);

(frontend.modules.outliner.core.Block.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.modules.outliner.core/Block",null,(1),null));
}));

(frontend.modules.outliner.core.Block.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.modules.outliner.core/Block");
}));

/**
 * Positional factory function for frontend.modules.outliner.core/Block.
 */
frontend.modules.outliner.core.__GT_Block = (function frontend$modules$outliner$core$__GT_Block(data){
return (new frontend.modules.outliner.core.Block(data,null,null,null));
});

/**
 * Factory function for frontend.modules.outliner.core/Block, taking a map of keywords to field values.
 */
frontend.modules.outliner.core.map__GT_Block = (function frontend$modules$outliner$core$map__GT_Block(G__102701){
var extmap__5382__auto__ = (function (){var G__102711 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__102701,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_(G__102701)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__102711);
} else {
return G__102711;
}
})();
return (new frontend.modules.outliner.core.Block(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__102701),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

frontend.modules.outliner.core.block = (function frontend$modules$outliner$core$block(m){
if(((cljs.core.map_QMARK_(m)) || (datascript.impl.entity.entity_QMARK_(m)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("block data must be map or entity, got: %s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(m),m], 0))),"\n","(or (map? m) (de/entity? m))"].join('')));
}

if(datascript.impl.entity.entity_QMARK_(m)){
return frontend.modules.outliner.core.__GT_Block(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(m)], null));
} else {
return frontend.modules.outliner.core.__GT_Block(m);
}
});
frontend.modules.outliner.core.get_data = (function frontend$modules$outliner$core$get_data(block){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(block);
});
frontend.modules.outliner.core.get_block_by_id = (function frontend$modules$outliner$core$get_block_by_id(id){
var c = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(false);
var r = frontend.db.outliner.get_by_id(c,frontend.modules.outliner.utils.__GT_block_lookup_ref(id));
if(cljs.core.truth_(r)){
return frontend.modules.outliner.core.__GT_Block(r);
} else {
return null;
}
});
frontend.modules.outliner.core.get_by_parent__AMPERSAND__left = (function frontend$modules$outliner$core$get_by_parent__AMPERSAND__left(parent_uuid,left_uuid){
var parent_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__102712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102712) : frontend.db.entity.call(null,G__102712));
})());
var left_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__102713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),left_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102713) : frontend.db.entity.call(null,G__102713));
})());
var G__102714 = frontend.db.model.get_by_parent__AMPERSAND__left(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),parent_id,left_id);
var G__102714__$1 = (((G__102714 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__102714));
var G__102714__$2 = (((G__102714__$1 == null))?null:(frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102714__$1) : frontend.db.pull.call(null,G__102714__$1)));
if((G__102714__$2 == null)){
return null;
} else {
return frontend.modules.outliner.core.block(G__102714__$2);
}
});
frontend.modules.outliner.core.block_with_timestamps = (function frontend$modules$outliner$core$block_with_timestamps(block){
var updated_at = frontend.util.time_ms();
var block__$1 = (function (){var G__102715 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
if((new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102715,new cljs.core.Keyword("block","created-at","block/created-at",1440015),updated_at);
} else {
return G__102715;
}
})();
return block__$1;
});
frontend.modules.outliner.core.remove_orphaned_page_refs_BANG_ = (function frontend$modules$outliner$core$remove_orphaned_page_refs_BANG_(db_id,txs_state,old_refs,new_refs){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_refs,new_refs)){
var new_refs__$1 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
var or__5043__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__102716 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102716) : frontend.db.entity.call(null,G__102716));
})());
} else {
return and__5041__auto__;
}
}
}),new_refs));
var old_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.contains_QMARK_(new_refs__$1,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e));
}),frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),old_refs)))));
var orphaned_pages = ((cljs.core.seq(old_pages))?frontend.db.model.get_orphaned_pages(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),old_pages,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
var refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page);
return (((cljs.core.count(refs) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([db_id]),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),refs)))));
})], null)):null);
if(cljs.core.seq(orphaned_pages)){
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null);
}),orphaned_pages);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (state){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(state,tx));
}));
} else {
return null;
}
} else {
return null;
}
});
(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_id$arity$1 = (function (this$){
var this$__$1 = this;
var or__5043__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
return block_id;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var db_id = temp__5804__auto__;
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.pull.call(null,db_id)));
if(cljs.core.truth_(uuid)){
return uuid;
} else {
var new_id = frontend.db.new_block_id();
var G__102719_102795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),db_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_id], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__102719_102795) : frontend.db.transact_BANG_.call(null,G__102719_102795));

return new_id;
}
} else {
return null;
}
}
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_parent_id$arity$1 = (function (this$){
var this$__$1 = this;
return frontend.modules.outliner.utils.__GT_block_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_set_parent_id$arity$2 = (function (this$,parent_id){
var this$__$1 = this;
frontend.modules.outliner.utils.check_block_id(parent_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(this$__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_id], null));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_left_id$arity$1 = (function (this$){
var this$__$1 = this;
return frontend.modules.outliner.utils.__GT_block_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","left","block/left",-443712566)], null)));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_set_left_id$arity$2 = (function (this$,left_id){
var this$__$1 = this;
frontend.modules.outliner.utils.check_block_id(left_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(this$__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),left_id], null));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_parent$arity$1 = (function (this$){
var this$__$1 = this;
var temp__5804__auto__ = frontend.modules.outliner.tree._get_parent_id(this$__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var parent_id = temp__5804__auto__;
return frontend.modules.outliner.core.get_block_by_id(parent_id);
} else {
return null;
}
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_left$arity$1 = (function (this$){
var this$__$1 = this;
var left_id = frontend.modules.outliner.tree._get_left_id(this$__$1);
return frontend.modules.outliner.core.get_block_by_id(left_id);
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_right$arity$1 = (function (this$){
var this$__$1 = this;
var left_id = frontend.modules.outliner.tree._get_id(this$__$1);
var parent_id = frontend.modules.outliner.tree._get_parent_id(this$__$1);
return frontend.modules.outliner.core.get_by_parent__AMPERSAND__left(parent_id,left_id);
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_down$arity$1 = (function (this$){
var this$__$1 = this;
var parent_id = frontend.modules.outliner.tree._get_id(this$__$1);
return frontend.modules.outliner.core.get_by_parent__AMPERSAND__left(parent_id,parent_id);
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_save$arity$2 = (function (this$,txs_state){
var this$__$1 = this;
if(frontend.modules.outliner.datascript.outliner_txs_state_QMARK_(txs_state)){
} else {
throw (new Error(["Assert failed: ","db should be satisfied outliner-tx-state?","\n","(ds/outliner-txs-state? txs-state)"].join('')));
}

var m = logseq.graph_parser.util.remove_nils(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1.data,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865),new cljs.core.Keyword("block.temp","bottom?","block.temp/bottom?",-752374337),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971)], 0)));
var m__$1 = ((frontend.state.enable_block_timestamps_QMARK_())?frontend.modules.outliner.core.block_with_timestamps(m):m);
var other_tx = new cljs.core.Keyword("db","other-tx","db/other-tx",337296620).cljs$core$IFn$_invoke$arity$1(m__$1);
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(this$__$1.data);
var block_entity = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(id) : frontend.db.entity.call(null,id));
if(cljs.core.seq(other_tx)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (txs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,other_tx));
}));
} else {
}

if(cljs.core.truth_(id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (txs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,attribute], null);
}),logseq.db.schema.retract_attributes)));
}));

var temp__5804__auto___102796 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_entity);
if(cljs.core.truth_(temp__5804__auto___102796)){
var e_102797 = temp__5804__auto___102796;
var m_SINGLEQUOTE__102798 = (function (){var G__102720 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e_102797),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),frontend.util.time_ms()], null);
if(cljs.core.not(new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(e_102797))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102720,new cljs.core.Keyword("block","created-at","block/created-at",1440015),frontend.util.time_ms());
} else {
return G__102720;
}
})();
var txs_102799 = (cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_entity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(m__$1);
}
})())?(function (){var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(m__$1);
var alias = cljs.core.set(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(properties));
var tags = cljs.core.set(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(properties));
var alias__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p) : frontend.util.page_name_sanity_lc.call(null,p))], null);
}),alias);
var tags__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p) : frontend.util.page_name_sanity_lc.call(null,p))], null);
}),tags);
var deleteable_page_attributes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","alias","block/alias",-2112644699),alias__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(m__$1)], null);
var page_retractions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__102717_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e_102797),p1__102717_SHARP_],null));
}),cljs.core.keys(deleteable_page_attributes));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(page_retractions,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_SINGLEQUOTE__102798,deleteable_page_attributes], 0)));
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_SINGLEQUOTE__102798], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.into,txs_102799);
} else {
}

var remove_self_page_102800 = (function (p1__102718_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_entity)));
}),p1__102718_SHARP_);
});
var old_refs_102801 = remove_self_page_102800(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block_entity));
var new_refs_102802 = remove_self_page_102800(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m__$1));
frontend.modules.outliner.core.remove_orphaned_page_refs_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_entity),txs_state,old_refs_102801,new_refs_102802);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword("db","other-tx","db/other-tx",337296620)));

return this$__$1;
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_del$arity$3 = (function (this$,txs_state,children_QMARK_){
var this$__$1 = this;
if(frontend.modules.outliner.datascript.outliner_txs_state_QMARK_(txs_state)){
} else {
throw (new Error(["Assert failed: ","db should be satisfied outliner-tx-state?","\n","(ds/outliner-txs-state? txs-state)"].join('')));
}

var block_id = frontend.modules.outliner.tree._get_id(this$__$1);
var ids = cljs.core.set((cljs.core.truth_(children_QMARK_)?(function (){var children = (function (){var G__102721 = frontend.state.get_current_repo();
var G__102722 = block_id;
return (frontend.db.get_block_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_children.cljs$core$IFn$_invoke$arity$2(G__102721,G__102722) : frontend.db.get_block_children.call(null,G__102721,G__102722));
})();
var children_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),children);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children_ids,block_id);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null)));
var txs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null)], null);
}),ids);
var txs__$1 = ((cljs.core.not(children_QMARK_))?(function (){var immediate_children = (function (){var G__102723 = frontend.state.get_current_repo();
var G__102724 = block_id;
return (frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2(G__102723,G__102724) : frontend.db.get_block_immediate_children.call(null,G__102723,G__102724));
})();
if(cljs.core.seq(immediate_children)){
var left_id = frontend.modules.outliner.tree._get_id(frontend.modules.outliner.tree._get_left(this$__$1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,child){
var parent = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),left_id], null);
var G__102725 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","parent","block/parent",-918309064),parent], null);
if((idx === (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102725,new cljs.core.Keyword("block","left","block/left",-443712566),parent);
} else {
return G__102725;
}
}),immediate_children));
} else {
return txs;
}
})():txs);
var page_tx = (function (){var block = (function (){var G__102726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102726) : frontend.db.entity.call(null,G__102726));
})();
if(cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","properties","block/properties",708347145)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null);
} else {
return null;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(txs_state,cljs.core.concat,txs__$1,page_tx);

return block_id;
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_children$arity$1 = (function (this$){
var this$__$1 = this;
var parent_id = frontend.modules.outliner.tree._get_id(this$__$1);
var children = frontend.db.model.get_block_immediate_children(frontend.state.get_current_repo(),parent_id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.core.block,children);
}));
frontend.modules.outliner.core.get_right_sibling = (function frontend$modules$outliner$core$get_right_sibling(db_id){
if(cljs.core.truth_(db_id)){
return frontend.db.model.get_right_sibling(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),db_id);
} else {
return null;
}
});
frontend.modules.outliner.core.assoc_level_aux = (function frontend$modules$outliner$core$assoc_level_aux(tree_vec,children_key,init_level){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,children_key);
var children_SINGLEQUOTE_ = (function (){var G__102727 = children;
var G__102728 = children_key;
var G__102729 = (init_level + (1));
return (frontend.modules.outliner.core.assoc_level_aux.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.outliner.core.assoc_level_aux.cljs$core$IFn$_invoke$arity$3(G__102727,G__102728,G__102729) : frontend.modules.outliner.core.assoc_level_aux.call(null,G__102727,G__102728,G__102729));
})();
var G__102730 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level","block/level",1182509971),init_level);
if(cljs.core.seq(children_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102730,children_key,children_SINGLEQUOTE_);
} else {
return G__102730;
}
}),tree_vec);
});
frontend.modules.outliner.core.assoc_level = (function frontend$modules$outliner$core$assoc_level(children_key,tree_vec){
return frontend.modules.outliner.core.assoc_level_aux(tree_vec,children_key,(1));
});
frontend.modules.outliner.core.assign_temp_id = (function frontend$modules$outliner$core$assign_temp_id(blocks,replace_empty_target_QMARK_,target_block){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,block){
var db_id = (cljs.core.truth_((function (){var and__5041__auto__ = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (idx === (0));
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block):((- idx) - (1)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("db","id","db/id",-1388397098),db_id);
}),blocks);
});
frontend.modules.outliner.core.find_outdented_block_prev_hop = (function frontend$modules$outliner$core$find_outdented_block_prev_hop(outdented_block,blocks){
var blocks__$1 = cljs.core.reverse(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__102731_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(outdented_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__102731_SHARP_));
}),blocks));
var blocks__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__102732_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(outdented_block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(p1__102732_SHARP_)));
}),blocks__$1);
if(cljs.core.seq(blocks__$2)){
var blocks__$3 = blocks__$2;
var matched = cljs.core.first(blocks__$3);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$3)),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(matched))){
var G__102803 = cljs.core.rest(blocks__$3);
var G__102804 = cljs.core.first(blocks__$3);
blocks__$3 = G__102803;
matched = G__102804;
continue;
} else {
return matched;
}
break;
}
} else {
return null;
}
});
frontend.modules.outliner.core.get_id = (function frontend$modules$outliner$core$get_id(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;

}
}
});
frontend.modules.outliner.core.compute_block_parent = (function frontend$modules$outliner$core$compute_block_parent(block,parent,target_block,prev_hop,top_level_QMARK_,sibling_QMARK_,get_new_id,outliner_op,replace_empty_target_QMARK_,idx){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"paste","paste",1975741548));
if(and__5041__auto__){
var and__5041__auto____$1 = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return ((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block))) && ((idx === (0))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.modules.outliner.core.get_id(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
if(cljs.core.truth_(prev_hop)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(prev_hop));
} else {
if(cljs.core.truth_(top_level_QMARK_)){
if(cljs.core.truth_(sibling_QMARK_)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
} else {
return (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(block,parent) : get_new_id.call(null,block,parent));

}
}
}
});
frontend.modules.outliner.core.compute_block_left = (function frontend$modules$outliner$core$compute_block_left(blocks,block,left,target_block,prev_hop,idx,replace_empty_target_QMARK_,left_exists_in_blocks_QMARK_,get_new_id){
if((idx === (0))){
if(cljs.core.truth_(replace_empty_target_QMARK_)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = prev_hop;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(left_exists_in_blocks_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(prev_hop));
} else {
var or__5043__auto__ = (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(block,left) : get_new_id.call(null,block,left));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__102733 = block;
var G__102734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(idx - (1)));
return (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(G__102733,G__102734) : get_new_id.call(null,G__102733,G__102734));
}

}
}
});
frontend.modules.outliner.core.get_left_nodes = (function frontend$modules$outliner$core$get_left_nodes(node,limit){
var parent = frontend.modules.outliner.tree._get_parent(node);
var node__$1 = node;
var limit__$1 = limit;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((limit__$1 === (0))){
return result;
} else {
var temp__5802__auto__ = frontend.modules.outliner.tree._get_left(node__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var left = temp__5802__auto__;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,parent)))){
var G__102805 = left;
var G__102806 = (limit__$1 - (1));
var G__102807 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,frontend.modules.outliner.tree._get_id(left));
node__$1 = G__102805;
limit__$1 = G__102806;
result = G__102807;
continue;
} else {
return result;
}
} else {
return result;
}
}
break;
}
});
frontend.modules.outliner.core.page_first_child_QMARK_ = (function frontend$modules$outliner$core$page_first_child_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.modules.outliner.core.page_block_QMARK_ = (function frontend$modules$outliner$core$page_block_QMARK_(block){
return (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block) == null)));
});
/**
 * Converts a `tree-vec` to blocks with `:block/level`.
 *   A `tree-vec` example:
 *   [{:id 1, :children [{:id 2,
 *                     :children [{:id 3}]}]}
 * {:id 4, :children [{:id 5}
 *                    {:id 6}]}]
 */
frontend.modules.outliner.core.tree_vec_flatten = (function frontend$modules$outliner$core$tree_vec_flatten(var_args){
var G__102738 = arguments.length;
switch (G__102738) {
case 1:
return frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1 = (function (tree_vec){
return frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2(tree_vec,new cljs.core.Keyword(null,"children","children",-940561982));
}));

(frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2 = (function (tree_vec,children_key){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102736_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__102736_SHARP_,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__102735_SHARP_){
return cljs.core.tree_seq(cljs.core.map_QMARK_,children_key,p1__102735_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.modules.outliner.core.assoc_level(children_key,tree_vec)], 0)));
}));

(frontend.modules.outliner.core.tree_vec_flatten.cljs$lang$maxFixedArity = 2);

/**
 * Save the `block`.
 */
frontend.modules.outliner.core.save_block = (function frontend$modules$outliner$core$save_block(block_SINGLEQUOTE_){
if(cljs.core.map_QMARK_(block_SINGLEQUOTE_)){
} else {
throw (new Error("Assert failed: (map? block')"));
}

var txs_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.modules.outliner.tree._save(frontend.modules.outliner.core.block(block_SINGLEQUOTE_),txs_state);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.deref(txs_state)], null);
});
/**
 * Calculate `:block/level` for all the `blocks`. Blocks should be sorted already.
 */
frontend.modules.outliner.core.blocks_with_level = (function frontend$modules$outliner$core$blocks_with_level(blocks){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

var blocks__$1 = ((cljs.core.sequential_QMARK_(blocks))?blocks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks], null));
var root = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(blocks__$1),new cljs.core.Keyword("block","level","block/level",1182509971),(1));
var m = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null);
var blocks__$2 = cljs.core.rest(blocks__$1);
while(true){
if(cljs.core.empty_QMARK_(blocks__$2)){
return m;
} else {
var block = cljs.core.first(blocks__$2);
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var parent_level = (cljs.core.truth_(parent)?new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (m,blocks__$2,block,parent,blocks__$1,root){
return (function (x){
return ((((cljs.core.map_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))))) || (((cljs.core.vector_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(x),cljs.core.second(parent))))));
});})(m,blocks__$2,block,parent,blocks__$1,root))
,m))):null);
var level = (cljs.core.truth_(parent_level)?(parent_level + (1)):(1));
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level","block/level",1182509971),level);
var m_SINGLEQUOTE_ = cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,block__$1));
var G__102809 = m_SINGLEQUOTE_;
var G__102810 = cljs.core.rest(blocks__$2);
m = G__102809;
blocks__$2 = G__102810;
continue;
}
break;
}
});
/**
 * Get only the top level blocks.
 */
frontend.modules.outliner.core.get_top_level_blocks = (function frontend$modules$outliner$core$get_top_level_blocks(blocks){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

var level_blocks = frontend.modules.outliner.core.blocks_with_level(blocks);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b));
}),level_blocks);
});
/**
 * Get `node`'s right siblings.
 */
frontend.modules.outliner.core.get_right_siblings = (function frontend$modules$outliner$core$get_right_siblings(node){
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(node)){
} else {
throw (new Error("Assert failed: (tree/satisfied-inode? node)"));
}

var temp__5804__auto__ = frontend.modules.outliner.tree._get_parent(node);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var children = frontend.modules.outliner.tree._get_children(parent);
return cljs.core.rest(cljs.core.last(cljs.core.split_with((function (p1__102739_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.tree._get_id(node),frontend.modules.outliner.tree._get_id(p1__102739_SHARP_));
}),children)));
} else {
return null;
}
});
frontend.modules.outliner.core.blocks_with_ordered_list_props = (function frontend$modules$outliner$core$blocks_with_ordered_list_props(blocks,target_block,sibling_QMARK_){
var target_block__$1 = (cljs.core.truth_(sibling_QMARK_)?target_block:(function (){var G__102741 = target_block;
var G__102741__$1 = (((G__102741 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__102741));
var G__102741__$2 = (((G__102741__$1 == null))?null:(frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102741__$1) : frontend.db.pull.call(null,G__102741__$1)));
var G__102741__$3 = (((G__102741__$2 == null))?null:frontend.modules.outliner.core.block(G__102741__$2));
var G__102741__$4 = (((G__102741__$3 == null))?null:frontend.modules.outliner.tree._get_down(G__102741__$3));
if((G__102741__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__102741__$4);
}
})());
var list_type_fn = (function frontend$modules$outliner$core$blocks_with_ordered_list_props_$_list_type_fn(b){
var G__102743 = b;
var G__102743__$1 = (((G__102743 == null))?null:new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(G__102743));
if((G__102743__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366).cljs$core$IFn$_invoke$arity$1(G__102743__$1);
}
});
var temp__5802__auto__ = (function (){var and__5041__auto__ = target_block__$1;
if(cljs.core.truth_(and__5041__auto__)){
return list_type_fn(target_block__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var list_type = temp__5802__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__102744){
var map__102745 = p__102744;
var map__102745__$1 = cljs.core.__destructure_map(map__102745);
var block = map__102745__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102745__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102745__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var G__102746 = block;
if((((!((new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block) == null)))) && ((list_type_fn(block) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__102746,new cljs.core.Keyword("block","properties","block/properties",708347145),(function (p1__102740_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__102740_SHARP_,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),list_type);
})),new cljs.core.Keyword("block","content","block/content",-161885195),frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,content,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),list_type));
} else {
return G__102746;
}
}),blocks);
} else {
return blocks;
}
});
/**
 * Blocks with :block/level
 */
frontend.modules.outliner.core.fix_top_level_blocks = (function frontend$modules$outliner$core$fix_top_level_blocks(blocks){
var top_level_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__102747_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(p1__102747_SHARP_),(1));
}),blocks);
var id__GT_block = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),top_level_blocks),top_level_blocks);
var uuid__GT_block = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),top_level_blocks),top_level_blocks);
if(cljs.core.every_QMARK_((function (block){
var left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block);
var id = ((cljs.core.map_QMARK_(left))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left):cljs.core.second(left));
return (!(((function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_block,id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_block,id);
}
})() == null)));
}),cljs.core.rest(top_level_blocks))){
return blocks;
} else {
var blocks__$1 = blocks;
var last_top_level_block = null;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.core.first(blocks__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var block = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block))){
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_level_block)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(last_top_level_block)], 0));
var G__102811 = cljs.core.rest(blocks__$1);
var G__102812 = block;
var G__102813 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block_SINGLEQUOTE_);
blocks__$1 = G__102811;
last_top_level_block = G__102812;
result = G__102813;
continue;
} else {
var G__102814 = cljs.core.rest(blocks__$1);
var G__102815 = last_top_level_block;
var G__102816 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block);
blocks__$1 = G__102814;
last_top_level_block = G__102815;
result = G__102816;
continue;
}
} else {
return result;
}
break;
}
}
});
frontend.modules.outliner.core.insert_blocks_aux = (function frontend$modules$outliner$core$insert_blocks_aux(blocks,target_block,p__102748){
var map__102749 = p__102748;
var map__102749__$1 = cljs.core.__destructure_map(map__102749);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102749__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102749__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102749__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var move_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102749__$1,new cljs.core.Keyword(null,"move?","move?",-1908971187));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102749__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
var uuids = cljs.core.zipmap(block_uuids,(cljs.core.truth_(keep_uuid_QMARK_)?block_uuids:cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid)));
var uuids__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(keep_uuid_QMARK_);
if(and__5041__auto__){
return replace_empty_target_QMARK_;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block)):uuids);
var id__GT_new_uuid = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], null);
} else {
return null;
}
}),blocks));
var target_page = (function (){var or__5043__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
})();
var get_new_id = (function (block,lookup){
if(((cljs.core.map_QMARK_(lookup)) || (((cljs.core.vector_QMARK_(lookup)) || (datascript.impl.entity.entity_QMARK_(lookup)))))){
var temp__5804__auto__ = ((((cljs.core.vector_QMARK_(lookup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lookup),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,cljs.core.last(lookup)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_new_uuid,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(lookup)));
if(cljs.core.truth_(temp__5804__auto__)){
var uuid = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
} else {
return null;
}
} else {
if(cljs.core.integer_QMARK_(lookup)){
return lookup;
} else {
throw (new Error(["[insert-blocks] illegal lookup: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lookup),", block: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block)].join('')));

}
}
});
var indent_outdent_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__102750){
var map__102751 = p__102750;
var map__102751__$1 = cljs.core.__destructure_map(map__102751);
var block = map__102751__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102751__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102751__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5804__auto__)){
var uuid = temp__5804__auto__;
var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block),(1));
var outdented_block_QMARK_ = ((indent_outdent_QMARK_) && (((top_level_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block))))));
var prev_hop = ((outdented_block_QMARK_)?frontend.modules.outliner.core.find_outdented_block_prev_hop(block,blocks):null);
var left_exists_in_blocks_QMARK_ = cljs.core.contains_QMARK_(ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block)));
var parent__$1 = frontend.modules.outliner.core.compute_block_parent(block,parent,target_block,prev_hop,top_level_QMARK_,sibling_QMARK_,get_new_id,outliner_op,replace_empty_target_QMARK_,idx);
var left__$1 = frontend.modules.outliner.core.compute_block_left(blocks,block,left,target_block,prev_hop,idx,replace_empty_target_QMARK_,left_exists_in_blocks_QMARK_,get_new_id);
var G__102752 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","page","block/page",822314108),target_page,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent__$1,new cljs.core.Keyword("block","left","block/left",-443712566),left__$1], null)], 0));
if(cljs.core.not(move_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__102752,new cljs.core.Keyword("db","id","db/id",-1388397098));
} else {
return G__102752;
}
} else {
return null;
}
}),blocks);
});
frontend.modules.outliner.core.get_target_block = (function frontend$modules$outliner$core$get_target_block(target_block){
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block))){
var G__102753 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102753) : frontend.db.pull.call(null,G__102753));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block))){
var G__102754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102754) : frontend.db.pull.call(null,G__102754));
} else {
return null;
}
}
});
/**
 * Insert blocks as children (or siblings) of target-node.
 *   Args:
 *  `blocks`: blocks should be sorted already.
 *  `target-block`: where `blocks` will be inserted.
 *  Options:
 *    `sibling?`: as siblings (true) or children (false).
 *    `keep-uuid?`: whether to replace `:block/uuid` from the parameter `blocks`.
 *                  For example, if `blocks` are from internal copy, the uuids
 *                  need to be changed, but there's no need for internal cut or drag & drop.
 *    `outliner-op`: what's the current outliner operation.
 *    `replace-empty-target?`: If the `target-block` is an empty block, whether
 *                             to replace it, it defaults to be `false`.
 *  ``
 */
frontend.modules.outliner.core.insert_blocks = (function frontend$modules$outliner$core$insert_blocks(blocks,target_block,p__102756){
var map__102757 = p__102756;
var map__102757__$1 = cljs.core.__destructure_map(map__102757);
var opts = map__102757__$1;
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102757__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102757__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102757__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102757__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var ordered_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102757__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.modules.outliner.core","block-map-or-entity","frontend.modules.outliner.core/block-map-or-entity",1526834445),target_block)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.modules.outliner.core/block-map-or-entity target-block)"));
}

var target_block_SINGLEQUOTE_ = frontend.modules.outliner.core.get_target_block(target_block);
var _ = (((!((target_block_SINGLEQUOTE_ == null))))?null:(function(){throw (new Error(["Assert failed: ",["Invalid target: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_block)].join(''),"\n","(some? target-block')"].join('')))})());
var sibling_QMARK___$1 = ((frontend.modules.outliner.core.page_block_QMARK_(target_block_SINGLEQUOTE_))?false:sibling_QMARK_);
var move_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),null,new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),null], null), null),outliner_op);
var keep_uuid_QMARK___$1 = ((move_QMARK_)?true:keep_uuid_QMARK_);
var replace_empty_target_QMARK___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = (!((replace_empty_target_QMARK_ == null)));
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto____$1)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?replace_empty_target_QMARK_:(function (){var and__5041__auto__ = sibling_QMARK___$1;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto____$1)){
return ((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_))) && ((((cljs.core.count(blocks) > (1))) && ((!(move_QMARK_))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})());
var blocks_SINGLEQUOTE_ = frontend.modules.outliner.core.blocks_with_level(blocks);
var blocks_SINGLEQUOTE___$1 = ((ordered_list_QMARK_ === false)?blocks_SINGLEQUOTE_:frontend.modules.outliner.core.blocks_with_ordered_list_props(blocks_SINGLEQUOTE_,target_block,sibling_QMARK___$1));
var blocks_SINGLEQUOTE___$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"paste","paste",1975741548)))?frontend.modules.outliner.core.fix_top_level_blocks(blocks_SINGLEQUOTE___$1):blocks_SINGLEQUOTE___$1);
var insert_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK___$1,new cljs.core.Keyword(null,"move?","move?",-1908971187),move_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op], null);
var tx = frontend.modules.outliner.core.insert_blocks_aux(blocks_SINGLEQUOTE___$2,target_block_SINGLEQUOTE_,insert_opts);
if(cljs.core.truth_(cljs.core.some((function (b){
return (((new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b) == null)) || ((new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(b) == null)));
}),tx))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"Outliner invalid structure",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("outliner","invalid-structure","outliner/invalid-structure",-1028533349),new cljs.core.Keyword(null,"opt","opt",-794706369),opts,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__102755_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__102755_SHARP_,new cljs.core.Keyword("block","content","block/content",-161885195));
}),tx)], null)], null)], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid outliner data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),insert_opts,new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.vec(tx),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.vec(blocks),new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block_SINGLEQUOTE_], null));
} else {
var uuids_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uuid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),tx)));
var tx__$1 = ((move_QMARK_)?tx:frontend.modules.outliner.core.assign_temp_id(tx,replace_empty_target_QMARK___$1,target_block_SINGLEQUOTE_));
var target_node = frontend.modules.outliner.core.block(target_block_SINGLEQUOTE_);
var next = (cljs.core.truth_(sibling_QMARK___$1)?frontend.modules.outliner.tree._get_right(target_node):frontend.modules.outliner.tree._get_down(target_node));
var next_tx = (cljs.core.truth_((function (){var and__5041__auto__ = next;
if(cljs.core.truth_(and__5041__auto__)){
if(move_QMARK_){
return (!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(next)))));
} else {
return true;
}
} else {
return and__5041__auto__;
}
})())?(function (){var temp__5804__auto__ = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b));
}),tx__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var left = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.tree._get_id(next),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left)], null)], null);
} else {
return null;
}
})():null);
var full_tx = frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var and__5041__auto__ = keep_uuid_QMARK___$1;
if(cljs.core.truth_(and__5041__auto__)){
return replace_empty_target_QMARK___$1;
} else {
return and__5041__auto__;
}
})())?cljs.core.rest(uuids_tx):uuids_tx),tx__$1,next_tx], 0));
if(cljs.core.truth_((function (){var and__5041__auto__ = replace_empty_target_QMARK___$1;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.editing_QMARK_();
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),full_tx,new cljs.core.Keyword(null,"blocks","blocks",-610462153),tx__$1], null);
}
});
frontend.modules.outliner.core.build_move_blocks_next_tx = (function frontend$modules$outliner$core$build_move_blocks_next_tx(blocks,non_consecutive_blocks_QMARK_){
var id__GT_blocks = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks);
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var top_level_blocks_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),top_level_blocks));
var right_block = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(top_level_blocks)));
if(cljs.core.truth_((function (){var and__5041__auto__ = right_block;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (!(cljs.core.contains_QMARK_(top_level_blocks_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right_block))));
if(and__5041__auto____$1){
var or__5043__auto__ = (function (){var and__5041__auto____$2 = non_consecutive_blocks_QMARK_;
if(cljs.core.truth_(and__5041__auto____$2)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(top_level_blocks)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(right_block)));
} else {
return and__5041__auto____$2;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return true;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right_block),new cljs.core.Keyword("block","left","block/left",-443712566),(function (){var block = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(right_block);
while(true){
if(cljs.core.contains_QMARK_(top_level_blocks_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
var G__102817 = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)));
block = G__102817;
continue;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
}
break;
}
})()], null);
} else {
return null;
}
});
frontend.modules.outliner.core.find_new_left = (function frontend$modules$outliner$core$find_new_left(block,moved_ids,target_block,current_block,sibling_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(current_block)))){
if(cljs.core.truth_(sibling_QMARK_)){
var G__102758 = cljs.core.last(moved_ids);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102758) : frontend.db.entity.call(null,G__102758));
} else {
return target_block;
}
} else {
var left = (function (){var G__102759 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102759) : frontend.db.entity.call(null,G__102759));
})();
if(cljs.core.contains_QMARK_(cljs.core.set(moved_ids),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left))){
return (frontend.modules.outliner.core.find_new_left.cljs$core$IFn$_invoke$arity$5 ? frontend.modules.outliner.core.find_new_left.cljs$core$IFn$_invoke$arity$5(left,moved_ids,target_block,current_block,sibling_QMARK_) : frontend.modules.outliner.core.find_new_left.call(null,left,moved_ids,target_block,current_block,sibling_QMARK_));
} else {
return left;
}
}
});
frontend.modules.outliner.core.fix_non_consecutive_blocks = (function frontend$modules$outliner$core$fix_non_consecutive_blocks(blocks,target_block,sibling_QMARK_){
if((cljs.core.count(blocks) > (1))){
var page_blocks = cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),blocks);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__102760){
var vec__102761 = p__102760;
var _page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102761,(0),null);
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102761,(1),null);
var blocks__$2 = frontend.db.model.sort_page_random_blocks(blocks__$1);
var non_consecutive_blocks = frontend.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_non_consecutive_blocks(blocks__$2),cljs.core.last(blocks__$2)));
if(cljs.core.seq(non_consecutive_blocks)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5804__auto__ = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5804__auto__)){
var right = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.modules.outliner.core.find_new_left(right,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$2)),target_block,block,sibling_QMARK_);
if(cljs.core.truth_(temp__5804__auto____$1)){
var new_left = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new_left)], null);
} else {
return null;
}
} else {
return null;
}
}),non_consecutive_blocks);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_blocks], 0)));
} else {
return null;
}
});
/**
 * Delete block from the tree.
 */
frontend.modules.outliner.core.delete_block = (function frontend$modules$outliner$core$delete_block(txs_state,node,children_QMARK_){
var right_node = frontend.modules.outliner.tree._get_right(node);
frontend.modules.outliner.tree._del(node,txs_state,children_QMARK_);

if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(right_node)){
var left_node_102818 = frontend.modules.outliner.tree._get_left(node);
var new_right_node_102819 = frontend.modules.outliner.tree._set_left_id(right_node,frontend.modules.outliner.tree._get_id(left_node_102818));
frontend.modules.outliner.tree._save(new_right_node_102819,txs_state);
} else {
}

return cljs.core.deref(txs_state);
});
/**
 * Delete blocks from the tree.
 * Args:
 *  `children?`: whether to replace `blocks'` children too. 
 */
frontend.modules.outliner.core.delete_blocks = (function frontend$modules$outliner$core$delete_blocks(blocks,p__102764){
var map__102765 = p__102764;
var map__102765__$1 = cljs.core.__destructure_map(map__102765);
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102765__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108),true);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(blocks)], null)], null);

var txs_state = frontend.modules.outliner.datascript.new_outliner_txs_state();
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)], null);
}),blocks);
var start_block = cljs.core.first(blocks);
var end_block = cljs.core.last(frontend.modules.outliner.core.get_top_level_blocks(blocks));
var start_node = frontend.modules.outliner.core.block(start_block);
var end_node = frontend.modules.outliner.core.block(end_block);
var end_node_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var G__102766 = frontend.state.get_current_repo();
var G__102767 = frontend.modules.outliner.tree._get_id(end_node);
var G__102768 = (1000);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__102766,G__102767,G__102768) : frontend.db.get_block_parents.call(null,G__102766,G__102767,G__102768));
})()));
var self_block_QMARK_ = cljs.core.contains_QMARK_(end_node_parents,frontend.modules.outliner.tree._get_id(start_node));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(blocks))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_node,end_node)) || (self_block_QMARK_))))){
frontend.modules.outliner.core.delete_block(txs_state,start_node,children_QMARK_);
} else {
var sibling_QMARK__102820 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.tree._get_parent_id(start_node),frontend.modules.outliner.tree._get_parent_id(end_node));
var right_node_102821 = frontend.modules.outliner.tree._get_right(end_node);
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(right_node_102821)){
var left_node_id_102822 = ((sibling_QMARK__102820)?frontend.modules.outliner.tree._get_id(frontend.modules.outliner.tree._get_left(start_node)):(function (){var end_node_left_nodes = frontend.modules.outliner.core.get_left_nodes(end_node,cljs.core.count(block_ids));
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var G__102769 = frontend.state.get_current_repo();
var G__102770 = frontend.modules.outliner.tree._get_id(start_node);
var G__102771 = (1000);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__102769,G__102770,G__102771) : frontend.db.get_block_parents.call(null,G__102769,G__102770,G__102771));
})()));
var result = cljs.core.first(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(end_node_left_nodes),parents));
if(cljs.core.truth_(result)){
} else {
var G__102772_102823 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parents","parents",-2027538891),parents,new cljs.core.Keyword(null,"end-node-left-nodes","end-node-left-nodes",-1488251110),end_node_left_nodes], null);
(frontend.util.pprint.cljs$core$IFn$_invoke$arity$1 ? frontend.util.pprint.cljs$core$IFn$_invoke$arity$1(G__102772_102823) : frontend.util.pprint.call(null,G__102772_102823));
}

return result;
})());
if(cljs.core.truth_(left_node_id_102822)){
} else {
throw (new Error(["Assert failed: ","Can't find the left-node-id","\n","left-node-id"].join('')));
}

var new_right_node_102824 = frontend.modules.outliner.tree._set_left_id(right_node_102821,left_node_id_102822);
frontend.modules.outliner.tree._save(new_right_node_102824,txs_state);
} else {
}

var seq__102773_102825 = cljs.core.seq(block_ids);
var chunk__102774_102826 = null;
var count__102775_102827 = (0);
var i__102776_102828 = (0);
while(true){
if((i__102776_102828 < count__102775_102827)){
var id_102829 = chunk__102774_102826.cljs$core$IIndexed$_nth$arity$2(null,i__102776_102828);
var node_102830 = frontend.modules.outliner.core.block((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(id_102829) : frontend.db.pull.call(null,id_102829)));
frontend.modules.outliner.tree._del(node_102830,txs_state,true);


var G__102831 = seq__102773_102825;
var G__102832 = chunk__102774_102826;
var G__102833 = count__102775_102827;
var G__102834 = (i__102776_102828 + (1));
seq__102773_102825 = G__102831;
chunk__102774_102826 = G__102832;
count__102775_102827 = G__102833;
i__102776_102828 = G__102834;
continue;
} else {
var temp__5804__auto___102835 = cljs.core.seq(seq__102773_102825);
if(temp__5804__auto___102835){
var seq__102773_102836__$1 = temp__5804__auto___102835;
if(cljs.core.chunked_seq_QMARK_(seq__102773_102836__$1)){
var c__5565__auto___102837 = cljs.core.chunk_first(seq__102773_102836__$1);
var G__102838 = cljs.core.chunk_rest(seq__102773_102836__$1);
var G__102839 = c__5565__auto___102837;
var G__102840 = cljs.core.count(c__5565__auto___102837);
var G__102841 = (0);
seq__102773_102825 = G__102838;
chunk__102774_102826 = G__102839;
count__102775_102827 = G__102840;
i__102776_102828 = G__102841;
continue;
} else {
var id_102842 = cljs.core.first(seq__102773_102836__$1);
var node_102843 = frontend.modules.outliner.core.block((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(id_102842) : frontend.db.pull.call(null,id_102842)));
frontend.modules.outliner.tree._del(node_102843,txs_state,true);


var G__102844 = cljs.core.next(seq__102773_102836__$1);
var G__102845 = null;
var G__102846 = (0);
var G__102847 = (0);
seq__102773_102825 = G__102844;
chunk__102774_102826 = G__102845;
count__102775_102827 = G__102846;
i__102776_102828 = G__102847;
continue;
}
} else {
}
}
break;
}

var fix_non_consecutive_tx_102848 = frontend.modules.outliner.core.fix_non_consecutive_blocks(blocks,null,false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.concat,fix_non_consecutive_tx_102848);
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.deref(txs_state)], null);
});
frontend.modules.outliner.core.move_to_original_position_QMARK_ = (function frontend$modules$outliner$core$move_to_original_position_QMARK_(blocks,target_block,sibling_QMARK_,non_consecutive_blocks_QMARK_){
return ((cljs.core.not(non_consecutive_blocks_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block)),sibling_QMARK_)))));
});
/**
 * Move `blocks` to `target-block` as siblings or children.
 */
frontend.modules.outliner.core.move_blocks = (function frontend$modules$outliner$core$move_blocks(blocks,target_block,p__102778){
var map__102779 = p__102778;
var map__102779__$1 = cljs.core.__destructure_map(map__102779);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102779__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102779__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(blocks),cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.modules.outliner.core","block-map-or-entity","frontend.modules.outliner.core/block-map-or-entity",1526834445),target_block)], null)], null);

var target_block__$1 = frontend.modules.outliner.core.get_target_block(target_block);
var _ = (((!((target_block__$1 == null))))?null:(function(){throw (new Error(["Assert failed: ",["Invalid target: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_block__$1)].join(''),"\n","(some? target-block)"].join('')))})());
var non_consecutive_blocks_QMARK_ = cljs.core.seq(frontend.db.model.get_non_consecutive_blocks(blocks));
var original_position_QMARK_ = frontend.modules.outliner.core.move_to_original_position_QMARK_(blocks,target_block__$1,sibling_QMARK_,non_consecutive_blocks_QMARK_);
if((((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1))))) && ((!(original_position_QMARK_))))){
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var G__102780 = frontend.state.get_current_repo();
var G__102781 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$2(G__102780,G__102781) : frontend.db.get_block_parents.call(null,G__102780,G__102781));
})()));
var move_parents_to_child_QMARK_ = cljs.core.some(parents,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
if(cljs.core.truth_(move_parents_to_child_QMARK_)){
return null;
} else {
var blocks__$1 = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var first_block = cljs.core.first(blocks__$1);
var map__102782 = frontend.modules.outliner.core.insert_blocks(blocks__$1,target_block__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),(function (){var or__5043__auto__ = outliner_op;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999);
}
})()], null));
var map__102782__$1 = cljs.core.__destructure_map(map__102782);
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102782__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
if(cljs.core.seq(tx_data)){
var first_block_page = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(first_block));
var target_page = (function (){var or__5043__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block__$1));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
}
})();
var not_same_page_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(first_block_page,target_page);
var move_blocks_next_tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.outliner.core.build_move_blocks_next_tx(blocks__$1,non_consecutive_blocks_QMARK_)], null);
var children_page_tx = ((not_same_page_QMARK_)?(function (){var children_ids = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__102777_SHARP_){
var G__102783 = frontend.state.get_current_repo();
var G__102784 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__102777_SHARP_);
return (frontend.db.get_block_children_ids.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_children_ids.cljs$core$IFn$_invoke$arity$2(G__102783,G__102784) : frontend.db.get_block_children_ids.call(null,G__102783,G__102784));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks__$1], 0));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id,new cljs.core.Keyword("block","page","block/page",822314108),target_page], null);
}),children_ids);
})():null);
var fix_non_consecutive_tx = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),move_blocks_next_tx)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),frontend.modules.outliner.core.fix_non_consecutive_blocks(blocks__$1,target_block__$1,sibling_QMARK_));
var full_tx = frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_data,move_blocks_next_tx,children_page_tx,fix_non_consecutive_tx], 0));
var tx_meta = (function (){var G__102785 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1),new cljs.core.Keyword(null,"move-op","move-op",1323817617),outliner_op,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1)], null);
if(not_same_page_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__102785,new cljs.core.Keyword(null,"from-page","from-page",75165656),first_block_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-page","target-page",-920102649),target_page], 0));
} else {
return G__102785;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),full_tx,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Move blocks up/down.
 */
frontend.modules.outliner.core.move_blocks_up_down = (function frontend$modules$outliner$core$move_blocks_up_down(blocks,up_QMARK_){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.boolean_QMARK_(up_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? up?)"));
}

var first_block = (function (){var G__102786 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102786) : frontend.db.entity.call(null,G__102786));
})();
var first_block_parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block);
var left_left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(first_block));
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var last_top_block = cljs.core.last(top_level_blocks);
var last_top_block_parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(last_top_block);
var right = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block));
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060)], null);
if(cljs.core.truth_((function (){var and__5041__auto__ = up_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return left_left;
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(left_left),first_block_parent)){
return frontend.modules.outliner.core.move_blocks(blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(first_block_parent))){
return frontend.modules.outliner.core.move_blocks(blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(first_block),first_block_parent)){
var target_children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(left_left);
if(cljs.core.seq(target_children)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(left_left),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block_parent))){
var target_block = cljs.core.last(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(target_children,left_left));
return frontend.modules.outliner.core.move_blocks(blocks,target_block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
return null;
}
} else {
return frontend.modules.outliner.core.move_blocks(blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
} else {
return null;

}
}
}
} else {
if(cljs.core.not(up_QMARK_)){
if(cljs.core.truth_(right)){
return frontend.modules.outliner.core.move_blocks(blocks,right,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
if(cljs.core.truth_(last_top_block_parent)){
var temp__5804__auto__ = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block_parent));
if(cljs.core.truth_(temp__5804__auto__)){
var parent_right = temp__5804__auto__;
return frontend.modules.outliner.core.move_blocks(blocks,parent_right,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;

}
}
});
/**
 * Indent or outdent `blocks`.
 */
frontend.modules.outliner.core.indent_outdent_blocks = (function frontend$modules$outliner$core$indent_outdent_blocks(blocks,indent_QMARK_){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.boolean_QMARK_(indent_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? indent?)"));
}

var non_consecutive_blocks = frontend.db.model.get_non_consecutive_blocks(blocks);
if(cljs.core.empty_QMARK_(non_consecutive_blocks)){
var first_block = (function (){var G__102787 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102787) : frontend.db.entity.call(null,G__102787));
})();
var left = (function (){var G__102788 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(first_block));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102788) : frontend.db.entity.call(null,G__102788));
})();
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block);
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null));
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var concat_tx_fn = (function() { 
var G__102849__delegate = function (results){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.util.concat_without_nil,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),results)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(cljs.core.first(results))], null);
};
var G__102849 = function (var_args){
var results = null;
if (arguments.length > 0) {
var G__102850__i = 0, G__102850__a = new Array(arguments.length -  0);
while (G__102850__i < G__102850__a.length) {G__102850__a[G__102850__i] = arguments[G__102850__i + 0]; ++G__102850__i;}
  results = new cljs.core.IndexedSeq(G__102850__a,0,null);
} 
return G__102849__delegate.call(this,results);};
G__102849.cljs$lang$maxFixedArity = 0;
G__102849.cljs$lang$applyTo = (function (arglist__102851){
var results = cljs.core.seq(arglist__102851);
return G__102849__delegate(results);
});
G__102849.cljs$core$IFn$_invoke$arity$variadic = G__102849__delegate;
return G__102849;
})()
;
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713)], null);
if(cljs.core.truth_(indent_QMARK_)){
if(cljs.core.truth_((function (){var and__5041__auto__ = left;
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.modules.outliner.core.page_first_child_QMARK_(first_block)));
} else {
return and__5041__auto__;
}
})())){
var last_direct_child_id = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),false);
var blocks_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
}),top_level_blocks);
if(cljs.core.seq(blocks_SINGLEQUOTE_)){
if(cljs.core.truth_(last_direct_child_id)){
var last_direct_child = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(last_direct_child_id) : frontend.db.entity.call(null,last_direct_child_id));
var result = frontend.modules.outliner.core.move_blocks(blocks_SINGLEQUOTE_,last_direct_child,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
var collapsed_tx = (cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(left))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),false], null)], null)], null):null);
return concat_tx_fn(result,collapsed_tx);
} else {
return frontend.modules.outliner.core.move_blocks(blocks_SINGLEQUOTE_,left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.modules.outliner.core.page_block_QMARK_((function (){var G__102789 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102789) : frontend.db.entity.call(null,G__102789));
})())));
} else {
return and__5041__auto__;
}
})())){
var blocks_SINGLEQUOTE_ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)));
}),top_level_blocks);
var result = frontend.modules.outliner.core.move_blocks(blocks_SINGLEQUOTE_,parent,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
if(cljs.core.truth_(frontend.state.logical_outdenting_QMARK_())){
return result;
} else {
var last_top_block = (function (){var G__102790 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(blocks_SINGLEQUOTE_));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102790) : frontend.db.pull.call(null,G__102790));
})();
var right_siblings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),frontend.modules.outliner.core.get_right_siblings(frontend.modules.outliner.core.block(last_top_block)));
if(cljs.core.seq(right_siblings)){
var result2 = (function (){var temp__5802__auto__ = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block),false);
if(cljs.core.truth_(temp__5802__auto__)){
var last_direct_child_id = temp__5802__auto__;
return frontend.modules.outliner.core.move_blocks(right_siblings,(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(last_direct_child_id) : frontend.db.entity.call(null,last_direct_child_id)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
return frontend.modules.outliner.core.move_blocks(right_siblings,last_top_block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
})();
return concat_tx_fn(result,result2);
} else {
return result;
}
}
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Stores transaction-data that are generated by one or more write-operations,
 *   see also `frontend.modules.outliner.transaction/transact!`
 */
frontend.modules.outliner.core._STAR_transaction_data_STAR_ = null;
/**
 * Stores transaction opts that are generated by one or more write-operations,
 *   see also `frontend.modules.outliner.transaction/transact!`
 */
frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = null;
frontend.modules.outliner.core.op_transact_BANG_ = (function frontend$modules$outliner$core$op_transact_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___102852 = arguments.length;
var i__5767__auto___102853 = (0);
while(true){
if((i__5767__auto___102853 < len__5766__auto___102852)){
args__5772__auto__.push((arguments[i__5767__auto___102853]));

var G__102854 = (i__5767__auto___102853 + (1));
i__5767__auto___102853 = G__102854;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fn_var,args){
if(cljs.core.var_QMARK_(fn_var)){
} else {
throw (new Error("Assert failed: (var? fn-var)"));
}

if((frontend.modules.outliner.core._STAR_transaction_data_STAR_ == null)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fn_var)))," is not used in (transact! ...)"].join('')));
} else {
}

var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fn_var),args);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.core._STAR_transaction_data_STAR_,cljs.core.select_keys(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null)));

return result;
}));

(frontend.modules.outliner.core.op_transact_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.modules.outliner.core.op_transact_BANG_.cljs$lang$applyTo = (function (seq102791){
var G__102792 = cljs.core.first(seq102791);
var seq102791__$1 = cljs.core.next(seq102791);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102792,seq102791__$1);
}));

frontend.modules.outliner.core.save_block_BANG_ = (function frontend$modules$outliner$core$save_block_BANG_(block){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.save_block;},new cljs.core.Symbol("frontend.modules.outliner.core","save-block","frontend.modules.outliner.core/save-block",543903485,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"save-block","save-block",-2062903209,null),"frontend/modules/outliner/core.cljs",17,1,366,366,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block'","block'",-955399040,null)], null)),"Save the `block`.",(cljs.core.truth_(frontend.modules.outliner.core.save_block)?frontend.modules.outliner.core.save_block.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0));
});
frontend.modules.outliner.core.insert_blocks_BANG_ = (function frontend$modules$outliner$core$insert_blocks_BANG_(blocks,target_block,opts){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.insert_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","insert-blocks","frontend.modules.outliner.core/insert-blocks",-243340656,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"insert-blocks","insert-blocks",370749514,null),"frontend/modules/outliner/core.cljs",20,1,520,520,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"target-block","target-block",1988923544,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sibling?","sibling?",554402467,null),new cljs.core.Symbol(null,"keep-uuid?","keep-uuid?",-2125963741,null),new cljs.core.Symbol(null,"outliner-op","outliner-op",-938203319,null),new cljs.core.Symbol(null,"replace-empty-target?","replace-empty-target?",716799087,null),new cljs.core.Symbol(null,"ordered-list?","ordered-list?",-76543555,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),"Insert blocks as children (or siblings) of target-node.\n  Args:\n    `blocks`: blocks should be sorted already.\n    `target-block`: where `blocks` will be inserted.\n    Options:\n      `sibling?`: as siblings (true) or children (false).\n      `keep-uuid?`: whether to replace `:block/uuid` from the parameter `blocks`.\n                    For example, if `blocks` are from internal copy, the uuids\n                    need to be changed, but there's no need for internal cut or drag & drop.\n      `outliner-op`: what's the current outliner operation.\n      `replace-empty-target?`: If the `target-block` is an empty block, whether\n                               to replace it, it defaults to be `false`.\n    ``",(cljs.core.truth_(frontend.modules.outliner.core.insert_blocks)?frontend.modules.outliner.core.insert_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,target_block,opts], 0));
});
frontend.modules.outliner.core.delete_blocks_BANG_ = (function frontend$modules$outliner$core$delete_blocks_BANG_(blocks,opts){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.delete_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","delete-blocks","frontend.modules.outliner.core/delete-blocks",1564878705,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"delete-blocks","delete-blocks",-228100069,null),"frontend/modules/outliner/core.cljs",20,1,654,654,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children?","children?",440937419,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"children?","children?",440937419,null),true], null)], null)], null)),"Delete blocks from the tree.\n   Args:\n    `children?`: whether to replace `blocks'` children too. ",(cljs.core.truth_(frontend.modules.outliner.core.delete_blocks)?frontend.modules.outliner.core.delete_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,opts], 0));
});
frontend.modules.outliner.core.move_blocks_BANG_ = (function frontend$modules$outliner$core$move_blocks_BANG_(blocks,target_block,sibling_QMARK_){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.move_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","move-blocks","frontend.modules.outliner.core/move-blocks",1978756318,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"move-blocks","move-blocks",684828528,null),"frontend/modules/outliner/core.cljs",18,1,717,717,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"target-block","target-block",1988923544,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sibling?","sibling?",554402467,null),new cljs.core.Symbol(null,"outliner-op","outliner-op",-938203319,null)], null)], null)], null)),"Move `blocks` to `target-block` as siblings or children.",(cljs.core.truth_(frontend.modules.outliner.core.move_blocks)?frontend.modules.outliner.core.move_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,target_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null)], 0));
});
frontend.modules.outliner.core.move_blocks_up_down_BANG_ = (function frontend$modules$outliner$core$move_blocks_up_down_BANG_(blocks,up_QMARK_){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.move_blocks_up_down;},new cljs.core.Symbol("frontend.modules.outliner.core","move-blocks-up-down","frontend.modules.outliner.core/move-blocks-up-down",337120721,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"move-blocks-up-down","move-blocks-up-down",-1284024709,null),"frontend/modules/outliner/core.cljs",26,1,760,760,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"up?","up?",1718386499,null)], null)),"Move blocks up/down.",(cljs.core.truth_(frontend.modules.outliner.core.move_blocks_up_down)?frontend.modules.outliner.core.move_blocks_up_down.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,up_QMARK_], 0));
});
frontend.modules.outliner.core.indent_outdent_blocks_BANG_ = (function frontend$modules$outliner$core$indent_outdent_blocks_BANG_(blocks,indent_QMARK_){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.indent_outdent_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","indent-outdent-blocks","frontend.modules.outliner.core/indent-outdent-blocks",78901460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"indent-outdent-blocks","indent-outdent-blocks",1536178814,null),"frontend/modules/outliner/core.cljs",28,1,802,802,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"indent?","indent?",-1273006390,null)], null)),"Indent or outdent `blocks`.",(cljs.core.truth_(frontend.modules.outliner.core.indent_outdent_blocks)?frontend.modules.outliner.core.indent_outdent_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,indent_QMARK_], 0));
});

//# sourceMappingURL=frontend.modules.outliner.core.js.map
