goog.provide('logseq.api');
logseq.api.install_plugin_hook = (function logseq$api$install_plugin_hook(pid,hook,opts){
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3(pid,hook,cljs_bean.core.__GT_clj(opts));
});
goog.exportSymbol('logseq.api.install_plugin_hook', logseq.api.install_plugin_hook);
logseq.api.uninstall_plugin_hook = (function logseq$api$uninstall_plugin_hook(pid,hook_or_all){
return frontend.state.uninstall_plugin_hook(pid,hook_or_all);
});
goog.exportSymbol('logseq.api.uninstall_plugin_hook', logseq.api.uninstall_plugin_hook);
logseq.api.should_exec_plugin_hook = (function logseq$api$should_exec_plugin_hook(pid,hook){
return frontend.handler.plugin.plugin_hook_installed_QMARK_(pid,hook);
});
goog.exportSymbol('logseq.api.should_exec_plugin_hook', logseq.api.should_exec_plugin_hook);
logseq.api.get_state_from_store = (function logseq$api$get_state_from_store(path){
var temp__5804__auto__ = ((typeof path === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs_bean.core.__GT_clj(path));
if(cljs.core.truth_(temp__5804__auto__)){
var path__$1 = temp__5804__auto__;
var G__120983 = path__$1;
var G__120983__$1 = (((G__120983 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__120982_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__120982_SHARP_,"@")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__120982_SHARP_,(1));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__120982_SHARP_);
}
}),G__120983));
var G__120983__$2 = (((G__120983__$1 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),G__120983__$1));
var G__120983__$3 = (((G__120983__$2 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__120983__$2));
if((G__120983__$3 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__120983__$3);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_state_from_store', logseq.api.get_state_from_store);
logseq.api.set_state_from_store = (function logseq$api$set_state_from_store(path,value){
var temp__5804__auto__ = ((typeof path === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs_bean.core.__GT_clj(path));
if(cljs.core.truth_(temp__5804__auto__)){
var path__$1 = temp__5804__auto__;
var G__120986 = path__$1;
var G__120986__$1 = (((G__120986 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__120984_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__120984_SHARP_,"@")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__120984_SHARP_,(1));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__120984_SHARP_);
}
}),G__120986));
var G__120986__$2 = (((G__120986__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__120986__$1));
if((G__120986__$2 == null)){
return null;
} else {
return (function (p1__120985_SHARP_){
return frontend.state.set_state_BANG_(p1__120985_SHARP_,cljs_bean.core.__GT_clj(value));
})(G__120986__$2);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_state_from_store', logseq.api.set_state_from_store);
logseq.api.get_app_info = (function logseq$api$get_app_info(){
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),frontend.version.version], null)));
});
goog.exportSymbol('logseq.api.get_app_info', logseq.api.get_app_info);
logseq.api.get_user_configs = (function logseq$api$get_user_configs(){
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-graph","current-graph",1546435330),new cljs.core.Keyword(null,"preferred-start-of-week","preferred-start-of-week",-662727035),new cljs.core.Keyword(null,"preferred-theme-mode","preferred-theme-mode",959815621),new cljs.core.Keyword(null,"enabled-journals","enabled-journals",-914705497),new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444),new cljs.core.Keyword(null,"preferred-todo","preferred-todo",595464434),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword(null,"enabled-flashcards","enabled-flashcards",2032664407),new cljs.core.Keyword(null,"preferred-date-format","preferred-date-format",459860922),new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"show-brackets","show-brackets",-860247746),new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121)],[frontend.state.get_current_repo(),frontend.state.get_start_of_week(),new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$0(),frontend.state.get_preferred_workflow(),frontend.state.get_preferred_todo(),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0(),frontend.state.get_date_formatter(),frontend.state.get_me(),frontend.state.show_brackets_QMARK_(),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()])));
});
goog.exportSymbol('logseq.api.get_user_configs', logseq.api.get_user_configs);
/**
 * @param {...*} var_args
 */
logseq.api.get_current_graph_configs = (function() { 
var logseq$api$get_current_graph_configs__delegate = function (keys){
var G__120988 = frontend.state.get_config.cljs$core$IFn$_invoke$arity$0();
var G__120988__$1 = (((G__120988 == null))?null:(function (p1__120987_SHARP_){
if(cljs.core.seq(keys)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__120987_SHARP_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,keys));
} else {
return p1__120987_SHARP_;
}
})(G__120988));
if((G__120988__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__120988__$1);
}
};
var logseq$api$get_current_graph_configs = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__121082__i = 0, G__121082__a = new Array(arguments.length -  0);
while (G__121082__i < G__121082__a.length) {G__121082__a[G__121082__i] = arguments[G__121082__i + 0]; ++G__121082__i;}
  keys = new cljs.core.IndexedSeq(G__121082__a,0,null);
} 
return logseq$api$get_current_graph_configs__delegate.call(this,keys);};
logseq$api$get_current_graph_configs.cljs$lang$maxFixedArity = 0;
logseq$api$get_current_graph_configs.cljs$lang$applyTo = (function (arglist__121083){
var keys = cljs.core.seq(arglist__121083);
return logseq$api$get_current_graph_configs__delegate(keys);
});
logseq$api$get_current_graph_configs.cljs$core$IFn$_invoke$arity$variadic = logseq$api$get_current_graph_configs__delegate;
return logseq$api$get_current_graph_configs;
})()
;
goog.exportSymbol('logseq.api.get_current_graph_configs', logseq.api.get_current_graph_configs);
logseq.api.set_current_graph_configs = (function logseq$api$set_current_graph_configs(configs){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(configs);
if(cljs.core.truth_(temp__5804__auto__)){
var configs__$1 = temp__5804__auto__;
if(cljs.core.map_QMARK_(configs__$1)){
var seq__120989 = cljs.core.seq(configs__$1);
var chunk__120990 = null;
var count__120991 = (0);
var i__120992 = (0);
while(true){
if((i__120992 < count__120991)){
var vec__120999 = chunk__120990.cljs$core$IIndexed$_nth$arity$2(null,i__120992);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120999,(1),null);
frontend.handler.config.set_config_BANG_(k,v);


var G__121084 = seq__120989;
var G__121085 = chunk__120990;
var G__121086 = count__120991;
var G__121087 = (i__120992 + (1));
seq__120989 = G__121084;
chunk__120990 = G__121085;
count__120991 = G__121086;
i__120992 = G__121087;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__120989);
if(temp__5804__auto____$1){
var seq__120989__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__120989__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__120989__$1);
var G__121088 = cljs.core.chunk_rest(seq__120989__$1);
var G__121089 = c__5565__auto__;
var G__121090 = cljs.core.count(c__5565__auto__);
var G__121091 = (0);
seq__120989 = G__121088;
chunk__120990 = G__121089;
count__120991 = G__121090;
i__120992 = G__121091;
continue;
} else {
var vec__121002 = cljs.core.first(seq__120989__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121002,(1),null);
frontend.handler.config.set_config_BANG_(k,v);


var G__121092 = cljs.core.next(seq__120989__$1);
var G__121093 = null;
var G__121094 = (0);
var G__121095 = (0);
seq__120989 = G__121092;
chunk__120990 = G__121093;
count__120991 = G__121094;
i__120992 = G__121095;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_current_graph_configs', logseq.api.set_current_graph_configs);
logseq.api.get_current_graph_favorites = (function logseq$api$get_current_graph_favorites(){
var G__121005 = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var G__121005__$1 = (((G__121005 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__121005));
var G__121005__$2 = (((G__121005__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,G__121005__$1));
if((G__121005__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__121005__$2);
}
});
goog.exportSymbol('logseq.api.get_current_graph_favorites', logseq.api.get_current_graph_favorites);
logseq.api.get_current_graph_recent = (function logseq$api$get_current_graph_recent(){
var G__121006 = (frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)));
var G__121006__$1 = (((G__121006 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__121006));
var G__121006__$2 = (((G__121006__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,G__121006__$1));
if((G__121006__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__121006__$2);
}
});
goog.exportSymbol('logseq.api.get_current_graph_recent', logseq.api.get_current_graph_recent);
logseq.api.get_current_graph_templates = (function logseq$api$get_current_graph_templates(){
if(cljs.core.truth_(frontend.state.get_current_repo())){
var G__121007 = frontend.db.model.get_all_templates();
var G__121007__$1 = (((G__121007 == null))?null:cljs.core.update_vals(G__121007,frontend.db.pull));
var G__121007__$2 = (((G__121007__$1 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__121007__$1));
if((G__121007__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__121007__$2);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_graph_templates', logseq.api.get_current_graph_templates);
logseq.api.get_current_graph = (function logseq$api$get_current_graph(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.local_repo,repo)){
return null;
} else {
return cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),repo,new cljs.core.Keyword(null,"name","name",1843675177),(frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(repo) : frontend.util.node_path.basename.call(null,repo)),new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_repo_dir(repo)], null));
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_graph', logseq.api.get_current_graph);
logseq.api.show_themes = (function logseq$api$show_themes(){
return frontend.components.plugins.open_select_theme_BANG_();
});
goog.exportSymbol('logseq.api.show_themes', logseq.api.show_themes);
logseq.api.set_theme_mode = (function logseq$api$set_theme_mode(mode){
return frontend.state.set_theme_mode_BANG_(mode);
});
goog.exportSymbol('logseq.api.set_theme_mode', logseq.api.set_theme_mode);
logseq.api.load_plugin_config = (function logseq$api$load_plugin_config(path){
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"package.json") : frontend.util.node_path.join.call(null,path,"package.json")));
});
goog.exportSymbol('logseq.api.load_plugin_config', logseq.api.load_plugin_config);
logseq.api.load_plugin_readme = (function logseq$api$load_plugin_readme(path){
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"readme.md") : frontend.util.node_path.join.call(null,path,"readme.md")));
});
goog.exportSymbol('logseq.api.load_plugin_readme', logseq.api.load_plugin_readme);
logseq.api.save_plugin_config = (function logseq$api$save_plugin_config(path,data){
var repo = "";
var path__$1 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"package.json") : frontend.util.node_path.join.call(null,path,"package.json"));
return frontend.fs.write_file_BANG_(repo,null,path__$1,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
});
goog.exportSymbol('logseq.api.save_plugin_config', logseq.api.save_plugin_config);
logseq.api.save_focused_code_editor_content = (function logseq$api$save_focused_code_editor_content(){
return frontend.handler.code.save_code_editor_BANG_();
});
goog.exportSymbol('logseq.api.save_focused_code_editor_content', logseq.api.save_focused_code_editor_content);
logseq.api.write_rootdir_file = (function logseq$api$write_rootdir_file(file,content,sub_root,root_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(root_dir,sub_root) : frontend.util.node_path.join.call(null,root_dir,sub_root)),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(path,""),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:frontend.fs.mkdir_recur_BANG_(path)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,file) : frontend.util.node_path.join.call(null,path,file)),(function (user_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_(user_path,path),(function (sub_dir_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(sub_dir_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),191], null)),null);

