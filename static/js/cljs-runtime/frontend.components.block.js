goog.provide('frontend.components.block');
goog.scope(function(){
  frontend.components.block.goog$module$goog$object = goog.module.get('goog.object');
  frontend.components.block.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_QMARK_ !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_block !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_drag_to_block !== 'undefined')){
} else {
frontend.components.block._STAR_drag_to_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.block._STAR_move_to = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block.max_depth_of_links !== 'undefined')){
} else {
frontend.components.block.max_depth_of_links = (5);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_blocks_container_id !== 'undefined')){
} else {
frontend.components.block._STAR_blocks_container_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.components.block.remove_nils = (function frontend$components$block$remove_nils(col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
});
frontend.components.block.vec_cat = (function frontend$components$block$vec_cat(var_args){
var args__5772__auto__ = [];
var len__5766__auto___113701 = arguments.length;
var i__5767__auto___113702 = (0);
while(true){
if((i__5767__auto___113702 < len__5766__auto___113701)){
args__5772__auto__.push((arguments[i__5767__auto___113702]));

var G__113703 = (i__5767__auto___113702 + (1));
i__5767__auto___113702 = G__113703;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec(frontend.components.block.remove_nils(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,args)));
}));

(frontend.components.block.vec_cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.components.block.vec_cat.cljs$lang$applyTo = (function (seq112814){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq112814));
}));

frontend.components.block.__GT_elem = (function frontend$components$block$__GT_elem(var_args){
var G__112816 = arguments.length;
switch (G__112816) {
case 2:
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2 = (function (elem,items){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elem,null,items);
}));

(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3 = (function (elem,attrs,items){
var elem__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(elem);
if(cljs.core.truth_(attrs)){
return cljs.core.vec(cljs.core.cons(elem__$1,cljs.core.cons(attrs,cljs.core.seq(items))));
} else {
return cljs.core.vec(cljs.core.cons(elem__$1,cljs.core.seq(items)));
}
}));

(frontend.components.block.__GT_elem.cljs$lang$maxFixedArity = 3);

frontend.components.block.join_lines = (function frontend$components$block$join_lines(l){
return clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,l));
});
frontend.components.block.string_of_url = (function frontend$components$block$string_of_url(url){
try{if(((cljs.core.vector_QMARK_(url)) && ((cljs.core.count(url) === 2)))){
try{var url_0__112818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__112818 === "File")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return clojure.string.replace(clojure.string.replace(s,"file://",""),"file:","");
} else {
throw cljs.core.match.backtrack;

}
}catch (e112821){if((e112821 instanceof Error)){
var e__103681__auto__ = e112821;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{var url_0__112818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__112818 === "Complex")){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var map__112823 = m;
var map__112823__$1 = cljs.core.__destructure_map(map__112823);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112823__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112823__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file")){
return link;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e112822){if((e112822 instanceof Error)){
var e__103681__auto____$1 = e112822;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e112822;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e112821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e112820){if((e112820 instanceof Error)){
var e__103681__auto__ = e112820;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
} else {
throw e__103681__auto__;
}
} else {
throw e112820;

}
}});
frontend.components.block.get_file_absolute_path = (function frontend$components$block$get_file_absolute_path(config,path){
console.error("TODO: buggy path fn");

var path__$1 = clojure.string.replace(path,"file:","");
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
var current_file = (function (){var and__5041__auto__ = block_id;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__112825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__112825) : frontend.db.entity.call(null,G__112825));
})())));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(current_file)){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(current_file,/\//);
var parts_2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path__$1,/\//);
var current_dir = frontend.util.string_join_path(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),parts));
if(cljs.core.truth_((cljs.core.truth_(frontend.util.win32_QMARK_)?module$frontend$utils.win32(path__$1):frontend.util.starts_with_QMARK_(path__$1,"/")))){
return path__$1;
} else {
if((((!(frontend.util.starts_with_QMARK_(path__$1,"..")))) && ((!(frontend.util.starts_with_QMARK_(path__$1,".")))))){
return [current_dir,"/",path__$1].join('');
} else {
var parts__$1 = (function (){var acc = cljs.core.PersistentVector.EMPTY;
var parts__$1 = cljs.core.reverse(parts);
var col = cljs.core.reverse(parts_2);
while(true){
if(cljs.core.empty_QMARK_(col)){
return acc;
} else {
var vec__112830 = (function (){var G__112833 = cljs.core.first(col);
switch (G__112833) {
case "..":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts__$1),cljs.core.rest(parts__$1)], null);

break;
case ".":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",parts__$1], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(col),cljs.core.rest(parts__$1)], null);

}
})();
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112830,(0),null);
var parts__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112830,(1),null);
var G__113706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
var G__113707 = parts__$2;
var G__113708 = cljs.core.rest(col);
acc = G__113706;
parts__$1 = G__113707;
col = G__113708;
continue;
}
break;
}
})();
var parts__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__112824_SHARP_){
return clojure.string.blank_QMARK_(p1__112824_SHARP_);
}),parts__$1);
return frontend.util.string_join_path(cljs.core.reverse(parts__$2));

}
}
} else {
return null;
}
});
frontend.components.block.asset_loader = rum.core.lazy_build(rum.core.build_defcs,(function (state,src,content_fn){
var _ = frontend.state.sub_file_sync_state(frontend.state.get_current_file_sync_graph_uuid());
var exist_QMARK_ = cljs.core.deref(new cljs.core.Keyword("frontend.components.block","exist?","frontend.components.block/exist?",-666100050).cljs$core$IFn$_invoke$arity$1(state));
var loading_QMARK_ = cljs.core.deref(new cljs.core.Keyword("frontend.components.block","loading?","frontend.components.block/loading?",-807026662).cljs$core$IFn$_invoke$arity$1(state));
var asset_file_QMARK_ = new cljs.core.Keyword("frontend.components.block","asset-file?","frontend.components.block/asset-file?",-2055371462).cljs$core$IFn$_invoke$arity$1(state);
var sync_enabled_QMARK_ = cljs.core.boolean$(frontend.handler.file_sync.current_graph_sync_on_QMARK_());
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(src));
var img_QMARK_ = cljs.core.contains_QMARK_(logseq.graph_parser.config.img_formats(),ext);
var audio_QMARK_ = cljs.core.contains_QMARK_(frontend.config.audio_formats,ext);
var type = ((img_QMARK_)?"image":((audio_QMARK_)?"audio":"asset"
));
if((!(sync_enabled_QMARK_))){
return daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null)));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = asset_file_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = loading_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (exist_QMARK_ == null);
}
} else {
return and__5041__auto__;
}
})())){
var attrs112835 = frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Syncing %s ...",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0)));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs112835))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50"], null)], null),attrs112835], 0))):{'className':"text-sm opacity-50"}),((cljs.core.map_QMARK_(attrs112835))?null:[daiquiri.interpreter.interpret(attrs112835)]));
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(asset_file_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = exist_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__5041__auto__;
}
}
})())){
return daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null)));
} else {
return daiquiri.core.create_element("p",{'className':"text-error text-xs"},[(function (){var attrs112836 = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s not found!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.capitalize(type)], 0));
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs112836))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-80"], null)], null),attrs112836], 0))):{'className':"opacity-80"}),((cljs.core.map_QMARK_(attrs112836))?null:[daiquiri.interpreter.interpret(attrs112836)]));
})()]);
}
}
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.block","exist?","frontend.components.block/exist?",-666100050)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.block","loading?","frontend.components.block/loading?",-807026662)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var src = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.config.local_protocol_asset_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.file_sync.current_graph_sync_on_QMARK_();
} else {
return and__5041__auto__;
}
})())){
var _STAR_exist_QMARK_ = new cljs.core.Keyword("frontend.components.block","exist?","frontend.components.block/exist?",-666100050).cljs$core$IFn$_invoke$arity$1(state);
var asset_path = logseq.graph_parser.config.remove_asset_protocol(src);
var asset_path__$1 = frontend.fs.asset_path_normalize(asset_path);
if(clojure.string.blank_QMARK_(asset_path__$1)){
cljs.core.reset_BANG_(_STAR_exist_QMARK_,false);
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.asset_href_exists_QMARK_(asset_path__$1),(function (exist_QMARK_){
return promesa.protocols._promise(cljs.core.reset_BANG_(_STAR_exist_QMARK_,cljs.core.boolean$(exist_QMARK_)));
}));
}));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.block","asset-path","frontend.components.block/asset-path",1132771810),asset_path__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.block","asset-file?","frontend.components.block/asset-file?",-2055371462),true], 0));
} else {
return state;
}
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var src_113710 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var asset_file_QMARK__113711 = cljs.core.boolean$(new cljs.core.Keyword("frontend.components.block","asset-file?","frontend.components.block/asset-file?",-2055371462).cljs$core$IFn$_invoke$arity$1(state));
var sync_on_QMARK__113712 = frontend.handler.file_sync.current_graph_sync_on_QMARK_();
var _STAR_loading_QMARK__113713 = new cljs.core.Keyword("frontend.components.block","loading?","frontend.components.block/loading?",-807026662).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_exist_QMARK__113714 = new cljs.core.Keyword("frontend.components.block","exist?","frontend.components.block/exist?",-666100050).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((function (){var and__5041__auto__ = sync_on_QMARK__113712;
if(cljs.core.truth_(and__5041__auto__)){
return ((asset_file_QMARK__113711) && (cljs.core.deref(_STAR_exist_QMARK__113714) === false));
} else {
return and__5041__auto__;
}
})())){
var sync_state_113715 = frontend.state.get_file_sync_state.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_file_sync_graph_uuid());
var downloading_files_113716 = new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085).cljs$core$IFn$_invoke$arity$1(sync_state_113715);
var contain_url_QMARK__113717 = (function (){var and__5041__auto__ = cljs.core.seq(downloading_files_113716);
if(and__5041__auto__){
return cljs.core.some((function (p1__112834_SHARP_){
return clojure.string.ends_with_QMARK_(src_113710,p1__112834_SHARP_);
}),downloading_files_113716);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(cljs.core.deref(_STAR_loading_QMARK__113713));
if(and__5041__auto__){
return contain_url_QMARK__113717;
} else {
return and__5041__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_loading_QMARK__113713,true);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(_STAR_loading_QMARK__113713);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(contain_url_QMARK__113717);
} else {
return and__5041__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_exist_QMARK__113714,true);

cljs.core.reset_BANG_(_STAR_loading_QMARK__113713,false);
} else {
}
}
} else {
}

return state;
})], null)], null),"frontend.components.block/asset-loader");
frontend.components.block.open_lightbox = (function frontend$components$block$open_lightbox(e){
var images = document.querySelectorAll(".asset-container img");
var images__$1 = cljs.core.to_array(images);
var images__$2 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((images__$1).length),(1)))))?(function (){var image = e.target.closest(".asset-container");
var image__$1 = image.querySelector("img");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reverse(cljs.core.split_with(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([image__$1])),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__112837_SHARP_){
return p1__112837_SHARP_.y;
}),(function (p1__112838_SHARP_){
return p1__112838_SHARP_.x;
})),images__$1))));
})():images__$1);
var images__$3 = (function (){var iter__5520__auto__ = (function frontend$components$block$open_lightbox_$_iter__112839(s__112840){
return (new cljs.core.LazySeq(null,(function (){
var s__112840__$1 = s__112840;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__112840__$1);
if(temp__5804__auto__){
var s__112840__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__112840__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__112840__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__112842 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__112841 = (0);
while(true){
if((i__112841 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__112841);
cljs.core.chunk_append(b__112842,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null));

var G__113718 = (i__112841 + (1));
i__112841 = G__113718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__112842),frontend$components$block$open_lightbox_$_iter__112839(cljs.core.chunk_rest(s__112840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__112842),null);
}
} else {
var it = cljs.core.first(s__112840__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null),frontend$components$block$open_lightbox_$_iter__112839(cljs.core.rest(s__112840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(images__$2);
})();
if(cljs.core.seq(images__$3)){
return frontend.extensions.lightbox.preview_images_BANG_(images__$3);
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_resizing_image_QMARK_ !== 'undefined')){
} else {
frontend.components.block._STAR_resizing_image_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.block.resizable_image = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,title,src,metadata,full_text,local_QMARK_){
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","size","frontend.components.block/size",1026310526));
var breadcrumb_QMARK_ = new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363).cljs$core$IFn$_invoke$arity$1(config);
return daiquiri.interpreter.interpret((function (){var G__112849 = (function (){var G__112850 = ((((cljs.core.not(frontend.mobile.util.native_platform_QMARK_())) && (cljs.core.not(breadcrumb_QMARK_))))?(function (){var G__112852 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"resize image-resize",new cljs.core.Keyword(null,"onSizeChanged","onSizeChanged",171770512),(function (value){
if(((cljs.core.not(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))) && ((((!((cljs.core.deref(size) == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(size))))))){
cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,true);
} else {
}

return cljs.core.reset_BANG_(size,value);
}),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(size);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_);
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto___113719 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto___113719)){
var block_id_113720 = temp__5804__auto___113719;
var size_113721__$1 = cljs_bean.core.__GT_clj(cljs.core.deref(size));
frontend.handler.editor.resize_image_BANG_(block_id_113720,metadata,full_text,size_113721__$1);
} else {
}
} else {
}

if(cljs.core.truth_(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))){
return setTimeout((function (){
return cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,false);
}),(200));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
if(cljs.core.truth_(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))){
return frontend.util.stop(e);
} else {
return null;
}
})], null);
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.util.mobile_QMARK_());
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__112852,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata)], null));
} else {
return G__112852;
}
})():cljs.core.PersistentArrayMap.EMPTY);
var G__112851 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-container","div.asset-container",1221095823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"resize-asset-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.rounded-sm.relative","img.rounded-sm.relative",2026944242),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading","loading",-737050189),"lazy",new cljs.core.Keyword(null,"referrerPolicy","referrerPolicy",1008691405),"no-referrer",new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"title","title",636505583),title], null),metadata], 0))], null),(cljs.core.truth_(breadcrumb_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".asset-overlay",".asset-overlay",-504367719)], null),(function (){var image_src = frontend.fs.asset_path_normalize(src);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".asset-action-bar",".asset-action-bar",1833566886),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn.text-left","button.asset-action-btn.text-left",1372590924),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(local_QMARK_)?new cljs.core.Keyword("asset","show-in-folder","asset/show-in-folder",1236393619):new cljs.core.Keyword("asset","open-in-browser","asset/open-in-browser",-915076141))], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(local_QMARK_)){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileInFolder",image_src], 0));
} else {
return window.apis.openExternal(image_src);
}
})], null),image_src], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),((frontend.config.publishing_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn","button.asset-action-btn",-1412633723),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","delete","asset/delete",-1860190756)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
var confirm_fn = frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","confirm-delete","asset/confirm-delete",-559860835),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("text","image","text/image",-63229909)], 0)).toLocaleLowerCase()], 0)),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(cljs.core.truth_(local_QMARK_)?new cljs.core.Keyword("asset","physical-delete","asset/physical-delete",1598822051):""),new cljs.core.Keyword(null,"sub-checkbox?","sub-checkbox?",-671905753),local_QMARK_,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_e,p__112853){
var map__112854 = p__112853;
var map__112854__$1 = cljs.core.__destructure_map(map__112854);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112854__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var sub_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112854__$1,new cljs.core.Keyword(null,"sub-selected","sub-selected",-1251753428));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return frontend.handler.editor.delete_asset_of_block_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"local?","local?",-1422786101),local_QMARK_,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572),(function (){var and__5041__auto__ = sub_selected;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.first(sub_selected);
} else {
return and__5041__auto__;
}
})(),new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"full-text","full-text",1432444182),full_text], null));
})], null));
frontend.util.stop(e);

return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(confirm_fn);
} else {
return null;
}
})], null),frontend.ui.icon("trash")], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn","button.asset-action-btn",-1412633723),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","copy","asset/copy",-867708909)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.util.copy_image_to_clipboard(image_src),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));
}));
})], null),frontend.ui.icon("copy")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.asset-action-btn","button.asset-action-btn",-1412633723),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","maximize","asset/maximize",-20255358)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),frontend.util.stop,new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.block.open_lightbox], null),frontend.ui.icon("maximize")], null)], null)], null);
})()], null))], null);
return (frontend.ui.resize_consumer.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.resize_consumer.cljs$core$IFn$_invoke$arity$2(G__112850,G__112851) : frontend.ui.resize_consumer.call(null,G__112850,G__112851));
})();
return (frontend.ui.resize_provider.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.resize_provider.cljs$core$IFn$_invoke$arity$1(G__112849) : frontend.ui.resize_provider.call(null,G__112849));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.block","size","frontend.components.block/size",1026310526)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,false);

return state;
})], null)], null),"frontend.components.block/resizable-image");
frontend.components.block.audio_cp = rum.core.lazy_build(rum.core.build_defc,(function (src){
return daiquiri.core.create_element("audio",{'src':clojure.string.replace_first(src,logseq.graph_parser.config.asset_protocol,"file://"),'controls':true,'onTouchStart':(function (p1__112855_SHARP_){
return frontend.util.stop(p1__112855_SHARP_);
})},[]);
}),null,"frontend.components.block/audio-cp");
frontend.components.block.asset_link = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,title,href,metadata,full_text){
var src = new cljs.core.Keyword("frontend.components.block","src","frontend.components.block/src",807373780).cljs$core$IFn$_invoke$arity$1(state);
var granted_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),frontend.state.get_current_repo()], null));
var href__$1 = frontend.config.get_local_asset_absolute_path(href);
if(cljs.core.truth_((function (){var or__5043__auto__ = granted_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
}
})())){
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.make_asset_url(href__$1),(function (p1__112856_SHARP_){
return cljs.core.reset_BANG_(src,p1__112856_SHARP_);
}));
} else {
}

if(cljs.core.truth_(cljs.core.deref(src))){
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = frontend.util.get_file_ext(cljs.core.deref(src));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.get_file_ext(href__$1);
}
})());
var repo = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo);
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_dir),href__$1].join('');
var share_fn = (function (event){
frontend.util.stop(event);

if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
var vec__112857 = frontend.util.get_dir_and_basename(href__$1);
var rel_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112857,(0),null);
var basename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112857,(1),null);
var rel_dir__$1 = clojure.string.replace(rel_dir,/^\/+/,"");
var asset_url = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rel_dir__$1,basename], 0));
return frontend.mobile.intent.open_or_share_file(asset_url);
} else {
return null;
}
});
if(cljs.core.contains_QMARK_(frontend.config.audio_formats,ext)){
return frontend.components.block.asset_loader(cljs.core.deref(src),(function (){
return frontend.components.block.audio_cp(cljs.core.deref(src));
}));
} else {
if(cljs.core.contains_QMARK_(logseq.graph_parser.config.img_formats(),ext)){
return frontend.components.block.asset_loader(cljs.core.deref(src),(function (){
return frontend.components.block.resizable_image(config,title,cljs.core.deref(src),metadata,full_text,true);
}));
} else {
if(cljs.core.contains_QMARK_(logseq.graph_parser.config.text_formats(),ext)){
return daiquiri.core.create_element("a",{'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)),'onClick':(function (_event){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,path),(function (result){
return promesa.protocols._promise((frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,result) : frontend.db.set_file_content_BANG_.call(null,repo,path,result)));
}));
}));
}),'className':"asset-ref is-plaintext"},[daiquiri.interpreter.interpret(title)]);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"pdf","pdf",1586765132))){
return daiquiri.core.create_element("a",{'href':cljs.core.deref(src),'onClick':share_fn,'className':"asset-ref is-pdf"},[daiquiri.interpreter.interpret(title)]);
} else {
return daiquiri.core.create_element("a",{'href':cljs.core.deref(src),'onClick':share_fn,'className':"asset-ref is-doc"},[daiquiri.interpreter.interpret(title)]);

}
}
}
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.block","src","frontend.components.block/src",807373780))], null),"frontend.components.block/asset-link");
frontend.components.block.ar_url__GT_http_url = (function frontend$components$block$ar_url__GT_http_url(href){
return clojure.string.replace(href,/^ar:\/\//,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_arweave_gateway()),"/"].join(''));
});
frontend.components.block.image_link = (function frontend$components$block$image_link(config,url,href,label,metadata,full_text){
var metadata__$1 = ((clojure.string.blank_QMARK_(metadata))?null:logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(metadata));
var title = cljs.core.second(cljs.core.first(label));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),full_text], null),(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.config.local_asset_QMARK_(href);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())?frontend.components.block.asset_link(config,title,href,metadata__$1,full_text):(function (){var href__$1 = ((frontend.util.starts_with_QMARK_(href,"http"))?href:((frontend.util.starts_with_QMARK_(href,"ar"))?frontend.components.block.ar_url__GT_http_url(href):((frontend.config.publishing_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Embed_data",cljs.core.first(url)))?href:(cljs.core.truth_(frontend.handler.assets.check_alias_path_QMARK_(href))?frontend.handler.assets.normalize_asset_resource_url(href):frontend.components.block.get_file_absolute_path(config,href))
))));
return frontend.components.block.resizable_image(config,title,href__$1,metadata__$1,full_text,false);
})()));
});
frontend.components.block.timestamp_to_string = frontend.handler.export$.common.timestamp_to_string;
frontend.components.block.timestamp = (function frontend$components$block$timestamp(p__112860,kind){
var map__112861 = p__112860;
var map__112861__$1 = cljs.core.__destructure_map(map__112861);
var t = map__112861__$1;
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112861__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var _date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112861__$1,new cljs.core.Keyword(null,"_date","_date",-937395064));
var _time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112861__$1,new cljs.core.Keyword(null,"_time","_time",-1976647311));
var _repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112861__$1,new cljs.core.Keyword(null,"_repetition","_repetition",922325838));
var _wday = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112861__$1,new cljs.core.Keyword(null,"_wday","_wday",-1455464025));
var prefix = (function (){var G__112862 = kind;
switch (G__112862) {
case "Scheduled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "Deadline":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-calendar-times-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "Date":
return null;

break;
case "Closed":
return null;

break;
case "Started":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-clock-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "Start":
return "From: ";

break;
case "Stop":
return "To: ";

break;
default:
return null;

}
})();
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"Closed"))?"line-through":null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timestamp","span.timestamp",1207246744),(function (){var G__112863 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)], null);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__112863,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
} else {
return G__112863;
}
})(),prefix,(frontend.components.block.timestamp_to_string.cljs$core$IFn$_invoke$arity$1 ? frontend.components.block.timestamp_to_string.cljs$core$IFn$_invoke$arity$1(t) : frontend.components.block.timestamp_to_string.call(null,t))], null);
});
frontend.components.block.range = (function frontend$components$block$range(p__112864,stopped_QMARK_){
var map__112865 = p__112864;
var map__112865__$1 = cljs.core.__destructure_map(map__112865);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112865__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112865__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"timestamp-range",new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped_QMARK_], null),frontend.components.block.timestamp(start,"Start"),frontend.components.block.timestamp(stop,"Stop")], null);
});
frontend.components.block.open_page_ref = (function frontend$components$block$open_page_ref(e,page_name,redirect_page_name,page_name_in_block,contents_page_QMARK_,whiteboard_page_QMARK_){
frontend.util.stop(e);

if((!(frontend.util.right_click_QMARK_(e)))){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5804__auto___113723 = (function (){var G__112866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),redirect_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__112866) : frontend.db.entity.call(null,G__112866));
})();
if(cljs.core.truth_(temp__5804__auto___113723)){
var page_entity_113724 = temp__5804__auto___113723;
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity_113724),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.whiteboard.inside_portal_QMARK_(e.target);
} else {
return and__5041__auto__;
}
})())){
frontend.handler.whiteboard.add_new_block_portal_shape_BANG_(page_name,frontend.handler.whiteboard.closest_shape(e.target));
} else {
if(cljs.core.truth_(whiteboard_page_QMARK_)){
frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(redirect_page_name,page_name)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(redirect_page_name);
} else {
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),page_name_in_block], null));

}
}
}
}
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = contents_page_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return frontend.state.get_left_sidebar_open_QMARK_();
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.ui.close_left_sidebar_BANG_();
} else {
return null;
}
});
/**
 * The inner div of page reference component
 * 
 * page-name-in-block is the overridable name of the page (legacy)
 * 
 * All page-names are sanitized except page-name-in-block
 */
frontend.components.block.page_inner = rum.core.lazy_build(rum.core.build_defc,(function (config,page_name_in_block,page_name,redirect_page_name,page_entity,contents_page_QMARK_,children,html_export_QMARK_,label,whiteboard_page_QMARK_){
var vec__112867 = rum.core.use_state(false);
var mouse_down_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112867,(0),null);
var set_mouse_down_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112867,(1),null);
var tag_QMARK_ = new cljs.core.Keyword(null,"tag?","tag?",1714008252).cljs$core$IFn$_invoke$arity$1(config);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"whiteboard-page?","whiteboard-page?",1626270426),whiteboard_page_QMARK_);
var untitled_QMARK_ = frontend.db.model.untitled_page_QMARK_(page_name);
return daiquiri.core.create_element("a",{'tabIndex':"0",'data-ref':page_name,'draggable':true,'onDragStart':(function (e){
return frontend.handler.editor.block__GT_data_transfer_BANG_(page_name_in_block,e);
}),'onMouseDown':(function (){
return (set_mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_mouse_down_BANG_.call(null,true));
}),'onMouseUp':(function (e){
if(cljs.core.truth_(mouse_down_QMARK_)){
var redirect_page_name_113725__$1 = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = (page_entity == null);
if(and__5041__auto__){
return frontend.date.journal_title__GT_custom_format(page_name);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return redirect_page_name;
}
})();
var redirect_page_name_113726__$2 = clojure.string.lower_case(redirect_page_name_113725__$1);
frontend.components.block.open_page_ref(e,page_name,redirect_page_name_113726__$2,page_name_in_block,contents_page_QMARK_,whiteboard_page_QMARK_);

return (set_mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_mouse_down_BANG_.call(null,false));
} else {
return null;
}
}),'onKeyUp':(function (e){
if(cljs.core.truth_((function (){var and__5041__auto__ = e;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter");
} else {
return and__5041__auto__;
}
})())){
return frontend.components.block.open_page_ref(e,page_name,redirect_page_name,page_name_in_block,contents_page_QMARK_,whiteboard_page_QMARK_);
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__112870 = (cljs.core.truth_(tag_QMARK_)?"tag":"page-ref");
var G__112870__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"property?","property?",2060031741).cljs$core$IFn$_invoke$arity$1(config__$1))?[G__112870," page-property-key block-property"].join(''):G__112870);
if(cljs.core.truth_(untitled_QMARK_)){
return [G__112870__$1," opacity-50"].join('');
} else {
return G__112870__$1;
}
})()], null))},[((((cljs.core.coll_QMARK_(children)) && (cljs.core.seq(children))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$block$iter__112871(s__112872){
return (new cljs.core.LazySeq(null,(function (){
var s__112872__$1 = s__112872;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__112872__$1);
if(temp__5804__auto__){
var s__112872__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__112872__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__112872__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__112874 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__112873 = (0);
while(true){
if((i__112873 < size__5519__auto__)){
var child = cljs.core._nth(c__5518__auto__,i__112873);
cljs.core.chunk_append(b__112874,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),"Label"))?daiquiri.interpreter.interpret(cljs.core.last(child)):(function (){var map__112875 = cljs.core.last(child);
var map__112875__$1 = cljs.core.__destructure_map(map__112875);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112875__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var page_name__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return rum.core.with_key((function (){var G__112880 = html_export_QMARK_;
var G__112881 = page_name__$1;
var G__112882 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"children","children",-940561982),children__$1);
var G__112883 = null;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__112880,G__112881,G__112882,G__112883) : frontend.components.block.page_reference.call(null,G__112880,G__112881,G__112882,G__112883));
})(),page_name__$1);
})()));

var G__113727 = (i__112873 + (1));
i__112873 = G__113727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__112874),frontend$components$block$iter__112871(cljs.core.chunk_rest(s__112872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__112874),null);
}
} else {
var child = cljs.core.first(s__112872__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),"Label"))?daiquiri.interpreter.interpret(cljs.core.last(child)):(function (){var map__112884 = cljs.core.last(child);
var map__112884__$1 = cljs.core.__destructure_map(map__112884);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112884__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var page_name__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return rum.core.with_key((function (){var G__112889 = html_export_QMARK_;
var G__112890 = page_name__$1;
var G__112891 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"children","children",-940561982),children__$1);
var G__112892 = null;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__112889,G__112890,G__112891,G__112892) : frontend.components.block.page_reference.call(null,G__112889,G__112890,G__112891,G__112892));
})(),page_name__$1);
})()),frontend$components$block$iter__112871(cljs.core.rest(s__112872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(children);
})()):(cljs.core.truth_((function (){var and__5041__auto__ = label;
if(cljs.core.truth_(and__5041__auto__)){
return ((typeof label === 'string') && ((!(clojure.string.blank_QMARK_(label)))));
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(label):((cljs.core.coll_QMARK_(label))?daiquiri.interpreter.interpret(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,label) : frontend.components.block.map_inline.call(null,config__$1,label)))):(function (){var original_name = frontend.util.get_page_original_name(page_entity);
var s = (cljs.core.truth_(untitled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0)):(cljs.core.truth_(frontend.extensions.pdf.utils.hls_file_QMARK_(page_name))?frontend.extensions.pdf.utils.fix_local_asset_pagename(page_name):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(original_name),page_name_in_block))?page_name_in_block:(cljs.core.truth_(original_name)?frontend.util.trim_safe(original_name):frontend.util.trim_safe(page_name)
))));
var _ = (cljs.core.truth_(page_entity)?null:console.warn("page-inner's page-entity is nil, given page-name: ",page_name," page-name-in-block: ",page_name_in_block));
if(cljs.core.truth_(tag_QMARK_)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return daiquiri.interpreter.interpret(s);
}
})()
)))]);
}),null,"frontend.components.block/page-inner");
frontend.components.block.page_preview_trigger = rum.core.lazy_build(rum.core.build_defc,(function (p__112893,page_name){
var map__112894 = p__112893;
var map__112894__$1 = cljs.core.__destructure_map(map__112894);
var config = map__112894__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var tippy_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"tippy-position","tippy-position",765440303));
var tippy_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"tippy-distance","tippy-distance",1779929100));
var fixed_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var manual_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112894__$1,new cljs.core.Keyword(null,"manual?","manual?",1839586876));
var _STAR_tippy_ref = rum.core.create_ref();
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_name__$1);
var redirect_page_name = (function (){var or__5043__auto__ = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name__$1,new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name__$1;
}
})();
var page_original_name = frontend.db.model.get_page_original_name(redirect_page_name);
var _ = frontend.components.block.html_template = rum.core.lazy_build(rum.core.build_defc,(function (){
var _STAR_el_popup = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el_popup = rum.core.deref(_STAR_el_popup);
var cb = (function (e){
if(cljs.core.truth_(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__5041__auto__){
var temp__5804__auto__ = rum.core.deref(_STAR_tippy_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var tp = temp__5804__auto__;
return tp.hideTooltip();
} else {
return null;
}
} else {
return and__5041__auto__;
}
}
});
setTimeout((function (){
return el_popup.focus();
}));

el_popup.addEventListener("keyup",cb);

return (function (){
return el_popup.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(redirect_page_name)){
return daiquiri.core.create_element("div",{'ref':_STAR_el_popup,'tabIndex':(-1),'style':{'width':(600),'textAlign':"left",'fontWeight':(500),'maxHeight':(600),'paddingBottom':(64)},'className':"tippy-wrapper overflow-y-auto p-4 outline-none"},[((((typeof page_original_name === 'string') && (logseq.graph_parser.text.namespace_page_QMARK_(page_original_name))))?(function (){var attrs112919 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2.opacity-30","span.mx-2.opacity-30",541053943),frontend.db.model.ns_char], null),(function (){var iter__5520__auto__ = (function frontend$components$block$iter__112921(s__112922){
return (new cljs.core.LazySeq(null,(function (){
var s__112922__$1 = s__112922;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__112922__$1);
if(temp__5804__auto__){
var s__112922__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__112922__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__112922__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__112924 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__112923 = (0);
while(true){
if((i__112923 < size__5519__auto__)){
var namespace_page = cljs.core._nth(c__5518__auto__,i__112923);
cljs.core.chunk_append(b__112924,(cljs.core.truth_((function (){var and__5041__auto__ = typeof namespace_page === 'string';
if(and__5041__auto__){
return namespace_page;
} else {
return and__5041__auto__;
}
})())?(function (){var label = cljs.core.second(logseq.graph_parser.util.split_last(frontend.db.model.ns_char,namespace_page));
var G__112925 = false;
var G__112926 = namespace_page;
var G__112927 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null);
var G__112928 = label;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__112925,G__112926,G__112927,G__112928) : frontend.components.block.page_reference.call(null,G__112925,G__112926,G__112927,G__112928));
})():null));

var G__113728 = (i__112923 + (1));
i__112923 = G__113728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__112924),frontend$components$block$iter__112921(cljs.core.chunk_rest(s__112922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__112924),null);
}
} else {
var namespace_page = cljs.core.first(s__112922__$2);
return cljs.core.cons((cljs.core.truth_((function (){var and__5041__auto__ = typeof namespace_page === 'string';
if(and__5041__auto__){
return namespace_page;
} else {
return and__5041__auto__;
}
})())?(function (){var label = cljs.core.second(logseq.graph_parser.util.split_last(frontend.db.model.ns_char,namespace_page));
var G__112929 = false;
var G__112930 = namespace_page;
var G__112931 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null);
var G__112932 = label;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__112929,G__112930,G__112931,G__112932) : frontend.components.block.page_reference.call(null,G__112929,G__112930,G__112931,G__112932));
})():null),frontend$components$block$iter__112921(cljs.core.rest(s__112922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(logseq.graph_parser.util.split_namespace_pages(page_original_name));
})());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs112919))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["my-2"], null)], null),attrs112919], 0))):{'className':"my-2"}),((cljs.core.map_QMARK_(attrs112919))?null:[daiquiri.interpreter.interpret(attrs112919)]));
})():(function (){var attrs112920 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$1,redirect_page_name))?page_original_name:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.mr-2","span.text-sm.mr-2",231096639),"Alias:"], null),page_original_name], null));
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs112920))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-bold","text-lg"], null)], null),attrs112920], 0))):{'className':"font-bold text-lg"}),((cljs.core.map_QMARK_(attrs112920))?null:[daiquiri.interpreter.interpret(attrs112920)]));
})()),(function (){var page = (function (){var G__112933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(redirect_page_name) : frontend.util.page_name_sanity_lc.call(null,redirect_page_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__112933) : frontend.db.entity.call(null,G__112933));
})();
frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(redirect_page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));

