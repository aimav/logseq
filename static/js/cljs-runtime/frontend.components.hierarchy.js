goog.provide('frontend.components.hierarchy');
/**
 * Get all parent pages along the namespace hierarchy path.
 * If there're aliases, only use the first namespaced alias.
 */
frontend.components.hierarchy.get_relation = (function frontend$components$hierarchy$get_relation(page){
var temp__5804__auto__ = (function (){var or__5043__auto__ = logseq.graph_parser.text.get_nested_page_name(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page__$1 = temp__5804__auto__;
var repo = frontend.state.get_current_repo();
var aliases = (frontend.db.get_page_alias_names.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_alias_names.cljs$core$IFn$_invoke$arity$2(repo,page__$1) : frontend.db.get_page_alias_names.call(null,repo,page__$1));
var all_page_names = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(aliases,page__$1);
var temp__5804__auto____$1 = (function (){var or__5043__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.text.namespace_page_QMARK_,all_page_names));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1((function (){var G__114417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page__$1) : frontend.util.page_name_sanity_lc.call(null,page__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114417) : frontend.db.entity.call(null,G__114417));
})()))){
return page__$1;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var page__$2 = temp__5804__auto____$1;
var namespace_pages = (frontend.db.get_namespace_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_namespace_pages.cljs$core$IFn$_invoke$arity$2(repo,page__$2) : frontend.db.get_namespace_pages.call(null,repo,page__$2));
var parent_routes = frontend.db.model.get_page_namespace_routes(repo,page__$2);
var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__114416_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__114416_SHARP_,"/");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page__$3){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page__$3);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page__$3);
}
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(namespace_pages,parent_routes)))));
var page_namespace = frontend.db.model.get_page_namespace(repo,page__$2);
var page_namespace__$1 = frontend.util.get_page_original_name(page_namespace);
if(cljs.core.seq(pages)){
return pages;
} else {
if(cljs.core.truth_(page_namespace__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.split.cljs$core$IFn$_invoke$arity$2(page_namespace__$1,"/")], null);
} else {
return null;

}
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.hierarchy.structures = rum.core.lazy_build(rum.core.build_defc,(function (page){
var namespaces = frontend.components.hierarchy.get_relation(page);
if(cljs.core.seq(namespaces)){
return daiquiri.core.create_element("div",{'className':"page-hierarchy mt-6"},[frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-30","h2.font-bold.opacity-30",-1124529960),"Hierarchy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.namespaces","ul.namespaces",-1394729042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 24px"], null)], null),(function (){var iter__5520__auto__ = (function frontend$components$hierarchy$iter__114490(s__114491){
return (new cljs.core.LazySeq(null,(function (){
var s__114491__$1 = s__114491;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114491__$1);
if(temp__5804__auto__){
var s__114491__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114491__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114491__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114493 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114492 = (0);
while(true){
if((i__114492 < size__5519__auto__)){
var namespace = cljs.core._nth(c__5518__auto__,i__114492);
cljs.core.chunk_append(b__114493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.my-2","li.my-2",-2007406172),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2.opacity-30","span.mx-2.opacity-30",541053943),"/"], null),(function (){var iter__5520__auto__ = ((function (i__114492,namespace,c__5518__auto__,size__5519__auto__,b__114493,s__114491__$2,temp__5804__auto__,namespaces){
return (function frontend$components$hierarchy$iter__114490_$_iter__114494(s__114495){
return (new cljs.core.LazySeq(null,((function (i__114492,namespace,c__5518__auto__,size__5519__auto__,b__114493,s__114491__$2,temp__5804__auto__,namespaces){
return (function (){
var s__114495__$1 = s__114495;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__114495__$1);
if(temp__5804__auto____$1){
var s__114495__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__114495__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__114495__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__114497 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__114496 = (0);
while(true){
if((i__114496 < size__5519__auto____$1)){
var vec__114498 = cljs.core._nth(c__5518__auto____$1,i__114496);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114498,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114498,(1),null);
cljs.core.chunk_append(b__114497,(cljs.core.truth_((function (){var and__5041__auto__ = typeof page__$1 === 'string';
if(and__5041__auto__){
return page__$1;
} else {
return and__5041__auto__;
}
})())?(function (){var full_page = frontend.util.string_join_path(cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),namespace));
return frontend.components.block.page_reference(false,full_page,cljs.core.PersistentArrayMap.EMPTY,page__$1);
})():null));

var G__114514 = (i__114496 + (1));
i__114496 = G__114514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114497),frontend$components$hierarchy$iter__114490_$_iter__114494(cljs.core.chunk_rest(s__114495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114497),null);
}
} else {
var vec__114501 = cljs.core.first(s__114495__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114501,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114501,(1),null);
return cljs.core.cons((cljs.core.truth_((function (){var and__5041__auto__ = typeof page__$1 === 'string';
if(and__5041__auto__){
return page__$1;
} else {
return and__5041__auto__;
}
})())?(function (){var full_page = frontend.util.string_join_path(cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),namespace));
return frontend.components.block.page_reference(false,full_page,cljs.core.PersistentArrayMap.EMPTY,page__$1);
})():null),frontend$components$hierarchy$iter__114490_$_iter__114494(cljs.core.rest(s__114495__$2)));
}
} else {
return null;
}
break;
}
});})(i__114492,namespace,c__5518__auto__,size__5519__auto__,b__114493,s__114491__$2,temp__5804__auto__,namespaces))
,null,null));
});})(i__114492,namespace,c__5518__auto__,size__5519__auto__,b__114493,s__114491__$2,temp__5804__auto__,namespaces))
;
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(namespace));
})())], null));

