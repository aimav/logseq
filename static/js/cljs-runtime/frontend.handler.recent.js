goog.provide('frontend.handler.recent');
frontend.handler.recent.add_page_to_recent_BANG_ = (function frontend$handler$recent$add_page_to_recent_BANG_(repo,page_name_or_block_uuid,click_from_recent_QMARK_){
var pages = (function (){var or__5043__auto__ = (frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})();
var page_name = ((cljs.core.uuid_QMARK_(page_name_or_block_uuid))?(function (){var temp__5804__auto__ = frontend.db.model.get_block_by_uuid(page_name_or_block_uuid);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null));
} else {
return null;
}
})():page_name_or_block_uuid);
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = click_from_recent_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var fexpr__105429 = cljs.core.set(pages);
return (fexpr__105429.cljs$core$IFn$_invoke$arity$1 ? fexpr__105429.cljs$core$IFn$_invoke$arity$1(page_name) : fexpr__105429.call(null,page_name));
})());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(click_from_recent_QMARK_);
}
})())){
var new_pages = cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(page_name,pages)));
return (frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),new_pages) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),new_pages));
} else {
return null;
}
});
frontend.handler.recent.update_or_add_renamed_page = (function frontend$handler$recent$update_or_add_renamed_page(repo,old_page_name,new_page_name){
var pages = (function (){var or__5043__auto__ = (frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})();
var updated_pages = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([old_page_name,new_page_name]),pages);
var updated_pages_STAR_ = ((cljs.core.contains_QMARK_(cljs.core.set(updated_pages),new_page_name))?updated_pages:cljs.core.cons(new_page_name,updated_pages));
return (frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),updated_pages_STAR_) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),updated_pages_STAR_));
});

//# sourceMappingURL=frontend.handler.recent.js.map
