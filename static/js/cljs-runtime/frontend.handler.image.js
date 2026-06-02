goog.provide('frontend.handler.image');
goog.scope(function(){
  frontend.handler.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.image.render_local_images_BANG_ = (function frontend$handler$image$render_local_images_BANG_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_ios_QMARK_();
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
try{var images = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByTagName("img"));
var get_src = (function (image){
return image.getAttribute("src");
});
var local_images = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (image){
var src = get_src(image);
var and__5041__auto__ = src;
if(cljs.core.truth_(and__5041__auto__)){
return (!(((frontend.util.starts_with_QMARK_(src,"http://")) || (((frontend.util.starts_with_QMARK_(src,"https://")) || (((frontend.util.starts_with_QMARK_(src,"blob:")) || (frontend.util.starts_with_QMARK_(src,"data:")))))))));
} else {
return and__5041__auto__;
}
}),images);
var seq__114314 = cljs.core.seq(local_images);
var chunk__114315 = null;
var count__114316 = (0);
var i__114317 = (0);
while(true){
if((i__114317 < count__114316)){
var img = chunk__114315.cljs$core$IIndexed$_nth$arity$2(null,i__114317);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__114314,chunk__114315,count__114316,i__114317,img,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__114314,chunk__114315,count__114316,i__114317,img,images,get_src,local_images))
);

var path_114318 = get_src(img);
var path_114319__$1 = clojure.string.replace_first(path_114318,"file:","");
var path_114320__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_114319__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_114319__$1,(1)):path_114319__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_114320__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__114314,chunk__114315,count__114316,i__114317,path_114318,path_114319__$1,path_114320__$2,img,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__114314,chunk__114315,count__114316,i__114317,path_114318,path_114319__$1,path_114320__$2,img,images,get_src,local_images))
,((function (seq__114314,chunk__114315,count__114316,i__114317,path_114318,path_114319__$1,path_114320__$2,img,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__114314,chunk__114315,count__114316,i__114317,path_114318,path_114319__$1,path_114320__$2,img,images,get_src,local_images))
);


var G__114321 = seq__114314;
var G__114322 = chunk__114315;
var G__114323 = count__114316;
var G__114324 = (i__114317 + (1));
seq__114314 = G__114321;
chunk__114315 = G__114322;
count__114316 = G__114323;
i__114317 = G__114324;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__114314);
if(temp__5804__auto__){
var seq__114314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__114314__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__114314__$1);
var G__114325 = cljs.core.chunk_rest(seq__114314__$1);
var G__114326 = c__5565__auto__;
var G__114327 = cljs.core.count(c__5565__auto__);
var G__114328 = (0);
seq__114314 = G__114325;
chunk__114315 = G__114326;
count__114316 = G__114327;
i__114317 = G__114328;
continue;
} else {
var img = cljs.core.first(seq__114314__$1);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__114314,chunk__114315,count__114316,i__114317,img,seq__114314__$1,temp__5804__auto__,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__114314,chunk__114315,count__114316,i__114317,img,seq__114314__$1,temp__5804__auto__,images,get_src,local_images))
);

var path_114329 = get_src(img);
var path_114330__$1 = clojure.string.replace_first(path_114329,"file:","");
var path_114331__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_114330__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_114330__$1,(1)):path_114330__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_114331__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__114314,chunk__114315,count__114316,i__114317,path_114329,path_114330__$1,path_114331__$2,img,seq__114314__$1,temp__5804__auto__,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__114314,chunk__114315,count__114316,i__114317,path_114329,path_114330__$1,path_114331__$2,img,seq__114314__$1,temp__5804__auto__,images,get_src,local_images))
,((function (seq__114314,chunk__114315,count__114316,i__114317,path_114329,path_114330__$1,path_114331__$2,img,seq__114314__$1,temp__5804__auto__,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__114314,chunk__114315,count__114316,i__114317,path_114329,path_114330__$1,path_114331__$2,img,seq__114314__$1,temp__5804__auto__,images,get_src,local_images))
);


var G__114332 = cljs.core.next(seq__114314__$1);
var G__114333 = null;
var G__114334 = (0);
var G__114335 = (0);
seq__114314 = G__114332;
chunk__114315 = G__114333;
count__114316 = G__114334;
i__114317 = G__114335;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e114313){var _e = e114313;
return null;
}}
});

//# sourceMappingURL=frontend.handler.image.js.map
