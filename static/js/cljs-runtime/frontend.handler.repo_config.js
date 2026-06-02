goog.provide('frontend.handler.repo_config');
frontend.handler.repo_config.get_repo_config_content = (function frontend$handler$repo_config$get_repo_config_content(repo_url){
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo_url,"logseq/config.edn") : frontend.db.get_file.call(null,repo_url,"logseq/config.edn"));
});
/**
 * Converts file content to edn
 */
frontend.handler.repo_config.read_repo_config = (function frontend$handler$repo_config$read_repo_config(content){
try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e87291){var e = e87291;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("The file 'logseq/config.edn' is invalid. Please reload the app to in order to see the error and fix it.",new cljs.core.Keyword(null,"error","error",-978969032));

throw e;
}});
/**
 * Sets repo config state using given file content
 */
frontend.handler.repo_config.set_repo_config_state_BANG_ = (function frontend$handler$repo_config$set_repo_config_state_BANG_(repo_url,content){
var config = frontend.handler.repo_config.read_repo_config(content);
frontend.state.set_config_BANG_(repo_url,config);

return config;
});
/**
 * Creates a default logseq/config.edn if it doesn't exist
 */
frontend.handler.repo_config.create_config_file_if_not_exists = (function frontend$handler$repo_config$create_config_file_if_not_exists(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
var app_dir = frontend.config.app_name;
var dir = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_dir], 0));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(dir),(function (_){
return promesa.protocols._promise((function (){var default_content = frontend.config.config_default_content;
var path = [app_dir,"/",frontend.config.config_file].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,"logseq/config.edn",default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:(function (){
frontend.handler.common.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content);

return frontend.handler.repo_config.set_repo_config_state_BANG_(repo_url,default_content);
})()
));
}));
}));
})());
}));
}));
});
/**
 * Sets repo config state from db
 */
frontend.handler.repo_config.restore_repo_config_BANG_ = (function frontend$handler$repo_config$restore_repo_config_BANG_(var_args){
var G__87293 = arguments.length;
switch (G__87293) {
case 1:
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,frontend.handler.repo_config.get_repo_config_content(repo_url));
}));

(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,config_content){
return frontend.handler.repo_config.set_repo_config_state_BANG_(repo_url,config_content);
}));

(frontend.handler.repo_config.restore_repo_config_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * This component only has one responsibility on start, to manage db and ui state
 *   from repo config. It does not manage the repo directory, logseq/, as that is
 *   loosely done by repo-handler
 */
frontend.handler.repo_config.start = (function frontend$handler$repo_config$start(p__87294){
var map__87295 = p__87294;
var map__87295__$1 = cljs.core.__destructure_map(map__87295);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87295__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
return frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
});

//# sourceMappingURL=frontend.handler.repo_config.js.map
