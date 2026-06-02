goog.provide('frontend.extensions.zip');
var module$node_modules$jszip$lib$index=shadow.js.require("module$node_modules$jszip$lib$index", {});
frontend.extensions.zip.make_file = (function frontend$extensions$zip$make_file(content,file_name,args){
var blob_content = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
var last_modified = (function (){var or__5043__auto__ = (content["lastModified"]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new Date());
}
})();
var args__$1 = cljs.core.clj__GT_js(args);
(args__$1["lastModified"] = last_modified);

return (new File(blob_content,file_name,args__$1));
});
frontend.extensions.zip.make_zip = (function frontend$extensions$zip$make_zip(zip_filename,file_name__GT_content,repo){
var zip = (new module$node_modules$jszip$lib$index());
var zip_foldername = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(zip_filename,(clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(zip_filename,"/") + (1)));
var src_filepath = clojure.string.replace(repo,frontend.config.local_db_prefix,"");
var folder = zip.folder(zip_foldername);
var seq__104583_104612 = cljs.core.seq(file_name__GT_content);
var chunk__104584_104613 = null;
var count__104585_104614 = (0);
var i__104586_104615 = (0);
while(true){
if((i__104586_104615 < count__104585_104614)){
var vec__104595_104616 = chunk__104584_104613.cljs$core$IIndexed$_nth$arity$2(null,i__104586_104615);
var file_name_104617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104595_104616,(0),null);
var content_104618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104595_104616,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_104617,src_filepath,""),/^\/+/,""),content_104618);


var G__104622 = seq__104583_104612;
var G__104623 = chunk__104584_104613;
var G__104624 = count__104585_104614;
var G__104625 = (i__104586_104615 + (1));
seq__104583_104612 = G__104622;
chunk__104584_104613 = G__104623;
count__104585_104614 = G__104624;
i__104586_104615 = G__104625;
continue;
} else {
var temp__5804__auto___104626 = cljs.core.seq(seq__104583_104612);
if(temp__5804__auto___104626){
var seq__104583_104627__$1 = temp__5804__auto___104626;
if(cljs.core.chunked_seq_QMARK_(seq__104583_104627__$1)){
var c__5565__auto___104628 = cljs.core.chunk_first(seq__104583_104627__$1);
var G__104629 = cljs.core.chunk_rest(seq__104583_104627__$1);
var G__104630 = c__5565__auto___104628;
var G__104631 = cljs.core.count(c__5565__auto___104628);
var G__104632 = (0);
seq__104583_104612 = G__104629;
chunk__104584_104613 = G__104630;
count__104585_104614 = G__104631;
i__104586_104615 = G__104632;
continue;
} else {
var vec__104605_104633 = cljs.core.first(seq__104583_104627__$1);
var file_name_104634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104605_104633,(0),null);
var content_104635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104605_104633,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_104634,src_filepath,""),/^\/+/,""),content_104635);


var G__104636 = cljs.core.next(seq__104583_104627__$1);
var G__104637 = null;
var G__104638 = (0);
var G__104639 = (0);
seq__104583_104612 = G__104636;
chunk__104584_104613 = G__104637;
count__104585_104614 = G__104638;
i__104586_104615 = G__104639;
continue;
}
} else {
}
}
break;
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(zip.generateAsync(({"type": "blob"})),(function (zip_blob){
return promesa.protocols._promise(frontend.extensions.zip.make_file(zip_blob,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zip_filename),".zip"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/zip"], null)));
}));
}));
});

//# sourceMappingURL=frontend.extensions.zip.js.map
