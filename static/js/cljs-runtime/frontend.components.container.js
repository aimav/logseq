goog.provide('frontend.components.container');
goog.scope(function(){
  frontend.components.container.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react_draggable$dist$react_draggable=shadow.js.require("module$node_modules$react_draggable$dist$react_draggable", {});
frontend.components.container.nav_content_item = rum.core.lazy_build(rum.core.build_defc,(function (name,p__119862,child){
var map__119863 = p__119862;
var map__119863__$1 = cljs.core.__destructure_map(map__119863);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119863__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119863__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var collapsed_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","navigation-item-collapsed?","ui/navigation-item-collapsed?",-1247120960),class$], null));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-content-item",frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-expand","is-expand",-1852164794),cljs.core.not(collapsed_QMARK_),new cljs.core.Keyword(null,"has-children","has-children",-934485512),((typeof count === 'number') && ((count > (0))))], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"nav-content-item-inner"},[daiquiri.core.create_element("div",{'onClick':(function (_e){
return frontend.state.toggle_navigation_item_collapsed_BANG_(class$);
}),'className':"header items-center"},[(function (){var attrs119865 = name;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119865))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null)], null),attrs119865], 0))):{'className':"a"}),((cljs.core.map_QMARK_(attrs119865))?null:[daiquiri.interpreter.interpret(attrs119865)]));
})(),(function (){var attrs119866 = frontend.ui.icon("chevron-left",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"more",new cljs.core.Keyword(null,"size","size",1098693007),(14)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119866))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)], null),attrs119866], 0))):{'className':"b"}),((cljs.core.map_QMARK_(attrs119866))?null:[daiquiri.interpreter.interpret(attrs119866)]));
})()]),(cljs.core.truth_(child)?(function (){var attrs119864 = child;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119864))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bd"], null)], null),attrs119864], 0))):{'className':"bd"}),((cljs.core.map_QMARK_(attrs119864))?null:[daiquiri.interpreter.interpret(attrs119864)]));
})():null)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.container/nav-content-item");
frontend.components.container.delta_y = (function frontend$components$container$delta_y(e){
var temp__5804__auto__ = e.target;
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
var rect = target.getBoundingClientRect();
return (e.pageY - rect.top);
} else {
return null;
}
});
frontend.components.container.move_up_QMARK_ = (function frontend$components$container$move_up_QMARK_(e){
var delta = frontend.components.container.delta_y(e);
return (delta < (14));
});
frontend.components.container.page_name = rum.core.lazy_build(rum.core.build_defc,(function (name,icon,recent_QMARK_){
var original_name = frontend.db.model.get_page_original_name(name);
var whiteboard_page_QMARK_ = frontend.db.model.whiteboard_page_QMARK_(name);
var untitled_QMARK_ = frontend.db.model.untitled_page_QMARK_(name);
var name__$1 = frontend.util.safe_page_name_sanity_lc(name);
var file_rpath = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.util.page.get_page_file_rpath.cljs$core$IFn$_invoke$arity$1(name__$1):null);
var source_page = frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),name__$1);
var ctx_icon = (function (p1__119867_SHARP_){
return logseq.shui.ui.tabler_icon(p1__119867_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"scale-90 pr-1 opacity-80"], null));
});
var open_in_sidebar = (function (){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.not(whiteboard_page_QMARK_);
if(and__5041__auto__){
if(cljs.core.empty_QMARK_(source_page)){
var G__119869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__119869) : frontend.db.entity.call(null,G__119869));
} else {
return source_page;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_entity = temp__5804__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});
var x_menu_content = (function (type,opts){
var dropdown_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"dropdown","dropdown",1343185805));
var x_menu_content = ((dropdown_QMARK_)?logseq.shui.ui.dropdown_menu_content:logseq.shui.ui.context_menu_content);
var x_menu_item = ((dropdown_QMARK_)?logseq.shui.ui.dropdown_menu_item:logseq.shui.ui.context_menu_item);
var x_menu_shortcut = ((dropdown_QMARK_)?logseq.shui.ui.dropdown_menu_shortcut:logseq.shui.ui.context_menu_shortcut);
var G__119870 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-60"], null),opts], 0));
var G__119871 = (cljs.core.truth_(recent_QMARK_)?null:(function (){var G__119874 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.unfavorite_page_BANG_(original_name);
})], null);
var G__119875 = ctx_icon("star-off");
var G__119876 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300)], 0));
var G__119877 = (function (){var G__119878 = (function (){var temp__5804__auto__ = frontend.modules.shortcut.data_helper.shortcut_binding(new cljs.core.Keyword("command","toggle-favorite","command/toggle-favorite",-2107893568));
if(cljs.core.truth_(temp__5804__auto__)){
var binding = temp__5804__auto__;
var G__119879 = binding;
var G__119879__$1 = (((G__119879 == null))?null:cljs.core.first(G__119879));
if((G__119879__$1 == null)){
return null;
} else {
return frontend.modules.shortcut.utils.decorate_binding(G__119879__$1);
}
} else {
return null;
}
})();
return (x_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? x_menu_shortcut.cljs$core$IFn$_invoke$arity$1(G__119878) : x_menu_shortcut.call(null,G__119878));
})();
return (x_menu_item.cljs$core$IFn$_invoke$arity$4 ? x_menu_item.cljs$core$IFn$_invoke$arity$4(G__119874,G__119875,G__119876,G__119877) : x_menu_item.call(null,G__119874,G__119875,G__119876,G__119877));
})());
var G__119872 = (function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = file_rpath;
if(cljs.core.truth_(and__5041__auto____$1)){
return frontend.config.get_repo_fpath(frontend.state.get_current_repo(),file_rpath);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_fpath = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__119880 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"openFileInFolder","openFileInFolder",660878411),page_fpath], 0));
})], null);
var G__119881 = ctx_icon("folder");
var G__119882 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-in-finder","page/open-in-finder",-891703594)], 0));
return (x_menu_item.cljs$core$IFn$_invoke$arity$3 ? x_menu_item.cljs$core$IFn$_invoke$arity$3(G__119880,G__119881,G__119882) : x_menu_item.call(null,G__119880,G__119881,G__119882));
})(),(function (){var G__119883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.openPath(page_fpath);
})], null);
var G__119884 = ctx_icon("file");
var G__119885 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-with-default-app","page/open-with-default-app",2097221682)], 0));
return (x_menu_item.cljs$core$IFn$_invoke$arity$3 ? x_menu_item.cljs$core$IFn$_invoke$arity$3(G__119883,G__119884,G__119885) : x_menu_item.call(null,G__119883,G__119884,G__119885));
})()], null);
} else {
return null;
}
})();
var G__119873 = (function (){var G__119886 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_in_sidebar], null);
var G__119887 = ctx_icon("layout-sidebar-right");
var G__119888 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("content","open-in-sidebar","content/open-in-sidebar",731683416)], 0));
var G__119889 = (function (){var G__119890 = frontend.modules.shortcut.utils.decorate_binding("shift+click");
return (x_menu_shortcut.cljs$core$IFn$_invoke$arity$1 ? x_menu_shortcut.cljs$core$IFn$_invoke$arity$1(G__119890) : x_menu_shortcut.call(null,G__119890));
})();
return (x_menu_item.cljs$core$IFn$_invoke$arity$4 ? x_menu_item.cljs$core$IFn$_invoke$arity$4(G__119886,G__119887,G__119888,G__119889) : x_menu_item.call(null,G__119886,G__119887,G__119888,G__119889));
})();
return (x_menu_content.cljs$core$IFn$_invoke$arity$4 ? x_menu_content.cljs$core$IFn$_invoke$arity$4(G__119870,G__119871,G__119872,G__119873) : x_menu_content.call(null,G__119870,G__119871,G__119872,G__119873));
});
return daiquiri.interpreter.interpret((function (){var G__119899 = (function (){var G__119900 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.justify-between.relative.group","a.flex.items-center.justify-between.relative.group",-1594043546),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var name__$2 = ((cljs.core.empty_QMARK_(source_page))?name__$1:new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(source_page));
if(cljs.core.truth_(frontend.components.container.goog$module$goog$object.get(e,"shiftKey"))){
return open_in_sidebar();
} else {
if(cljs.core.truth_(whiteboard_page_QMARK_)){
return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(name__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464),recent_QMARK_], null));
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(name__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-from-recent?","click-from-recent?",-1191845464),recent_QMARK_], null));
}
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-icon.ml-3.justify-center","span.page-icon.ml-3.justify-center",-200853193),(cljs.core.truth_(whiteboard_page_QMARK_)?frontend.ui.icon("whiteboard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null)):icon)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-title","span.page-title",-1546529363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(untitled_QMARK_)?"opacity-50":null)], null),(cljs.core.truth_(untitled_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"untitled","untitled",301293696)], 0)):frontend.extensions.pdf.utils.fix_local_asset_pagename(original_name))], null),(function (){var G__119902 = (function (){var G__119904 = (function (){var G__119905 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-2 top-0 px-1.5 scale-75 opacity-30 hidden group-hover:block hover:opacity-80 active:opacity-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__119868_SHARP_){
return frontend.util.stop(p1__119868_SHARP_);
})], null);
var G__119906 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.relative","i.relative",-2078662318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"1px"], null)], null),logseq.shui.ui.tabler_icon("dots")], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__119905,G__119906) : logseq.shui.ui.button.call(null,G__119905,G__119906));
})();
return (logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dropdown_menu_trigger.cljs$core$IFn$_invoke$arity$1(G__119904) : logseq.shui.ui.dropdown_menu_trigger.call(null,G__119904));
})();
var G__119903 = x_menu_content(new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"start"], null));
return (logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.dropdown_menu.cljs$core$IFn$_invoke$arity$2(G__119902,G__119903) : logseq.shui.ui.dropdown_menu.call(null,G__119902,G__119903));
})()], null);
var G__119901 = x_menu_content(new cljs.core.Keyword(null,"context","context",-830191113),null);
return (logseq.shui.ui.context_menu_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.context_menu_trigger.cljs$core$IFn$_invoke$arity$2(G__119900,G__119901) : logseq.shui.ui.context_menu_trigger.call(null,G__119900,G__119901));
})();
return (logseq.shui.ui.context_menu.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.context_menu.cljs$core$IFn$_invoke$arity$1(G__119899) : logseq.shui.ui.context_menu.call(null,G__119899));
})());
}),null,"frontend.components.container/page-name");
frontend.components.container.get_page_icon = (function frontend$components$container$get_page_icon(page_entity){
var default_icon = frontend.ui.icon("page",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null));
var from_properties = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,page_entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
var or__5043__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_properties,""))?from_properties:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default_icon;
}
});
frontend.components.container.favorite_item = rum.core.lazy_build(rum.core.build_defcs,(function (state,_t,name,icon){
var up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.container","up?","frontend.components.container/up?",-865392879));
var dragging_over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.container","dragging-over","frontend.components.container/dragging-over",-1282499679));
var target = frontend.state.sub(new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178));
return daiquiri.core.create_element("li",{'key':name,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["favorite-item",(cljs.core.truth_((function (){var and__5041__auto__ = target;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.deref(dragging_over);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.deref(dragging_over));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?"dragging-target":"")], null)),'title':name,'draggable':true,'onDragOver':(function (e){
frontend.util.stop(e);

cljs.core.reset_BANG_(dragging_over,name);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178)))){
return null;
} else {
return cljs.core.reset_BANG_(up_QMARK_,frontend.components.container.move_up_QMARK_(e));
}
}),'onDragLeave':(function (_e){
return cljs.core.reset_BANG_(dragging_over,null);
}),'data-ref':name,'onDragStart':(function (event){
frontend.handler.editor.block__GT_data_transfer_BANG_(name,event);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178),name);
}),'onDrop':(function (e){
frontend.handler.page.reorder_favorites_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),name,new cljs.core.Keyword(null,"up?","up?",77854972),frontend.components.container.move_up_QMARK_(e)], null));