var page_blocks_cp = frontend.state.get_page_blocks_cp();
var tldraw_preview = frontend.state.get_component(new cljs.core.Keyword("whiteboard","tldraw-preview","whiteboard/tldraw-preview",663400157));
if(cljs.core.truth_(whiteboard_page_QMARK_)){
return daiquiri.interpreter.interpret((tldraw_preview.cljs$core$IFn$_invoke$arity$1 ? tldraw_preview.cljs$core$IFn$_invoke$arity$1(page_name__$1) : tldraw_preview.call(null,page_name__$1)));
} else {
return daiquiri.interpreter.interpret((function (){var G__112937 = frontend.state.get_current_repo();
var G__112938 = page;
var G__112939 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null);
return (page_blocks_cp.cljs$core$IFn$_invoke$arity$3 ? page_blocks_cp.cljs$core$IFn$_invoke$arity$3(G__112937,G__112938,G__112939) : page_blocks_cp.call(null,G__112937,G__112938,G__112939));
})());
}
})()]);
} else {
return null;
}
}),null,"frontend.components.block/html-template");
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(manual_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return open_QMARK_;
}
})())){
return frontend.ui.tippy(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"in-editor?","in-editor?",323048069),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.Keyword(null,"html","html",-998796897)],[true,true,_STAR_tippy_ref,fixed_position_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preventOverflow","preventOverflow",276572465),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"boundariesElement","boundariesElement",-501812857),"viewport"], null)], null)], null),(function (){var or__5043__auto__ = tippy_position;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "top";
}
})(),(function (){var or__5043__auto__ = tippy_distance;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (10);
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),frontend.components.block.html_template]),children);
} else {
return daiquiri.interpreter.interpret(children);
}
}),null,"frontend.components.block/page-preview-trigger");
/**
 * Component for a page. `page` argument contains :block/name which can be (un)sanitized page name.
 * Keys for `config`:
 * - `:preview?`: Is this component under preview mode? (If true, `page-preview-trigger` won't be registered to this `page-cp`)
 */
frontend.components.block.page_cp = rum.core.lazy_build(rum.core.build_defc,(function (p__112940,page){
var map__112941 = p__112940;
var map__112941__$1 = cljs.core.__destructure_map(map__112941);
var config = map__112941__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112941__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
var redirect_page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112941__$1,new cljs.core.Keyword(null,"redirect-page-name","redirect-page-name",906009314));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112941__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var contents_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112941__$1,new cljs.core.Keyword(null,"contents-page?","contents-page?",2137383699));
var preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112941__$1,new cljs.core.Keyword(null,"preview?","preview?",590561578));
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5804__auto__)){
var page_name_in_block = temp__5804__auto__;
var page_name_in_block__$1 = logseq.graph_parser.util.remove_boundary_slashes(page_name_in_block);
var page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name_in_block__$1) : frontend.util.page_name_sanity_lc.call(null,page_name_in_block__$1));
var page_entity = (function (){var G__112943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__112943) : frontend.db.entity.call(null,G__112943));
})();
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_name);
var redirect_page_name__$1 = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5041__auto____$1)){
return redirect_page_name;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(config));
}
})();
var inner = frontend.components.block.page_inner(config,page_name_in_block__$1,page_name,redirect_page_name__$1,page_entity,contents_page_QMARK_,children,html_export_QMARK_,label,whiteboard_page_QMARK_);
var modal_QMARK_ = new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363).cljs$core$IFn$_invoke$arity$1(config))){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
} else {
if(((cljs.core.not(frontend.util.mobile_QMARK_())) && (((cljs.core.not(preview_QMARK_)) && (cljs.core.not(modal_QMARK_)))))){
return frontend.components.block.page_preview_trigger(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"children","children",-940561982),inner),page_name);
} else {
return inner;

}
}
} else {
return null;
}
})());
}),null,"frontend.components.block/page-cp");
frontend.components.block.asset_reference = rum.core.lazy_build(rum.core.build_defc,(function (config,title,path){
var repo = frontend.state.get_current_repo();
var real_path_url = (cljs.core.truth_(logseq.graph_parser.util.url_QMARK_(path))?path:((logseq.common.path.absolute_QMARK_(path))?path:frontend.handler.assets.resolve_asset_real_path_url(repo,path)
));
var ext_name = frontend.util.get_file_ext(path);
var title_or_path = ((typeof title === 'string')?title:((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : frontend.components.block.map_inline.call(null,config,title))):path
));
return daiquiri.core.create_element("div",{'data-ext':ext_name,'className':"asset-ref-wrap"},[((cljs.core.contains_QMARK_(frontend.config.video_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ext_name)))?daiquiri.core.create_element("video",{'src':real_path_url,'controls':true},[]):daiquiri.core.create_element("a",{'target':"_blank",'href':real_path_url,'className':"asset-ref"},[daiquiri.interpreter.interpret(title_or_path)])
)]);
}),null,"frontend.components.block/asset-reference");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block.excalidraw_loaded_QMARK_ !== 'undefined')){
} else {
frontend.components.block.excalidraw_loaded_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.block.excalidraw = rum.core.lazy_build(rum.core.build_defc,(function (file,block_uuid){
var loaded_QMARK_ = rum.core.react(frontend.components.block.excalidraw_loaded_QMARK_);
var draw_component = (cljs.core.truth_(loaded_QMARK_)?(((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.excalidraw !== 'undefined') && (typeof frontend.extensions.excalidraw.draw !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.excalidraw.draw;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.excalidraw","draw","frontend.extensions.excalidraw/draw",-213308303,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null):null);
if(cljs.core.truth_(draw_component)){
return daiquiri.interpreter.interpret((function (){var G__112945 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid], null);
return (draw_component.cljs$core$IFn$_invoke$arity$1 ? draw_component.cljs$core$IFn$_invoke$arity$1(G__112945) : draw_component.call(null,G__112945));
})());
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.components.block.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.block.excalidraw_loaded_QMARK_,true));
}));
}));

return state;
})], null)], null),"frontend.components.block/excalidraw");
/**
 * Component for page reference
 */
frontend.components.block.page_reference = rum.core.lazy_build(rum.core.build_defc,(function (html_export_QMARK_,s,p__112946,label){
var map__112947 = p__112946;
var map__112947__$1 = cljs.core.__destructure_map(map__112947);
var config = map__112947__$1;
var nested_link_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112947__$1,new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__112947__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
var contents_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("contents",clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
if(clojure.string.ends_with_QMARK_(s,".excalidraw")){
return daiquiri.core.create_element("div",{'onClick':(function (e){
return e.stopPropagation();
}),'className':"draw"},[frontend.components.block.excalidraw(s,block_uuid)]);
} else {
return daiquiri.core.create_element("span",{'data-ref':s,'className':"page-reference"},[(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = show_brackets_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return nested_link_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(html_export_QMARK_)) && ((!(contents_page_QMARK_))));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("span",{'className':"text-gray-500 bracket"},[logseq.graph_parser.util.page_ref.left_brackets]):null),(function (){var s__$1 = clojure.string.trim(s);
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"label","label",1718410804),frontend.format.mldoc.plain__GT_text(label),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"contents-page?","contents-page?",2137383699),contents_page_QMARK_], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),s__$1], null));
})(),(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = show_brackets_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return nested_link_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(html_export_QMARK_)) && ((!(contents_page_QMARK_))));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("span",{'className':"text-gray-500 bracket"},[logseq.graph_parser.util.page_ref.right_brackets]):null)]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/page-reference");
frontend.components.block.latex_environment_content = (function frontend$components$block$latex_environment_content(name,option,content){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(name),"equation")){
return content;
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\\begin%s\n%s\\end{%s}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option)].join(''),content,name], 0));
}
});
frontend.components.block.edit_parent_block = (function frontend$components$block$edit_parent_block(e,config){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return null;
} else {
e.stopPropagation();

var G__112948 = config;
var G__112949 = new cljs.core.Keyword(null,"max","max",61366548);
var G__112950 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__112948,G__112949,G__112950) : frontend.handler.editor.edit_block_BANG_.call(null,G__112948,G__112949,G__112950));
}
});
frontend.components.block.block_embed = rum.core.lazy_build(rum.core.build_defc,(function (config,uuid){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var G__112958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__112958) : frontend.db.entity.call(null,G__112958));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var blocks = (function (){var G__112959 = frontend.state.get_current_repo();
var G__112960 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__112961 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__112959,G__112960,G__112961) : frontend.db.get_paginated_blocks.call(null,G__112959,G__112960,G__112961));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-level.embed-block.bg-base-2","div.color-level.embed-block.bg-base-2",1638223737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (p1__112951_SHARP_){
return frontend.components.block.edit_parent_block(p1__112951_SHARP_,config);
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.pt-1.pb-2","div.px-3.pt-1.pb-2",1111501289),(function (){var G__112962 = blocks;
var G__112963 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"embed-id","embed-id",717000009),uuid,new cljs.core.Keyword(null,"embed?","embed?",-922305920),true,new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"ref?","ref?",1932693720),false], 0));
return (frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2(G__112962,G__112963) : frontend.components.block.blocks_container.call(null,G__112962,G__112963));
})()], null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/block-embed");
frontend.components.block.page_embed = rum.core.lazy_build(rum.core.build_defc,(function (config,page_name){
var page_name__$1 = (function (){var G__112966 = clojure.string.trim(page_name);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__112966) : frontend.util.page_name_sanity_lc.call(null,G__112966));
})();
var current_page = frontend.state.get_current_page();
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page_name__$1);
return daiquiri.core.create_element("div",{'onDoubleClick':(function (p1__112964_SHARP_){
return frontend.components.block.edit_parent_block(p1__112964_SHARP_,config);
}),'onMouseDown':(function (p1__112965_SHARP_){
return p1__112965_SHARP_.stopPropagation();
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color-level","embed","embed-page","bg-base-2",(cljs.core.truth_(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config))?"in-sidebar":null)], null))},[daiquiri.core.create_element("section",{'className':"flex items-center p-1 embed-header"},[(function (){var attrs112967 = frontend.components.svg.page;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs112967))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-3"], null)], null),attrs112967], 0))):{'className':"mr-3"}),((cljs.core.map_QMARK_(attrs112967))?null:[daiquiri.interpreter.interpret(attrs112967)]));
})(),frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null))]),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__112968 = (function (){var or__5043__auto__ = current_page;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__112968) : frontend.util.page_name_sanity_lc.call(null,G__112968));
})(),page_name__$1)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__112969 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"id","id",-1388402092),"");
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__112969) : frontend.util.page_name_sanity_lc.call(null,G__112969));
})(),page_name__$1))))?(cljs.core.truth_(whiteboard_page_QMARK_)?daiquiri.interpreter.interpret((function (){var fexpr__112971 = frontend.state.get_component(new cljs.core.Keyword("whiteboard","tldraw-preview","whiteboard/tldraw-preview",663400157));
return (fexpr__112971.cljs$core$IFn$_invoke$arity$1 ? fexpr__112971.cljs$core$IFn$_invoke$arity$1(page_name__$1) : fexpr__112971.call(null,page_name__$1));
})()):(function (){var page = frontend.db.model.get_page(page_name__$1);
var blocks = (function (){var G__112972 = frontend.state.get_current_repo();
var G__112973 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2(G__112972,G__112973) : frontend.db.get_paginated_blocks.call(null,G__112972,G__112973));
})();
return daiquiri.interpreter.interpret((function (){var G__112976 = blocks;
var G__112977 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),page_name__$1,new cljs.core.Keyword(null,"embed?","embed?",-922305920),true,new cljs.core.Keyword(null,"page-embed?","page-embed?",-1714518279),true,new cljs.core.Keyword(null,"ref?","ref?",1932693720),false], 0));
return (frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2(G__112976,G__112977) : frontend.components.block.blocks_container.call(null,G__112976,G__112977));
})());
})()):null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/page-embed");
frontend.components.block.get_label_text = (function frontend$components$block$get_label_text(label){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(label))) && (typeof cljs.core.last(cljs.core.first(label)) === 'string'))){
return logseq.graph_parser.util.safe_decode_uri_component(cljs.core.last(cljs.core.first(label)));
} else {
return null;
}
});
frontend.components.block.get_page = (function frontend$components$block$get_page(label){
var temp__5804__auto__ = frontend.components.block.get_label_text(label);
if(cljs.core.truth_(temp__5804__auto__)){
var label_text = temp__5804__auto__;
var G__112978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(label_text) : frontend.util.page_name_sanity_lc.call(null,label_text))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__112978) : frontend.db.entity.call(null,G__112978));
} else {
return null;
}
});
frontend.components.block.macro__GT_text = (function frontend$components$block$macro__GT_text(name,arguments$){
if(((cljs.core.seq(arguments$)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arguments$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["null"], null))))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{%s %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$)], 0));
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{%s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
}
});
frontend.components.block.block_reference = rum.core.lazy_build(rum.core.build_defc,(function (config,id,label){
return daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = cljs.core.parse_uuid(id);
if(cljs.core.truth_(temp__5802__auto__)){
var block_id = temp__5802__auto__;
var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__112999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__112999) : frontend.db.pull.call(null,G__112999));
})());
var block = (cljs.core.truth_(db_id)?(frontend.db.sub_block.cljs$core$IFn$_invoke$arity$1 ? frontend.db.sub_block.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.sub_block.call(null,db_id)):null);
var block_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"ls-type","ls-type",1383834313)], null)));
var hl_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"hl-type","hl-type",992471876)], null));
var repo = frontend.state.get_current_repo();
var stop_inner_events_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938));
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5041__auto__;
}
})())){
var title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192),(function (){var G__113000 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stop-events?","stop-events?",-151471572),stop_inner_events_QMARK_], 0));
var G__113001 = block;
var G__113002 = null;
var G__113003 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var G__113004 = new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config);
var G__113005 = false;
return (frontend.components.block.block_content.cljs$core$IFn$_invoke$arity$6 ? frontend.components.block.block_content.cljs$core$IFn$_invoke$arity$6(G__113000,G__113001,G__113002,G__113003,G__113004,G__113005) : frontend.components.block.block_content.call(null,G__113000,G__113001,G__113002,G__113003,G__113004,G__113005));
})()], null);
var inner = (cljs.core.truth_(label)?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label))):title);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-ref-wrap.inline","div.block-ref-wrap.inline",-1001160225),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),cljs.core.name((function (){var or__5043__auto__ = block_type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()),new cljs.core.Keyword(null,"data-hl-type","data-hl-type",890635169),hl_type,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),block_id], null));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.components.block.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(e.target.closest(".blank"));
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.util.right_click_QMARK_(e)));
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.whiteboard.inside_portal_QMARK_(e.target);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.whiteboard.add_new_block_portal_shape_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),frontend.handler.whiteboard.closest_shape(e.target));
} else {
var block_type__$1 = block_type;
var ocr_113006 = frontend.util.electron_QMARK_();
try{if(cljs.core.keyword_identical_QMARK_(block_type__$1,new cljs.core.Keyword(null,"annotation","annotation",-344661666))){
try{if((ocr_113006 === true)){
return frontend.extensions.pdf.assets.open_block_ref_BANG_(block);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113012){if((e113012 instanceof Error)){
var e__103681__auto__ = e113012;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e113012;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113009){if((e113009 instanceof Error)){
var e__103681__auto__ = e113009;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(block_type__$1,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938))){
try{if((ocr_113006 === true)){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113011){if((e113011 instanceof Error)){
var e__103681__auto____$1 = e113011;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113010){if((e113010 instanceof Error)){
var e__103681__auto____$1 = e113010;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);
} else {
throw e__103681__auto____$1;
}
} else {
throw e113010;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113009;

}
}
}
}
} else {
return null;
}
}
})], null),((((cljs.core.not(frontend.util.mobile_QMARK_())) && (((cljs.core.not(new cljs.core.Keyword(null,"preview?","preview?",590561578).cljs$core$IFn$_invoke$arity$1(config))) && (((cljs.core.not(new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))) && ((block_type == null))))))))?frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tippy-wrapper.overflow-y-auto.p-4","div.tippy-wrapper.overflow-y-auto.p-4",-831405813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(735),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(600)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__113013 = config;
var G__113014 = repo;
var G__113015 = block_id;
var G__113016 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),true], null);
return (frontend.components.block.breadcrumb.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.breadcrumb.cljs$core$IFn$_invoke$arity$4(G__113013,G__113014,G__113015,G__113016) : frontend.components.block.breadcrumb.call(null,G__113013,G__113014,G__113015,G__113016));
})(),(function (){var G__113017 = (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,block_id) : frontend.db.get_block_and_children.call(null,repo,block_id));
var G__113018 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preview?","preview?",590561578),true], 0));
return (frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2(G__113017,G__113018) : frontend.components.block.blocks_container.call(null,G__113017,G__113018));
})()], null)], null);
}),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"in-editor?","in-editor?",323048069),true,new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null)], null),inner):inner)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning.mr-1","span.warning.mr-1",1091749305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Block ref invalid"], null),logseq.graph_parser.util.block_ref.__GT_block_ref(id)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning.mr-1","span.warning.mr-1",1091749305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Block ref invalid"], null),logseq.graph_parser.util.block_ref.__GT_block_ref(id)], null);
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/block-reference");
frontend.components.block.inline_text = (function frontend$components$block$inline_text(var_args){
var G__113020 = arguments.length;
switch (G__113020) {
case 2:
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2 = (function (format,v){
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,format,v);
}));

(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3 = (function (config,format,v){
if(typeof v === 'string'){
var inline_list = logseq.graph_parser.mldoc.inline__GT_edn(v,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline.mr-1","div.inline.mr-1",1595393315),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,inline_list) : frontend.components.block.map_inline.call(null,config,inline_list))], null);
} else {
return null;
}
}));

(frontend.components.block.inline_text.cljs$lang$maxFixedArity = 3);

frontend.components.block.render_macro = (function frontend$components$block$render_macro(config,name,arguments$,macro_content,format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.macro","div.macro",-2084098642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-macro-name","data-macro-name",548814604),name], null),(cljs.core.truth_(macro_content)?(function (){var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.mldoc.__GT_edn(macro_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var paragraph_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ast))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.ffirst(ast))));
if((((!(paragraph_QMARK_))) && (frontend.format.mldoc.block_with_title_QMARK_(cljs.core.ffirst(ast))))){
var G__113021 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","format","block/format",-1212045901),format);
var G__113022 = ast;
return (frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(G__113021,G__113022) : frontend.components.block.markup_elements_cp.call(null,G__113021,G__113022));
} else {
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(config,format,macro_content);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),["Unsupported macro name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),frontend.components.block.macro__GT_text(name,arguments$)], null))], null);
});
frontend.components.block.nested_link = rum.core.lazy_build(rum.core.build_defc,(function (config,html_export_QMARK_,link){
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var map__113024 = link;
var map__113024__$1 = cljs.core.__destructure_map(map__113024);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113024__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs113023 = ((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),logseq.graph_parser.util.page_ref.left_brackets], null):null);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs113023))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-reference","nested"], null)], null),attrs113023], 0))):{'className':"page-reference nested"}),((cljs.core.map_QMARK_(attrs113023))?[(function (){var page_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"children","children",-940561982),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
})(),((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?daiquiri.core.create_element("span",{'className':"text-gray-500"},[logseq.graph_parser.util.page_ref.right_brackets]):null)]:[daiquiri.interpreter.interpret(attrs113023),(function (){var page_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"children","children",-940561982),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
})(),((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?daiquiri.core.create_element("span",{'className':"text-gray-500"},[logseq.graph_parser.util.page_ref.right_brackets]):null)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/nested-link");
frontend.components.block.show_link_QMARK_ = (function frontend$components$block$show_link_QMARK_(config,metadata,s,full_text){
var media_formats = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,frontend.config.media_formats));
var metadata_show = new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(metadata));
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null));
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format);
if(and__5041__auto__){
var or__5043__auto__ = (function (){var and__5041__auto____$1 = (metadata_show == null);
if(and__5041__auto____$1){
var or__5043__auto__ = logseq.graph_parser.config.local_asset_QMARK_(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.text.media_link_QMARK_(media_formats,s);
}
} else {
return and__5041__auto____$1;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.boolean$(metadata_show) === true;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = clojure.string.starts_with_QMARK_(clojure.string.triml(full_text),"!");
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto__ = ((clojure.string.starts_with_QMARK_(full_text,"http://")) || (clojure.string.starts_with_QMARK_(full_text,"https://")));
if(and__5041__auto__){
return frontend.util.text.media_link_QMARK_(media_formats,s);
} else {
return and__5041__auto__;
}
}
}
});
frontend.components.block.relative_assets_path__GT_absolute_path = (function frontend$components$block$relative_assets_path__GT_absolute_path(path){
if(logseq.common.path.protocol_url_QMARK_(path)){
console.error("BUG: relative-assets-path->absolute-path called with protocol url",path);
} else {
}

if(((logseq.common.path.absolute_QMARK_(path)) || (logseq.common.path.protocol_url_QMARK_(path)))){
return path;
} else {
return frontend.util.node_path.join(frontend.config.get_repo_dir(frontend.state.get_current_repo()),frontend.config.get_local_asset_absolute_path(path));
}
});
frontend.components.block.audio_link = rum.core.lazy_build(rum.core.build_defc,(function (config,url,href,_label,metadata,full_text){
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.config.local_asset_QMARK_(href);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())){
return frontend.components.block.asset_link(config,null,href,metadata,full_text);
} else {
var href__$1 = ((frontend.util.starts_with_QMARK_(href,"http"))?href:((frontend.util.starts_with_QMARK_(href,"ar"))?frontend.components.block.ar_url__GT_http_url(href):((frontend.config.publishing_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Embed_data",cljs.core.first(url)))?href:(cljs.core.truth_(frontend.handler.assets.check_alias_path_QMARK_(href))?frontend.handler.assets.resolve_asset_real_path_url(frontend.state.get_current_repo(),href):frontend.components.block.get_file_absolute_path(config,href))
))));
return frontend.components.block.audio_cp(href__$1);
}
}),null,"frontend.components.block/audio-link");
frontend.components.block.media_link = (function frontend$components$block$media_link(config,url,s,label,metadata,full_text){
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(s));
var label_text = frontend.components.block.get_label_text(label);
if(cljs.core.contains_QMARK_(frontend.config.audio_formats,ext)){
return frontend.components.block.audio_link(config,url,s,label,metadata,full_text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"pdf","pdf",1586765132))){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref.is-pdf","a.asset-ref.is-pdf",-297856376),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-href","data-href",299087184),s,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5804__auto__ = (function (){var G__113026 = e.target;
var G__113026__$1 = (((G__113026 == null))?null:G__113026.dataset);
if((G__113026__$1 == null)){
return null;
} else {
return G__113026__$1.href;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.extensions.pdf.assets.inflate_asset(s__$1);
if(cljs.core.truth_(temp__5804__auto____$1)){
var current = temp__5804__auto____$1;
frontend.state.set_current_pdf_BANG_(current);

return frontend.util.stop(e);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__113025_SHARP_){
return frontend.components.block.goog$module$goog$object.get(p1__113025_SHARP_,"dataTransfer").setData("file",s);
})], null),(function (){var or__5043__auto__ = label_text;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
}
})()], null);
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.components.block.asset_link(config,label_text,s,metadata,full_text);
} else {
return null;
}
}
} else {
if(cljs.core.contains_QMARK_(frontend.config.doc_formats,ext)){
return frontend.components.block.asset_link(config,label_text,s,metadata,full_text);
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"webm","webm",-1239807004),null,new cljs.core.Keyword(null,"mp4","mp4",1038217575),null,new cljs.core.Keyword(null,"mov","mov",605355799),null], null), null),ext)))){
return frontend.components.block.image_link(config,url,s,label,metadata,full_text);
} else {
return frontend.components.block.asset_reference(config,label,s);

}
}
}
}
});
frontend.components.block.search_link_cp = (function frontend$components$block$search_link_cp(config,url,s,label,title,metadata,full_text){
if(clojure.string.blank_QMARK_(s)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid link"], null),full_text], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(s))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((function (){var G__113027 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1(G__113027) : frontend.format.mldoc.anchorLink.call(null,G__113027));
})());
})], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(s))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.last(s))))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((function (){var G__113028 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1(G__113028) : frontend.format.mldoc.anchorLink.call(null,G__113028));
})());
})], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
if(logseq.graph_parser.util.block_ref.block_ref_QMARK_(s)){
var id = logseq.graph_parser.util.block_ref.get_block_ref_id(s);
return frontend.components.block.block_reference(config,id,label);
} else {
if((!(clojure.string.includes_QMARK_(s,".")))){
return frontend.components.block.page_reference(new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config),s,config,label);
} else {
if(logseq.common.path.protocol_url_QMARK_(s)){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),s,new cljs.core.Keyword(null,"data-href","data-href",299087184),s,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(config,metadata,s,full_text))){
return frontend.components.block.media_link(config,url,s,label,metadata,full_text);
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var path = ((clojure.string.starts_with_QMARK_(s,"file://"))?clojure.string.replace(s,"file://",""):((clojure.string.starts_with_QMARK_(s,"/"))?s:frontend.components.block.relative_assets_path__GT_absolute_path(s)
));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var G__113029 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"data-href","data-href",299087184),path,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113029,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__113029;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
return frontend.components.block.page_reference(new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config),s,config,label);

}
}
}
}
}
}
}
}
});
frontend.components.block.link_cp = (function frontend$components$block$link_cp(config,html_export_QMARK_,link){
var map__113030 = link;
var map__113030__$1 = cljs.core.__destructure_map(map__113030);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113030__$1,new cljs.core.Keyword(null,"url","url",276297046));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113030__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113030__$1,new cljs.core.Keyword(null,"title","title",636505583));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113030__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113030__$1,new cljs.core.Keyword(null,"full_text","full_text",1634289075));
try{if(((cljs.core.vector_QMARK_(url)) && ((cljs.core.count(url) === 2)))){
try{var url_0__113032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__113032 === "Block_ref")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var label_STAR_ = ((cljs.core.seq(frontend.format.mldoc.plain__GT_text(label)))?label:null);
var map__113048 = config;
var map__113048__$1 = cljs.core.__destructure_map(map__113048);
var link_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113048__$1,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026));
var link_depth__$1 = (function (){var or__5043__auto__ = link_depth;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
if((link_depth__$1 > frontend.components.block.max_depth_of_links)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-sm","p.warning.text-sm",37937796),"Block ref nesting is too deep"], null);
} else {
return frontend.components.block.block_reference(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"reference?","reference?",983881698),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link-depth","link-depth",-293752026),(link_depth__$1 + (1)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], 0)),id,label_STAR_);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113044){if((e113044 instanceof Error)){
var e__103681__auto__ = e113044;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{var url_0__113032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__113032 === "Page_ref")){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.components.block.show_link_QMARK_(config,null,page,page);
if(cljs.core.truth_(and__5041__auto____$1)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["mp4",null,"webm",null,"ogg",null,"pdf",null], null), null),frontend.util.get_file_ext(page))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.components.block.image_link(config,url,page,null,metadata,full_text);
} else {
var label_STAR_ = ((cljs.core.seq(frontend.format.mldoc.plain__GT_text(label)))?label:null);
if(((typeof page === 'string') && (clojure.string.blank_QMARK_(page)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),logseq.graph_parser.util.page_ref.__GT_page_ref(page)], null);
} else {
return frontend.components.block.page_reference(new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config),page,config,label_STAR_);
}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113045){if((e113045 instanceof Error)){
var e__103681__auto____$1 = e113045;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
try{var url_0__113032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__113032 === "Embed_data")){
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return frontend.components.block.image_link(config,url,src,null,metadata,full_text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113046){if((e113046 instanceof Error)){
var e__103681__auto____$2 = e113046;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{var url_0__113032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__113032 === "Search")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return frontend.components.block.search_link_cp(config,url,s,label,title,metadata,full_text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113047){if((e113047 instanceof Error)){
var e__103681__auto____$3 = e113047;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$3;
}
} else {
throw e113047;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e113046;

}
}} else {
throw e__103681__auto____$1;
}
} else {
throw e113045;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113034){if((e113034 instanceof Error)){
var e__103681__auto__ = e113034;
if((e__103681__auto__ === cljs.core.match.backtrack)){
var href = frontend.components.block.string_of_url(url);
var vec__113035 = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Complex",cljs.core.first(url));
if(and__5041__auto__){
return url;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("File",cljs.core.first(url));
if(and__5041__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["file",cljs.core.second(url)], null);
} else {
return and__5041__auto__;
}
}
})();
var protocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113035,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113035,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null)),new cljs.core.Keyword(null,"org","org",1495985))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Complex",protocol)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(path)),"id")) && (((typeof new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path) === 'string') && (frontend.util.uuid_string_QMARK_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path))))))))))){
var id = cljs.core.uuid(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path));
var block = (function (){var G__113038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113038) : frontend.db.entity.call(null,G__113038));
})();
if(cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))){
var page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
return frontend.components.block.page_reference(html_export_QMARK_,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page),config,label);
} else {
return frontend.components.block.block_reference(config,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path),label);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file")){
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(config,metadata,href,full_text))){
return frontend.components.block.media_link(config,url,href,label,metadata,full_text);
} else {
var redirect_page_name = ((typeof path === 'string')?logseq.graph_parser.text.get_page_name(path):null);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"redirect-page-name","redirect-page-name",906009314),redirect_page_name);
var label_text = frontend.components.block.get_label_text(label);
var page = ((clojure.string.blank_QMARK_(label_text))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__113039 = clojure.string.replace(href,"file:","");
var G__113040 = false;
return (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$2(G__113039,G__113040) : frontend.db.get_file_page.call(null,G__113039,G__113040));
})()], null):frontend.components.block.get_page(label));
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
if(cljs.core.truth_((function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
var temp__5804__auto__ = frontend.util.get_file_ext(href);
if(cljs.core.truth_(temp__5804__auto__)){
var ext = temp__5804__auto__;
return logseq.graph_parser.config.mldoc_support_QMARK_(ext);
} else {
return null;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-reference","span.page-reference",390731266),((show_brackets_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),logseq.graph_parser.util.page_ref.left_brackets], null):null),frontend.components.block.page_cp(config__$1,page),((show_brackets_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),logseq.graph_parser.util.page_ref.right_brackets], null):null)], null);
} else {
var href_STAR_ = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.block.relative_assets_path__GT_absolute_path(href):href);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var G__113041 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([href_STAR_], 0)),new cljs.core.Keyword(null,"data-href","data-href",299087184),href_STAR_,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113041,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__113041;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,label) : frontend.components.block.map_inline.call(null,config__$1,label)));
}
}
} else {
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(config,metadata,href,full_text))){
return frontend.components.block.media_link(config,url,href,label,metadata,full_text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"ar")){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a.external-link","a.external-link",-654902016),(function (){var G__113042 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),frontend.components.block.ar_url__GT_http_url(href),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113042,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__113042;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a.external-link","a.external-link",-654902016),(function (){var G__113043 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113043,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__113043;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));

}
}
}
}
} else {
throw e__103681__auto__;
}
} else {
throw e113034;

}
}});

