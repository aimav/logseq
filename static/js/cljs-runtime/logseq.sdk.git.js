goog.provide('logseq.sdk.git');
logseq.sdk.git.exec_command = (function logseq$sdk$git$exec_command(args){
var temp__5804__auto__ = (function (){var and__5041__auto__ = args;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs_bean.core.__GT_clj(args));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var args__$1 = temp__5804__auto__;
return frontend.handler.shell.run_git_command2_BANG_(args__$1);
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.git.exec_command', logseq.sdk.git.exec_command);
logseq.sdk.git.load_ignore_file = (function logseq$sdk$git$load_ignore_file(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(".gitignore",(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3(repo,dir,file),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(dir,file),(function (content){
return promesa.protocols._promise(content);
}));
}));
}));
}));
}));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.git.load_ignore_file', logseq.sdk.git.load_ignore_file);
logseq.sdk.git.save_ignore_file = (function logseq$sdk$git$save_ignore_file(content){
var temp__5804__auto__ = (function (){var and__5041__auto__ = typeof content === 'string';
if(and__5041__auto__){
return frontend.state.get_current_repo();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(".gitignore",(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,file,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (_){
return promesa.protocols._promise(null);
}));
}));
}));
}));
} else {
return null;
}
});
goog.exportSymbol('logseq.sdk.git.save_ignore_file', logseq.sdk.git.save_ignore_file);

//# sourceMappingURL=logseq.sdk.git.js.map
