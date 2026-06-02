goog.provide('frontend.external.roam');
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.all_refed_uids !== 'undefined')){
} else {
frontend.external.roam.all_refed_uids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.uid__GT_uuid !== 'undefined')){
} else {
frontend.external.roam.uid__GT_uuid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.external.roam.reset_state_BANG_ = (function frontend$external$roam$reset_state_BANG_(){
cljs.core.reset_BANG_(frontend.external.roam.all_refed_uids,cljs.core.PersistentHashSet.EMPTY);

return cljs.core.reset_BANG_(frontend.external.roam.uid__GT_uuid,cljs.core.PersistentArrayMap.EMPTY);
});
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.uid_pattern !== 'undefined')){
} else {
frontend.external.roam.uid_pattern = /\(\(([a-zA-Z0-9_\\-]{6,24})\)\)/;
}
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.macro_pattern !== 'undefined')){
} else {
frontend.external.roam.macro_pattern = /\{\{([^{}]+)\}\}/;
}
frontend.external.roam.uid_transform = (function frontend$external$roam$uid_transform(text){
return clojure.string.replace(text,frontend.external.roam.uid_pattern,(function (p__118364){
var vec__118365 = p__118364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118365,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118365,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid,uid);
return logseq.graph_parser.util.block_ref.__GT_block_ref(id);
}));
});
frontend.external.roam.macro_transform = (function frontend$external$roam$macro_transform(text){
return clojure.string.replace(text,frontend.external.roam.macro_pattern,(function (p__118368){
var vec__118369 = p__118368;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118369,(0),null);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118369,(1),null);
var vec__118372 = logseq.graph_parser.util.split_first(":",text__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118372,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118372,(1),null);
if(cljs.core.truth_(name)){
var name__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(name);
return goog.string.format("{{%s %s}}",name__$1,arg);
} else {
return original;
}
}));
});
frontend.external.roam.fenced_code_transform = (function frontend$external$roam$fenced_code_transform(text){
return clojure.string.replace(text,/```/,"\n```");
});
frontend.external.roam.load_all_refed_uids_BANG_ = (function frontend$external$roam$load_all_refed_uids_BANG_(data){
var full_text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(f);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__5041__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(full_text,(function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(f))].join('');
}));
} else {
}

return f;
}),data);

var uids = cljs.core.set(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.re_seq(frontend.external.roam.uid_pattern,cljs.core.deref(full_text)))));
cljs.core.reset_BANG_(frontend.external.roam.all_refed_uids,uids);

var seq__118375 = cljs.core.seq(uids);
var chunk__118376 = null;
var count__118377 = (0);
var i__118378 = (0);
while(true){
if((i__118378 < count__118377)){
var uid = chunk__118376.cljs$core$IIndexed$_nth$arity$2(null,i__118378);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,cljs.core.random_uuid());


var G__118407 = seq__118375;
var G__118408 = chunk__118376;
var G__118409 = count__118377;
var G__118410 = (i__118378 + (1));
seq__118375 = G__118407;
chunk__118376 = G__118408;
count__118377 = G__118409;
i__118378 = G__118410;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__118375);
if(temp__5804__auto__){
var seq__118375__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__118375__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__118375__$1);
var G__118411 = cljs.core.chunk_rest(seq__118375__$1);
var G__118412 = c__5565__auto__;
var G__118413 = cljs.core.count(c__5565__auto__);
var G__118414 = (0);
seq__118375 = G__118411;
chunk__118376 = G__118412;
count__118377 = G__118413;
i__118378 = G__118414;
continue;
} else {
var uid = cljs.core.first(seq__118375__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,cljs.core.random_uuid());


var G__118415 = cljs.core.next(seq__118375__$1);
var G__118416 = null;
var G__118417 = (0);
var G__118418 = (0);
seq__118375 = G__118415;
chunk__118376 = G__118416;
count__118377 = G__118417;
i__118378 = G__118418;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.external.roam.transform = (function frontend$external$roam$transform(text){
return frontend.external.roam.fenced_code_transform(frontend.external.roam.macro_transform(frontend.external.roam.uid_transform(clojure.string.replace(clojure.string.replace(text,"{{[[TODO]]}}","TODO"),"{{[[DONE]]}}","DONE"))));
});
frontend.external.roam.child__GT_text = (function frontend$external$roam$child__GT_text(p__118379,level){
var map__118380 = p__118379;
var map__118380__$1 = cljs.core.__destructure_map(map__118380);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118380__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118380__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid);
if(cljs.core.truth_(and__5041__auto__)){
return uid;
} else {
return and__5041__auto__;
}
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,cljs.core.random_uuid());
}