frontend.components.block.wrap_query_components = (function frontend$components$block$wrap_query_components(config){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"->hiccup","->hiccup",1204690951),frontend.components.block.__GT_hiccup,new cljs.core.Keyword(null,"->elem","->elem",-260360654),frontend.components.block.__GT_elem,new cljs.core.Keyword(null,"page-cp","page-cp",1066562595),frontend.components.block.page_cp,new cljs.core.Keyword(null,"inline-text","inline-text",910915394),frontend.components.block.inline_text,new cljs.core.Keyword(null,"map-inline","map-inline",-1498071144),frontend.components.block.map_inline,new cljs.core.Keyword(null,"inline","inline",1399884222),frontend.components.block.inline], null)], 0));
});
frontend.components.block.macro_query_cp = (function frontend$components$block$macro_query_cp(config,arguments$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dsl-query.pr-3.sm:pr-0","div.dsl-query.pr-3.sm:pr-0",2079647767),(function (){var query = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$));
return frontend.components.query.custom_query(frontend.components.block.wrap_query_components(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662),true)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"builder","builder",-2055262005),frontend.components.query.builder.builder(query,config),new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
})()], null);
});
frontend.components.block.macro_function_cp = (function frontend$components$block$macro_function_cp(config,arguments$){
var or__5043__auto__ = (function (){var G__113049 = new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config);
var G__113049__$1 = (((G__113049 == null))?null:rum.core.react(G__113049));
if((G__113049__$1 == null)){
return null;
} else {
return frontend.components.block.macros.function_macro(G__113049__$1,arguments$);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{function %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$)], 0))], null);
}
});
frontend.components.block.macro_embed_cp = (function frontend$components$block$macro_embed_cp(config,arguments$){
var a = cljs.core.first(arguments$);
var map__113050 = config;
var map__113050__$1 = cljs.core.__destructure_map(map__113050);
var link_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113050__$1,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026));
var link_depth__$1 = (function (){var or__5043__auto__ = link_depth;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
if((a == null)){
return null;
} else {
if((link_depth__$1 > frontend.components.block.max_depth_of_links)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-sm","p.warning.text-sm",37937796),"Embed depth is too deep"], null);
} else {
if(logseq.graph_parser.util.page_ref.page_ref_QMARK_(a)){
var page_name = logseq.graph_parser.text.get_page_name(a);
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
return frontend.components.block.page_embed(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026),(link_depth__$1 + (1))),page_name);
}
} else {
if(logseq.graph_parser.util.block_ref.string_block_ref_QMARK_(a)){
var temp__5804__auto__ = clojure.string.trim(logseq.graph_parser.util.block_ref.get_string_block_ref_id(a));
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var G__113051 = s;
if((G__113051 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__113051);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return frontend.components.block.block_embed(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026),(link_depth__$1 + (1))),id);
} else {
return null;
}
} else {
return null;
}
} else {
return null;

}
}
}
}
});
frontend.components.block.macro_vimeo_cp = (function frontend$components$block$macro_vimeo_cp(_config,arguments$){
var temp__5804__auto__ = cljs.core.first(arguments$);
if(cljs.core.truth_(temp__5804__auto__)){
var url = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_re_find(frontend.util.text.vimeo_regex,url),(5));
if(cljs.core.truth_(temp__5804__auto____$1)){
var vimeo_id = temp__5804__auto____$1;
if(clojure.string.blank_QMARK_(vimeo_id)){
return null;
} else {
var width = (function (){var x__5131__auto__ = (frontend.util.get_width() - (96));
var y__5132__auto__ = (560);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var height = ((width * ((315) / (560))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),"allowfullscreen",new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),"0",new cljs.core.Keyword(null,"src","src",-1651076051),["https://player.vimeo.com/video/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vimeo_id)].join(''),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.macro_bilibili_cp = (function frontend$components$block$macro_bilibili_cp(_config,arguments$){
var temp__5804__auto__ = cljs.core.first(arguments$);
if(cljs.core.truth_(temp__5804__auto__)){
var url = temp__5804__auto__;
var temp__5804__auto____$1 = (((cljs.core.count(url) <= (15)))?url:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_re_find(frontend.util.text.bilibili_regex,url),(5))
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
if(clojure.string.blank_QMARK_(id)){
return null;
} else {
var width = (function (){var x__5131__auto__ = (frontend.util.get_width() - (96));
var y__5132__auto__ = (560);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var height = ((width * ((360) / (560))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"allowfullscreen","allowfullscreen",-1595290361),true,new cljs.core.Keyword(null,"framespacing","framespacing",-63114747),"0",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"no",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"scrolling","scrolling",349011090),"no",new cljs.core.Keyword(null,"src","src",-1651076051),["https://player.bilibili.com/player.html?bvid=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&high_quality=1"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__5128__auto__ = (500);
var y__5129__auto__ = height;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.macro_video_cp = (function frontend$components$block$macro_video_cp(_config,arguments$){
var temp__5802__auto__ = cljs.core.first(arguments$);
if(cljs.core.truth_(temp__5802__auto__)){
var url = temp__5802__auto__;
if(cljs.core.truth_(logseq.graph_parser.util.url_QMARK_(url))){
var results = frontend.util.text.get_matched_video(url);
var src = (function (){try{if(((cljs.core.vector_QMARK_(results)) && ((cljs.core.count(results) === 7)))){
try{var results_3__113082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(3));
if((results_3__113082 === "youtube.com")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(5));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(id),(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["youtube-player",id], null);
} else {
return url;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113098){if((e113098 instanceof Error)){
var e__103681__auto__ = e113098;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{var results_3__113082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(3));
if((results_3__113082 === "youtu.be")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(5));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(id),(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["youtube-player",id], null);
} else {
return url;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113099){if((e113099 instanceof Error)){
var e__103681__auto____$1 = e113099;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
try{var results_3__113082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(3));
if((results_3__113082 === "y2u.be")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(5));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(id),(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["youtube-player",id], null);
} else {
return url;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113100){if((e113100 instanceof Error)){
var e__103681__auto____$2 = e113100;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{var results_3__113082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(3));
if((results_3__113082 === "youtube-nocookie.com")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(5));
return ["https://www.youtube-nocookie.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e113101){if((e113101 instanceof Error)){
var e__103681__auto____$3 = e113101;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{var results_3__113082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(3));
if((results_3__113082 === "loom.com")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(5));
return ["https://www.loom.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e113102){if((e113102 instanceof Error)){
var e__103681__auto____$4 = e113102;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{var results_3__113082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(3));
if((function (p1__113052_SHARP_){
return clojure.string.ends_with_QMARK_(p1__113052_SHARP_,"vimeo.com");
})(results_3__113082)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(5));
return ["https://player.vimeo.com/video/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e113103){if((e113103 instanceof Error)){
var e__103681__auto____$5 = e113103;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$5;
}
} else {
throw e113103;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e113102;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e113101;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e113100;

}
}} else {
throw e__103681__auto____$1;
}
} else {
throw e113099;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113098;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113094){if((e113094 instanceof Error)){
var e__103681__auto__ = e113094;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(results)) && ((cljs.core.count(results) >= (6))))){
try{var results_left__113086 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(results,(0),(6));
if(((cljs.core.vector_QMARK_(results_left__113086)) && ((cljs.core.count(results_left__113086) === (6))))){
try{var results_left__113086_3__113091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results_left__113086,(3));
if((results_left__113086_3__113091 === "bilibili.com")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results_left__113086,(5));
var query = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(results,(6));
return ["https://player.bilibili.com/player.html?bvid=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&high_quality=1&autoplay=0",(function (){var temp__5804__auto__ = cljs.core.second(query);
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
return ["&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('');
} else {
return null;
}
})()].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e113097){if((e113097 instanceof Error)){
var e__103681__auto____$1 = e113097;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113096){if((e113096 instanceof Error)){
var e__103681__auto____$1 = e113096;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113095){if((e113095 instanceof Error)){
var e__103681__auto____$1 = e113095;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
return url;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113095;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113094;

}
}})();
if(((cljs.core.coll_QMARK_(src)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(src),"youtube-player")))){
var t = cljs.core.re_find(/&t=(\d+)/,url);
var opts = ((cljs.core.seq(t))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(t,(1))], null):null);
return frontend.extensions.video.youtube.youtube_video(cljs.core.last(src),opts);
} else {
if(cljs.core.truth_(src)){
var width = (function (){var x__5131__auto__ = (frontend.util.get_width() - (96));
var y__5132__auto__ = (560);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var height = ((width * (((clojure.string.includes_QMARK_(src,"player.bilibili.com"))?(360):(315)) / (560))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"framespacing","framespacing",-63114747),new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),new cljs.core.Keyword(null,"scrolling","scrolling",349011090),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],["0","no",width,src,"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",true,"no","0",height])], null);
} else {
return null;
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning.mr-1","span.warning.mr-1",1091749305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid URL"], null),frontend.components.block.macro__GT_text("video",arguments$)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning.mr-1","span.warning.mr-1",1091749305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Empty URL"], null),frontend.components.block.macro__GT_text("video",arguments$)], null);
}
});
frontend.components.block.macro_else_cp = (function frontend$components$block$macro_else_cp(name,config,arguments$){
var temp__5802__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5802__auto__)){
var block_uuid = temp__5802__auto__;
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var macro_content = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1((function (){var G__113104 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__113105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113105) : frontend.db.entity.call(null,G__113105));
})()));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113104) : frontend.db.entity.call(null,G__113104));
})())),name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),name);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));
}
}
})();
var macro_content__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"img"))?(function (){var G__113106 = cljs.core.count(arguments$);
switch (G__113106) {
case (1):
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img {:src \"%s\"}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$)], 0));

break;
case (4):
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1)));
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)));
} else {
return and__5041__auto__;
}
})())){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img.%s {:src \"%s\" :style {:width %s :height %s}}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(3)),cljs.core.first(arguments$),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)))], 0));
} else {
return null;
}

break;
case (3):
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1)));
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)));
} else {
return and__5041__auto__;
}
})())){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img {:src \"%s\" :style {:width %s :height %s}}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)))], 0));
} else {
return null;
}

break;
case (2):
if(cljs.core.truth_(frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img {:src \"%s\" :style {:width %s}}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1)))], 0));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["right",null,"center",null,"left",null], null), null),clojure.string.lower_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img.%s {:src \"%s\"}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.lower_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))),cljs.core.first(arguments$)], 0));
} else {
return macro_content;

}
}

break;
default:
return macro_content;

}
})():(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(arguments$);
if(and__5041__auto__){
return macro_content;
} else {
return and__5041__auto__;
}
})())?frontend.format.block.macro_subs(macro_content,arguments$):macro_content
));
var macro_content__$2 = (cljs.core.truth_(macro_content__$1)?frontend.template.resolve_dynamic_template_BANG_(macro_content__$1):null);
return frontend.components.block.render_macro(config,name,arguments$,macro_content__$2,format);
} else {
var macro_content = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));
}
})();
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return frontend.components.block.render_macro(config,name,arguments$,macro_content,format);
}
});
frontend.components.block.namespace_hierarchy_aux = rum.core.lazy_build(rum.core.build_defc,(function (config,namespace,children){
return daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$block$iter__113107(s__113108){
return (new cljs.core.LazySeq(null,(function (){
var s__113108__$1 = s__113108;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113108__$1);
if(temp__5804__auto__){
var s__113108__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113108__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113108__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113110 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113109 = (0);
while(true){
if((i__113109 < size__5519__auto__)){
var child = cljs.core._nth(c__5518__auto__,i__113109);
cljs.core.chunk_append(b__113110,daiquiri.core.create_element("li",{'key':["namespace-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child))].join('')},[(function (){var shorten_name = (function (){var G__113111 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(child);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
}
})();
var G__113111__$1 = (((G__113111 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__113111,"/"));
if((G__113111__$1 == null)){
return null;
} else {
return cljs.core.last(G__113111__$1);
}
})();
return frontend.components.block.page_cp(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),shorten_name], null),child);
})(),((cljs.core.seq(new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child)))?daiquiri.interpreter.interpret((function (){var G__113115 = config;
var G__113116 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
var G__113117 = new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child);
return (frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3(G__113115,G__113116,G__113117) : frontend.components.block.namespace_hierarchy_aux.call(null,G__113115,G__113116,G__113117));
})()):null)]));

