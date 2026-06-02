goog.provide('frontend.components.lazy_editor');
frontend.components.lazy_editor.lazy_editor = (new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["code-editor"], null),(function (){
return frontend.extensions.code.editor;
})));
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.lazy_editor !== 'undefined') && (typeof frontend.components.lazy_editor.loaded_QMARK_ !== 'undefined')){
} else {
frontend.components.lazy_editor.loaded_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.lazy_editor.editor = rum.core.lazy_build(rum.core.build_defc,(function (config,id,attr,code,options){
var loaded_QMARK_ = rum.core.react(frontend.components.lazy_editor.loaded_QMARK_);
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var code__$1 = (function (){var or__5043__auto__ = code;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var code__$2 = clojure.string.replace_first(code__$1,/\n$/,"");
if(cljs.core.truth_(loaded_QMARK_)){
return daiquiri.interpreter.interpret((function (){var fexpr__110403 = cljs.core.deref(frontend.components.lazy_editor.lazy_editor);
return (fexpr__110403.cljs$core$IFn$_invoke$arity$6 ? fexpr__110403.cljs$core$IFn$_invoke$arity$6(config,id,attr,code__$2,theme,options) : fexpr__110403.call(null,config,id,attr,code__$2,theme,options));
})());
} else {
return daiquiri.interpreter.interpret(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("CodeMirror"));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
shadow.lazy.load.cljs$core$IFn$_invoke$arity$2(frontend.components.lazy_editor.lazy_editor,(function (){
if(cljs.core.not(cljs.core.deref(frontend.components.lazy_editor.loaded_QMARK_))){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.all((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.handler.plugin.hook_extensions_enhancer_by_type(new cljs.core.Keyword(null,"codemirror","codemirror",-1221931625)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var enhancers = temp__5804__auto__;
var iter__5520__auto__ = (function frontend$components$lazy_editor$iter__110404(s__110405){
return (new cljs.core.LazySeq(null,(function (){
var s__110405__$1 = s__110405;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__110405__$1);
if(temp__5804__auto____$1){
var s__110405__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__110405__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110405__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110407 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110406 = (0);
while(true){
if((i__110406 < size__5519__auto__)){
var map__110408 = cljs.core._nth(c__5518__auto__,i__110406);
var map__110408__$1 = cljs.core.__destructure_map(map__110408);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110408__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
cljs.core.chunk_append(b__110407,((cljs.core.fn_QMARK_(f))?(function (){var G__110409 = window.CodeMirror;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110409) : f.call(null,G__110409));
})():null));

var G__110412 = (i__110406 + (1));
i__110406 = G__110412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110407),frontend$components$lazy_editor$iter__110404(cljs.core.chunk_rest(s__110405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110407),null);
}
} else {
var map__110410 = cljs.core.first(s__110405__$2);
var map__110410__$1 = cljs.core.__destructure_map(map__110410);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110410__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
return cljs.core.cons(((cljs.core.fn_QMARK_(f))?(function (){var G__110411 = window.CodeMirror;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110411) : f.call(null,G__110411));
})():null),frontend$components$lazy_editor$iter__110404(cljs.core.rest(s__110405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(enhancers);
} else {
return null;
}
})()),(function (){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((200)),(function (){
return cljs.core.reset_BANG_(frontend.components.lazy_editor.loaded_QMARK_,true);
}));
}));
} else {
return cljs.core.reset_BANG_(frontend.components.lazy_editor.loaded_QMARK_,true);
}
}));

return state;
})], null)], null),"frontend.components.lazy-editor/editor");

//# sourceMappingURL=frontend.components.lazy_editor.js.map
