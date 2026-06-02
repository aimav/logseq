goog.provide('frontend.handler.paste');
goog.scope(function(){
  frontend.handler.paste.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.paste.paste_text_parseable = (function frontend$handler$paste$paste_text_parseable(format,text){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var editing_block = temp__5804__auto__;
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(editing_block));
var blocks = frontend.format.block.extract_blocks(frontend.format.mldoc.__GT_edn(text,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)),text,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-name","page-name",974981762),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)))], null));
var blocks_SINGLEQUOTE_ = logseq.graph_parser.block.with_parent_and_left(page_id,blocks);
return frontend.handler.editor.paste_blocks(blocks_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
} else {
return null;
}
});
frontend.handler.paste.paste_segmented_text = (function frontend$handler$paste$paste_segmented_text(format,text){
var paragraphs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/(?:\r?\n){2,}/);
var updated_paragraphs = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return (function (p__$1){
if(cljs.core.truth_(frontend.util.safe_re_find(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?/\s*\*+\s+/:/\s*-\s+/),p__$1))){
return p__$1;
} else {
return [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?"* ":"- "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join('');
}
})(clojure.string.trim(p));
}),paragraphs));
return frontend.handler.paste.paste_text_parseable(format,updated_paragraphs);
});
frontend.handler.paste.wrap_macro_url = (function frontend$handler$paste$wrap_macro_url(url){
if(cljs.core.boolean$(frontend.util.text.get_matched_video(url))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{video %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
if(clojure.string.includes_QMARK_(url,"twitter.com")){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{twitter %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
return null;
}
}
});
/**
 * Result is not only to be an Object.
 * Maybe JSON types like string, number, boolean, null, array
 */
frontend.handler.paste.try_parse_as_json = (function frontend$handler$paste$try_parse_as_json(text){
try{return JSON.parse(text);
}catch (e108752){var _ = e108752;
return ({});
}});
frontend.handler.paste.get_whiteboard_tldr_from_text = (function frontend$handler$paste$get_whiteboard_tldr_from_text(text){
var temp__5804__auto__ = frontend.util.safe_re_find(/<whiteboard-tldr>(.*)<\/whiteboard-tldr>/,logseq.graph_parser.util.safe_decode_uri_component(text));
if(cljs.core.truth_(temp__5804__auto__)){
var matched_text = temp__5804__auto__;
return frontend.handler.paste.try_parse_as_json(cljs.core.second(matched_text));
} else {
return null;
}
});
frontend.handler.paste.selection_within_link_QMARK_ = (function frontend$handler$paste$selection_within_link_QMARK_(selection_and_format){
var map__108753 = selection_and_format;
var map__108753__$1 = cljs.core.__destructure_map(map__108753);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108753__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108753__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108753__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108753__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108753__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end)) && ((!((cljs.core.some((function (p__108754){
var vec__108755 = p__108754;
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108755,(0),null);
var matched_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108755,(1),null);
return (((start_index <= selection_start)) && (((((start_index + cljs.core.count(matched_text)) >= selection_end)) && (clojure.string.includes_QMARK_(matched_text,selection)))));
}),(function (){var G__108758 = format;
var G__108758__$1 = (((G__108758 instanceof cljs.core.Keyword))?G__108758.fqn:null);
switch (G__108758__$1) {
case "markdown":
return frontend.util.re_pos(/\[.*?\]\(.*?\)/,value);

break;
case "org":
return frontend.util.re_pos(/\[\[.*?\]\[.*?\]\]/,value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108758__$1)].join('')));

}
})()) == null)))));
});
frontend.handler.paste.get_copied_blocks = (function frontend$handler$paste$get_copied_blocks(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(frontend.mobile.util.native_android_QMARK_());
if(and__5041__auto__){
var and__5041__auto____$1 = window;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = frontend.handler.paste.goog$module$goog$object.get(window,"navigator");
if(cljs.core.truth_(and__5041__auto____$2)){
return navigator.clipboard;
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?navigator.clipboard.read():null),(function (clipboard_items){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(clipboard_items)?(function (){var types = cljs.core.first(clipboard_items).types;
if(cljs.core.contains_QMARK_(cljs.core.set(types),"web application/logseq")){
return cljs.core.first(clipboard_items).getType("web application/logseq");
} else {
return null;
}
})():null),(function (blocks_blob){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(blocks_blob)?blocks_blob.text():null),(function (blocks_str){
return promesa.protocols._promise((cljs.core.truth_(blocks_str)?logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(blocks_str):null));
}));
}));
}));
}));
});
frontend.handler.paste.markdown_blocks_QMARK_ = (function frontend$handler$paste$markdown_blocks_QMARK_(text){
return cljs.core.boolean$(frontend.util.safe_re_find(/^\s*(?:[-+*]|#+)\s+/m,text));
});
frontend.handler.paste.org_blocks_QMARK_ = (function frontend$handler$paste$org_blocks_QMARK_(text){
return cljs.core.boolean$(frontend.util.safe_re_find(/^\s*\*+\s+/m,text));
});
/**
 * Get reverted previous cut tx when paste
 */
frontend.handler.paste.get_revert_cut_txs = (function frontend$handler$paste$get_revert_cut_txs(blocks){
var map__108759 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),frontend.state.get_current_repo()], null));
var map__108759__$1 = cljs.core.__destructure_map(map__108759);
var retracted_block_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108759__$1,new cljs.core.Keyword(null,"retracted-block-ids","retracted-block-ids",-491940807));
var revert_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108759__$1,new cljs.core.Keyword(null,"revert-tx","revert-tx",1745816539));
var recent_cut_block_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,retracted_block_ids));
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),frontend.state.get_current_repo()], null),null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks)),recent_cut_block_ids)){
return cljs.core.seq(revert_tx);
} else {
return null;
}
});
frontend.handler.paste.paste_copied_text = (function frontend$handler$paste$paste_copied_text(input,_STAR_text,html){
var replace_text_f = (function (text){
var input_id = frontend.state.get_edit_input_id();
frontend.commands.delete_selection_BANG_(input_id);

return frontend.commands.simple_insert_BANG_(input_id,text,null);
});
var text = clojure.string.replace(_STAR_text,"\r\n","\n");
var input_id = frontend.state.get_edit_input_id();
var shape_refs_text = (cljs.core.truth_((function (){var and__5041__auto__ = (!(clojure.string.blank_QMARK_(html)));
if(and__5041__auto__){
return frontend.handler.paste.get_whiteboard_tldr_from_text(html);
} else {
return and__5041__auto__;
}
})())?text:null);
var map__108760 = frontend.handler.editor.get_selection_and_format();
var map__108760__$1 = cljs.core.__destructure_map(map__108760);
var selection_and_format = map__108760__$1;
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108760__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var text_url_QMARK_ = logseq.graph_parser.util.url_QMARK_(text);
var selection_url_QMARK_ = logseq.graph_parser.util.url_QMARK_(selection);
if((!(clojure.string.blank_QMARK_(shape_refs_text)))){
return frontend.commands.simple_insert_BANG_(input_id,shape_refs_text,null);
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = (function (){var or__5043__auto__ = text_url_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return selection_url_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.paste.selection_within_link_QMARK_(selection_and_format);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = text_url_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return selection_url_QMARK_;
} else {
return and__5041__auto__;
}
}
})())){
return replace_text_f(text);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = text_url_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return selection_url_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(text);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.util.block_ref.block_ref_QMARK_(text);
if(and__5041__auto__){
return frontend.handler.editor.wrapped_by_QMARK_(input,logseq.graph_parser.util.block_ref.left_parens,logseq.graph_parser.util.block_ref.right_parens);
} else {
return and__5041__auto__;
}
})())){
return frontend.commands.simple_insert_BANG_(input_id,logseq.graph_parser.util.block_ref.get_block_ref_id(text),null);
} else {
var format = (function (){var or__5043__auto__ = (function (){var G__108761 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__108761) : frontend.db.get_page_format.call(null,G__108761));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var html_text = (function (){var result = ((clojure.string.blank_QMARK_(html))?null:(function (){try{return frontend.extensions.html_parser.convert(format,html);
}catch (e108762){var e = e108762;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.paste",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),159], null)),e);

return null;
}})());
if(clojure.string.blank_QMARK_(result)){
return null;
} else {
return result;
}
})();
var text_blocks_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?frontend.handler.paste.markdown_blocks_QMARK_:frontend.handler.paste.org_blocks_QMARK_);
var text_SINGLEQUOTE_ = (function (){var or__5043__auto__ = html_text;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (cljs.core.truth_(logseq.graph_parser.util.url_QMARK_(text))?frontend.handler.paste.wrap_macro_url(text):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return text;
}
}
})();
var blocks_QMARK_ = (text_blocks_QMARK_.cljs$core$IFn$_invoke$arity$1 ? text_blocks_QMARK_.cljs$core$IFn$_invoke$arity$1(text_SINGLEQUOTE_) : text_blocks_QMARK_.call(null,text_SINGLEQUOTE_));
if(cljs.core.truth_(blocks_QMARK_)){
return frontend.handler.paste.paste_text_parseable(format,text_SINGLEQUOTE_);
} else {
if(cljs.core.truth_(frontend.util.safe_re_find(/(?:\r?\n){2,}/,text_SINGLEQUOTE_))){
return frontend.handler.paste.paste_segmented_text(format,text_SINGLEQUOTE_);
} else {
return replace_text_f(text_SINGLEQUOTE_);

}
}

}
}
}
}
});
frontend.handler.paste.paste_copied_blocks_or_text = (function frontend$handler$paste$paste_copied_blocks_or_text(input,text,e,html){
frontend.util.stop(e);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.paste.get_copied_blocks(),(function (copied_blocks){
return promesa.protocols._promise(((cljs.core.seq(copied_blocks))?(function (){var revert_cut_txs = frontend.handler.paste.get_revert_cut_txs(copied_blocks);
var keep_uuid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_block_op_type(),new cljs.core.Keyword(null,"cut","cut",-1042666209));
return frontend.handler.editor.paste_blocks(copied_blocks,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"revert-cut-txs","revert-cut-txs",1919904845),revert_cut_txs,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_], null));
})():frontend.handler.paste.paste_copied_text(input,text,html)));
}));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.paste",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Paste failed",new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),192], null)),error);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("frontend.handler.paste","paste-copied-blocks-or-text","frontend.handler.paste/paste-copied-blocks-or-text",963557176)], null)], null)], null));
}));
});
frontend.handler.paste.paste_text_in_one_block_at_point = (function frontend$handler$paste$paste_text_in_one_block_at_point(){
return module$frontend$utils.getClipText((function (clipboard_data){
var temp__5804__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5804__auto__)){
var _ = temp__5804__auto__;
if(cljs.core.truth_(logseq.graph_parser.util.url_QMARK_(clipboard_data))){
if(clojure.string.blank_QMARK_(frontend.util.get_selected_text())){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.handler.paste.wrap_macro_url(clipboard_data);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clipboard_data;
}
})(),true);
} else {
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(clipboard_data);
}
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(clipboard_data,true);
}
} else {
return null;
}
}),(function (error){
return console.error(error);
}));
});
frontend.handler.paste.paste_text_or_blocks_aux = (function frontend$handler$paste$paste_text_or_blocks_aux(input,e,text,html){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
})())){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.paste.paste_text_in_one_block_at_point();
}
} else {
return frontend.handler.paste.paste_copied_blocks_or_text(input,text,e,html);
}
});
frontend.handler.paste.paste_file_if_exists = (function frontend$handler$paste$paste_file_if_exists(id,e){
if(cljs.core.truth_(id)){
var clipboard_data = frontend.handler.paste.goog$module$goog$object.get(e,"clipboardData");
var files = clipboard_data.files;
var temp__5804__auto___108764 = cljs.core.first(files);
if(cljs.core.truth_(temp__5804__auto___108764)){
var file_108765 = temp__5804__auto___108764;
var temp__5804__auto___108766__$1 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto___108766__$1)){
var block_108767 = temp__5804__auto___108766__$1;
frontend.handler.editor.upload_asset(id,[file_108765],new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_108767),frontend.handler.editor._STAR_asset_uploading_QMARK_,true);
} else {
}
} else {
}