var G__113731 = (i__113109 + (1));
i__113109 = G__113731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113110),frontend$components$block$iter__113107(cljs.core.chunk_rest(s__113108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113110),null);
}
} else {
var child = cljs.core.first(s__113108__$2);
return cljs.core.cons(daiquiri.core.create_element("li",{'key':["namespace-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child))].join('')},[(function (){var shorten_name = (function (){var G__113118 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(child);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
}
})();
var G__113118__$1 = (((G__113118 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__113118,"/"));
if((G__113118__$1 == null)){
return null;
} else {
return cljs.core.last(G__113118__$1);
}
})();
return frontend.components.block.page_cp(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),shorten_name], null),child);
})(),((cljs.core.seq(new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child)))?daiquiri.interpreter.interpret((function (){var G__113122 = config;
var G__113123 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
var G__113124 = new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child);
return (frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3(G__113122,G__113123,G__113124) : frontend.components.block.namespace_hierarchy_aux.call(null,G__113122,G__113123,G__113124));
})()):null)]),frontend$components$block$iter__113107(cljs.core.rest(s__113108__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(children);
})())]);
}),null,"frontend.components.block/namespace-hierarchy-aux");
frontend.components.block.namespace_hierarchy = rum.core.lazy_build(rum.core.build_defc,(function (config,namespace,children){
return daiquiri.core.create_element("div",{'className':"namespace"},[daiquiri.core.create_element("div",{'className':"font-medium flex flex-row items-center pb-2"},[daiquiri.core.create_element("span",{'className':"text-sm mr-1"},["Namespace "]),frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),namespace], null))]),frontend.components.block.namespace_hierarchy_aux(config,namespace,children)]);
}),null,"frontend.components.block/namespace-hierarchy");
frontend.components.block.macro_cp = (function frontend$components$block$macro_cp(config,options){
var map__113127 = options;
var map__113127__$1 = cljs.core.__destructure_map(map__113127);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113127__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var arguments$__$1 = (((((cljs.core.count(arguments$) >= (2))) && (((clojure.string.starts_with_QMARK_(cljs.core.first(arguments$),logseq.graph_parser.util.page_ref.left_brackets)) && (clojure.string.ends_with_QMARK_(cljs.core.last(arguments$),logseq.graph_parser.util.page_ref.right_brackets))))))?(function (){var title = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null);
})():arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"query")){
return frontend.components.block.macro_query_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"function")){
return frontend.components.block.macro_function_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"namespace")){
var namespace = cljs.core.first(arguments$__$1);
if(clojure.string.blank_QMARK_(namespace)){
return null;
} else {
var namespace__$1 = clojure.string.lower_case(logseq.graph_parser.util.page_ref.get_page_name_BANG_(namespace));
var children = frontend.db.model.get_namespace_hierarchy(frontend.state.get_current_repo(),namespace__$1);
return frontend.components.block.namespace_hierarchy(config,namespace__$1,children);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"youtube")){
var temp__5804__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var url = temp__5804__auto__;
var temp__5804__auto____$1 = ((((11) === cljs.core.count(url)))?url:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_re_find(frontend.util.text.youtube_regex,url),(5))
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var youtube_id = temp__5804__auto____$1;
if(clojure.string.blank_QMARK_(youtube_id)){
return null;
} else {
return frontend.extensions.video.youtube.youtube_video(youtube_id,null);
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"youtube-timestamp")){
var temp__5804__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var timestamp = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.extensions.video.youtube.parse_timestamp(timestamp);
if(cljs.core.truth_(temp__5804__auto____$1)){
var seconds = temp__5804__auto____$1;
return frontend.extensions.video.youtube.timestamp(seconds);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"zotero-imported-file")){
var vec__113128 = arguments$__$1;
var item_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113128,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113128,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = item_key;
if(cljs.core.truth_(and__5041__auto__)){
return filename;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.extensions.zotero.zotero_imported_file(item_key,filename)], null);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"zotero-linked-file")){
var temp__5804__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.extensions.zotero.zotero_linked_file(path)], null);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"vimeo")){
return frontend.components.block.macro_vimeo_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"bilibili")){
return frontend.components.block.macro_bilibili_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"video")){
return frontend.components.block.macro_video_cp(config,arguments$__$1);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["twitter",null,"tweet",null], null), null),name)){
var temp__5804__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var url = temp__5804__auto__;
var id_regex = /\/status\/(\d+)/;
var temp__5804__auto____$1 = (((cljs.core.count(url) <= (15)))?url:cljs.core.last(frontend.util.safe_re_find(id_regex,url))
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return frontend.ui.tweet_embed(id);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
return frontend.components.block.macro_embed_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"renderer")){
if(cljs.core.truth_(frontend.config.lsp_enabled_QMARK_)){
var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(temp__5804__auto__)){
var block_uuid = temp__5804__auto__;
return frontend.components.plugins.hook_ui_slot(new cljs.core.Keyword(null,"macro-renderer-slotted","macro-renderer-slotted",-1582637864),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_uuid));
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.macro.macros),name))){
var fexpr__113131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.macro.macros),name);
return (fexpr__113131.cljs$core$IFn$_invoke$arity$2 ? fexpr__113131.cljs$core$IFn$_invoke$arity$2(config,options) : fexpr__113131.call(null,config,options));
} else {
return frontend.components.block.macro_else_cp(name,config,arguments$__$1);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
frontend.components.block.emphasis_cp = (function frontend$components$block$emphasis_cp(config,kind,data){
var elem = (function (){var G__113132 = kind;
switch (G__113132) {
case "Bold":
return new cljs.core.Keyword(null,"b","b",1482224470);

break;
case "Italic":
return new cljs.core.Keyword(null,"i","i",-1386841315);

break;
case "Underline":
return new cljs.core.Keyword(null,"ins","ins",-1021983570);

break;
case "Strike_through":
return new cljs.core.Keyword(null,"del","del",574975584);

break;
case "Highlight":
return new cljs.core.Keyword(null,"mark","mark",-373816345);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__113132)].join('')));

}
})();
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(elem,(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,data) : frontend.components.block.map_inline.call(null,config,data)));
});
frontend.components.block.hiccup__GT_html = (function frontend$components$block$hiccup__GT_html(s){
var result = logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(s);
var result_SINGLEQUOTE_ = ((cljs.core.seq(result))?result:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid hiccup"], null),s], null));
return frontend.security.sanitize_html(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(result_SINGLEQUOTE_)));
});
frontend.components.block.inline = (function frontend$components$block$inline(p__113133,item){
var map__113134 = p__113133;
var map__113134__$1 = cljs.core.__destructure_map(map__113134);
var config = map__113134__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113134__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Plain")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return s;
} else {
throw cljs.core.match.backtrack;

}
}catch (e113191){if((e113191 instanceof Error)){
var e__103681__auto__ = e113191;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Spaces")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return s;
} else {
throw cljs.core.match.backtrack;

}
}catch (e113192){if((e113192 instanceof Error)){
var e__103681__auto____$1 = e113192;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Superscript")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sup","sup",-2039492346),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.map_inline.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113193){if((e113193 instanceof Error)){
var e__103681__auto____$2 = e113193;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Subscript")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.map_inline.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113194){if((e113194 instanceof Error)){
var e__103681__auto____$3 = e113194;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Tag")){
var temp__5804__auto__ = logseq.graph_parser.block.get_tag(item);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
var s__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(s);
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),s__$1], null));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113195){if((e113195 instanceof Error)){
var e__103681__auto____$4 = e113195;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Emphasis")){
try{var item_1__113138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__113138)) && ((cljs.core.count(item_1__113138) === 2)))){
try{var item_1__113138_0__113139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113138,(0));
if(((cljs.core.vector_QMARK_(item_1__113138_0__113139)) && ((cljs.core.count(item_1__113138_0__113139) === 1)))){
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113138_0__113139,(0));
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113138,(1));
return frontend.components.block.emphasis_cp(config,kind,data);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113210){if((e113210 instanceof Error)){
var e__103681__auto____$5 = e113210;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$5;
}
} else {
throw e113210;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113209){if((e113209 instanceof Error)){
var e__103681__auto____$5 = e113209;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$5;
}
} else {
throw e113209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113196){if((e113196 instanceof Error)){
var e__103681__auto____$5 = e113196;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Entity")){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(e))], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113197){if((e113197 instanceof Error)){
var e__103681__auto____$6 = e113197;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Latex_Fragment")){
try{var item_1__113138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__113138)) && ((cljs.core.count(item_1__113138) === 2)))){
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113138,(0));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113138,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(s,false,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),s,false,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display,"Inline"));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113208){if((e113208 instanceof Error)){
var e__103681__auto____$7 = e113208;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$7;
}
} else {
throw e113208;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113198){if((e113198 instanceof Error)){
var e__103681__auto____$7 = e113198;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Target")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s], null),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113199){if((e113199 instanceof Error)){
var e__103681__auto____$8 = e113199;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Radio_Target")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s], null),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113200){if((e113200 instanceof Error)){
var e__103681__auto____$9 = e113200;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Email")){
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__113207 = address;
var map__113207__$1 = cljs.core.__destructure_map(map__113207);
var local_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113207__$1,new cljs.core.Keyword(null,"local_part","local_part",-1705904558));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113207__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var address__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_part),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",address__$1].join('')], null),address__$1], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113201){if((e113201 instanceof Error)){
var e__103681__auto____$10 = e113201;
if((e__103681__auto____$10 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Nested_link")){
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.nested_link(config,html_export_QMARK_,link);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113202){if((e113202 instanceof Error)){
var e__103681__auto____$11 = e113202;
if((e__103681__auto____$11 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Link")){
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.link_cp(config,html_export_QMARK_,link);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113203){if((e113203 instanceof Error)){
var e__103681__auto____$12 = e113203;
if((e__103681__auto____$12 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Verbatim")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113204){if((e113204 instanceof Error)){
var e__103681__auto____$13 = e113204;
if((e__103681__auto____$13 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Code")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113205){if((e113205 instanceof Error)){
var e__103681__auto____$14 = e113205;
if((e__103681__auto____$14 === cljs.core.match.backtrack)){
try{var item_0__113137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113137 === "Inline_Source_Block")){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113206){if((e113206 instanceof Error)){
var e__103681__auto____$15 = e113206;
if((e__103681__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$15;
}
} else {
throw e113206;

}
}} else {
throw e__103681__auto____$14;
}
} else {
throw e113205;

}
}} else {
throw e__103681__auto____$13;
}
} else {
throw e113204;

}
}} else {
throw e__103681__auto____$12;
}
} else {
throw e113203;

}
}} else {
throw e__103681__auto____$11;
}
} else {
throw e113202;

}
}} else {
throw e__103681__auto____$10;
}
} else {
throw e113201;

}
}} else {
throw e__103681__auto____$9;
}
} else {
throw e113200;

}
}} else {
throw e__103681__auto____$8;
}
} else {
throw e113199;

}
}} else {
throw e__103681__auto____$7;
}
} else {
throw e113198;

}
}} else {
throw e__103681__auto____$6;
}
} else {
throw e113197;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e113196;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e113195;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e113194;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e113193;

}
}} else {
throw e__103681__auto____$1;
}
} else {
throw e113192;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113161){if((e113161 instanceof Error)){
var e__103681__auto__ = e113161;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__113144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113144 === "Export_Snippet")){
try{var item_1__113145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113145 === "html")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(s)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113190){if((e113190 instanceof Error)){
var e__103681__auto____$1 = e113190;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113189){if((e113189 instanceof Error)){
var e__103681__auto____$1 = e113189;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113162){if((e113162 instanceof Error)){
var e__103681__auto____$1 = e113162;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113147 === "Inline_Hiccup")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid hiccup"], null),s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.components.block.hiccup__GT_html(s)], null)], null)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113187){if((e113187 instanceof Error)){
var e__103681__auto____$2 = e113187;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{var item_0__113147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113147 === "Inline_Html")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(s)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113188){if((e113188 instanceof Error)){
var e__103681__auto____$3 = e113188;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$3;
}
} else {
throw e113188;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e113187;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113163){if((e113163 instanceof Error)){
var e__103681__auto____$2 = e113163;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 1)))){
try{var item_0__113149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113149 === "Break_Line")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113185){if((e113185 instanceof Error)){
var e__103681__auto____$3 = e113185;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__113149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113149 === "Hard_Break_Line")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113186){if((e113186 instanceof Error)){
var e__103681__auto____$4 = e113186;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$4;
}
} else {
throw e113186;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e113185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113164){if((e113164 instanceof Error)){
var e__103681__auto____$3 = e113164;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113150 === "Timestamp")){
try{var item_1__113151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__113151)) && ((cljs.core.count(item_1__113151) === 2)))){
try{var item_1__113151_0__113152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113152 === "Scheduled")){
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e113176){if((e113176 instanceof Error)){
var e__103681__auto____$4 = e113176;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{var item_1__113151_0__113152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113152 === "Deadline")){
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e113177){if((e113177 instanceof Error)){
var e__103681__auto____$5 = e113177;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{var item_1__113151_0__113152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113152 === "Date")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
return frontend.components.block.timestamp(t,"Date");
} else {
throw cljs.core.match.backtrack;

}
}catch (e113178){if((e113178 instanceof Error)){
var e__103681__auto____$6 = e113178;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
try{var item_1__113151_0__113152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113152 === "Closed")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
return frontend.components.block.timestamp(t,"Closed");
} else {
throw cljs.core.match.backtrack;

}
}catch (e113179){if((e113179 instanceof Error)){
var e__103681__auto____$7 = e113179;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
try{var item_1__113151_0__113152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113152 === "Range")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
return frontend.components.block.range(t,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113180){if((e113180 instanceof Error)){
var e__103681__auto____$8 = e113180;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
try{var item_1__113151_0__113152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113152 === "Clock")){
try{var item_1__113151_1__113153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
if(((cljs.core.vector_QMARK_(item_1__113151_1__113153)) && ((cljs.core.count(item_1__113151_1__113153) === 2)))){
try{var item_1__113151_1__113153_0__113154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151_1__113153,(0));
if((item_1__113151_1__113153_0__113154 === "Stopped")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151_1__113153,(1));
return frontend.components.block.range(t,true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113183){if((e113183 instanceof Error)){
var e__103681__auto____$9 = e113183;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
try{var item_1__113151_1__113153_0__113154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151_1__113153,(0));
if((item_1__113151_1__113153_0__113154 === "Started")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151_1__113153,(1));
return frontend.components.block.timestamp(t,"Started");
} else {
throw cljs.core.match.backtrack;

}
}catch (e113184){if((e113184 instanceof Error)){
var e__103681__auto____$10 = e113184;
if((e__103681__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$10;
}
} else {
throw e113184;

}
}} else {
throw e__103681__auto____$9;
}
} else {
throw e113183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113182){if((e113182 instanceof Error)){
var e__103681__auto____$9 = e113182;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$9;
}
} else {
throw e113182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113181){if((e113181 instanceof Error)){
var e__103681__auto____$9 = e113181;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$9;
}
} else {
throw e113181;

}
}} else {
throw e__103681__auto____$8;
}
} else {
throw e113180;

}
}} else {
throw e__103681__auto____$7;
}
} else {
throw e113179;

}
}} else {
throw e__103681__auto____$6;
}
} else {
throw e113178;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e113177;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e113176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113175){if((e113175 instanceof Error)){
var e__103681__auto____$4 = e113175;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$4;
}
} else {
throw e113175;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113166){if((e113166 instanceof Error)){
var e__103681__auto____$4 = e113166;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__113150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113150 === "Cookie")){
try{var item_1__113151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__113151)) && ((cljs.core.count(item_1__113151) === 2)))){
try{var item_1__113151_0__113156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113156 === "Percent")){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cookie-percent"], null),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%d%%]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113174){if((e113174 instanceof Error)){
var e__103681__auto____$5 = e113174;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$5;
}
} else {
throw e113174;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113171){if((e113171 instanceof Error)){
var e__103681__auto____$5 = e113171;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{var item_1__113151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__113151)) && ((cljs.core.count(item_1__113151) === 3)))){
try{var item_1__113151_0__113158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(0));
if((item_1__113151_0__113158 === "Absolute")){
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(1));
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__113151,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cookie-absolute"], null),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%d/%d]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current,total], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113173){if((e113173 instanceof Error)){
var e__103681__auto____$6 = e113173;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$6;
}
} else {
throw e113173;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113172){if((e113172 instanceof Error)){
var e__103681__auto____$6 = e113172;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$6;
}
} else {
throw e113172;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e113171;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113167){if((e113167 instanceof Error)){
var e__103681__auto____$5 = e113167;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__113150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113150 === "Footnote_Reference")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__113170 = options;
var map__113170__$1 = cljs.core.__destructure_map(map__113170);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var encode_name = frontend.util.url_encode(name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.fn","sup.fn",403400163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["fnr.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode_name)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"footref",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_(["fn.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode_name)].join(''));
})], null),name], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113168){if((e113168 instanceof Error)){
var e__103681__auto____$6 = e113168;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__113150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113150 === "Macro")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.macro_cp(config,options);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113169){if((e113169 instanceof Error)){
var e__103681__auto____$7 = e113169;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$7;
}
} else {
throw e113169;

}
}} else {
throw e__103681__auto____$6;
}
} else {
throw e113168;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e113167;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e113166;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113165){if((e113165 instanceof Error)){
var e__103681__auto____$4 = e113165;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
return "";
} else {
throw e__103681__auto____$4;
}
} else {
throw e113165;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e113164;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e113163;

}
}} else {
throw e__103681__auto____$1;
}
} else {
throw e113162;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113161;

}
}});
frontend.components.block.block_child = rum.core.lazy_build(rum.core.build_defc,(function (block){
return daiquiri.interpreter.interpret(block);
}),null,"frontend.components.block/block-child");
frontend.components.block.dnd_same_block_QMARK_ = (function frontend$components$block$dnd_same_block_QMARK_(uuid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.components.block._STAR_dragging_block)),uuid);
});
frontend.components.block.bullet_drag_start = (function frontend$components$block$bullet_drag_start(event,block,uuid,block_id){
frontend.handler.editor.highlight_block_BANG_(uuid);

frontend.handler.editor.block__GT_data_transfer_BANG_(uuid,event);

frontend.components.block.goog$module$goog$object.get(event,"dataTransfer").setData("block-dom-id",block_id);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,true);

return cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,block);
});
frontend.components.block.bullet_on_click = (function frontend$components$block$bullet_on_click(e,block,uuid){
if(logseq.graph_parser.whiteboard.shape_block_QMARK_(block)){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),uuid], null));
} else {
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block","block",664686210));

return frontend.util.stop(e);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.whiteboard.inside_portal_QMARK_(e.target);
} else {
return and__5041__auto__;
}
})())){
frontend.handler.whiteboard.add_new_block_portal_shape_BANG_(uuid,frontend.handler.whiteboard.closest_shape(e.target));

return frontend.util.stop(e);
} else {
if(cljs.core.truth_(uuid)){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(uuid);
} else {
return null;
}

}
}
}
});
frontend.components.block.block_children = rum.core.lazy_build(rum.core.build_defc,(function (config,block,children,collapsed_QMARK_){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
var children__$1 = ((cljs.core.coll_QMARK_(children))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,children):null);
if(((cljs.core.coll_QMARK_(children__$1)) && (((cljs.core.seq(children__$1)) && (cljs.core.not(collapsed_QMARK_)))))){
return daiquiri.core.create_element("div",{'className':"block-children-container flex"},[daiquiri.core.create_element("div",{'onClick':(function (_){
return frontend.handler.editor.toggle_open_block_children_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}),'className':"block-children-left-border"},[]),daiquiri.core.create_element("div",{'style':{'display':(cljs.core.truth_(collapsed_QMARK_)?"none":"")},'className':"block-children w-full"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$block$iter__113211(s__113212){
return (new cljs.core.LazySeq(null,(function (){
var s__113212__$1 = s__113212;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113212__$1);
if(temp__5804__auto__){
var s__113212__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113212__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113212__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113214 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113213 = (0);
while(true){
if((i__113213 < size__5519__auto__)){
var child = cljs.core._nth(c__5518__auto__,i__113213);
cljs.core.chunk_append(b__113214,((cljs.core.map_QMARK_(child))?(function (){var child__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword("block","meta","block/meta",1064819153));
var config__$1 = (function (){var G__113215 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1)),new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354)], 0));
if(cljs.core.truth_((function (){var or__5043__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return query_QMARK_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113215,new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933),true);
} else {
return G__113215;
}
})();
return rum.core.with_key((frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2(config__$1,child__$1) : frontend.components.block.block_container.call(null,config__$1,child__$1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340).cljs$core$IFn$_invoke$arity$1(config__$1)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1))].join(''));
})():null));

var G__113733 = (i__113213 + (1));
i__113213 = G__113733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113214),frontend$components$block$iter__113211(cljs.core.chunk_rest(s__113212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113214),null);
}
} else {
var child = cljs.core.first(s__113212__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(child))?(function (){var child__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword("block","meta","block/meta",1064819153));
var config__$1 = (function (){var G__113216 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1)),new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354)], 0));
if(cljs.core.truth_((function (){var or__5043__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return query_QMARK_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113216,new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933),true);
} else {
return G__113216;
}
})();
return rum.core.with_key((frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2(config__$1,child__$1) : frontend.components.block.block_container.call(null,config__$1,child__$1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340).cljs$core$IFn$_invoke$arity$1(config__$1)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1))].join(''));
})():null),frontend$components$block$iter__113211(cljs.core.rest(s__113212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(children__$1);
})())])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-children");
frontend.components.block.block_content_empty_QMARK_ = (function frontend$components$block$block_content_empty_QMARK_(p__113218){
var map__113219 = p__113218;
var map__113219__$1 = cljs.core.__destructure_map(map__113219);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113219__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113219__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113219__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
return ((((cljs.core.empty_QMARK_(properties)) || (frontend.util.property.properties_hidden_QMARK_(properties)))) && (((cljs.core.empty_QMARK_(title)) && (cljs.core.every_QMARK_((function (p1__113217_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__113217_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Horizontal_Rule"], null));
}),body)))));
});
frontend.components.block.block_control = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,block,uuid,block_id,collapsed_QMARK_,_STAR_control_show_QMARK_,edit_QMARK_,selected_QMARK_){
var doc_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
var control_show_QMARK_ = frontend.util.react(_STAR_control_show_QMARK_);
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var empty_content_QMARK_ = frontend.components.block.block_content_empty_QMARK_(block);
var fold_button_right_QMARK_ = frontend.state.enable_fold_button_right_QMARK_();
var own_number_list_QMARK_ = new cljs.core.Keyword(null,"own-order-number-list?","own-order-number-list?",2048042976).cljs$core$IFn$_invoke$arity$1(config);
var order_list_QMARK_ = cljs.core.boolean$(own_number_list_QMARK_);
var order_list_idx = new cljs.core.Keyword(null,"own-order-list-index","own-order-list-index",2051635079).cljs$core$IFn$_invoke$arity$1(config);
var collapsable_QMARK_ = frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),true], null));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-control-wrap","flex","flex-row","items-center",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-order-list","is-order-list",493359915),order_list_QMARK_,new cljs.core.Keyword(null,"bullet-closed","bullet-closed",1327473821),collapsed_QMARK_], null)], null))], null))},[(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(fold_button_right_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return collapsable_QMARK_;
}
})())?daiquiri.core.create_element("a",{'id':["control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),'onClick':(function (event){
frontend.util.stop(event);

frontend.state.clear_edit_BANG_();

if(cljs.core.truth_(ref_QMARK_)){
return frontend.state.toggle_collapsed_block_BANG_(uuid);
} else {
if(cljs.core.truth_(collapsed_QMARK_)){
return frontend.handler.editor.expand_block_BANG_(uuid);
} else {
return frontend.handler.editor.collapse_block_BANG_(uuid);
}
}
}),'className':"block-control"},[daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = control_show_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),true], null));
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return order_list_QMARK_;
} else {
return and__5041__auto__;
}
}
})())?"control-show cursor-pointer":"control-hide")], null))},[frontend.ui.rotating_arrow(collapsed_QMARK_)])]):null),(function (){var bullet = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bullet-link-wrap","a.bullet-link-wrap",1602419423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__113220_SHARP_){
return frontend.components.block.bullet_on_click(p1__113220_SHARP_,block,uuid);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container.cursor","span.bullet-container.cursor",-1172876867),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (event){
return frontend.components.block.bullet_drag_start(event,block,uuid,block_id);
}),new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(collapsed_QMARK_)?"bullet-closed":null),(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(collapsed_QMARK_);
} else {
return and__5041__auto__;
}
})())?" hide-inner-bullet":null),((order_list_QMARK_)?" as-order-list typed-list":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet","span.bullet",1911638461),(function (){var G__113223 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)], null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113223,new cljs.core.Keyword(null,"class","class",-2030961996),"selected");
} else {
return G__113223;
}
})(),((order_list_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(order_list_idx),"."].join('')], null):null)], null)], null)], null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword("ui","show-empty-bullets?","ui/show-empty-bullets?",1453722088).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = collapsed_QMARK_;
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return collapsable_QMARK_;
}
}
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(doc_mode_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return daiquiri.interpreter.interpret(bullet);
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = ((empty_content_QMARK_) && (((cljs.core.not(edit_QMARK_)) && (((cljs.core.not(new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865).cljs$core$IFn$_invoke$arity$1(block))) && (((cljs.core.not(new cljs.core.Keyword("block.temp","bottom?","block.temp/bottom?",-752374337).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core.not(frontend.util.react(_STAR_control_show_QMARK_))))))))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = doc_mode_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(collapsed_QMARK_)) && (cljs.core.not(frontend.util.react(_STAR_control_show_QMARK_))));
} else {
return and__5041__auto__;
}
}
})())){
return daiquiri.core.create_element("span",{'className':"bullet-container"},null);
} else {
return daiquiri.interpreter.interpret(bullet);

}
}
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-control");
frontend.components.block.dnd_separator = rum.core.lazy_build(rum.core.build_defc,(function (move_to,block_content_QMARK_){
return daiquiri.core.create_element("div",{'className':"relative"},[daiquiri.core.create_element("div",{'style':{'left':(function (){var G__113224 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849)))?(40):(20));
if(cljs.core.truth_(block_content_QMARK_)){
return (G__113224 - (34));
} else {
return G__113224;
}
})(),'top':(0),'width':"100%",'zIndex':(3)},'className':"dnd-separator absolute"},[])]);
}),null,"frontend.components.block/dnd-separator");
frontend.components.block.block_checkbox = (function frontend$components$block$block_checkbox(block,class$){
var marker = new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block);
var vec__113225 = (((marker == null))?null:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["TODO",null,"NOW",null,"LATER",null,"DOING",null,"IN-PROGRESS",null,"WAITING",null,"WAIT",null], null), null),marker))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,false], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DONE",marker))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," checked"].join(''),true], null):null)));
var class$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113225,(0),null);
var checked_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113225,(1),null);
if(cljs.core.truth_(class$__$1)){
return frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5)], null),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop_propagation(e);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_e){
if(cljs.core.truth_(checked_QMARK_)){
return frontend.handler.editor.uncheck(block);
} else {
return frontend.handler.editor.check(block);
}
})], null));
} else {
return null;
}
});
frontend.components.block.list_checkbox = (function frontend$components$block$list_checkbox(config,checked_QMARK_){
return frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(6)], null),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var target = event.target;
var block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
var item_content = target.nextSibling.data;
return frontend.handler.editor.toggle_list_checkbox(block,item_content);
})], null));
});
frontend.components.block.marker_switch = (function frontend$components$block$marker_switch(p__113228){
var map__113229 = p__113228;
var map__113229__$1 = cljs.core.__destructure_map(map__113229);
var block = map__113229__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113229__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["TODO",null,"NOW",null,"LATER",null,"DOING",null], null), null),marker)){
var set_marker_fn = (function (new_marker){
return (function (e){
frontend.util.stop(e);

return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2(block,new_marker);
});
});
var next_marker = (function (){var G__113230 = marker;
switch (G__113230) {
case "NOW":
return "LATER";

break;
case "LATER":
return "NOW";

break;
case "TODO":
return "DOING";

break;
case "DOING":
return "TODO";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__113230)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["marker-switch block-marker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker)].join(''),new cljs.core.Keyword(null,"title","title",636505583),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Change from %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker,next_marker], 0)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),set_marker_fn(next_marker)], null),marker], null);
} else {
return null;
}
});
frontend.components.block.marker_cp = (function frontend$components$block$marker_cp(p__113231){
var map__113232 = p__113231;
var map__113232__$1 = cljs.core.__destructure_map(map__113232);
var _block = map__113232__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113232__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113232__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
if(cljs.core.truth_(pre_block_QMARK_)){
return null;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IN-PROGRESS",null,"WAITING",null,"WAIT",null], null), null),marker)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["task-status block-marker ",clojure.string.lower_case(marker)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null),clojure.string.upper_case(marker)], null);
} else {
return null;
}
}
});
frontend.components.block.set_priority = rum.core.lazy_build(rum.core.build_defc,(function (block,priority){
var attrs113242 = (function (){var priorities = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__113233_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,p1__113233_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C"], null)));
var iter__5520__auto__ = (function frontend$components$block$iter__113243(s__113244){
return (new cljs.core.LazySeq(null,(function (){
var s__113244__$1 = s__113244;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113244__$1);
if(temp__5804__auto__){
var s__113244__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113244__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113244__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113246 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113245 = (0);
while(true){
if((i__113245 < size__5519__auto__)){
var p = cljs.core._nth(c__5518__auto__,i__113245);
cljs.core.chunk_append(b__113246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-base.tooltip-priority","a.mr-2.text-base.tooltip-priority",1672342386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"priority","priority",1431093715),p,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__113245,p,c__5518__auto__,size__5519__auto__,b__113246,s__113244__$2,temp__5804__auto__,priorities){
return (function (){
return frontend.handler.editor.set_priority(block,p);
});})(i__113245,p,c__5518__auto__,size__5519__auto__,b__113246,s__113244__$2,temp__5804__auto__,priorities))
], null)], null));

var G__113735 = (i__113245 + (1));
i__113245 = G__113735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113246),frontend$components$block$iter__113243(cljs.core.chunk_rest(s__113244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113246),null);
}
} else {
var p = cljs.core.first(s__113244__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-base.tooltip-priority","a.mr-2.text-base.tooltip-priority",1672342386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"priority","priority",1431093715),p,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__113244__$2,temp__5804__auto__,priorities){
return (function (){
return frontend.handler.editor.set_priority(block,p);
});})(p,s__113244__$2,temp__5804__auto__,priorities))
], null)], null),frontend$components$block$iter__113243(cljs.core.rest(s__113244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(priorities);
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113242))?daiquiri.interpreter.element_attributes(attrs113242):null),((cljs.core.map_QMARK_(attrs113242))?null:[daiquiri.interpreter.interpret(attrs113242)]));
}),null,"frontend.components.block/set-priority");
frontend.components.block.priority_text = rum.core.lazy_build(rum.core.build_defc,(function (priority){
return daiquiri.core.create_element("a",{'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),priority], null)),'style':{'marginRight':3.5},'className':"opacity-50 hover:opacity-100 priority"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(priority)], 0)))]);
}),null,"frontend.components.block/priority-text");
frontend.components.block.priority_cp = (function frontend$components$block$priority_cp(p__113247){
var map__113248 = p__113247;
var map__113248__$1 = cljs.core.__destructure_map(map__113248);
var block = map__113248__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113248__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113248__$1,new cljs.core.Keyword("block","priority","block/priority",1491369544));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(pre_block_QMARK_);
if(and__5041__auto__){
return priority;
} else {
return and__5041__auto__;
}
})())){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"html","html",-998796897),frontend.components.block.set_priority(block,priority)], null),frontend.components.block.priority_text(priority));
} else {
return null;
}
});
frontend.components.block.block_tags_cp = (function frontend$components$block$block_tags_cp(p__113249){
var map__113250 = p__113249;
var map__113250__$1 = cljs.core.__destructure_map(map__113250);
var _block = map__113250__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113250__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113250__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340));
if(((cljs.core.not(pre_block_QMARK_)) && (cljs.core.seq(tags)))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-tags"], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tag){
var temp__5804__auto__ = (function (){var G__113251 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113251) : frontend.db.entity.call(null,G__113251));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var tag__$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag.mx-1","a.tag.mx-1",2141343974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),tag__$1,new cljs.core.Keyword(null,"key","key",-1516042587),["tag-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag__$1))].join(''),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),tag__$1], null))], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join('')], null);
} else {
return null;
}
}),tags));
} else {
return null;
}
});
frontend.components.block.build_block_title = (function frontend$components$block$build_block_title(config,p__113252){
var map__113253 = p__113252;
var map__113253__$1 = cljs.core.__destructure_map(map__113253);
var t = map__113253__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113253__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113253__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113253__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113253__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113253__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"block","block",664686210),t);
var slide_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config__$1));
var block_ref_QMARK_ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config__$1);
var block_type = (function (){var or__5043__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-type","ls-type",1383834313).cljs$core$IFn$_invoke$arity$1(properties));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var html_export_QMARK_ = new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config__$1);
var checkbox = ((((cljs.core.not(pre_block_QMARK_)) && (cljs.core.not(html_export_QMARK_))))?frontend.components.block.block_checkbox(t,"mr-1 cursor"):null);
var marker_switch = ((((cljs.core.not(pre_block_QMARK_)) && (cljs.core.not(html_export_QMARK_))))?frontend.components.block.marker_switch(t):null);
var marker_cp = frontend.components.block.marker_cp(t);
var priority = frontend.components.block.priority_cp(t);
var tags = frontend.components.block.block_tags_cp(t);
var bg_color = new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(properties);
var heading_level = new cljs.core.Keyword("block","heading-level","block/heading-level",661361785).cljs$core$IFn$_invoke$arity$1(t);
var heading = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = heading_level;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (heading_level <= (6));
if(and__5041__auto____$1){
return heading_level;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties);
}
})();
var heading__$1 = ((heading === true)?(function (){var x__5131__auto__ = (level + (1));
var y__5132__auto__ = (6);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():heading);
var elem = (cljs.core.truth_(heading__$1)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading__$1),(cljs.core.truth_(block_ref_QMARK_)?".inline":null)].join('')):new cljs.core.Keyword(null,"span.inline","span.inline",-247819147));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-hl-type","data-hl-type",890635169),new cljs.core.Keyword(null,"hl-type","hl-type",992471876).cljs$core$IFn$_invoke$arity$1(properties)], null),(cljs.core.truth_((function (){var and__5041__auto__ = marker;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(marker)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("nil",marker)));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.lower_case(marker)], null):null),(cljs.core.truth_(bg_color)?(function (){var built_in_color_QMARK_ = frontend.ui.built_in_color_QMARK_(bg_color);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(built_in_color_QMARK_)?["var(--ls-highlight-color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bg_color),")"].join(''):bg_color),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(built_in_color_QMARK_)?null:"white")], null),new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 with-bg-color"], null);
})():null)], 0)),(function (){var area_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hl-type","hl-type",992471876).cljs$core$IFn$_invoke$arity$1(properties)));
var hl_ref = (function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.config.publishing_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return frontend.util.electron_QMARK_();
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var fexpr__113254 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
return (fexpr__113254.cljs$core$IFn$_invoke$arity$1 ? fexpr__113254.cljs$core$IFn$_invoke$arity$1(block_type) : fexpr__113254.call(null,block_type));
})());
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prefix-link","div.prefix-link",1572303303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
var target = e.target;
var G__113255 = block_type;
var G__113255__$1 = (((G__113255 instanceof cljs.core.Keyword))?G__113255.fqn:null);
switch (G__113255__$1) {
case "annotation":
if(cljs.core.truth_((function (){var and__5041__auto__ = area_QMARK_;
if(and__5041__auto__){
return target.classList.contains("blank");
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.Keyword(null,"actions","actions",-812656882);
} else {
frontend.extensions.pdf.assets.open_block_ref_BANG_(t);

return frontend.util.stop(e);
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hl-page","span.hl-page",-1375814803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.forbid-edit","strong.forbid-edit",1321731345),["P",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"hl-page","hl-page",949012424).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "?";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.blank","label.blank",13437060)," "], null)], null),(cljs.core.truth_((function (){var and__5041__auto__ = area_QMARK_;
if(and__5041__auto__){
return new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513).cljs$core$IFn$_invoke$arity$1(properties);
} else {
return and__5041__auto__;
}
})())?frontend.extensions.pdf.assets.area_display(t):null)], null);
} else {
return null;
}
});
return frontend.components.block.remove_nils(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((slide_QMARK_)?null:checkbox),((slide_QMARK_)?null:marker_switch),marker_cp,priority], null),((area_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl_ref()], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(title)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,title) : frontend.components.block.map_inline.call(null,config__$1,title)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),frontend.ui.icon("whiteboard-element",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null))], null):null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),"Click here to start writing, type '/' to see all the commands."], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags], null),((area_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl_ref()], null):null)], 0)));
})());
});
frontend.components.block.span_comma = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("span",null,[", "]);
}),null,"frontend.components.block/span-comma");
frontend.components.block.property_cp = rum.core.lazy_build(rum.core.build_defc,(function (config,block,k,value){
var date = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462));
if(and__5041__auto__){
return frontend.date.get_locale_string(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__5041__auto__;
}
})();
var user_config = frontend.state.get_config.cljs$core$IFn$_invoke$arity$0();
var property_separated_by_commas_QMARK_ = logseq.graph_parser.text.separated_by_commas_QMARK_(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),k);
var v = (function (){var or__5043__auto__ = ((((cljs.core.coll_QMARK_(value)) && (((cljs.core.seq(value)) && ((!(property_separated_by_commas_QMARK_)))))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block),k):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return value;
}
})();
var property_pages_enabled_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,true,null], null), null),new cljs.core.Keyword("property-pages","enabled?","property-pages/enabled?",-48336645).cljs$core$IFn$_invoke$arity$1(user_config));
var attrs113258 = ((property_pages_enabled_QMARK_)?frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"property?","property?",2060031741),true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),(1))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-property-key.font-medium","span.page-property-key.font-medium",-589122015),cljs.core.name(k)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113258))?daiquiri.interpreter.element_attributes(attrs113258):null),((cljs.core.map_QMARK_(attrs113258))?[daiquiri.core.create_element("span",{'className':"mr-1"},[":"]),(function (){var attrs113277 = ((cljs.core.int_QMARK_(v))?v:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"file-path","file-path",-2005501162)))?v:(cljs.core.truth_(date)?date:((((typeof v === 'string') && (logseq.graph_parser.util.wrapped_by_quotes_QMARK_(v))))?logseq.graph_parser.util.unquote_string(v):((((property_separated_by_commas_QMARK_) && (cljs.core.coll_QMARK_(v))))?(function (){var v__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,v));
var vals = (function (){var iter__5520__auto__ = (function frontend$components$block$iter__113297(s__113298){
return (new cljs.core.LazySeq(null,(function (){
var s__113298__$1 = s__113298;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113298__$1);
if(temp__5804__auto__){
var s__113298__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113298__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113298__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113300 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113299 = (0);
while(true){
if((i__113299 < size__5519__auto__)){
var v_item = cljs.core._nth(c__5518__auto__,i__113299);
cljs.core.chunk_append(b__113300,frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),v_item], null)));

var G__113737 = (i__113299 + (1));
i__113299 = G__113737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113300),frontend$components$block$iter__113297(cljs.core.chunk_rest(s__113298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113300),null);
}
} else {
var v_item = cljs.core.first(s__113298__$2);
return cljs.core.cons(frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),v_item], null)),frontend$components$block$iter__113297(cljs.core.rest(s__113298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(v__$1);
})();
var elems = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(frontend.components.block.span_comma(),vals);
var iter__5520__auto__ = (function frontend$components$block$iter__113301(s__113302){
return (new cljs.core.LazySeq(null,(function (){
var s__113302__$1 = s__113302;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113302__$1);
if(temp__5804__auto__){
var s__113302__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113302__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113302__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113304 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113303 = (0);
while(true){
if((i__113303 < size__5519__auto__)){
var elem = cljs.core._nth(c__5518__auto__,i__113303);
cljs.core.chunk_append(b__113304,rum.core.with_key(elem,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));

var G__113738 = (i__113303 + (1));
i__113303 = G__113738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113304),frontend$components$block$iter__113301(cljs.core.chunk_rest(s__113302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113304),null);
}
} else {
var elem = cljs.core.first(s__113302__$2);
return cljs.core.cons(rum.core.with_key(elem,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),frontend$components$block$iter__113301(cljs.core.rest(s__113302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(elems);
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))
)))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113277))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-property-value","inline"], null)], null),attrs113277], 0))):{'className':"page-property-value inline"}),((cljs.core.map_QMARK_(attrs113277))?null:[daiquiri.interpreter.interpret(attrs113277)]));
})()]:[daiquiri.interpreter.interpret(attrs113258),daiquiri.core.create_element("span",{'className':"mr-1"},[":"]),(function (){var attrs113296 = ((cljs.core.int_QMARK_(v))?v:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"file-path","file-path",-2005501162)))?v:(cljs.core.truth_(date)?date:((((typeof v === 'string') && (logseq.graph_parser.util.wrapped_by_quotes_QMARK_(v))))?logseq.graph_parser.util.unquote_string(v):((((property_separated_by_commas_QMARK_) && (cljs.core.coll_QMARK_(v))))?(function (){var v__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,v));
var vals = (function (){var iter__5520__auto__ = (function frontend$components$block$iter__113305(s__113306){
return (new cljs.core.LazySeq(null,(function (){
var s__113306__$1 = s__113306;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113306__$1);
if(temp__5804__auto__){
var s__113306__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113306__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113306__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113308 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113307 = (0);
while(true){
if((i__113307 < size__5519__auto__)){
var v_item = cljs.core._nth(c__5518__auto__,i__113307);
cljs.core.chunk_append(b__113308,frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),v_item], null)));

var G__113739 = (i__113307 + (1));
i__113307 = G__113739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113308),frontend$components$block$iter__113305(cljs.core.chunk_rest(s__113306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113308),null);
}
} else {
var v_item = cljs.core.first(s__113306__$2);
return cljs.core.cons(frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),v_item], null)),frontend$components$block$iter__113305(cljs.core.rest(s__113306__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(v__$1);
})();
var elems = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(frontend.components.block.span_comma(),vals);
var iter__5520__auto__ = (function frontend$components$block$iter__113309(s__113310){
return (new cljs.core.LazySeq(null,(function (){
var s__113310__$1 = s__113310;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113310__$1);
if(temp__5804__auto__){
var s__113310__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113310__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113310__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113312 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113311 = (0);
while(true){
if((i__113311 < size__5519__auto__)){
var elem = cljs.core._nth(c__5518__auto__,i__113311);
cljs.core.chunk_append(b__113312,rum.core.with_key(elem,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));

var G__113740 = (i__113311 + (1));
i__113311 = G__113740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113312),frontend$components$block$iter__113309(cljs.core.chunk_rest(s__113310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113312),null);
}
} else {
var elem = cljs.core.first(s__113310__$2);
return cljs.core.cons(rum.core.with_key(elem,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),frontend$components$block$iter__113309(cljs.core.rest(s__113310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(elems);
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))
)))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113296))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-property-value","inline"], null)], null),attrs113296], 0))):{'className':"page-property-value inline"}),((cljs.core.map_QMARK_(attrs113296))?null:[daiquiri.interpreter.interpret(attrs113296)]));
})()]));
}),null,"frontend.components.block/property-cp");
frontend.components.block.properties_cp = rum.core.lazy_build(rum.core.build_defc,(function (config,p__113315){
var map__113316 = p__113315;
var map__113316__$1 = cljs.core.__destructure_map(map__113316);
var block = map__113316__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113316__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var ordered_properties = frontend.util.property.get_visible_ordered_properties(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460),pre_block_QMARK_,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))], null));
if(cljs.core.seq(ordered_properties)){
return daiquiri.core.create_element("div",{'title':(cljs.core.truth_(pre_block_QMARK_)?"Click to edit this page's properties":"Click to edit this block's properties"),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-properties","rounded",(cljs.core.truth_(pre_block_QMARK_)?"page-properties":null)], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$block$iter__113317(s__113318){
return (new cljs.core.LazySeq(null,(function (){
var s__113318__$1 = s__113318;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113318__$1);
if(temp__5804__auto__){
var s__113318__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113318__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113318__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113320 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113319 = (0);
while(true){
if((i__113319 < size__5519__auto__)){
var vec__113321 = cljs.core._nth(c__5518__auto__,i__113319);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113321,(1),null);
cljs.core.chunk_append(b__113320,rum.core.with_key(frontend.components.block.property_cp(config,block,k,v),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

var G__113741 = (i__113319 + (1));
i__113319 = G__113741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113320),frontend$components$block$iter__113317(cljs.core.chunk_rest(s__113318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113320),null);
}
} else {
var vec__113324 = cljs.core.first(s__113318__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113324,(1),null);
return cljs.core.cons(rum.core.with_key(frontend.components.block.property_cp(config,block,k,v),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),frontend$components$block$iter__113317(cljs.core.rest(s__113318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(ordered_properties);
})())]);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = pre_block_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ordered_properties;
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("span",{'className':"opacity-50"},["Properties"]);
} else {
return null;

}
}
}),null,"frontend.components.block/properties-cp");
frontend.components.block.invalid_properties_cp = rum.core.lazy_build(rum.core.build_defc,(function (invalid_properties){
if(cljs.core.seq(invalid_properties)){
return daiquiri.core.create_element("div",{'className':"invalid-properties mb-2"},[daiquiri.core.create_element("div",{'title':"Invalid properties",'className':"warning"},["Invalid property names: ",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$block$iter__113330(s__113331){
return (new cljs.core.LazySeq(null,(function (){
var s__113331__$1 = s__113331;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113331__$1);
if(temp__5804__auto__){
var s__113331__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113331__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113331__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113333 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113332 = (0);
while(true){
if((i__113332 < size__5519__auto__)){
var p = cljs.core._nth(c__5518__auto__,i__113332);
cljs.core.chunk_append(b__113333,(function (){var attrs113329 = p;
return daiquiri.core.create_element("button",((cljs.core.map_QMARK_(attrs113329))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-1","mr-2"], null)], null),attrs113329], 0))):{'className':"p-1 mr-2"}),((cljs.core.map_QMARK_(attrs113329))?null:[daiquiri.interpreter.interpret(attrs113329)]));
})());

var G__113742 = (i__113332 + (1));
i__113332 = G__113742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113333),frontend$components$block$iter__113330(cljs.core.chunk_rest(s__113331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113333),null);
}
} else {
var p = cljs.core.first(s__113331__$2);
return cljs.core.cons((function (){var attrs113329 = p;
return daiquiri.core.create_element("button",((cljs.core.map_QMARK_(attrs113329))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-1","mr-2"], null)], null),attrs113329], 0))):{'className':"p-1 mr-2"}),((cljs.core.map_QMARK_(attrs113329))?null:[daiquiri.interpreter.interpret(attrs113329)]));
})(),frontend$components$block$iter__113330(cljs.core.rest(s__113331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(invalid_properties);
})())]),daiquiri.core.create_element("code",null,["Property name begins with a non-numeric character and can contain alphanumeric characters and . * + ! - _ ? $ % & = < >. If -, + or . are the first character, the second character (if any) must be non-numeric."])]);
} else {
return null;
}
}),null,"frontend.components.block/invalid-properties-cp");
frontend.components.block.timestamp_cp = rum.core.lazy_build(rum.core.build_defcs,(function (state,block,typ,ast){
var ts_block_id = frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),ts_block_id);
var _STAR_show_datapicker_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","show-datepicker?","frontend.components.block/show-datepicker?",841903387));
return daiquiri.core.create_element("div",{'className':"flex flex-col gap-4 timestamp"},[daiquiri.core.create_element("div",{'className':"text-sm flex flex-row"},[daiquiri.core.create_element("div",{'className':"opacity-50 font-medium timestamp-label"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ),": "].join('')]),daiquiri.core.create_element("a",{'onMouseDown':(function (e){
frontend.util.stop(e);

frontend.state.clear_editor_action_BANG_();

frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(false);

if(active_QMARK_){
cljs.core.reset_BANG_(_STAR_show_datapicker_QMARK_,false);

cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);

return frontend.state.set_timestamp_block_BANG_(null);
} else {
cljs.core.reset_BANG_(_STAR_show_datapicker_QMARK_,true);

cljs.core.reset_BANG_(frontend.commands._STAR_current_command,typ);

return frontend.state.set_timestamp_block_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"typ","typ",-1304536900),typ], null));
}
}),'className':"opacity-80 hover:opacity-100"},[daiquiri.core.create_element("span",{'className':"time-start"},["<"]),(function (){var attrs113336 = frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1(ast);
return daiquiri.core.create_element("time",((cljs.core.map_QMARK_(attrs113336))?daiquiri.interpreter.element_attributes(attrs113336):null),((cljs.core.map_QMARK_(attrs113336))?null:[daiquiri.interpreter.interpret(attrs113336)]));
})(),daiquiri.core.create_element("span",{'className':"time-stop"},[">"])])]),(cljs.core.truth_((function (){var and__5041__auto__ = active_QMARK_;
if(and__5041__auto__){
return cljs.core.deref(_STAR_show_datapicker_QMARK_);
} else {
return and__5041__auto__;
}
})())?frontend.components.datetime.date_picker(null,null,frontend.handler.repeated.timestamp__GT_map(ast)):daiquiri.interpreter.interpret(cljs.core.reset_BANG_(_STAR_show_datapicker_QMARK_,false)))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.block","show-datepicker?","frontend.components.block/show-datepicker?",841903387))], null),"frontend.components.block/timestamp-cp");
frontend.components.block.target_forbidden_edit_QMARK_ = (function frontend$components$block$target_forbidden_edit_QMARK_(target){
var or__5043__auto__ = dommy.core.has_class_QMARK_(target,"forbid-edit");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = dommy.core.has_class_QMARK_(target,"bullet");
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = dommy.core.has_class_QMARK_(target,"logbook");
if(or__5043__auto____$2){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = frontend.util.link_QMARK_(target);
if(or__5043__auto____$3){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = frontend.util.time_QMARK_(target);
if(or__5043__auto____$4){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = frontend.util.input_QMARK_(target);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = frontend.util.audio_QMARK_(target);
if(or__5043__auto____$6){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = frontend.util.video_QMARK_(target);
if(or__5043__auto____$7){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = frontend.util.details_or_summary_QMARK_(target);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = ((frontend.util.sup_QMARK_(target)) && (dommy.core.has_class_QMARK_(target,"fn")));
if(or__5043__auto____$9){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = dommy.core.has_class_QMARK_(target,"image-resize");
if(or__5043__auto____$10){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,"a");
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".query-table");
}
}
}
}
}
}
}
}
}
}
}
}
});
frontend.components.block.block_content_on_mouse_down = (function frontend$components$block$block_content_on_mouse_down(e,block,block_id,content,edit_input_id){
if((cljs.core.count(content) > frontend.state.block_content_max_length(frontend.state.get_current_repo()))){
return null;
} else {
var target = frontend.components.block.goog$module$goog$object.get(e,"target");
var button = frontend.components.block.goog$module$goog$object.get(e,"buttons");
var shift_QMARK_ = frontend.components.block.goog$module$goog$object.get(e,"shiftKey");
var meta_QMARK_ = frontend.util.meta_key_QMARK_(e);
var forbidden_edit_QMARK_ = frontend.components.block.target_forbidden_edit_QMARK_(target);
if(((cljs.core.not(forbidden_edit_QMARK_)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null),button)))){
frontend.util.stop_propagation(e);

var selection_blocks = frontend.state.get_selection_blocks();
var starting_block = frontend.state.get_selection_start_block_or_first();
if(cljs.core.truth_((function (){var and__5041__auto__ = meta_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return shift_QMARK_;
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.empty_QMARK_(selection_blocks)){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,true);
}
} else {
if(cljs.core.truth_(meta_QMARK_)){
frontend.util.stop(e);

var block_dom_element_113743 = goog.dom.getElement(block_id);
if(cljs.core.truth_(cljs.core.some((function (p1__113339_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_dom_element_113743,p1__113339_SHARP_);
}),selection_blocks))){
frontend.state.drop_selection_block_BANG_(block_dom_element_113743);
} else {
frontend.state.conj_selection_block_BANG_(block_dom_element_113743,new cljs.core.Keyword(null,"down","down",1565245570));
}

if(cljs.core.empty_QMARK_(frontend.state.get_selection_blocks())){
return frontend.state.clear_selection_BANG_();
} else {
return frontend.state.set_selection_start_block_BANG_(block_id);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = shift_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return starting_block;
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

(frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));

return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
} else {
if(cljs.core.truth_(shift_QMARK_)){
(frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));

return frontend.state.set_selection_start_block_BANG_(block_id);
} else {
(frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));

frontend.handler.editor.unhighlight_blocks_BANG_();

var f = (function (){
var block__$1 = (function (){var or__5043__auto__ = (function (){var G__113341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__113341) : frontend.db.pull.call(null,G__113341));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block;
}
})();
var cursor_range = (function (){var G__113342 = goog.dom.getElement(block_id);
var G__113342__$1 = (((G__113342 == null))?null:dommy.utils.__GT_Array(G__113342.getElementsByClassName("block-content-wrapper")));
var G__113342__$2 = (((G__113342__$1 == null))?null:cljs.core.first(G__113342__$1));
if((G__113342__$2 == null)){
return null;
} else {
return frontend.util.caret_range(G__113342__$2);
}
})();
var map__113340 = block__$1;
var map__113340__$1 = cljs.core.__destructure_map(map__113340);
var content__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113340__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113340__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var content__$2 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format,content__$1));
var map__113343_113744 = frontend.handler.editor.get_state();
var map__113343_113745__$1 = cljs.core.__destructure_map(map__113343_113744);
var state_113746 = map__113343_113745__$1;
var value_113747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113343_113745__$1,new cljs.core.Keyword(null,"value","value",305978217));
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(state_113746,value_113747);

return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(edit_input_id,content__$2,block__$1,cursor_range,false);
});
if(cljs.core.truth_(frontend.util.ios_QMARK_())){
f();
} else {
setTimeout(f,(5));
}

