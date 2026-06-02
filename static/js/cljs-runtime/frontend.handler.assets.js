goog.provide('frontend.handler.assets');
frontend.handler.assets.alias_enabled_QMARK_ = (function frontend$handler$assets$alias_enabled_QMARK_(){
var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
} else {
return and__5041__auto__;
}
});
frontend.handler.assets.clean_path_prefix = (function frontend$handler$assets$clean_path_prefix(path){
if(typeof path === 'string'){
return clojure.string.replace_first(path,/^[.\\/\\]*(assets)[\\/\\]+/,"");
} else {
return null;
}
});
frontend.handler.assets.check_alias_path_QMARK_ = (function frontend$handler$assets$check_alias_path_QMARK_(path){
var and__5041__auto__ = typeof path === 'string';
if(and__5041__auto__){
var G__102428 = path;
var G__102428__$1 = (((G__102428 == null))?null:frontend.handler.assets.clean_path_prefix(G__102428));
if((G__102428__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__102428__$1,"@");
}
} else {
return and__5041__auto__;
}
});
frontend.handler.assets.get_alias_dirs = (function frontend$handler$assets$get_alias_dirs(){
return new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.handler.assets.get_alias_by_dir = (function frontend$handler$assets$get_alias_by_dir(dir){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.handler.assets.get_alias_dirs());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var alias_dirs = temp__5804__auto__;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__102429_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__102429_SHARP_)));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(alias_dirs));
} else {
return null;
}
});
frontend.handler.assets.get_alias_by_name = (function frontend$handler$assets$get_alias_by_name(name){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.handler.assets.get_alias_dirs());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var alias_dirs = temp__5804__auto__;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__102430_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__102430_SHARP_)));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(alias_dirs));
} else {
return null;
}
});
frontend.handler.assets.convert_platform_protocol = (function frontend$handler$assets$convert_platform_protocol(full_path){
var G__102431 = full_path;
if(cljs.core.truth_((function (){var and__5041__auto__ = typeof full_path === 'string';
if(and__5041__auto__){
return frontend.mobile.util.native_platform_QMARK_();
} else {
return and__5041__auto__;
}
})())){
return clojure.string.replace_first(G__102431,/^(file:\/\/|assets:\/\/)/,logseq.graph_parser.config.capacitor_protocol_with_prefix);
} else {
return G__102431;
}
});
frontend.handler.assets.resolve_asset_real_path_url = (function frontend$handler$assets$resolve_asset_real_path_url(repo,rpath){
var temp__5804__auto__ = (function (){var and__5041__auto__ = typeof rpath === 'string';
if(and__5041__auto__){
return clojure.string.replace(rpath,/^[.\\/\\]+/,"");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var rpath__$1 = temp__5804__auto__;
if(frontend.config.publishing_QMARK_){
return ["./",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpath__$1)].join('');
} else {
var ret = (function (){var rpath__$2 = (((!(clojure.string.starts_with_QMARK_(rpath__$1,logseq.graph_parser.config.local_assets_dir))))?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.config.local_assets_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath__$1], 0)):rpath__$1);
var encoded_chars_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/%[0-9a-f]{2}/i,rpath__$2));
var rpath__$3 = ((encoded_chars_QMARK_)?decodeURI(rpath__$2):rpath__$2);
var graph_root = frontend.config.get_repo_dir(repo);
var has_schema_QMARK_ = clojure.string.starts_with_QMARK_(graph_root,"file:");
var temp__5802__auto__ = (function (){var and__5041__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var rpath_SINGLEQUOTE_ = clojure.string.replace(rpath__$3,cljs.core.re_pattern(["^",logseq.graph_parser.config.local_assets_dir,"[\\/\\\\]+"].join('')),"");
var and__5041__auto____$1 = clojure.string.starts_with_QMARK_(rpath_SINGLEQUOTE_,"@");
if(and__5041__auto____$1){
var G__102432 = (function (){var and__5041__auto____$2 = cljs.core.seq(frontend.handler.assets.get_alias_dirs());
if(and__5041__auto____$2){
return cljs.core.second(frontend.handler.assets.get_alias_by_name(cljs.core.second(cljs.core.re_find(/^@([^\\/]+)/,rpath_SINGLEQUOTE_))));
} else {
return and__5041__auto____$2;
}
})();
if((G__102432 == null)){
return null;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[rpath_SINGLEQUOTE_,G__102432],null));
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var vec__102433 = temp__5802__auto__;
var rpath_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102433,(0),null);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102433,(1),null);
return ["assets://",clojure.string.replace(rpath_SINGLEQUOTE_,["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(alias))].join(''),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(alias))].join('');
} else {
if(has_schema_QMARK_){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(graph_root,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath__$3], 0));
} else {
return logseq.common.path.prepend_protocol("file:",logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(graph_root,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rpath__$3], 0)));
}
}
})();
return frontend.handler.assets.convert_platform_protocol(ret);
}
} else {
return null;
}
});
/**
 * try to convert resource file to url asset link
 */
