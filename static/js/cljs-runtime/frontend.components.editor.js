goog.provide('frontend.components.editor');
var module$node_modules$react_draggable$dist$react_draggable=shadow.js.require("module$node_modules$react_draggable$dist$react_draggable", {});
frontend.components.editor.commands = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commands","commands",161008658),frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861)))){
var matched = frontend.util.react(frontend.commands._STAR_matched_commands);
return frontend.ui.auto_complete(matched,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-group-name","get-group-name",-160379696),(function (item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.commands._STAR_first_command_group,cljs.core.first(item));
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (item){
var command_name = cljs.core.first(item);
var command_doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(2));
var plugin_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));
var doc = (cljs.core.truth_(frontend.state.show_command_doc_QMARK_())?command_doc:null);
if(cljs.core.truth_((function (){var or__5043__auto__ = plugin_id;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vector_QMARK_(doc);
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.has-help","div.has-help",152274947),command_name,(cljs.core.truth_(doc)?frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),doc,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562),true,new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.components.svg.help_circle.cljs$core$IFn$_invoke$arity$0()], null)):null),(cljs.core.truth_(plugin_id)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)], null),frontend.ui.icon("puzzle")], null):null)], null);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),doc], null),command_name], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),command_name], null);

}
}
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen_item){
var command = cljs.core.first(chosen_item);
cljs.core.reset_BANG_(frontend.commands._STAR_current_command,command);

var command_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,matched),command);
var restore_slash_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Yesterday",null,"Tomorrow",null,"Today",null,"Current time",null], null), null),command)) || ((((!(cljs.core.fn_QMARK_(command_steps)))) && ((((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,command_steps)),new cljs.core.Keyword("editor","input","editor/input",-288966104))))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["Deadline",null,"Template",null,"Scheduled",null,"Date picker",null,"Upload an image",null], null), null),command)))))))));
return frontend.handler.editor.insert_command_BANG_(id,command_steps,format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore?","restore?",1172240305),restore_slash_QMARK_,new cljs.core.Keyword(null,"command","command",-894540724),command], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/commands");
frontend.components.editor.block_commands = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497),frontend.state.get_editor_action())){
var matched = frontend.util.react(frontend.commands._STAR_matched_block_commands);
return frontend.ui.auto_complete(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,matched),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen){
return frontend.handler.editor.insert_command_BANG_(id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,matched),chosen),format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/block-commands");
frontend.components.editor.in_sidebar_QMARK_ = (function frontend$components$editor$in_sidebar_QMARK_(el){
return cljs.core.not(document.getElementById("left-container").contains(el));
});
/**
 * Embedded page searching popup
 */
