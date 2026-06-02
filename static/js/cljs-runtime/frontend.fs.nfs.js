goog.provide('frontend.fs.nfs');
goog.scope(function(){
  frontend.fs.nfs.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.nfs !== 'undefined') && (typeof frontend.fs.nfs.nfs_file_handles_cache !== 'undefined')){
} else {
frontend.fs.nfs.nfs_file_handles_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.fs.nfs.get_nfs_file_handle = (function frontend$fs$nfs$get_nfs_file_handle(handle_path){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.fs.nfs.nfs_file_handles_cache),handle_path);
});
frontend.fs.nfs.add_nfs_file_handle_BANG_ = (function frontend$fs$nfs$add_nfs_file_handle_BANG_(handle_path,handle){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.nfs","DEBUG","frontend.fs.nfs/DEBUG",-2022189610),"add-nfs-file-handle!",handle_path], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.fs.nfs.nfs_file_handles_cache,cljs.core.assoc,handle_path,handle);
});
frontend.fs.nfs.remove_nfs_file_handle_BANG_ = (function frontend$fs$nfs$remove_nfs_file_handle_BANG_(handle_path){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.fs.nfs.nfs_file_handles_cache,cljs.core.dissoc,handle_path);
});
frontend.fs.nfs.nfs_saved_handler = (function frontend$fs$nfs$nfs_saved_handler(repo,path,file){
var temp__5804__auto__ = frontend.fs.nfs.goog$module$goog$object.get(file,"lastModified");
if(cljs.core.truth_(temp__5804__auto__)){
var last_modified = temp__5804__auto__;
var path__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1)):path);
return (frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path__$1,last_modified) : frontend.db.set_file_last_modified_at_BANG_.call(null,repo,path__$1,last_modified));
} else {
return null;
}
});
frontend.fs.nfs.verify_handle_permission = (function frontend$fs$nfs$verify_handle_permission(handle,read_write_QMARK_){
return module$frontend$utils.verifyPermission(handle,read_write_QMARK_);
});
frontend.fs.nfs.verify_permission = (function frontend$fs$nfs$verify_permission(repo,read_write_QMARK_){
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var repo_dir = frontend.config.get_repo_dir(repo__$1);
var handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_dir)].join('');
var handle = frontend.fs.nfs.get_nfs_file_handle(handle_path);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.verifyPermission(handle,read_write_QMARK_),(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),repo__$1], null),true);

return true;
}));
});
frontend.fs.nfs.check_directory_permission_BANG_ = (function frontend$fs$nfs$check_directory_permission_BANG_(repo){
if(frontend.config.local_db_QMARK_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (repo_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_dir)].join(''),(function (handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(handle_path),(function (handle){
return promesa.protocols._promise((cljs.core.truth_(handle)?(function (){
frontend.fs.nfs.add_nfs_file_handle_BANG_(handle_path,handle);

return frontend.fs.nfs.verify_permission(repo,true);
})()
:null));
}));
}));
}));
}));
} else {
return null;
}
});
frontend.fs.nfs.contents_matched_QMARK_ = (function frontend$fs$nfs$contents_matched_QMARK_(disk_content,db_content){
if(((typeof disk_content === 'string') && (typeof db_content === 'string'))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(disk_content),clojure.string.trim(db_content));
} else {
return null;
}
});
/**
 * Guard against File System Access API permission, avoiding early access before granted
 */
frontend.fs.nfs.await_permission_granted = (function frontend$fs$nfs$await_permission_granted(repo){
if(cljs.core.truth_(frontend.state.nfs_user_granted_QMARK_(repo))){
return promesa.core.resolved(true);
} else {
return (new Promise((function (resolve,reject){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var timer_SINGLEQUOTE_ = setInterval((function (){
if(cljs.core.truth_(frontend.state.nfs_user_granted_QMARK_(repo))){
clearInterval(cljs.core.deref(timer));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(true) : resolve.call(null,true));
} else {
return null;
}
}),(1000));
var _ = cljs.core.reset_BANG_(timer,timer_SINGLEQUOTE_);
return setTimeout((function (){
clearInterval(timer);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(false) : reject.call(null,false));
}),(100000));
})));
}
});
/**
 * for accessing File handle outside, ensuring user granted.
 */
frontend.fs.nfs.await_get_nfs_file_handle = (function frontend$fs$nfs$await_get_nfs_file_handle(repo,handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.await_permission_granted(repo),(function (___37148__auto__){
return promesa.protocols._promise(frontend.fs.nfs.get_nfs_file_handle(handle_path));
}));
}));
});
/**
 * Return list of filenames
 */
