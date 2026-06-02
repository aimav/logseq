goog.provide('frontend.handler.conversion');
/**
 * Return:
 *   Promise <void>
 */
frontend.handler.conversion.write_filename_format_BANG_ = (function frontend$handler$conversion$write_filename_format_BANG_(repo,format){
console.log(["Writing character escaping format ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)," of repo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join(''));

return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("file","name-format","file/name-format",1975432459),format);
});
/**
 * If the file body is parsed as the same page name, but the page name has a
 * different file sanitization result under the current sanitization form, return
 * the new file name.
 * Return:
 *   the file name for the page name under the current file naming rules, or `nil`
 *   if no change of path happens
 */
frontend.handler.conversion.calc_current_name = (function frontend$handler$conversion$calc_current_name(format,file_body,prop_title){
var page_title = (function (){var or__5043__auto__ = prop_title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.util.title_parsing(file_body,format);
}
})();
var cur_file_body = frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(page_title,format);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_body,cur_file_body)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"informal","informal",-1020222012),new cljs.core.Keyword(null,"target","target",253001721),cur_file_body,new cljs.core.Keyword(null,"old-title","old-title",-85478212),page_title,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918),page_title], null);
}
});
/**
 * We want to recover user's title back under new file name sanity rules.
 * Return:
 *   the file name for that page name under the current file naming rules,
 *   and the new title if no action applied, or `nil` if no break change happens
 */
frontend.handler.conversion.calc_previous_name = (function frontend$handler$conversion$calc_previous_name(old_format,new_format,file_body){
var new_title = logseq.graph_parser.util.title_parsing(file_body,new_format);
var old_title = logseq.graph_parser.util.title_parsing(file_body,old_format);
var target = frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(old_title,new_format);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_title,old_title)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target,file_body)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"breaking","breaking",980052320),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918),new_title], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unreachable","unreachable",-1547366286),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918),new_title], null);
}
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.conversion !== 'undefined') && (typeof frontend.handler.conversion.supported_filename_formats !== 'undefined')){
} else {
frontend.handler.conversion.supported_filename_formats = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099),new cljs.core.Keyword(null,"legacy","legacy",1434943289)], null);
}
/**
 * If it's an user defined title property instead of the generated one
 */
frontend.handler.conversion.is_manual_title_prop_QMARK_ = (function frontend$handler$conversion$is_manual_title_prop_QMARK_(format,file_body,prop_title){
if(cljs.core.truth_(prop_title)){
return cljs.core.not((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_body,frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(prop_title,format));
if(or__5043__auto__){
return or__5043__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"legacy","legacy",1434943289))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_body,frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(prop_title,new cljs.core.Keyword(null,"legacy-dot","legacy-dot",-2022513970)));
} else {
return null;
}
}
})());
} else {
return false;
}
});
frontend.handler.conversion.calc_rename_target_impl = (function frontend$handler$conversion$calc_rename_target_impl(old_format,new_format,file_body,prop_title){
var ret = (function (){var or__5043__auto__ = (((((prop_title == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_format,new_format))))?frontend.handler.conversion.calc_previous_name(old_format,new_format,file_body):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.conversion.calc_current_name(new_format,file_body,prop_title);
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__115528 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ret);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__115528) : frontend.util.page_name_sanity_lc.call(null,G__115528));
})(),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(file_body) : frontend.util.page_name_sanity_lc.call(null,file_body)));
} else {
return and__5041__auto__;
}
})())){
return ret;
} else {
return null;
}
});
/**
 * Return the renaming status and new file body to recover the original title of the file in previous version.
 * The return title should be the same as the title in the index file in the previous version.
 * return nil if no rename is needed.
 * page: the page entity
 * path: the path of the file of the page
 * old-format, new-format: the filename formats
 * Return:
 *   {:status        :informal | :breaking | :unreachable
 *    :file-name original file name
 *    :target        the new file name
 *    :old-title     the old title
 *    :changed-title the new title} | nil
 */
frontend.handler.conversion.calc_rename_target = (function frontend$handler$conversion$calc_rename_target(page,path,old_format,new_format){
var prop_title = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
var file_body = logseq.graph_parser.util.path__GT_file_body(path);
var journal_QMARK_ = new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page);
var manual_prop_title_QMARK_ = frontend.handler.conversion.is_manual_title_prop_QMARK_(old_format,file_body,prop_title);
if(((cljs.core.not(journal_QMARK_)) && ((!(manual_prop_title_QMARK_))))){
return frontend.handler.conversion.calc_rename_target_impl(old_format,new_format,file_body,prop_title);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(journal_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = manual_prop_title_QMARK_;
if(and__5041__auto____$1){
return frontend.util.fs.include_reserved_chars_QMARK_(file_body);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"informal","informal",-1020222012),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_body,new cljs.core.Keyword(null,"target","target",253001721),frontend.util.fs.file_name_sanity.cljs$core$IFn$_invoke$arity$2(file_body,new_format),new cljs.core.Keyword(null,"old-title","old-title",-85478212),prop_title,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918),prop_title], null);
} else {
return null;
}
}
});

//# sourceMappingURL=frontend.handler.conversion.js.map