cljs.core.reset_BANG_(up_QMARK_,null);

return cljs.core.reset_BANG_(dragging_over,null);
})},[frontend.components.container.page_name(name,icon,false)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.container","up?","frontend.components.container/up?",-865392879)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.container","dragging-over","frontend.components.container/dragging-over",-1282499679))], null),"frontend.components.container/favorite-item");
frontend.components.container.favorites = rum.core.lazy_build(rum.core.build_defc,(function (t){
var favorites = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0())))));
var favorite_entities = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__119907_SHARP_){
var G__119908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),p1__119907_SHARP_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__119908) : frontend.db.entity.call(null,G__119908));
}),favorites));
return frontend.components.container.nav_content_item(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-sm.font-medium.rounded-md.wrap-th","a.flex.items-center.text-sm.font-medium.rounded-md.wrap-th",1012650939),frontend.ui.icon("star",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1.ml-2","strong.flex-1.ml-2",-1673860673),clojure.string.upper_case((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("left-side-bar","nav-favorites","left-side-bar/nav-favorites",-1723503312)) : t.call(null,new cljs.core.Keyword("left-side-bar","nav-favorites","left-side-bar/nav-favorites",-1723503312))))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"favorites",new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(favorite_entities),new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),(function (e){
reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Favorites"], null));

return frontend.util.stop(e);
})], null),((cljs.core.seq(favorite_entities))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.favorites.text-sm","ul.favorites.text-sm",800189534),(function (){var iter__5520__auto__ = (function frontend$components$container$iter__119913(s__119914){
return (new cljs.core.LazySeq(null,(function (){
var s__119914__$1 = s__119914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119914__$1);
if(temp__5804__auto__){
var s__119914__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119914__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119914__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119916 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119915 = (0);
while(true){
if((i__119915 < size__5519__auto__)){
var entity = cljs.core._nth(c__5518__auto__,i__119915);
cljs.core.chunk_append(b__119916,(function (){var icon = frontend.components.container.get_page_icon(entity);
return frontend.components.container.favorite_item(t,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity),icon);
})());

var G__120021 = (i__119915 + (1));
i__119915 = G__120021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119916),frontend$components$container$iter__119913(cljs.core.chunk_rest(s__119914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119916),null);
}
} else {
var entity = cljs.core.first(s__119914__$2);
return cljs.core.cons((function (){var icon = frontend.components.container.get_page_icon(entity);
return frontend.components.container.favorite_item(t,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity),icon);
})(),frontend$components$container$iter__119913(cljs.core.rest(s__119914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(favorite_entities);
})()], null):null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.container/favorites");
frontend.components.container.recent_pages = rum.core.lazy_build(rum.core.build_defc,(function (t){
var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.util.distinct_by(new cljs.core.Keyword(null,"lowercase","lowercase",41029539),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lowercase","lowercase",41029539),frontend.util.safe_page_name_sanity_lc(page),new cljs.core.Keyword(null,"page","page",849072397),page], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,(frontend.db.sub_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.sub_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.sub_key_value.call(null,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842))))))));
return frontend.components.container.nav_content_item(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-sm.font-medium.rounded-md.wrap-th","a.flex.items-center.text-sm.font-medium.rounded-md.wrap-th",1012650939),frontend.ui.icon("history",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.flex-1.ml-2","strong.flex-1.ml-2",-1673860673),clojure.string.upper_case((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("left-side-bar","nav-recent-pages","left-side-bar/nav-recent-pages",-554223849)) : t.call(null,new cljs.core.Keyword("left-side-bar","nav-recent-pages","left-side-bar/nav-recent-pages",-554223849))))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"recent",new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(pages)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-sm","ul.text-sm",423832983),(function (){var iter__5520__auto__ = (function frontend$components$container$iter__119923(s__119924){
return (new cljs.core.LazySeq(null,(function (){
var s__119924__$1 = s__119924;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119924__$1);
if(temp__5804__auto__){
var s__119924__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119924__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119924__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119926 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119925 = (0);
while(true){
if((i__119925 < size__5519__auto__)){
var name = cljs.core._nth(c__5518__auto__,i__119925);
cljs.core.chunk_append(b__119926,(function (){var temp__5804__auto____$1 = (function (){var G__119927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__119927) : frontend.db.entity.call(null,G__119927));
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var entity = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item.select-none","li.recent-item.select-none",1025549059),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (i__119925,entity,temp__5804__auto____$1,name,c__5518__auto__,size__5519__auto__,b__119926,s__119924__$2,temp__5804__auto__,pages){
return (function (event){
return frontend.handler.editor.block__GT_data_transfer_BANG_(name,event);
});})(i__119925,entity,temp__5804__auto____$1,name,c__5518__auto__,size__5519__auto__,b__119926,s__119924__$2,temp__5804__auto__,pages))
,new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),name], null),frontend.components.container.page_name(name,frontend.components.container.get_page_icon(entity),true)], null);
} else {
return null;
}
})());

var G__120022 = (i__119925 + (1));
i__119925 = G__120022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119926),frontend$components$container$iter__119923(cljs.core.chunk_rest(s__119924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119926),null);
}
} else {
var name = cljs.core.first(s__119924__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (function (){var G__119928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__119928) : frontend.db.entity.call(null,G__119928));
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var entity = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item.select-none","li.recent-item.select-none",1025549059),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (entity,temp__5804__auto____$1,name,s__119924__$2,temp__5804__auto__,pages){
return (function (event){
return frontend.handler.editor.block__GT_data_transfer_BANG_(name,event);
});})(entity,temp__5804__auto____$1,name,s__119924__$2,temp__5804__auto__,pages))
,new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),name], null),frontend.components.container.page_name(name,frontend.components.container.get_page_icon(entity),true)], null);
} else {
return null;
}
})(),frontend$components$container$iter__119923(cljs.core.rest(s__119924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(pages);
})()], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.container/recent-pages");
frontend.components.container.flashcards = rum.core.lazy_build(rum.core.build_defcs,(function (_state,srs_open_QMARK_){
var num = frontend.state.sub(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746));
return daiquiri.core.create_element("a",{'onClick':(function (){
frontend.extensions.srs.update_cards_due_count_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item","group","flex","items-center","px-2","py-2","text-sm","font-medium","rounded-md",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),srs_open_QMARK_], null)], null))], null))},[daiquiri.interpreter.interpret(frontend.ui.icon("infinity")),(function (){var attrs119929 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","flashcards","right-side-bar/flashcards",-1920196000)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119929))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs119929], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs119929))?null:[daiquiri.interpreter.interpret(attrs119929)]));
})(),(function (){var attrs119930 = frontend.ui.render_keyboard_shortcut(frontend.ui.keyboard_shortcut_from_config.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("go","flashcards","go/flashcards",2038317222),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pick-first?","pick-first?",-2055544652),true], null)], 0)));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119930))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs119930], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs119930))?null:[daiquiri.interpreter.interpret(attrs119930)]));
})(),(cljs.core.truth_((function (){var and__5041__auto__ = num;
if(cljs.core.truth_(and__5041__auto__)){
return (!((num === (0))));
} else {
return and__5041__auto__;
}
})())?(function (){var attrs119931 = num;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119931))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1","inline-block","py-0","5","px-3","text-xs","font-medium","rounded-full","fade-in"], null)], null),attrs119931], 0))):{'className':"ml-1 inline-block py-0 5 px-3 text-xs font-medium rounded-full fade-in"}),((cljs.core.map_QMARK_(attrs119931))?null:[daiquiri.interpreter.interpret(attrs119931)]));
})():null)]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db_mixins.query,rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.extensions.srs.update_cards_due_count_BANG_();

