goog.provide('frontend.encrypt');
frontend.encrypt.encrypt_with_passphrase = (function frontend$encrypt$encrypt_with_passphrase(passphrase,content){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.utf8.encode(content),(function (raw_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["encrypt-with-passphrase",passphrase,raw_content], 0)),(function (encrypted){
return promesa.protocols._promise(logseq.graph_parser.utf8.decode(encrypted));
}));
}));
}));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(frontend.mobile.util.file_sync.encryptWithPassphrase(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"passphrase","passphrase",-1519291766),passphrase,new cljs.core.Keyword(null,"content","content",15833224),content], null))),(function (p1__84703_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__84703_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
} else {
return null;

}
}
});
frontend.encrypt.decrypt_with_passphrase = (function frontend$encrypt$decrypt_with_passphrase(passphrase,content){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.utf8.encode(content),(function (raw_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decrypt-with-passphrase",passphrase,raw_content], 0)),(function (decrypted){
return promesa.protocols._promise(logseq.graph_parser.utf8.decode(decrypted));
}));
}));
}));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(frontend.mobile.util.file_sync.decryptWithPassphrase(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"passphrase","passphrase",-1519291766),passphrase,new cljs.core.Keyword(null,"content","content",15833224),content], null))),(function (p1__84708_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__84708_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
} else {
return null;

}
}
});

//# sourceMappingURL=frontend.encrypt.js.map
