goog.provide('frontend.handler.route');
/**
 * If `push` is truthy, previous page will be left in history.
 */
frontend.handler.route.redirect_BANG_ = (function frontend$handler$route$redirect_BANG_(p__105463){
var map__105464 = p__105463;
var map__105464__$1 = cljs.core.__destructure_map(map__105464);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105464__$1,new cljs.core.Keyword(null,"to","to",192099007));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105464__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105464__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var push = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105464__$1,new cljs.core.Keyword(null,"push","push",799791267),true);
var route_fn_105487 = (cljs.core.truth_(push)?reitit.frontend.easy.push_state:reitit.frontend.easy.replace_state);
(route_fn_105487.cljs$core$IFn$_invoke$arity$3 ? route_fn_105487.cljs$core$IFn$_invoke$arity$3(to,path_params,query_params) : route_fn_105487.call(null,to,path_params,query_params));

return null;
});
frontend.handler.route.redirect_to_home_BANG_ = (function frontend$handler$route$redirect_to_home_BANG_(var_args){
var G__105466 = arguments.length;
switch (G__105466) {
case 0:
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pub_event_QMARK_){
if(cljs.core.truth_(pub_event_QMARK_)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576)], null));
} else {
}

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}));

(frontend.handler.route.redirect_to_home_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.route.redirect_to_all_pages_BANG_ = (function frontend$handler$route$redirect_to_all_pages_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], null));
});
frontend.handler.route.redirect_to_graph_view_BANG_ = (function frontend$handler$route$redirect_to_graph_view_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"graph","graph",1558099509)], null));
});
frontend.handler.route.redirect_to_all_graphs = (function frontend$handler$route$redirect_to_all_graphs(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
});
frontend.handler.route.redirect_to_whiteboard_dashboard_BANG_ = (function frontend$handler$route$redirect_to_whiteboard_dashboard_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654)], null));
});
if(frontend.util.web_platform_QMARK_){
frontend.handler.route.default_page_route = (function frontend$handler$route$default_page_route(page_name_or_block_uuid){
var block = ((cljs.core.uuid_QMARK_(page_name_or_block_uuid))?frontend.db.model.get_block_by_uuid(page_name_or_block_uuid):null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page-block","page-block",504302814),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null)),new cljs.core.Keyword(null,"block-route-name","block-route-name",1558267328),frontend.db.model.heading_content__GT_route_name(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),((typeof page_name_or_block_uuid === 'string')?(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid) : frontend.util.page_name_sanity_lc.call(null,page_name_or_block_uuid)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid))], null)], null);
}
});
} else {
frontend.handler.route.default_page_route = (function frontend$handler$route$default_page_route(page_name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)], null)], null);
});
}
/**
 * Must ensure `page-name` is dereferenced (not an alias), or it will create a
 *   wrong new page with that name (#3511). page-name can be a block name or uuid
 */
frontend.handler.route.redirect_to_page_BANG_ = (function frontend$handler$route$redirect_to_page_BANG_(var_args){
var G__105468 = arguments.length;
switch (G__105468) {
case 1:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (page_name,p__105469){
var map__105470 = p__105469;
var map__105470__$1 = cljs.core.__destructure_map(map__105470);
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105470__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105470__$1,new cljs.core.Keyword(null,"push","push",799791267));
var click_from_recent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105470__$1,new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464),false);
if(((cljs.core.uuid_QMARK_(page_name)) || (cljs.core.seq(page_name)))){
frontend.handler.recent.add_page_to_recent_BANG_(frontend.state.get_current_repo(),page_name,click_from_recent_QMARK_);

var m = (function (){var G__105471 = frontend.handler.route.default_page_route(page_name);
var G__105471__$1 = (cljs.core.truth_(anchor)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__105471,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null)):G__105471);
if(cljs.core.boolean_QMARK_(push)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__105471__$1,new cljs.core.Keyword(null,"push","push",799791267),push);
} else {
return G__105471__$1;
}
})();
return frontend.handler.route.redirect_BANG_(m);
} else {
return null;
}
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.route.redirect_to_whiteboard_BANG_ = (function frontend$handler$route$redirect_to_whiteboard_BANG_(var_args){
var G__105473 = arguments.length;
switch (G__105473) {
case 1:
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (name){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (name,p__105474){
var map__105475 = p__105474;
var map__105475__$1 = cljs.core.__destructure_map(map__105475);
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105475__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var new_whiteboard_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105475__$1,new cljs.core.Keyword(null,"new-whiteboard?","new-whiteboard?",-360865129));
var click_from_recent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105475__$1,new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464));
if(cljs.core.truth_(new_whiteboard_QMARK_)){
} else {
frontend.state.set_onboarding_whiteboard_BANG_(true);
}

frontend.handler.recent.add_page_to_recent_BANG_(frontend.state.get_current_repo(),name,click_from_recent_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,frontend.state.get_current_whiteboard())){
return frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$1(block_id);
} else {
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null),new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null)], 0))], null));
}
}));

(frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.route.get_title = (function frontend$handler$route$get_title(name,path_params){
var G__105476 = name;
var G__105476__$1 = (((G__105476 instanceof cljs.core.Keyword))?G__105476.fqn:null);
switch (G__105476__$1) {
case "home":
return "Logseq";

break;
case "whiteboards":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654)], 0));

break;
case "repos":
return "Repos";

break;
case "repo-add":
return "Add another repo";

break;
case "graph":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph","graph",1558099509)], 0));

break;
case "all-files":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-files","all-files",1120339891)], 0));

break;
case "all-pages":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], 0));

break;
case "all-journals":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-journals","all-journals",-347015095)], 0));