throw "write file denied";
})()
),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.dirname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.dirname.cljs$core$IFn$_invoke$arity$1(user_path) : frontend.util.node_path.dirname.call(null,user_path)),(function (user_path_root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(user_path_root,""),(function (exist_QMARK___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK___$1)?null:frontend.fs.mkdir_recur_BANG_(user_path_root)),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,null,user_path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (___$3){
return promesa.protocols._promise(user_path);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.write_dotdir_file = (function logseq$api$write_dotdir_file(file,content,sub_root){
var G__121009 = frontend.handler.plugin.get_ls_dotdir_root();
if((G__121009 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__121009,(function (p1__121008_SHARP_){
return logseq.api.write_rootdir_file(file,content,sub_root,p1__121008_SHARP_);
}));
}
});
logseq.api.write_assetsdir_file = (function logseq$api$write_assetsdir_file(file,content,sub_root){
var temp__5802__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5802__auto__)){
var assets_dir = temp__5802__auto__;
return logseq.api.write_rootdir_file(file,content,sub_root,assets_dir);
} else {
return false;
}
});
logseq.api.read_rootdir_file = (function logseq$api$read_rootdir_file(file,sub_root,root_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(root_dir,sub_root) : frontend.util.node_path.join.call(null,root_dir,sub_root)),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,file) : frontend.util.node_path.join.call(null,path,file)),(function (user_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_(user_path,path),(function (sub_dir_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(sub_dir_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),215], null)),null);

throw "read file denied";
})()
),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2("",user_path),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),217], null)),null);

throw "file not existed";
})()
),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",user_path),(function (content){
return promesa.protocols._promise(content);
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.read_dotdir_file = (function logseq$api$read_dotdir_file(file,sub_root){
var G__121011 = frontend.handler.plugin.get_ls_dotdir_root();
if((G__121011 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__121011,(function (p1__121010_SHARP_){
return logseq.api.read_rootdir_file(file,sub_root,p1__121010_SHARP_);
}));
}
});
logseq.api.read_assetsdir_file = (function logseq$api$read_assetsdir_file(file,sub_root){
var temp__5804__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5804__auto__)){
var root_dir = temp__5804__auto__;
return logseq.api.read_rootdir_file(file,sub_root,root_dir);
} else {
return null;
}
});
logseq.api.unlink_rootdir_file_BANG_ = (function logseq$api$unlink_rootdir_file_BANG_(file,sub_root,root_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(root_dir,sub_root) : frontend.util.node_path.join.call(null,root_dir,sub_root)),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,file) : frontend.util.node_path.join.call(null,path,file)),(function (user_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_(user_path,path),(function (sub_dir_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(sub_dir_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),237], null)),null);

throw "access file denied";
})()
),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2("",user_path),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),239], null)),null);

throw "file not existed";
})()
),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.unlink_BANG_(repo,user_path,cljs.core.PersistentArrayMap.EMPTY),(function (___$2){
return promesa.protocols._promise(null);
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.unlink_dotdir_file_BANG_ = (function logseq$api$unlink_dotdir_file_BANG_(file,sub_root){
var G__121013 = frontend.handler.plugin.get_ls_dotdir_root();
if((G__121013 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__121013,(function (p1__121012_SHARP_){
return logseq.api.unlink_rootdir_file_BANG_(file,sub_root,p1__121012_SHARP_);
}));
}
});
logseq.api.unlink_assetsdir_file_BANG_ = (function logseq$api$unlink_assetsdir_file_BANG_(file,sub_root){
var temp__5804__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5804__auto__)){
var root_dir = temp__5804__auto__;
return logseq.api.unlink_rootdir_file_BANG_(file,sub_root,root_dir);
} else {
return null;
}
});
logseq.api.write_user_tmp_file = (function logseq$api$write_user_tmp_file(file,content){
return logseq.api.write_dotdir_file(file,content,"tmp");
});
goog.exportSymbol('logseq.api.write_user_tmp_file', logseq.api.write_user_tmp_file);
logseq.api.write_plugin_storage_file = (function logseq$api$write_plugin_storage_file(plugin_id,file,content,assets_QMARK_){
var plugin_id__$1 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
var sub_root = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2("storages",plugin_id__$1) : frontend.util.node_path.join.call(null,"storages",plugin_id__$1));
if(assets_QMARK_ === true){
return logseq.api.write_assetsdir_file(file,content,sub_root);
} else {
return logseq.api.write_dotdir_file(file,content,sub_root);
}
});
goog.exportSymbol('logseq.api.write_plugin_storage_file', logseq.api.write_plugin_storage_file);
logseq.api.read_plugin_storage_file = (function logseq$api$read_plugin_storage_file(plugin_id,file,assets_QMARK_){
var plugin_id__$1 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
var sub_root = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2("storages",plugin_id__$1) : frontend.util.node_path.join.call(null,"storages",plugin_id__$1));
if(assets_QMARK_ === true){
return logseq.api.read_assetsdir_file(file,sub_root);
} else {
return logseq.api.read_dotdir_file(file,sub_root);
}
});
goog.exportSymbol('logseq.api.read_plugin_storage_file', logseq.api.read_plugin_storage_file);
logseq.api.unlink_plugin_storage_file = (function logseq$api$unlink_plugin_storage_file(plugin_id,file,assets_QMARK_){
var plugin_id__$1 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
var sub_root = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2("storages",plugin_id__$1) : frontend.util.node_path.join.call(null,"storages",plugin_id__$1));
if(assets_QMARK_ === true){
return logseq.api.unlink_assetsdir_file_BANG_(file,sub_root);
} else {
return logseq.api.unlink_dotdir_file_BANG_(file,sub_root);
}
});
goog.exportSymbol('logseq.api.unlink_plugin_storage_file', logseq.api.unlink_plugin_storage_file);
logseq.api.exist_plugin_storage_file = (function logseq$api$exist_plugin_storage_file(plugin_id,file,assets_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((assets_QMARK_ === true)?frontend.config.get_current_repo_assets_root():frontend.handler.plugin.get_ls_dotdir_root()),(function (root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id)),(function (plugin_id__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(root,"storages",plugin_id__$1) : frontend.util.node_path.join.call(null,root,"storages",plugin_id__$1)),file),(function (exist_QMARK_){
return promesa.protocols._promise(exist_QMARK_);
}));
}));
}));
}));
});
goog.exportSymbol('logseq.api.exist_plugin_storage_file', logseq.api.exist_plugin_storage_file);
logseq.api.clear_plugin_storage_files = (function logseq$api$clear_plugin_storage_files(plugin_id,assets_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((assets_QMARK_ === true)?frontend.config.get_current_repo_assets_root():frontend.handler.plugin.get_ls_dotdir_root()),(function (root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id)),(function (plugin_id__$1){
return promesa.protocols._promise(frontend.fs.rmdir_BANG_((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(root,"storages",plugin_id__$1) : frontend.util.node_path.join.call(null,root,"storages",plugin_id__$1))));
}));
}));
}));
});
goog.exportSymbol('logseq.api.clear_plugin_storage_files', logseq.api.clear_plugin_storage_files);
logseq.api.list_plugin_storage_files = (function logseq$api$list_plugin_storage_files(plugin_id,assets_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((assets_QMARK_ === true)?frontend.config.get_current_repo_assets_root():frontend.handler.plugin.get_ls_dotdir_root()),(function (root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id)),(function (plugin_id__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(root,"storages",plugin_id__$1) : frontend.util.node_path.join.call(null,root,"storages",plugin_id__$1)),(function (files_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"listdir","listdir",-609252713),files_path], 0)),(function (files){
return promesa.protocols._promise(((cljs.core.js_iterable_QMARK_(files))?cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__121014_SHARP_){
var G__121015 = clojure.string.replace_first(p1__121014_SHARP_,files_path,"");
if((G__121015 == null)){
return null;
} else {
return clojure.string.replace(G__121015,/^\/+/,"");
}
}),files)):null));
}));
}));
}));
}));
}));
});
goog.exportSymbol('logseq.api.list_plugin_storage_files', logseq.api.list_plugin_storage_files);
logseq.api.load_user_preferences = (function logseq$api$load_user_preferences(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"preferences.json") : frontend.util.node_path.join.call(null,path,"preferences.json")),(function (path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3(repo,null,path__$1),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,path__$1),(function (json){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(json))?"{}":json),(function (json__$1){
return promesa.protocols._promise(JSON.parse(json__$1));
}));
}));
}));
}));
}));
}));
}));
});
goog.exportSymbol('logseq.api.load_user_preferences', logseq.api.load_user_preferences);
logseq.api.save_user_preferences = (function logseq$api$save_user_preferences(data){
if(cljs.core.truth_(data)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"preferences.json") : frontend.util.node_path.join.call(null,path,"preferences.json")),(function (path__$1){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,null,path__$1,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)));
}));
}));
}));
}));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.save_user_preferences', logseq.api.save_user_preferences);
logseq.api.load_plugin_user_settings = frontend.handler.plugin.make_fn_to_load_dotdir_json("settings","{}");
goog.exportSymbol('logseq.api.load_plugin_user_settings', logseq.api.load_plugin_user_settings);
logseq.api.save_plugin_user_settings = (function logseq$api$save_plugin_user_settings(key,data){
return frontend.handler.plugin.make_fn_to_save_dotdir_json("settings")(key,JSON.stringify(data,null,(2)));
});
goog.exportSymbol('logseq.api.save_plugin_user_settings', logseq.api.save_plugin_user_settings);
logseq.api.unlink_plugin_user_settings = frontend.handler.plugin.make_fn_to_unlink_dotdir_json("settings");
goog.exportSymbol('logseq.api.unlink_plugin_user_settings', logseq.api.unlink_plugin_user_settings);
logseq.api.register_plugin_slash_command = (function logseq$api$register_plugin_slash_command(pid,cmd_actions){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(cmd_actions);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__121017 = temp__5804__auto__;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121017,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121017,(1),null);
return frontend.handler.plugin.register_plugin_slash_command(pid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__121016_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__121016_SHARP_))], null),cljs.core.rest(p1__121016_SHARP_));
}),actions)], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.register_plugin_slash_command', logseq.api.register_plugin_slash_command);
logseq.api.register_plugin_simple_command = (function logseq$api$register_plugin_simple_command(pid,cmd_action,palette_QMARK_){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(cmd_action);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__121020 = temp__5804__auto__;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121020,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121020,(1),null);
var action__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(action,(0),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(action)));
var cmd__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.replace(clojure.string.replace(clojure.string.trim(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cmd)),":","-"),/^([0-9])/,"_$1"));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cmd__$1);
var keybinding = new cljs.core.Keyword(null,"keybinding","keybinding",1090151579).cljs$core$IFn$_invoke$arity$1(cmd__$1);
var palette_cmd = frontend.handler.plugin.simple_cmd__GT_palette_cmd(pid,cmd__$1,action__$1);
var action_SINGLEQUOTE_ = (function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd__$1,new cljs.core.Keyword(null,"action","action",-811238024),action__$1], null)], null));
});
frontend.handler.plugin.register_plugin_simple_command(pid,cmd__$1,action__$1);