frontend.components.editor.page_search = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
var action = frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-search","page-search",1842925280),null,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573),null], null), null),action)){
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
if(cljs.core.truth_(input)){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = (function (){var or__5043__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var sidebar_QMARK_ = frontend.components.editor.in_sidebar_QMARK_(input);
var q = (function (){var or__5043__auto__ = frontend.handler.editor.get_selected_text();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573)))?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (((cljs.core.count(edit_content) > current_pos))?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return "";
}
}
}
})();
var matched_pages = ((clojure.string.blank_QMARK_(q))?null:frontend.handler.editor.get_matched_pages(q));
var matched_pages__$1 = ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,matched_pages)),(function (){var G__113846 = clojure.string.trim(q);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__113846) : frontend.util.page_name_sanity_lc.call(null,G__113846));
})()))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(m),m], null);
}),matched_pages):((clojure.string.blank_QMARK_(q))?null:((cljs.core.empty_QMARK_(matched_pages))?cljs.core.cons(q,matched_pages):(function (){var matched_pages__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,matched_pages);
var matched_pages__$2 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not(goog.string.caseInsensitiveStartsWith(m,q)),cljs.core.count(m),m], null);
}),matched_pages__$1);
if(cljs.core.truth_(goog.string.caseInsensitiveStartsWith(cljs.core.first(matched_pages__$2),q))){
return cljs.core.cons(cljs.core.first(matched_pages__$2),cljs.core.cons(q,cljs.core.rest(matched_pages__$2)));
} else {
return cljs.core.cons(q,matched_pages__$2);
}
})()
)));
return frontend.ui.auto_complete(matched_pages__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.page.on_chosen_handler(input,id,q,pos,format),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
return frontend.handler.page.page_not_exists_handler(input,id,q,current_pos);
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (page_name,chosen_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preview-trigger-wrapper","div.preview-trigger-wrapper",-738625017),frontend.components.block.page_preview_trigger(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),(cljs.core.truth_(frontend.db.model.whiteboard_page_QMARK_(page_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),frontend.ui.icon("whiteboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-1","div.flex.space-x-1",-10269351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.page_exists_QMARK_.call(null,page_name)))?null:frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-page","new-page",1691458376)], 0)))], null),frontend.handler.search.highlight_exact_query(page_name,q)], null)], null),new cljs.core.Keyword(null,"open?","open?",1238443125),chosen_QMARK_,new cljs.core.Keyword(null,"manual?","manual?",1839586876),true,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562),true,new cljs.core.Keyword(null,"tippy-distance","tippy-distance",1779929100),(24),new cljs.core.Keyword(null,"tippy-position","tippy-position",765440303),((sidebar_QMARK_)?"left":"right")], null),page_name)], null);
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.text-sm.px-4.py-2","div.text-gray-500.text-sm.px-4.py-2",1407624634),"Search for a page"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/page-search");
frontend.components.editor.search_blocks_BANG_ = (function frontend$components$editor$search_blocks_BANG_(state,result){
var vec__113847 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var edit_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113847,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113847,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113847,(2),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113847,(3),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(q))?null:frontend.handler.editor.get_matched_blocks(q,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block))),(function (matched_blocks){
return promesa.protocols._promise(cljs.core.reset_BANG_(result,matched_blocks));
}));
}));
});
frontend.components.editor.block_search_auto_complete = rum.core.lazy_build(rum.core.build_defcs,(function (state,_edit_block,input,id,q,format,selected_text){
var result = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(frontend.db.model.query_block_by_uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))));
}),rum.core.react(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.editor","result","frontend.components.editor/result",-1063532914))));
var chosen_handler = frontend.handler.editor.block_on_chosen_handler(id,q,format,selected_text);
var non_exist_block_handler = frontend.handler.editor.block_non_exist_handler(input);
return frontend.ui.auto_complete(result,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),chosen_handler,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_block_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.text-sm.px-4.py-2","div.text-gray-500.text-sm.px-4.py-2",1407624634),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","block-search","editor/block-search",-2131454160)], 0))], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (p__113852){
var map__113853 = p__113852;
var map__113853__$1 = cljs.core.__destructure_map(map__113853);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113853__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113853__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page__$1 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})();
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var format__$1 = (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page__$1) : frontend.db.get_page_format.call(null,page__$1));
var block = frontend.db.model.query_block_by_uuid(uuid);
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".py-2",".py-2",-1026433155),frontend.components.search.block_search_result_item(repo,uuid,format__$1,content,q,new cljs.core.Keyword(null,"block","block",664686210))], null);
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"ac-block-search"], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.editor.search_blocks_BANG_(state,result);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.editor","result","frontend.components.editor/result",-1063532914),result);
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
frontend.components.editor.search_blocks_BANG_(state,new cljs.core.Keyword("frontend.components.editor","result","frontend.components.editor/result",-1063532914).cljs$core$IFn$_invoke$arity$1(state));