return state;
})], null)], null),"frontend.components.container/flashcards");
frontend.components.container.get_default_home_if_valid = (function frontend$components$container$get_default_home_if_valid(){
var temp__5804__auto__ = frontend.state.get_default_home();
if(cljs.core.truth_(temp__5804__auto__)){
var default_home = temp__5804__auto__;
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
var page__$1 = ((((typeof page === 'string') && ((!(clojure.string.blank_QMARK_(page))))))?(function (){var G__119932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__119932) : frontend.db.entity.call(null,G__119932));
})():null);
if(cljs.core.truth_(page__$1)){
return default_home;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(default_home,new cljs.core.Keyword(null,"page","page",849072397));
}
} else {
return null;
}
});
frontend.components.container.sidebar_item = (function frontend$components$container$sidebar_item(p__119933){
var map__119934 = p__119933;
var map__119934__$1 = cljs.core.__destructure_map(map__119934);
var on_click_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var icon_extension_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"icon-extension?","icon-extension?",507506462));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119934__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item.group.flex.items-center.text-sm.font-medium.rounded-md","a.item.group.flex.items-center.text-sm.font-medium.rounded-md",1864795356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_handler,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active)?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),href], null),frontend.ui.icon(cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extension?","extension?",-1574402873),icon_extension_QMARK_], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1","span.flex-1",1756749525),title], null),(cljs.core.truth_(shortcut)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.ui.render_keyboard_shortcut(frontend.ui.keyboard_shortcut_from_config(shortcut))], null):null)], null)], null);
});
frontend.components.container.close_sidebar_on_mobile_BANG_ = (function frontend$components$container$close_sidebar_on_mobile_BANG_(){
var and__5041__auto__ = frontend.util.sm_breakpoint_QMARK_();
if(and__5041__auto__){
return frontend.state.toggle_left_sidebar_BANG_();
} else {
return and__5041__auto__;
}
});
frontend.components.container.create_dropdown = (function frontend$components$container$create_dropdown(){
return frontend.ui.dropdown_with_links((function (p__119935){
var map__119936 = p__119935;
var map__119936__$1 = cljs.core.__destructure_map(map__119936);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119936__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#create-button","button#create-button",-1955909259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.icon("plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font?","font?",-1448494423),"true"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-1","span.mx-1",-1460509123),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("left-side-bar","create","left-side-bar/create",-859377627)], 0))], null)], null)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("left-side-bar","new-page","left-side-bar/new-page",778311067)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"new-page-link",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.components.container.close_sidebar_on_mobile_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("go","search","go/search",1564957958))], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.type_icon(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"new-page",new cljs.core.Keyword(null,"class","class",-2030961996),"highlight",new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("left-side-bar","new-whiteboard","left-side-bar/new-whiteboard",-1421460990)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),"new-whiteboard-link",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.components.container.close_sidebar_on_mobile_BANG_();

return frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$0();
}),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),frontend.ui.keyboard_shortcut_from_config(new cljs.core.Keyword("editor","new-whiteboard","editor/new-whiteboard",69441100))], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.type_icon(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"new-whiteboard",new cljs.core.Keyword(null,"class","class",-2030961996),"highlight",new cljs.core.Keyword(null,"extension?","extension?",-1574402873),true], null))], null)], null),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.components.container.sidebar_nav = rum.core.lazy_build(rum.core.build_defc,(function (route_match,close_modal_fn,left_sidebar_open_QMARK_,enable_whiteboards_QMARK_,srs_open_QMARK_,_STAR_closing_QMARK_,close_signal,touching_x_offset){
var vec__119939 = rum.core.use_state(false);
var local_closing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119939,(0),null);
var set_local_closing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119939,(1),null);
var vec__119942 = rum.core.use_state(null);
var el_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119942,(0),null);
var set_el_rect_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119942,(1),null);
var ref_el = rum.core.use_ref(null);
var ref_open_QMARK_ = rum.core.use_ref(left_sidebar_open_QMARK_);
var default_home = frontend.components.container.get_default_home_if_valid();
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var on_contents_scroll = (function (p1__119937_SHARP_){
var temp__5804__auto__ = p1__119937_SHARP_.target;
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var top = el.scrollTop;
var cls = el.classList;
var cls_SINGLEQUOTE_ = "is-scrolled";
if((top > (2))){
return cls.add(cls_SINGLEQUOTE_);
} else {
return cls.remove(cls_SINGLEQUOTE_);
}
} else {
return null;
}
});
var close_fn = (function (){
return (set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_local_closing_QMARK_.call(null,true));
});
var touching_x_offset__$1 = ((typeof touching_x_offset === 'number')?((cljs.core.not(left_sidebar_open_QMARK_))?(((touching_x_offset > (0)))?(function (){var x__5131__auto__ = touching_x_offset;
var y__5132__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(el_rect);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():null):(((touching_x_offset < (0)))?(function (){var x__5128__auto__ = touching_x_offset;
var y__5129__auto__ = ((0) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(el_rect));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})():null)):null);
var offset_ratio = (function (){var and__5041__auto__ = typeof touching_x_offset__$1 === 'number';
if(and__5041__auto__){
var G__119945 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(el_rect);
if((G__119945 == null)){
return null;
} else {
return (touching_x_offset__$1 / G__119945);
}
} else {
return and__5041__auto__;
}
})();
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return setTimeout((function (){
var G__119946 = rum.core.deref(ref_el);
var G__119946__$1 = (((G__119946 == null))?null:G__119946.getBoundingClientRect());
var G__119946__$2 = (((G__119946__$1 == null))?null:G__119946__$1.toJSON());
var G__119946__$3 = (((G__119946__$2 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__119946__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
if((G__119946__$3 == null)){
return null;
} else {
return (set_el_rect_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_el_rect_BANG_.cljs$core$IFn$_invoke$arity$1(G__119946__$3) : set_el_rect_BANG_.call(null,G__119946__$3));
}
}),(16));
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = rum.core.deref(ref_open_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return local_closing_QMARK_;
} else {
return and__5041__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_closing_QMARK_,true);
} else {
}

rum.core.set_ref_BANG_(ref_open_QMARK_,left_sidebar_open_QMARK_);

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_closing_QMARK_,left_sidebar_open_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if((close_signal < (0))){
return null;
} else {
return close_fn();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [close_signal], null));

return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'ref':ref_el,'style':daiquiri.interpreter.element_attributes((function (){var G__119952 = cljs.core.PersistentArrayMap.EMPTY;
var G__119952__$1 = ((((typeof offset_ratio === 'number') && ((touching_x_offset__$1 > (0)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119952,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate3d(calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(touching_x_offset__$1),"px - 100%), 0, 0)"].join('')):G__119952);
if(((typeof offset_ratio === 'number') && ((touching_x_offset__$1 < (0))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119952__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset_ratio * (100))),"%, 0, 0)"].join(''));
} else {
return G__119952__$1;
}
})()),'onTransitionEnd':(function (){
if(cljs.core.truth_(local_closing_QMARK_)){
cljs.core.reset_BANG_(_STAR_closing_QMARK_,false);

(set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_local_closing_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_local_closing_QMARK_.call(null,false));

return (close_modal_fn.cljs$core$IFn$_invoke$arity$0 ? close_modal_fn.cljs$core$IFn$_invoke$arity$0() : close_modal_fn.call(null));
} else {
return null;
}
}),'onClick':(function (p1__119938_SHARP_){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.util.sm_breakpoint_QMARK_();
if(and__5041__auto__){
return p1__119938_SHARP_.target;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
if(cljs.core.truth_(cljs.core.some((function (sel){
return cljs.core.boolean$(target.closest(sel));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".favorites .bd",".recent .bd",".dropdown-wrapper",".nav-header"], null)))){
return close_fn();
} else {
return null;
}
} else {
return null;
}
}),'className':"left-sidebar-inner flex-1 flex flex-col min-h-0"},[daiquiri.core.create_element("div",{'className':"flex flex-col wrap gap-1 relative"},[daiquiri.core.create_element("nav",{'aria-label':"Navigation menu",'className':"px-4 flex flex-col gap-1 cp__menubar-repos"},[frontend.components.repo.repos_dropdown(),(function (){var attrs119953 = (function (){var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
if(cljs.core.truth_((function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo())));
} else {
return and__5041__auto__;
}
})())){
return frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"home-nav",new cljs.core.Keyword(null,"title","title",636505583),page,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),frontend.handler.route.redirect_to_home_BANG_,new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"page","page",849072397))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null))))))),new cljs.core.Keyword(null,"icon","icon",1679606541),"home",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","home","go/home",-74562325)], null));
} else {
return frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"journals-nav",new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"all-journals","all-journals",-347015095))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"home","home",-74557309)))))),new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("left-side-bar","journals","left-side-bar/journals",1870239904)], 0)),new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),(function (e){
if(cljs.core.truth_(frontend.components.container.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.handler.route.sidebar_journals_BANG_();
} else {
return frontend.handler.route.go_to_journals_BANG_();
}
}),new cljs.core.Keyword(null,"icon","icon",1679606541),"calendar",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","journals","go/journals",-1915759787)], null));
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119953))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-header","flex","flex-col","mt-2"], null)], null),attrs119953], 0))):{'className':"nav-header flex flex-col mt-2"}),((cljs.core.map_QMARK_(attrs119953))?[(cljs.core.truth_(enable_whiteboards_QMARK_)?daiquiri.interpreter.interpret(frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"whiteboard",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","whiteboards","right-side-bar/whiteboards",-163296452)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654)),new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),(function (_e){
return frontend.handler.whiteboard.onboarding_show();
}),new cljs.core.Keyword(null,"active","active",1895962068),(function (){var and__5041__auto__ = cljs.core.not(srs_open_QMARK_);
if(and__5041__auto__){
var fexpr__119955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654),null,new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),null], null), null);
return (fexpr__119955.cljs$core$IFn$_invoke$arity$1 ? fexpr__119955.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__119955.call(null,route_name));
} else {
return and__5041__auto__;
}
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),"whiteboard",new cljs.core.Keyword(null,"icon-extension?","icon-extension?",507506462),true,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","whiteboards","go/whiteboards",710208894)], null))):null),((frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo()))?daiquiri.core.create_element("div",{'className':"flashcards-nav"},[frontend.components.container.flashcards(srs_open_QMARK_)]):null),daiquiri.interpreter.interpret(frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-view-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","graph-view","right-side-bar/graph-view",-1104966609)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"graph","graph",1558099509)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"hierarchy",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","graph-view","go/graph-view",-233622043)], null))),daiquiri.interpreter.interpret(frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-pages-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","all-pages","right-side-bar/all-pages",-258695220)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"files"], null)))]:[daiquiri.interpreter.interpret(attrs119953),(cljs.core.truth_(enable_whiteboards_QMARK_)?daiquiri.interpreter.interpret(frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"whiteboard",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","whiteboards","right-side-bar/whiteboards",-163296452)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654)),new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),(function (_e){
return frontend.handler.whiteboard.onboarding_show();
}),new cljs.core.Keyword(null,"active","active",1895962068),(function (){var and__5041__auto__ = cljs.core.not(srs_open_QMARK_);
if(and__5041__auto__){
var fexpr__119957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654),null,new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),null], null), null);
return (fexpr__119957.cljs$core$IFn$_invoke$arity$1 ? fexpr__119957.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__119957.call(null,route_name));
} else {
return and__5041__auto__;
}
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),"whiteboard",new cljs.core.Keyword(null,"icon-extension?","icon-extension?",507506462),true,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","whiteboards","go/whiteboards",710208894)], null))):null),((frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo()))?daiquiri.core.create_element("div",{'className':"flashcards-nav"},[frontend.components.container.flashcards(srs_open_QMARK_)]):null),daiquiri.interpreter.interpret(frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-view-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","graph-view","right-side-bar/graph-view",-1104966609)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"graph","graph",1558099509)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"hierarchy",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword("go","graph-view","go/graph-view",-233622043)], null))),daiquiri.interpreter.interpret(frontend.components.container.sidebar_item(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-pages-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","all-pages","right-side-bar/all-pages",-258695220)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)),new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(srs_open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)))),new cljs.core.Keyword(null,"icon","icon",1679606541),"files"], null)))]));
})()]),daiquiri.core.create_element("div",{'onScroll':on_contents_scroll,'className':"nav-contents-container flex flex-col gap-1 pt-1"},[frontend.components.container.favorites(frontend.context.i18n.t),(((!(frontend.config.publishing_QMARK_)))?frontend.components.container.recent_pages(frontend.context.i18n.t):null)]),daiquiri.core.create_element("footer",{'className':"px-2 create"},[((frontend.config.publishing_QMARK_)?null:(cljs.core.truth_(enable_whiteboards_QMARK_)?daiquiri.interpreter.interpret(frontend.components.container.create_dropdown()):daiquiri.core.create_element("a",{'onClick':(function (){
var and__5041__auto___120023 = frontend.util.sm_breakpoint_QMARK_();
if(and__5041__auto___120023){
frontend.state.toggle_left_sidebar_BANG_();
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
}),'className':"item group flex items-center px-2 py-2 text-sm font-medium rounded-md new-page-link"},[daiquiri.interpreter.interpret(frontend.ui.icon("circle-plus",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))),(function (){var attrs119958 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","new-page","right-side-bar/new-page",818114070)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119958))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs119958], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs119958))?null:[daiquiri.interpreter.interpret(attrs119958)]));
})()])))])])]),(function (){var attrs119951 = (function (){var G__119959 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null);
if(typeof offset_ratio === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119959,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var G__119960 = offset_ratio;
if((offset_ratio < (0))){
return (G__119960 + (1));
} else {
return G__119960;
}
})()], null));
} else {
return G__119959;
}
})();
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119951))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shade-mask"], null)], null),attrs119951], 0))):{'className':"shade-mask"}),((cljs.core.map_QMARK_(attrs119951))?null:[daiquiri.interpreter.interpret(attrs119951)]));
})()]);
}),null,"frontend.components.container/sidebar-nav");
frontend.components.container.sidebar_resizer = rum.core.lazy_build(rum.core.build_defc,(function (){
var _STAR_el_ref = rum.core.use_ref(null);
var el_doc = document.documentElement;
var adjust_size_BANG_ = (function (width){
el_doc.style.setProperty("--ls-left-sidebar-width",width);

return frontend.storage.set(new cljs.core.Keyword(null,"ls-left-sidebar-width","ls-left-sidebar-width",1579560028),width);
});
rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"ls-left-sidebar-width","ls-left-sidebar-width",1579560028));
if(cljs.core.truth_(temp__5804__auto__)){
var width = temp__5804__auto__;
return el_doc.style.setProperty("--ls-left-sidebar-width",width);
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5041__auto__){
return rum.core.deref(_STAR_el_ref);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var sidebar_el_120024 = el_doc.querySelector("#left-sidebar");
interact(el).draggable(({"listeners": ({"move": (function (e){
var temp__5804__auto____$1 = e.rect.left;
if(cljs.core.truth_(temp__5804__auto____$1)){
var offset = temp__5804__auto____$1;
var width = (function (){var x__5128__auto__ = (function (){var x__5131__auto__ = offset;
var y__5132__auto__ = (460);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var y__5129__auto__ = (240);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})().toFixed((2));
return adjust_size_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));
} else {
return null;
}
})})})).styleCursor(false).on("dragstart",(function (){
sidebar_el_120024.classList.add("is-resizing");

return el_doc.classList.add("is-resizing-buf");
})).on("dragend",(function (){
sidebar_el_120024.classList.remove("is-resizing");

return el_doc.classList.remove("is-resizing-buf");
}));

return (function (){
return cljs.core.List.EMPTY;
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("span",{'ref':_STAR_el_ref,'className':"left-sidebar-resizer"},[]);
}),null,"frontend.components.container/sidebar-resizer");
frontend.components.container.left_sidebar = rum.core.lazy_build(rum.core.build_defcs,(function (s,p__119962){
var map__119963 = p__119962;
var map__119963__$1 = cljs.core.__destructure_map(map__119963);
var left_sidebar_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119963__$1,new cljs.core.Keyword(null,"left-sidebar-open?","left-sidebar-open?",899591356));
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119963__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var close_fn = (function (){
return frontend.state.set_left_sidebar_open_BANG_(false);
});
var _STAR_closing_QMARK_ = new cljs.core.Keyword("frontend.components.container","closing?","frontend.components.container/closing?",-783814635).cljs$core$IFn$_invoke$arity$1(s);
var _STAR_touch_state = new cljs.core.Keyword("frontend.components.container","touch-state","frontend.components.container/touch-state",-2049636095).cljs$core$IFn$_invoke$arity$1(s);
var _STAR_close_signal = new cljs.core.Keyword("frontend.components.container","close-signal","frontend.components.container/close-signal",-1192524851).cljs$core$IFn$_invoke$arity$1(s);
var enable_whiteboards_QMARK_ = frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$0();
var touch_point_fn = (function (e){
var G__119964 = frontend.components.container.goog$module$goog$object.get(e,"touches");
var G__119964__$1 = (((G__119964 == null))?null:(G__119964[(0)]));
if((G__119964__$1 == null)){
return null;
} else {
return (function (p1__119961_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[p1__119961_SHARP_.clientX,p1__119961_SHARP_.clientY]);
})(G__119964__$1);
}
});
var srs_open_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"srs","srs",1327991978),frontend.state.sub(new cljs.core.Keyword("modal","id","modal/id",-1274892409)));
var touching_x_offset = (function (){var and__5041__auto__ = (function (){var G__119965 = cljs.core.deref(_STAR_touch_state);
if((G__119965 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(G__119965);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
var G__119966 = cljs.core.deref(_STAR_touch_state);
var G__119966__$1 = (((G__119966 == null))?null:cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"before","before",-1633692388))(G__119966));
var G__119966__$2 = (((G__119966__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),G__119966__$1));
if((G__119966__$2 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,G__119966__$2);
}
} else {
return and__5041__auto__;
}
})();
var touch_pending_QMARK_ = (cljs.core.abs(touching_x_offset) > (20));
return daiquiri.core.create_element("div",{'id':"left-sidebar",'onTouchStart':(function (e){
return cljs.core.reset_BANG_(_STAR_touch_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),touch_point_fn(e)], null));
}),'onTouchMove':(function (e){
if(cljs.core.truth_(cljs.core.deref(_STAR_touch_state))){
var G__119967 = _STAR_touch_state;
if((G__119967 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(G__119967,cljs.core.assoc,new cljs.core.Keyword(null,"after","after",594996914),touch_point_fn(e));
}
} else {
return null;
}
}),'onTouchEnd':(function (){
if(touch_pending_QMARK_){
if(((cljs.core.not(left_sidebar_open_QMARK_)) && ((touching_x_offset > (40))))){
frontend.state.set_left_sidebar_open_BANG_(true);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = left_sidebar_open_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (touching_x_offset < (-30));
} else {
return and__5041__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_close_signal,(cljs.core.deref(_STAR_close_signal) + (1)));
} else {
}
}
} else {
}

return cljs.core.reset_BANG_(_STAR_touch_state,null);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__sidebar-left-layout",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"is-closing","is-closing",1975869223),cljs.core.deref(_STAR_closing_QMARK_),new cljs.core.Keyword(null,"is-touching","is-touching",-546912701),touch_pending_QMARK_], null)], null))], null))},[frontend.components.container.sidebar_nav(route_match,close_fn,left_sidebar_open_QMARK_,enable_whiteboards_QMARK_,srs_open_QMARK_,_STAR_closing_QMARK_,cljs.core.deref(_STAR_close_signal),(function (){var and__5041__auto__ = touch_pending_QMARK_;
if(and__5041__auto__){
return touching_x_offset;
} else {
return and__5041__auto__;
}
})()),frontend.components.container.sidebar_resizer()]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.container","closing?","frontend.components.container/closing?",-783814635)),rum.core.local.cljs$core$IFn$_invoke$arity$2((-1),new cljs.core.Keyword("frontend.components.container","close-signal","frontend.components.container/close-signal",-1192524851)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.container","touch-state","frontend.components.container/touch-state",-2049636095))], null),"frontend.components.container/left-sidebar");
frontend.components.container.recording_bar = rum.core.lazy_build(rum.core.build_defc,(function (){
return rum.core.adapt_class_helper(module$node_modules$react_draggable$dist$react_draggable,{'onStart':(function (_event){
var temp__5804__auto__ = (function (){var G__119968 = frontend.state.get_input();
if((G__119968 == null)){
return null;
} else {
return frontend.util.cursor.pos(G__119968);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pos = temp__5804__auto__;
return frontend.state.set_editor_last_pos_BANG_(pos);
} else {
return null;
}
}),'onStop':(function (_event){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","block","editor/block",1699377461),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var G__119969_120025 = block;
var G__119970_120026 = new cljs.core.Keyword(null,"max","max",61366548);
var G__119971_120027 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__119969_120025,G__119970_120026,G__119971_120027) : frontend.handler.editor.edit_block_BANG_.call(null,G__119969_120025,G__119970_120026,G__119971_120027));

var temp__5804__auto____$1 = frontend.state.get_input();
if(cljs.core.truth_(temp__5804__auto____$1)){
var input = temp__5804__auto____$1;
var temp__5804__auto____$2 = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(temp__5804__auto____$2)){
var saved_cursor = temp__5804__auto____$2;
return frontend.util.cursor.move_cursor_to(input,saved_cursor);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})},[daiquiri.core.create_element("div",{'id':"audio-record-toolbar",'style':{'bottom':(cljs.core.deref(frontend.util.keyboard_height) + (45))}},[frontend.mobile.footer.audio_record_cp()])]);
}),null,"frontend.components.container/recording-bar");
frontend.components.container.main = rum.core.lazy_build(rum.core.build_defc,(function (p__119972){
var map__119973 = p__119972;
var map__119973__$1 = cljs.core.__destructure_map(map__119973);
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var margin_less_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"margin-less-pages?","margin-less-pages?",-1770705087));
var route_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"route-name","route-name",-932603717));
var indexeddb_support_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"indexeddb-support?","indexeddb-support?",-1571226476));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var main_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"main-content","main-content",1386726798));
var show_action_bar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"show-action-bar?","show-action-bar?",1936923598));
var show_recording_bar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119973__$1,new cljs.core.Keyword(null,"show-recording-bar?","show-recording-bar?",-1835604479));
var left_sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728));
var onboarding_and_home_QMARK_ = (function (){var and__5041__auto__ = (function (){var or__5043__auto__ = (frontend.state.get_current_repo() == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return (((!(frontend.config.publishing_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),route_name)));
} else {
return and__5041__auto__;
}
})();
var margin_less_pages_QMARK___$1 = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return onboarding_and_home_QMARK_;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return margin_less_pages_QMARK_;
}
})();
return daiquiri.core.create_element("div",{'id':"main-container",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__sidebar-main-layout","flex-1","flex",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-left-sidebar-open","is-left-sidebar-open",-1193752939),left_sidebar_open_QMARK_], null)], null))], null))},[frontend.components.container.left_sidebar(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-sidebar-open?","left-sidebar-open?",899591356),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match], null)),daiquiri.core.create_element("div",{'id':"main-content-container",'tabIndex':"-1",'data-is-margin-less-pages':margin_less_pages_QMARK___$1,'className':"scrollbar-spacing w-full flex justify-center flex-row outline-none relative"},[(cljs.core.truth_(show_action_bar_QMARK_)?frontend.mobile.action_bar.action_bar():null),daiquiri.core.create_element("div",{'data-is-margin-less-pages':margin_less_pages_QMARK___$1,'data-is-full-width':(function (){var or__5043__auto__ = margin_less_pages_QMARK___$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-publishing","my-publishing",227980452),null,new cljs.core.Keyword(null,"all-files","all-files",1120339891),null,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),null], null), null),route_name);
}
})(),'className':"cp__sidebar-main-content"},[(cljs.core.truth_(show_recording_bar_QMARK_)?frontend.components.container.recording_bar():null),frontend.mobile.mobile_bar.mobile_bar(),frontend.mobile.footer.footer(),((((cljs.core.not(frontend.mobile.util.native_platform_QMARK_())) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"page","page",849072397),null], null), null),route_name))))?frontend.components.widgets.demo_graph_alert():null),((cljs.core.not(indexeddb_support_QMARK_))?null:(cljs.core.truth_(db_restoring_QMARK_)?daiquiri.core.create_element("div",{'className':"mt-20"},[(function (){var attrs119974 = frontend.ui.loading.cljs$core$IFn$_invoke$arity$0();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119974))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ls-center"], null)], null),attrs119974], 0))):{'className':"ls-center"}),((cljs.core.map_QMARK_(attrs119974))?null:[daiquiri.interpreter.interpret(attrs119974)]));
})()]):daiquiri.core.create_element("div",{'style':{'marginBottom':(cljs.core.truth_(margin_less_pages_QMARK___$1)?(0):(cljs.core.truth_(onboarding_and_home_QMARK_)?(0):(120)
))},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5043__auto__ = onboarding_and_home_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return margin_less_pages_QMARK___$1;
}
})())?"":frontend.util.hiccup__GT_class("mx-auto.pb-24"))], null))},[daiquiri.interpreter.interpret(main_content)])
)),(cljs.core.truth_(onboarding_and_home_QMARK_)?frontend.components.onboarding.intro(onboarding_and_home_QMARK_):null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var temp__5804__auto___120028 = goog.dom.getElement("app-container");
if(cljs.core.truth_(temp__5804__auto___120028)){
var element_120029 = temp__5804__auto___120028;
cljs_drag_n_drop.core.subscribe_BANG_(element_120029,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),(function (_e,files){
var temp__5804__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
return frontend.handler.editor.upload_asset(id,files,format,frontend.handler.editor._STAR_asset_uploading_QMARK_,true);
} else {
return null;
}
})], null));