var G__114515 = (i__114492 + (1));
i__114492 = G__114515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114493),frontend$components$hierarchy$iter__114490(cljs.core.chunk_rest(s__114491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114493),null);
}
} else {
var namespace = cljs.core.first(s__114491__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.my-2","li.my-2",-2007406172),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2.opacity-30","span.mx-2.opacity-30",541053943),"/"], null),(function (){var iter__5520__auto__ = ((function (namespace,s__114491__$2,temp__5804__auto__,namespaces){
return (function frontend$components$hierarchy$iter__114490_$_iter__114504(s__114505){
return (new cljs.core.LazySeq(null,(function (){
var s__114505__$1 = s__114505;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__114505__$1);
if(temp__5804__auto____$1){
var s__114505__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__114505__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114505__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114507 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114506 = (0);
while(true){
if((i__114506 < size__5519__auto__)){
var vec__114508 = cljs.core._nth(c__5518__auto__,i__114506);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114508,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114508,(1),null);
cljs.core.chunk_append(b__114507,(cljs.core.truth_((function (){var and__5041__auto__ = typeof page__$1 === 'string';
if(and__5041__auto__){
return page__$1;
} else {
return and__5041__auto__;
}
})())?(function (){var full_page = frontend.util.string_join_path(cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),namespace));
return frontend.components.block.page_reference(false,full_page,cljs.core.PersistentArrayMap.EMPTY,page__$1);
})():null));

var G__114516 = (i__114506 + (1));
i__114506 = G__114516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114507),frontend$components$hierarchy$iter__114490_$_iter__114504(cljs.core.chunk_rest(s__114505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114507),null);
}
} else {
var vec__114511 = cljs.core.first(s__114505__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114511,(0),null);
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114511,(1),null);
return cljs.core.cons((cljs.core.truth_((function (){var and__5041__auto__ = typeof page__$1 === 'string';
if(and__5041__auto__){
return page__$1;
} else {
return and__5041__auto__;
}
})())?(function (){var full_page = frontend.util.string_join_path(cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),namespace));
return frontend.components.block.page_reference(false,full_page,cljs.core.PersistentArrayMap.EMPTY,page__$1);
})():null),frontend$components$hierarchy$iter__114490_$_iter__114504(cljs.core.rest(s__114505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(namespace,s__114491__$2,temp__5804__auto__,namespaces))
;
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(namespace));
})())], null),frontend$components$hierarchy$iter__114490(cljs.core.rest(s__114491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(namespaces);
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),false,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))]);
} else {
return null;
}
}),null,"frontend.components.hierarchy/structures");

//# sourceMappingURL=frontend.components.hierarchy.js.map
