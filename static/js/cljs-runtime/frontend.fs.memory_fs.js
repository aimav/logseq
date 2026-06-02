goog.provide('frontend.fs.memory_fs');
/**
 * Read dir recursively, return all paths
 * 
 * accept dir as path, without memory:// prefix for simplicity
 */
frontend.fs.memory_fs._LT_readdir = (function frontend$fs$memory_fs$_LT_readdir(dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.protocols._promise((function (){var internal_loop_fn_name37186 = (function frontend$fs$memory_fs$_LT_readdir_$_internal_loop_fn_name37186(result84949,dirs84950){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result84949,dirs84950], null)),(function (p__84955){
var vec__84956 = p__84955;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84956,(0),null);
var dirs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84956,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto____$1){
return promesa.protocols._promise(((cljs.core.empty_QMARK_(dirs))?result:promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dirs),(function (dir__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.stat(dir__$1),(function (stat){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat.type,"file"),(function (is_file_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(is_file_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,dir__$1):result),(function (result__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(is_file_QMARK_)?null:promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.pfs.readdir(dir__$1),cljs_bean.core.__GT_clj),(function (rpaths){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__84948_SHARP_){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__84948_SHARP_], 0));
}),rpaths);
}))),(function (dir_content){
return promesa.protocols._promise(frontend$fs$memory_fs$_LT_readdir_$_internal_loop_fn_name37186(result__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(dirs),dir_content)));
}));
}));
}));
}));
}));
}))));
}));
}));
});
return internal_loop_fn_name37186(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir], null));
})());
})),(function (result){
return promesa.protocols._promise(result);
}));
}));
});
/**
 * dir is path, without memory:// prefix for simplicity
 */
frontend.fs.memory_fs._LT_ensure_dir_BANG_ = (function frontend$fs$memory_fs$_LT_ensure_dir_BANG_(dir){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.stat(dir),(function (stat){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat.type,"file"))?promesa.core.rejected("Path is a file"):promesa.core.resolved(null)
));
}));
})),(function (_error){
return window.pfs.mkdir(dir);
}));
});
/**
 * dir is path, without memory:// prefix for simplicity
 */
frontend.fs.memory_fs._LT_exists_QMARK_ = (function frontend$fs$memory_fs$_LT_exists_QMARK_(dir){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.pfs.stat(dir),(function (stat){
return (!((stat == null)));
})),(function (_){
return null;
}));
});
/**
 * mkdir, recursively create parent directories if not exist
 * 
 * lightning-fs does not support's :recursive in mkdir options
 */
frontend.fs.memory_fs._LT_mkdir_recur_BANG_ = (function frontend$fs$memory_fs$_LT_mkdir_recur_BANG_(dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.url_to_path(dir),(function (fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.protocols._promise((function (){var internal_loop_fn_name37186 = (function frontend$fs$memory_fs$_LT_mkdir_recur_BANG__$_internal_loop_fn_name37186(top_parent84959,remains84960){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_parent84959,remains84960], null)),(function (p__84965){
var vec__84966 = p__84965;
var top_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84966,(0),null);
var remains = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84966,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto____$1){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.memory_fs._LT_exists_QMARK_(top_parent),(function (exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?cljs.core.reverse(remains):frontend$fs$memory_fs$_LT_mkdir_recur_BANG__$_internal_loop_fn_name37186(logseq.common.path.parent(top_parent),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remains,top_parent))));
}));
})));
}));
}));
});
return internal_loop_fn_name37186(fpath,cljs.core.PersistentVector.EMPTY);
})());
})),(function (sub_dirs){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.protocols._promise((function (){var internal_loop_fn_name37186 = (function frontend$fs$memory_fs$_LT_mkdir_recur_BANG__$_internal_loop_fn_name37186(remains84969){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [remains84969], null)),(function (p__84974){
var vec__84975 = p__84974;
var remains = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84975,(0),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto____$1){
return promesa.protocols._promise(((cljs.core.empty_QMARK_(remains))?promesa.core.resolved(null):promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.mkdir(cljs.core.first(remains)),(function (___37148__auto__){
return promesa.protocols._promise(frontend$fs$memory_fs$_LT_mkdir_recur_BANG__$_internal_loop_fn_name37186(cljs.core.rest(remains)));
}));
}))));
}));
}));
});
return internal_loop_fn_name37186(sub_dirs);
})());
})));
}));
}));
}));
});