return state;
})], null)], null),"frontend.components.editor/block-search-auto-complete");
frontend.components.editor.block_search = rum.core.lazy_build(rum.core.build_defcs,(function (state,id,_format){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-search","block-search",-897517253),frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861)))){
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
var vec__113854 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113854,(0),null);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113854,(1),null);
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id__$1], null));
var edit_block = frontend.state.get_edit_block();
var selected_text = frontend.handler.editor.get_selected_text();
var q = (function (){var or__5043__auto__ = selected_text;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if((cljs.core.count(edit_content) > current_pos)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
} else {
return null;
}
}
})();
if(cljs.core.truth_(input)){
return frontend.components.editor.block_search_auto_complete(edit_block,input,id__$1,q,format,selected_text);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.clear_search_result_BANG_();

return state;
})], null)], null),"frontend.components.editor/block-search");
frontend.components.editor.template_search = rum.core.lazy_build(rum.core.build_defc,(function (id,_format){
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
if(cljs.core.truth_(input)){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
var q = (function (){var or__5043__auto__ = (((cljs.core.count(edit_content) >= current_pos))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var matched_templates = frontend.handler.editor.get_matched_templates(q);
var non_exist_handler = (function (_state){
return frontend.state.clear_editor_action_BANG_();
});
return frontend.ui.auto_complete(matched_templates,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.editor.template_on_chosen_handler(id),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.px-4.py-2.text-sm","div.text-gray-500.px-4.py-2.text-sm",1030522825),"Search for a template"], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (p__113861){
var vec__113862 = p__113861;
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113862,(0),null);
var _block_db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113862,(1),null);
return template;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/template-search");
frontend.components.editor.property_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var input = goog.dom.getElement(id);
if(cljs.core.truth_(input)){
var q = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"searching-property","searching-property",495243376).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.get_searching_property(input));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var matched_properties = frontend.handler.editor.get_matched_properties(q);
var q_property = clojure.string.replace(clojure.string.lower_case(q),/\s+/,"-");
var non_exist_handler = (function (_state){
return frontend.handler.editor.property_on_chosen_handler(id,q_property)(null);
});
return frontend.ui.auto_complete(matched_properties,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.editor.property_on_chosen_handler(id,q_property),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.text-sm","div.px-4.py-2.text-sm",-1330417158),["Create a new property: ",q_property].join('')], null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.text-sm.font-medium","div.px-4.py-2.text-sm.font-medium",1453537315),"Matched properties: "], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (property){
return property;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/property-search");
frontend.components.editor.property_value_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var property = new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data());
var input = goog.dom.getElement(id);
if(cljs.core.truth_((function (){var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(property)));
} else {
return and__5041__auto__;
}
})())){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
var start_idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos),logseq.graph_parser.property.colons);
var q = (function (){var or__5043__auto__ = (((current_pos >= (start_idx + (2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(start_idx + (2)),current_pos):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var q__$1 = clojure.string.triml(q);
var matched_values = frontend.handler.editor.get_matched_property_values(property,q__$1);
var non_exist_handler = (function (_state){
return frontend.handler.editor.property_value_on_chosen_handler(id,q__$1)(null);
});
return frontend.ui.auto_complete(matched_values,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.editor.property_value_on_chosen_handler(id,q__$1),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.text-sm","div.px-4.py-2.text-sm",-1330417158),["Create a new property value: ",q__$1].join('')], null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.text-sm.font-medium","div.px-4.py-2.text-sm.font-medium",1453537315),"Matched property values: "], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (property_value){
return property_value;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/property-value-search");
frontend.components.editor.code_block_mode_keyup_listener = rum.core.lazy_build(rum.core.build_defc,(function (_q,_edit_content,last_pos,current_pos){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if((current_pos < last_pos)){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_pos,current_pos], null));

return daiquiri.core.create_element(daiquiri.core.fragment,null,null);
}),null,"frontend.components.editor/code-block-mode-keyup-listener");
frontend.components.editor.code_block_mode_picker = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var G__113869 = window.CodeMirror;
var G__113869__$1 = (((G__113869 == null))?null:G__113869.modes);
var G__113869__$2 = (((G__113869__$1 == null))?null:Object.keys(G__113869__$1));
var G__113869__$3 = (((G__113869__$2 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__113869__$2));
if((G__113869__$3 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__113867_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("null",p1__113867_SHARP_);
}),G__113869__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var modes = temp__5804__auto__;
var temp__5804__auto____$1 = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var input = temp__5804__auto____$1;
var pos = frontend.state.get_editor_last_pos();
var current_pos = frontend.util.cursor.pos(input);
var edit_content = (function (){var or__5043__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var q = (function (){var or__5043__auto__ = frontend.handler.editor.get_selected_text();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "";
}
}
})();
var matched = cljs.core.seq(frontend.search.fuzzy_search(modes,q));
var matched__$1 = (function (){var or__5043__auto__ = matched;
if(or__5043__auto__){
return or__5043__auto__;
} else {
if(clojure.string.blank_QMARK_(q)){
return modes;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null);
}
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.editor.code_block_mode_keyup_listener(q,edit_content,pos,current_pos),frontend.ui.auto_complete(matched__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen,_click_QMARK_){
frontend.state.clear_editor_action_BANG_();

var prefix = ["```",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen)].join('');
var last_pattern = ["```",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
frontend.handler.editor.insert_command_BANG_(id,prefix,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),last_pattern], null));

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885)], null));
}),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
frontend.state.clear_editor_action_BANG_();

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885)], null));
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (mode,_chosen_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),mode], null);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"code-block-mode-picker"], null))], null);
} else {
return null;
}
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/code-block-mode-picker");
frontend.components.editor.input = rum.core.lazy_build(rum.core.build_defcs,(function (state,_id,on_submit,_on_cancel){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861)))){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.state.sub(new cljs.core.Keyword("editor","action-data","editor/action-data",969703128));
if(cljs.core.truth_(temp__5804__auto__)){
var action_data = temp__5804__auto__;
var map__113882 = action_data;
var map__113882__$1 = cljs.core.__destructure_map(map__113882);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113882__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113882__$1,new cljs.core.Keyword(null,"options","options",99638489));
var input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.editor","input-value","frontend.components.editor/input-value",231817688));
if(cljs.core.seq(options)){
var command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2.rounded-md.shadow-lg","div.p-2.rounded-md.shadow-lg",1724375875),(function (){var iter__5520__auto__ = (function frontend$components$editor$iter__113883(s__113884){
return (new cljs.core.LazySeq(null,(function (){
var s__113884__$1 = s__113884;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__113884__$1);
if(temp__5804__auto____$1){
var s__113884__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__113884__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113884__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113886 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113885 = (0);
while(true){
if((i__113885 < size__5519__auto__)){
var map__113887 = cljs.core._nth(c__5518__auto__,i__113885);
var map__113887__$1 = cljs.core.__destructure_map(map__113887);
var input_item = map__113887__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113887__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113887__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113887__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var autoFocus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113887__$1,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425));
cljs.core.chunk_append(b__113886,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-3","div.my-3",913998799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5","input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5",-218906293),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__113888 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__113885,map__113887,map__113887__$1,input_item,id,placeholder,type,autoFocus,c__5518__auto__,size__5519__auto__,b__113886,s__113884__$2,temp__5804__auto____$1,command,map__113882,map__113882__$1,pos,options,input_value,action_data,temp__5804__auto__){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(input_value,cljs.core.assoc,id,frontend.util.evalue(e));
});})(i__113885,map__113887,map__113887__$1,input_item,id,placeholder,type,autoFocus,c__5518__auto__,size__5519__auto__,b__113886,s__113884__$2,temp__5804__auto____$1,command,map__113882,map__113882__$1,pos,options,input_value,action_data,temp__5804__auto__))
,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off")], null);
var G__113888__$1 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113888,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__113888);
if(cljs.core.truth_(autoFocus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113888__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true);
} else {
return G__113888__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_item,new cljs.core.Keyword(null,"id","id",-1388402092))], 0))], null)], null));