if(cljs.core.truth_(palette_QMARK_)){
frontend.handler.command_palette.register(palette_cmd);
} else {
}

var temp__5804__auto____$1 = (function (){var and__5041__auto__ = keybinding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.plugin.simple_cmd_keybinding__GT_shortcut_args(pid,key,keybinding);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var shortcut_args = temp__5804__auto____$1;
var dispatch_cmd = (function (_e){
if(cljs.core.truth_(palette_QMARK_)){
return frontend.handler.command_palette.invoke_command(palette_cmd);
} else {
return action_SINGLEQUOTE_();
}
});
var vec__121023 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(shortcut_args,(2),cljs.core.merge,cmd__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),dispatch_cmd,new cljs.core.Keyword(null,"cmd","cmd",-302931143),palette_cmd], null));
var mode_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121023,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121023,(1),null);
var shortcut_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121023,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode_id,new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449))){
return frontend.modules.shortcut.config.add_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(mode_id,id,shortcut_map);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode_id,id,shortcut_map], null)], 0));

return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(mode_id,id,shortcut_map);

}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.register_plugin_simple_command', logseq.api.register_plugin_simple_command);
logseq.api.unregister_plugin_simple_command = (function logseq$api$unregister_plugin_simple_command(pid){
frontend.handler.plugin.unregister_plugin_simple_command(pid);

var cmds_matched = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__121026_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__121026_SHARP_)),["plugin.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid)].join(''));
}),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config._STAR_shortcut_cmds)));
if(cljs.core.seq(cmds_matched)){
var seq__121027 = cljs.core.seq(cmds_matched);
var chunk__121028 = null;
var count__121029 = (0);
var i__121030 = (0);
while(true){
if((i__121030 < count__121029)){
var cmd = chunk__121028.cljs$core$IIndexed$_nth$arity$2(null,i__121030);
frontend.handler.command_palette.unregister(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));

if(cljs.core.seq(new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(cmd))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shortcut","unregister-shortcut","shortcut/unregister-shortcut",-1191227358),cmd], 0));

frontend.modules.shortcut.core.unregister_shortcut_BANG_(new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));
} else {
}


var G__121096 = seq__121027;
var G__121097 = chunk__121028;
var G__121098 = count__121029;
var G__121099 = (i__121030 + (1));
seq__121027 = G__121096;
chunk__121028 = G__121097;
count__121029 = G__121098;
i__121030 = G__121099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__121027);
if(temp__5804__auto__){
var seq__121027__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__121027__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__121027__$1);
var G__121100 = cljs.core.chunk_rest(seq__121027__$1);
var G__121101 = c__5565__auto__;
var G__121102 = cljs.core.count(c__5565__auto__);
var G__121103 = (0);
seq__121027 = G__121100;
chunk__121028 = G__121101;
count__121029 = G__121102;
i__121030 = G__121103;
continue;
} else {
var cmd = cljs.core.first(seq__121027__$1);
frontend.handler.command_palette.unregister(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));

if(cljs.core.seq(new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(cmd))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shortcut","unregister-shortcut","shortcut/unregister-shortcut",-1191227358),cmd], 0));

frontend.modules.shortcut.core.unregister_shortcut_BANG_(new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));
} else {
}


var G__121104 = cljs.core.next(seq__121027__$1);
var G__121105 = null;
var G__121106 = (0);
var G__121107 = (0);
seq__121027 = G__121104;
chunk__121028 = G__121105;
count__121029 = G__121106;
i__121030 = G__121107;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.unregister_plugin_simple_command', logseq.api.unregister_plugin_simple_command);
logseq.api.register_search_service = (function logseq$api$register_search_service(pid,name,opts){
return frontend.handler.plugin.register_plugin_search_service(pid,name,cljs_bean.core.__GT_clj(opts));
});
goog.exportSymbol('logseq.api.register_search_service', logseq.api.register_search_service);
logseq.api.unregister_search_services = (function logseq$api$unregister_search_services(pid){
return frontend.handler.plugin.unregister_plugin_search_services(pid);
});
goog.exportSymbol('logseq.api.unregister_search_services', logseq.api.unregister_search_services);
logseq.api.register_plugin_ui_item = (function logseq$api$register_plugin_ui_item(pid,type,opts){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var opts__$1 = temp__5804__auto__;
return frontend.handler.plugin.register_plugin_ui_item(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"type","type",1174270348),type));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.register_plugin_ui_item', logseq.api.register_plugin_ui_item);
logseq.api.relaunch = (function logseq$api$relaunch(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relaunchApp"], 0));
});
goog.exportSymbol('logseq.api.relaunch', logseq.api.relaunch);
logseq.api.quit = (function logseq$api$quit(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["quitApp"], 0));
});
goog.exportSymbol('logseq.api.quit', logseq.api.quit);
logseq.api.open_external_link = (function logseq$api$open_external_link(url){
if(cljs.core.truth_(cljs.core.re_find(/https?:\/\//,url))){
return apis.openExternal(url);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.open_external_link', logseq.api.open_external_link);
/**
 * @param {...*} var_args
 */
logseq.api.invoke_external_command = (function() { 
var logseq$api$invoke_external_command__delegate = function (type,args){
var temp__5804__auto__ = (function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(type,"logseq.");
if(and__5041__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(clojure.string.replace(type,/^logseq./,"")));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.command_palette.get_commands_unique(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"action","action",-811238024)], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var action = temp__5804__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(frontend.handler.plugin.hook_lifecycle_fn_BANG_,id,action,args);
} else {
return null;
}
} else {
return null;
}
};
var logseq$api$invoke_external_command = function (type,var_args){
var args = null;
if (arguments.length > 1) {
var G__121108__i = 0, G__121108__a = new Array(arguments.length -  1);
while (G__121108__i < G__121108__a.length) {G__121108__a[G__121108__i] = arguments[G__121108__i + 1]; ++G__121108__i;}
  args = new cljs.core.IndexedSeq(G__121108__a,0,null);
} 
return logseq$api$invoke_external_command__delegate.call(this,type,args);};
logseq$api$invoke_external_command.cljs$lang$maxFixedArity = 1;
logseq$api$invoke_external_command.cljs$lang$applyTo = (function (arglist__121109){
var type = cljs.core.first(arglist__121109);
var args = cljs.core.rest(arglist__121109);
return logseq$api$invoke_external_command__delegate(type,args);
});
logseq$api$invoke_external_command.cljs$core$IFn$_invoke$arity$variadic = logseq$api$invoke_external_command__delegate;
return logseq$api$invoke_external_command;
})()
;
goog.exportSymbol('logseq.api.invoke_external_command', logseq.api.invoke_external_command);
logseq.api.set_left_sidebar_visible = (function logseq$api$set_left_sidebar_visible(flag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,"toggle")){
frontend.state.toggle_left_sidebar_BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),cljs.core.boolean$(flag));
}

return null;
});
goog.exportSymbol('logseq.api.set_left_sidebar_visible', logseq.api.set_left_sidebar_visible);
logseq.api.set_right_sidebar_visible = (function logseq$api$set_right_sidebar_visible(flag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,"toggle")){
frontend.state.toggle_sidebar_open_QMARK__BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),cljs.core.boolean$(flag));
}