frontend.handler.common.listen_to_scroll_BANG_(element_120029);

if(cljs.core.truth_(new cljs.core.Keyword(null,"margin-less-pages?","margin-less-pages?",-1770705087).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))){
(element_120029.scrollTop = (0));
} else {
}
} else {
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5804__auto___120030 = goog.dom.getElement("app-container");
if(cljs.core.truth_(temp__5804__auto___120030)){
var el_120031 = temp__5804__auto___120030;
cljs_drag_n_drop.core.unsubscribe_BANG_(el_120031,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630));
} else {
}

return state;
})], null)], null),"frontend.components.container/main");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.container !== 'undefined') && (typeof frontend.components.container.sidebar_inited_QMARK_ !== 'undefined')){
} else {
frontend.components.container.sidebar_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.container.parsing_progress = rum.core.lazy_build(rum.core.build_defc,(function (state){
var finished = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(state);
var width = Math.round(((finished / total).toFixed((2)) * (100)));
var display_filename = (function (){var G__119975 = new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327).cljs$core$IFn$_invoke$arity$1(state);
var G__119975__$1 = (((G__119975 == null))?null:cljs.core.not_empty(G__119975));
if((G__119975__$1 == null)){
return null;
} else {
return logseq.common.path.filename(G__119975__$1);
}
})();
var left_label = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.font-bold","div.flex.flex-row.font-bold",2116828028),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parsing-files","parsing-files",-565009782)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:flex.flex-row","div.hidden.md:flex.flex-row",-212067351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),": "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-ellipsis-wrapper","div.text-ellipsis-wrapper",-595927398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300)], null)], null),display_filename], null)], null)], null);
return frontend.ui.progress_bar_with_label(width,left_label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(finished),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.container/parsing-progress");
frontend.components.container.main_content = rum.core.lazy_build(rum.core.build_defc,(function (){
var default_home = frontend.components.container.get_default_home_if_valid();
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var loading_files_QMARK_ = (cljs.core.truth_(current_repo)?frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),current_repo], null)):null);
var journals_length = frontend.state.sub(new cljs.core.Keyword(null,"journals-length","journals-length",1463764186));
var latest_journals = (function (){var G__119977 = frontend.state.get_current_repo();
var G__119978 = journals_length;
return (frontend.db.get_latest_journals.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_latest_journals.cljs$core$IFn$_invoke$arity$2(G__119977,G__119978) : frontend.db.get_latest_journals.call(null,G__119977,G__119978));
})();
var graph_parsing_state = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),current_repo], null));
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"graph-loading?","graph-loading?",1136649541).cljs$core$IFn$_invoke$arity$1(graph_parsing_state);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(graph_parsing_state),new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(graph_parsing_state));
}
})())){
return daiquiri.core.create_element("div",{'className':"flex items-center justify-center full-height-without-header"},[daiquiri.core.create_element("div",{'className':"flex-1"},[frontend.components.container.parsing_progress(graph_parsing_state)])]);
} else {
var attrs119976 = (cljs.core.truth_((function (){var and__5041__auto__ = default_home;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),frontend.state.get_current_route());
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not(frontend.state.route_has_p_QMARK_());
if(and__5041__auto____$2){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home)):((((frontend.config.publishing_QMARK_) && (((cljs.core.not(default_home)) && (cljs.core.empty_QMARK_(latest_journals))))))?frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], null)):(cljs.core.truth_(loading_files_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-files","loading-files",-611285064)], 0))):((cljs.core.seq(latest_journals))?frontend.components.journal.journals(latest_journals):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)
))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119976))?daiquiri.interpreter.element_attributes(attrs119976):null),((cljs.core.map_QMARK_(attrs119976))?null:[daiquiri.interpreter.interpret(attrs119976)]));

}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
if(cljs.core.truth_(cljs.core.deref(frontend.components.container.sidebar_inited_QMARK_))){
} else {
var current_repo_120032 = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var default_home_120033 = frontend.components.container.get_default_home_if_valid();
var sidebar_120034 = new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(default_home_120033);
var sidebar_120035__$1 = ((typeof sidebar_120034 === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar_120034], null):sidebar_120034);
var temp__5804__auto___120036 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.seq(sidebar_120035__$1));
if(cljs.core.truth_(temp__5804__auto___120036)){
var pages_120037 = temp__5804__auto___120036;
var seq__119979_120038 = cljs.core.seq(pages_120037);
var chunk__119980_120039 = null;
var count__119981_120040 = (0);
var i__119982_120041 = (0);
while(true){
if((i__119982_120041 < count__119981_120040)){
var page_120042 = chunk__119980_120039.cljs$core$IIndexed$_nth$arity$2(null,i__119982_120041);
var page_120043__$1 = frontend.util.safe_page_name_sanity_lc(page_120042);
var vec__119991_120044 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_120043__$1,"contents"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents",new cljs.core.Keyword(null,"contents","contents",-1567174023)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__119994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_120043__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__119994) : frontend.db.pull.call(null,G__119994));
})()),new cljs.core.Keyword(null,"page","page",849072397)], null));
var db_id_120045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119991_120044,(0),null);
var block_type_120046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119991_120044,(1),null);
frontend.state.sidebar_add_block_BANG_(current_repo_120032,db_id_120045,block_type_120046);


