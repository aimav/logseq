goog.provide('frontend.components.right_sidebar');
frontend.components.right_sidebar.toggle = rum.core.lazy_build(rum.core.build_defc,(function (){
if(frontend.util.sm_breakpoint_QMARK_()){
return null;
} else {
return frontend.ui.with_shortcut(new cljs.core.Keyword("ui","toggle-right-sidebar","ui/toggle-right-sidebar",-1502060890),"left",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.icon.toggle-right-sidebar","button.button.icon.toggle-right-sidebar",-1937054353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","toggle-right-sidebar","right-side-bar/toggle-right-sidebar",-89605312)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_right_sidebar_BANG_], null),frontend.ui.icon("layout-sidebar-right",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null));
}
}),null,"frontend.components.right-sidebar/toggle");
frontend.components.right_sidebar.block_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,idx,block){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return frontend.components.page.page(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)], null),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword("sidebar","idx","sidebar/idx",-1047236867),idx,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/block-cp");
frontend.components.right_sidebar.page_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,page_name){
return frontend.components.page.page(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null)], null),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/page-cp");
frontend.components.right_sidebar.contents = rum.core.lazy_build(rum.core.build_defc,(function (){
var attrs118613 = (function (){var temp__5804__auto__ = (function (){var G__118614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),"contents"], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__118614) : frontend.db.entity.call(null,G__118614));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var contents = temp__5804__auto__;
return frontend.components.page.contents_page(contents);
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118613))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents","flex-col","flex","ml-3"], null)], null),attrs118613], 0))):{'className':"contents flex-col flex ml-3"}),((cljs.core.map_QMARK_(attrs118613))?null:[daiquiri.interpreter.interpret(attrs118613)]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.right-sidebar/contents");
frontend.components.right_sidebar.shortcut_settings = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"contents flex-col flex ml-3"},[frontend.components.shortcut_help.shortcut_page(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-title?","show-title?",1855789994),false], null))]);
}),null,"frontend.components.right-sidebar/shortcut-settings");
frontend.components.right_sidebar.block_with_breadcrumb = (function frontend$components$right_sidebar$block_with_breadcrumb(repo,block,idx,sidebar_key,ref_QMARK_){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(ref_QMARK_)?"ml-8":null)], null),frontend.ui.icon("block",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.components.block.breadcrumb(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"block-parent",new cljs.core.Keyword(null,"block?","block?",1102479923),true,new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565),sidebar_key], null),repo,block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),false], null))], null),frontend.components.right_sidebar.block_cp(repo,idx,block)], null);
} else {
return null;
}
});
frontend.components.right_sidebar.history_action_info = rum.core.lazy_build(rum.core.build_defc,(function (p__118633){
var vec__118634 = p__118633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118634,(1),null);
if(cljs.core.truth_(v)){
return daiquiri.core.create_element("div",{'className':"ml-4"},[frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ml-4",".ml-4",1225376996),(function (){var G__118646 = k;
var G__118646__$1 = (((G__118646 instanceof cljs.core.Keyword))?G__118646.fqn:null);
switch (G__118646__$1) {
case "tx-id":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".my-1",".my-1",1627842754),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code.pre-wrap-white-space.bg-base-4","pre.code.pre-wrap-white-space.bg-base-4",-650982847),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null)], null);

break;
case "blocks":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".my-1",".my-1",1627842754),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code.pre-wrap-white-space.bg-base-4","pre.code.pre-wrap-white-space.bg-base-4",-650982847),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block)], null)], null);
}),v);

break;
case "txs":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118647){
var vec__118648 = p__118647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118648,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118648,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118648,(2),null);
if(cljs.core.truth_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code.pre-wrap-white-space.bg-base-4","pre.code.pre-wrap-white-space.bg-base-4",-650982847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)], null);
} else {
return null;
}
}),v);