return null;
});
goog.exportSymbol('logseq.api.set_right_sidebar_visible', logseq.api.set_right_sidebar_visible);
logseq.api.clear_right_sidebar_blocks = (function logseq$api$clear_right_sidebar_blocks(opts){
frontend.state.clear_sidebar_blocks_BANG_();

var temp__5804__auto___121110 = (function (){var and__5041__auto__ = opts;
if(cljs.core.truth_(and__5041__auto__)){
return cljs_bean.core.__GT_clj(opts);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___121110)){
var opts_121111__$1 = temp__5804__auto___121110;
var and__5041__auto___121112 = new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(opts_121111__$1);
if(cljs.core.truth_(and__5041__auto___121112)){
frontend.state.hide_right_sidebar_BANG_();
} else {
}
} else {
}

return null;
});
goog.exportSymbol('logseq.api.clear_right_sidebar_blocks', logseq.api.clear_right_sidebar_blocks);
logseq.api.push_state = (function logseq$api$push_state(k,params,query){
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword(null,"page","page",849072397));
var params__$1 = cljs_bean.core.__GT_clj(params);
var query__$1 = cljs_bean.core.__GT_clj(query);
var temp__5802__auto__ = (function (){var and__5041__auto__ = page_QMARK_;
if(and__5041__auto__){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var page_name = temp__5802__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.Keyword(null,"push","push",799791267),true], null));
} else {
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k__$1,params__$1,query__$1);
}
});
goog.exportSymbol('logseq.api.push_state', logseq.api.push_state);
logseq.api.replace_state = (function logseq$api$replace_state(k,params,query){
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword(null,"page","page",849072397));
var params__$1 = cljs_bean.core.__GT_clj(params);
var query__$1 = cljs_bean.core.__GT_clj(query);
var temp__5802__auto__ = (function (){var and__5041__auto__ = page_QMARK_;
if(and__5041__auto__){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var page_name = temp__5802__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.Keyword(null,"push","push",799791267),false], null));
} else {
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3(k__$1,params__$1,query__$1);
}
});
goog.exportSymbol('logseq.api.replace_state', logseq.api.replace_state);
logseq.api.get_external_plugin = (function logseq$api$get_external_plugin(pid){
var temp__5804__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var pl = temp__5804__auto__;
return pl.toJSON();
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_external_plugin', logseq.api.get_external_plugin);
logseq.api.invoke_external_plugin_cmd = (function logseq$api$invoke_external_plugin_cmd(pid,cmd_group,cmd_key,cmd_args){
var G__121031 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd_group);
var G__121031__$1 = (((G__121031 instanceof cljs.core.Keyword))?G__121031.fqn:null);
switch (G__121031__$1) {
case "models":
return frontend.handler.plugin.call_plugin_user_model_BANG_(pid,cmd_key,cmd_args);

break;
case "commands":
return frontend.handler.plugin.call_plugin_user_command_BANG_(pid,cmd_key,cmd_args);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__121031__$1)].join('')));

}
});
goog.exportSymbol('logseq.api.invoke_external_plugin_cmd', logseq.api.invoke_external_plugin_cmd);
logseq.api.check_editing = (function logseq$api$check_editing(){
if(cljs.core.truth_(frontend.state.get_edit_input_id())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
} else {
return false;
}
});
goog.exportSymbol('logseq.api.check_editing', logseq.api.check_editing);
logseq.api.exit_editing_mode = (function logseq$api$exit_editing_mode(select_QMARK_){
frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(select_QMARK_);

return null;
});
goog.exportSymbol('logseq.api.exit_editing_mode', logseq.api.exit_editing_mode);
logseq.api.insert_at_editing_cursor = (function logseq$api$insert_at_editing_cursor(content){
var temp__5804__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto__)){
var input_id = temp__5804__auto__;
frontend.commands.simple_insert_BANG_(input_id,content,cljs.core.PersistentArrayMap.EMPTY);

var temp__5804__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var input = temp__5804__auto____$1;
return input.focus();
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.insert_at_editing_cursor', logseq.api.insert_at_editing_cursor);
logseq.api.restore_editing_cursor = (function logseq$api$restore_editing_cursor(){
var temp__5804__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto__)){
var input_id = temp__5804__auto__;
var temp__5804__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var input = temp__5804__auto____$1;
if(cljs.core.truth_((frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.util.el_visible_in_viewport_QMARK_.cljs$core$IFn$_invoke$arity$1(input) : frontend.util.el_visible_in_viewport_QMARK_.call(null,input)))){
return input.focus();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.restore_editing_cursor', logseq.api.restore_editing_cursor);
logseq.api.get_editing_cursor_position = (function logseq$api$get_editing_cursor_position(){
var temp__5804__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto__)){
var input_id = temp__5804__auto__;
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(goog.dom.getElement(input_id))));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_editing_cursor_position', logseq.api.get_editing_cursor_position);
logseq.api.get_editing_block_content = (function logseq$api$get_editing_block_content(){
return frontend.state.get_edit_content();
});
goog.exportSymbol('logseq.api.get_editing_block_content', logseq.api.get_editing_block_content);
logseq.api.get_selected_blocks = (function logseq$api$get_selected_blocks(){
var temp__5804__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(temp__5804__auto__)){
var blocks = temp__5804__auto__;
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
var G__121032 = el.getAttribute("blockid");
if((G__121032 == null)){
return null;
} else {
return frontend.db.model.query_block_by_uuid(G__121032);
}
}),blocks);
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(blocks__$1));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_selected_blocks', logseq.api.get_selected_blocks);
logseq.api.get_current_page = (function logseq$api$get_current_page(){
var temp__5804__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.model.get_page(page);
if(cljs.core.truth_(temp__5804__auto____$1)){
var page__$1 = temp__5804__auto____$1;
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_page', logseq.api.get_current_page);
logseq.api.get_page = (function logseq$api$get_page(id_or_page_name){
var temp__5804__auto__ = ((typeof id_or_page_name === 'number')?frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(id_or_page_name):((typeof id_or_page_name === 'string')?frontend.db.model.get_page(id_or_page_name):null));
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
if(cljs.core.contains_QMARK_(page,new cljs.core.Keyword("block","left","block/left",-443712566))){
return null;
} else {
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page))));
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_page', logseq.api.get_page);
logseq.api.get_all_pages = (function logseq$api$get_all_pages(repo){
var pages = frontend.handler.page.get_all_pages(repo);
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(pages));
});
goog.exportSymbol('logseq.api.get_all_pages', logseq.api.get_all_pages);
logseq.api.create_page = (function logseq$api$create_page(name,properties,opts){
var G__121033 = (function (){var temp__5802__auto__ = frontend.db.model.get_page(name);
if(cljs.core.truth_(temp__5802__auto__)){
var page = temp__5802__auto__;
return page;
} else {
var properties__$1 = cljs_bean.core.__GT_clj(properties);
var map__121034 = cljs_bean.core.__GT_clj(opts);
var map__121034__$1 = cljs.core.__destructure_map(map__121034);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121034__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286));
var createFirstBlock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121034__$1,new cljs.core.Keyword(null,"createFirstBlock","createFirstBlock",-362653431));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121034__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var journal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121034__$1,new cljs.core.Keyword(null,"journal","journal",1585898830));
var name__$1 = frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),((cljs.core.boolean_QMARK_(redirect))?redirect:true),new cljs.core.Keyword(null,"journal?","journal?",-897756522),journal,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),((cljs.core.boolean_QMARK_(createFirstBlock))?createFirstBlock:true),new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1], null));
return frontend.db.model.get_page(name__$1);
}
})();
var G__121033__$1 = (((G__121033 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__121033));
var G__121033__$2 = (((G__121033__$1 == null))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(G__121033__$1));
var G__121033__$3 = (((G__121033__$2 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__121033__$2));
if((G__121033__$3 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__121033__$3);
}
});
goog.exportSymbol('logseq.api.create_page', logseq.api.create_page);
logseq.api.delete_page = (function logseq$api$delete_page(name){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (ok){
return frontend.handler.page.delete_BANG_(name,ok);
}));
});
goog.exportSymbol('logseq.api.delete_page', logseq.api.delete_page);
logseq.api.rename_page = frontend.handler.page.rename_BANG_;
goog.exportSymbol('logseq.api.rename_page', logseq.api.rename_page);
logseq.api.open_in_right_sidebar = (function logseq$api$open_in_right_sidebar(block_id_or_uuid){
return frontend.handler.editor.open_block_in_sidebar_BANG_(((typeof block_id_or_uuid === 'number')?block_id_or_uuid:logseq.sdk.utils.uuid_or_throw_error(block_id_or_uuid)));
});
goog.exportSymbol('logseq.api.open_in_right_sidebar', logseq.api.open_in_right_sidebar);
logseq.api.new_block_uuid = (function logseq$api$new_block_uuid(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.db.new_block_id());
});
goog.exportSymbol('logseq.api.new_block_uuid', logseq.api.new_block_uuid);
logseq.api.select_block = (function logseq$api$select_block(block_uuid){
var temp__5804__auto__ = frontend.db.model.get_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
frontend.handler.editor.select_block_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.select_block', logseq.api.select_block);
logseq.api.edit_block = (function logseq$api$edit_block(block_uuid,opts){
var temp__5804__auto__ = (function (){var and__5041__auto__ = block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return logseq.sdk.utils.uuid_or_throw_error(block_uuid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block_uuid__$1 = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.model.query_block_by_uuid(block_uuid__$1);
if(cljs.core.truth_(temp__5804__auto____$1)){
var block = temp__5804__auto____$1;
var map__121035 = cljs_bean.core.__GT_clj(opts);
var map__121035__$1 = cljs.core.__destructure_map(map__121035);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__121035__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"max","max",61366548));
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,pos,block_uuid__$1) : frontend.handler.editor.edit_block_BANG_.call(null,block,pos,block_uuid__$1));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.edit_block', logseq.api.edit_block);
logseq.api.insert_block = (function logseq$api$insert_block(block_uuid_or_page_name,content,opts){
if(clojure.string.blank_QMARK_(block_uuid_or_page_name)){
throw (new Error("Page title or block UUID shouldn't be empty."));
} else {
}

var map__121036 = cljs_bean.core.__GT_clj(opts);
var map__121036__$1 = cljs.core.__destructure_map(map__121036);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121036__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121036__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121036__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var customUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121036__$1,new cljs.core.Keyword(null,"customUUID","customUUID",-1924598770));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121036__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var autoOrderedList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121036__$1,new cljs.core.Keyword(null,"autoOrderedList","autoOrderedList",154272789));
var vec__121037 = ((frontend.util.uuid_string_QMARK_(block_uuid_or_page_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.uuid(block_uuid_or_page_name)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid_or_page_name,null], null));
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121037,(0),null);
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121037,(1),null);
var page_name__$1 = (cljs.core.truth_(page_name)?(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)):null);
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = page_name__$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var G__121043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__121043) : frontend.db.entity.call(null,G__121043));
})());
} else {
return and__5041__auto__;
}
})())?frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(block_uuid_or_page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),false], null)):null);
var custom_uuid = (function (){var or__5043__auto__ = customUUID;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(properties);
}
})();
var custom_uuid__$1 = (cljs.core.truth_(custom_uuid)?logseq.sdk.utils.uuid_or_throw_error(custom_uuid):null);
var edit_block_QMARK_ = (((focus == null))?true:focus);
var ___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = custom_uuid__$1;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.query_block_by_uuid(custom_uuid__$1);
} else {
return and__5041__auto__;
}
})())?(function(){throw (new Error(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Custom block UUID already exists (%s).",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_uuid__$1], 0))))})():null);
var block_uuid_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(sibling);
if(and__5041__auto__){
var and__5041__auto____$1 = before;
if(cljs.core.truth_(and__5041__auto____$1)){
return block_uuid;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?(function (){var block = (function (){var G__121044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__121044) : frontend.db.entity.call(null,G__121044));
})();
var first_child = frontend.db.model.get_by_parent__AMPERSAND__left((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(first_child)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
} else {
return block_uuid;
}
})():block_uuid);
var insert_at_first_child_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid_SINGLEQUOTE_,block_uuid);
var vec__121040 = ((insert_at_first_child_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sibling,before], null));
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121040,(0),null);
var before_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121040,(1),null);
var before_QMARK___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = sibling_QMARK_ === false;
if(and__5041__auto__){
var and__5041__auto____$1 = before_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return (!(insert_at_first_child_QMARK_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?false:before_QMARK_);
var new_block = frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid_SINGLEQUOTE_,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"before?","before?",765621039),before_QMARK___$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),edit_block_QMARK_,new cljs.core.Keyword(null,"page","page",849072397),page_name__$1,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430),custom_uuid__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),((cljs.core.boolean_QMARK_(autoOrderedList))?autoOrderedList:false),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties,(cljs.core.truth_(custom_uuid__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),custom_uuid__$1], null):null)], 0))], null));
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(new_block));
});
goog.exportSymbol('logseq.api.insert_block', logseq.api.insert_block);
logseq.api.insert_batch_block = (function logseq$api$insert_batch_block(block_uuid,batch_blocks,opts){
var temp__5804__auto__ = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var temp__5804__auto____$1 = cljs_bean.core.__GT_clj(batch_blocks);
if(cljs.core.truth_(temp__5804__auto____$1)){
var bb = temp__5804__auto____$1;
var bb__$1 = (((!(cljs.core.vector_QMARK_(bb))))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[bb],null)):bb);
var map__121045 = cljs_bean.core.__GT_clj(opts);
var map__121045__$1 = cljs.core.__destructure_map(map__121045);
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121045__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var keepUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121045__$1,new cljs.core.Keyword(null,"keepUUID","keepUUID",-1526059320));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121045__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var keep_uuid_QMARK_ = (function (){var or__5043__auto__ = keepUUID;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})();
var _ = (cljs.core.truth_(keep_uuid_QMARK_)?(function (){var seq__121046 = cljs.core.seq(frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2(bb__$1,new cljs.core.Keyword(null,"children","children",-940561982)));
var chunk__121047 = null;
var count__121048 = (0);
var i__121049 = (0);
while(true){
if((i__121049 < count__121048)){
var block__$1 = chunk__121047.cljs$core$IIndexed$_nth$arity$2(null,i__121049);
var uuid_121114 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(block__$1));
if(cljs.core.truth_((function (){var and__5041__auto__ = uuid_121114;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(uuid_121114));
} else {
return and__5041__auto__;
}
})())){
throw (new Error(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Custom block UUID already exists (%s).",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid_121114], 0))));
} else {
}


var G__121115 = seq__121046;
var G__121116 = chunk__121047;
var G__121117 = count__121048;
var G__121118 = (i__121049 + (1));
seq__121046 = G__121115;
chunk__121047 = G__121116;
count__121048 = G__121117;
i__121049 = G__121118;
continue;
} else {
var temp__5804__auto____$2 = cljs.core.seq(seq__121046);
if(temp__5804__auto____$2){
var seq__121046__$1 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(seq__121046__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__121046__$1);
var G__121119 = cljs.core.chunk_rest(seq__121046__$1);
var G__121120 = c__5565__auto__;
var G__121121 = cljs.core.count(c__5565__auto__);
var G__121122 = (0);
seq__121046 = G__121119;
chunk__121047 = G__121120;
count__121048 = G__121121;
i__121049 = G__121122;
continue;
} else {
var block__$1 = cljs.core.first(seq__121046__$1);
var uuid_121123 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(block__$1));
if(cljs.core.truth_((function (){var and__5041__auto__ = uuid_121123;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(uuid_121123));
} else {
return and__5041__auto__;
}
})())){
throw (new Error(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Custom block UUID already exists (%s).",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid_121123], 0))));
} else {
}


var G__121124 = cljs.core.next(seq__121046__$1);
var G__121125 = null;
var G__121126 = (0);
var G__121127 = (0);
seq__121046 = G__121124;
chunk__121047 = G__121125;
count__121048 = G__121126;
i__121049 = G__121127;
continue;
}
} else {
return null;
}
}
break;
}
})():null);
var block__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = before;
if(cljs.core.truth_(and__5041__auto__)){
return sibling;
} else {
return and__5041__auto__;
}
})())?(function (){var G__121050 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__121050) : frontend.db.pull.call(null,G__121050));
})():block);
var ___$1 = frontend.handler.editor.insert_block_tree_after_target(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),sibling,bb__$1,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block__$1),keep_uuid_QMARK_);
return null;
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.insert_batch_block', logseq.api.insert_batch_block);
logseq.api.remove_block = (function logseq$api$remove_block(block_uuid,_opts){
var includeChildren = true;
var repo = frontend.state.get_current_repo();
frontend.handler.editor.delete_block_aux_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.sdk.utils.uuid_or_throw_error(block_uuid),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null),includeChildren);