var G__120047 = seq__119979_120038;
var G__120048 = chunk__119980_120039;
var G__120049 = count__119981_120040;
var G__120050 = (i__119982_120041 + (1));
seq__119979_120038 = G__120047;
chunk__119980_120039 = G__120048;
count__119981_120040 = G__120049;
i__119982_120041 = G__120050;
continue;
} else {
var temp__5804__auto___120051__$1 = cljs.core.seq(seq__119979_120038);
if(temp__5804__auto___120051__$1){
var seq__119979_120052__$1 = temp__5804__auto___120051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__119979_120052__$1)){
var c__5565__auto___120053 = cljs.core.chunk_first(seq__119979_120052__$1);
var G__120054 = cljs.core.chunk_rest(seq__119979_120052__$1);
var G__120055 = c__5565__auto___120053;
var G__120056 = cljs.core.count(c__5565__auto___120053);
var G__120057 = (0);
seq__119979_120038 = G__120054;
chunk__119980_120039 = G__120055;
count__119981_120040 = G__120056;
i__119982_120041 = G__120057;
continue;
} else {
var page_120058 = cljs.core.first(seq__119979_120052__$1);
var page_120059__$1 = frontend.util.safe_page_name_sanity_lc(page_120058);
var vec__119995_120060 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_120059__$1,"contents"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents",new cljs.core.Keyword(null,"contents","contents",-1567174023)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__119998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_120059__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__119998) : frontend.db.pull.call(null,G__119998));
})()),new cljs.core.Keyword(null,"page","page",849072397)], null));
var db_id_120061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119995_120060,(0),null);
var block_type_120062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119995_120060,(1),null);
frontend.state.sidebar_add_block_BANG_(current_repo_120032,db_id_120061,block_type_120062);