break;
default:
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118651){
var vec__118652 = p__118651;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118652,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118652,(1),null);
if(cljs.core.truth_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code.pre-wrap-white-space.bg-base-4","pre.code.pre-wrap-white-space.bg-base-4",-650982847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," "], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)], null);
} else {
return null;
}
}),v);

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true], null))]);
} else {
return null;
}
}),null,"frontend.components.right-sidebar/history-action-info");
frontend.components.right_sidebar.history_stack = rum.core.lazy_build(rum.core.build_defc,(function (label,stack){
return daiquiri.core.create_element("div",{'className':"ml-4"},[frontend.ui.foldable(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label," (",cljs.core.count(stack),")"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ml-4",".ml-4",1225376996),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(item)))].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.components.right_sidebar.history_action_info,item),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true], null))], null);
}),stack),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true], null))]);
}),null,"frontend.components.right-sidebar/history-stack");
frontend.components.right_sidebar.history = rum.core.lazy_build(rum.core.build_defc,(function (){
var state = frontend.modules.editor.undo_redo.get_state();
var page_only_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050));
return daiquiri.core.create_element("div",{'className':"ml-4"},[(function (){var attrs118655 = (cljs.core.truth_(page_only_mode_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","history-pageonly","right-side-bar/history-pageonly",1416441705)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","history-global","right-side-bar/history-global",2058109987)], 0)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118655))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-3","font-bold"], null)], null),attrs118655], 0))):{'className':"ml-3 font-bold"}),((cljs.core.map_QMARK_(attrs118655))?null:[daiquiri.interpreter.interpret(attrs118655)]));
})(),daiquiri.core.create_element("div",{'className':"p-4"},[daiquiri.core.create_element("div",{'className':"ml-4 mb-2"},[frontend.components.right_sidebar.history_stack(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","history-undos","right-side-bar/history-undos",-527294721)], 0)),rum.core.react(new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892).cljs$core$IFn$_invoke$arity$1(state))),frontend.components.right_sidebar.history_stack(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","history-redos","right-side-bar/history-redos",-1913814742)], 0)),rum.core.react(new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(state)))])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/history");
frontend.components.right_sidebar.build_sidebar_item = (function frontend$components$right_sidebar$build_sidebar_item(repo,idx,db_id,block_type,_STAR_db_id,init_key){
var G__118656 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(block_type);
var G__118656__$1 = (((G__118656 instanceof cljs.core.Keyword))?G__118656.fqn:null);
switch (G__118656__$1) {
case "contents":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("list-details",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","contents","right-side-bar/contents",-293331541)], 0))], null),frontend.components.right_sidebar.contents()], null);

break;
case "help":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("help",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","help","right-side-bar/help",432037932)], 0))], null),frontend.components.onboarding.help()], null);

break;
case "page-graph":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("hierarchy",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","page-graph","right-side-bar/page-graph",1357852608)], 0))], null),frontend.components.page.page_graph()], null);

break;
case "history":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("history",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","history","right-side-bar/history",-836799686)], 0))], null),frontend.components.right_sidebar.history()], null);

break;
case "block-ref":
var lookup = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),db_id], null));
var temp__5804__auto__ = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,lookup) : frontend.db.entity.call(null,repo,lookup));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","block-ref","right-side-bar/block-ref",-642763962)], 0)),frontend.components.right_sidebar.block_with_breadcrumb(repo,block,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),true)], null);
} else {
return null;
}

break;
case "block":
var lookup = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),db_id], null));
var temp__5804__auto__ = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,lookup) : frontend.db.entity.call(null,repo,lookup));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return frontend.components.right_sidebar.block_with_breadcrumb(repo,block,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),false);
} else {
return null;
}

break;
case "page":
var lookup = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),db_id], null));
var page = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,lookup) : frontend.db.entity.call(null,repo,lookup));
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.page-title",".flex.items-center.page-title",345752768),(function (){var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var icon = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".text-md.mr-2",".text-md.mr-2",750588534),icon], null);
} else {
return frontend.ui.icon(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("whiteboard",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page)))?"whiteboard":"page"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null));
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.overflow-hidden.text-ellipsis","span.overflow-hidden.text-ellipsis",1998457561),frontend.db.model.get_page_original_name(page_name)], null)], null),frontend.components.right_sidebar.page_cp(repo,page_name)], null);

break;
case "search":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center.page-title",".flex.items-center.page-title",345752768),frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),(function (){var input = rum.core.react(_STAR_db_id);
var input_SINGLEQUOTE_ = ((clojure.string.blank_QMARK_(input))?"Blank input":input);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.overflow-hidden.text-ellipsis","span.overflow-hidden.text-ellipsis",1998457561),input_SINGLEQUOTE_], null);
})()], null),rum.core.with_key(frontend.components.cmdk.cmdk_block(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-input","initial-input",1864686534),db_id,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword(null,"on-input-change","on-input-change",-1203383147),(function (new_value){
return cljs.core.reset_BANG_(_STAR_db_id,new_value);
}),new cljs.core.Keyword(null,"on-input-blur","on-input-blur",938716471),(function (new_value){
return frontend.state.sidebar_replace_block_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new_value,block_type], null));
})], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(init_key))], null);