var G__113931 = (i__113885 + (1));
i__113885 = G__113931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113886),frontend$components$editor$iter__113883(cljs.core.chunk_rest(s__113884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113886),null);
}
} else {
var map__113889 = cljs.core.first(s__113884__$2);
var map__113889__$1 = cljs.core.__destructure_map(map__113889);
var input_item = map__113889__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113889__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113889__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var autoFocus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113889__$1,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-3","div.my-3",913998799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5","input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5",-218906293),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__113890 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__113889,map__113889__$1,input_item,id,placeholder,type,autoFocus,s__113884__$2,temp__5804__auto____$1,command,map__113882,map__113882__$1,pos,options,input_value,action_data,temp__5804__auto__){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(input_value,cljs.core.assoc,id,frontend.util.evalue(e));
});})(map__113889,map__113889__$1,input_item,id,placeholder,type,autoFocus,s__113884__$2,temp__5804__auto____$1,command,map__113882,map__113882__$1,pos,options,input_value,action_data,temp__5804__auto__))
,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off")], null);
var G__113890__$1 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113890,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__113890);
if(cljs.core.truth_(autoFocus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__113890__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true);
} else {
return G__113890__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_item,new cljs.core.Keyword(null,"id","id",-1388402092))], 0))], null)], null),frontend$components$editor$iter__113883(cljs.core.rest(s__113884__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(options);
})(),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__113891 = command;
var G__113892 = cljs.core.deref(input_value);
var G__113893 = pos;
return (on_submit.cljs$core$IFn$_invoke$arity$3 ? on_submit.cljs$core$IFn$_invoke$arity$3(G__113891,G__113892,G__113893) : on_submit.call(null,G__113891,G__113892,G__113893));
})], 0))], null);
} else {
return null;
}
} else {
return null;
}
})());
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("frontend.components.editor","input-value","frontend.components.editor/input-value",231817688)),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 2, [(13),(function (state__$1,e){
var input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword("frontend.components.editor","input-value","frontend.components.editor/input-value",231817688));
var input_option = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_show_input());
if(cljs.core.seq(cljs.core.deref(input_value))){
frontend.util.stop(e);

var vec__113894_113932 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state__$1);
var _id_113933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113894_113932,(0),null);
var on_submit_113934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113894_113932,(1),null);
var command_113935 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(input_option));
var G__113897_113936 = command_113935;
var G__113898_113937 = cljs.core.deref(input_value);
(on_submit_113934.cljs$core$IFn$_invoke$arity$2 ? on_submit_113934.cljs$core$IFn$_invoke$arity$2(G__113897_113936,G__113898_113937) : on_submit_113934.call(null,G__113897_113936,G__113898_113937));

