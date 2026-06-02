goog.provide('frontend.handler.common');
goog.scope(function(){
  frontend.handler.common.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$ignore$index=shadow.js.require("module$node_modules$ignore$index", {});
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_ = (function frontend$handler$common$copy_to_clipboard_without_id_property_BANG_(format,raw_text,html,blocks){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.util.property.remove_id_property(format,raw_text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html","html",-998796897),html,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], 0));
});
frontend.handler.common.config_with_document_mode = (function frontend$handler$common$config_with_document_mode(config){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("document","mode?","document/mode?",-994203479),frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null)));
});
frontend.handler.common.ignore_files = (function frontend$handler$common$ignore_files(pattern,paths){
return cljs_bean.core.__GT_clj(module$node_modules$ignore$index().add(pattern).filter(cljs_bean.core.__GT_js(paths)));
});
frontend.handler.common.safe_read_string = (function frontend$handler$common$safe_read_string(content,error_message_or_handler){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e102936){var e = e102936;
console.error(e);

if(cljs.core.fn_QMARK_(error_message_or_handler)){
(error_message_or_handler.cljs$core$IFn$_invoke$arity$1 ? error_message_or_handler.cljs$core$IFn$_invoke$arity$1(e) : error_message_or_handler.call(null,e));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_message_or_handler], 0));
}

return cljs.core.PersistentArrayMap.EMPTY;
}});
frontend.handler.common.get_page_default_properties = (function frontend$handler$common$get_page_default_properties(page_name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),page_name], null);
});
frontend.handler.common.fix_pages_timestamps = (function frontend$handler$common$fix_pages_timestamps(pages){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__102937){
var map__102938 = p__102937;
var map__102938__$1 = cljs.core.__destructure_map(map__102938);
var p = map__102938__$1;
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102938__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102938__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var journal_day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102938__$1,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366));
var G__102939 = p;
var G__102939__$1 = (((created_at == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102939,new cljs.core.Keyword("block","created-at","block/created-at",1440015),(cljs.core.truth_(journal_day)?frontend.date.journal_day__GT_ts(journal_day):frontend.util.time_ms())):G__102939);
if((updated_at == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102939__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),(cljs.core.truth_(journal_day)?frontend.date.journal_day__GT_ts(journal_day):frontend.util.time_ms()));
} else {
return G__102939__$1;
}
}),pages);
});
frontend.handler.common.show_custom_context_menu_BANG_ = (function frontend$handler$common$show_custom_context_menu_BANG_(e,context_menu_content){
frontend.util.stop(e);

var position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.common.goog$module$goog$object.get(e,"clientX"),frontend.handler.common.goog$module$goog$object.get(e,"clientY")], null);
return frontend.state.show_custom_context_menu_BANG_(context_menu_content,position);
});
frontend.handler.common.listen_to_scroll_BANG_ = (function frontend$handler$common$listen_to_scroll_BANG_(element){
var _STAR_scroll_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return element.addEventListener("scroll",(function (){
if(cljs.core.truth_(cljs.core.deref(_STAR_scroll_timer))){
clearTimeout(cljs.core.deref(_STAR_scroll_timer));
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),true);

frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0());

return cljs.core.reset_BANG_(_STAR_scroll_timer,setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),false);
}),(500)));
}),false);
});

//# sourceMappingURL=frontend.handler.common.js.map