break;
case "page-slide-view":
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.entity.call(null,db_id)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-title","a.page-title",-1585051360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null))], null),frontend.db.model.get_page_original_name(page_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.slide.mt-2","div.ml-2.slide.mt-2",-576848084),frontend.extensions.slide.slide(page_name)], null)], null);

break;
case "shortcut-settings":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-center",".flex.items-center",-697647768),frontend.ui.icon("command",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-2"], null)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","shortcuts","help/shortcuts",1722445217)], 0))], null),frontend.components.right_sidebar.shortcut_settings()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null);

}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.right_sidebar !== 'undefined') && (typeof frontend.components.right_sidebar._STAR_drag_to !== 'undefined')){
} else {
frontend.components.right_sidebar._STAR_drag_to = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.right_sidebar !== 'undefined') && (typeof frontend.components.right_sidebar._STAR_drag_from !== 'undefined')){
} else {
frontend.components.right_sidebar._STAR_drag_from = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.right_sidebar.x_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (db_id,idx,type,collapsed_QMARK_,block_count,toggle_fn,as_dropdown_QMARK_){
var menu_content = (cljs.core.truth_(as_dropdown_QMARK_)?logseq.shui.ui.dropdown_menu_content:logseq.shui.ui.context_menu_content);
var menu_item = (cljs.core.truth_(as_dropdown_QMARK_)?logseq.shui.ui.dropdown_menu_item:logseq.shui.ui.context_menu_content);
var multi_items_QMARK_ = (block_count > (1));
return daiquiri.interpreter.interpret((function (){var G__118688 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"class","class",-2030961996),"w-48",new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
var G__118689 = (function (){var G__118701 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__118702 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close","right-side-bar/pane-close",1498022936)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118701,G__118702) : menu_item.call(null,G__118701,G__118702));
})();
var G__118690 = ((multi_items_QMARK_)?(function (){var G__118703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_rest_BANG_(db_id);
})], null);
var G__118704 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close-others","right-side-bar/pane-close-others",2036389555)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118703,G__118704) : menu_item.call(null,G__118703,G__118704));
})():null);
var G__118691 = ((multi_items_QMARK_)?(function (){var G__118705 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.clear_sidebar_blocks_BANG_();

return frontend.state.hide_right_sidebar_BANG_();
})], null);
var G__118706 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close-all","right-side-bar/pane-close-all",-2046824627)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118705,G__118706) : menu_item.call(null,G__118705,G__118706));
})():null);
var G__118692 = ((((cljs.core.not(collapsed_QMARK_)) && (multi_items_QMARK_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null):null);
var G__118693 = (cljs.core.truth_(collapsed_QMARK_)?null:(function (){var G__118707 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
})], null);
var G__118708 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-collapse","right-side-bar/pane-collapse",1078755450)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118707,G__118708) : menu_item.call(null,G__118707,G__118708));
})());
var G__118694 = ((multi_items_QMARK_)?(function (){var G__118709 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_collapse_rest_BANG_(db_id);
})], null);
var G__118710 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-collapse-others","right-side-bar/pane-collapse-others",580764536)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118709,G__118710) : menu_item.call(null,G__118709,G__118710));
})():null);
var G__118695 = ((multi_items_QMARK_)?(function (){var G__118711 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_set_collapsed_all_BANG_(true);
})], null);
var G__118712 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-collapse-all","right-side-bar/pane-collapse-all",341880617)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118711,G__118712) : menu_item.call(null,G__118711,G__118712));
})():null);
var G__118696 = (cljs.core.truth_((function (){var and__5041__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return multi_items_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null):null);
var G__118697 = (cljs.core.truth_(collapsed_QMARK_)?(function (){var G__118713 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
})], null);
var G__118714 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-expand","right-side-bar/pane-expand",-42815216)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118713,G__118714) : menu_item.call(null,G__118713,G__118714));
})():null);
var G__118698 = ((multi_items_QMARK_)?(function (){var G__118715 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_set_collapsed_all_BANG_(false);
})], null);
var G__118716 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-expand-all","right-side-bar/pane-expand-all",1422902443)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118715,G__118716) : menu_item.call(null,G__118715,G__118716));
})():null);
var G__118699 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.menu-separator","hr.menu-separator",-527266614)], null):null);
var G__118700 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?(function (){var name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.entity.call(null,db_id)));
var G__118717 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(frontend.db.model.whiteboard_page_QMARK_(name))?reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null)):reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null)))], null);
var G__118718 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-open-as-page","right-side-bar/pane-open-as-page",-400676304)], 0));
return (menu_item.cljs$core$IFn$_invoke$arity$2 ? menu_item.cljs$core$IFn$_invoke$arity$2(G__118717,G__118718) : menu_item.call(null,G__118717,G__118718));
})():null);
return (menu_content.cljs$core$IFn$_invoke$arity$13 ? menu_content.cljs$core$IFn$_invoke$arity$13(G__118688,G__118689,G__118690,G__118691,G__118692,G__118693,G__118694,G__118695,G__118696,G__118697,G__118698,G__118699,G__118700) : menu_content.call(null,G__118688,G__118689,G__118690,G__118691,G__118692,G__118693,G__118694,G__118695,G__118696,G__118697,G__118698,G__118699,G__118700));
})());
}),null,"frontend.components.right-sidebar/x-menu-content");
frontend.components.right_sidebar.drop_indicator = rum.core.lazy_build(rum.core.build_defc,(function (idx,drag_to){
return daiquiri.core.create_element("div",{'onDragEnter':(function (){
if(cljs.core.truth_(drag_to)){
return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,idx);
} else {
return null;
}
}),'onDragOver':frontend.util.stop,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sidebar-drop-indicator",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,drag_to))?"drag-over":null)], null))},[]);
}),null,"frontend.components.right-sidebar/drop-indicator");
frontend.components.right_sidebar.drop_area = rum.core.lazy_build(rum.core.build_defc,(function (idx){
return daiquiri.core.create_element("div",{'onDragOver':frontend.util.stop,'className':"sidebar-item-drop-area"},[daiquiri.core.create_element("div",{'onDragEnter':(function (){
return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,(idx - (1)));
}),'className':"sidebar-item-drop-area-overlay top"},[]),daiquiri.core.create_element("div",{'onDragEnter':(function (){
return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,idx);
}),'className':"sidebar-item-drop-area-overlay bottom"},[])]);
}),null,"frontend.components.right-sidebar/drop-area");
frontend.components.right_sidebar.inner_component = rum.core.lazy_build(rum.core.build_defc,(function (component,_should_update_QMARK_){
return daiquiri.interpreter.interpret(component);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (_prev_state,state){
return cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
})], null)], null),"frontend.components.right-sidebar/inner-component");
frontend.components.right_sidebar.sidebar_item = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo,idx,db_id,block_type,block_count){
var drag_from = rum.core.react(frontend.components.right_sidebar._STAR_drag_from);
var drag_to = rum.core.react(frontend.components.right_sidebar._STAR_drag_to);
var item = frontend.components.right_sidebar.build_sidebar_item(repo,idx,db_id,block_type,new cljs.core.Keyword("frontend.components.right-sidebar","db-id","frontend.components.right-sidebar/db-id",545804022).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("frontend.components.right-sidebar","init-key","frontend.components.right-sidebar/init-key",427386561).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(item)){
var collapsed_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null));
var attrs118719 = (((idx === (0)))?frontend.components.right_sidebar.drop_indicator((idx - (1)),drag_to):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs118719))?daiquiri.interpreter.element_attributes(attrs118719):null),((cljs.core.map_QMARK_(attrs118719))?[daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","sidebar-item","content","color-level","rounded-md","shadow-lg",["item-type-",cljs.core.name(block_type)].join(''),(cljs.core.truth_(collapsed_QMARK_)?"collapsed":null)], null))},[(function (){var vec__118720 = item;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118720,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118720,(1),null);
return daiquiri.core.create_element("div",{'className':"flex flex-col w-full relative"},[daiquiri.core.create_element("div",{'draggable':true,'onDragStart':(function (event){
frontend.handler.editor.block__GT_data_transfer_BANG_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.entity.call(null,db_id))),event);

return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_from,idx);
}),'onDragEnd':(function (_event){
if(cljs.core.truth_(drag_to)){
frontend.state.sidebar_move_block_BANG_(idx,drag_to);
} else {
}

cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,null);

return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_from,null);
}),'onMouseUp':(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.nativeEvent.which,(2))){
return frontend.state.sidebar_remove_block_BANG_(idx);
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","pr-2","sidebar-item-header","color-level","rounded-t-md",(cljs.core.truth_(collapsed_QMARK_)?"rounded-b-md":null)], null))},[daiquiri.core.create_element("button",{'aria-expanded':cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not(collapsed_QMARK_)),'id':["sidebar-panel-header-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'aria-controls':["sidebar-panel-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'onClick':(function (event){
frontend.util.stop(event);

return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
}),'className':"flex flex-row p-2 items-center w-full overflow-hidden"},[daiquiri.core.create_element("span",{'className':"opacity-50 hover:opacity-100 flex items-center pr-1"},[frontend.ui.rotating_arrow(collapsed_QMARK_)]),(function (){var attrs118736 = title;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118736))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1","font-medium","overflow-hidden","whitespace-nowrap"], null)], null),attrs118736], 0))):{'className':"ml-1 font-medium overflow-hidden whitespace-nowrap"}),((cljs.core.map_QMARK_(attrs118736))?null:[daiquiri.interpreter.interpret(attrs118736)]));
})()]),(function (){var attrs118735 = (function (){var G__118737 = (function (){var G__118739 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__118740 = (function (){var G__118741 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-more","right-side-bar/pane-more",-1214725157)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
var G__118742 = frontend.ui.icon("dots");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__118741,G__118742) : logseq.shui.ui.button.call(null,G__118741,G__118742));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__118739,G__118740) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__118739,G__118740));
})();
var G__118738 = frontend.components.right_sidebar.x_menu_content(db_id,idx,block_type,collapsed_QMARK_,block_count,(function (){
return cljs.core.List.EMPTY;
}),true);
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__118737,G__118738) : logseq.shui.ui.dropdown_menu.call(null,G__118737,G__118738));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118735))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-actions","flex","items-center"], null)], null),attrs118735], 0))):{'className':"item-actions flex items-center"}),((cljs.core.map_QMARK_(attrs118735))?[daiquiri.interpreter.interpret((function (){var G__118745 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close","right-side-bar/pane-close",1498022936)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__118746 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__118745,G__118746) : logseq.shui.ui.button.call(null,G__118745,G__118746));
})())]:[daiquiri.interpreter.interpret(attrs118735),daiquiri.interpreter.interpret((function (){var G__118749 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close","right-side-bar/pane-close",1498022936)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__118750 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__118749,G__118750) : logseq.shui.ui.button.call(null,G__118749,G__118750));
})())]));
})()]),daiquiri.core.create_element("div",{'role':"region",'id':["sidebar-panel-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'aria-labelledby':["sidebar-panel-header-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),collapsed_QMARK_,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.not(collapsed_QMARK_),new cljs.core.Keyword(null,"p-4","p-4",1064209260),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"contents","contents",-1567174023),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type))),new cljs.core.Keyword(null,"pt-4","pt-4",989250466),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type))),new cljs.core.Keyword(null,"p-1","p-1",190484676),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type)))], null)], null))], null))},[frontend.components.right_sidebar.inner_component(component,cljs.core.not(drag_from))]),(cljs.core.truth_(drag_from)?frontend.components.right_sidebar.drop_area(idx):null)]);
})()]),frontend.components.right_sidebar.drop_indicator(idx,drag_to)]:[daiquiri.interpreter.interpret(attrs118719),daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","sidebar-item","content","color-level","rounded-md","shadow-lg",["item-type-",cljs.core.name(block_type)].join(''),(cljs.core.truth_(collapsed_QMARK_)?"collapsed":null)], null))},[(function (){var vec__118751 = item;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118751,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118751,(1),null);
return daiquiri.core.create_element("div",{'className':"flex flex-col w-full relative"},[daiquiri.core.create_element("div",{'draggable':true,'onDragStart':(function (event){
frontend.handler.editor.block__GT_data_transfer_BANG_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.entity.call(null,db_id))),event);

return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_from,idx);
}),'onDragEnd':(function (_event){
if(cljs.core.truth_(drag_to)){
frontend.state.sidebar_move_block_BANG_(idx,drag_to);
} else {
}

cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_to,null);

return cljs.core.reset_BANG_(frontend.components.right_sidebar._STAR_drag_from,null);
}),'onMouseUp':(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.nativeEvent.which,(2))){
return frontend.state.sidebar_remove_block_BANG_(idx);
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","justify-between","pr-2","sidebar-item-header","color-level","rounded-t-md",(cljs.core.truth_(collapsed_QMARK_)?"rounded-b-md":null)], null))},[daiquiri.core.create_element("button",{'aria-expanded':cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not(collapsed_QMARK_)),'id':["sidebar-panel-header-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'aria-controls':["sidebar-panel-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'onClick':(function (event){
frontend.util.stop(event);

return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
}),'className':"flex flex-row p-2 items-center w-full overflow-hidden"},[daiquiri.core.create_element("span",{'className':"opacity-50 hover:opacity-100 flex items-center pr-1"},[frontend.ui.rotating_arrow(collapsed_QMARK_)]),(function (){var attrs118767 = title;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118767))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1","font-medium","overflow-hidden","whitespace-nowrap"], null)], null),attrs118767], 0))):{'className':"ml-1 font-medium overflow-hidden whitespace-nowrap"}),((cljs.core.map_QMARK_(attrs118767))?null:[daiquiri.interpreter.interpret(attrs118767)]));
})()]),(function (){var attrs118766 = (function (){var G__118768 = (function (){var G__118770 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),true], null);
var G__118771 = (function (){var G__118772 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-more","right-side-bar/pane-more",-1214725157)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
var G__118773 = frontend.ui.icon("dots");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__118772,G__118773) : logseq.shui.ui.button.call(null,G__118772,G__118773));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__118770,G__118771) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__118770,G__118771));
})();
var G__118769 = frontend.components.right_sidebar.x_menu_content(db_id,idx,block_type,collapsed_QMARK_,block_count,(function (){
return cljs.core.List.EMPTY;
}),true);
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__118768,G__118769) : logseq.shui.ui.dropdown_menu.call(null,G__118768,G__118769));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118766))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-actions","flex","items-center"], null)], null),attrs118766], 0))):{'className':"item-actions flex items-center"}),((cljs.core.map_QMARK_(attrs118766))?[daiquiri.interpreter.interpret((function (){var G__118776 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close","right-side-bar/pane-close",1498022936)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__118777 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__118776,G__118777) : logseq.shui.ui.button.call(null,G__118776,G__118777));
})())]:[daiquiri.interpreter.interpret(attrs118766),daiquiri.interpreter.interpret((function (){var G__118780 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","pane-close","right-side-bar/pane-close",1498022936)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
})], null);
var G__118781 = frontend.ui.icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__118780,G__118781) : logseq.shui.ui.button.call(null,G__118780,G__118781));
})())]));
})()]),daiquiri.core.create_element("div",{'role':"region",'id':["sidebar-panel-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'aria-labelledby':["sidebar-panel-header-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),collapsed_QMARK_,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.not(collapsed_QMARK_),new cljs.core.Keyword(null,"p-4","p-4",1064209260),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"contents","contents",-1567174023),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type))),new cljs.core.Keyword(null,"pt-4","pt-4",989250466),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type))),new cljs.core.Keyword(null,"p-1","p-1",190484676),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734),null], null), null),block_type)))], null)], null))], null))},[frontend.components.right_sidebar.inner_component(component,cljs.core.not(drag_from))]),(cljs.core.truth_(drag_from)?frontend.components.right_sidebar.drop_area(idx):null)]);
})()]),frontend.components.right_sidebar.drop_indicator(idx,drag_to)]));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.right-sidebar","db-id","frontend.components.right-sidebar/db-id",545804022),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.right-sidebar","init-key","frontend.components.right-sidebar/init-key",427386561),cljs.core.random_uuid()], 0));
})], null)], null),"frontend.components.right-sidebar/sidebar-item");
frontend.components.right_sidebar.get_page = (function frontend$components$right_sidebar$get_page(match){
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var page = (function (){var G__118782 = route_name;
var G__118782__$1 = (((G__118782 instanceof cljs.core.Keyword))?G__118782.fqn:null);
switch (G__118782__$1) {
case "page":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));

break;
case "file":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null));

break;
default:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();

}
})();
if(cljs.core.truth_(page)){
return clojure.string.lower_case(page);
} else {
return null;
}
});
frontend.components.right_sidebar.get_current_page = (function frontend$components$right_sidebar$get_current_page(){
var match = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return frontend.components.right_sidebar.get_page(match);
});
frontend.components.right_sidebar.sidebar_resizer = rum.core.lazy_build(rum.core.build_defc,(function (sidebar_open_QMARK_,sidebar_id,handler_position){
var el_ref = rum.core.use_ref(null);
var min_px_width = (320);
var min_ratio = 0.1;
var max_ratio = 0.7;
var keyboard_step = (5);
var add_resizing_class = (function (){
return document.documentElement.classList.add("is-resizing-buf");
});
var remove_resizing_class = (function (){
document.documentElement.classList.remove("is-resizing-buf");

return cljs.core.reset_BANG_(frontend.handler.ui._STAR_right_sidebar_resized_at,Date.now());
});
var set_width_BANG_ = (function (ratio){
if(cljs.core.truth_(el_ref)){
var value = (ratio * (100));
var width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
rum.core.deref(el_ref).setAttribute("aria-valuenow",value);

return frontend.handler.ui.persist_right_sidebar_width_BANG_(width);
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto___118836 = (function (){var and__5041__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5041__auto__){
return rum.core.deref(el_ref);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___118836)){
var el_118837 = temp__5804__auto___118836;
interact(el_118837).draggable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var width = document.documentElement.clientWidth;
var min_ratio__$1 = (function (){var x__5128__auto__ = min_ratio;
var y__5129__auto__ = (min_px_width / width);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var sidebar_el = document.getElementById(sidebar_id);
var offset = e.pageX;
var ratio = (offset / width).toFixed((6));
var ratio__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_position,new cljs.core.Keyword(null,"west","west",708776677)))?((1) - ratio):ratio);
var cursor_class = ["cursor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.name(handler_position))),"-resize"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el_118837.getAttribute("data-expanded"),"true")){
if((ratio__$1 < (min_ratio__$1 / (2)))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
if((ratio__$1 < min_ratio__$1)){
return document.documentElement.classList.add(cursor_class);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (ratio__$1 < max_ratio);
if(and__5041__auto__){
return sidebar_el;
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(sidebar_el)){
return (function (){
return document.documentElement.classList.remove(cursor_class);
})(set_width_BANG_(ratio__$1));
} else {
return null;
}
} else {
return (function (){
return document.documentElement.classList.remove(cursor_class);
});

}
}
}
} else {
if((ratio__$1 > (min_ratio__$1 / (2)))){
return frontend.state.open_right_sidebar_BANG_();
} else {
return null;
}
}
})], null)], null))).styleCursor(false).on("dragstart",add_resizing_class).on("dragend",remove_resizing_class).on("keydown",(function (e){
var temp__5804__auto____$1 = document.getElementById(sidebar_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var sidebar_el = temp__5804__auto____$1;
var width = document.documentElement.clientWidth;
var min_ratio__$1 = (function (){var x__5128__auto__ = min_ratio;
var y__5129__auto__ = (min_px_width / width);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var keyboard_step__$1 = (function (){var G__118783 = e.code;
switch (G__118783) {
case "ArrowLeft":
return (- keyboard_step);

break;
case "ArrowRight":
return keyboard_step;

break;
default:
return (0);

}
})();
var offset = (sidebar_el.getBoundingClientRect().x + keyboard_step__$1);
var ratio = (offset / width).toFixed((6));
var ratio__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(handler_position,new cljs.core.Keyword(null,"west","west",708776677)))?((1) - ratio):ratio);
if((((ratio__$1 > min_ratio__$1)) && ((((ratio__$1 < max_ratio)) && ((!((keyboard_step__$1 === (0))))))))){
add_resizing_class();

return set_width_BANG_(ratio__$1);
} else {
return null;
}
} else {
return null;
}
})).on("keyup",remove_resizing_class);
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return setTimeout((function (){
return cljs.core.reset_BANG_(frontend.handler.ui._STAR_right_sidebar_resized_at,Date.now());
}),(300));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar_open_QMARK_], null));