return null;
});
goog.exportSymbol('logseq.api.remove_block', logseq.api.remove_block);
logseq.api.update_block = (function logseq$api$update_block(block_uuid,content,opts){
var repo = frontend.state.get_current_repo();
var edit_input = frontend.state.get_edit_input_id();
var editing_QMARK_ = (function (){var and__5041__auto__ = edit_input;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(edit_input,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(editing_QMARK_)){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input,content);
} else {
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(repo,logseq.sdk.utils.uuid_or_throw_error(block_uuid),content,cljs_bean.core.__GT_clj(opts));
}

return null;
});
goog.exportSymbol('logseq.api.update_block', logseq.api.update_block);
logseq.api.move_block = (function logseq$api$move_block(src_block_uuid,target_block_uuid,opts){
var map__121051 = cljs_bean.core.__GT_clj(opts);
var map__121051__$1 = cljs.core.__destructure_map(map__121051);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121051__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var move_to = ((cljs.core.boolean$(before))?new cljs.core.Keyword(null,"top","top",-1856271961):((cljs.core.boolean$(children))?new cljs.core.Keyword(null,"nested","nested",18943849):null
));
var src_block = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(src_block_uuid));
var target_block = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(target_block_uuid));
frontend.handler.dnd.move_blocks(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_block], null),target_block,move_to);