return frontend.state.set_selection_start_block_BANG_(block_id);

}
}
}
}
} else {
return null;
}
}
});
frontend.components.block.dnd_separator_wrapper = rum.core.lazy_build(rum.core.build_defc,(function (block,block_id,slide_QMARK_,top_QMARK_,block_content_QMARK_){
var dragging_QMARK_ = rum.core.react(frontend.components.block._STAR_dragging_QMARK_);
var drag_to_block = rum.core.react(frontend.components.block._STAR_drag_to_block);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,drag_to_block);
if(and__5041__auto__){
var and__5041__auto____$1 = dragging_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core.not(slide_QMARK_)) && (cljs.core.not(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var move_to = rum.core.react(frontend.components.block._STAR_move_to);
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = top_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core.not(top_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961))));
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (function (){var and__5041__auto__ = block_content_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return ((cljs.core.not(block_content_QMARK_)) && (((cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849))))));
}
}
}
})())){
return null;
} else {
return frontend.components.block.dnd_separator(move_to,block_content_QMARK_);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/dnd-separator-wrapper");
frontend.components.block.clock_summary_cp = (function frontend$components$block$clock_summary_cp(block,body){
if(((frontend.state.enable_timetracking_QMARK_()) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block),"DONE")) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["TODO",null,"LATER",null], null), null),new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block))))))){
var summary = frontend.util.clock.clock_summary(body,true);
if(cljs.core.truth_((function (){var and__5041__auto__ = summary;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(summary,"0m")) && ((!(clojure.string.blank_QMARK_(summary)))));
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(100)], null)], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),(function (){
var temp__5804__auto__ = frontend.util.drawer.get_logbook(body);
if(cljs.core.truth_(temp__5804__auto__)){
var logbook = temp__5804__auto__;
var clocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__113344_SHARP_){
return clojure.string.starts_with_QMARK_(p1__113344_SHARP_,"CLOCK:");
}),cljs.core.last(logbook)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mb-2","div.font-bold.mb-2",2058752701),"LOGBOOK:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function frontend$components$block$clock_summary_cp_$_iter__113345(s__113346){
return (new cljs.core.LazySeq(null,(function (){
var s__113346__$1 = s__113346;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__113346__$1);
if(temp__5804__auto____$1){
var s__113346__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__113346__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113346__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113348 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113347 = (0);
while(true){
if((i__113347 < size__5519__auto__)){
var clock = cljs.core._nth(c__5518__auto__,i__113347);
cljs.core.chunk_append(b__113348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clock], null));

var G__113748 = (i__113347 + (1));
i__113347 = G__113748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113348),frontend$components$block$clock_summary_cp_$_iter__113345(cljs.core.chunk_rest(s__113346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113348),null);
}
} else {
var clock = cljs.core.first(s__113346__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clock], null),frontend$components$block$clock_summary_cp_$_iter__113345(cljs.core.rest(s__113346__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.reverse(clocks)));
})()], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"in-editor?","in-editor?",323048069),true,new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.time-spent.ml-1","div.text-sm.time-spent.ml-1",908707952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link","a.fade-link",-804169045),summary], null)], null))], null);
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.block_content_inner = (function frontend$components$block$block_content_inner(config,block,body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_){
if(cljs.core.truth_(plugin_slotted_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-slotted-body","div.block-slotted-body",-118968467),frontend.components.plugins.hook_block_slot(new cljs.core.Keyword(null,"block-content-slotted","block-content-slotted",-1577364335),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","page","block/page",822314108)], 0)))], null);
} else {
var title_collapse_enabled_QMARK_ = new cljs.core.Keyword("outliner","block-title-collapse-enabled?","outliner/block-title-collapse-enabled?",1547538161).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(block_ref_with_title_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.seq(body);
if(and__5041__auto____$1){
var or__5043__auto__ = cljs.core.not(title_collapse_enabled_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto____$2 = title_collapse_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto____$2)){
return ((cljs.core.not(collapsed_QMARK_)) || ((!((frontend.format.mldoc.extract_first_query_from_ast(body) == null)))));
} else {
return and__5041__auto____$2;
}
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-body","div.block-body",-1586332448),(function (){var body__$1 = frontend.format.block.trim_break_lines_BANG_(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));
var iter__5520__auto__ = (function frontend$components$block$block_content_inner_$_iter__113349(s__113350){
return (new cljs.core.LazySeq(null,(function (){
var s__113350__$1 = s__113350;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113350__$1);
if(temp__5804__auto__){
var s__113350__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113350__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113350__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113352 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113351 = (0);
while(true){
if((i__113351 < size__5519__auto__)){
var vec__113353 = cljs.core._nth(c__5518__auto__,i__113351);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113353,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113353,(1),null);
cljs.core.chunk_append(b__113352,(function (){var temp__5804__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config,child) : frontend.components.block.markup_element_cp.call(null,config,child));
if(cljs.core.truth_(temp__5804__auto____$1)){
var block__$1 = temp__5804__auto____$1;
return rum.core.with_key(frontend.components.block.block_child(block__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.uuid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
} else {
return null;
}
})());

var G__113749 = (i__113351 + (1));
i__113351 = G__113749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113352),frontend$components$block$block_content_inner_$_iter__113349(cljs.core.chunk_rest(s__113350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113352),null);
}
} else {
var vec__113356 = cljs.core.first(s__113350__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113356,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113356,(1),null);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config,child) : frontend.components.block.markup_element_cp.call(null,config,child));
if(cljs.core.truth_(temp__5804__auto____$1)){
var block__$1 = temp__5804__auto____$1;
return rum.core.with_key(frontend.components.block.block_child(block__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.uuid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
} else {
return null;
}
})(),frontend$components$block$block_content_inner_$_iter__113349(cljs.core.rest(s__113350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(body__$1));
})()], null);
} else {
return null;
}
}
});
frontend.components.block.block_content = rum.core.lazy_build(rum.core.build_defc,(function (config,p__113376,edit_input_id,block_id,slide_QMARK_,selected_QMARK_){
var map__113377 = p__113376;
var map__113377__$1 = cljs.core.__destructure_map(map__113377);
var block = map__113377__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var scheduled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","scheduled","block/scheduled",584810412));
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","deadline","block/deadline",660945231));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113377__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var content__$1 = frontend.util.property.remove_built_in_properties(format,content);
var map__113378 = (cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))?block:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,format,pre_block_QMARK_,content__$1)], 0)));
var map__113378__$1 = cljs.core.__destructure_map(map__113378);
var block__$1 = map__113378__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113378__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113378__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
var collapsed_QMARK_ = frontend.util.collapsed_QMARK_(block__$1);
var plugin_slotted_QMARK_ = (function (){var and__5041__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.slot_hook_exist_QMARK_(uuid);
} else {
return and__5041__auto__;
}
})();
var block_ref_QMARK_ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config);
var stop_events_QMARK_ = new cljs.core.Keyword(null,"stop-events?","stop-events?",-151471572).cljs$core$IFn$_invoke$arity$1(config);
var block_ref_with_title_QMARK_ = (function (){var and__5041__auto__ = block_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(frontend.state.show_full_blocks_QMARK_())) && (cljs.core.seq(title)));
} else {
return and__5041__auto__;
}
})();
var block_type = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"ls-type","ls-type",1383834313).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var content__$2 = ((typeof content__$1 === 'string')?clojure.string.trim(content__$1):"");
var mouse_down_key = (cljs.core.truth_(frontend.util.ios_QMARK_())?new cljs.core.Keyword(null,"on-click","on-click",1632826543):new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var attrs = (function (){var G__113379 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"data-type","data-type",-326421468),cljs.core.name(block_type),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(stop_events_QMARK_)?"none":null)], null)], null);
var G__113379__$1 = (((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"hl-color","hl-color",1100781725).cljs$core$IFn$_invoke$arity$1(properties)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113379,new cljs.core.Keyword(null,"data-hl-color","data-hl-color",-1003439204),new cljs.core.Keyword(null,"hl-color","hl-color",1100781725).cljs$core$IFn$_invoke$arity$1(properties)):G__113379);
if(cljs.core.not(block_ref_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113379__$1,mouse_down_key,(function (e){
return frontend.components.block.block_content_on_mouse_down(e,block__$1,block_id,content__$2,edit_input_id);
}));
} else {
return G__113379__$1;
}
})();
var attrs113361 = (function (){var G__113380 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["block-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"select-none":null),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (e){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.includes_QMARK_(content__$2,"```")))) && (((cljs.core.not(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))) && (cljs.core.not(frontend.util.meta_key_QMARK_(e))))));
} else {
return and__5041__auto__;
}
})())){
return (frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));
} else {
return null;
}
})], null);
if(cljs.core.not(slide_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__113380,attrs], 0));
} else {
return G__113380;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113361))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-content","inline"], null)], null),attrs113361], 0))):{'className':"block-content inline"}),((cljs.core.map_QMARK_(attrs113361))?[(function (){var attrs113362 = (((((content__$2).length) > frontend.state.block_content_max_length(frontend.state.get_current_repo())))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning.text-sm","div.warning.text-sm",-192579545),"Large block will not be editable or searchable to not slow down the app, please use another editor to edit this block."], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs113362))?daiquiri.interpreter.element_attributes(attrs113362):null),((cljs.core.map_QMARK_(attrs113362))?[(function (){var attrs113363 = (cljs.core.truth_(plugin_slotted_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.w-full","div.flex-1.w-full",-1957339377),(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.seq(title);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?frontend.components.block.build_block_title(config,block__$1):null
)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113363))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","block-content-inner"], null)], null),attrs113363], 0))):{'className':"flex flex-row justify-between block-content-inner"}),((cljs.core.map_QMARK_(attrs113363))?[daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]:[daiquiri.interpreter.interpret(attrs113363),daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]));
})(),((cljs.core.seq(children))?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,slide_QMARK_,false,true):null),(cljs.core.truth_(deadline)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_deadline_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var deadline_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"DEADLINE",deadline_ast);
} else {
return null;
}
})()):null),(cljs.core.truth_(scheduled)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_scheduled_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var scheduled_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"SCHEDULED",scheduled_ast);
} else {
return null;
}
})()):null),daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var invalid_properties = temp__5804__auto__;
return frontend.components.block.invalid_properties_cp(invalid_properties);
} else {
return null;
}
})()),(((function (){var and__5041__auto__ = cljs.core.seq(properties);
if(and__5041__auto__){
var and__5041__auto____$1 = (function (){var hidden_QMARK_ = frontend.util.property.properties_hidden_QMARK_(properties);
return cljs.core.not(hidden_QMARK_);
})();
if(and__5041__auto____$1){
return ((cljs.core.not((function (){var and__5041__auto____$2 = block_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto____$2)){
return ((cljs.core.seq(title)) || (cljs.core.seq(body)));
} else {
return and__5041__auto____$2;
}
})())) && (((cljs.core.not(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.components.block.properties_cp(config,block__$1):null),daiquiri.interpreter.interpret(frontend.components.block.block_content_inner(config,block__$1,body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_)),(function (){var G__113381 = new cljs.core.Keyword("block","warning","block/warning",2131709542).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__113381__$1 = (((G__113381 instanceof cljs.core.Keyword))?G__113381.fqn:null);
switch (G__113381__$1) {
case "multiple-blocks":
return daiquiri.core.create_element("p",{'className':"warning text-sm"},["Full content is not displayed, Logseq doesn't support multiple unordered lists or headings in a block."]);

break;
default:
return null;

}
})()]:[daiquiri.interpreter.interpret(attrs113362),(function (){var attrs113366 = (cljs.core.truth_(plugin_slotted_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.w-full","div.flex-1.w-full",-1957339377),(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.seq(title);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?frontend.components.block.build_block_title(config,block__$1):null
)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113366))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","block-content-inner"], null)], null),attrs113366], 0))):{'className':"flex flex-row justify-between block-content-inner"}),((cljs.core.map_QMARK_(attrs113366))?[daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]:[daiquiri.interpreter.interpret(attrs113366),daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]));
})(),((cljs.core.seq(children))?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,slide_QMARK_,false,true):null),(cljs.core.truth_(deadline)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_deadline_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var deadline_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"DEADLINE",deadline_ast);
} else {
return null;
}
})()):null),(cljs.core.truth_(scheduled)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_scheduled_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var scheduled_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"SCHEDULED",scheduled_ast);
} else {
return null;
}
})()):null),daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var invalid_properties = temp__5804__auto__;
return frontend.components.block.invalid_properties_cp(invalid_properties);
} else {
return null;
}
})()),(((function (){var and__5041__auto__ = cljs.core.seq(properties);
if(and__5041__auto__){
var and__5041__auto____$1 = (function (){var hidden_QMARK_ = frontend.util.property.properties_hidden_QMARK_(properties);
return cljs.core.not(hidden_QMARK_);
})();
if(and__5041__auto____$1){
return ((cljs.core.not((function (){var and__5041__auto____$2 = block_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto____$2)){
return ((cljs.core.seq(title)) || (cljs.core.seq(body)));
} else {
return and__5041__auto____$2;
}
})())) && (((cljs.core.not(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.components.block.properties_cp(config,block__$1):null),daiquiri.interpreter.interpret(frontend.components.block.block_content_inner(config,block__$1,body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_)),(function (){var G__113382 = new cljs.core.Keyword("block","warning","block/warning",2131709542).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__113382__$1 = (((G__113382 instanceof cljs.core.Keyword))?G__113382.fqn:null);
switch (G__113382__$1) {
case "multiple-blocks":
return daiquiri.core.create_element("p",{'className':"warning text-sm"},["Full content is not displayed, Logseq doesn't support multiple unordered lists or headings in a block."]);

break;
default:
return null;

}
})()]));
})()]:[daiquiri.interpreter.interpret(attrs113361),(function (){var attrs113369 = (((((content__$2).length) > frontend.state.block_content_max_length(frontend.state.get_current_repo())))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning.text-sm","div.warning.text-sm",-192579545),"Large block will not be editable or searchable to not slow down the app, please use another editor to edit this block."], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs113369))?daiquiri.interpreter.element_attributes(attrs113369):null),((cljs.core.map_QMARK_(attrs113369))?[(function (){var attrs113370 = (cljs.core.truth_(plugin_slotted_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.w-full","div.flex-1.w-full",-1957339377),(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.seq(title);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?frontend.components.block.build_block_title(config,block__$1):null
)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113370))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","block-content-inner"], null)], null),attrs113370], 0))):{'className':"flex flex-row justify-between block-content-inner"}),((cljs.core.map_QMARK_(attrs113370))?[daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]:[daiquiri.interpreter.interpret(attrs113370),daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]));
})(),((cljs.core.seq(children))?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,slide_QMARK_,false,true):null),(cljs.core.truth_(deadline)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_deadline_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var deadline_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"DEADLINE",deadline_ast);
} else {
return null;
}
})()):null),(cljs.core.truth_(scheduled)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_scheduled_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var scheduled_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"SCHEDULED",scheduled_ast);
} else {
return null;
}
})()):null),daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var invalid_properties = temp__5804__auto__;
return frontend.components.block.invalid_properties_cp(invalid_properties);
} else {
return null;
}
})()),(((function (){var and__5041__auto__ = cljs.core.seq(properties);
if(and__5041__auto__){
var and__5041__auto____$1 = (function (){var hidden_QMARK_ = frontend.util.property.properties_hidden_QMARK_(properties);
return cljs.core.not(hidden_QMARK_);
})();
if(and__5041__auto____$1){
return ((cljs.core.not((function (){var and__5041__auto____$2 = block_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto____$2)){
return ((cljs.core.seq(title)) || (cljs.core.seq(body)));
} else {
return and__5041__auto____$2;
}
})())) && (((cljs.core.not(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.components.block.properties_cp(config,block__$1):null),daiquiri.interpreter.interpret(frontend.components.block.block_content_inner(config,block__$1,body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_)),(function (){var G__113383 = new cljs.core.Keyword("block","warning","block/warning",2131709542).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__113383__$1 = (((G__113383 instanceof cljs.core.Keyword))?G__113383.fqn:null);
switch (G__113383__$1) {
case "multiple-blocks":
return daiquiri.core.create_element("p",{'className':"warning text-sm"},["Full content is not displayed, Logseq doesn't support multiple unordered lists or headings in a block."]);

break;
default:
return null;

}
})()]:[daiquiri.interpreter.interpret(attrs113369),(function (){var attrs113373 = (cljs.core.truth_(plugin_slotted_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.w-full","div.flex-1.w-full",-1957339377),(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.seq(title);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?frontend.components.block.build_block_title(config,block__$1):null
)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113373))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","block-content-inner"], null)], null),attrs113373], 0))):{'className':"flex flex-row justify-between block-content-inner"}),((cljs.core.map_QMARK_(attrs113373))?[daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]:[daiquiri.interpreter.interpret(attrs113373),daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]));
})(),((cljs.core.seq(children))?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,slide_QMARK_,false,true):null),(cljs.core.truth_(deadline)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_deadline_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var deadline_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"DEADLINE",deadline_ast);
} else {
return null;
}
})()):null),(cljs.core.truth_(scheduled)?daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.handler.block.get_scheduled_ast(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var scheduled_ast = temp__5804__auto__;
return frontend.components.block.timestamp_cp(block__$1,"SCHEDULED",scheduled_ast);
} else {
return null;
}
})()):null),daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword("block","invalid-properties","block/invalid-properties",1509592872).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var invalid_properties = temp__5804__auto__;
return frontend.components.block.invalid_properties_cp(invalid_properties);
} else {
return null;
}
})()),(((function (){var and__5041__auto__ = cljs.core.seq(properties);
if(and__5041__auto__){
var and__5041__auto____$1 = (function (){var hidden_QMARK_ = frontend.util.property.properties_hidden_QMARK_(properties);
return cljs.core.not(hidden_QMARK_);
})();
if(and__5041__auto____$1){
return ((cljs.core.not((function (){var and__5041__auto____$2 = block_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto____$2)){
return ((cljs.core.seq(title)) || (cljs.core.seq(body)));
} else {
return and__5041__auto____$2;
}
})())) && (((cljs.core.not(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.components.block.properties_cp(config,block__$1):null),daiquiri.interpreter.interpret(frontend.components.block.block_content_inner(config,block__$1,body,plugin_slotted_QMARK_,collapsed_QMARK_,block_ref_with_title_QMARK_)),(function (){var G__113384 = new cljs.core.Keyword("block","warning","block/warning",2131709542).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__113384__$1 = (((G__113384 instanceof cljs.core.Keyword))?G__113384.fqn:null);
switch (G__113384__$1) {
case "multiple-blocks":
return daiquiri.core.create_element("p",{'className':"warning text-sm"},["Full content is not displayed, Logseq doesn't support multiple unordered lists or headings in a block."]);

break;
default:
return null;

}
})()]));
})()]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-content");
frontend.components.block.block_refs_count = rum.core.lazy_build(rum.core.build_defc,(function (block,_STAR_hide_block_refs_QMARK_){
var block_refs_count = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block));
if((block_refs_count > (0))){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'title':"Open block references",'style':{'marginTop':(-1)},'onClick':(function (e){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_hide_block_refs_QMARK_,cljs.core.not);
}
}),'className':"open-block-ref-link bg-base-2 text-sm ml-2 fade-link"},[block_refs_count])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.block/block-refs-count");
frontend.components.block.block_left_menu = rum.core.lazy_build(rum.core.build_defc,(function (_config,p__113385){
var map__113386 = p__113385;
var map__113386__$1 = cljs.core.__destructure_map(map__113386);
var _block = map__113386__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113386__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
return daiquiri.core.create_element("div",{'className':"block-left-menu flex bg-base-2 rounded-r-md mr-1"},[daiquiri.core.create_element("div",{'id':["block-left-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),'className':"commands-button w-0 rounded-r-md"},[(function (){var attrs113387 = frontend.ui.icon("indent-increase",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113387))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["indent"], null)], null),attrs113387], 0))):{'className':"indent"}),((cljs.core.map_QMARK_(attrs113387))?null:[daiquiri.interpreter.interpret(attrs113387)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-left-menu");
frontend.components.block.block_right_menu = rum.core.lazy_build(rum.core.build_defc,(function (_config,p__113388,edit_QMARK_){
var map__113389 = p__113388;
var map__113389__$1 = cljs.core.__destructure_map(map__113389);
var _block = map__113389__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113389__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
return daiquiri.core.create_element("div",{'className':"block-right-menu flex bg-base-2 rounded-md ml-1"},[daiquiri.core.create_element("div",{'id':["block-right-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),'style':{'maxWidth':(cljs.core.truth_(edit_QMARK_)?(40):(80))},'className':"commands-button w-0 rounded-md"},[(function (){var attrs113390 = frontend.ui.icon("indent-decrease",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113390))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["outdent"], null)], null),attrs113390], 0))):{'className':"outdent"}),((cljs.core.map_QMARK_(attrs113390))?null:[daiquiri.interpreter.interpret(attrs113390)]));
})(),(cljs.core.truth_(edit_QMARK_)?null:(function (){var attrs113391 = frontend.ui.icon("dots-circle-horizontal",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113391))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["more"], null)], null),attrs113391], 0))):{'className':"more"}),((cljs.core.map_QMARK_(attrs113391))?null:[daiquiri.interpreter.interpret(attrs113391)]));
})())])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-right-menu");
frontend.components.block.block_content_or_editor = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,p__113392,edit_input_id,block_id,edit_QMARK_,hide_block_refs_count_QMARK_,selected_QMARK_){
var map__113393 = p__113392;
var map__113393__$1 = cljs.core.__destructure_map(map__113393);
var block = map__113393__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113393__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113393__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var _STAR_hide_block_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","hide-block-refs?","frontend.components.block/hide-block-refs?",1482805904));
var hide_block_refs_QMARK_ = rum.core.react(_STAR_hide_block_refs_QMARK_);
var editor_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"editor-box","editor-box",708759870));
var editor_id = ["editor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(edit_input_id)].join('');
var slide_QMARK_ = new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config);
var block_reference_only_QMARK_ = (function (){var G__113394 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var G__113394__$1 = (((G__113394 == null))?null:clojure.string.trim(G__113394));
if((G__113394__$1 == null)){
return null;
} else {
return logseq.graph_parser.util.block_ref.block_ref_QMARK_(G__113394__$1);
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = edit_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return editor_box;
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("div",{'id':editor_id,'className':"editor-wrapper"},[frontend.ui.catch_error(frontend.ui.block_error("Something wrong in the editor",cljs.core.PersistentArrayMap.EMPTY),(function (){var G__113398 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"block-id","block-id",-70582834),uuid,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550),block_id,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (value,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"esc","esc",-1671924121))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_state(),value);

var select_QMARK_ = (!(clojure.string.includes_QMARK_(value,"```")));
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(select_QMARK_);
} else {
return null;
}
})], null);
var G__113399 = edit_input_id;
var G__113400 = config;
return (editor_box.cljs$core$IFn$_invoke$arity$3 ? editor_box.cljs$core$IFn$_invoke$arity$3(G__113398,G__113399,G__113400) : editor_box.call(null,G__113398,G__113399,G__113400));
})())]);
} else {
var refs_count = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block));
return daiquiri.core.create_element("div",{'className':"flex flex-col block-content-wrapper"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'style':{'display':(cljs.core.truth_(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))?"block":"flex")},'className':"flex-1 w-full"},[frontend.ui.catch_error(frontend.ui.block_error("Block Render Error:",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"section-attrs","section-attrs",1373816150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));

frontend.handler.editor.unhighlight_blocks_BANG_();

return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4(edit_input_id,new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),block,"");
})], null)], null)),frontend.components.block.block_content(config,block,edit_input_id,block_id,slide_QMARK_,selected_QMARK_))]),(cljs.core.truth_(hide_block_refs_count_QMARK_)?null:(function (){var attrs113407 = (cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.hover:opacity-100.svg-small.inline","a.opacity-70.hover:opacity-100.svg-small.inline",-454542425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

var temp__5804__auto__ = new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var block__$1 = temp__5804__auto__;
var G__113408 = block__$1;
var G__113409 = new cljs.core.Keyword(null,"max","max",61366548);
var G__113410 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__113408,G__113409,G__113410) : frontend.handler.editor.edit_block_BANG_.call(null,G__113408,G__113409,G__113410));
} else {
return null;
}
})], null),frontend.components.svg.edit], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113407))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs113407], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs113407))?[(cljs.core.truth_(block_reference_only_QMARK_)?daiquiri.core.create_element("a",{'onMouseDown':(function (e){
frontend.util.stop(e);

var G__113411 = block;
var G__113412 = new cljs.core.Keyword(null,"max","max",61366548);
var G__113413 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__113411,G__113412,G__113413) : frontend.handler.editor.edit_block_BANG_.call(null,G__113411,G__113412,G__113413));
}),'className':"opacity-70 hover:opacity-100 svg-small inline"},[daiquiri.interpreter.interpret(frontend.components.svg.edit)]):null),frontend.components.block.block_refs_count(block,_STAR_hide_block_refs_QMARK_)]:[daiquiri.interpreter.interpret(attrs113407),(cljs.core.truth_(block_reference_only_QMARK_)?daiquiri.core.create_element("a",{'onMouseDown':(function (e){
frontend.util.stop(e);

var G__113414 = block;
var G__113415 = new cljs.core.Keyword(null,"max","max",61366548);
var G__113416 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__113414,G__113415,G__113416) : frontend.handler.editor.edit_block_BANG_.call(null,G__113414,G__113415,G__113416));
}),'className':"opacity-70 hover:opacity-100 svg-small inline"},[daiquiri.interpreter.interpret(frontend.components.svg.edit)]):null),frontend.components.block.block_refs_count(block,_STAR_hide_block_refs_QMARK_)]));
})())]),((((cljs.core.not(hide_block_refs_QMARK_)) && ((refs_count > (0)))))?(function (){var refs_cp = frontend.state.get_component(new cljs.core.Keyword("block","linked-references","block/linked-references",-2022711478));
return daiquiri.interpreter.interpret((refs_cp.cljs$core$IFn$_invoke$arity$1 ? refs_cp.cljs$core$IFn$_invoke$arity$1(uuid) : refs_cp.call(null,uuid)));
})():null)]);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var block = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var config = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var current_block_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),frontend.state.get_current_page());
var embed_self_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return and__5041__auto__;
}
})();
var default_hide_QMARK_ = (cljs.core.truth_((function (){var and__5041__auto__ = current_block_page_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not(embed_self_QMARK_);
if(and__5041__auto____$1){
return frontend.state.auto_expand_block_refs_QMARK_();
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?false:true);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","hide-block-refs?","frontend.components.block/hide-block-refs?",1482805904),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_hide_QMARK_));
})], null)], null),"frontend.components.block/block-content-or-editor");
frontend.components.block.single_block_cp_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,block_uuid){
var uuid = ((typeof block_uuid === 'string')?cljs.core.uuid(block_uuid):block_uuid);
var _STAR_init_blocks_container_id = new cljs.core.Keyword("frontend.components.block","init-blocks-container-id","frontend.components.block/init-blocks-container-id",882492668).cljs$core$IFn$_invoke$arity$1(state);
var block_entity = (function (){var G__113417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113417) : frontend.db.entity.call(null,G__113417));
})();
var block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_entity);
var block = cljs.core.first(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),block_id));
var blocks_container_id = (cljs.core.truth_(cljs.core.deref(_STAR_init_blocks_container_id))?cljs.core.deref(_STAR_init_blocks_container_id):(function (){var id_SINGLEQUOTE_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.block._STAR_blocks_container_id,cljs.core.inc);
cljs.core.reset_BANG_(_STAR_init_blocks_container_id,id_SINGLEQUOTE_);

return id_SINGLEQUOTE_;
})());
var block_el_id = ["ls-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_entity),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword(null,"block?","block?",1102479923),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.state.get_component(new cljs.core.Keyword("editor","box","editor/box",-1921770435))], null);
var edit_input_id = ["edit-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
var edit_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),edit_input_id], null));
var block__$1 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1))){
return daiquiri.core.create_element("div",{'id':["ls-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["single-block","ls-block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)], null))},[frontend.components.block.block_content_or_editor(config,block__$1,edit_input_id,block_el_id,edit_QMARK_,true,false)]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","init-blocks-container-id","frontend.components.block/init-blocks-container-id",882492668),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
})], null)], null),"frontend.components.block/single-block-cp-inner");
frontend.components.block.single_block_cp = rum.core.lazy_build(rum.core.build_defc,(function (block_uuid){
return frontend.components.block.single_block_cp_inner(block_uuid);
}),null,"frontend.components.block/single-block-cp");
frontend.components.block.non_dragging_QMARK_ = (function frontend$components$block$non_dragging_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.block.goog$module$goog$object.get(e,"buttons"),(1))) && ((((!(dommy.core.has_class_QMARK_(frontend.components.block.goog$module$goog$object.get(e,"target"),"bullet-container")))) && ((((!(dommy.core.has_class_QMARK_(frontend.components.block.goog$module$goog$object.get(e,"target"),"bullet")))) && (cljs.core.not(cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_))))))));
});
frontend.components.block.breadcrumb_fragment = rum.core.lazy_build(rum.core.build_defc,(function (config,block,label,opts){
return daiquiri.core.create_element("a",{'onMouseUp':(function (e){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
frontend.util.stop(e);

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
if(frontend.util.atom_QMARK_(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(opts))){
frontend.util.stop(e);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
if((!((new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565).cljs$core$IFn$_invoke$arity$1(config) == null)))){
frontend.util.stop(e);

return frontend.state.sidebar_replace_block_BANG_(new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210))], null));
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));

}
}
}
})},[daiquiri.interpreter.interpret(label)]);
}),null,"frontend.components.block/breadcrumb-fragment");
frontend.components.block.breadcrumb_separator = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret(frontend.ui.icon("chevron-right",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50 mx-1"], null)));
}),null,"frontend.components.block/breadcrumb-separator");
/**
 * block-id - uuid of the target block of breadcrumb. page uuid is also acceptable
 */