return cljs.core.reset_BANG_(input_value,null);
} else {
return null;
}
}),(27),(function (_state,_e){
var vec__113899 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113899,(0),null);
var _on_submit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113899,(1),null);
var on_cancel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113899,(2),null);
return (on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(id) : on_cancel.call(null,id));
})], null));
}))], null),"frontend.components.editor/input");
frontend.components.editor.absolute_modal = rum.core.lazy_build(rum.core.build_defc,(function (cp,modal_name,set_default_width_QMARK_,p__113902){
var map__113903 = p__113902;
var map__113903__$1 = cljs.core.__destructure_map(map__113903);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113903__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113903__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113903__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var MAX_HEIGHT = (700);
var MAX_HEIGHT_SINGLEQUOTE_ = (600);
var MAX_WIDTH = (600);
var SM_MAX_WIDTH = (300);
var Y_BOUNDARY_HEIGHT = (150);
var vw_width = window.innerWidth;
var vw_height = window.innerHeight;
var vw_max_width = (vw_width - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect));
var vw_max_height = (vw_height - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect));
var vw_max_height_SINGLEQUOTE_ = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect);
var sm_QMARK_ = (vw_width < (415));
var max_height = (function (){var x__5131__auto__ = (vw_max_height - (20));
var y__5132__auto__ = MAX_HEIGHT;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var max_height_SINGLEQUOTE_ = (function (){var x__5131__auto__ = (vw_max_height_SINGLEQUOTE_ - (70));
var y__5132__auto__ = MAX_HEIGHT_SINGLEQUOTE_;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var max_width = ((sm_QMARK_)?SM_MAX_WIDTH:(function (){var x__5131__auto__ = (function (){var x__5128__auto__ = (400);
var y__5129__auto__ = (vw_max_width / (2));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var y__5132__auto__ = MAX_WIDTH;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var offset_top = (24);
var to_max_height = (function (){var G__113904 = ((((cljs.core.seq(rect)) && ((vw_height > max_height))))?(function (){var delta_height = (vw_height - ((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect) + top) + offset_top));
if((delta_height < max_height)){
return ((function (){var x__5128__auto__ = ((2) * offset_top);
var y__5129__auto__ = delta_height;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})() - (16));
} else {
return max_height;
}
})():max_height);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(modal_name,"commands")){
var x__5131__auto__ = G__113904;
var y__5132__auto__ = (500);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
} else {
return G__113904;
}
})();
var right_sidebar_QMARK_ = new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var editing_key = cljs.core.first(cljs.core.keys(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
var _STAR_el = rum.core.use_ref(null);
var y_overflow_vh_QMARK_ = (((to_max_height < Y_BOUNDARY_HEIGHT)) || (((max_height_SINGLEQUOTE_ - to_max_height) > Y_BOUNDARY_HEIGHT)));
var to_max_height__$1 = ((y_overflow_vh_QMARK_)?max_height_SINGLEQUOTE_:to_max_height);
var pos_rect = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(rect);
if(and__5041__auto__){
return editing_key;
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(frontend.state.get_input())):null);
var y_diff = (cljs.core.truth_(pos_rect)?(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(pos_rect) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)):null);
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),((top + offset_top) + ((cljs.core.int_QMARK_(y_diff))?y_diff:(0))),new cljs.core.Keyword(null,"max-height","max-height",-612563804),to_max_height__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700),new cljs.core.Keyword(null,"width","width",-384071477),"fit-content",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(11)], null),(cljs.core.truth_(set_default_width_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),max_width], null):null),(((vw_max_width <= (left + (cljs.core.truth_(set_default_width_QMARK_)?max_width:(500)))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),(0)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(0)], null))], 0));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = (function (){var and__5041__auto__ = right_sidebar_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = editing_key;
if(cljs.core.truth_(and__5041__auto____$1)){
return document.querySelector("#main-content-container");
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var cnt = temp__5804__auto__;
if(cljs.core.truth_(cnt.contains(document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(editing_key)].join(''))))){
var el = rum.core.deref(_STAR_el);
var ofx = (cnt.scrollWidth - cnt.clientWidth);
if((ofx > (0))){
return (el.style.transform = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("translate(-%spx, %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ofx + (20)),((y_overflow_vh_QMARK_)?"calc(-100% - 2rem)":(0))], 0)));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_sidebar_QMARK_,editing_key,y_overflow_vh_QMARK_], null));

return daiquiri.core.create_element("div",{'ref':_STAR_el,'data-modal-name':modal_name,'onMouseDown':(function (e){
return e.stopPropagation();
}),'style':daiquiri.interpreter.element_attributes(style),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","rounded-md","shadow-lg","absolute-modal",((y_overflow_vh_QMARK_)?"is-overflow-vh-y":"")], null))},[daiquiri.interpreter.interpret(cp)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.editor/absolute-modal");
frontend.components.editor.transition_cp = rum.core.lazy_build(rum.core.build_defc,(function (cp,modal_name,set_default_width_QMARK_){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(frontend.state.sub(new cljs.core.Keyword("editor","action-data","editor/action-data",969703128)));
if(cljs.core.truth_(temp__5804__auto__)){
var pos = temp__5804__auto__;
var G__113907 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-names","class-names",1257115065),"fade",new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(500),new cljs.core.Keyword(null,"exit","exit",351849638),(300)], null)], null);
var G__113908 = frontend.components.editor.absolute_modal(cp,modal_name,set_default_width_QMARK_,pos);
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__113907,G__113908) : frontend.ui.css_transition.call(null,G__113907,G__113908));
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/transition-cp");
frontend.components.editor.image_uploader = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
return daiquiri.core.create_element("div",{'className':"image-uploader"},[daiquiri.core.create_element("input",{'id':"upload-file",'type':"file",'onChange':rum.core.mark_sync_update((function (e){
var files = e.target.files;
return frontend.handler.editor.upload_asset(id,files,format,frontend.handler.editor._STAR_asset_uploading_QMARK_,false);
})),'hidden':true},[]),daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.util.react(frontend.handler.editor._STAR_asset_uploading_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var uploading_QMARK_ = temp__5804__auto__;
var processing = frontend.util.react(frontend.handler.editor._STAR_asset_uploading_process);
return frontend.components.editor.transition_cp(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.align-center.rounded-md.shadow-sm.bg-base-2.px-1.py-1","div.flex.flex-row.align-center.rounded-md.shadow-sm.bg-base-2.px-1.py-1",909846216),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Uploading %s%",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%2d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([processing], 0))], 0)))], null),"upload-file",false);
} else {
return null;
}
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/image-uploader");
frontend.components.editor.set_up_key_down_BANG_ = (function frontend$components$editor$set_up_key_down_BANG_(state,format){
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-matched-handler","not-matched-handler",1162926887),frontend.handler.editor.keydown_not_matched_handler(format)], null));
});
frontend.components.editor.set_up_key_up_BANG_ = (function frontend$components$editor$set_up_key_up_BANG_(state,input,input_id){
return frontend.mixins.on_key_up(state,cljs.core.PersistentArrayMap.EMPTY,frontend.handler.editor.keyup_handler(state,input,input_id));
});
frontend.components.editor.search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.editor.setup_key_listener_BANG_ = (function frontend$components$editor$setup_key_listener_BANG_(state){
var map__113909 = frontend.handler.editor.get_state();
var map__113909__$1 = cljs.core.__destructure_map(map__113909);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113909__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var input_id = id;
var input = goog.dom.getElement(input_id);
frontend.components.editor.set_up_key_down_BANG_(state,format);

return frontend.components.editor.set_up_key_up_BANG_(state,input,input_id);
});
/**
 * Get textarea css class according to it's content
 */
frontend.components.editor.get_editor_style_class = (function frontend$components$editor$get_editor_style_class(block,content,format){
var content__$1 = (cljs.core.truth_(content)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(content):"");
var heading = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block));
var heading__$1 = ((heading === true)?(function (){var x__5131__auto__ = (new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block) + (1));
var y__5132__auto__ = (6);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():heading);
return [(((((content__$1.length > (1000))) || (clojure.string.includes_QMARK_(content__$1,"\n"))))?"multiline-block":"uniline-block")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__113911 = format;
var G__113911__$1 = (((G__113911 instanceof cljs.core.Keyword))?G__113911.fqn:null);
switch (G__113911__$1) {
case "markdown":
if(cljs.core.truth_(heading__$1)){
return ["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading__$1)].join('');
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"# ")){
return "h1";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"## ")){
return "h2";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"### ")){
return "h3";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"#### ")){
return "h4";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"##### ")){
return "h5";
} else {
if(clojure.string.starts_with_QMARK_(content__$1,"###### ")){
return "h6";
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(content__$1,"---\n");
if(and__5041__auto__){
return content__$1.endsWith("\n---");
} else {
return and__5041__auto__;
}
})())){
return "page-properties";
} else {
return "normal-block";

}
}
}
}
}
}
}
}