return null;
});
goog.exportSymbol('logseq.api.move_block', logseq.api.move_block);
logseq.api.get_block = logseq.api.block.get_block;
goog.exportSymbol('logseq.api.get_block', logseq.api.get_block);
logseq.api.get_current_block = (function logseq$api$get_current_block(opts){
var block = frontend.state.get_edit_block();
var block__$1 = (function (){var or__5043__auto__ = block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__121052 = (function (){var or__5043__auto____$1 = cljs.core.first(frontend.state.get_selection_blocks());
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return goog.dom.getElement(frontend.state.get_editing_block_dom_id());
}
})();
var G__121052__$1 = (((G__121052 == null))?null:G__121052.getAttribute("blockid"));
if((G__121052__$1 == null)){
return null;
} else {
return frontend.db.model.get_block_by_uuid(G__121052__$1);
}
}
})();
var G__121053 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__121054 = opts;
return (logseq.api.get_block.cljs$core$IFn$_invoke$arity$2 ? logseq.api.get_block.cljs$core$IFn$_invoke$arity$2(G__121053,G__121054) : logseq.api.get_block.call(null,G__121053,G__121054));
});
goog.exportSymbol('logseq.api.get_current_block', logseq.api.get_current_block);
logseq.api.get_previous_sibling_block = (function logseq$api$get_previous_sibling_block(block_uuid){
var temp__5804__auto__ = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var map__121055 = block;
var map__121055__$1 = cljs.core.__destructure_map(map__121055);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121055__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121055__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var block__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,left))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left)));
var and__5041__auto__ = block__$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(block__$1));
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_previous_sibling_block', logseq.api.get_previous_sibling_block);
logseq.api.get_next_sibling_block = (function logseq$api$get_next_sibling_block(block_uuid){
var temp__5804__auto__ = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5804__auto____$1)){
var right_sibling = temp__5804__auto____$1;
var block__$1 = (function (){var G__121056 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right_sibling);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__121056) : frontend.db.pull.call(null,G__121056));
})();
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(block__$1));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_next_sibling_block', logseq.api.get_next_sibling_block);
logseq.api.set_block_collapsed = (function logseq$api$set_block_collapsed(block_uuid,opts){
var block_uuid__$1 = logseq.sdk.utils.uuid_or_throw_error(block_uuid);
var temp__5804__auto__ = frontend.db.model.get_block_by_uuid(block_uuid__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var opts__$1 = cljs_bean.core.__GT_clj(opts);
var opts__$2 = ((((typeof opts__$1 === 'string') || (cljs.core.boolean_QMARK_(opts__$1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flag","flag",1088647881),opts__$1], null):opts__$1);
var map__121057 = opts__$2;
var map__121057__$1 = cljs.core.__destructure_map(map__121057);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121057__$1,new cljs.core.Keyword(null,"flag","flag",1088647881));
var flag__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("toggle",flag))?cljs.core.not(frontend.util.collapsed_QMARK_(block)):cljs.core.boolean$(flag));
if(flag__$1){
frontend.handler.editor.collapse_block_BANG_(block_uuid__$1);
} else {
frontend.handler.editor.expand_block_BANG_(block_uuid__$1);
}

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_block_collapsed', logseq.api.set_block_collapsed);
logseq.api.upsert_block_property = (function logseq$api$upsert_block_property(block_uuid,key,value){
return frontend.handler.editor.property.set_block_property_BANG_(logseq.sdk.utils.uuid_or_throw_error(block_uuid),key,value);
});
goog.exportSymbol('logseq.api.upsert_block_property', logseq.api.upsert_block_property);
logseq.api.remove_block_property = (function logseq$api$remove_block_property(block_uuid,key){
return frontend.handler.editor.property.remove_block_property_BANG_(logseq.sdk.utils.uuid_or_throw_error(block_uuid),key);
});
goog.exportSymbol('logseq.api.remove_block_property', logseq.api.remove_block_property);
logseq.api.get_block_property = (function logseq$api$get_block_property(block_uuid,key){
var temp__5804__auto__ = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_block_property', logseq.api.get_block_property);
logseq.api.get_block_properties = (function logseq$api$get_block_properties(block_uuid){
var temp__5804__auto__ = frontend.db.model.query_block_by_uuid(logseq.sdk.utils.uuid_or_throw_error(block_uuid));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_block_properties', logseq.api.get_block_properties);
logseq.api.get_current_page_blocks_tree = (function logseq$api$get_current_page_blocks_tree(){
var temp__5804__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page);
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,page);
var blocks__$2 = logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(blocks__$1);
return cljs_bean.core.__GT_js(blocks__$2);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_page_blocks_tree', logseq.api.get_current_page_blocks_tree);
logseq.api.get_page_blocks_tree = (function logseq$api$get_page_blocks_tree(id_or_page_name){
var temp__5804__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_page(id_or_page_name));
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name);
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,page_name);
var blocks__$2 = logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(blocks__$1);
return cljs_bean.core.__GT_js(blocks__$2);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_page_blocks_tree', logseq.api.get_page_blocks_tree);
logseq.api.get_page_linked_references = (function logseq$api$get_page_linked_references(page_name_or_uuid){
var temp__5804__auto__ = (function (){var and__5041__auto__ = page_name_or_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_page(page_name_or_uuid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
var ref_blocks = (cljs.core.truth_(page_name)?frontend.db.model.get_page_referenced_blocks_full.cljs$core$IFn$_invoke$arity$1(page_name):frontend.db.model.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)));
var ref_blocks__$1 = (function (){var and__5041__auto__ = cljs.core.seq(ref_blocks);
if(and__5041__auto__){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,ref_blocks);
} else {
return and__5041__auto__;
}
})();
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(ref_blocks__$1));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_page_linked_references', logseq.api.get_page_linked_references);
logseq.api.get_pages_from_namespace = (function logseq$api$get_pages_from_namespace(ns){
var temp__5804__auto__ = (function (){var and__5041__auto__ = ns;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.get_current_repo();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.model.get_namespace_pages(repo,ns);
if(cljs.core.truth_(temp__5804__auto____$1)){
var pages = temp__5804__auto____$1;
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(pages));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_pages_from_namespace', logseq.api.get_pages_from_namespace);
logseq.api.get_pages_tree_from_namespace = (function logseq$api$get_pages_tree_from_namespace(ns){
var temp__5804__auto__ = (function (){var and__5041__auto__ = ns;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.get_current_repo();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.model.get_namespace_hierarchy(repo,ns);
if(cljs.core.truth_(temp__5804__auto____$1)){
var pages = temp__5804__auto____$1;
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(pages));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_pages_tree_from_namespace', logseq.api.get_pages_tree_from_namespace);
logseq.api.first_child_of_block = (function logseq$api$first_child_of_block(block){
var temp__5804__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var children = temp__5804__auto__;
return cljs.core.first(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block));
} else {
return null;
}
});
logseq.api.second_child_of_block = (function logseq$api$second_child_of_block(block){
var temp__5804__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var children = temp__5804__auto__;
return cljs.core.second(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block));
} else {
return null;
}
});
logseq.api.last_child_of_block = (function logseq$api$last_child_of_block(block){
var temp__5804__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var children = temp__5804__auto__;
return cljs.core.last(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block));
} else {
return null;
}
});
logseq.api.prepend_block_in_page = (function logseq$api$prepend_block_in_page(uuid_or_page_name,content,opts){
var page_QMARK_ = (!(frontend.util.uuid_string_QMARK_(uuid_or_page_name)));
var page_not_exist_QMARK_ = ((page_QMARK_) && ((frontend.db.model.get_page(uuid_or_page_name) == null)));
var _ = (function (){var and__5041__auto__ = page_not_exist_QMARK_;
if(and__5041__auto__){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(uuid_or_page_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true,new cljs.core.Keyword(null,"format","format",-1306924766),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()], null));
} else {
return and__5041__auto__;
}
})();
var temp__5804__auto__ = frontend.db.model.get_page(uuid_or_page_name);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var block_SINGLEQUOTE_ = ((page_QMARK_)?logseq.api.second_child_of_block(block):logseq.api.first_child_of_block(block));
var sibling_QMARK_ = ((page_QMARK_) && ((!((block_SINGLEQUOTE_ == null)))));
var opts__$1 = cljs_bean.core.__GT_clj(opts);
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling_QMARK_,new cljs.core.Keyword(null,"before","before",-1633692388),sibling_QMARK_], null)], 0));
var src = ((sibling_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_)):uuid_or_page_name);
return logseq.api.insert_block(src,content,cljs_bean.core.__GT_js(opts__$2));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.prepend_block_in_page', logseq.api.prepend_block_in_page);
logseq.api.append_block_in_page = (function logseq$api$append_block_in_page(uuid_or_page_name,content,opts){
var page_QMARK_ = (!(frontend.util.uuid_string_QMARK_(uuid_or_page_name)));
var page_not_exist_QMARK_ = ((page_QMARK_) && ((frontend.db.model.get_page(uuid_or_page_name) == null)));
var _ = (function (){var and__5041__auto__ = page_not_exist_QMARK_;
if(and__5041__auto__){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(uuid_or_page_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true,new cljs.core.Keyword(null,"format","format",-1306924766),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()], null));
} else {
return and__5041__auto__;
}
})();
var temp__5804__auto__ = frontend.db.model.get_page(uuid_or_page_name);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var block_SINGLEQUOTE_ = logseq.api.last_child_of_block(block);
var sibling_QMARK_ = (!((block_SINGLEQUOTE_ == null)));
var opts__$1 = cljs_bean.core.__GT_clj(opts);
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling_QMARK_], null),((sibling_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),false], null):null)], 0));
var src = ((sibling_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_)):uuid_or_page_name);
return logseq.api.insert_block(src,content,cljs_bean.core.__GT_js(opts__$2));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.append_block_in_page', logseq.api.append_block_in_page);
logseq.api.validate_external_plugins = (function logseq$api$validate_external_plugins(urls){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validateUserExternalPlugins","validateUserExternalPlugins",-316610937),urls], 0));
});
goog.exportSymbol('logseq.api.validate_external_plugins', logseq.api.validate_external_plugins);
logseq.api.__install_plugin = (function logseq$api$__install_plugin(manifest){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(manifest);
if(cljs.core.truth_(temp__5804__auto__)){
var map__121058 = temp__5804__auto__;
var map__121058__$1 = cljs.core.__destructure_map(map__121058);
var mft = map__121058__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121058__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121058__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return id;
} else {
return and__5041__auto__;
}
})())){
throw (new Error("[required] :repo :id"));
} else {
return frontend.handler.common.plugin.install_marketplace_plugin(mft);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.__install_plugin', logseq.api.__install_plugin);
logseq.api.q = (function logseq$api$q(query_string){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.db.query_dsl.query.cljs$core$IFn$_invoke$arity$3(repo,query_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-reactive?","disable-reactive?",-1162731342),true], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var result = temp__5804__auto____$1;
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.deref(result))));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.q', logseq.api.q);
logseq.api.datascript_query = (function logseq$api$datascript_query(var_args){
var args__5772__auto__ = [];
var len__5766__auto___121128 = arguments.length;
var i__5767__auto___121129 = (0);
while(true){
if((i__5767__auto___121129 < len__5766__auto___121128)){
args__5772__auto__.push((arguments[i__5767__auto___121129]));

var G__121130 = (i__5767__auto___121129 + (1));
i__5767__auto___121129 = G__121130;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.api.datascript_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});
goog.exportSymbol('logseq.api.datascript_query', logseq.api.datascript_query);

(logseq.api.datascript_query.cljs$core$IFn$_invoke$arity$variadic = (function (query,inputs){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5804__auto____$1)){
var db = temp__5804__auto____$1;
var query__$1 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query);
var resolved_inputs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__121059_SHARP_){
if(typeof p1__121059_SHARP_ === 'string'){
var G__121062 = p1__121059_SHARP_;
var G__121062__$1 = (((G__121062 == null))?null:cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__121062));
if((G__121062__$1 == null)){
return null;
} else {
return frontend.db.query_react.resolve_input.cljs$core$IFn$_invoke$arity$2(db,G__121062__$1);
}
} else {
if(cljs.core.fn_QMARK_(p1__121059_SHARP_)){
return (function() { 
var G__121131__delegate = function (args){
return p1__121059_SHARP_.apply(null,cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs_bean.core.__GT_js,args)));
};
var G__121131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__121132__i = 0, G__121132__a = new Array(arguments.length -  0);
while (G__121132__i < G__121132__a.length) {G__121132__a[G__121132__i] = arguments[G__121132__i + 0]; ++G__121132__i;}
  args = new cljs.core.IndexedSeq(G__121132__a,0,null);
} 
return G__121131__delegate.call(this,args);};
G__121131.cljs$lang$maxFixedArity = 0;
G__121131.cljs$lang$applyTo = (function (arglist__121133){
var args = cljs.core.seq(arglist__121133);
return G__121131__delegate(args);
});
G__121131.cljs$core$IFn$_invoke$arity$variadic = G__121131__delegate;
return G__121131;
})()
;
} else {
return p1__121059_SHARP_;

}
}
}),inputs);
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query__$1,db,resolved_inputs);
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$2(result,false));
} else {
return null;
}
} else {
return null;
}
}));