frontend.components.block.breadcrumb = (function frontend$components$block$breadcrumb(config,repo,block_id,p__113418){
var map__113419 = p__113418;
var map__113419__$1 = cljs.core.__destructure_map(map__113419);
var opts = map__113419__$1;
var show_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__113419__$1,new cljs.core.Keyword(null,"show-page?","show-page?",792494155),true);
var indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113419__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var end_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113419__$1,new cljs.core.Keyword(null,"end-separator?","end-separator?",424414922));
var level_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__113419__$1,new cljs.core.Keyword(null,"level-limit","level-limit",-1660435238),(3));
var _navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113419__$1,new cljs.core.Keyword(null,"_navigating-block","_navigating-block",-946999864));
if(cljs.core.truth_(block_id)){
var parents = (function (){var G__113420 = repo;
var G__113421 = block_id;
var G__113422 = (level_limit + (1));
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__113420,G__113421,G__113422) : frontend.db.get_block_parents.call(null,G__113420,G__113421,G__113422));
})();
var page = (function (){var or__5043__auto__ = (frontend.db.get_block_page.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_page.cljs$core$IFn$_invoke$arity$2(repo,block_id) : frontend.db.get_block_page.call(null,repo,block_id));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.query_block_by_uuid(block_id);
}
})();
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
var page_original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var show_QMARK_ = (function (){var or__5043__auto__ = cljs.core.seq(parents);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = show_page_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return page_name;
}
}
})();
var parents__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.first(parents))))?cljs.core.rest(parents):parents);
var more_QMARK_ = (cljs.core.count(parents__$1) > level_limit);
var parents__$2 = ((more_QMARK_)?cljs.core.take_last(level_limit,parents__$1):parents__$1);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363),true);
if(cljs.core.truth_(show_QMARK_)){
var page_name_props = (cljs.core.truth_(show_page_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,frontend.components.block.page_cp(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config__$1,new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var or__5043__auto__ = page_original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})()], null)], null):null);
var parents_props = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$block$breadcrumb_$_iter__113423(s__113424){
return (new cljs.core.LazySeq(null,(function (){
var s__113424__$1 = s__113424;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113424__$1);
if(temp__5804__auto__){
var s__113424__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113424__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113424__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113426 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113425 = (0);
while(true){
if((i__113425 < size__5519__auto__)){
var map__113427 = cljs.core._nth(c__5518__auto__,i__113425);
var map__113427__$1 = cljs.core.__destructure_map(map__113427);
var block = map__113427__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113427__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113427__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113427__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
cljs.core.chunk_append(b__113426,(cljs.core.truth_(name)?null:(function (){var map__113428 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),content);
var map__113428__$1 = cljs.core.__destructure_map(map__113428);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113428__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113428__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,(cljs.core.truth_(title)?((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span.inline-wrap","span.inline-wrap",1406069834),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$2,title) : frontend.components.block.map_inline.call(null,config__$2,title))):frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config__$2,body) : frontend.components.block.markup_elements_cp.call(null,config__$2,body)))):null)], null);
})()));

var G__113754 = (i__113425 + (1));
i__113425 = G__113754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113426),frontend$components$block$breadcrumb_$_iter__113423(cljs.core.chunk_rest(s__113424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113426),null);
}
} else {
var map__113429 = cljs.core.first(s__113424__$2);
var map__113429__$1 = cljs.core.__destructure_map(map__113429);
var block = map__113429__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113429__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113429__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113429__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
return cljs.core.cons((cljs.core.truth_(name)?null:(function (){var map__113430 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),content);
var map__113430__$1 = cljs.core.__destructure_map(map__113430);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113430__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113430__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,(cljs.core.truth_(title)?((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span.inline-wrap","span.inline-wrap",1406069834),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$2,title) : frontend.components.block.map_inline.call(null,config__$2,title))):frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config__$2,body) : frontend.components.block.markup_elements_cp.call(null,config__$2,body)))):null)], null);
})()),frontend$components$block$breadcrumb_$_iter__113423(cljs.core.rest(s__113424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(parents__$2);
})());
var breadcrumb = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(frontend.components.block.breadcrumb_separator(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(x);
if(and__5041__auto__){
return cljs.core.second(x);
} else {
return and__5041__auto__;
}
})())){
var vec__113431 = x;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113431,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113431,(1),null);
return rum.core.with_key(frontend.components.block.breadcrumb_fragment(config__$1,block,label,opts),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),"\u22EF"], null);
}
}),cljs.core.filterv(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name_props], null),((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"more","more",-2058821800)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,parents_props)], 0)))));
if(cljs.core.seq(breadcrumb)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.breadcrumb.block-parents","div.breadcrumb.block-parents",-1437967412),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.seq(breadcrumb))?[(cljs.core.truth_(new cljs.core.Keyword(null,"search?","search?",785472524).cljs$core$IFn$_invoke$arity$1(config__$1))?null:" my-2"),(cljs.core.truth_(indent_QMARK_)?" ml-4":null)].join(''):null)], null),((((new cljs.core.Keyword(null,"top-level?","top-level?",993634489).cljs$core$IFn$_invoke$arity$1(config__$1) === false) && (cljs.core.seq(parents__$2))))?frontend.components.block.breadcrumb_separator():null),breadcrumb,(cljs.core.truth_(end_separator_QMARK_)?frontend.components.block.breadcrumb_separator():null)], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.block_drag_over = (function frontend$components$block$block_drag_over(event,uuid,top_QMARK_,block_id,_STAR_move_to){
frontend.util.stop(event);

if(frontend.components.block.dnd_same_block_QMARK_(uuid)){
return null;
} else {
var over_block = goog.dom.getElement(block_id);
var rect = module$frontend$utils.getOffsetRect(over_block);
var element_top = frontend.components.block.goog$module$goog$object.get(rect,"top");
var element_left = frontend.components.block.goog$module$goog$object.get(rect,"left");
var x_offset = (event.pageX - element_left);
var cursor_top = frontend.components.block.goog$module$goog$object.get(event,"clientY");
var move_to_value = (cljs.core.truth_((function (){var and__5041__auto__ = top_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (Math.abs((cursor_top - element_top)) <= (16));
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword(null,"top","top",-1856271961):(((x_offset > (50)))?new cljs.core.Keyword(null,"nested","nested",18943849):new cljs.core.Keyword(null,"sibling","sibling",-1183865000)
));
cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,block_id);

return cljs.core.reset_BANG_(_STAR_move_to,move_to_value);
}
});
frontend.components.block.block_drag_leave = (function frontend$components$block$block_drag_leave(_STAR_move_to){
return cljs.core.reset_BANG_(_STAR_move_to,null);
});
frontend.components.block.block_drag_end = (function frontend$components$block$block_drag_end(var_args){
var G__113435 = arguments.length;
switch (G__113435) {
case 1:
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$1 = (function (_event){
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2(_event,frontend.components.block._STAR_move_to);
}));

(frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2 = (function (_event,_STAR_move_to){
cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,false);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,null);

cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,null);

cljs.core.reset_BANG_(_STAR_move_to,null);

return frontend.handler.editor.unhighlight_blocks_BANG_();
}));

(frontend.components.block.block_drag_end.cljs$lang$maxFixedArity = 2);

/**
 * Block on-drop handler
 */
frontend.components.block.block_drop = (function frontend$components$block$block_drop(event,uuid,target_block,_STAR_move_to){
frontend.util.stop(event);

if(frontend.components.block.dnd_same_block_QMARK_(uuid)){
} else {
var block_uuids_113756 = frontend.state.get_selection_block_ids();
var lookup_refs_113757 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids_113756);
var selected_113758 = (function (){var G__113436 = frontend.state.get_current_repo();
var G__113437 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__113438 = lookup_refs_113757;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__113436,G__113437,G__113438) : frontend.db.pull_many.call(null,G__113436,G__113437,G__113438));
})();
var blocks_113759 = ((cljs.core.seq(selected_113758))?selected_113758:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(frontend.components.block._STAR_dragging_block)], null));
var blocks_113760__$1 = frontend.components.block.remove_nils(blocks_113759);
if(cljs.core.seq(blocks_113760__$1)){
frontend.handler.dnd.move_blocks(event,blocks_113760__$1,target_block,cljs.core.deref(_STAR_move_to));
} else {
var repo_113761 = frontend.state.get_current_repo();
var data_transfer_113762 = event.dataTransfer;
var transfer_types_113763 = cljs.core.set(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data_transfer_113762.types));
if(cljs.core.contains_QMARK_(transfer_types_113763,"text/plain")){
var text_113764 = data_transfer_113762.getData("text/plain");
frontend.handler.editor.api_insert_new_block_BANG_(text_113764,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),uuid,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_move_to),new cljs.core.Keyword(null,"sibling","sibling",-1183865000)),new cljs.core.Keyword(null,"before?","before?",765621039),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_move_to),new cljs.core.Keyword(null,"top","top",-1856271961))], null));
} else {
if(cljs.core.contains_QMARK_(transfer_types_113763,"Files")){
var files_113765 = data_transfer_113762.files;
var format_113766 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block);
if(((frontend.config.local_db_QMARK_(repo_113761)) && (cljs.core.not(frontend.state.editing_QMARK_())))){
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$2(repo_113761,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files_113765)),(function (res){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(res);
if(and__5041__auto__){
return cljs.core.first(res);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var vec__113439 = temp__5804__auto__;
var asset_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113439,(0),null);
var file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113439,(1),null);
var asset_file_fpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113439,(2),null);
var matched_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113439,(3),null);
var image_QMARK_ = frontend.config.ext_of_image_QMARK_(asset_file_name);
var link_content = frontend.handler.assets.get_asset_file_link(format_113766,(cljs.core.truth_(matched_alias)?[(cljs.core.truth_(image_QMARK_)?"../assets/":""),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(matched_alias)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_file_name)].join(''):frontend.handler.editor.resolve_relative_path((function (){var or__5043__auto__ = asset_file_fpath;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return asset_file_name;
}
})())),(cljs.core.truth_(file_obj)?file_obj.name:(cljs.core.truth_(image_QMARK_)?"image":"asset")),image_QMARK_);
return frontend.handler.editor.api_insert_new_block_BANG_(link_content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),uuid,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"before?","before?",765621039),false], null));
} else {
return null;
}
}));
} else {
}
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.block","unhandled-drop-data-transfer-type","frontend.components.block/unhandled-drop-data-transfer-type",742412087),transfer_types_113763], 0));

}
}
}
}

return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2(event,_STAR_move_to);
});
frontend.components.block.block_mouse_over = (function frontend$components$block$block_mouse_over(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_){
if(cljs.core.truth_(cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_))){
return null;
} else {
frontend.util.stop(e);

cljs.core.reset_BANG_(_STAR_control_show_QMARK_,true);

var temp__5804__auto___113767 = goog.dom.getElement(block_id);
if(cljs.core.truth_(temp__5804__auto___113767)){
var parent_113768 = temp__5804__auto___113767;
var node_113769 = parent_113768.querySelector(".bullet-container");
if(cljs.core.truth_(doc_mode_QMARK_)){
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node_113769,"hide-inner-bullet");
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.components.block.non_dragging_QMARK_(e);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
} else {
return null;
}
}
});
frontend.components.block.block_mouse_leave = (function frontend$components$block$block_mouse_leave(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_){
frontend.util.stop(e);

cljs.core.reset_BANG_(_STAR_control_show_QMARK_,false);

if(cljs.core.truth_(doc_mode_QMARK_)){
var temp__5804__auto___113770 = goog.dom.getElement(block_id);
if(cljs.core.truth_(temp__5804__auto___113770)){
var parent_113771 = temp__5804__auto___113770;
var temp__5804__auto___113772__$1 = parent_113771.querySelector(".bullet-container");
if(cljs.core.truth_(temp__5804__auto___113772__$1)){
var node_113773 = temp__5804__auto___113772__$1;
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node_113773,"hide-inner-bullet");
} else {
}
} else {
}
} else {
}

if(((frontend.components.block.non_dragging_QMARK_(e)) && (cljs.core.not(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))))){
return frontend.state.into_selection_mode_BANG_();
} else {
return null;
}
});
frontend.components.block.on_drag_and_mouse_attrs = (function frontend$components$block$on_drag_and_mouse_attrs(block,uuid,top_QMARK_,block_id,_STAR_move_to){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (event){
return frontend.components.block.block_drag_over(event,uuid,top_QMARK_,block_id,_STAR_move_to);
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (_event){
return frontend.components.block.block_drag_leave(_STAR_move_to);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (event){
return frontend.components.block.block_drop(event,uuid,block,_STAR_move_to);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (event){
return frontend.components.block.block_drag_end.cljs$core$IFn$_invoke$arity$2(event,_STAR_move_to);
})], null);
});
frontend.components.block.build_refs_data_value = (function frontend$components$block$build_refs_data_value(refs){
var refs__$1 = frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),refs)));
return frontend.util.text.build_data_value(refs__$1);
});
frontend.components.block.get_children_refs = (function frontend$components$block$get_children_refs(children){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (m){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(m);
if(and__5041__auto__){
return new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__5041__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refs,cljs.core.concat,new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m));
} else {
}

return m;
}),children);

