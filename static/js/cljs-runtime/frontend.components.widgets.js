goog.provide('frontend.components.widgets');
frontend.components.widgets.native_fs_api_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("p",null,["It seems that your browser doesn't support the ",daiquiri.core.create_element("a",{'href':"https://web.dev/file-system-access/",'target':"_blank"},["new native filesystem API"]),daiquiri.core.create_element("span",null,[", please use any Chromium 86+ based browser like Chrome, Vivaldi, Edge, etc. Notice that the API doesn't support mobile browsers at the moment."])]);
}),null,"frontend.components.widgets/native-fs-api-alert");
frontend.components.widgets.add_local_directory = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[(function (){var attrs118312 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","add-graph","on-boarding/add-graph",-1235230195)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs118312))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs118312], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs118312))?null:[daiquiri.interpreter.interpret(attrs118312)]));
})(),(function (){var nfs_supported_QMARK_ = (function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})();
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
var attrs118315 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Open a local directory",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","setup-a-repo","graph/setup-a-repo",992514529)], null));
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118315))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs118315], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs118315))?[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["I need some help"]),daiquiri.core.create_element("p",null,["\uD83D\uDC4B Join our Forum to chat with the makers and our helpful community members."]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Join the community",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)))])]:[daiquiri.interpreter.interpret(attrs118315),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["I need some help"]),daiquiri.core.create_element("p",null,["\uD83D\uDC4B Join our Forum to chat with the makers and our helpful community members."]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Join the community",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)))])]));
} else {
return daiquiri.core.create_element("div",{'className':"cp__widgets-open-local-directory"},[(function (){var attrs118330 = (cljs.core.truth_(nfs_supported_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.core.refresh_BANG_);
})], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118330))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select-file-wrap","cursor"], null)], null),attrs118330], 0))):{'className':"select-file-wrap cursor"}),((cljs.core.map_QMARK_(attrs118330))?[daiquiri.core.create_element("div",null,[(function (){var attrs118332 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","open-local-dir","on-boarding/open-local-dir",1245345940)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs118332))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs118332], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs118332))?null:[daiquiri.interpreter.interpret(attrs118332)]));
})(),(function (){var attrs118333 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-1","on-boarding/new-graph-desc-1",-268439211)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs118333))?daiquiri.interpreter.element_attributes(attrs118333):null),((cljs.core.map_QMARK_(attrs118333))?null:[daiquiri.interpreter.interpret(attrs118333)]));
})(),(function (){var attrs118334 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-2","on-boarding/new-graph-desc-2",-2126787175)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs118334))?daiquiri.interpreter.element_attributes(attrs118334):null),((cljs.core.map_QMARK_(attrs118334))?null:[daiquiri.interpreter.interpret(attrs118334)]));
})(),daiquiri.core.create_element("ul",null,[(function (){var attrs118335 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-3","on-boarding/new-graph-desc-3",-494052293)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs118335))?daiquiri.interpreter.element_attributes(attrs118335):null),((cljs.core.map_QMARK_(attrs118335))?null:[daiquiri.interpreter.interpret(attrs118335)]));
})(),(function (){var attrs118336 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-4","on-boarding/new-graph-desc-4",1746596573)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs118336))?daiquiri.interpreter.element_attributes(attrs118336):null),((cljs.core.map_QMARK_(attrs118336))?null:[daiquiri.interpreter.interpret(attrs118336)]));
})(),(function (){var attrs118337 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-5","on-boarding/new-graph-desc-5",795026466)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs118337))?daiquiri.interpreter.element_attributes(attrs118337):null),((cljs.core.map_QMARK_(attrs118337))?null:[daiquiri.interpreter.interpret(attrs118337)]));
})()]),(cljs.core.truth_(nfs_supported_QMARK_)?null:frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),frontend.components.widgets.native_fs_api_alert()))])]:[daiquiri.interpreter.interpret(attrs118330),daiquiri.core.create_element("div",null,[(function (){var attrs118338 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","open-local-dir","on-boarding/open-local-dir",1245345940)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs118338))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs118338], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs118338))?null:[daiquiri.interpreter.interpret(attrs118338)]));
})(),(function (){var attrs118339 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-1","on-boarding/new-graph-desc-1",-268439211)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs118339))?daiquiri.interpreter.element_attributes(attrs118339):null),((cljs.core.map_QMARK_(attrs118339))?null:[daiquiri.interpreter.interpret(attrs118339)]));
})(),(function (){var attrs118340 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-2","on-boarding/new-graph-desc-2",-2126787175)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs118340))?daiquiri.interpreter.element_attributes(attrs118340):null),((cljs.core.map_QMARK_(attrs118340))?null:[daiquiri.interpreter.interpret(attrs118340)]));
})(),daiquiri.core.create_element("ul",null,[(function (){var attrs118341 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-3","on-boarding/new-graph-desc-3",-494052293)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs118341))?daiquiri.interpreter.element_attributes(attrs118341):null),((cljs.core.map_QMARK_(attrs118341))?null:[daiquiri.interpreter.interpret(attrs118341)]));
})(),(function (){var attrs118342 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-4","on-boarding/new-graph-desc-4",1746596573)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs118342))?daiquiri.interpreter.element_attributes(attrs118342):null),((cljs.core.map_QMARK_(attrs118342))?null:[daiquiri.interpreter.interpret(attrs118342)]));
})(),(function (){var attrs118343 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-5","on-boarding/new-graph-desc-5",795026466)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs118343))?daiquiri.interpreter.element_attributes(attrs118343):null),((cljs.core.map_QMARK_(attrs118343))?null:[daiquiri.interpreter.interpret(attrs118343)]));
})()]),(cljs.core.truth_(nfs_supported_QMARK_)?null:frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),frontend.components.widgets.native_fs_api_alert()))])]));
})()]);
}
})()]);
}),null,"frontend.components.widgets/add-local-directory");
frontend.components.widgets.android_permission_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("h1",{'className':"title"},["Storage access permission"]),daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["Logseq needs the permission to access your device storage. Read ",daiquiri.core.create_element("a",{'href':"https://developer.android.com/about/versions/11/privacy/storage#all-files-access",'target':"_blank"},["more"]),"."]),(function (){var attrs118350 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Grant Permission",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.core.refresh_BANG_);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118350))?daiquiri.interpreter.element_attributes(attrs118350):null),((cljs.core.map_QMARK_(attrs118350))?null:[daiquiri.interpreter.interpret(attrs118350)]));
})(),daiquiri.core.create_element("p",{'className':"mb-1"},["Note:"]),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,["We will never access files outside of your graph folders you choose."]),daiquiri.core.create_element("li",null,["If you have granted the permission, you don't need to do it again."])])]),daiquiri.core.create_element("hr",null,null)])]);
} else {
return null;
}
}),null,"frontend.components.widgets/android-permission-alert");
frontend.components.widgets.add_graph = rum.core.lazy_build(rum.core.build_defcs,(function() { 
var G__118359__delegate = function (state,p__118356){
var map__118357 = p__118356;
var map__118357__$1 = cljs.core.__destructure_map(map__118357);
var graph_types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__118357__$1,new cljs.core.Keyword(null,"graph-types","graph-types",-1372538535),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",-1497766724)], null));
var generate_f = (function (x){
var G__118358 = x;
var G__118358__$1 = (((G__118358 instanceof cljs.core.Keyword))?G__118358.fqn:null);
switch (G__118358__$1) {
case "local":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.components.widgets.android_permission_alert(),"android-permission-alert"),rum.core.with_key(frontend.components.widgets.add_local_directory(),"add-local-directory")], null);

break;
default:
return null;

}
});
var available_graph = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.mt-10.mb-5.opacity-50","b.mt-10.mb-5.opacity-50",808916990),"OR"], null),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(generate_f,cljs.core.set(graph_types))));
var attrs118355 = available_graph;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118355))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-8","flex","flex-col"], null)], null),attrs118355], 0))):{'className':"p-8 flex flex-col"}),((cljs.core.map_QMARK_(attrs118355))?null:[daiquiri.interpreter.interpret(attrs118355)]));
};
var G__118359 = function (state,var_args){
var p__118356 = null;
if (arguments.length > 1) {
var G__118361__i = 0, G__118361__a = new Array(arguments.length -  1);
while (G__118361__i < G__118361__a.length) {G__118361__a[G__118361__i] = arguments[G__118361__i + 1]; ++G__118361__i;}
  p__118356 = new cljs.core.IndexedSeq(G__118361__a,0,null);
} 
return G__118359__delegate.call(this,state,p__118356);};
G__118359.cljs$lang$maxFixedArity = 1;
G__118359.cljs$lang$applyTo = (function (arglist__118362){
var state = cljs.core.first(arglist__118362);
var p__118356 = cljs.core.rest(arglist__118362);
return G__118359__delegate(state,p__118356);
});
G__118359.cljs$core$IFn$_invoke$arity$variadic = G__118359__delegate;
return G__118359;
})()
,null,"frontend.components.widgets/add-graph");
frontend.components.widgets.demo_graph_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5041__auto__;
}
})())){
return frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","demo-graph","on-boarding/demo-graph",766940271)], 0))], null));
} else {
return null;
}
}),null,"frontend.components.widgets/demo-graph-alert");

//# sourceMappingURL=frontend.components.widgets.js.map