(logseq.api.datascript_query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.datascript_query.cljs$lang$applyTo = (function (seq121060){
var G__121061 = cljs.core.first(seq121060);
var seq121060__$1 = cljs.core.next(seq121060);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121061,seq121060__$1);
}));

logseq.api.custom_query = (function logseq$api$custom_query(query_string){
var result = (function (){var query = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query_string);
var G__121063 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"disable-reactive?","disable-reactive?",-1162731342),true], null);
return (frontend.db.custom_query.cljs$core$IFn$_invoke$arity$1 ? frontend.db.custom_query.cljs$core$IFn$_invoke$arity$1(G__121063) : frontend.db.custom_query.call(null,G__121063));
})();
return cljs_bean.core.__GT_js(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.deref(result))));
});
goog.exportSymbol('logseq.api.custom_query', logseq.api.custom_query);
logseq.api.download_graph_db = (function logseq$api$download_graph_db(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5804__auto____$1)){
var db = temp__5804__auto____$1;
var db_str = (cljs.core.truth_(db)?(frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.db__GT_string.call(null,db)):"");
var data_str = ["data:text/edn;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(db_str))].join('');
var temp__5804__auto____$2 = goog.dom.getElement("download");
if(cljs.core.truth_(temp__5804__auto____$2)){
var anchor = temp__5804__auto____$2;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",[clojure.string.replace(repo,"/"," "),".transit"].join(''));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.download_graph_db', logseq.api.download_graph_db);
logseq.api.download_graph_pages = (function logseq$api$download_graph_pages(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return frontend.handler.export$.export_repo_as_zip_BANG_(repo);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.download_graph_pages', logseq.api.download_graph_pages);
logseq.api.exec_git_command = (function logseq$api$exec_git_command(args){
var temp__5804__auto__ = (function (){var and__5041__auto__ = args;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs_bean.core.__GT_clj(args));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var args__$1 = temp__5804__auto__;
return frontend.handler.shell.run_git_command_BANG_(args__$1);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exec_git_command', logseq.api.exec_git_command);
logseq.api.show_msg = logseq.sdk.ui._show_msg;
goog.exportSymbol('logseq.api.show_msg', logseq.api.show_msg);
logseq.api.query_element_rect = logseq.sdk.ui.query_element_rect;
goog.exportSymbol('logseq.api.query_element_rect', logseq.api.query_element_rect);
logseq.api.query_element_by_id = logseq.sdk.ui.query_element_by_id;
goog.exportSymbol('logseq.api.query_element_by_id', logseq.api.query_element_by_id);
logseq.api.make_asset_url = logseq.sdk.assets.make_url;
goog.exportSymbol('logseq.api.make_asset_url', logseq.api.make_asset_url);
logseq.api.exper_load_scripts = (function logseq$api$exper_load_scripts(var_args){
var args__5772__auto__ = [];
var len__5766__auto___121134 = arguments.length;
var i__5767__auto___121135 = (0);
while(true){
if((i__5767__auto___121135 < len__5766__auto___121134)){
args__5772__auto__.push((arguments[i__5767__auto___121135]));

var G__121136 = (i__5767__auto___121135 + (1));
i__5767__auto___121135 = G__121136;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.api.exper_load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});
goog.exportSymbol('logseq.api.exper_load_scripts', logseq.api.exper_load_scripts);

(logseq.api.exper_load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (pid,scripts){
var temp__5804__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var _pl = temp__5804__auto__;
var seq__121067 = cljs.core.seq(scripts);
var chunk__121069 = null;
var count__121070 = (0);
var i__121071 = (0);
while(true){
if((i__121071 < count__121070)){
var s = chunk__121069.cljs$core$IIndexed$_nth$arity$2(null,i__121071);
var upt_status_121137 = ((function (seq__121067,chunk__121069,count__121070,i__121071,s,_pl,temp__5804__auto__){
return (function (p1__121064_SHARP_){
return frontend.state.upt_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s,new cljs.core.Keyword(null,"status","status",-1997798413),p1__121064_SHARP_);
});})(seq__121067,chunk__121069,count__121070,i__121071,s,_pl,temp__5804__auto__))
;
var init_QMARK__121138 = frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"src","src",-1651076051),s], null));
if(cljs.core.truth_(init_QMARK__121138)){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
upt_status_121137(new cljs.core.Keyword(null,"pending","pending",-220036727));

return frontend.loader.load.cljs$core$IFn$_invoke$arity$3(s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),cljs.core.name(pid)], null)], null));
})()
,((function (seq__121067,chunk__121069,count__121070,i__121071,upt_status_121137,init_QMARK__121138,s,_pl,temp__5804__auto__){
return (function (){
return upt_status_121137(new cljs.core.Keyword(null,"done","done",-889844188));
});})(seq__121067,chunk__121069,count__121070,i__121071,upt_status_121137,init_QMARK__121138,s,_pl,temp__5804__auto__))
),((function (seq__121067,chunk__121069,count__121070,i__121071,upt_status_121137,init_QMARK__121138,s,_pl,temp__5804__auto__){
return (function (){
return upt_status_121137(new cljs.core.Keyword(null,"error","error",-978969032));
});})(seq__121067,chunk__121069,count__121070,i__121071,upt_status_121137,init_QMARK__121138,s,_pl,temp__5804__auto__))
);
} else {
}


