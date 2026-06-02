goog.provide('frontend.handler.code');
goog.scope(function(){
  frontend.handler.code.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.code.save_code_editor_BANG_ = (function frontend$handler$code$save_code_editor_BANG_(){
var map__120977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346));
var map__120977__$1 = cljs.core.__destructure_map(map__120977);
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120977__$1,new cljs.core.Keyword(null,"config","config",994861415));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120977__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120977__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","skip-saving-current-block?","editor/skip-saving-current-block?",-2017906002),true);

frontend.state.set_block_component_editing_mode_BANG_(false);

if(cljs.core.truth_(editor)){
editor.save();

var textarea = editor.getTextArea();
var ds = textarea.dataset;
var value = frontend.handler.code.goog$module$goog$object.get(textarea,"value");
var default_value = (function (){var or__5043__auto__ = ds.v;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.code.goog$module$goog$object.get(textarea,"defaultValue");
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,default_value)){
(ds.v = value);

if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config))){
var block = (function (){var G__120979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__120979) : frontend.db.pull.call(null,G__120979));
})();
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var map__120978 = new cljs.core.Keyword(null,"pos_meta","pos_meta",1041099485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"code-options","code-options",1113362965).cljs$core$IFn$_invoke$arity$1(state)));
var map__120978__$1 = cljs.core.__destructure_map(map__120978);
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120978__$1,new cljs.core.Keyword(null,"start_pos","start_pos",272375959));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120978__$1,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940));
var offset = (cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))?(0):(2));
var raw_content = logseq.graph_parser.utf8.encode(content);
var prefix = logseq.graph_parser.utf8.decode(raw_content.slice((0),(start_pos - offset)));
var surfix = logseq.graph_parser.utf8.decode(raw_content.slice((end_pos - offset)));
var new_content = ((clojure.string.blank_QMARK_(value))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix)].join(''));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),new_content);

return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
} else {
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config)))){
var path = new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config);
var repo = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo);
var rpath = ((clojure.string.starts_with_QMARK_(path,repo_dir))?logseq.common.path.trim_dir_prefix(repo_dir,path):null);
if(cljs.core.truth_(rpath)){
var db_content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(rpath) : frontend.db.get_file.call(null,rpath));
var not_in_db_QMARK_ = (db_content == null);
var old_content = (function (){var or__5043__auto__ = db_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var contents_matched_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(value),clojure.string.trim(old_content));
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = not_in_db_QMARK_;
if(and__5041__auto__){
return cljs.core.not_empty(value);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (!(contents_matched_QMARK_));
}
})())){
return frontend.handler.file.alter_file(frontend.state.get_current_repo(),rpath,[clojure.string.trim(value),"\n"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true], null));
} else {
return null;
}
} else {
return frontend.handler.file.alter_global_file(path,[clojure.string.trim(value),"\n"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
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

//# sourceMappingURL=frontend.handler.code.js.map