var children_text = (function (){var G__118381 = children;
var G__118382 = (level + (1));
return (frontend.external.roam.children__GT_text.cljs$core$IFn$_invoke$arity$2 ? frontend.external.roam.children__GT_text.cljs$core$IFn$_invoke$arity$2(G__118381,G__118382) : frontend.external.roam.children__GT_text.call(null,G__118381,G__118382));
})();
var level_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"\t"))),(((level === (0)))?"-":" -")].join('');
var properties = ((cljs.core.contains_QMARK_(cljs.core.deref(frontend.external.roam.all_refed_uids),uid))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("id:: %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid)))),"\n"].join(''):null);
if(cljs.core.truth_(string)){
return [level_pattern," ",clojure.string.triml(string),"\n",properties,cljs.core.str.cljs$core$IFn$_invoke$arity$1(children_text)].join('');
} else {
return children_text;
}
});
frontend.external.roam.children__GT_text = (function frontend$external$roam$children__GT_text(children,level){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__118383_SHARP_){
return frontend.external.roam.child__GT_text(p1__118383_SHARP_,level);
}),children)));
});
frontend.external.roam.json__GT_edn = (function frontend$external$roam$json__GT_edn(raw_string){
return cljs_bean.core.__GT_clj(JSON.parse(raw_string));
});
frontend.external.roam.__GT_file = (function frontend$external$roam$__GT_file(page_data){
var map__118384 = page_data;
var map__118384__$1 = cljs.core.__destructure_map(map__118384);
var create_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118384__$1,new cljs.core.Keyword(null,"create-time","create-time",875410581));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118384__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118384__$1,new cljs.core.Keyword(null,"edit-time","edit-time",-1528280702));
var initial_level = (1);
var text = ((cljs.core.seq(children))?(function (){var temp__5804__auto__ = frontend.external.roam.children__GT_text(children,(initial_level - (1)));
if(cljs.core.truth_(temp__5804__auto__)){
var text = temp__5804__auto__;
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var front_matter = ((journal_QMARK_)?"":goog.string.format("---\ntitle: %s\n---\n\n",title));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(front_matter),frontend.external.roam.transform(text)].join('');
} else {
return null;
}
})():null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(clojure.string.blank_QMARK_(title)));
if(and__5041__auto__){
return text;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"created-at","created-at",-89248644),create_time,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),edit_time,new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
return null;
}
});
frontend.external.roam.__GT_files = (function frontend$external$roam$__GT_files(edn_data){
frontend.external.roam.load_all_refed_uids_BANG_(edn_data);

var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.external.roam.__GT_file,edn_data);
var files__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__118385_SHARP_){
return (new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__118385_SHARP_) == null);
}),files);
var files__$2 = cljs.core.group_by((function (f){
return clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(f));
}),files__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118386){
var vec__118387 = p__118386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118387,(0),null);
var vec__118390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118387,(1),null);
var seq__118391 = cljs.core.seq(vec__118390);
var first__118392 = cljs.core.first(seq__118391);
var seq__118391__$1 = cljs.core.next(seq__118391);
var fst = first__118392;
var others = seq__118391__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.cons(fst,others)))));
}),files__$2);
});

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
 * @implements {frontend.external.protocol.External}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.external.roam.Roam = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.external.roam.Roam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.external.roam.Roam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k118394,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__118398 = k118394;
switch (G__118398) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k118394,else__5343__auto__);

}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__118399){
var vec__118400 = p__118399;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118400,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118400,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.external.roam.Roam.prototype.frontend$external$protocol$External$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.external.roam.Roam.prototype.frontend$external$protocol$External$toMarkdownFiles$arity$3 = (function (_this,content,_config){
var self__ = this;
var _this__$1 = this;
return frontend.external.roam.__GT_files(frontend.external.roam.json__GT_edn(content));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.external.roam.Roam{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__118393){
var self__ = this;
var G__118393__$1 = this;
return (new cljs.core.RecordIter((0),G__118393__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.external.roam.Roam(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1836119154 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this118395,other118396){
var self__ = this;
var this118395__$1 = this;
return (((!((other118396 == null)))) && ((((this118395__$1.constructor === other118396.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this118395__$1.__extmap,other118396.__extmap)))));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.external.roam.Roam(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k118394){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k118394);
}));

(frontend.external.roam.Roam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__118393){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__118403 = cljs.core.keyword_identical_QMARK_;
var expr__118404 = k__5349__auto__;
return (new frontend.external.roam.Roam(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__118393),null));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__118393){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.external.roam.Roam(G__118393,self__.__extmap,self__.__hash));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.external.roam.Roam.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.external.roam.Roam.cljs$lang$type = true);

(frontend.external.roam.Roam.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.external.roam/Roam",null,(1),null));
}));

(frontend.external.roam.Roam.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.external.roam/Roam");
}));

/**
 * Positional factory function for frontend.external.roam/Roam.
 */
frontend.external.roam.__GT_Roam = (function frontend$external$roam$__GT_Roam(){
return (new frontend.external.roam.Roam(null,null,null));
});

/**
 * Factory function for frontend.external.roam/Roam, taking a map of keywords to field values.
 */
frontend.external.roam.map__GT_Roam = (function frontend$external$roam$map__GT_Roam(G__118397){
var extmap__5382__auto__ = (function (){var G__118406 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__118397);
if(cljs.core.record_QMARK_(G__118397)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__118406);
} else {
return G__118406;
}
})();
return (new frontend.external.roam.Roam(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.external.roam.js.map