break;
default:
if(cljs.core.truth_(heading__$1)){
return ["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading__$1)].join('');
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(content__$1,"---\n");
if(and__5041__auto__){
return content__$1.endsWith("\n---");
} else {
return and__5041__auto__;
}
})())){
return "page-properties";
} else {
return "normal-block";

}
}

}
})())].join('');
});
/**
 * Check if the row height of editor textarea is changed, which happens when font-size changed
 */
frontend.components.editor.editor_row_height_unchanged_QMARK_ = (function frontend$components$editor$editor_row_height_unchanged_QMARK_(){
var last_key = frontend.state.get_last_key_code();
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.keycode.enter,new cljs.core.Keyword(null,"key-code","key-code",-1732114304).cljs$core$IFn$_invoke$arity$1(last_key))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.keycode.enter_code,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(last_key))));
});
frontend.components.editor.mock_textarea = rum.core.lazy_build(rum.core.build_defc,(function (content){
return daiquiri.core.create_element("div",{'id':"mock-text",'style':{'width':"100%",'height':"100%",'position':"absolute",'visibility':"hidden",'top':(0),'left':(0)}},[(function (){var content__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"0"].join('');
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$editor$iter__113912(s__113913){
return (new cljs.core.LazySeq(null,(function (){
var s__113913__$1 = s__113913;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__113913__$1);
if(temp__5804__auto__){
var s__113913__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__113913__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__113913__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__113915 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__113914 = (0);
while(true){
if((i__113914 < size__5519__auto__)){
var vec__113916 = cljs.core._nth(c__5518__auto__,i__113914);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113916,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113916,(1),null);
cljs.core.chunk_append(b__113915,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},["0",daiquiri.core.create_element("br",null,null)]):daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},[daiquiri.interpreter.interpret(c)])));

var G__113939 = (i__113914 + (1));
i__113914 = G__113939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__113915),frontend$components$editor$iter__113912(cljs.core.chunk_rest(s__113913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__113915),null);
}
} else {
var vec__113921 = cljs.core.first(s__113913__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113921,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113921,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},["0",daiquiri.core.create_element("br",null,null)]):daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},[daiquiri.interpreter.interpret(c)])),frontend$components$editor$iter__113912(cljs.core.rest(s__113913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,clojure.string.split.cljs$core$IFn$_invoke$arity$2(content__$1,"")));
})());
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
if(cljs.core.truth_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
} else {
try{frontend.handler.editor.handle_last_input();
}catch (e113924){var _e_113940 = e113924;
}}

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),false);