var G__120063 = cljs.core.next(seq__119979_120052__$1);
var G__120064 = null;
var G__120065 = (0);
var G__120066 = (0);
seq__119979_120038 = G__120063;
chunk__119980_120039 = G__120064;
count__119981_120040 = G__120065;
i__119982_120041 = G__120066;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(frontend.components.container.sidebar_inited_QMARK_,true);
} else {
}
}

if(cljs.core.truth_(frontend.state.mobile_QMARK_())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),true);
} else {
}

return state;
})], null)], null),"frontend.components.container/main-content");
frontend.components.container.hide_context_menu_and_clear_selection = (function frontend$components$container$hide_context_menu_and_clear_selection(e){
frontend.state.hide_custom_context_menu_BANG_();

var block = e.target.closest(".ls-block");
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.components.container.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.util.meta_key_QMARK_(e);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block,e.target);
if(or__5043__auto____$3){
return or__5043__auto____$3;
} else {
return block.contains(e.target);
}
} else {
return and__5041__auto__;
}
}
}
}
})())){
return null;
} else {
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
}
});
frontend.components.container.render_custom_context_menu = rum.core.lazy_build(rum.core.build_defc,(function (links,position){
var ref = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
var el = rum.core.deref(ref);
var map__119999 = frontend.util.calc_delta_rect_offset(el,document.documentElement);
var map__119999__$1 = cljs.core.__destructure_map(map__119999);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119999__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119999__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (el.style.transform = ["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x < (0)))?x:(0))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y < (0)))?(y - (10)):(0))),"px",",0)"].join(''));
}));

return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return frontend.components.container.hide_context_menu_and_clear_selection(e);
}),'className':"menu-backdrop"},[]),daiquiri.core.create_element("div",{'id':"custom-context-menu",'ref':ref,'style':{'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(position)),"px"].join(''),'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(position)),"px"].join('')}},[daiquiri.interpreter.interpret(links)])]);
}),null,"frontend.components.container/render-custom-context-menu");
frontend.components.container.custom_context_menu = rum.core.lazy_build(rum.core.build_defc,(function (){
var show_QMARK_ = frontend.state.sub(new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902));
var links = frontend.state.sub(new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677));
var position = frontend.state.sub(new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423));
if(cljs.core.truth_((function (){var and__5041__auto__ = show_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = links;
if(cljs.core.truth_(and__5041__auto____$1)){
return position;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.components.container.render_custom_context_menu(links,position);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.container/custom-context-menu");
frontend.components.container.new_block_mode = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null)))){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2","div.p-2",-325121057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2","p.mb-2",-1476899286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Document mode"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr-1","div.inline-block.mr-1",803362566),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("editor","new-line","editor/new-line",363787014)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block","p.inline-block",-100331424),"to create new block"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block.mr-1","p.inline-block.mr-1",1865795813),"Click `D` or type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr-1","div.inline-block.mr-1",803362566),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-document-mode","ui/toggle-document-mode",-1556999601)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block","p.inline-block",-100331424),"to toggle document mode"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block.px-1.text-sm.font-medium.bg-base-2.rounded-md.mx-2","a.block.px-1.text-sm.font-medium.bg-base-2.rounded-md.mx-2",700721131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.toggle_document_mode_BANG_], null),"D"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.container/new-block-mode");
frontend.components.container.help_menu_items = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Handbook",new cljs.core.Keyword(null,"icon","icon",1679606541),"book-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.handbooks.toggle_handbooks();
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Keyboard shortcuts",new cljs.core.Keyword(null,"icon","icon",1679606541),"command",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"shortcut-settings",new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Documentation",new cljs.core.Keyword(null,"icon","icon",1679606541),"help",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/"], null),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Report bug",new cljs.core.Keyword(null,"icon","icon",1679606541),"bug",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bug-report","bug-report",-903169180));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Request feature",new cljs.core.Keyword(null,"icon","icon",1679606541),"git-pull-request",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/c/feedback/feature-requests/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Submit feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"messages",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/c/feedback/13"], null),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Ask the community",new cljs.core.Keyword(null,"icon","icon",1679606541),"brand-discord",new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.com/invite/KpN4eHY"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Support forum",new cljs.core.Keyword(null,"icon","icon",1679606541),"message",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com/"], null),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Release notes",new cljs.core.Keyword(null,"icon","icon",1679606541),"asterisk",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/#/page/changelog"], null)], null);
frontend.components.container.help_menu_popup = rum.core.lazy_build(rum.core.build_defc,(function (){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058),false);
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var h = (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),false);
});
document.body.addEventListener("click",h);