var G__121139 = seq__121067;
var G__121140 = chunk__121069;
var G__121141 = count__121070;
var G__121142 = (i__121071 + (1));
seq__121067 = G__121139;
chunk__121069 = G__121140;
count__121070 = G__121141;
i__121071 = G__121142;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__121067);
if(temp__5804__auto____$1){
var seq__121067__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__121067__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__121067__$1);
var G__121143 = cljs.core.chunk_rest(seq__121067__$1);
var G__121144 = c__5565__auto__;
var G__121145 = cljs.core.count(c__5565__auto__);
var G__121146 = (0);
seq__121067 = G__121143;
chunk__121069 = G__121144;
count__121070 = G__121145;
i__121071 = G__121146;
continue;
} else {
var s = cljs.core.first(seq__121067__$1);
var upt_status_121147 = ((function (seq__121067,chunk__121069,count__121070,i__121071,s,seq__121067__$1,temp__5804__auto____$1,_pl,temp__5804__auto__){
return (function (p1__121064_SHARP_){
return frontend.state.upt_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s,new cljs.core.Keyword(null,"status","status",-1997798413),p1__121064_SHARP_);
});})(seq__121067,chunk__121069,count__121070,i__121071,s,seq__121067__$1,temp__5804__auto____$1,_pl,temp__5804__auto__))
;
var init_QMARK__121148 = frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"src","src",-1651076051),s], null));
if(cljs.core.truth_(init_QMARK__121148)){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
upt_status_121147(new cljs.core.Keyword(null,"pending","pending",-220036727));

return frontend.loader.load.cljs$core$IFn$_invoke$arity$3(s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),cljs.core.name(pid)], null)], null));
})()
,((function (seq__121067,chunk__121069,count__121070,i__121071,upt_status_121147,init_QMARK__121148,s,seq__121067__$1,temp__5804__auto____$1,_pl,temp__5804__auto__){
return (function (){
return upt_status_121147(new cljs.core.Keyword(null,"done","done",-889844188));
});})(seq__121067,chunk__121069,count__121070,i__121071,upt_status_121147,init_QMARK__121148,s,seq__121067__$1,temp__5804__auto____$1,_pl,temp__5804__auto__))
),((function (seq__121067,chunk__121069,count__121070,i__121071,upt_status_121147,init_QMARK__121148,s,seq__121067__$1,temp__5804__auto____$1,_pl,temp__5804__auto__){
return (function (){
return upt_status_121147(new cljs.core.Keyword(null,"error","error",-978969032));
});})(seq__121067,chunk__121069,count__121070,i__121071,upt_status_121147,init_QMARK__121148,s,seq__121067__$1,temp__5804__auto____$1,_pl,temp__5804__auto__))
);
} else {
}


var G__121149 = cljs.core.next(seq__121067__$1);
var G__121150 = null;
var G__121151 = (0);
var G__121152 = (0);
seq__121067 = G__121149;
chunk__121069 = G__121150;
count__121070 = G__121151;
i__121071 = G__121152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(logseq.api.exper_load_scripts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.exper_load_scripts.cljs$lang$applyTo = (function (seq121065){
var G__121066 = cljs.core.first(seq121065);
var seq121065__$1 = cljs.core.next(seq121065);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121066,seq121065__$1);
}));

logseq.api.exper_register_fenced_code_renderer = (function logseq$api$exper_register_fenced_code_renderer(pid,type,opts){
var temp__5804__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var _pl = temp__5804__auto__;
return frontend.handler.plugin.register_fenced_code_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),type,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__121073_SHARP_,p2__121074_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__121073_SHARP_,p2__121074_SHARP_,(opts[cljs.core.name(p2__121074_SHARP_)]));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null)));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exper_register_fenced_code_renderer', logseq.api.exper_register_fenced_code_renderer);
logseq.api.exper_register_extensions_enhancer = (function logseq$api$exper_register_extensions_enhancer(pid,type,enhancer){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.fn_QMARK_(enhancer);
if(and__5041__auto__){
return frontend.handler.plugin.get_plugin_inst(pid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var _pl = temp__5804__auto__;
return frontend.handler.plugin.register_extensions_enhancer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enhancer","enhancer",-929020171),enhancer], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exper_register_extensions_enhancer', logseq.api.exper_register_extensions_enhancer);
if((typeof logseq !== 'undefined') && (typeof logseq.api !== 'undefined') && (typeof logseq.api._STAR_request_k !== 'undefined')){
} else {
logseq.api._STAR_request_k = cljs.core.volatile_BANG_((0));
}
logseq.api.exper_request = (function logseq$api$exper_request(pid,options){
var temp__5804__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var pl = temp__5804__auto__;
var req_id = cljs.core.vreset_BANG_(logseq.api._STAR_request_k,(cljs.core.deref(logseq.api._STAR_request_k) + (1)));
var req_cb = (function (p1__121075_SHARP_){
return frontend.handler.plugin.request_callback(pl,req_id,p1__121075_SHARP_);
});
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"httpRequest","httpRequest",-179408648),req_id,options], 0)),(function (p1__121076_SHARP_){
return req_cb(p1__121076_SHARP_);
})),(function (p1__121077_SHARP_){
return req_cb(p1__121077_SHARP_);
}));

return req_id;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exper_request', logseq.api.exper_request);
logseq.api.http_request_abort = (function logseq$api$http_request_abort(req_id){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"httpRequestAbort","httpRequestAbort",777669509),req_id], 0));
});
goog.exportSymbol('logseq.api.http_request_abort', logseq.api.http_request_abort);
logseq.api.get_template = (function logseq$api$get_template(name){
var G__121078 = name;
var G__121078__$1 = (((G__121078 == null))?null:frontend.db.model.get_template_by_name(G__121078));
var G__121078__$2 = (((G__121078__$1 == null))?null:logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(G__121078__$1));
if((G__121078__$2 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__121078__$2);
}
});
goog.exportSymbol('logseq.api.get_template', logseq.api.get_template);
logseq.api.insert_template = (function logseq$api$insert_template(target_uuid,template_name){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.handler.page.template_exists_QMARK_(template_name);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_block_by_uuid(target_uuid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(null,template_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.insert_template', logseq.api.insert_template);
logseq.api.exist_template = (function logseq$api$exist_template(name){
return frontend.handler.page.template_exists_QMARK_(name);
});
goog.exportSymbol('logseq.api.exist_template', logseq.api.exist_template);
logseq.api.create_template = (function logseq$api$create_template(target_uuid,template_name,opts){
if(cljs.core.truth_((function (){var and__5041__auto__ = template_name;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_block_by_uuid(target_uuid);
} else {
return and__5041__auto__;
}
})())){
var map__121079 = cljs_bean.core.__GT_clj(opts);
var map__121079__$1 = cljs.core.__destructure_map(map__121079);
var overwrite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121079__$1,new cljs.core.Keyword(null,"overwrite","overwrite",1291442417));
var exist_QMARK_ = frontend.handler.page.template_exists_QMARK_(template_name);
if(((cljs.core.not(exist_QMARK_)) || (overwrite === true))){
var temp__5804__auto___121153 = (function (){var and__5041__auto__ = exist_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_template_by_name(template_name);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___121153)){
var old_target_121154 = temp__5804__auto___121153;
frontend.handler.editor.property.remove_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(old_target_121154),new cljs.core.Keyword(null,"template","template",-702405684));
} else {
}

return frontend.handler.editor.property.set_block_property_BANG_(target_uuid,new cljs.core.Keyword(null,"template","template",-702405684),template_name);
} else {
throw (new Error("Template already exists!"));
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.create_template', logseq.api.create_template);
logseq.api.remove_template = (function logseq$api$remove_template(name){
var temp__5804__auto__ = frontend.db.model.get_template_by_name(name);
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
return frontend.handler.editor.property.remove_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"template","template",-702405684));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.remove_template', logseq.api.remove_template);
logseq.api.search = (function logseq$api$search(q){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$1(q),(function (p1__121080_SHARP_){
return cljs_bean.core.__GT_js(p1__121080_SHARP_);
}));
});
goog.exportSymbol('logseq.api.search', logseq.api.search);
logseq.api.set_focused_settings = (function logseq$api$set_focused_settings(pid){
var temp__5804__auto__ = frontend.state.get_plugin_by_id(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var plugin = temp__5804__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),pid,false,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plugin);
}
})()], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_focused_settings', logseq.api.set_focused_settings);
logseq.api.force_save_graph = (function logseq$api$force_save_graph(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.listener.persist_dbs_BANG_(),(function (_){
return promesa.protocols._promise(true);
}));
}));
});
goog.exportSymbol('logseq.api.force_save_graph', logseq.api.force_save_graph);
logseq.api.set_blocks_id = (function logseq$api$set_blocks_id(p1__121081_SHARP_){
return frontend.handler.editor.set_blocks_id_BANG_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.uuid,p1__121081_SHARP_));
});
goog.exportSymbol('logseq.api.set_blocks_id', logseq.api.set_blocks_id);

//# sourceMappingURL=logseq.api.js.map