frontend.handler.assets.normalize_asset_resource_url = (function frontend$handler$assets$normalize_asset_resource_url(path){
var protocol_link_QMARK_ = cljs.core.some((function (p1__102436_SHARP_){
return clojure.string.starts_with_QMARK_(clojure.string.lower_case(path),p1__102436_SHARP_);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["https://",null,"file://",null,"assets://",null,"http://",null], null), null));
if(cljs.core.truth_(protocol_link_QMARK_)){
return path;
} else {
if(logseq.common.path.absolute_QMARK_(path)){
if(cljs.core.boolean$(cljs.core.re_find(/%[0-9a-f]{2}/i,path))){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.util.safe_decode_uri_component(path)], 0));
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
}
} else {
return frontend.handler.assets.resolve_asset_real_path_url(frontend.state.get_current_repo(),path);

}
}
});
frontend.handler.assets.get_matched_alias_by_ext = (function frontend$handler$assets$get_matched_alias_by_ext(ext){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = typeof ext === 'string';
if(and__5041__auto____$1){
var and__5041__auto____$2 = (!(clojure.string.blank_QMARK_(ext)));
if(and__5041__auto____$2){
return frontend.util.safe_lower_case(ext);
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var ext__$1 = temp__5804__auto__;
var alias = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p__102438){
var map__102439 = p__102438;
var map__102439__$1 = cljs.core.__destructure_map(map__102439);
var exts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102439__$1,new cljs.core.Keyword(null,"exts","exts",-946342126));
return cljs.core.some((function (p1__102437_SHARP_){
return clojure.string.ends_with_QMARK_(ext__$1,p1__102437_SHARP_);
}),exts);
}),frontend.handler.assets.get_alias_dirs());
return alias;
} else {
return null;
}
});
/**
 * Link text for inserting to markdown/org
 */
frontend.handler.assets.get_asset_file_link = (function frontend$handler$assets$get_asset_file_link(format,url,file_name,image_QMARK_){
var pdf_QMARK_ = (function (){var and__5041__auto__ = url;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(clojure.string.lower_case(url),".pdf");
} else {
return and__5041__auto__;
}
})();
var media_QMARK_ = (function (){var and__5041__auto__ = url;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = frontend.config.ext_of_audio_QMARK_.cljs$core$IFn$_invoke$arity$1(url);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.ext_of_video_QMARK_.cljs$core$IFn$_invoke$arity$1(url);
}
} else {
return and__5041__auto__;
}
})();
var G__102440 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__102440__$1 = (((G__102440 instanceof cljs.core.Keyword))?G__102440.fqn:null);
switch (G__102440__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([(cljs.core.truth_((function (){var or__5043__auto__ = image_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = media_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return pdf_QMARK_;
}
}
})())?"!":null),"[%s](%s)"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name,url], 0));

break;
case "org":
if(cljs.core.truth_(image_QMARK_)){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url,file_name], 0));
}

break;
default:
return null;

}
});

//# sourceMappingURL=frontend.handler.assets.js.map
