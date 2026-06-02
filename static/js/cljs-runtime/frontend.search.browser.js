goog.provide('frontend.search.browser');
goog.scope(function(){
  frontend.search.browser.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.search.browser.search_blocks = (function frontend$search$browser$search_blocks(repo,q,p__101774){
var map__101775 = p__101774;
var map__101775__$1 = cljs.core.__destructure_map(map__101775);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__101775__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101775__$1,new cljs.core.Keyword(null,"page","page",849072397));
var indice = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
}
})();
var result = (cljs.core.truth_(page)?indice.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$and","$and",-1445249338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["page",page], null),new cljs.core.PersistentArrayMap(null, 1, ["content",q], null)], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))):indice.search(q,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
var result__$1 = cljs_bean.core.__GT_clj(result);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__101776){
var map__101777 = p__101776;
var map__101777__$1 = cljs.core.__destructure_map(map__101777);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101777__$1,new cljs.core.Keyword(null,"item","item",249373802));
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101777__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var map__101778 = item;
var map__101778__$1 = cljs.core.__destructure_map(map__101778);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101778__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101778__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101778__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),content,new cljs.core.Keyword("block","page","block/page",822314108),page__$1,new cljs.core.Keyword("search","matches","search/matches",2079263862),matches], null);
}),result__$1));
});