return daiquiri.core.create_element("div",{'role':"separator",'data-expanded':sidebar_open_QMARK_,'tabIndex':"0",'ref':el_ref,'aria-valuemax':(max_ratio * (100)),'className':"resizer",'aria-orientation':"vertical",'aria-label':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","separator","right-side-bar/separator",-220656147)], 0)),'aria-valuemin':(min_ratio * (100)),'aria-valuenow':(50)},[]);
}),null,"frontend.components.right-sidebar/sidebar-resizer");
frontend.components.right_sidebar.sidebar_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo,t,blocks){
var _STAR_anim_finished_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.right-sidebar","anim-finished?","frontend.components.right-sidebar/anim-finished?",-1735910019));
var block_count = cljs.core.count(blocks);
return daiquiri.core.create_element("div",{'id':"right-sidebar-container",'className':"cp__right-sidebar-inner flex flex-col h-full"},[daiquiri.core.create_element("div",{'onDragOver':frontend.util.stop,'className':"cp__right-sidebar-scrollable"},[daiquiri.core.create_element("div",{'className':"cp__right-sidebar-topbar flex flex-row justify-between items-center"},[daiquiri.core.create_element("div",{'key':"right-sidebar-settings",'className':"cp__right-sidebar-settings hide-scrollbar gap-1"},[daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("button",{'onClick':(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"contents",new cljs.core.Keyword(null,"contents","contents",-1567174023));
}),'className':"button cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","contents","right-side-bar/contents",-293331541)) : t.call(null,new cljs.core.Keyword("right-side-bar","contents","right-side-bar/contents",-293331541))))])]),daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("button",{'onClick':(function (){
var temp__5804__auto__ = frontend.components.right_sidebar.get_current_page();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
return frontend.state.sidebar_add_block_BANG_(repo,page,new cljs.core.Keyword(null,"page-graph","page-graph",1691909522));
} else {
return null;
}
}),'className':"button cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","page-graph","right-side-bar/page-graph",1357852608)) : t.call(null,new cljs.core.Keyword("right-side-bar","page-graph","right-side-bar/page-graph",1357852608))))])]),daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("button",{'onClick':(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"help",new cljs.core.Keyword(null,"help","help",-439233446));
}),'className':"button cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","help","right-side-bar/help",432037932)) : t.call(null,new cljs.core.Keyword("right-side-bar","help","right-side-bar/help",432037932))))])]),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("button",{'onClick':(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"history",new cljs.core.Keyword(null,"history","history",-247395220));
}),'className':"button cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","history","right-side-bar/history",-836799686)) : t.call(null,new cljs.core.Keyword("right-side-bar","history","right-side-bar/history",-836799686))))])]):null)])]),(function (){var attrs118816 = (cljs.core.truth_(cljs.core.deref(_STAR_anim_finished_QMARK_))?(function (){var iter__5520__auto__ = (function frontend$components$right_sidebar$iter__118817(s__118818){
return (new cljs.core.LazySeq(null,(function (){
var s__118818__$1 = s__118818;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118818__$1);
if(temp__5804__auto__){
var s__118818__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118818__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118818__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118820 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118819 = (0);
while(true){
if((i__118819 < size__5519__auto__)){
var vec__118821 = cljs.core._nth(c__5518__auto__,i__118819);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118821,(0),null);
var vec__118824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118821,(1),null);
var repo__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118824,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118824,(1),null);
var block_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118824,(2),null);
cljs.core.chunk_append(b__118820,rum.core.with_key(frontend.components.right_sidebar.sidebar_item(repo__$1,idx,db_id,block_type,block_count),["sidebar-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_id)].join('')));

var G__118839 = (i__118819 + (1));
i__118819 = G__118839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118820),frontend$components$right_sidebar$iter__118817(cljs.core.chunk_rest(s__118818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118820),null);
}
} else {
var vec__118827 = cljs.core.first(s__118818__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118827,(0),null);
var vec__118830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118827,(1),null);
var repo__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118830,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118830,(1),null);
var block_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118830,(2),null);
return cljs.core.cons(rum.core.with_key(frontend.components.right_sidebar.sidebar_item(repo__$1,idx,db_id,block_type,block_count),["sidebar-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_id)].join('')),frontend$components$right_sidebar$iter__118817(cljs.core.rest(s__118818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(blocks));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.opacity-50","span.font-medium.opacity-50",768466648),"Loading ..."], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118816))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sidebar-item-list","flex-1","scrollbar-spacing","px-2"], null)], null),attrs118816], 0))):{'className':"sidebar-item-list flex-1 scrollbar-spacing px-2"}),((cljs.core.map_QMARK_(attrs118816))?null:[daiquiri.interpreter.interpret(attrs118816)]));
})()])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.right-sidebar","anim-finished?","frontend.components.right-sidebar/anim-finished?",-1735910019)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
setTimeout((function (){
return cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.right-sidebar","anim-finished?","frontend.components.right-sidebar/anim-finished?",-1735910019)),true);
}),(300));

return state;
})], null)], null),"frontend.components.right-sidebar/sidebar-inner");
frontend.components.right_sidebar.sidebar = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var blocks = frontend.state.sub_right_sidebar_blocks();
var blocks__$1 = ((cljs.core.empty_QMARK_(blocks))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),"contents",new cljs.core.Keyword(null,"contents","contents",-1567174023),null], null)], null):blocks);
var sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887));
var width = frontend.state.sub(new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300));
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
return daiquiri.core.create_element("div",{'id':"right-sidebar",'style':{'width':width},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__right-sidebar","h-screen",(cljs.core.truth_(sidebar_open_QMARK_)?"open":"closed")], null))},[frontend.components.right_sidebar.sidebar_resizer(sidebar_open_QMARK_,"right-sidebar",new cljs.core.Keyword(null,"west","west",708776677)),(cljs.core.truth_(sidebar_open_QMARK_)?frontend.components.right_sidebar.sidebar_inner(repo,frontend.context.i18n.t,blocks__$1):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/sidebar");

//# sourceMappingURL=frontend.components.right_sidebar.js.map