return (function (){
return document.body.removeEventListener("click",h);
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'className':"cp__sidebar-help-menu-popup"},[daiquiri.core.create_element("div",{'className':"list-wrap"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$container$iter__120000(s__120001){
return (new cljs.core.LazySeq(null,(function (){
var s__120001__$1 = s__120001;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__120001__$1);
if(temp__5804__auto__){
var s__120001__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__120001__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__120001__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__120003 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__120002 = (0);
while(true){
if((i__120002 < size__5519__auto__)){
var vec__120004 = cljs.core._nth(c__5518__auto__,i__120002);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120004,(0),null);
var map__120007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120004,(1),null);
var map__120007__$1 = cljs.core.__destructure_map(map__120007);
var item = map__120007__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120007__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120007__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120007__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120007__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.chunk_append(b__120003,(function (){var G__120008 = item;
var G__120008__$1 = (((G__120008 instanceof cljs.core.Keyword))?G__120008.fqn:null);
switch (G__120008__$1) {
case "hr":
return daiquiri.core.create_element("hr",{'key':idx,'className':"my-2"},[]);

break;
default:
return daiquiri.core.create_element("a",{'key':title,'onClick':((function (i__120002,G__120008,G__120008__$1,vec__120004,idx,map__120007,map__120007__$1,item,title,icon,href,on_click,c__5518__auto__,size__5519__auto__,b__120003,s__120001__$2,temp__5804__auto__){
return (function (){
if(cljs.core.fn_QMARK_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
if(typeof href === 'string'){
frontend.util.open_url(href);
} else {
}
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),false);
});})(i__120002,G__120008,G__120008__$1,vec__120004,idx,map__120007,map__120007__$1,item,title,icon,href,on_click,c__5518__auto__,size__5519__auto__,b__120003,s__120001__$2,temp__5804__auto__))
,'className':"it flex items-center px-4 py-1 select-none"},[(function (){var attrs120009 = frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs120009))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","pr-2","opacity-40"], null)], null),attrs120009], 0))):{'className':"flex items-center pr-2 opacity-40"}),((cljs.core.map_QMARK_(attrs120009))?null:[daiquiri.interpreter.interpret(attrs120009)]));
})(),(function (){var attrs120010 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs120010))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-normal"], null)], null),attrs120010], 0))):{'className':"font-normal"}),((cljs.core.map_QMARK_(attrs120010))?null:[daiquiri.interpreter.interpret(attrs120010)]));
})()]);

}
})());

var G__120068 = (i__120002 + (1));
i__120002 = G__120068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__120003),frontend$components$container$iter__120000(cljs.core.chunk_rest(s__120001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__120003),null);
}
} else {
var vec__120011 = cljs.core.first(s__120001__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120011,(0),null);
var map__120014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120011,(1),null);
var map__120014__$1 = cljs.core.__destructure_map(map__120014);
var item = map__120014__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120014__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120014__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120014__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120014__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.cons((function (){var G__120015 = item;
var G__120015__$1 = (((G__120015 instanceof cljs.core.Keyword))?G__120015.fqn:null);
switch (G__120015__$1) {
case "hr":
return daiquiri.core.create_element("hr",{'key':idx,'className':"my-2"},[]);

break;
default:
return daiquiri.core.create_element("a",{'key':title,'onClick':((function (G__120015,G__120015__$1,vec__120011,idx,map__120014,map__120014__$1,item,title,icon,href,on_click,s__120001__$2,temp__5804__auto__){
return (function (){
if(cljs.core.fn_QMARK_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
if(typeof href === 'string'){
frontend.util.open_url(href);
} else {
}
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),false);
});})(G__120015,G__120015__$1,vec__120011,idx,map__120014,map__120014__$1,item,title,icon,href,on_click,s__120001__$2,temp__5804__auto__))
,'className':"it flex items-center px-4 py-1 select-none"},[(function (){var attrs120009 = frontend.ui.icon(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs120009))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","pr-2","opacity-40"], null)], null),attrs120009], 0))):{'className':"flex items-center pr-2 opacity-40"}),((cljs.core.map_QMARK_(attrs120009))?null:[daiquiri.interpreter.interpret(attrs120009)]));
})(),(function (){var attrs120010 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs120010))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-normal"], null)], null),attrs120010], 0))):{'className':"font-normal"}),((cljs.core.map_QMARK_(attrs120010))?null:[daiquiri.interpreter.interpret(attrs120010)]));
})()]);

}
})(),frontend$components$container$iter__120000(cljs.core.rest(s__120001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(frontend.components.container.help_menu_items));
})())]),daiquiri.core.create_element("div",{'className':"ft pl-11 pb-3"},[daiquiri.core.create_element("span",{'className':"opacity text-xs opacity-30"},["Logseq ",frontend.version.version])])]);
}),null,"frontend.components.container/help-menu-popup");
frontend.components.container.help_button = rum.core.lazy_build(rum.core.build_defc,(function (){
var help_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612));
var handbooks_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'className':"cp__sidebar-help-btn"},[daiquiri.core.create_element("div",{'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"help-shortcut-title","help-shortcut-title",-410057505)], 0)),'onClick':(function (){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612));
}),'className':"inner"},[daiquiri.core.create_element("svg",{'stroke':"currentColor",'fill':"none",'width':"24",'viewbox':"0 0 24 24",'xmlns':"http://www.w3.org/2000/svg",'className':"scale-125 icon icon-tabler icon-tabler-help-small",'strokeWidth':"2",'strokeLinejoin':"round",'strokeLinecap':"round",'height':"24"},[daiquiri.core.create_element("path",{'stroke':"none",'d':"M0 0h24v24H0z",'fill':"none"},null),daiquiri.core.create_element("path",{'d':"M12 16v.01"},null),daiquiri.core.create_element("path",{'d':"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"},null)])])]),(cljs.core.truth_(help_open_QMARK_)?frontend.components.container.help_menu_popup():null),(cljs.core.truth_(handbooks_open_QMARK_)?frontend.components.handbooks.handbooks_popup():null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.container/help-button");
frontend.components.container.sidebar = rum.core.lazy_build(rum.core.build_defcs,(function (state,route_match,main_content){
var map__120018 = state;
var map__120018__$1 = cljs.core.__destructure_map(map__120018);
var open_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120018__$1,new cljs.core.Keyword(null,"open-fn","open-fn",1265855718));
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var granted_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),frontend.state.get_current_repo()], null));
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var accent_color = (function (){var G__120019 = frontend.state.sub(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));
if((G__120019 == null)){
return null;
} else {
return cljs.core.name(G__120019);
}
})();
var system_theme_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822));
var light_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("light",frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)));
var sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887));
var settings_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343));
var left_sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728));
var wide_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061));
var ls_block_hl_colored_QMARK_ = frontend.state.sub(new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626));
var onboarding_state = frontend.state.sub(new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833));
var right_sidebar_blocks = frontend.state.sub_right_sidebar_blocks();
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var margin_less_pages_QMARK_ = cljs.core.boolean$((function (){var fexpr__120020 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__120020.cljs$core$IFn$_invoke$arity$1 ? fexpr__120020.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__120020.call(null,route_name));
})());
var db_restoring_QMARK_ = frontend.state.sub(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233));
var indexeddb_support_QMARK_ = frontend.state.sub(new cljs.core.Keyword("indexeddb","support?","indexeddb/support?",114020185));
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),route_name);
var home_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),route_name);
var native_titlebar_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142)], null));
var window_controls_QMARK_ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(frontend.util.mac_QMARK_)) && (cljs.core.not(native_titlebar_QMARK_)));
} else {
return and__5041__auto__;
}
})();
var edit_QMARK_ = new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var default_home = frontend.components.container.get_default_home_if_valid();
var logged_QMARK_ = frontend.handler.user.logged_in_QMARK_();
var fold_button_on_right_QMARK_ = frontend.state.enable_fold_button_right_QMARK_();
var show_action_bar_QMARK_ = frontend.state.sub(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440));
var show_recording_bar_QMARK_ = frontend.state.sub(new cljs.core.Keyword("mobile","show-recording-bar?","mobile/show-recording-bar?",-758548785));
var preferred_language = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
return frontend.components.theme.container(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onboarding-state","onboarding-state",2059697923),new cljs.core.Keyword(null,"current-repo","current-repo",134812359),new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),new cljs.core.Keyword(null,"sidebar-blocks-len","sidebar-blocks-len",235708585),new cljs.core.Keyword(null,"accent-color","accent-color",908336425),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"edit?","edit?",-842131310),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"system-theme?","system-theme?",1330394234),new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467)],[onboarding_state,current_repo,db_restoring_QMARK_,cljs.core.count(right_sidebar_blocks),accent_color,route_match,(function (e){
frontend.handler.editor.unhighlight_blocks_BANG_();

return frontend.util.fix_open_external_with_shift_BANG_(e);
}),theme,edit_QMARK_,preferred_language,granted_QMARK_,frontend.context.i18n.t,system_theme_QMARK_,settings_open_QMARK_,sidebar_open_QMARK_]),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.theme-inner","main.theme-inner",1586599475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ls-left-sidebar-open","ls-left-sidebar-open",-1583098913),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"ls-right-sidebar-open","ls-right-sidebar-open",2065397740),sidebar_open_QMARK_,new cljs.core.Keyword(null,"ls-wide-mode","ls-wide-mode",1888272579),wide_mode_QMARK_,new cljs.core.Keyword(null,"ls-window-controls","ls-window-controls",17376007),window_controls_QMARK_,new cljs.core.Keyword(null,"ls-fold-button-on-right","ls-fold-button-on-right",-1787568911),fold_button_on_right_QMARK_,new cljs.core.Keyword(null,"ls-hl-colored","ls-hl-colored",1822824926),ls_block_hl_colored_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#skip-to-main","button#skip-to-main",-1395479666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.ui.focus_element(frontend.ui.main_node());
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
return frontend.ui.focus_element(frontend.ui.main_node());
} else {
return null;
}
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("accessibility","skip-to-main-content","accessibility/skip-to-main-content",-1231891104)], 0))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.#app-container","div.#app-container",-2087174968),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-container","div#left-container",1782073488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))?"overflow-hidden":"w-full")], null),frontend.components.header.header(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"open-fn","open-fn",1265855718),open_fn,new cljs.core.Keyword(null,"light?","light?",1454164744),light_QMARK_,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"logged?","logged?",-814149905),logged_QMARK_,new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match,new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home,new cljs.core.Keyword(null,"new-block-mode","new-block-mode",1189333509),frontend.components.container.new_block_mode], null)),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.find_in_page.search():null),frontend.components.container.main(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"show-recording-bar?","show-recording-bar?",-1835604479),new cljs.core.Keyword(null,"margin-less-pages?","margin-less-pages?",-1770705087),new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),new cljs.core.Keyword(null,"light?","light?",1454164744),new cljs.core.Keyword(null,"main-content","main-content",1386726798),new cljs.core.Keyword(null,"show-action-bar?","show-action-bar?",1936923598),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"logged?","logged?",-814149905),new cljs.core.Keyword(null,"indexeddb-support?","indexeddb-support?",-1571226476),new cljs.core.Keyword(null,"home?","home?",806196596),new cljs.core.Keyword(null,"route-name","route-name",-932603717)],[show_recording_bar_QMARK_,margin_less_pages_QMARK_,db_restoring_QMARK_,light_QMARK_,main_content,show_action_bar_QMARK_,route_match,logged_QMARK_,indexeddb_support_QMARK_,home_QMARK_,route_name]))], null),(cljs.core.truth_(window_controls_QMARK_)?frontend.components.window_controls.container():null),frontend.components.right_sidebar.sidebar(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-single-container","div#app-single-container",-126204141)], null)], null),frontend.ui.notification(),frontend.ui.modal(),frontend.ui.sub_modal(),logseq.shui.toaster.core.install_toaster(),logseq.shui.dialog.core.install_modals(),frontend.components.select.select_modal(),frontend.components.container.custom_context_menu(),frontend.components.plugins.custom_js_installer(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328),granted_QMARK_,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),db_restoring_QMARK_], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download.hidden","a#download.hidden",2057981313)], null),((((cljs.core.not(frontend.config.mobile_QMARK_)) && ((!(frontend.config.publishing_QMARK_)))))?frontend.components.container.help_button():null)], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.modal(new cljs.core.Keyword("modal","show?","modal/show?",1441869594)),rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
frontend.mixins.listen(state,window,"click",frontend.components.container.hide_context_menu_and_clear_selection);

return frontend.mixins.listen(state,window,"keydown",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.modal_opened_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not((function (){var and__5041__auto____$1 = frontend.util.node_test_QMARK_;
if(and__5041__auto____$1){
return new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
} else {
return and__5041__auto____$1;
}
})());
} else {
return and__5041__auto__;
}
})())){
return frontend.state.close_modal_BANG_();
} else {
return frontend.components.container.hide_context_menu_and_clear_selection(e);
}
} else {
return null;
}
}));
}))], null),"frontend.components.container/sidebar");

//# sourceMappingURL=frontend.components.container.js.map