/**
* @constructor
 * @implements {frontend.fs.protocol.Fs}
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
frontend.fs.memory_fs.MemoryFs = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k84980,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__84984 = k84980;
switch (G__84984) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84980,else__5343__auto__);

}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__84985){
var vec__84986 = p__84985;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84986,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84986,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.memory-fs.MemoryFs{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84979){
var self__ = this;
var G__84979__$1 = this;
return (new cljs.core.RecordIter((0),G__84979__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.memory_fs.MemoryFs(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1927770687 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84981,other84982){
var self__ = this;
var this84981__$1 = this;
return (((!((other84982 == null)))) && ((((this84981__$1.constructor === other84982.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84981__$1.__extmap,other84982.__extmap)))));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.memory_fs.MemoryFs(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k84980){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k84980);
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__84979){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__84989 = cljs.core.keyword_identical_QMARK_;
var expr__84990 = k__5349__auto__;
return (new frontend.fs.memory_fs.MemoryFs(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__84979),null));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__84979){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.memory_fs.MemoryFs(G__84979,self__.__extmap,self__.__hash));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
var fpath = logseq.common.path.url_to_path(dir);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(window.pfs.mkdir(fpath),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(memory-fs)Mkdir error: ",error], 0));
}));
} else {
return null;
}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (_this,_repo,path,opts){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.url_to_path(path),(function (fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.stat(fpath),(function (stat){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat.type,"file"))?window.pfs.unlink(fpath,opts):promesa.core.rejected("Unlinking a directory is not allowed, use rmdir! instead")));
}));
}));
}));
} else {
return null;
}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$get_files$arity$2 = (function (_this,_path_or_handle){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (_this,_repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
var old_path__$1 = logseq.common.path.url_to_path(old_path);
var new_path__$1 = logseq.common.path.url_to_path(new_path);
return window.pfs.rename(old_path__$1,new_path__$1);
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
var fpath = logseq.common.path.url_to_path(dir);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.memory_fs._LT_readdir(fpath),(function (rpaths){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__84978_SHARP_){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("memory://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__84978_SHARP_], 0));
}),rpaths);
})),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(memory-fs)Readdir error: ",error], 0));

return promesa.core.rejected(error);
}));
} else {
return null;
}
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$stat$arity$2 = (function (_this,fpath){
var self__ = this;
var _this__$1 = this;
var fpath__$1 = logseq.common.path.url_to_path(fpath);
return window.pfs.stat(fpath__$1);
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$3 = (function (_this,_dir,_options){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$unwatch_dir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
var fpath = logseq.common.path.url_to_path(dir);
return window.workerThread.rimraf(fpath);
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (_this,repo,dir,rpath,content,_opts){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.url_to_path(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath], 0))),(function (fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.parent(fpath),(function (containing_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.memory_fs._LT_ensure_dir_BANG_(containing_dir),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.writeFile(fpath,content),(function (___$1){
return promesa.protocols._promise((function (){
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,rpath,content) : frontend.db.set_file_content_BANG_.call(null,repo,rpath,content));

var G__84992 = repo;
var G__84993 = rpath;
var G__84994 = (new Date());
return (frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(G__84992,G__84993,G__84994) : frontend.db.set_file_last_modified_at_BANG_.call(null,G__84992,G__84993,G__84994));
})()
);
}));
}));
}));
}));
}));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,options){
var self__ = this;
var _this__$1 = this;
var fpath = logseq.common.path.url_to_path(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
return window.pfs.readFile(fpath,cljs.core.clj__GT_js(options));
}));

(frontend.fs.memory_fs.MemoryFs.prototype.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
var fpath = logseq.common.path.url_to_path(dir);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.memory_fs._LT_mkdir_recur_BANG_(fpath),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(memory-fs)Mkdir-recur error: ",error], 0));
}));
} else {
return null;
}
}));

(frontend.fs.memory_fs.MemoryFs.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.memory_fs.MemoryFs.cljs$lang$type = true);

(frontend.fs.memory_fs.MemoryFs.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.memory-fs/MemoryFs",null,(1),null));
}));

(frontend.fs.memory_fs.MemoryFs.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.memory-fs/MemoryFs");
}));

/**
 * Positional factory function for frontend.fs.memory-fs/MemoryFs.
 */
frontend.fs.memory_fs.__GT_MemoryFs = (function frontend$fs$memory_fs$__GT_MemoryFs(){
return (new frontend.fs.memory_fs.MemoryFs(null,null,null));
});

/**
 * Factory function for frontend.fs.memory-fs/MemoryFs, taking a map of keywords to field values.
 */
frontend.fs.memory_fs.map__GT_MemoryFs = (function frontend$fs$memory_fs$map__GT_MemoryFs(G__84983){
var extmap__5382__auto__ = (function (){var G__84995 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__84983);
if(cljs.core.record_QMARK_(G__84983)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84995);
} else {
return G__84995;
}
})();
return (new frontend.fs.memory_fs.MemoryFs(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.fs.memory_fs.js.map
