goog.provide('frontend.handler.common.developer');
frontend.handler.common.developer.show_entity_data = (function frontend$handler$common$developer$show_entity_data(var_args){
var args__5772__auto__ = [];
var len__5766__auto___114171 = arguments.length;
var i__5767__auto___114172 = (0);
while(true){
if((i__5767__auto___114172 < len__5766__auto___114171)){
args__5772__auto__.push((arguments[i__5767__auto___114172]));

var G__114173 = (i__5767__auto___114172 + (1));
i__5767__auto___114172 = G__114173;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.handler.common.developer.show_entity_data.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.handler.common.developer.show_entity_data.cljs$core$IFn$_invoke$arity$variadic = (function (pull_args){
var pull_data = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__114160_114174 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__114161_114175 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__114162_114176 = true;
var _STAR_print_fn_STAR__temp_val__114163_114177 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__114162_114176);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__114163_114177);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.db.pull,pull_args));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__114161_114175);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__114160_114174);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),pull_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy to clipboard",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(pull_data);
})], 0))], null),new cljs.core.Keyword(null,"success","success",1890645906),false);
}));

(frontend.handler.common.developer.show_entity_data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.common.developer.show_entity_data.cljs$lang$applyTo = (function (seq114159){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq114159));
}));

frontend.handler.common.developer.show_content_ast = (function frontend$handler$common$developer$show_content_ast(content,format){
var ast_data = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__114164_114178 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__114165_114179 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__114166_114180 = true;
var _STAR_print_fn_STAR__temp_val__114167_114181 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__114166_114180);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__114167_114181);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__114165_114179);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__114164_114178);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy to clipboard",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(ast_data);
})], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),ast_data], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),false);
});
frontend.handler.common.developer.show_block_data = (function frontend$handler$common$developer$show_block_data(){
var temp__5802__auto__ = new cljs.core.Keyword(null,"block-id","block-id",-70582834).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_editor_args()));
if(cljs.core.truth_(temp__5802__auto__)){
var block_uuid = temp__5802__auto__;
return frontend.handler.common.developer.show_entity_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)], 0));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No block found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_block_data', frontend.handler.common.developer.show_block_data);
frontend.handler.common.developer.show_block_ast = (function frontend$handler$common$developer$show_block_ast(){
var temp__5802__auto__ = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_editor_args()));
if(cljs.core.truth_(temp__5802__auto__)){
var map__114168 = temp__5802__auto__;
var map__114168__$1 = cljs.core.__destructure_map(map__114168);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114168__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114168__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
return frontend.handler.common.developer.show_content_ast(content,format);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No block found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_block_ast', frontend.handler.common.developer.show_block_ast);
frontend.handler.common.developer.show_page_data = (function frontend$handler$common$developer$show_page_data(){
var temp__5802__auto__ = frontend.util.page.get_current_page_id();
if(cljs.core.truth_(temp__5802__auto__)){
var page_id = temp__5802__auto__;
return frontend.handler.common.developer.show_entity_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_id], 0));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No page found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_page_data', frontend.handler.common.developer.show_page_data);
frontend.handler.common.developer.show_page_ast = (function frontend$handler$common$developer$show_page_ast(){
var page_data = (function (){var G__114169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","content","file/content",12680964)], null)], null)], null);
var G__114170 = frontend.util.page.get_current_page_id();
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$2(G__114169,G__114170) : frontend.db.pull.call(null,G__114169,G__114170));
})();
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("file","content","file/content",12680964)], null)))){
return frontend.handler.common.developer.show_content_ast(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("file","content","file/content",12680964)], null)),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page_data));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No page found",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_page_ast', frontend.handler.common.developer.show_page_ast);

//# sourceMappingURL=frontend.handler.common.developer.js.map