return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs));
});
frontend.components.block.root_block_QMARK_ = (function frontend$components$block$root_block_QMARK_(config,block){
var and__5041__auto__ = new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.collapsed_QMARK_(block);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
frontend.components.block.build_config = (function frontend$components$block$build_config(config,block,p__113442){
var map__113443 = p__113442;
var map__113443__$1 = cljs.core.__destructure_map(map__113443);
var navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113443__$1,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122));
var navigated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113443__$1,new cljs.core.Keyword(null,"navigated?","navigated?",359191896));
var G__113444 = config;
var G__113444__$1 = (cljs.core.truth_(navigated_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113444,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigating_block)):G__113444);
var G__113444__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__113444__$1,new cljs.core.Keyword(null,"block","block",664686210),cljs.core.merge,block)
;
var G__113444__$3 = (((new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113444__$2,new cljs.core.Keyword(null,"query-result","query-result",-833644142),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):G__113444__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config))){
return frontend.handler.block.attach_order_list_state(G__113444__$3,block);
} else {
return G__113444__$3;
}
});
frontend.components.block.build_block = (function frontend$components$block$build_block(repo,config,block_STAR_,p__113445){
var map__113446 = p__113445;
var map__113446__$1 = cljs.core.__destructure_map(map__113446);
var navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113446__$1,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122));
var navigated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113446__$1,new cljs.core.Keyword(null,"navigated?","navigated?",359191896));
var block = (cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.empty_QMARK_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block_STAR_))) && (cljs.core.not((function (){var and__5041__auto____$2 = new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto____$2)){
return clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(config),"not");
} else {
return and__5041__auto____$2;
}
})())));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return navigated_QMARK_;
}
})())?(function (){var block = (function (){var G__113448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),navigating_block], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__113448) : frontend.db.pull.call(null,G__113448));
})();
var blocks = (function (){var G__113449 = repo;
var G__113450 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__113451 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__113449,G__113450,G__113451) : frontend.db.get_paginated_blocks.call(null,G__113449,G__113450,G__113451));
})();
var tree = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
return cljs.core.first(tree);
})():block_STAR_);
var map__113447 = (cljs.core.truth_(new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,(function (){var G__113452 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.sub_block.cljs$core$IFn$_invoke$arity$1 ? frontend.db.sub_block.cljs$core$IFn$_invoke$arity$1(G__113452) : frontend.db.sub_block.call(null,G__113452));
})()], 0)):block);
var map__113447__$1 = cljs.core.__destructure_map(map__113447);
var block_SINGLEQUOTE_ = map__113447__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113447__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113447__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113447__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_SINGLEQUOTE_,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(cljs.core.uuid,format,pre_block_QMARK_,content)], 0));
});
frontend.components.block.block_container_inner = rum.core.lazy_build(rum.core.build_defc,(function (state,repo,config_STAR_,block_STAR_){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config_STAR_);
var custom_query_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config_STAR_));
var ref_or_custom_query_QMARK_ = (function (){var or__5043__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return custom_query_QMARK_;
}
})();
var _STAR_navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175));
var navigating_block = rum.core.react(_STAR_navigating_block);
var navigated_QMARK_ = (function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_STAR_),navigating_block);
if(and__5041__auto__){
return navigating_block;
} else {
return and__5041__auto__;
}
})();
var block = frontend.components.block.build_block(repo,config_STAR_,block_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),navigating_block,new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_], null));
var map__113456 = block;
var map__113456__$1 = cljs.core.__destructure_map(map__113456);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113456__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var map__113457 = block;
var map__113457__$1 = cljs.core.__destructure_map(map__113457);
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113457__$1,new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865));
var config = frontend.components.block.build_config(config_STAR_,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),navigating_block], null));
var blocks_container_id = new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340).cljs$core$IFn$_invoke$arity$1(config);
var heading_QMARK_ = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties);
var _STAR_control_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","control-show?","frontend.components.block/control-show?",1638613539));
var db_collapsed_QMARK_ = frontend.util.collapsed_QMARK_(block);
var collapsed_QMARK_ = (cljs.core.truth_((function (){var or__5043__auto__ = ref_or_custom_query_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.components.block.root_block_QMARK_(config,block);
}
})())?frontend.state.sub_collapsed(uuid):db_collapsed_QMARK_
);
var breadcrumb_show_QMARK_ = new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_show_left_menu_QMARK_ = new cljs.core.Keyword("frontend.components.block","show-block-left-menu?","frontend.components.block/show-block-left-menu?",-2100125182).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_show_right_menu_QMARK_ = new cljs.core.Keyword("frontend.components.block","show-block-right-menu?","frontend.components.block/show-block-right-menu?",1504787573).cljs$core$IFn$_invoke$arity$1(state);
var slide_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config));
var doc_mode_QMARK_ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config);
var embed_QMARK_ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
var reference_QMARK_ = new cljs.core.Keyword(null,"reference?","reference?",983881698).cljs$core$IFn$_invoke$arity$1(config);
var whiteboard_block_QMARK_ = logseq.graph_parser.whiteboard.shape_block_QMARK_(block);
var block_id = ["ls-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
var has_child_QMARK_ = cljs.core.first(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__113458 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113458) : frontend.db.entity.call(null,G__113458));
})()));
var attrs = frontend.components.block.on_drag_and_mouse_attrs(block,uuid,top_QMARK_,block_id,frontend.components.block._STAR_move_to);
var children_refs = frontend.components.block.get_children_refs(children);
var data_refs = frontend.components.block.build_refs_data_value(children_refs);
var data_refs_self = frontend.components.block.build_refs_data_value(refs);
var edit_input_id = ["edit-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
var edit_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),edit_input_id], null));
var card_QMARK_ = clojure.string.includes_QMARK_(data_refs_self,"\"card\"");
var review_cards_QMARK_ = new cljs.core.Keyword(null,"review-cards?","review-cards?",-1467055076).cljs$core$IFn$_invoke$arity$1(config);
var own_number_list_QMARK_ = new cljs.core.Keyword(null,"own-order-number-list?","own-order-number-list?",2048042976).cljs$core$IFn$_invoke$arity$1(config);
var order_list_QMARK_ = cljs.core.boolean$(own_number_list_QMARK_);
var selected_QMARK_ = ((slide_QMARK_)?null:frontend.state.sub_block_selected_QMARK_(blocks_container_id,uuid));
var attrs113455 = (function (){var G__113459 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),block_id,new cljs.core.Keyword(null,"data-refs","data-refs",1124640924),data_refs,new cljs.core.Keyword(null,"data-refs-self","data-refs-self",-1646359402),data_refs_self,new cljs.core.Keyword(null,"data-collapsed","data-collapsed",1225882164),(function (){var and__5041__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return has_child_QMARK_;
} else {
return and__5041__auto__;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),(cljs.core.truth_(pre_block_QMARK_)?" pre-block":null),((((card_QMARK_) && (cljs.core.not(review_cards_QMARK_))))?" shadow-md":null),(cljs.core.truth_(selected_QMARK_)?" selected":null),((order_list_QMARK_)?" is-order-list":null),((clojure.string.blank_QMARK_(content))?" is-blank":null)].join(''),new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"haschild","haschild",1809599360),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(has_child_QMARK_))], null);
var G__113459__$1 = (cljs.core.truth_(level)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113459,new cljs.core.Keyword(null,"level","level",1290497552),level):G__113459);
var G__113459__$2 = (((!(slide_QMARK_)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__113459__$1,attrs], 0)):G__113459__$1);
var G__113459__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = reference_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return embed_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113459__$2,new cljs.core.Keyword(null,"data-transclude","data-transclude",-1499995699),true):G__113459__$2);
var G__113459__$4 = (cljs.core.truth_(embed_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113459__$3,new cljs.core.Keyword(null,"data-embed","data-embed",-1493193393),true):G__113459__$3);
if(custom_query_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113459__$4,new cljs.core.Keyword(null,"data-query","data-query",369270450),true);
} else {
return G__113459__$4;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113455))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ls-block"], null)], null),attrs113455], 0))):{'className':"ls-block"}),((cljs.core.map_QMARK_(attrs113455))?[(cljs.core.truth_((function (){var and__5041__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return breadcrumb_show_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.block.breadcrumb(config,repo,uuid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], null))):null),(cljs.core.truth_(top_QMARK_)?frontend.components.block.dnd_separator_wrapper(block,block_id,slide_QMARK_,true,false):null),daiquiri.core.create_element("div",{'onTouchStart':(function (event,uuid__$1){
return frontend.handler.block.on_touch_start(event,uuid__$1);
}),'onTouchMove':(function (event){
return frontend.handler.block.on_touch_move(event,block,uuid,edit_QMARK_,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_);
}),'onTouchEnd':(function (event){
return frontend.handler.block.on_touch_end(event,block,uuid,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_);
}),'onTouchCancel':(function (_e){
return frontend.handler.block.on_touch_cancel(_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_);
}),'onMouseOver':(function (e){
return frontend.components.block.block_mouse_over(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'onMouseLeave':(function (e){
return frontend.components.block.block_mouse_leave(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-main-container","flex","flex-row","pr-2",(cljs.core.truth_((function (){var and__5041__auto__ = heading_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})())?"items-baseline":"")], null))},[(((!(slide_QMARK_)))?frontend.components.block.block_control(config,block,uuid,block_id,collapsed_QMARK_,_STAR_control_show_QMARK_,edit_QMARK_,selected_QMARK_):null),(cljs.core.truth_(cljs.core.deref(_STAR_show_left_menu_QMARK_))?frontend.components.block.block_left_menu(config,block):null),((whiteboard_block_QMARK_)?frontend.components.block.block_reference(cljs.core.PersistentArrayMap.EMPTY,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),null):(function (){var hide_block_refs_count_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"embed-id","embed-id",717000009).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5041__auto__;
}
})();
return frontend.components.block.block_content_or_editor(config,block,edit_input_id,block_id,edit_QMARK_,hide_block_refs_count_QMARK_,selected_QMARK_);
})()),(cljs.core.truth_(cljs.core.deref(_STAR_show_right_menu_QMARK_))?frontend.components.block.block_right_menu(config,block,edit_QMARK_):null)]),frontend.components.block.block_children(config,block,children,collapsed_QMARK_),frontend.components.block.dnd_separator_wrapper(block,block_id,slide_QMARK_,false,false)]:[daiquiri.interpreter.interpret(attrs113455),(cljs.core.truth_((function (){var and__5041__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return breadcrumb_show_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.block.breadcrumb(config,repo,uuid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], null))):null),(cljs.core.truth_(top_QMARK_)?frontend.components.block.dnd_separator_wrapper(block,block_id,slide_QMARK_,true,false):null),daiquiri.core.create_element("div",{'onTouchStart':(function (event,uuid__$1){
return frontend.handler.block.on_touch_start(event,uuid__$1);
}),'onTouchMove':(function (event){
return frontend.handler.block.on_touch_move(event,block,uuid,edit_QMARK_,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_);
}),'onTouchEnd':(function (event){
return frontend.handler.block.on_touch_end(event,block,uuid,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_);
}),'onTouchCancel':(function (_e){
return frontend.handler.block.on_touch_cancel(_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_);
}),'onMouseOver':(function (e){
return frontend.components.block.block_mouse_over(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'onMouseLeave':(function (e){
return frontend.components.block.block_mouse_leave(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-main-container","flex","flex-row","pr-2",(cljs.core.truth_((function (){var and__5041__auto__ = heading_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})())?"items-baseline":"")], null))},[(((!(slide_QMARK_)))?frontend.components.block.block_control(config,block,uuid,block_id,collapsed_QMARK_,_STAR_control_show_QMARK_,edit_QMARK_,selected_QMARK_):null),(cljs.core.truth_(cljs.core.deref(_STAR_show_left_menu_QMARK_))?frontend.components.block.block_left_menu(config,block):null),((whiteboard_block_QMARK_)?frontend.components.block.block_reference(cljs.core.PersistentArrayMap.EMPTY,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),null):(function (){var hide_block_refs_count_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"embed-id","embed-id",717000009).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5041__auto__;
}
})();
return frontend.components.block.block_content_or_editor(config,block,edit_input_id,block_id,edit_QMARK_,hide_block_refs_count_QMARK_,selected_QMARK_);
})()),(cljs.core.truth_(cljs.core.deref(_STAR_show_right_menu_QMARK_))?frontend.components.block.block_right_menu(config,block,edit_QMARK_):null)]),frontend.components.block.block_children(config,block,children,collapsed_QMARK_),frontend.components.block.dnd_separator_wrapper(block,block_id,slide_QMARK_,false,false)]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/block-container-inner");
frontend.components.block.attach_order_list_state_BANG_ = (function frontend$components$block$attach_order_list_state_BANG_(cp_state){
var args = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(cp_state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cp_state,new cljs.core.Keyword("rum","args","rum/args",1315791754),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(args),(0),frontend.handler.block.attach_order_list_state(cljs.core.first(args),cljs.core.second(args))));
});
frontend.components.block.block_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,block){
var repo = frontend.state.get_current_repo();
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var custom_query_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return custom_query_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5041__auto__;
}
})())){
return frontend.ui.lazy_visible((function (){
return frontend.components.block.block_container_inner(state,repo,config,block);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),["block-container-ref ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))].join('')], null));
} else {
return frontend.components.block.block_container_inner(state,repo,config,block);
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.block","show-block-left-menu?","frontend.components.block/show-block-left-menu?",-2100125182)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.block","show-block-right-menu?","frontend.components.block/show-block-right-menu?",1504787573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var vec__113460 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113460,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113460,(1),null);
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(frontend.components.block.root_block_QMARK_(config,block))){
frontend.state.set_collapsed_block_BANG_(block_id,false);
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})())){
frontend.state.set_collapsed_block_BANG_(block_id,cljs.core.boolean$(frontend.handler.editor.block_default_collapsed_QMARK_(block,config)));
} else {

}
}

return frontend.components.block.attach_order_list_state_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.block","control-show?","frontend.components.block/control-show?",1638613539),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], 0)));
}),new cljs.core.Keyword(null,"will-remount","will-remount",-141604325),(function (_old_state,new_state){
return frontend.components.block.attach_order_list_state_BANG_(new_state);
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
var compare_keys = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","_refs","block/_refs",830218531),new cljs.core.Keyword("block.temp","bottom?","block.temp/bottom?",-752374337),new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865)], null);
var config_compare_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872),new cljs.core.Keyword(null,"own-order-list-type","own-order-list-type",507157714),new cljs.core.Keyword(null,"own-order-list-index","own-order-list-index",2051635079)], null);
var b1 = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state));
var b2 = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
var result = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(b1,compare_keys),cljs.core.select_keys(b2,compare_keys))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state)),config_compare_keys),cljs.core.select_keys(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)),config_compare_keys))));
return cljs.core.boolean$(result);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__113463_113774 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config_113775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113463_113774,(0),null);
var block_113776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113463_113774,(1),null);
var block_id_113777 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_113776);
if(cljs.core.truth_(frontend.components.block.root_block_QMARK_(config_113775,block_113776))){
frontend.state.set_collapsed_block_BANG_(block_id_113777,null);
} else {
}

return state;
})], null)], null),"frontend.components.block/block-container");
frontend.components.block.divide_lists = (function frontend$components$block$divide_lists(p__113466){
var vec__113467 = p__113466;
var seq__113468 = cljs.core.seq(vec__113467);
var first__113469 = cljs.core.first(seq__113468);
var seq__113468__$1 = cljs.core.next(seq__113468);
var f = first__113469;
var l = seq__113468__$1;
var l__$1 = l;
var ordered_QMARK_ = new cljs.core.Keyword(null,"ordered","ordered",1187041426).cljs$core$IFn$_invoke$arity$1(f);
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null)], null);
while(true){
if(cljs.core.seq(l__$1)){
var cur = cljs.core.first(l__$1);
var cur_ordered_QMARK_ = new cljs.core.Keyword(null,"ordered","ordered",1187041426).cljs$core$IFn$_invoke$arity$1(cur);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ordered_QMARK_,cur_ordered_QMARK_)){
var G__113778 = cljs.core.rest(l__$1);
var G__113779 = cur_ordered_QMARK_;
var G__113780 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,(cljs.core.count(result) - (1)),cljs.core.conj,cur);
l__$1 = G__113778;
ordered_QMARK_ = G__113779;
result = G__113780;
continue;
} else {
var G__113781 = cljs.core.rest(l__$1);
var G__113782 = cur_ordered_QMARK_;
var G__113783 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur], null));
l__$1 = G__113781;
ordered_QMARK_ = G__113782;
result = G__113783;
continue;
}
} else {
return result;
}
break;
}
});
frontend.components.block.list_element = (function frontend$components$block$list_element(l){
try{if(((cljs.core.vector_QMARK_(l)) && ((cljs.core.count(l) >= (1))))){
try{var l_left__113471 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(l,(0),(1));
if(((cljs.core.vector_QMARK_(l_left__113471)) && ((cljs.core.count(l_left__113471) === (1))))){
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l_left__113471,(0));
var _tl = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(l,(1));
var map__113476 = l1;
var map__113476__$1 = cljs.core.__destructure_map(map__113476);
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113476__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.seq(name)){
return new cljs.core.Keyword(null,"dl","dl",-2140151713);
} else {
if(cljs.core.truth_(ordered)){
return new cljs.core.Keyword(null,"ol","ol",932524051);
} else {
return new cljs.core.Keyword(null,"ul","ul",-1349521403);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113475){if((e113475 instanceof Error)){
var e__103681__auto__ = e113475;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e113475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113474){if((e113474 instanceof Error)){
var e__103681__auto__ = e113474;
if((e__103681__auto__ === cljs.core.match.backtrack)){
return new cljs.core.Keyword(null,"ul","ul",-1349521403);
} else {
throw e__103681__auto__;
}
} else {
throw e113474;

}
}});
frontend.components.block.list_item = (function frontend$components$block$list_item(config,p__113477){
var map__113478 = p__113477;
var map__113478__$1 = cljs.core.__destructure_map(map__113478);
var _list = map__113478__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113478__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113478__$1,new cljs.core.Keyword(null,"content","content",15833224));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113478__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113478__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113478__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var content__$1 = ((cljs.core.empty_QMARK_(content))?null:(function (){try{if(((cljs.core.vector_QMARK_(content)) && ((cljs.core.count(content) >= (1))))){
try{var content_left__113480 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(content,(0),(1));
if(((cljs.core.vector_QMARK_(content_left__113480)) && ((cljs.core.count(content_left__113480) === (1))))){
try{var content_left__113480_0__113482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__113480,(0));
if(((cljs.core.vector_QMARK_(content_left__113480_0__113482)) && ((cljs.core.count(content_left__113480_0__113482) === 2)))){
try{var content_left__113480_0__113482_0__113483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__113480_0__113482,(0));
if((content_left__113480_0__113482_0__113483 === "Paragraph")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__113480_0__113482,(1));
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content,(1));
return frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,i) : frontend.components.block.map_inline.call(null,config,i)),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,rest) : frontend.components.block.markup_elements_cp.call(null,config,rest))], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113488){if((e113488 instanceof Error)){
var e__103681__auto__ = e113488;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e113488;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113487){if((e113487 instanceof Error)){
var e__103681__auto__ = e113487;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e113487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113486){if((e113486 instanceof Error)){
var e__103681__auto__ = e113486;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e113486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113485){if((e113485 instanceof Error)){
var e__103681__auto__ = e113485;
if((e__103681__auto__ === cljs.core.match.backtrack)){
return (frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,content) : frontend.components.block.markup_elements_cp.call(null,config,content));
} else {
throw e__103681__auto__;
}
} else {
throw e113485;

}
}})());
var checked_QMARK_ = (!((checkbox == null)));
var items__$1 = ((cljs.core.seq(items))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(items),(function (){var iter__5520__auto__ = (function frontend$components$block$list_item_$_iter__113489(s__113490){
return (new cljs.core.LazySeq(null,(function (){
var s__113490__$1 = s__113490;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113490__$1);
if(temp__5804__auto__){
var s__113490__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113490__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113490__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113492 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113491 = (0);
while(true){
if((i__113491 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__113491);
cljs.core.chunk_append(b__113492,(frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2(config,item) : frontend.components.block.list_item.call(null,config,item)));

var G__113784 = (i__113491 + (1));
i__113491 = G__113784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113492),frontend$components$block$list_item_$_iter__113489(cljs.core.chunk_rest(s__113490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113492),null);
}
} else {
var item = cljs.core.first(s__113490__$2);
return cljs.core.cons((frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2(config,item) : frontend.components.block.list_item.call(null,config,item)),frontend$components$block$list_item_$_iter__113489(cljs.core.rest(s__113490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(items);
})()):null);
if(cljs.core.seq(name)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,name) : frontend.components.block.map_inline.call(null,config,name))], null),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dd","dd",-1340437629),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)))], null);
} else {
if((checkbox == null)){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__113493 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null);
if(cljs.core.truth_(number)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113493,new cljs.core.Keyword(null,"value","value",305978217),number);
} else {
return G__113493;
}
})(),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),content__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"p","p",151049309),frontend.components.block.list_checkbox(config,checkbox),content__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)));
}

}
});
frontend.components.block.table = (function frontend$components$block$table(config,p__113495){
var map__113496 = p__113495;
var map__113496__$1 = cljs.core.__destructure_map(map__113496);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113496__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113496__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var col_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113496__$1,new cljs.core.Keyword(null,"col_groups","col_groups",409146122));
var G__113497 = frontend.shui.get_shui_component_version(new cljs.core.Keyword(null,"table","table",-564943036),config);
switch (G__113497) {
case (2):
return logseq.shui.core.table_v2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header], null)], null),groups)], null),frontend.shui.make_shui_context.cljs$core$IFn$_invoke$arity$2(config,frontend.components.block.inline));

break;
case (1):
var tr = (function (elm,cols){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"class","class",-2030961996),"org-left"], null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,col) : frontend.components.block.map_inline.call(null,config,col)));
}),cols));
});
var tb_col_groups = (function (){try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (number){
var col_elem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"org-left"], null)], null);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colgroup","colgroup",651118645),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(number,col_elem));
}),col_groups);
}catch (e113498){var _e = e113498;
return cljs.core.PersistentVector.EMPTY;
}})();
var head = (cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),tr(new cljs.core.Keyword(null,"th","th",-545608566),header)], null):null);
var groups__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__113494_SHARP_){
return tr(new cljs.core.Keyword(null,"td","td",1479933353),p1__113494_SHARP_);
}),group));
}),groups);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-wrapper","div.table-wrapper",-440600779),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-auto",new cljs.core.Keyword(null,"border","border",1444987323),(2),new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),(0),new cljs.core.Keyword(null,"cell-padding","cell-padding",978029542),(6),new cljs.core.Keyword(null,"rules","rules",1198912366),"groups",new cljs.core.Keyword(null,"frame","frame",-1711082588),"hsides"], null),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tb_col_groups,cljs.core.cons(head,groups__$1)], 0)))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__113497)].join('')));

}
});
frontend.components.block.logbook_cp = (function frontend$components$block$logbook_cp(log){
var clocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__113499_SHARP_){
return clojure.string.starts_with_QMARK_(p1__113499_SHARP_,"CLOCK:");
}),log);
var clocks__$1 = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.str,clocks));
if(cljs.core.seq(clocks__$1)){
var tr = (function (elm,cols){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(elm,col);
}),cols));
});
var head = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.overflow-x-scroll","thead.overflow-x-scroll",-1443349947),tr(new cljs.core.Keyword(null,"th.py-0","th.py-0",-1646316549),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Type","Start","End","Span"], null))], null);
var clock_tbody = frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tbody.overflow-scroll.sm:overflow-auto","tbody.overflow-scroll.sm:overflow-auto",-1641803105),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (clock){
var cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clock,/: |--|=>/));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__113500_SHARP_){
return tr(new cljs.core.Keyword(null,"td.py-0","td.py-0",822181071),p1__113500_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cols], null));
}),clocks__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-scroll.sm:overflow-auto","div.overflow-x-scroll.sm:overflow-auto",-2014695040),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"table.m-0","table.m-0",617884663),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"logbook-table",new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"max-content"], null),new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),(15)], null),cljs.core.cons(head,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clock_tbody], null)))], null);
} else {
return null;
}
});
frontend.components.block.map_inline = (function frontend$components$block$map_inline(config,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__113501_SHARP_){
return frontend.components.block.inline(config,p1__113501_SHARP_);
}),col);
});
frontend.components.block.src_cp = rum.core.lazy_build(rum.core.build_defc,(function (config,options,html_export_QMARK_){
if(cljs.core.truth_(options)){
var map__113502 = options;
var map__113502__$1 = cljs.core.__destructure_map(map__113502);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113502__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113502__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var attr = (cljs.core.truth_(language)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),language], null):null);
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines);
var vec__113503 = rum.core.use_state(null);
var inside_portal_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113503,(0),null);
var set_inside_portal_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113503,(1),null);
if(cljs.core.truth_(html_export_QMARK_)){
return daiquiri.interpreter.interpret(frontend.extensions.highlight.html_export(attr,code));
} else {
var language__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["cljc",null,"cljs",null,"clj",null,"edn",null], null), null),language))?"clojure":language);
return daiquiri.core.create_element("div",{'ref':(function (el){
var G__113506 = (function (){var and__5041__auto__ = el;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.whiteboard.inside_portal_QMARK_(el);
} else {
return and__5041__auto__;
}
})();
return (set_inside_portal_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_inside_portal_QMARK_.cljs$core$IFn$_invoke$arity$1(G__113506) : set_inside_portal_QMARK_.call(null,G__113506));
}),'className':"ui-fenced-code-editor"},[(((inside_portal_QMARK_ == null))?null:(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return inside_portal_QMARK_;
}
})())?frontend.extensions.highlight.highlight(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(language__$1)].join(''),new cljs.core.Keyword(null,"data-lang","data-lang",969460304),language__$1], null),code):daiquiri.core.create_element(daiquiri.core.fragment,null,[frontend.components.lazy_editor.editor(config,cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),attr,code,options),(function (){var options__$1 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(options);
var block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(language__$1,"clojure")) && (cljs.core.contains_QMARK_(cljs.core.set(options__$1),":results")))){
return daiquiri.interpreter.interpret(frontend.extensions.sci.eval_result(code,block));
} else {
return null;
}
})()])
))]);

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.block/src-cp");
frontend.components.block.markup_element_cp = (function frontend$components$block$markup_element_cp(p__113509,item){
var map__113510 = p__113509;
var map__113510__$1 = cljs.core.__destructure_map(map__113510);
var config = map__113510__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113510__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
try{try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__113513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113513 === "Drawer")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook");
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.state.enable_timetracking_QMARK_();
if(and__5041__auto____$1){
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logbook","settings","logbook/settings",824968896),new cljs.core.Keyword(null,"enabled-in-all-blocks","enabled-in-all-blocks",198719485)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logbook","settings","logbook/settings",824968896),new cljs.core.Keyword(null,"enabled-in-timestamped-blocks","enabled-in-timestamped-blocks",-1770816511)], null),true))){
var or__5043__auto____$2 = new cljs.core.Keyword("block","scheduled","block/scheduled",584810412).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return new cljs.core.Keyword("block","deadline","block/deadline",660945231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
}
} else {
return null;
}
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-drawer-name","data-drawer-name",532418125),name], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.font-medium.logbook","div.opacity-50.font-medium.logbook",-155596154),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(":%s:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case(name)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.font-medium","div.opacity-50.font-medium",-1010985565),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook"))?frontend.components.block.logbook_cp(lines):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":END:"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113597){if((e113597 instanceof Error)){
var e__103681__auto__ = e113597;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{var item_0__113513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113513 === "Directive")){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-level-property","div.file-level-property",1092497644),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["caption",null], null), null),clojure.string.lower_case(key)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),clojure.string.upper_case(key)], null),[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113598){if((e113598 instanceof Error)){
var e__103681__auto____$1 = e113598;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113598;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113549){if((e113549 instanceof Error)){
var e__103681__auto__ = e113549;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113516 === "Paragraph")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(frontend.util.safe_re_find(/\"Export_Snippet\" \"embed\"/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.map_inline(config,l));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div.is-paragraph","div.is-paragraph",1619857502),frontend.components.block.map_inline(config,l));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113596){if((e113596 instanceof Error)){
var e__103681__auto____$1 = e113596;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$1;
}
} else {
throw e113596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113550){if((e113550 instanceof Error)){
var e__103681__auto____$1 = e113550;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 1)))){
try{var item_0__113518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113518 === "Horizontal_Rule")){
if(cljs.core.truth_(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113595){if((e113595 instanceof Error)){
var e__103681__auto____$2 = e113595;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$2;
}
} else {
throw e113595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113551){if((e113551 instanceof Error)){
var e__103681__auto____$2 = e113551;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "Heading")){
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.block_container(config,h);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113584){if((e113584 instanceof Error)){
var e__103681__auto____$3 = e113584;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "List")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lists = frontend.components.block.divide_lists(l);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lists))){
var l__$1 = cljs.core.first(lists);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__113507_SHARP_){
return frontend.components.block.list_item(config,p1__113507_SHARP_);
}),l__$1));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1215632197),(function (){var iter__5520__auto__ = (function frontend$components$block$markup_element_cp_$_iter__113591(s__113592){
return (new cljs.core.LazySeq(null,(function (){
var s__113592__$1 = s__113592;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113592__$1);
if(temp__5804__auto__){
var s__113592__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113592__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113592__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113594 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113593 = (0);
while(true){
if((i__113593 < size__5519__auto__)){
var l__$1 = cljs.core._nth(c__5518__auto__,i__113593);
cljs.core.chunk_append(b__113594,frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__113593,l__$1,c__5518__auto__,size__5519__auto__,b__113594,s__113592__$2,temp__5804__auto__,lists,l,item_0__113519,e__103681__auto____$3,e__103681__auto____$2,e__103681__auto____$1,e__103681__auto__,map__113510,map__113510__$1,config,html_export_QMARK_){
return (function (p1__113508_SHARP_){
return frontend.components.block.list_item(config,p1__113508_SHARP_);
});})(i__113593,l__$1,c__5518__auto__,size__5519__auto__,b__113594,s__113592__$2,temp__5804__auto__,lists,l,item_0__113519,e__103681__auto____$3,e__103681__auto____$2,e__103681__auto____$1,e__103681__auto__,map__113510,map__113510__$1,config,html_export_QMARK_))
,l__$1)));

var G__113786 = (i__113593 + (1));
i__113593 = G__113786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113594),frontend$components$block$markup_element_cp_$_iter__113591(cljs.core.chunk_rest(s__113592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113594),null);
}
} else {
var l__$1 = cljs.core.first(s__113592__$2);
return cljs.core.cons(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (l__$1,s__113592__$2,temp__5804__auto__,lists,l,item_0__113519,e__103681__auto____$3,e__103681__auto____$2,e__103681__auto____$1,e__103681__auto__,map__113510,map__113510__$1,config,html_export_QMARK_){
return (function (p1__113508_SHARP_){
return frontend.components.block.list_item(config,p1__113508_SHARP_);
});})(l__$1,s__113592__$2,temp__5804__auto__,lists,l,item_0__113519,e__103681__auto____$3,e__103681__auto____$2,e__103681__auto____$1,e__103681__auto__,map__113510,map__113510__$1,config,html_export_QMARK_))
,l__$1)),frontend$components$block$markup_element_cp_$_iter__113591(cljs.core.rest(s__113592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(lists);
})()], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113585){if((e113585 instanceof Error)){
var e__103681__auto____$4 = e113585;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "Table")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.table(config,t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113586){if((e113586 instanceof Error)){
var e__103681__auto____$5 = e113586;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "Math")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(s,true,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),s,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113587){if((e113587 instanceof Error)){
var e__103681__auto____$6 = e113587;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "Example")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pre-wrap-white-space","pre.pre-wrap-white-space",-614870903),frontend.components.block.join_lines(l)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113588){if((e113588 instanceof Error)){
var e__103681__auto____$7 = e113588;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "Quote")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blockquote","blockquote",372264190),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113589){if((e113589 instanceof Error)){
var e__103681__auto____$8 = e113589;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
try{var item_0__113519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113519 === "Raw_Html")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.raw_html","div.raw_html",-267032220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(content)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113590){if((e113590 instanceof Error)){
var e__103681__auto____$9 = e113590;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$9;
}
} else {
throw e113590;

}
}} else {
throw e__103681__auto____$8;
}
} else {
throw e113589;

}
}} else {
throw e__103681__auto____$7;
}
} else {
throw e113588;

}
}} else {
throw e__103681__auto____$6;
}
} else {
throw e113587;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e113586;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e113585;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e113584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113552){if((e113552 instanceof Error)){
var e__103681__auto____$3 = e113552;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__113521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113521 === "Export")){
try{var item_1__113522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113522 === "html")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.export_html","div.export_html",950208651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.security.sanitize_html(content)], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113583){if((e113583 instanceof Error)){
var e__103681__auto____$4 = e113583;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$4;
}
} else {
throw e113583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113582){if((e113582 instanceof Error)){
var e__103681__auto____$4 = e113582;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$4;
}
} else {
throw e113582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113553){if((e113553 instanceof Error)){
var e__103681__auto____$4 = e113553;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113525 === "Hiccup")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid hiccup"], null),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hiccup_html","div.hiccup_html",422613892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.components.block.hiccup__GT_html(content)], null)], null)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113581){if((e113581 instanceof Error)){
var e__103681__auto____$5 = e113581;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$5;
}
} else {
throw e113581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113554){if((e113554 instanceof Error)){
var e__103681__auto____$5 = e113554;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__113527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113527 === "Export")){
try{var item_1__113528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113528 === "latex")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content,true,false);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),content,true,false);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113580){if((e113580 instanceof Error)){
var e__103681__auto____$6 = e113580;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$6;
}
} else {
throw e113580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113579){if((e113579 instanceof Error)){
var e__103681__auto____$6 = e113579;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$6;
}
} else {
throw e113579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113555){if((e113555 instanceof Error)){
var e__103681__auto____$6 = e113555;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 5)))){
try{var item_0__113531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113531 === "Custom")){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "query")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var _result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
try{var query = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
return frontend.components.query.custom_query(frontend.components.block.wrap_query_components(config),query);
}catch (e113578){var e = e113578;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-string-error","read-string-error",-337329605),e,new cljs.core.Keyword(null,"line","line",212345235),3281], null)),null);

return frontend.ui.block_error("Invalid query:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),content], null));
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113570){if((e113570 instanceof Error)){
var e__103681__auto____$7 = e113570;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "note")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("note",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113571){if((e113571 instanceof Error)){
var e__103681__auto____$8 = e113571;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "tip")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("tip",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113572){if((e113572 instanceof Error)){
var e__103681__auto____$9 = e113572;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "important")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("important",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113573){if((e113573 instanceof Error)){
var e__103681__auto____$10 = e113573;
if((e__103681__auto____$10 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "caution")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("caution",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113574){if((e113574 instanceof Error)){
var e__103681__auto____$11 = e113574;
if((e__103681__auto____$11 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "warning")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("warning",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113575){if((e113575 instanceof Error)){
var e__103681__auto____$12 = e113575;
if((e__103681__auto____$12 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "pinned")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.ui.admonition("pinned",(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113576){if((e113576 instanceof Error)){
var e__103681__auto____$13 = e113576;
if((e__103681__auto____$13 === cljs.core.match.backtrack)){
try{var item_1__113532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__113532 === "center")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e113577){if((e113577 instanceof Error)){
var e__103681__auto____$14 = e113577;
if((e__103681__auto____$14 === cljs.core.match.backtrack)){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),name], null),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw e__103681__auto____$14;
}
} else {
throw e113577;

}
}} else {
throw e__103681__auto____$13;
}
} else {
throw e113576;

}
}} else {
throw e__103681__auto____$12;
}
} else {
throw e113575;

}
}} else {
throw e__103681__auto____$11;
}
} else {
throw e113574;

}
}} else {
throw e__103681__auto____$10;
}
} else {
throw e113573;

}
}} else {
throw e__103681__auto____$9;
}
} else {
throw e113572;

}
}} else {
throw e__103681__auto____$8;
}
} else {
throw e113571;

}
}} else {
throw e__103681__auto____$7;
}
} else {
throw e113570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113569){if((e113569 instanceof Error)){
var e__103681__auto____$7 = e113569;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$7;
}
} else {
throw e113569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113556){if((e113556 instanceof Error)){
var e__103681__auto____$7 = e113556;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113536 === "Latex_Fragment")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.latex-fragment","p.latex-fragment",2044866246),frontend.components.block.inline(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Latex_Fragment",l], null))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113568){if((e113568 instanceof Error)){
var e__103681__auto____$8 = e113568;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$8;
}
} else {
throw e113568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113557){if((e113557 instanceof Error)){
var e__103681__auto____$8 = e113557;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__113538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113538 === "Latex_Environment")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var content__$1 = frontend.components.block.latex_environment_content(name,option,content);
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content__$1,true,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),content__$1,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113567){if((e113567 instanceof Error)){
var e__103681__auto____$9 = e113567;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$9;
}
} else {
throw e113567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113558){if((e113558 instanceof Error)){
var e__103681__auto____$9 = e113558;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113542 === "Displayed_Math")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content,true,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),content,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e113566){if((e113566 instanceof Error)){
var e__103681__auto____$10 = e113566;
if((e__103681__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$10;
}
} else {
throw e113566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113559){if((e113559 instanceof Error)){
var e__103681__auto____$10 = e113559;
if((e__103681__auto____$10 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__113544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113544 === "Footnote_Definition")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var id = frontend.util.url_encode(name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footdef","div.footdef",1989065599),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footpara","div.footpara",-1143244552),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__113564 = config;
var G__113565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",definition], null);
return (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(G__113564,G__113565) : frontend.components.block.markup_element_cp.call(null,G__113564,G__113565));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ml-1","a.ml-1",1979802547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),["fn.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"footnum",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_(["fnr.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.fn","sup.fn",403400163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\u21A9\uFE0E"].join('')], null)], null))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113563){if((e113563 instanceof Error)){
var e__103681__auto____$11 = e113563;
if((e__103681__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$11;
}
} else {
throw e113563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113560){if((e113560 instanceof Error)){
var e__103681__auto____$11 = e113560;
if((e__103681__auto____$11 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__113547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__113547 === "Src")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lang = frontend.util.safe_lower_case(new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__fenced-code-block","div.cp__fenced-code-block",-1897501160),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),lang], null),(function (){var temp__5802__auto__ = frontend.handler.plugin.hook_fenced_code_by_type(lang);
if(cljs.core.truth_(temp__5802__auto__)){
var opts = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-fenced-code-wrap","div.ui-fenced-code-wrap",1049851534),frontend.components.block.src_cp(config,options,html_export_QMARK_),frontend.components.plugins.hook_ui_fenced_code(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(options)),opts)], null);
} else {
return frontend.components.block.src_cp(config,options,html_export_QMARK_);
}
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e113562){if((e113562 instanceof Error)){
var e__103681__auto____$12 = e113562;
if((e__103681__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto____$12;
}
} else {
throw e113562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e113561){if((e113561 instanceof Error)){
var e__103681__auto____$12 = e113561;
if((e__103681__auto____$12 === cljs.core.match.backtrack)){
return "";
} else {
throw e__103681__auto____$12;
}
} else {
throw e113561;

}
}} else {
throw e__103681__auto____$11;
}
} else {
throw e113560;

}
}} else {
throw e__103681__auto____$10;
}
} else {
throw e113559;

}
}} else {
throw e__103681__auto____$9;
}
} else {
throw e113558;

}
}} else {
throw e__103681__auto____$8;
}
} else {
throw e113557;

}
}} else {
throw e__103681__auto____$7;
}
} else {
throw e113556;

}
}} else {
throw e__103681__auto____$6;
}
} else {
throw e113555;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e113554;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e113553;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e113552;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e113551;

}
}} else {
throw e__103681__auto____$1;
}
} else {
throw e113550;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e113549;

}
}}catch (e113511){var e = e113511;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Convert to html failed, error: ",e], 0));

return "";
}});
frontend.components.block.markup_elements_cp = (function frontend$components$block$markup_elements_cp(config,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__113599_SHARP_){
return frontend.components.block.markup_element_cp(config,p1__113599_SHARP_);
}),col);
});
frontend.components.block.block_item = (function frontend$components$block$block_item(config,blocks,idx,item){
var item__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("block","meta","block/meta",1064819153)),new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865),(idx === (0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","bottom?","block.temp/bottom?",-752374337),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),(idx + (1)))], 0));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item__$1));
return rum.core.with_key(frontend.components.block.block_container(config__$1,item__$1),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340).cljs$core$IFn$_invoke$arity$1(config__$1)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item__$1))].join(''));
});
frontend.components.block.block_list = (function frontend$components$block$block_list(config,blocks){
var iter__5520__auto__ = (function frontend$components$block$block_list_$_iter__113600(s__113601){
return (new cljs.core.LazySeq(null,(function (){
var s__113601__$1 = s__113601;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113601__$1);
if(temp__5804__auto__){
var s__113601__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113601__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113601__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113603 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113602 = (0);
while(true){
if((i__113602 < size__5519__auto__)){
var vec__113604 = cljs.core._nth(c__5518__auto__,i__113602);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113604,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113604,(1),null);
cljs.core.chunk_append(b__113603,frontend.components.block.block_item(config,blocks,idx,item));

var G__113787 = (i__113602 + (1));
i__113602 = G__113787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113603),frontend$components$block$block_list_$_iter__113600(cljs.core.chunk_rest(s__113601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113603),null);
}
} else {
var vec__113607 = cljs.core.first(s__113601__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113607,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113607,(1),null);
return cljs.core.cons(frontend.components.block.block_item(config,blocks,idx,item),frontend$components$block$block_list_$_iter__113600(cljs.core.rest(s__113601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(blocks));
});
frontend.components.block.custom_query_or_ref_QMARK_ = (function frontend$components$block$custom_query_or_ref_QMARK_(config){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var custom_query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
var or__5043__auto__ = custom_query_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ref_QMARK_;
}
});
frontend.components.block.load_more_blocks_BANG_ = (function frontend$components$block$load_more_blocks_BANG_(config,flat_blocks){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var db_id = temp__5804__auto__;
var last_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(flat_blocks));
return frontend.handler.block.load_more_BANG_(db_id,last_block_id);
} else {
return null;
}
});
frontend.components.block.loading_more_data_BANG_ = (function frontend$components$block$loading_more_data_BANG_(config,_STAR_loading_QMARK_,flat_blocks,initial_QMARK_){
if(cljs.core.truth_((function (){var or__5043__auto__ = initial_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((cljs.core.not(initial_QMARK_)) && (((frontend.util.time_ms() - new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(config)) > (100))));
}
})())){
cljs.core.reset_BANG_(_STAR_loading_QMARK_,true);

frontend.components.block.load_more_blocks_BANG_(config,flat_blocks);

return cljs.core.reset_BANG_(_STAR_loading_QMARK_,false);
} else {
return null;
}
});
frontend.components.block.lazy_blocks = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,blocks,flat_blocks){
var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_loading_QMARK_ = new cljs.core.Keyword("frontend.components.block","loading?","frontend.components.block/loading?",-807026662).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.not(db_id)){
return daiquiri.interpreter.interpret(frontend.components.block.block_list(config,blocks));
} else {
var has_more_QMARK_ = (((cljs.core.count(flat_blocks) >= frontend.db.model.initial_blocks_length)) && ((!((frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),cljs.core.last(flat_blocks),db_id) == null)))));
var dom_id = ["lazy-blocks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.components.block","id","frontend.components.block/id",-939019741).cljs$core$IFn$_invoke$arity$1(state))].join('');
return daiquiri.core.create_element("div",{'id':dom_id},[frontend.ui.infinite_list("main-content-container",frontend.components.block.block_list(config,blocks),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-load","on-load",1415151594),(function (){
return frontend.components.block.loading_more_data_BANG_(config,_STAR_loading_QMARK_,flat_blocks,false);
}),new cljs.core.Keyword(null,"bottom-reached","bottom-reached",-2132308834),(function (){
var temp__5804__auto__ = goog.dom.getElement(dom_id);
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
return frontend.ui.bottom_reached_QMARK_(node,(300));
} else {
return null;
}
}),new cljs.core.Keyword(null,"has-more","has-more",-320006781),has_more_QMARK_,new cljs.core.Keyword(null,"more","more",-2058821800),(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"preview?","preview?",590561578).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config);
}
})())?"More":(cljs.core.truth_(cljs.core.deref(_STAR_loading_QMARK_))?frontend.ui.lazy_loading_placeholder((88)):""
))], null))]);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.block","loading?","frontend.components.block/loading?",-807026662)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","id","frontend.components.block/id",-939019741),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__113610_113788 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config_113789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113610_113788,(0),null);
var __113790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113610_113788,(1),null);
var flat_blocks_113791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113610_113788,(2),null);
frontend.components.block.loading_more_data_BANG_(config_113789,new cljs.core.Keyword("frontend.components.block","loading?","frontend.components.block/loading?",-807026662).cljs$core$IFn$_invoke$arity$1(state),flat_blocks_113791,true);