break;
case "file":
return ["File ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(path_params))].join('');

break;
case "new-page":
return "Create a new page";

break;
case "page":
var name__$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params);
var block_QMARK_ = frontend.util.uuid_string_QMARK_(name__$1);
if(block_QMARK_){
var temp__5802__auto__ = (function (){var G__105477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(name__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105477) : frontend.db.entity.call(null,G__105477));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var block = temp__5802__auto__;
var content = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),frontend.config.get_block_pattern(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block)));
if((cljs.core.count(content) > (48))){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),(48)),"..."].join('');
} else {
return content;
}
} else {
return "Page no longer exists!!";
}
} else {
var page = (function (){var G__105478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(name__$1) : frontend.util.page_name_sanity_lc.call(null,name__$1))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105478) : frontend.db.pull.call(null,G__105478));
})();
var or__5043__auto__ = frontend.util.get_page_original_name(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Logseq";
}
}

break;
case "whiteboard":
var name__$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params);
var block_QMARK_ = frontend.util.uuid_string_QMARK_(name__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((block_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0)):(function (){var page = (function (){var G__105480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(name__$1) : frontend.util.page_name_sanity_lc.call(null,name__$1))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105480) : frontend.db.pull.call(null,G__105480));
})();
var or__5043__auto__ = frontend.util.get_page_original_name(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Logseq";
}
})()))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928)], 0)))].join('');

break;
case "tag":
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params))].join('');

break;
case "diff":
return "Git diff";

break;
case "draw":
return "Draw";

break;
case "settings":
return "Settings";

break;
case "import":
return "Import data into Logseq";

break;
default:
return "Logseq";

}
});
frontend.handler.route.update_page_title_BANG_ = (function frontend$handler$route$update_page_title_BANG_(route){
var map__105481 = route;
var map__105481__$1 = cljs.core.__destructure_map(map__105481);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105481__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105481__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var title = frontend.handler.route.get_title(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),path_params);
var hls_QMARK_ = frontend.extensions.pdf.utils.hls_file_QMARK_(title);
return frontend.util.set_title_BANG_((cljs.core.truth_(hls_QMARK_)?frontend.extensions.pdf.utils.fix_local_asset_pagename(title):title));
});
frontend.handler.route.update_page_label_BANG_ = (function frontend$handler$route$update_page_label_BANG_(route){
var map__105482 = route;
var map__105482__$1 = cljs.core.__destructure_map(map__105482);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105482__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var data_name = temp__5804__auto__;
return (document.body.dataset.page = cljs.core.name(data_name));
} else {
return null;
}
});
frontend.handler.route.jump_to_anchor_BANG_ = (function frontend$handler$route$jump_to_anchor_BANG_(anchor_text){
if(cljs.core.truth_(anchor_text)){
return setTimeout((function (){
return frontend.handler.ui.highlight_element_BANG_(anchor_text);
}),(200));
} else {
return null;
}
});
frontend.handler.route.set_route_match_BANG_ = (function frontend$handler$route$set_route_match_BANG_(route){
var route__$1 = route;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route__$1);

frontend.handler.route.update_page_title_BANG_(route__$1);

frontend.handler.route.update_page_label_BANG_(route__$1);

var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var anchor = temp__5802__auto__;
return frontend.handler.route.jump_to_anchor_BANG_(anchor);
} else {
return setTimeout((function (){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0(),frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0(),false);
}),(100));
}
});
frontend.handler.route.go_to_search_BANG_ = (function frontend$handler$route$go_to_search_BANG_(search_mode){
frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1(false);

if(cljs.core.truth_(search_mode)){
frontend.state.set_search_mode_BANG_(search_mode);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
});
frontend.handler.route.sidebar_journals_BANG_ = (function frontend$handler$route$sidebar_journals_BANG_(){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__105483 = frontend.date.today();
return (frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(G__105483) : frontend.db.get_page.call(null,G__105483));
})()),new cljs.core.Keyword(null,"page","page",849072397));
});
frontend.handler.route.go_to_journals_BANG_ = (function frontend$handler$route$go_to_journals_BANG_(){
frontend.state.set_journals_length_BANG_((3));

var route_105492 = ((frontend.state.custom_home_page_QMARK_())?new cljs.core.Keyword(null,"all-journals","all-journals",-347015095):new cljs.core.Keyword(null,"home","home",-74557309));
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),route_105492], null));

return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
});
frontend.handler.route.redirect_to_file_BANG_ = (function frontend$handler$route$redirect_to_file_BANG_(page){
var temp__5804__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((function (){var G__105484 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__105485 = clojure.string.lower_case(page);
return (frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(G__105485) : frontend.db.get_page_file.call(null,G__105485));
})());
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105484) : frontend.db.entity.call(null,G__105484));
})());
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
return null;
}
});
frontend.handler.route.toggle_between_page_and_file_BANG_ = (function frontend$handler$route$toggle_between_page_and_file_BANG_(_e){
var current_route = frontend.state.get_current_route();
var G__105486 = current_route;
var G__105486__$1 = (((G__105486 instanceof cljs.core.Keyword))?G__105486.fqn:null);
switch (G__105486__$1) {
case "home":
return frontend.handler.route.redirect_to_file_BANG_(frontend.date.today());

break;
case "all-journals":
return frontend.handler.route.redirect_to_file_BANG_(frontend.date.today());

break;
case "page":
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
return frontend.handler.route.redirect_to_file_BANG_(page_name);
} else {
return null;
}

break;
case "file":
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
var temp__5804__auto____$1 = (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page.call(null,path));
if(cljs.core.truth_(temp__5804__auto____$1)){
var page = temp__5804__auto____$1;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page);
} else {
return null;
}
} else {
return null;
}

break;
default:
return null;

}
});

//# sourceMappingURL=frontend.handler.route.js.map