/**
* @constructor
 * @implements {frontend.search.protocol.Engine}
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
frontend.search.browser.Browser = (function (repo,__meta,__extmap,__hash){
this.repo = repo;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k101780,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__101784 = k101780;
var G__101784__$1 = (((G__101784 instanceof cljs.core.Keyword))?G__101784.fqn:null);
switch (G__101784__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k101780,else__5343__auto__);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__101785){
var vec__101786 = p__101785;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101786,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101786,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.search.browser.Browser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.search.browser.Browser{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__101779){
var self__ = this;
var G__101779__$1 = this;
return (new cljs.core.RecordIter((0),G__101779__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1998111184 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this101781,other101782){
var self__ = this;
var this101781__$1 = this;
return (((!((other101782 == null)))) && ((((this101781__$1.constructor === other101782.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this101781__$1.repo,other101782.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this101781__$1.__extmap,other101782.__extmap)))))));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k101780){
var self__ = this;
var this__5347__auto____$1 = this;
var G__101789 = k101780;
var G__101789__$1 = (((G__101789 instanceof cljs.core.Keyword))?G__101789.fqn:null);
switch (G__101789__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k101780);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__101779){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__101790 = cljs.core.keyword_identical_QMARK_;
var expr__101791 = k__5349__auto__;
if(cljs.core.truth_((pred__101790.cljs$core$IFn$_invoke$arity$2 ? pred__101790.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__101791) : pred__101790.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__101791)))){
return (new frontend.search.browser.Browser(G__101779,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__101779),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__101779){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,G__101779,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,option){
var self__ = this;
var _this__$1 = this;
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(frontend.search.browser.search_blocks(self__.repo,q,option));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$query_page$arity$3 = (function (_this,_q,_opt){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var indice = frontend.search.db.make_blocks_indice_BANG_.cljs$core$IFn$_invoke$arity$1(self__.repo);
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(indice);
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,p__101793){
var self__ = this;
var map__101794 = p__101793;
var map__101794__$1 = cljs.core.__destructure_map(map__101794);
var blocks_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101794__$1,new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009));
var blocks_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101794__$1,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792));
var _this__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__101795_101806 = cljs.core.seq(blocks_to_remove_set);
var chunk__101796_101807 = null;
var count__101797_101808 = (0);
var i__101798_101809 = (0);
while(true){
if((i__101798_101809 < count__101797_101808)){
var block_id_101810 = chunk__101796_101807.cljs$core$IIndexed$_nth$arity$2(null,i__101798_101809);
indice.remove(((function (seq__101795_101806,chunk__101796_101807,count__101797_101808,i__101798_101809,block_id_101810,_this__$1,map__101794,map__101794__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_101810,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__101795_101806,chunk__101796_101807,count__101797_101808,i__101798_101809,block_id_101810,_this__$1,map__101794,map__101794__$1,blocks_to_remove_set,blocks_to_add))
);


var G__101811 = seq__101795_101806;
var G__101812 = chunk__101796_101807;
var G__101813 = count__101797_101808;
var G__101814 = (i__101798_101809 + (1));
seq__101795_101806 = G__101811;
chunk__101796_101807 = G__101812;
count__101797_101808 = G__101813;
i__101798_101809 = G__101814;
continue;
} else {
var temp__5804__auto___101815 = cljs.core.seq(seq__101795_101806);
if(temp__5804__auto___101815){
var seq__101795_101816__$1 = temp__5804__auto___101815;
if(cljs.core.chunked_seq_QMARK_(seq__101795_101816__$1)){
var c__5565__auto___101817 = cljs.core.chunk_first(seq__101795_101816__$1);
var G__101818 = cljs.core.chunk_rest(seq__101795_101816__$1);
var G__101819 = c__5565__auto___101817;
var G__101820 = cljs.core.count(c__5565__auto___101817);
var G__101821 = (0);
seq__101795_101806 = G__101818;
chunk__101796_101807 = G__101819;
count__101797_101808 = G__101820;
i__101798_101809 = G__101821;
continue;
} else {
var block_id_101822 = cljs.core.first(seq__101795_101816__$1);
indice.remove(((function (seq__101795_101806,chunk__101796_101807,count__101797_101808,i__101798_101809,block_id_101822,seq__101795_101816__$1,temp__5804__auto___101815,_this__$1,map__101794,map__101794__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_101822,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__101795_101806,chunk__101796_101807,count__101797_101808,i__101798_101809,block_id_101822,seq__101795_101816__$1,temp__5804__auto___101815,_this__$1,map__101794,map__101794__$1,blocks_to_remove_set,blocks_to_add))
);


var G__101823 = cljs.core.next(seq__101795_101816__$1);
var G__101824 = null;
var G__101825 = (0);
var G__101826 = (0);
seq__101795_101806 = G__101823;
chunk__101796_101807 = G__101824;
count__101797_101808 = G__101825;
i__101798_101809 = G__101826;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(blocks_to_add)){
var seq__101799_101827 = cljs.core.seq(blocks_to_add);
var chunk__101800_101828 = null;
var count__101801_101829 = (0);
var i__101802_101830 = (0);
while(true){
if((i__101802_101830 < count__101801_101829)){
var block_101831 = chunk__101800_101828.cljs$core$IIndexed$_nth$arity$2(null,i__101802_101830);
indice.add(cljs_bean.core.__GT_js(block_101831));


var G__101832 = seq__101799_101827;
var G__101833 = chunk__101800_101828;
var G__101834 = count__101801_101829;
var G__101835 = (i__101802_101830 + (1));
seq__101799_101827 = G__101832;
chunk__101800_101828 = G__101833;
count__101801_101829 = G__101834;
i__101802_101830 = G__101835;
continue;
} else {
var temp__5804__auto___101836 = cljs.core.seq(seq__101799_101827);
if(temp__5804__auto___101836){
var seq__101799_101837__$1 = temp__5804__auto___101836;
if(cljs.core.chunked_seq_QMARK_(seq__101799_101837__$1)){
var c__5565__auto___101838 = cljs.core.chunk_first(seq__101799_101837__$1);
var G__101839 = cljs.core.chunk_rest(seq__101799_101837__$1);
var G__101840 = c__5565__auto___101838;
var G__101841 = cljs.core.count(c__5565__auto___101838);
var G__101842 = (0);
seq__101799_101827 = G__101839;
chunk__101800_101828 = G__101840;
count__101801_101829 = G__101841;
i__101802_101830 = G__101842;
continue;
} else {
var block_101843 = cljs.core.first(seq__101799_101837__$1);
indice.add(cljs_bean.core.__GT_js(block_101843));


var G__101844 = cljs.core.next(seq__101799_101837__$1);
var G__101845 = null;
var G__101846 = (0);
var G__101847 = (0);
seq__101799_101827 = G__101844;
chunk__101800_101828 = G__101845;
count__101801_101829 = G__101846;
i__101802_101830 = G__101847;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

return indice;
}));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$transact_pages_BANG_$arity$2 = (function (_this,_data){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),null);
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.search.browser.Browser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.browser.Browser.cljs$lang$type = true);

(frontend.search.browser.Browser.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.search.browser/Browser",null,(1),null));
}));

(frontend.search.browser.Browser.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.search.browser/Browser");
}));

/**
 * Positional factory function for frontend.search.browser/Browser.
 */
frontend.search.browser.__GT_Browser = (function frontend$search$browser$__GT_Browser(repo){
return (new frontend.search.browser.Browser(repo,null,null,null));
});

/**
 * Factory function for frontend.search.browser/Browser, taking a map of keywords to field values.
 */
frontend.search.browser.map__GT_Browser = (function frontend$search$browser$map__GT_Browser(G__101783){
var extmap__5382__auto__ = (function (){var G__101803 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__101783,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__101783)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__101803);
} else {
return G__101803;
}
})();
return (new frontend.search.browser.Browser(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__101783),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.search.browser.js.map