return state;
})], null)], null),"frontend.components.block/lazy-blocks");
frontend.components.block.blocks_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,blocks,config){
var _STAR_init_blocks_container_id = new cljs.core.Keyword("frontend.components.block","init-blocks-container-id","frontend.components.block/init-blocks-container-id",882492668).cljs$core$IFn$_invoke$arity$1(state);
var blocks_container_id = (cljs.core.truth_(cljs.core.deref(_STAR_init_blocks_container_id))?cljs.core.deref(_STAR_init_blocks_container_id):(function (){var id_SINGLEQUOTE_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.block._STAR_blocks_container_id,cljs.core.inc);
cljs.core.reset_BANG_(_STAR_init_blocks_container_id,id_SINGLEQUOTE_);

return id_SINGLEQUOTE_;
})());
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340),blocks_container_id);
var doc_mode_QMARK_ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.seq(blocks)){
var flat_blocks = cljs.core.vec(blocks);
var query_or_ref_QMARK_ = frontend.components.block.custom_query_or_ref_QMARK_(config__$1);
var id = (cljs.core.truth_(new cljs.core.Keyword(null,"navigated?","navigated?",359191896).cljs$core$IFn$_invoke$arity$1(config__$1))?cljs.core.deref(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(config__$1)):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config__$1));
var blocks_SINGLEQUOTE_ = (cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = query_or_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"navigated?","navigated?",359191896).cljs$core$IFn$_invoke$arity$1(config__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(query_or_ref_QMARK_);
}
})())?frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(flat_blocks,id):flat_blocks);
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386),frontend.util.time_ms());
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blocks-container","flex-1",(cljs.core.truth_(doc_mode_QMARK_)?"document-mode":null)], null))},[frontend.components.block.lazy_blocks(config__$2,blocks_SINGLEQUOTE_,flat_blocks)]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","init-blocks-container-id","frontend.components.block/init-blocks-container-id",882492668),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
})], null)], null),"frontend.components.block/blocks-container");
frontend.components.block.breadcrumb_with_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,blocks,config){
var repo = frontend.state.get_current_repo();
var _STAR_navigating_block = new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175).cljs$core$IFn$_invoke$arity$1(state);
var navigating_block = rum.core.react(_STAR_navigating_block);
var navigating_block_entity = (function (){var G__113614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),navigating_block], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113614) : frontend.db.entity.call(null,G__113614));
})();
var navigated_QMARK_ = (function (){var and__5041__auto__ = navigating_block;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.components.block","initial-block","frontend.components.block/initial-block",-2107784601).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(navigating_block_entity)));
} else {
return and__5041__auto__;
}
})();
var blocks__$1 = (cljs.core.truth_(navigated_QMARK_)?(function (){var block = navigating_block_entity;
var G__113615 = repo;
var G__113616 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__113617 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__113615,G__113616,G__113617) : frontend.db.get_paginated_blocks.call(null,G__113615,G__113616,G__113617));
})():blocks);
var attrs113613 = (cljs.core.truth_(new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369).cljs$core$IFn$_invoke$arity$1(config))?frontend.components.block.breadcrumb(config,frontend.state.get_current_repo(),(function (){var or__5043__auto__ = navigating_block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1));
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs113613))?daiquiri.interpreter.element_attributes(attrs113613):null),((cljs.core.map_QMARK_(attrs113613))?[frontend.components.block.blocks_container(blocks__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block,new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_], 0)))]:[daiquiri.interpreter.interpret(attrs113613),frontend.components.block.blocks_container(blocks__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block,new cljs.core.Keyword(null,"navigated?","navigated?",359191896),navigated_QMARK_], 0)))]));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var first_block = cljs.core.ffirst(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.block","initial-block","frontend.components.block/initial-block",-2107784601),first_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_block))], 0));
})], null)], null),"frontend.components.block/breadcrumb-with-container");
frontend.components.block.__GT_hiccup = (function frontend$components$block$__GT_hiccup(blocks,config,option){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__113618 = option;
if(cljs.core.truth_(new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113618,new cljs.core.Keyword(null,"class","class",-2030961996),"doc-mode");
} else {
return G__113618;
}
})(),(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(function (){var blocks__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),cljs.core.first),cljs.core._GT_,blocks);
var iter__5520__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__113619(s__113620){
return (new cljs.core.LazySeq(null,(function (){
var s__113620__$1 = s__113620;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113620__$1);
if(temp__5804__auto__){
var s__113620__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113620__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113620__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113622 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113621 = (0);
while(true){
if((i__113621 < size__5519__auto__)){
var vec__113623 = cljs.core._nth(c__5518__auto__,i__113621);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113623,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113623,(1),null);
cljs.core.chunk_append(b__113622,frontend.ui.lazy_visible(((function (i__113621,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1){
return (function (){
var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__113626 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113626) : frontend.db.entity.call(null,G__113626));
})();
var blocks__$3 = frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(blocks__$2);
var parent_blocks = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),blocks__$3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query-page-result.color-level","div.custom-query-page-result.color-level",-1228494267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(function (){var map__113627 = cljs.core.group_by(((function (i__113621,alias_QMARK_,page__$1,blocks__$3,parent_blocks,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1){
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(b)));
});})(i__113621,alias_QMARK_,page__$1,blocks__$3,parent_blocks,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1))
,parent_blocks);
var map__113627__$1 = cljs.core.__destructure_map(map__113627);
var top_level_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113627__$1,true);
var others = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113627__$1,false);
var sorted_parent_blocks = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(top_level_blocks,others);
var iter__5520__auto__ = ((function (i__113621,map__113627,map__113627__$1,top_level_blocks,others,sorted_parent_blocks,alias_QMARK_,page__$1,blocks__$3,parent_blocks,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1){
return (function frontend$components$block$__GT_hiccup_$_iter__113619_$_iter__113628(s__113629){
return (new cljs.core.LazySeq(null,((function (i__113621,map__113627,map__113627__$1,top_level_blocks,others,sorted_parent_blocks,alias_QMARK_,page__$1,blocks__$3,parent_blocks,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1){
return (function (){
var s__113629__$1 = s__113629;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__113629__$1);
if(temp__5804__auto____$1){
var s__113629__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__113629__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__113629__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__113631 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__113630 = (0);
while(true){
if((i__113630 < size__5519__auto____$1)){
var vec__113632 = cljs.core._nth(c__5518__auto____$1,i__113630);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113632,(0),null);
var blocks__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113632,(1),null);
cljs.core.chunk_append(b__113631,(function (){var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks__$4,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"top-level?","top-level?",993634489),top_level_QMARK_)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})());

var G__113792 = (i__113630 + (1));
i__113630 = G__113792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113631),frontend$components$block$__GT_hiccup_$_iter__113619_$_iter__113628(cljs.core.chunk_rest(s__113629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113631),null);
}
} else {
var vec__113635 = cljs.core.first(s__113629__$2);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113635,(0),null);
var blocks__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113635,(1),null);
return cljs.core.cons((function (){var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks__$4,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"top-level?","top-level?",993634489),top_level_QMARK_)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})(),frontend$components$block$__GT_hiccup_$_iter__113619_$_iter__113628(cljs.core.rest(s__113629__$2)));
}
} else {
return null;
}
break;
}
});})(i__113621,map__113627,map__113627__$1,top_level_blocks,others,sorted_parent_blocks,alias_QMARK_,page__$1,blocks__$3,parent_blocks,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1))
,null,null));
});})(i__113621,map__113627,map__113627__$1,top_level_blocks,others,sorted_parent_blocks,alias_QMARK_,page__$1,blocks__$3,parent_blocks,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1))
;
return iter__5520__auto__(sorted_parent_blocks);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),page__$1], null))], null);
});})(i__113621,vec__113623,page,blocks__$2,c__5518__auto__,size__5519__auto__,b__113622,s__113620__$2,temp__5804__auto__,blocks__$1))
));

var G__113793 = (i__113621 + (1));
i__113621 = G__113793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113622),frontend$components$block$__GT_hiccup_$_iter__113619(cljs.core.chunk_rest(s__113620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113622),null);
}
} else {
var vec__113638 = cljs.core.first(s__113620__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113638,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113638,(1),null);
return cljs.core.cons(frontend.ui.lazy_visible(((function (vec__113638,page,blocks__$2,s__113620__$2,temp__5804__auto__,blocks__$1){
return (function (){
var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__113641 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113641) : frontend.db.entity.call(null,G__113641));
})();
var blocks__$3 = frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(blocks__$2);
var parent_blocks = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),blocks__$3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query-page-result.color-level","div.custom-query-page-result.color-level",-1228494267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(function (){var map__113642 = cljs.core.group_by((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(b)));
}),parent_blocks);
var map__113642__$1 = cljs.core.__destructure_map(map__113642);
var top_level_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113642__$1,true);
var others = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113642__$1,false);
var sorted_parent_blocks = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(top_level_blocks,others);
var iter__5520__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__113619_$_iter__113643(s__113644){
return (new cljs.core.LazySeq(null,(function (){
var s__113644__$1 = s__113644;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__113644__$1);
if(temp__5804__auto____$1){
var s__113644__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__113644__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113644__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113646 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113645 = (0);
while(true){
if((i__113645 < size__5519__auto__)){
var vec__113647 = cljs.core._nth(c__5518__auto__,i__113645);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113647,(0),null);
var blocks__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113647,(1),null);
cljs.core.chunk_append(b__113646,(function (){var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks__$4,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"top-level?","top-level?",993634489),top_level_QMARK_)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})());

var G__113794 = (i__113645 + (1));
i__113645 = G__113794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113646),frontend$components$block$__GT_hiccup_$_iter__113619_$_iter__113643(cljs.core.chunk_rest(s__113644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113646),null);
}
} else {
var vec__113650 = cljs.core.first(s__113644__$2);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113650,(0),null);
var blocks__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113650,(1),null);
return cljs.core.cons((function (){var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks__$4,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"top-level?","top-level?",993634489),top_level_QMARK_)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})(),frontend$components$block$__GT_hiccup_$_iter__113619_$_iter__113643(cljs.core.rest(s__113644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sorted_parent_blocks);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),page__$1], null))], null);
});})(vec__113638,page,blocks__$2,s__113620__$2,temp__5804__auto__,blocks__$1))
),frontend$components$block$__GT_hiccup_$_iter__113619(cljs.core.rest(s__113620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(blocks__$1);
})()], null):(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.references-blocks-wrap","div.flex.flex-col.references-blocks-wrap",-1419335530),(function (){var blocks__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),cljs.core.first),cljs.core._GT_,blocks);
var iter__5520__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__113653(s__113654){
return (new cljs.core.LazySeq(null,(function (){
var s__113654__$1 = s__113654;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113654__$1);
if(temp__5804__auto__){
var s__113654__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113654__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113654__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113656 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113655 = (0);
while(true){
if((i__113655 < size__5519__auto__)){
var vec__113657 = cljs.core._nth(c__5518__auto__,i__113655);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113657,(0),null);
var page_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113657,(1),null);
cljs.core.chunk_append(b__113656,frontend.ui.lazy_visible(((function (i__113655,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (){
var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__113660 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113660) : frontend.db.entity.call(null,G__113660));
})();
var parent_blocks = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),page_blocks);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2.references-blocks-item","div.my-2.references-blocks-item",-1813100606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(function (){var iter__5520__auto__ = ((function (i__113655,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function frontend$components$block$__GT_hiccup_$_iter__113653_$_iter__113661(s__113662){
return (new cljs.core.LazySeq(null,((function (i__113655,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (){
var s__113662__$1 = s__113662;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__113662__$1);
if(temp__5804__auto____$1){
var s__113662__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__113662__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__113662__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__113664 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__113663 = (0);
while(true){
if((i__113663 < size__5519__auto____$1)){
var vec__113665 = cljs.core._nth(c__5518__auto____$1,i__113663);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113665,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113665,(1),null);
cljs.core.chunk_append(b__113664,(function (){var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__113663,i__113655,vec__113665,parent,blocks__$2,c__5518__auto____$1,size__5519__auto____$1,b__113664,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (b){
if(datascript.impl.entity.entity_QMARK_(b)){
var G__113668 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__113668) : frontend.db.pull.call(null,G__113668));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),((function (i__113663,i__113655,vec__113665,parent,blocks__$2,c__5518__auto____$1,size__5519__auto____$1,b__113664,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (col){
return frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(col);
});})(i__113663,i__113655,vec__113665,parent,blocks__$2,c__5518__auto____$1,size__5519__auto____$1,b__113664,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
);
}
});})(i__113663,i__113655,vec__113665,parent,blocks__$2,c__5518__auto____$1,size__5519__auto____$1,b__113664,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
,blocks__$2);
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks_SINGLEQUOTE_,config),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})());

var G__113795 = (i__113663 + (1));
i__113663 = G__113795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113664),frontend$components$block$__GT_hiccup_$_iter__113653_$_iter__113661(cljs.core.chunk_rest(s__113662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113664),null);
}
} else {
var vec__113669 = cljs.core.first(s__113662__$2);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113669,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113669,(1),null);
return cljs.core.cons((function (){var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__113655,vec__113669,parent,blocks__$2,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (b){
if(datascript.impl.entity.entity_QMARK_(b)){
var G__113672 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__113672) : frontend.db.pull.call(null,G__113672));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),((function (i__113655,vec__113669,parent,blocks__$2,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (col){
return frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(col);
});})(i__113655,vec__113669,parent,blocks__$2,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
);
}
});})(i__113655,vec__113669,parent,blocks__$2,s__113662__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
,blocks__$2);
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks_SINGLEQUOTE_,config),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})(),frontend$components$block$__GT_hiccup_$_iter__113653_$_iter__113661(cljs.core.rest(s__113662__$2)));
}
} else {
return null;
}
break;
}
});})(i__113655,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
,null,null));
});})(i__113655,alias_QMARK_,page__$1,parent_blocks,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
;
return iter__5520__auto__(parent_blocks);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),page__$1], null))], null);
});})(i__113655,vec__113657,page,page_blocks,c__5518__auto__,size__5519__auto__,b__113656,s__113654__$2,temp__5804__auto__,blocks__$1))
));

var G__113796 = (i__113655 + (1));
i__113655 = G__113796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113656),frontend$components$block$__GT_hiccup_$_iter__113653(cljs.core.chunk_rest(s__113654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113656),null);
}
} else {
var vec__113673 = cljs.core.first(s__113654__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113673,(0),null);
var page_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113673,(1),null);
return cljs.core.cons(frontend.ui.lazy_visible(((function (vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (){
var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__113676 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113676) : frontend.db.entity.call(null,G__113676));
})();
var parent_blocks = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),page_blocks);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2.references-blocks-item","div.my-2.references-blocks-item",-1813100606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(function (){var iter__5520__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__113653_$_iter__113677(s__113678){
return (new cljs.core.LazySeq(null,(function (){
var s__113678__$1 = s__113678;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__113678__$1);
if(temp__5804__auto____$1){
var s__113678__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__113678__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113678__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113680 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113679 = (0);
while(true){
if((i__113679 < size__5519__auto__)){
var vec__113681 = cljs.core._nth(c__5518__auto__,i__113679);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113681,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113681,(1),null);
cljs.core.chunk_append(b__113680,(function (){var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__113679,vec__113681,parent,blocks__$2,c__5518__auto__,size__5519__auto__,b__113680,s__113678__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (b){
if(datascript.impl.entity.entity_QMARK_(b)){
var G__113684 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__113684) : frontend.db.pull.call(null,G__113684));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),((function (i__113679,vec__113681,parent,blocks__$2,c__5518__auto__,size__5519__auto__,b__113680,s__113678__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (col){
return frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(col);
});})(i__113679,vec__113681,parent,blocks__$2,c__5518__auto__,size__5519__auto__,b__113680,s__113678__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1))
);
}
});})(i__113679,vec__113681,parent,blocks__$2,c__5518__auto__,size__5519__auto__,b__113680,s__113678__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1))
,blocks__$2);
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks_SINGLEQUOTE_,config),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})());

var G__113797 = (i__113679 + (1));
i__113679 = G__113797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113680),frontend$components$block$__GT_hiccup_$_iter__113653_$_iter__113677(cljs.core.chunk_rest(s__113678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113680),null);
}
} else {
var vec__113685 = cljs.core.first(s__113678__$2);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113685,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113685,(1),null);
return cljs.core.cons((function (){var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__113685,parent,blocks__$2,s__113678__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1){
return (function (b){
if(datascript.impl.entity.entity_QMARK_(b)){
var G__113688 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__113688) : frontend.db.pull.call(null,G__113688));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),(function (col){
return frontend.modules.outliner.tree.non_consecutive_blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(col);
}));
}
});})(vec__113685,parent,blocks__$2,s__113678__$2,temp__5804__auto____$1,alias_QMARK_,page__$1,parent_blocks,vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1))
,blocks__$2);
return rum.core.with_key(frontend.components.block.breadcrumb_with_container(blocks_SINGLEQUOTE_,config),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
})(),frontend$components$block$__GT_hiccup_$_iter__113653_$_iter__113677(cljs.core.rest(s__113678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(parent_blocks);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),page__$1], null))], null);
});})(vec__113673,page,page_blocks,s__113654__$2,temp__5804__auto__,blocks__$1))
),frontend$components$block$__GT_hiccup_$_iter__113653(cljs.core.rest(s__113654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(blocks__$1);
})()], null):(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.vector_QMARK_(cljs.core.first(blocks));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(function (){var blocks__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),cljs.core.first),cljs.core._GT_,blocks);
var iter__5520__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__113689(s__113690){
return (new cljs.core.LazySeq(null,(function (){
var s__113690__$1 = s__113690;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113690__$1);
if(temp__5804__auto__){
var s__113690__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113690__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113690__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113692 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113691 = (0);
while(true){
if((i__113691 < size__5519__auto__)){
var vec__113693 = cljs.core._nth(c__5518__auto__,i__113691);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113693,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113693,(1),null);
cljs.core.chunk_append(b__113692,(function (){var blocks__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks__$2);
if(cljs.core.seq(blocks__$3)){
var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__113696 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113696) : frontend.db.entity.call(null,G__113696));
})();
var whiteboard_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(cljs.core.truth_(whiteboard_QMARK_)?null:frontend.components.block.blocks_container(blocks__$3,config)),cljs.core.PersistentArrayMap.EMPTY)], null);
} else {
return null;
}
})());

var G__113798 = (i__113691 + (1));
i__113691 = G__113798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113692),frontend$components$block$__GT_hiccup_$_iter__113689(cljs.core.chunk_rest(s__113690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113692),null);
}
} else {
var vec__113697 = cljs.core.first(s__113690__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113697,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113697,(1),null);
return cljs.core.cons((function (){var blocks__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks__$2);
if(cljs.core.seq(blocks__$3)){
var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__113700 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__113700) : frontend.db.entity.call(null,G__113700));
})();
var whiteboard_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(page__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(cljs.core.truth_(whiteboard_QMARK_)?null:frontend.components.block.blocks_container(blocks__$3,config)),cljs.core.PersistentArrayMap.EMPTY)], null);
} else {
return null;
}
})(),frontend$components$block$__GT_hiccup_$_iter__113689(cljs.core.rest(s__113690__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(blocks__$1);
})()], null):frontend.components.block.blocks_container(blocks,config)
)))], null);
});

//# sourceMappingURL=frontend.components.block.js.map
