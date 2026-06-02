goog.provide('frontend.page');
frontend.page.route_view = rum.core.lazy_build(rum.core.build_defc,(function (view,route_match){
return daiquiri.interpreter.interpret((view.cljs$core$IFn$_invoke$arity$1 ? view.cljs$core$IFn$_invoke$arity$1(route_match) : view.call(null,route_match)));
}),null,"frontend.page/route-view");
frontend.page.setup_fns_BANG_ = (function frontend$page$setup_fns_BANG_(){
try{return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frontend.ui.setup_active_keystroke_BANG_(),frontend.ui.setup_viewport_listeners_BANG_());
}catch (e120070){var _e = e120070;
return null;
}});
/**
 * This screen is displayed when the UI has crashed hard. It provides the user
 *   with basic troubleshooting steps to get them back to a working state. This
 *   component is purposefully stupid simple as it needs to render under any number
 *   of broken conditions
 */
frontend.page.helpful_default_error_screen = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'id':"main-container",'className':"cp__sidebar-main-layout flex-1 flex"},[daiquiri.core.create_element("div",{'id':"app-container"},[daiquiri.core.create_element("div",{'id':"left-container"},[daiquiri.core.create_element("div",{'id':"main-container",'className':"cp__sidebar-main-layout flex-1 flex"},[daiquiri.core.create_element("div",{'id':"main-content-container",'className':"scrollbar-spacing w-full flex justify-center"},[daiquiri.core.create_element("div",{'className':"cp__sidebar-main-content"},[daiquiri.core.create_element("div",{'className':"ls-center"},[(function (){var attrs120071 = frontend.ui.icon("bug",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),frontend.ui.icon_size], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120071))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-box","p-1","rounded","mb-3"], null)], null),attrs120071], 0))):{'className':"icon-box p-1 rounded mb-3"}),((cljs.core.map_QMARK_(attrs120071))?null:[daiquiri.interpreter.interpret(attrs120071)]));
})(),(function (){var attrs120072 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","something-went-wrong","page/something-went-wrong",1299552111)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120072))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-xl","font-bold"], null)], null),attrs120072], 0))):{'className':"text-xl font-bold"}),((cljs.core.map_QMARK_(attrs120072))?null:[daiquiri.interpreter.interpret(attrs120072)]));
})(),(function (){var attrs120073 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","logseq-is-having-a-problem","page/logseq-is-having-a-problem",1811118491)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120073))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-2","mb-2"], null)], null),attrs120073], 0))):{'className':"mt-2 mb-2"}),((cljs.core.map_QMARK_(attrs120073))?null:[daiquiri.interpreter.interpret(attrs120073)]));
})(),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex flex-row justify-between align-items mb-2 items-center py-4"},[daiquiri.core.create_element("div",{'className':"flex flex-col items-start"},[(function (){var attrs120077 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"1"], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120077))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-2xs","font-bold","uppercase","toned-down"], null)], null),attrs120077], 0))):{'className':"text-2xs font-bold uppercase toned-down"}),((cljs.core.map_QMARK_(attrs120077))?null:[daiquiri.interpreter.interpret(attrs120077)]));
})(),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"highlighted font-bold"},["Rebuild"]),daiquiri.core.create_element("span",{'className':"toned-down"},[" search index"])])]),(function (){var attrs120076 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","try","page/try",1385175055)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(true);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120076))?daiquiri.interpreter.element_attributes(attrs120076):null),((cljs.core.map_QMARK_(attrs120076))?null:[daiquiri.interpreter.interpret(attrs120076)]));
})()]),daiquiri.core.create_element("div",{'className':"flex flex-row justify-between align-items mb-2 items-center separator-top py-4"},[daiquiri.core.create_element("div",{'className':"flex flex-col items-start"},[(function (){var attrs120081 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"2"], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120081))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-2xs","font-bold","uppercase","toned-down"], null)], null),attrs120081], 0))):{'className':"text-2xs font-bold uppercase toned-down"}),((cljs.core.map_QMARK_(attrs120081))?null:[daiquiri.interpreter.interpret(attrs120081)]));
})(),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"highlighted font-bold"},["Relaunch"]),daiquiri.core.create_element("span",{'className':"toned-down"},[" the app"])]),daiquiri.core.create_element("div",{'className':"text-xs toned-down"},["Quit the app and then reopen it."])]),(function (){var attrs120080 = frontend.ui.icon("command",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md p-1 mr-2 bg-quaternary"], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120080))?daiquiri.interpreter.element_attributes(attrs120080):null),((cljs.core.map_QMARK_(attrs120080))?[daiquiri.interpreter.interpret(frontend.ui.icon("letter-q",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md p-1 bg-quaternary"], null)))]:[daiquiri.interpreter.interpret(attrs120080),daiquiri.interpreter.interpret(frontend.ui.icon("letter-q",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md p-1 bg-quaternary"], null)))]));
})()]),daiquiri.core.create_element("div",{'className':"flex flex-row justify-between align-items mb-4 items-center separator-top py-4"},[daiquiri.core.create_element("div",{'className':"flex flex-col items-start"},[(function (){var attrs120087 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","step","page/step",1292828841),"3"], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120087))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-2xs","font-bold","uppercase","toned-down"], null)], null),attrs120087], 0))):{'className':"text-2xs font-bold uppercase toned-down"}),((cljs.core.map_QMARK_(attrs120087))?null:[daiquiri.interpreter.interpret(attrs120087)]));
})(),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"highlighted font-bold"},["Clear"]),daiquiri.core.create_element("span",{'className':"toned-down"},[" local storage"])]),daiquiri.core.create_element("div",{'className':"text-xs toned-down"},["This does delete minor preferences like dark/light theme preference."])]),(function (){var attrs120086 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","try","page/try",1385175055)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
localStorage.clear();

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Cleared!",new cljs.core.Keyword(null,"success","success",1890645906));
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs120086))?daiquiri.interpreter.element_attributes(attrs120086):null),((cljs.core.map_QMARK_(attrs120086))?null:[daiquiri.interpreter.interpret(attrs120086)]));
})()])]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["If you think you have experienced data loss, check for backup files under\n          the folder logseq/bak/."]),daiquiri.core.create_element("p",null,["If these troubleshooting steps have not solved your problem, please ",daiquiri.core.create_element("a",{'href':"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",'className':"underline"},["open an issue."])])])])])])])])]),frontend.ui.notification()]);
}),null,"frontend.page/helpful-default-error-screen");
frontend.page.current_page = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = frontend.state.sub(new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
if(cljs.core.truth_(temp__5804__auto__)){
var route_match = temp__5804__auto__;
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_match));
if(cljs.core.truth_(temp__5804__auto____$1)){
var view = temp__5804__auto____$1;
return frontend.ui.catch_error_and_notify(frontend.page.helpful_default_error_screen(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),route_name))?(view.cljs$core$IFn$_invoke$arity$1 ? view.cljs$core$IFn$_invoke$arity$1(route_match) : view.call(null,route_match)):frontend.components.container.sidebar(route_match,(view.cljs$core$IFn$_invoke$arity$1 ? view.cljs$core$IFn$_invoke$arity$1(route_match) : view.call(null,route_match)))));
} else {
return null;
}
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.state.set_root_component_BANG_(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));

frontend.state.setup_electron_updater_BANG_();

frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

frontend.ui.inject_document_devices_envs_BANG_();

frontend.ui.inject_dynamic_style_node_BANG_();

frontend.components.onboarding.quick_tour.init();

frontend.handler.plugin.host_mounted_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.page","teardown","frontend.page/teardown",1151382542),frontend.page.setup_fns_BANG_());
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5804__auto__ = new cljs.core.Keyword("frontend.page","teardown","frontend.page/teardown",1151382542).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto__)){
var teardown = temp__5804__auto__;
return (teardown.cljs$core$IFn$_invoke$arity$0 ? teardown.cljs$core$IFn$_invoke$arity$0() : teardown.call(null));
} else {
return null;
}
})], null)], null),"frontend.page/current-page");

//# sourceMappingURL=frontend.page.js.map
