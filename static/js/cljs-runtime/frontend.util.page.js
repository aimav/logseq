goog.provide('frontend.util.page');
/**
 * Fetch the current page's original name with same approach as get-current-page-id
 */
frontend.util.page.get_current_page_name = (function frontend$util$page$get_current_page_name(){
var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.state.get_current_whiteboard();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.state.get_editor_args()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null));
}
}
});
/**
 * Fetches the current page id. Looks up page based on latest route and if
 *   nothing is found, gets page of last edited block
 */
frontend.util.page.get_current_page_id = (function frontend$util$page$get_current_page_id(){
var page_name = (function (){var G__102636 = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_whiteboard();
}
})();
if((G__102636 == null)){
return null;
} else {
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__102636) : frontend.util.page_name_sanity_lc.call(null,G__102636));
}
})();
var or__5043__auto__ = (function (){var and__5041__auto__ = page_name;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__102637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102637) : frontend.db.entity.call(null,G__102637));
})());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.state.get_editor_args()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
}
});
/**
 * Fetch the editing page id. If there is an edit-input-id set, we are probably still 
 * on editing mode
 */
frontend.util.page.get_editing_page_id = (function frontend$util$page$get_editing_page_id(){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.state.editing_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_edit_input_id();
}
})())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.state.get_editor_args()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
} else {
return frontend.util.page.get_current_page_id();
}
});
/**
 * Gets the file path of a page. If no page is given, detects the current page.
 * Returns nil if no file path is found or no page is detected or given
 */
frontend.util.page.get_page_file_rpath = (function frontend$util$page$get_page_file_rpath(var_args){
var G__102639 = arguments.length;
switch (G__102639) {
case 0:
return frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5804__auto__ = frontend.util.page.get_current_page_id();
if(cljs.core.truth_(temp__5804__auto__)){
var page_id = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("file","path","file/path",-191335748)], null));
} else {
return null;
}
}));

(frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
var temp__5804__auto__ = (function (){var G__102640 = page_name;
if((G__102640 == null)){
return null;
} else {
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__102640) : frontend.util.page_name_sanity_lc.call(null,G__102640));
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_name_SINGLEQUOTE_ = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__102641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_SINGLEQUOTE_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102641) : frontend.db.entity.call(null,G__102641));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("file","path","file/path",-191335748)], null));
} else {
return null;
}
}));

(frontend.util.page.get_page_file_rpath.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=frontend.util.page.js.map