frontend.fs.nfs.readdir_and_reload_all_handles = (function frontend$fs$nfs$readdir_and_reload_all_handles(root_dir,root_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.getFiles(root_handle,true,(function (path,entry){
var handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
if(clojure.string.includes_QMARK_(path,"/.")){
return null;
} else {
return frontend.fs.nfs.add_nfs_file_handle_BANG_(handle_path,entry);
}
})),(function (files){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return logseq.graph_parser.util.path_normalize(file.webkitRelativePath);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var rpath = clojure.string.replace_first(file.webkitRelativePath,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_dir),"/"].join(''),"");
var ext = frontend.util.get_file_ext(rpath);
return ((clojure.string.blank_QMARK_(rpath)) || (((clojure.string.starts_with_QMARK_(rpath,".")) || (((clojure.string.starts_with_QMARK_(rpath,"logseq/bak")) || ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["org",null,"md",null,"excalidraw",null,"css",null,"edn",null], null), null),ext)))))))));
}),files)));
}));
}));
});
/**
 * Return list of file objects
 */
frontend.fs.nfs.get_files_and_reload_all_handles = (function frontend$fs$nfs$get_files_and_reload_all_handles(root_dir,root_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.getFiles(root_handle,true,(function (path,entry){
var handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
if(clojure.string.includes_QMARK_(path,"/.")){
return null;
} else {
return frontend.fs.nfs.add_nfs_file_handle_BANG_(handle_path,entry);
}
})),(function (files){
return promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"path","path",-188191168),logseq.graph_parser.util.path_normalize(file.webkitRelativePath),new cljs.core.Keyword(null,"mtime","mtime",963165087),file.lastModified,new cljs.core.Keyword(null,"size","size",1098693007),file.size,new cljs.core.Keyword(null,"type","type",1174270348),file.handle.kind,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword("file","file","file/file",-1241327538),file,new cljs.core.Keyword("file","handle","file/handle",1544192618),file.handle], null));
}));
}));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var rpath = clojure.string.replace_first(file.webkitRelativePath,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_dir),"/"].join(''),"");
var ext = frontend.util.get_file_ext(rpath);
return ((clojure.string.blank_QMARK_(rpath)) || (((clojure.string.starts_with_QMARK_(rpath,".")) || (((clojure.string.starts_with_QMARK_(rpath,"logseq/bak")) || (((clojure.string.starts_with_QMARK_(rpath,"logseq/version-files")) || ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["org",null,"md",null,"excalidraw",null,"css",null,"edn",null], null), null),ext)))))))))));
}),files))));
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
frontend.fs.nfs.Nfs = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.nfs.Nfs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k84837,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__84841 = k84837;
switch (G__84841) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84837,else__5343__auto__);

}
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__84842){
var vec__84843 = p__84842;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84843,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84843,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.nfs.Nfs{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84836){
var self__ = this;
var G__84836__$1 = this;
return (new cljs.core.RecordIter((0),G__84836__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.nfs.Nfs(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-207953394 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84838,other84839){
var self__ = this;
var this84838__$1 = this;
return (((!((other84839 == null)))) && ((((this84838__$1.constructor === other84839.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84838__$1.__extmap,other84839.__extmap)))));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.nfs.Nfs(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k84837){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k84837);
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__84836){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__84846 = cljs.core.keyword_identical_QMARK_;
var expr__84847 = k__5349__auto__;
return (new frontend.fs.nfs.Nfs(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__84836),null));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__84836){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.nfs.Nfs(G__84836,self__.__extmap,self__.__hash));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
var dir__$1 = logseq.common.path.path_normalize(dir);
var parent_dir = logseq.common.path.parent(dir__$1);
var parent_handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_dir)].join('');
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.fs.nfs.get_nfs_file_handle(parent_handle_path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.idb.get_item(parent_handle_path);
}
})(),(function (parent_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(parent_handle)?frontend.fs.nfs.verify_handle_permission(parent_handle,true):null),(function (_){
return promesa.protocols._promise((cljs.core.truth_(parent_handle)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.filename(dir__$1),(function (new_dir_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(parent_handle.getDirectoryHandle(new_dir_name,({"create": true})),(function (new_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir__$1)].join(''),(function (handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.set_item_BANG_(handle_path,new_handle),(function (___$1){
return promesa.protocols._promise((function (){
frontend.fs.nfs.add_nfs_file_handle_BANG_(handle_path,new_handle);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dir created: ",dir__$1], 0));
})()
);
}));
}));
}));
}));
})):null));
}));
}));
})),(function (error){
console.debug("mkdir error: ",error,", dir: ",dir__$1);

throw error;
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (this$,repo,fpath,_opts){
var self__ = this;
var this$__$1 = this;
var repo_dir = frontend.config.get_repo_dir(repo);
var filename = logseq.common.path.filename(fpath);
var handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fpath)].join('');
var recycle_dir = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.recycle_dir], 0));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2(null,recycle_dir),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_nfs_file_handle(handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(handle.getFile(),(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_nfs_file_handle(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(recycle_dir)].join('')),(function (bak_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.replace(logseq.common.path.relative_path(repo_dir,fpath),"/","_"),"\\","_"),(function (bak_filename){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(bak_handle.getFileHandle(bak_filename,({"create": true})),(function (file_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.writeFile(file_handle,content),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.parent(fpath),(function (parent_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_nfs_file_handle(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_dir)].join('')),(function (parent_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(parent_handle)?parent_handle.removeEntry(filename):null),(function (___$2){
return promesa.protocols._promise((function (){
frontend.idb.remove_item_BANG_(handle_path);

return frontend.fs.nfs.remove_nfs_file_handle_BANG_(handle_path);
})()
);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("unlink","path","unlink/path",-1629444045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fpath,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),229], null)),null);
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$get_files$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(clojure.string.includes_QMARK_(dir,"/")){
console.error("BUG: get-files(nfs) only accepts repo-dir");
} else {
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''),(function (handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_nfs_file_handle(handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_files_and_reload_all_handles(dir,handle),(function (files){
return promesa.protocols._promise(files);
}));
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (this$,repo,old_path,new_path){
var self__ = this;
var this$__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (repo_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.relative_path(repo_dir,old_path),(function (old_rpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.relative_path(repo_dir,new_path),(function (new_rpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$read_file$arity$4(null,repo_dir,old_rpath,null),(function (old_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$write_file_BANG_$arity$6(null,repo,repo_dir,new_rpath,old_content,null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$unlink_BANG_$arity$4(null,repo,old_path,null),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["logseq_local_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''),(function (repo_url){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.await_permission_granted(repo_url),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''),(function (handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.fs.nfs.get_nfs_file_handle(handle_path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.idb.get_item(handle_path);
}
})(),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(handle)?frontend.fs.nfs.verify_handle_permission(handle,true):null),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((clojure.string.includes_QMARK_(dir,"/"))?console.error("ERROR: unimpl"):frontend.fs.nfs.readdir_and_reload_all_handles(dir,handle)),(function (fpaths){
return promesa.protocols._promise(fpaths);
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$stat$arity$2 = (function (_this,fpath){
var self__ = this;
var _this__$1 = this;
var temp__5802__auto__ = frontend.fs.nfs.get_nfs_file_handle(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fpath)].join(''));
if(cljs.core.truth_(temp__5802__auto__)){
var handle = temp__5802__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.verify_handle_permission(handle,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(handle.getFile(),(function (file){
return promesa.protocols._promise((function (){var get_attr = (function (p1__84835_SHARP_){
return frontend.fs.nfs.goog$module$goog$object.get(file,p1__84835_SHARP_);
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),get_attr("lastModified"),new cljs.core.Keyword(null,"size","size",1098693007),get_attr("size"),new cljs.core.Keyword(null,"path","path",-188191168),fpath,new cljs.core.Keyword(null,"type","type",1174270348),get_attr("type")], null);
})());
}));
}));
}));
} else {
return promesa.core.rejected("File not exists");
}
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$3 = (function (_this,_dir,_options){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$unwatch_dir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (_this,repo,dir,path,content,opts){
var self__ = this;
var _this__$1 = this;
var fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
var ext = frontend.util.get_file_ext(path);
var file_handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fpath)].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_nfs_file_handle(file_handle_path),(function (file_handle){
return promesa.protocols._promise((cljs.core.truth_(file_handle)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle.getFile(),(function (local_file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(local_file.text(),(function (disk_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path)),(function (db_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.contents_matched_QMARK_(disk_content,db_content),(function (contents_matched_QMARK_){
return promesa.protocols._promise((((((!(clojure.string.blank_QMARK_(db_content)))) && (((cljs.core.not(new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960).cljs$core$IFn$_invoke$arity$1(opts))) && (((cljs.core.not(contents_matched_QMARK_)) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["excalidraw",null,"css",null,"edn",null], null), null),ext)))) && ((!(clojure.string.includes_QMARK_(path,"/.recycle/"))))))))))))?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),path,disk_content,content], null)):promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.verify_permission(repo,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.writeFile(file_handle,content),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle.getFile(),(function (file){
return promesa.protocols._promise((cljs.core.truth_(file)?(function (){
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,content) : frontend.db.set_file_content_BANG_.call(null,repo,path,content));

return frontend.fs.nfs.nfs_saved_handler(repo,path,file);
})()
:null));
}));
}));
}));
}))));
}));
}));
}));
}));
})):promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.filename(fpath),(function (basename){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.parent(fpath),(function (parent_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_dir)].join(''),(function (parent_dir_handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.get_nfs_file_handle(parent_dir_handle_path),(function (parent_dir_handle){
return promesa.protocols._promise((cljs.core.truth_(parent_dir_handle)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(parent_dir_handle.getFileHandle(basename,({"create": true})),(function (file_handle__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.add_nfs_file_handle_BANG_(file_handle_path,file_handle__$1),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle__$1.getFile(),(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (text){
return promesa.protocols._promise(((clojure.string.blank_QMARK_(text))?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.writeFile(file_handle__$1,content),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle__$1.getFile(),(function (file__$1){
return promesa.protocols._promise((cljs.core.truth_(file__$1)?frontend.fs.nfs.nfs_saved_handler(repo,path,file__$1):null));
}));
}));
})):(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["The file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," already exists, please append the content if you need it.\n Unsaved content: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","alter","file/alter",1559248582),repo,path,text], null));
})()
));
}));
}));
}));
}));
})):console.error("TODO: can not create directory hierarchy")));
}));
}));
}));
}));
}))));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.openDirectory(({"recursive": true, "mode": "readwrite"}),(function (path,entry){
var handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
if(clojure.string.includes_QMARK_(path,"/.")){
return null;
} else {
return frontend.fs.nfs.add_nfs_file_handle_BANG_(handle_path,entry);
}
})),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.first(files),(function (dir_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(dir_handle.name,(function (dir_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
console.log("handle",file);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"path","path",-188191168),logseq.graph_parser.util.path_normalize(file.webkitRelativePath),new cljs.core.Keyword(null,"mtime","mtime",963165087),file.lastModified,new cljs.core.Keyword(null,"size","size",1098693007),file.size,new cljs.core.Keyword(null,"type","type",1174270348),file.handle.kind,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword("file","file","file/file",-1241327538),file,new cljs.core.Keyword("file","handle","file/handle",1544192618),file.handle], null));
}));
}));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var rpath = file.webkitRelativePath;
var ext = frontend.util.get_file_ext(rpath);
return ((clojure.string.blank_QMARK_(rpath)) || (((clojure.string.starts_with_QMARK_(rpath,".")) || (((clojure.string.starts_with_QMARK_(rpath,"logseq/bak")) || (((clojure.string.starts_with_QMARK_(rpath,"logseq/version-files")) || ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["org",null,"md",null,"excalidraw",null,"css",null,"edn",null], null), null),ext)))))))))));
}),cljs.core.next(files))),(function (files__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.all(files__$1),(function (files__$2){
return promesa.protocols._promise((function (){
frontend.fs.nfs.add_nfs_file_handle_BANG_(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),dir_handle);

frontend.idb.set_item_BANG_(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),dir_handle);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),dir_name,new cljs.core.Keyword(null,"files","files",-472457450),files__$2], null);
})()
);
}));
}));
}));
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,_options){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),(function (fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fpath)].join(''),(function (handle_path){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.fs.nfs.get_nfs_file_handle(handle_path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.idb.get_item(handle_path);
}
})(),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = handle;
if(cljs.core.truth_(and__5041__auto__)){
return handle.getFile();
} else {
return and__5041__auto__;
}
})(),(function (local_file){
return promesa.protocols._promise((function (){var and__5041__auto__ = local_file;
if(cljs.core.truth_(and__5041__auto__)){
return local_file.text();
} else {
return and__5041__auto__;
}
})());
}));
}));
})));
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2 = (function (this$,dir){
var self__ = this;
var this$__$1 = this;
return this$__$1.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2(null,dir);
}));

(frontend.fs.nfs.Nfs.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.nfs.Nfs.cljs$lang$type = true);

(frontend.fs.nfs.Nfs.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.nfs/Nfs",null,(1),null));
}));

(frontend.fs.nfs.Nfs.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.nfs/Nfs");
}));

/**
 * Positional factory function for frontend.fs.nfs/Nfs.
 */
frontend.fs.nfs.__GT_Nfs = (function frontend$fs$nfs$__GT_Nfs(){
return (new frontend.fs.nfs.Nfs(null,null,null));
});

/**
 * Factory function for frontend.fs.nfs/Nfs, taking a map of keywords to field values.
 */
frontend.fs.nfs.map__GT_Nfs = (function frontend$fs$nfs$map__GT_Nfs(G__84840){
var extmap__5382__auto__ = (function (){var G__84849 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__84840);
if(cljs.core.record_QMARK_(G__84840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84849);
} else {
return G__84849;
}
})();
return (new frontend.fs.nfs.Nfs(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.fs.nfs.js.map