return state;
})], null)], null),"frontend.components.editor/mock-textarea");
frontend.components.editor.animated_modal = rum.core.lazy_build(rum.core.build_defc,(function (modal_name,component,set_default_width_QMARK_){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data());
if(cljs.core.truth_(temp__5804__auto__)){
var pos = temp__5804__auto__;
var G__113927 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),modal_name,new cljs.core.Keyword(null,"class-names","class-names",1257115065),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enter","enter",1792452624),"origin-top-left opacity-0 transform scale-95",new cljs.core.Keyword(null,"enter-done","enter-done",-576645951),"origin-top-left transition opacity-100 transform scale-100",new cljs.core.Keyword(null,"exit","exit",351849638),"origin-top-left transition opacity-0 transform scale-95"], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(0),new cljs.core.Keyword(null,"exit","exit",351849638),(150)], null)], null);
var G__113928 = (function (_){
return frontend.components.editor.absolute_modal(component,modal_name,set_default_width_QMARK_,pos);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__113927,G__113928) : frontend.ui.css_transition.call(null,G__113927,G__113928));
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/animated-modal");
/**
 * React to atom changes, find and render the correct modal
 */
frontend.components.editor.modals = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
var action = frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"commands","commands",161008658))){
return frontend.components.editor.animated_modal("commands",frontend.components.editor.commands(id,format),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497))){
return frontend.components.editor.animated_modal("block-commands",frontend.components.editor.block_commands(id,format),true);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-search","page-search",1842925280),null,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573),null], null), null),action)){
return frontend.components.editor.animated_modal("page-search",frontend.components.editor.page_search(id,format),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-search","block-search",-897517253),action)){
return frontend.components.editor.animated_modal("block-search",frontend.components.editor.block_search(id,format),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template-search","template-search",-1861932888),action)){
return frontend.components.editor.animated_modal("template-search",frontend.components.editor.template_search(id,format),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-search","property-search",1730602043),action)){
return frontend.components.editor.animated_modal("property-search",frontend.components.editor.property_search(id),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-value-search","property-value-search",1985137335),action)){
return frontend.components.editor.animated_modal("property-value-search",frontend.components.editor.property_value_search(id),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datepicker","datepicker",821741450),action)){
return frontend.components.editor.animated_modal("date-picker",frontend.components.datetime.date_picker(id,format,null),false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-code-block-mode","select-code-block-mode",1751512020),action)){
return frontend.components.editor.animated_modal("select-code-block-mode",frontend.components.editor.code_block_mode_picker(id,format),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),action)){
return frontend.components.editor.animated_modal("input",frontend.components.editor.input(id,(function (command,m){
return frontend.handler.editor.handle_command_input(command,id,format,m);
}),(function (){
return frontend.handler.editor.handle_command_input_close(id);
})),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zotero","zotero",878834781),action)){
return frontend.components.editor.animated_modal("zotero-search",frontend.extensions.zotero.zotero_search(id),false);
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/modals");
frontend.components.editor.box = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__113929,id,_config){
var map__113930 = p__113929;
var map__113930__$1 = cljs.core.__destructure_map(map__113930);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113930__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113930__$1,new cljs.core.Keyword(null,"block","block",664686210));
var content = frontend.state.sub_edit_content(id);
var heading_class = frontend.components.editor.get_editor_style_class(block,content,format);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["editor-inner",(cljs.core.truth_(block)?"block-editor":"non-block-editor")], null))},[frontend.ui.ls_textarea(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cacheMeasurements","cacheMeasurements",-1280071997),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"minRows","minRows",-1979722096),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[frontend.components.editor.editor_row_height_unchanged_QMARK_(),(function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),frontend.handler.editor.editor_on_click_BANG_(id),frontend.handler.paste.editor_on_paste_BANG_(id),((frontend.state.enable_grammarly_QMARK_())?(2):(1)),id,heading_class,false,frontend.handler.editor.editor_on_change_BANG_(block,id,frontend.components.editor.search_timeout)])),frontend.components.editor.mock_textarea(content),frontend.components.editor.modals(id,format),(cljs.core.truth_(format)?frontend.components.editor.image_uploader(id,format):null)]);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.editor","id","frontend.components.editor/id",1375337451),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.state.set_editor_args_BANG_(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));

return state;
})], null),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1(frontend.components.editor.setup_key_listener_BANG_),frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449)),frontend.handler.editor.lifecycle.lifecycle], null),"frontend.components.editor/box");

//# sourceMappingURL=frontend.components.editor.js.map