return frontend.util.stop(e);
} else {
return null;
}
});
/**
 * Pastes with formatting and includes the following features:
 * - handles internal pastes to correctly paste at the block level
 * - formatted paste includes HTML if detected
 * - special handling for newline and new blocks
 * - pastes file if it exists
 * - wraps certain urls with macros
 * - wraps selected urls with link formatting
 * - whiteboard friendly pasting
 * - paste replaces selected text
 */
frontend.handler.paste.editor_on_paste_BANG_ = (function frontend$handler$paste$editor_on_paste_BANG_(id){
return (function (e){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),true);

var clipboard_data = frontend.handler.paste.goog$module$goog$object.get(e,"clipboardData");
var html = clipboard_data.getData("text/html");
var text = clipboard_data.getData("text");
var has_files_QMARK_ = cljs.core.seq(clipboard_data.files);
if(((clojure.string.blank_QMARK_(text)) && (clojure.string.blank_QMARK_(html)))){
if(has_files_QMARK_){
return frontend.handler.paste.paste_file_if_exists(id,e);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = has_files_QMARK_;
if(and__5041__auto__){
return frontend.state.preferred_pasting_file_QMARK_();
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.paste.paste_file_if_exists(id,e);
} else {
return frontend.handler.paste.paste_text_or_blocks_aux(frontend.state.get_input(),e,text,html);

}
}
});
});
/**
 * Raw pastes without _any_ formatting. Can also replace selected text with a paste
 */
frontend.handler.paste.editor_on_paste_raw_BANG_ = (function frontend$handler$paste$editor_on_paste_raw_BANG_(){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),true);

return module$frontend$utils.getClipText((function (clipboard_data){
if(cljs.core.truth_(frontend.state.get_input())){
frontend.commands.delete_selection_BANG_(frontend.state.get_edit_input_id());

return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(clipboard_data,true);
} else {
return null;
}
}),(function (error){
return console.error(error);
}));
});

//# sourceMappingURL=frontend.handler.paste.js.map
